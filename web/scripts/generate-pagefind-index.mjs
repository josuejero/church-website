import path from "node:path";
import { promises as fs } from "node:fs";
import { close, createIndex } from "pagefind";

const distDir = path.resolve("dist");
const outputDir = path.join(distDir, "pagefind");

async function ensureDistDirectory() {
  const stats = await fs.stat(distDir).catch(() => null);
  if (!stats || !stats.isDirectory()) {
    throw new Error(
      "`dist/` is missing. Run `npm run astro -- build` before generating the Pagefind index."
    );
  }
}

async function main() {
  await ensureDistDirectory();

  console.log(`Generating Pagefind index from ${distDir}`);

  const { index } = await createIndex();
  if (!index) {
    throw new Error("Pagefind did not return an index instance.");
  }

  try {
    const { page_count: pageCount, errors: indexingErrors } = await index.addDirectory({
      path: distDir,
    });
    if (indexingErrors.length) {
      throw new Error(
        `Pagefind failed to index directory: ${indexingErrors.join("; ")}`
      );
    }

    await fs.rm(outputDir, { recursive: true, force: true });

    const { outputPath, errors: writeErrors } = await index.writeFiles({
      outputPath: outputDir,
    });
    if (writeErrors.length) {
      throw new Error(`Pagefind failed to write files: ${writeErrors.join("; ")}`);
    }

    console.log(
      `Pagefind indexed ${pageCount ?? 0} page(s) and wrote files to ${outputPath}`
    );
  } finally {
    await close();
  }
}

await main();
