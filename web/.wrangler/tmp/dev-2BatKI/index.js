var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a2, b) => (typeof require !== "undefined" ? require : a2)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance2;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e2) => e2.name !== markName) : this._entries.filter((e2) => e2.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e2) => e2.name !== measureName) : this._entries.filter((e2) => e2.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e2) => e2.entryType !== "resource" || e2.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e2) => e2.name === name && (!type || e2.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e2) => e2.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance2 = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance2;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, isWorkerdProcessV2, unenvProcess, exit, features, platform, env, hrtime3, nextTick, _channel, _disconnect, _events, _eventsCount, _handleQueue, _maxListeners, _pendingMessage, _send, assert2, disconnect, mainModule, _debugEnd, _debugProcess, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _linkedBinding, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, dlopen, domain, emit, emitWarning, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, initgroups, kill, listenerCount, listeners, loadEnvFile, memoryUsage, moduleLoadList, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    isWorkerdProcessV2 = globalThis.Cloudflare.compatibilityFlags.enable_nodejs_process_v2;
    unenvProcess = new Process({
      env: globalProcess.env,
      // `hrtime` is only available from workerd process v2
      hrtime: isWorkerdProcessV2 ? workerdProcess.hrtime : hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      env: (
        // Always implemented by workerd
        env
      ),
      hrtime: (
        // Only implemented in workerd v2
        hrtime3
      ),
      nextTick: (
        // Always implemented by workerd
        nextTick
      )
    } = unenvProcess);
    ({
      _channel,
      _disconnect,
      _events,
      _eventsCount,
      _handleQueue,
      _maxListeners,
      _pendingMessage,
      _send,
      assert: assert2,
      disconnect,
      mainModule
    } = unenvProcess);
    ({
      _debugEnd: (
        // @ts-expect-error `_debugEnd` is missing typings
        _debugEnd
      ),
      _debugProcess: (
        // @ts-expect-error `_debugProcess` is missing typings
        _debugProcess
      ),
      _exiting: (
        // @ts-expect-error `_exiting` is missing typings
        _exiting
      ),
      _fatalException: (
        // @ts-expect-error `_fatalException` is missing typings
        _fatalException
      ),
      _getActiveHandles: (
        // @ts-expect-error `_getActiveHandles` is missing typings
        _getActiveHandles
      ),
      _getActiveRequests: (
        // @ts-expect-error `_getActiveRequests` is missing typings
        _getActiveRequests
      ),
      _kill: (
        // @ts-expect-error `_kill` is missing typings
        _kill
      ),
      _linkedBinding: (
        // @ts-expect-error `_linkedBinding` is missing typings
        _linkedBinding
      ),
      _preload_modules: (
        // @ts-expect-error `_preload_modules` is missing typings
        _preload_modules
      ),
      _rawDebug: (
        // @ts-expect-error `_rawDebug` is missing typings
        _rawDebug
      ),
      _startProfilerIdleNotifier: (
        // @ts-expect-error `_startProfilerIdleNotifier` is missing typings
        _startProfilerIdleNotifier
      ),
      _stopProfilerIdleNotifier: (
        // @ts-expect-error `_stopProfilerIdleNotifier` is missing typings
        _stopProfilerIdleNotifier
      ),
      _tickCallback: (
        // @ts-expect-error `_tickCallback` is missing typings
        _tickCallback
      ),
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      availableMemory,
      binding: (
        // @ts-expect-error `binding` is missing typings
        binding
      ),
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      domain: (
        // @ts-expect-error `domain` is missing typings
        domain
      ),
      emit,
      emitWarning,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      initgroups: (
        // @ts-expect-error `initgroups` is missing typings
        initgroups
      ),
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      memoryUsage,
      moduleLoadList: (
        // @ts-expect-error `moduleLoadList` is missing typings
        moduleLoadList
      ),
      off,
      on,
      once,
      openStdin: (
        // @ts-expect-error `openStdin` is missing typings
        openStdin
      ),
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit: (
        // @ts-expect-error `reallyExit` is missing typings
        reallyExit
      ),
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = isWorkerdProcessV2 ? workerdProcess : unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// dist/_worker.js/chunks/astro/server_37mFo7XU.mjs
function normalizeLF(e2) {
  return e2.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function codeFrame(e2, t2) {
  if (!t2 || void 0 === t2.line || void 0 === t2.column) return "";
  const r2 = normalizeLF(e2).split("\n").map((e3) => e3.replace(/\t/g, "  ")), n2 = [];
  for (let e3 = -2; e3 <= 2; e3++) r2[t2.line + e3] && n2.push(t2.line + e3);
  let s2 = 0;
  for (const e3 of n2) {
    let t3 = `> ${e3}`;
    t3.length > s2 && (s2 = t3.length);
  }
  let a2 = "";
  for (const e3 of n2) {
    const n3 = e3 === t2.line - 1;
    a2 += n3 ? "> " : "  ", a2 += `${e3 + 1} | ${r2[e3]}
`, n3 && (a2 += `${Array.from({ length: s2 }).join(" ")}  | ${Array.from({ length: t2.column }).join(" ")}^
`);
  }
  return a2;
}
function validateArgs(e2) {
  return 3 === e2.length && !(!e2[0] || "object" != typeof e2[0]);
}
function baseCreateComponent(e2, t2, r2) {
  const n2 = t2?.split("/").pop()?.replace(".astro", "") ?? "", s2 = /* @__PURE__ */ __name((...t3) => {
    if (!validateArgs(t3)) throw new AstroError({ ...InvalidComponentArgs, message: InvalidComponentArgs.message(n2) });
    return e2(...t3);
  }, "s");
  return Object.defineProperty(s2, "name", { value: n2, writable: false }), s2.isAstroComponentFactory = true, s2.moduleId = t2, s2.propagation = r2, s2;
}
function createComponentWithOptions(e2) {
  return baseCreateComponent(e2.factory, e2.moduleId, e2.propagation);
}
function createComponent(e2, t2, r2) {
  return "function" == typeof e2 ? baseCreateComponent(e2, t2, r2) : createComponentWithOptions(e2);
}
function createAstroGlobFn() {
  return (e2) => {
    if (console.warn("Astro.glob is deprecated and will be removed in a future major version of Astro.\nUse import.meta.glob instead: https://vitejs.dev/guide/features.html#glob-import"), "string" == typeof e2) throw new AstroError({ ...AstroGlobUsedOutside, message: AstroGlobUsedOutside.message(JSON.stringify(e2)) });
    let t2 = [...Object.values(e2)];
    if (0 === t2.length) throw new AstroError({ ...AstroGlobNoMatch, message: AstroGlobNoMatch.message(JSON.stringify(e2)) });
    return Promise.all(t2.map((e3) => e3()));
  };
}
function createAstro(e2) {
  return { site: new URL(e2), generator: "Astro v5.16.6", glob: createAstroGlobFn() };
}
async function renderEndpoint(e2, t2, r2, n2) {
  const { request: a2, url: o2 } = t2, i2 = a2.method.toUpperCase();
  let d = e2[i2] ?? e2.ALL;
  if (!d && "HEAD" === i2 && e2.GET && (d = e2.GET), r2 && !["GET", "HEAD"].includes(i2) && n2.warn("router", `${o2.pathname} ${s.bold(i2)} requests are not available in static endpoints. Mark this page as server-rendered (\`export const prerender = false;\`) or update your config to \`output: 'server'\` to make all your pages server-rendered by default.`), void 0 === d) return n2.warn("router", `No API Route handler exists for the method "${i2}" for the route "${o2.pathname}".
Found handlers: ${Object.keys(e2).map((e3) => JSON.stringify(e3)).join(", ")}
` + ("all" in e2 ? `One of the exported handlers is "all" (lowercase), did you mean to export 'ALL'?
` : "")), new Response(null, { status: 404 });
  if ("function" != typeof d) return n2.error("router", `The route "${o2.pathname}" exports a value for the method "${i2}", but it is of the type ${typeof d} instead of a function.`), new Response(null, { status: 500 });
  let c = await d.call(e2, t2);
  if (!c || c instanceof Response == false) throw new AstroError(EndpointDidNotReturnAResponse);
  if (REROUTABLE_STATUS_CODES.includes(c.status)) try {
    c.headers.set("X-Astro-Reroute", "no");
  } catch (e3) {
    if (!e3.message?.includes("immutable")) throw e3;
    c = new Response(c.body, c), c.headers.set("X-Astro-Reroute", "no");
  }
  return "HEAD" === i2 ? new Response(null, c) : c;
}
function isPromise(e2) {
  return !!e2 && "object" == typeof e2 && "then" in e2 && "function" == typeof e2.then;
}
async function* streamAsyncIterator(e2) {
  const t2 = e2.getReader();
  try {
    for (; ; ) {
      const { done: e3, value: r2 } = await t2.read();
      if (e3) return;
      yield r2;
    }
  } finally {
    t2.releaseLock();
  }
}
function isHTMLString(e2) {
  return "[object HTMLString]" === Object.prototype.toString.call(e2);
}
function markHTMLBytes(e2) {
  return new HTMLBytes(e2);
}
function hasGetReader(e2) {
  return "function" == typeof e2.getReader;
}
async function* unescapeChunksAsync(e2) {
  if (hasGetReader(e2)) for await (const t2 of streamAsyncIterator(e2)) yield unescapeHTML(t2);
  else for await (const t2 of e2) yield unescapeHTML(t2);
}
function* unescapeChunks(e2) {
  for (const t2 of e2) yield unescapeHTML(t2);
}
function unescapeHTML(e2) {
  if (e2 && "object" == typeof e2) {
    if (e2 instanceof Uint8Array) return markHTMLBytes(e2);
    if (e2 instanceof Response && e2.body) {
      return unescapeChunksAsync(e2.body);
    }
    if ("function" == typeof e2.then) return Promise.resolve(e2).then((e3) => unescapeHTML(e3));
    if (e2[Symbol.for("astro:slot-string")]) return e2;
    if (Symbol.iterator in e2) return unescapeChunks(e2);
    if (Symbol.asyncIterator in e2 || hasGetReader(e2)) return unescapeChunksAsync(e2);
  }
  return markHTMLString(e2);
}
function isAstroComponentFactory(e2) {
  return null != e2 && true === e2.isAstroComponentFactory;
}
function isAPropagatingComponent(e2, t2) {
  const r2 = getPropagationHint(e2, t2);
  return "in-tree" === r2 || "self" === r2;
}
function getPropagationHint(e2, t2) {
  let r2 = t2.propagation || "none";
  return t2.moduleId && e2.componentMetadata.has(t2.moduleId) && "none" === r2 && (r2 = e2.componentMetadata.get(t2.moduleId).propagation), r2;
}
function r(e2) {
  var t2, n2, s2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) s2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var a2 = e2.length;
    for (t2 = 0; t2 < a2; t2++) e2[t2] && (n2 = r(e2[t2])) && (s2 && (s2 += " "), s2 += n2);
  } else for (n2 in e2) e2[n2] && (s2 && (s2 += " "), s2 += n2);
  return s2;
}
function clsx() {
  for (var e2, t2, n2 = 0, s2 = "", a2 = arguments.length; n2 < a2; n2++) (e2 = arguments[n2]) && (t2 = r(e2)) && (s2 && (s2 += " "), s2 += t2);
  return s2;
}
function serializeArray(e2, t2 = {}, r2 = /* @__PURE__ */ new WeakSet()) {
  if (r2.has(e2)) throw new Error(`Cyclic reference detected while serializing props for <${t2.displayName} client:${t2.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  r2.add(e2);
  const n2 = e2.map((e3) => convertToSerializedForm(e3, t2, r2));
  return r2.delete(e2), n2;
}
function serializeObject(e2, t2 = {}, r2 = /* @__PURE__ */ new WeakSet()) {
  if (r2.has(e2)) throw new Error(`Cyclic reference detected while serializing props for <${t2.displayName} client:${t2.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  r2.add(e2);
  const n2 = Object.fromEntries(Object.entries(e2).map(([e3, n3]) => [e3, convertToSerializedForm(n3, t2, r2)]));
  return r2.delete(e2), n2;
}
function convertToSerializedForm(e2, t2 = {}, r2 = /* @__PURE__ */ new WeakSet()) {
  switch (Object.prototype.toString.call(e2)) {
    case "[object Date]":
      return [PROP_TYPE.Date, e2.toISOString()];
    case "[object RegExp]":
      return [PROP_TYPE.RegExp, e2.source];
    case "[object Map]":
      return [PROP_TYPE.Map, serializeArray(Array.from(e2), t2, r2)];
    case "[object Set]":
      return [PROP_TYPE.Set, serializeArray(Array.from(e2), t2, r2)];
    case "[object BigInt]":
      return [PROP_TYPE.BigInt, e2.toString()];
    case "[object URL]":
      return [PROP_TYPE.URL, e2.toString()];
    case "[object Array]":
      return [PROP_TYPE.JSON, serializeArray(e2, t2, r2)];
    case "[object Uint8Array]":
      return [PROP_TYPE.Uint8Array, Array.from(e2)];
    case "[object Uint16Array]":
      return [PROP_TYPE.Uint16Array, Array.from(e2)];
    case "[object Uint32Array]":
      return [PROP_TYPE.Uint32Array, Array.from(e2)];
    default:
      return null !== e2 && "object" == typeof e2 ? [PROP_TYPE.Value, serializeObject(e2, t2, r2)] : e2 === 1 / 0 ? [PROP_TYPE.Infinity, 1] : e2 === -1 / 0 ? [PROP_TYPE.Infinity, -1] : void 0 === e2 ? [PROP_TYPE.Value] : [PROP_TYPE.Value, e2];
  }
}
function serializeProps(e2, t2) {
  return JSON.stringify(serializeObject(e2, t2));
}
function extractDirectives(e2, t2) {
  let r2 = { isPage: false, hydration: null, props: {}, propsWithoutTransitionAttributes: {} };
  for (const [n2, s2] of Object.entries(e2)) if (n2.startsWith("server:") && "server:root" === n2 && (r2.isPage = true), n2.startsWith("client:")) switch (r2.hydration || (r2.hydration = { directive: "", value: "", componentUrl: "", componentExport: { value: "" } }), n2) {
    case "client:component-path":
      r2.hydration.componentUrl = s2;
      break;
    case "client:component-export":
      r2.hydration.componentExport.value = s2;
      break;
    case "client:component-hydration":
    case "client:display-name":
      break;
    default:
      if (r2.hydration.directive = n2.split(":")[1], r2.hydration.value = s2, !t2.has(r2.hydration.directive)) {
        const e3 = Array.from(t2.keys()).map((e4) => `client:${e4}`).join(", ");
        throw new Error(`Error: invalid hydration directive "${n2}". Supported hydration methods: ${e3}`);
      }
      if ("media" === r2.hydration.directive && "string" != typeof r2.hydration.value) throw new AstroError(MissingMediaQueryDirective);
  }
  else r2.props[n2] = s2, transitionDirectivesToCopyOnIsland.includes(n2) || (r2.propsWithoutTransitionAttributes[n2] = s2);
  for (const t3 of Object.getOwnPropertySymbols(e2)) r2.props[t3] = e2[t3], r2.propsWithoutTransitionAttributes[t3] = e2[t3];
  return r2;
}
async function generateHydrateScript(e2, t2) {
  const { renderer: r2, result: n2, astroId: s2, props: a2, attrs: o2 } = e2, { hydrate: i2, componentUrl: d, componentExport: c } = t2;
  if (!c.value) throw new AstroError({ ...NoMatchingImport, message: NoMatchingImport.message(t2.displayName) });
  const l = { children: "", props: { uid: s2 } };
  if (o2) for (const [e3, t3] of Object.entries(o2)) l.props[e3] = escapeHTML(t3);
  l.props["component-url"] = await n2.resolve(decodeURI(d)), r2.clientEntrypoint && (l.props["component-export"] = c.value, l.props["renderer-url"] = await n2.resolve(decodeURI(r2.clientEntrypoint.toString())), l.props.props = escapeHTML(serializeProps(a2, t2))), l.props.ssr = "", l.props.client = i2;
  let u = await n2.resolve("astro:scripts/before-hydration.js");
  return u.length && (l.props["before-hydration-url"] = u), l.props.opts = escapeHTML(JSON.stringify({ name: t2.displayName, value: t2.hydrateArgs || "" })), transitionDirectivesToCopyOnIsland.forEach((e3) => {
    void 0 !== a2[e3] && (l.props[e3] = a2[e3]);
  }), l;
}
function bitwise(e2) {
  let t2 = 0;
  if (0 === e2.length) return t2;
  for (let r2 = 0; r2 < e2.length; r2++) {
    t2 = (t2 << 5) - t2 + e2.charCodeAt(r2), t2 |= 0;
  }
  return t2;
}
function shorthash(e2) {
  let t2, r2 = "", n2 = bitwise(e2);
  const s2 = n2 < 0 ? "Z" : "";
  for (n2 = Math.abs(n2); n2 >= 61; ) t2 = n2 % 61, n2 = Math.floor(n2 / 61), r2 = dictionary[t2] + r2;
  return n2 > 0 && (r2 = dictionary[n2] + r2), s2 + r2;
}
function isHeadAndContent(e2) {
  return "object" == typeof e2 && null !== e2 && !!e2[headAndContentSym];
}
function createThinHead() {
  return { [headAndContentSym]: true };
}
function determineIfNeedsHydrationScript(e2) {
  return !e2._metadata.hasHydrationScript && (e2._metadata.hasHydrationScript = true);
}
function determinesIfNeedsDirectiveScript(e2, t2) {
  return !e2._metadata.hasDirectives.has(t2) && (e2._metadata.hasDirectives.add(t2), true);
}
function getDirectiveScriptText(e2, t2) {
  const r2 = e2.clientDirectives.get(t2);
  if (!r2) throw new Error(`Unknown directive: ${t2}`);
  return r2;
}
function getPrescripts(e2, t2, r2) {
  switch (t2) {
    case "both":
      return `<style>${ISLAND_STYLES}</style><script>${getDirectiveScriptText(e2, r2)}<\/script><script>${astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(e2, r2)}<\/script>`;
  }
}
function renderCspContent(e2) {
  const t2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set();
  for (const r3 of e2.scriptHashes) t2.add(`'${r3}'`);
  for (const t3 of e2.styleHashes) r2.add(`'${t3}'`);
  for (const t3 of e2._metadata.extraStyleHashes) r2.add(`'${t3}'`);
  for (const r3 of e2._metadata.extraScriptHashes) t2.add(`'${r3}'`);
  let n2;
  e2.directives.length > 0 && (n2 = e2.directives.join(";") + ";");
  let s2 = "'self'";
  e2.scriptResources.length > 0 && (s2 = e2.scriptResources.map((e3) => `${e3}`).join(" "));
  let a2 = "'self'";
  e2.styleResources.length > 0 && (a2 = e2.styleResources.map((e3) => `${e3}`).join(" "));
  const o2 = e2.isStrictDynamic ? " 'strict-dynamic'" : "";
  return [n2, `script-src ${s2} ${Array.from(t2).join(" ")}${o2};`, `style-src ${a2} ${Array.from(r2).join(" ")};`].filter(Boolean).join(" ");
}
function createRenderInstruction(e2) {
  return Object.defineProperty(e2, RenderInstructionSymbol, { value: true });
}
function isRenderInstruction(e2) {
  return e2 && "object" == typeof e2 && e2[RenderInstructionSymbol];
}
function defineScriptVars(e2) {
  let t2 = "";
  for (const [r2, n2] of Object.entries(e2)) t2 += `const ${toIdent(r2)} = ${JSON.stringify(n2)?.replace(/<\/script>/g, "\\x3C/script>")};
`;
  return markHTMLString(t2);
}
function formatList(e2) {
  return 1 === e2.length ? e2[0] : `${e2.slice(0, -1).join(", ")} or ${e2[e2.length - 1]}`;
}
function isCustomElement(e2) {
  return e2.includes("-");
}
function handleBooleanAttribute(e2, t2, r2, n2) {
  return n2 && isCustomElement(n2) ? markHTMLString(` ${e2}="${toAttributeString(t2, r2)}"`) : markHTMLString(t2 ? ` ${e2}` : "");
}
function addAttribute(e2, t2, r2 = true, n2 = "") {
  if (null == e2) return "";
  if (STATIC_DIRECTIVES.has(t2)) return console.warn(`[astro] The "${t2}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t2}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t2}": value }}\`).`), "";
  if ("class:list" === t2) {
    const n3 = toAttributeString(clsx(e2), r2);
    return "" === n3 ? "" : markHTMLString(` ${t2.slice(0, -5)}="${n3}"`);
  }
  if ("style" === t2 && !(e2 instanceof HTMLString)) {
    if (Array.isArray(e2) && 2 === e2.length) return markHTMLString(` ${t2}="${toAttributeString(`${toStyleString(e2[0])};${e2[1]}`, r2)}"`);
    if ("object" == typeof e2) return markHTMLString(` ${t2}="${toAttributeString(toStyleString(e2), r2)}"`);
  }
  return "className" === t2 ? markHTMLString(` class="${toAttributeString(e2, r2)}"`) : "string" == typeof e2 && e2.includes("&") && isHttpUrl(e2) ? markHTMLString(` ${t2}="${toAttributeString(e2, false)}"`) : htmlBooleanAttributes.test(t2) ? handleBooleanAttribute(t2, e2, r2, n2) : "" === e2 ? markHTMLString(` ${t2}`) : "popover" === t2 && "boolean" == typeof e2 || "download" === t2 && "boolean" == typeof e2 ? handleBooleanAttribute(t2, e2, r2, n2) : markHTMLString(` ${t2}="${toAttributeString(e2, r2)}"`);
}
function internalSpreadAttributes(e2, t2 = true, r2) {
  let n2 = "";
  for (const [s2, a2] of Object.entries(e2)) n2 += addAttribute(a2, s2, t2, r2);
  return markHTMLString(n2);
}
function renderElement$1(e2, { props: t2, children: r2 = "" }, n2 = true) {
  const { lang: s2, "data-astro-id": a2, "define:vars": o2, ...i2 } = t2;
  return o2 && ("style" === e2 && (delete i2["is:global"], delete i2["is:scoped"]), "script" === e2 && (delete i2.hoist, r2 = defineScriptVars(o2) + "\n" + r2)), null != r2 && "" != r2 || !voidElementNames.test(e2) ? `<${e2}${internalSpreadAttributes(i2, n2, e2)}>${r2}</${e2}>` : `<${e2}${internalSpreadAttributes(i2, n2, e2)}>`;
}
function createBufferedRenderer(e2, t2) {
  return new BufferedRenderer(e2, t2);
}
function promiseWithResolvers() {
  let e2, t2;
  return { promise: new Promise((r2, n2) => {
    e2 = r2, t2 = n2;
  }), resolve: e2, reject: t2 };
}
function isHttpUrl(e2) {
  try {
    const t2 = new URL(e2);
    return VALID_PROTOCOLS.includes(t2.protocol);
  } catch {
    return false;
  }
}
function renderAllHeadContent(e2) {
  e2._metadata.hasRenderedHead = true;
  let t2 = "";
  e2.shouldInjectCspMetaTags && "meta" === e2.cspDestination && (t2 += renderElement$1("meta", { props: { "http-equiv": "content-security-policy", content: renderCspContent(e2) }, children: "" }, false));
  const r2 = Array.from(e2.styles).filter(uniqueElements).map((e3) => "stylesheet" === e3.props.rel ? renderElement$1("link", e3) : renderElement$1("style", e3));
  e2.styles.clear();
  const n2 = Array.from(e2.scripts).filter(uniqueElements).map((t3) => (e2.userAssetsBase && (t3.props.src = ("/" === e2.base ? "" : e2.base) + e2.userAssetsBase + t3.props.src), renderElement$1("script", t3, false))), s2 = Array.from(e2.links).filter(uniqueElements).map((e3) => renderElement$1("link", e3, false));
  if (t2 += r2.join("\n") + s2.join("\n") + n2.join("\n"), e2._metadata.extraHead.length > 0) for (const r3 of e2._metadata.extraHead) t2 += r3;
  return markHTMLString(t2);
}
function renderHead() {
  return createRenderInstruction({ type: "head" });
}
function maybeRenderHead() {
  return createRenderInstruction({ type: "maybe-head" });
}
function encodeHexUpperCase(e2) {
  let t2 = "";
  for (let r2 = 0; r2 < e2.length; r2++) t2 += alphabetUpperCase[e2[r2] >> 4], t2 += alphabetUpperCase[15 & e2[r2]];
  return t2;
}
function decodeHex(e2) {
  if (e2.length % 2 != 0) throw new Error("Invalid hex string");
  const t2 = new Uint8Array(e2.length / 2);
  for (let r2 = 0; r2 < e2.length; r2 += 2) {
    if (!(e2[r2] in decodeMap)) throw new Error("Invalid character");
    if (!(e2[r2 + 1] in decodeMap)) throw new Error("Invalid character");
    t2[r2 / 2] |= decodeMap[e2[r2]] << 4, t2[r2 / 2] |= decodeMap[e2[r2 + 1]];
  }
  return t2;
}
function encodeBase64(e2) {
  return encodeBase64_internal(e2, base64Alphabet, EncodingPadding.Include);
}
function encodeBase64_internal(e2, t2, r2) {
  let n2 = "";
  for (let s2 = 0; s2 < e2.byteLength; s2 += 3) {
    let a2 = 0, o2 = 0;
    for (let t3 = 0; t3 < 3 && s2 + t3 < e2.byteLength; t3++) a2 = a2 << 8 | e2[s2 + t3], o2 += 8;
    for (let e3 = 0; e3 < 4; e3++) o2 >= 6 ? (n2 += t2[a2 >> o2 - 6 & 63], o2 -= 6) : o2 > 0 ? (n2 += t2[a2 << 6 - o2 & 63], o2 = 0) : r2 === EncodingPadding.Include && (n2 += "=");
  }
  return n2;
}
function decodeBase64(e2) {
  return decodeBase64_internal(e2, base64DecodeMap, DecodingPadding.Required);
}
function decodeBase64_internal(e2, t2, r2) {
  const n2 = new Uint8Array(3 * Math.ceil(e2.length / 4));
  let s2 = 0;
  for (let a2 = 0; a2 < e2.length; a2 += 4) {
    let o2 = 0, i2 = 0;
    for (let n3 = 0; n3 < 4; n3++) if (!(r2 === DecodingPadding.Required && "=" === e2[a2 + n3] || r2 === DecodingPadding.Ignore && (a2 + n3 >= e2.length || "=" === e2[a2 + n3]))) {
      if (n3 > 0 && "=" === e2[a2 + n3 - 1]) throw new Error("Invalid padding");
      if (!(e2[a2 + n3] in t2)) throw new Error("Invalid character");
      o2 |= t2[e2[a2 + n3]] << 6 * (3 - n3), i2 += 6;
    }
    if (i2 < 24) {
      let e3;
      if (12 === i2) e3 = 65535 & o2;
      else {
        if (18 !== i2) throw new Error("Invalid padding");
        e3 = 255 & o2;
      }
      if (0 !== e3) throw new Error("Invalid padding");
    }
    const d = Math.floor(i2 / 8);
    for (let e3 = 0; e3 < d; e3++) n2[s2] = o2 >> 16 - 8 * e3 & 255, s2++;
  }
  return n2.slice(0, s2);
}
function getErrorMap() {
  return overrideErrorMap;
}
function addIssueToContext(e2, t2) {
  const r2 = getErrorMap(), n2 = makeIssue({ issueData: t2, data: e2.data, path: e2.path, errorMaps: [e2.common.contextualErrorMap, e2.schemaErrorMap, r2, r2 === errorMap ? void 0 : errorMap].filter((e3) => !!e3) });
  e2.common.issues.push(n2);
}
function processCreateParams(e2) {
  if (!e2) return {};
  const { errorMap: t2, invalid_type_error: r2, required_error: n2, description: s2 } = e2;
  if (t2 && (r2 || n2)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  if (t2) return { errorMap: t2, description: s2 };
  return { errorMap: /* @__PURE__ */ __name((t3, s3) => {
    const { message: a2 } = e2;
    return "invalid_enum_value" === t3.code ? { message: a2 ?? s3.defaultError } : void 0 === s3.data ? { message: a2 ?? n2 ?? s3.defaultError } : "invalid_type" !== t3.code ? { message: s3.defaultError } : { message: a2 ?? r2 ?? s3.defaultError };
  }, "errorMap"), description: s2 };
}
function timeRegexSource(e2) {
  let t2 = "[0-5]\\d";
  e2.precision ? t2 = `${t2}\\.\\d{${e2.precision}}` : null == e2.precision && (t2 = `${t2}(\\.\\d+)?`);
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t2})${e2.precision ? "+" : "?"}`;
}
function timeRegex(e2) {
  return new RegExp(`^${timeRegexSource(e2)}$`);
}
function datetimeRegex(e2) {
  let t2 = `${dateRegexSource}T${timeRegexSource(e2)}`;
  const r2 = [];
  return r2.push(e2.local ? "Z?" : "Z"), e2.offset && r2.push("([+-]\\d{2}:?\\d{2})"), t2 = `${t2}(${r2.join("|")})`, new RegExp(`^${t2}$`);
}
function isValidIP(e2, t2) {
  return !("v4" !== t2 && t2 || !ipv4Regex.test(e2)) || !("v6" !== t2 && t2 || !ipv6Regex.test(e2));
}
function isValidJWT(e2, t2) {
  if (!jwtRegex.test(e2)) return false;
  try {
    const [r2] = e2.split(".");
    if (!r2) return false;
    const n2 = r2.replace(/-/g, "+").replace(/_/g, "/").padEnd(r2.length + (4 - r2.length % 4) % 4, "="), s2 = JSON.parse(atob(n2));
    return "object" == typeof s2 && null !== s2 && ((!("typ" in s2) || "JWT" === s2?.typ) && (!!s2.alg && (!t2 || s2.alg === t2)));
  } catch {
    return false;
  }
}
function isValidCidr(e2, t2) {
  return !("v4" !== t2 && t2 || !ipv4CidrRegex.test(e2)) || !("v6" !== t2 && t2 || !ipv6CidrRegex.test(e2));
}
function floatSafeRemainder(e2, t2) {
  const r2 = (e2.toString().split(".")[1] || "").length, n2 = (t2.toString().split(".")[1] || "").length, s2 = r2 > n2 ? r2 : n2;
  return Number.parseInt(e2.toFixed(s2).replace(".", "")) % Number.parseInt(t2.toFixed(s2).replace(".", "")) / 10 ** s2;
}
function deepPartialify(e2) {
  if (e2 instanceof ZodObject) {
    const t2 = {};
    for (const r2 in e2.shape) {
      const n2 = e2.shape[r2];
      t2[r2] = ZodOptional.create(deepPartialify(n2));
    }
    return new ZodObject({ ...e2._def, shape: /* @__PURE__ */ __name(() => t2, "shape") });
  }
  return e2 instanceof ZodArray ? new ZodArray({ ...e2._def, type: deepPartialify(e2.element) }) : e2 instanceof ZodOptional ? ZodOptional.create(deepPartialify(e2.unwrap())) : e2 instanceof ZodNullable ? ZodNullable.create(deepPartialify(e2.unwrap())) : e2 instanceof ZodTuple ? ZodTuple.create(e2.items.map((e3) => deepPartialify(e3))) : e2;
}
function mergeValues(e2, t2) {
  const r2 = getParsedType(e2), n2 = getParsedType(t2);
  if (e2 === t2) return { valid: true, data: e2 };
  if (r2 === ZodParsedType.object && n2 === ZodParsedType.object) {
    const r3 = util.objectKeys(t2), n3 = util.objectKeys(e2).filter((e3) => -1 !== r3.indexOf(e3)), s2 = { ...e2, ...t2 };
    for (const r4 of n3) {
      const n4 = mergeValues(e2[r4], t2[r4]);
      if (!n4.valid) return { valid: false };
      s2[r4] = n4.data;
    }
    return { valid: true, data: s2 };
  }
  if (r2 === ZodParsedType.array && n2 === ZodParsedType.array) {
    if (e2.length !== t2.length) return { valid: false };
    const r3 = [];
    for (let n3 = 0; n3 < e2.length; n3++) {
      const s2 = mergeValues(e2[n3], t2[n3]);
      if (!s2.valid) return { valid: false };
      r3.push(s2.data);
    }
    return { valid: true, data: r3 };
  }
  return r2 === ZodParsedType.date && n2 === ZodParsedType.date && +e2 == +t2 ? { valid: true, data: e2 } : { valid: false };
}
function createZodEnum(e2, t2) {
  return new ZodEnum({ values: e2, typeName: ZodFirstPartyTypeKind.ZodEnum, ...processCreateParams(t2) });
}
function cleanParams(e2, t2) {
  const r2 = "function" == typeof e2 ? e2(t2) : "string" == typeof e2 ? { message: e2 } : e2;
  return "string" == typeof r2 ? { message: r2 } : r2;
}
function custom(e2, t2 = {}, r2) {
  return e2 ? ZodAny.create().superRefine((n2, s2) => {
    const a2 = e2(n2);
    if (a2 instanceof Promise) return a2.then((e3) => {
      if (!e3) {
        const e4 = cleanParams(t2, n2), a3 = e4.fatal ?? r2 ?? true;
        s2.addIssue({ code: "custom", ...e4, fatal: a3 });
      }
    });
    if (!a2) {
      const e3 = cleanParams(t2, n2), a3 = e3.fatal ?? r2 ?? true;
      s2.addIssue({ code: "custom", ...e3, fatal: a3 });
    }
  }) : ZodAny.create();
}
async function decodeKey(e2) {
  const t2 = decodeBase64(e2);
  return crypto.subtle.importKey("raw", t2.buffer, "AES-GCM", true, ["encrypt", "decrypt"]);
}
async function encryptString(e2, t2) {
  const r2 = crypto.getRandomValues(new Uint8Array(12)), n2 = encoder$1.encode(t2), s2 = await crypto.subtle.encrypt({ name: "AES-GCM", iv: r2 }, e2, n2);
  return encodeHexUpperCase(r2) + encodeBase64(new Uint8Array(s2));
}
async function decryptString(e2, t2) {
  const r2 = decodeHex(t2.slice(0, 24)), n2 = decodeBase64(t2.slice(24)), s2 = await crypto.subtle.decrypt({ name: "AES-GCM", iv: r2 }, e2, n2);
  return decoder$1.decode(s2);
}
async function generateCspDigest(e2, t2) {
  const r2 = await crypto.subtle.digest(t2, encoder$1.encode(e2)), n2 = encodeBase64(new Uint8Array(r2));
  return `${ALGORITHMS[t2]}${n2}`;
}
function isRenderTemplateResult(e2) {
  return "object" == typeof e2 && null !== e2 && !!e2[renderTemplateResultSym];
}
function renderTemplate(e2, ...t2) {
  return new RenderTemplateResult(e2, t2);
}
function isSlotString(e2) {
  return !!e2[slotString];
}
function renderSlot(e2, t2, r2) {
  return !t2 && r2 ? renderSlot(e2, r2) : { async render(r3) {
    await renderChild(r3, "function" == typeof t2 ? t2(e2) : t2);
  } };
}
async function renderSlotToString(e2, t2, r2) {
  let n2 = "", s2 = null;
  const a2 = { write(t3) {
    if (t3 instanceof SlotString) n2 += t3, t3.instructions && (s2 ??= [], s2.push(...t3.instructions));
    else {
      if (t3 instanceof Response) return;
      "object" == typeof t3 && "type" in t3 && "string" == typeof t3.type ? (null === s2 && (s2 = []), s2.push(t3)) : n2 += chunkToString(e2, t3);
    }
  } }, o2 = renderSlot(e2, t2, r2);
  return await o2.render(a2), markHTMLString(new SlotString(n2, s2));
}
async function renderSlots(e2, t2 = {}) {
  let r2 = null, n2 = {};
  return t2 && await Promise.all(Object.entries(t2).map(([t3, s2]) => renderSlotToString(e2, s2).then((e3) => {
    e3.instructions && (null === r2 && (r2 = []), r2.push(...e3.instructions)), n2[t3] = e3;
  }))), { slotInstructions: r2, children: n2 };
}
function createSlotValueFromString(e2) {
  return function() {
    return renderTemplate`${unescapeHTML(e2)}`;
  };
}
function containsServerDirective(e2) {
  return "server:component-directive" in e2;
}
function safeJsonStringify(e2) {
  return JSON.stringify(e2).replace(SCRIPT_RE, "<\\/script").replace(COMMENT_RE, "\\u003C!--");
}
function createSearchParams(e2, t2, r2) {
  const n2 = new URLSearchParams();
  return n2.set("e", e2), n2.set("p", t2), n2.set("s", r2), n2;
}
function isWithinURLLimit(e2, t2) {
  return (e2 + "?" + t2.toString()).length < 2048;
}
function stringifyChunk(e2, t2) {
  if (isRenderInstruction(t2)) {
    const r2 = t2;
    switch (r2.type) {
      case "directive": {
        const { hydration: t3 } = r2;
        let n2 = t3 && determineIfNeedsHydrationScript(e2), s2 = t3 && determinesIfNeedsDirectiveScript(e2, t3.directive);
        if (n2) {
          let r3 = getPrescripts(e2, "both", t3.directive);
          return markHTMLString(r3);
        }
        if (s2) {
          let r3 = getPrescripts(e2, "directive", t3.directive);
          return markHTMLString(r3);
        }
        return "";
      }
      case "head":
        return e2._metadata.hasRenderedHead || e2.partial ? "" : renderAllHeadContent(e2);
      case "maybe-head":
        return e2._metadata.hasRenderedHead || e2._metadata.headInTree || e2.partial ? "" : renderAllHeadContent(e2);
      case "renderer-hydration-script": {
        const { rendererSpecificHydrationScripts: t3 } = e2._metadata, { rendererName: n2 } = r2;
        return t3.has(n2) ? "" : (t3.add(n2), r2.render());
      }
      case "server-island-runtime":
        return e2._metadata.hasRenderedServerIslandRuntime ? "" : (e2._metadata.hasRenderedServerIslandRuntime = true, renderServerIslandRuntime());
      default:
        throw new Error(`Unknown chunk type: ${t2.type}`);
    }
  } else {
    if (t2 instanceof Response) return "";
    if (isSlotString(t2)) {
      let r2 = "";
      const n2 = t2;
      if (n2.instructions) for (const t3 of n2.instructions) r2 += stringifyChunk(e2, t3);
      return r2 += t2.toString(), r2;
    }
  }
  return t2.toString();
}
function chunkToString(e2, t2) {
  return ArrayBuffer.isView(t2) ? decoder.decode(t2) : stringifyChunk(e2, t2);
}
function chunkToByteArray(e2, t2) {
  if (ArrayBuffer.isView(t2)) return t2;
  {
    const r2 = stringifyChunk(e2, t2);
    return encoder.encode(r2.toString());
  }
}
function isRenderInstance(e2) {
  return !!e2 && "object" == typeof e2 && "render" in e2 && "function" == typeof e2.render;
}
function renderChild(e2, t2) {
  if (isPromise(t2)) return t2.then((t3) => renderChild(e2, t3));
  if (t2 instanceof SlotString) e2.write(t2);
  else if (isHTMLString(t2)) e2.write(t2);
  else {
    if (Array.isArray(t2)) return renderArray(e2, t2);
    if ("function" == typeof t2) return renderChild(e2, t2());
    if (t2 || 0 === t2) if ("string" != typeof t2) {
      if (isRenderInstance(t2)) return t2.render(e2);
      if (isRenderTemplateResult(t2)) return t2.render(e2);
      if (isAstroComponentInstance(t2)) return t2.render(e2);
      if (!ArrayBuffer.isView(t2)) return "object" == typeof t2 && (Symbol.asyncIterator in t2 || Symbol.iterator in t2) ? Symbol.asyncIterator in t2 ? renderAsyncIterable(e2, t2) : renderIterable(e2, t2) : void e2.write(t2);
      e2.write(t2);
    } else e2.write(markHTMLString(escapeHTML(t2)));
  }
}
function renderArray(e2, t2) {
  const r2 = t2.map((t3) => createBufferedRenderer(e2, (e3) => renderChild(e3, t3)))[Symbol.iterator](), n2 = /* @__PURE__ */ __name(() => {
    for (; ; ) {
      const { value: e3, done: t3 } = r2.next();
      if (t3) break;
      const s2 = e3.flush();
      if (isPromise(s2)) return s2.then(n2);
    }
  }, "n");
  return n2();
}
function renderIterable(e2, t2) {
  const r2 = t2[Symbol.iterator](), n2 = /* @__PURE__ */ __name(() => {
    for (; ; ) {
      const { value: t3, done: s2 } = r2.next();
      if (s2) break;
      const a2 = renderChild(e2, t3);
      if (isPromise(a2)) return a2.then(n2);
    }
  }, "n");
  return n2();
}
async function renderAsyncIterable(e2, t2) {
  for await (const r2 of t2) await renderChild(e2, r2);
}
function validateComponentProps(e2, t2, r2) {
  if (null != e2) {
    const n2 = [...t2.keys()].map((e3) => `client:${e3}`);
    for (const t3 of Object.keys(e2)) n2.includes(t3) && console.warn(`You are attempting to render <${r2} ${t3} />, but ${r2} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`);
  }
}
function createAstroComponentInstance(e2, t2, r2, n2, s2 = {}) {
  validateComponentProps(n2, e2.clientDirectives, t2);
  const a2 = new AstroComponentInstance(e2, n2, s2, r2);
  return isAPropagatingComponent(e2, r2) && e2._metadata.propagators.add(a2), a2;
}
function isAstroComponentInstance(e2) {
  return "object" == typeof e2 && null !== e2 && !!e2[astroComponentInstanceSym];
}
async function renderToString(e2, t2, r2, n2, s2 = false, a2) {
  const o2 = await callComponentAsTemplateResultOrResponse(e2, t2, r2, n2, a2);
  if (o2 instanceof Response) return o2;
  let i2 = "", d = false;
  s2 && await bufferHeadContent(e2);
  const c = { write(t3) {
    if (s2 && !d && (d = true, !e2.partial && !DOCTYPE_EXP.test(String(t3)))) {
      const t4 = e2.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
      i2 += t4;
    }
    t3 instanceof Response || (i2 += chunkToString(e2, t3));
  } };
  return await o2.render(c), i2;
}
async function renderToReadableStream(e2, t2, r2, n2, s2 = false, a2) {
  const o2 = await callComponentAsTemplateResultOrResponse(e2, t2, r2, n2, a2);
  if (o2 instanceof Response) return o2;
  let i2 = false;
  return s2 && await bufferHeadContent(e2), new ReadableStream({ start(t3) {
    const r3 = { write(r4) {
      if (s2 && !i2 && (i2 = true, !e2.partial && !DOCTYPE_EXP.test(String(r4)))) {
        const r5 = e2.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
        t3.enqueue(encoder.encode(r5));
      }
      if (r4 instanceof Response) throw new AstroError({ ...ResponseSentError });
      const n3 = chunkToByteArray(e2, r4);
      t3.enqueue(n3);
    } };
    (async () => {
      try {
        await o2.render(r3), t3.close();
      } catch (e3) {
        AstroError.is(e3) && !e3.loc && e3.setLocation({ file: a2?.component }), setTimeout(() => t3.error(e3), 0);
      }
    })();
  }, cancel() {
    e2.cancelled = true;
  } });
}
async function callComponentAsTemplateResultOrResponse(e2, t2, r2, n2, s2) {
  const a2 = await t2(e2, r2, n2);
  if (a2 instanceof Response) return a2;
  if (isHeadAndContent(a2)) {
    if (!isRenderTemplateResult(a2.content)) throw new AstroError({ ...OnlyResponseCanBeReturned, message: OnlyResponseCanBeReturned.message(s2?.route, typeof a2), location: { file: s2?.component } });
    return a2.content;
  }
  if (!isRenderTemplateResult(a2)) throw new AstroError({ ...OnlyResponseCanBeReturned, message: OnlyResponseCanBeReturned.message(s2?.route, typeof a2), location: { file: s2?.component } });
  return a2;
}
async function bufferHeadContent(e2) {
  const t2 = e2._metadata.propagators.values();
  for (; ; ) {
    const { value: r2, done: n2 } = t2.next();
    if (n2) break;
    const s2 = await r2.init(e2);
    isHeadAndContent(s2) && s2.head && e2._metadata.extraHead.push(s2.head);
  }
}
async function renderToAsyncIterable(e2, t2, r2, n2, s2 = false, a2) {
  const o2 = await callComponentAsTemplateResultOrResponse(e2, t2, r2, n2, a2);
  if (o2 instanceof Response) return o2;
  let i2 = false;
  s2 && await bufferHeadContent(e2);
  let d = null, c = null;
  const l = [];
  let u = false;
  const p = { async next() {
    if (e2.cancelled) return { done: true, value: void 0 };
    if (null !== c ? await c.promise : u || l.length || (c = promiseWithResolvers(), await c.promise), u || (c = promiseWithResolvers()), d) throw d;
    let t3 = 0;
    for (let e3 = 0, r4 = l.length; e3 < r4; e3++) t3 += l[e3].length;
    let r3 = new Uint8Array(t3), n3 = 0;
    for (let e3 = 0, t4 = l.length; e3 < t4; e3++) {
      const t5 = l[e3];
      r3.set(t5, n3), n3 += t5.length;
    }
    l.length = 0;
    return { done: 0 === t3 && u, value: r3 };
  }, return: /* @__PURE__ */ __name(async () => (e2.cancelled = true, { done: true, value: void 0 }), "return") }, m = { write(t3) {
    if (s2 && !i2 && (i2 = true, !e2.partial && !DOCTYPE_EXP.test(String(t3)))) {
      const t4 = e2.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
      l.push(encoder.encode(t4));
    }
    if (t3 instanceof Response) throw new AstroError(ResponseSentError);
    const r3 = chunkToByteArray(e2, t3);
    r3.length > 0 ? (l.push(r3), c?.resolve()) : l.length > 0 && c?.resolve();
  } };
  return toPromise(() => o2.render(m)).catch((e3) => {
    d = e3;
  }).finally(() => {
    u = true, c?.resolve();
  }), { [Symbol.asyncIterator]: () => p };
}
function toPromise(e2) {
  try {
    const t2 = e2();
    return isPromise(t2) ? t2 : Promise.resolve(t2);
  } catch (e3) {
    return Promise.reject(e3);
  }
}
function componentIsHTMLElement(e2) {
  return "undefined" != typeof HTMLElement && HTMLElement.isPrototypeOf(e2);
}
async function renderHTMLElement(e2, t2, r2, n2) {
  const s2 = getHTMLElementName(t2);
  let a2 = "";
  for (const e3 in r2) a2 += ` ${e3}="${toAttributeString(await r2[e3])}"`;
  return markHTMLString(`<${s2}${a2}>${await renderSlotToString(e2, n2?.default)}</${s2}>`);
}
function getHTMLElementName(e2) {
  const t2 = customElements.getName(e2);
  if (t2) return t2;
  return e2.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
}
function guessRenderers(e2) {
  const t2 = e2?.split(".").pop();
  switch (t2) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    default:
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue", "@astrojs/svelte"];
  }
}
function isFragmentComponent(e2) {
  return e2 === Fragment;
}
function isHTMLComponent(e2) {
  return e2 && true === e2["astro:html"];
}
function removeStaticAstroSlot(e2, t2 = true) {
  const r2 = t2 ? ASTRO_STATIC_SLOT_EXP : ASTRO_SLOT_EXP;
  return e2.replace(r2, "");
}
async function renderFrameworkComponent(e2, t2, r2, n2, s2 = {}) {
  if (!r2 && "client:only" in n2 == false) throw new Error(`Unable to render ${t2} because it is ${r2}!
Did you forget to import the component or is it possible there is a typo?`);
  const { renderers: a2, clientDirectives: o2 } = e2, i2 = { astroStaticSlot: true, displayName: t2 }, { hydration: d, isPage: c, props: l, propsWithoutTransitionAttributes: u } = extractDirectives(n2, o2);
  let p, m = "";
  d && (i2.hydrate = d.directive, i2.hydrateArgs = d.value, i2.componentExport = d.componentExport, i2.componentUrl = d.componentUrl);
  const h = guessRenderers(i2.componentUrl), f = a2.filter((e3) => "astro:jsx" !== e3.name), { children: y, slotInstructions: g } = await renderSlots(e2, s2);
  let v;
  if ("only" !== i2.hydrate) {
    let t3 = false;
    try {
      t3 = r2 && r2[Renderer];
    } catch {
    }
    if (t3) {
      const e3 = r2[Renderer];
      v = a2.find(({ name: t4 }) => t4 === e3);
    }
    if (!v) {
      let t4;
      for (const n3 of a2) try {
        if (await n3.ssr.check.call({ result: e2 }, r2, l, y)) {
          v = n3;
          break;
        }
      } catch (e3) {
        t4 ??= e3;
      }
      if (!v && t4) throw t4;
    }
    if (!v && "function" == typeof HTMLElement && componentIsHTMLElement(r2)) {
      const t4 = await renderHTMLElement(e2, r2, n2, s2);
      return { render(e3) {
        e3.write(t4);
      } };
    }
  } else {
    if (i2.hydrateArgs) {
      const e3 = rendererAliases.has(i2.hydrateArgs) ? rendererAliases.get(i2.hydrateArgs) : i2.hydrateArgs;
      clientOnlyValues.has(e3) && (v = a2.find(({ name: t3 }) => t3 === `@astrojs/${e3}` || t3 === e3));
    }
    if (v || 1 !== f.length || (v = f[0]), !v) {
      const e3 = i2.componentUrl?.split(".").pop();
      v = a2.find(({ name: t3 }) => t3 === `@astrojs/${e3}` || t3 === e3);
    }
  }
  if (v) "only" === i2.hydrate ? m = await renderSlotToString(e2, s2?.fallback) : (performance.now(), { html: m, attrs: p } = await v.ssr.renderToStaticMarkup.call({ result: e2 }, r2, u, y, i2));
  else {
    if ("only" === i2.hydrate) {
      const e3 = rendererAliases.has(i2.hydrateArgs) ? rendererAliases.get(i2.hydrateArgs) : i2.hydrateArgs;
      if (clientOnlyValues.has(e3)) {
        const e4 = f.length > 1;
        throw new AstroError({ ...NoMatchingRenderer, message: NoMatchingRenderer.message(i2.displayName, i2?.componentUrl?.split(".").pop(), e4, f.length), hint: NoMatchingRenderer.hint(formatList(h.map((e5) => "`" + e5 + "`"))) });
      }
      throw new AstroError({ ...NoClientOnlyHint, message: NoClientOnlyHint.message(i2.displayName), hint: NoClientOnlyHint.hint(h.map((e4) => e4.replace("@astrojs/", "")).join("|")) });
    }
    if ("string" != typeof r2) {
      const t3 = f.filter((e3) => h.includes(e3.name)), n3 = f.length > 1;
      if (0 === t3.length) throw new AstroError({ ...NoMatchingRenderer, message: NoMatchingRenderer.message(i2.displayName, i2?.componentUrl?.split(".").pop(), n3, f.length), hint: NoMatchingRenderer.hint(formatList(h.map((e3) => "`" + e3 + "`"))) });
      if (1 !== t3.length) throw new Error(`Unable to render ${i2.displayName}!

This component likely uses ${formatList(h)},
but Astro encountered an error during server-side rendering.

Please ensure that ${i2.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      v = t3[0], { html: m, attrs: p } = await v.ssr.renderToStaticMarkup.call({ result: e2 }, r2, u, y, i2);
    }
  }
  if (!m && "string" == typeof r2) {
    const t3 = sanitizeElementName(r2), n3 = Object.values(y).join(""), s3 = renderTemplate`<${t3}${internalSpreadAttributes(l, true, t3)}${markHTMLString("" === n3 && voidElementNames.test(t3) ? "/>" : `>${n3}</${t3}>`)}`;
    m = "";
    const a3 = { write(t4) {
      t4 instanceof Response || (m += chunkToString(e2, t4));
    } };
    await s3.render(a3);
  }
  if (!d) return { render(e3) {
    if (g) for (const t3 of g) e3.write(t3);
    c || "astro:jsx" === v?.name ? e3.write(m) : m && m.length > 0 && e3.write(markHTMLString(removeStaticAstroSlot(m, v?.ssr?.supportsAstroStaticSlot)));
  } };
  const b = shorthash(`<!--${i2.componentExport.value}:${i2.componentUrl}-->
${m}
${serializeProps(l, i2)}`), _ = await generateHydrateScript({ renderer: v, result: e2, astroId: b, props: l, attrs: p }, i2);
  let T = [];
  if (m) {
    if (Object.keys(y).length > 0) for (const e3 of Object.keys(y)) {
      let t3 = v?.ssr?.supportsAstroStaticSlot ? i2.hydrate ? "astro-slot" : "astro-static-slot" : "astro-slot", r3 = "default" === e3 ? `<${t3}>` : `<${t3} name="${e3}">`;
      m.includes(r3) || T.push(e3);
    }
  } else T = Object.keys(y);
  const S = T.length > 0 ? T.map((e3) => `<template data-astro-template${"default" !== e3 ? `="${e3}"` : ""}>${y[e3]}</template>`).join("") : "";
  return _.children = `${m ?? ""}${S}`, _.children && (_.props["await-children"] = "", _.children += "<!--astro:end-->"), { render(e3) {
    if (g) for (const t4 of g) e3.write(t4);
    e3.write(createRenderInstruction({ type: "directive", hydration: d })), "only" !== d.directive && v?.ssr.renderHydrationScript && e3.write(createRenderInstruction({ type: "renderer-hydration-script", rendererName: v.name, render: v.ssr.renderHydrationScript }));
    const t3 = renderElement$1("astro-island", _, false);
    e3.write(markHTMLString(t3));
  } };
}
function sanitizeElementName(e2) {
  const t2 = /[&<>'"\s]+/;
  return t2.test(e2) ? e2.trim().split(t2)[0].trim() : e2;
}
async function renderFragmentComponent(e2, t2 = {}) {
  const r2 = await renderSlotToString(e2, t2?.default);
  return { render(e3) {
    null != r2 && e3.write(r2);
  } };
}
async function renderHTMLComponent(e2, t2, r2, n2 = {}) {
  const { slotInstructions: s2, children: a2 } = await renderSlots(e2, n2), o2 = t2({ slots: a2 }), i2 = s2 ? s2.map((t3) => chunkToString(e2, t3)).join("") : "";
  return { render(e3) {
    e3.write(markHTMLString(i2 + o2));
  } };
}
function renderAstroComponent(e2, t2, r2, n2, s2 = {}) {
  if (containsServerDirective(n2)) {
    const r3 = new ServerIslandComponent(e2, n2, s2, t2);
    return e2._metadata.propagators.add(r3), r3;
  }
  const a2 = createAstroComponentInstance(e2, t2, r2, n2, s2);
  return { render: /* @__PURE__ */ __name((e3) => a2.render(e3), "render") };
}
function renderComponent(e2, t2, r2, n2, s2 = {}) {
  return isPromise(r2) ? r2.catch(a2).then((r3) => renderComponent(e2, t2, r3, n2, s2)) : isFragmentComponent(r2) ? renderFragmentComponent(e2, s2).catch(a2) : (n2 = normalizeProps(n2), isHTMLComponent(r2) ? renderHTMLComponent(e2, r2, n2, s2).catch(a2) : isAstroComponentFactory(r2) ? renderAstroComponent(e2, t2, r2, n2, s2) : renderFrameworkComponent(e2, t2, r2, n2, s2).catch(a2));
  function a2(t3) {
    if (e2.cancelled) return { render() {
    } };
    throw t3;
  }
  __name(a2, "a");
}
function normalizeProps(e2) {
  if (void 0 !== e2["class:list"]) {
    const t2 = e2["class:list"];
    delete e2["class:list"], e2.class = clsx(e2.class, t2), "" === e2.class && delete e2.class;
  }
  return e2;
}
async function renderComponentToString(e2, t2, r2, n2, s2 = {}, a2 = false, o2) {
  let i2 = "", d = false, c = "";
  a2 && !e2.partial && nonAstroPageNeedsHeadInjection(r2) && (c += chunkToString(e2, maybeRenderHead()));
  try {
    const o3 = { write(t3) {
      if (a2 && !e2.partial && !d && (d = true, !/<!doctype html/i.test(String(t3)))) {
        const t4 = e2.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
        i2 += t4 + c;
      }
      t3 instanceof Response || (i2 += chunkToString(e2, t3));
    } }, l = await renderComponent(e2, t2, r2, n2, s2);
    containsServerDirective(n2) && await bufferHeadContent(e2), await l.render(o3);
  } catch (e3) {
    throw AstroError.is(e3) && !e3.loc && e3.setLocation({ file: o2?.component }), e3;
  }
  return i2;
}
function nonAstroPageNeedsHeadInjection(e2) {
  return !!e2?.[needsHeadRenderingSymbol];
}
async function renderJSX(e2, t2) {
  switch (true) {
    case t2 instanceof HTMLString:
      return "" === t2.toString().trim() ? "" : t2;
    case "string" == typeof t2:
      return markHTMLString(escapeHTML(t2));
    case "function" == typeof t2:
      return t2;
    case (!t2 && 0 !== t2):
      return "";
    case Array.isArray(t2):
      return markHTMLString((await Promise.all(t2.map((t3) => renderJSX(e2, t3)))).join(""));
  }
  return renderJSXVNode(e2, t2);
}
async function renderJSXVNode(e2, t2) {
  if (isVNode(t2)) {
    switch (true) {
      case !t2.type:
        throw new Error(`Unable to render ${e2.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      case t2.type === Symbol.for("astro:fragment"):
        return renderJSX(e2, t2.props.children);
      case isAstroComponentFactory(t2.type): {
        let r2 = {}, n2 = {};
        for (const [s3, a2] of Object.entries(t2.props ?? {})) "children" === s3 || a2 && "object" == typeof a2 && a2.$$slot ? n2["children" === s3 ? "default" : s3] = () => renderJSX(e2, a2) : r2[s3] = a2;
        const s2 = await renderComponentToString(e2, t2.type.name, t2.type, r2, n2);
        return markHTMLString(s2);
      }
      case (!t2.type && 0 !== t2.type):
        return "";
      case ("string" == typeof t2.type && "astro-client-only" !== t2.type):
        return markHTMLString(await renderElement(e2, t2.type, t2.props ?? {}));
    }
    if (t2.type) {
      let r2 = /* @__PURE__ */ __name(function(e3) {
        return Array.isArray(e3) ? e3.map((e4) => r2(e4)) : isVNode(e3) && "slot" in e3.props ? (a2[e3.props.slot] = [...a2[e3.props.slot] ?? [], e3], void delete e3.props.slot) : void a2.default.push(e3);
      }, "r");
      if ("function" == typeof t2.type && t2.props["server:root"]) {
        const r3 = await t2.type(t2.props ?? {});
        return await renderJSX(e2, r3);
      }
      if ("function" == typeof t2.type) {
        if (t2.props[hasTriedRenderComponentSymbol]) {
          delete t2.props[hasTriedRenderComponentSymbol];
          const r3 = await t2.type(t2.props ?? {});
          return r3?.[AstroJSX] || !r3 ? await renderJSXVNode(e2, r3) : void 0;
        }
        t2.props[hasTriedRenderComponentSymbol] = true;
      }
      const { children: n2 = null, ...s2 } = t2.props ?? {}, a2 = { default: [] };
      r2(n2);
      for (const [e3, t3] of Object.entries(s2)) t3?.$$slot && (a2[e3] = t3, delete s2[e3]);
      const o2 = [], i2 = {};
      for (const [t3, r3] of Object.entries(a2)) o2.push(renderJSX(e2, r3).then((e3) => {
        0 !== e3.toString().trim().length && (i2[t3] = () => e3);
      }));
      let d;
      return await Promise.all(o2), d = "astro-client-only" === t2.type && t2.props["client:only"] ? await renderComponentToString(e2, t2.props["client:display-name"] ?? "", null, s2, i2) : await renderComponentToString(e2, "function" == typeof t2.type ? t2.type.name : t2.type, t2.type, s2, i2), markHTMLString(d);
    }
  }
  return markHTMLString(`${t2}`);
}
async function renderElement(e2, t2, { children: r2, ...n2 }) {
  return markHTMLString(`<${t2}${spreadAttributes(n2)}${markHTMLString(null != r2 && "" != r2 || !voidElementNames.test(t2) ? `>${null == r2 ? "" : await renderJSX(e2, prerenderElementChildren(t2, r2))}</${t2}>` : "/>")}`);
}
function prerenderElementChildren(e2, t2) {
  return "string" != typeof t2 || "style" !== e2 && "script" !== e2 ? t2 : markHTMLString(t2);
}
async function renderPage(e2, t2, r2, n2, s2, a2) {
  if (!isAstroComponentFactory(t2)) {
    e2._metadata.headInTree = e2.componentMetadata.get(t2.moduleId)?.containsHead ?? false;
    const n3 = { ...r2 ?? {}, "server:root": true }, s3 = await renderComponentToString(e2, t2.name, t2, n3, {}, true, a2), o3 = encoder.encode(s3), i3 = new Headers([["Content-Type", "text/html"], ["Content-Length", o3.byteLength.toString()]]);
    return !e2.shouldInjectCspMetaTags || "header" !== e2.cspDestination && "adapter" !== e2.cspDestination || i3.set("content-security-policy", renderCspContent(e2)), new Response(o3, { headers: i3 });
  }
  let o2;
  if (e2._metadata.headInTree = e2.componentMetadata.get(t2.moduleId)?.containsHead ?? false, s2) if (isNode && !isDeno) {
    o2 = await renderToAsyncIterable(e2, t2, r2, n2, true, a2);
  } else o2 = await renderToReadableStream(e2, t2, r2, n2, true, a2);
  else o2 = await renderToString(e2, t2, r2, n2, true, a2);
  if (o2 instanceof Response) return o2;
  const i2 = e2.response, d = new Headers(i2.headers);
  (e2.shouldInjectCspMetaTags && "header" === e2.cspDestination || "adapter" === e2.cspDestination) && d.set("content-security-policy", renderCspContent(e2)), s2 || "string" != typeof o2 || (o2 = encoder.encode(o2), d.set("Content-Length", o2.byteLength.toString()));
  let c = i2.status, l = i2.statusText;
  return "/404" === a2?.route ? (c = 404, "OK" === l && (l = "Not Found")) : "/500" === a2?.route && (c = 500, "OK" === l && (l = "Internal Server Error")), c ? new Response(o2, { ...i2, headers: d, status: c, statusText: l }) : new Response(o2, { ...i2, headers: d });
}
async function renderScript(e2, t2) {
  if (e2._metadata.renderedScripts.has(t2)) return;
  e2._metadata.renderedScripts.add(t2);
  const r2 = e2.inlinedScripts.get(t2);
  if (null != r2) return r2 ? markHTMLString(`<script type="module">${r2}<\/script>`) : "";
  const n2 = await e2.resolve(t2);
  return markHTMLString(`<script type="module" src="${e2.userAssetsBase ? ("/" === e2.base ? "" : e2.base) + e2.userAssetsBase : ""}${n2}"><\/script>`);
}
function requireCssesc() {
  if (hasRequiredCssesc) return cssesc_1;
  hasRequiredCssesc = 1;
  var e2 = {}.hasOwnProperty, t2 = /[ -,\.\/:-@\[-\^`\{-~]/, r2 = /[ -,\.\/:-@\[\]\^`\{-~]/, n2 = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g, s2 = /* @__PURE__ */ __name(function s3(a2, o2) {
    "single" != (o2 = function(t3, r3) {
      if (!t3) return r3;
      var n3 = {};
      for (var s4 in r3) n3[s4] = e2.call(t3, s4) ? t3[s4] : r3[s4];
      return n3;
    }(o2, s3.options)).quotes && "double" != o2.quotes && (o2.quotes = "single");
    for (var i2 = "double" == o2.quotes ? '"' : "'", d = o2.isIdentifier, c = a2.charAt(0), l = "", u = 0, p = a2.length; u < p; ) {
      var m = a2.charAt(u++), h = m.charCodeAt(), f = void 0;
      if (h < 32 || h > 126) {
        if (h >= 55296 && h <= 56319 && u < p) {
          var y = a2.charCodeAt(u++);
          56320 == (64512 & y) ? h = ((1023 & h) << 10) + (1023 & y) + 65536 : u--;
        }
        f = "\\" + h.toString(16).toUpperCase() + " ";
      } else f = o2.escapeEverything ? t2.test(m) ? "\\" + m : "\\" + h.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(m) ? "\\" + h.toString(16).toUpperCase() + " " : "\\" == m || !d && ('"' == m && i2 == m || "'" == m && i2 == m) || d && r2.test(m) ? "\\" + m : m;
      l += f;
    }
    return d && (/^-[-\d]/.test(l) ? l = "\\-" + l.slice(1) : /\d/.test(c) && (l = "\\3" + c + " " + l.slice(1))), l = l.replace(n2, function(e3, t3, r3) {
      return t3 && t3.length % 2 ? e3 : (t3 || "") + r3;
    }), !d && o2.wrap ? i2 + l + i2 : l;
  }, "s");
  return s2.options = { escapeEverything: false, isIdentifier: false, quotes: "single", wrap: false }, s2.version = "3.0.0", cssesc_1 = s2;
}
function spreadAttributes(e2 = {}, t2, { class: r2 } = {}) {
  let n2 = "";
  r2 && (void 0 !== e2.class ? e2.class += ` ${r2}` : void 0 !== e2["class:list"] ? e2["class:list"] = [e2["class:list"], r2] : e2.class = r2);
  for (const [r3, s2] of Object.entries(e2)) n2 += addAttribute(s2, r3, true, t2);
  return markHTMLString(n2);
}
function isVNode(e2) {
  return e2 && "object" == typeof e2 && e2[AstroJSX];
}
function transformSlots(e2) {
  if ("string" == typeof e2.type) return e2;
  const t2 = {};
  if (isVNode(e2.props.children)) {
    const r2 = e2.props.children;
    if (!isVNode(r2)) return;
    if (!("slot" in r2.props)) return;
    const n2 = toSlotName(r2.props.slot);
    t2[n2] = [r2], t2[n2].$$slot = true, delete r2.props.slot, delete e2.props.children;
  } else Array.isArray(e2.props.children) && (e2.props.children = e2.props.children.map((e3) => {
    if (!isVNode(e3)) return e3;
    if (!("slot" in e3.props)) return e3;
    const r2 = toSlotName(e3.props.slot);
    return Array.isArray(t2[r2]) ? t2[r2].push(e3) : (t2[r2] = [e3], t2[r2].$$slot = true), delete e3.props.slot, Empty;
  }).filter((e3) => e3 !== Empty));
  Object.assign(e2.props, t2);
}
function markRawChildren(e2) {
  return "string" == typeof e2 ? markHTMLString(e2) : Array.isArray(e2) ? e2.map((e3) => markRawChildren(e3)) : e2;
}
function transformSetDirectives(e2) {
  if ("set:html" in e2.props || "set:text" in e2.props) {
    if ("set:html" in e2.props) {
      const t2 = markRawChildren(e2.props["set:html"]);
      return delete e2.props["set:html"], void Object.assign(e2.props, { children: t2 });
    }
    if ("set:text" in e2.props) {
      const t2 = e2.props["set:text"];
      return delete e2.props["set:text"], void Object.assign(e2.props, { children: t2 });
    }
  }
}
function createVNode(e2, t2 = {}, r2) {
  const n2 = { [Renderer]: "astro:jsx", [AstroJSX]: true, type: e2, props: t2 };
  return transformSetDirectives(n2), transformSlots(n2), n2;
}
var AstroError, AstroUserError, ClientAddressNotAvailable, PrerenderClientAddressNotAvailable, StaticClientAddressNotAvailable, NoMatchingStaticPathFound, OnlyResponseCanBeReturned, MissingMediaQueryDirective, NoMatchingRenderer, NoClientOnlyHint, InvalidGetStaticPathsEntry, InvalidGetStaticPathsReturn, GetStaticPathsExpectedParams, GetStaticPathsInvalidRouteParam, GetStaticPathsRequired, ReservedSlotName, NoMatchingImport, InvalidComponentArgs, PageNumberParamNotFound, ImageMissingAlt, InvalidImageService, MissingImageDimension, FailedToFetchRemoteImageDimensions, UnsupportedImageFormat, UnsupportedImageConversion, PrerenderDynamicEndpointPathCollide, ExpectedImage, ExpectedImageOptions, ExpectedNotESMImage, IncompatibleDescriptorOptions, NoImageMetadata, ResponseSentError, MiddlewareNoDataOrNextCalled, MiddlewareNotAResponse, EndpointDidNotReturnAResponse, LocalsNotAnObject, LocalsReassigned, AstroResponseHeadersReassigned, LocalImageUsedWrongly, AstroGlobUsedOutside, AstroGlobNoMatch, MissingSharp, i18nNoLocaleFoundInPath, RewriteWithBodyUsed, ForbiddenRewrite, ExperimentalFontsNotEnabled, FontFamilyNotFound, CspNotEnabled, ActionsReturnedInvalidDataError, ActionNotFoundError, SessionStorageInitError, SessionStorageSaveError, ASTRO_VERSION, REROUTE_DIRECTIVE_HEADER, REWRITE_DIRECTIVE_HEADER_KEY, REWRITE_DIRECTIVE_HEADER_VALUE, NOOP_MIDDLEWARE_HEADER, ROUTE_TYPE_HEADER, DEFAULT_404_COMPONENT, REDIRECT_STATUS_CODES, REROUTABLE_STATUS_CODES, clientAddressSymbol, originPathnameSymbol, responseSentSymbol, e, t, n, r$1, i, a, o, s, replace, ca, esca, pe, escape, escapeHTML, HTMLBytes, HTMLString, markHTMLString, PROP_TYPE, transitionDirectivesToCopyOnIsland, dictionary, headAndContentSym, astro_island_prebuilt_default, ISLAND_STYLES, RenderInstructionSymbol, voidElementNames, htmlBooleanAttributes, AMPERSAND_REGEX, DOUBLE_QUOTE_REGEX, STATIC_DIRECTIVES, toIdent, toAttributeString, kebab, toStyleString, noop, BufferedRenderer, isNode, isDeno, VALID_PROTOCOLS, uniqueElements, alphabetUpperCase, decodeMap, EncodingPadding$1, DecodingPadding$1, base64Alphabet, EncodingPadding, DecodingPadding, base64DecodeMap, util, objectUtil, ZodParsedType, getParsedType, ZodIssueCode, ZodError, errorMap, overrideErrorMap, makeIssue, ParseStatus, INVALID, DIRTY, OK, isAborted, isDirty, isValid, isAsync, errorUtil, ParseInputLazyPath, handleResult, ZodType, cuidRegex, cuid2Regex, ulidRegex, uuidRegex, nanoidRegex, jwtRegex, durationRegex, emailRegex, _emojiRegex, emojiRegex, ipv4Regex, ipv4CidrRegex, ipv6Regex, ipv6CidrRegex, base64Regex, base64urlRegex, dateRegexSource, dateRegex, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodSymbol, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, ZodObject, ZodUnion, ZodIntersection, ZodTuple, ZodMap, ZodSet, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodOptional, ZodNullable, ZodDefault, ZodCatch, ZodNaN, ZodBranded, ZodPipeline, ZodReadonly, ZodFirstPartyTypeKind, stringType, dateType, arrayType, objectType, enumType, ALGORITHMS, ALGORITHM_VALUES, ALLOWED_DIRECTIVES, encoder$1, decoder$1, renderTemplateResultSym, RenderTemplateResult, slotString, SlotString, internalProps, SCRIPT_RE, COMMENT_RE, ServerIslandComponent, renderServerIslandRuntime, SERVER_ISLAND_REPLACER, Fragment, Renderer, encoder, decoder, astroComponentInstanceSym, AstroComponentInstance, DOCTYPE_EXP, needsHeadRenderingSymbol, rendererAliases, clientOnlyValues, ASTRO_SLOT_EXP, ASTRO_STATIC_SLOT_EXP, hasTriedRenderComponentSymbol, cssesc_1, hasRequiredCssesc, AstroJSX, Empty, toSlotName;
var init_server_37mFo7XU = __esm({
  "dist/_worker.js/chunks/astro/server_37mFo7XU.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(normalizeLF, "normalizeLF");
    __name(codeFrame, "codeFrame");
    globalThis.process ??= {}, globalThis.process.env ??= {};
    AstroError = class extends Error {
      static {
        __name(this, "AstroError");
      }
      loc;
      title;
      hint;
      frame;
      type = "AstroError";
      constructor(e2, t2) {
        const { name: r2, title: n2, message: s2, stack: a2, location: o2, hint: i2, frame: d } = e2;
        super(s2, t2), this.title = n2, this.name = r2, s2 && (this.message = s2), this.stack = a2 || this.stack, this.loc = o2, this.hint = i2, this.frame = d;
      }
      setLocation(e2) {
        this.loc = e2;
      }
      setName(e2) {
        this.name = e2;
      }
      setMessage(e2) {
        this.message = e2;
      }
      setHint(e2) {
        this.hint = e2;
      }
      setFrame(e2, t2) {
        this.frame = codeFrame(e2, t2);
      }
      static is(e2) {
        return "AstroError" === e2?.type;
      }
    };
    AstroUserError = class extends Error {
      static {
        __name(this, "AstroUserError");
      }
      type = "AstroUserError";
      hint;
      name = "AstroUserError";
      constructor(e2, t2) {
        super(), this.message = e2, this.hint = t2;
      }
      static is(e2) {
        return "AstroUserError" === e2?.type;
      }
    };
    ClientAddressNotAvailable = { name: "ClientAddressNotAvailable", title: "`Astro.clientAddress` is not available in current adapter.", message: /* @__PURE__ */ __name((e2) => `\`Astro.clientAddress\` is not available in the \`${e2}\` adapter. File an issue with the adapter to add support.`, "message") };
    PrerenderClientAddressNotAvailable = { name: "PrerenderClientAddressNotAvailable", title: "`Astro.clientAddress` cannot be used inside prerendered routes.", message: /* @__PURE__ */ __name((e2) => `\`Astro.clientAddress\` cannot be used inside prerendered route ${e2}`, "message") };
    StaticClientAddressNotAvailable = { name: "StaticClientAddressNotAvailable", title: "`Astro.clientAddress` is not available in prerendered pages.", message: "`Astro.clientAddress` is only available on pages that are server-rendered.", hint: "See https://docs.astro.build/en/guides/on-demand-rendering/ for more information on how to enable SSR." };
    NoMatchingStaticPathFound = { name: "NoMatchingStaticPathFound", title: "No static path found for requested path.", message: /* @__PURE__ */ __name((e2) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${e2}\`.`, "message"), hint: /* @__PURE__ */ __name((e2) => `Possible dynamic routes being matched: ${e2.join(", ")}.`, "hint") };
    OnlyResponseCanBeReturned = { name: "OnlyResponseCanBeReturned", title: "Invalid type returned by Astro page.", message: /* @__PURE__ */ __name((e2, t2) => `Route \`${e2 || ""}\` returned a \`${t2}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`, "message"), hint: "See https://docs.astro.build/en/guides/on-demand-rendering/#response for more information." };
    MissingMediaQueryDirective = { name: "MissingMediaQueryDirective", title: "Missing value for `client:media` directive.", message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided' };
    NoMatchingRenderer = { name: "NoMatchingRenderer", title: "No matching renderer found.", message: /* @__PURE__ */ __name((e2, t2, r2, n2) => `Unable to render \`${e2}\`.

${n2 > 0 ? `There ${r2 ? "are" : "is"} ${n2} renderer${r2 ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${r2 ? "none were" : "it was not"} able to server-side render \`${e2}\`.` : "No valid renderer was found " + (t2 ? `for the \`.${t2}\` file extension.` : "for this file extension.")}`, "message"), hint: /* @__PURE__ */ __name((e2) => `Did you mean to enable the ${e2} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`, "hint") };
    NoClientOnlyHint = { name: "NoClientOnlyHint", title: "Missing hint on client:only directive.", message: /* @__PURE__ */ __name((e2) => `Unable to render \`${e2}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`, "message"), hint: /* @__PURE__ */ __name((e2) => `Did you mean to pass \`client:only="${e2}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`, "hint") };
    InvalidGetStaticPathsEntry = { name: "InvalidGetStaticPathsEntry", title: "Invalid entry inside getStaticPath's return value", message: /* @__PURE__ */ __name((e2) => `Invalid entry returned by getStaticPaths. Expected an object, got \`${e2}\``, "message"), hint: "If you're using a `.map` call, you might be looking for `.flatMap()` instead. See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths." };
    InvalidGetStaticPathsReturn = { name: "InvalidGetStaticPathsReturn", title: "Invalid value returned by getStaticPaths.", message: /* @__PURE__ */ __name((e2) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${e2}\``, "message"), hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths." };
    GetStaticPathsExpectedParams = { name: "GetStaticPathsExpectedParams", title: "Missing params property on `getStaticPaths` route.", message: "Missing or empty required `params` property on `getStaticPaths` route.", hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths." };
    GetStaticPathsInvalidRouteParam = { name: "GetStaticPathsInvalidRouteParam", title: "Invalid value for `getStaticPaths` route parameter.", message: /* @__PURE__ */ __name((e2, t2, r2) => `Invalid getStaticPaths route parameter for \`${e2}\`. Expected undefined, a string or a number, received \`${r2}\` (\`${t2}\`)`, "message"), hint: "See https://docs.astro.build/en/reference/routing-reference/#getstaticpaths for more information on getStaticPaths." };
    GetStaticPathsRequired = { name: "GetStaticPathsRequired", title: "`getStaticPaths()` function required for dynamic routes.", message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.", hint: "See https://docs.astro.build/en/guides/routing/#dynamic-routes for more information on dynamic routes.\n\n	If you meant for this route to be server-rendered, set `export const prerender = false;` in the page." };
    ReservedSlotName = { name: "ReservedSlotName", title: "Invalid slot name.", message: /* @__PURE__ */ __name((e2) => `Unable to create a slot named \`${e2}\`. \`${e2}\` is a reserved slot name. Please update the name of this slot.`, "message") };
    NoMatchingImport = { name: "NoMatchingImport", title: "No import found for component.", message: /* @__PURE__ */ __name((e2) => `Could not render \`${e2}\`. No matching import has been found for \`${e2}\`.`, "message"), hint: "Please make sure the component is properly imported." };
    InvalidComponentArgs = { name: "InvalidComponentArgs", title: "Invalid component arguments.", message: /* @__PURE__ */ __name((e2) => `Invalid arguments passed to${e2 ? ` <${e2}>` : ""} component.`, "message"), hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`." };
    PageNumberParamNotFound = { name: "PageNumberParamNotFound", title: "Page number param not found.", message: /* @__PURE__ */ __name((e2) => `[paginate()] page number param \`${e2}\` not found in your filepath.`, "message"), hint: "Rename your file to `[page].astro` or `[...page].astro`." };
    ImageMissingAlt = { name: "ImageMissingAlt", title: 'Image missing required "alt" property.', message: 'Image missing "alt" property. "alt" text is required to describe important images on the page.', hint: 'Use an empty string ("") for decorative images.' };
    InvalidImageService = { name: "InvalidImageService", title: "Error while loading image service.", message: "There was an error loading the configured image service. Please see the stack trace for more information." };
    MissingImageDimension = { name: "MissingImageDimension", title: "Missing image dimensions", message: /* @__PURE__ */ __name((e2, t2) => `Missing ${"both" === e2 ? "width and height attributes" : `${e2} attribute`} for ${t2}. When using remote images, both dimensions are required in order to avoid CLS.`, "message"), hint: "If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets). You can also use `inferSize={true}` for remote images to get the original dimensions." };
    FailedToFetchRemoteImageDimensions = { name: "FailedToFetchRemoteImageDimensions", title: "Failed to retrieve remote image dimensions", message: /* @__PURE__ */ __name((e2) => `Failed to get the dimensions for ${e2}.`, "message"), hint: "Verify your remote image URL is accurate, and that you are not using `inferSize` with a file located in your `public/` folder." };
    UnsupportedImageFormat = { name: "UnsupportedImageFormat", title: "Unsupported image format", message: /* @__PURE__ */ __name((e2, t2, r2) => `Received unsupported format \`${e2}\` from \`${t2}\`. Currently only ${r2.join(", ")} are supported by our image services.`, "message"), hint: "Using an `img` tag directly instead of the `Image` component might be what you're looking for." };
    UnsupportedImageConversion = { name: "UnsupportedImageConversion", title: "Unsupported image conversion", message: "Converting between vector (such as SVGs) and raster (such as PNGs and JPEGs) images is not currently supported." };
    PrerenderDynamicEndpointPathCollide = { name: "PrerenderDynamicEndpointPathCollide", title: "Prerendered dynamic endpoint has path collision.", message: /* @__PURE__ */ __name((e2) => `Could not render \`${e2}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`, "message"), hint: /* @__PURE__ */ __name((e2) => `Rename \`${e2}\` to \`${e2.replace(/\.(?:js|ts)/, (e3) => ".json" + e3)}\``, "hint") };
    ExpectedImage = { name: "ExpectedImage", title: "Expected src to be an image.", message: /* @__PURE__ */ __name((e2, t2, r2) => `Expected \`src\` property for \`getImage\` or \`<Image />\` to be either an ESM imported image or a string with the path of a remote image. Received \`${e2}\` (type: \`${t2}\`).

Full serialized options received: \`${r2}\`.`, "message"), hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct. If you're passing an async function, make sure to call and await it." };
    ExpectedImageOptions = { name: "ExpectedImageOptions", title: "Expected image options.", message: /* @__PURE__ */ __name((e2) => `Expected getImage() parameter to be an object. Received \`${e2}\`.`, "message") };
    ExpectedNotESMImage = { name: "ExpectedNotESMImage", title: "Expected image options, not an ESM-imported image.", message: "An ESM-imported image cannot be passed directly to `getImage()`. Instead, pass an object with the image in the `src` property.", hint: "Try changing `getImage(myImage)` to `getImage({ src: myImage })`" };
    IncompatibleDescriptorOptions = { name: "IncompatibleDescriptorOptions", title: "Cannot set both `densities` and `widths`", message: "Only one of `densities` or `widths` can be specified. In most cases, you'll probably want to use only `widths` if you require specific widths.", hint: "Those attributes are used to construct a `srcset` attribute, which cannot have both `x` and `w` descriptors." };
    NoImageMetadata = { name: "NoImageMetadata", title: "Could not process image metadata.", message: /* @__PURE__ */ __name((e2) => `Could not process image metadata${e2 ? ` for \`${e2}\`` : ""}.`, "message"), hint: "This is often caused by a corrupted or malformed image. Re-exporting the image from your image editor may fix this issue." };
    ResponseSentError = { name: "ResponseSentError", title: "Unable to set response.", message: "The response has already been sent to the browser and cannot be altered." };
    MiddlewareNoDataOrNextCalled = { name: "MiddlewareNoDataOrNextCalled", title: "The middleware didn't return a `Response`.", message: "Make sure your middleware returns a `Response` object, either directly or by returning the `Response` from calling the `next` function." };
    MiddlewareNotAResponse = { name: "MiddlewareNotAResponse", title: "The middleware returned something that is not a `Response` object.", message: "Any data returned from middleware must be a valid `Response` object." };
    EndpointDidNotReturnAResponse = { name: "EndpointDidNotReturnAResponse", title: "The endpoint did not return a `Response`.", message: "An endpoint must return either a `Response`, or a `Promise` that resolves with a `Response`." };
    LocalsNotAnObject = { name: "LocalsNotAnObject", title: "Value assigned to `locals` is not accepted.", message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.", hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`." };
    LocalsReassigned = { name: "LocalsReassigned", title: "`locals` must not be reassigned.", message: "`locals` can not be assigned directly.", hint: "Set a `locals` property instead." };
    AstroResponseHeadersReassigned = { name: "AstroResponseHeadersReassigned", title: "`Astro.response.headers` must not be reassigned.", message: "Individual headers can be added to and removed from `Astro.response.headers`, but it must not be replaced with another instance of `Headers` altogether.", hint: "Consider using `Astro.response.headers.add()`, and `Astro.response.headers.delete()`." };
    LocalImageUsedWrongly = { name: "LocalImageUsedWrongly", title: "Local images must be imported.", message: /* @__PURE__ */ __name((e2) => `\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a string filepath. Received \`${e2}\`.`, "message"), hint: "If you want to use an image from your `src` folder, you need to either import it or if the image is coming from a content collection, use the [image() schema helper](https://docs.astro.build/en/guides/images/#images-in-content-collections). See https://docs.astro.build/en/guides/images/#src-required for more information on the `src` property." };
    AstroGlobUsedOutside = { name: "AstroGlobUsedOutside", title: "Astro.glob() used outside of an Astro file.", message: /* @__PURE__ */ __name((e2) => `\`Astro.glob(${e2})\` can only be used in \`.astro\` files. \`import.meta.glob(${e2})\` can be used instead to achieve a similar result.`, "message"), hint: "See Vite's documentation on `import.meta.glob` for more information: https://vite.dev/guide/features.html#glob-import" };
    AstroGlobNoMatch = { name: "AstroGlobNoMatch", title: "Astro.glob() did not match any files.", message: /* @__PURE__ */ __name((e2) => `\`Astro.glob(${e2})\` did not return any matching files.`, "message"), hint: "Check the pattern for typos." };
    MissingSharp = { name: "MissingSharp", title: "Could not find Sharp.", message: "Could not find Sharp. Please install Sharp (`sharp`) manually into your project or migrate to another image service.", hint: "See Sharp's installation instructions for more information: https://sharp.pixelplumbing.com/install. If you are not relying on `astro:assets` to optimize, transform, or process any images, you can configure a passthrough image service instead of installing Sharp. See https://docs.astro.build/en/reference/errors/missing-sharp for more information.\n\nSee https://docs.astro.build/en/guides/images/#default-image-service for more information on how to migrate to another image service." };
    i18nNoLocaleFoundInPath = { name: "i18nNoLocaleFoundInPath", title: "The path doesn't contain any locale", message: "You tried to use an i18n utility on a path that doesn't contain any locale. You can use `pathHasLocale` first to determine if the path has a locale." };
    RewriteWithBodyUsed = { name: "RewriteWithBodyUsed", title: "Cannot use Astro.rewrite after the request body has been read", message: "Astro.rewrite() cannot be used if the request body has already been read. If you need to read the body, first clone the request." };
    ForbiddenRewrite = { name: "ForbiddenRewrite", title: "Forbidden rewrite to a static route.", message: /* @__PURE__ */ __name((e2, t2, r2) => `You tried to rewrite the on-demand route '${e2}' with the static route '${t2}', when using the 'server' output. 

The static route '${t2}' is rendered by the component
'${r2}', which is marked as prerendered. This is a forbidden operation because during the build the component '${r2}' is compiled to an
HTML file, which can't be retrieved at runtime by Astro.`, "message"), hint: /* @__PURE__ */ __name((e2) => `Add \`export const prerender = false\` to the component '${e2}', or use a Astro.redirect().`, "hint") };
    ExperimentalFontsNotEnabled = { name: "ExperimentalFontsNotEnabled", title: "Experimental fonts are not enabled", message: "The Font component is used but experimental fonts have not been registered in the config.", hint: "Check that you have enabled experimental fonts and also configured your preferred fonts." };
    FontFamilyNotFound = { name: "FontFamilyNotFound", title: "Font family not found", message: /* @__PURE__ */ __name((e2) => `No data was found for the \`"${e2}"\` family passed to the \`<Font>\` component.`, "message"), hint: "This is often caused by a typo. Check that the `<Font />` component or `getFontData()` function are using a `cssVariable` specified in your config." };
    CspNotEnabled = { name: "CspNotEnabled", title: "CSP feature isn't enabled", message: "The `experimental.csp` configuration isn't enabled." };
    ActionsReturnedInvalidDataError = { name: "ActionsReturnedInvalidDataError", title: "Action handler returned invalid data.", message: /* @__PURE__ */ __name((e2) => `Action handler returned invalid data. Handlers should return serializable data types like objects, arrays, strings, and numbers. Parse error: ${e2}`, "message"), hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue" };
    ActionNotFoundError = { name: "ActionNotFoundError", title: "Action not found.", message: /* @__PURE__ */ __name((e2) => `The server received a request for an action named \`${e2}\` but could not find a match. If you renamed an action, check that you've updated your \`actions/index\` file and your calling code to match.`, "message"), hint: "You can run `astro check` to detect type errors caused by mismatched action names." };
    SessionStorageInitError = { name: "SessionStorageInitError", title: "Session storage could not be initialized.", message: /* @__PURE__ */ __name((e2, t2) => `Error when initializing session storage${t2 ? ` with driver \`${t2}\`` : ""}. \`${e2 ?? ""}\``, "message"), hint: "For more information, see https://docs.astro.build/en/guides/sessions/" };
    SessionStorageSaveError = { name: "SessionStorageSaveError", title: "Session data could not be saved.", message: /* @__PURE__ */ __name((e2, t2) => `Error when saving session data${t2 ? ` with driver \`${t2}\`` : ""}. \`${e2 ?? ""}\``, "message"), hint: "For more information, see https://docs.astro.build/en/guides/sessions/" };
    __name(validateArgs, "validateArgs");
    __name(baseCreateComponent, "baseCreateComponent");
    __name(createComponentWithOptions, "createComponentWithOptions");
    __name(createComponent, "createComponent");
    ASTRO_VERSION = "5.16.6";
    REROUTE_DIRECTIVE_HEADER = "X-Astro-Reroute";
    REWRITE_DIRECTIVE_HEADER_KEY = "X-Astro-Rewrite";
    REWRITE_DIRECTIVE_HEADER_VALUE = "yes";
    NOOP_MIDDLEWARE_HEADER = "X-Astro-Noop";
    ROUTE_TYPE_HEADER = "X-Astro-Route-Type";
    DEFAULT_404_COMPONENT = "astro-default-404.astro";
    REDIRECT_STATUS_CODES = [301, 302, 303, 307, 308, 300, 304];
    REROUTABLE_STATUS_CODES = [404, 500];
    clientAddressSymbol = Symbol.for("astro.clientAddress");
    originPathnameSymbol = Symbol.for("astro.originPathname");
    responseSentSymbol = Symbol.for("astro.responseSent");
    __name(createAstroGlobFn, "createAstroGlobFn");
    __name(createAstro, "createAstro");
    e = globalThis.process || {};
    t = e.argv || [];
    n = e.env || {};
    r$1 = !(n.NO_COLOR || t.includes("--no-color")) && (!!n.FORCE_COLOR || t.includes("--color") || "win32" === e.platform || (e.stdout || {}).isTTY && "dumb" !== n.TERM || !!n.CI);
    i = /* @__PURE__ */ __name((e2, t2, r2 = e2) => (n2) => {
      let s2 = "" + n2, o2 = s2.indexOf(t2, e2.length);
      return ~o2 ? e2 + a(s2, t2, r2, o2) + t2 : e2 + s2 + t2;
    }, "i");
    a = /* @__PURE__ */ __name((e2, t2, r2, n2) => {
      let s2 = "", a2 = 0;
      do {
        s2 += e2.substring(a2, n2) + r2, a2 = n2 + t2.length, n2 = e2.indexOf(t2, a2);
      } while (~n2);
      return s2 + e2.substring(a2);
    }, "a");
    o = /* @__PURE__ */ __name((e2 = r$1) => {
      let t2 = e2 ? i : () => String;
      return { isColorSupported: e2, reset: t2("\x1B[0m", "\x1B[0m"), bold: t2("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"), dim: t2("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"), italic: t2("\x1B[3m", "\x1B[23m"), underline: t2("\x1B[4m", "\x1B[24m"), inverse: t2("\x1B[7m", "\x1B[27m"), hidden: t2("\x1B[8m", "\x1B[28m"), strikethrough: t2("\x1B[9m", "\x1B[29m"), black: t2("\x1B[30m", "\x1B[39m"), red: t2("\x1B[31m", "\x1B[39m"), green: t2("\x1B[32m", "\x1B[39m"), yellow: t2("\x1B[33m", "\x1B[39m"), blue: t2("\x1B[34m", "\x1B[39m"), magenta: t2("\x1B[35m", "\x1B[39m"), cyan: t2("\x1B[36m", "\x1B[39m"), white: t2("\x1B[37m", "\x1B[39m"), gray: t2("\x1B[90m", "\x1B[39m"), bgBlack: t2("\x1B[40m", "\x1B[49m"), bgRed: t2("\x1B[41m", "\x1B[49m"), bgGreen: t2("\x1B[42m", "\x1B[49m"), bgYellow: t2("\x1B[43m", "\x1B[49m"), bgBlue: t2("\x1B[44m", "\x1B[49m"), bgMagenta: t2("\x1B[45m", "\x1B[49m"), bgCyan: t2("\x1B[46m", "\x1B[49m"), bgWhite: t2("\x1B[47m", "\x1B[49m"), blackBright: t2("\x1B[90m", "\x1B[39m"), redBright: t2("\x1B[91m", "\x1B[39m"), greenBright: t2("\x1B[92m", "\x1B[39m"), yellowBright: t2("\x1B[93m", "\x1B[39m"), blueBright: t2("\x1B[94m", "\x1B[39m"), magentaBright: t2("\x1B[95m", "\x1B[39m"), cyanBright: t2("\x1B[96m", "\x1B[39m"), whiteBright: t2("\x1B[97m", "\x1B[39m"), bgBlackBright: t2("\x1B[100m", "\x1B[49m"), bgRedBright: t2("\x1B[101m", "\x1B[49m"), bgGreenBright: t2("\x1B[102m", "\x1B[49m"), bgYellowBright: t2("\x1B[103m", "\x1B[49m"), bgBlueBright: t2("\x1B[104m", "\x1B[49m"), bgMagentaBright: t2("\x1B[105m", "\x1B[49m"), bgCyanBright: t2("\x1B[106m", "\x1B[49m"), bgWhiteBright: t2("\x1B[107m", "\x1B[49m") };
    }, "o");
    s = o();
    __name(renderEndpoint, "renderEndpoint");
    ({ replace } = "");
    ca = /[&<>'"]/g;
    esca = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
    pe = /* @__PURE__ */ __name((e2) => esca[e2], "pe");
    escape = /* @__PURE__ */ __name((e2) => replace.call(e2, ca, pe), "escape");
    __name(isPromise, "isPromise");
    __name(streamAsyncIterator, "streamAsyncIterator");
    escapeHTML = escape;
    HTMLBytes = class extends Uint8Array {
      static {
        __name(this, "HTMLBytes");
      }
    };
    Object.defineProperty(HTMLBytes.prototype, Symbol.toStringTag, { get: /* @__PURE__ */ __name(() => "HTMLBytes", "get") });
    HTMLString = class extends String {
      static {
        __name(this, "HTMLString");
      }
      get [Symbol.toStringTag]() {
        return "HTMLString";
      }
    };
    markHTMLString = /* @__PURE__ */ __name((e2) => e2 instanceof HTMLString ? e2 : "string" == typeof e2 ? new HTMLString(e2) : e2, "markHTMLString");
    __name(isHTMLString, "isHTMLString");
    __name(markHTMLBytes, "markHTMLBytes");
    __name(hasGetReader, "hasGetReader");
    __name(unescapeChunksAsync, "unescapeChunksAsync");
    __name(unescapeChunks, "unescapeChunks");
    __name(unescapeHTML, "unescapeHTML");
    __name(isAstroComponentFactory, "isAstroComponentFactory");
    __name(isAPropagatingComponent, "isAPropagatingComponent");
    __name(getPropagationHint, "getPropagationHint");
    __name(r, "r");
    __name(clsx, "clsx");
    PROP_TYPE = { Value: 0, JSON: 1, RegExp: 2, Date: 3, Map: 4, Set: 5, BigInt: 6, URL: 7, Uint8Array: 8, Uint16Array: 9, Uint32Array: 10, Infinity: 11 };
    __name(serializeArray, "serializeArray");
    __name(serializeObject, "serializeObject");
    __name(convertToSerializedForm, "convertToSerializedForm");
    __name(serializeProps, "serializeProps");
    transitionDirectivesToCopyOnIsland = Object.freeze(["data-astro-transition-scope", "data-astro-transition-persist", "data-astro-transition-persist-props"]);
    __name(extractDirectives, "extractDirectives");
    __name(generateHydrateScript, "generateHydrateScript");
    dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
    __name(bitwise, "bitwise");
    __name(shorthash, "shorthash");
    headAndContentSym = Symbol.for("astro.headAndContent");
    __name(isHeadAndContent, "isHeadAndContent");
    __name(createThinHead, "createThinHead");
    astro_island_prebuilt_default = '(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>1/0*t},o=t=>{let[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([l,e])=>[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();';
    ISLAND_STYLES = "astro-island,astro-slot,astro-static-slot{display:contents}";
    __name(determineIfNeedsHydrationScript, "determineIfNeedsHydrationScript");
    __name(determinesIfNeedsDirectiveScript, "determinesIfNeedsDirectiveScript");
    __name(getDirectiveScriptText, "getDirectiveScriptText");
    __name(getPrescripts, "getPrescripts");
    __name(renderCspContent, "renderCspContent");
    RenderInstructionSymbol = Symbol.for("astro:render");
    __name(createRenderInstruction, "createRenderInstruction");
    __name(isRenderInstruction, "isRenderInstruction");
    voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
    htmlBooleanAttributes = /^(?:allowfullscreen|async|autofocus|autoplay|checked|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|inert|loop|muted|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|selected|itemscope)$/i;
    AMPERSAND_REGEX = /&/g;
    DOUBLE_QUOTE_REGEX = /"/g;
    STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
    toIdent = /* @__PURE__ */ __name((e2) => e2.trim().replace(/(?!^)\b\w|\s+|\W+/g, (e3, t2) => /\W/.test(e3) ? "" : 0 === t2 ? e3 : e3.toUpperCase()), "toIdent");
    toAttributeString = /* @__PURE__ */ __name((e2, t2 = true) => t2 ? String(e2).replace(AMPERSAND_REGEX, "&#38;").replace(DOUBLE_QUOTE_REGEX, "&#34;") : e2, "toAttributeString");
    kebab = /* @__PURE__ */ __name((e2) => e2.toLowerCase() === e2 ? e2 : e2.replace(/[A-Z]/g, (e3) => `-${e3.toLowerCase()}`), "kebab");
    toStyleString = /* @__PURE__ */ __name((e2) => Object.entries(e2).filter(([e3, t2]) => "string" == typeof t2 && t2.trim() || "number" == typeof t2).map(([e3, t2]) => "-" !== e3[0] && "-" !== e3[1] ? `${kebab(e3)}:${t2}` : `${e3}:${t2}`).join(";"), "toStyleString");
    __name(defineScriptVars, "defineScriptVars");
    __name(formatList, "formatList");
    __name(isCustomElement, "isCustomElement");
    __name(handleBooleanAttribute, "handleBooleanAttribute");
    __name(addAttribute, "addAttribute");
    __name(internalSpreadAttributes, "internalSpreadAttributes");
    __name(renderElement$1, "renderElement$1");
    noop = /* @__PURE__ */ __name(() => {
    }, "noop");
    BufferedRenderer = class {
      static {
        __name(this, "BufferedRenderer");
      }
      chunks = [];
      renderPromise;
      destination;
      flushed = false;
      constructor(e2, t2) {
        this.destination = e2, this.renderPromise = t2(this), isPromise(this.renderPromise) && Promise.resolve(this.renderPromise).catch(noop);
      }
      write(e2) {
        this.flushed ? this.destination.write(e2) : this.chunks.push(e2);
      }
      flush() {
        if (this.flushed) throw new Error("The render buffer has already been flushed.");
        this.flushed = true;
        for (const e2 of this.chunks) this.destination.write(e2);
        return this.renderPromise;
      }
    };
    __name(createBufferedRenderer, "createBufferedRenderer");
    isNode = "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process);
    isDeno = "undefined" != typeof Deno;
    __name(promiseWithResolvers, "promiseWithResolvers");
    VALID_PROTOCOLS = ["http:", "https:"];
    __name(isHttpUrl, "isHttpUrl");
    uniqueElements = /* @__PURE__ */ __name((e2, t2, r2) => {
      const n2 = JSON.stringify(e2.props), s2 = e2.children;
      return t2 === r2.findIndex((e3) => JSON.stringify(e3.props) === n2 && e3.children == s2);
    }, "uniqueElements");
    __name(renderAllHeadContent, "renderAllHeadContent");
    __name(renderHead, "renderHead");
    __name(maybeRenderHead, "maybeRenderHead");
    __name(encodeHexUpperCase, "encodeHexUpperCase");
    __name(decodeHex, "decodeHex");
    alphabetUpperCase = "0123456789ABCDEF";
    decodeMap = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
    __name(encodeBase64, "encodeBase64");
    __name(encodeBase64_internal, "encodeBase64_internal");
    !function(e2) {
      e2[e2.Include = 0] = "Include", e2[e2.None = 1] = "None";
    }(EncodingPadding$1 || (EncodingPadding$1 = {})), function(e2) {
      e2[e2.Required = 0] = "Required", e2[e2.Ignore = 1] = "Ignore";
    }(DecodingPadding$1 || (DecodingPadding$1 = {}));
    base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    __name(decodeBase64, "decodeBase64");
    __name(decodeBase64_internal, "decodeBase64_internal");
    !function(e2) {
      e2[e2.Include = 0] = "Include", e2[e2.None = 1] = "None";
    }(EncodingPadding || (EncodingPadding = {})), function(e2) {
      e2[e2.Required = 0] = "Required", e2[e2.Ignore = 1] = "Ignore";
    }(DecodingPadding || (DecodingPadding = {}));
    base64DecodeMap = { 0: 52, 1: 53, 2: 54, 3: 55, 4: 56, 5: 57, 6: 58, 7: 59, 8: 60, 9: 61, A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11, M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, X: 23, Y: 24, Z: 25, a: 26, b: 27, c: 28, d: 29, e: 30, f: 31, g: 32, h: 33, i: 34, j: 35, k: 36, l: 37, m: 38, n: 39, o: 40, p: 41, q: 42, r: 43, s: 44, t: 45, u: 46, v: 47, w: 48, x: 49, y: 50, z: 51, "+": 62, "/": 63 };
    !function(e2) {
      e2.assertEqual = (e3) => {
      }, e2.assertIs = function(e3) {
      }, e2.assertNever = function(e3) {
        throw new Error();
      }, e2.arrayToEnum = (e3) => {
        const t2 = {};
        for (const r2 of e3) t2[r2] = r2;
        return t2;
      }, e2.getValidEnumValues = (t2) => {
        const r2 = e2.objectKeys(t2).filter((e3) => "number" != typeof t2[t2[e3]]), n2 = {};
        for (const e3 of r2) n2[e3] = t2[e3];
        return e2.objectValues(n2);
      }, e2.objectValues = (t2) => e2.objectKeys(t2).map(function(e3) {
        return t2[e3];
      }), e2.objectKeys = "function" == typeof Object.keys ? (e3) => Object.keys(e3) : (e3) => {
        const t2 = [];
        for (const r2 in e3) Object.prototype.hasOwnProperty.call(e3, r2) && t2.push(r2);
        return t2;
      }, e2.find = (e3, t2) => {
        for (const r2 of e3) if (t2(r2)) return r2;
      }, e2.isInteger = "function" == typeof Number.isInteger ? (e3) => Number.isInteger(e3) : (e3) => "number" == typeof e3 && Number.isFinite(e3) && Math.floor(e3) === e3, e2.joinValues = function(e3, t2 = " | ") {
        return e3.map((e4) => "string" == typeof e4 ? `'${e4}'` : e4).join(t2);
      }, e2.jsonStringifyReplacer = (e3, t2) => "bigint" == typeof t2 ? t2.toString() : t2;
    }(util || (util = {})), function(e2) {
      e2.mergeShapes = (e3, t2) => ({ ...e3, ...t2 });
    }(objectUtil || (objectUtil = {}));
    ZodParsedType = util.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
    getParsedType = /* @__PURE__ */ __name((e2) => {
      switch (typeof e2) {
        case "undefined":
          return ZodParsedType.undefined;
        case "string":
          return ZodParsedType.string;
        case "number":
          return Number.isNaN(e2) ? ZodParsedType.nan : ZodParsedType.number;
        case "boolean":
          return ZodParsedType.boolean;
        case "function":
          return ZodParsedType.function;
        case "bigint":
          return ZodParsedType.bigint;
        case "symbol":
          return ZodParsedType.symbol;
        case "object":
          return Array.isArray(e2) ? ZodParsedType.array : null === e2 ? ZodParsedType.null : e2.then && "function" == typeof e2.then && e2.catch && "function" == typeof e2.catch ? ZodParsedType.promise : "undefined" != typeof Map && e2 instanceof Map ? ZodParsedType.map : "undefined" != typeof Set && e2 instanceof Set ? ZodParsedType.set : "undefined" != typeof Date && e2 instanceof Date ? ZodParsedType.date : ZodParsedType.object;
        default:
          return ZodParsedType.unknown;
      }
    }, "getParsedType");
    ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    ZodError = class _ZodError extends Error {
      static {
        __name(this, "ZodError");
      }
      get errors() {
        return this.issues;
      }
      constructor(e2) {
        super(), this.issues = [], this.addIssue = (e3) => {
          this.issues = [...this.issues, e3];
        }, this.addIssues = (e3 = []) => {
          this.issues = [...this.issues, ...e3];
        };
        const t2 = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, t2) : this.__proto__ = t2, this.name = "ZodError", this.issues = e2;
      }
      format(e2) {
        const t2 = e2 || function(e3) {
          return e3.message;
        }, r2 = { _errors: [] }, n2 = /* @__PURE__ */ __name((e3) => {
          for (const s2 of e3.issues) if ("invalid_union" === s2.code) s2.unionErrors.map(n2);
          else if ("invalid_return_type" === s2.code) n2(s2.returnTypeError);
          else if ("invalid_arguments" === s2.code) n2(s2.argumentsError);
          else if (0 === s2.path.length) r2._errors.push(t2(s2));
          else {
            let e4 = r2, n3 = 0;
            for (; n3 < s2.path.length; ) {
              const r3 = s2.path[n3];
              n3 === s2.path.length - 1 ? (e4[r3] = e4[r3] || { _errors: [] }, e4[r3]._errors.push(t2(s2))) : e4[r3] = e4[r3] || { _errors: [] }, e4 = e4[r3], n3++;
            }
          }
        }, "n");
        return n2(this), r2;
      }
      static assert(e2) {
        if (!(e2 instanceof _ZodError)) throw new Error(`Not a ZodError: ${e2}`);
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return 0 === this.issues.length;
      }
      flatten(e2 = (e3) => e3.message) {
        const t2 = {}, r2 = [];
        for (const n2 of this.issues) if (n2.path.length > 0) {
          const r3 = n2.path[0];
          t2[r3] = t2[r3] || [], t2[r3].push(e2(n2));
        } else r2.push(e2(n2));
        return { formErrors: r2, fieldErrors: t2 };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    ZodError.create = (e2) => new ZodError(e2);
    errorMap = /* @__PURE__ */ __name((e2, t2) => {
      let r2;
      switch (e2.code) {
        case ZodIssueCode.invalid_type:
          r2 = e2.received === ZodParsedType.undefined ? "Required" : `Expected ${e2.expected}, received ${e2.received}`;
          break;
        case ZodIssueCode.invalid_literal:
          r2 = `Invalid literal value, expected ${JSON.stringify(e2.expected, util.jsonStringifyReplacer)}`;
          break;
        case ZodIssueCode.unrecognized_keys:
          r2 = `Unrecognized key(s) in object: ${util.joinValues(e2.keys, ", ")}`;
          break;
        case ZodIssueCode.invalid_union:
          r2 = "Invalid input";
          break;
        case ZodIssueCode.invalid_union_discriminator:
          r2 = `Invalid discriminator value. Expected ${util.joinValues(e2.options)}`;
          break;
        case ZodIssueCode.invalid_enum_value:
          r2 = `Invalid enum value. Expected ${util.joinValues(e2.options)}, received '${e2.received}'`;
          break;
        case ZodIssueCode.invalid_arguments:
          r2 = "Invalid function arguments";
          break;
        case ZodIssueCode.invalid_return_type:
          r2 = "Invalid function return type";
          break;
        case ZodIssueCode.invalid_date:
          r2 = "Invalid date";
          break;
        case ZodIssueCode.invalid_string:
          "object" == typeof e2.validation ? "includes" in e2.validation ? (r2 = `Invalid input: must include "${e2.validation.includes}"`, "number" == typeof e2.validation.position && (r2 = `${r2} at one or more positions greater than or equal to ${e2.validation.position}`)) : "startsWith" in e2.validation ? r2 = `Invalid input: must start with "${e2.validation.startsWith}"` : "endsWith" in e2.validation ? r2 = `Invalid input: must end with "${e2.validation.endsWith}"` : util.assertNever(e2.validation) : r2 = "regex" !== e2.validation ? `Invalid ${e2.validation}` : "Invalid";
          break;
        case ZodIssueCode.too_small:
          r2 = "array" === e2.type ? `Array must contain ${e2.exact ? "exactly" : e2.inclusive ? "at least" : "more than"} ${e2.minimum} element(s)` : "string" === e2.type ? `String must contain ${e2.exact ? "exactly" : e2.inclusive ? "at least" : "over"} ${e2.minimum} character(s)` : "number" === e2.type || "bigint" === e2.type ? `Number must be ${e2.exact ? "exactly equal to " : e2.inclusive ? "greater than or equal to " : "greater than "}${e2.minimum}` : "date" === e2.type ? `Date must be ${e2.exact ? "exactly equal to " : e2.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e2.minimum))}` : "Invalid input";
          break;
        case ZodIssueCode.too_big:
          r2 = "array" === e2.type ? `Array must contain ${e2.exact ? "exactly" : e2.inclusive ? "at most" : "less than"} ${e2.maximum} element(s)` : "string" === e2.type ? `String must contain ${e2.exact ? "exactly" : e2.inclusive ? "at most" : "under"} ${e2.maximum} character(s)` : "number" === e2.type ? `Number must be ${e2.exact ? "exactly" : e2.inclusive ? "less than or equal to" : "less than"} ${e2.maximum}` : "bigint" === e2.type ? `BigInt must be ${e2.exact ? "exactly" : e2.inclusive ? "less than or equal to" : "less than"} ${e2.maximum}` : "date" === e2.type ? `Date must be ${e2.exact ? "exactly" : e2.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e2.maximum))}` : "Invalid input";
          break;
        case ZodIssueCode.custom:
          r2 = "Invalid input";
          break;
        case ZodIssueCode.invalid_intersection_types:
          r2 = "Intersection results could not be merged";
          break;
        case ZodIssueCode.not_multiple_of:
          r2 = `Number must be a multiple of ${e2.multipleOf}`;
          break;
        case ZodIssueCode.not_finite:
          r2 = "Number must be finite";
          break;
        default:
          r2 = t2.defaultError, util.assertNever(e2);
      }
      return { message: r2 };
    }, "errorMap");
    overrideErrorMap = errorMap;
    __name(getErrorMap, "getErrorMap");
    makeIssue = /* @__PURE__ */ __name((e2) => {
      const { data: t2, path: r2, errorMaps: n2, issueData: s2 } = e2, a2 = [...r2, ...s2.path || []], o2 = { ...s2, path: a2 };
      if (void 0 !== s2.message) return { ...s2, path: a2, message: s2.message };
      let i2 = "";
      const d = n2.filter((e3) => !!e3).slice().reverse();
      for (const e3 of d) i2 = e3(o2, { data: t2, defaultError: i2 }).message;
      return { ...s2, path: a2, message: i2 };
    }, "makeIssue");
    __name(addIssueToContext, "addIssueToContext");
    ParseStatus = class _ParseStatus {
      static {
        __name(this, "ParseStatus");
      }
      constructor() {
        this.value = "valid";
      }
      dirty() {
        "valid" === this.value && (this.value = "dirty");
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted");
      }
      static mergeArray(e2, t2) {
        const r2 = [];
        for (const n2 of t2) {
          if ("aborted" === n2.status) return INVALID;
          "dirty" === n2.status && e2.dirty(), r2.push(n2.value);
        }
        return { status: e2.value, value: r2 };
      }
      static async mergeObjectAsync(e2, t2) {
        const r2 = [];
        for (const e3 of t2) {
          const t3 = await e3.key, n2 = await e3.value;
          r2.push({ key: t3, value: n2 });
        }
        return _ParseStatus.mergeObjectSync(e2, r2);
      }
      static mergeObjectSync(e2, t2) {
        const r2 = {};
        for (const n2 of t2) {
          const { key: t3, value: s2 } = n2;
          if ("aborted" === t3.status) return INVALID;
          if ("aborted" === s2.status) return INVALID;
          "dirty" === t3.status && e2.dirty(), "dirty" === s2.status && e2.dirty(), "__proto__" === t3.value || void 0 === s2.value && !n2.alwaysSet || (r2[t3.value] = s2.value);
        }
        return { status: e2.value, value: r2 };
      }
    };
    INVALID = Object.freeze({ status: "aborted" });
    DIRTY = /* @__PURE__ */ __name((e2) => ({ status: "dirty", value: e2 }), "DIRTY");
    OK = /* @__PURE__ */ __name((e2) => ({ status: "valid", value: e2 }), "OK");
    isAborted = /* @__PURE__ */ __name((e2) => "aborted" === e2.status, "isAborted");
    isDirty = /* @__PURE__ */ __name((e2) => "dirty" === e2.status, "isDirty");
    isValid = /* @__PURE__ */ __name((e2) => "valid" === e2.status, "isValid");
    isAsync = /* @__PURE__ */ __name((e2) => "undefined" != typeof Promise && e2 instanceof Promise, "isAsync");
    !function(e2) {
      e2.errToObj = (e3) => "string" == typeof e3 ? { message: e3 } : e3 || {}, e2.toString = (e3) => "string" == typeof e3 ? e3 : e3?.message;
    }(errorUtil || (errorUtil = {}));
    ParseInputLazyPath = class {
      static {
        __name(this, "ParseInputLazyPath");
      }
      constructor(e2, t2, r2, n2) {
        this._cachedPath = [], this.parent = e2, this.data = t2, this._path = r2, this._key = n2;
      }
      get path() {
        return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
      }
    };
    handleResult = /* @__PURE__ */ __name((e2, t2) => {
      if (isValid(t2)) return { success: true, data: t2.value };
      if (!e2.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return { success: false, get error() {
        if (this._error) return this._error;
        const t3 = new ZodError(e2.common.issues);
        return this._error = t3, this._error;
      } };
    }, "handleResult");
    __name(processCreateParams, "processCreateParams");
    ZodType = class {
      static {
        __name(this, "ZodType");
      }
      get description() {
        return this._def.description;
      }
      _getType(e2) {
        return getParsedType(e2.data);
      }
      _getOrReturnCtx(e2, t2) {
        return t2 || { common: e2.parent.common, data: e2.data, parsedType: getParsedType(e2.data), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent };
      }
      _processInputParams(e2) {
        return { status: new ParseStatus(), ctx: { common: e2.parent.common, data: e2.data, parsedType: getParsedType(e2.data), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent } };
      }
      _parseSync(e2) {
        const t2 = this._parse(e2);
        if (isAsync(t2)) throw new Error("Synchronous parse encountered promise.");
        return t2;
      }
      _parseAsync(e2) {
        const t2 = this._parse(e2);
        return Promise.resolve(t2);
      }
      parse(e2, t2) {
        const r2 = this.safeParse(e2, t2);
        if (r2.success) return r2.data;
        throw r2.error;
      }
      safeParse(e2, t2) {
        const r2 = { common: { issues: [], async: t2?.async ?? false, contextualErrorMap: t2?.errorMap }, path: t2?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: getParsedType(e2) }, n2 = this._parseSync({ data: e2, path: r2.path, parent: r2 });
        return handleResult(r2, n2);
      }
      "~validate"(e2) {
        const t2 = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: getParsedType(e2) };
        if (!this["~standard"].async) try {
          const r2 = this._parseSync({ data: e2, path: [], parent: t2 });
          return isValid(r2) ? { value: r2.value } : { issues: t2.common.issues };
        } catch (e3) {
          e3?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = true), t2.common = { issues: [], async: true };
        }
        return this._parseAsync({ data: e2, path: [], parent: t2 }).then((e3) => isValid(e3) ? { value: e3.value } : { issues: t2.common.issues });
      }
      async parseAsync(e2, t2) {
        const r2 = await this.safeParseAsync(e2, t2);
        if (r2.success) return r2.data;
        throw r2.error;
      }
      async safeParseAsync(e2, t2) {
        const r2 = { common: { issues: [], contextualErrorMap: t2?.errorMap, async: true }, path: t2?.path || [], schemaErrorMap: this._def.errorMap, parent: null, data: e2, parsedType: getParsedType(e2) }, n2 = this._parse({ data: e2, path: r2.path, parent: r2 }), s2 = await (isAsync(n2) ? n2 : Promise.resolve(n2));
        return handleResult(r2, s2);
      }
      refine(e2, t2) {
        const r2 = /* @__PURE__ */ __name((e3) => "string" == typeof t2 || void 0 === t2 ? { message: t2 } : "function" == typeof t2 ? t2(e3) : t2, "r");
        return this._refinement((t3, n2) => {
          const s2 = e2(t3), a2 = /* @__PURE__ */ __name(() => n2.addIssue({ code: ZodIssueCode.custom, ...r2(t3) }), "a");
          return "undefined" != typeof Promise && s2 instanceof Promise ? s2.then((e3) => !!e3 || (a2(), false)) : !!s2 || (a2(), false);
        });
      }
      refinement(e2, t2) {
        return this._refinement((r2, n2) => !!e2(r2) || (n2.addIssue("function" == typeof t2 ? t2(r2, n2) : t2), false));
      }
      _refinement(e2) {
        return new ZodEffects({ schema: this, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: { type: "refinement", refinement: e2 } });
      }
      superRefine(e2) {
        return this._refinement(e2);
      }
      constructor(e2) {
        this.spa = this.safeParseAsync, this._def = e2, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: /* @__PURE__ */ __name((e3) => this["~validate"](e3), "validate") };
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(e2) {
        return ZodUnion.create([this, e2], this._def);
      }
      and(e2) {
        return ZodIntersection.create(this, e2, this._def);
      }
      transform(e2) {
        return new ZodEffects({ ...processCreateParams(this._def), schema: this, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: { type: "transform", transform: e2 } });
      }
      default(e2) {
        const t2 = "function" == typeof e2 ? e2 : () => e2;
        return new ZodDefault({ ...processCreateParams(this._def), innerType: this, defaultValue: t2, typeName: ZodFirstPartyTypeKind.ZodDefault });
      }
      brand() {
        return new ZodBranded({ typeName: ZodFirstPartyTypeKind.ZodBranded, type: this, ...processCreateParams(this._def) });
      }
      catch(e2) {
        const t2 = "function" == typeof e2 ? e2 : () => e2;
        return new ZodCatch({ ...processCreateParams(this._def), innerType: this, catchValue: t2, typeName: ZodFirstPartyTypeKind.ZodCatch });
      }
      describe(e2) {
        return new (0, this.constructor)({ ...this._def, description: e2 });
      }
      pipe(e2) {
        return ZodPipeline.create(this, e2);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    cuidRegex = /^c[^\s-]{8,}$/i;
    cuid2Regex = /^[0-9a-z]+$/;
    ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    nanoidRegex = /^[a-z0-9_-]{21}$/i;
    jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    _emojiRegex = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
    ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    dateRegexSource = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
    dateRegex = new RegExp(`^${dateRegexSource}$`);
    __name(timeRegexSource, "timeRegexSource");
    __name(timeRegex, "timeRegex");
    __name(datetimeRegex, "datetimeRegex");
    __name(isValidIP, "isValidIP");
    __name(isValidJWT, "isValidJWT");
    __name(isValidCidr, "isValidCidr");
    ZodString = class _ZodString extends ZodType {
      static {
        __name(this, "ZodString");
      }
      _parse(e2) {
        this._def.coerce && (e2.data = String(e2.data));
        if (this._getType(e2) !== ZodParsedType.string) {
          const t3 = this._getOrReturnCtx(e2);
          return addIssueToContext(t3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.string, received: t3.parsedType }), INVALID;
        }
        const t2 = new ParseStatus();
        let r2;
        for (const n2 of this._def.checks) if ("min" === n2.kind) e2.data.length < n2.value && (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { code: ZodIssueCode.too_small, minimum: n2.value, type: "string", inclusive: true, exact: false, message: n2.message }), t2.dirty());
        else if ("max" === n2.kind) e2.data.length > n2.value && (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { code: ZodIssueCode.too_big, maximum: n2.value, type: "string", inclusive: true, exact: false, message: n2.message }), t2.dirty());
        else if ("length" === n2.kind) {
          const s2 = e2.data.length > n2.value, a2 = e2.data.length < n2.value;
          (s2 || a2) && (r2 = this._getOrReturnCtx(e2, r2), s2 ? addIssueToContext(r2, { code: ZodIssueCode.too_big, maximum: n2.value, type: "string", inclusive: true, exact: true, message: n2.message }) : a2 && addIssueToContext(r2, { code: ZodIssueCode.too_small, minimum: n2.value, type: "string", inclusive: true, exact: true, message: n2.message }), t2.dirty());
        } else if ("email" === n2.kind) emailRegex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "email", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty());
        else if ("emoji" === n2.kind) emojiRegex || (emojiRegex = new RegExp(_emojiRegex, "u")), emojiRegex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "emoji", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty());
        else if ("uuid" === n2.kind) uuidRegex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "uuid", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty());
        else if ("nanoid" === n2.kind) nanoidRegex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "nanoid", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty());
        else if ("cuid" === n2.kind) cuidRegex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "cuid", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty());
        else if ("cuid2" === n2.kind) cuid2Regex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "cuid2", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty());
        else if ("ulid" === n2.kind) ulidRegex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "ulid", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty());
        else if ("url" === n2.kind) try {
          new URL(e2.data);
        } catch {
          r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "url", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty();
        }
        else if ("regex" === n2.kind) {
          n2.regex.lastIndex = 0;
          n2.regex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "regex", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty());
        } else if ("trim" === n2.kind) e2.data = e2.data.trim();
        else if ("includes" === n2.kind) e2.data.includes(n2.value, n2.position) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { code: ZodIssueCode.invalid_string, validation: { includes: n2.value, position: n2.position }, message: n2.message }), t2.dirty());
        else if ("toLowerCase" === n2.kind) e2.data = e2.data.toLowerCase();
        else if ("toUpperCase" === n2.kind) e2.data = e2.data.toUpperCase();
        else if ("startsWith" === n2.kind) e2.data.startsWith(n2.value) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { code: ZodIssueCode.invalid_string, validation: { startsWith: n2.value }, message: n2.message }), t2.dirty());
        else if ("endsWith" === n2.kind) e2.data.endsWith(n2.value) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { code: ZodIssueCode.invalid_string, validation: { endsWith: n2.value }, message: n2.message }), t2.dirty());
        else if ("datetime" === n2.kind) {
          datetimeRegex(n2).test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { code: ZodIssueCode.invalid_string, validation: "datetime", message: n2.message }), t2.dirty());
        } else if ("date" === n2.kind) {
          dateRegex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { code: ZodIssueCode.invalid_string, validation: "date", message: n2.message }), t2.dirty());
        } else if ("time" === n2.kind) {
          timeRegex(n2).test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { code: ZodIssueCode.invalid_string, validation: "time", message: n2.message }), t2.dirty());
        } else "duration" === n2.kind ? durationRegex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "duration", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty()) : "ip" === n2.kind ? isValidIP(e2.data, n2.version) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "ip", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty()) : "jwt" === n2.kind ? isValidJWT(e2.data, n2.alg) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "jwt", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty()) : "cidr" === n2.kind ? isValidCidr(e2.data, n2.version) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "cidr", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty()) : "base64" === n2.kind ? base64Regex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "base64", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty()) : "base64url" === n2.kind ? base64urlRegex.test(e2.data) || (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { validation: "base64url", code: ZodIssueCode.invalid_string, message: n2.message }), t2.dirty()) : util.assertNever(n2);
        return { status: t2.value, value: e2.data };
      }
      _regex(e2, t2, r2) {
        return this.refinement((t3) => e2.test(t3), { validation: t2, code: ZodIssueCode.invalid_string, ...errorUtil.errToObj(r2) });
      }
      _addCheck(e2) {
        return new _ZodString({ ...this._def, checks: [...this._def.checks, e2] });
      }
      email(e2) {
        return this._addCheck({ kind: "email", ...errorUtil.errToObj(e2) });
      }
      url(e2) {
        return this._addCheck({ kind: "url", ...errorUtil.errToObj(e2) });
      }
      emoji(e2) {
        return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(e2) });
      }
      uuid(e2) {
        return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(e2) });
      }
      nanoid(e2) {
        return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(e2) });
      }
      cuid(e2) {
        return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(e2) });
      }
      cuid2(e2) {
        return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(e2) });
      }
      ulid(e2) {
        return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(e2) });
      }
      base64(e2) {
        return this._addCheck({ kind: "base64", ...errorUtil.errToObj(e2) });
      }
      base64url(e2) {
        return this._addCheck({ kind: "base64url", ...errorUtil.errToObj(e2) });
      }
      jwt(e2) {
        return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(e2) });
      }
      ip(e2) {
        return this._addCheck({ kind: "ip", ...errorUtil.errToObj(e2) });
      }
      cidr(e2) {
        return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(e2) });
      }
      datetime(e2) {
        return "string" == typeof e2 ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e2 }) : this._addCheck({ kind: "datetime", precision: void 0 === e2?.precision ? null : e2?.precision, offset: e2?.offset ?? false, local: e2?.local ?? false, ...errorUtil.errToObj(e2?.message) });
      }
      date(e2) {
        return this._addCheck({ kind: "date", message: e2 });
      }
      time(e2) {
        return "string" == typeof e2 ? this._addCheck({ kind: "time", precision: null, message: e2 }) : this._addCheck({ kind: "time", precision: void 0 === e2?.precision ? null : e2?.precision, ...errorUtil.errToObj(e2?.message) });
      }
      duration(e2) {
        return this._addCheck({ kind: "duration", ...errorUtil.errToObj(e2) });
      }
      regex(e2, t2) {
        return this._addCheck({ kind: "regex", regex: e2, ...errorUtil.errToObj(t2) });
      }
      includes(e2, t2) {
        return this._addCheck({ kind: "includes", value: e2, position: t2?.position, ...errorUtil.errToObj(t2?.message) });
      }
      startsWith(e2, t2) {
        return this._addCheck({ kind: "startsWith", value: e2, ...errorUtil.errToObj(t2) });
      }
      endsWith(e2, t2) {
        return this._addCheck({ kind: "endsWith", value: e2, ...errorUtil.errToObj(t2) });
      }
      min(e2, t2) {
        return this._addCheck({ kind: "min", value: e2, ...errorUtil.errToObj(t2) });
      }
      max(e2, t2) {
        return this._addCheck({ kind: "max", value: e2, ...errorUtil.errToObj(t2) });
      }
      length(e2, t2) {
        return this._addCheck({ kind: "length", value: e2, ...errorUtil.errToObj(t2) });
      }
      nonempty(e2) {
        return this.min(1, errorUtil.errToObj(e2));
      }
      trim() {
        return new _ZodString({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
      }
      toLowerCase() {
        return new _ZodString({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
      }
      toUpperCase() {
        return new _ZodString({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
      }
      get isDatetime() {
        return !!this._def.checks.find((e2) => "datetime" === e2.kind);
      }
      get isDate() {
        return !!this._def.checks.find((e2) => "date" === e2.kind);
      }
      get isTime() {
        return !!this._def.checks.find((e2) => "time" === e2.kind);
      }
      get isDuration() {
        return !!this._def.checks.find((e2) => "duration" === e2.kind);
      }
      get isEmail() {
        return !!this._def.checks.find((e2) => "email" === e2.kind);
      }
      get isURL() {
        return !!this._def.checks.find((e2) => "url" === e2.kind);
      }
      get isEmoji() {
        return !!this._def.checks.find((e2) => "emoji" === e2.kind);
      }
      get isUUID() {
        return !!this._def.checks.find((e2) => "uuid" === e2.kind);
      }
      get isNANOID() {
        return !!this._def.checks.find((e2) => "nanoid" === e2.kind);
      }
      get isCUID() {
        return !!this._def.checks.find((e2) => "cuid" === e2.kind);
      }
      get isCUID2() {
        return !!this._def.checks.find((e2) => "cuid2" === e2.kind);
      }
      get isULID() {
        return !!this._def.checks.find((e2) => "ulid" === e2.kind);
      }
      get isIP() {
        return !!this._def.checks.find((e2) => "ip" === e2.kind);
      }
      get isCIDR() {
        return !!this._def.checks.find((e2) => "cidr" === e2.kind);
      }
      get isBase64() {
        return !!this._def.checks.find((e2) => "base64" === e2.kind);
      }
      get isBase64url() {
        return !!this._def.checks.find((e2) => "base64url" === e2.kind);
      }
      get minLength() {
        let e2 = null;
        for (const t2 of this._def.checks) "min" === t2.kind && (null === e2 || t2.value > e2) && (e2 = t2.value);
        return e2;
      }
      get maxLength() {
        let e2 = null;
        for (const t2 of this._def.checks) "max" === t2.kind && (null === e2 || t2.value < e2) && (e2 = t2.value);
        return e2;
      }
    };
    __name(floatSafeRemainder, "floatSafeRemainder");
    ZodString.create = (e2) => new ZodString({ checks: [], typeName: ZodFirstPartyTypeKind.ZodString, coerce: e2?.coerce ?? false, ...processCreateParams(e2) });
    ZodNumber = class _ZodNumber extends ZodType {
      static {
        __name(this, "ZodNumber");
      }
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
      }
      _parse(e2) {
        this._def.coerce && (e2.data = Number(e2.data));
        if (this._getType(e2) !== ZodParsedType.number) {
          const t3 = this._getOrReturnCtx(e2);
          return addIssueToContext(t3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.number, received: t3.parsedType }), INVALID;
        }
        let t2;
        const r2 = new ParseStatus();
        for (const n2 of this._def.checks) if ("int" === n2.kind) util.isInteger(e2.data) || (t2 = this._getOrReturnCtx(e2, t2), addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: "integer", received: "float", message: n2.message }), r2.dirty());
        else if ("min" === n2.kind) {
          (n2.inclusive ? e2.data < n2.value : e2.data <= n2.value) && (t2 = this._getOrReturnCtx(e2, t2), addIssueToContext(t2, { code: ZodIssueCode.too_small, minimum: n2.value, type: "number", inclusive: n2.inclusive, exact: false, message: n2.message }), r2.dirty());
        } else if ("max" === n2.kind) {
          (n2.inclusive ? e2.data > n2.value : e2.data >= n2.value) && (t2 = this._getOrReturnCtx(e2, t2), addIssueToContext(t2, { code: ZodIssueCode.too_big, maximum: n2.value, type: "number", inclusive: n2.inclusive, exact: false, message: n2.message }), r2.dirty());
        } else "multipleOf" === n2.kind ? 0 !== floatSafeRemainder(e2.data, n2.value) && (t2 = this._getOrReturnCtx(e2, t2), addIssueToContext(t2, { code: ZodIssueCode.not_multiple_of, multipleOf: n2.value, message: n2.message }), r2.dirty()) : "finite" === n2.kind ? Number.isFinite(e2.data) || (t2 = this._getOrReturnCtx(e2, t2), addIssueToContext(t2, { code: ZodIssueCode.not_finite, message: n2.message }), r2.dirty()) : util.assertNever(n2);
        return { status: r2.value, value: e2.data };
      }
      gte(e2, t2) {
        return this.setLimit("min", e2, true, errorUtil.toString(t2));
      }
      gt(e2, t2) {
        return this.setLimit("min", e2, false, errorUtil.toString(t2));
      }
      lte(e2, t2) {
        return this.setLimit("max", e2, true, errorUtil.toString(t2));
      }
      lt(e2, t2) {
        return this.setLimit("max", e2, false, errorUtil.toString(t2));
      }
      setLimit(e2, t2, r2, n2) {
        return new _ZodNumber({ ...this._def, checks: [...this._def.checks, { kind: e2, value: t2, inclusive: r2, message: errorUtil.toString(n2) }] });
      }
      _addCheck(e2) {
        return new _ZodNumber({ ...this._def, checks: [...this._def.checks, e2] });
      }
      int(e2) {
        return this._addCheck({ kind: "int", message: errorUtil.toString(e2) });
      }
      positive(e2) {
        return this._addCheck({ kind: "min", value: 0, inclusive: false, message: errorUtil.toString(e2) });
      }
      negative(e2) {
        return this._addCheck({ kind: "max", value: 0, inclusive: false, message: errorUtil.toString(e2) });
      }
      nonpositive(e2) {
        return this._addCheck({ kind: "max", value: 0, inclusive: true, message: errorUtil.toString(e2) });
      }
      nonnegative(e2) {
        return this._addCheck({ kind: "min", value: 0, inclusive: true, message: errorUtil.toString(e2) });
      }
      multipleOf(e2, t2) {
        return this._addCheck({ kind: "multipleOf", value: e2, message: errorUtil.toString(t2) });
      }
      finite(e2) {
        return this._addCheck({ kind: "finite", message: errorUtil.toString(e2) });
      }
      safe(e2) {
        return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: errorUtil.toString(e2) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: errorUtil.toString(e2) });
      }
      get minValue() {
        let e2 = null;
        for (const t2 of this._def.checks) "min" === t2.kind && (null === e2 || t2.value > e2) && (e2 = t2.value);
        return e2;
      }
      get maxValue() {
        let e2 = null;
        for (const t2 of this._def.checks) "max" === t2.kind && (null === e2 || t2.value < e2) && (e2 = t2.value);
        return e2;
      }
      get isInt() {
        return !!this._def.checks.find((e2) => "int" === e2.kind || "multipleOf" === e2.kind && util.isInteger(e2.value));
      }
      get isFinite() {
        let e2 = null, t2 = null;
        for (const r2 of this._def.checks) {
          if ("finite" === r2.kind || "int" === r2.kind || "multipleOf" === r2.kind) return true;
          "min" === r2.kind ? (null === t2 || r2.value > t2) && (t2 = r2.value) : "max" === r2.kind && (null === e2 || r2.value < e2) && (e2 = r2.value);
        }
        return Number.isFinite(t2) && Number.isFinite(e2);
      }
    };
    ZodNumber.create = (e2) => new ZodNumber({ checks: [], typeName: ZodFirstPartyTypeKind.ZodNumber, coerce: e2?.coerce || false, ...processCreateParams(e2) });
    ZodBigInt = class _ZodBigInt extends ZodType {
      static {
        __name(this, "ZodBigInt");
      }
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte;
      }
      _parse(e2) {
        if (this._def.coerce) try {
          e2.data = BigInt(e2.data);
        } catch {
          return this._getInvalidInput(e2);
        }
        if (this._getType(e2) !== ZodParsedType.bigint) return this._getInvalidInput(e2);
        let t2;
        const r2 = new ParseStatus();
        for (const n2 of this._def.checks) if ("min" === n2.kind) {
          (n2.inclusive ? e2.data < n2.value : e2.data <= n2.value) && (t2 = this._getOrReturnCtx(e2, t2), addIssueToContext(t2, { code: ZodIssueCode.too_small, type: "bigint", minimum: n2.value, inclusive: n2.inclusive, message: n2.message }), r2.dirty());
        } else if ("max" === n2.kind) {
          (n2.inclusive ? e2.data > n2.value : e2.data >= n2.value) && (t2 = this._getOrReturnCtx(e2, t2), addIssueToContext(t2, { code: ZodIssueCode.too_big, type: "bigint", maximum: n2.value, inclusive: n2.inclusive, message: n2.message }), r2.dirty());
        } else "multipleOf" === n2.kind ? e2.data % n2.value !== BigInt(0) && (t2 = this._getOrReturnCtx(e2, t2), addIssueToContext(t2, { code: ZodIssueCode.not_multiple_of, multipleOf: n2.value, message: n2.message }), r2.dirty()) : util.assertNever(n2);
        return { status: r2.value, value: e2.data };
      }
      _getInvalidInput(e2) {
        const t2 = this._getOrReturnCtx(e2);
        return addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.bigint, received: t2.parsedType }), INVALID;
      }
      gte(e2, t2) {
        return this.setLimit("min", e2, true, errorUtil.toString(t2));
      }
      gt(e2, t2) {
        return this.setLimit("min", e2, false, errorUtil.toString(t2));
      }
      lte(e2, t2) {
        return this.setLimit("max", e2, true, errorUtil.toString(t2));
      }
      lt(e2, t2) {
        return this.setLimit("max", e2, false, errorUtil.toString(t2));
      }
      setLimit(e2, t2, r2, n2) {
        return new _ZodBigInt({ ...this._def, checks: [...this._def.checks, { kind: e2, value: t2, inclusive: r2, message: errorUtil.toString(n2) }] });
      }
      _addCheck(e2) {
        return new _ZodBigInt({ ...this._def, checks: [...this._def.checks, e2] });
      }
      positive(e2) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: errorUtil.toString(e2) });
      }
      negative(e2) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: errorUtil.toString(e2) });
      }
      nonpositive(e2) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: errorUtil.toString(e2) });
      }
      nonnegative(e2) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: errorUtil.toString(e2) });
      }
      multipleOf(e2, t2) {
        return this._addCheck({ kind: "multipleOf", value: e2, message: errorUtil.toString(t2) });
      }
      get minValue() {
        let e2 = null;
        for (const t2 of this._def.checks) "min" === t2.kind && (null === e2 || t2.value > e2) && (e2 = t2.value);
        return e2;
      }
      get maxValue() {
        let e2 = null;
        for (const t2 of this._def.checks) "max" === t2.kind && (null === e2 || t2.value < e2) && (e2 = t2.value);
        return e2;
      }
    };
    ZodBigInt.create = (e2) => new ZodBigInt({ checks: [], typeName: ZodFirstPartyTypeKind.ZodBigInt, coerce: e2?.coerce ?? false, ...processCreateParams(e2) });
    ZodBoolean = class extends ZodType {
      static {
        __name(this, "ZodBoolean");
      }
      _parse(e2) {
        this._def.coerce && (e2.data = Boolean(e2.data));
        if (this._getType(e2) !== ZodParsedType.boolean) {
          const t2 = this._getOrReturnCtx(e2);
          return addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.boolean, received: t2.parsedType }), INVALID;
        }
        return OK(e2.data);
      }
    };
    ZodBoolean.create = (e2) => new ZodBoolean({ typeName: ZodFirstPartyTypeKind.ZodBoolean, coerce: e2?.coerce || false, ...processCreateParams(e2) });
    ZodDate = class _ZodDate extends ZodType {
      static {
        __name(this, "ZodDate");
      }
      _parse(e2) {
        this._def.coerce && (e2.data = new Date(e2.data));
        if (this._getType(e2) !== ZodParsedType.date) {
          const t3 = this._getOrReturnCtx(e2);
          return addIssueToContext(t3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.date, received: t3.parsedType }), INVALID;
        }
        if (Number.isNaN(e2.data.getTime())) {
          return addIssueToContext(this._getOrReturnCtx(e2), { code: ZodIssueCode.invalid_date }), INVALID;
        }
        const t2 = new ParseStatus();
        let r2;
        for (const n2 of this._def.checks) "min" === n2.kind ? e2.data.getTime() < n2.value && (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { code: ZodIssueCode.too_small, message: n2.message, inclusive: true, exact: false, minimum: n2.value, type: "date" }), t2.dirty()) : "max" === n2.kind ? e2.data.getTime() > n2.value && (r2 = this._getOrReturnCtx(e2, r2), addIssueToContext(r2, { code: ZodIssueCode.too_big, message: n2.message, inclusive: true, exact: false, maximum: n2.value, type: "date" }), t2.dirty()) : util.assertNever(n2);
        return { status: t2.value, value: new Date(e2.data.getTime()) };
      }
      _addCheck(e2) {
        return new _ZodDate({ ...this._def, checks: [...this._def.checks, e2] });
      }
      min(e2, t2) {
        return this._addCheck({ kind: "min", value: e2.getTime(), message: errorUtil.toString(t2) });
      }
      max(e2, t2) {
        return this._addCheck({ kind: "max", value: e2.getTime(), message: errorUtil.toString(t2) });
      }
      get minDate() {
        let e2 = null;
        for (const t2 of this._def.checks) "min" === t2.kind && (null === e2 || t2.value > e2) && (e2 = t2.value);
        return null != e2 ? new Date(e2) : null;
      }
      get maxDate() {
        let e2 = null;
        for (const t2 of this._def.checks) "max" === t2.kind && (null === e2 || t2.value < e2) && (e2 = t2.value);
        return null != e2 ? new Date(e2) : null;
      }
    };
    ZodDate.create = (e2) => new ZodDate({ checks: [], coerce: e2?.coerce || false, typeName: ZodFirstPartyTypeKind.ZodDate, ...processCreateParams(e2) });
    ZodSymbol = class extends ZodType {
      static {
        __name(this, "ZodSymbol");
      }
      _parse(e2) {
        if (this._getType(e2) !== ZodParsedType.symbol) {
          const t2 = this._getOrReturnCtx(e2);
          return addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.symbol, received: t2.parsedType }), INVALID;
        }
        return OK(e2.data);
      }
    };
    ZodSymbol.create = (e2) => new ZodSymbol({ typeName: ZodFirstPartyTypeKind.ZodSymbol, ...processCreateParams(e2) });
    ZodUndefined = class extends ZodType {
      static {
        __name(this, "ZodUndefined");
      }
      _parse(e2) {
        if (this._getType(e2) !== ZodParsedType.undefined) {
          const t2 = this._getOrReturnCtx(e2);
          return addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.undefined, received: t2.parsedType }), INVALID;
        }
        return OK(e2.data);
      }
    };
    ZodUndefined.create = (e2) => new ZodUndefined({ typeName: ZodFirstPartyTypeKind.ZodUndefined, ...processCreateParams(e2) });
    ZodNull = class extends ZodType {
      static {
        __name(this, "ZodNull");
      }
      _parse(e2) {
        if (this._getType(e2) !== ZodParsedType.null) {
          const t2 = this._getOrReturnCtx(e2);
          return addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.null, received: t2.parsedType }), INVALID;
        }
        return OK(e2.data);
      }
    };
    ZodNull.create = (e2) => new ZodNull({ typeName: ZodFirstPartyTypeKind.ZodNull, ...processCreateParams(e2) });
    ZodAny = class extends ZodType {
      static {
        __name(this, "ZodAny");
      }
      constructor() {
        super(...arguments), this._any = true;
      }
      _parse(e2) {
        return OK(e2.data);
      }
    };
    ZodAny.create = (e2) => new ZodAny({ typeName: ZodFirstPartyTypeKind.ZodAny, ...processCreateParams(e2) });
    ZodUnknown = class extends ZodType {
      static {
        __name(this, "ZodUnknown");
      }
      constructor() {
        super(...arguments), this._unknown = true;
      }
      _parse(e2) {
        return OK(e2.data);
      }
    };
    ZodUnknown.create = (e2) => new ZodUnknown({ typeName: ZodFirstPartyTypeKind.ZodUnknown, ...processCreateParams(e2) });
    ZodNever = class extends ZodType {
      static {
        __name(this, "ZodNever");
      }
      _parse(e2) {
        const t2 = this._getOrReturnCtx(e2);
        return addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.never, received: t2.parsedType }), INVALID;
      }
    };
    ZodNever.create = (e2) => new ZodNever({ typeName: ZodFirstPartyTypeKind.ZodNever, ...processCreateParams(e2) });
    ZodVoid = class extends ZodType {
      static {
        __name(this, "ZodVoid");
      }
      _parse(e2) {
        if (this._getType(e2) !== ZodParsedType.undefined) {
          const t2 = this._getOrReturnCtx(e2);
          return addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.void, received: t2.parsedType }), INVALID;
        }
        return OK(e2.data);
      }
    };
    ZodVoid.create = (e2) => new ZodVoid({ typeName: ZodFirstPartyTypeKind.ZodVoid, ...processCreateParams(e2) });
    ZodArray = class _ZodArray extends ZodType {
      static {
        __name(this, "ZodArray");
      }
      _parse(e2) {
        const { ctx: t2, status: r2 } = this._processInputParams(e2), n2 = this._def;
        if (t2.parsedType !== ZodParsedType.array) return addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.array, received: t2.parsedType }), INVALID;
        if (null !== n2.exactLength) {
          const e3 = t2.data.length > n2.exactLength.value, s3 = t2.data.length < n2.exactLength.value;
          (e3 || s3) && (addIssueToContext(t2, { code: e3 ? ZodIssueCode.too_big : ZodIssueCode.too_small, minimum: s3 ? n2.exactLength.value : void 0, maximum: e3 ? n2.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: n2.exactLength.message }), r2.dirty());
        }
        if (null !== n2.minLength && t2.data.length < n2.minLength.value && (addIssueToContext(t2, { code: ZodIssueCode.too_small, minimum: n2.minLength.value, type: "array", inclusive: true, exact: false, message: n2.minLength.message }), r2.dirty()), null !== n2.maxLength && t2.data.length > n2.maxLength.value && (addIssueToContext(t2, { code: ZodIssueCode.too_big, maximum: n2.maxLength.value, type: "array", inclusive: true, exact: false, message: n2.maxLength.message }), r2.dirty()), t2.common.async) return Promise.all([...t2.data].map((e3, r3) => n2.type._parseAsync(new ParseInputLazyPath(t2, e3, t2.path, r3)))).then((e3) => ParseStatus.mergeArray(r2, e3));
        const s2 = [...t2.data].map((e3, r3) => n2.type._parseSync(new ParseInputLazyPath(t2, e3, t2.path, r3)));
        return ParseStatus.mergeArray(r2, s2);
      }
      get element() {
        return this._def.type;
      }
      min(e2, t2) {
        return new _ZodArray({ ...this._def, minLength: { value: e2, message: errorUtil.toString(t2) } });
      }
      max(e2, t2) {
        return new _ZodArray({ ...this._def, maxLength: { value: e2, message: errorUtil.toString(t2) } });
      }
      length(e2, t2) {
        return new _ZodArray({ ...this._def, exactLength: { value: e2, message: errorUtil.toString(t2) } });
      }
      nonempty(e2) {
        return this.min(1, e2);
      }
    };
    __name(deepPartialify, "deepPartialify");
    ZodArray.create = (e2, t2) => new ZodArray({ type: e2, minLength: null, maxLength: null, exactLength: null, typeName: ZodFirstPartyTypeKind.ZodArray, ...processCreateParams(t2) });
    ZodObject = class _ZodObject extends ZodType {
      static {
        __name(this, "ZodObject");
      }
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const e2 = this._def.shape(), t2 = util.objectKeys(e2);
        return this._cached = { shape: e2, keys: t2 }, this._cached;
      }
      _parse(e2) {
        if (this._getType(e2) !== ZodParsedType.object) {
          const t3 = this._getOrReturnCtx(e2);
          return addIssueToContext(t3, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.object, received: t3.parsedType }), INVALID;
        }
        const { status: t2, ctx: r2 } = this._processInputParams(e2), { shape: n2, keys: s2 } = this._getCached(), a2 = [];
        if (!(this._def.catchall instanceof ZodNever && "strip" === this._def.unknownKeys)) for (const e3 in r2.data) s2.includes(e3) || a2.push(e3);
        const o2 = [];
        for (const e3 of s2) {
          const t3 = n2[e3], s3 = r2.data[e3];
          o2.push({ key: { status: "valid", value: e3 }, value: t3._parse(new ParseInputLazyPath(r2, s3, r2.path, e3)), alwaysSet: e3 in r2.data });
        }
        if (this._def.catchall instanceof ZodNever) {
          const e3 = this._def.unknownKeys;
          if ("passthrough" === e3) for (const e4 of a2) o2.push({ key: { status: "valid", value: e4 }, value: { status: "valid", value: r2.data[e4] } });
          else if ("strict" === e3) a2.length > 0 && (addIssueToContext(r2, { code: ZodIssueCode.unrecognized_keys, keys: a2 }), t2.dirty());
          else if ("strip" !== e3) throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          const e3 = this._def.catchall;
          for (const t3 of a2) {
            const n3 = r2.data[t3];
            o2.push({ key: { status: "valid", value: t3 }, value: e3._parse(new ParseInputLazyPath(r2, n3, r2.path, t3)), alwaysSet: t3 in r2.data });
          }
        }
        return r2.common.async ? Promise.resolve().then(async () => {
          const e3 = [];
          for (const t3 of o2) {
            const r3 = await t3.key, n3 = await t3.value;
            e3.push({ key: r3, value: n3, alwaysSet: t3.alwaysSet });
          }
          return e3;
        }).then((e3) => ParseStatus.mergeObjectSync(t2, e3)) : ParseStatus.mergeObjectSync(t2, o2);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e2) {
        return errorUtil.errToObj, new _ZodObject({ ...this._def, unknownKeys: "strict", ...void 0 !== e2 ? { errorMap: /* @__PURE__ */ __name((t2, r2) => {
          const n2 = this._def.errorMap?.(t2, r2).message ?? r2.defaultError;
          return "unrecognized_keys" === t2.code ? { message: errorUtil.errToObj(e2).message ?? n2 } : { message: n2 };
        }, "errorMap") } : {} });
      }
      strip() {
        return new _ZodObject({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new _ZodObject({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e2) {
        return new _ZodObject({ ...this._def, shape: /* @__PURE__ */ __name(() => ({ ...this._def.shape(), ...e2 }), "shape") });
      }
      merge(e2) {
        return new _ZodObject({ unknownKeys: e2._def.unknownKeys, catchall: e2._def.catchall, shape: /* @__PURE__ */ __name(() => ({ ...this._def.shape(), ...e2._def.shape() }), "shape"), typeName: ZodFirstPartyTypeKind.ZodObject });
      }
      setKey(e2, t2) {
        return this.augment({ [e2]: t2 });
      }
      catchall(e2) {
        return new _ZodObject({ ...this._def, catchall: e2 });
      }
      pick(e2) {
        const t2 = {};
        for (const r2 of util.objectKeys(e2)) e2[r2] && this.shape[r2] && (t2[r2] = this.shape[r2]);
        return new _ZodObject({ ...this._def, shape: /* @__PURE__ */ __name(() => t2, "shape") });
      }
      omit(e2) {
        const t2 = {};
        for (const r2 of util.objectKeys(this.shape)) e2[r2] || (t2[r2] = this.shape[r2]);
        return new _ZodObject({ ...this._def, shape: /* @__PURE__ */ __name(() => t2, "shape") });
      }
      deepPartial() {
        return deepPartialify(this);
      }
      partial(e2) {
        const t2 = {};
        for (const r2 of util.objectKeys(this.shape)) {
          const n2 = this.shape[r2];
          e2 && !e2[r2] ? t2[r2] = n2 : t2[r2] = n2.optional();
        }
        return new _ZodObject({ ...this._def, shape: /* @__PURE__ */ __name(() => t2, "shape") });
      }
      required(e2) {
        const t2 = {};
        for (const r2 of util.objectKeys(this.shape)) if (e2 && !e2[r2]) t2[r2] = this.shape[r2];
        else {
          let e3 = this.shape[r2];
          for (; e3 instanceof ZodOptional; ) e3 = e3._def.innerType;
          t2[r2] = e3;
        }
        return new _ZodObject({ ...this._def, shape: /* @__PURE__ */ __name(() => t2, "shape") });
      }
      keyof() {
        return createZodEnum(util.objectKeys(this.shape));
      }
    };
    ZodObject.create = (e2, t2) => new ZodObject({ shape: /* @__PURE__ */ __name(() => e2, "shape"), unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject, ...processCreateParams(t2) }), ZodObject.strictCreate = (e2, t2) => new ZodObject({ shape: /* @__PURE__ */ __name(() => e2, "shape"), unknownKeys: "strict", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject, ...processCreateParams(t2) }), ZodObject.lazycreate = (e2, t2) => new ZodObject({ shape: e2, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject, ...processCreateParams(t2) });
    ZodUnion = class extends ZodType {
      static {
        __name(this, "ZodUnion");
      }
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2), r2 = this._def.options;
        if (t2.common.async) return Promise.all(r2.map(async (e3) => {
          const r3 = { ...t2, common: { ...t2.common, issues: [] }, parent: null };
          return { result: await e3._parseAsync({ data: t2.data, path: t2.path, parent: r3 }), ctx: r3 };
        })).then(function(e3) {
          for (const t3 of e3) if ("valid" === t3.result.status) return t3.result;
          for (const r4 of e3) if ("dirty" === r4.result.status) return t2.common.issues.push(...r4.ctx.common.issues), r4.result;
          const r3 = e3.map((e4) => new ZodError(e4.ctx.common.issues));
          return addIssueToContext(t2, { code: ZodIssueCode.invalid_union, unionErrors: r3 }), INVALID;
        });
        {
          let e3;
          const n2 = [];
          for (const s3 of r2) {
            const r3 = { ...t2, common: { ...t2.common, issues: [] }, parent: null }, a2 = s3._parseSync({ data: t2.data, path: t2.path, parent: r3 });
            if ("valid" === a2.status) return a2;
            "dirty" !== a2.status || e3 || (e3 = { result: a2, ctx: r3 }), r3.common.issues.length && n2.push(r3.common.issues);
          }
          if (e3) return t2.common.issues.push(...e3.ctx.common.issues), e3.result;
          const s2 = n2.map((e4) => new ZodError(e4));
          return addIssueToContext(t2, { code: ZodIssueCode.invalid_union, unionErrors: s2 }), INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    __name(mergeValues, "mergeValues");
    ZodUnion.create = (e2, t2) => new ZodUnion({ options: e2, typeName: ZodFirstPartyTypeKind.ZodUnion, ...processCreateParams(t2) });
    ZodIntersection = class extends ZodType {
      static {
        __name(this, "ZodIntersection");
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2), n2 = /* @__PURE__ */ __name((e3, n3) => {
          if (isAborted(e3) || isAborted(n3)) return INVALID;
          const s2 = mergeValues(e3.value, n3.value);
          return s2.valid ? ((isDirty(e3) || isDirty(n3)) && t2.dirty(), { status: t2.value, value: s2.data }) : (addIssueToContext(r2, { code: ZodIssueCode.invalid_intersection_types }), INVALID);
        }, "n");
        return r2.common.async ? Promise.all([this._def.left._parseAsync({ data: r2.data, path: r2.path, parent: r2 }), this._def.right._parseAsync({ data: r2.data, path: r2.path, parent: r2 })]).then(([e3, t3]) => n2(e3, t3)) : n2(this._def.left._parseSync({ data: r2.data, path: r2.path, parent: r2 }), this._def.right._parseSync({ data: r2.data, path: r2.path, parent: r2 }));
      }
    };
    ZodIntersection.create = (e2, t2, r2) => new ZodIntersection({ left: e2, right: t2, typeName: ZodFirstPartyTypeKind.ZodIntersection, ...processCreateParams(r2) });
    ZodTuple = class _ZodTuple extends ZodType {
      static {
        __name(this, "ZodTuple");
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.parsedType !== ZodParsedType.array) return addIssueToContext(r2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.array, received: r2.parsedType }), INVALID;
        if (r2.data.length < this._def.items.length) return addIssueToContext(r2, { code: ZodIssueCode.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), INVALID;
        !this._def.rest && r2.data.length > this._def.items.length && (addIssueToContext(r2, { code: ZodIssueCode.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t2.dirty());
        const n2 = [...r2.data].map((e3, t3) => {
          const n3 = this._def.items[t3] || this._def.rest;
          return n3 ? n3._parse(new ParseInputLazyPath(r2, e3, r2.path, t3)) : null;
        }).filter((e3) => !!e3);
        return r2.common.async ? Promise.all(n2).then((e3) => ParseStatus.mergeArray(t2, e3)) : ParseStatus.mergeArray(t2, n2);
      }
      get items() {
        return this._def.items;
      }
      rest(e2) {
        return new _ZodTuple({ ...this._def, rest: e2 });
      }
    };
    ZodTuple.create = (e2, t2) => {
      if (!Array.isArray(e2)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new ZodTuple({ items: e2, typeName: ZodFirstPartyTypeKind.ZodTuple, rest: null, ...processCreateParams(t2) });
    };
    ZodMap = class extends ZodType {
      static {
        __name(this, "ZodMap");
      }
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.parsedType !== ZodParsedType.map) return addIssueToContext(r2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.map, received: r2.parsedType }), INVALID;
        const n2 = this._def.keyType, s2 = this._def.valueType, a2 = [...r2.data.entries()].map(([e3, t3], a3) => ({ key: n2._parse(new ParseInputLazyPath(r2, e3, r2.path, [a3, "key"])), value: s2._parse(new ParseInputLazyPath(r2, t3, r2.path, [a3, "value"])) }));
        if (r2.common.async) {
          const e3 = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const r3 of a2) {
              const n3 = await r3.key, s3 = await r3.value;
              if ("aborted" === n3.status || "aborted" === s3.status) return INVALID;
              "dirty" !== n3.status && "dirty" !== s3.status || t2.dirty(), e3.set(n3.value, s3.value);
            }
            return { status: t2.value, value: e3 };
          });
        }
        {
          const e3 = /* @__PURE__ */ new Map();
          for (const r3 of a2) {
            const n3 = r3.key, s3 = r3.value;
            if ("aborted" === n3.status || "aborted" === s3.status) return INVALID;
            "dirty" !== n3.status && "dirty" !== s3.status || t2.dirty(), e3.set(n3.value, s3.value);
          }
          return { status: t2.value, value: e3 };
        }
      }
    };
    ZodMap.create = (e2, t2, r2) => new ZodMap({ valueType: t2, keyType: e2, typeName: ZodFirstPartyTypeKind.ZodMap, ...processCreateParams(r2) });
    ZodSet = class _ZodSet extends ZodType {
      static {
        __name(this, "ZodSet");
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.parsedType !== ZodParsedType.set) return addIssueToContext(r2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.set, received: r2.parsedType }), INVALID;
        const n2 = this._def;
        null !== n2.minSize && r2.data.size < n2.minSize.value && (addIssueToContext(r2, { code: ZodIssueCode.too_small, minimum: n2.minSize.value, type: "set", inclusive: true, exact: false, message: n2.minSize.message }), t2.dirty()), null !== n2.maxSize && r2.data.size > n2.maxSize.value && (addIssueToContext(r2, { code: ZodIssueCode.too_big, maximum: n2.maxSize.value, type: "set", inclusive: true, exact: false, message: n2.maxSize.message }), t2.dirty());
        const s2 = this._def.valueType;
        function a2(e3) {
          const r3 = /* @__PURE__ */ new Set();
          for (const n3 of e3) {
            if ("aborted" === n3.status) return INVALID;
            "dirty" === n3.status && t2.dirty(), r3.add(n3.value);
          }
          return { status: t2.value, value: r3 };
        }
        __name(a2, "a");
        const o2 = [...r2.data.values()].map((e3, t3) => s2._parse(new ParseInputLazyPath(r2, e3, r2.path, t3)));
        return r2.common.async ? Promise.all(o2).then((e3) => a2(e3)) : a2(o2);
      }
      min(e2, t2) {
        return new _ZodSet({ ...this._def, minSize: { value: e2, message: errorUtil.toString(t2) } });
      }
      max(e2, t2) {
        return new _ZodSet({ ...this._def, maxSize: { value: e2, message: errorUtil.toString(t2) } });
      }
      size(e2, t2) {
        return this.min(e2, t2).max(e2, t2);
      }
      nonempty(e2) {
        return this.min(1, e2);
      }
    };
    ZodSet.create = (e2, t2) => new ZodSet({ valueType: e2, minSize: null, maxSize: null, typeName: ZodFirstPartyTypeKind.ZodSet, ...processCreateParams(t2) });
    ZodLazy = class extends ZodType {
      static {
        __name(this, "ZodLazy");
      }
      get schema() {
        return this._def.getter();
      }
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        return this._def.getter()._parse({ data: t2.data, path: t2.path, parent: t2 });
      }
    };
    ZodLazy.create = (e2, t2) => new ZodLazy({ getter: e2, typeName: ZodFirstPartyTypeKind.ZodLazy, ...processCreateParams(t2) });
    ZodLiteral = class extends ZodType {
      static {
        __name(this, "ZodLiteral");
      }
      _parse(e2) {
        if (e2.data !== this._def.value) {
          const t2 = this._getOrReturnCtx(e2);
          return addIssueToContext(t2, { received: t2.data, code: ZodIssueCode.invalid_literal, expected: this._def.value }), INVALID;
        }
        return { status: "valid", value: e2.data };
      }
      get value() {
        return this._def.value;
      }
    };
    __name(createZodEnum, "createZodEnum");
    ZodLiteral.create = (e2, t2) => new ZodLiteral({ value: e2, typeName: ZodFirstPartyTypeKind.ZodLiteral, ...processCreateParams(t2) });
    ZodEnum = class _ZodEnum extends ZodType {
      static {
        __name(this, "ZodEnum");
      }
      _parse(e2) {
        if ("string" != typeof e2.data) {
          const t2 = this._getOrReturnCtx(e2), r2 = this._def.values;
          return addIssueToContext(t2, { expected: util.joinValues(r2), received: t2.parsedType, code: ZodIssueCode.invalid_type }), INVALID;
        }
        if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e2.data)) {
          const t2 = this._getOrReturnCtx(e2), r2 = this._def.values;
          return addIssueToContext(t2, { received: t2.data, code: ZodIssueCode.invalid_enum_value, options: r2 }), INVALID;
        }
        return OK(e2.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const e2 = {};
        for (const t2 of this._def.values) e2[t2] = t2;
        return e2;
      }
      get Values() {
        const e2 = {};
        for (const t2 of this._def.values) e2[t2] = t2;
        return e2;
      }
      get Enum() {
        const e2 = {};
        for (const t2 of this._def.values) e2[t2] = t2;
        return e2;
      }
      extract(e2, t2 = this._def) {
        return _ZodEnum.create(e2, { ...this._def, ...t2 });
      }
      exclude(e2, t2 = this._def) {
        return _ZodEnum.create(this.options.filter((t3) => !e2.includes(t3)), { ...this._def, ...t2 });
      }
    };
    ZodEnum.create = createZodEnum;
    ZodNativeEnum = class extends ZodType {
      static {
        __name(this, "ZodNativeEnum");
      }
      _parse(e2) {
        const t2 = util.getValidEnumValues(this._def.values), r2 = this._getOrReturnCtx(e2);
        if (r2.parsedType !== ZodParsedType.string && r2.parsedType !== ZodParsedType.number) {
          const e3 = util.objectValues(t2);
          return addIssueToContext(r2, { expected: util.joinValues(e3), received: r2.parsedType, code: ZodIssueCode.invalid_type }), INVALID;
        }
        if (this._cache || (this._cache = new Set(util.getValidEnumValues(this._def.values))), !this._cache.has(e2.data)) {
          const e3 = util.objectValues(t2);
          return addIssueToContext(r2, { received: r2.data, code: ZodIssueCode.invalid_enum_value, options: e3 }), INVALID;
        }
        return OK(e2.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    ZodNativeEnum.create = (e2, t2) => new ZodNativeEnum({ values: e2, typeName: ZodFirstPartyTypeKind.ZodNativeEnum, ...processCreateParams(t2) });
    ZodPromise = class extends ZodType {
      static {
        __name(this, "ZodPromise");
      }
      unwrap() {
        return this._def.type;
      }
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        if (t2.parsedType !== ZodParsedType.promise && false === t2.common.async) return addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.promise, received: t2.parsedType }), INVALID;
        const r2 = t2.parsedType === ZodParsedType.promise ? t2.data : Promise.resolve(t2.data);
        return OK(r2.then((e3) => this._def.type.parseAsync(e3, { path: t2.path, errorMap: t2.common.contextualErrorMap })));
      }
    };
    ZodPromise.create = (e2, t2) => new ZodPromise({ type: e2, typeName: ZodFirstPartyTypeKind.ZodPromise, ...processCreateParams(t2) });
    ZodEffects = class extends ZodType {
      static {
        __name(this, "ZodEffects");
      }
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2), n2 = this._def.effect || null, s2 = { addIssue: /* @__PURE__ */ __name((e3) => {
          addIssueToContext(r2, e3), e3.fatal ? t2.abort() : t2.dirty();
        }, "addIssue"), get path() {
          return r2.path;
        } };
        if (s2.addIssue = s2.addIssue.bind(s2), "preprocess" === n2.type) {
          const e3 = n2.transform(r2.data, s2);
          if (r2.common.async) return Promise.resolve(e3).then(async (e4) => {
            if ("aborted" === t2.value) return INVALID;
            const n3 = await this._def.schema._parseAsync({ data: e4, path: r2.path, parent: r2 });
            return "aborted" === n3.status ? INVALID : "dirty" === n3.status || "dirty" === t2.value ? DIRTY(n3.value) : n3;
          });
          {
            if ("aborted" === t2.value) return INVALID;
            const n3 = this._def.schema._parseSync({ data: e3, path: r2.path, parent: r2 });
            return "aborted" === n3.status ? INVALID : "dirty" === n3.status || "dirty" === t2.value ? DIRTY(n3.value) : n3;
          }
        }
        if ("refinement" === n2.type) {
          const e3 = /* @__PURE__ */ __name((e4) => {
            const t3 = n2.refinement(e4, s2);
            if (r2.common.async) return Promise.resolve(t3);
            if (t3 instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return e4;
          }, "e");
          if (false === r2.common.async) {
            const n3 = this._def.schema._parseSync({ data: r2.data, path: r2.path, parent: r2 });
            return "aborted" === n3.status ? INVALID : ("dirty" === n3.status && t2.dirty(), e3(n3.value), { status: t2.value, value: n3.value });
          }
          return this._def.schema._parseAsync({ data: r2.data, path: r2.path, parent: r2 }).then((r3) => "aborted" === r3.status ? INVALID : ("dirty" === r3.status && t2.dirty(), e3(r3.value).then(() => ({ status: t2.value, value: r3.value }))));
        }
        if ("transform" === n2.type) {
          if (false === r2.common.async) {
            const e3 = this._def.schema._parseSync({ data: r2.data, path: r2.path, parent: r2 });
            if (!isValid(e3)) return INVALID;
            const a2 = n2.transform(e3.value, s2);
            if (a2 instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return { status: t2.value, value: a2 };
          }
          return this._def.schema._parseAsync({ data: r2.data, path: r2.path, parent: r2 }).then((e3) => isValid(e3) ? Promise.resolve(n2.transform(e3.value, s2)).then((e4) => ({ status: t2.value, value: e4 })) : INVALID);
        }
        util.assertNever(n2);
      }
    };
    ZodEffects.create = (e2, t2, r2) => new ZodEffects({ schema: e2, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: t2, ...processCreateParams(r2) }), ZodEffects.createWithPreprocess = (e2, t2, r2) => new ZodEffects({ schema: t2, effect: { type: "preprocess", transform: e2 }, typeName: ZodFirstPartyTypeKind.ZodEffects, ...processCreateParams(r2) });
    ZodOptional = class extends ZodType {
      static {
        __name(this, "ZodOptional");
      }
      _parse(e2) {
        return this._getType(e2) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(e2);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodOptional.create = (e2, t2) => new ZodOptional({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodOptional, ...processCreateParams(t2) });
    ZodNullable = class extends ZodType {
      static {
        __name(this, "ZodNullable");
      }
      _parse(e2) {
        return this._getType(e2) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(e2);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    ZodNullable.create = (e2, t2) => new ZodNullable({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodNullable, ...processCreateParams(t2) });
    ZodDefault = class extends ZodType {
      static {
        __name(this, "ZodDefault");
      }
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2);
        let r2 = t2.data;
        return t2.parsedType === ZodParsedType.undefined && (r2 = this._def.defaultValue()), this._def.innerType._parse({ data: r2, path: t2.path, parent: t2 });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ZodDefault.create = (e2, t2) => new ZodDefault({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodDefault, defaultValue: "function" == typeof t2.default ? t2.default : () => t2.default, ...processCreateParams(t2) });
    ZodCatch = class extends ZodType {
      static {
        __name(this, "ZodCatch");
      }
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2), r2 = { ...t2, common: { ...t2.common, issues: [] } }, n2 = this._def.innerType._parse({ data: r2.data, path: r2.path, parent: { ...r2 } });
        return isAsync(n2) ? n2.then((e3) => ({ status: "valid", value: "valid" === e3.status ? e3.value : this._def.catchValue({ get error() {
          return new ZodError(r2.common.issues);
        }, input: r2.data }) })) : { status: "valid", value: "valid" === n2.status ? n2.value : this._def.catchValue({ get error() {
          return new ZodError(r2.common.issues);
        }, input: r2.data }) };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    ZodCatch.create = (e2, t2) => new ZodCatch({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodCatch, catchValue: "function" == typeof t2.catch ? t2.catch : () => t2.catch, ...processCreateParams(t2) });
    ZodNaN = class extends ZodType {
      static {
        __name(this, "ZodNaN");
      }
      _parse(e2) {
        if (this._getType(e2) !== ZodParsedType.nan) {
          const t2 = this._getOrReturnCtx(e2);
          return addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.nan, received: t2.parsedType }), INVALID;
        }
        return { status: "valid", value: e2.data };
      }
    };
    ZodNaN.create = (e2) => new ZodNaN({ typeName: ZodFirstPartyTypeKind.ZodNaN, ...processCreateParams(e2) });
    ZodBranded = class extends ZodType {
      static {
        __name(this, "ZodBranded");
      }
      _parse(e2) {
        const { ctx: t2 } = this._processInputParams(e2), r2 = t2.data;
        return this._def.type._parse({ data: r2, path: t2.path, parent: t2 });
      }
      unwrap() {
        return this._def.type;
      }
    };
    ZodPipeline = class _ZodPipeline extends ZodType {
      static {
        __name(this, "ZodPipeline");
      }
      _parse(e2) {
        const { status: t2, ctx: r2 } = this._processInputParams(e2);
        if (r2.common.async) {
          return (async () => {
            const e3 = await this._def.in._parseAsync({ data: r2.data, path: r2.path, parent: r2 });
            return "aborted" === e3.status ? INVALID : "dirty" === e3.status ? (t2.dirty(), DIRTY(e3.value)) : this._def.out._parseAsync({ data: e3.value, path: r2.path, parent: r2 });
          })();
        }
        {
          const e3 = this._def.in._parseSync({ data: r2.data, path: r2.path, parent: r2 });
          return "aborted" === e3.status ? INVALID : "dirty" === e3.status ? (t2.dirty(), { status: "dirty", value: e3.value }) : this._def.out._parseSync({ data: e3.value, path: r2.path, parent: r2 });
        }
      }
      static create(e2, t2) {
        return new _ZodPipeline({ in: e2, out: t2, typeName: ZodFirstPartyTypeKind.ZodPipeline });
      }
    };
    ZodReadonly = class extends ZodType {
      static {
        __name(this, "ZodReadonly");
      }
      _parse(e2) {
        const t2 = this._def.innerType._parse(e2), r2 = /* @__PURE__ */ __name((e3) => (isValid(e3) && (e3.value = Object.freeze(e3.value)), e3), "r");
        return isAsync(t2) ? t2.then((e3) => r2(e3)) : r2(t2);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    __name(cleanParams, "cleanParams");
    __name(custom, "custom");
    ZodReadonly.create = (e2, t2) => new ZodReadonly({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodReadonly, ...processCreateParams(t2) }), function(e2) {
      e2.ZodString = "ZodString", e2.ZodNumber = "ZodNumber", e2.ZodNaN = "ZodNaN", e2.ZodBigInt = "ZodBigInt", e2.ZodBoolean = "ZodBoolean", e2.ZodDate = "ZodDate", e2.ZodSymbol = "ZodSymbol", e2.ZodUndefined = "ZodUndefined", e2.ZodNull = "ZodNull", e2.ZodAny = "ZodAny", e2.ZodUnknown = "ZodUnknown", e2.ZodNever = "ZodNever", e2.ZodVoid = "ZodVoid", e2.ZodArray = "ZodArray", e2.ZodObject = "ZodObject", e2.ZodUnion = "ZodUnion", e2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e2.ZodIntersection = "ZodIntersection", e2.ZodTuple = "ZodTuple", e2.ZodRecord = "ZodRecord", e2.ZodMap = "ZodMap", e2.ZodSet = "ZodSet", e2.ZodFunction = "ZodFunction", e2.ZodLazy = "ZodLazy", e2.ZodLiteral = "ZodLiteral", e2.ZodEnum = "ZodEnum", e2.ZodEffects = "ZodEffects", e2.ZodNativeEnum = "ZodNativeEnum", e2.ZodOptional = "ZodOptional", e2.ZodNullable = "ZodNullable", e2.ZodDefault = "ZodDefault", e2.ZodCatch = "ZodCatch", e2.ZodPromise = "ZodPromise", e2.ZodBranded = "ZodBranded", e2.ZodPipeline = "ZodPipeline", e2.ZodReadonly = "ZodReadonly";
    }(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
    stringType = ZodString.create;
    dateType = ZodDate.create;
    ZodAny.create, ZodNever.create;
    arrayType = ZodArray.create;
    objectType = ZodObject.create;
    ZodUnion.create, ZodIntersection.create, ZodTuple.create;
    enumType = ZodEnum.create;
    ZodPromise.create, ZodOptional.create, ZodNullable.create;
    ALGORITHMS = { "SHA-256": "sha256-", "SHA-384": "sha384-", "SHA-512": "sha512-" };
    ALGORITHM_VALUES = Object.values(ALGORITHMS);
    enumType(Object.keys(ALGORITHMS)).optional().default("SHA-256"), custom((e2) => "string" == typeof e2 && ALGORITHM_VALUES.some((t2) => e2.startsWith(t2)));
    ALLOWED_DIRECTIVES = ["base-uri", "child-src", "connect-src", "default-src", "fenced-frame-src", "font-src", "form-action", "frame-ancestors", "frame-src", "img-src", "manifest-src", "media-src", "object-src", "referrer", "report-to", "report-uri", "require-trusted-types-for", "sandbox", "trusted-types", "upgrade-insecure-requests", "worker-src"];
    custom((e2) => "string" == typeof e2 && ALLOWED_DIRECTIVES.some((t2) => e2.startsWith(t2)));
    __name(decodeKey, "decodeKey");
    encoder$1 = new TextEncoder();
    decoder$1 = new TextDecoder();
    __name(encryptString, "encryptString");
    __name(decryptString, "decryptString");
    __name(generateCspDigest, "generateCspDigest");
    renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
    RenderTemplateResult = class {
      static {
        __name(this, "RenderTemplateResult");
      }
      [renderTemplateResultSym] = true;
      htmlParts;
      expressions;
      error;
      constructor(e2, t2) {
        this.htmlParts = e2, this.error = void 0, this.expressions = t2.map((e3) => isPromise(e3) ? Promise.resolve(e3).catch((e4) => {
          if (!this.error) throw this.error = e4, e4;
        }) : e3);
      }
      render(e2) {
        const t2 = this.expressions.map((t3) => createBufferedRenderer(e2, (e3) => {
          if (t3 || 0 === t3) return renderChild(e3, t3);
        }));
        let r2 = 0;
        const n2 = /* @__PURE__ */ __name(() => {
          for (; r2 < this.htmlParts.length; ) {
            const s2 = this.htmlParts[r2], a2 = t2[r2];
            if (r2++, s2 && e2.write(markHTMLString(s2)), a2) {
              const e3 = a2.flush();
              if (isPromise(e3)) return e3.then(n2);
            }
          }
        }, "n");
        return n2();
      }
    };
    __name(isRenderTemplateResult, "isRenderTemplateResult");
    __name(renderTemplate, "renderTemplate");
    slotString = Symbol.for("astro:slot-string");
    SlotString = class extends HTMLString {
      static {
        __name(this, "SlotString");
      }
      instructions;
      [slotString];
      constructor(e2, t2) {
        super(e2), this.instructions = t2, this[slotString] = true;
      }
    };
    __name(isSlotString, "isSlotString");
    __name(renderSlot, "renderSlot");
    __name(renderSlotToString, "renderSlotToString");
    __name(renderSlots, "renderSlots");
    __name(createSlotValueFromString, "createSlotValueFromString");
    internalProps = /* @__PURE__ */ new Set(["server:component-path", "server:component-export", "server:component-directive", "server:defer"]);
    __name(containsServerDirective, "containsServerDirective");
    SCRIPT_RE = /<\/script/giu;
    COMMENT_RE = /<!--/gu;
    __name(safeJsonStringify, "safeJsonStringify");
    __name(createSearchParams, "createSearchParams");
    __name(isWithinURLLimit, "isWithinURLLimit");
    ServerIslandComponent = class {
      static {
        __name(this, "ServerIslandComponent");
      }
      result;
      props;
      slots;
      displayName;
      hostId;
      islandContent;
      componentPath;
      componentExport;
      componentId;
      constructor(e2, t2, r2, n2) {
        this.result = e2, this.props = t2, this.slots = r2, this.displayName = n2;
      }
      async init() {
        const e2 = await this.getIslandContent();
        if (this.result.cspDestination) {
          this.result._metadata.extraScriptHashes.push(await generateCspDigest(SERVER_ISLAND_REPLACER, this.result.cspAlgorithm));
          const t2 = await generateCspDigest(e2, this.result.cspAlgorithm);
          this.result._metadata.extraScriptHashes.push(t2);
        }
        return createThinHead();
      }
      async render(e2) {
        const t2 = await this.getHostId(), r2 = await this.getIslandContent();
        e2.write(createRenderInstruction({ type: "server-island-runtime" })), e2.write("<!--[if astro]>server-island-start<![endif]-->");
        for (const t3 in this.slots) "fallback" === t3 && await renderChild(e2, this.slots.fallback(this.result));
        e2.write(`<script type="module" data-astro-rerun data-island-id="${t2}">${r2}<\/script>`);
      }
      getComponentPath() {
        if (this.componentPath) return this.componentPath;
        const e2 = this.props["server:component-path"];
        if (!e2) throw new Error("Could not find server component path");
        return this.componentPath = e2, e2;
      }
      getComponentExport() {
        if (this.componentExport) return this.componentExport;
        const e2 = this.props["server:component-export"];
        if (!e2) throw new Error("Could not find server component export");
        return this.componentExport = e2, e2;
      }
      async getHostId() {
        return this.hostId || (this.hostId = await crypto.randomUUID()), this.hostId;
      }
      async getIslandContent() {
        if (this.islandContent) return this.islandContent;
        const e2 = this.getComponentPath(), t2 = this.getComponentExport(), r2 = this.result.serverIslandNameMap.get(e2);
        if (!r2) throw new Error("Could not find server component name");
        for (const e3 of Object.keys(this.props)) internalProps.has(e3) && delete this.props[e3];
        const n2 = {};
        for (const e3 in this.slots) if ("fallback" !== e3) {
          const t3 = await renderSlotToString(this.result, this.slots[e3]);
          n2[e3] = t3.toString();
        }
        const s2 = await this.result.key, a2 = 0 === Object.keys(this.props).length ? "" : await encryptString(s2, JSON.stringify(this.props)), o2 = 0 === Object.keys(n2).length ? "" : await encryptString(s2, JSON.stringify(n2)), i2 = await this.getHostId(), d = this.result.base.endsWith("/") ? "" : "/";
        let c = `${this.result.base}${d}_server-islands/${r2}${"always" === this.result.trailingSlash ? "/" : ""}`;
        const l = createSearchParams(t2, a2, o2), u = isWithinURLLimit(c, l);
        u && (c += "?" + l.toString(), this.result._metadata.extraHead.push(markHTMLString(`<link rel="preload" as="fetch" href="${c}" crossorigin="anonymous">`)));
        const p = safeJsonStringify(this.result.internalFetchHeaders || {}), m = u ? `const headers = new Headers(${p});
let response = await fetch('${c}', { headers });` : `let data = {
	componentExport: ${safeJsonStringify(t2)},
	encryptedProps: ${safeJsonStringify(a2)},
	encryptedSlots: ${safeJsonStringify(o2)},
};
const headers = new Headers({ 'Content-Type': 'application/json', ...${p} });
let response = await fetch('${c}', {
	method: 'POST',
	body: JSON.stringify(data),
	headers,
});`;
        return this.islandContent = `${m}replaceServerIsland('${i2}', response);`, this.islandContent;
      }
    };
    renderServerIslandRuntime = /* @__PURE__ */ __name(() => `<script>${SERVER_ISLAND_REPLACER}<\/script>`, "renderServerIslandRuntime");
    SERVER_ISLAND_REPLACER = markHTMLString("async function replaceServerIsland(id, r) {\n	let s = document.querySelector(`script[data-island-id=\"${id}\"]`);\n	// If there's no matching script, or the request fails then return\n	if (!s || r.status !== 200 || r.headers.get('content-type')?.split(';')[0].trim() !== 'text/html') return;\n	// Load the HTML before modifying the DOM in case of errors\n	let html = await r.text();\n	// Remove any placeholder content before the island script\n	while (s.previousSibling && s.previousSibling.nodeType !== 8 && s.previousSibling.data !== '[if astro]>server-island-start<![endif]')\n		s.previousSibling.remove();\n	s.previousSibling?.remove();\n	// Insert the new HTML\n	s.before(document.createRange().createContextualFragment(html));\n	// Remove the script. Prior to v5.4.2, this was the trick to force rerun of scripts.  Keeping it to minimize change to the existing behavior.\n	s.remove();\n}".split("\n").map((e2) => e2.trim()).filter((e2) => e2 && !e2.startsWith("//")).join(" "));
    Fragment = Symbol.for("astro:fragment");
    Renderer = Symbol.for("astro:renderer");
    encoder = new TextEncoder();
    decoder = new TextDecoder();
    __name(stringifyChunk, "stringifyChunk");
    __name(chunkToString, "chunkToString");
    __name(chunkToByteArray, "chunkToByteArray");
    __name(isRenderInstance, "isRenderInstance");
    __name(renderChild, "renderChild");
    __name(renderArray, "renderArray");
    __name(renderIterable, "renderIterable");
    __name(renderAsyncIterable, "renderAsyncIterable");
    astroComponentInstanceSym = Symbol.for("astro.componentInstance");
    AstroComponentInstance = class {
      static {
        __name(this, "AstroComponentInstance");
      }
      [astroComponentInstanceSym] = true;
      result;
      props;
      slotValues;
      factory;
      returnValue;
      constructor(e2, t2, r2, n2) {
        this.result = e2, this.props = t2, this.factory = n2, this.slotValues = {};
        for (const t3 in r2) {
          let n3 = false, s2 = r2[t3](e2);
          this.slotValues[t3] = () => n3 ? r2[t3](e2) : (n3 = true, s2);
        }
      }
      init(e2) {
        return void 0 !== this.returnValue || (this.returnValue = this.factory(e2, this.props, this.slotValues), isPromise(this.returnValue) && this.returnValue.then((e3) => {
          this.returnValue = e3;
        }).catch(() => {
        })), this.returnValue;
      }
      render(e2) {
        const t2 = this.init(this.result);
        return isPromise(t2) ? t2.then((t3) => this.renderImpl(e2, t3)) : this.renderImpl(e2, t2);
      }
      renderImpl(e2, t2) {
        return isHeadAndContent(t2) ? t2.content.render(e2) : renderChild(e2, t2);
      }
    };
    __name(validateComponentProps, "validateComponentProps");
    __name(createAstroComponentInstance, "createAstroComponentInstance");
    __name(isAstroComponentInstance, "isAstroComponentInstance");
    DOCTYPE_EXP = /<!doctype html/i;
    __name(renderToString, "renderToString");
    __name(renderToReadableStream, "renderToReadableStream");
    __name(callComponentAsTemplateResultOrResponse, "callComponentAsTemplateResultOrResponse");
    __name(bufferHeadContent, "bufferHeadContent");
    __name(renderToAsyncIterable, "renderToAsyncIterable");
    __name(toPromise, "toPromise");
    __name(componentIsHTMLElement, "componentIsHTMLElement");
    __name(renderHTMLElement, "renderHTMLElement");
    __name(getHTMLElementName, "getHTMLElementName");
    needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
    rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
    clientOnlyValues = /* @__PURE__ */ new Set(["solid-js", "react", "preact", "vue", "svelte"]);
    __name(guessRenderers, "guessRenderers");
    __name(isFragmentComponent, "isFragmentComponent");
    __name(isHTMLComponent, "isHTMLComponent");
    ASTRO_SLOT_EXP = /<\/?astro-slot\b[^>]*>/g;
    ASTRO_STATIC_SLOT_EXP = /<\/?astro-static-slot\b[^>]*>/g;
    __name(removeStaticAstroSlot, "removeStaticAstroSlot");
    __name(renderFrameworkComponent, "renderFrameworkComponent");
    __name(sanitizeElementName, "sanitizeElementName");
    __name(renderFragmentComponent, "renderFragmentComponent");
    __name(renderHTMLComponent, "renderHTMLComponent");
    __name(renderAstroComponent, "renderAstroComponent");
    __name(renderComponent, "renderComponent");
    __name(normalizeProps, "normalizeProps");
    __name(renderComponentToString, "renderComponentToString");
    __name(nonAstroPageNeedsHeadInjection, "nonAstroPageNeedsHeadInjection");
    hasTriedRenderComponentSymbol = Symbol("hasTriedRenderComponent");
    __name(renderJSX, "renderJSX");
    __name(renderJSXVNode, "renderJSXVNode");
    __name(renderElement, "renderElement");
    __name(prerenderElementChildren, "prerenderElementChildren");
    __name(renderPage, "renderPage");
    __name(renderScript, "renderScript");
    __name(requireCssesc, "requireCssesc");
    __name(spreadAttributes, "spreadAttributes");
    requireCssesc(), "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((e2, t2) => (e2[t2.charCodeAt(0)] = t2, e2), []), "-0123456789_".split("").reduce((e2, t2) => (e2[t2.charCodeAt(0)] = t2, e2), []);
    AstroJSX = "astro:jsx";
    Empty = Symbol("empty");
    toSlotName = /* @__PURE__ */ __name((e2) => e2, "toSlotName");
    __name(isVNode, "isVNode");
    __name(transformSlots, "transformSlots");
    __name(markRawChildren, "markRawChildren");
    __name(transformSetDirectives, "transformSetDirectives");
    __name(createVNode, "createVNode");
  }
});

// dist/_worker.js/renderers.mjs
async function check(r2, e2, { default: t2 = null, ...o2 } = {}) {
  if ("function" != typeof r2) return false;
  const n2 = {};
  for (const [r3, e3] of Object.entries(o2)) {
    n2[slotName(r3)] = e3;
  }
  try {
    return (await r2({ ...e2, ...n2, children: t2 }))[AstroJSX];
  } catch (e3) {
    throwEnhancedErrorIfMdxComponent(e3, r2);
  }
  return false;
}
async function renderToStaticMarkup(r2, e2 = {}, { default: t2 = null, ...o2 } = {}) {
  const n2 = {};
  for (const [r3, e3] of Object.entries(o2)) {
    n2[slotName(r3)] = e3;
  }
  const { result: s2 } = this;
  try {
    return { html: await renderJSX(s2, createVNode(r2, { ...e2, ...n2, children: t2 })) };
  } catch (e3) {
    throw throwEnhancedErrorIfMdxComponent(e3, r2), e3;
  }
}
function throwEnhancedErrorIfMdxComponent(r2, e2) {
  if (e2[Symbol.for("mdx-component")]) {
    if (AstroUserError.is(r2)) return;
    throw r2.title = r2.name, r2.hint = "This issue often occurs when your MDX component encounters runtime errors.", r2;
  }
}
var slotName, renderer, server_default, renderers;
var init_renderers = __esm({
  "dist/_worker.js/renderers.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_37mFo7XU();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    slotName = /* @__PURE__ */ __name((r2) => r2.trim().replace(/[-_]([a-z])/g, (r3, e2) => e2.toUpperCase()), "slotName");
    __name(check, "check");
    __name(renderToStaticMarkup, "renderToStaticMarkup");
    __name(throwEnhancedErrorIfMdxComponent, "throwEnhancedErrorIfMdxComponent");
    renderer = { name: "astro:jsx", check, renderToStaticMarkup };
    server_default = renderer;
    renderers = [Object.assign({ name: "astro:jsx", serverEntrypoint: "file:///Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/node_modules/@astrojs/mdx/dist/server.js" }, { ssr: server_default })];
  }
});

// dist/_worker.js/chunks/path_mW90u446.mjs
function appendForwardSlash(r2) {
  return r2.endsWith("/") ? r2 : r2 + "/";
}
function prependForwardSlash(r2) {
  return "/" === r2[0] ? r2 : "/" + r2;
}
function collapseDuplicateTrailingSlashes(r2, e2) {
  return r2 ? r2.replace(MANY_TRAILING_SLASHES, e2 ? "/" : "") || "/" : r2;
}
function removeTrailingForwardSlash(r2) {
  return r2.endsWith("/") ? r2.slice(0, r2.length - 1) : r2;
}
function removeLeadingForwardSlash(r2) {
  return r2.startsWith("/") ? r2.substring(1) : r2;
}
function trimSlashes(r2) {
  return r2.replace(/^\/|\/$/g, "");
}
function isString(r2) {
  return "string" == typeof r2 || r2 instanceof String;
}
function isInternalPath(r2) {
  return INTERNAL_PREFIXES.has(r2.slice(0, 2)) && !JUST_SLASHES.test(r2);
}
function joinPaths(...r2) {
  return r2.filter(isString).map((e2, n2) => 0 === n2 ? removeTrailingForwardSlash(e2) : n2 === r2.length - 1 ? removeLeadingForwardSlash(e2) : trimSlashes(e2)).join("/");
}
function isRemotePath(r2) {
  if (!r2) return false;
  const e2 = r2.trim();
  if (!e2) return false;
  let n2 = e2, t2 = "", s2 = 10;
  for (; n2 !== t2 && s2 > 0; ) {
    t2 = n2;
    try {
      n2 = decodeURIComponent(n2);
    } catch {
      break;
    }
    s2--;
  }
  if (/^[a-zA-Z]:/.test(n2)) return false;
  if ("/" === n2[0] && "/" !== n2[1] && "\\" !== n2[1]) return false;
  if ("\\" === n2[0]) return true;
  if (n2.startsWith("//")) return true;
  try {
    const r3 = new URL(n2, "http://n");
    if (r3.username || r3.password) return true;
    if (n2.includes("@") && !r3.pathname.includes("@") && !r3.search.includes("@")) return true;
    if ("http://n" !== r3.origin) {
      return "file:" !== r3.protocol.toLowerCase();
    }
    return !!URL.canParse(n2);
  } catch {
    return true;
  }
}
function slash(r2) {
  return r2.replace(/\\/g, "/");
}
function fileExtension(r2) {
  const e2 = r2.split(".").pop();
  return e2 !== r2 ? `.${e2}` : "";
}
function hasFileExtension(r2) {
  return WITH_FILE_EXT.test(r2);
}
var MANY_TRAILING_SLASHES, INTERNAL_PREFIXES, JUST_SLASHES, WITH_FILE_EXT;
var init_path_mW90u446 = __esm({
  "dist/_worker.js/chunks/path_mW90u446.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(appendForwardSlash, "appendForwardSlash");
    __name(prependForwardSlash, "prependForwardSlash");
    globalThis.process ??= {}, globalThis.process.env ??= {};
    MANY_TRAILING_SLASHES = /\/{2,}$/g;
    __name(collapseDuplicateTrailingSlashes, "collapseDuplicateTrailingSlashes");
    __name(removeTrailingForwardSlash, "removeTrailingForwardSlash");
    __name(removeLeadingForwardSlash, "removeLeadingForwardSlash");
    __name(trimSlashes, "trimSlashes");
    __name(isString, "isString");
    INTERNAL_PREFIXES = /* @__PURE__ */ new Set(["/_", "/@", "/.", "//"]);
    JUST_SLASHES = /^\/{2,}$/;
    __name(isInternalPath, "isInternalPath");
    __name(joinPaths, "joinPaths");
    __name(isRemotePath, "isRemotePath");
    __name(slash, "slash");
    __name(fileExtension, "fileExtension");
    WITH_FILE_EXT = /\/[^/]+\.\w+$/;
    __name(hasFileExtension, "hasFileExtension");
  }
});

// dist/_worker.js/chunks/remote_CrdlObHx.mjs
function matchPattern(t2, e2) {
  return matchProtocol(t2, e2.protocol) && matchHostname(t2, e2.hostname, true) && matchPort(t2, e2.port) && matchPathname(t2, e2.pathname, true);
}
function matchPort(t2, e2) {
  return !e2 || e2 === t2.port;
}
function matchProtocol(t2, e2) {
  return !e2 || e2 === t2.protocol.slice(0, -1);
}
function matchHostname(t2, e2, n2 = false) {
  if (!e2) return true;
  if (!n2 || !e2.startsWith("*")) return e2 === t2.hostname;
  if (e2.startsWith("**.")) {
    const n3 = e2.slice(2);
    return n3 !== t2.hostname && t2.hostname.endsWith(n3);
  }
  if (e2.startsWith("*.")) {
    const n3 = e2.slice(1);
    if (!t2.hostname.endsWith(n3)) return false;
    const r2 = t2.hostname.slice(0, -(n3.length - 1));
    return r2.endsWith(".") && !r2.slice(0, -1).includes(".");
  }
  return false;
}
function matchPathname(t2, e2, n2 = false) {
  if (!e2) return true;
  if (!n2 || !e2.endsWith("*")) return e2 === t2.pathname;
  if (e2.endsWith("/**")) {
    const n3 = e2.slice(0, -2);
    return n3 !== t2.pathname && t2.pathname.startsWith(n3);
  }
  if (e2.endsWith("/*")) {
    const n3 = e2.slice(0, -1);
    return 1 === t2.pathname.replace(n3, "").split("/").filter(Boolean).length;
  }
  return false;
}
function isRemoteAllowed(t2, { domains: e2, remotePatterns: n2 }) {
  if (!URL.canParse(t2)) return false;
  const r2 = new URL(t2);
  return !!["http:", "https:", "data:"].includes(r2.protocol) && (e2.some((t3) => matchHostname(r2, t3)) || n2.some((t3) => matchPattern(r2, t3)));
}
var init_remote_CrdlObHx = __esm({
  "dist/_worker.js/chunks/remote_CrdlObHx.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(matchPattern, "matchPattern");
    __name(matchPort, "matchPort");
    __name(matchProtocol, "matchProtocol");
    __name(matchHostname, "matchHostname");
    __name(matchPathname, "matchPathname");
    __name(isRemoteAllowed, "isRemoteAllowed");
    globalThis.process ??= {}, globalThis.process.env ??= {};
  }
});

// dist/_worker.js/chunks/parse_BeDHJKc-.mjs
function encode64(e2) {
  const r2 = new DataView(e2);
  let t2 = "";
  for (let a2 = 0; a2 < e2.byteLength; a2++) t2 += String.fromCharCode(r2.getUint8(a2));
  return binaryToAscii(t2);
}
function decode64(e2) {
  const r2 = asciiToBinary(e2), t2 = new ArrayBuffer(r2.length), a2 = new DataView(t2);
  for (let e3 = 0; e3 < t2.byteLength; e3++) a2.setUint8(e3, r2.charCodeAt(e3));
  return t2;
}
function asciiToBinary(e2) {
  e2.length % 4 == 0 && (e2 = e2.replace(/==?$/, ""));
  let r2 = "", t2 = 0, a2 = 0;
  for (let n2 = 0; n2 < e2.length; n2++) t2 <<= 6, t2 |= KEY_STRING.indexOf(e2[n2]), a2 += 6, 24 === a2 && (r2 += String.fromCharCode((16711680 & t2) >> 16), r2 += String.fromCharCode((65280 & t2) >> 8), r2 += String.fromCharCode(255 & t2), t2 = a2 = 0);
  return 12 === a2 ? (t2 >>= 4, r2 += String.fromCharCode(t2)) : 18 === a2 && (t2 >>= 2, r2 += String.fromCharCode((65280 & t2) >> 8), r2 += String.fromCharCode(255 & t2)), r2;
}
function binaryToAscii(e2) {
  let r2 = "";
  for (let t2 = 0; t2 < e2.length; t2 += 3) {
    const a2 = [void 0, void 0, void 0, void 0];
    a2[0] = e2.charCodeAt(t2) >> 2, a2[1] = (3 & e2.charCodeAt(t2)) << 4, e2.length > t2 + 1 && (a2[1] |= e2.charCodeAt(t2 + 1) >> 4, a2[2] = (15 & e2.charCodeAt(t2 + 1)) << 2), e2.length > t2 + 2 && (a2[2] |= e2.charCodeAt(t2 + 2) >> 6, a2[3] = 63 & e2.charCodeAt(t2 + 2));
    for (let e3 = 0; e3 < a2.length; e3++) void 0 === a2[e3] ? r2 += "=" : r2 += KEY_STRING[a2[e3]];
  }
  return r2;
}
function parse(e2, r2) {
  return unflatten(JSON.parse(e2), r2);
}
function unflatten(e2, r2) {
  if ("number" == typeof e2) return n2(e2, true);
  if (!Array.isArray(e2) || 0 === e2.length) throw new Error("Invalid input");
  const t2 = e2, a2 = Array(t2.length);
  function n2(e3, o2 = false) {
    if (-1 === e3) return;
    if (-3 === e3) return NaN;
    if (-4 === e3) return 1 / 0;
    if (-5 === e3) return -1 / 0;
    if (-6 === e3) return -0;
    if (o2 || "number" != typeof e3) throw new Error("Invalid input");
    if (e3 in a2) return a2[e3];
    const s2 = t2[e3];
    if (s2 && "object" == typeof s2) if (Array.isArray(s2)) if ("string" == typeof s2[0]) {
      const o3 = s2[0], c = r2 && Object.hasOwn(r2, o3) ? r2[o3] : void 0;
      if (c) {
        let r3 = s2[1];
        return "number" != typeof r3 && (r3 = t2.push(s2[1]) - 1), a2[e3] = c(n2(r3));
      }
      switch (o3) {
        case "Date":
          a2[e3] = new Date(s2[1]);
          break;
        case "Set":
          const r3 = /* @__PURE__ */ new Set();
          a2[e3] = r3;
          for (let e4 = 1; e4 < s2.length; e4 += 1) r3.add(n2(s2[e4]));
          break;
        case "Map":
          const t3 = /* @__PURE__ */ new Map();
          a2[e3] = t3;
          for (let e4 = 1; e4 < s2.length; e4 += 2) t3.set(n2(s2[e4]), n2(s2[e4 + 1]));
          break;
        case "RegExp":
          a2[e3] = new RegExp(s2[1], s2[2]);
          break;
        case "Object":
          a2[e3] = Object(s2[1]);
          break;
        case "BigInt":
          a2[e3] = BigInt(s2[1]);
          break;
        case "null":
          const c2 = /* @__PURE__ */ Object.create(null);
          a2[e3] = c2;
          for (let e4 = 1; e4 < s2.length; e4 += 2) c2[s2[e4]] = n2(s2[e4 + 1]);
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const r4 = new (0, globalThis[o3])(n2(s2[1]));
          a2[e3] = void 0 !== s2[2] ? r4.subarray(s2[2], s2[3]) : r4;
          break;
        }
        case "ArrayBuffer": {
          const r4 = decode64(s2[1]);
          a2[e3] = r4;
          break;
        }
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime": {
          const r4 = o3.slice(9);
          a2[e3] = Temporal[r4].from(s2[1]);
          break;
        }
        case "URL": {
          const r4 = new URL(s2[1]);
          a2[e3] = r4;
          break;
        }
        case "URLSearchParams": {
          const r4 = new URLSearchParams(s2[1]);
          a2[e3] = r4;
          break;
        }
        default:
          throw new Error(`Unknown type ${o3}`);
      }
    } else {
      const r3 = new Array(s2.length);
      a2[e3] = r3;
      for (let e4 = 0; e4 < s2.length; e4 += 1) {
        const t3 = s2[e4];
        -2 !== t3 && (r3[e4] = n2(t3));
      }
    }
    else {
      const r3 = {};
      a2[e3] = r3;
      for (const e4 in s2) {
        if ("__proto__" === e4) throw new Error("Cannot parse an object with a `__proto__` property");
        const t3 = s2[e4];
        r3[e4] = n2(t3);
      }
    }
    else a2[e3] = s2;
    return a2[e3];
  }
  __name(n2, "n");
  return n2(0);
}
var KEY_STRING, UNDEFINED, HOLE, NAN, POSITIVE_INFINITY, NEGATIVE_INFINITY, NEGATIVE_ZERO;
var init_parse_BeDHJKc = __esm({
  "dist/_worker.js/chunks/parse_BeDHJKc-.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(encode64, "encode64");
    __name(decode64, "decode64");
    globalThis.process ??= {}, globalThis.process.env ??= {};
    KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    __name(asciiToBinary, "asciiToBinary");
    __name(binaryToAscii, "binaryToAscii");
    UNDEFINED = -1;
    HOLE = -2;
    NAN = -3;
    POSITIVE_INFINITY = -4;
    NEGATIVE_INFINITY = -5;
    NEGATIVE_ZERO = -6;
    __name(parse, "parse");
    __name(unflatten, "unflatten");
  }
});

// dist/_worker.js/chunks/astro-designed-error-pages_CNJkf2fl.mjs
function is_primitive(A) {
  return Object(A) !== A;
}
function is_plain_object(A) {
  const Q = Object.getPrototypeOf(A);
  return Q === Object.prototype || null === Q || null === Object.getPrototypeOf(Q) || Object.getOwnPropertyNames(Q).sort().join("\0") === object_proto_names;
}
function get_type(A) {
  return Object.prototype.toString.call(A).slice(8, -1);
}
function get_escaped_char(A) {
  switch (A) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return A < " " ? `\\u${A.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(A) {
  let Q = "", t2 = 0;
  const E2 = A.length;
  for (let C = 0; C < E2; C += 1) {
    const E3 = get_escaped_char(A[C]);
    E3 && (Q += A.slice(t2, C) + E3, t2 = C + 1);
  }
  return `"${0 === t2 ? A : Q + A.slice(t2)}"`;
}
function enumerable_symbols(A) {
  return Object.getOwnPropertySymbols(A).filter((Q) => Object.getOwnPropertyDescriptor(A, Q).enumerable);
}
function stringify_key(A) {
  return is_identifier.test(A) ? "." + A : "[" + JSON.stringify(A) + "]";
}
function stringify(A, Q) {
  const t2 = [], E2 = /* @__PURE__ */ new Map(), C = [];
  if (Q) for (const A2 of Object.getOwnPropertyNames(Q)) C.push({ key: A2, fn: Q[A2] });
  const B = [];
  let e2 = 0;
  const o2 = (/* @__PURE__ */ __name(function Q2(o3) {
    if (void 0 === o3) return UNDEFINED;
    if (Number.isNaN(o3)) return NAN;
    if (o3 === 1 / 0) return POSITIVE_INFINITY;
    if (o3 === -1 / 0) return NEGATIVE_INFINITY;
    if (0 === o3 && 1 / o3 < 0) return NEGATIVE_ZERO;
    if (E2.has(o3)) return E2.get(o3);
    const g = e2++;
    E2.set(o3, g);
    for (const { key: A2, fn: E3 } of C) {
      const C2 = E3(o3);
      if (C2) return t2[g] = `["${A2}",${Q2(C2)}]`, g;
    }
    if ("function" == typeof o3) throw new DevalueError("Cannot stringify a function", B, o3, A);
    let r2 = "";
    if (is_primitive(o3)) r2 = stringify_primitive(o3);
    else {
      const t3 = get_type(o3);
      switch (t3) {
        case "Number":
        case "String":
        case "Boolean":
          r2 = `["Object",${stringify_primitive(o3)}]`;
          break;
        case "BigInt":
          r2 = `["BigInt",${o3}]`;
          break;
        case "Date":
          r2 = `["Date","${!isNaN(o3.getDate()) ? o3.toISOString() : ""}"]`;
          break;
        case "URL":
          r2 = `["URL",${stringify_string(o3.toString())}]`;
          break;
        case "URLSearchParams":
          r2 = `["URLSearchParams",${stringify_string(o3.toString())}]`;
          break;
        case "RegExp":
          const { source: E3, flags: C2 } = o3;
          r2 = C2 ? `["RegExp",${stringify_string(E3)},"${C2}"]` : `["RegExp",${stringify_string(E3)}]`;
          break;
        case "Array":
          r2 = "[";
          for (let A2 = 0; A2 < o3.length; A2 += 1) A2 > 0 && (r2 += ","), A2 in o3 ? (B.push(`[${A2}]`), r2 += Q2(o3[A2]), B.pop()) : r2 += HOLE;
          r2 += "]";
          break;
        case "Set":
          r2 = '["Set"';
          for (const A2 of o3) r2 += `,${Q2(A2)}`;
          r2 += "]";
          break;
        case "Map":
          r2 = '["Map"';
          for (const [A2, t4] of o3) B.push(`.get(${is_primitive(A2) ? stringify_primitive(A2) : "..."})`), r2 += `,${Q2(A2)},${Q2(t4)}`, B.pop();
          r2 += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const A2 = o3;
          r2 = '["' + t3 + '",' + Q2(A2.buffer);
          const E4 = o3.byteOffset, C3 = E4 + o3.byteLength;
          if (E4 > 0 || C3 !== A2.buffer.byteLength) {
            const A3 = +/(\d+)/.exec(t3)[1] / 8;
            r2 += `,${E4 / A3},${C3 / A3}`;
          }
          r2 += "]";
          break;
        }
        case "ArrayBuffer":
          r2 = `["ArrayBuffer","${encode64(o3)}"]`;
          break;
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          r2 = `["${t3}",${stringify_string(o3.toString())}]`;
          break;
        default:
          if (!is_plain_object(o3)) throw new DevalueError("Cannot stringify arbitrary non-POJOs", B, o3, A);
          if (enumerable_symbols(o3).length > 0) throw new DevalueError("Cannot stringify POJOs with symbolic keys", B, o3, A);
          if (null === Object.getPrototypeOf(o3)) {
            r2 = '["null"';
            for (const A2 in o3) B.push(stringify_key(A2)), r2 += `,${stringify_string(A2)},${Q2(o3[A2])}`, B.pop();
            r2 += "]";
          } else {
            r2 = "{";
            let A2 = false;
            for (const t4 in o3) A2 && (r2 += ","), A2 = true, B.push(stringify_key(t4)), r2 += `${stringify_string(t4)}:${Q2(o3[t4])}`, B.pop();
            r2 += "}";
          }
      }
    }
    return t2[g] = r2, g;
  }, "Q"))(A);
  return o2 < 0 ? `${o2}` : `[${t2.join(",")}]`;
}
function stringify_primitive(A) {
  const Q = typeof A;
  return "string" === Q ? stringify_string(A) : A instanceof String ? stringify_string(A.toString()) : void 0 === A ? UNDEFINED.toString() : 0 === A && 1 / A < 0 ? NEGATIVE_ZERO.toString() : "bigint" === Q ? `["BigInt","${A}"]` : String(A);
}
function isActionError(A) {
  return "object" == typeof A && null != A && "type" in A && "AstroActionError" === A.type;
}
function isInputError(A) {
  return "object" == typeof A && null != A && "type" in A && "AstroActionInputError" === A.type && "issues" in A && Array.isArray(A.issues);
}
function getActionQueryString(A) {
  return `?${new URLSearchParams({ [ACTION_QUERY_PARAMS$1.actionName]: A }).toString()}`;
}
function serializeActionResult(A) {
  if (A.error) {
    let Q2;
    return Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && actionResultErrorStack.set(A.error.stack), Q2 = A.error instanceof ActionInputError ? { type: A.error.type, issues: A.error.issues, fields: A.error.fields } : { ...A.error, message: A.error.message }, { type: "error", status: A.error.status, contentType: "application/json", body: JSON.stringify(Q2) };
  }
  if (void 0 === A.data) return { type: "empty", status: 204 };
  let Q;
  try {
    Q = stringify(A.data, { URL: /* @__PURE__ */ __name((A2) => A2 instanceof URL && A2.href, "URL") });
  } catch (Q2) {
    let t2 = ActionsReturnedInvalidDataError.hint;
    throw A.data instanceof Response && (t2 = REDIRECT_STATUS_CODES.includes(A.data.status) ? "If you need to redirect when the action succeeds, trigger a redirect where the action is called. See the Actions guide for server and client redirect examples: https://docs.astro.build/en/guides/actions." : "If you need to return a Response object, try using a server endpoint instead. See https://docs.astro.build/en/guides/endpoints/#server-endpoints-api-routes"), new AstroError({ ...ActionsReturnedInvalidDataError, message: ActionsReturnedInvalidDataError.message(String(Q2)), hint: t2 });
  }
  return { type: "data", status: 200, contentType: "application/json+devalue", body: Q };
}
function deserializeActionResult(A) {
  if ("error" === A.type) {
    let Q;
    try {
      Q = JSON.parse(A.body);
    } catch {
      return { data: void 0, error: new ActionError({ message: A.body, code: "INTERNAL_SERVER_ERROR" }) };
    }
    if (Object.assign(__vite_import_meta_env__, { _: process.env._ })?.PROD) return { error: ActionError.fromJson(Q), data: void 0 };
    {
      const A2 = ActionError.fromJson(Q);
      return A2.stack = actionResultErrorStack.get(), { error: A2, data: void 0 };
    }
  }
  return "empty" === A.type ? { data: void 0, error: void 0 } : { data: parse(A.body, { URL: /* @__PURE__ */ __name((A2) => new URL(A2), "URL") }), error: void 0 };
}
function template({ title: A, pathname: Q, statusCode: t2 = 404, tabTitle: E2, body: C }) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${E2}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${t2 ? `<span class="statusCode">${t2}: </span> ` : ""}<span class="statusMessage">${A}</span></h1>
			${C || `
				<pre>Path: ${escape(Q)}</pre>
			`}
			</main>
	</body>
</html>`;
}
function ensure404Route(A) {
  return A.routes.some((A2) => "/404" === A2.route) || A.routes.push(DEFAULT_404_ROUTE), A;
}
async function default404Page({ pathname: A }) {
  return new Response(template({ statusCode: 404, title: "Not found", tabTitle: "404: Not Found", pathname: A }), { status: 404, headers: { "Content-Type": "text/html" } });
}
var ImportType, E, DevalueError, object_proto_names, is_identifier, ACTION_QUERY_PARAMS$1, ACTION_RPC_ROUTE_PATTERN, __vite_import_meta_env__, ACTION_QUERY_PARAMS, codeToStatusMap, statusToCodeMap, ActionError, ActionInputError, actionResultErrorStack, DEFAULT_404_ROUTE, default404Instance;
var init_astro_designed_error_pages_CNJkf2fl = __esm({
  "dist/_worker.js/chunks/astro-designed-error-pages_CNJkf2fl.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_37mFo7XU();
    init_parse_BeDHJKc();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    !function(A) {
      A[A.Static = 1] = "Static", A[A.Dynamic = 2] = "Dynamic", A[A.ImportMeta = 3] = "ImportMeta", A[A.StaticSourcePhase = 4] = "StaticSourcePhase", A[A.DynamicSourcePhase = 5] = "DynamicSourcePhase", A[A.StaticDeferPhase = 6] = "StaticDeferPhase", A[A.DynamicDeferPhase = 7] = "DynamicDeferPhase";
    }(ImportType || (ImportType = {})), new Uint8Array(new Uint16Array([1]).buffer)[0];
    E = /* @__PURE__ */ __name(() => {
      return A = "AGFzbQEAAAABKwhgAX8Bf2AEf39/fwBgAAF/YAAAYAF/AGADf39/AX9gAn9/AX9gA39/fwADMTAAAQECAgICAgICAgICAgICAgICAgIAAwMDBAQAAAUAAAAAAAMDAwAGAAAABwAGAgUEBQFwAQEBBQMBAAEGDwJ/AUHA8gALfwBBwPIACwd6FQZtZW1vcnkCAAJzYQAAAWUAAwJpcwAEAmllAAUCc3MABgJzZQAHAml0AAgCYWkACQJpZAAKAmlwAAsCZXMADAJlZQANA2VscwAOA2VsZQAPAnJpABACcmUAEQFmABICbXMAEwVwYXJzZQAUC19faGVhcF9iYXNlAwEKzkQwaAEBf0EAIAA2AoAKQQAoAtwJIgEgAEEBdGoiAEEAOwEAQQAgAEECaiIANgKECkEAIAA2AogKQQBBADYC4AlBAEEANgLwCUEAQQA2AugJQQBBADYC5AlBAEEANgL4CUEAQQA2AuwJIAEL0wEBA39BACgC8AkhBEEAQQAoAogKIgU2AvAJQQAgBDYC9AlBACAFQSRqNgKICiAEQSBqQeAJIAQbIAU2AgBBACgC1AkhBEEAKALQCSEGIAUgATYCACAFIAA2AgggBSACIAJBAmpBACAGIANGIgAbIAQgA0YiBBs2AgwgBSADNgIUIAVBADYCECAFIAI2AgQgBUEANgIgIAVBA0EBQQIgABsgBBs2AhwgBUEAKALQCSADRiICOgAYAkACQCACDQBBACgC1AkgA0cNAQtBAEEBOgCMCgsLXgEBf0EAKAL4CSIEQRBqQeQJIAQbQQAoAogKIgQ2AgBBACAENgL4CUEAIARBFGo2AogKQQBBAToAjAogBEEANgIQIAQgAzYCDCAEIAI2AgggBCABNgIEIAQgADYCAAsIAEEAKAKQCgsVAEEAKALoCSgCAEEAKALcCWtBAXULHgEBf0EAKALoCSgCBCIAQQAoAtwJa0EBdUF/IAAbCxUAQQAoAugJKAIIQQAoAtwJa0EBdQseAQF/QQAoAugJKAIMIgBBACgC3AlrQQF1QX8gABsLCwBBACgC6AkoAhwLHgEBf0EAKALoCSgCECIAQQAoAtwJa0EBdUF/IAAbCzsBAX8CQEEAKALoCSgCFCIAQQAoAtAJRw0AQX8PCwJAIABBACgC1AlHDQBBfg8LIABBACgC3AlrQQF1CwsAQQAoAugJLQAYCxUAQQAoAuwJKAIAQQAoAtwJa0EBdQsVAEEAKALsCSgCBEEAKALcCWtBAXULHgEBf0EAKALsCSgCCCIAQQAoAtwJa0EBdUF/IAAbCx4BAX9BACgC7AkoAgwiAEEAKALcCWtBAXVBfyAAGwslAQF/QQBBACgC6AkiAEEgakHgCSAAGygCACIANgLoCSAAQQBHCyUBAX9BAEEAKALsCSIAQRBqQeQJIAAbKAIAIgA2AuwJIABBAEcLCABBAC0AlAoLCABBAC0AjAoL3Q0BBX8jAEGA0ABrIgAkAEEAQQE6AJQKQQBBACgC2Ak2ApwKQQBBACgC3AlBfmoiATYCsApBACABQQAoAoAKQQF0aiICNgK0CkEAQQA6AIwKQQBBADsBlgpBAEEAOwGYCkEAQQA6AKAKQQBBADYCkApBAEEAOgD8CUEAIABBgBBqNgKkCkEAIAA2AqgKQQBBADoArAoCQAJAAkACQANAQQAgAUECaiIDNgKwCiABIAJPDQECQCADLwEAIgJBd2pBBUkNAAJAAkACQAJAAkAgAkGbf2oOBQEICAgCAAsgAkEgRg0EIAJBL0YNAyACQTtGDQIMBwtBAC8BmAoNASADEBVFDQEgAUEEakGCCEEKEC8NARAWQQAtAJQKDQFBAEEAKAKwCiIBNgKcCgwHCyADEBVFDQAgAUEEakGMCEEKEC8NABAXC0EAQQAoArAKNgKcCgwBCwJAIAEvAQQiA0EqRg0AIANBL0cNBBAYDAELQQEQGQtBACgCtAohAkEAKAKwCiEBDAALC0EAIQIgAyEBQQAtAPwJDQIMAQtBACABNgKwCkEAQQA6AJQKCwNAQQAgAUECaiIDNgKwCgJAAkACQAJAAkACQAJAIAFBACgCtApPDQAgAy8BACICQXdqQQVJDQYCQAJAAkACQAJAAkACQAJAAkACQCACQWBqDgoQDwYPDw8PBQECAAsCQAJAAkACQCACQaB/ag4KCxISAxIBEhISAgALIAJBhX9qDgMFEQYJC0EALwGYCg0QIAMQFUUNECABQQRqQYIIQQoQLw0QEBYMEAsgAxAVRQ0PIAFBBGpBjAhBChAvDQ8QFwwPCyADEBVFDQ4gASkABELsgISDsI7AOVINDiABLwEMIgNBd2oiAUEXSw0MQQEgAXRBn4CABHFFDQwMDQtBAEEALwGYCiIBQQFqOwGYCkEAKAKkCiABQQN0aiIBQQE2AgAgAUEAKAKcCjYCBAwNC0EALwGYCiIDRQ0JQQAgA0F/aiIDOwGYCkEALwGWCiICRQ0MQQAoAqQKIANB//8DcUEDdGooAgBBBUcNDAJAIAJBAnRBACgCqApqQXxqKAIAIgMoAgQNACADQQAoApwKQQJqNgIEC0EAIAJBf2o7AZYKIAMgAUEEajYCDAwMCwJAQQAoApwKIgEvAQBBKUcNAEEAKALwCSIDRQ0AIAMoAgQgAUcNAEEAQQAoAvQJIgM2AvAJAkAgA0UNACADQQA2AiAMAQtBAEEANgLgCQtBAEEALwGYCiIDQQFqOwGYCkEAKAKkCiADQQN0aiIDQQZBAkEALQCsChs2AgAgAyABNgIEQQBBADoArAoMCwtBAC8BmAoiAUUNB0EAIAFBf2oiATsBmApBACgCpAogAUH//wNxQQN0aigCAEEERg0EDAoLQScQGgwJC0EiEBoMCAsgAkEvRw0HAkACQCABLwEEIgFBKkYNACABQS9HDQEQGAwKC0EBEBkMCQsCQAJAAkACQEEAKAKcCiIBLwEAIgMQG0UNAAJAAkAgA0FVag4EAAkBAwkLIAFBfmovAQBBK0YNAwwICyABQX5qLwEAQS1GDQIMBwsgA0EpRw0BQQAoAqQKQQAvAZgKIgJBA3RqKAIEEBxFDQIMBgsgAUF+ai8BAEFQakH//wNxQQpPDQULQQAvAZgKIQILAkACQCACQf//A3EiAkUNACADQeYARw0AQQAoAqQKIAJBf2pBA3RqIgQoAgBBAUcNACABQX5qLwEAQe8ARw0BIAQoAgRBlghBAxAdRQ0BDAULIANB/QBHDQBBACgCpAogAkEDdGoiAigCBBAeDQQgAigCAEEGRg0ECyABEB8NAyADRQ0DIANBL0ZBAC0AoApBAEdxDQMCQEEAKAL4CSICRQ0AIAEgAigCAEkNACABIAIoAgRNDQQLIAFBfmohAUEAKALcCSECAkADQCABQQJqIgQgAk0NAUEAIAE2ApwKIAEvAQAhAyABQX5qIgQhASADECBFDQALIARBAmohBAsCQCADQf//A3EQIUUNACAEQX5qIQECQANAIAFBAmoiAyACTQ0BQQAgATYCnAogAS8BACEDIAFBfmoiBCEBIAMQIQ0ACyAEQQJqIQMLIAMQIg0EC0EAQQE6AKAKDAcLQQAoAqQKQQAvAZgKIgFBA3QiA2pBACgCnAo2AgRBACABQQFqOwGYCkEAKAKkCiADakEDNgIACxAjDAULQQAtAPwJQQAvAZYKQQAvAZgKcnJFIQIMBwsQJEEAQQA6AKAKDAMLECVBACECDAULIANBoAFHDQELQQBBAToArAoLQQBBACgCsAo2ApwKC0EAKAKwCiEBDAALCyAAQYDQAGokACACCxoAAkBBACgC3AkgAEcNAEEBDwsgAEF+ahAmC/4KAQZ/QQBBACgCsAoiAEEMaiIBNgKwCkEAKAL4CSECQQEQKSEDAkACQAJAAkACQAJAAkACQAJAQQAoArAKIgQgAUcNACADEChFDQELAkACQAJAAkACQAJAAkAgA0EqRg0AIANB+wBHDQFBACAEQQJqNgKwCkEBECkhA0EAKAKwCiEEA0ACQAJAIANB//8DcSIDQSJGDQAgA0EnRg0AIAMQLBpBACgCsAohAwwBCyADEBpBAEEAKAKwCkECaiIDNgKwCgtBARApGgJAIAQgAxAtIgNBLEcNAEEAQQAoArAKQQJqNgKwCkEBECkhAwsgA0H9AEYNA0EAKAKwCiIFIARGDQ8gBSEEIAVBACgCtApNDQAMDwsLQQAgBEECajYCsApBARApGkEAKAKwCiIDIAMQLRoMAgtBAEEAOgCUCgJAAkACQAJAAkACQCADQZ9/ag4MAgsEAQsDCwsLCwsFAAsgA0H2AEYNBAwKC0EAIARBDmoiAzYCsAoCQAJAAkBBARApQZ9/ag4GABICEhIBEgtBACgCsAoiBSkAAkLzgOSD4I3AMVINESAFLwEKECFFDRFBACAFQQpqNgKwCkEAECkaC0EAKAKwCiIFQQJqQbIIQQ4QLw0QIAUvARAiAkF3aiIBQRdLDQ1BASABdEGfgIAEcUUNDQwOC0EAKAKwCiIFKQACQuyAhIOwjsA5Ug0PIAUvAQoiAkF3aiIBQRdNDQYMCgtBACAEQQpqNgKwCkEAECkaQQAoArAKIQQLQQAgBEEQajYCsAoCQEEBECkiBEEqRw0AQQBBACgCsApBAmo2ArAKQQEQKSEEC0EAKAKwCiEDIAQQLBogA0EAKAKwCiIEIAMgBBACQQBBACgCsApBfmo2ArAKDwsCQCAEKQACQuyAhIOwjsA5Ug0AIAQvAQoQIEUNAEEAIARBCmo2ArAKQQEQKSEEQQAoArAKIQMgBBAsGiADQQAoArAKIgQgAyAEEAJBAEEAKAKwCkF+ajYCsAoPC0EAIARBBGoiBDYCsAoLQQAgBEEGajYCsApBAEEAOgCUCkEBECkhBEEAKAKwCiEDIAQQLCEEQQAoArAKIQIgBEHf/wNxIgFB2wBHDQNBACACQQJqNgKwCkEBECkhBUEAKAKwCiEDQQAhBAwEC0EAQQE6AIwKQQBBACgCsApBAmo2ArAKC0EBECkhBEEAKAKwCiEDAkAgBEHmAEcNACADQQJqQawIQQYQLw0AQQAgA0EIajYCsAogAEEBEClBABArIAJBEGpB5AkgAhshAwNAIAMoAgAiA0UNBSADQgA3AgggA0EQaiEDDAALC0EAIANBfmo2ArAKDAMLQQEgAXRBn4CABHFFDQMMBAtBASEECwNAAkACQCAEDgIAAQELIAVB//8DcRAsGkEBIQQMAQsCQAJAQQAoArAKIgQgA0YNACADIAQgAyAEEAJBARApIQQCQCABQdsARw0AIARBIHJB/QBGDQQLQQAoArAKIQMCQCAEQSxHDQBBACADQQJqNgKwCkEBECkhBUEAKAKwCiEDIAVBIHJB+wBHDQILQQAgA0F+ajYCsAoLIAFB2wBHDQJBACACQX5qNgKwCg8LQQAhBAwACwsPCyACQaABRg0AIAJB+wBHDQQLQQAgBUEKajYCsApBARApIgVB+wBGDQMMAgsCQCACQVhqDgMBAwEACyACQaABRw0CC0EAIAVBEGo2ArAKAkBBARApIgVBKkcNAEEAQQAoArAKQQJqNgKwCkEBECkhBQsgBUEoRg0BC0EAKAKwCiEBIAUQLBpBACgCsAoiBSABTQ0AIAQgAyABIAUQAkEAQQAoArAKQX5qNgKwCg8LIAQgA0EAQQAQAkEAIARBDGo2ArAKDwsQJQuFDAEKf0EAQQAoArAKIgBBDGoiATYCsApBARApIQJBACgCsAohAwJAAkACQAJAAkACQAJAAkAgAkEuRw0AQQAgA0ECajYCsAoCQEEBECkiAkHkAEYNAAJAIAJB8wBGDQAgAkHtAEcNB0EAKAKwCiICQQJqQZwIQQYQLw0HAkBBACgCnAoiAxAqDQAgAy8BAEEuRg0ICyAAIAAgAkEIakEAKALUCRABDwtBACgCsAoiAkECakGiCEEKEC8NBgJAQQAoApwKIgMQKg0AIAMvAQBBLkYNBwtBACEEQQAgAkEMajYCsApBASEFQQUhBkEBECkhAkEAIQdBASEIDAILQQAoArAKIgIpAAJC5YCYg9CMgDlSDQUCQEEAKAKcCiIDECoNACADLwEAQS5GDQYLQQAhBEEAIAJBCmo2ArAKQQIhCEEHIQZBASEHQQEQKSECQQEhBQwBCwJAAkACQAJAIAJB8wBHDQAgAyABTQ0AIANBAmpBoghBChAvDQACQCADLwEMIgRBd2oiB0EXSw0AQQEgB3RBn4CABHENAgsgBEGgAUYNAQtBACEHQQchBkEBIQQgAkHkAEYNAQwCC0EAIQRBACADQQxqIgI2ArAKQQEhBUEBECkhCQJAQQAoArAKIgYgAkYNAEHmACECAkAgCUHmAEYNAEEFIQZBACEHQQEhCCAJIQIMBAtBACEHQQEhCCAGQQJqQawIQQYQLw0EIAYvAQgQIEUNBAtBACEHQQAgAzYCsApBByEGQQEhBEEAIQVBACEIIAkhAgwCCyADIABBCmpNDQBBACEIQeQAIQICQCADKQACQuWAmIPQjIA5Ug0AAkACQCADLwEKIgRBd2oiB0EXSw0AQQEgB3RBn4CABHENAQtBACEIIARBoAFHDQELQQAhBUEAIANBCmo2ArAKQSohAkEBIQdBAiEIQQEQKSIJQSpGDQRBACADNgKwCkEBIQRBACEHQQAhCCAJIQIMAgsgAyEGQQAhBwwCC0EAIQVBACEICwJAIAJBKEcNAEEAKAKkCkEALwGYCiICQQN0aiIDQQAoArAKNgIEQQAgAkEBajsBmAogA0EFNgIAQQAoApwKLwEAQS5GDQRBAEEAKAKwCiIDQQJqNgKwCkEBECkhAiAAQQAoArAKQQAgAxABAkACQCAFDQBBACgC8AkhAQwBC0EAKALwCSIBIAY2AhwLQQBBAC8BlgoiA0EBajsBlgpBACgCqAogA0ECdGogATYCAAJAIAJBIkYNACACQSdGDQBBAEEAKAKwCkF+ajYCsAoPCyACEBpBAEEAKAKwCkECaiICNgKwCgJAAkACQEEBEClBV2oOBAECAgACC0EAQQAoArAKQQJqNgKwCkEBECkaQQAoAvAJIgMgAjYCBCADQQE6ABggA0EAKAKwCiICNgIQQQAgAkF+ajYCsAoPC0EAKALwCSIDIAI2AgQgA0EBOgAYQQBBAC8BmApBf2o7AZgKIANBACgCsApBAmo2AgxBAEEALwGWCkF/ajsBlgoPC0EAQQAoArAKQX5qNgKwCg8LAkAgBEEBcyACQfsAR3INAEEAKAKwCiECQQAvAZgKDQUDQAJAAkACQCACQQAoArQKTw0AQQEQKSICQSJGDQEgAkEnRg0BIAJB/QBHDQJBAEEAKAKwCkECajYCsAoLQQEQKSEDQQAoArAKIQICQCADQeYARw0AIAJBAmpBrAhBBhAvDQcLQQAgAkEIajYCsAoCQEEBECkiAkEiRg0AIAJBJ0cNBwsgACACQQAQKw8LIAIQGgtBAEEAKAKwCkECaiICNgKwCgwACwsCQAJAIAJBWWoOBAMBAQMACyACQSJGDQILQQAoArAKIQYLIAYgAUcNAEEAIABBCmo2ArAKDwsgAkEqRyAHcQ0DQQAvAZgKQf//A3ENA0EAKAKwCiECQQAoArQKIQEDQCACIAFPDQECQAJAIAIvAQAiA0EnRg0AIANBIkcNAQsgACADIAgQKw8LQQAgAkECaiICNgKwCgwACwsQJQsPC0EAIAJBfmo2ArAKDwtBAEEAKAKwCkF+ajYCsAoLRwEDf0EAKAKwCkECaiEAQQAoArQKIQECQANAIAAiAkF+aiABTw0BIAJBAmohACACLwEAQXZqDgQBAAABAAsLQQAgAjYCsAoLmAEBA39BAEEAKAKwCiIBQQJqNgKwCiABQQZqIQFBACgCtAohAgNAAkACQAJAIAFBfGogAk8NACABQX5qLwEAIQMCQAJAIAANACADQSpGDQEgA0F2ag4EAgQEAgQLIANBKkcNAwsgAS8BAEEvRw0CQQAgAUF+ajYCsAoMAQsgAUF+aiEBC0EAIAE2ArAKDwsgAUECaiEBDAALC4gBAQR/QQAoArAKIQFBACgCtAohAgJAAkADQCABIgNBAmohASADIAJPDQEgAS8BACIEIABGDQICQCAEQdwARg0AIARBdmoOBAIBAQIBCyADQQRqIQEgAy8BBEENRw0AIANBBmogASADLwEGQQpGGyEBDAALC0EAIAE2ArAKECUPC0EAIAE2ArAKC2wBAX8CQAJAIABBX2oiAUEFSw0AQQEgAXRBMXENAQsgAEFGakH//wNxQQZJDQAgAEEpRyAAQVhqQf//A3FBB0lxDQACQCAAQaV/ag4EAQAAAQALIABB/QBHIABBhX9qQf//A3FBBElxDwtBAQsuAQF/QQEhAQJAIABBpglBBRAdDQAgAEGWCEEDEB0NACAAQbAJQQIQHSEBCyABC0YBA39BACEDAkAgACACQQF0IgJrIgRBAmoiAEEAKALcCSIFSQ0AIAAgASACEC8NAAJAIAAgBUcNAEEBDwsgBBAmIQMLIAMLgwEBAn9BASEBAkACQAJAAkACQAJAIAAvAQAiAkFFag4EBQQEAQALAkAgAkGbf2oOBAMEBAIACyACQSlGDQQgAkH5AEcNAyAAQX5qQbwJQQYQHQ8LIABBfmovAQBBPUYPCyAAQX5qQbQJQQQQHQ8LIABBfmpByAlBAxAdDwtBACEBCyABC7QDAQJ/QQAhAQJAAkACQAJAAkACQAJAAkACQAJAIAAvAQBBnH9qDhQAAQIJCQkJAwkJBAUJCQYJBwkJCAkLAkACQCAAQX5qLwEAQZd/ag4EAAoKAQoLIABBfGpByghBAhAdDwsgAEF8akHOCEEDEB0PCwJAAkACQCAAQX5qLwEAQY1/ag4DAAECCgsCQCAAQXxqLwEAIgJB4QBGDQAgAkHsAEcNCiAAQXpqQeUAECcPCyAAQXpqQeMAECcPCyAAQXxqQdQIQQQQHQ8LIABBfGpB3AhBBhAdDwsgAEF+ai8BAEHvAEcNBiAAQXxqLwEAQeUARw0GAkAgAEF6ai8BACICQfAARg0AIAJB4wBHDQcgAEF4akHoCEEGEB0PCyAAQXhqQfQIQQIQHQ8LIABBfmpB+AhBBBAdDwtBASEBIABBfmoiAEHpABAnDQQgAEGACUEFEB0PCyAAQX5qQeQAECcPCyAAQX5qQYoJQQcQHQ8LIABBfmpBmAlBBBAdDwsCQCAAQX5qLwEAIgJB7wBGDQAgAkHlAEcNASAAQXxqQe4AECcPCyAAQXxqQaAJQQMQHSEBCyABCzQBAX9BASEBAkAgAEF3akH//wNxQQVJDQAgAEGAAXJBoAFGDQAgAEEuRyAAEChxIQELIAELMAEBfwJAAkAgAEF3aiIBQRdLDQBBASABdEGNgIAEcQ0BCyAAQaABRg0AQQAPC0EBC04BAn9BACEBAkACQCAALwEAIgJB5QBGDQAgAkHrAEcNASAAQX5qQfgIQQQQHQ8LIABBfmovAQBB9QBHDQAgAEF8akHcCEEGEB0hAQsgAQveAQEEf0EAKAKwCiEAQQAoArQKIQECQAJAAkADQCAAIgJBAmohACACIAFPDQECQAJAAkAgAC8BACIDQaR/ag4FAgMDAwEACyADQSRHDQIgAi8BBEH7AEcNAkEAIAJBBGoiADYCsApBAEEALwGYCiICQQFqOwGYCkEAKAKkCiACQQN0aiICQQQ2AgAgAiAANgIEDwtBACAANgKwCkEAQQAvAZgKQX9qIgA7AZgKQQAoAqQKIABB//8DcUEDdGooAgBBA0cNAwwECyACQQRqIQAMAAsLQQAgADYCsAoLECULC3ABAn8CQAJAA0BBAEEAKAKwCiIAQQJqIgE2ArAKIABBACgCtApPDQECQAJAAkAgAS8BACIBQaV/ag4CAQIACwJAIAFBdmoOBAQDAwQACyABQS9HDQIMBAsQLhoMAQtBACAAQQRqNgKwCgwACwsQJQsLNQEBf0EAQQE6APwJQQAoArAKIQBBAEEAKAK0CkECajYCsApBACAAQQAoAtwJa0EBdTYCkAoLQwECf0EBIQECQCAALwEAIgJBd2pB//8DcUEFSQ0AIAJBgAFyQaABRg0AQQAhASACEChFDQAgAkEuRyAAECpyDwsgAQs9AQJ/QQAhAgJAQQAoAtwJIgMgAEsNACAALwEAIAFHDQACQCADIABHDQBBAQ8LIABBfmovAQAQICECCyACC2gBAn9BASEBAkACQCAAQV9qIgJBBUsNAEEBIAJ0QTFxDQELIABB+P8DcUEoRg0AIABBRmpB//8DcUEGSQ0AAkAgAEGlf2oiAkEDSw0AIAJBAUcNAQsgAEGFf2pB//8DcUEESSEBCyABC5wBAQN/QQAoArAKIQECQANAAkACQCABLwEAIgJBL0cNAAJAIAEvAQIiAUEqRg0AIAFBL0cNBBAYDAILIAAQGQwBCwJAAkAgAEUNACACQXdqIgFBF0sNAUEBIAF0QZ+AgARxRQ0BDAILIAIQIUUNAwwBCyACQaABRw0CC0EAQQAoArAKIgNBAmoiATYCsAogA0EAKAK0CkkNAAsLIAILMQEBf0EAIQECQCAALwEAQS5HDQAgAEF+ai8BAEEuRw0AIABBfGovAQBBLkYhAQsgAQumBAEBfwJAIAFBIkYNACABQSdGDQAQJQ8LQQAoArAKIQMgARAaIAAgA0ECakEAKAKwCkEAKALQCRABAkAgAkEBSA0AQQAoAvAJQQRBBiACQQFGGzYCHAtBAEEAKAKwCkECajYCsAoCQAJAAkACQEEAECkiAUHhAEYNACABQfcARg0BQQAoArAKIQEMAgtBACgCsAoiAUECakHACEEKEC8NAUEGIQIMAgtBACgCsAoiAS8BAkHpAEcNACABLwEEQfQARw0AQQQhAiABLwEGQegARg0BC0EAIAFBfmo2ArAKDwtBACABIAJBAXRqNgKwCgJAQQEQKUH7AEYNAEEAIAE2ArAKDwtBACgCsAoiACECA0BBACACQQJqNgKwCgJAAkACQEEBECkiAkEiRg0AIAJBJ0cNAUEnEBpBAEEAKAKwCkECajYCsApBARApIQIMAgtBIhAaQQBBACgCsApBAmo2ArAKQQEQKSECDAELIAIQLCECCwJAIAJBOkYNAEEAIAE2ArAKDwtBAEEAKAKwCkECajYCsAoCQEEBECkiAkEiRg0AIAJBJ0YNAEEAIAE2ArAKDwsgAhAaQQBBACgCsApBAmo2ArAKAkACQEEBECkiAkEsRg0AIAJB/QBGDQFBACABNgKwCg8LQQBBACgCsApBAmo2ArAKQQEQKUH9AEYNAEEAKAKwCiECDAELC0EAKALwCSIBIAA2AhAgAUEAKAKwCkECajYCDAttAQJ/AkACQANAAkAgAEH//wNxIgFBd2oiAkEXSw0AQQEgAnRBn4CABHENAgsgAUGgAUYNASAAIQIgARAoDQJBACECQQBBACgCsAoiAEECajYCsAogAC8BAiIADQAMAgsLIAAhAgsgAkH//wNxC6sBAQR/AkACQEEAKAKwCiICLwEAIgNB4QBGDQAgASEEIAAhBQwBC0EAIAJBBGo2ArAKQQEQKSECQQAoArAKIQUCQAJAIAJBIkYNACACQSdGDQAgAhAsGkEAKAKwCiEEDAELIAIQGkEAQQAoArAKQQJqIgQ2ArAKC0EBECkhA0EAKAKwCiECCwJAIAIgBUYNACAFIARBACAAIAAgAUYiAhtBACABIAIbEAILIAMLcgEEf0EAKAKwCiEAQQAoArQKIQECQAJAA0AgAEECaiECIAAgAU8NAQJAAkAgAi8BACIDQaR/ag4CAQQACyACIQAgA0F2ag4EAgEBAgELIABBBGohAAwACwtBACACNgKwChAlQQAPC0EAIAI2ArAKQd0AC0kBA39BACEDAkAgAkUNAAJAA0AgAC0AACIEIAEtAAAiBUcNASABQQFqIQEgAEEBaiEAIAJBf2oiAg0ADAILCyAEIAVrIQMLIAMLC+wBAgBBgAgLzgEAAHgAcABvAHIAdABtAHAAbwByAHQAZgBvAHIAZQB0AGEAbwB1AHIAYwBlAHIAbwBtAHUAbgBjAHQAaQBvAG4AcwBzAGUAcgB0AHYAbwB5AGkAZQBkAGUAbABlAGMAbwBuAHQAaQBuAGkAbgBzAHQAYQBuAHQAeQBiAHIAZQBhAHIAZQB0AHUAcgBkAGUAYgB1AGcAZwBlAGEAdwBhAGkAdABoAHIAdwBoAGkAbABlAGkAZgBjAGEAdABjAGYAaQBuAGEAbABsAGUAbABzAABB0AkLEAEAAAACAAAAAAQAAEA5AAA=", "undefined" != typeof Buffer ? Buffer.from(A, "base64") : Uint8Array.from(atob(A), (A2) => A2.charCodeAt(0));
      var A;
    }, "E");
    WebAssembly.compile(E()).then(WebAssembly.instantiate).then(({ exports: A }) => {
    });
    DevalueError = class extends Error {
      static {
        __name(this, "DevalueError");
      }
      constructor(A, Q, t2, E2) {
        super(A), this.name = "DevalueError", this.path = Q.join(""), this.value = t2, this.root = E2;
      }
    };
    __name(is_primitive, "is_primitive");
    object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
    __name(is_plain_object, "is_plain_object");
    __name(get_type, "get_type");
    __name(get_escaped_char, "get_escaped_char");
    __name(stringify_string, "stringify_string");
    __name(enumerable_symbols, "enumerable_symbols");
    is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    __name(stringify_key, "stringify_key");
    __name(stringify, "stringify");
    __name(stringify_primitive, "stringify_primitive");
    ACTION_QUERY_PARAMS$1 = { actionName: "_action" };
    ACTION_RPC_ROUTE_PATTERN = "/_actions/[...path]";
    __vite_import_meta_env__ = { ASSETS_PREFIX: void 0, BASE_URL: "/", DEV: false, MODE: "production", PROD: true, SITE: "http://localhost:4321", SSR: true };
    ACTION_QUERY_PARAMS = ACTION_QUERY_PARAMS$1;
    codeToStatusMap = { BAD_REQUEST: 400, UNAUTHORIZED: 401, PAYMENT_REQUIRED: 402, FORBIDDEN: 403, NOT_FOUND: 404, METHOD_NOT_ALLOWED: 405, NOT_ACCEPTABLE: 406, PROXY_AUTHENTICATION_REQUIRED: 407, REQUEST_TIMEOUT: 408, CONFLICT: 409, GONE: 410, LENGTH_REQUIRED: 411, PRECONDITION_FAILED: 412, CONTENT_TOO_LARGE: 413, URI_TOO_LONG: 414, UNSUPPORTED_MEDIA_TYPE: 415, RANGE_NOT_SATISFIABLE: 416, EXPECTATION_FAILED: 417, MISDIRECTED_REQUEST: 421, UNPROCESSABLE_CONTENT: 422, LOCKED: 423, FAILED_DEPENDENCY: 424, TOO_EARLY: 425, UPGRADE_REQUIRED: 426, PRECONDITION_REQUIRED: 428, TOO_MANY_REQUESTS: 429, REQUEST_HEADER_FIELDS_TOO_LARGE: 431, UNAVAILABLE_FOR_LEGAL_REASONS: 451, INTERNAL_SERVER_ERROR: 500, NOT_IMPLEMENTED: 501, BAD_GATEWAY: 502, SERVICE_UNAVAILABLE: 503, GATEWAY_TIMEOUT: 504, HTTP_VERSION_NOT_SUPPORTED: 505, VARIANT_ALSO_NEGOTIATES: 506, INSUFFICIENT_STORAGE: 507, LOOP_DETECTED: 508, NETWORK_AUTHENTICATION_REQUIRED: 511 };
    statusToCodeMap = Object.entries(codeToStatusMap).reduce((A, [Q, t2]) => ({ ...A, [t2]: Q }), {});
    ActionError = class _ActionError extends Error {
      static {
        __name(this, "ActionError");
      }
      type = "AstroActionError";
      code = "INTERNAL_SERVER_ERROR";
      status = 500;
      constructor(A) {
        super(A.message), this.code = A.code, this.status = _ActionError.codeToStatus(A.code), A.stack && (this.stack = A.stack);
      }
      static codeToStatus(A) {
        return codeToStatusMap[A];
      }
      static statusToCode(A) {
        return statusToCodeMap[A] ?? "INTERNAL_SERVER_ERROR";
      }
      static fromJson(A) {
        return isInputError(A) ? new ActionInputError(A.issues) : isActionError(A) ? new _ActionError(A) : new _ActionError({ code: "INTERNAL_SERVER_ERROR" });
      }
    };
    __name(isActionError, "isActionError");
    __name(isInputError, "isInputError");
    ActionInputError = class extends ActionError {
      static {
        __name(this, "ActionInputError");
      }
      type = "AstroActionInputError";
      issues;
      fields;
      constructor(A) {
        super({ message: `Failed to validate: ${JSON.stringify(A, null, 2)}`, code: "BAD_REQUEST" }), this.issues = A, this.fields = {};
        for (const Q of A) if (Q.path.length > 0) {
          const A2 = Q.path[0].toString();
          this.fields[A2] ??= [], this.fields[A2]?.push(Q.message);
        }
      }
    };
    __name(getActionQueryString, "getActionQueryString");
    __name(serializeActionResult, "serializeActionResult");
    __name(deserializeActionResult, "deserializeActionResult");
    actionResultErrorStack = /* @__PURE__ */ function() {
      let A;
      return { set(Q) {
        A = Q;
      }, get: /* @__PURE__ */ __name(() => A, "get") };
    }();
    __name(template, "template");
    DEFAULT_404_ROUTE = { component: DEFAULT_404_COMPONENT, generate: /* @__PURE__ */ __name(() => "", "generate"), params: [], pattern: /^\/404\/?$/, prerender: false, pathname: "/404", segments: [[{ content: "404", dynamic: false, spread: false }]], type: "page", route: "/404", fallbackRoutes: [], isIndex: false, origin: "internal" };
    __name(ensure404Route, "ensure404Route");
    __name(default404Page, "default404Page");
    default404Page.isAstroComponentFactory = true;
    default404Instance = { default: default404Page };
  }
});

// dist/_worker.js/chunks/index_s3SF91tP.mjs
function hasContentType(e2, t2) {
  const r2 = e2.split(";")[0].toLowerCase();
  return t2.some((e3) => r2 === e3);
}
function hasActionPayload(e2) {
  return "_actionPayload" in e2;
}
function createGetActionResult(e2) {
  return (t2) => {
    if (hasActionPayload(e2) && t2.toString() === getActionQueryString(e2._actionPayload.actionName)) return deserializeActionResult(e2._actionPayload.actionResult);
  };
}
function createCallAction(e2) {
  return (t2, r2) => {
    Reflect.set(e2, ACTION_API_CONTEXT_SYMBOL, true);
    return t2.bind(e2)(r2);
  };
}
function shouldAppendForwardSlash(e2, t2) {
  switch (e2) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore":
      switch (t2) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
  }
}
function redirectIsExternal(e2) {
  return "string" == typeof e2 ? e2.startsWith("http://") || e2.startsWith("https://") : e2.destination.startsWith("http://") || e2.destination.startsWith("https://");
}
async function renderRedirect(e2) {
  const { request: { method: t2 }, routeData: r2 } = e2, { redirect: s2, redirectRoute: a2 } = r2, o2 = a2 && "object" == typeof s2 ? s2.status : "GET" === t2 ? 301 : 308, n2 = { location: encodeURI(redirectRouteGenerate(e2)) };
  return s2 && redirectIsExternal(s2) ? "string" == typeof s2 ? Response.redirect(s2, o2) : Response.redirect(s2.destination, o2) : new Response(null, { status: o2, headers: n2 });
}
function redirectRouteGenerate(e2) {
  const { params: t2, routeData: { redirect: r2, redirectRoute: s2 } } = e2;
  if (void 0 !== s2) return s2?.generate(t2) || s2?.pathname || "/";
  if ("string" == typeof r2) {
    if (redirectIsExternal(r2)) return r2;
    {
      let e3 = r2;
      for (const r3 of Object.keys(t2)) {
        const s3 = t2[r3];
        e3 = e3.replace(`[${r3}]`, s3).replace(`[...${r3}]`, s3);
      }
      return e3;
    }
  }
  return void 0 === r2 ? "/" : r2.destination;
}
function badRequest(e2) {
  return new Response(null, { status: 400, statusText: "Bad request: " + e2 });
}
async function getRequestData(e2) {
  switch (e2.method) {
    case "GET": {
      const t2 = new URL(e2.url).searchParams;
      if (!t2.has("s") || !t2.has("e") || !t2.has("p")) return badRequest("Missing required query parameters.");
      const r2 = t2.get("s");
      return { componentExport: t2.get("e"), encryptedProps: t2.get("p"), encryptedSlots: r2 };
    }
    case "POST":
      try {
        const t2 = await e2.text(), r2 = JSON.parse(t2);
        return "slots" in r2 && "object" == typeof r2.slots ? badRequest("Plaintext slots are not allowed. Slots must be encrypted.") : r2;
      } catch (e3) {
        if (e3 instanceof SyntaxError) return badRequest("Request format is invalid.");
        throw e3;
      }
    default:
      return new Response(null, { status: 405 });
  }
}
function createEndpoint(e2) {
  const t2 = /* @__PURE__ */ __name(async (t3) => {
    const r2 = t3.params;
    if (!r2.name) return new Response(null, { status: 400, statusText: "Bad request" });
    const s2 = r2.name, a2 = await getRequestData(t3.request);
    if (a2 instanceof Response) return a2;
    const o2 = e2.serverIslandMap?.get(s2);
    if (!o2) return new Response(null, { status: 404, statusText: "Not found" });
    const n2 = await e2.key, i2 = a2.encryptedProps;
    let c = {};
    if ("" !== i2) try {
      const e3 = await decryptString(n2, i2);
      c = JSON.parse(e3);
    } catch (e3) {
      return badRequest("Encrypted props value is invalid.");
    }
    let l = {};
    const u = a2.encryptedSlots;
    if ("" !== u) try {
      const e3 = await decryptString(n2, u);
      l = JSON.parse(e3);
    } catch (e3) {
      return badRequest("Encrypted slots value is invalid.");
    }
    let d = (await o2())[a2.componentExport];
    const h = {};
    for (const e3 in l) h[e3] = createSlotValueFromString(l[e3]);
    if (t3.response.headers.set("X-Robots-Tag", "noindex"), isAstroComponentFactory(d)) {
      const e3 = d;
      d = /* @__PURE__ */ __name(function(...t4) {
        return e3.apply(this, t4);
      }, "d"), Object.assign(d, e3), d.propagation = "self";
    }
    return renderTemplate`${renderComponent(t3, "Component", d, c, h)}`;
  }, "t");
  t2.isAstroComponentFactory = true;
  return { default: t2, partial: true };
}
function matchRoute(e2, t2) {
  return t2.routes.find((t3) => t3.pattern.test(e2) || t3.fallbackRoutes.some((t4) => t4.pattern.test(e2)));
}
function isRoute404(e2) {
  return ROUTE404_RE.test(e2);
}
function isRoute500(e2) {
  return ROUTE500_RE.test(e2);
}
function isRoute404or500(e2) {
  return isRoute404(e2.route) || isRoute500(e2.route);
}
function isRouteServerIsland(e2) {
  return "_server-islands.astro" === e2.component;
}
function isRequestServerIsland(e2, t2 = "") {
  const r2 = new URL(e2.url);
  return ("/" === t2 ? r2.pathname.slice(t2.length) : r2.pathname.slice(t2.length + 1)).startsWith("_server-islands");
}
function requestIs404Or500(e2, t2 = "") {
  const r2 = new URL(e2.url).pathname.slice(t2.length);
  return isRoute404(r2) || isRoute500(r2);
}
function isRouteExternalRedirect(e2) {
  return !("redirect" !== e2.type || !e2.redirect || !redirectIsExternal(e2.redirect));
}
function requestHasLocale(e2) {
  return function(t2) {
    return pathHasLocale(t2.url.pathname, e2);
  };
}
function pathHasLocale(e2, t2) {
  const r2 = e2.split("/").map(normalizeThePath);
  for (const e3 of r2) for (const r3 of t2) if ("string" == typeof r3) {
    if (normalizeTheLocale(e3) === normalizeTheLocale(r3)) return true;
  } else if (e3 === r3.path) return true;
  return false;
}
function getPathByLocale(e2, t2) {
  for (const r2 of t2) if ("string" == typeof r2) {
    if (r2 === e2) return r2;
  } else for (const t3 of r2.codes) if (t3 === e2) return r2.path;
  throw new AstroError(i18nNoLocaleFoundInPath);
}
function normalizeTheLocale(e2) {
  return e2.replaceAll("_", "-").toLowerCase();
}
function normalizeThePath(e2) {
  return e2.endsWith(".html") ? e2.slice(0, -5) : e2;
}
function getAllCodes(e2) {
  const t2 = [];
  for (const r2 of e2) "string" == typeof r2 ? t2.push(r2) : t2.push(...r2.codes);
  return t2;
}
function redirectToDefaultLocale({ trailingSlash: e2, format: t2, base: r2, defaultLocale: s2 }) {
  return function(a2, o2) {
    return shouldAppendForwardSlash(e2, t2) ? a2.redirect(`${appendForwardSlash(joinPaths(r2, s2))}`, o2) : a2.redirect(`${joinPaths(r2, s2)}`, o2);
  };
}
function notFound({ base: e2, locales: t2, fallback: r2 }) {
  return function(s2, a2) {
    if ("no" === a2?.headers.get(REROUTE_DIRECTIVE_HEADER) && void 0 === r2) return a2;
    const o2 = s2.url;
    return o2.pathname === e2 + "/" || o2.pathname === e2 || pathHasLocale(o2.pathname, t2) ? void 0 : a2 ? (a2.headers.set(REROUTE_DIRECTIVE_HEADER, "no"), new Response(a2.body, { status: 404, headers: a2.headers })) : new Response(null, { status: 404, headers: { [REROUTE_DIRECTIVE_HEADER]: "no" } });
  };
}
function redirectToFallback({ fallback: e2, locales: t2, defaultLocale: r2, strategy: s2, base: a2, fallbackType: o2 }) {
  return async function(n2, i2) {
    if (i2.status >= 300 && e2) {
      const i3 = e2 ? Object.keys(e2) : [], c = n2.url.pathname.split("/").find((e3) => {
        for (const r3 of t2) if ("string" == typeof r3) {
          if (r3 === e3) return true;
        } else if (r3.path === e3) return true;
        return false;
      });
      if (c && i3.includes(c)) {
        const i4 = getPathByLocale(e2[c], t2);
        let l;
        return i4 === r2 && "pathname-prefix-other-locales" === s2 ? n2.url.pathname.includes(`${a2}`) ? (l = n2.url.pathname.replace(`/${c}`, ""), "" === l && (l = "/")) : l = n2.url.pathname.replace(`/${c}`, "/") : l = n2.url.pathname.replace(`/${c}`, `/${i4}`), "rewrite" === o2 ? await n2.rewrite(l + n2.url.search) : n2.redirect(l + n2.url.search);
      }
    }
    return i2;
  };
}
function parseLocale(e2) {
  if ("*" === e2) return [{ locale: e2, qualityValue: void 0 }];
  const t2 = [], r2 = e2.split(",").map((e3) => e3.trim());
  for (const e3 of r2) {
    const r3 = e3.split(";").map((e4) => e4.trim()), s2 = r3[0], a2 = r3[1];
    if (r3) if (a2 && a2.startsWith("q=")) {
      const e4 = Number.parseFloat(a2.slice(2));
      Number.isNaN(e4) || e4 > 1 ? t2.push({ locale: s2, qualityValue: void 0 }) : t2.push({ locale: s2, qualityValue: e4 });
    } else t2.push({ locale: s2, qualityValue: void 0 });
  }
  return t2;
}
function sortAndFilterLocales(e2, t2) {
  const r2 = getAllCodes(t2).map(normalizeTheLocale);
  return e2.filter((e3) => "*" === e3.locale || r2.includes(normalizeTheLocale(e3.locale))).sort((e3, t3) => e3.qualityValue && t3.qualityValue ? Math.sign(t3.qualityValue - e3.qualityValue) : 0);
}
function computePreferredLocale(e2, t2) {
  const r2 = e2.headers.get("Accept-Language");
  let s2;
  if (r2) {
    const e3 = sortAndFilterLocales(parseLocale(r2), t2).at(0);
    if (e3 && "*" !== e3.locale) {
      for (const r3 of t2) if ("string" == typeof r3) {
        if (normalizeTheLocale(r3) === normalizeTheLocale(e3.locale)) {
          s2 = r3;
          break;
        }
      } else for (const t3 of r3.codes) if (normalizeTheLocale(t3) === normalizeTheLocale(e3.locale)) {
        s2 = t3;
        break;
      }
    }
  }
  return s2;
}
function computePreferredLocaleList(e2, t2) {
  const r2 = e2.headers.get("Accept-Language");
  let s2 = [];
  if (r2) {
    const e3 = sortAndFilterLocales(parseLocale(r2), t2);
    if (1 === e3.length && "*" === e3.at(0).locale) return getAllCodes(t2);
    if (e3.length > 0) for (const r3 of e3) for (const e4 of t2) if ("string" == typeof e4) normalizeTheLocale(e4) === normalizeTheLocale(r3.locale) && s2.push(e4);
    else for (const t3 of e4.codes) t3 === r3.locale && s2.push(t3);
  }
  return s2;
}
function computeCurrentLocale(e2, t2, r2) {
  for (const r3 of e2.split("/").map(normalizeThePath)) for (const e3 of t2) if ("string" == typeof e3) {
    if (!r3.includes(e3)) continue;
    if (normalizeTheLocale(e3) === normalizeTheLocale(r3)) return e3;
  } else {
    if (e3.path === r3) return e3.codes.at(0);
    for (const t3 of e3.codes) if (normalizeTheLocale(t3) === normalizeTheLocale(r3)) return t3;
  }
  for (const e3 of t2) if ("string" == typeof e3) {
    if (e3 === r2) return e3;
  } else if (e3.path === r2) return e3.codes.at(0);
}
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1, Object.defineProperty(dist, "__esModule", { value: true }), dist.parseCookie = i2, dist.parse = i2, dist.stringifyCookie = function(r3, s3) {
    const a3 = s3?.encode || encodeURIComponent, o3 = [];
    for (const s4 of Object.keys(r3)) {
      const n3 = r3[s4];
      if (void 0 === n3) continue;
      if (!e2.test(s4)) throw new TypeError(`cookie name is invalid: ${s4}`);
      const i3 = a3(n3);
      if (!t2.test(i3)) throw new TypeError(`cookie val is invalid: ${n3}`);
      o3.push(`${s4}=${i3}`);
    }
    return o3.join("; ");
  }, dist.stringifySetCookie = c, dist.serialize = c, dist.parseSetCookie = function(e3, t3) {
    const r3 = t3?.decode || h, s3 = e3.length, o3 = l(e3, 0, s3), n3 = u(e3, 0, o3), i3 = -1 === n3 ? { name: "", value: r3(d(e3, 0, o3)) } : { name: d(e3, 0, n3), value: r3(d(e3, n3 + 1, o3)) };
    let c2 = o3 + 1;
    for (; c2 < s3; ) {
      const t4 = l(e3, c2, s3), r4 = u(e3, c2, t4), o4 = d(e3, c2, -1 === r4 ? t4 : r4), n4 = -1 === r4 ? void 0 : d(e3, r4 + 1, t4);
      switch (o4.toLowerCase()) {
        case "httponly":
          i3.httpOnly = true;
          break;
        case "secure":
          i3.secure = true;
          break;
        case "partitioned":
          i3.partitioned = true;
          break;
        case "domain":
          i3.domain = n4;
          break;
        case "path":
          i3.path = n4;
          break;
        case "max-age":
          n4 && a2.test(n4) && (i3.maxAge = Number(n4));
          break;
        case "expires":
          if (!n4) break;
          const e4 = new Date(n4);
          Number.isFinite(e4.valueOf()) && (i3.expires = e4);
          break;
        case "priority":
          if (!n4) break;
          const t5 = n4.toLowerCase();
          "low" !== t5 && "medium" !== t5 && "high" !== t5 || (i3.priority = t5);
          break;
        case "samesite":
          if (!n4) break;
          const r5 = n4.toLowerCase();
          "lax" !== r5 && "strict" !== r5 && "none" !== r5 || (i3.sameSite = r5);
      }
      c2 = t4 + 1;
    }
    return i3;
  }, dist.stringifySetCookie = c, dist.serialize = c;
  const e2 = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t2 = /^[\u0021-\u003A\u003C-\u007E]*$/, r2 = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, s2 = /^[\u0020-\u003A\u003D-\u007E]*$/, a2 = /^-?\d+$/, o2 = Object.prototype.toString, n2 = (() => {
    const e3 = /* @__PURE__ */ __name(function() {
    }, "e");
    return e3.prototype = /* @__PURE__ */ Object.create(null), e3;
  })();
  function i2(e3, t3) {
    const r3 = new n2(), s3 = e3.length;
    if (s3 < 2) return r3;
    const a3 = t3?.decode || h;
    let o3 = 0;
    do {
      const t4 = u(e3, o3, s3);
      if (-1 === t4) break;
      const n3 = l(e3, o3, s3);
      if (t4 > n3) {
        o3 = e3.lastIndexOf(";", t4 - 1) + 1;
        continue;
      }
      const i3 = d(e3, o3, t4);
      void 0 === r3[i3] && (r3[i3] = a3(d(e3, t4 + 1, n3))), o3 = n3 + 1;
    } while (o3 < s3);
    return r3;
  }
  __name(i2, "i");
  function c(a3, n3, i3) {
    const c2 = "object" == typeof a3 ? a3 : { ...i3, name: a3, value: String(n3) }, l2 = "object" == typeof n3 ? n3 : i3, u2 = l2?.encode || encodeURIComponent;
    if (!e2.test(c2.name)) throw new TypeError(`argument name is invalid: ${c2.name}`);
    const d2 = c2.value ? u2(c2.value) : "";
    if (!t2.test(d2)) throw new TypeError(`argument val is invalid: ${c2.value}`);
    let h2 = c2.name + "=" + d2;
    if (void 0 !== c2.maxAge) {
      if (!Number.isInteger(c2.maxAge)) throw new TypeError(`option maxAge is invalid: ${c2.maxAge}`);
      h2 += "; Max-Age=" + c2.maxAge;
    }
    if (c2.domain) {
      if (!r2.test(c2.domain)) throw new TypeError(`option domain is invalid: ${c2.domain}`);
      h2 += "; Domain=" + c2.domain;
    }
    if (c2.path) {
      if (!s2.test(c2.path)) throw new TypeError(`option path is invalid: ${c2.path}`);
      h2 += "; Path=" + c2.path;
    }
    if (c2.expires) {
      if (p = c2.expires, "[object Date]" !== o2.call(p) || !Number.isFinite(c2.expires.valueOf())) throw new TypeError(`option expires is invalid: ${c2.expires}`);
      h2 += "; Expires=" + c2.expires.toUTCString();
    }
    var p;
    if (c2.httpOnly && (h2 += "; HttpOnly"), c2.secure && (h2 += "; Secure"), c2.partitioned && (h2 += "; Partitioned"), c2.priority) {
      switch ("string" == typeof c2.priority ? c2.priority.toLowerCase() : void 0) {
        case "low":
          h2 += "; Priority=Low";
          break;
        case "medium":
          h2 += "; Priority=Medium";
          break;
        case "high":
          h2 += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${c2.priority}`);
      }
    }
    if (c2.sameSite) {
      switch ("string" == typeof c2.sameSite ? c2.sameSite.toLowerCase() : c2.sameSite) {
        case true:
        case "strict":
          h2 += "; SameSite=Strict";
          break;
        case "lax":
          h2 += "; SameSite=Lax";
          break;
        case "none":
          h2 += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${c2.sameSite}`);
      }
    }
    return h2;
  }
  __name(c, "c");
  function l(e3, t3, r3) {
    const s3 = e3.indexOf(";", t3);
    return -1 === s3 ? r3 : s3;
  }
  __name(l, "l");
  function u(e3, t3, r3) {
    const s3 = e3.indexOf("=", t3);
    return s3 < r3 ? s3 : -1;
  }
  __name(u, "u");
  function d(e3, t3, r3) {
    let s3 = t3, a3 = r3;
    do {
      const t4 = e3.charCodeAt(s3);
      if (32 !== t4 && 9 !== t4) break;
    } while (++s3 < a3);
    for (; a3 > s3; ) {
      const t4 = e3.charCodeAt(a3 - 1);
      if (32 !== t4 && 9 !== t4) break;
      a3--;
    }
    return e3.slice(s3, a3);
  }
  __name(d, "d");
  function h(e3) {
    if (-1 === e3.indexOf("%")) return e3;
    try {
      return decodeURIComponent(e3);
    } catch (t3) {
      return e3;
    }
  }
  __name(h, "h");
  return dist;
}
function attachCookiesToResponse(e2, t2) {
  Reflect.set(e2, astroCookiesSymbol, t2);
}
function getCookiesFromResponse(e2) {
  let t2 = Reflect.get(e2, astroCookiesSymbol);
  return null != t2 ? t2 : void 0;
}
function* getSetCookiesFromResponse(e2) {
  const t2 = getCookiesFromResponse(e2);
  if (!t2) return [];
  for (const e3 of AstroCookies.consume(t2)) yield e3;
  return [];
}
function createRequest({ url: e2, headers: t2, method: r2 = "GET", body: s2, logger: a2, isPrerendered: o2 = false, routePattern: n2, init: i2 }) {
  const c = o2 ? void 0 : t2 instanceof Headers ? t2 : new Headers(Object.entries(t2).filter(([e3]) => !e3.startsWith(":")));
  "string" == typeof e2 && (e2 = new URL(e2)), o2 && (e2.search = "");
  const l = new Request(e2, { method: r2, headers: c, body: o2 ? null : s2, ...i2 });
  if (o2) {
    let e3 = l.headers;
    const { value: t3, writable: r3, ...s3 } = Object.getOwnPropertyDescriptor(l, "headers") || {};
    Object.defineProperty(l, "headers", { ...s3, get: /* @__PURE__ */ __name(() => (a2.warn(null, `\`Astro.request.headers\` was used when rendering the route \`${n2}'\`. \`Astro.request.headers\` is not available on prerendered pages. If you need access to request headers, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default.`), e3), "get"), set(t4) {
      e3 = t4;
    } });
  }
  return l;
}
function findRouteToRewrite({ payload: e2, routes: t2, request: r2, trailingSlash: s2, buildFormat: a2, base: o2, outDir: n2 }) {
  let i2;
  i2 = e2 instanceof URL ? e2 : e2 instanceof Request ? new URL(e2.url) : new URL(e2, new URL(r2.url).origin);
  let c = i2.pathname;
  const l = shouldAppendForwardSlash(s2, a2);
  if ("/" !== o2) {
    i2.pathname === o2 || i2.pathname === removeTrailingForwardSlash(o2) ? c = l ? "/" : "" : i2.pathname.startsWith(o2) && (c = l ? appendForwardSlash(i2.pathname) : removeTrailingForwardSlash(i2.pathname), c = c.slice(o2.length));
  }
  !c.startsWith("/") && l && i2.pathname.endsWith("/") && (c = prependForwardSlash(c)), "/" !== c || "/" === o2 || l || (c = ""), "file" === a2 && (c = c.replace(/\.html$/, "")), i2.pathname = "/" === o2 || "" !== c && "/" !== c || l ? joinPaths(...[o2, c].filter(Boolean)) : removeTrailingForwardSlash(o2);
  const u = decodeURI(c);
  let d;
  for (const e3 of t2) if (e3.pattern.test(u)) {
    if (e3.params && 0 !== e3.params.length && e3.distURL && 0 !== e3.distURL.length && !e3.distURL.find((e4) => e4.href.replace(n2.toString(), "").replace(/(?:\/index\.html|\.html)$/, "") == trimSlashes(u))) continue;
    d = e3;
    break;
  }
  if (d) return { routeData: d, newUrl: i2, pathname: u };
  {
    const e3 = t2.find((e4) => "/404" === e4.route);
    return e3 ? { routeData: e3, newUrl: i2, pathname: c } : { routeData: DEFAULT_404_ROUTE, newUrl: i2, pathname: c };
  }
}
function copyRequest(e2, t2, r2, s2, a2) {
  if (t2.bodyUsed) throw new AstroError(RewriteWithBodyUsed);
  return createRequest({ url: e2, method: t2.method, body: t2.body, isPrerendered: r2, logger: s2, headers: r2 ? {} : t2.headers, routePattern: a2, init: { referrer: t2.referrer, referrerPolicy: t2.referrerPolicy, mode: t2.mode, credentials: t2.credentials, cache: t2.cache, redirect: t2.redirect, integrity: t2.integrity, signal: t2.signal, keepalive: t2.keepalive, duplex: "half" } });
}
function setOriginPathname(e2, t2, r2, s2) {
  t2 || (t2 = "/");
  const a2 = shouldAppendForwardSlash(r2, s2);
  let o2;
  o2 = "/" === t2 ? "/" : a2 ? appendForwardSlash(t2) : removeTrailingForwardSlash(t2), Reflect.set(e2, originPathnameSymbol, encodeURIComponent(o2));
}
function getOriginPathname(e2) {
  const t2 = Reflect.get(e2, originPathnameSymbol);
  return t2 ? decodeURIComponent(t2) : new URL(e2.url).pathname;
}
function validateGetStaticPathsParameter([e2, t2], r2) {
  if (!VALID_PARAM_TYPES.includes(typeof t2)) throw new AstroError({ ...GetStaticPathsInvalidRouteParam, message: GetStaticPathsInvalidRouteParam.message(e2, t2, typeof t2), location: { file: r2 } });
}
function validateDynamicRouteModule(e2, { ssr: t2, route: r2 }) {
  if ((!t2 || r2.prerender) && !e2.getStaticPaths) throw new AstroError({ ...GetStaticPathsRequired, location: { file: r2.component } });
}
function validateGetStaticPathsResult(e2, t2, r2) {
  if (!Array.isArray(e2)) throw new AstroError({ ...InvalidGetStaticPathsReturn, message: InvalidGetStaticPathsReturn.message(typeof e2), location: { file: r2.component } });
  e2.forEach((e3) => {
    if ("object" == typeof e3 && Array.isArray(e3) || null === e3) throw new AstroError({ ...InvalidGetStaticPathsEntry, message: InvalidGetStaticPathsEntry.message(Array.isArray(e3) ? "array" : typeof e3) });
    if (void 0 === e3.params || null === e3.params || e3.params && 0 === Object.keys(e3.params).length) throw new AstroError({ ...GetStaticPathsExpectedParams, location: { file: r2.component } });
    for (const [r3, s2] of Object.entries(e3.params)) void 0 !== s2 && "string" != typeof s2 && "number" != typeof s2 && t2.warn("router", `getStaticPaths() returned an invalid path param: "${r3}". A string, number or undefined value was expected, but got \`${JSON.stringify(s2)}\`.`), "string" == typeof s2 && "" === s2 && t2.warn("router", `getStaticPaths() returned an invalid path param: "${r3}". \`undefined\` expected for an optional param, but got empty string.`);
  });
}
function stringifyParams(e2, t2) {
  const r2 = Object.entries(e2).reduce((e3, r3) => {
    validateGetStaticPathsParameter(r3, t2.component);
    const [s2, a2] = r3;
    return void 0 !== a2 && (e3[s2] = "string" == typeof a2 ? trimSlashes(a2) : a2.toString()), e3;
  }, {});
  return t2.generate(r2);
}
function generatePaginateFunction(e2, t2) {
  return function(r2, s2 = {}) {
    let { pageSize: a2, params: o2, props: n2 } = s2;
    const i2 = a2 || 10, c = "page", l = o2 || {}, u = n2 || {};
    let d;
    if (e2.params.includes(`...${c}`)) d = false;
    else {
      if (!e2.params.includes(`${c}`)) throw new AstroError({ ...PageNumberParamNotFound, message: PageNumberParamNotFound.message(c) });
      d = true;
    }
    const h = Math.max(1, Math.ceil(r2.length / i2));
    return [...Array(h).keys()].map((s3) => {
      const a3 = s3 + 1, o3 = i2 === 1 / 0 ? 0 : (a3 - 1) * i2, n3 = Math.min(o3 + i2, r2.length), p = { ...l, [c]: d || a3 > 1 ? String(a3) : void 0 }, f = addRouteBase(e2.generate({ ...p }), t2), m = a3 === h ? void 0 : addRouteBase(e2.generate({ ...p, page: String(a3 + 1) }), t2), g = 1 === a3 ? void 0 : addRouteBase(e2.generate({ ...p, page: d || a3 - 1 != 1 ? String(a3 - 1) : void 0 }), t2), y = 1 === a3 ? void 0 : addRouteBase(e2.generate({ ...p, page: d ? "1" : void 0 }), t2), w = a3 === h ? void 0 : addRouteBase(e2.generate({ ...p, page: String(h) }), t2);
      return { params: p, props: { ...u, page: { data: r2.slice(o3, n3), start: o3, end: n3 - 1, size: i2, total: r2.length, currentPage: a3, lastPage: h, url: { current: f, next: m, prev: g, first: y, last: w } } } };
    });
  };
}
function addRouteBase(e2, t2) {
  let r2 = joinPaths(t2, e2);
  return "" === r2 && (r2 = "/"), r2;
}
async function callGetStaticPaths({ mod: e2, route: t2, routeCache: r2, logger: s2, ssr: a2, base: o2 }) {
  const n2 = r2.get(t2);
  if (!e2) throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
  if (n2?.staticPaths) return n2.staticPaths;
  if (validateDynamicRouteModule(e2, { ssr: a2, route: t2 }), a2 && !t2.prerender) {
    const e3 = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    return r2.set(t2, { ...n2, staticPaths: e3 }), e3;
  }
  let i2 = [];
  if (!e2.getStaticPaths) throw new Error("Unexpected Error.");
  i2 = await e2.getStaticPaths({ paginate: generatePaginateFunction(t2, o2), routePattern: t2.route }), validateGetStaticPathsResult(i2, s2, t2);
  const c = i2;
  c.keyed = /* @__PURE__ */ new Map();
  for (const e3 of c) {
    const r3 = stringifyParams(e3.params, t2);
    c.keyed.set(r3, e3);
  }
  return r2.set(t2, { ...n2, staticPaths: c }), c;
}
function findPathItemByKey(e2, t2, r2, s2) {
  const a2 = stringifyParams(t2, r2), o2 = e2.keyed.get(a2);
  if (o2) return o2;
  s2.debug("router", `findPathItemByKey() - Unexpected cache miss looking for ${a2}`);
}
function routeIsRedirect(e2) {
  return "redirect" === e2?.type;
}
function routeIsFallback(e2) {
  return "fallback" === e2?.type;
}
async function getProps(e2) {
  const { logger: t2, mod: r2, routeData: s2, routeCache: a2, pathname: o2, serverLike: n2, base: i2 } = e2;
  if (!s2 || s2.pathname) return {};
  if (routeIsRedirect(s2) || routeIsFallback(s2) || s2.component === DEFAULT_404_COMPONENT) return {};
  const c = await callGetStaticPaths({ mod: r2, route: s2, routeCache: a2, logger: t2, ssr: n2, base: i2 }), l = getParams(s2, o2), u = findPathItemByKey(c, l, s2, t2);
  if (!u && (!n2 || s2.prerender)) throw new AstroError({ ...NoMatchingStaticPathFound, message: NoMatchingStaticPathFound.message(o2), hint: NoMatchingStaticPathFound.hint([s2.component]) });
  r2 && validatePrerenderEndpointCollision(s2, r2, l);
  return u?.props ? { ...u.props } : {};
}
function getParams(e2, t2) {
  if (!e2.params.length) return {};
  const r2 = e2.pattern.exec(t2) || e2.fallbackRoutes.map((e3) => e3.pattern.exec(t2)).find((e3) => e3);
  if (!r2) return {};
  const s2 = {};
  return e2.params.forEach((e3, t3) => {
    e3.startsWith("...") ? s2[e3.slice(3)] = r2[t3 + 1] ? r2[t3 + 1] : void 0 : s2[e3] = r2[t3 + 1];
  }), s2;
}
function validatePrerenderEndpointCollision(e2, t2, r2) {
  if ("endpoint" === e2.type && t2.getStaticPaths) {
    const t3 = e2.segments[e2.segments.length - 1], s2 = Object.values(r2), a2 = s2[s2.length - 1];
    if (1 === t3.length && t3[0].dynamic && void 0 === a2) throw new AstroError({ ...PrerenderDynamicEndpointPathCollide, message: PrerenderDynamicEndpointPathCollide.message(e2.route), hint: PrerenderDynamicEndpointPathCollide.hint(e2.component), location: { file: e2.component } });
  }
}
function getFunctionExpression(e2) {
  if (!e2) return;
  const t2 = e2?.expressions?.filter((e3) => false === isRenderInstruction(e3));
  return 1 === t2?.length ? t2[0] : void 0;
}
function getActionContext(e2) {
  const t2 = getCallerInfo(e2), r2 = Boolean(e2.locals._actionPayload);
  let s2;
  return t2 && "POST" === e2.request.method && !r2 && (s2 = { calledFrom: t2.from, name: t2.name, handler: /* @__PURE__ */ __name(async () => {
    const r3 = Reflect.get(e2, apiContextRoutesSymbol), s3 = shouldAppendForwardSlash(r3.manifest.trailingSlash, r3.manifest.buildFormat) ? removeTrailingForwardSlash(t2.name) : t2.name;
    let a2, o2;
    try {
      a2 = await r3.getAction(s3);
    } catch (e3) {
      if (e3 instanceof Error && "name" in e3 && "string" == typeof e3.name && e3.name === ActionNotFoundError.name) return { data: void 0, error: new ActionError({ code: "NOT_FOUND" }) };
      throw e3;
    }
    try {
      o2 = await parseRequestBody(e2.request);
    } catch (e3) {
      if (e3 instanceof TypeError) return { data: void 0, error: new ActionError({ code: "UNSUPPORTED_MEDIA_TYPE" }) };
      throw e3;
    }
    const n2 = ["props", "getActionResult", "callAction", "redirect"], i2 = Object.create(Object.getPrototypeOf(e2), Object.fromEntries(Object.entries(Object.getOwnPropertyDescriptors(e2)).filter(([e3]) => !n2.includes(e3))));
    Reflect.set(i2, ACTION_API_CONTEXT_SYMBOL, true);
    return a2.bind(i2)(o2);
  }, "handler") }), { action: s2, setActionResult: /* @__PURE__ */ __name(function(t3, r3) {
    e2.locals._actionPayload = { actionResult: r3, actionName: t3 };
  }, "setActionResult"), serializeActionResult, deserializeActionResult };
}
function getCallerInfo(e2) {
  if (e2.routePattern === ACTION_RPC_ROUTE_PATTERN) return { from: "rpc", name: e2.url.pathname.replace(/^.*\/_actions\//, "") };
  const t2 = e2.url.searchParams.get(ACTION_QUERY_PARAMS.actionName);
  return t2 ? { from: "form", name: t2 } : void 0;
}
async function parseRequestBody(e2) {
  const t2 = e2.headers.get("content-type"), r2 = e2.headers.get("Content-Length");
  if (t2) {
    if (hasContentType(t2, formContentTypes)) return await e2.clone().formData();
    if (hasContentType(t2, ["application/json"])) return "0" === r2 ? void 0 : await e2.clone().json();
    throw new TypeError("Unsupported content type");
  }
}
function deduplicateDirectiveValues(e2, t2) {
  const [r2, ...s2] = e2.split(/\s+/).filter(Boolean), [a2, ...o2] = t2.split(/\s+/).filter(Boolean);
  if (r2 !== a2) return;
  return `${r2} ${Array.from(/* @__PURE__ */ new Set([...s2, ...o2])).join(" ")}`;
}
function pushDirective(e2, t2) {
  let r2 = false;
  if (0 === e2.length) return [t2];
  const s2 = [];
  for (const a2 of e2) {
    if (r2) {
      s2.push(a2);
      continue;
    }
    const e3 = deduplicateDirectiveValues(a2, t2);
    e3 ? (s2.push(e3), r2 = true) : (s2.push(a2), s2.push(t2));
  }
  return s2;
}
async function callMiddleware(e2, t2, r2) {
  let s2, a2 = false;
  let o2 = e2(t2, async (e3) => (a2 = true, s2 = r2(t2, e3), s2));
  return await Promise.resolve(o2).then(async (e3) => {
    if (a2) {
      if (void 0 !== e3) {
        if (e3 instanceof Response == false) throw new AstroError(MiddlewareNotAResponse);
        return e3;
      }
      if (s2) return s2;
      throw new AstroError(MiddlewareNotAResponse);
    }
    if (void 0 === e3) throw new AstroError(MiddlewareNoDataOrNextCalled);
    if (e3 instanceof Response == false) throw new AstroError(MiddlewareNotAResponse);
    return e3;
  });
}
function jsonParseTransform(e2, t2) {
  if (!("__proto__" === e2 || "constructor" === e2 && t2 && "object" == typeof t2 && "prototype" in t2)) return t2;
  warnKeyDropped(e2);
}
function warnKeyDropped(e2) {
  console.warn(`[destr] Dropping "${e2}" key to prevent prototype pollution.`);
}
function destr(e2, t2 = {}) {
  if ("string" != typeof e2) return e2;
  if ('"' === e2[0] && '"' === e2[e2.length - 1] && -1 === e2.indexOf("\\")) return e2.slice(1, -1);
  const r2 = e2.trim();
  if (r2.length <= 9) switch (r2.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    case "undefined":
      return;
    case "null":
      return null;
    case "nan":
      return Number.NaN;
    case "infinity":
      return Number.POSITIVE_INFINITY;
    case "-infinity":
      return Number.NEGATIVE_INFINITY;
  }
  if (!JsonSigRx.test(e2)) {
    if (t2.strict) throw new SyntaxError("[destr] Invalid JSON");
    return e2;
  }
  try {
    if (suspectProtoRx.test(e2) || suspectConstructorRx.test(e2)) {
      if (t2.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(e2, jsonParseTransform);
    }
    return JSON.parse(e2);
  } catch (r3) {
    if (t2.strict) throw r3;
    return e2;
  }
}
function wrapToPromise(e2) {
  return e2 && "function" == typeof e2.then ? e2 : Promise.resolve(e2);
}
function asyncCall(e2, ...t2) {
  try {
    return wrapToPromise(e2(...t2));
  } catch (e3) {
    return Promise.reject(e3);
  }
}
function isPrimitive(e2) {
  const t2 = typeof e2;
  return null === e2 || "object" !== t2 && "function" !== t2;
}
function isPureObject(e2) {
  const t2 = Object.getPrototypeOf(e2);
  return !t2 || t2.isPrototypeOf(Object);
}
function stringify$1(e2) {
  if (isPrimitive(e2)) return String(e2);
  if (isPureObject(e2) || Array.isArray(e2)) return JSON.stringify(e2);
  if ("function" == typeof e2.toJSON) return stringify$1(e2.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function serializeRaw(e2) {
  return "string" == typeof e2 ? e2 : "base64:" + base64Encode(e2);
}
function deserializeRaw(e2) {
  return "string" != typeof e2 ? e2 : e2.startsWith("base64:") ? base64Decode(e2.slice(7)) : e2;
}
function base64Decode(e2) {
  return globalThis.Buffer ? Buffer.from(e2, "base64") : Uint8Array.from(globalThis.atob(e2), (e3) => e3.codePointAt(0));
}
function base64Encode(e2) {
  return globalThis.Buffer ? Buffer.from(e2).toString("base64") : globalThis.btoa(String.fromCodePoint(...e2));
}
function normalizeKey(e2) {
  return e2 && e2.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...e2) {
  return normalizeKey(e2.join(":"));
}
function normalizeBaseKey(e2) {
  return (e2 = normalizeKey(e2)) ? e2 + ":" : "";
}
function filterKeyByDepth(e2, t2) {
  if (void 0 === t2) return true;
  let r2 = 0, s2 = e2.indexOf(":");
  for (; s2 > -1; ) r2++, s2 = e2.indexOf(":", s2 + 1);
  return r2 <= t2;
}
function filterKeyByBase(e2, t2) {
  return t2 ? e2.startsWith(t2) && "$" !== e2[e2.length - 1] : "$" !== e2[e2.length - 1];
}
function defineDriver(e2) {
  return e2;
}
function createStorage(e2 = {}) {
  const t2 = { mounts: { "": e2.driver || memory() }, mountpoints: [""], watching: false, watchListeners: [], unwatch: {} }, r2 = /* @__PURE__ */ __name((e3) => {
    for (const r3 of t2.mountpoints) if (e3.startsWith(r3)) return { base: r3, relativeKey: e3.slice(r3.length), driver: t2.mounts[r3] };
    return { base: "", relativeKey: e3, driver: t2.mounts[""] };
  }, "r"), s2 = /* @__PURE__ */ __name((e3, r3) => t2.mountpoints.filter((t3) => t3.startsWith(e3) || r3 && e3.startsWith(t3)).map((r4) => ({ relativeBase: e3.length > r4.length ? e3.slice(r4.length) : void 0, mountpoint: r4, driver: t2.mounts[r4] })), "s"), a2 = /* @__PURE__ */ __name((e3, r3) => {
    if (t2.watching) {
      r3 = normalizeKey(r3);
      for (const s3 of t2.watchListeners) s3(e3, r3);
    }
  }, "a"), o2 = /* @__PURE__ */ __name(async () => {
    if (t2.watching) {
      for (const e3 in t2.unwatch) await t2.unwatch[e3]();
      t2.unwatch = {}, t2.watching = false;
    }
  }, "o"), n2 = /* @__PURE__ */ __name((e3, t3, s3) => {
    const a3 = /* @__PURE__ */ new Map(), o3 = /* @__PURE__ */ __name((e4) => {
      let t4 = a3.get(e4.base);
      return t4 || (t4 = { driver: e4.driver, base: e4.base, items: [] }, a3.set(e4.base, t4)), t4;
    }, "o");
    for (const s4 of e3) {
      const e4 = "string" == typeof s4, a4 = normalizeKey(e4 ? s4 : s4.key), n3 = e4 ? void 0 : s4.value, i3 = e4 || !s4.options ? t3 : { ...t3, ...s4.options }, c = r2(a4);
      o3(c).items.push({ key: a4, value: n3, relativeKey: c.relativeKey, options: i3 });
    }
    return Promise.all([...a3.values()].map((e4) => s3(e4))).then((e4) => e4.flat());
  }, "n"), i2 = { hasItem(e3, t3 = {}) {
    e3 = normalizeKey(e3);
    const { relativeKey: s3, driver: a3 } = r2(e3);
    return asyncCall(a3.hasItem, s3, t3);
  }, getItem(e3, t3 = {}) {
    e3 = normalizeKey(e3);
    const { relativeKey: s3, driver: a3 } = r2(e3);
    return asyncCall(a3.getItem, s3, t3).then((e4) => destr(e4));
  }, getItems: /* @__PURE__ */ __name((e3, t3 = {}) => n2(e3, t3, (e4) => e4.driver.getItems ? asyncCall(e4.driver.getItems, e4.items.map((e5) => ({ key: e5.relativeKey, options: e5.options })), t3).then((t4) => t4.map((t5) => ({ key: joinKeys(e4.base, t5.key), value: destr(t5.value) }))) : Promise.all(e4.items.map((t4) => asyncCall(e4.driver.getItem, t4.relativeKey, t4.options).then((e5) => ({ key: t4.key, value: destr(e5) }))))), "getItems"), getItemRaw(e3, t3 = {}) {
    e3 = normalizeKey(e3);
    const { relativeKey: s3, driver: a3 } = r2(e3);
    return a3.getItemRaw ? asyncCall(a3.getItemRaw, s3, t3) : asyncCall(a3.getItem, s3, t3).then((e4) => deserializeRaw(e4));
  }, async setItem(e3, t3, s3 = {}) {
    if (void 0 === t3) return i2.removeItem(e3);
    e3 = normalizeKey(e3);
    const { relativeKey: o3, driver: n3 } = r2(e3);
    n3.setItem && (await asyncCall(n3.setItem, o3, stringify$1(t3), s3), n3.watch || a2("update", e3));
  }, async setItems(e3, t3) {
    await n2(e3, t3, async (e4) => {
      if (e4.driver.setItems) return asyncCall(e4.driver.setItems, e4.items.map((e5) => ({ key: e5.relativeKey, value: stringify$1(e5.value), options: e5.options })), t3);
      e4.driver.setItem && await Promise.all(e4.items.map((t4) => asyncCall(e4.driver.setItem, t4.relativeKey, stringify$1(t4.value), t4.options)));
    });
  }, async setItemRaw(e3, t3, s3 = {}) {
    if (void 0 === t3) return i2.removeItem(e3, s3);
    e3 = normalizeKey(e3);
    const { relativeKey: o3, driver: n3 } = r2(e3);
    if (n3.setItemRaw) await asyncCall(n3.setItemRaw, o3, t3, s3);
    else {
      if (!n3.setItem) return;
      await asyncCall(n3.setItem, o3, serializeRaw(t3), s3);
    }
    n3.watch || a2("update", e3);
  }, async removeItem(e3, t3 = {}) {
    "boolean" == typeof t3 && (t3 = { removeMeta: t3 }), e3 = normalizeKey(e3);
    const { relativeKey: s3, driver: o3 } = r2(e3);
    o3.removeItem && (await asyncCall(o3.removeItem, s3, t3), (t3.removeMeta || t3.removeMata) && await asyncCall(o3.removeItem, s3 + "$", t3), o3.watch || a2("remove", e3));
  }, async getMeta(e3, t3 = {}) {
    "boolean" == typeof t3 && (t3 = { nativeOnly: t3 }), e3 = normalizeKey(e3);
    const { relativeKey: s3, driver: a3 } = r2(e3), o3 = /* @__PURE__ */ Object.create(null);
    if (a3.getMeta && Object.assign(o3, await asyncCall(a3.getMeta, s3, t3)), !t3.nativeOnly) {
      const e4 = await asyncCall(a3.getItem, s3 + "$", t3).then((e5) => destr(e5));
      e4 && "object" == typeof e4 && ("string" == typeof e4.atime && (e4.atime = new Date(e4.atime)), "string" == typeof e4.mtime && (e4.mtime = new Date(e4.mtime)), Object.assign(o3, e4));
    }
    return o3;
  }, setMeta(e3, t3, r3 = {}) {
    return this.setItem(e3 + "$", t3, r3);
  }, removeMeta(e3, t3 = {}) {
    return this.removeItem(e3 + "$", t3);
  }, async getKeys(e3, t3 = {}) {
    e3 = normalizeBaseKey(e3);
    const r3 = s2(e3, true);
    let a3 = [];
    const o3 = [];
    let n3 = true;
    for (const e4 of r3) {
      e4.driver.flags?.maxDepth || (n3 = false);
      const r4 = await asyncCall(e4.driver.getKeys, e4.relativeBase, t3);
      for (const t4 of r4) {
        const r5 = e4.mountpoint + normalizeKey(t4);
        a3.some((e5) => r5.startsWith(e5)) || o3.push(r5);
      }
      a3 = [e4.mountpoint, ...a3.filter((t4) => !t4.startsWith(e4.mountpoint))];
    }
    const i3 = void 0 !== t3.maxDepth && !n3;
    return o3.filter((r4) => (!i3 || filterKeyByDepth(r4, t3.maxDepth)) && filterKeyByBase(r4, e3));
  }, async clear(e3, t3 = {}) {
    e3 = normalizeBaseKey(e3), await Promise.all(s2(e3, false).map(async (e4) => {
      if (e4.driver.clear) return asyncCall(e4.driver.clear, e4.relativeBase, t3);
      if (e4.driver.removeItem) {
        const r3 = await e4.driver.getKeys(e4.relativeBase || "", t3);
        return Promise.all(r3.map((r4) => e4.driver.removeItem(r4, t3)));
      }
    }));
  }, async dispose() {
    await Promise.all(Object.values(t2.mounts).map((e3) => dispose(e3)));
  }, watch: /* @__PURE__ */ __name(async (e3) => (await (async () => {
    if (!t2.watching) {
      t2.watching = true;
      for (const e4 in t2.mounts) t2.unwatch[e4] = await watch(t2.mounts[e4], a2, e4);
    }
  })(), t2.watchListeners.push(e3), async () => {
    t2.watchListeners = t2.watchListeners.filter((t3) => t3 !== e3), 0 === t2.watchListeners.length && await o2();
  }), "watch"), async unwatch() {
    t2.watchListeners = [], await o2();
  }, mount(e3, r3) {
    if ((e3 = normalizeBaseKey(e3)) && t2.mounts[e3]) throw new Error(`already mounted at ${e3}`);
    return e3 && (t2.mountpoints.push(e3), t2.mountpoints.sort((e4, t3) => t3.length - e4.length)), t2.mounts[e3] = r3, t2.watching && Promise.resolve(watch(r3, a2, e3)).then((r4) => {
      t2.unwatch[e3] = r4;
    }).catch(console.error), i2;
  }, async unmount(e3, r3 = true) {
    (e3 = normalizeBaseKey(e3)) && t2.mounts[e3] && (t2.watching && e3 in t2.unwatch && (t2.unwatch[e3]?.(), delete t2.unwatch[e3]), r3 && await dispose(t2.mounts[e3]), t2.mountpoints = t2.mountpoints.filter((t3) => t3 !== e3), delete t2.mounts[e3]);
  }, getMount(e3 = "") {
    e3 = normalizeKey(e3) + ":";
    const t3 = r2(e3);
    return { driver: t3.driver, base: t3.base };
  }, getMounts(e3 = "", t3 = {}) {
    e3 = normalizeKey(e3);
    return s2(e3, t3.parents).map((e4) => ({ driver: e4.driver, base: e4.mountpoint }));
  }, keys: /* @__PURE__ */ __name((e3, t3 = {}) => i2.getKeys(e3, t3), "keys"), get: /* @__PURE__ */ __name((e3, t3 = {}) => i2.getItem(e3, t3), "get"), set: /* @__PURE__ */ __name((e3, t3, r3 = {}) => i2.setItem(e3, t3, r3), "set"), has: /* @__PURE__ */ __name((e3, t3 = {}) => i2.hasItem(e3, t3), "has"), del: /* @__PURE__ */ __name((e3, t3 = {}) => i2.removeItem(e3, t3), "del"), remove: /* @__PURE__ */ __name((e3, t3 = {}) => i2.removeItem(e3, t3), "remove") };
  return i2;
}
function watch(e2, t2, r2) {
  return e2.watch ? e2.watch((e3, s2) => t2(e3, r2 + s2)) : () => {
  };
}
async function dispose(e2) {
  "function" == typeof e2.dispose && await asyncCall(e2.dispose);
}
function resolveSessionDriverName(e2) {
  if (!e2) return null;
  try {
    if ("fs" === e2) return builtinDrivers.fsLite;
    if (e2 in builtinDrivers) return builtinDrivers[e2];
  } catch {
    return null;
  }
  return e2;
}
function validateAndDecodePathname(e2) {
  let t2;
  try {
    t2 = decodeURI(e2);
  } catch (e3) {
    throw new Error("Invalid URL encoding");
  }
  const r2 = t2 !== e2, s2 = /%[0-9a-fA-F]{2}/.test(t2);
  if (r2 && s2) throw new Error("Multi-level URL encoding is not allowed");
  return t2;
}
function sequence(...e2) {
  const t2 = e2.filter((e3) => !!e3), r2 = t2.length;
  return defineMiddleware(r2 ? (e3, s2) => {
    let a2;
    return (/* @__PURE__ */ __name(function e4(o2, n2) {
      const i2 = (0, t2[o2])(n2, async (t3) => {
        if (o2 < r2 - 1) {
          if (t3) {
            let e5;
            e5 = t3 instanceof Request ? t3 : t3 instanceof URL ? new Request(t3, n2.request.clone()) : new Request(new URL(t3, n2.url.origin), n2.request.clone());
            const r3 = n2.url.pathname, s3 = Reflect.get(n2, apiContextRoutesSymbol), { routeData: o3, pathname: i3 } = await s3.tryRewrite(t3, n2.request);
            if (true === s3.serverLike && false === n2.isPrerendered && true === o3.prerender) throw new AstroError({ ...ForbiddenRewrite, message: ForbiddenRewrite.message(n2.url.pathname, i3, o3.component), hint: ForbiddenRewrite.hint(o3.component) });
            a2 = t3, n2.request = e5, n2.url = new URL(e5.url), n2.params = getParams(o3, i3), n2.routePattern = o3.route, setOriginPathname(n2.request, r3, s3.manifest.trailingSlash, s3.manifest.buildFormat);
          }
          return e4(o2 + 1, n2);
        }
        return s2(t3 ?? a2);
      });
      return i2;
    }, "e"))(0, e3);
  } : (e3, t3) => t3());
}
function defineMiddleware(e2) {
  return e2;
}
var ACTION_API_CONTEXT_SYMBOL, formContentTypes, SERVER_ISLAND_ROUTE, SERVER_ISLAND_COMPONENT, ROUTE404_RE, ROUTE500_RE, hasRequiredDist, dist, distExports, DELETED_EXPIRATION, responseSentSymbol2, identity, AstroCookie, AstroCookies, astroCookiesSymbol, VALID_PARAM_TYPES, RouteCache, Slots, suspectProtoRx, suspectConstructorRx, JsonSigRx, memory, builtinDrivers, PERSIST_SYMBOL, DEFAULT_COOKIE_NAME, VALID_COOKIE_REGEX, unflatten2, stringify2, AstroSession, apiContextRoutesSymbol, RenderContext;
var init_index_s3SF91tP = __esm({
  "dist/_worker.js/chunks/index_s3SF91tP.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_37mFo7XU();
    init_astro_designed_error_pages_CNJkf2fl();
    init_path_mW90u446();
    init_parse_BeDHJKc();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    ACTION_API_CONTEXT_SYMBOL = Symbol.for("astro.actionAPIContext");
    formContentTypes = ["application/x-www-form-urlencoded", "multipart/form-data"];
    __name(hasContentType, "hasContentType");
    __name(hasActionPayload, "hasActionPayload");
    __name(createGetActionResult, "createGetActionResult");
    __name(createCallAction, "createCallAction");
    __name(shouldAppendForwardSlash, "shouldAppendForwardSlash");
    __name(redirectIsExternal, "redirectIsExternal");
    __name(renderRedirect, "renderRedirect");
    __name(redirectRouteGenerate, "redirectRouteGenerate");
    SERVER_ISLAND_ROUTE = "/_server-islands/[name]";
    SERVER_ISLAND_COMPONENT = "_server-islands.astro";
    __name(badRequest, "badRequest");
    __name(getRequestData, "getRequestData");
    __name(createEndpoint, "createEndpoint");
    __name(matchRoute, "matchRoute");
    ROUTE404_RE = /^\/404\/?$/;
    ROUTE500_RE = /^\/500\/?$/;
    __name(isRoute404, "isRoute404");
    __name(isRoute500, "isRoute500");
    __name(isRoute404or500, "isRoute404or500");
    __name(isRouteServerIsland, "isRouteServerIsland");
    __name(isRequestServerIsland, "isRequestServerIsland");
    __name(requestIs404Or500, "requestIs404Or500");
    __name(isRouteExternalRedirect, "isRouteExternalRedirect");
    __name(requestHasLocale, "requestHasLocale");
    __name(pathHasLocale, "pathHasLocale");
    __name(getPathByLocale, "getPathByLocale");
    __name(normalizeTheLocale, "normalizeTheLocale");
    __name(normalizeThePath, "normalizeThePath");
    __name(getAllCodes, "getAllCodes");
    __name(redirectToDefaultLocale, "redirectToDefaultLocale");
    __name(notFound, "notFound");
    __name(redirectToFallback, "redirectToFallback");
    __name(parseLocale, "parseLocale");
    __name(sortAndFilterLocales, "sortAndFilterLocales");
    __name(computePreferredLocale, "computePreferredLocale");
    __name(computePreferredLocaleList, "computePreferredLocaleList");
    __name(computeCurrentLocale, "computeCurrentLocale");
    dist = {};
    __name(requireDist, "requireDist");
    distExports = requireDist();
    DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
    responseSentSymbol2 = Symbol.for("astro.responseSent");
    identity = /* @__PURE__ */ __name((e2) => e2, "identity");
    AstroCookie = class {
      static {
        __name(this, "AstroCookie");
      }
      constructor(e2) {
        this.value = e2;
      }
      json() {
        if (void 0 === this.value) throw new Error("Cannot convert undefined to an object.");
        return JSON.parse(this.value);
      }
      number() {
        return Number(this.value);
      }
      boolean() {
        return "false" !== this.value && ("0" !== this.value && Boolean(this.value));
      }
    };
    AstroCookies = class {
      static {
        __name(this, "AstroCookies");
      }
      #e;
      #t;
      #r;
      #s;
      constructor(e2) {
        this.#e = e2, this.#t = null, this.#r = null, this.#s = false;
      }
      delete(e2, t2) {
        const { maxAge: r2, expires: s2, ...a2 } = t2 || {}, o2 = { expires: DELETED_EXPIRATION, ...a2 };
        this.#a().set(e2, ["deleted", distExports.serialize(e2, "deleted", o2), false]);
      }
      get(e2, t2 = void 0) {
        if (this.#r?.has(e2)) {
          let [t3, , r3] = this.#r.get(e2);
          return r3 ? new AstroCookie(t3) : void 0;
        }
        const r2 = t2?.decode ?? decodeURIComponent, s2 = this.#o();
        if (e2 in s2) {
          const t3 = s2[e2];
          if (t3) {
            let e3;
            try {
              e3 = r2(t3);
            } catch (r3) {
              e3 = t3;
            }
            return new AstroCookie(e3);
          }
        }
      }
      has(e2, t2) {
        if (this.#r?.has(e2)) {
          let [, , t3] = this.#r.get(e2);
          return t3;
        }
        return void 0 !== this.#o()[e2];
      }
      set(e2, t2, r2) {
        if (this.#s) {
          const e3 = new Error("Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page.");
          e3.name = "Warning", console.warn(e3);
        }
        let s2;
        if ("string" == typeof t2) s2 = t2;
        else {
          let e3 = t2.toString();
          s2 = e3 === Object.prototype.toString.call(t2) ? JSON.stringify(t2) : e3;
        }
        const a2 = {};
        if (r2 && Object.assign(a2, r2), this.#a().set(e2, [s2, distExports.serialize(e2, s2, a2), true]), this.#e[responseSentSymbol2]) throw new AstroError({ ...ResponseSentError });
      }
      merge(e2) {
        const t2 = e2.#r;
        if (t2) for (const [e3, r2] of t2) this.#a().set(e3, r2);
      }
      *headers() {
        if (null != this.#r) for (const [, e2] of this.#r) yield e2[1];
      }
      static consume(e2) {
        return e2.#s = true, e2.headers();
      }
      #o() {
        return this.#t || this.#n(), this.#t || (this.#t = {}), this.#t;
      }
      #a() {
        return this.#r || (this.#r = /* @__PURE__ */ new Map()), this.#r;
      }
      #n() {
        const e2 = this.#e.headers.get("cookie");
        e2 && (this.#t = distExports.parse(e2, { decode: identity }));
      }
    };
    astroCookiesSymbol = Symbol.for("astro.cookies");
    __name(attachCookiesToResponse, "attachCookiesToResponse");
    __name(getCookiesFromResponse, "getCookiesFromResponse");
    __name(getSetCookiesFromResponse, "getSetCookiesFromResponse");
    __name(createRequest, "createRequest");
    __name(findRouteToRewrite, "findRouteToRewrite");
    __name(copyRequest, "copyRequest");
    __name(setOriginPathname, "setOriginPathname");
    __name(getOriginPathname, "getOriginPathname");
    VALID_PARAM_TYPES = ["string", "number", "undefined"];
    __name(validateGetStaticPathsParameter, "validateGetStaticPathsParameter");
    __name(validateDynamicRouteModule, "validateDynamicRouteModule");
    __name(validateGetStaticPathsResult, "validateGetStaticPathsResult");
    __name(stringifyParams, "stringifyParams");
    __name(generatePaginateFunction, "generatePaginateFunction");
    __name(addRouteBase, "addRouteBase");
    __name(callGetStaticPaths, "callGetStaticPaths");
    RouteCache = class {
      static {
        __name(this, "RouteCache");
      }
      logger;
      cache = {};
      runtimeMode;
      constructor(e2, t2 = "production") {
        this.logger = e2, this.runtimeMode = t2;
      }
      clearAll() {
        this.cache = {};
      }
      set(e2, t2) {
        const r2 = this.key(e2);
        "production" === this.runtimeMode && this.cache[r2]?.staticPaths && this.logger.warn(null, `Internal Warning: route cache overwritten. (${r2})`), this.cache[r2] = t2;
      }
      get(e2) {
        return this.cache[this.key(e2)];
      }
      key(e2) {
        return `${e2.route}_${e2.component}`;
      }
    };
    __name(findPathItemByKey, "findPathItemByKey");
    __name(routeIsRedirect, "routeIsRedirect");
    __name(routeIsFallback, "routeIsFallback");
    __name(getProps, "getProps");
    __name(getParams, "getParams");
    __name(validatePrerenderEndpointCollision, "validatePrerenderEndpointCollision");
    __name(getFunctionExpression, "getFunctionExpression");
    Slots = class {
      static {
        __name(this, "Slots");
      }
      #i;
      #c;
      #l;
      constructor(e2, t2, r2) {
        if (this.#i = e2, this.#c = t2, this.#l = r2, t2) for (const e3 of Object.keys(t2)) {
          if (void 0 !== this[e3]) throw new AstroError({ ...ReservedSlotName, message: ReservedSlotName.message(e3) });
          Object.defineProperty(this, e3, { get: /* @__PURE__ */ __name(() => true, "get"), enumerable: true });
        }
      }
      has(e2) {
        return !!this.#c && Boolean(this.#c[e2]);
      }
      async render(e2, t2 = []) {
        if (!this.#c || !this.has(e2)) return;
        const r2 = this.#i;
        if (Array.isArray(t2)) {
          if (t2.length > 0) {
            const s3 = this.#c[e2], a2 = "function" == typeof s3 ? await s3(r2) : await s3, o2 = getFunctionExpression(a2);
            if (o2) {
              const e3 = /* @__PURE__ */ __name(async () => "function" == typeof o2 ? o2(...t2) : o2, "e");
              return await renderSlotToString(r2, e3).then((e4) => e4);
            }
            if ("function" == typeof a2) return await renderJSX(r2, a2(...t2)).then((e3) => null != e3 ? String(e3) : e3);
          }
        } else this.#l.warn(null, `Expected second parameter to be an array, received a ${typeof t2}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);
        const s2 = await renderSlotToString(r2, this.#c[e2]);
        return chunkToString(r2, s2);
      }
    };
    __name(getActionContext, "getActionContext");
    __name(getCallerInfo, "getCallerInfo");
    __name(parseRequestBody, "parseRequestBody");
    __name(deduplicateDirectiveValues, "deduplicateDirectiveValues");
    __name(pushDirective, "pushDirective");
    __name(callMiddleware, "callMiddleware");
    suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
    suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
    JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
    __name(jsonParseTransform, "jsonParseTransform");
    __name(warnKeyDropped, "warnKeyDropped");
    __name(destr, "destr");
    __name(wrapToPromise, "wrapToPromise");
    __name(asyncCall, "asyncCall");
    __name(isPrimitive, "isPrimitive");
    __name(isPureObject, "isPureObject");
    __name(stringify$1, "stringify$1");
    __name(serializeRaw, "serializeRaw");
    __name(deserializeRaw, "deserializeRaw");
    __name(base64Decode, "base64Decode");
    __name(base64Encode, "base64Encode");
    __name(normalizeKey, "normalizeKey");
    __name(joinKeys, "joinKeys");
    __name(normalizeBaseKey, "normalizeBaseKey");
    __name(filterKeyByDepth, "filterKeyByDepth");
    __name(filterKeyByBase, "filterKeyByBase");
    __name(defineDriver, "defineDriver");
    memory = defineDriver(() => {
      const e2 = /* @__PURE__ */ new Map();
      return { name: "memory", getInstance: /* @__PURE__ */ __name(() => e2, "getInstance"), hasItem: /* @__PURE__ */ __name((t2) => e2.has(t2), "hasItem"), getItem: /* @__PURE__ */ __name((t2) => e2.get(t2) ?? null, "getItem"), getItemRaw: /* @__PURE__ */ __name((t2) => e2.get(t2) ?? null, "getItemRaw"), setItem(t2, r2) {
        e2.set(t2, r2);
      }, setItemRaw(t2, r2) {
        e2.set(t2, r2);
      }, removeItem(t2) {
        e2.delete(t2);
      }, getKeys: /* @__PURE__ */ __name(() => [...e2.keys()], "getKeys"), clear() {
        e2.clear();
      }, dispose() {
        e2.clear();
      } };
    });
    __name(createStorage, "createStorage");
    __name(watch, "watch");
    __name(dispose, "dispose");
    builtinDrivers = { "azure-app-configuration": "unstorage/drivers/azure-app-configuration", azureAppConfiguration: "unstorage/drivers/azure-app-configuration", "azure-cosmos": "unstorage/drivers/azure-cosmos", azureCosmos: "unstorage/drivers/azure-cosmos", "azure-key-vault": "unstorage/drivers/azure-key-vault", azureKeyVault: "unstorage/drivers/azure-key-vault", "azure-storage-blob": "unstorage/drivers/azure-storage-blob", azureStorageBlob: "unstorage/drivers/azure-storage-blob", "azure-storage-table": "unstorage/drivers/azure-storage-table", azureStorageTable: "unstorage/drivers/azure-storage-table", "capacitor-preferences": "unstorage/drivers/capacitor-preferences", capacitorPreferences: "unstorage/drivers/capacitor-preferences", "cloudflare-kv-binding": "unstorage/drivers/cloudflare-kv-binding", cloudflareKVBinding: "unstorage/drivers/cloudflare-kv-binding", "cloudflare-kv-http": "unstorage/drivers/cloudflare-kv-http", cloudflareKVHttp: "unstorage/drivers/cloudflare-kv-http", "cloudflare-r2-binding": "unstorage/drivers/cloudflare-r2-binding", cloudflareR2Binding: "unstorage/drivers/cloudflare-r2-binding", db0: "unstorage/drivers/db0", "deno-kv-node": "unstorage/drivers/deno-kv-node", denoKVNode: "unstorage/drivers/deno-kv-node", "deno-kv": "unstorage/drivers/deno-kv", denoKV: "unstorage/drivers/deno-kv", "fs-lite": "unstorage/drivers/fs-lite", fsLite: "unstorage/drivers/fs-lite", fs: "unstorage/drivers/fs", github: "unstorage/drivers/github", http: "unstorage/drivers/http", indexedb: "unstorage/drivers/indexedb", localstorage: "unstorage/drivers/localstorage", "lru-cache": "unstorage/drivers/lru-cache", lruCache: "unstorage/drivers/lru-cache", memory: "unstorage/drivers/memory", mongodb: "unstorage/drivers/mongodb", "netlify-blobs": "unstorage/drivers/netlify-blobs", netlifyBlobs: "unstorage/drivers/netlify-blobs", null: "unstorage/drivers/null", overlay: "unstorage/drivers/overlay", planetscale: "unstorage/drivers/planetscale", redis: "unstorage/drivers/redis", s3: "unstorage/drivers/s3", "session-storage": "unstorage/drivers/session-storage", sessionStorage: "unstorage/drivers/session-storage", uploadthing: "unstorage/drivers/uploadthing", upstash: "unstorage/drivers/upstash", "vercel-blob": "unstorage/drivers/vercel-blob", vercelBlob: "unstorage/drivers/vercel-blob", "vercel-kv": "unstorage/drivers/vercel-kv", vercelKV: "unstorage/drivers/vercel-kv", "vercel-runtime-cache": "unstorage/drivers/vercel-runtime-cache", vercelRuntimeCache: "unstorage/drivers/vercel-runtime-cache" };
    PERSIST_SYMBOL = Symbol();
    DEFAULT_COOKIE_NAME = "astro-session";
    VALID_COOKIE_REGEX = /^[\w-]+$/;
    unflatten2 = /* @__PURE__ */ __name((e2, t2) => unflatten(e2, { URL: /* @__PURE__ */ __name((e3) => new URL(e3), "URL") }), "unflatten");
    stringify2 = /* @__PURE__ */ __name((e2, t2) => stringify(e2, { URL: /* @__PURE__ */ __name((e3) => e3 instanceof URL && e3.href, "URL") }), "stringify");
    AstroSession = class _AstroSession {
      static {
        __name(this, "AstroSession");
      }
      #u;
      #d;
      #h;
      #p;
      #f;
      #m;
      #g;
      #y = /* @__PURE__ */ new Set();
      #w = /* @__PURE__ */ new Set();
      #v = false;
      #R = false;
      #E = true;
      static #S = /* @__PURE__ */ new Map();
      constructor(e2, { cookie: t2 = DEFAULT_COOKIE_NAME, ...r2 }, s2) {
        const { driver: a2 } = r2;
        if (!a2) throw new AstroError({ ...SessionStorageInitError, message: SessionStorageInitError.message("No driver was defined in the session configuration and the adapter did not provide a default driver.") });
        let o2;
        if (this.#u = e2, "object" == typeof t2) {
          const { name: e3 = DEFAULT_COOKIE_NAME, ...r3 } = t2;
          this.#p = e3, o2 = r3;
        } else this.#p = t2 || DEFAULT_COOKIE_NAME;
        this.#h = { sameSite: "lax", secure: "production" === s2, path: "/", ...o2, httpOnly: true }, this.#d = { ...r2, driver: a2 };
      }
      async get(e2) {
        return (await this.#b()).get(e2)?.data;
      }
      async has(e2) {
        return (await this.#b()).has(e2);
      }
      async keys() {
        return (await this.#b()).keys();
      }
      async values() {
        return [...(await this.#b()).values()].map((e2) => e2.data);
      }
      async entries() {
        return [...(await this.#b()).entries()].map(([e2, t2]) => [e2, t2.data]);
      }
      delete(e2) {
        this.#m?.delete(e2), this.#E && this.#w.add(e2), this.#v = true;
      }
      set(e2, t2, { ttl: r2 } = {}) {
        if (!e2) throw new AstroError({ ...SessionStorageSaveError, message: "The session key was not provided." });
        let s2;
        try {
          s2 = unflatten2(JSON.parse(stringify2(t2)));
        } catch (t3) {
          throw new AstroError({ ...SessionStorageSaveError, message: `The session data for ${e2} could not be serialized.`, hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue" }, { cause: t3 });
        }
        this.#R || (this.#A(), this.#R = true), this.#m ??= /* @__PURE__ */ new Map();
        const a2 = r2 ?? this.#d.ttl, o2 = "number" == typeof a2 ? Date.now() + 1e3 * a2 : a2;
        this.#m.set(e2, { data: s2, expires: o2 }), this.#v = true;
      }
      destroy() {
        const e2 = this.#g ?? this.#u.get(this.#p)?.value;
        e2 && this.#y.add(e2), this.#u.delete(this.#p, this.#h), this.#g = void 0, this.#m = void 0, this.#v = true;
      }
      async regenerate() {
        let e2 = /* @__PURE__ */ new Map();
        try {
          e2 = await this.#b();
        } catch (e3) {
          console.error("Failed to load session data during regeneration:", e3);
        }
        const t2 = this.#g;
        this.#g = crypto.randomUUID(), this.#m = e2, await this.#A(), t2 && this.#f && this.#f.removeItem(t2).catch((e3) => {
          console.error("Failed to remove old session data:", e3);
        });
      }
      async [PERSIST_SYMBOL]() {
        if (!this.#v && !this.#y.size) return;
        const e2 = await this.#P();
        if (this.#v && this.#m) {
          const t2 = await this.#b();
          this.#w.forEach((e3) => t2.delete(e3));
          const r2 = this.#I();
          let s2;
          try {
            s2 = stringify2(t2);
          } catch (e3) {
            throw new AstroError({ ...SessionStorageSaveError, message: SessionStorageSaveError.message("The session data could not be serialized.", this.#d.driver) }, { cause: e3 });
          }
          await e2.setItem(r2, s2), this.#v = false;
        }
        if (this.#y.size > 0) {
          const t2 = [...this.#y].map((t3) => e2.removeItem(t3).catch((e3) => {
            console.error(`Failed to clean up session ${t3}:`, e3);
          }));
          await Promise.all(t2), this.#y.clear();
        }
      }
      get sessionID() {
        return this.#g;
      }
      async load(e2) {
        this.#g = e2, this.#m = void 0, await this.#A(), await this.#b();
      }
      async #A() {
        if (!VALID_COOKIE_REGEX.test(this.#p)) throw new AstroError({ ...SessionStorageSaveError, message: "Invalid cookie name. Cookie names can only contain letters, numbers, and dashes." });
        const e2 = this.#I();
        this.#u.set(this.#p, e2, this.#h);
      }
      async #b() {
        const e2 = await this.#P();
        if (this.#m && !this.#E) return this.#m;
        this.#m ??= /* @__PURE__ */ new Map();
        const t2 = await e2.get(this.#I());
        if (!t2) return this.#m;
        try {
          const e3 = unflatten2(t2);
          if (!(e3 instanceof Map)) throw await this.destroy(), new AstroError({ ...SessionStorageInitError, message: SessionStorageInitError.message("The session data was an invalid type.", this.#d.driver) });
          const r2 = Date.now();
          for (const [t3, s2] of e3) {
            const e4 = "number" == typeof s2.expires && s2.expires < r2;
            this.#m.has(t3) || this.#w.has(t3) || e4 || this.#m.set(t3, s2);
          }
          return this.#E = false, this.#m;
        } catch (e3) {
          if (await this.destroy(), e3 instanceof AstroError) throw e3;
          throw new AstroError({ ...SessionStorageInitError, message: SessionStorageInitError.message("The session data could not be parsed.", this.#d.driver) }, { cause: e3 });
        }
      }
      #I() {
        return this.#g ??= this.#u.get(this.#p)?.value ?? crypto.randomUUID(), this.#g;
      }
      async #P() {
        if (this.#f) return this.#f;
        if (_AstroSession.#S.has(this.#d.driver)) return this.#f = _AstroSession.#S.get(this.#d.driver), this.#f;
        if ("test" === this.#d.driver) return this.#f = this.#d.options.mockStorage, this.#f;
        "fs" !== this.#d.driver && "fsLite" !== this.#d.driver && "fs-lite" !== this.#d.driver || (this.#d.options ??= {}, this.#d.driver = "fs-lite", this.#d.options.base ??= ".astro/session");
        let e2 = null;
        try {
          if (this.#d.driverModule) e2 = (await this.#d.driverModule()).default;
          else if (this.#d.driver) {
            const t2 = resolveSessionDriverName(this.#d.driver);
            t2 && (e2 = (await import(t2)).default);
          }
        } catch (e3) {
          if ("ERR_MODULE_NOT_FOUND" === e3.code) throw new AstroError({ ...SessionStorageInitError, message: SessionStorageInitError.message(e3.message.includes("Cannot find package") ? "The driver module could not be found." : e3.message, this.#d.driver) }, { cause: e3 });
          throw e3;
        }
        if (!e2) throw new AstroError({ ...SessionStorageInitError, message: SessionStorageInitError.message("The module did not export a driver.", this.#d.driver) });
        try {
          return this.#f = createStorage({ driver: e2(this.#d.options) }), _AstroSession.#S.set(this.#d.driver, this.#f), this.#f;
        } catch (e3) {
          throw new AstroError({ ...SessionStorageInitError, message: SessionStorageInitError.message("Unknown error", this.#d.driver) }, { cause: e3 });
        }
      }
    };
    __name(resolveSessionDriverName, "resolveSessionDriverName");
    __name(validateAndDecodePathname, "validateAndDecodePathname");
    apiContextRoutesSymbol = Symbol.for("context.routes");
    RenderContext = class _RenderContext {
      static {
        __name(this, "RenderContext");
      }
      constructor(e2, t2, r2, s2, a2, o2, n2, i2, c, l = new AstroCookies(o2), u = getParams(n2, a2), d = _RenderContext.#C(o2.url), h = {}, p = void 0, f = !!e2.manifest.csp, m = e2.manifest.sessionConfig ? new AstroSession(l, e2.manifest.sessionConfig, e2.runtimeMode) : void 0) {
        this.pipeline = e2, this.locals = t2, this.middleware = r2, this.actions = s2, this.pathname = a2, this.request = o2, this.routeData = n2, this.status = i2, this.clientAddress = c, this.cookies = l, this.params = u, this.url = d, this.props = h, this.partial = p, this.shouldInjectCspMetaTags = f, this.session = m;
      }
      static #C(e2) {
        const t2 = new URL(e2);
        try {
          t2.pathname = validateAndDecodePathname(t2.pathname);
        } catch {
          try {
            t2.pathname = decodeURI(t2.pathname);
          } catch {
          }
        }
        return t2;
      }
      isRewriting = false;
      counter = 0;
      result = void 0;
      static async create({ locals: e2 = {}, middleware: t2, pathname: r2, pipeline: s2, request: a2, routeData: o2, clientAddress: n2, status: i2 = 200, props: c, partial: l, actions: u, shouldInjectCspMetaTags: d }) {
        const h = await s2.getMiddleware(), p = u ?? await s2.getActions();
        return setOriginPathname(a2, r2, s2.manifest.trailingSlash, s2.manifest.buildFormat), new _RenderContext(s2, e2, sequence(...s2.internalMiddleware, t2 ?? h), p, r2, a2, o2, i2, n2, void 0, void 0, void 0, c, l, d ?? !!s2.manifest.csp);
      }
      async render(e2, t2 = {}) {
        const { middleware: r2, pipeline: s2 } = this, { logger: a2, serverLike: o2, streaming: n2, manifest: i2 } = s2, c = Object.keys(this.props).length > 0 ? this.props : await getProps({ mod: e2, routeData: this.routeData, routeCache: this.pipeline.routeCache, pathname: this.pathname, logger: a2, serverLike: o2, base: i2.base }), l = this.createActionAPIContext(), u = this.createAPIContext(c, l);
        if (this.counter++, 4 === this.counter) return new Response("Loop Detected", { status: 508, statusText: "Astro detected a loop where you tried to call the rewriting logic more than four times." });
        if (isRouteExternalRedirect(this.routeData)) return renderRedirect(this);
        const d = await callMiddleware(r2, u, async (r3, o3) => {
          if (o3) {
            const t3 = this.pathname;
            s2.logger.debug("router", "Called rewriting to:", o3);
            const { routeData: r4, componentInstance: a3, pathname: n3, newUrl: i4 } = await s2.tryRewrite(o3, this.request);
            if (true === this.pipeline.serverLike && false === this.routeData.prerender && true === r4.prerender) throw new AstroError({ ...ForbiddenRewrite, message: ForbiddenRewrite.message(this.pathname, n3, r4.component), hint: ForbiddenRewrite.hint(r4.component) });
            this.routeData = r4, e2 = a3, o3 instanceof Request ? this.request = o3 : this.request = copyRequest(i4, this.request, r4.prerender, this.pipeline.logger, this.routeData.route), this.isRewriting = true, this.url = _RenderContext.#C(this.request.url), this.params = getParams(r4, n3), this.pathname = n3, this.status = 200, setOriginPathname(this.request, t3, this.pipeline.manifest.trailingSlash, this.pipeline.manifest.buildFormat);
          }
          let i3;
          if (!r3.isPrerendered) {
            const { action: e3, setActionResult: t3, serializeActionResult: s3 } = getActionContext(r3);
            if ("form" === e3?.calledFrom) {
              const r4 = await e3.handler();
              t3(e3.name, s3(r4));
            }
          }
          switch (this.routeData.type) {
            case "endpoint":
              i3 = await renderEndpoint(e2, r3, this.routeData.prerender, a2);
              break;
            case "redirect":
              return renderRedirect(this);
            case "page":
              this.result = await this.createResult(e2, l);
              try {
                i3 = await renderPage(this.result, e2?.default, c, t2, n2, this.routeData);
              } catch (e3) {
                throw this.result.cancelled = true, e3;
              }
              i3.headers.set(ROUTE_TYPE_HEADER, "page"), "/404" !== this.routeData.route && "/500" !== this.routeData.route || i3.headers.set(REROUTE_DIRECTIVE_HEADER, "no"), this.isRewriting && i3.headers.set(REWRITE_DIRECTIVE_HEADER_KEY, REWRITE_DIRECTIVE_HEADER_VALUE);
              break;
            case "fallback":
              return new Response(null, { status: 500, headers: { [ROUTE_TYPE_HEADER]: "fallback" } });
          }
          const u2 = getCookiesFromResponse(i3);
          return u2 && this.cookies.merge(u2), i3;
        });
        return d.headers.get(ROUTE_TYPE_HEADER) && d.headers.delete(ROUTE_TYPE_HEADER), attachCookiesToResponse(d, this.cookies), d;
      }
      createAPIContext(e2, t2) {
        return Reflect.set(t2, apiContextRoutesSymbol, this.pipeline), Object.assign(t2, { props: e2, redirect: /* @__PURE__ */ __name((e3, t3 = 302) => new Response(null, { status: t3, headers: { Location: e3 } }), "redirect"), getActionResult: createGetActionResult(t2.locals), callAction: createCallAction(t2) });
      }
      async #D(e2) {
        this.pipeline.logger.debug("router", "Calling rewrite: ", e2);
        const t2 = this.pathname, { routeData: r2, componentInstance: s2, newUrl: a2, pathname: o2 } = await this.pipeline.tryRewrite(e2, this.request), n2 = r2.fallbackRoutes && r2.fallbackRoutes.length > 0;
        if (this.pipeline.serverLike && !this.routeData.prerender && r2.prerender && !n2) throw new AstroError({ ...ForbiddenRewrite, message: ForbiddenRewrite.message(this.pathname, o2, r2.component), hint: ForbiddenRewrite.hint(r2.component) });
        this.routeData = r2, e2 instanceof Request ? this.request = e2 : this.request = copyRequest(a2, this.request, r2.prerender, this.pipeline.logger, this.routeData.route), this.url = _RenderContext.#C(this.request.url);
        const i2 = new AstroCookies(this.request);
        return this.cookies && i2.merge(this.cookies), this.cookies = i2, this.params = getParams(r2, o2), this.pathname = o2, this.isRewriting = true, this.status = 200, setOriginPathname(this.request, t2, this.pipeline.manifest.trailingSlash, this.pipeline.manifest.buildFormat), await this.render(s2);
      }
      createActionAPIContext() {
        const e2 = this, { params: t2, pipeline: r2, url: a2 } = this, o2 = `Astro v${ASTRO_VERSION}`;
        return { get cookies() {
          return e2.cookies;
        }, routePattern: this.routeData.route, isPrerendered: this.routeData.prerender, get clientAddress() {
          return e2.getClientAddress();
        }, get currentLocale() {
          return e2.computeCurrentLocale();
        }, generator: o2, get locals() {
          return e2.locals;
        }, set locals(e3) {
          throw new AstroError(LocalsReassigned);
        }, params: t2, get preferredLocale() {
          return e2.computePreferredLocale();
        }, get preferredLocaleList() {
          return e2.computePreferredLocaleList();
        }, rewrite: /* @__PURE__ */ __name(async (e3) => await this.#D(e3), "rewrite"), request: this.request, site: r2.site, url: a2, get originPathname() {
          return getOriginPathname(e2.request);
        }, get session() {
          if (this.isPrerendered) r2.logger.warn("session", `context.session was used when rendering the route ${s.green(this.routePattern)}, but it is not available on prerendered routes. If you need access to sessions, make sure that the route is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your routes server-rendered by default. For more information, see https://docs.astro.build/en/guides/sessions/`);
          else {
            if (e2.session) return e2.session;
            r2.logger.warn("session", `context.session was used when rendering the route ${s.green(this.routePattern)}, but no storage configuration was provided. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/`);
          }
        }, get csp() {
          return { insertDirective(t3) {
            if (!r2.manifest.csp) throw new AstroError(CspNotEnabled);
            e2?.result?.directives ? e2.result.directives = pushDirective(e2.result.directives, t3) : e2?.result?.directives.push(t3);
          }, insertScriptResource(t3) {
            if (!r2.manifest.csp) throw new AstroError(CspNotEnabled);
            e2.result?.scriptResources.push(t3);
          }, insertStyleResource(t3) {
            if (!r2.manifest.csp) throw new AstroError(CspNotEnabled);
            e2.result?.styleResources.push(t3);
          }, insertStyleHash(t3) {
            if (!r2.manifest.csp) throw new AstroError(CspNotEnabled);
            e2.result?.styleHashes.push(t3);
          }, insertScriptHash(t3) {
            if (!r2.manifest.csp) throw new AstroError(CspNotEnabled);
            e2.result?.scriptHashes.push(t3);
          } };
        } };
      }
      async createResult(e2, t2) {
        const { cookies: r2, pathname: s2, pipeline: a2, routeData: o2, status: n2 } = this, { clientDirectives: i2, inlinedScripts: c, compressHTML: l, manifest: u, renderers: d, resolve: h } = a2, { links: p, scripts: f, styles: m } = await a2.headElements(o2), g = [], y = [], w = this.shouldInjectCspMetaTags, v = u.csp?.algorithm ?? "SHA-256";
        if (w) {
          for (const e3 of m) g.push(await generateCspDigest(e3.children, v));
          for (const e3 of f) y.push(await generateCspDigest(e3.children, v));
        }
        const R = await a2.componentMetadata(o2) ?? u.componentMetadata, E2 = new Headers({ "Content-Type": "text/html" }), S = "boolean" == typeof this.partial ? this.partial : Boolean(e2.partial), b = hasActionPayload(this.locals) ? deserializeActionResult(this.locals._actionPayload.actionResult) : void 0, A = { status: b?.error ? b?.error.status : n2, statusText: b?.error ? b?.error.type : "OK", get headers() {
          return E2;
        }, set headers(e3) {
          throw new AstroError(AstroResponseHeadersReassigned);
        } }, P = { base: u.base, userAssetsBase: u.userAssetsBase, cancelled: false, clientDirectives: i2, inlinedScripts: c, componentMetadata: R, compressHTML: l, cookies: r2, createAstro: /* @__PURE__ */ __name((e3, r3, s3) => this.createAstro(P, e3, r3, s3, t2), "createAstro"), links: p, params: this.params, partial: S, pathname: s2, renderers: d, resolve: h, response: A, request: this.request, scripts: f, styles: m, actionResult: b, serverIslandNameMap: u.serverIslandNameMap ?? /* @__PURE__ */ new Map(), key: u.key, trailingSlash: u.trailingSlash, _metadata: { hasHydrationScript: false, rendererSpecificHydrationScripts: /* @__PURE__ */ new Set(), hasRenderedHead: false, renderedScripts: /* @__PURE__ */ new Set(), hasDirectives: /* @__PURE__ */ new Set(), hasRenderedServerIslandRuntime: false, headInTree: false, extraHead: [], extraStyleHashes: g, extraScriptHashes: y, propagators: /* @__PURE__ */ new Set() }, cspDestination: u.csp?.cspDestination ?? (o2.prerender ? "meta" : "header"), shouldInjectCspMetaTags: w, cspAlgorithm: v, scriptHashes: u.csp?.scriptHashes ? [...u.csp.scriptHashes] : [], scriptResources: u.csp?.scriptResources ? [...u.csp.scriptResources] : [], styleHashes: u.csp?.styleHashes ? [...u.csp.styleHashes] : [], styleResources: u.csp?.styleResources ? [...u.csp.styleResources] : [], directives: u.csp?.directives ? [...u.csp.directives] : [], isStrictDynamic: u.csp?.isStrictDynamic ?? false, internalFetchHeaders: u.internalFetchHeaders };
        return P;
      }
      #T;
      createAstro(e2, t2, r2, s2, a2) {
        let o2;
        o2 = this.isRewriting ? this.#T = this.createAstroPagePartial(e2, t2, a2) : this.#T ??= this.createAstroPagePartial(e2, t2, a2);
        const n2 = { props: r2, self: null }, i2 = Object.assign(Object.create(o2), n2);
        let c;
        return Object.defineProperty(i2, "slots", { get: /* @__PURE__ */ __name(() => (c || (c = new Slots(e2, s2, this.pipeline.logger)), c), "get") }), i2;
      }
      createAstroPagePartial(e2, t2, r2) {
        const a2 = this, { cookies: o2, locals: n2, params: i2, pipeline: c, url: l } = this, { response: u } = e2, d = createCallAction(r2);
        return { generator: t2.generator, glob: t2.glob, routePattern: this.routeData.route, isPrerendered: this.routeData.prerender, cookies: o2, get session() {
          if (this.isPrerendered) c.logger.warn("session", `Astro.session was used when rendering the route ${s.green(this.routePattern)}, but it is not available on prerendered pages. If you need access to sessions, make sure that the page is server-rendered using \`export const prerender = false;\` or by setting \`output\` to \`"server"\` in your Astro config to make all your pages server-rendered by default. For more information, see https://docs.astro.build/en/guides/sessions/`);
          else {
            if (a2.session) return a2.session;
            c.logger.warn("session", `Astro.session was used when rendering the route ${s.green(this.routePattern)}, but no storage configuration was provided. Either configure the storage manually or use an adapter that provides session storage. For more information, see https://docs.astro.build/en/guides/sessions/`);
          }
        }, get clientAddress() {
          return a2.getClientAddress();
        }, get currentLocale() {
          return a2.computeCurrentLocale();
        }, params: i2, get preferredLocale() {
          return a2.computePreferredLocale();
        }, get preferredLocaleList() {
          return a2.computePreferredLocaleList();
        }, locals: n2, redirect: /* @__PURE__ */ __name((e3, t3 = 302) => {
          if (this.request[responseSentSymbol]) throw new AstroError({ ...ResponseSentError });
          return new Response(null, { status: t3, headers: { Location: e3 } });
        }, "redirect"), rewrite: /* @__PURE__ */ __name(async (e3) => await this.#D(e3), "rewrite"), request: this.request, response: u, site: c.site, getActionResult: createGetActionResult(n2), get callAction() {
          return d;
        }, url: l, get originPathname() {
          return getOriginPathname(a2.request);
        }, get csp() {
          return { insertDirective(e3) {
            if (!c.manifest.csp) throw new AstroError(CspNotEnabled);
            a2?.result?.directives ? a2.result.directives = pushDirective(a2.result.directives, e3) : a2?.result?.directives.push(e3);
          }, insertScriptResource(e3) {
            if (!c.manifest.csp) throw new AstroError(CspNotEnabled);
            a2.result?.scriptResources.push(e3);
          }, insertStyleResource(e3) {
            if (!c.manifest.csp) throw new AstroError(CspNotEnabled);
            a2.result?.styleResources.push(e3);
          }, insertStyleHash(e3) {
            if (!c.manifest.csp) throw new AstroError(CspNotEnabled);
            a2.result?.styleHashes.push(e3);
          }, insertScriptHash(e3) {
            if (!c.manifest.csp) throw new AstroError(CspNotEnabled);
            a2.result?.scriptHashes.push(e3);
          } };
        } };
      }
      getClientAddress() {
        const { pipeline: e2, request: t2, routeData: r2, clientAddress: s2 } = this;
        if (r2.prerender) throw new AstroError({ ...PrerenderClientAddressNotAvailable, message: PrerenderClientAddressNotAvailable.message(r2.component) });
        if (s2) return s2;
        if (clientAddressSymbol in t2) return Reflect.get(t2, clientAddressSymbol);
        if (e2.adapterName) throw new AstroError({ ...ClientAddressNotAvailable, message: ClientAddressNotAvailable.message(e2.adapterName) });
        throw new AstroError(StaticClientAddressNotAvailable);
      }
      #k;
      computeCurrentLocale() {
        const { url: e2, pipeline: { i18n: t2 }, routeData: r2 } = this;
        if (!t2) return;
        const { defaultLocale: s2, locales: a2, strategy: o2 } = t2, n2 = "pathname-prefix-other-locales" === o2 || "domains-prefix-other-locales" === o2 ? s2 : void 0;
        if (this.#k) return this.#k;
        let i2;
        if (isRouteServerIsland(r2)) {
          let e3 = this.request.headers.get("referer");
          e3 && (URL.canParse(e3) && (e3 = new URL(e3).pathname), i2 = computeCurrentLocale(e3, a2, s2));
        } else {
          let t3 = r2.pathname;
          if (!r2.pattern.test(e2.pathname)) {
            for (const s3 of r2.fallbackRoutes) if (s3.pattern.test(e2.pathname)) {
              t3 = s3.pathname;
              break;
            }
          }
          t3 = t3 && !isRoute404or500(r2) ? t3 : e2.pathname, i2 = computeCurrentLocale(t3, a2, s2);
        }
        return this.#k = i2 ?? n2, this.#k;
      }
      #L;
      computePreferredLocale() {
        const { pipeline: { i18n: e2 }, request: t2 } = this;
        if (e2) return this.#L ??= computePreferredLocale(t2, e2.locales);
      }
      #O;
      computePreferredLocaleList() {
        const { pipeline: { i18n: e2 }, request: t2 } = this;
        if (e2) return this.#O ??= computePreferredLocaleList(t2, e2.locales);
      }
    };
    __name(sequence, "sequence");
    __name(defineMiddleware, "defineMiddleware");
  }
});

// dist/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs
var cloudflare_kv_binding_DMly_2Gl_exports = {};
__export(cloudflare_kv_binding_DMly_2Gl_exports, {
  default: () => cloudflareKvBinding
});
function defineDriver2(e2) {
  return e2;
}
function normalizeKey2(e2, n2 = ":") {
  return e2 ? e2.replace(/[:/\\]/g, n2).replace(/^[:/\\]|[:/\\]$/g, "") : "";
}
function joinKeys2(...e2) {
  return e2.map((e3) => normalizeKey2(e3)).filter(Boolean).join(":");
}
function createError(e2, n2, i2) {
  const t2 = new Error(`[unstorage] [${e2}] ${n2}`, i2);
  return Error.captureStackTrace && Error.captureStackTrace(t2, createError), t2;
}
function getBinding(e2) {
  let n2 = "[binding]";
  if ("string" == typeof e2 && (n2 = e2, e2 = globalThis[n2] || globalThis.__env__?.[n2]), !e2) throw createError("cloudflare", `Invalid binding \`${n2}\`: \`${e2}\``);
  for (const i2 of ["get", "put", "delete"]) if (!(i2 in e2)) throw createError("cloudflare", `Invalid binding \`${n2}\`: \`${i2}\` key is missing`);
  return e2;
}
function getKVBinding(e2 = "STORAGE") {
  return getBinding(e2);
}
var DRIVER_NAME, cloudflareKvBinding;
var init_cloudflare_kv_binding_DMly_2Gl = __esm({
  "dist/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(defineDriver2, "defineDriver");
    __name(normalizeKey2, "normalizeKey");
    __name(joinKeys2, "joinKeys");
    __name(createError, "createError");
    __name(getBinding, "getBinding");
    __name(getKVBinding, "getKVBinding");
    globalThis.process ??= {}, globalThis.process.env ??= {};
    DRIVER_NAME = "cloudflare-kv-binding";
    cloudflareKvBinding = defineDriver2((e2) => {
      const n2 = /* @__PURE__ */ __name((n3 = "") => e2.base ? joinKeys2(e2.base, n3) : n3, "n");
      async function i2(i3 = "") {
        i3 = n2(i3);
        const t2 = getKVBinding(e2.binding), r2 = [];
        let o2;
        do {
          const e3 = await t2.list({ prefix: i3 || void 0, cursor: o2 });
          r2.push(...e3.keys), o2 = e3.list_complete ? void 0 : e3.cursor;
        } while (o2);
        return r2.map((e3) => e3.name);
      }
      __name(i2, "i");
      return { name: DRIVER_NAME, options: e2, getInstance: /* @__PURE__ */ __name(() => getKVBinding(e2.binding), "getInstance"), async hasItem(i3) {
        i3 = n2(i3);
        const t2 = getKVBinding(e2.binding);
        return null !== await t2.get(i3);
      }, getItem(i3) {
        i3 = n2(i3);
        return getKVBinding(e2.binding).get(i3);
      }, setItem(i3, t2, r2) {
        i3 = n2(i3);
        return getKVBinding(e2.binding).put(i3, t2, r2 ? { expirationTtl: r2?.ttl ? Math.max(r2.ttl, e2.minTTL ?? 60) : void 0, ...r2 } : void 0);
      }, removeItem(i3) {
        i3 = n2(i3);
        return getKVBinding(e2.binding).delete(i3);
      }, getKeys: /* @__PURE__ */ __name((n3) => i2(n3).then((n4) => n4.map((n5) => e2.base ? n5.slice(e2.base.length) : n5)), "getKeys"), async clear(n3) {
        const t2 = getKVBinding(e2.binding), r2 = await i2(n3);
        await Promise.all(r2.map((e3) => t2.delete(e3)));
      } };
    });
  }
});

// dist/_worker.js/chunks/consts_47CwkweC.mjs
var VALID_SUPPORTED_FORMATS, DEFAULT_OUTPUT_FORMAT, DEFAULT_HASH_PROPS;
var init_consts_47CwkweC = __esm({
  "dist/_worker.js/chunks/consts_47CwkweC.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    VALID_SUPPORTED_FORMATS = ["jpeg", "jpg", "png", "tiff", "webp", "gif", "svg", "avif"];
    DEFAULT_OUTPUT_FORMAT = "webp";
    DEFAULT_HASH_PROPS = ["src", "width", "height", "format", "quality", "fit", "position"];
  }
});

// node-built-in-modules:node:util
import libDefault from "node:util";
var require_node_util = __commonJS({
  "node-built-in-modules:node:util"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault;
  }
});

// node-built-in-modules:node:stream
import libDefault2 from "node:stream";
var require_node_stream = __commonJS({
  "node-built-in-modules:node:stream"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault2;
  }
});

// node_modules/sharp/lib/is.js
var require_is = __commonJS({
  "node_modules/sharp/lib/is.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var defined = /* @__PURE__ */ __name((val) => typeof val !== "undefined" && val !== null, "defined");
    var object = /* @__PURE__ */ __name((val) => typeof val === "object", "object");
    var plainObject = /* @__PURE__ */ __name((val) => Object.prototype.toString.call(val) === "[object Object]", "plainObject");
    var fn = /* @__PURE__ */ __name((val) => typeof val === "function", "fn");
    var bool = /* @__PURE__ */ __name((val) => typeof val === "boolean", "bool");
    var buffer = /* @__PURE__ */ __name((val) => val instanceof Buffer, "buffer");
    var typedArray = /* @__PURE__ */ __name((val) => {
      if (defined(val)) {
        switch (val.constructor) {
          case Uint8Array:
          case Uint8ClampedArray:
          case Int8Array:
          case Uint16Array:
          case Int16Array:
          case Uint32Array:
          case Int32Array:
          case Float32Array:
          case Float64Array:
            return true;
        }
      }
      return false;
    }, "typedArray");
    var arrayBuffer = /* @__PURE__ */ __name((val) => val instanceof ArrayBuffer, "arrayBuffer");
    var string = /* @__PURE__ */ __name((val) => typeof val === "string" && val.length > 0, "string");
    var number = /* @__PURE__ */ __name((val) => typeof val === "number" && !Number.isNaN(val), "number");
    var integer = /* @__PURE__ */ __name((val) => Number.isInteger(val), "integer");
    var inRange = /* @__PURE__ */ __name((val, min, max) => val >= min && val <= max, "inRange");
    var inArray = /* @__PURE__ */ __name((val, list) => list.includes(val), "inArray");
    var invalidParameterError = /* @__PURE__ */ __name((name, expected, actual) => new Error(
      `Expected ${expected} for ${name} but received ${actual} of type ${typeof actual}`
    ), "invalidParameterError");
    var nativeError = /* @__PURE__ */ __name((native, context2) => {
      context2.message = native.message;
      return context2;
    }, "nativeError");
    module.exports = {
      defined,
      object,
      plainObject,
      fn,
      bool,
      buffer,
      typedArray,
      arrayBuffer,
      string,
      number,
      integer,
      inRange,
      inArray,
      invalidParameterError,
      nativeError
    };
  }
});

// node_modules/unenv/dist/runtime/node/child_process.mjs
var ChildProcess, _forkChild, exec, execFile, execFileSync, execSync, fork, spawn, spawnSync, child_process_default;
var init_child_process = __esm({
  "node_modules/unenv/dist/runtime/node/child_process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    ChildProcess = /* @__PURE__ */ notImplementedClass("child_process.ChildProcess");
    _forkChild = /* @__PURE__ */ notImplemented("child_process.ChildProcess");
    exec = /* @__PURE__ */ notImplemented("child_process.exec");
    execFile = /* @__PURE__ */ notImplemented("child_process.execFile");
    execFileSync = /* @__PURE__ */ notImplemented("child_process.execFileSync");
    execSync = /* @__PURE__ */ notImplemented("child_process.execSyn");
    fork = /* @__PURE__ */ notImplemented("child_process.fork");
    spawn = /* @__PURE__ */ notImplemented("child_process.spawn");
    spawnSync = /* @__PURE__ */ notImplemented("child_process.spawnSync");
    child_process_default = {
      ChildProcess,
      _forkChild,
      exec,
      execFile,
      execFileSync,
      execSync,
      fork,
      spawn,
      spawnSync
    };
  }
});

// node-built-in-modules:child_process
var require_child_process = __commonJS({
  "node-built-in-modules:child_process"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_child_process();
    module.exports = child_process_default;
  }
});

// node_modules/detect-libc/lib/process.js
var require_process = __commonJS({
  "node_modules/detect-libc/lib/process.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var isLinux = /* @__PURE__ */ __name(() => process.platform === "linux", "isLinux");
    var report2 = null;
    var getReport = /* @__PURE__ */ __name(() => {
      if (!report2) {
        if (isLinux() && process.report) {
          const orig = process.report.excludeNetwork;
          process.report.excludeNetwork = true;
          report2 = process.report.getReport();
          process.report.excludeNetwork = orig;
        } else {
          report2 = {};
        }
      }
      return report2;
    }, "getReport");
    module.exports = { isLinux, getReport };
  }
});

// node-built-in-modules:fs
import libDefault3 from "fs";
var require_fs = __commonJS({
  "node-built-in-modules:fs"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault3;
  }
});

// node_modules/detect-libc/lib/filesystem.js
var require_filesystem = __commonJS({
  "node_modules/detect-libc/lib/filesystem.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var fs = require_fs();
    var LDD_PATH = "/usr/bin/ldd";
    var SELF_PATH = "/proc/self/exe";
    var MAX_LENGTH = 2048;
    var readFileSync = /* @__PURE__ */ __name((path) => {
      const fd = fs.openSync(path, "r");
      const buffer = Buffer.alloc(MAX_LENGTH);
      const bytesRead = fs.readSync(fd, buffer, 0, MAX_LENGTH, 0);
      fs.close(fd, () => {
      });
      return buffer.subarray(0, bytesRead);
    }, "readFileSync");
    var readFile = /* @__PURE__ */ __name((path) => new Promise((resolve, reject) => {
      fs.open(path, "r", (err, fd) => {
        if (err) {
          reject(err);
        } else {
          const buffer = Buffer.alloc(MAX_LENGTH);
          fs.read(fd, buffer, 0, MAX_LENGTH, 0, (_, bytesRead) => {
            resolve(buffer.subarray(0, bytesRead));
            fs.close(fd, () => {
            });
          });
        }
      });
    }), "readFile");
    module.exports = {
      LDD_PATH,
      SELF_PATH,
      readFileSync,
      readFile
    };
  }
});

// node_modules/detect-libc/lib/elf.js
var require_elf = __commonJS({
  "node_modules/detect-libc/lib/elf.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var interpreterPath = /* @__PURE__ */ __name((elf) => {
      if (elf.length < 64) {
        return null;
      }
      if (elf.readUInt32BE(0) !== 2135247942) {
        return null;
      }
      if (elf.readUInt8(4) !== 2) {
        return null;
      }
      if (elf.readUInt8(5) !== 1) {
        return null;
      }
      const offset = elf.readUInt32LE(32);
      const size = elf.readUInt16LE(54);
      const count3 = elf.readUInt16LE(56);
      for (let i2 = 0; i2 < count3; i2++) {
        const headerOffset = offset + i2 * size;
        const type = elf.readUInt32LE(headerOffset);
        if (type === 3) {
          const fileOffset = elf.readUInt32LE(headerOffset + 8);
          const fileSize = elf.readUInt32LE(headerOffset + 32);
          return elf.subarray(fileOffset, fileOffset + fileSize).toString().replace(/\0.*$/g, "");
        }
      }
      return null;
    }, "interpreterPath");
    module.exports = {
      interpreterPath
    };
  }
});

// node_modules/detect-libc/lib/detect-libc.js
var require_detect_libc = __commonJS({
  "node_modules/detect-libc/lib/detect-libc.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var childProcess = require_child_process();
    var { isLinux, getReport } = require_process();
    var { LDD_PATH, SELF_PATH, readFile, readFileSync } = require_filesystem();
    var { interpreterPath } = require_elf();
    var cachedFamilyInterpreter;
    var cachedFamilyFilesystem;
    var cachedVersionFilesystem;
    var command = "getconf GNU_LIBC_VERSION 2>&1 || true; ldd --version 2>&1 || true";
    var commandOut = "";
    var safeCommand = /* @__PURE__ */ __name(() => {
      if (!commandOut) {
        return new Promise((resolve) => {
          childProcess.exec(command, (err, out) => {
            commandOut = err ? " " : out;
            resolve(commandOut);
          });
        });
      }
      return commandOut;
    }, "safeCommand");
    var safeCommandSync = /* @__PURE__ */ __name(() => {
      if (!commandOut) {
        try {
          commandOut = childProcess.execSync(command, { encoding: "utf8" });
        } catch (_err) {
          commandOut = " ";
        }
      }
      return commandOut;
    }, "safeCommandSync");
    var GLIBC = "glibc";
    var RE_GLIBC_VERSION = /LIBC[a-z0-9 \-).]*?(\d+\.\d+)/i;
    var MUSL = "musl";
    var isFileMusl = /* @__PURE__ */ __name((f) => f.includes("libc.musl-") || f.includes("ld-musl-"), "isFileMusl");
    var familyFromReport = /* @__PURE__ */ __name(() => {
      const report2 = getReport();
      if (report2.header && report2.header.glibcVersionRuntime) {
        return GLIBC;
      }
      if (Array.isArray(report2.sharedObjects)) {
        if (report2.sharedObjects.some(isFileMusl)) {
          return MUSL;
        }
      }
      return null;
    }, "familyFromReport");
    var familyFromCommand = /* @__PURE__ */ __name((out) => {
      const [getconf, ldd1] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return GLIBC;
      }
      if (ldd1 && ldd1.includes(MUSL)) {
        return MUSL;
      }
      return null;
    }, "familyFromCommand");
    var familyFromInterpreterPath = /* @__PURE__ */ __name((path) => {
      if (path) {
        if (path.includes("/ld-musl-")) {
          return MUSL;
        } else if (path.includes("/ld-linux-")) {
          return GLIBC;
        }
      }
      return null;
    }, "familyFromInterpreterPath");
    var getFamilyFromLddContent = /* @__PURE__ */ __name((content) => {
      content = content.toString();
      if (content.includes("musl")) {
        return MUSL;
      }
      if (content.includes("GNU C Library")) {
        return GLIBC;
      }
      return null;
    }, "getFamilyFromLddContent");
    var familyFromFilesystem = /* @__PURE__ */ __name(async () => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = await readFile(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e2) {
      }
      return cachedFamilyFilesystem;
    }, "familyFromFilesystem");
    var familyFromFilesystemSync = /* @__PURE__ */ __name(() => {
      if (cachedFamilyFilesystem !== void 0) {
        return cachedFamilyFilesystem;
      }
      cachedFamilyFilesystem = null;
      try {
        const lddContent = readFileSync(LDD_PATH);
        cachedFamilyFilesystem = getFamilyFromLddContent(lddContent);
      } catch (e2) {
      }
      return cachedFamilyFilesystem;
    }, "familyFromFilesystemSync");
    var familyFromInterpreter = /* @__PURE__ */ __name(async () => {
      if (cachedFamilyInterpreter !== void 0) {
        return cachedFamilyInterpreter;
      }
      cachedFamilyInterpreter = null;
      try {
        const selfContent = await readFile(SELF_PATH);
        const path = interpreterPath(selfContent);
        cachedFamilyInterpreter = familyFromInterpreterPath(path);
      } catch (e2) {
      }
      return cachedFamilyInterpreter;
    }, "familyFromInterpreter");
    var familyFromInterpreterSync = /* @__PURE__ */ __name(() => {
      if (cachedFamilyInterpreter !== void 0) {
        return cachedFamilyInterpreter;
      }
      cachedFamilyInterpreter = null;
      try {
        const selfContent = readFileSync(SELF_PATH);
        const path = interpreterPath(selfContent);
        cachedFamilyInterpreter = familyFromInterpreterPath(path);
      } catch (e2) {
      }
      return cachedFamilyInterpreter;
    }, "familyFromInterpreterSync");
    var family = /* @__PURE__ */ __name(async () => {
      let family2 = null;
      if (isLinux()) {
        family2 = await familyFromInterpreter();
        if (!family2) {
          family2 = await familyFromFilesystem();
          if (!family2) {
            family2 = familyFromReport();
          }
          if (!family2) {
            const out = await safeCommand();
            family2 = familyFromCommand(out);
          }
        }
      }
      return family2;
    }, "family");
    var familySync = /* @__PURE__ */ __name(() => {
      let family2 = null;
      if (isLinux()) {
        family2 = familyFromInterpreterSync();
        if (!family2) {
          family2 = familyFromFilesystemSync();
          if (!family2) {
            family2 = familyFromReport();
          }
          if (!family2) {
            const out = safeCommandSync();
            family2 = familyFromCommand(out);
          }
        }
      }
      return family2;
    }, "familySync");
    var isNonGlibcLinux = /* @__PURE__ */ __name(async () => isLinux() && await family() !== GLIBC, "isNonGlibcLinux");
    var isNonGlibcLinuxSync = /* @__PURE__ */ __name(() => isLinux() && familySync() !== GLIBC, "isNonGlibcLinuxSync");
    var versionFromFilesystem = /* @__PURE__ */ __name(async () => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = await readFile(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e2) {
      }
      return cachedVersionFilesystem;
    }, "versionFromFilesystem");
    var versionFromFilesystemSync = /* @__PURE__ */ __name(() => {
      if (cachedVersionFilesystem !== void 0) {
        return cachedVersionFilesystem;
      }
      cachedVersionFilesystem = null;
      try {
        const lddContent = readFileSync(LDD_PATH);
        const versionMatch = lddContent.match(RE_GLIBC_VERSION);
        if (versionMatch) {
          cachedVersionFilesystem = versionMatch[1];
        }
      } catch (e2) {
      }
      return cachedVersionFilesystem;
    }, "versionFromFilesystemSync");
    var versionFromReport = /* @__PURE__ */ __name(() => {
      const report2 = getReport();
      if (report2.header && report2.header.glibcVersionRuntime) {
        return report2.header.glibcVersionRuntime;
      }
      return null;
    }, "versionFromReport");
    var versionSuffix = /* @__PURE__ */ __name((s2) => s2.trim().split(/\s+/)[1], "versionSuffix");
    var versionFromCommand = /* @__PURE__ */ __name((out) => {
      const [getconf, ldd1, ldd2] = out.split(/[\r\n]+/);
      if (getconf && getconf.includes(GLIBC)) {
        return versionSuffix(getconf);
      }
      if (ldd1 && ldd2 && ldd1.includes(MUSL)) {
        return versionSuffix(ldd2);
      }
      return null;
    }, "versionFromCommand");
    var version2 = /* @__PURE__ */ __name(async () => {
      let version3 = null;
      if (isLinux()) {
        version3 = await versionFromFilesystem();
        if (!version3) {
          version3 = versionFromReport();
        }
        if (!version3) {
          const out = await safeCommand();
          version3 = versionFromCommand(out);
        }
      }
      return version3;
    }, "version");
    var versionSync = /* @__PURE__ */ __name(() => {
      let version3 = null;
      if (isLinux()) {
        version3 = versionFromFilesystemSync();
        if (!version3) {
          version3 = versionFromReport();
        }
        if (!version3) {
          const out = safeCommandSync();
          version3 = versionFromCommand(out);
        }
      }
      return version3;
    }, "versionSync");
    module.exports = {
      GLIBC,
      MUSL,
      family,
      familySync,
      isNonGlibcLinux,
      isNonGlibcLinuxSync,
      version: version2,
      versionSync
    };
  }
});

// node-built-in-modules:node:child_process
var require_node_child_process = __commonJS({
  "node-built-in-modules:node:child_process"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_child_process();
    module.exports = child_process_default;
  }
});

// node-built-in-modules:node:crypto
import libDefault4 from "node:crypto";
var require_node_crypto = __commonJS({
  "node-built-in-modules:node:crypto"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault4;
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var debug4 = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug4;
  }
});

// node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/semver/internal/constants.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug4 = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var safeSrc = exports.safeSrc = [];
    var t2 = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = /* @__PURE__ */ __name((value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    }, "makeSafeRegex");
    var createToken = /* @__PURE__ */ __name((name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug4(name, index, value);
      t2[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    }, "createToken");
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
    createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
    createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t2.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t2.COERCEPLAIN] + `(?:${src[t2.PRERELEASE]})?(?:${src[t2.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t2.COERCE], true);
    createToken("COERCERTLFULL", src[t2.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = /* @__PURE__ */ __name((options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    }, "parseOptions");
    module.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = /* @__PURE__ */ __name((a2, b) => {
      if (typeof a2 === "number" && typeof b === "number") {
        return a2 === b ? 0 : a2 < b ? -1 : 1;
      }
      const anum = numeric.test(a2);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a2 = +a2;
        b = +b;
      }
      return a2 === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a2 < b ? -1 : 1;
    }, "compareIdentifiers");
    var rcompareIdentifiers = /* @__PURE__ */ __name((a2, b) => compareIdentifiers(b, a2), "rcompareIdentifiers");
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var debug4 = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t: t2 } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      static {
        __name(this, "SemVer");
      }
      constructor(version2, options) {
        options = parseOptions(options);
        if (version2 instanceof _SemVer) {
          if (version2.loose === !!options.loose && version2.includePrerelease === !!options.includePrerelease) {
            return version2;
          } else {
            version2 = version2.version;
          }
        } else if (typeof version2 !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version2}".`);
        }
        if (version2.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug4("SemVer", version2, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version2.trim().match(options.loose ? re[t2.LOOSE] : re[t2.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version2}`);
        }
        this.raw = version2;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug4("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.major < other.major) {
          return -1;
        }
        if (this.major > other.major) {
          return 1;
        }
        if (this.minor < other.minor) {
          return -1;
        }
        if (this.minor > other.minor) {
          return 1;
        }
        if (this.patch < other.patch) {
          return -1;
        }
        if (this.patch > other.patch) {
          return 1;
        }
        return 0;
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i2 = 0;
        do {
          const a2 = this.prerelease[i2];
          const b = other.prerelease[i2];
          debug4("prerelease compare", i2, a2, b);
          if (a2 === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a2 === void 0) {
            return -1;
          } else if (a2 === b) {
            continue;
          } else {
            return compareIdentifiers(a2, b);
          }
        } while (++i2);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i2 = 0;
        do {
          const a2 = this.build[i2];
          const b = other.build[i2];
          debug4("build compare", i2, a2, b);
          if (a2 === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a2 === void 0) {
            return -1;
          } else if (a2 === b) {
            continue;
          } else {
            return compareIdentifiers(a2, b);
          }
        } while (++i2);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release2, identifier, identifierBase) {
        if (release2.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re[t2.PRERELEASELOOSE] : re[t2.PRERELEASE]);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release2) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i2 = this.prerelease.length;
              while (--i2 >= 0) {
                if (typeof this.prerelease[i2] === "number") {
                  this.prerelease[i2]++;
                  i2 = -2;
                }
              }
              if (i2 === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release2}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/semver/functions/parse.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var parse2 = /* @__PURE__ */ __name((version2, options, throwErrors = false) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      try {
        return new SemVer(version2, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    }, "parse");
    module.exports = parse2;
  }
});

// node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/semver/functions/coerce.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var parse2 = require_parse();
    var { safeRe: re, t: t2 } = require_re();
    var coerce = /* @__PURE__ */ __name((version2, options) => {
      if (version2 instanceof SemVer) {
        return version2;
      }
      if (typeof version2 === "number") {
        version2 = String(version2);
      }
      if (typeof version2 !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version2.match(options.includePrerelease ? re[t2.COERCEFULL] : re[t2.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t2.COERCERTLFULL] : re[t2.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version2)) && (!match || match.index + match[0].length !== version2.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse2(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    }, "coerce");
    module.exports = coerce;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SemVer = require_semver();
    var compare = /* @__PURE__ */ __name((a2, b, loose) => new SemVer(a2, loose).compare(new SemVer(b, loose)), "compare");
    module.exports = compare;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var gte = /* @__PURE__ */ __name((a2, b, loose) => compare(a2, b, loose) >= 0, "gte");
    module.exports = gte;
  }
});

// node_modules/semver/internal/lrucache.js
var require_lrucache = __commonJS({
  "node_modules/semver/internal/lrucache.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var LRUCache = class {
      static {
        __name(this, "LRUCache");
      }
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    };
    module.exports = LRUCache;
  }
});

// node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/semver/functions/eq.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var eq = /* @__PURE__ */ __name((a2, b, loose) => compare(a2, b, loose) === 0, "eq");
    module.exports = eq;
  }
});

// node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/semver/functions/neq.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var neq = /* @__PURE__ */ __name((a2, b, loose) => compare(a2, b, loose) !== 0, "neq");
    module.exports = neq;
  }
});

// node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/semver/functions/gt.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var gt = /* @__PURE__ */ __name((a2, b, loose) => compare(a2, b, loose) > 0, "gt");
    module.exports = gt;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var lt = /* @__PURE__ */ __name((a2, b, loose) => compare(a2, b, loose) < 0, "lt");
    module.exports = lt;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var compare = require_compare();
    var lte = /* @__PURE__ */ __name((a2, b, loose) => compare(a2, b, loose) <= 0, "lte");
    module.exports = lte;
  }
});

// node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/semver/functions/cmp.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = /* @__PURE__ */ __name((a2, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a2 === "object") {
            a2 = a2.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a2 === b;
        case "!==":
          if (typeof a2 === "object") {
            a2 = a2.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a2 !== b;
        case "":
        case "=":
        case "==":
          return eq(a2, b, loose);
        case "!=":
          return neq(a2, b, loose);
        case ">":
          return gt(a2, b, loose);
        case ">=":
          return gte(a2, b, loose);
        case "<":
          return lt(a2, b, loose);
        case "<=":
          return lte(a2, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    }, "cmp");
    module.exports = cmp;
  }
});

// node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/semver/classes/comparator.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static {
        __name(this, "Comparator");
      }
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug4("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug4("comp", this);
      }
      parse(comp) {
        const r2 = this.options.loose ? re[t2.COMPARATORLOOSE] : re[t2.COMPARATOR];
        const m = comp.match(r2);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version2) {
        debug4("Comparator.test", version2, this.options.loose);
        if (this.semver === ANY || version2 === ANY) {
          return true;
        }
        if (typeof version2 === "string") {
          try {
            version2 = new SemVer(version2, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version2, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t: t2 } = require_re();
    var cmp = require_cmp();
    var debug4 = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/semver/classes/range.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var SPACE_CHARACTERS = /\s+/g;
    var Range = class _Range {
      static {
        __name(this, "Range");
      }
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = void 0;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
        this.set = this.raw.split("||").map((r2) => this.parseRange(r2.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let i2 = 0; i2 < this.set.length; i2++) {
            if (i2 > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i2];
            for (let k = 0; k < comps.length; k++) {
              if (k > 0) {
                this.formatted += " ";
              }
              this.formatted += comps[k].toString().trim();
            }
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t2.HYPHENRANGELOOSE] : re[t2.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug4("hyphen replace", range);
        range = range.replace(re[t2.COMPARATORTRIM], comparatorTrimReplace);
        debug4("comparator trim", range);
        range = range.replace(re[t2.TILDETRIM], tildeTrimReplace);
        debug4("tilde trim", range);
        range = range.replace(re[t2.CARETTRIM], caretTrimReplace);
        debug4("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug4("loose invalid filter", comp, this.options);
            return !!comp.match(re[t2.COMPARATORLOOSE]);
          });
        }
        debug4("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version2) {
        if (!version2) {
          return false;
        }
        if (typeof version2 === "string") {
          try {
            version2 = new SemVer(version2, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i2 = 0; i2 < this.set.length; i2++) {
          if (testSet(this.set[i2], version2, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lrucache();
    var cache = new LRU();
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug4 = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t: t2,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = /* @__PURE__ */ __name((c) => c.value === "<0.0.0-0", "isNullSet");
    var isAny = /* @__PURE__ */ __name((c) => c.value === "", "isAny");
    var isSatisfiable = /* @__PURE__ */ __name((comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    }, "isSatisfiable");
    var parseComparator = /* @__PURE__ */ __name((comp, options) => {
      comp = comp.replace(re[t2.BUILD], "");
      debug4("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug4("caret", comp);
      comp = replaceTildes(comp, options);
      debug4("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug4("xrange", comp);
      comp = replaceStars(comp, options);
      debug4("stars", comp);
      return comp;
    }, "parseComparator");
    var isX = /* @__PURE__ */ __name((id) => !id || id.toLowerCase() === "x" || id === "*", "isX");
    var replaceTildes = /* @__PURE__ */ __name((comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    }, "replaceTildes");
    var replaceTilde = /* @__PURE__ */ __name((comp, options) => {
      const r2 = options.loose ? re[t2.TILDELOOSE] : re[t2.TILDE];
      return comp.replace(r2, (_, M, m, p, pr) => {
        debug4("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug4("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug4("tilde return", ret);
        return ret;
      });
    }, "replaceTilde");
    var replaceCarets = /* @__PURE__ */ __name((comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    }, "replaceCarets");
    var replaceCaret = /* @__PURE__ */ __name((comp, options) => {
      debug4("caret", comp, options);
      const r2 = options.loose ? re[t2.CARETLOOSE] : re[t2.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r2, (_, M, m, p, pr) => {
        debug4("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug4("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug4("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug4("caret return", ret);
        return ret;
      });
    }, "replaceCaret");
    var replaceXRanges = /* @__PURE__ */ __name((comp, options) => {
      debug4("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    }, "replaceXRanges");
    var replaceXRange = /* @__PURE__ */ __name((comp, options) => {
      comp = comp.trim();
      const r2 = options.loose ? re[t2.XRANGELOOSE] : re[t2.XRANGE];
      return comp.replace(r2, (ret, gtlt, M, m, p, pr) => {
        debug4("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug4("xRange return", ret);
        return ret;
      });
    }, "replaceXRange");
    var replaceStars = /* @__PURE__ */ __name((comp, options) => {
      debug4("replaceStars", comp, options);
      return comp.trim().replace(re[t2.STAR], "");
    }, "replaceStars");
    var replaceGTE0 = /* @__PURE__ */ __name((comp, options) => {
      debug4("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
    }, "replaceGTE0");
    var hyphenReplace = /* @__PURE__ */ __name((incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    }, "hyphenReplace");
    var testSet = /* @__PURE__ */ __name((set, version2, options) => {
      for (let i2 = 0; i2 < set.length; i2++) {
        if (!set[i2].test(version2)) {
          return false;
        }
      }
      if (version2.prerelease.length && !options.includePrerelease) {
        for (let i2 = 0; i2 < set.length; i2++) {
          debug4(set[i2].semver);
          if (set[i2].semver === Comparator.ANY) {
            continue;
          }
          if (set[i2].semver.prerelease.length > 0) {
            const allowed = set[i2].semver;
            if (allowed.major === version2.major && allowed.minor === version2.minor && allowed.patch === version2.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    }, "testSet");
  }
});

// node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/semver/functions/satisfies.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Range = require_range();
    var satisfies = /* @__PURE__ */ __name((version2, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version2);
    }, "satisfies");
    module.exports = satisfies;
  }
});

// node_modules/sharp/package.json
var require_package = __commonJS({
  "node_modules/sharp/package.json"(exports, module) {
    module.exports = {
      name: "sharp",
      description: "High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, GIF, AVIF and TIFF images",
      version: "0.34.5",
      author: "Lovell Fuller <npm@lovell.info>",
      homepage: "https://sharp.pixelplumbing.com",
      contributors: [
        "Pierre Inglebert <pierre.inglebert@gmail.com>",
        "Jonathan Ong <jonathanrichardong@gmail.com>",
        "Chanon Sajjamanochai <chanon.s@gmail.com>",
        "Juliano Julio <julianojulio@gmail.com>",
        "Daniel Gasienica <daniel@gasienica.ch>",
        "Julian Walker <julian@fiftythree.com>",
        "Amit Pitaru <pitaru.amit@gmail.com>",
        "Brandon Aaron <hello.brandon@aaron.sh>",
        "Andreas Lind <andreas@one.com>",
        "Maurus Cuelenaere <mcuelenaere@gmail.com>",
        "Linus Unneb\xE4ck <linus@folkdatorn.se>",
        "Victor Mateevitsi <mvictoras@gmail.com>",
        "Alaric Holloway <alaric.holloway@gmail.com>",
        "Bernhard K. Weisshuhn <bkw@codingforce.com>",
        "Chris Riley <criley@primedia.com>",
        "David Carley <dacarley@gmail.com>",
        "John Tobin <john@limelightmobileinc.com>",
        "Kenton Gray <kentongray@gmail.com>",
        "Felix B\xFCnemann <Felix.Buenemann@gmail.com>",
        "Samy Al Zahrani <samyalzahrany@gmail.com>",
        "Chintan Thakkar <lemnisk8@gmail.com>",
        "F. Orlando Galashan <frulo@gmx.de>",
        "Kleis Auke Wolthuizen <info@kleisauke.nl>",
        "Matt Hirsch <mhirsch@media.mit.edu>",
        "Matthias Thoemmes <thoemmes@gmail.com>",
        "Patrick Paskaris <patrick@paskaris.gr>",
        "J\xE9r\xE9my Lal <kapouer@melix.org>",
        "Rahul Nanwani <r.nanwani@gmail.com>",
        "Alice Monday <alice0meta@gmail.com>",
        "Kristo Jorgenson <kristo.jorgenson@gmail.com>",
        "YvesBos <yves_bos@outlook.com>",
        "Guy Maliar <guy@tailorbrands.com>",
        "Nicolas Coden <nicolas@ncoden.fr>",
        "Matt Parrish <matt.r.parrish@gmail.com>",
        "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
        "Matthew McEachen <matthew+github@mceachen.org>",
        "Jarda Kot\u011B\u0161ovec <jarda.kotesovec@gmail.com>",
        "Kenric D'Souza <kenric.dsouza@gmail.com>",
        "Oleh Aleinyk <oleg.aleynik@gmail.com>",
        "Marcel Bretschneider <marcel.bretschneider@gmail.com>",
        "Andrea Bianco <andrea.bianco@unibas.ch>",
        "Rik Heywood <rik@rik.org>",
        "Thomas Parisot <hi@oncletom.io>",
        "Nathan Graves <nathanrgraves+github@gmail.com>",
        "Tom Lokhorst <tom@lokhorst.eu>",
        "Espen Hovlandsdal <espen@hovlandsdal.com>",
        "Sylvain Dumont <sylvain.dumont35@gmail.com>",
        "Alun Davies <alun.owain.davies@googlemail.com>",
        "Aidan Hoolachan <ajhoolachan21@gmail.com>",
        "Axel Eirola <axel.eirola@iki.fi>",
        "Freezy <freezy@xbmc.org>",
        "Daiz <taneli.vatanen@gmail.com>",
        "Julian Aubourg <j@ubourg.net>",
        "Keith Belovay <keith@picthrive.com>",
        "Michael B. Klein <mbklein@gmail.com>",
        "Jordan Prudhomme <jordan@raboland.fr>",
        "Ilya Ovdin <iovdin@gmail.com>",
        "Andargor <andargor@yahoo.com>",
        "Paul Neave <paul.neave@gmail.com>",
        "Brendan Kennedy <brenwken@gmail.com>",
        "Brychan Bennett-Odlum <git@brychan.io>",
        "Edward Silverton <e.silverton@gmail.com>",
        "Roman Malieiev <aromaleev@gmail.com>",
        "Tomas Szabo <tomas.szabo@deftomat.com>",
        "Robert O'Rourke <robert@o-rourke.org>",
        "Guillermo Alfonso Varela Chouci\xF1o <guillevch@gmail.com>",
        "Christian Flintrup <chr@gigahost.dk>",
        "Manan Jadhav <manan@motionden.com>",
        "Leon Radley <leon@radley.se>",
        "alza54 <alza54@thiocod.in>",
        "Jacob Smith <jacob@frende.me>",
        "Michael Nutt <michael@nutt.im>",
        "Brad Parham <baparham@gmail.com>",
        "Taneli Vatanen <taneli.vatanen@gmail.com>",
        "Joris Dugu\xE9 <zaruike10@gmail.com>",
        "Chris Banks <christopher.bradley.banks@gmail.com>",
        "Ompal Singh <ompal.hitm09@gmail.com>",
        "Brodan <christopher.hranj@gmail.com>",
        "Ankur Parihar <ankur.github@gmail.com>",
        "Brahim Ait elhaj <brahima@gmail.com>",
        "Mart Jansink <m.jansink@gmail.com>",
        "Lachlan Newman <lachnewman007@gmail.com>",
        "Dennis Beatty <dennis@dcbeatty.com>",
        "Ingvar Stepanyan <me@rreverser.com>",
        "Don Denton <don@happycollision.com>"
      ],
      scripts: {
        build: "node install/build.js",
        install: "node install/check.js || npm run build",
        clean: "rm -rf src/build/ .nyc_output/ coverage/ test/fixtures/output.*",
        test: "npm run lint && npm run test-unit",
        lint: "npm run lint-cpp && npm run lint-js && npm run lint-types",
        "lint-cpp": "cpplint --quiet src/*.h src/*.cc",
        "lint-js": "biome lint",
        "lint-types": "tsd --files ./test/types/sharp.test-d.ts",
        "test-leak": "./test/leak/leak.sh",
        "test-unit": "node --experimental-test-coverage test/unit.mjs",
        "package-from-local-build": "node npm/from-local-build.js",
        "package-release-notes": "node npm/release-notes.js",
        "docs-build": "node docs/build.mjs",
        "docs-serve": "cd docs && npm start",
        "docs-publish": "cd docs && npm run build && npx firebase-tools deploy --project pixelplumbing --only hosting:pixelplumbing-sharp"
      },
      type: "commonjs",
      main: "lib/index.js",
      types: "lib/index.d.ts",
      files: [
        "install",
        "lib",
        "src/*.{cc,h,gyp}"
      ],
      repository: {
        type: "git",
        url: "git://github.com/lovell/sharp.git"
      },
      keywords: [
        "jpeg",
        "png",
        "webp",
        "avif",
        "tiff",
        "gif",
        "svg",
        "jp2",
        "dzi",
        "image",
        "resize",
        "thumbnail",
        "crop",
        "embed",
        "libvips",
        "vips"
      ],
      dependencies: {
        "@img/colour": "^1.0.0",
        "detect-libc": "^2.1.2",
        semver: "^7.7.3"
      },
      optionalDependencies: {
        "@img/sharp-darwin-arm64": "0.34.5",
        "@img/sharp-darwin-x64": "0.34.5",
        "@img/sharp-libvips-darwin-arm64": "1.2.4",
        "@img/sharp-libvips-darwin-x64": "1.2.4",
        "@img/sharp-libvips-linux-arm": "1.2.4",
        "@img/sharp-libvips-linux-arm64": "1.2.4",
        "@img/sharp-libvips-linux-ppc64": "1.2.4",
        "@img/sharp-libvips-linux-riscv64": "1.2.4",
        "@img/sharp-libvips-linux-s390x": "1.2.4",
        "@img/sharp-libvips-linux-x64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4",
        "@img/sharp-linux-arm": "0.34.5",
        "@img/sharp-linux-arm64": "0.34.5",
        "@img/sharp-linux-ppc64": "0.34.5",
        "@img/sharp-linux-riscv64": "0.34.5",
        "@img/sharp-linux-s390x": "0.34.5",
        "@img/sharp-linux-x64": "0.34.5",
        "@img/sharp-linuxmusl-arm64": "0.34.5",
        "@img/sharp-linuxmusl-x64": "0.34.5",
        "@img/sharp-wasm32": "0.34.5",
        "@img/sharp-win32-arm64": "0.34.5",
        "@img/sharp-win32-ia32": "0.34.5",
        "@img/sharp-win32-x64": "0.34.5"
      },
      devDependencies: {
        "@biomejs/biome": "^2.3.4",
        "@cpplint/cli": "^0.1.0",
        "@emnapi/runtime": "^1.7.0",
        "@img/sharp-libvips-dev": "1.2.4",
        "@img/sharp-libvips-dev-wasm32": "1.2.4",
        "@img/sharp-libvips-win32-arm64": "1.2.4",
        "@img/sharp-libvips-win32-ia32": "1.2.4",
        "@img/sharp-libvips-win32-x64": "1.2.4",
        "@types/node": "*",
        emnapi: "^1.7.0",
        "exif-reader": "^2.0.2",
        "extract-zip": "^2.0.1",
        icc: "^3.0.0",
        "jsdoc-to-markdown": "^9.1.3",
        "node-addon-api": "^8.5.0",
        "node-gyp": "^11.5.0",
        "tar-fs": "^3.1.1",
        tsd: "^0.33.0"
      },
      license: "Apache-2.0",
      engines: {
        node: "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      config: {
        libvips: ">=8.17.3"
      },
      funding: {
        url: "https://opencollective.com/libvips"
      }
    };
  }
});

// node_modules/sharp/lib/libvips.js
var require_libvips = __commonJS({
  "node_modules/sharp/lib/libvips.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { spawnSync: spawnSync2 } = require_node_child_process();
    var { createHash } = require_node_crypto();
    var semverCoerce = require_coerce();
    var semverGreaterThanOrEqualTo = require_gte();
    var semverSatisfies = require_satisfies();
    var detectLibc = require_detect_libc();
    var { config: config2, engines, optionalDependencies } = require_package();
    var minimumLibvipsVersionLabelled = process.env.npm_package_config_libvips || config2.libvips;
    var minimumLibvipsVersion = semverCoerce(minimumLibvipsVersionLabelled).version;
    var prebuiltPlatforms = [
      "darwin-arm64",
      "darwin-x64",
      "linux-arm",
      "linux-arm64",
      "linux-ppc64",
      "linux-riscv64",
      "linux-s390x",
      "linux-x64",
      "linuxmusl-arm64",
      "linuxmusl-x64",
      "win32-arm64",
      "win32-ia32",
      "win32-x64"
    ];
    var spawnSyncOptions = {
      encoding: "utf8",
      shell: true
    };
    var log4 = /* @__PURE__ */ __name((item) => {
      if (item instanceof Error) {
        console.error(`sharp: Installation error: ${item.message}`);
      } else {
        console.log(`sharp: ${item}`);
      }
    }, "log");
    var runtimeLibc = /* @__PURE__ */ __name(() => detectLibc.isNonGlibcLinuxSync() ? detectLibc.familySync() : "", "runtimeLibc");
    var runtimePlatformArch = /* @__PURE__ */ __name(() => `${process.platform}${runtimeLibc()}-${process.arch}`, "runtimePlatformArch");
    var buildPlatformArch = /* @__PURE__ */ __name(() => {
      if (isEmscripten()) {
        return "wasm32";
      }
      const { npm_config_arch, npm_config_platform, npm_config_libc } = process.env;
      const libc = typeof npm_config_libc === "string" ? npm_config_libc : runtimeLibc();
      return `${npm_config_platform || process.platform}${libc}-${npm_config_arch || process.arch}`;
    }, "buildPlatformArch");
    var buildSharpLibvipsIncludeDir = /* @__PURE__ */ __name(() => {
      try {
        return __require(`@img/sharp-libvips-dev-${buildPlatformArch()}/include`);
      } catch {
        try {
          return __require("@img/sharp-libvips-dev/include");
        } catch {
        }
      }
      return "";
    }, "buildSharpLibvipsIncludeDir");
    var buildSharpLibvipsCPlusPlusDir = /* @__PURE__ */ __name(() => {
      try {
        return __require("@img/sharp-libvips-dev/cplusplus");
      } catch {
      }
      return "";
    }, "buildSharpLibvipsCPlusPlusDir");
    var buildSharpLibvipsLibDir = /* @__PURE__ */ __name(() => {
      try {
        return __require(`@img/sharp-libvips-dev-${buildPlatformArch()}/lib`);
      } catch {
        try {
          return __require(`@img/sharp-libvips-${buildPlatformArch()}/lib`);
        } catch {
        }
      }
      return "";
    }, "buildSharpLibvipsLibDir");
    var isUnsupportedNodeRuntime = /* @__PURE__ */ __name(() => {
      if (process.release?.name === "node" && process.versions) {
        if (!semverSatisfies(process.versions.node, engines.node)) {
          return { found: process.versions.node, expected: engines.node };
        }
      }
    }, "isUnsupportedNodeRuntime");
    var isEmscripten = /* @__PURE__ */ __name(() => {
      const { CC } = process.env;
      return Boolean(CC?.endsWith("/emcc"));
    }, "isEmscripten");
    var isRosetta = /* @__PURE__ */ __name(() => {
      if (process.platform === "darwin" && process.arch === "x64") {
        const translated = spawnSync2("sysctl sysctl.proc_translated", spawnSyncOptions).stdout;
        return (translated || "").trim() === "sysctl.proc_translated: 1";
      }
      return false;
    }, "isRosetta");
    var sha512 = /* @__PURE__ */ __name((s2) => createHash("sha512").update(s2).digest("hex"), "sha512");
    var yarnLocator = /* @__PURE__ */ __name(() => {
      try {
        const identHash = sha512(`imgsharp-libvips-${buildPlatformArch()}`);
        const npmVersion = semverCoerce(optionalDependencies[`@img/sharp-libvips-${buildPlatformArch()}`], {
          includePrerelease: true
        }).version;
        return sha512(`${identHash}npm:${npmVersion}`).slice(0, 10);
      } catch {
      }
      return "";
    }, "yarnLocator");
    var spawnRebuild = /* @__PURE__ */ __name(() => spawnSync2(`node-gyp rebuild --directory=src ${isEmscripten() ? "--nodedir=emscripten" : ""}`, {
      ...spawnSyncOptions,
      stdio: "inherit"
    }).status, "spawnRebuild");
    var globalLibvipsVersion = /* @__PURE__ */ __name(() => {
      if (process.platform !== "win32") {
        const globalLibvipsVersion2 = spawnSync2("pkg-config --modversion vips-cpp", {
          ...spawnSyncOptions,
          env: {
            ...process.env,
            PKG_CONFIG_PATH: pkgConfigPath()
          }
        }).stdout;
        return (globalLibvipsVersion2 || "").trim();
      } else {
        return "";
      }
    }, "globalLibvipsVersion");
    var pkgConfigPath = /* @__PURE__ */ __name(() => {
      if (process.platform !== "win32") {
        const brewPkgConfigPath = spawnSync2(
          'which brew >/dev/null 2>&1 && brew environment --plain | grep PKG_CONFIG_LIBDIR | cut -d" " -f2',
          spawnSyncOptions
        ).stdout || "";
        return [
          brewPkgConfigPath.trim(),
          process.env.PKG_CONFIG_PATH,
          "/usr/local/lib/pkgconfig",
          "/usr/lib/pkgconfig",
          "/usr/local/libdata/pkgconfig",
          "/usr/libdata/pkgconfig"
        ].filter(Boolean).join(":");
      } else {
        return "";
      }
    }, "pkgConfigPath");
    var skipSearch = /* @__PURE__ */ __name((status, reason, logger) => {
      if (logger) {
        logger(`Detected ${reason}, skipping search for globally-installed libvips`);
      }
      return status;
    }, "skipSearch");
    var useGlobalLibvips = /* @__PURE__ */ __name((logger) => {
      if (Boolean(process.env.SHARP_IGNORE_GLOBAL_LIBVIPS) === true) {
        return skipSearch(false, "SHARP_IGNORE_GLOBAL_LIBVIPS", logger);
      }
      if (Boolean(process.env.SHARP_FORCE_GLOBAL_LIBVIPS) === true) {
        return skipSearch(true, "SHARP_FORCE_GLOBAL_LIBVIPS", logger);
      }
      if (isRosetta()) {
        return skipSearch(false, "Rosetta", logger);
      }
      const globalVipsVersion = globalLibvipsVersion();
      return !!globalVipsVersion && semverGreaterThanOrEqualTo(globalVipsVersion, minimumLibvipsVersion);
    }, "useGlobalLibvips");
    module.exports = {
      minimumLibvipsVersion,
      prebuiltPlatforms,
      buildPlatformArch,
      buildSharpLibvipsIncludeDir,
      buildSharpLibvipsCPlusPlusDir,
      buildSharpLibvipsLibDir,
      isUnsupportedNodeRuntime,
      runtimePlatformArch,
      log: log4,
      yarnLocator,
      spawnRebuild,
      globalLibvipsVersion,
      pkgConfigPath,
      useGlobalLibvips
    };
  }
});

// node_modules/sharp/lib/sharp.js
var require_sharp = __commonJS({
  "node_modules/sharp/lib/sharp.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { familySync, versionSync } = require_detect_libc();
    var { runtimePlatformArch, isUnsupportedNodeRuntime, prebuiltPlatforms, minimumLibvipsVersion } = require_libvips();
    var runtimePlatform = runtimePlatformArch();
    var paths = [
      `../src/build/Release/sharp-${runtimePlatform}.node`,
      "../src/build/Release/sharp-wasm32.node",
      `@img/sharp-${runtimePlatform}/sharp.node`,
      "@img/sharp-wasm32/sharp.node"
    ];
    var path;
    var sharp2;
    var errors = [];
    for (path of paths) {
      try {
        sharp2 = __require(path);
        break;
      } catch (err) {
        errors.push(err);
      }
    }
    if (sharp2 && path.startsWith("@img/sharp-linux-x64") && !sharp2._isUsingX64V2()) {
      const err = new Error("Prebuilt binaries for linux-x64 require v2 microarchitecture");
      err.code = "Unsupported CPU";
      errors.push(err);
      sharp2 = null;
    }
    if (sharp2) {
      module.exports = sharp2;
    } else {
      const [isLinux, isMacOs, isWindows] = ["linux", "darwin", "win32"].map((os) => runtimePlatform.startsWith(os));
      const help = [`Could not load the "sharp" module using the ${runtimePlatform} runtime`];
      errors.forEach((err) => {
        if (err.code !== "MODULE_NOT_FOUND") {
          help.push(`${err.code}: ${err.message}`);
        }
      });
      const messages = errors.map((err) => err.message).join(" ");
      help.push("Possible solutions:");
      if (isUnsupportedNodeRuntime()) {
        const { found, expected } = isUnsupportedNodeRuntime();
        help.push(
          "- Please upgrade Node.js:",
          `    Found ${found}`,
          `    Requires ${expected}`
        );
      } else if (prebuiltPlatforms.includes(runtimePlatform)) {
        const [os, cpu] = runtimePlatform.split("-");
        const libc = os.endsWith("musl") ? " --libc=musl" : "";
        help.push(
          "- Ensure optional dependencies can be installed:",
          "    npm install --include=optional sharp",
          "- Ensure your package manager supports multi-platform installation:",
          "    See https://sharp.pixelplumbing.com/install#cross-platform",
          "- Add platform-specific dependencies:",
          `    npm install --os=${os.replace("musl", "")}${libc} --cpu=${cpu} sharp`
        );
      } else {
        help.push(
          `- Manually install libvips >= ${minimumLibvipsVersion}`,
          "- Add experimental WebAssembly-based dependencies:",
          "    npm install --cpu=wasm32 sharp",
          "    npm install @img/sharp-wasm32"
        );
      }
      if (isLinux && /(symbol not found|CXXABI_)/i.test(messages)) {
        try {
          const { config: config2 } = __require(`@img/sharp-libvips-${runtimePlatform}/package`);
          const libcFound = `${familySync()} ${versionSync()}`;
          const libcRequires = `${config2.musl ? "musl" : "glibc"} ${config2.musl || config2.glibc}`;
          help.push(
            "- Update your OS:",
            `    Found ${libcFound}`,
            `    Requires ${libcRequires}`
          );
        } catch (_errEngines) {
        }
      }
      if (isLinux && /\/snap\/core[0-9]{2}/.test(messages)) {
        help.push(
          "- Remove the Node.js Snap, which does not support native modules",
          "    snap remove node"
        );
      }
      if (isMacOs && /Incompatible library version/.test(messages)) {
        help.push(
          "- Update Homebrew:",
          "    brew update && brew upgrade vips"
        );
      }
      if (errors.some((err) => err.code === "ERR_DLOPEN_DISABLED")) {
        help.push("- Run Node.js without using the --no-addons flag");
      }
      if (isWindows && /The specified procedure could not be found/.test(messages)) {
        help.push(
          "- Using the canvas package on Windows?",
          "    See https://sharp.pixelplumbing.com/install#canvas-and-windows",
          "- Check for outdated versions of sharp in the dependency tree:",
          "    npm ls sharp"
        );
      }
      help.push(
        "- Consult the installation documentation:",
        "    See https://sharp.pixelplumbing.com/install"
      );
      throw new Error(help.join("\n"));
    }
  }
});

// node_modules/sharp/lib/constructor.js
var require_constructor = __commonJS({
  "node_modules/sharp/lib/constructor.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var util2 = require_node_util();
    var stream = require_node_stream();
    var is = require_is();
    require_sharp();
    var debuglog = util2.debuglog("sharp");
    var queueListener = /* @__PURE__ */ __name((queueLength) => {
      Sharp.queue.emit("change", queueLength);
    }, "queueListener");
    var Sharp = /* @__PURE__ */ __name(function(input, options) {
      if (arguments.length === 1 && !is.defined(input)) {
        throw new Error("Invalid input");
      }
      if (!(this instanceof Sharp)) {
        return new Sharp(input, options);
      }
      stream.Duplex.call(this);
      this.options = {
        // resize options
        topOffsetPre: -1,
        leftOffsetPre: -1,
        widthPre: -1,
        heightPre: -1,
        topOffsetPost: -1,
        leftOffsetPost: -1,
        widthPost: -1,
        heightPost: -1,
        width: -1,
        height: -1,
        canvas: "crop",
        position: 0,
        resizeBackground: [0, 0, 0, 255],
        angle: 0,
        rotationAngle: 0,
        rotationBackground: [0, 0, 0, 255],
        rotateBefore: false,
        orientBefore: false,
        flip: false,
        flop: false,
        extendTop: 0,
        extendBottom: 0,
        extendLeft: 0,
        extendRight: 0,
        extendBackground: [0, 0, 0, 255],
        extendWith: "background",
        withoutEnlargement: false,
        withoutReduction: false,
        affineMatrix: [],
        affineBackground: [0, 0, 0, 255],
        affineIdx: 0,
        affineIdy: 0,
        affineOdx: 0,
        affineOdy: 0,
        affineInterpolator: this.constructor.interpolators.bilinear,
        kernel: "lanczos3",
        fastShrinkOnLoad: true,
        // operations
        tint: [-1, 0, 0, 0],
        flatten: false,
        flattenBackground: [0, 0, 0],
        unflatten: false,
        negate: false,
        negateAlpha: true,
        medianSize: 0,
        blurSigma: 0,
        precision: "integer",
        minAmpl: 0.2,
        sharpenSigma: 0,
        sharpenM1: 1,
        sharpenM2: 2,
        sharpenX1: 2,
        sharpenY2: 10,
        sharpenY3: 20,
        threshold: 0,
        thresholdGrayscale: true,
        trimBackground: [],
        trimThreshold: -1,
        trimLineArt: false,
        dilateWidth: 0,
        erodeWidth: 0,
        gamma: 0,
        gammaOut: 0,
        greyscale: false,
        normalise: false,
        normaliseLower: 1,
        normaliseUpper: 99,
        claheWidth: 0,
        claheHeight: 0,
        claheMaxSlope: 3,
        brightness: 1,
        saturation: 1,
        hue: 0,
        lightness: 0,
        booleanBufferIn: null,
        booleanFileIn: "",
        joinChannelIn: [],
        extractChannel: -1,
        removeAlpha: false,
        ensureAlpha: -1,
        colourspace: "srgb",
        colourspacePipeline: "last",
        composite: [],
        // output
        fileOut: "",
        formatOut: "input",
        streamOut: false,
        keepMetadata: 0,
        withMetadataOrientation: -1,
        withMetadataDensity: 0,
        withIccProfile: "",
        withExif: {},
        withExifMerge: true,
        withXmp: "",
        resolveWithObject: false,
        loop: -1,
        delay: [],
        // output format
        jpegQuality: 80,
        jpegProgressive: false,
        jpegChromaSubsampling: "4:2:0",
        jpegTrellisQuantisation: false,
        jpegOvershootDeringing: false,
        jpegOptimiseScans: false,
        jpegOptimiseCoding: true,
        jpegQuantisationTable: 0,
        pngProgressive: false,
        pngCompressionLevel: 6,
        pngAdaptiveFiltering: false,
        pngPalette: false,
        pngQuality: 100,
        pngEffort: 7,
        pngBitdepth: 8,
        pngDither: 1,
        jp2Quality: 80,
        jp2TileHeight: 512,
        jp2TileWidth: 512,
        jp2Lossless: false,
        jp2ChromaSubsampling: "4:4:4",
        webpQuality: 80,
        webpAlphaQuality: 100,
        webpLossless: false,
        webpNearLossless: false,
        webpSmartSubsample: false,
        webpSmartDeblock: false,
        webpPreset: "default",
        webpEffort: 4,
        webpMinSize: false,
        webpMixed: false,
        gifBitdepth: 8,
        gifEffort: 7,
        gifDither: 1,
        gifInterFrameMaxError: 0,
        gifInterPaletteMaxError: 3,
        gifKeepDuplicateFrames: false,
        gifReuse: true,
        gifProgressive: false,
        tiffQuality: 80,
        tiffCompression: "jpeg",
        tiffBigtiff: false,
        tiffPredictor: "horizontal",
        tiffPyramid: false,
        tiffMiniswhite: false,
        tiffBitdepth: 8,
        tiffTile: false,
        tiffTileHeight: 256,
        tiffTileWidth: 256,
        tiffXres: 1,
        tiffYres: 1,
        tiffResolutionUnit: "inch",
        heifQuality: 50,
        heifLossless: false,
        heifCompression: "av1",
        heifEffort: 4,
        heifChromaSubsampling: "4:4:4",
        heifBitdepth: 8,
        jxlDistance: 1,
        jxlDecodingTier: 0,
        jxlEffort: 7,
        jxlLossless: false,
        rawDepth: "uchar",
        tileSize: 256,
        tileOverlap: 0,
        tileContainer: "fs",
        tileLayout: "dz",
        tileFormat: "last",
        tileDepth: "last",
        tileAngle: 0,
        tileSkipBlanks: -1,
        tileBackground: [255, 255, 255, 255],
        tileCentre: false,
        tileId: "https://example.com/iiif",
        tileBasename: "",
        timeoutSeconds: 0,
        linearA: [],
        linearB: [],
        pdfBackground: [255, 255, 255, 255],
        // Function to notify of libvips warnings
        debuglog: /* @__PURE__ */ __name((warning) => {
          this.emit("warning", warning);
          debuglog(warning);
        }, "debuglog"),
        // Function to notify of queue length changes
        queueListener
      };
      this.options.input = this._createInputDescriptor(input, options, { allowStream: true });
      return this;
    }, "Sharp");
    Object.setPrototypeOf(Sharp.prototype, stream.Duplex.prototype);
    Object.setPrototypeOf(Sharp, stream.Duplex);
    function clone() {
      const clone2 = this.constructor.call();
      const { debuglog: debuglog2, queueListener: queueListener2, ...options } = this.options;
      clone2.options = structuredClone(options);
      clone2.options.debuglog = debuglog2;
      clone2.options.queueListener = queueListener2;
      if (this._isStreamInput()) {
        this.on("finish", () => {
          this._flattenBufferIn();
          clone2.options.input.buffer = this.options.input.buffer;
          clone2.emit("finish");
        });
      }
      return clone2;
    }
    __name(clone, "clone");
    Object.assign(Sharp.prototype, { clone });
    module.exports = Sharp;
  }
});

// node_modules/sharp/lib/input.js
var require_input = __commonJS({
  "node_modules/sharp/lib/input.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var is = require_is();
    var sharp2 = require_sharp();
    var align = {
      left: "low",
      top: "low",
      low: "low",
      center: "centre",
      centre: "centre",
      right: "high",
      bottom: "high",
      high: "high"
    };
    var inputStreamParameters = [
      // Limits and error handling
      "failOn",
      "limitInputPixels",
      "unlimited",
      // Format-generic
      "animated",
      "autoOrient",
      "density",
      "ignoreIcc",
      "page",
      "pages",
      "sequentialRead",
      // Format-specific
      "jp2",
      "openSlide",
      "pdf",
      "raw",
      "svg",
      "tiff",
      // Deprecated
      "failOnError",
      "openSlideLevel",
      "pdfBackground",
      "tiffSubifd"
    ];
    function _inputOptionsFromObject(obj) {
      const params = inputStreamParameters.filter((p) => is.defined(obj[p])).map((p) => [p, obj[p]]);
      return params.length ? Object.fromEntries(params) : void 0;
    }
    __name(_inputOptionsFromObject, "_inputOptionsFromObject");
    function _createInputDescriptor(input, inputOptions, containerOptions) {
      const inputDescriptor = {
        autoOrient: false,
        failOn: "warning",
        limitInputPixels: 16383 ** 2,
        ignoreIcc: false,
        unlimited: false,
        sequentialRead: true
      };
      if (is.string(input)) {
        inputDescriptor.file = input;
      } else if (is.buffer(input)) {
        if (input.length === 0) {
          throw Error("Input Buffer is empty");
        }
        inputDescriptor.buffer = input;
      } else if (is.arrayBuffer(input)) {
        if (input.byteLength === 0) {
          throw Error("Input bit Array is empty");
        }
        inputDescriptor.buffer = Buffer.from(input, 0, input.byteLength);
      } else if (is.typedArray(input)) {
        if (input.length === 0) {
          throw Error("Input Bit Array is empty");
        }
        inputDescriptor.buffer = Buffer.from(input.buffer, input.byteOffset, input.byteLength);
      } else if (is.plainObject(input) && !is.defined(inputOptions)) {
        inputOptions = input;
        if (_inputOptionsFromObject(inputOptions)) {
          inputDescriptor.buffer = [];
        }
      } else if (!is.defined(input) && !is.defined(inputOptions) && is.object(containerOptions) && containerOptions.allowStream) {
        inputDescriptor.buffer = [];
      } else if (Array.isArray(input)) {
        if (input.length > 1) {
          if (!this.options.joining) {
            this.options.joining = true;
            this.options.join = input.map((i2) => this._createInputDescriptor(i2));
          } else {
            throw new Error("Recursive join is unsupported");
          }
        } else {
          throw new Error("Expected at least two images to join");
        }
      } else {
        throw new Error(`Unsupported input '${input}' of type ${typeof input}${is.defined(inputOptions) ? ` when also providing options of type ${typeof inputOptions}` : ""}`);
      }
      if (is.object(inputOptions)) {
        if (is.defined(inputOptions.failOnError)) {
          if (is.bool(inputOptions.failOnError)) {
            inputDescriptor.failOn = inputOptions.failOnError ? "warning" : "none";
          } else {
            throw is.invalidParameterError("failOnError", "boolean", inputOptions.failOnError);
          }
        }
        if (is.defined(inputOptions.failOn)) {
          if (is.string(inputOptions.failOn) && is.inArray(inputOptions.failOn, ["none", "truncated", "error", "warning"])) {
            inputDescriptor.failOn = inputOptions.failOn;
          } else {
            throw is.invalidParameterError("failOn", "one of: none, truncated, error, warning", inputOptions.failOn);
          }
        }
        if (is.defined(inputOptions.autoOrient)) {
          if (is.bool(inputOptions.autoOrient)) {
            inputDescriptor.autoOrient = inputOptions.autoOrient;
          } else {
            throw is.invalidParameterError("autoOrient", "boolean", inputOptions.autoOrient);
          }
        }
        if (is.defined(inputOptions.density)) {
          if (is.inRange(inputOptions.density, 1, 1e5)) {
            inputDescriptor.density = inputOptions.density;
          } else {
            throw is.invalidParameterError("density", "number between 1 and 100000", inputOptions.density);
          }
        }
        if (is.defined(inputOptions.ignoreIcc)) {
          if (is.bool(inputOptions.ignoreIcc)) {
            inputDescriptor.ignoreIcc = inputOptions.ignoreIcc;
          } else {
            throw is.invalidParameterError("ignoreIcc", "boolean", inputOptions.ignoreIcc);
          }
        }
        if (is.defined(inputOptions.limitInputPixels)) {
          if (is.bool(inputOptions.limitInputPixels)) {
            inputDescriptor.limitInputPixels = inputOptions.limitInputPixels ? 16383 ** 2 : 0;
          } else if (is.integer(inputOptions.limitInputPixels) && is.inRange(inputOptions.limitInputPixels, 0, Number.MAX_SAFE_INTEGER)) {
            inputDescriptor.limitInputPixels = inputOptions.limitInputPixels;
          } else {
            throw is.invalidParameterError("limitInputPixels", "positive integer", inputOptions.limitInputPixels);
          }
        }
        if (is.defined(inputOptions.unlimited)) {
          if (is.bool(inputOptions.unlimited)) {
            inputDescriptor.unlimited = inputOptions.unlimited;
          } else {
            throw is.invalidParameterError("unlimited", "boolean", inputOptions.unlimited);
          }
        }
        if (is.defined(inputOptions.sequentialRead)) {
          if (is.bool(inputOptions.sequentialRead)) {
            inputDescriptor.sequentialRead = inputOptions.sequentialRead;
          } else {
            throw is.invalidParameterError("sequentialRead", "boolean", inputOptions.sequentialRead);
          }
        }
        if (is.defined(inputOptions.raw)) {
          if (is.object(inputOptions.raw) && is.integer(inputOptions.raw.width) && inputOptions.raw.width > 0 && is.integer(inputOptions.raw.height) && inputOptions.raw.height > 0 && is.integer(inputOptions.raw.channels) && is.inRange(inputOptions.raw.channels, 1, 4)) {
            inputDescriptor.rawWidth = inputOptions.raw.width;
            inputDescriptor.rawHeight = inputOptions.raw.height;
            inputDescriptor.rawChannels = inputOptions.raw.channels;
            switch (input.constructor) {
              case Uint8Array:
              case Uint8ClampedArray:
                inputDescriptor.rawDepth = "uchar";
                break;
              case Int8Array:
                inputDescriptor.rawDepth = "char";
                break;
              case Uint16Array:
                inputDescriptor.rawDepth = "ushort";
                break;
              case Int16Array:
                inputDescriptor.rawDepth = "short";
                break;
              case Uint32Array:
                inputDescriptor.rawDepth = "uint";
                break;
              case Int32Array:
                inputDescriptor.rawDepth = "int";
                break;
              case Float32Array:
                inputDescriptor.rawDepth = "float";
                break;
              case Float64Array:
                inputDescriptor.rawDepth = "double";
                break;
              default:
                inputDescriptor.rawDepth = "uchar";
                break;
            }
          } else {
            throw new Error("Expected width, height and channels for raw pixel input");
          }
          inputDescriptor.rawPremultiplied = false;
          if (is.defined(inputOptions.raw.premultiplied)) {
            if (is.bool(inputOptions.raw.premultiplied)) {
              inputDescriptor.rawPremultiplied = inputOptions.raw.premultiplied;
            } else {
              throw is.invalidParameterError("raw.premultiplied", "boolean", inputOptions.raw.premultiplied);
            }
          }
          inputDescriptor.rawPageHeight = 0;
          if (is.defined(inputOptions.raw.pageHeight)) {
            if (is.integer(inputOptions.raw.pageHeight) && inputOptions.raw.pageHeight > 0 && inputOptions.raw.pageHeight <= inputOptions.raw.height) {
              if (inputOptions.raw.height % inputOptions.raw.pageHeight !== 0) {
                throw new Error(`Expected raw.height ${inputOptions.raw.height} to be a multiple of raw.pageHeight ${inputOptions.raw.pageHeight}`);
              }
              inputDescriptor.rawPageHeight = inputOptions.raw.pageHeight;
            } else {
              throw is.invalidParameterError("raw.pageHeight", "positive integer", inputOptions.raw.pageHeight);
            }
          }
        }
        if (is.defined(inputOptions.animated)) {
          if (is.bool(inputOptions.animated)) {
            inputDescriptor.pages = inputOptions.animated ? -1 : 1;
          } else {
            throw is.invalidParameterError("animated", "boolean", inputOptions.animated);
          }
        }
        if (is.defined(inputOptions.pages)) {
          if (is.integer(inputOptions.pages) && is.inRange(inputOptions.pages, -1, 1e5)) {
            inputDescriptor.pages = inputOptions.pages;
          } else {
            throw is.invalidParameterError("pages", "integer between -1 and 100000", inputOptions.pages);
          }
        }
        if (is.defined(inputOptions.page)) {
          if (is.integer(inputOptions.page) && is.inRange(inputOptions.page, 0, 1e5)) {
            inputDescriptor.page = inputOptions.page;
          } else {
            throw is.invalidParameterError("page", "integer between 0 and 100000", inputOptions.page);
          }
        }
        if (is.object(inputOptions.openSlide) && is.defined(inputOptions.openSlide.level)) {
          if (is.integer(inputOptions.openSlide.level) && is.inRange(inputOptions.openSlide.level, 0, 256)) {
            inputDescriptor.openSlideLevel = inputOptions.openSlide.level;
          } else {
            throw is.invalidParameterError("openSlide.level", "integer between 0 and 256", inputOptions.openSlide.level);
          }
        } else if (is.defined(inputOptions.level)) {
          if (is.integer(inputOptions.level) && is.inRange(inputOptions.level, 0, 256)) {
            inputDescriptor.openSlideLevel = inputOptions.level;
          } else {
            throw is.invalidParameterError("level", "integer between 0 and 256", inputOptions.level);
          }
        }
        if (is.object(inputOptions.tiff) && is.defined(inputOptions.tiff.subifd)) {
          if (is.integer(inputOptions.tiff.subifd) && is.inRange(inputOptions.tiff.subifd, -1, 1e5)) {
            inputDescriptor.tiffSubifd = inputOptions.tiff.subifd;
          } else {
            throw is.invalidParameterError("tiff.subifd", "integer between -1 and 100000", inputOptions.tiff.subifd);
          }
        } else if (is.defined(inputOptions.subifd)) {
          if (is.integer(inputOptions.subifd) && is.inRange(inputOptions.subifd, -1, 1e5)) {
            inputDescriptor.tiffSubifd = inputOptions.subifd;
          } else {
            throw is.invalidParameterError("subifd", "integer between -1 and 100000", inputOptions.subifd);
          }
        }
        if (is.object(inputOptions.svg)) {
          if (is.defined(inputOptions.svg.stylesheet)) {
            if (is.string(inputOptions.svg.stylesheet)) {
              inputDescriptor.svgStylesheet = inputOptions.svg.stylesheet;
            } else {
              throw is.invalidParameterError("svg.stylesheet", "string", inputOptions.svg.stylesheet);
            }
          }
          if (is.defined(inputOptions.svg.highBitdepth)) {
            if (is.bool(inputOptions.svg.highBitdepth)) {
              inputDescriptor.svgHighBitdepth = inputOptions.svg.highBitdepth;
            } else {
              throw is.invalidParameterError("svg.highBitdepth", "boolean", inputOptions.svg.highBitdepth);
            }
          }
        }
        if (is.object(inputOptions.pdf) && is.defined(inputOptions.pdf.background)) {
          inputDescriptor.pdfBackground = this._getBackgroundColourOption(inputOptions.pdf.background);
        } else if (is.defined(inputOptions.pdfBackground)) {
          inputDescriptor.pdfBackground = this._getBackgroundColourOption(inputOptions.pdfBackground);
        }
        if (is.object(inputOptions.jp2) && is.defined(inputOptions.jp2.oneshot)) {
          if (is.bool(inputOptions.jp2.oneshot)) {
            inputDescriptor.jp2Oneshot = inputOptions.jp2.oneshot;
          } else {
            throw is.invalidParameterError("jp2.oneshot", "boolean", inputOptions.jp2.oneshot);
          }
        }
        if (is.defined(inputOptions.create)) {
          if (is.object(inputOptions.create) && is.integer(inputOptions.create.width) && inputOptions.create.width > 0 && is.integer(inputOptions.create.height) && inputOptions.create.height > 0 && is.integer(inputOptions.create.channels)) {
            inputDescriptor.createWidth = inputOptions.create.width;
            inputDescriptor.createHeight = inputOptions.create.height;
            inputDescriptor.createChannels = inputOptions.create.channels;
            inputDescriptor.createPageHeight = 0;
            if (is.defined(inputOptions.create.pageHeight)) {
              if (is.integer(inputOptions.create.pageHeight) && inputOptions.create.pageHeight > 0 && inputOptions.create.pageHeight <= inputOptions.create.height) {
                if (inputOptions.create.height % inputOptions.create.pageHeight !== 0) {
                  throw new Error(`Expected create.height ${inputOptions.create.height} to be a multiple of create.pageHeight ${inputOptions.create.pageHeight}`);
                }
                inputDescriptor.createPageHeight = inputOptions.create.pageHeight;
              } else {
                throw is.invalidParameterError("create.pageHeight", "positive integer", inputOptions.create.pageHeight);
              }
            }
            if (is.defined(inputOptions.create.noise)) {
              if (!is.object(inputOptions.create.noise)) {
                throw new Error("Expected noise to be an object");
              }
              if (inputOptions.create.noise.type !== "gaussian") {
                throw new Error("Only gaussian noise is supported at the moment");
              }
              inputDescriptor.createNoiseType = inputOptions.create.noise.type;
              if (!is.inRange(inputOptions.create.channels, 1, 4)) {
                throw is.invalidParameterError("create.channels", "number between 1 and 4", inputOptions.create.channels);
              }
              inputDescriptor.createNoiseMean = 128;
              if (is.defined(inputOptions.create.noise.mean)) {
                if (is.number(inputOptions.create.noise.mean) && is.inRange(inputOptions.create.noise.mean, 0, 1e4)) {
                  inputDescriptor.createNoiseMean = inputOptions.create.noise.mean;
                } else {
                  throw is.invalidParameterError("create.noise.mean", "number between 0 and 10000", inputOptions.create.noise.mean);
                }
              }
              inputDescriptor.createNoiseSigma = 30;
              if (is.defined(inputOptions.create.noise.sigma)) {
                if (is.number(inputOptions.create.noise.sigma) && is.inRange(inputOptions.create.noise.sigma, 0, 1e4)) {
                  inputDescriptor.createNoiseSigma = inputOptions.create.noise.sigma;
                } else {
                  throw is.invalidParameterError("create.noise.sigma", "number between 0 and 10000", inputOptions.create.noise.sigma);
                }
              }
            } else if (is.defined(inputOptions.create.background)) {
              if (!is.inRange(inputOptions.create.channels, 3, 4)) {
                throw is.invalidParameterError("create.channels", "number between 3 and 4", inputOptions.create.channels);
              }
              inputDescriptor.createBackground = this._getBackgroundColourOption(inputOptions.create.background);
            } else {
              throw new Error("Expected valid noise or background to create a new input image");
            }
            delete inputDescriptor.buffer;
          } else {
            throw new Error("Expected valid width, height and channels to create a new input image");
          }
        }
        if (is.defined(inputOptions.text)) {
          if (is.object(inputOptions.text) && is.string(inputOptions.text.text)) {
            inputDescriptor.textValue = inputOptions.text.text;
            if (is.defined(inputOptions.text.height) && is.defined(inputOptions.text.dpi)) {
              throw new Error("Expected only one of dpi or height");
            }
            if (is.defined(inputOptions.text.font)) {
              if (is.string(inputOptions.text.font)) {
                inputDescriptor.textFont = inputOptions.text.font;
              } else {
                throw is.invalidParameterError("text.font", "string", inputOptions.text.font);
              }
            }
            if (is.defined(inputOptions.text.fontfile)) {
              if (is.string(inputOptions.text.fontfile)) {
                inputDescriptor.textFontfile = inputOptions.text.fontfile;
              } else {
                throw is.invalidParameterError("text.fontfile", "string", inputOptions.text.fontfile);
              }
            }
            if (is.defined(inputOptions.text.width)) {
              if (is.integer(inputOptions.text.width) && inputOptions.text.width > 0) {
                inputDescriptor.textWidth = inputOptions.text.width;
              } else {
                throw is.invalidParameterError("text.width", "positive integer", inputOptions.text.width);
              }
            }
            if (is.defined(inputOptions.text.height)) {
              if (is.integer(inputOptions.text.height) && inputOptions.text.height > 0) {
                inputDescriptor.textHeight = inputOptions.text.height;
              } else {
                throw is.invalidParameterError("text.height", "positive integer", inputOptions.text.height);
              }
            }
            if (is.defined(inputOptions.text.align)) {
              if (is.string(inputOptions.text.align) && is.string(this.constructor.align[inputOptions.text.align])) {
                inputDescriptor.textAlign = this.constructor.align[inputOptions.text.align];
              } else {
                throw is.invalidParameterError("text.align", "valid alignment", inputOptions.text.align);
              }
            }
            if (is.defined(inputOptions.text.justify)) {
              if (is.bool(inputOptions.text.justify)) {
                inputDescriptor.textJustify = inputOptions.text.justify;
              } else {
                throw is.invalidParameterError("text.justify", "boolean", inputOptions.text.justify);
              }
            }
            if (is.defined(inputOptions.text.dpi)) {
              if (is.integer(inputOptions.text.dpi) && is.inRange(inputOptions.text.dpi, 1, 1e6)) {
                inputDescriptor.textDpi = inputOptions.text.dpi;
              } else {
                throw is.invalidParameterError("text.dpi", "integer between 1 and 1000000", inputOptions.text.dpi);
              }
            }
            if (is.defined(inputOptions.text.rgba)) {
              if (is.bool(inputOptions.text.rgba)) {
                inputDescriptor.textRgba = inputOptions.text.rgba;
              } else {
                throw is.invalidParameterError("text.rgba", "bool", inputOptions.text.rgba);
              }
            }
            if (is.defined(inputOptions.text.spacing)) {
              if (is.integer(inputOptions.text.spacing) && is.inRange(inputOptions.text.spacing, -1e6, 1e6)) {
                inputDescriptor.textSpacing = inputOptions.text.spacing;
              } else {
                throw is.invalidParameterError("text.spacing", "integer between -1000000 and 1000000", inputOptions.text.spacing);
              }
            }
            if (is.defined(inputOptions.text.wrap)) {
              if (is.string(inputOptions.text.wrap) && is.inArray(inputOptions.text.wrap, ["word", "char", "word-char", "none"])) {
                inputDescriptor.textWrap = inputOptions.text.wrap;
              } else {
                throw is.invalidParameterError("text.wrap", "one of: word, char, word-char, none", inputOptions.text.wrap);
              }
            }
            delete inputDescriptor.buffer;
          } else {
            throw new Error("Expected a valid string to create an image with text.");
          }
        }
        if (is.defined(inputOptions.join)) {
          if (is.defined(this.options.join)) {
            if (is.defined(inputOptions.join.animated)) {
              if (is.bool(inputOptions.join.animated)) {
                inputDescriptor.joinAnimated = inputOptions.join.animated;
              } else {
                throw is.invalidParameterError("join.animated", "boolean", inputOptions.join.animated);
              }
            }
            if (is.defined(inputOptions.join.across)) {
              if (is.integer(inputOptions.join.across) && is.inRange(inputOptions.join.across, 1, 1e6)) {
                inputDescriptor.joinAcross = inputOptions.join.across;
              } else {
                throw is.invalidParameterError("join.across", "integer between 1 and 100000", inputOptions.join.across);
              }
            }
            if (is.defined(inputOptions.join.shim)) {
              if (is.integer(inputOptions.join.shim) && is.inRange(inputOptions.join.shim, 0, 1e6)) {
                inputDescriptor.joinShim = inputOptions.join.shim;
              } else {
                throw is.invalidParameterError("join.shim", "integer between 0 and 100000", inputOptions.join.shim);
              }
            }
            if (is.defined(inputOptions.join.background)) {
              inputDescriptor.joinBackground = this._getBackgroundColourOption(inputOptions.join.background);
            }
            if (is.defined(inputOptions.join.halign)) {
              if (is.string(inputOptions.join.halign) && is.string(this.constructor.align[inputOptions.join.halign])) {
                inputDescriptor.joinHalign = this.constructor.align[inputOptions.join.halign];
              } else {
                throw is.invalidParameterError("join.halign", "valid alignment", inputOptions.join.halign);
              }
            }
            if (is.defined(inputOptions.join.valign)) {
              if (is.string(inputOptions.join.valign) && is.string(this.constructor.align[inputOptions.join.valign])) {
                inputDescriptor.joinValign = this.constructor.align[inputOptions.join.valign];
              } else {
                throw is.invalidParameterError("join.valign", "valid alignment", inputOptions.join.valign);
              }
            }
          } else {
            throw new Error("Expected input to be an array of images to join");
          }
        }
      } else if (is.defined(inputOptions)) {
        throw new Error(`Invalid input options ${inputOptions}`);
      }
      return inputDescriptor;
    }
    __name(_createInputDescriptor, "_createInputDescriptor");
    function _write(chunk, _encoding, callback) {
      if (Array.isArray(this.options.input.buffer)) {
        if (is.buffer(chunk)) {
          if (this.options.input.buffer.length === 0) {
            this.on("finish", () => {
              this.streamInFinished = true;
            });
          }
          this.options.input.buffer.push(chunk);
          callback();
        } else {
          callback(new Error("Non-Buffer data on Writable Stream"));
        }
      } else {
        callback(new Error("Unexpected data on Writable Stream"));
      }
    }
    __name(_write, "_write");
    function _flattenBufferIn() {
      if (this._isStreamInput()) {
        this.options.input.buffer = Buffer.concat(this.options.input.buffer);
      }
    }
    __name(_flattenBufferIn, "_flattenBufferIn");
    function _isStreamInput() {
      return Array.isArray(this.options.input.buffer);
    }
    __name(_isStreamInput, "_isStreamInput");
    function metadata(callback) {
      const stack = Error();
      if (is.fn(callback)) {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp2.metadata(this.options, (err, metadata2) => {
              if (err) {
                callback(is.nativeError(err, stack));
              } else {
                callback(null, metadata2);
              }
            });
          });
        } else {
          sharp2.metadata(this.options, (err, metadata2) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, metadata2);
            }
          });
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            const finished = /* @__PURE__ */ __name(() => {
              this._flattenBufferIn();
              sharp2.metadata(this.options, (err, metadata2) => {
                if (err) {
                  reject(is.nativeError(err, stack));
                } else {
                  resolve(metadata2);
                }
              });
            }, "finished");
            if (this.writableFinished) {
              finished();
            } else {
              this.once("finish", finished);
            }
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp2.metadata(this.options, (err, metadata2) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                resolve(metadata2);
              }
            });
          });
        }
      }
    }
    __name(metadata, "metadata");
    function stats(callback) {
      const stack = Error();
      if (is.fn(callback)) {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp2.stats(this.options, (err, stats2) => {
              if (err) {
                callback(is.nativeError(err, stack));
              } else {
                callback(null, stats2);
              }
            });
          });
        } else {
          sharp2.stats(this.options, (err, stats2) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, stats2);
            }
          });
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            this.on("finish", function() {
              this._flattenBufferIn();
              sharp2.stats(this.options, (err, stats2) => {
                if (err) {
                  reject(is.nativeError(err, stack));
                } else {
                  resolve(stats2);
                }
              });
            });
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp2.stats(this.options, (err, stats2) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                resolve(stats2);
              }
            });
          });
        }
      }
    }
    __name(stats, "stats");
    module.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        // Private
        _inputOptionsFromObject,
        _createInputDescriptor,
        _write,
        _flattenBufferIn,
        _isStreamInput,
        // Public
        metadata,
        stats
      });
      Sharp.align = align;
    };
  }
});

// node_modules/sharp/lib/resize.js
var require_resize = __commonJS({
  "node_modules/sharp/lib/resize.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var is = require_is();
    var gravity = {
      center: 0,
      centre: 0,
      north: 1,
      east: 2,
      south: 3,
      west: 4,
      northeast: 5,
      southeast: 6,
      southwest: 7,
      northwest: 8
    };
    var position = {
      top: 1,
      right: 2,
      bottom: 3,
      left: 4,
      "right top": 5,
      "right bottom": 6,
      "left bottom": 7,
      "left top": 8
    };
    var extendWith = {
      background: "background",
      copy: "copy",
      repeat: "repeat",
      mirror: "mirror"
    };
    var strategy = {
      entropy: 16,
      attention: 17
    };
    var kernel = {
      nearest: "nearest",
      linear: "linear",
      cubic: "cubic",
      mitchell: "mitchell",
      lanczos2: "lanczos2",
      lanczos3: "lanczos3",
      mks2013: "mks2013",
      mks2021: "mks2021"
    };
    var fit = {
      contain: "contain",
      cover: "cover",
      fill: "fill",
      inside: "inside",
      outside: "outside"
    };
    var mapFitToCanvas = {
      contain: "embed",
      cover: "crop",
      fill: "ignore_aspect",
      inside: "max",
      outside: "min"
    };
    function isRotationExpected(options) {
      return options.angle % 360 !== 0 || options.rotationAngle !== 0;
    }
    __name(isRotationExpected, "isRotationExpected");
    function isResizeExpected(options) {
      return options.width !== -1 || options.height !== -1;
    }
    __name(isResizeExpected, "isResizeExpected");
    function resize(widthOrOptions, height, options) {
      if (isResizeExpected(this.options)) {
        this.options.debuglog("ignoring previous resize options");
      }
      if (this.options.widthPost !== -1) {
        this.options.debuglog("operation order will be: extract, resize, extract");
      }
      if (is.defined(widthOrOptions)) {
        if (is.object(widthOrOptions) && !is.defined(options)) {
          options = widthOrOptions;
        } else if (is.integer(widthOrOptions) && widthOrOptions > 0) {
          this.options.width = widthOrOptions;
        } else {
          throw is.invalidParameterError("width", "positive integer", widthOrOptions);
        }
      } else {
        this.options.width = -1;
      }
      if (is.defined(height)) {
        if (is.integer(height) && height > 0) {
          this.options.height = height;
        } else {
          throw is.invalidParameterError("height", "positive integer", height);
        }
      } else {
        this.options.height = -1;
      }
      if (is.object(options)) {
        if (is.defined(options.width)) {
          if (is.integer(options.width) && options.width > 0) {
            this.options.width = options.width;
          } else {
            throw is.invalidParameterError("width", "positive integer", options.width);
          }
        }
        if (is.defined(options.height)) {
          if (is.integer(options.height) && options.height > 0) {
            this.options.height = options.height;
          } else {
            throw is.invalidParameterError("height", "positive integer", options.height);
          }
        }
        if (is.defined(options.fit)) {
          const canvas = mapFitToCanvas[options.fit];
          if (is.string(canvas)) {
            this.options.canvas = canvas;
          } else {
            throw is.invalidParameterError("fit", "valid fit", options.fit);
          }
        }
        if (is.defined(options.position)) {
          const pos = is.integer(options.position) ? options.position : strategy[options.position] || position[options.position] || gravity[options.position];
          if (is.integer(pos) && (is.inRange(pos, 0, 8) || is.inRange(pos, 16, 17))) {
            this.options.position = pos;
          } else {
            throw is.invalidParameterError("position", "valid position/gravity/strategy", options.position);
          }
        }
        this._setBackgroundColourOption("resizeBackground", options.background);
        if (is.defined(options.kernel)) {
          if (is.string(kernel[options.kernel])) {
            this.options.kernel = kernel[options.kernel];
          } else {
            throw is.invalidParameterError("kernel", "valid kernel name", options.kernel);
          }
        }
        if (is.defined(options.withoutEnlargement)) {
          this._setBooleanOption("withoutEnlargement", options.withoutEnlargement);
        }
        if (is.defined(options.withoutReduction)) {
          this._setBooleanOption("withoutReduction", options.withoutReduction);
        }
        if (is.defined(options.fastShrinkOnLoad)) {
          this._setBooleanOption("fastShrinkOnLoad", options.fastShrinkOnLoad);
        }
      }
      if (isRotationExpected(this.options) && isResizeExpected(this.options)) {
        this.options.rotateBefore = true;
      }
      return this;
    }
    __name(resize, "resize");
    function extend(extend2) {
      if (is.integer(extend2) && extend2 > 0) {
        this.options.extendTop = extend2;
        this.options.extendBottom = extend2;
        this.options.extendLeft = extend2;
        this.options.extendRight = extend2;
      } else if (is.object(extend2)) {
        if (is.defined(extend2.top)) {
          if (is.integer(extend2.top) && extend2.top >= 0) {
            this.options.extendTop = extend2.top;
          } else {
            throw is.invalidParameterError("top", "positive integer", extend2.top);
          }
        }
        if (is.defined(extend2.bottom)) {
          if (is.integer(extend2.bottom) && extend2.bottom >= 0) {
            this.options.extendBottom = extend2.bottom;
          } else {
            throw is.invalidParameterError("bottom", "positive integer", extend2.bottom);
          }
        }
        if (is.defined(extend2.left)) {
          if (is.integer(extend2.left) && extend2.left >= 0) {
            this.options.extendLeft = extend2.left;
          } else {
            throw is.invalidParameterError("left", "positive integer", extend2.left);
          }
        }
        if (is.defined(extend2.right)) {
          if (is.integer(extend2.right) && extend2.right >= 0) {
            this.options.extendRight = extend2.right;
          } else {
            throw is.invalidParameterError("right", "positive integer", extend2.right);
          }
        }
        this._setBackgroundColourOption("extendBackground", extend2.background);
        if (is.defined(extend2.extendWith)) {
          if (is.string(extendWith[extend2.extendWith])) {
            this.options.extendWith = extendWith[extend2.extendWith];
          } else {
            throw is.invalidParameterError("extendWith", "one of: background, copy, repeat, mirror", extend2.extendWith);
          }
        }
      } else {
        throw is.invalidParameterError("extend", "integer or object", extend2);
      }
      return this;
    }
    __name(extend, "extend");
    function extract(options) {
      const suffix = isResizeExpected(this.options) || this.options.widthPre !== -1 ? "Post" : "Pre";
      if (this.options[`width${suffix}`] !== -1) {
        this.options.debuglog("ignoring previous extract options");
      }
      ["left", "top", "width", "height"].forEach(function(name) {
        const value = options[name];
        if (is.integer(value) && value >= 0) {
          this.options[name + (name === "left" || name === "top" ? "Offset" : "") + suffix] = value;
        } else {
          throw is.invalidParameterError(name, "integer", value);
        }
      }, this);
      if (isRotationExpected(this.options) && !isResizeExpected(this.options)) {
        if (this.options.widthPre === -1 || this.options.widthPost === -1) {
          this.options.rotateBefore = true;
        }
      }
      if (this.options.input.autoOrient) {
        this.options.orientBefore = true;
      }
      return this;
    }
    __name(extract, "extract");
    function trim(options) {
      this.options.trimThreshold = 10;
      if (is.defined(options)) {
        if (is.object(options)) {
          if (is.defined(options.background)) {
            this._setBackgroundColourOption("trimBackground", options.background);
          }
          if (is.defined(options.threshold)) {
            if (is.number(options.threshold) && options.threshold >= 0) {
              this.options.trimThreshold = options.threshold;
            } else {
              throw is.invalidParameterError("threshold", "positive number", options.threshold);
            }
          }
          if (is.defined(options.lineArt)) {
            this._setBooleanOption("trimLineArt", options.lineArt);
          }
        } else {
          throw is.invalidParameterError("trim", "object", options);
        }
      }
      if (isRotationExpected(this.options)) {
        this.options.rotateBefore = true;
      }
      return this;
    }
    __name(trim, "trim");
    module.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        resize,
        extend,
        extract,
        trim
      });
      Sharp.gravity = gravity;
      Sharp.strategy = strategy;
      Sharp.kernel = kernel;
      Sharp.fit = fit;
      Sharp.position = position;
    };
  }
});

// node_modules/sharp/lib/composite.js
var require_composite = __commonJS({
  "node_modules/sharp/lib/composite.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var is = require_is();
    var blend = {
      clear: "clear",
      source: "source",
      over: "over",
      in: "in",
      out: "out",
      atop: "atop",
      dest: "dest",
      "dest-over": "dest-over",
      "dest-in": "dest-in",
      "dest-out": "dest-out",
      "dest-atop": "dest-atop",
      xor: "xor",
      add: "add",
      saturate: "saturate",
      multiply: "multiply",
      screen: "screen",
      overlay: "overlay",
      darken: "darken",
      lighten: "lighten",
      "colour-dodge": "colour-dodge",
      "color-dodge": "colour-dodge",
      "colour-burn": "colour-burn",
      "color-burn": "colour-burn",
      "hard-light": "hard-light",
      "soft-light": "soft-light",
      difference: "difference",
      exclusion: "exclusion"
    };
    function composite(images) {
      if (!Array.isArray(images)) {
        throw is.invalidParameterError("images to composite", "array", images);
      }
      this.options.composite = images.map((image) => {
        if (!is.object(image)) {
          throw is.invalidParameterError("image to composite", "object", image);
        }
        const inputOptions = this._inputOptionsFromObject(image);
        const composite2 = {
          input: this._createInputDescriptor(image.input, inputOptions, { allowStream: false }),
          blend: "over",
          tile: false,
          left: 0,
          top: 0,
          hasOffset: false,
          gravity: 0,
          premultiplied: false
        };
        if (is.defined(image.blend)) {
          if (is.string(blend[image.blend])) {
            composite2.blend = blend[image.blend];
          } else {
            throw is.invalidParameterError("blend", "valid blend name", image.blend);
          }
        }
        if (is.defined(image.tile)) {
          if (is.bool(image.tile)) {
            composite2.tile = image.tile;
          } else {
            throw is.invalidParameterError("tile", "boolean", image.tile);
          }
        }
        if (is.defined(image.left)) {
          if (is.integer(image.left)) {
            composite2.left = image.left;
          } else {
            throw is.invalidParameterError("left", "integer", image.left);
          }
        }
        if (is.defined(image.top)) {
          if (is.integer(image.top)) {
            composite2.top = image.top;
          } else {
            throw is.invalidParameterError("top", "integer", image.top);
          }
        }
        if (is.defined(image.top) !== is.defined(image.left)) {
          throw new Error("Expected both left and top to be set");
        } else {
          composite2.hasOffset = is.integer(image.top) && is.integer(image.left);
        }
        if (is.defined(image.gravity)) {
          if (is.integer(image.gravity) && is.inRange(image.gravity, 0, 8)) {
            composite2.gravity = image.gravity;
          } else if (is.string(image.gravity) && is.integer(this.constructor.gravity[image.gravity])) {
            composite2.gravity = this.constructor.gravity[image.gravity];
          } else {
            throw is.invalidParameterError("gravity", "valid gravity", image.gravity);
          }
        }
        if (is.defined(image.premultiplied)) {
          if (is.bool(image.premultiplied)) {
            composite2.premultiplied = image.premultiplied;
          } else {
            throw is.invalidParameterError("premultiplied", "boolean", image.premultiplied);
          }
        }
        return composite2;
      });
      return this;
    }
    __name(composite, "composite");
    module.exports = (Sharp) => {
      Sharp.prototype.composite = composite;
      Sharp.blend = blend;
    };
  }
});

// node_modules/sharp/lib/operation.js
var require_operation = __commonJS({
  "node_modules/sharp/lib/operation.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var is = require_is();
    var vipsPrecision = {
      integer: "integer",
      float: "float",
      approximate: "approximate"
    };
    function rotate(angle, options) {
      if (!is.defined(angle)) {
        return this.autoOrient();
      }
      if (this.options.angle || this.options.rotationAngle) {
        this.options.debuglog("ignoring previous rotate options");
        this.options.angle = 0;
        this.options.rotationAngle = 0;
      }
      if (is.integer(angle) && !(angle % 90)) {
        this.options.angle = angle;
      } else if (is.number(angle)) {
        this.options.rotationAngle = angle;
        if (is.object(options) && options.background) {
          this._setBackgroundColourOption("rotationBackground", options.background);
        }
      } else {
        throw is.invalidParameterError("angle", "numeric", angle);
      }
      return this;
    }
    __name(rotate, "rotate");
    function autoOrient() {
      this.options.input.autoOrient = true;
      return this;
    }
    __name(autoOrient, "autoOrient");
    function flip(flip2) {
      this.options.flip = is.bool(flip2) ? flip2 : true;
      return this;
    }
    __name(flip, "flip");
    function flop(flop2) {
      this.options.flop = is.bool(flop2) ? flop2 : true;
      return this;
    }
    __name(flop, "flop");
    function affine(matrix, options) {
      const flatMatrix = [].concat(...matrix);
      if (flatMatrix.length === 4 && flatMatrix.every(is.number)) {
        this.options.affineMatrix = flatMatrix;
      } else {
        throw is.invalidParameterError("matrix", "1x4 or 2x2 array", matrix);
      }
      if (is.defined(options)) {
        if (is.object(options)) {
          this._setBackgroundColourOption("affineBackground", options.background);
          if (is.defined(options.idx)) {
            if (is.number(options.idx)) {
              this.options.affineIdx = options.idx;
            } else {
              throw is.invalidParameterError("options.idx", "number", options.idx);
            }
          }
          if (is.defined(options.idy)) {
            if (is.number(options.idy)) {
              this.options.affineIdy = options.idy;
            } else {
              throw is.invalidParameterError("options.idy", "number", options.idy);
            }
          }
          if (is.defined(options.odx)) {
            if (is.number(options.odx)) {
              this.options.affineOdx = options.odx;
            } else {
              throw is.invalidParameterError("options.odx", "number", options.odx);
            }
          }
          if (is.defined(options.ody)) {
            if (is.number(options.ody)) {
              this.options.affineOdy = options.ody;
            } else {
              throw is.invalidParameterError("options.ody", "number", options.ody);
            }
          }
          if (is.defined(options.interpolator)) {
            if (is.inArray(options.interpolator, Object.values(this.constructor.interpolators))) {
              this.options.affineInterpolator = options.interpolator;
            } else {
              throw is.invalidParameterError("options.interpolator", "valid interpolator name", options.interpolator);
            }
          }
        } else {
          throw is.invalidParameterError("options", "object", options);
        }
      }
      return this;
    }
    __name(affine, "affine");
    function sharpen(options, flat, jagged) {
      if (!is.defined(options)) {
        this.options.sharpenSigma = -1;
      } else if (is.bool(options)) {
        this.options.sharpenSigma = options ? -1 : 0;
      } else if (is.number(options) && is.inRange(options, 0.01, 1e4)) {
        this.options.sharpenSigma = options;
        if (is.defined(flat)) {
          if (is.number(flat) && is.inRange(flat, 0, 1e4)) {
            this.options.sharpenM1 = flat;
          } else {
            throw is.invalidParameterError("flat", "number between 0 and 10000", flat);
          }
        }
        if (is.defined(jagged)) {
          if (is.number(jagged) && is.inRange(jagged, 0, 1e4)) {
            this.options.sharpenM2 = jagged;
          } else {
            throw is.invalidParameterError("jagged", "number between 0 and 10000", jagged);
          }
        }
      } else if (is.plainObject(options)) {
        if (is.number(options.sigma) && is.inRange(options.sigma, 1e-6, 10)) {
          this.options.sharpenSigma = options.sigma;
        } else {
          throw is.invalidParameterError("options.sigma", "number between 0.000001 and 10", options.sigma);
        }
        if (is.defined(options.m1)) {
          if (is.number(options.m1) && is.inRange(options.m1, 0, 1e6)) {
            this.options.sharpenM1 = options.m1;
          } else {
            throw is.invalidParameterError("options.m1", "number between 0 and 1000000", options.m1);
          }
        }
        if (is.defined(options.m2)) {
          if (is.number(options.m2) && is.inRange(options.m2, 0, 1e6)) {
            this.options.sharpenM2 = options.m2;
          } else {
            throw is.invalidParameterError("options.m2", "number between 0 and 1000000", options.m2);
          }
        }
        if (is.defined(options.x1)) {
          if (is.number(options.x1) && is.inRange(options.x1, 0, 1e6)) {
            this.options.sharpenX1 = options.x1;
          } else {
            throw is.invalidParameterError("options.x1", "number between 0 and 1000000", options.x1);
          }
        }
        if (is.defined(options.y2)) {
          if (is.number(options.y2) && is.inRange(options.y2, 0, 1e6)) {
            this.options.sharpenY2 = options.y2;
          } else {
            throw is.invalidParameterError("options.y2", "number between 0 and 1000000", options.y2);
          }
        }
        if (is.defined(options.y3)) {
          if (is.number(options.y3) && is.inRange(options.y3, 0, 1e6)) {
            this.options.sharpenY3 = options.y3;
          } else {
            throw is.invalidParameterError("options.y3", "number between 0 and 1000000", options.y3);
          }
        }
      } else {
        throw is.invalidParameterError("sigma", "number between 0.01 and 10000", options);
      }
      return this;
    }
    __name(sharpen, "sharpen");
    function median(size) {
      if (!is.defined(size)) {
        this.options.medianSize = 3;
      } else if (is.integer(size) && is.inRange(size, 1, 1e3)) {
        this.options.medianSize = size;
      } else {
        throw is.invalidParameterError("size", "integer between 1 and 1000", size);
      }
      return this;
    }
    __name(median, "median");
    function blur(options) {
      let sigma;
      if (is.number(options)) {
        sigma = options;
      } else if (is.plainObject(options)) {
        if (!is.number(options.sigma)) {
          throw is.invalidParameterError("options.sigma", "number between 0.3 and 1000", sigma);
        }
        sigma = options.sigma;
        if ("precision" in options) {
          if (is.string(vipsPrecision[options.precision])) {
            this.options.precision = vipsPrecision[options.precision];
          } else {
            throw is.invalidParameterError("precision", "one of: integer, float, approximate", options.precision);
          }
        }
        if ("minAmplitude" in options) {
          if (is.number(options.minAmplitude) && is.inRange(options.minAmplitude, 1e-3, 1)) {
            this.options.minAmpl = options.minAmplitude;
          } else {
            throw is.invalidParameterError("minAmplitude", "number between 0.001 and 1", options.minAmplitude);
          }
        }
      }
      if (!is.defined(options)) {
        this.options.blurSigma = -1;
      } else if (is.bool(options)) {
        this.options.blurSigma = options ? -1 : 0;
      } else if (is.number(sigma) && is.inRange(sigma, 0.3, 1e3)) {
        this.options.blurSigma = sigma;
      } else {
        throw is.invalidParameterError("sigma", "number between 0.3 and 1000", sigma);
      }
      return this;
    }
    __name(blur, "blur");
    function dilate(width) {
      if (!is.defined(width)) {
        this.options.dilateWidth = 1;
      } else if (is.integer(width) && width > 0) {
        this.options.dilateWidth = width;
      } else {
        throw is.invalidParameterError("dilate", "positive integer", dilate);
      }
      return this;
    }
    __name(dilate, "dilate");
    function erode(width) {
      if (!is.defined(width)) {
        this.options.erodeWidth = 1;
      } else if (is.integer(width) && width > 0) {
        this.options.erodeWidth = width;
      } else {
        throw is.invalidParameterError("erode", "positive integer", erode);
      }
      return this;
    }
    __name(erode, "erode");
    function flatten(options) {
      this.options.flatten = is.bool(options) ? options : true;
      if (is.object(options)) {
        this._setBackgroundColourOption("flattenBackground", options.background);
      }
      return this;
    }
    __name(flatten, "flatten");
    function unflatten3() {
      this.options.unflatten = true;
      return this;
    }
    __name(unflatten3, "unflatten");
    function gamma(gamma2, gammaOut) {
      if (!is.defined(gamma2)) {
        this.options.gamma = 2.2;
      } else if (is.number(gamma2) && is.inRange(gamma2, 1, 3)) {
        this.options.gamma = gamma2;
      } else {
        throw is.invalidParameterError("gamma", "number between 1.0 and 3.0", gamma2);
      }
      if (!is.defined(gammaOut)) {
        this.options.gammaOut = this.options.gamma;
      } else if (is.number(gammaOut) && is.inRange(gammaOut, 1, 3)) {
        this.options.gammaOut = gammaOut;
      } else {
        throw is.invalidParameterError("gammaOut", "number between 1.0 and 3.0", gammaOut);
      }
      return this;
    }
    __name(gamma, "gamma");
    function negate(options) {
      this.options.negate = is.bool(options) ? options : true;
      if (is.plainObject(options) && "alpha" in options) {
        if (!is.bool(options.alpha)) {
          throw is.invalidParameterError("alpha", "should be boolean value", options.alpha);
        } else {
          this.options.negateAlpha = options.alpha;
        }
      }
      return this;
    }
    __name(negate, "negate");
    function normalise(options) {
      if (is.plainObject(options)) {
        if (is.defined(options.lower)) {
          if (is.number(options.lower) && is.inRange(options.lower, 0, 99)) {
            this.options.normaliseLower = options.lower;
          } else {
            throw is.invalidParameterError("lower", "number between 0 and 99", options.lower);
          }
        }
        if (is.defined(options.upper)) {
          if (is.number(options.upper) && is.inRange(options.upper, 1, 100)) {
            this.options.normaliseUpper = options.upper;
          } else {
            throw is.invalidParameterError("upper", "number between 1 and 100", options.upper);
          }
        }
      }
      if (this.options.normaliseLower >= this.options.normaliseUpper) {
        throw is.invalidParameterError(
          "range",
          "lower to be less than upper",
          `${this.options.normaliseLower} >= ${this.options.normaliseUpper}`
        );
      }
      this.options.normalise = true;
      return this;
    }
    __name(normalise, "normalise");
    function normalize(options) {
      return this.normalise(options);
    }
    __name(normalize, "normalize");
    function clahe(options) {
      if (is.plainObject(options)) {
        if (is.integer(options.width) && options.width > 0) {
          this.options.claheWidth = options.width;
        } else {
          throw is.invalidParameterError("width", "integer greater than zero", options.width);
        }
        if (is.integer(options.height) && options.height > 0) {
          this.options.claheHeight = options.height;
        } else {
          throw is.invalidParameterError("height", "integer greater than zero", options.height);
        }
        if (is.defined(options.maxSlope)) {
          if (is.integer(options.maxSlope) && is.inRange(options.maxSlope, 0, 100)) {
            this.options.claheMaxSlope = options.maxSlope;
          } else {
            throw is.invalidParameterError("maxSlope", "integer between 0 and 100", options.maxSlope);
          }
        }
      } else {
        throw is.invalidParameterError("options", "plain object", options);
      }
      return this;
    }
    __name(clahe, "clahe");
    function convolve(kernel) {
      if (!is.object(kernel) || !Array.isArray(kernel.kernel) || !is.integer(kernel.width) || !is.integer(kernel.height) || !is.inRange(kernel.width, 3, 1001) || !is.inRange(kernel.height, 3, 1001) || kernel.height * kernel.width !== kernel.kernel.length) {
        throw new Error("Invalid convolution kernel");
      }
      if (!is.integer(kernel.scale)) {
        kernel.scale = kernel.kernel.reduce((a2, b) => a2 + b, 0);
      }
      if (kernel.scale < 1) {
        kernel.scale = 1;
      }
      if (!is.integer(kernel.offset)) {
        kernel.offset = 0;
      }
      this.options.convKernel = kernel;
      return this;
    }
    __name(convolve, "convolve");
    function threshold(threshold2, options) {
      if (!is.defined(threshold2)) {
        this.options.threshold = 128;
      } else if (is.bool(threshold2)) {
        this.options.threshold = threshold2 ? 128 : 0;
      } else if (is.integer(threshold2) && is.inRange(threshold2, 0, 255)) {
        this.options.threshold = threshold2;
      } else {
        throw is.invalidParameterError("threshold", "integer between 0 and 255", threshold2);
      }
      if (!is.object(options) || options.greyscale === true || options.grayscale === true) {
        this.options.thresholdGrayscale = true;
      } else {
        this.options.thresholdGrayscale = false;
      }
      return this;
    }
    __name(threshold, "threshold");
    function boolean(operand, operator, options) {
      this.options.boolean = this._createInputDescriptor(operand, options);
      if (is.string(operator) && is.inArray(operator, ["and", "or", "eor"])) {
        this.options.booleanOp = operator;
      } else {
        throw is.invalidParameterError("operator", "one of: and, or, eor", operator);
      }
      return this;
    }
    __name(boolean, "boolean");
    function linear(a2, b) {
      if (!is.defined(a2) && is.number(b)) {
        a2 = 1;
      } else if (is.number(a2) && !is.defined(b)) {
        b = 0;
      }
      if (!is.defined(a2)) {
        this.options.linearA = [];
      } else if (is.number(a2)) {
        this.options.linearA = [a2];
      } else if (Array.isArray(a2) && a2.length && a2.every(is.number)) {
        this.options.linearA = a2;
      } else {
        throw is.invalidParameterError("a", "number or array of numbers", a2);
      }
      if (!is.defined(b)) {
        this.options.linearB = [];
      } else if (is.number(b)) {
        this.options.linearB = [b];
      } else if (Array.isArray(b) && b.length && b.every(is.number)) {
        this.options.linearB = b;
      } else {
        throw is.invalidParameterError("b", "number or array of numbers", b);
      }
      if (this.options.linearA.length !== this.options.linearB.length) {
        throw new Error("Expected a and b to be arrays of the same length");
      }
      return this;
    }
    __name(linear, "linear");
    function recomb(inputMatrix) {
      if (!Array.isArray(inputMatrix)) {
        throw is.invalidParameterError("inputMatrix", "array", inputMatrix);
      }
      if (inputMatrix.length !== 3 && inputMatrix.length !== 4) {
        throw is.invalidParameterError("inputMatrix", "3x3 or 4x4 array", inputMatrix.length);
      }
      const recombMatrix = inputMatrix.flat().map(Number);
      if (recombMatrix.length !== 9 && recombMatrix.length !== 16) {
        throw is.invalidParameterError("inputMatrix", "cardinality of 9 or 16", recombMatrix.length);
      }
      this.options.recombMatrix = recombMatrix;
      return this;
    }
    __name(recomb, "recomb");
    function modulate(options) {
      if (!is.plainObject(options)) {
        throw is.invalidParameterError("options", "plain object", options);
      }
      if ("brightness" in options) {
        if (is.number(options.brightness) && options.brightness >= 0) {
          this.options.brightness = options.brightness;
        } else {
          throw is.invalidParameterError("brightness", "number above zero", options.brightness);
        }
      }
      if ("saturation" in options) {
        if (is.number(options.saturation) && options.saturation >= 0) {
          this.options.saturation = options.saturation;
        } else {
          throw is.invalidParameterError("saturation", "number above zero", options.saturation);
        }
      }
      if ("hue" in options) {
        if (is.integer(options.hue)) {
          this.options.hue = options.hue % 360;
        } else {
          throw is.invalidParameterError("hue", "number", options.hue);
        }
      }
      if ("lightness" in options) {
        if (is.number(options.lightness)) {
          this.options.lightness = options.lightness;
        } else {
          throw is.invalidParameterError("lightness", "number", options.lightness);
        }
      }
      return this;
    }
    __name(modulate, "modulate");
    module.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        autoOrient,
        rotate,
        flip,
        flop,
        affine,
        sharpen,
        erode,
        dilate,
        median,
        blur,
        flatten,
        unflatten: unflatten3,
        gamma,
        negate,
        normalise,
        normalize,
        clahe,
        convolve,
        threshold,
        boolean,
        linear,
        recomb,
        modulate
      });
    };
  }
});

// node_modules/@img/colour/color.cjs
var require_color = __commonJS({
  "node_modules/@img/colour/color.cjs"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var index_exports = {};
    __export2(index_exports, {
      default: /* @__PURE__ */ __name(() => index_default, "default")
    });
    module.exports = __toCommonJS(index_exports);
    var color_name_default = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    };
    var reverseNames = /* @__PURE__ */ Object.create(null);
    for (const name in color_name_default) {
      if (Object.hasOwn(color_name_default, name)) {
        reverseNames[color_name_default[name]] = name;
      }
    }
    var cs = {
      to: {},
      get: {}
    };
    cs.get = function(string) {
      const prefix = string.slice(0, 3).toLowerCase();
      let value;
      let model;
      switch (prefix) {
        case "hsl": {
          value = cs.get.hsl(string);
          model = "hsl";
          break;
        }
        case "hwb": {
          value = cs.get.hwb(string);
          model = "hwb";
          break;
        }
        default: {
          value = cs.get.rgb(string);
          model = "rgb";
          break;
        }
      }
      if (!value) {
        return null;
      }
      return { model, value };
    };
    cs.get.rgb = function(string) {
      if (!string) {
        return null;
      }
      const abbr = /^#([a-f\d]{3,4})$/i;
      const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
      const rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
      const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/;
      const keyword = /^(\w+)$/;
      let rgb = [0, 0, 0, 1];
      let match;
      let i2;
      let hexAlpha;
      if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (i2 = 0; i2 < 3; i2++) {
          const i22 = i2 * 2;
          rgb[i2] = Number.parseInt(match.slice(i22, i22 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = Number.parseInt(match[i2] + match[i2], 16);
        }
        if (hexAlpha) {
          rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string.match(rgba)) {
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = Number.parseInt(match[i2 + 1], 10);
        }
        if (match[4]) {
          rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
        }
      } else if (match = string.match(per)) {
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = Math.round(Number.parseFloat(match[i2 + 1]) * 2.55);
        }
        if (match[4]) {
          rgb[3] = match[5] ? Number.parseFloat(match[4]) * 0.01 : Number.parseFloat(match[4]);
        }
      } else if (match = string.match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!Object.hasOwn(color_name_default, match[1])) {
          return null;
        }
        rgb = color_name_default[match[1]];
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i2 = 0; i2 < 3; i2++) {
        rgb[i2] = clamp(rgb[i2], 0, 255);
      }
      rgb[3] = clamp(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string) {
      if (!string) {
        return null;
      }
      const hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      const match = string.match(hsl);
      if (match) {
        const alpha = Number.parseFloat(match[4]);
        const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
        const s2 = clamp(Number.parseFloat(match[2]), 0, 100);
        const l = clamp(Number.parseFloat(match[3]), 0, 100);
        const a2 = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s2, l, a2];
      }
      return null;
    };
    cs.get.hwb = function(string) {
      if (!string) {
        return null;
      }
      const hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      const match = string.match(hwb);
      if (match) {
        const alpha = Number.parseFloat(match[4]);
        const h = (Number.parseFloat(match[1]) % 360 + 360) % 360;
        const w = clamp(Number.parseFloat(match[2]), 0, 100);
        const b = clamp(Number.parseFloat(match[3]), 0, 100);
        const a2 = clamp(Number.isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b, a2];
      }
      return null;
    };
    cs.to.hex = function(...rgba) {
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function(...rgba) {
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function(...rgba) {
      const r2 = Math.round(rgba[0] / 255 * 100);
      const g = Math.round(rgba[1] / 255 * 100);
      const b = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r2 + "%, " + g + "%, " + b + "%)" : "rgba(" + r2 + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function(...hsla) {
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function(...hwba) {
      let a2 = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a2 = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a2 + ")";
    };
    cs.to.keyword = function(...rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp(number_, min, max) {
      return Math.min(Math.max(min, number_), max);
    }
    __name(clamp, "clamp");
    function hexDouble(number_) {
      const string_ = Math.round(number_).toString(16).toUpperCase();
      return string_.length < 2 ? "0" + string_ : string_;
    }
    __name(hexDouble, "hexDouble");
    var color_string_default = cs;
    var reverseKeywords = {};
    for (const key of Object.keys(color_name_default)) {
      reverseKeywords[color_name_default[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      oklab: { channels: 3, labels: ["okl", "oka", "okb"] },
      lch: { channels: 3, labels: "lch" },
      oklch: { channels: 3, labels: ["okl", "okc", "okh"] },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    var conversions_default = convert;
    var LAB_FT = (6 / 29) ** 3;
    function srgbNonlinearTransform(c) {
      const cc = c > 31308e-7 ? 1.055 * c ** (1 / 2.4) - 0.055 : c * 12.92;
      return Math.min(Math.max(0, cc), 1);
    }
    __name(srgbNonlinearTransform, "srgbNonlinearTransform");
    function srgbNonlinearTransformInv(c) {
      return c > 0.04045 ? ((c + 0.055) / 1.055) ** 2.4 : c / 12.92;
    }
    __name(srgbNonlinearTransformInv, "srgbNonlinearTransformInv");
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r2 = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const min = Math.min(r2, g, b);
      const max = Math.max(r2, g, b);
      const delta = max - min;
      let h;
      let s2;
      switch (max) {
        case min: {
          h = 0;
          break;
        }
        case r2: {
          h = (g - b) / delta;
          break;
        }
        case g: {
          h = 2 + (b - r2) / delta;
          break;
        }
        case b: {
          h = 4 + (r2 - g) / delta;
          break;
        }
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      const l = (min + max) / 2;
      if (max === min) {
        s2 = 0;
      } else if (l <= 0.5) {
        s2 = delta / (max + min);
      } else {
        s2 = delta / (2 - max - min);
      }
      return [h, s2 * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h;
      let s2;
      const r2 = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const v = Math.max(r2, g, b);
      const diff = v - Math.min(r2, g, b);
      const diffc = /* @__PURE__ */ __name(function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      }, "diffc");
      if (diff === 0) {
        h = 0;
        s2 = 0;
      } else {
        s2 = diff / v;
        rdif = diffc(r2);
        gdif = diffc(g);
        bdif = diffc(b);
        switch (v) {
          case r2: {
            h = bdif - gdif;
            break;
          }
          case g: {
            h = 1 / 3 + rdif - bdif;
            break;
          }
          case b: {
            h = 2 / 3 + gdif - rdif;
            break;
          }
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s2 * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r2 = rgb[0];
      const g = rgb[1];
      let b = rgb[2];
      const h = convert.rgb.hsl(rgb)[0];
      const w = 1 / 255 * Math.min(r2, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r2, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.oklab = function(rgb) {
      const r2 = srgbNonlinearTransformInv(rgb[0] / 255);
      const g = srgbNonlinearTransformInv(rgb[1] / 255);
      const b = srgbNonlinearTransformInv(rgb[2] / 255);
      const lp = Math.cbrt(0.4122214708 * r2 + 0.5363325363 * g + 0.0514459929 * b);
      const mp = Math.cbrt(0.2119034982 * r2 + 0.6806995451 * g + 0.1073969566 * b);
      const sp = Math.cbrt(0.0883024619 * r2 + 0.2817188376 * g + 0.6299787005 * b);
      const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
      const aa = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
      const bb = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
      return [l * 100, aa * 100, bb * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r2 = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const k = Math.min(1 - r2, 1 - g, 1 - b);
      const c = (1 - r2 - k) / (1 - k) || 0;
      const m = (1 - g - k) / (1 - k) || 0;
      const y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
    }
    __name(comparativeDistance, "comparativeDistance");
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Number.POSITIVE_INFINITY;
      let currentClosestKeyword;
      for (const keyword of Object.keys(color_name_default)) {
        const value = color_name_default[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return color_name_default[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      const r2 = srgbNonlinearTransformInv(rgb[0] / 255);
      const g = srgbNonlinearTransformInv(rgb[1] / 255);
      const b = srgbNonlinearTransformInv(rgb[2] / 255);
      const x = r2 * 0.4124564 + g * 0.3575761 + b * 0.1804375;
      const y = r2 * 0.2126729 + g * 0.7151522 + b * 0.072175;
      const z = r2 * 0.0193339 + g * 0.119192 + b * 0.9503041;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a2 = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a2, b];
    };
    convert.hsl.rgb = function(hsl) {
      const h = hsl[0] / 360;
      const s2 = hsl[1] / 100;
      const l = hsl[2] / 100;
      let t3;
      let value;
      if (s2 === 0) {
        value = l * 255;
        return [value, value, value];
      }
      const t2 = l < 0.5 ? l * (1 + s2) : l + s2 - l * s2;
      const t1 = 2 * l - t2;
      const rgb = [0, 0, 0];
      for (let i2 = 0; i2 < 3; i2++) {
        t3 = h + 1 / 3 * -(i2 - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          value = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          value = t2;
        } else if (3 * t3 < 2) {
          value = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          value = t1;
        }
        rgb[i2] = value * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h = hsl[0];
      let s2 = hsl[1] / 100;
      let l = hsl[2] / 100;
      let smin = s2;
      const lmin = Math.max(l, 0.01);
      l *= 2;
      s2 *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v = (l + s2) / 2;
      const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s2 / (l + s2);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h = hsv[0] / 60;
      const s2 = hsv[1] / 100;
      let v = hsv[2] / 100;
      const hi = Math.floor(h) % 6;
      const f = h - Math.floor(h);
      const p = 255 * v * (1 - s2);
      const q = 255 * v * (1 - s2 * f);
      const t2 = 255 * v * (1 - s2 * (1 - f));
      v *= 255;
      switch (hi) {
        case 0: {
          return [v, t2, p];
        }
        case 1: {
          return [q, v, p];
        }
        case 2: {
          return [p, v, t2];
        }
        case 3: {
          return [p, q, v];
        }
        case 4: {
          return [t2, p, v];
        }
        case 5: {
          return [v, p, q];
        }
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h = hsv[0];
      const s2 = hsv[1] / 100;
      const v = hsv[2] / 100;
      const vmin = Math.max(v, 0.01);
      let sl;
      let l;
      l = (2 - s2) * v;
      const lmin = (2 - s2) * vmin;
      sl = s2 * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i2 = Math.floor(6 * h);
      const v = 1 - bl;
      f = 6 * h - i2;
      if ((i2 & 1) !== 0) {
        f = 1 - f;
      }
      const n2 = wh + f * (v - wh);
      let r2;
      let g;
      let b;
      switch (i2) {
        default:
        case 6:
        case 0: {
          r2 = v;
          g = n2;
          b = wh;
          break;
        }
        case 1: {
          r2 = n2;
          g = v;
          b = wh;
          break;
        }
        case 2: {
          r2 = wh;
          g = v;
          b = n2;
          break;
        }
        case 3: {
          r2 = wh;
          g = n2;
          b = v;
          break;
        }
        case 4: {
          r2 = n2;
          g = wh;
          b = v;
          break;
        }
        case 5: {
          r2 = v;
          g = wh;
          b = n2;
          break;
        }
      }
      return [r2 * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m = cmyk[1] / 100;
      const y = cmyk[2] / 100;
      const k = cmyk[3] / 100;
      const r2 = 1 - Math.min(1, c * (1 - k) + k);
      const g = 1 - Math.min(1, m * (1 - k) + k);
      const b = 1 - Math.min(1, y * (1 - k) + k);
      return [r2 * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      let r2;
      let g;
      let b;
      r2 = x * 3.2404542 + y * -1.5371385 + z * -0.4985314;
      g = x * -0.969266 + y * 1.8760108 + z * 0.041556;
      b = x * 0.0556434 + y * -0.2040259 + z * 1.0572252;
      r2 = srgbNonlinearTransform(r2);
      g = srgbNonlinearTransform(g);
      b = srgbNonlinearTransform(b);
      return [r2 * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x = xyz[0];
      let y = xyz[1];
      let z = xyz[2];
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
      y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
      z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;
      const l = 116 * y - 16;
      const a2 = 500 * (x - y);
      const b = 200 * (y - z);
      return [l, a2, b];
    };
    convert.xyz.oklab = function(xyz) {
      const x = xyz[0] / 100;
      const y = xyz[1] / 100;
      const z = xyz[2] / 100;
      const lp = Math.cbrt(0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z);
      const mp = Math.cbrt(0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z);
      const sp = Math.cbrt(0.0482003018 * x + 0.2643662691 * y + 0.633851707 * z);
      const l = 0.2104542553 * lp + 0.793617785 * mp - 0.0040720468 * sp;
      const a2 = 1.9779984951 * lp - 2.428592205 * mp + 0.4505937099 * sp;
      const b = 0.0259040371 * lp + 0.7827717662 * mp - 0.808675766 * sp;
      return [l * 100, a2 * 100, b * 100];
    };
    convert.oklab.oklch = function(oklab) {
      return convert.lab.lch(oklab);
    };
    convert.oklab.xyz = function(oklab) {
      const ll = oklab[0] / 100;
      const a2 = oklab[1] / 100;
      const b = oklab[2] / 100;
      const l = (0.999999998 * ll + 0.396337792 * a2 + 0.215803758 * b) ** 3;
      const m = (1.000000008 * ll - 0.105561342 * a2 - 0.063854175 * b) ** 3;
      const s2 = (1.000000055 * ll - 0.089484182 * a2 - 1.291485538 * b) ** 3;
      const x = 1.227013851 * l - 0.55779998 * m + 0.281256149 * s2;
      const y = -0.040580178 * l + 1.11225687 * m - 0.071676679 * s2;
      const z = -0.076381285 * l - 0.421481978 * m + 1.58616322 * s2;
      return [x * 100, y * 100, z * 100];
    };
    convert.oklab.rgb = function(oklab) {
      const ll = oklab[0] / 100;
      const aa = oklab[1] / 100;
      const bb = oklab[2] / 100;
      const l = (ll + 0.3963377774 * aa + 0.2158037573 * bb) ** 3;
      const m = (ll - 0.1055613458 * aa - 0.0638541728 * bb) ** 3;
      const s2 = (ll - 0.0894841775 * aa - 1.291485548 * bb) ** 3;
      const r2 = srgbNonlinearTransform(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s2);
      const g = srgbNonlinearTransform(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s2);
      const b = srgbNonlinearTransform(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s2);
      return [r2 * 255, g * 255, b * 255];
    };
    convert.oklch.oklab = function(oklch) {
      return convert.lch.lab(oklch);
    };
    convert.lab.xyz = function(lab) {
      const l = lab[0];
      const a2 = lab[1];
      const b = lab[2];
      let x;
      let y;
      let z;
      y = (l + 16) / 116;
      x = a2 / 500 + y;
      z = y - b / 200;
      const y2 = y ** 3;
      const x2 = x ** 3;
      const z2 = z ** 3;
      y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > LAB_FT ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > LAB_FT ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      const l = lab[0];
      const a2 = lab[1];
      const b = lab[2];
      let h;
      const hr = Math.atan2(b, a2);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      const c = Math.sqrt(a2 * a2 + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      const l = lch[0];
      const c = lch[1];
      const h = lch[2];
      const hr = h / 360 * 2 * Math.PI;
      const a2 = c * Math.cos(hr);
      const b = c * Math.sin(hr);
      return [l, a2, b];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r2, g, b] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r2 / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r2 = args[0];
      const g = args[1];
      const b = args[2];
      if (r2 >> 4 === g >> 4 && g >> 4 === b >> 4) {
        if (r2 < 8) {
          return 16;
        }
        if (r2 > 248) {
          return 231;
        }
        return Math.round((r2 - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r2 / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      args = args[0];
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (Math.trunc(args > 50) + 1) * 0.5;
      const r2 = (color & 1) * mult * 255;
      const g = (color >> 1 & 1) * mult * 255;
      const b = (color >> 2 & 1) * mult * 255;
      return [r2, g, b];
    };
    convert.ansi256.rgb = function(args) {
      args = args[0];
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r2 = Math.floor(args / 36) / 5 * 255;
      const g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b = rem % 6 / 5 * 255;
      return [r2, g, b];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".slice(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = [...colorString].map((char) => char + char).join("");
      }
      const integer = Number.parseInt(colorString, 16);
      const r2 = integer >> 16 & 255;
      const g = integer >> 8 & 255;
      const b = integer & 255;
      return [r2, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      const r2 = rgb[0] / 255;
      const g = rgb[1] / 255;
      const b = rgb[2] / 255;
      const max = Math.max(Math.max(r2, g), b);
      const min = Math.min(Math.min(r2, g), b);
      const chroma = max - min;
      let hue;
      const grayscale = chroma < 1 ? min / (1 - chroma) : 0;
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r2) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r2) / chroma;
      } else {
        hue = 4 + (r2 - g) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s2 = hsl[1] / 100;
      const l = hsl[2] / 100;
      const c = l < 0.5 ? 2 * s2 * l : 2 * s2 * (1 - l);
      let f = 0;
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s2 = hsv[1] / 100;
      const v = hsv[2] / 100;
      const c = s2 * v;
      let f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      const pure = [0, 0, 0];
      const hi = h % 1 * 6;
      const v = hi % 1;
      const w = 1 - v;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0: {
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        }
        case 1: {
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        }
        case 2: {
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        }
        case 3: {
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        }
        case 4: {
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        }
        default: {
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
        }
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      let f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const l = g * (1 - c) + 0.5 * c;
      let s2 = 0;
      if (l > 0 && l < 0.5) {
        s2 = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s2 = c / (2 * (1 - l));
      }
      return [hcg[0], s2 * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g = hcg[2] / 100;
      const v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w = hwb[1] / 100;
      const b = hwb[2] / 100;
      const v = 1 - b;
      const c = v - w;
      let g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const value = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (value << 16) + (value << 8) + value;
      const string = integer.toString(16).toUpperCase();
      return "000000".slice(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const value = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [value / 255 * 100];
    };
    function buildGraph() {
      const graph = {};
      const models2 = Object.keys(conversions_default);
      for (let { length } = models2, i2 = 0; i2 < length; i2++) {
        graph[models2[i2]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    __name(buildGraph, "buildGraph");
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length > 0) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions_default[current]);
        for (let { length } = adjacents, i2 = 0; i2 < length; i2++) {
          const adjacent = adjacents[i2];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    __name(deriveBFS, "deriveBFS");
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    __name(link, "link");
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions_default[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions_default[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    __name(wrapConversion, "wrapConversion");
    function route(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models2 = Object.keys(graph);
      for (let { length } = models2, i2 = 0; i2 < length; i2++) {
        const toModel = models2[i2];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    }
    __name(route, "route");
    var route_default = route;
    var convert2 = {};
    var models = Object.keys(conversions_default);
    function wrapRaw(fn) {
      const wrappedFn = /* @__PURE__ */ __name(function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      }, "wrappedFn");
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    __name(wrapRaw, "wrapRaw");
    function wrapRounded(fn) {
      const wrappedFn = /* @__PURE__ */ __name(function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let { length } = result, i2 = 0; i2 < length; i2++) {
            result[i2] = Math.round(result[i2]);
          }
        }
        return result;
      }, "wrappedFn");
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    __name(wrapRounded, "wrapRounded");
    for (const fromModel of models) {
      convert2[fromModel] = {};
      Object.defineProperty(convert2[fromModel], "channels", { value: conversions_default[fromModel].channels });
      Object.defineProperty(convert2[fromModel], "labels", { value: conversions_default[fromModel].labels });
      const routes = route_default(fromModel);
      const routeModels = Object.keys(routes);
      for (const toModel of routeModels) {
        const fn = routes[toModel];
        convert2[fromModel][toModel] = wrapRounded(fn);
        convert2[fromModel][toModel].raw = wrapRaw(fn);
      }
    }
    var color_convert_default = convert2;
    var skippedModels = [
      // To be honest, I don't really feel like keyword belongs in color convert, but eh.
      "keyword",
      // Gray conflicts with some method names, and has its own method defined.
      "gray",
      // Shouldn't really be in color-convert either...
      "hex"
    ];
    var hashedModelKeys = {};
    for (const model of Object.keys(color_convert_default)) {
      hashedModelKeys[[...color_convert_default[model].labels].sort().join("")] = model;
    }
    var limiters = {};
    function Color(object, model) {
      if (!(this instanceof Color)) {
        return new Color(object, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in color_convert_default)) {
        throw new Error("Unknown model: " + model);
      }
      let i2;
      let channels;
      if (object == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (object instanceof Color) {
        this.model = object.model;
        this.color = [...object.color];
        this.valpha = object.valpha;
      } else if (typeof object === "string") {
        const result = color_string_default.get(object);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + object);
        }
        this.model = result.model;
        channels = color_convert_default[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (object.length > 0) {
        this.model = model || "rgb";
        channels = color_convert_default[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
      } else if (typeof object === "number") {
        this.model = "rgb";
        this.color = [
          object >> 16 & 255,
          object >> 8 & 255,
          object & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ("alpha" in object) {
          keys.splice(keys.indexOf("alpha"), 1);
          this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = color_convert_default[this.model];
        const color = [];
        for (i2 = 0; i2 < labels.length; i2++) {
          color.push(object[labels[i2]]);
        }
        this.color = zeroArray(color);
      }
      if (limiters[this.model]) {
        channels = color_convert_default[this.model].channels;
        for (i2 = 0; i2 < channels; i2++) {
          const limit = limiters[this.model][i2];
          if (limit) {
            this.color[i2] = limit(this.color[i2]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    __name(Color, "Color");
    Color.prototype = {
      toString() {
        return this.string();
      },
      toJSON() {
        return this[this.model]();
      },
      string(places) {
        let self = this.model in color_string_default.to ? this : this.rgb();
        self = self.round(typeof places === "number" ? places : 1);
        const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
        return color_string_default.to[self.model](...arguments_);
      },
      percentString(places) {
        const self = this.rgb().round(typeof places === "number" ? places : 1);
        const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
        return color_string_default.to.rgb.percent(...arguments_);
      },
      array() {
        return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
      },
      object() {
        const result = {};
        const { channels } = color_convert_default[this.model];
        const { labels } = color_convert_default[this.model];
        for (let i2 = 0; i2 < channels; i2++) {
          result[labels[i2]] = this.color[i2];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray() {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject() {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round(places) {
        places = Math.max(places || 0, 0);
        return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
      },
      alpha(value) {
        if (value !== void 0) {
          return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
        }
        return this.valpha;
      },
      // Rgb
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(95.047)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(108.833)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        return color_convert_default[this.model].keyword(this.color);
      },
      hex(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        return color_string_default.to.hex(...this.rgb().round().color);
      },
      hexa(value) {
        if (value !== void 0) {
          return new Color(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
          alphaHex = "0" + alphaHex;
        }
        return color_string_default.to.hex(...rgbArray) + alphaHex;
      },
      rgbNumber() {
        const rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity() {
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i2, element] of rgb.entries()) {
          const chan = element / 255;
          lum[i2] = chan <= 0.04045 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast(color2) {
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level(color2) {
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark() {
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
        return yiq < 128;
      },
      isLight() {
        return !this.isDark();
      },
      negate() {
        const rgb = this.rgb();
        for (let i2 = 0; i2 < 3; i2++) {
          rgb.color[i2] = 255 - rgb.color[i2];
        }
        return rgb;
      },
      lighten(ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken(ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten(ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken(ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale() {
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(value, value, value);
      },
      fade(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate(degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p = weight === void 0 ? 0.5 : weight;
        const w = 2 * p - 1;
        const a2 = color1.alpha() - color2.alpha();
        const w1 = ((w * a2 === -1 ? w : (w + a2) / (1 + w * a2)) + 1) / 2;
        const w2 = 1 - w1;
        return Color.rgb(
          w1 * color1.red() + w2 * color2.red(),
          w1 * color1.green() + w2 * color2.green(),
          w1 * color1.blue() + w2 * color2.blue(),
          color1.alpha() * p + color2.alpha() * (1 - p)
        );
      }
    };
    for (const model of Object.keys(color_convert_default)) {
      if (skippedModels.includes(model)) {
        continue;
      }
      const { channels } = color_convert_default[model];
      Color.prototype[model] = function(...arguments_) {
        if (this.model === model) {
          return new Color(this);
        }
        if (arguments_.length > 0) {
          return new Color(arguments_, model);
        }
        return new Color([...assertArray(color_convert_default[this.model][model].raw(this.color)), this.valpha], model);
      };
      Color[model] = function(...arguments_) {
        let color = arguments_[0];
        if (typeof color === "number") {
          color = zeroArray(arguments_, channels);
        }
        return new Color(color, model);
      };
    }
    function roundTo(number, places) {
      return Number(number.toFixed(places));
    }
    __name(roundTo, "roundTo");
    function roundToPlace(places) {
      return function(number) {
        return roundTo(number, places);
      };
    }
    __name(roundToPlace, "roundToPlace");
    function getset(model, channel2, modifier) {
      model = Array.isArray(model) ? model : [model];
      for (const m of model) {
        (limiters[m] ||= [])[channel2] = modifier;
      }
      model = model[0];
      return function(value) {
        let result;
        if (value !== void 0) {
          if (modifier) {
            value = modifier(value);
          }
          result = this[model]();
          result.color[channel2] = value;
          return result;
        }
        result = this[model]().color[channel2];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    __name(getset, "getset");
    function maxfn(max) {
      return function(v) {
        return Math.max(0, Math.min(max, v));
      };
    }
    __name(maxfn, "maxfn");
    function assertArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    __name(assertArray, "assertArray");
    function zeroArray(array, length) {
      for (let i2 = 0; i2 < length; i2++) {
        if (typeof array[i2] !== "number") {
          array[i2] = 0;
        }
      }
      return array;
    }
    __name(zeroArray, "zeroArray");
    var index_default = Color;
  }
});

// node_modules/@img/colour/index.cjs
var require_colour = __commonJS({
  "node_modules/@img/colour/index.cjs"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = require_color().default;
  }
});

// node_modules/sharp/lib/colour.js
var require_colour2 = __commonJS({
  "node_modules/sharp/lib/colour.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var color = require_colour();
    var is = require_is();
    var colourspace = {
      multiband: "multiband",
      "b-w": "b-w",
      bw: "b-w",
      cmyk: "cmyk",
      srgb: "srgb"
    };
    function tint(tint2) {
      this._setBackgroundColourOption("tint", tint2);
      return this;
    }
    __name(tint, "tint");
    function greyscale(greyscale2) {
      this.options.greyscale = is.bool(greyscale2) ? greyscale2 : true;
      return this;
    }
    __name(greyscale, "greyscale");
    function grayscale(grayscale2) {
      return this.greyscale(grayscale2);
    }
    __name(grayscale, "grayscale");
    function pipelineColourspace(colourspace2) {
      if (!is.string(colourspace2)) {
        throw is.invalidParameterError("colourspace", "string", colourspace2);
      }
      this.options.colourspacePipeline = colourspace2;
      return this;
    }
    __name(pipelineColourspace, "pipelineColourspace");
    function pipelineColorspace(colorspace) {
      return this.pipelineColourspace(colorspace);
    }
    __name(pipelineColorspace, "pipelineColorspace");
    function toColourspace(colourspace2) {
      if (!is.string(colourspace2)) {
        throw is.invalidParameterError("colourspace", "string", colourspace2);
      }
      this.options.colourspace = colourspace2;
      return this;
    }
    __name(toColourspace, "toColourspace");
    function toColorspace(colorspace) {
      return this.toColourspace(colorspace);
    }
    __name(toColorspace, "toColorspace");
    function _getBackgroundColourOption(value) {
      if (is.object(value) || is.string(value) && value.length >= 3 && value.length <= 200) {
        const colour = color(value);
        return [
          colour.red(),
          colour.green(),
          colour.blue(),
          Math.round(colour.alpha() * 255)
        ];
      } else {
        throw is.invalidParameterError("background", "object or string", value);
      }
    }
    __name(_getBackgroundColourOption, "_getBackgroundColourOption");
    function _setBackgroundColourOption(key, value) {
      if (is.defined(value)) {
        this.options[key] = _getBackgroundColourOption(value);
      }
    }
    __name(_setBackgroundColourOption, "_setBackgroundColourOption");
    module.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        // Public
        tint,
        greyscale,
        grayscale,
        pipelineColourspace,
        pipelineColorspace,
        toColourspace,
        toColorspace,
        // Private
        _getBackgroundColourOption,
        _setBackgroundColourOption
      });
      Sharp.colourspace = colourspace;
      Sharp.colorspace = colourspace;
    };
  }
});

// node_modules/sharp/lib/channel.js
var require_channel = __commonJS({
  "node_modules/sharp/lib/channel.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var is = require_is();
    var bool = {
      and: "and",
      or: "or",
      eor: "eor"
    };
    function removeAlpha() {
      this.options.removeAlpha = true;
      return this;
    }
    __name(removeAlpha, "removeAlpha");
    function ensureAlpha(alpha) {
      if (is.defined(alpha)) {
        if (is.number(alpha) && is.inRange(alpha, 0, 1)) {
          this.options.ensureAlpha = alpha;
        } else {
          throw is.invalidParameterError("alpha", "number between 0 and 1", alpha);
        }
      } else {
        this.options.ensureAlpha = 1;
      }
      return this;
    }
    __name(ensureAlpha, "ensureAlpha");
    function extractChannel(channel2) {
      const channelMap = { red: 0, green: 1, blue: 2, alpha: 3 };
      if (Object.keys(channelMap).includes(channel2)) {
        channel2 = channelMap[channel2];
      }
      if (is.integer(channel2) && is.inRange(channel2, 0, 4)) {
        this.options.extractChannel = channel2;
      } else {
        throw is.invalidParameterError("channel", "integer or one of: red, green, blue, alpha", channel2);
      }
      return this;
    }
    __name(extractChannel, "extractChannel");
    function joinChannel(images, options) {
      if (Array.isArray(images)) {
        images.forEach(function(image) {
          this.options.joinChannelIn.push(this._createInputDescriptor(image, options));
        }, this);
      } else {
        this.options.joinChannelIn.push(this._createInputDescriptor(images, options));
      }
      return this;
    }
    __name(joinChannel, "joinChannel");
    function bandbool(boolOp) {
      if (is.string(boolOp) && is.inArray(boolOp, ["and", "or", "eor"])) {
        this.options.bandBoolOp = boolOp;
      } else {
        throw is.invalidParameterError("boolOp", "one of: and, or, eor", boolOp);
      }
      return this;
    }
    __name(bandbool, "bandbool");
    module.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        // Public instance functions
        removeAlpha,
        ensureAlpha,
        extractChannel,
        joinChannel,
        bandbool
      });
      Sharp.bool = bool;
    };
  }
});

// node-built-in-modules:node:path
import libDefault5 from "node:path";
var require_node_path = __commonJS({
  "node-built-in-modules:node:path"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault5;
  }
});

// node_modules/sharp/lib/output.js
var require_output = __commonJS({
  "node_modules/sharp/lib/output.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var path = require_node_path();
    var is = require_is();
    var sharp2 = require_sharp();
    var formats = /* @__PURE__ */ new Map([
      ["heic", "heif"],
      ["heif", "heif"],
      ["avif", "avif"],
      ["jpeg", "jpeg"],
      ["jpg", "jpeg"],
      ["jpe", "jpeg"],
      ["tile", "tile"],
      ["dz", "tile"],
      ["png", "png"],
      ["raw", "raw"],
      ["tiff", "tiff"],
      ["tif", "tiff"],
      ["webp", "webp"],
      ["gif", "gif"],
      ["jp2", "jp2"],
      ["jpx", "jp2"],
      ["j2k", "jp2"],
      ["j2c", "jp2"],
      ["jxl", "jxl"]
    ]);
    var jp2Regex = /\.(jp[2x]|j2[kc])$/i;
    var errJp2Save = /* @__PURE__ */ __name(() => new Error("JP2 output requires libvips with support for OpenJPEG"), "errJp2Save");
    var bitdepthFromColourCount = /* @__PURE__ */ __name((colours) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(colours))), "bitdepthFromColourCount");
    function toFile(fileOut, callback) {
      let err;
      if (!is.string(fileOut)) {
        err = new Error("Missing output file path");
      } else if (is.string(this.options.input.file) && path.resolve(this.options.input.file) === path.resolve(fileOut)) {
        err = new Error("Cannot use same file for input and output");
      } else if (jp2Regex.test(path.extname(fileOut)) && !this.constructor.format.jp2k.output.file) {
        err = errJp2Save();
      }
      if (err) {
        if (is.fn(callback)) {
          callback(err);
        } else {
          return Promise.reject(err);
        }
      } else {
        this.options.fileOut = fileOut;
        const stack = Error();
        return this._pipeline(callback, stack);
      }
      return this;
    }
    __name(toFile, "toFile");
    function toBuffer(options, callback) {
      if (is.object(options)) {
        this._setBooleanOption("resolveWithObject", options.resolveWithObject);
      } else if (this.options.resolveWithObject) {
        this.options.resolveWithObject = false;
      }
      this.options.fileOut = "";
      const stack = Error();
      return this._pipeline(is.fn(options) ? options : callback, stack);
    }
    __name(toBuffer, "toBuffer");
    function keepExif() {
      this.options.keepMetadata |= 1;
      return this;
    }
    __name(keepExif, "keepExif");
    function withExif(exif) {
      if (is.object(exif)) {
        for (const [ifd, entries] of Object.entries(exif)) {
          if (is.object(entries)) {
            for (const [k, v] of Object.entries(entries)) {
              if (is.string(v)) {
                this.options.withExif[`exif-${ifd.toLowerCase()}-${k}`] = v;
              } else {
                throw is.invalidParameterError(`${ifd}.${k}`, "string", v);
              }
            }
          } else {
            throw is.invalidParameterError(ifd, "object", entries);
          }
        }
      } else {
        throw is.invalidParameterError("exif", "object", exif);
      }
      this.options.withExifMerge = false;
      return this.keepExif();
    }
    __name(withExif, "withExif");
    function withExifMerge(exif) {
      this.withExif(exif);
      this.options.withExifMerge = true;
      return this;
    }
    __name(withExifMerge, "withExifMerge");
    function keepIccProfile() {
      this.options.keepMetadata |= 8;
      return this;
    }
    __name(keepIccProfile, "keepIccProfile");
    function withIccProfile(icc, options) {
      if (is.string(icc)) {
        this.options.withIccProfile = icc;
      } else {
        throw is.invalidParameterError("icc", "string", icc);
      }
      this.keepIccProfile();
      if (is.object(options)) {
        if (is.defined(options.attach)) {
          if (is.bool(options.attach)) {
            if (!options.attach) {
              this.options.keepMetadata &= ~8;
            }
          } else {
            throw is.invalidParameterError("attach", "boolean", options.attach);
          }
        }
      }
      return this;
    }
    __name(withIccProfile, "withIccProfile");
    function keepXmp() {
      this.options.keepMetadata |= 2;
      return this;
    }
    __name(keepXmp, "keepXmp");
    function withXmp(xmp) {
      if (is.string(xmp) && xmp.length > 0) {
        this.options.withXmp = xmp;
        this.options.keepMetadata |= 2;
      } else {
        throw is.invalidParameterError("xmp", "non-empty string", xmp);
      }
      return this;
    }
    __name(withXmp, "withXmp");
    function keepMetadata() {
      this.options.keepMetadata = 31;
      return this;
    }
    __name(keepMetadata, "keepMetadata");
    function withMetadata(options) {
      this.keepMetadata();
      this.withIccProfile("srgb");
      if (is.object(options)) {
        if (is.defined(options.orientation)) {
          if (is.integer(options.orientation) && is.inRange(options.orientation, 1, 8)) {
            this.options.withMetadataOrientation = options.orientation;
          } else {
            throw is.invalidParameterError("orientation", "integer between 1 and 8", options.orientation);
          }
        }
        if (is.defined(options.density)) {
          if (is.number(options.density) && options.density > 0) {
            this.options.withMetadataDensity = options.density;
          } else {
            throw is.invalidParameterError("density", "positive number", options.density);
          }
        }
        if (is.defined(options.icc)) {
          this.withIccProfile(options.icc);
        }
        if (is.defined(options.exif)) {
          this.withExifMerge(options.exif);
        }
      }
      return this;
    }
    __name(withMetadata, "withMetadata");
    function toFormat(format, options) {
      const actualFormat = formats.get((is.object(format) && is.string(format.id) ? format.id : format).toLowerCase());
      if (!actualFormat) {
        throw is.invalidParameterError("format", `one of: ${[...formats.keys()].join(", ")}`, format);
      }
      return this[actualFormat](options);
    }
    __name(toFormat, "toFormat");
    function jpeg(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jpegQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.progressive)) {
          this._setBooleanOption("jpegProgressive", options.progressive);
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.jpegChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
        const optimiseCoding = is.bool(options.optimizeCoding) ? options.optimizeCoding : options.optimiseCoding;
        if (is.defined(optimiseCoding)) {
          this._setBooleanOption("jpegOptimiseCoding", optimiseCoding);
        }
        if (is.defined(options.mozjpeg)) {
          if (is.bool(options.mozjpeg)) {
            if (options.mozjpeg) {
              this.options.jpegTrellisQuantisation = true;
              this.options.jpegOvershootDeringing = true;
              this.options.jpegOptimiseScans = true;
              this.options.jpegProgressive = true;
              this.options.jpegQuantisationTable = 3;
            }
          } else {
            throw is.invalidParameterError("mozjpeg", "boolean", options.mozjpeg);
          }
        }
        const trellisQuantisation = is.bool(options.trellisQuantization) ? options.trellisQuantization : options.trellisQuantisation;
        if (is.defined(trellisQuantisation)) {
          this._setBooleanOption("jpegTrellisQuantisation", trellisQuantisation);
        }
        if (is.defined(options.overshootDeringing)) {
          this._setBooleanOption("jpegOvershootDeringing", options.overshootDeringing);
        }
        const optimiseScans = is.bool(options.optimizeScans) ? options.optimizeScans : options.optimiseScans;
        if (is.defined(optimiseScans)) {
          this._setBooleanOption("jpegOptimiseScans", optimiseScans);
          if (optimiseScans) {
            this.options.jpegProgressive = true;
          }
        }
        const quantisationTable = is.number(options.quantizationTable) ? options.quantizationTable : options.quantisationTable;
        if (is.defined(quantisationTable)) {
          if (is.integer(quantisationTable) && is.inRange(quantisationTable, 0, 8)) {
            this.options.jpegQuantisationTable = quantisationTable;
          } else {
            throw is.invalidParameterError("quantisationTable", "integer between 0 and 8", quantisationTable);
          }
        }
      }
      return this._updateFormatOut("jpeg", options);
    }
    __name(jpeg, "jpeg");
    function png(options) {
      if (is.object(options)) {
        if (is.defined(options.progressive)) {
          this._setBooleanOption("pngProgressive", options.progressive);
        }
        if (is.defined(options.compressionLevel)) {
          if (is.integer(options.compressionLevel) && is.inRange(options.compressionLevel, 0, 9)) {
            this.options.pngCompressionLevel = options.compressionLevel;
          } else {
            throw is.invalidParameterError("compressionLevel", "integer between 0 and 9", options.compressionLevel);
          }
        }
        if (is.defined(options.adaptiveFiltering)) {
          this._setBooleanOption("pngAdaptiveFiltering", options.adaptiveFiltering);
        }
        const colours = options.colours || options.colors;
        if (is.defined(colours)) {
          if (is.integer(colours) && is.inRange(colours, 2, 256)) {
            this.options.pngBitdepth = bitdepthFromColourCount(colours);
          } else {
            throw is.invalidParameterError("colours", "integer between 2 and 256", colours);
          }
        }
        if (is.defined(options.palette)) {
          this._setBooleanOption("pngPalette", options.palette);
        } else if ([options.quality, options.effort, options.colours, options.colors, options.dither].some(is.defined)) {
          this._setBooleanOption("pngPalette", true);
        }
        if (this.options.pngPalette) {
          if (is.defined(options.quality)) {
            if (is.integer(options.quality) && is.inRange(options.quality, 0, 100)) {
              this.options.pngQuality = options.quality;
            } else {
              throw is.invalidParameterError("quality", "integer between 0 and 100", options.quality);
            }
          }
          if (is.defined(options.effort)) {
            if (is.integer(options.effort) && is.inRange(options.effort, 1, 10)) {
              this.options.pngEffort = options.effort;
            } else {
              throw is.invalidParameterError("effort", "integer between 1 and 10", options.effort);
            }
          }
          if (is.defined(options.dither)) {
            if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
              this.options.pngDither = options.dither;
            } else {
              throw is.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
            }
          }
        }
      }
      return this._updateFormatOut("png", options);
    }
    __name(png, "png");
    function webp(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.webpQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.alphaQuality)) {
          if (is.integer(options.alphaQuality) && is.inRange(options.alphaQuality, 0, 100)) {
            this.options.webpAlphaQuality = options.alphaQuality;
          } else {
            throw is.invalidParameterError("alphaQuality", "integer between 0 and 100", options.alphaQuality);
          }
        }
        if (is.defined(options.lossless)) {
          this._setBooleanOption("webpLossless", options.lossless);
        }
        if (is.defined(options.nearLossless)) {
          this._setBooleanOption("webpNearLossless", options.nearLossless);
        }
        if (is.defined(options.smartSubsample)) {
          this._setBooleanOption("webpSmartSubsample", options.smartSubsample);
        }
        if (is.defined(options.smartDeblock)) {
          this._setBooleanOption("webpSmartDeblock", options.smartDeblock);
        }
        if (is.defined(options.preset)) {
          if (is.string(options.preset) && is.inArray(options.preset, ["default", "photo", "picture", "drawing", "icon", "text"])) {
            this.options.webpPreset = options.preset;
          } else {
            throw is.invalidParameterError("preset", "one of: default, photo, picture, drawing, icon, text", options.preset);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 0, 6)) {
            this.options.webpEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 0 and 6", options.effort);
          }
        }
        if (is.defined(options.minSize)) {
          this._setBooleanOption("webpMinSize", options.minSize);
        }
        if (is.defined(options.mixed)) {
          this._setBooleanOption("webpMixed", options.mixed);
        }
      }
      trySetAnimationOptions(options, this.options);
      return this._updateFormatOut("webp", options);
    }
    __name(webp, "webp");
    function gif(options) {
      if (is.object(options)) {
        if (is.defined(options.reuse)) {
          this._setBooleanOption("gifReuse", options.reuse);
        }
        if (is.defined(options.progressive)) {
          this._setBooleanOption("gifProgressive", options.progressive);
        }
        const colours = options.colours || options.colors;
        if (is.defined(colours)) {
          if (is.integer(colours) && is.inRange(colours, 2, 256)) {
            this.options.gifBitdepth = bitdepthFromColourCount(colours);
          } else {
            throw is.invalidParameterError("colours", "integer between 2 and 256", colours);
          }
        }
        if (is.defined(options.effort)) {
          if (is.number(options.effort) && is.inRange(options.effort, 1, 10)) {
            this.options.gifEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 1 and 10", options.effort);
          }
        }
        if (is.defined(options.dither)) {
          if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
            this.options.gifDither = options.dither;
          } else {
            throw is.invalidParameterError("dither", "number between 0.0 and 1.0", options.dither);
          }
        }
        if (is.defined(options.interFrameMaxError)) {
          if (is.number(options.interFrameMaxError) && is.inRange(options.interFrameMaxError, 0, 32)) {
            this.options.gifInterFrameMaxError = options.interFrameMaxError;
          } else {
            throw is.invalidParameterError("interFrameMaxError", "number between 0.0 and 32.0", options.interFrameMaxError);
          }
        }
        if (is.defined(options.interPaletteMaxError)) {
          if (is.number(options.interPaletteMaxError) && is.inRange(options.interPaletteMaxError, 0, 256)) {
            this.options.gifInterPaletteMaxError = options.interPaletteMaxError;
          } else {
            throw is.invalidParameterError("interPaletteMaxError", "number between 0.0 and 256.0", options.interPaletteMaxError);
          }
        }
        if (is.defined(options.keepDuplicateFrames)) {
          if (is.bool(options.keepDuplicateFrames)) {
            this._setBooleanOption("gifKeepDuplicateFrames", options.keepDuplicateFrames);
          } else {
            throw is.invalidParameterError("keepDuplicateFrames", "boolean", options.keepDuplicateFrames);
          }
        }
      }
      trySetAnimationOptions(options, this.options);
      return this._updateFormatOut("gif", options);
    }
    __name(gif, "gif");
    function jp2(options) {
      if (!this.constructor.format.jp2k.output.buffer) {
        throw errJp2Save();
      }
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jp2Quality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.jp2Lossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.tileWidth)) {
          if (is.integer(options.tileWidth) && is.inRange(options.tileWidth, 1, 32768)) {
            this.options.jp2TileWidth = options.tileWidth;
          } else {
            throw is.invalidParameterError("tileWidth", "integer between 1 and 32768", options.tileWidth);
          }
        }
        if (is.defined(options.tileHeight)) {
          if (is.integer(options.tileHeight) && is.inRange(options.tileHeight, 1, 32768)) {
            this.options.jp2TileHeight = options.tileHeight;
          } else {
            throw is.invalidParameterError("tileHeight", "integer between 1 and 32768", options.tileHeight);
          }
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.jp2ChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
      }
      return this._updateFormatOut("jp2", options);
    }
    __name(jp2, "jp2");
    function trySetAnimationOptions(source, target) {
      if (is.object(source) && is.defined(source.loop)) {
        if (is.integer(source.loop) && is.inRange(source.loop, 0, 65535)) {
          target.loop = source.loop;
        } else {
          throw is.invalidParameterError("loop", "integer between 0 and 65535", source.loop);
        }
      }
      if (is.object(source) && is.defined(source.delay)) {
        if (is.integer(source.delay) && is.inRange(source.delay, 0, 65535)) {
          target.delay = [source.delay];
        } else if (Array.isArray(source.delay) && source.delay.every(is.integer) && source.delay.every((v) => is.inRange(v, 0, 65535))) {
          target.delay = source.delay;
        } else {
          throw is.invalidParameterError("delay", "integer or an array of integers between 0 and 65535", source.delay);
        }
      }
    }
    __name(trySetAnimationOptions, "trySetAnimationOptions");
    function tiff(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.tiffQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.bitdepth)) {
          if (is.integer(options.bitdepth) && is.inArray(options.bitdepth, [1, 2, 4, 8])) {
            this.options.tiffBitdepth = options.bitdepth;
          } else {
            throw is.invalidParameterError("bitdepth", "1, 2, 4 or 8", options.bitdepth);
          }
        }
        if (is.defined(options.tile)) {
          this._setBooleanOption("tiffTile", options.tile);
        }
        if (is.defined(options.tileWidth)) {
          if (is.integer(options.tileWidth) && options.tileWidth > 0) {
            this.options.tiffTileWidth = options.tileWidth;
          } else {
            throw is.invalidParameterError("tileWidth", "integer greater than zero", options.tileWidth);
          }
        }
        if (is.defined(options.tileHeight)) {
          if (is.integer(options.tileHeight) && options.tileHeight > 0) {
            this.options.tiffTileHeight = options.tileHeight;
          } else {
            throw is.invalidParameterError("tileHeight", "integer greater than zero", options.tileHeight);
          }
        }
        if (is.defined(options.miniswhite)) {
          this._setBooleanOption("tiffMiniswhite", options.miniswhite);
        }
        if (is.defined(options.pyramid)) {
          this._setBooleanOption("tiffPyramid", options.pyramid);
        }
        if (is.defined(options.xres)) {
          if (is.number(options.xres) && options.xres > 0) {
            this.options.tiffXres = options.xres;
          } else {
            throw is.invalidParameterError("xres", "number greater than zero", options.xres);
          }
        }
        if (is.defined(options.yres)) {
          if (is.number(options.yres) && options.yres > 0) {
            this.options.tiffYres = options.yres;
          } else {
            throw is.invalidParameterError("yres", "number greater than zero", options.yres);
          }
        }
        if (is.defined(options.compression)) {
          if (is.string(options.compression) && is.inArray(options.compression, ["none", "jpeg", "deflate", "packbits", "ccittfax4", "lzw", "webp", "zstd", "jp2k"])) {
            this.options.tiffCompression = options.compression;
          } else {
            throw is.invalidParameterError("compression", "one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k", options.compression);
          }
        }
        if (is.defined(options.bigtiff)) {
          this._setBooleanOption("tiffBigtiff", options.bigtiff);
        }
        if (is.defined(options.predictor)) {
          if (is.string(options.predictor) && is.inArray(options.predictor, ["none", "horizontal", "float"])) {
            this.options.tiffPredictor = options.predictor;
          } else {
            throw is.invalidParameterError("predictor", "one of: none, horizontal, float", options.predictor);
          }
        }
        if (is.defined(options.resolutionUnit)) {
          if (is.string(options.resolutionUnit) && is.inArray(options.resolutionUnit, ["inch", "cm"])) {
            this.options.tiffResolutionUnit = options.resolutionUnit;
          } else {
            throw is.invalidParameterError("resolutionUnit", "one of: inch, cm", options.resolutionUnit);
          }
        }
      }
      return this._updateFormatOut("tiff", options);
    }
    __name(tiff, "tiff");
    function avif(options) {
      return this.heif({ ...options, compression: "av1" });
    }
    __name(avif, "avif");
    function heif(options) {
      if (is.object(options)) {
        if (is.string(options.compression) && is.inArray(options.compression, ["av1", "hevc"])) {
          this.options.heifCompression = options.compression;
        } else {
          throw is.invalidParameterError("compression", "one of: av1, hevc", options.compression);
        }
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.heifQuality = options.quality;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.heifLossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 0, 9)) {
            this.options.heifEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 0 and 9", options.effort);
          }
        }
        if (is.defined(options.chromaSubsampling)) {
          if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ["4:2:0", "4:4:4"])) {
            this.options.heifChromaSubsampling = options.chromaSubsampling;
          } else {
            throw is.invalidParameterError("chromaSubsampling", "one of: 4:2:0, 4:4:4", options.chromaSubsampling);
          }
        }
        if (is.defined(options.bitdepth)) {
          if (is.integer(options.bitdepth) && is.inArray(options.bitdepth, [8, 10, 12])) {
            if (options.bitdepth !== 8 && this.constructor.versions.heif) {
              throw is.invalidParameterError("bitdepth when using prebuilt binaries", 8, options.bitdepth);
            }
            this.options.heifBitdepth = options.bitdepth;
          } else {
            throw is.invalidParameterError("bitdepth", "8, 10 or 12", options.bitdepth);
          }
        }
      } else {
        throw is.invalidParameterError("options", "Object", options);
      }
      return this._updateFormatOut("heif", options);
    }
    __name(heif, "heif");
    function jxl(options) {
      if (is.object(options)) {
        if (is.defined(options.quality)) {
          if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
            this.options.jxlDistance = options.quality >= 30 ? 0.1 + (100 - options.quality) * 0.09 : 53 / 3e3 * options.quality * options.quality - 23 / 20 * options.quality + 25;
          } else {
            throw is.invalidParameterError("quality", "integer between 1 and 100", options.quality);
          }
        } else if (is.defined(options.distance)) {
          if (is.number(options.distance) && is.inRange(options.distance, 0, 15)) {
            this.options.jxlDistance = options.distance;
          } else {
            throw is.invalidParameterError("distance", "number between 0.0 and 15.0", options.distance);
          }
        }
        if (is.defined(options.decodingTier)) {
          if (is.integer(options.decodingTier) && is.inRange(options.decodingTier, 0, 4)) {
            this.options.jxlDecodingTier = options.decodingTier;
          } else {
            throw is.invalidParameterError("decodingTier", "integer between 0 and 4", options.decodingTier);
          }
        }
        if (is.defined(options.lossless)) {
          if (is.bool(options.lossless)) {
            this.options.jxlLossless = options.lossless;
          } else {
            throw is.invalidParameterError("lossless", "boolean", options.lossless);
          }
        }
        if (is.defined(options.effort)) {
          if (is.integer(options.effort) && is.inRange(options.effort, 1, 9)) {
            this.options.jxlEffort = options.effort;
          } else {
            throw is.invalidParameterError("effort", "integer between 1 and 9", options.effort);
          }
        }
      }
      trySetAnimationOptions(options, this.options);
      return this._updateFormatOut("jxl", options);
    }
    __name(jxl, "jxl");
    function raw(options) {
      if (is.object(options)) {
        if (is.defined(options.depth)) {
          if (is.string(options.depth) && is.inArray(
            options.depth,
            ["char", "uchar", "short", "ushort", "int", "uint", "float", "complex", "double", "dpcomplex"]
          )) {
            this.options.rawDepth = options.depth;
          } else {
            throw is.invalidParameterError("depth", "one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex", options.depth);
          }
        }
      }
      return this._updateFormatOut("raw");
    }
    __name(raw, "raw");
    function tile(options) {
      if (is.object(options)) {
        if (is.defined(options.size)) {
          if (is.integer(options.size) && is.inRange(options.size, 1, 8192)) {
            this.options.tileSize = options.size;
          } else {
            throw is.invalidParameterError("size", "integer between 1 and 8192", options.size);
          }
        }
        if (is.defined(options.overlap)) {
          if (is.integer(options.overlap) && is.inRange(options.overlap, 0, 8192)) {
            if (options.overlap > this.options.tileSize) {
              throw is.invalidParameterError("overlap", `<= size (${this.options.tileSize})`, options.overlap);
            }
            this.options.tileOverlap = options.overlap;
          } else {
            throw is.invalidParameterError("overlap", "integer between 0 and 8192", options.overlap);
          }
        }
        if (is.defined(options.container)) {
          if (is.string(options.container) && is.inArray(options.container, ["fs", "zip"])) {
            this.options.tileContainer = options.container;
          } else {
            throw is.invalidParameterError("container", "one of: fs, zip", options.container);
          }
        }
        if (is.defined(options.layout)) {
          if (is.string(options.layout) && is.inArray(options.layout, ["dz", "google", "iiif", "iiif3", "zoomify"])) {
            this.options.tileLayout = options.layout;
          } else {
            throw is.invalidParameterError("layout", "one of: dz, google, iiif, iiif3, zoomify", options.layout);
          }
        }
        if (is.defined(options.angle)) {
          if (is.integer(options.angle) && !(options.angle % 90)) {
            this.options.tileAngle = options.angle;
          } else {
            throw is.invalidParameterError("angle", "positive/negative multiple of 90", options.angle);
          }
        }
        this._setBackgroundColourOption("tileBackground", options.background);
        if (is.defined(options.depth)) {
          if (is.string(options.depth) && is.inArray(options.depth, ["onepixel", "onetile", "one"])) {
            this.options.tileDepth = options.depth;
          } else {
            throw is.invalidParameterError("depth", "one of: onepixel, onetile, one", options.depth);
          }
        }
        if (is.defined(options.skipBlanks)) {
          if (is.integer(options.skipBlanks) && is.inRange(options.skipBlanks, -1, 65535)) {
            this.options.tileSkipBlanks = options.skipBlanks;
          } else {
            throw is.invalidParameterError("skipBlanks", "integer between -1 and 255/65535", options.skipBlanks);
          }
        } else if (is.defined(options.layout) && options.layout === "google") {
          this.options.tileSkipBlanks = 5;
        }
        const centre = is.bool(options.center) ? options.center : options.centre;
        if (is.defined(centre)) {
          this._setBooleanOption("tileCentre", centre);
        }
        if (is.defined(options.id)) {
          if (is.string(options.id)) {
            this.options.tileId = options.id;
          } else {
            throw is.invalidParameterError("id", "string", options.id);
          }
        }
        if (is.defined(options.basename)) {
          if (is.string(options.basename)) {
            this.options.tileBasename = options.basename;
          } else {
            throw is.invalidParameterError("basename", "string", options.basename);
          }
        }
      }
      if (is.inArray(this.options.formatOut, ["jpeg", "png", "webp"])) {
        this.options.tileFormat = this.options.formatOut;
      } else if (this.options.formatOut !== "input") {
        throw is.invalidParameterError("format", "one of: jpeg, png, webp", this.options.formatOut);
      }
      return this._updateFormatOut("dz");
    }
    __name(tile, "tile");
    function timeout(options) {
      if (!is.plainObject(options)) {
        throw is.invalidParameterError("options", "object", options);
      }
      if (is.integer(options.seconds) && is.inRange(options.seconds, 0, 3600)) {
        this.options.timeoutSeconds = options.seconds;
      } else {
        throw is.invalidParameterError("seconds", "integer between 0 and 3600", options.seconds);
      }
      return this;
    }
    __name(timeout, "timeout");
    function _updateFormatOut(formatOut, options) {
      if (!(is.object(options) && options.force === false)) {
        this.options.formatOut = formatOut;
      }
      return this;
    }
    __name(_updateFormatOut, "_updateFormatOut");
    function _setBooleanOption(key, val) {
      if (is.bool(val)) {
        this.options[key] = val;
      } else {
        throw is.invalidParameterError(key, "boolean", val);
      }
    }
    __name(_setBooleanOption, "_setBooleanOption");
    function _read() {
      if (!this.options.streamOut) {
        this.options.streamOut = true;
        const stack = Error();
        this._pipeline(void 0, stack);
      }
    }
    __name(_read, "_read");
    function _pipeline(callback, stack) {
      if (typeof callback === "function") {
        if (this._isStreamInput()) {
          this.on("finish", () => {
            this._flattenBufferIn();
            sharp2.pipeline(this.options, (err, data, info4) => {
              if (err) {
                callback(is.nativeError(err, stack));
              } else {
                callback(null, data, info4);
              }
            });
          });
        } else {
          sharp2.pipeline(this.options, (err, data, info4) => {
            if (err) {
              callback(is.nativeError(err, stack));
            } else {
              callback(null, data, info4);
            }
          });
        }
        return this;
      } else if (this.options.streamOut) {
        if (this._isStreamInput()) {
          this.once("finish", () => {
            this._flattenBufferIn();
            sharp2.pipeline(this.options, (err, data, info4) => {
              if (err) {
                this.emit("error", is.nativeError(err, stack));
              } else {
                this.emit("info", info4);
                this.push(data);
              }
              this.push(null);
              this.on("end", () => this.emit("close"));
            });
          });
          if (this.streamInFinished) {
            this.emit("finish");
          }
        } else {
          sharp2.pipeline(this.options, (err, data, info4) => {
            if (err) {
              this.emit("error", is.nativeError(err, stack));
            } else {
              this.emit("info", info4);
              this.push(data);
            }
            this.push(null);
            this.on("end", () => this.emit("close"));
          });
        }
        return this;
      } else {
        if (this._isStreamInput()) {
          return new Promise((resolve, reject) => {
            this.once("finish", () => {
              this._flattenBufferIn();
              sharp2.pipeline(this.options, (err, data, info4) => {
                if (err) {
                  reject(is.nativeError(err, stack));
                } else {
                  if (this.options.resolveWithObject) {
                    resolve({ data, info: info4 });
                  } else {
                    resolve(data);
                  }
                }
              });
            });
          });
        } else {
          return new Promise((resolve, reject) => {
            sharp2.pipeline(this.options, (err, data, info4) => {
              if (err) {
                reject(is.nativeError(err, stack));
              } else {
                if (this.options.resolveWithObject) {
                  resolve({ data, info: info4 });
                } else {
                  resolve(data);
                }
              }
            });
          });
        }
      }
    }
    __name(_pipeline, "_pipeline");
    module.exports = (Sharp) => {
      Object.assign(Sharp.prototype, {
        // Public
        toFile,
        toBuffer,
        keepExif,
        withExif,
        withExifMerge,
        keepIccProfile,
        withIccProfile,
        keepXmp,
        withXmp,
        keepMetadata,
        withMetadata,
        toFormat,
        jpeg,
        jp2,
        png,
        webp,
        tiff,
        avif,
        heif,
        jxl,
        gif,
        raw,
        tile,
        timeout,
        // Private
        _updateFormatOut,
        _setBooleanOption,
        _read,
        _pipeline
      });
    };
  }
});

// node-built-in-modules:node:events
import libDefault6 from "node:events";
var require_node_events = __commonJS({
  "node-built-in-modules:node:events"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault6;
  }
});

// node-built-in-modules:node:os
import libDefault7 from "node:os";
var require_node_os = __commonJS({
  "node-built-in-modules:node:os"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    module.exports = libDefault7;
  }
});

// node_modules/sharp/lib/utility.js
var require_utility = __commonJS({
  "node_modules/sharp/lib/utility.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var events = require_node_events();
    var detectLibc = require_detect_libc();
    var is = require_is();
    var { runtimePlatformArch } = require_libvips();
    var sharp2 = require_sharp();
    var runtimePlatform = runtimePlatformArch();
    var libvipsVersion = sharp2.libvipsVersion();
    var format = sharp2.format();
    format.heif.output.alias = ["avif", "heic"];
    format.jpeg.output.alias = ["jpe", "jpg"];
    format.tiff.output.alias = ["tif"];
    format.jp2k.output.alias = ["j2c", "j2k", "jp2", "jpx"];
    var interpolators = {
      /** [Nearest neighbour interpolation](http://en.wikipedia.org/wiki/Nearest-neighbor_interpolation). Suitable for image enlargement only. */
      nearest: "nearest",
      /** [Bilinear interpolation](http://en.wikipedia.org/wiki/Bilinear_interpolation). Faster than bicubic but with less smooth results. */
      bilinear: "bilinear",
      /** [Bicubic interpolation](http://en.wikipedia.org/wiki/Bicubic_interpolation) (the default). */
      bicubic: "bicubic",
      /** [LBB interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/lbb.cpp#L100). Prevents some "[acutance](http://en.wikipedia.org/wiki/Acutance)" but typically reduces performance by a factor of 2. */
      locallyBoundedBicubic: "lbb",
      /** [Nohalo interpolation](http://eprints.soton.ac.uk/268086/). Prevents acutance but typically reduces performance by a factor of 3. */
      nohalo: "nohalo",
      /** [VSQBS interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/vsqbs.cpp#L48). Prevents "staircasing" when enlarging. */
      vertexSplitQuadraticBasisSpline: "vsqbs"
    };
    var versions2 = {
      vips: libvipsVersion.semver
    };
    if (!libvipsVersion.isGlobal) {
      if (!libvipsVersion.isWasm) {
        try {
          versions2 = __require(`@img/sharp-${runtimePlatform}/versions`);
        } catch (_) {
          try {
            versions2 = __require(`@img/sharp-libvips-${runtimePlatform}/versions`);
          } catch (_2) {
          }
        }
      } else {
        try {
          versions2 = __require("@img/sharp-wasm32/versions");
        } catch (_) {
        }
      }
    }
    versions2.sharp = require_package().version;
    if (versions2.heif && format.heif) {
      format.heif.input.fileSuffix = [".avif"];
      format.heif.output.alias = ["avif"];
    }
    function cache(options) {
      if (is.bool(options)) {
        if (options) {
          return sharp2.cache(50, 20, 100);
        } else {
          return sharp2.cache(0, 0, 0);
        }
      } else if (is.object(options)) {
        return sharp2.cache(options.memory, options.files, options.items);
      } else {
        return sharp2.cache();
      }
    }
    __name(cache, "cache");
    cache(true);
    function concurrency(concurrency2) {
      return sharp2.concurrency(is.integer(concurrency2) ? concurrency2 : null);
    }
    __name(concurrency, "concurrency");
    if (detectLibc.familySync() === detectLibc.GLIBC && !sharp2._isUsingJemalloc()) {
      sharp2.concurrency(1);
    } else if (detectLibc.familySync() === detectLibc.MUSL && sharp2.concurrency() === 1024) {
      sharp2.concurrency(require_node_os().availableParallelism());
    }
    var queue = new events.EventEmitter();
    function counters() {
      return sharp2.counters();
    }
    __name(counters, "counters");
    function simd(simd2) {
      return sharp2.simd(is.bool(simd2) ? simd2 : null);
    }
    __name(simd, "simd");
    function block(options) {
      if (is.object(options)) {
        if (Array.isArray(options.operation) && options.operation.every(is.string)) {
          sharp2.block(options.operation, true);
        } else {
          throw is.invalidParameterError("operation", "Array<string>", options.operation);
        }
      } else {
        throw is.invalidParameterError("options", "object", options);
      }
    }
    __name(block, "block");
    function unblock(options) {
      if (is.object(options)) {
        if (Array.isArray(options.operation) && options.operation.every(is.string)) {
          sharp2.block(options.operation, false);
        } else {
          throw is.invalidParameterError("operation", "Array<string>", options.operation);
        }
      } else {
        throw is.invalidParameterError("options", "object", options);
      }
    }
    __name(unblock, "unblock");
    module.exports = (Sharp) => {
      Sharp.cache = cache;
      Sharp.concurrency = concurrency;
      Sharp.counters = counters;
      Sharp.simd = simd;
      Sharp.format = format;
      Sharp.interpolators = interpolators;
      Sharp.versions = versions2;
      Sharp.queue = queue;
      Sharp.block = block;
      Sharp.unblock = unblock;
    };
  }
});

// node_modules/sharp/lib/index.js
var require_lib = __commonJS({
  "node_modules/sharp/lib/index.js"(exports, module) {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var Sharp = require_constructor();
    require_input()(Sharp);
    require_resize()(Sharp);
    require_composite()(Sharp);
    require_operation()(Sharp);
    require_colour2()(Sharp);
    require_channel()(Sharp);
    require_output()(Sharp);
    require_utility()(Sharp);
    module.exports = Sharp;
  }
});

// dist/_worker.js/chunks/sharp_Bl30y7i7.mjs
var sharp_Bl30y7i7_exports = {};
__export(sharp_Bl30y7i7_exports, {
  default: () => sharp_default
});
async function loadSharp() {
  let t2;
  try {
    t2 = (await Promise.resolve().then(() => __toESM(require_lib(), 1))).default;
  } catch {
    throw new AstroError(MissingSharp);
  }
  return t2.cache(false), t2;
}
var sharp, qualityTable, fitMap, sharpService, sharp_default;
var init_sharp_Bl30y7i7 = __esm({
  "dist/_worker.js/chunks/sharp_Bl30y7i7.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_37mFo7XU();
    init_astro_assets_VJUJ1YrL();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    qualityTable = { low: 25, mid: 50, high: 80, max: 100 };
    __name(loadSharp, "loadSharp");
    fitMap = { fill: "fill", contain: "inside", cover: "cover", none: "outside", "scale-down": "inside", outside: "outside", inside: "inside" };
    sharpService = { validateOptions: baseService.validateOptions, getURL: baseService.getURL, parseURL: baseService.parseURL, getHTMLAttributes: baseService.getHTMLAttributes, getSrcSet: baseService.getSrcSet, async transform(t2, e2, i2) {
      sharp || (sharp = await loadSharp());
      const a2 = e2;
      if ("svg" === a2.format) return { data: t2, format: "svg" };
      const r2 = sharp(t2, { failOnError: false, pages: -1, limitInputPixels: i2.service.config.limitInputPixels });
      r2.rotate();
      const s2 = Boolean(a2.fit);
      if (a2.width && a2.height && a2.fit) {
        const t3 = fitMap[a2.fit] ?? "inside";
        r2.resize({ width: Math.round(a2.width), height: Math.round(a2.height), fit: t3, position: a2.position, withoutEnlargement: s2 });
      } else a2.height && !a2.width ? r2.resize({ height: Math.round(a2.height), withoutEnlargement: s2 }) : a2.width && r2.resize({ width: Math.round(a2.width), withoutEnlargement: s2 });
      if (a2.format) {
        let e3;
        if (a2.quality) {
          const t3 = parseQuality(a2.quality);
          e3 = "number" == typeof t3 ? t3 : a2.quality in qualityTable ? qualityTable[a2.quality] : void 0;
        }
        const i3 = 71 === t2[0] && 73 === t2[1] && 70 === t2[2] && 56 === t2[3] && (57 === t2[4] || 55 === t2[4]) && 97 === t2[5];
        "webp" === a2.format && i3 ? r2.webp({ quality: "number" == typeof e3 ? e3 : void 0, loop: 0 }) : r2.toFormat(a2.format, { quality: e3 });
      }
      const { data: o2, info: n2 } = await r2.toBuffer({ resolveWithObject: true });
      return { data: "buffer" in o2 && o2.buffer instanceof SharedArrayBuffer ? new Uint8Array(o2) : o2, format: n2.format };
    } };
    sharp_default = sharpService;
  }
});

// dist/_worker.js/chunks/_astro_assets_VJUJ1YrL.mjs
function isESMImportedImage(t2) {
  return "object" == typeof t2 || "function" == typeof t2 && "src" in t2;
}
function isRemoteImage(t2) {
  return "string" == typeof t2;
}
async function resolveSrc(t2) {
  if ("object" == typeof t2 && "then" in t2) {
    const e2 = await t2;
    return e2.default ?? e2;
  }
  return t2;
}
function isLocalService(t2) {
  return !!t2 && "transform" in t2;
}
function parseQuality(t2) {
  let e2 = parseInt(t2);
  return Number.isNaN(e2) ? t2 : e2;
}
function verifyOptions(t2) {
  if (!t2.src || !isRemoteImage(t2.src) && !isESMImportedImage(t2.src)) throw new AstroError({ ...ExpectedImage, message: ExpectedImage.message(JSON.stringify(t2.src), typeof t2.src, JSON.stringify(t2, (t3, e2) => void 0 === e2 ? null : e2)) });
  if (isESMImportedImage(t2.src)) {
    if (!VALID_SUPPORTED_FORMATS.includes(t2.src.format)) throw new AstroError({ ...UnsupportedImageFormat, message: UnsupportedImageFormat.message(t2.src.format, t2.src.src, VALID_SUPPORTED_FORMATS) });
    if (t2.widths && t2.densities) throw new AstroError(IncompatibleDescriptorOptions);
    if ("svg" === t2.src.format && "svg" !== t2.format || "svg" !== t2.src.format && "svg" === t2.format) throw new AstroError(UnsupportedImageConversion);
  } else {
    if (t2.src.startsWith("/@fs/") || !isRemotePath(t2.src) && !t2.src.startsWith("/")) throw new AstroError({ ...LocalImageUsedWrongly, message: LocalImageUsedWrongly.message(t2.src) });
    let e2;
    if (t2.width || t2.height ? !t2.width && t2.height ? e2 = "width" : t2.width && !t2.height && (e2 = "height") : e2 = "both", e2) throw new AstroError({ ...MissingImageDimension, message: MissingImageDimension.message(e2, t2.src) });
  }
}
function getTargetDimensions(t2) {
  let e2 = t2.width, i2 = t2.height;
  if (isESMImportedImage(t2.src)) {
    const a2 = t2.src.width / t2.src.height;
    i2 && !e2 ? e2 = Math.round(i2 * a2) : e2 && !i2 ? i2 = Math.round(e2 / a2) : e2 || i2 || (e2 = t2.src.width, i2 = t2.src.height);
  }
  return { targetWidth: e2, targetHeight: i2 };
}
function isImageMetadata(t2) {
  return t2.fsPath && !("fsPath" in t2);
}
function addCSSVarsToStyle(t2, e2) {
  const i2 = Object.entries(t2).filter(([t3, e3]) => void 0 !== e3 && false !== e3).map(([t3, e3]) => `--${t3}: ${e3};`).join(" ");
  if (!e2) return i2;
  return `${i2} ${"string" == typeof e2 ? e2 : toStyleString(e2)}`;
}
function readUInt(t2, e2, i2, a2) {
  i2 = i2 || 0;
  return methods["readUInt" + e2 + (a2 ? "BE" : "LE")](t2, i2);
}
function readBox(t2, e2) {
  if (t2.length - e2 < 4) return;
  const i2 = readUInt32BE(t2, e2);
  return t2.length - e2 < i2 ? void 0 : { name: toUTF8String(t2, 4 + e2, 8 + e2), offset: e2, size: i2 };
}
function findBox(t2, e2, i2) {
  for (; i2 < t2.length; ) {
    const a2 = readBox(t2, i2);
    if (!a2) break;
    if (a2.name === e2) return a2;
    i2 += a2.size;
  }
}
function getSizeFromOffset(t2, e2) {
  const i2 = t2[e2];
  return 0 === i2 ? 256 : i2;
}
function getImageSize$1(t2, e2) {
  const i2 = 6 + 16 * e2;
  return { height: getSizeFromOffset(t2, i2 + 1), width: getSizeFromOffset(t2, i2) };
}
function detectBrands(t2, e2, i2) {
  let a2 = {};
  for (let o2 = e2; o2 <= i2; o2 += 4) {
    const e3 = toUTF8String(t2, o2, o2 + 4);
    e3 in brandMap && (a2[e3] = 1);
  }
  return "avif" in a2 || "avis" in a2 ? "avif" : "heic" in a2 || "heix" in a2 || "hevc" in a2 || "hevx" in a2 ? "heic" : "mif1" in a2 || "msf1" in a2 ? "heif" : void 0;
}
function readImageHeader(t2, e2) {
  const i2 = e2 + 4;
  return [toUTF8String(t2, e2, i2), readUInt32BE(t2, i2)];
}
function getImageSize(t2) {
  const e2 = ICON_TYPE_SIZE[t2];
  return { width: e2, height: e2, type: t2 };
}
function isEXIF(t2) {
  return "45786966" === toHexString(t2, 2, 6);
}
function extractSize(t2, e2) {
  return { height: readUInt16BE(t2, e2), width: readUInt16BE(t2, e2 + 2) };
}
function extractOrientation(t2, e2) {
  const i2 = readUInt(t2, 16, 14, e2);
  for (let a2 = 0; a2 < i2; a2++) {
    const i3 = 16 + 12 * a2, o2 = i3 + 12;
    if (i3 > t2.length) return;
    const s2 = t2.slice(i3, o2);
    if (274 === readUInt(s2, 16, 0, e2)) {
      if (3 !== readUInt(s2, 16, 2, e2)) return;
      if (1 !== readUInt(s2, 32, 4, e2)) return;
      return readUInt(s2, 16, 8, e2);
    }
  }
}
function validateExifBlock(t2, e2) {
  const i2 = t2.slice(2, e2), a2 = toHexString(i2, 6, 8), o2 = "4d4d" === a2;
  if (o2 || "4949" === a2) return extractOrientation(i2, o2);
}
function validateInput(t2, e2) {
  if (e2 > t2.length) throw new TypeError("Corrupt JPG, exceeded buffer limits");
}
function parseLength(t2) {
  const e2 = unitsReg.exec(t2);
  if (e2) return Math.round(Number(e2[1]) * (units[e2[2]] || 1));
}
function parseViewbox(t2) {
  const e2 = t2.split(" ");
  return { height: parseLength(e2[3]), width: parseLength(e2[2]) };
}
function parseAttributes(t2) {
  const e2 = extractorRegExps.width.exec(t2), i2 = extractorRegExps.height.exec(t2), a2 = extractorRegExps.viewbox.exec(t2);
  return { height: i2 && parseLength(i2[2]), viewbox: a2 && parseViewbox(a2[2]), width: e2 && parseLength(e2[2]) };
}
function calculateByDimensions(t2) {
  return { height: t2.height, width: t2.width };
}
function calculateByViewbox(t2, e2) {
  const i2 = e2.width / e2.height;
  return t2.width ? { height: Math.floor(t2.width / i2), width: t2.width } : t2.height ? { height: t2.height, width: Math.floor(t2.height * i2) } : { height: e2.height, width: e2.width };
}
function readIFD(t2, e2) {
  const i2 = readUInt(t2, 32, 4, e2);
  return t2.slice(i2 + 2);
}
function readValue(t2, e2) {
  const i2 = readUInt(t2, 16, 8, e2);
  return (readUInt(t2, 16, 10, e2) << 16) + i2;
}
function nextTag(t2) {
  if (t2.length > 24) return t2.slice(12);
}
function extractTags(t2, e2) {
  const i2 = {};
  let a2 = t2;
  for (; a2 && a2.length; ) {
    const t3 = readUInt(a2, 16, 0, e2), o2 = readUInt(a2, 16, 2, e2), s2 = readUInt(a2, 32, 4, e2);
    if (0 === t3) break;
    1 !== s2 || 3 !== o2 && 4 !== o2 || (i2[t3] = readValue(a2, e2)), a2 = nextTag(a2);
  }
  return i2;
}
function determineEndianness(t2) {
  const e2 = toUTF8String(t2, 0, 2);
  return "II" === e2 ? "LE" : "MM" === e2 ? "BE" : void 0;
}
function calculateExtended(t2) {
  return { height: 1 + readUInt24LE(t2, 7), width: 1 + readUInt24LE(t2, 4) };
}
function calculateLossless(t2) {
  return { height: 1 + ((15 & t2[4]) << 10 | t2[3] << 2 | (192 & t2[2]) >> 6), width: 1 + ((63 & t2[2]) << 8 | t2[1]) };
}
function calculateLossy(t2) {
  return { height: 16383 & readInt16LE(t2, 8), width: 16383 & readInt16LE(t2, 6) };
}
function detector(t2) {
  const e2 = t2[0], i2 = firstBytes.get(e2);
  return i2 && typeHandlers.get(i2).validate(t2) ? i2 : types.find((e3) => typeHandlers.get(e3).validate(t2));
}
function lookup$1(t2) {
  const e2 = detector(t2);
  if (void 0 !== e2) {
    const i2 = typeHandlers.get(e2).calculate(t2);
    if (void 0 !== i2) return i2.type = i2.type ?? e2, i2;
  }
  throw new TypeError("unsupported file type: " + e2);
}
async function imageMetadata(t2, e2) {
  let i2;
  try {
    i2 = lookup$1(t2);
  } catch {
    throw new AstroError({ ...NoImageMetadata, message: NoImageMetadata.message(e2) });
  }
  if (!i2.height || !i2.width || !i2.type) throw new AstroError({ ...NoImageMetadata, message: NoImageMetadata.message(e2) });
  const { width: a2, height: o2, type: s2, orientation: r2 } = i2, n2 = (r2 || 0) >= 5;
  return { width: n2 ? o2 : a2, height: n2 ? a2 : o2, format: s2, orientation: r2 };
}
async function inferRemoteSize(t2) {
  const e2 = await fetch(t2);
  if (!e2.body || !e2.ok) throw new AstroError({ ...FailedToFetchRemoteImageDimensions, message: FailedToFetchRemoteImageDimensions.message(t2) });
  const i2 = e2.body.getReader();
  let a2, o2, s2 = new Uint8Array();
  for (; !a2; ) {
    const e3 = await i2.read();
    if (a2 = e3.done, a2) break;
    if (e3.value) {
      o2 = e3.value;
      let a3 = new Uint8Array(s2.length + o2.length);
      a3.set(s2, 0), a3.set(o2, s2.length), s2 = a3;
      try {
        const e4 = await imageMetadata(s2, t2);
        if (e4) return await i2.cancel(), e4;
      } catch {
      }
    }
  }
  throw new AstroError({ ...NoImageMetadata, message: NoImageMetadata.message(t2) });
}
function createPlaceholderURL(t2) {
  return new URL(t2, PLACEHOLDER_BASE);
}
function stringifyPlaceholderURL(t2) {
  return t2.href.replace(PLACEHOLDER_BASE, "");
}
async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: t2 } = await Promise.resolve().then(() => (init_sharp_Bl30y7i7(), sharp_Bl30y7i7_exports)).catch((t3) => {
      const e2 = new AstroError(InvalidImageService);
      throw e2.cause = t3, e2;
    });
    return globalThis.astroAsset || (globalThis.astroAsset = {}), globalThis.astroAsset.imageService = t2, t2;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(t2, e2) {
  if (!t2 || "object" != typeof t2) throw new AstroError({ ...ExpectedImageOptions, message: ExpectedImageOptions.message(JSON.stringify(t2)) });
  if (void 0 === t2.src) throw new AstroError({ ...ExpectedImage, message: ExpectedImage.message(t2.src, "undefined", JSON.stringify(t2)) });
  if (isImageMetadata(t2)) throw new AstroError(ExpectedNotESMImage);
  const i2 = await getConfiguredImageService(), a2 = { ...t2, src: await resolveSrc(t2.src) };
  let o2, s2;
  if (t2.inferSize && isRemoteImage(a2.src) && isRemotePath(a2.src)) {
    const t3 = await inferRemoteSize(a2.src);
    a2.width ??= t3.width, a2.height ??= t3.height, o2 = t3.width, s2 = t3.height, delete a2.inferSize;
  }
  const r2 = isESMImportedImage(a2.src) ? a2.src.fsPath : void 0, n2 = isESMImportedImage(a2.src) ? a2.src.clone ?? a2.src : a2.src;
  if (isESMImportedImage(n2) && (o2 = n2.width, s2 = n2.height), o2 && s2) {
    const t3 = o2 / s2;
    a2.height && !a2.width ? a2.width = Math.round(a2.height * t3) : a2.width && !a2.height ? a2.height = Math.round(a2.width / t3) : a2.width || a2.height || (a2.width = o2, a2.height = s2);
  }
  a2.src = n2;
  const p = t2.layout ?? e2.layout ?? "none";
  a2.priority ? (a2.loading ??= "eager", a2.decoding ??= "sync", a2.fetchpriority ??= "high", delete a2.priority) : (a2.loading ??= "lazy", a2.decoding ??= "async", a2.fetchpriority ??= "auto"), "none" !== p && (a2.widths ||= getWidths({ width: a2.width, layout: p, originalWidth: o2, breakpoints: e2.breakpoints?.length ? e2.breakpoints : isLocalService(i2) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS }), a2.sizes ||= getSizesAttribute({ width: a2.width, layout: p }), delete a2.densities, a2.style = addCSSVarsToStyle({ fit: cssFitValues.includes(a2.fit ?? "") && a2.fit, pos: a2.position }, a2.style), a2["data-astro-image"] = p);
  const c = i2.validateOptions ? await i2.validateOptions(a2, e2) : a2, l = i2.getSrcSet ? await i2.getSrcSet(c, e2) : [];
  let m = await i2.getURL(c, e2);
  const d = /* @__PURE__ */ __name((t3) => t3.width === c.width && t3.height === c.height && t3.format === c.format, "d");
  let g = await Promise.all(l.map(async (t3) => ({ transform: t3.transform, url: d(t3.transform) ? m : await i2.getURL(t3.transform, e2), descriptor: t3.descriptor, attributes: t3.attributes })));
  if (!isLocalService(i2) || !globalThis.astroAsset.addStaticImage || isRemoteImage(c.src) && m === c.src) {
    if (e2.assetQueryParams) {
      const t3 = createPlaceholderURL(m);
      e2.assetQueryParams.forEach((e3, i3) => {
        t3.searchParams.set(i3, e3);
      }), m = stringifyPlaceholderURL(t3), g = g.map((t4) => {
        const i3 = createPlaceholderURL(t4.url);
        return e2.assetQueryParams.forEach((t5, e3) => {
          i3.searchParams.set(e3, t5);
        }), { ...t4, url: stringifyPlaceholderURL(i3) };
      });
    }
  } else {
    const t3 = i2.propertiesToHash ?? DEFAULT_HASH_PROPS;
    m = globalThis.astroAsset.addStaticImage(c, t3, r2), g = l.map((e3) => ({ transform: e3.transform, url: d(e3.transform) ? m : globalThis.astroAsset.addStaticImage(e3.transform, t3, r2), descriptor: e3.descriptor, attributes: e3.attributes }));
  }
  return { rawOptions: a2, options: c, src: m, srcSet: { values: g, attribute: g.map((t3) => `${t3.url} ${t3.descriptor}`).join(", ") }, attributes: void 0 !== i2.getHTMLAttributes ? await i2.getHTMLAttributes(c, e2) : {} };
}
function lookup(t2) {
  let e2 = ("" + t2).trim().toLowerCase(), i2 = e2.lastIndexOf(".");
  return mimes[~i2 ? e2.substring(++i2) : e2];
}
function filterPreloads(t2, e2) {
  return e2 ? true === e2 ? t2 : t2.filter(({ weight: t3, style: i2, subset: a2 }) => e2.some((e3) => !(void 0 !== e3.weight && void 0 !== t3 && !checkWeight(e3.weight.toString(), t3)) && ((void 0 === e3.style || e3.style === i2) && (void 0 === e3.subset || e3.subset === a2)))) : null;
}
function checkWeight(t2, e2) {
  const i2 = t2.trim();
  if (i2.includes(" ")) return i2 === e2;
  if (e2.includes(" ")) {
    const [i3, a2] = e2.split(" "), o2 = Number.parseInt(t2);
    return o2 >= Number.parseInt(i3) && o2 <= Number.parseInt(a2);
  }
  return t2 === e2;
}
var DEFAULT_RESOLUTIONS, LIMITED_RESOLUTIONS, getWidths, getSizesAttribute, sortNumeric, baseService, cssFitValues, decoder2, toUTF8String, toHexString, readInt16LE, readUInt16BE, readUInt16LE, readUInt24LE, readInt32LE, readUInt32BE, readUInt32LE, methods, BMP, ICO, CUR, DDS, gifRegexp, GIF, brandMap, HEIF, ICON_TYPE_SIZE, ICNS, J2C, JP2, JPG, KTX, PNG, PNMTypes, handlers, PNM, PSD, svgReg, extractorRegExps, units, unitsReg, SVG, TGA, signatures, TIFF, WEBP, typeHandlers, types, firstBytes, PLACEHOLDER_BASE, $$Astro$2, $$Image, mimes, $$Astro$1, $$Picture, fontsMod, $$Astro, $$Font, imageConfig, getImage, _astro_assets;
var init_astro_assets_VJUJ1YrL = __esm({
  "dist/_worker.js/chunks/_astro_assets_VJUJ1YrL.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_path_mW90u446();
    init_server_37mFo7XU();
    init_consts_47CwkweC();
    init_remote_CrdlObHx();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    DEFAULT_RESOLUTIONS = [640, 750, 828, 960, 1080, 1280, 1668, 1920, 2048, 2560, 3200, 3840, 4480, 5120, 6016];
    LIMITED_RESOLUTIONS = [640, 750, 828, 1080, 1280, 1668, 2048, 2560];
    getWidths = /* @__PURE__ */ __name(({ width: t2, layout: e2, breakpoints: i2 = DEFAULT_RESOLUTIONS, originalWidth: a2 }) => {
      const o2 = /* @__PURE__ */ __name((t3) => !a2 || t3 <= a2, "o");
      if ("full-width" === e2) return i2.filter(o2);
      if (!t2) return [];
      const s2 = 2 * t2, r2 = a2 ? Math.min(s2, a2) : s2;
      return "fixed" === e2 ? a2 && t2 > a2 ? [a2] : [t2, r2] : "constrained" === e2 ? [t2, s2, ...i2].filter((t3) => t3 <= r2).sort((t3, e3) => t3 - e3) : [];
    }, "getWidths");
    getSizesAttribute = /* @__PURE__ */ __name(({ width: t2, layout: e2 }) => {
      if (t2 && e2) switch (e2) {
        case "constrained":
          return `(min-width: ${t2}px) ${t2}px, 100vw`;
        case "fixed":
          return `${t2}px`;
        case "full-width":
          return "100vw";
        default:
          return;
      }
    }, "getSizesAttribute");
    __name(isESMImportedImage, "isESMImportedImage");
    __name(isRemoteImage, "isRemoteImage");
    __name(resolveSrc, "resolveSrc");
    __name(isLocalService, "isLocalService");
    __name(parseQuality, "parseQuality");
    sortNumeric = /* @__PURE__ */ __name((t2, e2) => t2 - e2, "sortNumeric");
    __name(verifyOptions, "verifyOptions");
    baseService = { validateOptions: /* @__PURE__ */ __name((t2) => (isESMImportedImage(t2.src) && "svg" === t2.src.format && (t2.format = "svg"), verifyOptions(t2), t2.format || (t2.format = DEFAULT_OUTPUT_FORMAT), t2.width && (t2.width = Math.round(t2.width)), t2.height && (t2.height = Math.round(t2.height)), t2.layout && t2.width && t2.height && (t2.fit ??= "cover", delete t2.layout), "none" === t2.fit && delete t2.fit, t2), "validateOptions"), getHTMLAttributes(t2) {
      const { targetWidth: e2, targetHeight: i2 } = getTargetDimensions(t2), { src: a2, width: o2, height: s2, format: r2, quality: n2, densities: p, widths: c, formats: l, layout: m, priority: d, fit: g, position: h, ...f } = t2;
      return { ...f, width: e2, height: i2, loading: f.loading ?? "lazy", decoding: f.decoding ?? "async" };
    }, getSrcSet(t2) {
      const { targetWidth: e2, targetHeight: i2 } = getTargetDimensions(t2), a2 = e2 / i2, { widths: o2, densities: s2 } = t2, r2 = t2.format ?? DEFAULT_OUTPUT_FORMAT;
      let n2 = (o2 ?? []).sort(sortNumeric), p = t2.width, c = 1 / 0;
      isESMImportedImage(t2.src) && (p = t2.src.width, c = p, n2.length > 0 && n2.at(-1) > c && (n2 = n2.filter((t3) => t3 <= c), n2.push(c))), n2 = Array.from(new Set(n2));
      const { width: l, height: m, ...d } = t2;
      let g = [];
      if (s2) {
        const t3 = s2.map((t4) => "number" == typeof t4 ? t4 : parseFloat(t4));
        g = t3.sort(sortNumeric).map((t4) => Math.round(e2 * t4)).map((e3, i3) => ({ width: e3, descriptor: `${t3[i3]}x` }));
      } else n2.length > 0 && (g = n2.map((t3) => ({ width: t3, descriptor: `${t3}w` })));
      return g.map(({ width: t3, descriptor: e3 }) => {
        const i3 = Math.round(t3 / a2);
        return { transform: { ...d, width: t3, height: i3 }, descriptor: e3, attributes: { type: `image/${r2}` } };
      });
    }, getURL(t2, e2) {
      const i2 = new URLSearchParams();
      if (isESMImportedImage(t2.src)) i2.append("href", t2.src.src);
      else {
        if (!isRemoteAllowed(t2.src, e2)) return t2.src;
        i2.append("href", t2.src);
      }
      Object.entries({ w: "width", h: "height", q: "quality", f: "format", fit: "fit", position: "position" }).forEach(([e3, a3]) => {
        t2[a3] && i2.append(e3, t2[a3].toString());
      });
      let a2 = `${joinPaths("/", e2.endpoint.route)}?${i2}`;
      if (e2.assetQueryParams) {
        const t3 = e2.assetQueryParams.toString();
        t3 && (a2 += "&" + t3);
      }
      return a2;
    }, parseURL(t2) {
      const e2 = t2.searchParams;
      if (!e2.has("href")) return;
      return { src: e2.get("href"), width: e2.has("w") ? parseInt(e2.get("w")) : void 0, height: e2.has("h") ? parseInt(e2.get("h")) : void 0, format: e2.get("f"), quality: e2.get("q"), fit: e2.get("fit"), position: e2.get("position") ?? void 0 };
    } };
    __name(getTargetDimensions, "getTargetDimensions");
    __name(isImageMetadata, "isImageMetadata");
    cssFitValues = ["fill", "contain", "cover", "scale-down"];
    __name(addCSSVarsToStyle, "addCSSVarsToStyle");
    decoder2 = new TextDecoder();
    toUTF8String = /* @__PURE__ */ __name((t2, e2 = 0, i2 = t2.length) => decoder2.decode(t2.slice(e2, i2)), "toUTF8String");
    toHexString = /* @__PURE__ */ __name((t2, e2 = 0, i2 = t2.length) => t2.slice(e2, i2).reduce((t3, e3) => t3 + ("0" + e3.toString(16)).slice(-2), ""), "toHexString");
    readInt16LE = /* @__PURE__ */ __name((t2, e2 = 0) => {
      const i2 = t2[e2] + 256 * t2[e2 + 1];
      return i2 | 131070 * (32768 & i2);
    }, "readInt16LE");
    readUInt16BE = /* @__PURE__ */ __name((t2, e2 = 0) => 256 * t2[e2] + t2[e2 + 1], "readUInt16BE");
    readUInt16LE = /* @__PURE__ */ __name((t2, e2 = 0) => t2[e2] + 256 * t2[e2 + 1], "readUInt16LE");
    readUInt24LE = /* @__PURE__ */ __name((t2, e2 = 0) => t2[e2] + 256 * t2[e2 + 1] + 65536 * t2[e2 + 2], "readUInt24LE");
    readInt32LE = /* @__PURE__ */ __name((t2, e2 = 0) => t2[e2] + 256 * t2[e2 + 1] + 65536 * t2[e2 + 2] + (t2[e2 + 3] << 24), "readInt32LE");
    readUInt32BE = /* @__PURE__ */ __name((t2, e2 = 0) => t2[e2] * 2 ** 24 + 65536 * t2[e2 + 1] + 256 * t2[e2 + 2] + t2[e2 + 3], "readUInt32BE");
    readUInt32LE = /* @__PURE__ */ __name((t2, e2 = 0) => t2[e2] + 256 * t2[e2 + 1] + 65536 * t2[e2 + 2] + t2[e2 + 3] * 2 ** 24, "readUInt32LE");
    methods = { readUInt16BE, readUInt16LE, readUInt32BE, readUInt32LE };
    __name(readUInt, "readUInt");
    __name(readBox, "readBox");
    __name(findBox, "findBox");
    BMP = { validate: /* @__PURE__ */ __name((t2) => "BM" === toUTF8String(t2, 0, 2), "validate"), calculate: /* @__PURE__ */ __name((t2) => ({ height: Math.abs(readInt32LE(t2, 22)), width: readUInt32LE(t2, 18) }), "calculate") };
    __name(getSizeFromOffset, "getSizeFromOffset");
    __name(getImageSize$1, "getImageSize$1");
    ICO = { validate(t2) {
      const e2 = readUInt16LE(t2, 0), i2 = readUInt16LE(t2, 4);
      if (0 !== e2 || 0 === i2) return false;
      return 1 === readUInt16LE(t2, 2);
    }, calculate(t2) {
      const e2 = readUInt16LE(t2, 4), i2 = getImageSize$1(t2, 0);
      if (1 === e2) return i2;
      const a2 = [i2];
      for (let i3 = 1; i3 < e2; i3 += 1) a2.push(getImageSize$1(t2, i3));
      return { height: i2.height, images: a2, width: i2.width };
    } };
    CUR = { validate(t2) {
      const e2 = readUInt16LE(t2, 0), i2 = readUInt16LE(t2, 4);
      if (0 !== e2 || 0 === i2) return false;
      return 2 === readUInt16LE(t2, 2);
    }, calculate: /* @__PURE__ */ __name((t2) => ICO.calculate(t2), "calculate") };
    DDS = { validate: /* @__PURE__ */ __name((t2) => 542327876 === readUInt32LE(t2, 0), "validate"), calculate: /* @__PURE__ */ __name((t2) => ({ height: readUInt32LE(t2, 12), width: readUInt32LE(t2, 16) }), "calculate") };
    gifRegexp = /^GIF8[79]a/;
    GIF = { validate: /* @__PURE__ */ __name((t2) => gifRegexp.test(toUTF8String(t2, 0, 6)), "validate"), calculate: /* @__PURE__ */ __name((t2) => ({ height: readUInt16LE(t2, 8), width: readUInt16LE(t2, 6) }), "calculate") };
    brandMap = { avif: "avif", avis: "avif", mif1: "heif", msf1: "heif", heic: "heic", heix: "heic", hevc: "heic", hevx: "heic" };
    __name(detectBrands, "detectBrands");
    HEIF = { validate(t2) {
      const e2 = toUTF8String(t2, 4, 8), i2 = toUTF8String(t2, 8, 12);
      return "ftyp" === e2 && i2 in brandMap;
    }, calculate(t2) {
      const e2 = findBox(t2, "meta", 0), i2 = e2 && findBox(t2, "iprp", e2.offset + 12), a2 = i2 && findBox(t2, "ipco", i2.offset + 8), o2 = a2 && findBox(t2, "ispe", a2.offset + 8);
      if (o2) return { height: readUInt32BE(t2, o2.offset + 16), width: readUInt32BE(t2, o2.offset + 12), type: detectBrands(t2, 8, e2.offset) };
      throw new TypeError("Invalid HEIF, no size found");
    } };
    ICON_TYPE_SIZE = { ICON: 32, "ICN#": 32, "icm#": 16, icm4: 16, icm8: 16, "ics#": 16, ics4: 16, ics8: 16, is32: 16, s8mk: 16, icp4: 16, icl4: 32, icl8: 32, il32: 32, l8mk: 32, icp5: 32, ic11: 32, ich4: 48, ich8: 48, ih32: 48, h8mk: 48, icp6: 64, ic12: 32, it32: 128, t8mk: 128, ic07: 128, ic08: 256, ic13: 256, ic09: 512, ic14: 512, ic10: 1024 };
    __name(readImageHeader, "readImageHeader");
    __name(getImageSize, "getImageSize");
    ICNS = { validate: /* @__PURE__ */ __name((t2) => "icns" === toUTF8String(t2, 0, 4), "validate"), calculate(t2) {
      const e2 = t2.length, i2 = readUInt32BE(t2, 4);
      let a2 = 8, o2 = readImageHeader(t2, a2), s2 = getImageSize(o2[0]);
      if (a2 += o2[1], a2 === i2) return s2;
      const r2 = { height: s2.height, images: [s2], width: s2.width };
      for (; a2 < i2 && a2 < e2; ) o2 = readImageHeader(t2, a2), s2 = getImageSize(o2[0]), a2 += o2[1], r2.images.push(s2);
      return r2;
    } };
    J2C = { validate: /* @__PURE__ */ __name((t2) => "ff4fff51" === toHexString(t2, 0, 4), "validate"), calculate: /* @__PURE__ */ __name((t2) => ({ height: readUInt32BE(t2, 12), width: readUInt32BE(t2, 8) }), "calculate") };
    JP2 = { validate(t2) {
      if (1783636e3 !== readUInt32BE(t2, 4) || readUInt32BE(t2, 0) < 1) return false;
      const e2 = findBox(t2, "ftyp", 0);
      return !!e2 && 1718909296 === readUInt32BE(t2, e2.offset + 4);
    }, calculate(t2) {
      const e2 = findBox(t2, "jp2h", 0), i2 = e2 && findBox(t2, "ihdr", e2.offset + 8);
      if (i2) return { height: readUInt32BE(t2, i2.offset + 8), width: readUInt32BE(t2, i2.offset + 12) };
      throw new TypeError("Unsupported JPEG 2000 format");
    } };
    __name(isEXIF, "isEXIF");
    __name(extractSize, "extractSize");
    __name(extractOrientation, "extractOrientation");
    __name(validateExifBlock, "validateExifBlock");
    __name(validateInput, "validateInput");
    JPG = { validate: /* @__PURE__ */ __name((t2) => "ffd8" === toHexString(t2, 0, 2), "validate"), calculate(t2) {
      let e2, i2;
      for (t2 = t2.slice(4); t2.length; ) {
        const a2 = readUInt16BE(t2, 0);
        if (255 === t2[a2]) {
          if (isEXIF(t2) && (e2 = validateExifBlock(t2, a2)), validateInput(t2, a2), i2 = t2[a2 + 1], 192 === i2 || 193 === i2 || 194 === i2) {
            const i3 = extractSize(t2, a2 + 5);
            return e2 ? { height: i3.height, orientation: e2, width: i3.width } : i3;
          }
          t2 = t2.slice(a2 + 2);
        } else t2 = t2.slice(a2);
      }
      throw new TypeError("Invalid JPG, no size found");
    } };
    KTX = { validate: /* @__PURE__ */ __name((t2) => {
      const e2 = toUTF8String(t2, 1, 7);
      return ["KTX 11", "KTX 20"].includes(e2);
    }, "validate"), calculate: /* @__PURE__ */ __name((t2) => {
      const e2 = 49 === t2[5] ? "ktx" : "ktx2", i2 = "ktx" === e2 ? 36 : 20;
      return { height: readUInt32LE(t2, i2 + 4), width: readUInt32LE(t2, i2), type: e2 };
    }, "calculate") };
    PNG = { validate(t2) {
      if ("PNG\r\n\n" === toUTF8String(t2, 1, 8)) {
        let e2 = toUTF8String(t2, 12, 16);
        if ("CgBI" === e2 && (e2 = toUTF8String(t2, 28, 32)), "IHDR" !== e2) throw new TypeError("Invalid PNG");
        return true;
      }
      return false;
    }, calculate: /* @__PURE__ */ __name((t2) => "CgBI" === toUTF8String(t2, 12, 16) ? { height: readUInt32BE(t2, 36), width: readUInt32BE(t2, 32) } : { height: readUInt32BE(t2, 20), width: readUInt32BE(t2, 16) }, "calculate") };
    PNMTypes = { P1: "pbm/ascii", P2: "pgm/ascii", P3: "ppm/ascii", P4: "pbm", P5: "pgm", P6: "ppm", P7: "pam", PF: "pfm" };
    handlers = { default: /* @__PURE__ */ __name((t2) => {
      let e2 = [];
      for (; t2.length > 0; ) {
        const i2 = t2.shift();
        if ("#" !== i2[0]) {
          e2 = i2.split(" ");
          break;
        }
      }
      if (2 === e2.length) return { height: parseInt(e2[1], 10), width: parseInt(e2[0], 10) };
      throw new TypeError("Invalid PNM");
    }, "default"), pam: /* @__PURE__ */ __name((t2) => {
      const e2 = {};
      for (; t2.length > 0; ) {
        const i2 = t2.shift();
        if (i2.length > 16 || i2.charCodeAt(0) > 128) continue;
        const [a2, o2] = i2.split(" ");
        if (a2 && o2 && (e2[a2.toLowerCase()] = parseInt(o2, 10)), e2.height && e2.width) break;
      }
      if (e2.height && e2.width) return { height: e2.height, width: e2.width };
      throw new TypeError("Invalid PAM");
    }, "pam") };
    PNM = { validate: /* @__PURE__ */ __name((t2) => toUTF8String(t2, 0, 2) in PNMTypes, "validate"), calculate(t2) {
      const e2 = toUTF8String(t2, 0, 2), i2 = PNMTypes[e2], a2 = toUTF8String(t2, 3).split(/[\r\n]+/);
      return (handlers[i2] || handlers.default)(a2);
    } };
    PSD = { validate: /* @__PURE__ */ __name((t2) => "8BPS" === toUTF8String(t2, 0, 4), "validate"), calculate: /* @__PURE__ */ __name((t2) => ({ height: readUInt32BE(t2, 14), width: readUInt32BE(t2, 18) }), "calculate") };
    svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
    extractorRegExps = { height: /\sheight=(['"])([^%]+?)\1/, root: svgReg, viewbox: /\sviewBox=(['"])(.+?)\1/i, width: /\swidth=(['"])([^%]+?)\1/ };
    units = { in: 96, cm: 96 / 2.54, em: 16, ex: 8, m: 96 / 2.54 * 100, mm: 96 / 2.54 / 10, pc: 96 / 72 / 12, pt: 96 / 72, px: 1 };
    unitsReg = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`);
    __name(parseLength, "parseLength");
    __name(parseViewbox, "parseViewbox");
    __name(parseAttributes, "parseAttributes");
    __name(calculateByDimensions, "calculateByDimensions");
    __name(calculateByViewbox, "calculateByViewbox");
    SVG = { validate: /* @__PURE__ */ __name((t2) => svgReg.test(toUTF8String(t2, 0, 1e3)), "validate"), calculate(t2) {
      const e2 = extractorRegExps.root.exec(toUTF8String(t2));
      if (e2) {
        const t3 = parseAttributes(e2[0]);
        if (t3.width && t3.height) return calculateByDimensions(t3);
        if (t3.viewbox) return calculateByViewbox(t3, t3.viewbox);
      }
      throw new TypeError("Invalid SVG");
    } };
    TGA = { validate: /* @__PURE__ */ __name((t2) => 0 === readUInt16LE(t2, 0) && 0 === readUInt16LE(t2, 4), "validate"), calculate: /* @__PURE__ */ __name((t2) => ({ height: readUInt16LE(t2, 14), width: readUInt16LE(t2, 12) }), "calculate") };
    __name(readIFD, "readIFD");
    __name(readValue, "readValue");
    __name(nextTag, "nextTag");
    __name(extractTags, "extractTags");
    __name(determineEndianness, "determineEndianness");
    signatures = ["49492a00", "4d4d002a"];
    TIFF = { validate: /* @__PURE__ */ __name((t2) => signatures.includes(toHexString(t2, 0, 4)), "validate"), calculate(t2) {
      const e2 = "BE" === determineEndianness(t2), i2 = extractTags(readIFD(t2, e2), e2), a2 = i2[256], o2 = i2[257];
      if (!a2 || !o2) throw new TypeError("Invalid Tiff. Missing tags");
      return { height: o2, width: a2 };
    } };
    __name(calculateExtended, "calculateExtended");
    __name(calculateLossless, "calculateLossless");
    __name(calculateLossy, "calculateLossy");
    WEBP = { validate(t2) {
      const e2 = "RIFF" === toUTF8String(t2, 0, 4), i2 = "WEBP" === toUTF8String(t2, 8, 12), a2 = "VP8" === toUTF8String(t2, 12, 15);
      return e2 && i2 && a2;
    }, calculate(t2) {
      const e2 = toUTF8String(t2, 12, 16);
      if (t2 = t2.slice(20, 30), "VP8X" === e2) {
        const e3 = t2[0];
        if (!(192 & e3) && !(1 & e3)) return calculateExtended(t2);
        throw new TypeError("Invalid WebP");
      }
      if ("VP8 " === e2 && 47 !== t2[0]) return calculateLossy(t2);
      const i2 = toHexString(t2, 3, 6);
      if ("VP8L" === e2 && "9d012a" !== i2) return calculateLossless(t2);
      throw new TypeError("Invalid WebP");
    } };
    typeHandlers = /* @__PURE__ */ new Map([["bmp", BMP], ["cur", CUR], ["dds", DDS], ["gif", GIF], ["heif", HEIF], ["icns", ICNS], ["ico", ICO], ["j2c", J2C], ["jp2", JP2], ["jpg", JPG], ["ktx", KTX], ["png", PNG], ["pnm", PNM], ["psd", PSD], ["svg", SVG], ["tga", TGA], ["tiff", TIFF], ["webp", WEBP]]);
    types = Array.from(typeHandlers.keys());
    firstBytes = /* @__PURE__ */ new Map([[56, "psd"], [66, "bmp"], [68, "dds"], [71, "gif"], [73, "tiff"], [77, "tiff"], [82, "webp"], [105, "icns"], [137, "png"], [255, "jpg"]]);
    __name(detector, "detector");
    __name(lookup$1, "lookup$1");
    __name(imageMetadata, "imageMetadata");
    __name(inferRemoteSize, "inferRemoteSize");
    PLACEHOLDER_BASE = "astro://placeholder";
    __name(createPlaceholderURL, "createPlaceholderURL");
    __name(stringifyPlaceholderURL, "stringifyPlaceholderURL");
    __name(getConfiguredImageService, "getConfiguredImageService");
    __name(getImage$1, "getImage$1");
    $$Astro$2 = createAstro("http://localhost:4321");
    $$Image = createComponent(async (t2, e2, i2) => {
      const a2 = t2.createAstro($$Astro$2, e2, i2);
      a2.self = $$Image;
      const o2 = a2.props;
      if (void 0 === o2.alt || null === o2.alt) throw new AstroError(ImageMissingAlt);
      "string" == typeof o2.width && (o2.width = parseInt(o2.width)), "string" == typeof o2.height && (o2.height = parseInt(o2.height));
      "none" !== (o2.layout ?? imageConfig.layout ?? "none") && (o2.layout ??= imageConfig.layout, o2.fit ??= imageConfig.objectFit ?? "cover", o2.position ??= imageConfig.objectPosition ?? "center");
      const s2 = await getImage(o2), r2 = {};
      s2.srcSet.values.length > 0 && (r2.srcset = s2.srcSet.attribute);
      const { class: n2, ...p } = { ...r2, ...s2.attributes };
      return renderTemplate`${maybeRenderHead()}<img${addAttribute(s2.src, "src")}${spreadAttributes(p)}${addAttribute(n2, "class")}>`;
    }, "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/node_modules/astro/components/Image.astro", void 0);
    mimes = { "3g2": "video/3gpp2", "3gp": "video/3gpp", "3gpp": "video/3gpp", "3mf": "model/3mf", aac: "audio/aac", ac: "application/pkix-attr-cert", adp: "audio/adpcm", adts: "audio/aac", ai: "application/postscript", aml: "application/automationml-aml+xml", amlx: "application/automationml-amlx+zip", amr: "audio/amr", apng: "image/apng", appcache: "text/cache-manifest", appinstaller: "application/appinstaller", appx: "application/appx", appxbundle: "application/appxbundle", asc: "application/pgp-keys", atom: "application/atom+xml", atomcat: "application/atomcat+xml", atomdeleted: "application/atomdeleted+xml", atomsvc: "application/atomsvc+xml", au: "audio/basic", avci: "image/avci", avcs: "image/avcs", avif: "image/avif", aw: "application/applixware", bdoc: "application/bdoc", bin: "application/octet-stream", bmp: "image/bmp", bpk: "application/octet-stream", btf: "image/prs.btif", btif: "image/prs.btif", buffer: "application/octet-stream", ccxml: "application/ccxml+xml", cdfx: "application/cdfx+xml", cdmia: "application/cdmi-capability", cdmic: "application/cdmi-container", cdmid: "application/cdmi-domain", cdmio: "application/cdmi-object", cdmiq: "application/cdmi-queue", cer: "application/pkix-cert", cgm: "image/cgm", cjs: "application/node", class: "application/java-vm", coffee: "text/coffeescript", conf: "text/plain", cpl: "application/cpl+xml", cpt: "application/mac-compactpro", crl: "application/pkix-crl", css: "text/css", csv: "text/csv", cu: "application/cu-seeme", cwl: "application/cwl", cww: "application/prs.cww", davmount: "application/davmount+xml", dbk: "application/docbook+xml", deb: "application/octet-stream", def: "text/plain", deploy: "application/octet-stream", dib: "image/bmp", "disposition-notification": "message/disposition-notification", dist: "application/octet-stream", distz: "application/octet-stream", dll: "application/octet-stream", dmg: "application/octet-stream", dms: "application/octet-stream", doc: "application/msword", dot: "application/msword", dpx: "image/dpx", drle: "image/dicom-rle", dsc: "text/prs.lines.tag", dssc: "application/dssc+der", dtd: "application/xml-dtd", dump: "application/octet-stream", dwd: "application/atsc-dwd+xml", ear: "application/java-archive", ecma: "application/ecmascript", elc: "application/octet-stream", emf: "image/emf", eml: "message/rfc822", emma: "application/emma+xml", emotionml: "application/emotionml+xml", eps: "application/postscript", epub: "application/epub+zip", exe: "application/octet-stream", exi: "application/exi", exp: "application/express", exr: "image/aces", ez: "application/andrew-inset", fdf: "application/fdf", fdt: "application/fdt+xml", fits: "image/fits", g3: "image/g3fax", gbr: "application/rpki-ghostbusters", geojson: "application/geo+json", gif: "image/gif", glb: "model/gltf-binary", gltf: "model/gltf+json", gml: "application/gml+xml", gpx: "application/gpx+xml", gram: "application/srgs", grxml: "application/srgs+xml", gxf: "application/gxf", gz: "application/gzip", h261: "video/h261", h263: "video/h263", h264: "video/h264", heic: "image/heic", heics: "image/heic-sequence", heif: "image/heif", heifs: "image/heif-sequence", hej2: "image/hej2k", held: "application/atsc-held+xml", hjson: "application/hjson", hlp: "application/winhlp", hqx: "application/mac-binhex40", hsj2: "image/hsj2", htm: "text/html", html: "text/html", ics: "text/calendar", ief: "image/ief", ifb: "text/calendar", iges: "model/iges", igs: "model/iges", img: "application/octet-stream", in: "text/plain", ini: "text/plain", ink: "application/inkml+xml", inkml: "application/inkml+xml", ipfix: "application/ipfix", iso: "application/octet-stream", its: "application/its+xml", jade: "text/jade", jar: "application/java-archive", jhc: "image/jphc", jls: "image/jls", jp2: "image/jp2", jpe: "image/jpeg", jpeg: "image/jpeg", jpf: "image/jpx", jpg: "image/jpeg", jpg2: "image/jp2", jpgm: "image/jpm", jpgv: "video/jpeg", jph: "image/jph", jpm: "image/jpm", jpx: "image/jpx", js: "text/javascript", json: "application/json", json5: "application/json5", jsonld: "application/ld+json", jsonml: "application/jsonml+json", jsx: "text/jsx", jt: "model/jt", jxl: "image/jxl", jxr: "image/jxr", jxra: "image/jxra", jxrs: "image/jxrs", jxs: "image/jxs", jxsc: "image/jxsc", jxsi: "image/jxsi", jxss: "image/jxss", kar: "audio/midi", ktx: "image/ktx", ktx2: "image/ktx2", less: "text/less", lgr: "application/lgr+xml", list: "text/plain", litcoffee: "text/coffeescript", log: "text/plain", lostxml: "application/lost+xml", lrf: "application/octet-stream", m1v: "video/mpeg", m21: "application/mp21", m2a: "audio/mpeg", m2t: "video/mp2t", m2ts: "video/mp2t", m2v: "video/mpeg", m3a: "audio/mpeg", m4a: "audio/mp4", m4p: "application/mp4", m4s: "video/iso.segment", ma: "application/mathematica", mads: "application/mads+xml", maei: "application/mmt-aei+xml", man: "text/troff", manifest: "text/cache-manifest", map: "application/json", mar: "application/octet-stream", markdown: "text/markdown", mathml: "application/mathml+xml", mb: "application/mathematica", mbox: "application/mbox", md: "text/markdown", mdx: "text/mdx", me: "text/troff", mesh: "model/mesh", meta4: "application/metalink4+xml", metalink: "application/metalink+xml", mets: "application/mets+xml", mft: "application/rpki-manifest", mid: "audio/midi", midi: "audio/midi", mime: "message/rfc822", mj2: "video/mj2", mjp2: "video/mj2", mjs: "text/javascript", mml: "text/mathml", mods: "application/mods+xml", mov: "video/quicktime", mp2: "audio/mpeg", mp21: "application/mp21", mp2a: "audio/mpeg", mp3: "audio/mpeg", mp4: "video/mp4", mp4a: "audio/mp4", mp4s: "application/mp4", mp4v: "video/mp4", mpd: "application/dash+xml", mpe: "video/mpeg", mpeg: "video/mpeg", mpf: "application/media-policy-dataset+xml", mpg: "video/mpeg", mpg4: "video/mp4", mpga: "audio/mpeg", mpp: "application/dash-patch+xml", mrc: "application/marc", mrcx: "application/marcxml+xml", ms: "text/troff", mscml: "application/mediaservercontrol+xml", msh: "model/mesh", msi: "application/octet-stream", msix: "application/msix", msixbundle: "application/msixbundle", msm: "application/octet-stream", msp: "application/octet-stream", mtl: "model/mtl", mts: "video/mp2t", musd: "application/mmt-usd+xml", mxf: "application/mxf", mxmf: "audio/mobile-xmf", mxml: "application/xv+xml", n3: "text/n3", nb: "application/mathematica", nq: "application/n-quads", nt: "application/n-triples", obj: "model/obj", oda: "application/oda", oga: "audio/ogg", ogg: "audio/ogg", ogv: "video/ogg", ogx: "application/ogg", omdoc: "application/omdoc+xml", onepkg: "application/onenote", onetmp: "application/onenote", onetoc: "application/onenote", onetoc2: "application/onenote", opf: "application/oebps-package+xml", opus: "audio/ogg", otf: "font/otf", owl: "application/rdf+xml", oxps: "application/oxps", p10: "application/pkcs10", p7c: "application/pkcs7-mime", p7m: "application/pkcs7-mime", p7s: "application/pkcs7-signature", p8: "application/pkcs8", pdf: "application/pdf", pfr: "application/font-tdpfr", pgp: "application/pgp-encrypted", pkg: "application/octet-stream", pki: "application/pkixcmp", pkipath: "application/pkix-pkipath", pls: "application/pls+xml", png: "image/png", prc: "model/prc", prf: "application/pics-rules", provx: "application/provenance+xml", ps: "application/postscript", pskcxml: "application/pskc+xml", pti: "image/prs.pti", qt: "video/quicktime", raml: "application/raml+yaml", rapd: "application/route-apd+xml", rdf: "application/rdf+xml", relo: "application/p2p-overlay+xml", rif: "application/reginfo+xml", rl: "application/resource-lists+xml", rld: "application/resource-lists-diff+xml", rmi: "audio/midi", rnc: "application/relax-ng-compact-syntax", rng: "application/xml", roa: "application/rpki-roa", roff: "text/troff", rq: "application/sparql-query", rs: "application/rls-services+xml", rsat: "application/atsc-rsat+xml", rsd: "application/rsd+xml", rsheet: "application/urc-ressheet+xml", rss: "application/rss+xml", rtf: "text/rtf", rtx: "text/richtext", rusd: "application/route-usd+xml", s3m: "audio/s3m", sbml: "application/sbml+xml", scq: "application/scvp-cv-request", scs: "application/scvp-cv-response", sdp: "application/sdp", senmlx: "application/senml+xml", sensmlx: "application/sensml+xml", ser: "application/java-serialized-object", setpay: "application/set-payment-initiation", setreg: "application/set-registration-initiation", sgi: "image/sgi", sgm: "text/sgml", sgml: "text/sgml", shex: "text/shex", shf: "application/shf+xml", shtml: "text/html", sieve: "application/sieve", sig: "application/pgp-signature", sil: "audio/silk", silo: "model/mesh", siv: "application/sieve", slim: "text/slim", slm: "text/slim", sls: "application/route-s-tsid+xml", smi: "application/smil+xml", smil: "application/smil+xml", snd: "audio/basic", so: "application/octet-stream", spdx: "text/spdx", spp: "application/scvp-vp-response", spq: "application/scvp-vp-request", spx: "audio/ogg", sql: "application/sql", sru: "application/sru+xml", srx: "application/sparql-results+xml", ssdl: "application/ssdl+xml", ssml: "application/ssml+xml", stk: "application/hyperstudio", stl: "model/stl", stpx: "model/step+xml", stpxz: "model/step-xml+zip", stpz: "model/step+zip", styl: "text/stylus", stylus: "text/stylus", svg: "image/svg+xml", svgz: "image/svg+xml", swidtag: "application/swid+xml", t: "text/troff", t38: "image/t38", td: "application/urc-targetdesc+xml", tei: "application/tei+xml", teicorpus: "application/tei+xml", text: "text/plain", tfi: "application/thraud+xml", tfx: "image/tiff-fx", tif: "image/tiff", tiff: "image/tiff", toml: "application/toml", tr: "text/troff", trig: "application/trig", ts: "video/mp2t", tsd: "application/timestamped-data", tsv: "text/tab-separated-values", ttc: "font/collection", ttf: "font/ttf", ttl: "text/turtle", ttml: "application/ttml+xml", txt: "text/plain", u3d: "model/u3d", u8dsn: "message/global-delivery-status", u8hdr: "message/global-headers", u8mdn: "message/global-disposition-notification", u8msg: "message/global", ubj: "application/ubjson", uri: "text/uri-list", uris: "text/uri-list", urls: "text/uri-list", vcard: "text/vcard", vrml: "model/vrml", vtt: "text/vtt", vxml: "application/voicexml+xml", war: "application/java-archive", wasm: "application/wasm", wav: "audio/wav", weba: "audio/webm", webm: "video/webm", webmanifest: "application/manifest+json", webp: "image/webp", wgsl: "text/wgsl", wgt: "application/widget", wif: "application/watcherinfo+xml", wmf: "image/wmf", woff: "font/woff", woff2: "font/woff2", wrl: "model/vrml", wsdl: "application/wsdl+xml", wspolicy: "application/wspolicy+xml", x3d: "model/x3d+xml", x3db: "model/x3d+fastinfoset", x3dbz: "model/x3d+binary", x3dv: "model/x3d-vrml", x3dvz: "model/x3d+vrml", x3dz: "model/x3d+xml", xaml: "application/xaml+xml", xav: "application/xcap-att+xml", xca: "application/xcap-caps+xml", xcs: "application/calendar+xml", xdf: "application/xcap-diff+xml", xdssc: "application/dssc+xml", xel: "application/xcap-el+xml", xenc: "application/xenc+xml", xer: "application/patch-ops-error+xml", xfdf: "application/xfdf", xht: "application/xhtml+xml", xhtml: "application/xhtml+xml", xhvml: "application/xv+xml", xlf: "application/xliff+xml", xm: "audio/xm", xml: "text/xml", xns: "application/xcap-ns+xml", xop: "application/xop+xml", xpl: "application/xproc+xml", xsd: "application/xml", xsf: "application/prs.xsf+xml", xsl: "application/xml", xslt: "application/xml", xspf: "application/xspf+xml", xvm: "application/xv+xml", xvml: "application/xv+xml", yaml: "text/yaml", yang: "application/yang", yin: "application/yin+xml", yml: "text/yaml", zip: "application/zip" };
    __name(lookup, "lookup");
    $$Astro$1 = createAstro("http://localhost:4321");
    $$Picture = createComponent(async (t2, e2, i2) => {
      const a2 = t2.createAstro($$Astro$1, e2, i2);
      a2.self = $$Picture;
      const o2 = ["webp"], { formats: s2 = o2, pictureAttributes: r2 = {}, fallbackFormat: n2, ...p } = a2.props;
      if (void 0 === p.alt || null === p.alt) throw new AstroError(ImageMissingAlt);
      const c = p.class?.match(/\bastro-\w{8}\b/)?.[0];
      c && (r2.class ? r2.class = `${r2.class} ${c}` : r2.class = c);
      const l = "none" !== (p.layout ?? imageConfig.layout ?? "none");
      l && (p.layout ??= imageConfig.layout, p.fit ??= imageConfig.objectFit ?? "cover", p.position ??= imageConfig.objectPosition ?? "center");
      for (const t3 in p) t3.startsWith("data-astro-cid") && (r2[t3] = p[t3]);
      const m = await resolveSrc(p.src), d = await Promise.all(s2.map(async (t3) => await getImage({ ...p, src: m, format: t3, widths: p.widths, densities: p.densities })));
      let g = n2 ?? "png";
      !n2 && isESMImportedImage(m) && ["gif", "svg", "jpg", "jpeg"].includes(m.format) && (g = m.format);
      const h = await getImage({ ...p, format: g, widths: p.widths, densities: p.densities }), f = {}, u = {};
      p.sizes && (u.sizes = p.sizes), h.srcSet.values.length > 0 && (f.srcset = h.srcSet.attribute);
      const { class: x, ...w } = { ...f, ...h.attributes };
      return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(r2)}> ${Object.entries(d).map(([t3, e3]) => {
        const i3 = p.densities || !p.densities && !p.widths && !l ? `${e3.src}${e3.srcSet.values.length > 0 ? ", " + e3.srcSet.attribute : ""}` : e3.srcSet.attribute;
        return renderTemplate`<source${addAttribute(i3, "srcset")}${addAttribute(lookup(e3.options.format ?? e3.src) ?? `image/${e3.options.format}`, "type")}${spreadAttributes(u)}>`;
      })}  <img${addAttribute(h.src, "src")}${spreadAttributes(w)}${addAttribute(x, "class")}> </picture>`;
    }, "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/node_modules/astro/components/Picture.astro", void 0);
    fontsMod = Object.freeze(Object.defineProperty({ __proto__: null }, Symbol.toStringTag, { value: "Module" }));
    __name(filterPreloads, "filterPreloads");
    __name(checkWeight, "checkWeight");
    $$Astro = createAstro("http://localhost:4321");
    $$Font = createComponent((t2, e2, i2) => {
      const a2 = t2.createAstro($$Astro, e2, i2);
      a2.self = $$Font;
      const { internalConsumableMap: o2 } = fontsMod;
      if (!o2) throw new AstroError(ExperimentalFontsNotEnabled);
      const { cssVariable: s2, preload: r2 = false } = a2.props, n2 = o2.get(s2);
      if (!n2) throw new AstroError({ ...FontFamilyNotFound, message: FontFamilyNotFound.message(s2) });
      const p = filterPreloads(n2.preloadData, r2);
      return renderTemplate`<style>${unescapeHTML(n2.css)}</style>${p?.map(({ url: t3, type: e3 }) => renderTemplate`<link rel="preload"${addAttribute(t3, "href")} as="font"${addAttribute(`font/${e3}`, "type")} crossorigin>`)}`;
    }, "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/node_modules/astro/components/Font.astro", void 0);
    imageConfig = { endpoint: { route: "/_image/", entrypoint: "@astrojs/cloudflare/image-endpoint" }, service: { entrypoint: "astro/assets/services/sharp", config: {} }, domains: [], remotePatterns: [], responsiveStyles: false };
    Object.defineProperty(imageConfig, "assetQueryParams", { value: void 0, enumerable: false, configurable: true });
    getImage = /* @__PURE__ */ __name(async (t2) => await getImage$1(t2, imageConfig), "getImage");
    _astro_assets = Object.freeze(Object.defineProperty({ __proto__: null, getConfiguredImageService, getImage, imageConfig, inferRemoteSize, isLocalService }, Symbol.toStringTag, { value: "Module" }));
  }
});

// dist/_worker.js/pages/_image/index.astro.mjs
var index_astro_exports = {};
__export(index_astro_exports, {
  page: () => page,
  renderers: () => renderers
});
var GET, _page, page;
var init_index_astro = __esm({
  "dist/_worker.js/pages/_image/index.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_astro_assets_VJUJ1YrL();
    init_path_mW90u446();
    init_remote_CrdlObHx();
    init_renderers();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    GET = /* @__PURE__ */ __name((e2) => {
      const r2 = e2.url.searchParams.get("href");
      if (!r2) return new Response("Missing 'href' query parameter", { status: 400, statusText: "Missing 'href' query parameter" });
      if (isRemotePath(r2)) return false === isRemoteAllowed(r2, imageConfig) ? new Response("Forbidden", { status: 403 }) : Response.redirect(r2, 302);
      const s2 = new URL(r2, e2.url.origin);
      return s2.origin !== e2.url.origin ? new Response("Forbidden", { status: 403 }) : fetch(s2);
    }, "GET");
    _page = Object.freeze(Object.defineProperty({ __proto__: null, GET, prerender: false }, Symbol.toStringTag, { value: "Module" }));
    page = /* @__PURE__ */ __name(() => _page, "page");
  }
});

// dist/_worker.js/pages/404.astro.mjs
var astro_exports = {};
var init_astro = __esm({
  "dist/_worker.js/pages/404.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/connect/about.astro.mjs
var about_astro_exports = {};
var init_about_astro = __esm({
  "dist/_worker.js/pages/connect/about.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/connect/contact.astro.mjs
var contact_astro_exports = {};
var init_contact_astro = __esm({
  "dist/_worker.js/pages/connect/contact.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/connect/plan-a-visit.astro.mjs
var plan_a_visit_astro_exports = {};
var init_plan_a_visit_astro = __esm({
  "dist/_worker.js/pages/connect/plan-a-visit.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/connect/prayer.astro.mjs
var prayer_astro_exports = {};
var init_prayer_astro = __esm({
  "dist/_worker.js/pages/connect/prayer.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/chunks/BaseLayout_B0FKJkKI.mjs
var $$Astro$22, $$Button, PUBLIC_EMAIL, PASTOR_NAME, TIME_ZONE, ADDRESS_LINE, MAPS_URL, VISIT_NOTES, portals, weekSchedule, leadershipTeam, ministryLeads, contactTopics, nav, quickActions, site, $$Astro$12, $$Header, $$Footer, $$Astro2, $$BaseLayout;
var init_BaseLayout_B0FKJkKI = __esm({
  "dist/_worker.js/chunks/BaseLayout_B0FKJkKI.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_37mFo7XU();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    $$Astro$22 = createAstro("http://localhost:4321");
    $$Button = createComponent((e2, t2, a2) => {
      const r2 = e2.createAstro($$Astro$22, t2, a2);
      r2.self = $$Button;
      const { href: i2, external: o2 = false, variant: n2 = "primary", size: s2 = "md" } = r2.props, d = `btn btn--${n2} btn--${s2}`;
      return renderTemplate`${i2 ? renderTemplate`${maybeRenderHead()}<a${addAttribute(d, "class")}${addAttribute(i2, "href")}${addAttribute(o2 ? "_blank" : void 0, "target")}${addAttribute(o2 ? "noopener noreferrer" : void 0, "rel")} data-astro-cid-6ygtcg62>${renderSlot(e2, a2.default)}</a>` : renderTemplate`<button${addAttribute(d, "class")} type="button" data-astro-cid-6ygtcg62>${renderSlot(e2, a2.default)}</button>`}`;
    }, "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/components/ui/Button.astro", void 0);
    PUBLIC_EMAIL = "firstspringfieldsda@gmail.com";
    PASTOR_NAME = "Pastor Abankwah Amoakohene";
    TIME_ZONE = "America/New_York";
    ADDRESS_LINE = "34 Sumner Ave, Springfield, MA 01108";
    MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(ADDRESS_LINE);
    VISIT_NOTES = { directions: ["From I-91: take Exit 6 toward Springfield, then follow signs toward Sumner Ave.", "From I-90: take Exit 5, follow signs toward Springfield and take Exit 5, then follow local signs to Sumner Ave."], languageNote: "Services are primarily in English. If you need Spanish support, please contact us and we will help.", parkingNote: "Street parking is available near the church. Please arrive a few minutes early to find a spot.", accessibilityNote: "If you need accessibility accommodations, please contact us ahead of time so we can assist." };
    portals = { givingUrl: "https://adventistgiving.org/", youtubeChannelUrl: "https://www.youtube.com/@1stspringfieldsdama74", youtubeLiveEmbedUrl: "https://www.youtube.com/embed/live_stream?channel=UCkmryvqlHb3JIwVLc07FZwA", facebookUrl: "TBD", prayerFormUrl: "TBD", contactFormUrl: "TBD", volunteerFormUrl: "TBD" };
    weekSchedule = [{ label: "Sabbath School", day: "Saturday", time: "10:00 AM" }, { label: "Worship Service", day: "Saturday", time: "11:15 AM" }, { label: "Prayer Meeting", day: "Wednesday", time: "7:00 PM" }];
    leadershipTeam = [{ role: "Pastor", name: PASTOR_NAME, email: PUBLIC_EMAIL }, { role: "Head Elder", name: "Church Office", email: PUBLIC_EMAIL }, { role: "Head Deacon", name: "Church Office", email: PUBLIC_EMAIL }, { role: "Church Clerk", name: "Church Office", email: PUBLIC_EMAIL }, { role: "Treasurer", name: "Church Office", email: PUBLIC_EMAIL }];
    ministryLeads = [{ role: "Children\u2019s Ministry", name: "Children\u2019s Ministry Team", email: PUBLIC_EMAIL }, { role: "Youth Ministry", name: "Youth Ministry Team", email: PUBLIC_EMAIL }, { role: "Women\u2019s Ministry", name: "Women\u2019s Ministry Team", email: PUBLIC_EMAIL }, { role: "Men\u2019s Ministry", name: "Men\u2019s Ministry Team", email: PUBLIC_EMAIL }, { role: "Communications / Media", name: "Media Team", email: PUBLIC_EMAIL }];
    contactTopics = [{ topic: "First-time visit questions", contactRole: "Greeter / Hospitality", email: PUBLIC_EMAIL, note: "Happy to answer questions about parking, what to expect, and children\u2019s programs." }, { topic: "Bible study", contactRole: "Pastor", email: PUBLIC_EMAIL, note: "We can connect you with a study group or set up a visit." }, { topic: "Prayer request", contactRole: "Prayer Team", email: PUBLIC_EMAIL, href: "/connect/contact", hrefLabel: "Contact us", external: false }, { topic: "Need help choosing a ministry", contactRole: "Pastor", email: PUBLIC_EMAIL, note: "If you are unsure who to contact, start here." }, { topic: "Volunteering", contactRole: "Ministry Leads", email: PUBLIC_EMAIL, href: "/connect/contact", hrefLabel: "Contact us", external: false }, { topic: "Giving questions", contactRole: "Treasurer", email: PUBLIC_EMAIL, href: "/give", hrefLabel: "Go to giving page" }];
    nav = [{ label: "Home", href: "/" }, { label: "About Us", href: "/connect/about" }, { label: "Our Team", href: "/connect/team" }, { label: "Ministries", href: "/ministries" }, { label: "Calendar", href: "/events" }, { label: "Contact", href: "/connect/contact" }];
    quickActions = [{ label: "Watch Live", href: "/media/live" }, { label: "Give", href: "/give" }, { label: "Prayer Request", href: "/connect/prayer" }, { label: "Bulletins", href: "/resources/bulletins" }, { label: "Volunteer", href: "/connect/volunteer" }];
    site = { name: "First Springfield Seventh-day Adventist Church", shortName: "First Springfield SDA", locale: "en-US", timeZone: TIME_ZONE, description: "A Seventh-day Adventist church community in Springfield, MA. Join us for worship, Bible study, and service.", contact: { email: PUBLIC_EMAIL, phone: "TBD", address: ADDRESS_LINE, mapsUrl: MAPS_URL, mailingAddress: "" }, visit: VISIT_NOTES, schedule: weekSchedule, portals, nav, quickActions, leadershipTeam, ministryLeads, contactTopics };
    $$Astro$12 = createAstro("http://localhost:4321");
    $$Header = createComponent((e2, t2, a2) => {
      const r2 = e2.createAstro($$Astro$12, t2, a2);
      r2.self = $$Header;
      const i2 = r2.url?.pathname ?? "/";
      function o2(e3) {
        return "/" === e3 ? "/" === i2 : i2 === e3 || i2.startsWith(e3 + "/");
      }
      __name(o2, "o");
      function n2(e3) {
        return e3.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
      }
      __name(n2, "n");
      const s2 = site.quickActions.find((e3) => "Watch Live" === e3.label) ?? site.quickActions[0], d = site.quickActions.find((e3) => "Give" === e3.label) ?? site.quickActions[1], l = site.quickActions.filter((e3) => e3.label !== s2?.label && e3.label !== d?.label);
      return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-eiyd7voq> <div class="inner" data-astro-cid-eiyd7voq> <a class="brand" href="/"${addAttribute(site.name, "aria-label")} data-astro-cid-eiyd7voq> <span class="brand__title" data-astro-cid-eiyd7voq>${site.shortName}</span> </a> <nav class="nav nav--desktop" aria-label="Primary navigation" data-astro-cid-eiyd7voq> ${site.nav.map((e3) => renderTemplate`<a${addAttribute(e3.href, "href")}${addAttribute(o2(e3.href) ? "page" : void 0, "aria-current")}${spreadAttributes(n2(e3), void 0, { class: "astro-eiyd7voq" })} data-astro-cid-eiyd7voq> ${e3.label} </a>`)} </nav> <div class="right" data-astro-cid-eiyd7voq> <div class="cta cta--desktop" aria-label="Primary actions" data-astro-cid-eiyd7voq> ${s2 && renderTemplate`${renderComponent(e2, "Button", $$Button, { href: s2.href, variant: "secondary", size: "sm", external: !!s2.external, "data-astro-cid-eiyd7voq": true }, { default: /* @__PURE__ */ __name((e3) => renderTemplate`${s2.label}`, "default") })}`} ${d && renderTemplate`${renderComponent(e2, "Button", $$Button, { href: d.href, variant: "primary", size: "sm", external: !!d.external, "data-astro-cid-eiyd7voq": true }, { default: /* @__PURE__ */ __name((e3) => renderTemplate`${d.label}`, "default") })}`} </div> <div class="cta cta--mobile" aria-label="Primary actions" data-astro-cid-eiyd7voq> ${s2 && renderTemplate`${renderComponent(e2, "Button", $$Button, { href: s2.href, variant: "secondary", size: "sm", external: !!s2.external, "data-astro-cid-eiyd7voq": true }, { default: /* @__PURE__ */ __name((e3) => renderTemplate`${s2.label}`, "default") })}`} ${d && renderTemplate`${renderComponent(e2, "Button", $$Button, { href: d.href, variant: "primary", size: "sm", external: !!d.external, "data-astro-cid-eiyd7voq": true }, { default: /* @__PURE__ */ __name((e3) => renderTemplate`${d.label}`, "default") })}`} </div> <details class="menu" aria-label="Mobile menu" data-astro-cid-eiyd7voq> <summary class="menu__summary" aria-label="Open menu" data-astro-cid-eiyd7voq> <span class="menu__icon" aria-hidden="true" data-astro-cid-eiyd7voq>☰</span> <span class="menu__label" data-astro-cid-eiyd7voq>Menu</span> </summary> <div class="menu__panel" data-astro-cid-eiyd7voq> <nav class="menu__section" aria-label="Primary navigation" data-astro-cid-eiyd7voq> ${site.nav.map((e3) => renderTemplate`<a class="menu__link"${addAttribute(e3.href, "href")}${addAttribute(o2(e3.href) ? "page" : void 0, "aria-current")}${spreadAttributes(n2(e3))} data-astro-cid-eiyd7voq> ${e3.label} </a>`)} </nav> <div class="menu__divider" role="separator" aria-hidden="true" data-astro-cid-eiyd7voq></div> <div class="menu__section" aria-label="Quick actions" data-astro-cid-eiyd7voq> <div class="menu__actions" data-astro-cid-eiyd7voq> ${s2 && renderTemplate`${renderComponent(e2, "Button", $$Button, { href: s2.href, variant: "secondary", size: "sm", external: !!s2.external, "data-astro-cid-eiyd7voq": true }, { default: /* @__PURE__ */ __name((e3) => renderTemplate`${s2.label}`, "default") })}`} ${d && renderTemplate`${renderComponent(e2, "Button", $$Button, { href: d.href, variant: "primary", size: "sm", external: !!d.external, "data-astro-cid-eiyd7voq": true }, { default: /* @__PURE__ */ __name((e3) => renderTemplate`${d.label}`, "default") })}`} </div> ${l.length > 0 && renderTemplate`<div class="menu__quicklinks" aria-label="More quick links" data-astro-cid-eiyd7voq> ${l.map((e3) => renderTemplate`<a class="menu__sublink"${addAttribute(e3.href, "href")}${spreadAttributes(n2(e3))} data-astro-cid-eiyd7voq> ${e3.label} </a>`)} </div>`} </div> </div> </details> </div> </div> </header> ${renderScript(e2, "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/components/global/Header.astro?astro&type=script&index=0&lang.ts")} `;
    }, "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/components/global/Header.astro", void 0);
    $$Footer = createComponent((e2, t2, a2) => {
      const r2 = (/* @__PURE__ */ new Date()).getFullYear(), i2 = `tel:${site.contact.phone.replace(/[^0-9+]/g, "")}`, o2 = Boolean(site.contact.mailingAddress), n2 = Boolean("TBD" !== site.portals.facebookUrl), s2 = Boolean("TBD" !== site.portals.youtubeChannelUrl);
      return renderTemplate`${maybeRenderHead()}<footer class="site-footer" data-astro-cid-tgc5tww7> <div class="inner" data-astro-cid-tgc5tww7> <div class="left" data-astro-cid-tgc5tww7> <strong data-astro-cid-tgc5tww7>${site.name}</strong> <div class="muted" data-astro-cid-tgc5tww7> <a${addAttribute(site.contact.mapsUrl, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-tgc5tww7> ${site.contact.address} </a> </div> ${o2 ? renderTemplate`<div class="muted small" data-astro-cid-tgc5tww7>
Mail: ${site.contact.mailingAddress} </div>` : null} <div class="muted" data-astro-cid-tgc5tww7> <a${addAttribute(i2, "href")} data-astro-cid-tgc5tww7>${site.contact.phone}</a> <span aria-hidden="true" data-astro-cid-tgc5tww7> · </span> <a${addAttribute(`mailto:${site.contact.email}`, "href")} data-astro-cid-tgc5tww7>${site.contact.email}</a> </div> <div class="muted small" data-astro-cid-tgc5tww7>© ${r2}</div> </div> <nav class="right" aria-label="Footer links" data-astro-cid-tgc5tww7> <div class="col" data-astro-cid-tgc5tww7> <div class="col-title" data-astro-cid-tgc5tww7>Service times</div> <div class="col-body muted small" data-astro-cid-tgc5tww7> ${site.schedule.map((e3) => renderTemplate`<div class="line" data-astro-cid-tgc5tww7> <span class="day" data-astro-cid-tgc5tww7>${e3.day}</span> <span aria-hidden="true" data-astro-cid-tgc5tww7> · </span> <span class="time" data-astro-cid-tgc5tww7>${e3.time}</span> <span aria-hidden="true" data-astro-cid-tgc5tww7> — </span> <span class="label" data-astro-cid-tgc5tww7>${e3.label}</span> </div>`)} </div> </div> <div class="col" data-astro-cid-tgc5tww7> <div class="col-title" data-astro-cid-tgc5tww7>Watch &amp; Give</div> <div class="col-body links" data-astro-cid-tgc5tww7> <a href="/media/live" data-astro-cid-tgc5tww7>Watch Live</a> <a href="/give" data-astro-cid-tgc5tww7>Give</a> <a href="/media/videos" data-astro-cid-tgc5tww7>Videos</a> </div> </div> <div class="col" data-astro-cid-tgc5tww7> <div class="col-title" data-astro-cid-tgc5tww7>Connect</div> <div class="col-body links" data-astro-cid-tgc5tww7> <a href="/connect/contact" data-astro-cid-tgc5tww7>Contact</a> <a href="/connect/plan-a-visit" data-astro-cid-tgc5tww7>Plan a Visit</a> <a href="/connect/prayer" data-astro-cid-tgc5tww7>Prayer</a> ${s2 ? renderTemplate`<a${addAttribute(site.portals.youtubeChannelUrl, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-tgc5tww7>YouTube</a>` : null} ${n2 ? renderTemplate`<a${addAttribute(site.portals.facebookUrl, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-tgc5tww7>Facebook</a>` : null} <a href="/privacy" data-astro-cid-tgc5tww7>Privacy</a> </div> </div> </nav> </div> </footer> `;
    }, "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/components/global/Footer.astro", void 0);
    $$Astro2 = createAstro("http://localhost:4321");
    $$BaseLayout = createComponent((e2, t2, a2) => {
      const r2 = e2.createAstro($$Astro2, t2, a2);
      r2.self = $$BaseLayout;
      const { title: i2, description: o2, noIndex: n2 = false, ogImagePath: s2 = "/og/default.png", ogType: d = "website" } = r2.props, l = i2 ? `${i2} \xB7 ${site.shortName}` : site.name, c = o2 ?? site.description, m = r2.site ?? new URL(r2.url.origin), u = new URL(r2.url.pathname, m).href, p = new URL(s2, m).href, h = site.locale, v = h.replace("-", "_");
      return renderTemplate`<html${addAttribute(h.split("-")[0], "lang")}> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${l}</title><meta name="description"${addAttribute(c, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="canonical"${addAttribute(u, "href")}><meta name="robots"${addAttribute(n2 ? "noindex,follow" : "index,follow", "content")}><meta property="og:site_name"${addAttribute(site.name, "content")}><meta property="og:title"${addAttribute(l, "content")}><meta property="og:description"${addAttribute(c, "content")}><meta property="og:type"${addAttribute(d, "content")}><meta property="og:locale"${addAttribute(v, "content")}><meta property="og:url"${addAttribute(u, "content")}><meta property="og:image"${addAttribute(p, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(l, "content")}><meta name="twitter:description"${addAttribute(c, "content")}><meta name="twitter:image"${addAttribute(p, "content")}>${renderSlot(e2, a2.head)}${renderHead()}</head> <body> <a class="skip-link" href="#main">Skip to content</a> ${renderComponent(e2, "Header", $$Header, {})} <main id="main"> ${renderSlot(e2, a2.default)} </main> ${renderComponent(e2, "Footer", $$Footer, {})} </body></html>`;
    }, "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/layouts/BaseLayout.astro", void 0);
  }
});

// dist/_worker.js/pages/connect/team.astro.mjs
var team_astro_exports = {};
__export(team_astro_exports, {
  page: () => page2,
  renderers: () => renderers
});
function mailto(a2, t2) {
  const e2 = (a2 ?? "").trim();
  if (!e2) return "";
  return `mailto:${e2}${t2 ? `?subject=${encodeURIComponent(t2)}` : ""}`;
}
var $$Index, $$file, $$url, _page2, page2;
var init_team_astro = __esm({
  "dist/_worker.js/pages/connect/team.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_server_37mFo7XU();
    init_BaseLayout_B0FKJkKI();
    init_renderers();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    __name(mailto, "mailto");
    $$Index = createComponent((a2, t2, e2) => {
      function d(a3) {
        return a3 && "TBD" !== a3 ? a3 : "TBD";
      }
      __name(d, "d");
      return renderTemplate`${renderComponent(a2, "BaseLayout", $$BaseLayout, { title: "Our Team", description: `Meet the leadership and ministry contacts at ${site.name}.`, "data-astro-cid-7e7lqtjo": true }, { default: /* @__PURE__ */ __name((a3) => renderTemplate` ${maybeRenderHead()}<div class="stack" data-astro-cid-7e7lqtjo> <h1 style="margin: 0;" data-astro-cid-7e7lqtjo>Our Team</h1> <section class="card" data-astro-cid-7e7lqtjo> <h2 style="margin-top: 0;" data-astro-cid-7e7lqtjo>Leadership</h2> <p class="muted" data-astro-cid-7e7lqtjo>
For most questions, starting with the Pastor or Head Elder is a great first step.
</p> <div class="table" data-astro-cid-7e7lqtjo> <div class="row head" data-astro-cid-7e7lqtjo> <div data-astro-cid-7e7lqtjo>Role</div> <div data-astro-cid-7e7lqtjo>Name</div> <div data-astro-cid-7e7lqtjo>Contact</div> </div> ${(site.leadershipTeam ?? []).map((a4) => renderTemplate`<div class="row" data-astro-cid-7e7lqtjo> <div data-astro-cid-7e7lqtjo>${a4.role}</div> <div data-astro-cid-7e7lqtjo>${d(a4.name)}</div> <div data-astro-cid-7e7lqtjo> ${a4.email && "TBD" !== a4.email ? renderTemplate`<a${addAttribute(mailto(a4.email, `${a4.role} - ${site.shortName}`), "href")} data-astro-cid-7e7lqtjo>${a4.email}</a>` : renderTemplate`<span class="muted" data-astro-cid-7e7lqtjo>TBD</span>`} </div> </div>`)} </div> <p class="small muted" style="margin-top: var(--space-4);" data-astro-cid-7e7lqtjo>
If a role shows “TBD”, update it in <code data-astro-cid-7e7lqtjo>src/data/site.ts</code>.
</p> </section> <section class="card" data-astro-cid-7e7lqtjo> <h2 style="margin-top: 0;" data-astro-cid-7e7lqtjo>Ministry Leads</h2> <p class="muted" data-astro-cid-7e7lqtjo>
Reach out to the ministry lead closest to your question, or use the general email if you’re not sure.
</p> <div class="table" data-astro-cid-7e7lqtjo> <div class="row head" data-astro-cid-7e7lqtjo> <div data-astro-cid-7e7lqtjo>Ministry</div> <div data-astro-cid-7e7lqtjo>Name</div> <div data-astro-cid-7e7lqtjo>Contact</div> </div> ${(site.ministryLeads ?? []).map((a4) => renderTemplate`<div class="row" data-astro-cid-7e7lqtjo> <div data-astro-cid-7e7lqtjo>${a4.role}</div> <div data-astro-cid-7e7lqtjo>${d(a4.name)}</div> <div data-astro-cid-7e7lqtjo> ${a4.email && "TBD" !== a4.email ? renderTemplate`<a${addAttribute(mailto(a4.email, `${a4.role} - ${site.shortName}`), "href")} data-astro-cid-7e7lqtjo>${a4.email}</a>` : renderTemplate`<span class="muted" data-astro-cid-7e7lqtjo>TBD</span>`} </div> </div>`)} </div> </section> <section class="card" data-astro-cid-7e7lqtjo> <h2 style="margin-top: 0;" data-astro-cid-7e7lqtjo>Who to contact for what</h2> <p class="muted" data-astro-cid-7e7lqtjo>
Not sure who to reach? Start with one of these.
</p> <div class="table" data-astro-cid-7e7lqtjo> <div class="row head" data-astro-cid-7e7lqtjo> <div data-astro-cid-7e7lqtjo>Topic</div> <div data-astro-cid-7e7lqtjo>Contact</div> <div data-astro-cid-7e7lqtjo>How</div> </div> ${(site.contactTopics ?? []).map((a4) => renderTemplate`<div class="row" data-astro-cid-7e7lqtjo> <div data-astro-cid-7e7lqtjo>${a4.topic}</div> <div data-astro-cid-7e7lqtjo>${a4.contactRole}</div> <div data-astro-cid-7e7lqtjo> ${a4.href ? renderTemplate`<a${addAttribute(a4.href, "href")}${addAttribute(a4.external ? "_blank" : void 0, "target")}${addAttribute(a4.external ? "noopener noreferrer" : void 0, "rel")} data-astro-cid-7e7lqtjo> ${a4.hrefLabel ?? "Open"} </a>` : a4.email ? renderTemplate`<a${addAttribute(mailto(a4.email, `${a4.topic} - ${site.shortName}`), "href")} data-astro-cid-7e7lqtjo>${a4.email}</a>` : renderTemplate`<span class="muted" data-astro-cid-7e7lqtjo>TBD</span>`} ${a4.note ? renderTemplate`<div class="small muted" style="margin-top: var(--space-2);" data-astro-cid-7e7lqtjo> ${a4.note} </div>` : null} </div> </div>`)} </div> </section> </div> `, "default") })} `;
    }, "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/connect/team/index.astro", void 0);
    $$file = "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/connect/team/index.astro";
    $$url = "/connect/team/";
    _page2 = Object.freeze(Object.defineProperty({ __proto__: null, default: $$Index, file: $$file, prerender: false, url: $$url }, Symbol.toStringTag, { value: "Module" }));
    page2 = /* @__PURE__ */ __name(() => _page2, "page");
  }
});

// dist/_worker.js/pages/connect/worship-with-us.astro.mjs
var worship_with_us_astro_exports = {};
var init_worship_with_us_astro = __esm({
  "dist/_worker.js/pages/connect/worship-with-us.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/connect.astro.mjs
var connect_astro_exports = {};
var init_connect_astro = __esm({
  "dist/_worker.js/pages/connect.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/events/_id_.astro.mjs
var id_astro_exports = {};
var init_id_astro = __esm({
  "dist/_worker.js/pages/events/_id_.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/events.astro.mjs
var events_astro_exports = {};
var init_events_astro = __esm({
  "dist/_worker.js/pages/events.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/give.astro.mjs
var give_astro_exports = {};
var init_give_astro = __esm({
  "dist/_worker.js/pages/give.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/join.astro.mjs
var join_astro_exports = {};
var init_join_astro = __esm({
  "dist/_worker.js/pages/join.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/media/live.astro.mjs
var live_astro_exports = {};
var init_live_astro = __esm({
  "dist/_worker.js/pages/media/live.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/media/videos.astro.mjs
var videos_astro_exports = {};
var init_videos_astro = __esm({
  "dist/_worker.js/pages/media/videos.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/media.astro.mjs
var media_astro_exports = {};
var init_media_astro = __esm({
  "dist/_worker.js/pages/media.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/ministries/_id_.astro.mjs
var id_astro_exports2 = {};
var init_id_astro2 = __esm({
  "dist/_worker.js/pages/ministries/_id_.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/ministries.astro.mjs
var ministries_astro_exports = {};
var init_ministries_astro = __esm({
  "dist/_worker.js/pages/ministries.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/privacy.astro.mjs
var privacy_astro_exports = {};
var init_privacy_astro = __esm({
  "dist/_worker.js/pages/privacy.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/resources/bulletins.astro.mjs
var bulletins_astro_exports = {};
var init_bulletins_astro = __esm({
  "dist/_worker.js/pages/resources/bulletins.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/resources/forms.astro.mjs
var forms_astro_exports = {};
var init_forms_astro = __esm({
  "dist/_worker.js/pages/resources/forms.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/resources.astro.mjs
var resources_astro_exports = {};
var init_resources_astro = __esm({
  "dist/_worker.js/pages/resources.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/resources/_---id_.astro.mjs
var id_astro_exports3 = {};
var init_id_astro3 = __esm({
  "dist/_worker.js/pages/resources/_---id_.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/robots.txt.astro.mjs
var robots_txt_astro_exports = {};
var init_robots_txt_astro = __esm({
  "dist/_worker.js/pages/robots.txt.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/search.astro.mjs
var search_astro_exports = {};
var init_search_astro = __esm({
  "dist/_worker.js/pages/search.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/serve.astro.mjs
var serve_astro_exports = {};
var init_serve_astro = __esm({
  "dist/_worker.js/pages/serve.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/pages/index.astro.mjs
var index_astro_exports2 = {};
var init_index_astro2 = __esm({
  "dist/_worker.js/pages/index.astro.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// dist/_worker.js/noop-entrypoint.mjs
var noop_entrypoint_exports = {};
__export(noop_entrypoint_exports, {
  server: () => server
});
var server;
var init_noop_entrypoint = __esm({
  "dist/_worker.js/noop-entrypoint.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    server = {};
  }
});

// dist/_worker.js/_astro-internal_middleware.mjs
var astro_internal_middleware_exports = {};
__export(astro_internal_middleware_exports, {
  onRequest: () => onRequest
});
var onRequest$1, onRequest;
var init_astro_internal_middleware = __esm({
  "dist/_worker.js/_astro-internal_middleware.mjs"() {
    "use strict";
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_astro_designed_error_pages_CNJkf2fl();
    init_server_37mFo7XU();
    init_index_s3SF91tP();
    globalThis.process ??= {}, globalThis.process.env ??= {};
    onRequest$1 = /* @__PURE__ */ __name((e2, s2) => (e2.isPrerendered && (e2.locals.runtime ??= { env: process.env }), s2()), "onRequest$1");
    onRequest = sequence(onRequest$1);
  }
});

// .wrangler/tmp/bundle-ts1qpm/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-ts1qpm/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// dist/_worker.js/index.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_renderers();

// dist/_worker.js/chunks/_@astrojs-ssr-adapter_CyftsAGz.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_path_mW90u446();
init_remote_CrdlObHx();
init_index_s3SF91tP();
init_server_37mFo7XU();

// dist/_worker.js/chunks/noop-middleware_BxP_suVs.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_server_37mFo7XU();
globalThis.process ??= {}, globalThis.process.env ??= {};
var NOOP_MIDDLEWARE_FN = /* @__PURE__ */ __name(async (s2, r2) => {
  const E2 = await r2();
  return E2.headers.set(NOOP_MIDDLEWARE_HEADER, "true"), E2;
}, "NOOP_MIDDLEWARE_FN");

// dist/_worker.js/chunks/_@astrojs-ssr-adapter_CyftsAGz.mjs
init_astro_designed_error_pages_CNJkf2fl();
import "cloudflare:workers";
globalThis.process ??= {}, globalThis.process.env ??= {};
function createI18nMiddleware(e2, t2, r2, s2) {
  if (!e2) return (e3, t3) => t3();
  const a2 = { ...e2, trailingSlash: r2, base: t2, format: s2 }, o2 = redirectToDefaultLocale(a2), n2 = notFound(a2), i2 = requestHasLocale(a2.locales), l = redirectToFallback(a2), c = /* @__PURE__ */ __name((e3, r3) => {
    const s3 = e3.url;
    return s3.pathname === t2 + "/" || s3.pathname === t2 ? o2(e3) : i2(e3) ? void 0 : n2(e3, r3);
  }, "c"), d = /* @__PURE__ */ __name((t3, r3) => {
    let s3 = false;
    const a3 = t3.url;
    for (const t4 of a3.pathname.split("/")) if (normalizeTheLocale(t4) === normalizeTheLocale(e2.defaultLocale)) {
      s3 = true;
      break;
    }
    if (s3) {
      const s4 = a3.pathname.replace(`/${e2.defaultLocale}`, "");
      return r3.headers.set("Location", s4), n2(t3);
    }
  }, "d");
  return async (r3, s3) => {
    const a3 = await s3(), o3 = a3.headers.get(ROUTE_TYPE_HEADER);
    if ("no" === a3.headers.get(REROUTE_DIRECTIVE_HEADER) && void 0 === e2.fallback) return a3;
    if ("page" !== o3 && "fallback" !== o3) return a3;
    if (requestIs404Or500(r3.request, t2)) return a3;
    if (isRequestServerIsland(r3.request, t2)) return a3;
    const { currentLocale: i3 } = r3;
    switch (e2.strategy) {
      case "manual":
        return a3;
      case "domains-prefix-other-locales":
        if (localeHasntDomain(e2, i3)) {
          const e3 = d(r3, a3);
          if (e3) return e3;
        }
        break;
      case "pathname-prefix-other-locales": {
        const e3 = d(r3, a3);
        if (e3) return e3;
        break;
      }
      case "domains-prefix-always-no-redirect":
        if (localeHasntDomain(e2, i3)) {
          const e3 = n2(r3, a3);
          if (e3) return e3;
        }
        break;
      case "pathname-prefix-always-no-redirect": {
        const e3 = n2(r3, a3);
        if (e3) return e3;
        break;
      }
      case "pathname-prefix-always": {
        const e3 = c(r3, a3);
        if (e3) return e3;
        break;
      }
      case "domains-prefix-always":
        if (localeHasntDomain(e2, i3)) {
          const e3 = c(r3, a3);
          if (e3) return e3;
        }
    }
    return l(r3, a3);
  };
}
__name(createI18nMiddleware, "createI18nMiddleware");
function localeHasntDomain(e2, t2) {
  for (const r2 of Object.values(e2.domainLookupTable)) if (r2 === t2) return false;
  return true;
}
__name(localeHasntDomain, "localeHasntDomain");
var NOOP_ACTIONS_MOD = { server: {} };
var FORM_CONTENT_TYPES = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"];
var SAFE_METHODS = ["GET", "HEAD", "OPTIONS"];
function createOriginCheckMiddleware() {
  return defineMiddleware((e2, t2) => {
    const { request: r2, url: s2, isPrerendered: a2 } = e2;
    if (a2) return t2();
    if (SAFE_METHODS.includes(r2.method)) return t2();
    const o2 = r2.headers.get("origin") === s2.origin;
    if (r2.headers.has("content-type")) {
      if (hasFormLikeHeader(r2.headers.get("content-type")) && !o2) return new Response(`Cross-site ${r2.method} form submissions are forbidden`, { status: 403 });
    } else if (!o2) return new Response(`Cross-site ${r2.method} form submissions are forbidden`, { status: 403 });
    return t2();
  });
}
__name(createOriginCheckMiddleware, "createOriginCheckMiddleware");
function hasFormLikeHeader(e2) {
  if (e2) {
    for (const t2 of FORM_CONTENT_TYPES) if (e2.toLowerCase().includes(t2)) return true;
  }
  return false;
}
__name(hasFormLikeHeader, "hasFormLikeHeader");
function createDefaultRoutes(e2) {
  const t2 = new URL(e2.hrefRoot);
  return [{ instance: default404Instance, matchesComponent: /* @__PURE__ */ __name((e3) => e3.href === new URL(DEFAULT_404_COMPONENT, t2).href, "matchesComponent"), route: DEFAULT_404_ROUTE.route, component: DEFAULT_404_COMPONENT }, { instance: createEndpoint(e2), matchesComponent: /* @__PURE__ */ __name((e3) => e3.href === new URL(SERVER_ISLAND_COMPONENT, t2).href, "matchesComponent"), route: SERVER_ISLAND_ROUTE, component: SERVER_ISLAND_COMPONENT }];
}
__name(createDefaultRoutes, "createDefaultRoutes");
var Pipeline = class {
  static {
    __name(this, "Pipeline");
  }
  constructor(e2, t2, r2, s2, a2, o2, n2, i2 = t2.adapterName, l = t2.clientDirectives, c = t2.inlinedScripts, d = t2.compressHTML, h = t2.i18n, u = t2.middleware, p = new RouteCache(e2, r2), f = t2.site ? new URL(t2.site) : void 0, m = createDefaultRoutes(t2), g = t2.actions) {
    this.logger = e2, this.manifest = t2, this.runtimeMode = r2, this.renderers = s2, this.resolve = a2, this.serverLike = o2, this.streaming = n2, this.adapterName = i2, this.clientDirectives = l, this.inlinedScripts = c, this.compressHTML = d, this.i18n = h, this.middleware = u, this.routeCache = p, this.site = f, this.defaultRoutes = m, this.actions = g, this.internalMiddleware = [], "manual" !== h?.strategy && this.internalMiddleware.push(createI18nMiddleware(h, t2.base, t2.trailingSlash, t2.buildFormat));
  }
  internalMiddleware;
  resolvedMiddleware = void 0;
  resolvedActions = void 0;
  async getMiddleware() {
    if (this.resolvedMiddleware) return this.resolvedMiddleware;
    if (this.middleware) {
      const e2 = [(await this.middleware()).onRequest ?? NOOP_MIDDLEWARE_FN];
      return this.manifest.checkOrigin && e2.unshift(createOriginCheckMiddleware()), this.resolvedMiddleware = sequence(...e2), this.resolvedMiddleware;
    }
    return this.resolvedMiddleware = NOOP_MIDDLEWARE_FN, this.resolvedMiddleware;
  }
  setActions(e2) {
    this.resolvedActions = e2;
  }
  async getActions() {
    return this.resolvedActions ? this.resolvedActions : this.actions ? await this.actions() : NOOP_ACTIONS_MOD;
  }
  async getAction(e2) {
    const t2 = e2.split(".").map((e3) => decodeURIComponent(e3));
    let { server: r2 } = await this.getActions();
    if (!r2 || "object" != typeof r2) throw new TypeError(`Expected \`server\` export in actions file to be an object. Received ${typeof r2}.`);
    for (const e3 of t2) {
      if (!(e3 in r2)) throw new AstroError({ ...ActionNotFoundError, message: ActionNotFoundError.message(t2.join(".")) });
      r2 = r2[e3];
    }
    if ("function" != typeof r2) throw new TypeError(`Expected handler for action ${t2.join(".")} to be a function. Received ${typeof r2}.`);
    return r2;
  }
};
var RedirectComponentInstance = { default: /* @__PURE__ */ __name(() => new Response(null, { status: 301 }), "default") };
var RedirectSinglePageBuiltModule = { page: /* @__PURE__ */ __name(() => Promise.resolve(RedirectComponentInstance), "page"), onRequest: /* @__PURE__ */ __name((e2, t2) => t2(), "onRequest"), renderers: [] };
var dateTimeFormat = new Intl.DateTimeFormat([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
var levels = { debug: 20, info: 30, warn: 40, error: 50, silent: 90 };
function log3(e2, t2, r2, s2, a2 = true) {
  const o2 = e2.level, n2 = e2.dest, i2 = { label: r2, level: t2, message: s2, newLine: a2 };
  isLogLevelEnabled(o2, t2) && n2.write(i2);
}
__name(log3, "log");
function isLogLevelEnabled(e2, t2) {
  return levels[e2] <= levels[t2];
}
__name(isLogLevelEnabled, "isLogLevelEnabled");
function info3(e2, t2, r2, s2 = true) {
  return log3(e2, "info", t2, r2, s2);
}
__name(info3, "info");
function warn3(e2, t2, r2, s2 = true) {
  return log3(e2, "warn", t2, r2, s2);
}
__name(warn3, "warn");
function error3(e2, t2, r2, s2 = true) {
  return log3(e2, "error", t2, r2, s2);
}
__name(error3, "error");
function debug3(...e2) {
  "_astroGlobalDebug" in globalThis && globalThis._astroGlobalDebug(...e2);
}
__name(debug3, "debug");
function getEventPrefix({ level: e2, label: t2 }) {
  const r2 = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`, a2 = [];
  return "error" === e2 || "warn" === e2 ? (a2.push(s.bold(r2)), a2.push(`[${e2.toUpperCase()}]`)) : a2.push(r2), t2 && a2.push(`[${t2}]`), "error" === e2 ? s.red(a2.join(" ")) : "warn" === e2 ? s.yellow(a2.join(" ")) : 1 === a2.length ? s.dim(a2[0]) : s.dim(a2[0]) + " " + s.blue(a2.splice(1).join(" "));
}
__name(getEventPrefix, "getEventPrefix");
var Logger = class {
  static {
    __name(this, "Logger");
  }
  options;
  constructor(e2) {
    this.options = e2;
  }
  info(e2, t2, r2 = true) {
    info3(this.options, e2, t2, r2);
  }
  warn(e2, t2, r2 = true) {
    warn3(this.options, e2, t2, r2);
  }
  error(e2, t2, r2 = true) {
    error3(this.options, e2, t2, r2);
  }
  debug(e2, ...t2) {
    debug3(e2, ...t2);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(e2) {
    return new AstroIntegrationLogger(this.options, e2);
  }
};
var AstroIntegrationLogger = class _AstroIntegrationLogger {
  static {
    __name(this, "AstroIntegrationLogger");
  }
  options;
  label;
  constructor(e2, t2) {
    this.options = e2, this.label = t2;
  }
  fork(e2) {
    return new _AstroIntegrationLogger(this.options, e2);
  }
  info(e2) {
    info3(this.options, this.label, e2);
  }
  warn(e2) {
    warn3(this.options, this.label, e2);
  }
  error(e2) {
    error3(this.options, this.label, e2);
  }
  debug(e2) {
    debug3(this.label, e2);
  }
};
var consoleLogDestination = { write(e2) {
  let t2 = console.error;
  return levels[e2.level] < levels.error && (t2 = console.info), "SKIP_FORMAT" === e2.label ? t2(e2.message) : t2(getEventPrefix(e2) + " " + e2.message), true;
} };
function getAssetsPrefix(e2, t2) {
  let r2 = "";
  if (t2) if ("string" == typeof t2) r2 = t2;
  else {
    r2 = t2[e2.slice(1)] || t2.fallback;
  }
  else r2 = "";
  return r2;
}
__name(getAssetsPrefix, "getAssetsPrefix");
function createAssetLink(e2, t2, r2, s2) {
  let a2 = "";
  if (r2) {
    const t3 = getAssetsPrefix(fileExtension(e2), r2);
    a2 = joinPaths(t3, slash(e2));
  } else a2 = t2 ? prependForwardSlash(joinPaths(t2, slash(e2))) : e2;
  return a2;
}
__name(createAssetLink, "createAssetLink");
function createStylesheetElement(e2, t2, r2, s2) {
  return "inline" === e2.type ? { props: {}, children: e2.content } : { props: { rel: "stylesheet", href: createAssetLink(e2.src, t2, r2) }, children: "" };
}
__name(createStylesheetElement, "createStylesheetElement");
function createStylesheetElementSet(e2, t2, r2, s2) {
  return new Set(e2.map((e3) => createStylesheetElement(e3, t2, r2)));
}
__name(createStylesheetElementSet, "createStylesheetElementSet");
function createModuleScriptElement(e2, t2, r2, s2) {
  return "external" === e2.type ? createModuleScriptElementWithSrc(e2.value, t2, r2) : { props: { type: "module" }, children: e2.value };
}
__name(createModuleScriptElement, "createModuleScriptElement");
function createModuleScriptElementWithSrc(e2, t2, r2, s2) {
  return { props: { type: "module", src: createAssetLink(e2, t2, r2) }, children: "" };
}
__name(createModuleScriptElementWithSrc, "createModuleScriptElementWithSrc");
function redirectTemplate({ status: e2, absoluteLocation: t2, relativeLocation: r2, from: s2 }) {
  return `<!doctype html>
<title>Redirecting to: ${r2}</title>
<meta http-equiv="refresh" content="${302 === e2 ? 2 : 0};url=${r2}">
<meta name="robots" content="noindex">
<link rel="canonical" href="${t2}">
<body>
	<a href="${r2}">Redirecting ${s2 ? `from <code>${s2}</code> ` : ""}to <code>${r2}</code></a>
</body>`;
}
__name(redirectTemplate, "redirectTemplate");
var AppPipeline = class _AppPipeline extends Pipeline {
  static {
    __name(this, "AppPipeline");
  }
  static create({ logger: e2, manifest: t2, runtimeMode: r2, renderers: s2, resolve: a2, serverLike: o2, streaming: n2, defaultRoutes: i2 }) {
    return new _AppPipeline(e2, t2, r2, s2, a2, o2, n2, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, i2);
  }
  headElements(e2) {
    const t2 = this.manifest.routes.find((t3) => t3.routeData === e2), r2 = /* @__PURE__ */ new Set(), s2 = /* @__PURE__ */ new Set(), a2 = createStylesheetElementSet(t2?.styles ?? []);
    for (const e3 of t2?.scripts ?? []) "stage" in e3 ? "head-inline" === e3.stage && s2.add({ props: {}, children: e3.children }) : s2.add(createModuleScriptElement(e3));
    return { links: r2, styles: a2, scripts: s2 };
  }
  componentMetadata() {
  }
  async getComponentByRoute(e2) {
    return (await this.getModuleForRoute(e2)).page();
  }
  async tryRewrite(e2, t2) {
    const { newUrl: r2, pathname: s2, routeData: a2 } = findRouteToRewrite({ payload: e2, request: t2, routes: this.manifest?.routes.map((e3) => e3.routeData), trailingSlash: this.manifest.trailingSlash, buildFormat: this.manifest.buildFormat, base: this.manifest.base, outDir: this.serverLike ? this.manifest.buildClientDir : this.manifest.outDir });
    return { newUrl: r2, pathname: s2, componentInstance: await this.getComponentByRoute(a2), routeData: a2 };
  }
  async getModuleForRoute(e2) {
    for (const t2 of this.defaultRoutes) if (e2.component === t2.component) return { page: /* @__PURE__ */ __name(() => Promise.resolve(t2.instance), "page"), renderers: [] };
    if ("redirect" === e2.type) return RedirectSinglePageBuiltModule;
    if (this.manifest.pageMap) {
      const t2 = this.manifest.pageMap.get(e2.component);
      if (!t2) throw new Error(`Unexpectedly unable to find a component instance for route ${e2.route}`);
      return await t2();
    }
    if (this.manifest.pageModule) return this.manifest.pageModule;
    throw new Error("Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue.");
  }
};
var App = class _App {
  static {
    __name(this, "App");
  }
  #e;
  #t;
  #r = new Logger({ dest: consoleLogDestination, level: "info" });
  #s;
  #a;
  #o;
  constructor(e2, t2 = true) {
    this.#e = e2, this.#t = { routes: e2.routes.map((e3) => e3.routeData) }, ensure404Route(this.#t), this.#s = removeTrailingForwardSlash(this.#e.base), this.#a = this.#n(t2), this.#o = new AstroIntegrationLogger(this.#r.options, this.#e.adapterName);
  }
  getAdapterLogger() {
    return this.#o;
  }
  getAllowedDomains() {
    return this.#e.allowedDomains;
  }
  get manifest() {
    return this.#e;
  }
  set manifest(e2) {
    this.#e = e2;
  }
  matchesAllowedDomains(e2, t2) {
    return _App.validateForwardedHost(e2, this.#e.allowedDomains, t2);
  }
  static validateForwardedHost(e2, t2, r2) {
    if (!t2 || 0 === t2.length) return false;
    try {
      const s2 = new URL(`${r2 || "https"}://${e2}`);
      return t2.some((e3) => matchPattern(s2, e3));
    } catch {
      return false;
    }
  }
  static sanitizeHost(e2) {
    if (e2 && !/[/\\]/.test(e2)) return e2;
  }
  static validateForwardedHeaders(e2, t2, r2, s2) {
    const a2 = {};
    if (e2) if (s2 && s2.length > 0) {
      if (s2.some((e3) => void 0 !== e3.protocol)) try {
        const t3 = new URL(`${e2}://example.com`);
        s2.some((e3) => matchPattern(t3, e3)) && (a2.protocol = e2);
      } catch {
      }
      else /^https?$/.test(e2) && (a2.protocol = e2);
    } else /^https?$/.test(e2) && (a2.protocol = e2);
    if (r2 && s2 && s2.length > 0) {
      if (s2.some((e3) => void 0 !== e3.port)) {
        s2.some((e3) => e3.port === r2) && (a2.port = r2);
      }
    }
    if (t2 && t2.length > 0 && s2 && s2.length > 0) {
      const e3 = a2.protocol || "https", r3 = _App.sanitizeHost(t2);
      if (r3) try {
        const t3 = r3.split(":")[0], o2 = r3.includes(":") ? r3.split(":")[1] : void 0, n2 = a2.port || o2, i2 = n2 ? `${t3}:${n2}` : t3, l = new URL(`${e3}://${i2}`);
        s2.some((e4) => matchPattern(l, e4)) && (a2.host = r3);
      } catch {
      }
    }
    return a2;
  }
  #n(e2 = false) {
    return AppPipeline.create({ logger: this.#r, manifest: this.#e, runtimeMode: "production", renderers: this.#e.renderers, defaultRoutes: createDefaultRoutes(this.#e), resolve: /* @__PURE__ */ __name(async (e3) => {
      if (!(e3 in this.#e.entryModules)) throw new Error(`Unable to resolve [${e3}]`);
      const t2 = this.#e.entryModules[e3];
      return t2.startsWith("data:") || 0 === t2.length ? t2 : createAssetLink(t2, this.#e.base, this.#e.assetsPrefix);
    }, "resolve"), serverLike: true, streaming: e2 });
  }
  set setManifestData(e2) {
    this.#t = e2;
  }
  removeBase(e2) {
    return e2.startsWith(this.#e.base) ? e2.slice(this.#s.length + 1) : e2;
  }
  #i(e2) {
    const t2 = new URL(e2.url), r2 = prependForwardSlash(this.removeBase(t2.pathname));
    try {
      return validateAndDecodePathname(r2);
    } catch (e3) {
      return this.getAdapterLogger().error(e3.toString()), r2;
    }
  }
  match(e2, t2 = false) {
    const r2 = new URL(e2.url);
    if (this.#e.assets.has(r2.pathname)) return;
    let s2 = this.#l(e2);
    s2 || (s2 = prependForwardSlash(this.removeBase(r2.pathname)));
    try {
      s2 = validateAndDecodePathname(s2);
    } catch {
      return;
    }
    let a2 = matchRoute(s2, this.#t);
    if (a2) {
      if (t2) return a2;
      if (!a2.prerender) return a2;
    }
  }
  #l(e2) {
    let t2;
    const r2 = new URL(e2.url);
    if (this.#e.i18n && ("domains-prefix-always" === this.#e.i18n.strategy || "domains-prefix-other-locales" === this.#e.i18n.strategy || "domains-prefix-always-no-redirect" === this.#e.i18n.strategy)) {
      const s2 = _App.validateForwardedHeaders(e2.headers.get("X-Forwarded-Proto") ?? void 0, e2.headers.get("X-Forwarded-Host") ?? void 0, e2.headers.get("X-Forwarded-Port") ?? void 0, this.#e.allowedDomains);
      let a2 = s2.protocol ? s2.protocol + ":" : r2.protocol, o2 = s2.host ?? e2.headers.get("Host");
      if (o2 && a2) {
        o2 = o2.split(":")[0];
        try {
          let e3;
          const s3 = new URL(`${a2}//${o2}`);
          for (const [t3, r3] of Object.entries(this.#e.i18n.domainLookupTable)) {
            const a3 = new URL(t3);
            if (s3.host === a3.host && s3.protocol === a3.protocol) {
              e3 = r3;
              break;
            }
          }
          e3 && (t2 = prependForwardSlash(joinPaths(normalizeTheLocale(e3), this.removeBase(r2.pathname))), r2.pathname.endsWith("/") && (t2 = appendForwardSlash(t2)));
        } catch (e3) {
          this.#r.error("router", `Astro tried to parse ${a2}//${o2} as an URL, but it threw a parsing error. Check the X-Forwarded-Host and X-Forwarded-Proto headers.`), this.#r.error("router", `Error: ${e3}`);
        }
      }
    }
    return t2;
  }
  #c(e2) {
    const { trailingSlash: t2 } = this.#e;
    if ("/" === e2 || isInternalPath(e2)) return e2;
    const r2 = collapseDuplicateTrailingSlashes(e2, "never" !== t2);
    return r2 !== e2 ? r2 : "ignore" === t2 ? e2 : "always" !== t2 || hasFileExtension(e2) ? "never" === t2 ? removeTrailingForwardSlash(e2) : e2 : appendForwardSlash(e2);
  }
  async render(e2, t2) {
    let r2, s2, a2, o2;
    const n2 = new URL(e2.url), i2 = this.#c(n2.pathname), l = t2?.prerenderedErrorPageFetch ?? fetch;
    if (i2 !== n2.pathname) {
      const t3 = "GET" === e2.method ? 301 : 308;
      return new Response(redirectTemplate({ status: t3, relativeLocation: n2.pathname, absoluteLocation: i2, from: e2.url }), { status: t3, headers: { location: i2 + n2.search } });
    }
    if (o2 = t2?.addCookieHeader, a2 = t2?.clientAddress ?? Reflect.get(e2, clientAddressSymbol), r2 = t2?.routeData, s2 = t2?.locals, r2 && (this.#r.debug("router", "The adapter " + this.#e.adapterName + " provided a custom RouteData for ", e2.url), this.#r.debug("router", "RouteData:\n" + r2)), s2 && "object" != typeof s2) {
      const t3 = new AstroError(LocalsNotAnObject);
      return this.#r.error(null, t3.stack), this.#d(e2, { status: 500, error: t3, clientAddress: a2, prerenderedErrorPageFetch: l });
    }
    if (r2 || (r2 = this.match(e2), this.#r.debug("router", "Astro matched the following route for " + e2.url), this.#r.debug("router", "RouteData:\n" + r2)), r2 || (r2 = this.#t.routes.find((e3) => "404.astro" === e3.component || e3.component === DEFAULT_404_COMPONENT)), !r2) return this.#r.debug("router", "Astro hasn't found routes that match " + e2.url), this.#r.debug("router", "Here's the available routes:\n", this.#t), this.#d(e2, { locals: s2, status: 404, clientAddress: a2, prerenderedErrorPageFetch: l });
    const c = this.#i(e2), d = this.#h(r2, c);
    let h, u;
    try {
      const t3 = await this.#a.getModuleForRoute(r2), o3 = await RenderContext.create({ pipeline: this.#a, locals: s2, pathname: c, request: e2, routeData: r2, status: d, clientAddress: a2 });
      u = o3.session, h = await o3.render(await t3.page());
    } catch (t3) {
      return this.#r.error(null, t3.stack || t3.message || String(t3)), this.#d(e2, { locals: s2, status: 500, error: t3, clientAddress: a2, prerenderedErrorPageFetch: l });
    } finally {
      await u?.[PERSIST_SYMBOL]();
    }
    if (REROUTABLE_STATUS_CODES.includes(h.status) && null === h.body && "no" !== h.headers.get(REROUTE_DIRECTIVE_HEADER)) return this.#d(e2, { locals: s2, response: h, status: h.status, error: 500 === h.status ? null : void 0, clientAddress: a2, prerenderedErrorPageFetch: l });
    if (h.headers.has(REROUTE_DIRECTIVE_HEADER) && h.headers.delete(REROUTE_DIRECTIVE_HEADER), o2) for (const e3 of _App.getSetCookieFromResponse(h)) h.headers.append("set-cookie", e3);
    return Reflect.set(h, responseSentSymbol, true), h;
  }
  setCookieHeaders(e2) {
    return getSetCookiesFromResponse(e2);
  }
  static getSetCookieFromResponse = getSetCookiesFromResponse;
  async #d(e2, { locals: t2, status: r2, response: s2, skipMiddleware: a2 = false, error: o2, clientAddress: n2, prerenderedErrorPageFetch: i2 }) {
    const l = `/${r2}${"always" === this.#e.trailingSlash ? "/" : ""}`, c = matchRoute(l, this.#t), d = new URL(e2.url);
    if (c) {
      if (c.prerender) {
        const t3 = c.route.endsWith(`/${r2}`) ? ".html" : "", a3 = new URL(`${this.#s}/${r2}${t3}`, d);
        if (a3.toString() !== e2.url) {
          const e3 = await i2(a3.toString()), t4 = { status: r2, removeContentEncodingHeaders: true };
          return this.#u(e3, s2, t4);
        }
      }
      const l2 = await this.#a.getModuleForRoute(c);
      let h2;
      try {
        const i3 = await RenderContext.create({ locals: t2, pipeline: this.#a, middleware: a2 ? NOOP_MIDDLEWARE_FN : void 0, pathname: this.#i(e2), request: e2, routeData: c, status: r2, props: { error: o2 }, clientAddress: n2 });
        h2 = i3.session;
        const d2 = await i3.render(await l2.page());
        return this.#u(d2, s2);
      } catch {
        if (false === a2) return this.#d(e2, { locals: t2, status: r2, response: s2, skipMiddleware: true, clientAddress: n2, prerenderedErrorPageFetch: i2 });
      } finally {
        await h2?.[PERSIST_SYMBOL]();
      }
    }
    const h = this.#u(new Response(null, { status: r2 }), s2);
    return Reflect.set(h, responseSentSymbol, true), h;
  }
  #u(e2, t2, r2) {
    let s2 = e2.headers;
    if (r2?.removeContentEncodingHeaders && (s2 = new Headers(s2), s2.delete("Content-Encoding"), s2.delete("Content-Length")), !t2) return void 0 !== r2 ? new Response(e2.body, { status: r2.status, statusText: e2.statusText, headers: s2 }) : e2;
    const a2 = r2?.status ? r2.status : 200 === t2.status ? e2.status : t2.status;
    try {
      t2.headers.delete("Content-type");
    } catch {
    }
    const o2 = new Map([...Array.from(s2), ...Array.from(t2.headers)]), n2 = new Headers();
    for (const [e3, t3] of o2) n2.set(e3, t3);
    return new Response(e2.body, { status: a2, statusText: 200 === a2 ? e2.statusText : t2.statusText, headers: n2 });
  }
  #h(e2, t2) {
    if (!e2.pattern.test(t2)) {
      for (const r3 of e2.fallbackRoutes) if (r3.pattern.test(t2)) return 302;
    }
    const r2 = removeTrailingForwardSlash(e2.route);
    return r2.endsWith("/404") ? 404 : r2.endsWith("/500") ? 500 : 200;
  }
};
async function handle(e2, t2, r2, s2, a2) {
  const { pathname: o2 } = new URL(r2.url), n2 = "SESSION";
  if (globalThis.__env__ ??= {}, globalThis.__env__[n2] = s2[n2], e2.assets.has(o2)) return s2.ASSETS.fetch(r2.url.replace(/\.html$/, ""));
  const i2 = t2.match(r2);
  if (!i2) {
    const e3 = await s2.ASSETS.fetch(r2.url.replace(/index.html$/, "").replace(/\.html$/, ""));
    if (404 !== e3.status) return e3;
  }
  Reflect.set(r2, Symbol.for("astro.clientAddress"), r2.headers.get("cf-connecting-ip"));
  const l = { runtime: { env: s2, cf: r2.cf, caches, ctx: { waitUntil: /* @__PURE__ */ __name((e3) => a2.waitUntil(e3), "waitUntil"), passThroughOnException: /* @__PURE__ */ __name(() => {
    throw new Error("`passThroughOnException` is currently not available in Cloudflare Pages. See https://developers.cloudflare.com/pages/platform/known-issues/#pages-functions.");
  }, "passThroughOnException"), props: {} } } }, c = await t2.render(r2, { routeData: i2, locals: l, prerenderedErrorPageFetch: /* @__PURE__ */ __name(async (e3) => s2.ASSETS.fetch(e3.replace(/\.html$/, "")), "prerenderedErrorPageFetch") });
  if (t2.setCookieHeaders) for (const e3 of t2.setCookieHeaders(c)) c.headers.append("Set-Cookie", e3);
  return c;
}
__name(handle, "handle");
function createExports(e2) {
  const t2 = new App(e2);
  return { default: { fetch: /* @__PURE__ */ __name(async (r2, s2, a2) => await handle(e2, t2, r2, s2, a2), "fetch") } };
}
__name(createExports, "createExports");
var serverEntrypointModule = Object.freeze(Object.defineProperty({ __proto__: null, createExports }, Symbol.toStringTag, { value: "Module" }));

// dist/_worker.js/manifest_DeXN1HKT.mjs
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
init_server_37mFo7XU();
init_astro_designed_error_pages_CNJkf2fl();
globalThis.process ??= {}, globalThis.process.env ??= {};
function sanitizeParams(e2) {
  return Object.fromEntries(Object.entries(e2).map(([e3, s2]) => "string" == typeof s2 ? [e3, s2.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")] : [e3, s2]));
}
__name(sanitizeParams, "sanitizeParams");
function getParameter(e2, s2) {
  if (e2.spread) return s2[e2.content.slice(3)] || "";
  if (e2.dynamic) {
    if (!s2[e2.content]) throw new TypeError(`Missing parameter: ${e2.content}`);
    return s2[e2.content];
  }
  return e2.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
__name(getParameter, "getParameter");
function getSegment(e2, s2) {
  const a2 = e2.map((e3) => getParameter(e3, s2)).join("");
  return a2 ? "/" + a2 : "";
}
__name(getSegment, "getSegment");
function getRouteGenerator(e2, s2) {
  return (a2) => {
    const t2 = sanitizeParams(a2);
    let r2 = "";
    "always" === s2 && e2.length && (r2 = "/");
    return e2.map((e3) => getSegment(e3, t2)).join("") + r2 || "/";
  };
}
__name(getRouteGenerator, "getRouteGenerator");
function deserializeRouteData(e2) {
  return { route: e2.route, type: e2.type, pattern: new RegExp(e2.pattern), params: e2.params, component: e2.component, generate: getRouteGenerator(e2.segments, e2._meta.trailingSlash), pathname: e2.pathname || void 0, segments: e2.segments, prerender: e2.prerender, redirect: e2.redirect, redirectRoute: e2.redirectRoute ? deserializeRouteData(e2.redirectRoute) : void 0, fallbackRoutes: e2.fallbackRoutes.map((e3) => deserializeRouteData(e3)), isIndex: e2.isIndex, origin: e2.origin };
}
__name(deserializeRouteData, "deserializeRouteData");
function deserializeManifest(e2) {
  const s2 = [];
  for (const a3 of e2.routes) {
    s2.push({ ...a3, routeData: deserializeRouteData(a3.routeData) });
    a3.routeData = deserializeRouteData(a3.routeData);
  }
  const a2 = new Set(e2.assets), t2 = new Map(e2.componentMetadata), r2 = new Map(e2.inlinedScripts), n2 = new Map(e2.clientDirectives), o2 = new Map(e2.serverIslandNameMap), i2 = decodeKey(e2.key);
  return { middleware: /* @__PURE__ */ __name(() => ({ onRequest: NOOP_MIDDLEWARE_FN }), "middleware"), ...e2, assets: a2, componentMetadata: t2, inlinedScripts: r2, clientDirectives: n2, routes: s2, serverIslandNameMap: o2, key: i2 };
}
__name(deserializeManifest, "deserializeManifest");
var manifest = deserializeManifest({ hrefRoot: "file:///Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/", cacheDir: "file:///Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/node_modules/.astro/", outDir: "file:///Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/dist/", srcDir: "file:///Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/", publicDir: "file:///Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/public/", buildClientDir: "file:///Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/dist/", buildServerDir: "file:///Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/dist/_worker.js/", adapterName: "@astrojs/cloudflare", routes: [{ file: "", links: [], scripts: [], styles: [], routeData: { type: "page", component: "_server-islands.astro", params: ["name"], segments: [[{ content: "_server-islands", dynamic: false, spread: false }], [{ content: "name", dynamic: true, spread: false }]], pattern: "^\\/_server-islands\\/([^/]+?)\\/$", prerender: false, isIndex: false, fallbackRoutes: [], route: "/_server-islands/[name]", origin: "internal", _meta: { trailingSlash: "always" } } }, { file: "404.html", links: [], scripts: [], styles: [], routeData: { route: "/404", isIndex: false, type: "page", pattern: "^\\/404\\/$", segments: [[{ content: "404", dynamic: false, spread: false }]], params: [], component: "src/pages/404.astro", pathname: "/404", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "connect/about/index.html", links: [], scripts: [], styles: [], routeData: { route: "/connect/about", isIndex: true, type: "page", pattern: "^\\/connect\\/about\\/$", segments: [[{ content: "connect", dynamic: false, spread: false }], [{ content: "about", dynamic: false, spread: false }]], params: [], component: "src/pages/connect/about/index.astro", pathname: "/connect/about", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "connect/contact/index.html", links: [], scripts: [], styles: [], routeData: { route: "/connect/contact", isIndex: true, type: "page", pattern: "^\\/connect\\/contact\\/$", segments: [[{ content: "connect", dynamic: false, spread: false }], [{ content: "contact", dynamic: false, spread: false }]], params: [], component: "src/pages/connect/contact/index.astro", pathname: "/connect/contact", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "connect/plan-a-visit/index.html", links: [], scripts: [], styles: [], routeData: { route: "/connect/plan-a-visit", isIndex: true, type: "page", pattern: "^\\/connect\\/plan-a-visit\\/$", segments: [[{ content: "connect", dynamic: false, spread: false }], [{ content: "plan-a-visit", dynamic: false, spread: false }]], params: [], component: "src/pages/connect/plan-a-visit/index.astro", pathname: "/connect/plan-a-visit", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "connect/prayer/index.html", links: [], scripts: [], styles: [], routeData: { route: "/connect/prayer", isIndex: true, type: "page", pattern: "^\\/connect\\/prayer\\/$", segments: [[{ content: "connect", dynamic: false, spread: false }], [{ content: "prayer", dynamic: false, spread: false }]], params: [], component: "src/pages/connect/prayer/index.astro", pathname: "/connect/prayer", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "connect/worship-with-us/index.html", links: [], scripts: [], styles: [], routeData: { route: "/connect/worship-with-us", isIndex: true, type: "page", pattern: "^\\/connect\\/worship-with-us\\/$", segments: [[{ content: "connect", dynamic: false, spread: false }], [{ content: "worship-with-us", dynamic: false, spread: false }]], params: [], component: "src/pages/connect/worship-with-us/index.astro", pathname: "/connect/worship-with-us", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "connect/index.html", links: [], scripts: [], styles: [], routeData: { route: "/connect", isIndex: true, type: "page", pattern: "^\\/connect\\/$", segments: [[{ content: "connect", dynamic: false, spread: false }]], params: [], component: "src/pages/connect/index.astro", pathname: "/connect", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "events/index.html", links: [], scripts: [], styles: [], routeData: { route: "/events", isIndex: true, type: "page", pattern: "^\\/events\\/$", segments: [[{ content: "events", dynamic: false, spread: false }]], params: [], component: "src/pages/events/index.astro", pathname: "/events", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "give/index.html", links: [], scripts: [], styles: [], routeData: { route: "/give", isIndex: true, type: "page", pattern: "^\\/give\\/$", segments: [[{ content: "give", dynamic: false, spread: false }]], params: [], component: "src/pages/give/index.astro", pathname: "/give", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "join/index.html", links: [], scripts: [], styles: [], routeData: { route: "/join", isIndex: true, type: "page", pattern: "^\\/join\\/$", segments: [[{ content: "join", dynamic: false, spread: false }]], params: [], component: "src/pages/join/index.astro", pathname: "/join", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "media/live/index.html", links: [], scripts: [], styles: [], routeData: { route: "/media/live", isIndex: true, type: "page", pattern: "^\\/media\\/live\\/$", segments: [[{ content: "media", dynamic: false, spread: false }], [{ content: "live", dynamic: false, spread: false }]], params: [], component: "src/pages/media/live/index.astro", pathname: "/media/live", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "media/videos/index.html", links: [], scripts: [], styles: [], routeData: { route: "/media/videos", isIndex: true, type: "page", pattern: "^\\/media\\/videos\\/$", segments: [[{ content: "media", dynamic: false, spread: false }], [{ content: "videos", dynamic: false, spread: false }]], params: [], component: "src/pages/media/videos/index.astro", pathname: "/media/videos", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "media/index.html", links: [], scripts: [], styles: [], routeData: { route: "/media", isIndex: true, type: "page", pattern: "^\\/media\\/$", segments: [[{ content: "media", dynamic: false, spread: false }]], params: [], component: "src/pages/media/index.astro", pathname: "/media", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "ministries/index.html", links: [], scripts: [], styles: [], routeData: { route: "/ministries", isIndex: true, type: "page", pattern: "^\\/ministries\\/$", segments: [[{ content: "ministries", dynamic: false, spread: false }]], params: [], component: "src/pages/ministries/index.astro", pathname: "/ministries", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "privacy/index.html", links: [], scripts: [], styles: [], routeData: { route: "/privacy", isIndex: true, type: "page", pattern: "^\\/privacy\\/$", segments: [[{ content: "privacy", dynamic: false, spread: false }]], params: [], component: "src/pages/privacy/index.astro", pathname: "/privacy", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "resources/bulletins/index.html", links: [], scripts: [], styles: [], routeData: { route: "/resources/bulletins", isIndex: true, type: "page", pattern: "^\\/resources\\/bulletins\\/$", segments: [[{ content: "resources", dynamic: false, spread: false }], [{ content: "bulletins", dynamic: false, spread: false }]], params: [], component: "src/pages/resources/bulletins/index.astro", pathname: "/resources/bulletins", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "resources/forms/index.html", links: [], scripts: [], styles: [], routeData: { route: "/resources/forms", isIndex: true, type: "page", pattern: "^\\/resources\\/forms\\/$", segments: [[{ content: "resources", dynamic: false, spread: false }], [{ content: "forms", dynamic: false, spread: false }]], params: [], component: "src/pages/resources/forms/index.astro", pathname: "/resources/forms", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "resources/index.html", links: [], scripts: [], styles: [], routeData: { route: "/resources", isIndex: true, type: "page", pattern: "^\\/resources\\/$", segments: [[{ content: "resources", dynamic: false, spread: false }]], params: [], component: "src/pages/resources/index.astro", pathname: "/resources", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "robots.txt", links: [], scripts: [], styles: [], routeData: { route: "/robots.txt", isIndex: false, type: "endpoint", pattern: "^\\/robots\\.txt\\/?$", segments: [[{ content: "robots.txt", dynamic: false, spread: false }]], params: [], component: "src/pages/robots.txt.ts", pathname: "/robots.txt", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "search/index.html", links: [], scripts: [], styles: [], routeData: { route: "/search", isIndex: true, type: "page", pattern: "^\\/search\\/$", segments: [[{ content: "search", dynamic: false, spread: false }]], params: [], component: "src/pages/search/index.astro", pathname: "/search", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "serve/index.html", links: [], scripts: [], styles: [], routeData: { route: "/serve", isIndex: true, type: "page", pattern: "^\\/serve\\/$", segments: [[{ content: "serve", dynamic: false, spread: false }]], params: [], component: "src/pages/serve/index.astro", pathname: "/serve", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "index.html", links: [], scripts: [], styles: [], routeData: { route: "/", isIndex: true, type: "page", pattern: "^\\/$", segments: [], params: [], component: "src/pages/index.astro", pathname: "/", prerender: true, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }, { file: "", links: [], scripts: [], styles: [], routeData: { type: "endpoint", isIndex: false, route: "/_image/", pattern: "^\\/_image\\/$", segments: [[{ content: "_image", dynamic: false, spread: false }]], params: [], component: "node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", pathname: "/_image/", prerender: false, fallbackRoutes: [], origin: "internal", _meta: { trailingSlash: "always" } } }, { file: "", links: [], scripts: [], styles: [{ type: "external", src: "/_astro/index.BJ8s4oIh.css" }, { type: "inline", content: ".table[data-astro-cid-7e7lqtjo]{border:1px solid var(--color-border);border-radius:var(--radius-2);overflow:hidden;margin-top:var(--space-4)}.row[data-astro-cid-7e7lqtjo]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--space-4);padding:var(--space-3) var(--space-4);border-top:1px solid var(--color-border);background:var(--color-white)}.row[data-astro-cid-7e7lqtjo].head{border-top:none;background:var(--color-bg);font-weight:800}.muted[data-astro-cid-7e7lqtjo]{color:var(--color-text-muted)}.small[data-astro-cid-7e7lqtjo]{font-size:.95rem}@media(max-width:720px){.row[data-astro-cid-7e7lqtjo]{grid-template-columns:1fr;gap:var(--space-2)}}\n" }], routeData: { route: "/connect/team", isIndex: true, type: "page", pattern: "^\\/connect\\/team\\/$", segments: [[{ content: "connect", dynamic: false, spread: false }], [{ content: "team", dynamic: false, spread: false }]], params: [], component: "src/pages/connect/team/index.astro", pathname: "/connect/team", prerender: false, fallbackRoutes: [], distURL: [], origin: "project", _meta: { trailingSlash: "always" } } }], site: "http://localhost:4321", base: "/", trailingSlash: "always", compressHTML: true, componentMetadata: [["\0astro:content", { propagation: "in-tree", containsHead: false }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/components/sections/EventList.astro", { propagation: "in-tree", containsHead: false }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/index.astro", { propagation: "in-tree", containsHead: true }], ["\0@astro-page:src/pages/index@_@astro", { propagation: "in-tree", containsHead: false }], ["\0@astrojs-ssr-virtual-entry", { propagation: "in-tree", containsHead: false }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/events/[id].astro", { propagation: "in-tree", containsHead: true }], ["\0@astro-page:src/pages/events/[id]@_@astro", { propagation: "in-tree", containsHead: false }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/events/index.astro", { propagation: "in-tree", containsHead: true }], ["\0@astro-page:src/pages/events/index@_@astro", { propagation: "in-tree", containsHead: false }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/ministries/[id].astro", { propagation: "in-tree", containsHead: true }], ["\0@astro-page:src/pages/ministries/[id]@_@astro", { propagation: "in-tree", containsHead: false }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/ministries/index.astro", { propagation: "in-tree", containsHead: true }], ["\0@astro-page:src/pages/ministries/index@_@astro", { propagation: "in-tree", containsHead: false }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/resources/[...id].astro", { propagation: "in-tree", containsHead: true }], ["\0@astro-page:src/pages/resources/[...id]@_@astro", { propagation: "in-tree", containsHead: false }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/resources/bulletins/index.astro", { propagation: "in-tree", containsHead: true }], ["\0@astro-page:src/pages/resources/bulletins/index@_@astro", { propagation: "in-tree", containsHead: false }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/resources/index.astro", { propagation: "in-tree", containsHead: true }], ["\0@astro-page:src/pages/resources/index@_@astro", { propagation: "in-tree", containsHead: false }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/404.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/connect/about/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/connect/contact/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/connect/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/connect/plan-a-visit/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/connect/prayer/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/connect/team/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/connect/worship-with-us/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/give/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/join/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/media/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/media/live/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/media/videos/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/privacy/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/resources/forms/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/search/index.astro", { propagation: "none", containsHead: true }], ["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/pages/serve/index.astro", { propagation: "none", containsHead: true }]], renderers: [], clientDirectives: [["idle", '(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();'], ["load", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'], ["media", '(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener("change",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event("astro:media"));})();'], ["only", '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'], ["visible", '(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event("astro:visible"));})();']], entryModules: { "\0astro-internal:middleware": "_astro-internal_middleware.mjs", "\0virtual:astro:actions/noop-entrypoint": "noop-entrypoint.mjs", "\0@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js": "pages/_image/index.astro.mjs", "\0@astro-page:src/pages/404@_@astro": "pages/404.astro.mjs", "\0@astro-page:src/pages/connect/about/index@_@astro": "pages/connect/about.astro.mjs", "\0@astro-page:src/pages/connect/contact/index@_@astro": "pages/connect/contact.astro.mjs", "\0@astro-page:src/pages/connect/plan-a-visit/index@_@astro": "pages/connect/plan-a-visit.astro.mjs", "\0@astro-page:src/pages/connect/prayer/index@_@astro": "pages/connect/prayer.astro.mjs", "\0@astro-page:src/pages/connect/team/index@_@astro": "pages/connect/team.astro.mjs", "\0@astro-page:src/pages/connect/worship-with-us/index@_@astro": "pages/connect/worship-with-us.astro.mjs", "\0@astro-page:src/pages/connect/index@_@astro": "pages/connect.astro.mjs", "\0@astro-page:src/pages/events/[id]@_@astro": "pages/events/_id_.astro.mjs", "\0@astro-page:src/pages/events/index@_@astro": "pages/events.astro.mjs", "\0@astro-page:src/pages/give/index@_@astro": "pages/give.astro.mjs", "\0@astro-page:src/pages/join/index@_@astro": "pages/join.astro.mjs", "\0@astro-page:src/pages/media/live/index@_@astro": "pages/media/live.astro.mjs", "\0@astro-page:src/pages/media/videos/index@_@astro": "pages/media/videos.astro.mjs", "\0@astro-page:src/pages/media/index@_@astro": "pages/media.astro.mjs", "\0@astro-page:src/pages/ministries/[id]@_@astro": "pages/ministries/_id_.astro.mjs", "\0@astro-page:src/pages/ministries/index@_@astro": "pages/ministries.astro.mjs", "\0@astro-page:src/pages/privacy/index@_@astro": "pages/privacy.astro.mjs", "\0@astro-page:src/pages/resources/bulletins/index@_@astro": "pages/resources/bulletins.astro.mjs", "\0@astro-page:src/pages/resources/forms/index@_@astro": "pages/resources/forms.astro.mjs", "\0@astro-page:src/pages/resources/index@_@astro": "pages/resources.astro.mjs", "\0@astro-page:src/pages/resources/[...id]@_@astro": "pages/resources/_---id_.astro.mjs", "\0@astro-page:src/pages/robots.txt@_@ts": "pages/robots.txt.astro.mjs", "\0@astro-page:src/pages/search/index@_@astro": "pages/search.astro.mjs", "\0@astro-page:src/pages/serve/index@_@astro": "pages/serve.astro.mjs", "\0@astro-page:src/pages/index@_@astro": "pages/index.astro.mjs", "\0@astro-renderers": "renderers.mjs", "\0@astrojs-ssr-virtual-entry": "index.js", "\0@astrojs-ssr-adapter": "_@astrojs-ssr-adapter.mjs", "\0@astrojs-manifest": "manifest_DeXN1HKT.mjs", "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs": "chunks/cloudflare-kv-binding_DMly_2Gl.mjs", "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/node_modules/astro/dist/assets/services/sharp.js": "chunks/sharp_Bl30y7i7.mjs", "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/.astro/content-assets.mjs": "chunks/content-assets_XqCgPAV2.mjs", "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/.astro/content-modules.mjs": "chunks/content-modules_Bvq7llv8.mjs", "\0astro:data-layer-content": "chunks/_astro_data-layer-content_B9vEkbpH.mjs", "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/components/global/Header.astro?astro&type=script&index=0&lang.ts": "_astro/Header.astro_astro_type_script_index_0_lang.9Xrm5C9V.js", "/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/node_modules/astro-pagefind/src/components/Search.astro?astro&type=script&index=0&lang.ts": "_astro/Search.astro_astro_type_script_index_0_lang.tZYucdM2.js", "astro:scripts/before-hydration.js": "" }, inlinedScripts: [["/Users/wholesway/Documents/Projects-and-Data/Dev/01-personal/church-website/web/src/components/global/Header.astro?astro&type=script&index=0&lang.ts", 'document.addEventListener("click",n=>{const t=n.target;if(!(t instanceof HTMLElement))return;const s=t.closest("a"),e=t.closest("details.menu");s&&e&&e.removeAttribute("open")});']], assets: ["/_astro/index.CXOjeUv_.css", "/_astro/index.BJ8s4oIh.css", "/_headers", "/favicon.svg", "/_astro/Search.astro_astro_type_script_index_0_lang.tZYucdM2.js", "/bulletins/2025-12-13.pdf", "/bulletins/2025-12-20.pdf", "/_worker.js/_@astrojs-ssr-adapter.mjs", "/_worker.js/_astro-internal_middleware.mjs", "/_worker.js/index.js", "/_worker.js/noop-entrypoint.mjs", "/_worker.js/renderers.mjs", "/_worker.js/_astro/index.BJ8s4oIh.css", "/_worker.js/_astro/index.CXOjeUv_.css", "/_worker.js/pages/404.astro.mjs", "/_worker.js/pages/connect.astro.mjs", "/_worker.js/pages/events.astro.mjs", "/_worker.js/pages/give.astro.mjs", "/_worker.js/pages/index.astro.mjs", "/_worker.js/pages/join.astro.mjs", "/_worker.js/pages/media.astro.mjs", "/_worker.js/pages/ministries.astro.mjs", "/_worker.js/pages/privacy.astro.mjs", "/_worker.js/pages/resources.astro.mjs", "/_worker.js/pages/robots.txt.astro.mjs", "/_worker.js/pages/search.astro.mjs", "/_worker.js/pages/serve.astro.mjs", "/_worker.js/chunks/BaseLayout_B0FKJkKI.mjs", "/_worker.js/chunks/CardGrid_Cco-Ev-p.mjs", "/_worker.js/chunks/CardGrid_DbgkM97F.mjs", "/_worker.js/chunks/ContentCard_BnBDQ6zX.mjs", "/_worker.js/chunks/Hero_pra0HcUS.mjs", "/_worker.js/chunks/Schedule_K1lARrjs.mjs", "/_worker.js/chunks/YouTubeEmbed_D6i7MMjD.mjs", "/_worker.js/chunks/_@astrojs-ssr-adapter_CyftsAGz.mjs", "/_worker.js/chunks/_astro_assets_VJUJ1YrL.mjs", "/_worker.js/chunks/_astro_content_W1jxLcJj.mjs", "/_worker.js/chunks/_astro_data-layer-content_B9vEkbpH.mjs", "/_worker.js/chunks/astro-designed-error-pages_CNJkf2fl.mjs", "/_worker.js/chunks/astro_BM3eNyoW.mjs", "/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs", "/_worker.js/chunks/consts_47CwkweC.mjs", "/_worker.js/chunks/content-assets_XqCgPAV2.mjs", "/_worker.js/chunks/content-modules_Bvq7llv8.mjs", "/_worker.js/chunks/index_s3SF91tP.mjs", "/_worker.js/chunks/noop-middleware_BxP_suVs.mjs", "/_worker.js/chunks/parse_BeDHJKc-.mjs", "/_worker.js/chunks/path_mW90u446.mjs", "/_worker.js/chunks/remote_CrdlObHx.mjs", "/_worker.js/chunks/sharp_Bl30y7i7.mjs", "/_worker.js/pages/_image/index.astro.mjs", "/_worker.js/pages/connect/about.astro.mjs", "/_worker.js/pages/connect/contact.astro.mjs", "/_worker.js/pages/connect/plan-a-visit.astro.mjs", "/_worker.js/pages/connect/prayer.astro.mjs", "/_worker.js/pages/connect/team.astro.mjs", "/_worker.js/pages/connect/worship-with-us.astro.mjs", "/_worker.js/pages/resources/_---id_.astro.mjs", "/_worker.js/pages/resources/bulletins.astro.mjs", "/_worker.js/pages/resources/forms.astro.mjs", "/_worker.js/pages/ministries/_id_.astro.mjs", "/_worker.js/chunks/astro/server_37mFo7XU.mjs", "/_worker.js/pages/events/_id_.astro.mjs", "/_worker.js/pages/media/live.astro.mjs", "/_worker.js/pages/media/videos.astro.mjs", "/404.html", "/connect/about/index.html", "/connect/contact/index.html", "/connect/plan-a-visit/index.html", "/connect/prayer/index.html", "/connect/worship-with-us/index.html", "/connect/index.html", "/events/index.html", "/give/index.html", "/join/index.html", "/media/live/index.html", "/media/videos/index.html", "/media/index.html", "/ministries/index.html", "/privacy/index.html", "/resources/bulletins/index.html", "/resources/forms/index.html", "/resources/index.html", "/robots.txt", "/search/index.html", "/serve/index.html", "/index.html"], buildFormat: "directory", checkOrigin: true, allowedDomains: [], serverIslandNameMap: [], key: "kWv/5yhX2VFlqnZHoZB0AnDS/7YIbE7l+JIxHfdB+sQ=", sessionConfig: { driver: "cloudflare-kv-binding", options: { binding: "SESSION" } } });
manifest.sessionConfig && (manifest.sessionConfig.driverModule = () => Promise.resolve().then(() => (init_cloudflare_kv_binding_DMly_2Gl(), cloudflare_kv_binding_DMly_2Gl_exports)));

// dist/_worker.js/index.js
globalThis.process ??= {}, globalThis.process.env ??= {};
var serverIslandMap = /* @__PURE__ */ new Map();
var _page0 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_astro(), index_astro_exports)), "_page0");
var _page1 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_astro(), astro_exports)), "_page1");
var _page22 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_about_astro(), about_astro_exports)), "_page2");
var _page3 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_contact_astro(), contact_astro_exports)), "_page3");
var _page4 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_plan_a_visit_astro(), plan_a_visit_astro_exports)), "_page4");
var _page5 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_prayer_astro(), prayer_astro_exports)), "_page5");
var _page6 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_team_astro(), team_astro_exports)), "_page6");
var _page7 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_worship_with_us_astro(), worship_with_us_astro_exports)), "_page7");
var _page8 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_connect_astro(), connect_astro_exports)), "_page8");
var _page9 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_astro(), id_astro_exports)), "_page9");
var _page10 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_events_astro(), events_astro_exports)), "_page10");
var _page11 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_give_astro(), give_astro_exports)), "_page11");
var _page12 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_join_astro(), join_astro_exports)), "_page12");
var _page13 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_live_astro(), live_astro_exports)), "_page13");
var _page14 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_videos_astro(), videos_astro_exports)), "_page14");
var _page15 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_media_astro(), media_astro_exports)), "_page15");
var _page16 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_astro2(), id_astro_exports2)), "_page16");
var _page17 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_ministries_astro(), ministries_astro_exports)), "_page17");
var _page18 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_privacy_astro(), privacy_astro_exports)), "_page18");
var _page19 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_bulletins_astro(), bulletins_astro_exports)), "_page19");
var _page20 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_forms_astro(), forms_astro_exports)), "_page20");
var _page21 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_resources_astro(), resources_astro_exports)), "_page21");
var _page222 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_id_astro3(), id_astro_exports3)), "_page22");
var _page23 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_robots_txt_astro(), robots_txt_astro_exports)), "_page23");
var _page24 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_search_astro(), search_astro_exports)), "_page24");
var _page25 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_serve_astro(), serve_astro_exports)), "_page25");
var _page26 = /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_index_astro2(), index_astro_exports2)), "_page26");
var pageMap = /* @__PURE__ */ new Map([["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0], ["src/pages/404.astro", _page1], ["src/pages/connect/about/index.astro", _page22], ["src/pages/connect/contact/index.astro", _page3], ["src/pages/connect/plan-a-visit/index.astro", _page4], ["src/pages/connect/prayer/index.astro", _page5], ["src/pages/connect/team/index.astro", _page6], ["src/pages/connect/worship-with-us/index.astro", _page7], ["src/pages/connect/index.astro", _page8], ["src/pages/events/[id].astro", _page9], ["src/pages/events/index.astro", _page10], ["src/pages/give/index.astro", _page11], ["src/pages/join/index.astro", _page12], ["src/pages/media/live/index.astro", _page13], ["src/pages/media/videos/index.astro", _page14], ["src/pages/media/index.astro", _page15], ["src/pages/ministries/[id].astro", _page16], ["src/pages/ministries/index.astro", _page17], ["src/pages/privacy/index.astro", _page18], ["src/pages/resources/bulletins/index.astro", _page19], ["src/pages/resources/forms/index.astro", _page20], ["src/pages/resources/index.astro", _page21], ["src/pages/resources/[...id].astro", _page222], ["src/pages/robots.txt.ts", _page23], ["src/pages/search/index.astro", _page24], ["src/pages/serve/index.astro", _page25], ["src/pages/index.astro", _page26]]);
var _manifest = Object.assign(manifest, { pageMap, serverIslandMap, renderers, actions: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_noop_entrypoint(), noop_entrypoint_exports)), "actions"), middleware: /* @__PURE__ */ __name(() => Promise.resolve().then(() => (init_astro_internal_middleware(), astro_internal_middleware_exports)), "middleware") });
var _args = void 0;
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
var _start = "start";
Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start) && serverEntrypointModule[_start](_manifest, _args);

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e2) {
      console.error("Failed to drain the unused request body.", e2);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e2) {
  return {
    name: e2?.name,
    message: e2?.message ?? String(e2),
    stack: e2?.stack,
    cause: e2?.cause === void 0 ? void 0 : reduceError(e2.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e2) {
    const error4 = reduceError(e2);
    return Response.json(error4, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-ts1qpm/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = __astrojsSsrVirtualEntry;

// node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-ts1qpm/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default,
  pageMap
};
/*! Bundled license information:

sharp/lib/is.js:
sharp/lib/libvips.js:
sharp/lib/sharp.js:
sharp/lib/constructor.js:
sharp/lib/input.js:
sharp/lib/resize.js:
sharp/lib/composite.js:
sharp/lib/operation.js:
sharp/lib/colour.js:
sharp/lib/channel.js:
sharp/lib/output.js:
sharp/lib/utility.js:
sharp/lib/index.js:
  (*!
    Copyright 2013 Lovell Fuller and others.
    SPDX-License-Identifier: Apache-2.0
  *)
*/
//# sourceMappingURL=index.js.map
