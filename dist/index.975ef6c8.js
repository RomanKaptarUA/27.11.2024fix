// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9mu7C":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8lqZg":[function(require,module,exports,__globalThis) {
// import Handlebars from 'handlebars';
// const { helpers } = require("handlebars");
// const { bodyParser } = require("json-server");
// const users = [
//    { name: "Олексій", age: 30, city: "Чернівці" },
//    { name: "Юра", age: 14, city: "Валя-Кузьмина" },
//    { name: "Юля", age: 15, city: "Львів" },
// ];
// const templateSource = `
// <ul>
//   {{#each this}}
//   <li>{{name}}, {{age}} років, {{city}}</li>
//   {{/each}}
// </ul>
// `;
// const template = Handlebars.compile(templateSource);
// document.getElementById("app").innerHTML = template(users);
// const filteredData = (query) => {
//     const filteredUsers = users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
//     document.getElementById("app").innerHTML = template(filteredUsers);
// };
// document.getElementById('search').addEventListener('input', (e) => {
//     filteredData(e.target.value)
// })
// 1
// function setAlert() {
//     const startButton = document.getElementById('btn');
//     let count = 0;
//     const intervalId = setInterval(() => {
//         count++;
//         alert(`Повідомлення ${count}`);
//         if (count === 5) {
//             clearInterval(intervalId);
//             alert('Таймер зупинено');
//         }
//     }, 1000);
// }
// document.getElementById('btn').addEventListener('click', () => (setAlert()));
// 2
// const box = document.getElementById('box');
// const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
// let colorIndex = 0;
// function changeColor() {
//     box.style.backgroundColor = colors[colorIndex];
// colorIndex = (caolorIndex + 1) % colors.length;
// }
// setInterval(changeColor, 2000);
// 3
// function startGame() {
//     const gameArea = document.getElementById('gameArea');
//     const scoreDisplay = document.getElementById('score');
//     let score = 0;
//     const gameDuration = 10000;
//     let gameInterval;
//     function createTarget() {
//         const target = document.createElement('div');
//         target.className = 'target';
//         const maxX = gameArea.clientWidth - 50;
//         const maxY = gameArea.clientHeight - 50;
//         target.style.left = `${Math.random() * maxX}px`;
//         target.style.top = `${Math.random() * maxY}px`;
//         target.addEventListener('click', () => {
//             score++;
//             scoreDisplay.textContent = `Очки: ${score}`;
//             target.remove();
//         });
//         gameArea.appendChild(target);
//         setTimeout(() => target.remove(), 2000);
//     }
//     gameInterval = setInterval(createTarget, 1000);
//     setTimeout(() => {
//         clearInterval(gameInterval);
//         gameArea.innerHTML = "";
//         scoreDisplay.textContent = `Гру завершено! Ваші очки: ${score}`;
//     }, gameDuration);
// }
// startGame();
// 4
// document.addEventListener("DOMContentLoaded", () => {
//     const timeInput = document.getElementById("timeInput");
//     const output = document.getElementById("output");
//     let timerId;
//     timeInput.addEventListener("input", () => {
//         const time = parseInt(timeInput.value);
//         clearTimeout(timerId);
//         if(isNaN(time) || time <= 0){
//             output.textContent = 'Введіть коректні дані';
//             return
//         }
//         output.textContent = `Таймер запущено! Очікуйте ${time} секунд...`;
//         timerId = setTimeout(() => {
//             output.textContent = 'Час вийшов! Ось ваші дані!'
//         }, time*1000)
//     })
// })
// import { saveFormData } from './formData.js';
// const feedbackForm = document.getElementById('feedbackForm');
// feedbackForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;
//     saveFormData({ name, email, message });
//     document.getElementById('successMessage').classList.remove('hidden');
//     feedbackForm.reset();
// });
// let seconds = 0;
// let timer = setInterval(function() {
//     seconds++;
//     console.log(seconds);
// }, 1000);
// let seconds = 15;
// let timer = setTimeout(function() {
//     console.log('Finish')
// }, seconds * 1000);
// Таймер
// const display = document.getElementById("stopwatch-display");
// const startBtn = document.getElementById("start-stopwatch");
// const pauseBtn = document.getElementById("pause-stopwatch");
// const resetBtn = document.getElementById("reset-stopwatch");
// let startTime = 0;
// let elapsedTime = 0;
// let timerInterval;
// let lastUpdate = 0;
// function formatTime(ms) {
//   const hours = Math.floor(ms / (1000 * 60 * 60));
//   const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((ms % (1000 * 60 * 60)) / 1000);
//   const milliseconds = Math.floor(ms % 1000);
//   return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
//     2,
//     "0"
//   )}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(
//     3,
//     "0"
//   )}`;
// }
// function updateDisplay() {
//   const currentTime = performance.now();
//   elapsedTime = currentTime - lastUpdate + elapsedTime;
//   lastUpdate = currentTime;
//   display.textContent = formatTime(Math.round(elapsedTime));
// }
// startBtn.addEventListener("click", () => {
//   startBtn.classList.add("hidden");
//   pauseBtn.classList.remove("hidden");
//   resetBtn.classList.remove("hidden");
//   lastUpdate = performance.now();
//   timerInterval = setInterval(updateDisplay, 10);
// });
// pauseBtn.addEventListener("click", () => {
//   pauseBtn.classList.add("hidden");
//   startBtn.classList.remove("hidden");
//   clearInterval(timerInterval);
// });
// resetBtn.addEventListener("click", () => {
//   clearInterval(timerInterval);
//   elapsedTime = 0;
//   display.textContent = "00:00:00.000";
//   startBtn.classList.remove("hidden");
//   pauseBtn.classList.add("hidden");
//   resetBtn.classList.add("hidden");
// });
// Таймер 1
// let timer = 10000;
// const timerEl = document.getElementById('timer');
// const timerInterval = setInterval(() => {
//   timer -= 1000;
//   timerEl.textContent = (timer / 1000).toFixed(0);
//   if(timer <= 5000) {
//     document.body.style.backgroundColor = 'yellow';
//   }
//   if(timer <=0) {
//     clearInterval(timerInterval)
//     timerEl.textContent = '0';
//   }
// }, 1000);
//  document.addEventListener('DOMContentLoaded', loadTasks);
//  function loadTasks() {
//      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//      const taskList = document.getElementById('task-list');
//      taskList.innerHTML = ''; // очищаємо список перед додаванням нових задач
//      tasks.forEach((task, index) => {
//          const li = document.createElement('li');
//          li.classList.toggle('completed', task.completed);
//          li.innerHTML = `
//              <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
//              ${task.text}
//              <button onclick="removeTask(${index})">Видалити</button>
//          `;
//          taskList.appendChild(li);
//      });
//  }
//  function addTask() {
//      const input = document.getElementById('task-input');
//      const taskText = input.value.trim();
//      if (taskText === '') {
//          return; // Якщо введено порожній текст, не додаємо задачу
//      }
//      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//      tasks.push({ text: taskText, completed: false });
//      localStorage.setItem('tasks', JSON.stringify(tasks));
//      input.value = ''; // очищуємо поле вводу
//      loadTasks(); // перезавантажуємо список задач
//  }
//  function toggleTask(index) {
//      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//      tasks[index].completed = !tasks[index].completed;
//      localStorage.setItem('tasks', JSON.stringify(tasks));
//      loadTasks(); // перезавантажуємо список задач
//  }
//  function removeTask(index) {
//      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//      tasks.splice(index, 1); // видаляємо задачу з масиву
//      localStorage.setItem('tasks', JSON.stringify(tasks));
//      loadTasks(); // перезавантажуємо список задач
//  }
// 1
// const taskForm = document.getElementById('taskForm');
// const taskInput = document.getElementById('taskInput');
// const taskList = document.getElementById('taskList');
// let tasks = JSON.parse(localStorage.getItem('tasks'));
// function renderTasks() {
//     taskList.innerHTML = '';
//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.classList.toggle('completed', task.completed);
//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.checked = task.completed;
//         checkbox.classList.add('checkbox');
//         checkbox.onclick = () => toggleTaskCompletion(index);
//         const taskText = document.createElement('span');
//         taskText.textContent = task.text;
//         li.appendChild(checkbox);
//         li.appendChild(taskText);
//         taskList.appendChild(li);
//     });
// }
// taskForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const newTask = {
//         text: taskInput.value,
//         completed: false,
//     };
//     tasks.push(newTask);
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     taskInput.value = '';
//     renderTasks();
// });
// function toggleTaskCompletion(index) {
//     tasks[index].completed = !tasks[index].completed;
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     renderTasks();
// }
// renderTasks();
// //////////////2
// function createTestUser() {
//     const user = {
//         username: 'testuser',
//         password: 'password123'
//     };
//     localStorage.setItem('user', JSON.stringify(user));
// }
// window.onload = function() {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//         alert('Вітаємо, ' + storedUser.username);
//         document.getElementById('login-form').style.display = 'none';
//     }
// };
// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser && storedUser.username === username && storedUser.password === password) {
//         alert('Вхід успішний!');
//         document.getElementById('login-form').style.display = 'none'; 
//         document.getElementById('error-message').style.display = 'none'; 
//     } else {
//         document.getElementById('error-message').style.display = 'block';
//     }
// });
// // 3
// function addContact() {
//     const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
//     const bookmarkList = document.getElementById('bookmark-list');
//     bookmarkList.innerHTML = '';
//     bookmarks.forEach((bookmark, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <a href="${bookmark.url}" target="_blank">${bookmark.title}</a>`;
//         bookmarkList.appendChild(li);
//     });
// }
// document.getElementById('bookmark-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const url = document.getElementById('url').value;
//     const title = document.getElementById('title').value;
//     const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//     bookmarks.push({ url, title });
//     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
//     addContact();
//     document.getElementById('url').value = '';
//     document.getElementById('title').value = '';
// });
// 4
// document.addEventListener('DOMContentLoaded', function () {
//     const contactForm = document.getElementById('contactForm');
//     const firstNameInput = document.getElementById('firstName');
//     const lastNameInput = document.getElementById('lastName');
//     const phoneInput = document.getElementById('phone');
//     const emailInput = document.getElementById('email');
//     const contactsList = document.getElementById('contactsList');
//     let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
//     function renderContacts() {
//         contactsList.innerHTML = '';
//         contacts.forEach((contact, index) => {
//             const li = document.createElement('li');
//             li.textContent = `${contact.firstName} ${contact.lastName} — ${contact.phone} — ${contact.email}`;
//             const editBtn = document.createElement('button');
//             editBtn.textContent = 'Редагувати';
//             editBtn.onclick = () => editContact(index);
//             const deleteBtn = document.createElement('button');
//             deleteBtn.textContent = 'Видалити';
//             deleteBtn.onclick = () => deleteContact(index);
//             li.appendChild(editBtn);
//             li.appendChild(deleteBtn);
//             contactsList.appendChild(li);
//         });
//     }
//     contactForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const newContact = {
//             firstName: firstNameInput.value,
//             lastName: lastNameInput.value,
//             phone: phoneInput.value,
//             email: emailInput.value,
//         };
//         contacts.push(newContact);
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//         contactForm.reset();
//         renderContacts();
//     });
//     function editContact(index) {
//         const contact = contacts[index];
//         firstNameInput.value = contact.firstName;
//         lastNameInput.value = contact.lastName;
//         phoneInput.value = contact.phone;
//         emailInput.value = contact.email;
//         contactForm.onsubmit = function(event) {
//             event.preventDefault();
//             contacts[index] = {
//                 firstName: firstNameInput.value,
//                 lastName: lastNameInput.value,
//                 phone: phoneInput.value,
//                 email: emailInput.value,
//             };
//             localStorage.setItem('contacts', JSON.stringify(contacts));
//             contactForm.reset();
//             renderContacts();
//             contactForm.onsubmit = function(event) {
//                 event.preventDefault();
//                 const newContact = {
//                     firstName: firstNameInput.value,
//                     lastName: lastNameInput.value,
//                     phone: phoneInput.value,
//                     email: emailInput.value,
//                 };
//                 contacts.push(newContact);
//                 localStorage.setItem('contacts', JSON.stringify(contacts));
//                 contactForm.reset();
//                 renderContacts();
//             };
//         };
//     }
//     function deleteContact(index) {
//         if (confirm('Ви впевнені, що хочете видалити цей контакт?')) {
//             contacts.splice(index, 1);
//             localStorage.setItem('contacts', JSON.stringify(contacts));
//             renderContacts();
//         }
//     }
//     renderContacts();
// });
// const date = new Date();
//  console.log(date); // Wed Jan 15 2025 20:13:53 GMT+0200 (за східноєвропейським стандартним часом)
// let ms = Date.parse('2025-01-14T13:52:20.423');
// alert(ms);
// const date1 = new Date('January 16, 2025');
// console.log(date1);
// const date2 = new Date(2021, 9, 10, 12, 15, 50, 4);
// console.log(date2);
// const date = new Date(1750000000000);
// console.log(date);
// const date = Date.now();
// console.log(date) //1736966082052 скільки міліседунд пройшло після 1 січня 1970
// const date = new Date();
// console.log('Date: ' + date);
// console.log("Date: " + date.getDate()); // Date: 15
// console.log("Date: " + date.getDay()); // Date: 3 починаючи з неділі
// console.log("Date: " + date.getMonth()); // Date: 0
// GET
// const date = new Date();
// console.log(`Час в мілісекундах віж 1 січня 1970 року: ${date.getTime()}`);
// let result = 'Date: ';
// result += date.getFullYear() + '/';
// result += date.getMonth() + '/';
// result += date.getDate() + '.';
// result += 'Time: ' + date.getHours() + ':'
// result += date.getMinutes() + ':';
// result += date.getSeconds() + '.';
// result += date.getMilliseconds() + '.';
// console.log(result);
// SET
// const date = new Date(2025, 0, 15, 21, 0, 0, 0);
// console.log(date.getTime()); // 1736967600000
// const secondsDate = new Date();
// secondsDate.setFullYear(2026, 2, 7);
// console.log(secondsDate);
// let date = new Date();
// const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
// }
// const locateUk = date.toLocaleDateString('Uk-uk', options);
// console.log(locateUk); // середу, 15 січ. 2025 р., 21:14
// const locateUs = date.toLocaleString('en-US', options);
// console.log(locateUs); // Wednesday, Jan 15, 2025, 09:14 PM
// let start = new Date();
// for (let i = 0; i < 100000; i++){
//     let doSmth = i * i * i;
// }
// let end = Date.now();
// alert(`${end - start}`)
// Date.now() === new Date().getTime;
// const date = new Date();
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());
// let today = new Date();
// let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() +1);
// const ms = tomorrow - today;
// console.log(parseFloat(ms / 1000));
// const getAge = (birthDate) => {
//     let today = new Date();
//     let year = today.getFullYear();
// }
///////////////////////////////////////
//1
// let totalTime = 60 * 60;
// let timerInterval;
// const timerDisplay = document.getElementById('timerDisplay');
// const messageDisplay = document.getElementById('message');
// const startButton = document.getElementById('startButton');
// function updateTime() {
//     const hours = Math.floor(totalTime / 3600);
//     const minutes = Math.floor((totalTime % 3600) / 60);
//     const seconds = totalTime % 60;
//     timerDisplay.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     if (totalTime <= 30 * 60 && totalTime > 29 * 60) {
//         messageDisplay.textContent = 'Залишилось менше половини часу!';
//     }
// }
// function startTimer() {
//     timerInterval = setInterval(() => {
//         totalTime--;
//         updateTime();
//         if (totalTime <= 0) {
//             clearInterval(timerInterval);
//             messageDisplay.textContent = 'Таймер завершено!';
//         }
//     }, 1000);
// }
// startButton.addEventListener('click', () => {
//     startButton.disabled = true;
//     startTimer();
// });
/////////////////////////////////////
//2
// let totalTime = 30;
// let timerInterval;
// let countdownInterval;
// const timerDisplay = document.getElementById('timerDisplay');
// const startButton = document.getElementById('startButton');
// function updateTime() {
//     const minutes = Math.floor(totalTime / 60);
//     const seconds = totalTime % 60;
//   timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     if (totalTime <= 10 && totalTime > 0) {
//         timerDisplay.classList.add('blinking');
//     } else {
//         timerDisplay.classList.remove('blinking');
//     }
// }
// function startTimer() {
//     startButton.disabled = true;
//     totalTime = 30;
//     updateTime(); 
//     countdownInterval = setInterval(() => {
//         totalTime--; 
//         updateTime(); 
//         if (totalTime <= 0) {
//             clearInterval(countdownInterval);
//             startButton.disabled = false;
//             startButton.textContent = 'Почати знову'; 
//         }
//     }, 1000);
// }
// startButton.addEventListener('click', () => {
//     startButton.textContent = 'Запускається...';
//     startTimer();
// });
///////////////////////////////////////////////////////////////
// Напишіть функцію, яка перевіряє,
// чи є задана дата майбутньою порівняно з поточною датою.
// function checkDate(date){
//     let today = Date.now();
//     let givenDate = new Date(date);
//     return today < givenDate;
// }
// console.log(checkDate('2025-06-01'));
////////////////////////////////////////////////////////////
//Напишіть функцію, яка обчислює скільки
//днів залишилося до наступного
//Дня народження на основі заданої дати народження.
// let = prompt('Your birthday date!');
// function birthday(birthDate) {
//     let curDate = Date.now();
//     let birthTime = new Date(`2025-${birthDate}`);
//     const days = Math.floor((birthTime - curDate) / (1000 * 60 * 60 * 24  ));
//     return days;
// }
// console.log(birthday(birthDate));
/////////////////////////////////////////////////////////////////
// function getDayOfMonth(year, month){
//     const nextMonth = new Date(year, month + 1, 0);
//     return nextMonth.getDate();
// }
// console.log(getDayOfMonth(2012, 1))
///////////////////////////////////////////////////////////
// Напишіть функцію, яка обчислює
// кількість робочих днів між двома заданими датами (не включаючи вихідні).
// function countBusinessDays(startDate, endDate) {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     if(start > end) {
//         return 0;
//     }
//     let businessDaysCount = 0;
//     for (let currentDay = new Date(start); currentDay <= end; currentDay.setDate(currentDay.getDate() + 1)) {
//         const dayOfWeek = currentDay.getDay();
//         if (dayOfWeek !== 0 && dayOfWeek !== 6) {
//             businessDaysCount++;
//         }
//     }
//     return businessDaysCount;
//        }
// const startDate = '2025-01-15';
// const endDate = '2025-01-24'
// console.log(countBusinessDays(startDate, endDate));
//Форма реєстрації
// const savedUser = JSON.parse(localStorage.getItem('user'));
// const form = document.getElementById('registrationForm');
// const welcomeDiv = document.getElementById('welcome');
// if (savedUser) {
//     welcomeDiv.textContent = `Ласкаво просимо, ${savedUser.name}!`;
//     form.style.display = 'none';
// }
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const user = { name, email, password };
//     localStorage.setItem('user', JSON.stringify(user));
//     welcomeDiv.textContent = `Ласкаво просимо, ${savedUser.name}!`;
//     form.style.display = 'none';
// })
////////////////////////////////////////////////////////////////
// ПРОМІСИ
// Юра Глуханюк
// const isActive = true;
// const one = new Promise((resolve, reject) => {
// setTimeout(() => {
//     if(isActive) {
//         resolve('Person is active')
//     } else {
//         reject('Person isn*t active')
//     }
// }, 2000)
// });
// console.log('Before one.then()');
// one.then(
//     Resolve one.then()')
//         console.log(valvalue => {
//         console.log('onue);
//     },
//     error => {
//         console.log('onReject one.then()')
//         console.log(error);
//     }
// )
// console.log('After one.then()');
// one
// .then(value => {
//     console.log(value);
// })
// .catch(error => {
//     console.log(error);
// })
// // використовуємо .finally() після завершення дії//
// .finally(() => console.log('Promise settled'));
// ///////////////////////////////////
// function updateCountdownTimer(selector, targetDate) {
//     const timerElement = document.querySelector(selector);
//     const now = new Date();
//     const time = targetDate - now;
//     if (time <= 0) {
//       clearInterval(timerInterval);
//       return;
//     }
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     displayTime(timerElement, days, hours, mins, secs);
//   }
//   function displayTime(timerElement, days, hours, mins, secs) {
//     const dayElement = timerElement.querySelector('[data-value="days"]');
//     const hourElement = timerElement.querySelector('[data-value="hours"]');
//     const minElement = timerElement.querySelector('[data-value="mins"]');
//     const secElement = timerElement.querySelector('[data-value="secs"]');
//     dayElement.textContent = days;
//     hourElement.textContent = hours.toString().padStart(2, '0');
//     minElement.textContent = mins.toString().padStart(2, '0');
//     secElement.textContent = secs.toString().padStart(2, '0');
//   }
//   const targetDate = new Date('June 1, 2025');
//   const timerInterval = setInterval(() => {
//     updateCountdownTimer('#timer-1', targetDate);
//   }, 1000);
//   updateCountdownTimer('#timer-1', targetDate);
// const fetchUser = (userName, onSuccess, onError) => {
//   setTimeout(() => {
//     const isSuccess = true;
//     if (isSuccess) {
//       onSuccess('success value')
//     } else {
//       onError('error');
//     }
//   }, 1500);
// }
// const onFetchSuccess = user => {
//   console.log(user);
// } 
// const onFetchError = error => {
//   console.log(error);
// };
// fetchUser("Bob", onFetchSuccess, onFetchError);
// const fetchUser = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching ${username}`);
//     setTimeout(() => {
//       const isSuccess = true;
//       if (isSuccess) {
//         resolve('Success value')
//       } else {
//         reject('error')
//       }
//     }, 1500)
//   })
// }
// fetchUser("Bob")
// .then(user => console.log(user))
// .catch(user => console.error(error));
// function  addNumbers(a, b){
//   return new Promise((resolve, reject) => {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         reject('Невірні дані!')
//     } else {
//         resolve(a + b)
//     }
//   })
// }
// addNumbers(25, 66)
// .then(result => console.log(`Result: ${result}`))
// .catch(result => console.error(`Result: ${error}`))
///////////////////////////////////////////////////////
// function checkEven(numbers) {
// return new Promise((resolve, reject) => {
//   if(!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')){
//     reject('невірні дані!')
//   } else if(numbers.some(num => num % 2 !== 0)){
//     reject('непарні числа!')
//   } else {
//      resolve('Все вірно!')
//   }
// }) 
// }
// const numbers = [2, 4, 6, 8, 10];
// checkEven(numbers)
// .then(message => console.log('Успіх: ', message))
// .then(error => console.error(error)); //Слава УкраЇні!
////////////////////////////////////////////////////////////////////
//1
// Напиши функцію delay(ms),
//  яка повертає проміс,
//  що переходить в стан "resolved"
//  через ms мілісекунд. Значенням промісу,
//  яке виповнилося має бути та кількість мілісекунд,
//  яку передали під час виклику функції delay.
// const delay = ms => {
//   return new Promise(resolve => setTimeout(() => resolve(ms), ms));
// };
// const logger = time => console.log(`Resolved after ${time} ms`);
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms
// ///////////////////////////////////////////////////////////////////////////
// //2
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// const makeTransaction = transaction => {
//   const delay = randomIntegerFromInterval(200, 500);
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const canProcess = Math.random() > 0.3;
//         if (canProcess) {
//           resolve ({ id: transaction.id, time: delay });
//         } else {
//       reject (transaction.id);
//         }
//       }, delay);
//    })
//   }
// const logSuccess = ({ id, time }) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };
// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);
// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);
// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);
// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);
////////////////////////////////////////////////
//   const makePromise = (text, delay) => {
//     return new Promise(resolve => {
//       setTimeout(()=> resolve(text), delay)
//     })
//   }
// const promiseOne = makePromise('promise one', 1500);
// const promiseTwo = makePromise('promise two', 1000);
// Promise.all([promiseOne, promiseTwo])
// .then((value) => {
//       console.log(value);
// })
// .catch((error) => {
//   console.log(error);
// })
// // race
// Promise.race([promiseOne, promiseTwo])
// .then((value) => {
//       console.log(value);
// })
// .catch((error) => {
//   console.log(error);
// })
// any
// Promise.any([
//      new Promise((resolve, reject) =>
//      setTimeout(() => reject(new Error('Oops!')), 1000)
//  ),
//   new Promise((resolve, reject) =>
//   setTimeout(() => reject(new Error('Error!')), 1000)
//  ),
// ]).catch(error => {
//     console.log(error); // AggregateError: All promises were rejected
//     console.log(error.errors[0]); //Error: Oops!
//     console.log(error.errors[1]); //Error: Error!
// })
//////////////////////////////////////////////
// Promise.any([
//   new Promise((resolve, reject) =>
//   setTimeout(() => reject(new Error('Oops!')), 1000)
// ),
// new Promise((resolve, reject) => setTimeout(() => resolve('Успіх!'), 1500)),
// new Promise((resolve, reject) =>
// setTimeout(() => reject(new Error('Error!')), 1000)
// ),
// ]).then(value => console.log(value))
// .catch(error => console.log(error));
////////////////////////////////////////////////////////////
//resolved
//1
// new Promise(resolve => resolve('success')).then(value => console.log(value));
// //2
// Promise.resolve('success').then(value => console.log(value));
//////////////////////////////////////////////////////////////
//rejected
//1
// new Promise((resolve, reject) => reject('error')).catch(error => console.log(error));
//2
// Promise.reject('error').catch(error => console.log(error));
//////////////////////////////////////////////////////////////////////
//1
// const makePromise = guestName => {
// if(guestName === '' || guestName === undefined){
//     return{
//       success: false,
//       message: 'Error guest name'
//     }
//   }
//   return{
//     success: true,
// message: `Welcome ${guestName}`,
//   };
// }
// const result = makePromise('Bob')
// if ( result.success){
//   console.log(result.message)
// } else {
//    console.error(result.message)
// }
///////////////////////////////////////////////////////////////////////
//2
// const makePromise = (guestName, onSuccess, onError) => {
//   if(guestName === '' || guestName === undefined){
//     return onError('Error guest name');
//   }
//   onSuccess(`Welcome ${guestName}`)
// }
// makePromise('Bob',
//   success => console.log(success),
//   error => console.log(error)
//  )
//////////////////////////////////////////////////////////////////////////
//3
//  const makePromise = guestName => {
//       if (guestName === '' || guestName === undefined) {
//         return Promise.reject('Error guest name');
//       }
//       return Promise.resolve(`Welcome ${guestName}`);
//  }
//  makePromise('Bob')
//  .then((success) => console.log(success))
//  .catch((error) => console.error(error))
///////////////////////////////////////////////////////////////////////
//trycatch -- забіги
// const horses = [
//   'Хейлі',
//   'Сем',
//   'Аліса',
//   'Георгій',
//   'Луїза'
// ];
// let raceCounter = 0;
// const refs = {
//   startBtn: document.querySelector('.js-start-race'),
//   winnerField: document.querySelector('.js-winner'),
//   progressField: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody')
// }
// refs.startBtn.addEventListener('click', onStart);
// function onStart() {
//   raceCounter += 1;
//   const promises = horses.map(run);
//   updateWinnerField('');
//   updateProgressField('Забіг вже розпочався, ставки не приймаються');
//   determineWinner(promises);
//   waitForAll(promises) 
// }
// function determineWinner(horsesP) {
//  Promise.race(horsesP).then(({horse, time}) => {
//   updateWinnerField(` 🎉 Переможець ${horse}, фінішував за ${time}`)  
//   updateResultTable({ horse, time, raceCounter });
//  })
// }
// function waitForAll(horseP) {
//      Promise.all(promises).then(() => {
//     updateProgressField('Забіг закінчено, ставки знову приймається!!')
//      })
// }
// function updateWinnerField(message) {
//   refs.winnerField.textContent = message;
// }
// function updateProgressField(message) {
//   refs.progressField.textContent = message;
// }
// function updateResultTable({ horse, time, raceCounter }) {
//   const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`
//   refs.tableBody.insertAdjacentHTML('beforeend', tr)
// }
// function run(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(1500, 3000);
//     setTimeout(() => {
//       resolve({ horse, time })
//     }, time)
//   }); 
// };
// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
///////////////////////////////////////////////////
//AJAX
// const button = document.getElementById("getCatFact");
// const p = document.getElementById("catFact");
// button.addEventListener('click', () => {
//   fetch("https://catfact.ninja/fact")
//   .then(response => response.json())
//   .then(data => {
//     p.textContent = data.fact;
//   })
//   .catch(error => {
//     p.textContent = "Сталася помилка 😿";
//     console.log("Error: ", error)
//   })
// })
///////////////////////////////////////////////////
// щоб був ліміт після fetch == ?_limit=2
// сорт // після limit == &_sort=name
// const fetchUsersBtn = document.getElementById('btn');
// const userList = document.querySelector('.users-list');
// fetchUsersBtn.addEventListener('click', () => {
//       fetchUsers()
//         .then((users) => renderUsers(users))
//         .catch((error) => console.log(error))
// });
// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users?_limit=2&_sort=name")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     return response.json();
//   });
// }
// function renderUsers(users) {
//   const markup = users
//   .map((user) => {
//     return `<li>
//     <p><b>Name: </b>${user.name}</p>
//     <p><b>Email: </b>${user.email}</p>
//     <p><b>Company: </b>${user.company.name}</p>
//   </li>`;
//   })
//   .join('');
//   userList.insertAdjacentHTML('beforeend', markup);
// }
/////////////////
// або
// const searchParams = new URLSearchParams({
//   _limit: 3,
//   _sort: "name",
// })
// console.log(searchParams.toString());
// // або
// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url);
////////////////////////////////
// const headers = {
//   "Accept": "application/json",
//   "Content-Type": "application/json",
//   "X-Custom-Header": "custom value",
//   "Authorization": "YOUR_API_TOKEN"
// }
// fetch("https://api.example.com/data", {
//   method: "GET",
//   headers: headers,
// }).then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error("Error:", error));
//////////////////////////////////////////////
// покемони
// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('.js-search-form');
//   const cardContainer = document.querySelector('.js-card-container');
//   if (!form || !cardContainer){
//     console.error('Форма або контейнер не знайдені');
//     return;
//   }
//   form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const query = form.query.value.trim().toLowerCase();
//     if (!query) return;
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
//       if (response.ok) {
//         const data = await response.json();
//         render(data);
//       } else {
//         cardContainer.innerHTML = `<p class="error">Покемон не знайдений</p>`
//       }
//       form.reset();
//   });
//   function render(pokemon) {
//           cardContainer.innerHTML = `
//        <div class="card">
//         <h2>${pokemon.name}</h2>
//         <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//         <p><strong>Вага: </strong>${pokemon.weight}</p>
//         <p><strong>Зріст: </strong>${pokemon.height}</p>
//        </div>
//        `;
//   }
// })
/////////////////////////////////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", () => {
//   const input = document.getElementById("inputEl");
//   const form = document.getElementById("formEl");
//   const listBody = document.querySelector('.news-list');
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const topic = input.value;
//     if (!topic) {
//       alert("Field can not be empty");
//     } else {
//       listBody.innerHTML = '';
//       fetchNews(topic);
//       input.value = '';
//     }
//   });
//   function fetchNews(topic) {
//     const API_key = "abcce331db6348159c386666cbebddb7";
//     const data = fetch(
//       `https://newsapi.org/v2/everything?q=${topic}&apiKey=${API_key}&pageSize=10`
//     )
//       .then((response) => response.json())
//       .then((general) => {
//         if (general.status == 'ok') {
//           renderNews(general.articles);
//         } else {
//           console.error(general.status);
//           alert('We have some problems');
//         }
//       })
//       .catch((error) => {
//         console.error(error) 
//         alert('We can not find this topic. Try again');
//       });
//   }
//   function renderNews(articles) {
//     const markup = articles.map(article => {
//       return `<li class="news-item">
//             <div class="news-wrap">
//                 <p class="author">${article.author}</p>
//                 <h3 class="title">${article.title}</h3>
//                 <p class="description">${article.description}</p>
//             </div>
//             <img src="${article.urlToImage}" alt="${article.title} image" class="image">
//         </li>`;
//     });
//     listBody.insertAdjacentHTML('beforeend', markup.join(''));
//   }
// });
//////////////////////////////////////////////////////////////////////////////////////
// пагінація
// const refs = {
//   searchForm: document.querySelector(".js-search-form"),
//   articlesContainer: document.querySelector(".js-articles"),
//   loadMoreBtn: document.querySelector('[data-action="load-more"]')
// };
// refs.searchForm.addEventListener("submit", onSearch);
// //=> =>
// refs.loadMoreBtn.addEventListener("click", onLoadMore);
// function onSearch(e) {
// e.preventDefault();
// const searchQuery = e.currentTarget.elements.query.value;
// const options = {
//   headers: {
//     Authorization: "d47ea7990cea4d34a207f7630f77824c",
//   },
// };
// const url =`https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;
// fetch(url, options)
// .then(r => r.json())
// .then(console.log)
// }
// function onLoadMore() {
//   const searchQuery = e.currentTarget.elements.query.value;
// const options = {
//   headers: {
//     Authorization: "d47ea7990cea4d34a207f7630f77824c",
//   },
// };
// fetch(
//   `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`,
//  options
// )
// .then(r => r.json())
// .then(console.log)
// }
// const apiKey = '49340617-5f7223bcca914867675ecc2b9';
//     function loadImages() {
//    fetch(`https://pixabay.com/api/?key=${apiKey}&editors_choice=true&per_page=5&page=1`)
//         .then(response => response.json())
//         .then(data => {
//           const gallery = document.getElementById('image-gallery');
//           data.hits.forEach(hit => {
//             const imgElement = document.createElement('img');
//             imgElement.src = hit.previewURL;
//             imgElement.alt = hit.tags;
//             gallery.appendChild(imgElement);
//           });
//           currentPage++;
//         })
//         .catch(error => console.log('Error fetching images:', error));
//     }
//     document.getElementById('load-more-btn').addEventListener('click', loadImages);
//////////////////////////////////////
// CRUD
// GET
// fetch("https://jsonplaceholder.typicode.com/albums/100")
// .then(response => response.json())
// .then(data => console.log(data));
//POST
// const postAdd = {
//   author: "Anna",
//   body: "CRUD",
// }
// const options = {
//   method: "POST",
//   body: JSON.stringify(postAdd),
//   headers: {
//     "Content-Type": "application/json"
//   }
// }
// fetch("https://jsonplaceholder.typicode.com/posts", {
//       method:"POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         author: "Anna",
//         body: "CRUD",
//         title: "Title",
//         userID:100,
//       }),      
// })
// .then(r => r.json())
// .then(post => console.log(post))
// .catch(error => console.log(error))
//PUT
// const postAdd = {
//   author: "Anna",
//   body: "CRUD new",
//   id: 2,
// }
// const options = {
//   method: "PATCH",
//   body: JSON.stringify(postAdd),
//   headers: {
//     "Content-Type": "application/json"
//   }
// };
// fetch(`https://jsonplaceholder.typicode.com/posts/${postAdd.id}`, options)
// .then(r => r.json())
// .then(post => console.log(post))
// .catch(error => console.log(error));
//DELETE
// const deletePost = 200;
// fetch(`https://jsonplaceholder.typicode.com/posts/${deletePost}`, {
//   method: "DELETE",
// })
// .then(() => console.log('Post deleted'))
// .catch(error => console.log(error));
/////////////////////////////////////////////////////////////////////////////////////////
// const BASE_URL = "http://localhost:3000/students";
// //1
// fetch(BASE_URL)
// .then(r => r.json())
// .then(data => console.log("All students: ", data))
// .catch(error => console.error("Error fetching students:", error));
// //2
// fetch(`${BASE_URL}/1`)
// .then(r => r.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));
// const newSt = {
//   name: 'Miranda Vera',
//   age: 20,
//   email: 'miranda.vera@gmail.com',
//   phone: '555-3821',
// };
// const options = {
//   method: "POST",
//   body: JSON.stringify(newSt),
//   headers: {
//     "Content-Type": "application/json"
//   }
// };
// fetch(BASE_URL, options)
// .then(r => r.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))
/////////////////////////////////////////////////////
//async //await
//1
// const friends = () => {
//   return fetch("my-api.com/me")
//   .then(token => {
//     return fetch(`my-api.com/profile?token=${token}`);
//   })
//   .then(user => {
//     return fetch(`my-api.com/me/users/${user.id}/friends`);
//   });
// }
// friends()
// .then(friends => console.log(friends))
// .catch(error => console.log(error));
//2
// const friendsFetch = async () => {
//   const token = await fetch("my-api.com/me");
//   const user = await fetch(`my-api.com/profile?token=${token}`);
//   const friends = await fetch(`my-api.com/me/users/${user.id}/friends`);
//   return friends;
// }
// friendsFetch()
// .then(friends => console.log(friends))
// .catch(error => console.log(error));
/////////////////////////////////////////////////
//1
// const fetchUsers = async () => {
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     console.log(users)
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// fetchUsers()
// //2
// const fetchUsers = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     return users;
//   } 
//   const doUsers = async () => {
//     try {
//       const users = await fetchUsers();
//       console.log() 
//     } catch (error) {
//       console.log(error.message)
//     }
//   }
//   doUsers()
////////////////////
//1
// const fetchUsers = async () => {
//   const url = "https://jsonplaceholder.typicode.com";
//   const first = await fetch(`${url}/users/1`);
//   const second = await fetch(`${url}/users/2`);
//   const third = await fetch(`${url}/users/3`);
//   const firstUser = await first.json();
//   const secondUser = await second.json();
//   const thirdUser = await third.json();
//   console.log(firstUser, secondUser, thirdUser)
// }
// fetchUsers();
//2
// const fetchUsers = async () => {
//   const url = "https://jsonplaceholder.typicode.com";
//   const userIds = [1, 2, 3];
//   const array = userIds.map(async userId => {
//     const r = await fetch(`${url}/users/${userId}`);
//     return r.json()
//   }) 
//   const users = await Promise.all(array);
//   console.log(users);
// }
// fetchUsers();
// const BASE_URL = "http://localhost:3000/students";;
// //1 
// async function getAllStudents() {
//      try{
//       const r = await fetch(BASE_URL);
//       const data = await r.json(); 
//       console.log("All students: ", data)
//      }
//      catch (error){
//             console.error("Error fetching students: ", error);
//      }
// }
// //2
// async function getStudentsById() {
//   try{
//     const r = await fetch(`${BASE_URL}/${id}`);
//     const data = await r.json();
//     console.log(`Students with ID ${id}: `, data);
//   }
//   catch (error) {
//     console.error("Error fetching students: ", error);
//   }
// }
// //3
// async function addStudents(student) {
//   try{
//        const r = await fetch(BASE_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(student)
//        });
//        const data = await r.json();
//        console.log('New student: ', data);
//   } 
//   catch (error){
//      console.log("Error adding student: ", error);
//   }
// }
// //4
// async function updateStudent(id, updateDate) {
//   try {
//     const r = await fetch(`${BASE_URL}/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updateDate),
//     });
//     const data = await r.json();
//     console.log("Updated student: ", data);
//   } catch (error) {
//     console.log("Error updating st", error);
//   }
// }
// //5
// async function patchStudent(id, patchData) {
//   try {
//     const r = await fetch(`${BASE_URL}/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(patchData),
//     });
//     const data = await r.json();
//     console.log("Updated student: ", data);
//   } catch (error) {
//     console.log("Error updating st", error);
//   }
// }
// //6
// async function deleteStudent(id){
//   try{
//     await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
//     console.log('Deleted student: ', `${id}`)
//   }
//   catch (error) {
//       console.log('Помилка')
//   }
// }
// Функція для показу сповіщення, якщо країн більше 10
function showNotification() {
    PNotify.alert({
        text: "\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0443\u0442\u043E\u0447\u043D\u0456\u0442\u044C \u0437\u0430\u043F\u0438\u0442, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0431\u0456\u043B\u044C\u0448\u0435 10 \u043A\u0440\u0430\u0457\u043D.",
        type: 'info'
    });
}
// Функція для запиту на API
async function fetchCountries(query) {
    if (!query) return; // Якщо порожній запит — не робимо запит
    const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
    const countries = await response.json();
    // Перевірка, скільки країн знайдено
    if (countries.length > 10) showNotification();
    // Виведення результатів
    const countryList = document.getElementById('country-list');
    countryList.innerHTML = ''; // Очищаємо список перед новим відображенням
    countries.forEach((country)=>{
        const listItem = document.createElement('li');
        listItem.textContent = country.name.common;
        countryList.appendChild(listItem);
    });
}
// Дебаунсинг для затримки запитів
const debouncedFetch = _.debounce(fetchCountries, 500);
// Обробка вводу
document.getElementById('country-search').addEventListener('input', (e)=>{
    debouncedFetch(e.target.value);
});

},{}]},["9mu7C","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
