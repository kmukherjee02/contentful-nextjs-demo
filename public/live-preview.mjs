var ht = Object.defineProperty, Et = (e, t, n) => t in e ? ht(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, m = (e, t, n) => (Et(e, typeof t != "symbol" ? t + "" : t, n), n);
const ft = "2.12.5";
let Re = !1;
function Ne(e) {
  Re = e;
}
const X = (e) => (...t) => {
  Re && console[e](...t);
}, T = {
  error: X("error"),
  warn: X("warn"),
  log: X("log")
}, yt = /* @__PURE__ */ new Set([
  "Symbol",
  "Text",
  "Integer",
  "Number",
  "Boolean",
  "Date",
  "Location",
  "Object"
]);
function ue({
  dataFromPreviewApp: e,
  updateFromEntryEditor: t,
  name: n
}) {
  var s;
  e[n] = ((s = t.fields) == null ? void 0 : s[n]) ?? null;
}
function be(e) {
  var t;
  return !!(yt.has(e.type) || e.type === "Array" && ((t = e.items) == null ? void 0 : t.type) === "Symbol");
}
const j = 10, mt = "live-preview-editor", Tt = "live-preview-sdk";
function A(e, t, n) {
  const s = {
    ...t,
    method: e,
    from: "live-preview",
    source: Tt,
    location: window.location.href,
    version: ft
  };
  T.log("Send message", s), n.forEach((i) => {
    var r;
    (r = window.top) == null || r.postMessage(s, i);
  });
}
class vt {
  constructor(t, n) {
    m(this, "storageKey"), m(this, "value"), this.storageKey = t, this.value = this.restoreSessionData() || n;
  }
  getKey(t, n) {
    return `${t}-${n}`;
  }
  restoreSessionData() {
    try {
      const t = window.sessionStorage.getItem(this.storageKey), n = t ? JSON.parse(t) : null;
      return Array.isArray(n) ? new Map(n) : null;
    } catch {
      return null;
    }
  }
  get(t, n) {
    return this.value.get(this.getKey(t, n));
  }
  set(t, n, s) {
    this.value.set(this.getKey(t, n), s);
    try {
      window.sessionStorage.setItem(
        this.storageKey,
        JSON.stringify(Array.from(this.value.entries()))
      );
    } catch {
      T.warn(`StorageMap: Failed to set data for key "${t}" in sessionStorage`);
    }
  }
  clear() {
    this.value.clear();
    try {
      window.sessionStorage.removeItem(this.storageKey);
    } catch {
      T.warn("StorageMap: Failed to clear data from sessionStorage");
    }
  }
}
function Nt(e) {
  if (!e)
    return e;
  try {
    const t = new URL(e, "https://images.ctfassets.net");
    return t.protocol = "https:", t.href;
  } catch (t) {
    return T.error(`Recevied invalid asset url "${e}"`, t), e;
  }
}
function pe(e) {
  if (typeof structuredClone == "function")
    return structuredClone(e);
  try {
    return JSON.parse(JSON.stringify(e));
  } catch (t) {
    return T.warn("Failed to clone data, updates are done on the original one", e, t), e;
  }
}
function It() {
  var e;
  try {
    return ((e = window.top) == null ? void 0 : e.location.href) !== window.location.href;
  } catch {
    return !0;
  }
}
function _t() {
  return `${performance.now()}-${Math.random().toString(36).slice(2)}`;
}
function gt(e, t = 500) {
  let n = window.location.href;
  const s = setInterval(() => {
    const i = window.location.href;
    i !== n && (n = i, e(i));
  }, t);
  return () => clearInterval(s);
}
function we(e, t) {
  if (!t.length)
    return e;
  try {
    const [n, ...s] = t;
    return we(e[n], s);
  } catch {
    return;
  }
}
function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
class Ot {
  get entities() {
    return [
      ...this.entryMap.values(),
      ...this.assetMap.values()
    ];
  }
  updateEntity(t) {
    this.addEntity(t);
  }
  getValue(t, n) {
    t.sys.type;
    const s = this.getEntity(t.sys.linkType, t.sys.id);
    if (!s) {
      console.warn(`Unresolved entity reference: ${t}`);
      return;
    }
    return we(s, n);
  }
  getEntitiesFromMap(t, n) {
    const s = [], i = [];
    for (const r of n) {
      const a = this.getEntity(t, r);
      a ? s.push(a) : i.push(r);
    }
    return {
      resolved: s,
      missing: i
    };
  }
  addEntity(t) {
    this.isAsset(t) ? this.assetMap.set(t.sys.id, t) : this.entryMap.set(t.sys.id, t);
  }
  async fetchAsset(t) {
    const { resolved: n, missing: s } = this.getEntitiesFromMap("Asset", [
      t
    ]);
    if (s.length) {
      console.warn(`Asset "${t}" is not in the store`);
      return;
    }
    return n[0];
  }
  async fetchAssets(t) {
    const { resolved: n, missing: s } = this.getEntitiesFromMap("Asset", t);
    if (s.length)
      throw new Error(`Missing assets in the store (${s.join(",")})`);
    return n;
  }
  async fetchEntry(t) {
    const { resolved: n, missing: s } = this.getEntitiesFromMap("Entry", [
      t
    ]);
    if (s.length) {
      console.warn(`Entry "${t}" is not in the store`);
      return;
    }
    return n[0];
  }
  async fetchEntries(t) {
    const { resolved: n, missing: s } = this.getEntitiesFromMap("Entry", t);
    if (s.length)
      throw new Error(`Missing assets in the store (${s.join(",")})`);
    return n;
  }
  isAsset(t) {
    return t.sys.type === "Asset";
  }
  getEntity(t, n) {
    return t === "Asset" ? this.assetMap.get(n) : this.entryMap.get(n);
  }
  constructor({ entities: t, locale: n }) {
    W(this, "locale", void 0), W(this, "entryMap", /* @__PURE__ */ new Map()), W(this, "assetMap", /* @__PURE__ */ new Map()), this.locale = n;
    for (const s of t)
      this.addEntity(s);
  }
}
function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var Ie;
(function(e) {
  e.REQUEST_ENTITIES = "REQUEST_ENTITIES", e.REQUESTED_ENTITIES = "REQUESTED_ENTITIES";
})(Ie || (Ie = {}));
class At extends Ot {
  cleanupPromise(t) {
    setTimeout(() => {
      this.requestCache.delete(t);
    }, 300);
  }
  getCacheId(t) {
    return t.length === 1 ? t[0] : t.join(this.cacheIdSeperator);
  }
  async fetchEntity(t, n) {
    const { missing: s, resolved: i } = this.getEntitiesFromMap(t, n);
    if (s.length === 0)
      return i;
    const r = this.getCacheId(s), a = this.requestCache.get(r);
    if (a)
      return a;
    const o = new Promise((l, p) => {
      const d = this.subscribe("REQUESTED_ENTITIES", (E) => {
        s.every((y) => E.entities.find((f) => f.sys.id === y)) && (clearTimeout(u), l(E.entities), this.cleanupPromise(r), n.forEach((y) => this.cleanupPromise(y)), d());
      }), u = setTimeout(() => {
        p(new Error("Request for entities timed out")), d();
      }, this.timeoutDuration);
      this.sendMessage("REQUEST_ENTITIES", {
        entityIds: s,
        entityType: t,
        locale: this.locale
      });
    });
    return this.requestCache.set(r, o), n.forEach((l) => {
      this.requestCache.set(l, o);
    }), (await o).forEach((l) => {
      this.addEntity(l);
    }), this.getEntitiesFromMap(t, n).resolved;
  }
  async fetchAsset(t) {
    try {
      return (await this.fetchAssets([
        t
      ]))[0];
    } catch {
      console.warn(`Failed to request asset ${t}`);
      return;
    }
  }
  fetchAssets(t) {
    return this.fetchEntity("Asset", t);
  }
  async fetchEntry(t) {
    try {
      return (await this.fetchEntries([
        t
      ]))[0];
    } catch (n) {
      console.warn(`Failed to request entry ${t}`, n);
      return;
    }
  }
  fetchEntries(t) {
    return this.fetchEntity("Entry", t);
  }
  constructor({ entities: t, locale: n, sendMessage: s, subscribe: i, timeoutDuration: r = 3e3 }) {
    super({
      entities: t,
      locale: n
    }), k(this, "requestCache", /* @__PURE__ */ new Map()), k(this, "sendMessage", void 0), k(this, "subscribe", void 0), k(this, "timeoutDuration", void 0), k(this, "cacheIdSeperator", ","), this.sendMessage = s, this.subscribe = i, this.timeoutDuration = r;
  }
}
const ie = "Collection";
function Y(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function he(e) {
  return `${e}${ie}`;
}
function St(e) {
  if (e.endsWith(ie))
    return Y(e.replace(ie, ""));
}
const P = "Asset";
function U(e) {
  return !!(e && typeof e == "object" && "sys" in e && e.sys.id);
}
const Z = {};
function _e(e, t) {
  return Z[e] || (Z[e] = new At({
    entities: [],
    sendMessage: t,
    subscribe: (n, s) => {
      const i = (r) => {
        typeof r.data != "object" || !r.data || r.data.from === "live-preview" && r.data.method === n && s(r.data);
      };
      return window.addEventListener("message", i), () => window.removeEventListener("message", i);
    },
    locale: e
  })), Z[e];
}
async function Ee({
  entityReferenceMap: e,
  referenceId: t,
  isAsset: n,
  locale: s,
  sendMessage: i
}) {
  var r, a, o;
  const l = e.get(t);
  if (l)
    return {
      reference: l,
      typeName: "contentType" in l.sys && (o = (a = (r = l.sys) == null ? void 0 : r.contentType) == null ? void 0 : a.sys) != null && o.id ? Y(l.sys.contentType.sys.id) : P
    };
  if (n) {
    const d = await _e(s, i).fetchAsset(t);
    if (!d)
      throw new Error(`Unknown reference ${t}`);
    return {
      reference: d,
      typeName: P
    };
  }
  const p = await _e(s, i).fetchEntry(t);
  if (!p)
    throw new Error(`Unknown reference ${t}`);
  return {
    reference: p,
    typeName: Y(p.sys.contentType.sys.id)
  };
}
function Lt(e) {
  return typeof e.data != "object" || !e.data ? !1 : "from" in e.data && e.data.from === "live-preview" || "source" in e.data && e.data.source === mt;
}
var g = /* @__PURE__ */ ((e) => (e.FIELD_ID = "data-contentful-field-id", e.ENTRY_ID = "data-contentful-entry-id", e.LOCALE = "data-contentful-locale", e))(g || {}), D = /* @__PURE__ */ ((e) => (e.MOUSE_MOVE = "MOUSE_MOVE", e.SCROLL_START = "SCROLL_START", e.SCROLL_END = "SCROLL_END", e.RESIZE_START = "RESIZE_START", e.RESIZE_END = "RESIZE_END", e.TAGGED_ELEMENTS = "TAGGED_ELEMENTS", e.INSPECTOR_MODE_CHANGED = "INSPECTOR_MODE_CHANGED", e))(D || {});
function ee(e, t) {
  const n = e.getAttribute(g.FIELD_ID), s = e.getAttribute(g.ENTRY_ID), i = e.getAttribute(g.LOCALE) ?? t;
  return !n || !s || !i ? null : { fieldId: n, entryId: s, locale: i };
}
function se() {
  return [...document.querySelectorAll(`[${g.ENTRY_ID}]`)];
}
function Me() {
  return [
    ...new Set(
      se().map((e) => e.getAttribute(g.ENTRY_ID)).filter(Boolean)
    )
  ];
}
class Dt {
  constructor({ locale: t, targetOrigin: n }) {
    m(this, "defaultLocale"), m(this, "targetOrigin"), m(this, "isScrolling", !1), m(this, "scrollTimeout"), m(this, "isResizing", !1), m(this, "resizeTimeout"), m(this, "hoveredElement"), m(this, "taggedElements", []), this.defaultLocale = t, this.targetOrigin = n, this.addHoverListener = this.addHoverListener.bind(this), this.addScrollListener = this.addScrollListener.bind(this), this.addMutationListener = this.addMutationListener.bind(this), this.addResizeListener = this.addResizeListener.bind(this), this.handleTaggedElement = this.handleTaggedElement.bind(this), this.sendAllElements = this.sendAllElements.bind(this), this.addHoverListener(), this.addScrollListener(), this.addMutationListener(), this.addResizeListener();
  }
  // Handles incoming messages from Contentful
  receiveMessage(t) {
    if (t.method === D.INSPECTOR_MODE_CHANGED) {
      const { isInspectorActive: n } = t;
      n && this.sendAllElements();
    }
  }
  /** Checks if the hovered element is an tagged entry and then sends it to the editor */
  addHoverListener() {
    const t = (n) => {
      const s = n.composedPath();
      for (const i of s) {
        const r = i;
        if (r.nodeName === "BODY")
          break;
        if (typeof (r == null ? void 0 : r.getAttribute) == "function" && this.handleTaggedElement(r))
          return;
      }
      this.hoveredElement && (this.hoveredElement = void 0, A(
        D.MOUSE_MOVE,
        { element: null },
        this.targetOrigin
      ));
    };
    return window.addEventListener("mouseover", t), () => window.removeEventListener("mouseover", t);
  }
  /** Sends scroll start and end event to the editor, on end it also sends the tagged elements again */
  addScrollListener() {
    const t = () => {
      this.isScrolling || (this.isScrolling = !0, A(D.SCROLL_START, {}, this.targetOrigin)), this.scrollTimeout && clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout(() => {
        this.isScrolling = !1, A(D.SCROLL_END, {}, this.targetOrigin), this.sendAllElements(), this.hoveredElement && this.handleTaggedElement(this.hoveredElement);
      }, 150);
    };
    return window.addEventListener("scroll", t), () => window.removeEventListener("scroll", t);
  }
  /** Detects DOM changes and sends the tagged elements to the editor */
  addMutationListener() {
    const t = new MutationObserver(() => {
      var n;
      const s = se().filter(
        (i) => !!ee(i)
      );
      ((n = this.taggedElements) == null ? void 0 : n.length) !== s.length && this.sendAllElements();
    });
    return t.observe(document.body, {
      attributes: !0,
      attributeFilter: [
        g.ENTRY_ID,
        g.FIELD_ID,
        g.LOCALE
      ],
      childList: !0,
      subtree: !0
    }), () => t.disconnect();
  }
  /** Sends resize start and end event to the editor, on end it also sends the tagged elements again */
  addResizeListener() {
    const t = new ResizeObserver(() => {
      this.isResizing || (this.isResizing = !0, A(D.RESIZE_START, {}, this.targetOrigin)), this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(() => {
        this.isResizing = !1, A(D.RESIZE_END, {}, this.targetOrigin), this.sendAllElements(), this.hoveredElement && this.handleTaggedElement(this.hoveredElement);
      }, 150);
    });
    return t.observe(document.body), () => t.disconnect();
  }
  /**
   * Validates if the element has the inspector mode attributes
   * and sends it then to the editor
   */
  handleTaggedElement(t) {
    const n = ee(t, this.defaultLocale);
    return n ? (this.hoveredElement = t, A(
      D.MOUSE_MOVE,
      {
        element: {
          attributes: n,
          coordinates: t.getBoundingClientRect()
        }
      },
      this.targetOrigin
    ), !0) : !1;
  }
  /**
   * Finds all elements that have all inspector mode attributes
   * and sends them to the editor
   */
  sendAllElements() {
    const t = se().filter(
      (n) => !!ee(n, this.defaultLocale)
    );
    this.taggedElements = t, A(
      D.TAGGED_ELEMENTS,
      {
        elements: t.map((n) => ({
          coordinates: n.getBoundingClientRect()
        }))
      },
      this.targetOrigin
    );
  }
}
var _ = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, O = {}, K = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.BLOCKS = void 0, function(t) {
    t.DOCUMENT = "document", t.PARAGRAPH = "paragraph", t.HEADING_1 = "heading-1", t.HEADING_2 = "heading-2", t.HEADING_3 = "heading-3", t.HEADING_4 = "heading-4", t.HEADING_5 = "heading-5", t.HEADING_6 = "heading-6", t.OL_LIST = "ordered-list", t.UL_LIST = "unordered-list", t.LIST_ITEM = "list-item", t.HR = "hr", t.QUOTE = "blockquote", t.EMBEDDED_ENTRY = "embedded-entry-block", t.EMBEDDED_ASSET = "embedded-asset-block", t.EMBEDDED_RESOURCE = "embedded-resource-block", t.TABLE = "table", t.TABLE_ROW = "table-row", t.TABLE_CELL = "table-cell", t.TABLE_HEADER_CELL = "table-header-cell";
  }(e.BLOCKS || (e.BLOCKS = {}));
})(K);
var $ = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.INLINES = void 0, function(t) {
    t.HYPERLINK = "hyperlink", t.ENTRY_HYPERLINK = "entry-hyperlink", t.ASSET_HYPERLINK = "asset-hyperlink", t.RESOURCE_HYPERLINK = "resource-hyperlink", t.EMBEDDED_ENTRY = "embedded-entry-inline", t.EMBEDDED_RESOURCE = "embedded-resource-inline";
  }(e.INLINES || (e.INLINES = {}));
})($);
var Q = {};
Object.defineProperty(Q, "__esModule", { value: !0 });
var re;
(function(e) {
  e.BOLD = "bold", e.ITALIC = "italic", e.UNDERLINE = "underline", e.CODE = "code", e.SUPERSCRIPT = "superscript", e.SUBSCRIPT = "subscript";
})(re || (re = {}));
Q.default = re;
var ke = {};
(function(e) {
  var t = _ && _.__spreadArray || function(o, l, p) {
    if (p || arguments.length === 2)
      for (var d = 0, u = l.length, E; d < u; d++)
        (E || !(d in l)) && (E || (E = Array.prototype.slice.call(l, 0, d)), E[d] = l[d]);
    return o.concat(E || Array.prototype.slice.call(l));
  }, n = _ && _.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  }, s;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.V1_MARKS = e.V1_NODE_TYPES = e.TEXT_CONTAINERS = e.HEADINGS = e.CONTAINERS = e.VOID_BLOCKS = e.TABLE_BLOCKS = e.LIST_ITEM_BLOCKS = e.TOP_LEVEL_BLOCKS = void 0;
  var i = K, r = $, a = n(Q);
  e.TOP_LEVEL_BLOCKS = [
    i.BLOCKS.PARAGRAPH,
    i.BLOCKS.HEADING_1,
    i.BLOCKS.HEADING_2,
    i.BLOCKS.HEADING_3,
    i.BLOCKS.HEADING_4,
    i.BLOCKS.HEADING_5,
    i.BLOCKS.HEADING_6,
    i.BLOCKS.OL_LIST,
    i.BLOCKS.UL_LIST,
    i.BLOCKS.HR,
    i.BLOCKS.QUOTE,
    i.BLOCKS.EMBEDDED_ENTRY,
    i.BLOCKS.EMBEDDED_ASSET,
    i.BLOCKS.EMBEDDED_RESOURCE,
    i.BLOCKS.TABLE
  ], e.LIST_ITEM_BLOCKS = [
    i.BLOCKS.PARAGRAPH,
    i.BLOCKS.HEADING_1,
    i.BLOCKS.HEADING_2,
    i.BLOCKS.HEADING_3,
    i.BLOCKS.HEADING_4,
    i.BLOCKS.HEADING_5,
    i.BLOCKS.HEADING_6,
    i.BLOCKS.OL_LIST,
    i.BLOCKS.UL_LIST,
    i.BLOCKS.HR,
    i.BLOCKS.QUOTE,
    i.BLOCKS.EMBEDDED_ENTRY,
    i.BLOCKS.EMBEDDED_ASSET,
    i.BLOCKS.EMBEDDED_RESOURCE
  ], e.TABLE_BLOCKS = [
    i.BLOCKS.TABLE,
    i.BLOCKS.TABLE_ROW,
    i.BLOCKS.TABLE_CELL,
    i.BLOCKS.TABLE_HEADER_CELL
  ], e.VOID_BLOCKS = [
    i.BLOCKS.HR,
    i.BLOCKS.EMBEDDED_ENTRY,
    i.BLOCKS.EMBEDDED_ASSET,
    i.BLOCKS.EMBEDDED_RESOURCE
  ], e.CONTAINERS = (s = {}, s[i.BLOCKS.OL_LIST] = [i.BLOCKS.LIST_ITEM], s[i.BLOCKS.UL_LIST] = [i.BLOCKS.LIST_ITEM], s[i.BLOCKS.LIST_ITEM] = e.LIST_ITEM_BLOCKS, s[i.BLOCKS.QUOTE] = [i.BLOCKS.PARAGRAPH], s[i.BLOCKS.TABLE] = [i.BLOCKS.TABLE_ROW], s[i.BLOCKS.TABLE_ROW] = [i.BLOCKS.TABLE_CELL, i.BLOCKS.TABLE_HEADER_CELL], s[i.BLOCKS.TABLE_CELL] = [i.BLOCKS.PARAGRAPH], s[i.BLOCKS.TABLE_HEADER_CELL] = [i.BLOCKS.PARAGRAPH], s), e.HEADINGS = [
    i.BLOCKS.HEADING_1,
    i.BLOCKS.HEADING_2,
    i.BLOCKS.HEADING_3,
    i.BLOCKS.HEADING_4,
    i.BLOCKS.HEADING_5,
    i.BLOCKS.HEADING_6
  ], e.TEXT_CONTAINERS = t([i.BLOCKS.PARAGRAPH], e.HEADINGS, !0), e.V1_NODE_TYPES = [
    i.BLOCKS.DOCUMENT,
    i.BLOCKS.PARAGRAPH,
    i.BLOCKS.HEADING_1,
    i.BLOCKS.HEADING_2,
    i.BLOCKS.HEADING_3,
    i.BLOCKS.HEADING_4,
    i.BLOCKS.HEADING_5,
    i.BLOCKS.HEADING_6,
    i.BLOCKS.OL_LIST,
    i.BLOCKS.UL_LIST,
    i.BLOCKS.LIST_ITEM,
    i.BLOCKS.HR,
    i.BLOCKS.QUOTE,
    i.BLOCKS.EMBEDDED_ENTRY,
    i.BLOCKS.EMBEDDED_ASSET,
    r.INLINES.HYPERLINK,
    r.INLINES.ENTRY_HYPERLINK,
    r.INLINES.ASSET_HYPERLINK,
    r.INLINES.EMBEDDED_ENTRY,
    "text"
  ], e.V1_MARKS = [a.default.BOLD, a.default.CODE, a.default.ITALIC, a.default.UNDERLINE];
})(ke);
var Be = {};
Object.defineProperty(Be, "__esModule", { value: !0 });
var xe = {};
Object.defineProperty(xe, "__esModule", { value: !0 });
var fe = {};
Object.defineProperty(fe, "__esModule", { value: !0 });
var ge = K, Ct = {
  nodeType: ge.BLOCKS.DOCUMENT,
  data: {},
  content: [
    {
      nodeType: ge.BLOCKS.PARAGRAPH,
      data: {},
      content: [
        {
          nodeType: "text",
          value: "",
          marks: [],
          data: {}
        }
      ]
    }
  ]
};
fe.default = Ct;
var C = {};
Object.defineProperty(C, "__esModule", { value: !0 });
C.isText = C.isBlock = C.isInline = void 0;
var Rt = K, bt = $;
function Pe(e, t) {
  for (var n = 0, s = Object.keys(e); n < s.length; n++) {
    var i = s[n];
    if (t === e[i])
      return !0;
  }
  return !1;
}
function wt(e) {
  return Pe(bt.INLINES, e.nodeType);
}
C.isInline = wt;
function Mt(e) {
  return Pe(Rt.BLOCKS, e.nodeType);
}
C.isBlock = Mt;
function kt(e) {
  return e.nodeType === "text";
}
C.isText = kt;
(function(e) {
  var t = _ && _.__createBinding || (Object.create ? function(u, E, y, f) {
    f === void 0 && (f = y);
    var I = Object.getOwnPropertyDescriptor(E, y);
    (!I || ("get" in I ? !E.__esModule : I.writable || I.configurable)) && (I = { enumerable: !0, get: function() {
      return E[y];
    } }), Object.defineProperty(u, f, I);
  } : function(u, E, y, f) {
    f === void 0 && (f = y), u[f] = E[y];
  }), n = _ && _.__setModuleDefault || (Object.create ? function(u, E) {
    Object.defineProperty(u, "default", { enumerable: !0, value: E });
  } : function(u, E) {
    u.default = E;
  }), s = _ && _.__exportStar || function(u, E) {
    for (var y in u)
      y !== "default" && !Object.prototype.hasOwnProperty.call(E, y) && t(E, u, y);
  }, i = _ && _.__importStar || function(u) {
    if (u && u.__esModule)
      return u;
    var E = {};
    if (u != null)
      for (var y in u)
        y !== "default" && Object.prototype.hasOwnProperty.call(u, y) && t(E, u, y);
    return n(E, u), E;
  }, r = _ && _.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.helpers = e.EMPTY_DOCUMENT = e.MARKS = e.INLINES = e.BLOCKS = void 0;
  var a = K;
  Object.defineProperty(e, "BLOCKS", { enumerable: !0, get: function() {
    return a.BLOCKS;
  } });
  var o = $;
  Object.defineProperty(e, "INLINES", { enumerable: !0, get: function() {
    return o.INLINES;
  } });
  var l = Q;
  Object.defineProperty(e, "MARKS", { enumerable: !0, get: function() {
    return r(l).default;
  } }), s(ke, e), s(Be, e), s(xe, e);
  var p = fe;
  Object.defineProperty(e, "EMPTY_DOCUMENT", { enumerable: !0, get: function() {
    return r(p).default;
  } });
  var d = i(C);
  e.helpers = d;
})(O);
function Oe(e) {
  return !e || typeof e != "object" || !("sys" in e) ? !1 : e.sys.type !== "ResourceLink";
}
function Ae(e) {
  return !e || typeof e != "object" || !("sys" in e) ? !1 : e.sys.type === "ResourceLink";
}
function ye(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = e;
  return t.content && t.nodeType === O.BLOCKS.DOCUMENT;
}
const Fe = [
  O.BLOCKS.EMBEDDED_ENTRY,
  O.BLOCKS.EMBEDDED_ASSET,
  O.INLINES.EMBEDDED_ENTRY,
  O.INLINES.ENTRY_HYPERLINK,
  O.INLINES.ASSET_HYPERLINK
];
function Ke(e) {
  return e.sys && "linkType" in e.sys && e.sys.linkType === P;
}
function Bt(e, t) {
  return e.name.value === "items" && St(t) || e.name.value;
}
function Ue(e, t) {
  var n, s;
  const i = [];
  for (const r of e)
    r.kind === "Field" && (i.push({
      name: r.name.value,
      alias: (n = r.alias) == null ? void 0 : n.value,
      __typename: t
    }), (s = r.selectionSet) != null && s.selections && i.push(
      ...Ue(
        r.selectionSet.selections,
        Bt(r, t)
      )
    ));
  return i;
}
function xt(e) {
  var t;
  const n = [];
  for (const i of e.definitions)
    if (i.kind === "OperationDefinition" || i.kind === "FragmentDefinition") {
      const r = "typeCondition" in i ? i.typeCondition.name.value : (t = i.name) == null ? void 0 : t.value;
      if (!r) {
        T.warn("Could not generate __typename for query definition", i);
        continue;
      }
      for (const a of i.selectionSet.selections)
        a.kind === "Field" && n.push(...Ue(i.selectionSet.selections, r));
    }
  const s = /* @__PURE__ */ new Map();
  for (const { __typename: i, alias: r, name: a } of n) {
    const o = s.get(i) || {
      alias: /* @__PURE__ */ new Map(),
      fields: /* @__PURE__ */ new Set()
    };
    o.fields.add(a), r && o.alias.set(a, r), s.set(i, o);
  }
  return s;
}
function Ge(e, t, n) {
  if (!n)
    return !0;
  const s = n.get(t);
  return s ? s.fields.has(e) || s.fields.has(he(e)) : !1;
}
function me(e, t, n) {
  var s;
  const i = (s = n == null ? void 0 : n.get(t)) == null ? void 0 : s.alias;
  if (!i)
    return e;
  for (const r in e) {
    const a = i == null ? void 0 : i.get(r);
    a !== r && (e[a] = e[r]);
  }
  return e;
}
function Ve(e, t, n) {
  var s, i;
  try {
    const r = t.fields.file, a = r == null ? void 0 : r.details, o = {
      ...e,
      // GraphQL flattens some information
      // and as the live updates are coming from the CMA, we need to transform them
      title: t.fields.title,
      description: t.fields.description,
      contentType: r == null ? void 0 : r.contentType,
      url: Nt(r == null ? void 0 : r.url),
      // Note: video has no `width` and `height`
      width: (s = a == null ? void 0 : a.image) == null ? void 0 : s.width,
      height: (i = a == null ? void 0 : a.image) == null ? void 0 : i.height
    };
    return me(o, P, n);
  } catch (r) {
    return T.warn("Failed update asset", { dataFromPreviewApp: e, updateFromEntryEditor: t }, r), e;
  }
}
async function Pt({
  contentType: e,
  dataFromPreviewApp: t,
  updateFromEntryEditor: n,
  locale: s,
  entityReferenceMap: i,
  gqlParams: r,
  sendMessage: a
}) {
  var o;
  if (t.sys.id !== n.sys.id)
    return t;
  const l = pe(t), p = Y(e.sys.id);
  for (const d of e.fields) {
    const u = d.apiName ?? d.name;
    Ge(u, p, r) && (be(d) ? ue({
      dataFromPreviewApp: l,
      updateFromEntryEditor: n,
      name: u
    }) : d.type === "RichText" ? await Ft({
      dataFromPreviewApp: l,
      updateFromEntryEditor: n,
      entityReferenceMap: i,
      name: u,
      locale: s,
      gqlParams: r,
      sendMessage: a
    }) : d.type === "Link" ? await Qe({
      dataFromPreviewApp: l,
      updateFromEntryEditor: n,
      name: u,
      locale: s,
      entityReferenceMap: i,
      gqlParams: r,
      sendMessage: a
    }) : d.type === "Array" && ((o = d.items) == null ? void 0 : o.type) === "Link" && await ze({
      dataFromPreviewApp: l,
      updateFromEntryEditor: n,
      name: u,
      locale: s,
      entityReferenceMap: i,
      gqlParams: r,
      sendMessage: a
    }));
  }
  return me(l, p, r);
}
function Se(e) {
  return Object.values(e).every((t) => t.length === 0);
}
async function je(e, t, n, s, i, r, a) {
  if (Fe.includes(e.nodeType)) {
    if (e.data && e.data.target && e.data.target.sys) {
      const o = {
        sys: { ...e.data.target.sys, type: "Link", linkType: e.data.target.sys.type }
      };
      let l;
      if (e.data.target.sys.linkType === "Entry" ? l = await qe({
        referenceFromPreviewApp: null,
        updatedReference: o,
        entityReferenceMap: s,
        locale: i,
        gqlParams: a,
        sendMessage: r
      }) : e.data.target.sys.linkType === "Asset" && (l = await He({
        referenceFromPreviewApp: null,
        updatedReference: o,
        entityReferenceMap: s,
        locale: i,
        gqlParams: a,
        sendMessage: r
      })), l)
        switch (e.nodeType) {
          case O.BLOCKS.EMBEDDED_ENTRY:
            t.block.push(l);
            break;
          case O.BLOCKS.EMBEDDED_ASSET:
            n.block.push(l);
            break;
          case O.INLINES.EMBEDDED_ENTRY:
            t.inline.push(l);
            break;
          case O.INLINES.ENTRY_HYPERLINK:
            t.hyperlink.push(l);
            break;
          case O.INLINES.ASSET_HYPERLINK:
            n.hyperlink.push(l);
            break;
          default:
            T.warn("Unhandled nodeType in embedded entries in rich text", {
              nodeType: e.nodeType,
              ref: l
            });
        }
    }
  } else if (e.content)
    for (const o of e.content)
      await je(
        o,
        t,
        n,
        s,
        i,
        r,
        a
      );
}
async function Ye(e, t, n, s, i) {
  const r = { block: [], inline: [], hyperlink: [] }, a = { block: [], inline: [], hyperlink: [] };
  if (e)
    for (const o of e.content)
      await je(o, r, a, t, n, s, i);
  return {
    entries: Se(r) ? { block: [], inline: [], hyperlink: [] } : r,
    assets: Se(a) ? { block: [], inline: [], hyperlink: [] } : a
  };
}
async function Ft({
  dataFromPreviewApp: e,
  updateFromEntryEditor: t,
  name: n,
  locale: s,
  entityReferenceMap: i,
  gqlParams: r,
  sendMessage: a
}) {
  var o;
  e[n] || (e[n] = {}), e[n].json = ((o = t == null ? void 0 : t.fields) == null ? void 0 : o[n]) || null, e[n].links = await Ye(
    e[n].json,
    i,
    s,
    a,
    r
  );
}
async function He({
  referenceFromPreviewApp: e,
  updatedReference: t,
  entityReferenceMap: n,
  locale: s,
  gqlParams: i,
  sendMessage: r
}) {
  const { reference: a } = await Ee({
    entityReferenceMap: n,
    referenceId: t.sys.id,
    isAsset: !0,
    locale: s,
    sendMessage: r
  });
  return Ve(
    {
      ...e,
      ...t,
      __typename: P
    },
    a,
    i
  );
}
async function qe({
  referenceFromPreviewApp: e,
  updatedReference: t,
  entityReferenceMap: n,
  locale: s,
  gqlParams: i,
  sendMessage: r
}) {
  var a;
  const { reference: o, typeName: l } = await Ee({
    entityReferenceMap: n,
    referenceId: t.sys.id,
    locale: s,
    sendMessage: r
  }), p = {
    ...e,
    ...t,
    __typename: l
  };
  for (const d in o.fields) {
    if (!Ge(d, l, i))
      continue;
    const u = o.fields[d];
    if (u && typeof u == "object")
      ye(u) && (p[d] = { json: u }, p[d].links = await Ye(
        u,
        n,
        s,
        r,
        i
      )), "sys" in u && (p[d] = u, await Qe({
        dataFromPreviewApp: p,
        updateFromEntryEditor: o,
        locale: s,
        entityReferenceMap: n,
        name: d,
        gqlParams: i,
        sendMessage: r
      }));
    else if (Array.isArray(u) && (a = u[0]) != null && a.sys) {
      const E = he(d);
      p[E] = { items: u }, await ze({
        dataFromPreviewApp: p,
        updateFromEntryEditor: o,
        locale: s,
        entityReferenceMap: n,
        name: d,
        gqlParams: i,
        sendMessage: r
      });
    } else
      p[d] = u;
  }
  return me(p, l, i);
}
async function $e({
  referenceFromPreviewApp: e,
  updatedReference: t,
  entityReferenceMap: n,
  locale: s,
  gqlParams: i,
  sendMessage: r
}) {
  return t ? e && e.__typename ? e : t.__typename ? t : Ke(t) ? He({
    referenceFromPreviewApp: e,
    updatedReference: t,
    entityReferenceMap: n,
    locale: s,
    gqlParams: i,
    sendMessage: r
  }) : qe({
    referenceFromPreviewApp: e,
    updatedReference: t,
    entityReferenceMap: n,
    locale: s,
    gqlParams: i,
    sendMessage: r
  }) : null;
}
async function Qe({
  dataFromPreviewApp: e,
  updateFromEntryEditor: t,
  name: n,
  locale: s,
  entityReferenceMap: i,
  gqlParams: r,
  sendMessage: a
}) {
  var o;
  const l = (o = t == null ? void 0 : t.fields) == null ? void 0 : o[n];
  e[n] = await $e({
    referenceFromPreviewApp: e[n],
    updatedReference: l,
    entityReferenceMap: i,
    locale: s,
    gqlParams: r,
    sendMessage: a
  });
}
async function ze({
  dataFromPreviewApp: e,
  updateFromEntryEditor: t,
  name: n,
  locale: s,
  entityReferenceMap: i,
  gqlParams: r,
  sendMessage: a
}) {
  var o;
  const l = he(n), p = ((o = t == null ? void 0 : t.fields) == null ? void 0 : o[n]) || [], d = await Promise.all(
    p.map(async (u) => {
      var E, y;
      const f = (y = (E = e[l]) == null ? void 0 : E.items) == null ? void 0 : y.find((I) => I.sys.id === u.sys.id);
      return await $e({
        referenceFromPreviewApp: f,
        updatedReference: u,
        entityReferenceMap: i,
        locale: s,
        gqlParams: r,
        sendMessage: a
      });
    })
  );
  e[l] || (e[l] = { items: [] }), e[l].items = d.filter(Boolean);
}
var H = function() {
  return H = Object.assign || function(e) {
    for (var t, n = 1, s = arguments.length; n < s; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, H.apply(this, arguments);
};
function te(e, t) {
  if (!e)
    throw new Error(t);
}
function Kt(e) {
  return typeof e == "object" && e !== null;
}
function Ut(e, t) {
  if (!e)
    throw new Error(
      t ?? "Unexpected invariant triggered."
    );
}
const Gt = /\r\n|[\n\r]/g;
function ae(e, t) {
  let n = 0, s = 1;
  for (const i of e.body.matchAll(Gt)) {
    if (typeof i.index == "number" || Ut(!1), i.index >= t)
      break;
    n = i.index + i[0].length, s += 1;
  }
  return {
    line: s,
    column: t + 1 - n
  };
}
function Vt(e) {
  return Je(
    e.source,
    ae(e.source, e.start)
  );
}
function Je(e, t) {
  const n = e.locationOffset.column - 1, s = "".padStart(n) + e.body, i = t.line - 1, r = e.locationOffset.line - 1, a = t.line + r, o = t.line === 1 ? n : 0, l = t.column + o, p = `${e.name}:${a}:${l}
`, d = s.split(/\r\n|[\n\r]/g), u = d[i];
  if (u.length > 120) {
    const E = Math.floor(l / 80), y = l % 80, f = [];
    for (let I = 0; I < u.length; I += 80)
      f.push(u.slice(I, I + 80));
    return p + Le([
      [`${a} |`, f[0]],
      ...f.slice(1, E + 1).map((I) => ["|", I]),
      ["|", "^".padStart(y)],
      ["|", f[E + 1]]
    ]);
  }
  return p + Le([
    // Lines specified like this: ["prefix", "string"],
    [`${a - 1} |`, d[i - 1]],
    [`${a} |`, u],
    ["|", "^".padStart(l)],
    [`${a + 1} |`, d[i + 1]]
  ]);
}
function Le(e) {
  const t = e.filter(([s, i]) => i !== void 0), n = Math.max(...t.map(([s]) => s.length));
  return t.map(([s, i]) => s.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function jt(e) {
  const t = e[0];
  return t == null || "kind" in t || "length" in t ? {
    nodes: t,
    source: e[1],
    positions: e[2],
    path: e[3],
    originalError: e[4],
    extensions: e[5]
  } : t;
}
class Te extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(t, ...n) {
    var s, i, r;
    const { nodes: a, source: o, positions: l, path: p, originalError: d, extensions: u } = jt(n);
    super(t), this.name = "GraphQLError", this.path = p ?? void 0, this.originalError = d ?? void 0, this.nodes = De(
      Array.isArray(a) ? a : a ? [a] : void 0
    );
    const E = De(
      (s = this.nodes) === null || s === void 0 ? void 0 : s.map((f) => f.loc).filter((f) => f != null)
    );
    this.source = o ?? (E == null || (i = E[0]) === null || i === void 0 ? void 0 : i.source), this.positions = l ?? (E == null ? void 0 : E.map((f) => f.start)), this.locations = l && o ? l.map((f) => ae(o, f)) : E == null ? void 0 : E.map((f) => ae(f.source, f.start));
    const y = Kt(
      d == null ? void 0 : d.extensions
    ) ? d == null ? void 0 : d.extensions : void 0;
    this.extensions = (r = u ?? y) !== null && r !== void 0 ? r : /* @__PURE__ */ Object.create(null), Object.defineProperties(this, {
      message: {
        writable: !0,
        enumerable: !0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), d != null && d.stack ? Object.defineProperty(this, "stack", {
      value: d.stack,
      writable: !0,
      configurable: !0
    }) : Error.captureStackTrace ? Error.captureStackTrace(this, Te) : Object.defineProperty(this, "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc && (t += `

` + Vt(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t += `

` + Je(this.source, n);
    return t;
  }
  toJSON() {
    const t = {
      message: this.message
    };
    return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t;
  }
}
function De(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function N(e, t, n) {
  return new Te(`Syntax Error: ${n}`, {
    source: e,
    positions: [t]
  });
}
class Yt {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(t, n, s) {
    this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = s;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Xe {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(t, n, s, i, r, a) {
    this.kind = t, this.start = n, this.end = s, this.line = i, this.column = r, this.value = a, this.prev = null, this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const Ht = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
new Set(Object.keys(Ht));
var b;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(b || (b = {}));
var oe;
(function(e) {
  e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION";
})(oe || (oe = {}));
var h;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})(h || (h = {}));
function qt(e) {
  return e === 9 || e === 32;
}
function F(e) {
  return e >= 48 && e <= 57;
}
function We(e) {
  return e >= 97 && e <= 122 || // A-Z
  e >= 65 && e <= 90;
}
function Ze(e) {
  return We(e) || e === 95;
}
function $t(e) {
  return We(e) || F(e) || e === 95;
}
function Qt(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER, s = null, i = -1;
  for (let a = 0; a < e.length; ++a) {
    var r;
    const o = e[a], l = zt(o);
    l !== o.length && (s = (r = s) !== null && r !== void 0 ? r : a, i = a, a !== 0 && l < n && (n = l));
  }
  return e.map((a, o) => o === 0 ? a : a.slice(n)).slice(
    (t = s) !== null && t !== void 0 ? t : 0,
    i + 1
  );
}
function zt(e) {
  let t = 0;
  for (; t < e.length && qt(e.charCodeAt(t)); )
    ++t;
  return t;
}
var c;
(function(e) {
  e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment";
})(c || (c = {}));
class Jt {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(t) {
    const n = new Xe(c.SOF, 0, 0, 0, 0);
    this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    return this.lastToken = this.token, this.token = this.lookahead();
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let t = this.token;
    if (t.kind !== c.EOF)
      do
        if (t.next)
          t = t.next;
        else {
          const n = Wt(this, t.end);
          t.next = n, n.prev = t, t = n;
        }
      while (t.kind === c.COMMENT);
    return t;
  }
}
function Xt(e) {
  return e === c.BANG || e === c.DOLLAR || e === c.AMP || e === c.PAREN_L || e === c.PAREN_R || e === c.SPREAD || e === c.COLON || e === c.EQUALS || e === c.AT || e === c.BRACKET_L || e === c.BRACKET_R || e === c.BRACE_L || e === c.PIPE || e === c.BRACE_R;
}
function M(e) {
  return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111;
}
function z(e, t) {
  return et(e.charCodeAt(t)) && tt(e.charCodeAt(t + 1));
}
function et(e) {
  return e >= 55296 && e <= 56319;
}
function tt(e) {
  return e >= 56320 && e <= 57343;
}
function R(e, t) {
  const n = e.source.body.codePointAt(t);
  if (n === void 0)
    return c.EOF;
  if (n >= 32 && n <= 126) {
    const s = String.fromCodePoint(n);
    return s === '"' ? `'"'` : `"${s}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function v(e, t, n, s, i) {
  const r = e.line, a = 1 + n - e.lineStart;
  return new Xe(t, n, s, r, a, i);
}
function Wt(e, t) {
  const n = e.source.body, s = n.length;
  let i = t;
  for (; i < s; ) {
    const r = n.charCodeAt(i);
    switch (r) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++e.line, e.lineStart = i;
        continue;
      case 13:
        n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
        continue;
      case 35:
        return Zt(e, i);
      case 33:
        return v(e, c.BANG, i, i + 1);
      case 36:
        return v(e, c.DOLLAR, i, i + 1);
      case 38:
        return v(e, c.AMP, i, i + 1);
      case 40:
        return v(e, c.PAREN_L, i, i + 1);
      case 41:
        return v(e, c.PAREN_R, i, i + 1);
      case 46:
        if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46)
          return v(e, c.SPREAD, i, i + 3);
        break;
      case 58:
        return v(e, c.COLON, i, i + 1);
      case 61:
        return v(e, c.EQUALS, i, i + 1);
      case 64:
        return v(e, c.AT, i, i + 1);
      case 91:
        return v(e, c.BRACKET_L, i, i + 1);
      case 93:
        return v(e, c.BRACKET_R, i, i + 1);
      case 123:
        return v(e, c.BRACE_L, i, i + 1);
      case 124:
        return v(e, c.PIPE, i, i + 1);
      case 125:
        return v(e, c.BRACE_R, i, i + 1);
      case 34:
        return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? an(e, i) : tn(e, i);
    }
    if (F(r) || r === 45)
      return en(e, i, r);
    if (Ze(r))
      return on(e, i);
    throw N(
      e.source,
      i,
      r === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : M(r) || z(n, i) ? `Unexpected character: ${R(e, i)}.` : `Invalid character: ${R(e, i)}.`
    );
  }
  return v(e, c.EOF, s, s);
}
function Zt(e, t) {
  const n = e.source.body, s = n.length;
  let i = t + 1;
  for (; i < s; ) {
    const r = n.charCodeAt(i);
    if (r === 10 || r === 13)
      break;
    if (M(r))
      ++i;
    else if (z(n, i))
      i += 2;
    else
      break;
  }
  return v(
    e,
    c.COMMENT,
    t,
    i,
    n.slice(t + 1, i)
  );
}
function en(e, t, n) {
  const s = e.source.body;
  let i = t, r = n, a = !1;
  if (r === 45 && (r = s.charCodeAt(++i)), r === 48) {
    if (r = s.charCodeAt(++i), F(r))
      throw N(
        e.source,
        i,
        `Invalid number, unexpected digit after 0: ${R(
          e,
          i
        )}.`
      );
  } else
    i = ne(e, i, r), r = s.charCodeAt(i);
  if (r === 46 && (a = !0, r = s.charCodeAt(++i), i = ne(e, i, r), r = s.charCodeAt(i)), (r === 69 || r === 101) && (a = !0, r = s.charCodeAt(++i), (r === 43 || r === 45) && (r = s.charCodeAt(++i)), i = ne(e, i, r), r = s.charCodeAt(i)), r === 46 || Ze(r))
    throw N(
      e.source,
      i,
      `Invalid number, expected digit but got: ${R(
        e,
        i
      )}.`
    );
  return v(
    e,
    a ? c.FLOAT : c.INT,
    t,
    i,
    s.slice(t, i)
  );
}
function ne(e, t, n) {
  if (!F(n))
    throw N(
      e.source,
      t,
      `Invalid number, expected digit but got: ${R(
        e,
        t
      )}.`
    );
  const s = e.source.body;
  let i = t + 1;
  for (; F(s.charCodeAt(i)); )
    ++i;
  return i;
}
function tn(e, t) {
  const n = e.source.body, s = n.length;
  let i = t + 1, r = i, a = "";
  for (; i < s; ) {
    const o = n.charCodeAt(i);
    if (o === 34)
      return a += n.slice(r, i), v(e, c.STRING, t, i + 1, a);
    if (o === 92) {
      a += n.slice(r, i);
      const l = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? nn(e, i) : sn(e, i) : rn(e, i);
      a += l.value, i += l.size, r = i;
      continue;
    }
    if (o === 10 || o === 13)
      break;
    if (M(o))
      ++i;
    else if (z(n, i))
      i += 2;
    else
      throw N(
        e.source,
        i,
        `Invalid character within String: ${R(
          e,
          i
        )}.`
      );
  }
  throw N(e.source, i, "Unterminated string.");
}
function nn(e, t) {
  const n = e.source.body;
  let s = 0, i = 3;
  for (; i < 12; ) {
    const r = n.charCodeAt(t + i++);
    if (r === 125) {
      if (i < 5 || !M(s))
        break;
      return {
        value: String.fromCodePoint(s),
        size: i
      };
    }
    if (s = s << 4 | x(r), s < 0)
      break;
  }
  throw N(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(
      t,
      t + i
    )}".`
  );
}
function sn(e, t) {
  const n = e.source.body, s = Ce(n, t + 2);
  if (M(s))
    return {
      value: String.fromCodePoint(s),
      size: 6
    };
  if (et(s) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    const i = Ce(n, t + 8);
    if (tt(i))
      return {
        value: String.fromCodePoint(s, i),
        size: 12
      };
  }
  throw N(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`
  );
}
function Ce(e, t) {
  return x(e.charCodeAt(t)) << 12 | x(e.charCodeAt(t + 1)) << 8 | x(e.charCodeAt(t + 2)) << 4 | x(e.charCodeAt(t + 3));
}
function x(e) {
  return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1;
}
function rn(e, t) {
  const n = e.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: `
`,
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw N(
    e.source,
    t,
    `Invalid character escape sequence: "${n.slice(
      t,
      t + 2
    )}".`
  );
}
function an(e, t) {
  const n = e.source.body, s = n.length;
  let i = e.lineStart, r = t + 3, a = r, o = "";
  const l = [];
  for (; r < s; ) {
    const p = n.charCodeAt(r);
    if (p === 34 && n.charCodeAt(r + 1) === 34 && n.charCodeAt(r + 2) === 34) {
      o += n.slice(a, r), l.push(o);
      const d = v(
        e,
        c.BLOCK_STRING,
        t,
        r + 3,
        // Return a string of the lines joined with U+000A.
        Qt(l).join(`
`)
      );
      return e.line += l.length - 1, e.lineStart = i, d;
    }
    if (p === 92 && n.charCodeAt(r + 1) === 34 && n.charCodeAt(r + 2) === 34 && n.charCodeAt(r + 3) === 34) {
      o += n.slice(a, r), a = r + 1, r += 4;
      continue;
    }
    if (p === 10 || p === 13) {
      o += n.slice(a, r), l.push(o), p === 13 && n.charCodeAt(r + 1) === 10 ? r += 2 : ++r, o = "", a = r, i = r;
      continue;
    }
    if (M(p))
      ++r;
    else if (z(n, r))
      r += 2;
    else
      throw N(
        e.source,
        r,
        `Invalid character within String: ${R(
          e,
          r
        )}.`
      );
  }
  throw N(e.source, r, "Unterminated string.");
}
function on(e, t) {
  const n = e.source.body, s = n.length;
  let i = t + 1;
  for (; i < s; ) {
    const r = n.charCodeAt(i);
    if ($t(r))
      ++i;
    else
      break;
  }
  return v(
    e,
    c.NAME,
    t,
    i,
    n.slice(t, i)
  );
}
const cn = 10, nt = 2;
function it(e) {
  return J(e, []);
}
function J(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return ln(e, t);
    default:
      return String(e);
  }
}
function ln(e, t) {
  if (e === null)
    return "null";
  if (t.includes(e))
    return "[Circular]";
  const n = [...t, e];
  if (dn(e)) {
    const s = e.toJSON();
    if (s !== e)
      return typeof s == "string" ? s : J(s, n);
  } else if (Array.isArray(e))
    return pn(e, n);
  return un(e, n);
}
function dn(e) {
  return typeof e.toJSON == "function";
}
function un(e, t) {
  const n = Object.entries(e);
  return n.length === 0 ? "{}" : t.length > nt ? "[" + hn(e) + "]" : "{ " + n.map(
    ([s, i]) => s + ": " + J(i, t)
  ).join(", ") + " }";
}
function pn(e, t) {
  if (e.length === 0)
    return "[]";
  if (t.length > nt)
    return "[Array]";
  const n = Math.min(cn, e.length), s = e.length - n, i = [];
  for (let r = 0; r < n; ++r)
    i.push(J(e[r], t));
  return s === 1 ? i.push("... 1 more item") : s > 1 && i.push(`... ${s} more items`), "[" + i.join(", ") + "]";
}
function hn(e) {
  const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "")
      return n;
  }
  return t;
}
const En = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function(e, t) {
    return e instanceof t;
  } : function(e, t) {
    if (e instanceof t)
      return !0;
    if (typeof e == "object" && e !== null) {
      var n;
      const s = t.prototype[Symbol.toStringTag], i = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in e ? e[Symbol.toStringTag] : (n = e.constructor) === null || n === void 0 ? void 0 : n.name
      );
      if (s === i) {
        const r = it(e);
        throw new Error(`Cannot use ${s} "${r}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return !1;
  }
);
class st {
  constructor(t, n = "GraphQL request", s = {
    line: 1,
    column: 1
  }) {
    typeof t == "string" || te(!1, `Body must be a string. Received: ${it(t)}.`), this.body = t, this.name = n, this.locationOffset = s, this.locationOffset.line > 0 || te(
      !1,
      "line in locationOffset is 1-indexed and must be positive."
    ), this.locationOffset.column > 0 || te(
      !1,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function fn(e) {
  return En(e, st);
}
function yn(e, t) {
  return new mn(e, t).parseDocument();
}
class mn {
  constructor(t, n = {}) {
    const s = fn(t) ? t : new st(t);
    this._lexer = new Jt(s), this._options = n, this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const t = this.expectToken(c.NAME);
    return this.node(t, {
      kind: h.NAME,
      value: t.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: h.DOCUMENT,
      definitions: this.many(
        c.SOF,
        this.parseDefinition,
        c.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(c.BRACE_L))
      return this.parseOperationDefinition();
    const t = this.peekDescription(), n = t ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === c.NAME) {
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (t)
        throw N(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (n.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const t = this._lexer.token;
    if (this.peek(c.BRACE_L))
      return this.node(t, {
        kind: h.OPERATION_DEFINITION,
        operation: b.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    const n = this.parseOperationType();
    let s;
    return this.peek(c.NAME) && (s = this.parseName()), this.node(t, {
      kind: h.OPERATION_DEFINITION,
      operation: n,
      name: s,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const t = this.expectToken(c.NAME);
    switch (t.value) {
      case "query":
        return b.QUERY;
      case "mutation":
        return b.MUTATION;
      case "subscription":
        return b.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      c.PAREN_L,
      this.parseVariableDefinition,
      c.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: h.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(c.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(c.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const t = this._lexer.token;
    return this.expectToken(c.DOLLAR), this.node(t, {
      kind: h.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: h.SELECTION_SET,
      selections: this.many(
        c.BRACE_L,
        this.parseSelection,
        c.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(c.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const t = this._lexer.token, n = this.parseName();
    let s, i;
    return this.expectOptionalToken(c.COLON) ? (s = n, i = this.parseName()) : i = n, this.node(t, {
      kind: h.FIELD,
      alias: s,
      name: i,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(c.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(t) {
    const n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(c.PAREN_L, n, c.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(t = !1) {
    const n = this._lexer.token, s = this.parseName();
    return this.expectToken(c.COLON), this.node(n, {
      kind: h.ARGUMENT,
      name: s,
      value: this.parseValueLiteral(t)
    });
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const t = this._lexer.token;
    this.expectToken(c.SPREAD);
    const n = this.expectOptionalKeyword("on");
    return !n && this.peek(c.NAME) ? this.node(t, {
      kind: h.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1)
    }) : this.node(t, {
      kind: h.INLINE_FRAGMENT,
      typeCondition: n ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const t = this._lexer.token;
    return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(t, {
      kind: h.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    }) : this.node(t, {
      kind: h.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(t) {
    const n = this._lexer.token;
    switch (n.kind) {
      case c.BRACKET_L:
        return this.parseList(t);
      case c.BRACE_L:
        return this.parseObject(t);
      case c.INT:
        return this.advanceLexer(), this.node(n, {
          kind: h.INT,
          value: n.value
        });
      case c.FLOAT:
        return this.advanceLexer(), this.node(n, {
          kind: h.FLOAT,
          value: n.value
        });
      case c.STRING:
      case c.BLOCK_STRING:
        return this.parseStringLiteral();
      case c.NAME:
        switch (this.advanceLexer(), n.value) {
          case "true":
            return this.node(n, {
              kind: h.BOOLEAN,
              value: !0
            });
          case "false":
            return this.node(n, {
              kind: h.BOOLEAN,
              value: !1
            });
          case "null":
            return this.node(n, {
              kind: h.NULL
            });
          default:
            return this.node(n, {
              kind: h.ENUM,
              value: n.value
            });
        }
      case c.DOLLAR:
        if (t)
          if (this.expectToken(c.DOLLAR), this._lexer.token.kind === c.NAME) {
            const s = this._lexer.token.value;
            throw N(
              this._lexer.source,
              n.start,
              `Unexpected variable "$${s}" in constant value.`
            );
          } else
            throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const t = this._lexer.token;
    return this.advanceLexer(), this.node(t, {
      kind: h.STRING,
      value: t.value,
      block: t.kind === c.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(t) {
    const n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, {
      kind: h.LIST,
      values: this.any(c.BRACKET_L, n, c.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(t) {
    const n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, {
      kind: h.OBJECT,
      fields: this.any(c.BRACE_L, n, c.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(t) {
    const n = this._lexer.token, s = this.parseName();
    return this.expectToken(c.COLON), this.node(n, {
      kind: h.OBJECT_FIELD,
      name: s,
      value: this.parseValueLiteral(t)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(t) {
    const n = [];
    for (; this.peek(c.AT); )
      n.push(this.parseDirective(t));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(t) {
    const n = this._lexer.token;
    return this.expectToken(c.AT), this.node(n, {
      kind: h.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(t)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const t = this._lexer.token;
    let n;
    if (this.expectOptionalToken(c.BRACKET_L)) {
      const s = this.parseTypeReference();
      this.expectToken(c.BRACKET_R), n = this.node(t, {
        kind: h.LIST_TYPE,
        type: s
      });
    } else
      n = this.parseNamedType();
    return this.expectOptionalToken(c.BANG) ? this.node(t, {
      kind: h.NON_NULL_TYPE,
      type: n
    }) : n;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: h.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(c.STRING) || this.peek(c.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("schema");
    const s = this.parseConstDirectives(), i = this.many(
      c.BRACE_L,
      this.parseOperationTypeDefinition,
      c.BRACE_R
    );
    return this.node(t, {
      kind: h.SCHEMA_DEFINITION,
      description: n,
      directives: s,
      operationTypes: i
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const t = this._lexer.token, n = this.parseOperationType();
    this.expectToken(c.COLON);
    const s = this.parseNamedType();
    return this.node(t, {
      kind: h.OPERATION_TYPE_DEFINITION,
      operation: n,
      type: s
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("scalar");
    const s = this.parseName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: h.SCALAR_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("type");
    const s = this.parseName(), i = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    return this.node(t, {
      kind: h.OBJECT_TYPE_DEFINITION,
      description: n,
      name: s,
      interfaces: i,
      directives: r,
      fields: a
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(c.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      c.BRACE_L,
      this.parseFieldDefinition,
      c.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const t = this._lexer.token, n = this.parseDescription(), s = this.parseName(), i = this.parseArgumentDefs();
    this.expectToken(c.COLON);
    const r = this.parseTypeReference(), a = this.parseConstDirectives();
    return this.node(t, {
      kind: h.FIELD_DEFINITION,
      description: n,
      name: s,
      arguments: i,
      type: r,
      directives: a
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      c.PAREN_L,
      this.parseInputValueDef,
      c.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const t = this._lexer.token, n = this.parseDescription(), s = this.parseName();
    this.expectToken(c.COLON);
    const i = this.parseTypeReference();
    let r;
    this.expectOptionalToken(c.EQUALS) && (r = this.parseConstValueLiteral());
    const a = this.parseConstDirectives();
    return this.node(t, {
      kind: h.INPUT_VALUE_DEFINITION,
      description: n,
      name: s,
      type: i,
      defaultValue: r,
      directives: a
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("interface");
    const s = this.parseName(), i = this.parseImplementsInterfaces(), r = this.parseConstDirectives(), a = this.parseFieldsDefinition();
    return this.node(t, {
      kind: h.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: s,
      interfaces: i,
      directives: r,
      fields: a
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("union");
    const s = this.parseName(), i = this.parseConstDirectives(), r = this.parseUnionMemberTypes();
    return this.node(t, {
      kind: h.UNION_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i,
      types: r
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(c.EQUALS) ? this.delimitedMany(c.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("enum");
    const s = this.parseName(), i = this.parseConstDirectives(), r = this.parseEnumValuesDefinition();
    return this.node(t, {
      kind: h.ENUM_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i,
      values: r
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      c.BRACE_L,
      this.parseEnumValueDefinition,
      c.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const t = this._lexer.token, n = this.parseDescription(), s = this.parseEnumValueName(), i = this.parseConstDirectives();
    return this.node(t, {
      kind: h.ENUM_VALUE_DEFINITION,
      description: n,
      name: s,
      directives: i
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null")
      throw N(
        this._lexer.source,
        this._lexer.token.start,
        `${G(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("input");
    const s = this.parseName(), i = this.parseConstDirectives(), r = this.parseInputFieldsDefinition();
    return this.node(t, {
      kind: h.INPUT_OBJECT_TYPE_DEFINITION,
      description: n,
      name: s,
      directives: i,
      fields: r
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      c.BRACE_L,
      this.parseInputValueDef,
      c.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead();
    if (t.kind === c.NAME)
      switch (t.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(t);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const n = this.parseConstDirectives(), s = this.optionalMany(
      c.BRACE_L,
      this.parseOperationTypeDefinition,
      c.BRACE_R
    );
    if (n.length === 0 && s.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: h.SCHEMA_EXTENSION,
      directives: n,
      operationTypes: s
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const n = this.parseName(), s = this.parseConstDirectives();
    if (s.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: h.SCALAR_TYPE_EXTENSION,
      name: n,
      directives: s
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const n = this.parseName(), s = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), r = this.parseFieldsDefinition();
    if (s.length === 0 && i.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: h.OBJECT_TYPE_EXTENSION,
      name: n,
      interfaces: s,
      directives: i,
      fields: r
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const n = this.parseName(), s = this.parseImplementsInterfaces(), i = this.parseConstDirectives(), r = this.parseFieldsDefinition();
    if (s.length === 0 && i.length === 0 && r.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: h.INTERFACE_TYPE_EXTENSION,
      name: n,
      interfaces: s,
      directives: i,
      fields: r
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const n = this.parseName(), s = this.parseConstDirectives(), i = this.parseUnionMemberTypes();
    if (s.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: h.UNION_TYPE_EXTENSION,
      name: n,
      directives: s,
      types: i
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const n = this.parseName(), s = this.parseConstDirectives(), i = this.parseEnumValuesDefinition();
    if (s.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: h.ENUM_TYPE_EXTENSION,
      name: n,
      directives: s,
      values: i
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const n = this.parseName(), s = this.parseConstDirectives(), i = this.parseInputFieldsDefinition();
    if (s.length === 0 && i.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: h.INPUT_OBJECT_TYPE_EXTENSION,
      name: n,
      directives: s,
      fields: i
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const t = this._lexer.token, n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(c.AT);
    const s = this.parseName(), i = this.parseArgumentDefs(), r = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const a = this.parseDirectiveLocations();
    return this.node(t, {
      kind: h.DIRECTIVE_DEFINITION,
      description: n,
      name: s,
      arguments: i,
      repeatable: r,
      locations: a
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(c.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const t = this._lexer.token, n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(oe, n.value))
      return n;
    throw this.unexpected(t);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(t, n) {
    return this._options.noLocation !== !0 && (n.loc = new Yt(
      t,
      this._lexer.lastToken,
      this._lexer.source
    )), n;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(t) {
    return this._lexer.token.kind === t;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(t) {
    const n = this._lexer.token;
    if (n.kind === t)
      return this.advanceLexer(), n;
    throw N(
      this._lexer.source,
      n.start,
      `Expected ${rt(t)}, found ${G(n)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(t) {
    const n = this._lexer.token;
    if (n.kind === c.NAME && n.value === t)
      this.advanceLexer();
    else
      throw N(
        this._lexer.source,
        n.start,
        `Expected "${t}", found ${G(n)}.`
      );
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(t) {
    const n = this._lexer.token;
    return n.kind === c.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(t) {
    const n = t ?? this._lexer.token;
    return N(
      this._lexer.source,
      n.start,
      `Unexpected ${G(n)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(t, n, s) {
    this.expectToken(t);
    const i = [];
    for (; !this.expectOptionalToken(s); )
      i.push(n.call(this));
    return i;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(t, n, s) {
    if (this.expectOptionalToken(t)) {
      const i = [];
      do
        i.push(n.call(this));
      while (!this.expectOptionalToken(s));
      return i;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(t, n, s) {
    this.expectToken(t);
    const i = [];
    do
      i.push(n.call(this));
    while (!this.expectOptionalToken(s));
    return i;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    const s = [];
    do
      s.push(n.call(this));
    while (this.expectOptionalToken(t));
    return s;
  }
  advanceLexer() {
    const { maxTokens: t } = this._options, n = this._lexer.advance();
    if (t !== void 0 && n.kind !== c.EOF && (++this._tokenCounter, this._tokenCounter > t))
      throw N(
        this._lexer.source,
        n.start,
        `Document contains more that ${t} tokens. Parsing aborted.`
      );
  }
}
function G(e) {
  const t = e.value;
  return rt(e.kind) + (t != null ? ` "${t}"` : "");
}
function rt(e) {
  return Xt(e) ? `"${e}"` : e;
}
var V = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), at = !0, q = !1;
function ot(e) {
  return e.replace(/[\s,]+/g, " ").trim();
}
function Tn(e) {
  return ot(e.source.body.substring(e.start, e.end));
}
function vn(e) {
  var t = /* @__PURE__ */ new Set(), n = [];
  return e.definitions.forEach(function(s) {
    if (s.kind === "FragmentDefinition") {
      var i = s.name.value, r = Tn(s.loc), a = ce.get(i);
      a && !a.has(r) ? at && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : a || ce.set(i, a = /* @__PURE__ */ new Set()), a.add(r), t.has(r) || (t.add(r), n.push(s));
    } else
      n.push(s);
  }), H(H({}, e), { definitions: n });
}
function Nn(e) {
  var t = new Set(e.definitions);
  t.forEach(function(s) {
    s.loc && delete s.loc, Object.keys(s).forEach(function(i) {
      var r = s[i];
      r && typeof r == "object" && t.add(r);
    });
  });
  var n = e.loc;
  return n && (delete n.startToken, delete n.endToken), e;
}
function In(e) {
  var t = ot(e);
  if (!V.has(t)) {
    var n = yn(e, {
      experimentalFragmentVariables: q,
      allowLegacyFragmentVariables: q
    });
    if (!n || n.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    V.set(t, Nn(vn(n)));
  }
  return V.get(t);
}
function w(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  typeof e == "string" && (e = [e]);
  var s = e[0];
  return t.forEach(function(i, r) {
    i && i.kind === "Document" ? s += i.loc.source.body : s += i, s += e[r + 1];
  }), In(s);
}
function _n() {
  V.clear(), ce.clear();
}
function gn() {
  at = !1;
}
function On() {
  q = !0;
}
function An() {
  q = !1;
}
var B = {
  gql: w,
  resetCaches: _n,
  disableFragmentWarnings: gn,
  enableExperimentalFragmentVariables: On,
  disableExperimentalFragmentVariables: An
};
(function(e) {
  e.gql = B.gql, e.resetCaches = B.resetCaches, e.disableFragmentWarnings = B.disableFragmentWarnings, e.enableExperimentalFragmentVariables = B.enableExperimentalFragmentVariables, e.disableExperimentalFragmentVariables = B.disableExperimentalFragmentVariables;
})(w || (w = {}));
w.default = w;
const Sn = w;
function le(e, t) {
  if (t === 0)
    return T.error(
      "Max depth for validation of subscription data is reached, please provide your data in the correct format."
    ), { isGQL: !1, sysId: null, isREST: !1 };
  if (Array.isArray(e)) {
    for (const n of e) {
      const s = le(n, t - 1);
      if (Object.values(s).includes(!0))
        return s;
    }
    return { isGQL: !1, sysId: null, isREST: !1 };
  } else {
    const n = Object.hasOwn(e, "__typename"), s = Object.hasOwn(e, "sys") ? e.sys.id : null, i = Object.hasOwn(e, "fields");
    return n || s || i ? { isGQL: n, sysId: s, isREST: i } : le(Object.values(e), t - 1);
  }
}
function Ln(e, t) {
  const n = { ...e };
  if (n.query) {
    if (typeof n.query == "string")
      try {
        n.query = Sn(n.query);
      } catch {
        T.error(
          "The provided GraphQL query is invalid, please provide it in the correct format.",
          e
        ), n.query = void 0;
      }
    t && (T.warn(
      "The query param is ignored as it can only be used together with GraphQL.",
      e
    ), n.query = void 0);
  }
  return n;
}
function Dn(e) {
  const { isGQL: t, isREST: n, sysId: s } = le(e.data, 10), i = Ln(e, n);
  return s ? !t && !n ? (T.error(
    'For live updates as a basic requirement the provided data must include the "fields" property for REST or "__typename" for Graphql, otherwise the data will be treated as invalid and live updates are not applied.',
    i.data
  ), {
    isValid: !1,
    sysId: s,
    isGQL: t,
    isREST: n,
    config: i
  }) : {
    isGQL: t,
    isREST: n,
    sysId: s,
    isValid: !0,
    config: i
  } : (T.error(
    'Live Updates requires the "sys.id" to be present on the provided data',
    i.data
  ), {
    isValid: !1,
    sysId: s,
    isGQL: t,
    isREST: n,
    config: i
  });
}
var S = /* @__PURE__ */ ((e) => (e.CONNECTED = "CONNECTED", e.DISCONNECTED = "DISCONNECTED", e.ERROR = "ERROR", e.IFRAME_CONNECTED = "IFRAME_CONNECTED", e.TAGGED_FIELD_CLICKED = "TAGGED_FIELD_CLICKED", e.URL_CHANGED = "URL_CHANGED", e.SUBSCRIBED = "SUBSCRIBED", e.ENTRY_UPDATED = "ENTRY_UPDATED", e.ENTRY_SAVED = "ENTRY_SAVED", e.DEBUG_MODE_ENABLED = "DEBUG_MODE_ENABLED", e.ENTITY_NOT_KNOWN = "ENTITY_NOT_KNOWN", e.UNKNOWN_REFERENCE_LOADED = "UNKNOWN_REFERENCE_LOADED", e))(S || {});
function Cn(e, t, n, s) {
  A(
    "TAGGED_FIELD_CLICKED",
    {
      action: "TAGGED_FIELD_CLICKED",
      fieldId: e,
      entryId: t,
      locale: n
    },
    s
  );
}
function Rn(e, t) {
  return e.name === "Asset" ? t.id : t.apiName || t.name;
}
async function ve(e, t, n, s, i, r, a) {
  let o;
  const l = "urn" in t.sys ? t.sys.urn : t.sys.id;
  if (r.has(l))
    T.warn("Detected a circular reference, stopping recursion"), o = r.get(l);
  else {
    const { reference: d } = await Ee({
      entityReferenceMap: s,
      referenceId: t.sys.id,
      ...Ke(t) ? { isAsset: !0 } : void 0,
      locale: n,
      sendMessage: a
    });
    o = d, r.set(l, d);
  }
  if (!o)
    return e;
  const p = pe(o);
  for (const d in o.fields) {
    const u = o.fields[d];
    if (Oe(u) && i < j)
      await lt(
        p,
        o,
        n,
        d,
        s,
        i + 1,
        r,
        a
      );
    else if (Array.isArray(u) && Oe(u[0]) && i < j)
      await ct(
        p,
        o,
        n,
        d,
        s,
        i + 1,
        r,
        a
      );
    else if (ye(u))
      await ut(
        p,
        o,
        d,
        n,
        s,
        i + 1,
        r,
        a
      );
    else {
      if (Ae(u) || Array.isArray(u) && Ae(u[0]))
        return T.warn("Detected a resource link, support is still under development."), p;
      ue({
        dataFromPreviewApp: p.fields,
        updateFromEntryEditor: o,
        name: d
      });
    }
  }
  return p;
}
async function ct(e, t, n, s, i, r, a, o) {
  var l;
  if (!((l = t.fields) != null && l[s])) {
    delete e.fields[s];
    return;
  }
  return e.fields[s] = await Promise.all(
    t.fields[s].map(
      (p, d) => {
        var u;
        return ve(
          (u = e.fields[s]) == null ? void 0 : u[d],
          p,
          n,
          i,
          r + 1,
          a,
          o
        );
      }
    )
  ).then((p) => p.filter(Boolean)), e;
}
async function lt(e, t, n, s, i, r, a, o) {
  var l;
  const p = (l = t == null ? void 0 : t.fields) == null ? void 0 : l[s];
  if (!p) {
    delete e.fields[s];
    return;
  }
  return e.fields[s] = await ve(
    e.fields[s],
    p,
    n,
    i,
    r + 1,
    a,
    o
  ), e;
}
async function dt(e, t, n, s, i, r) {
  var a;
  if (Fe.includes(e.nodeType) && e.data && e.data.target && e.data.target.sys && (e.data.target.sys.linkType === "Entry" || e.data.target.sys.linkType === "Asset")) {
    const o = {
      sys: { id: ((a = e.data.target) == null ? void 0 : a.sys.id) || "", type: "Link", linkType: e.data.target.sys.linkType }
    };
    e.data.target = await ve(
      void 0,
      o,
      n,
      t,
      s + 1,
      i,
      r
    );
  }
  if (e.content)
    for (const o of e.content)
      await dt(
        o,
        t,
        n,
        s + 1,
        i,
        r
      );
}
async function ut(e, t, n, s, i, r, a, o) {
  var l;
  const p = (l = t.fields) == null ? void 0 : l[n];
  if (ye(p)) {
    e.fields[n] = p;
    for (const d of p.content)
      await dt(
        d,
        i,
        s,
        r,
        a,
        o
      );
  }
}
async function bn(e, t, n, s, i, r, a, o) {
  var l;
  if (t.sys.id !== n.sys.id)
    return t;
  for (const p of e.fields) {
    const d = Rn(e, p);
    if (be(p) || p.type === "File")
      ue({
        dataFromPreviewApp: t.fields,
        updateFromEntryEditor: n,
        name: d
      });
    else if (p.type === "Link" && r < j)
      await lt(
        t,
        n,
        s,
        d,
        i,
        r + 1,
        a,
        o
      );
    else if (p.type === "Array" && ((l = p.items) == null ? void 0 : l.type) === "Link" && r < j)
      await ct(
        t,
        n,
        s,
        d,
        i,
        r + 1,
        a,
        o
      );
    else if (p.type === "RichText")
      await ut(
        t,
        n,
        d,
        s,
        i,
        r,
        a,
        o
      );
    else if (p.type === "ResourceLink")
      return T.warn("Detected a resource link, support is still under development."), t;
  }
  return t;
}
class wn {
  constructor({ locale: t, targetOrigin: n }) {
    m(this, "subscriptions", /* @__PURE__ */ new Map()), m(this, "storage"), m(this, "defaultLocale"), m(this, "sendMessage"), this.defaultLocale = t, this.sendMessage = (s, i) => A(s, i, n), this.storage = new vt("live-updates", /* @__PURE__ */ new Map()), window.addEventListener("beforeunload", () => this.clearStorage());
  }
  async mergeEntity({
    contentType: t,
    dataFromPreviewApp: n,
    entityReferenceMap: s,
    locale: i,
    updateFromEntryEditor: r,
    gqlParams: a
  }) {
    return "__typename" in n ? {
      data: await (n.__typename === "Asset" ? Ve(n, r, a) : Pt({
        contentType: t,
        dataFromPreviewApp: n,
        updateFromEntryEditor: r,
        locale: i,
        entityReferenceMap: s,
        gqlParams: a,
        sendMessage: this.sendMessage
      })),
      updated: !0
    } : this.isCfEntity(n) ? {
      data: await bn(
        t,
        n,
        r,
        i,
        s,
        0,
        /* @__PURE__ */ new Map(),
        this.sendMessage
      ),
      updated: !0
    } : { updated: !1, data: n };
  }
  /**
   * Merges the `dataFromPreviewApp` together with the `updateFromEntryEditor`
   * If there is not direct match, it will try to merge things together recursively
   * caches the result if cache is enabled and the entity has a `sys.id`.
   * Caching should not be enabled for every entry,
   * because nested references could be merged differently together and this could solve to data loss.
   */
  async mergeNestedReference({ dataFromPreviewApp: t, ...n }, s) {
    const i = U(t) && t.sys.id, r = s && i;
    let a = !1, o = (r ? this.storage.get(i, n.locale) : void 0) || t;
    if (U(o) && i === n.updateFromEntryEditor.sys.id) {
      const l = await this.mergeEntity({ ...n, dataFromPreviewApp: o });
      o = l.data, a = l.updated;
    } else
      for (const l in o)
        if (o[l] && typeof o[l] == "object") {
          const p = await this.merge(
            { ...n, dataFromPreviewApp: o[l] },
            !1
          );
          o[l] = p.data, a = a || p.updated;
        }
    return r && this.storage.set(i, n.locale, o), { data: o, updated: a };
  }
  async merge({ dataFromPreviewApp: t, ...n }, s = !0) {
    if (Array.isArray(t)) {
      const i = [];
      let r = !1;
      for (const a of t) {
        const o = await this.mergeNestedReference(
          { ...n, dataFromPreviewApp: a },
          s
        );
        i.push(o.data), r = r || o.updated;
      }
      return { data: i, updated: r };
    }
    return this.mergeNestedReference({ ...n, dataFromPreviewApp: t }, s);
  }
  isCfEntity(t) {
    return U(t) && "fields" in t;
  }
  /** Receives the data from the message event handler and calls the subscriptions */
  async receiveMessage(t) {
    if ("action" in t && t.action === "ENTRY_UPDATED" || t.method === S.ENTRY_UPDATED) {
      const { entity: n, contentType: s, entityReferenceMap: i } = t;
      await Promise.all(
        [...this.subscriptions].map(async ([, r]) => {
          try {
            const { updated: a, data: o } = await this.merge({
              // Clone the original data on the top level,
              // to prevent cloning multiple times (time)
              // or modifying the original data (failure potential)
              dataFromPreviewApp: pe(r.data),
              locale: r.locale || this.defaultLocale,
              updateFromEntryEditor: n,
              contentType: s,
              entityReferenceMap: i,
              gqlParams: r.gqlParams
            });
            a && r.callback(o);
          } catch (a) {
            this.sendErrorMessage({
              message: a.message,
              payload: { data: r.data, update: n },
              type: "SUBSCRIPTION_UPDATE_FAILED"
            }), T.error("Failed to apply live update", {
              error: a,
              subscribedData: r.data,
              updateFromEditor: n
            });
          }
        })
      );
    }
  }
  async restore(t, n, s) {
    if (!t)
      return;
    const i = (o) => {
      if (U(o)) {
        const l = this.storage.get(o.sys.id, n);
        if (l)
          return l;
      }
      return o;
    };
    let r;
    if (Array.isArray(t))
      r = t.map(i);
    else {
      const o = i(t);
      o !== t && (r = o);
    }
    const a = this.subscriptions.get(s);
    a && r && a.callback(r);
  }
  clearStorage() {
    this.storage.clear();
  }
  sendErrorMessage(t) {
    this.sendMessage(S.ERROR, t);
  }
  /**
   * Subscribe to data changes from the Editor, returns a function to unsubscribe
   * Will be called once initially for the restored data
   */
  subscribe(t) {
    const { isGQL: n, isValid: s, sysId: i, isREST: r, config: a } = Dn(t);
    if (!s)
      return this.sendErrorMessage({
        message: "Failed to subscribe",
        payload: { isGQL: n, isValid: s, sysId: i, isREST: r },
        type: "SUBSCRIPTION_SETUP_FAILED"
      }), () => {
      };
    const o = _t(), l = a.locale || this.defaultLocale;
    return this.subscriptions.set(o, {
      ...a,
      sysId: i,
      gqlParams: a.query ? xt(a.query) : void 0
    }), setTimeout(() => {
      this.restore(a.data, l, o);
    }, 0), this.sendMessage(S.SUBSCRIBED, {
      action: S.SUBSCRIBED,
      type: n ? "GQL" : "REST",
      locale: l,
      entryId: i,
      event: "edit"
    }), () => {
      this.subscriptions.delete(o);
    };
  }
}
class Mn {
  constructor({ locale: t }) {
    m(this, "locale"), m(this, "subscription"), this.locale = t;
  }
  subscribe(t) {
    return this.subscription && T.log(
      "There is already a subscription for the save event, the existing one will be replaced."
    ), this.subscription = t, () => {
      this.subscription = void 0;
    };
  }
  receiveMessage(t) {
    if (t.method === S.ENTRY_SAVED && this.subscription) {
      const { entity: n } = t;
      Me().includes(n.sys.id) && this.subscription(n);
    }
  }
}
const kn = ["https://app.contentful.com", "https://app.eu.contentful.com"], L = class de {
  // Static method to initialize the LivePreview SDK
  static init(t) {
    if (typeof t != "object" || !(t != null && t.locale))
      throw new Error(
        "Init function have to be called with a locale configuration (for example: `ContentfulLivePreview.init({ locale: 'en-US'})`)"
      );
    const {
      debugMode: n,
      enableInspectorMode: s,
      enableLiveUpdates: i,
      locale: r,
      targetOrigin: a = kn
    } = t;
    if (typeof window < "u") {
      if (!It())
        return this.liveUpdatesEnabled = !1, Promise.resolve(null);
      if (n && Ne(n), typeof s == "boolean" && (this.inspectorModeEnabled = s), typeof i == "boolean" && (this.liveUpdatesEnabled = i), this.locale = r, this.targetOrigin = Array.isArray(a) ? a : [a], this.initialized)
        return T.log("You have already initialized the Live Preview SDK."), Promise.resolve(de.inspectorMode);
      this.inspectorModeEnabled && (this.inspectorMode = new Dt({ locale: r, targetOrigin: this.targetOrigin })), this.liveUpdatesEnabled && (this.liveUpdates = new wn({ locale: r, targetOrigin: this.targetOrigin }), this.saveEvent = new Mn({ locale: r })), window.addEventListener("message", (l) => {
        var p, d, u;
        if (Lt(l)) {
          if (T.log("Received message", l.data), "action" in l.data && l.data.action === "DEBUG_MODE_ENABLED" || l.data.method === S.DEBUG_MODE_ENABLED) {
            Ne(!0);
            return;
          }
          this.inspectorModeEnabled && ((p = this.inspectorMode) == null || p.receiveMessage(l.data)), this.liveUpdatesEnabled && ((d = this.liveUpdates) == null || d.receiveMessage(l.data), (u = this.saveEvent) == null || u.receiveMessage(l.data));
        }
      }), gt(() => {
        A(
          S.URL_CHANGED,
          {
            action: S.URL_CHANGED,
            taggedElementCount: document.querySelectorAll(
              `[${g.ENTRY_ID}]`
            ).length
          },
          this.targetOrigin
        );
      });
      const o = document.querySelectorAll(
        `[${g.ENTRY_ID}]`
      ).length;
      return A(
        S.CONNECTED,
        {
          action: S.CONNECTED,
          connected: !0,
          tags: o,
          taggedElementCount: o,
          locale: this.locale,
          isInspectorEnabled: this.inspectorModeEnabled,
          isLiveUpdatesEnabled: this.liveUpdatesEnabled
        },
        this.targetOrigin
      ), this.initialized = !0, Promise.resolve(de.inspectorMode);
    }
  }
  static subscribe(t, n) {
    if (!this.liveUpdatesEnabled)
      return () => {
      };
    const s = typeof t == "string" ? t : "edit", i = typeof t == "object" ? t : n;
    if (s === "save") {
      if (!this.saveEvent)
        throw new Error(
          "Save event is not initialized, please call `ContentfulLivePreview.init()` first."
        );
      return this.saveEvent.subscribe(i.callback);
    }
    if (!this.liveUpdates)
      throw new Error(
        "Live updates are not initialized, please call `ContentfulLivePreview.init()` first."
      );
    return this.liveUpdates.subscribe(i);
  }
  // Static method to render live preview data-attributes to HTML element output
  static getProps({ fieldId: t, entryId: n, locale: s }) {
    return this.inspectorModeEnabled ? !t || !n ? (T.warn("Missing property for inspector mode", { fieldId: t, entryId: n }), null) : {
      [g.FIELD_ID]: t,
      [g.ENTRY_ID]: n,
      [g.LOCALE]: s
    } : null;
  }
  static toggleInspectorMode() {
    return this.inspectorModeEnabled = !this.inspectorModeEnabled, this.inspectorModeEnabled;
  }
  static toggleLiveUpdatesMode() {
    return this.liveUpdatesEnabled = !this.liveUpdatesEnabled, this.liveUpdatesEnabled;
  }
  static openEntryInEditor({ fieldId: t, entryId: n, locale: s }) {
    (!t || !n) && T.error("Please provide field id and entry id to openEntryInEditor."), Cn(t, n, s || this.locale, this.targetOrigin);
  }
  /**
   * Returns a list of tagged entries on the page
   */
  static getEntryList() {
    return Me();
  }
};
m(L, "initialized", !1), m(L, "inspectorMode", null), m(L, "liveUpdates", null), m(L, "saveEvent", null), m(L, "inspectorModeEnabled", !0), m(L, "liveUpdatesEnabled", !0), m(L, "locale"), m(L, "sendMessage"), m(L, "targetOrigin");
let pt = L;
pt.init({ locale: "en-US", debugMode: !1, enableLiveUpdates: !0, enableInspectorMode: !0 });
pt.subscribe("save", {
  callback: () => {
    window.location.reload();
  }
});
