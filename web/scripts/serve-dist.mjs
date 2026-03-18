import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";

const MIME_TYPES = {
  html: "text/html; charset=utf-8",
  htm: "text/html; charset=utf-8",
  css: "text/css; charset=utf-8",
  js: "application/javascript; charset=utf-8",
  mjs: "application/javascript; charset=utf-8",
  json: "application/json; charset=utf-8",
  xml: "application/xml; charset=utf-8",
  svg: "image/svg+xml",
  txt: "text/plain; charset=utf-8",
  csv: "text/csv; charset=utf-8",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  ico: "image/vnd.microsoft.icon",
  pdf: "application/pdf",
  map: "application/json; charset=utf-8",
};

function parseArgs() {
  const args = process.argv.slice(2);
  const options = { host: "127.0.0.1", port: 4321, dir: "dist" };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--host" || arg === "-h") {
      options.host = args[++i] ?? options.host;
      continue;
    }
    if (arg === "--port" || arg === "-p") {
      const value = args[++i];
      options.port = value ? Number(value) || options.port : options.port;
      continue;
    }
    if (arg === "--dir" || arg === "-d") {
      options.dir = args[++i] ?? options.dir;
      continue;
    }
    if (arg === "--help" || arg === "-?" || arg === "-help") {
      console.log(
        "Usage: node scripts/serve-dist.mjs [--host <host>] [--port <port>] [--dir <directory>]"
      );
      process.exit(0);
    }
    console.warn(`[serve-dist] ignoring unknown argument: ${arg}`);
  }

  return options;
}

function lookupMimeType(filename) {
  const extension = path.extname(filename).slice(1).toLowerCase();
  return MIME_TYPES[extension] ?? "application/octet-stream";
}

function send404(res) {
  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not found");
}

function send500(res) {
  res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Internal server error");
}

async function createServer(options) {
  const rootPath = path.resolve(options.dir);
  const rootStats = await stat(rootPath);
  if (!rootStats.isDirectory()) {
    throw new Error(`Dist path is not a directory: ${rootPath}`);
  }

  return http.createServer(async (req, res) => {
    if (!req.url) {
      send404(res);
      return;
    }

    const base = `http://${options.host}`;
    const requestUrl = new URL(req.url, base);
    let pathname;
    try {
      pathname = decodeURIComponent(requestUrl.pathname);
    } catch (error) {
      send500(res);
      console.error("[serve-dist] failed to decode pathname", error);
      return;
    }

    const normalized = pathname.startsWith("/") ? pathname.slice(1) : pathname;
    const safePath = path.resolve(rootPath, normalized);
    if (!safePath.startsWith(rootPath)) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    let bodyPath = safePath;
    let stats;
    try {
      stats = await stat(bodyPath);
    } catch (error) {
      if (error.code === "ENOENT") {
        send404(res);
        return;
      }
      console.error("[serve-dist] stat error", error);
      send500(res);
      return;
    }

    if (stats.isDirectory()) {
      bodyPath = path.join(bodyPath, "index.html");
      try {
        stats = await stat(bodyPath);
      } catch (error) {
        if (error.code === "ENOENT") {
          send404(res);
          return;
        }
        console.error("[serve-dist] index stat error", error);
        send500(res);
        return;
      }
    }

    const mimeType = lookupMimeType(bodyPath);
    res.writeHead(200, {
      "Content-Type": mimeType,
      "Content-Length": stats.size,
    });

    if (req.method === "HEAD") {
      res.end();
      return;
    }

    const stream = createReadStream(bodyPath);
    stream.on("error", (error) => {
      console.error("[serve-dist] stream error", error);
      if (!res.headersSent) {
        send500(res);
      }
    });
    stream.pipe(res);
  });
}

async function main() {
  const options = parseArgs();
  const server = await createServer(options);
  server.on("error", (error) => {
    console.error("[serve-dist] server error", error);
    process.exit(1);
  });

  server.listen(options.port, options.host, () => {
    console.log(
      `[serve-dist] serving ${options.dir} at http://${options.host}:${options.port}/`
    );
  });

  const shutdown = () => {
    server.close(() => process.exit(0));
  };
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

main().catch((error) => {
  console.error("[serve-dist] fatal error", error);
  process.exit(1);
});
