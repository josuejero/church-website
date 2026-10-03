import fs from "node:fs/promises";
import { LinkChecker } from "linkinator";

const configUrl = new URL("../linkinator.config.json", import.meta.url);
const config = JSON.parse(await fs.readFile(configUrl, "utf8"));

const { skip = [], ...apiConfig } = config;
const linksToSkip = Array.isArray(skip) ? skip : [skip];

const siteUrl = new URL(
  process.env.PUBLIC_SITE_URL ?? "http://127.0.0.1:4321",
);

const localHosts = new Set(["localhost", "127.0.0.1", "[::1]", "::1"]);

if (!localHosts.has(siteUrl.hostname)) {
  throw new Error(
    `PUBLIC_SITE_URL must use a local host for link validation; received ${siteUrl.hostname}`,
  );
}

const port = siteUrl.port
  ? Number(siteUrl.port)
  : siteUrl.protocol === "https:"
    ? 443
    : 80;

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error(`Invalid Linkinator port derived from PUBLIC_SITE_URL: ${port}`);
}

const checker = new LinkChecker();

const result = await checker.check({
  ...apiConfig,
  path: "./dist",
  linksToSkip,
  port,
});

const broken = result.links.filter((item) => item.state === "BROKEN");

const uniqueBroken = [
  ...new Map(
    broken.map((item) => [`${item.status}:${item.url}`, item]),
  ).values(),
];

if (uniqueBroken.length > 0) {
  console.error("Broken links:");

  for (const item of uniqueBroken) {
    console.error(`[${item.status}] ${item.url}`);
  }
}

console.log(`Scanned ${result.links.length} links.`);
console.log(
  `Detected ${broken.length} broken links (${uniqueBroken.length} unique).`,
);

process.exitCode = result.passed ? 0 : 1;
