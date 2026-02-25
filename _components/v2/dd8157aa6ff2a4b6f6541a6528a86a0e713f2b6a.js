const T0 = () => Promise.resolve().then(() => b0),
    {
        Fragment: Uc,
        jsx: g,
        jsxs: D
    } = globalThis.__GLOBALS__.ReactJSXRuntime;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
    throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
const Hc = globalThis.__GLOBALS__.React,
    {
        Children: cs,
        cloneElement: us,
        Component: nr,
        createContext: me,
        createElement: U,
        createFactory: Wc,
        createRef: Kc,
        forwardRef: Et,
        Fragment: ct,
        isValidElement: ds,
        lazy: Yc,
        memo: hs,
        Profiler: Gc,
        PureComponent: Xc,
        startTransition: un,
        StrictMode: qc,
        Suspense: Zc,
        use: Jc,
        useCallback: rt,
        useContext: B,
        useDebugValue: Qc,
        useDeferredValue: eu,
        useEffect: ke,
        useId: rr,
        useImperativeHandle: tu,
        useInsertionEffect: di,
        useLayoutEffect: ir,
        useMemo: fe,
        useReducer: nu,
        useRef: Ne,
        useState: Se,
        useSyncExternalStore: ru,
        useTransition: iu,
        version: au
    } = globalThis.__GLOBALS__.React,
    ou = /* @__PURE__ */ Object.freeze( /* @__PURE__ */ Object.defineProperty({
        __proto__: null,
        Children: cs,
        Component: nr,
        Fragment: ct,
        Profiler: Gc,
        PureComponent: Xc,
        StrictMode: qc,
        Suspense: Zc,
        cloneElement: us,
        createContext: me,
        createElement: U,
        createFactory: Wc,
        createRef: Kc,
        default: Hc,
        forwardRef: Et,
        isValidElement: ds,
        lazy: Yc,
        memo: hs,
        startTransition: un,
        use: Jc,
        useCallback: rt,
        useContext: B,
        useDebugValue: Qc,
        useDeferredValue: eu,
        useEffect: ke,
        useId: rr,
        useImperativeHandle: tu,
        useInsertionEffect: di,
        useLayoutEffect: ir,
        useMemo: fe,
        useReducer: nu,
        useRef: Ne,
        useState: Se,
        useSyncExternalStore: ru,
        useTransition: iu,
        version: au
    }, Symbol.toStringTag, {
        value: "Module"
    }));
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var fs = (e) => {
        throw TypeError(e);
    },
    su = (e, t, n) => t.has(e) || fs("Cannot " + n),
    yr = (e, t, n) => (su(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    lu = (e, t, n) => t.has(e) ? fs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    va = "popstate";

function cu(e = {}) {
    function t(r, i) {
        let {
            pathname: a,
            search: o,
            hash: s
        } = r.location;
        return dn(
            "", {
                pathname: a,
                search: o,
                hash: s
            },
            // state defaults to `null` because `window.history.state` does
            i.state && i.state.usr || null,
            i.state && i.state.key || "default"
        );
    }

    function n(r, i) {
        return typeof i == "string" ? i : qe(i);
    }
    return du(
        t,
        n,
        null,
        e
    );
}

function K(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t);
}

function he(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}

function uu() {
    return Math.random().toString(36).substring(2, 10);
}

function wa(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    };
}

function dn(e, t, n = null, r) {
    return {
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: "",
        ...typeof t == "string" ? ht(t) : t,
        state: n,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: t && t.key || r || uu()
    };
}

function qe({
    pathname: e = "/",
    search: t = "",
    hash: n = ""
}) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}

function ht(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
    }
    return t;
}

function du(e, t, n, r = {}) {
    let {
        window: i = document.defaultView,
        v5Compat: a = !1
    } = r, o = i.history, s = "POP", l = null, c = u();
    c == null && (c = 0, o.replaceState({ ...o.state,
        idx: c
    }, ""));

    function u() {
        return (o.state || {
            idx: null
        }).idx;
    }

    function d() {
        s = "POP";
        let T = u(),
            P = T == null ? null : T - c;
        c = T, l && l({
            action: s,
            location: x.location,
            delta: P
        });
    }

    function h(T, P) {
        s = "PUSH";
        let b = dn(x.location, T, P);
        c = u() + 1;
        let S = wa(b, c),
            k = x.createHref(b);
        try {
            o.pushState(S, "", k);
        } catch (M) {
            if (M instanceof DOMException && M.name === "DataCloneError")
                throw M;
            i.location.assign(k);
        }
        a && l && l({
            action: s,
            location: x.location,
            delta: 1
        });
    }

    function f(T, P) {
        s = "REPLACE";
        let b = dn(x.location, T, P);
        c = u();
        let S = wa(b, c),
            k = x.createHref(b);
        o.replaceState(S, "", k), a && l && l({
            action: s,
            location: x.location,
            delta: 0
        });
    }

    function v(T) {
        return ms(T);
    }
    let x = {
        get action() {
            return s;
        },
        get location() {
            return e(i, o);
        },
        listen(T) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(va, d), l = T, () => {
                i.removeEventListener(va, d), l = null;
            };
        },
        createHref(T) {
            return t(i, T);
        },
        createURL: v,
        encodeLocation(T) {
            let P = v(T);
            return {
                pathname: P.pathname,
                search: P.search,
                hash: P.hash
            };
        },
        push: h,
        replace: f,
        go(T) {
            return o.go(T);
        }
    };
    return x;
}

function ms(e, t = !1) {
    let n = "http://localhost";
    typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href), K(n, "No window.location.(origin|href) available to create URL");
    let r = typeof e == "string" ? e : qe(e);
    return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n);
}
var en, xa = class {
    /**
     * Create a new `RouterContextProvider` instance
     * @param init An optional initial context map to populate the provider with
     */
    constructor(e) {
        if (lu(this, en, /* @__PURE__ */ new Map()), e)
            for (let [t, n] of e)
                this.set(t, n);
    }
    /**
     * Access a value from the context. If no value has been set for the context,
     * it will return the context's `defaultValue` if provided, or throw an error
     * if no `defaultValue` was set.
     * @param context The context to get the value for
     * @returns The value for the context, or the context's `defaultValue` if no
     * value was set
     */
    get(e) {
        if (yr(this, en).has(e))
            return yr(this, en).get(e);
        if (e.defaultValue !== void 0)
            return e.defaultValue;
        throw new Error("No value found for context");
    }
    /**
     * Set a value for the context. If the context already has a value set, this
     * will overwrite it.
     *
     * @param context The context to set the value for
     * @param value The value to set for the context
     * @returns {void}
     */
    set(e, t) {
        yr(this, en).set(e, t);
    }
};
en = /* @__PURE__ */ new WeakMap();
var hu = /* @__PURE__ */ new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);

function fu(e) {
    return hu.has(
        e
    );
}
var mu = /* @__PURE__ */ new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "middleware",
    "children"
]);

function pu(e) {
    return mu.has(
        e
    );
}

function gu(e) {
    return e.index === !0;
}

function hn(e, t, n = [], r = {}, i = !1) {
    return e.map((a, o) => {
        let s = [...n, String(o)],
            l = typeof a.id == "string" ? a.id : s.join("-");
        if (K(
                a.index !== !0 || !a.children,
                "Cannot specify children on an index route"
            ), K(
                i || !r[l],
                `Found a route id collision on id "${l}".  Route id's must be globally unique within Data Router usages`
            ), gu(a)) {
            let c = {
                ...a,
                id: l
            };
            return r[l] = ba(
                c,
                t(c)
            ), c;
        } else {
            let c = {
                ...a,
                id: l,
                children: void 0
            };
            return r[l] = ba(
                c,
                t(c)
            ), a.children && (c.children = hn(
                a.children,
                t,
                s,
                r,
                i
            )), c;
        }
    });
}

function ba(e, t) {
    return Object.assign(e, {
        ...t,
        ...typeof t.lazy == "object" && t.lazy != null ? {
            lazy: {
                ...e.lazy,
                ...t.lazy
            }
        } : {}
    });
}

function ot(e, t, n = "/") {
    return tn(e, t, n, !1);
}

function tn(e, t, n, r) {
    let i = typeof t == "string" ? ht(t) : t,
        a = _e(i.pathname || "/", n);
    if (a == null)
        return null;
    let o = ps(e);
    vu(o);
    let s = null;
    for (let l = 0; s == null && l < o.length; ++l) {
        let c = Du(a);
        s = Eu(
            o[l],
            c,
            r
        );
    }
    return s;
}

function yu(e, t) {
    let {
        route: n,
        pathname: r,
        params: i
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: i,
        data: t[n.id],
        loaderData: t[n.id],
        handle: n.handle
    };
}

function ps(e, t = [], n = [], r = "", i = !1) {
    let a = (o, s, l = i, c) => {
        let u = {
            relativePath: c === void 0 ? o.path || "" : c,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        if (u.relativePath.startsWith("/")) {
            if (!u.relativePath.startsWith(r) && l)
                return;
            K(
                u.relativePath.startsWith(r),
                `Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
            ), u.relativePath = u.relativePath.slice(r.length);
        }
        let d = Ye([r, u.relativePath]),
            h = n.concat(u);
        o.children && o.children.length > 0 && (K(
            // Our types know better, but runtime JS may not!
            // @ts-expect-error
            o.index !== !0,
            `Index routes must not have child routes. Please remove all child routes from route path "${d}".`
        ), ps(
            o.children,
            t,
            h,
            d,
            l
        )), !(o.path == null && !o.index) && t.push({
            path: d,
            score: Ru(d, o.index),
            routesMeta: h
        });
    };
    return e.forEach((o, s) => {
        if (o.path === "" || !o.path ? .includes("?"))
            a(o, s);
        else
            for (let l of gs(o.path))
                a(o, s, !0, l);
    }), t;
}

function gs(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [a, ""] : [a];
    let o = gs(r.join("/")),
        s = [];
    return s.push(
        ...o.map(
            (l) => l === "" ? a : [a, l].join("/")
        )
    ), i && s.push(...o), s.map(
        (l) => e.startsWith("/") && l === "" ? "/" : l
    );
}

function vu(e) {
    e.sort(
        (t, n) => t.score !== n.score ? n.score - t.score : Cu(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex)
        )
    );
}
var wu = /^:[\w-]+$/,
    xu = 3,
    bu = 2,
    Tu = 1,
    Pu = 10,
    Su = -2,
    Ta = (e) => e === "*";

function Ru(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Ta) && (r += Su), t && (r += bu), n.filter((i) => !Ta(i)).reduce(
        (i, a) => i + (wu.test(a) ? xu : a === "" ? Tu : Pu),
        r
    );
}

function Cu(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
        // If two routes are siblings, we should try to match the earlier sibling
        // first. This allows people to have fine-grained control over the matching
        // behavior by simply putting routes with identical paths in the order they
        // want them tried.
        e[e.length - 1] - t[t.length - 1]
    ) : (
        // Otherwise, it doesn't really make sense to rank non-siblings by index,
        // so they sort equally.
        0
    );
}

function Eu(e, t, n = !1) {
    let {
        routesMeta: r
    } = e, i = {}, a = "/", o = [];
    for (let s = 0; s < r.length; ++s) {
        let l = r[s],
            c = s === r.length - 1,
            u = a === "/" ? t : t.slice(a.length) || "/",
            d = qn({
                    path: l.relativePath,
                    caseSensitive: l.caseSensitive,
                    end: c
                },
                u
            ),
            h = l.route;
        if (!d && c && n && !r[r.length - 1].route.index && (d = qn({
                    path: l.relativePath,
                    caseSensitive: l.caseSensitive,
                    end: !1
                },
                u
            )), !d)
            return null;
        Object.assign(i, d.params), o.push({
            // TODO: Can this as be avoided?
            params: i,
            pathname: Ye([a, d.pathname]),
            pathnameBase: ku(
                Ye([a, d.pathnameBase])
            ),
            route: h
        }), d.pathnameBase !== "/" && (a = Ye([a, d.pathnameBase]));
    }
    return o;
}

function qn(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = Mu(
        e.path,
        e.caseSensitive,
        e.end
    ), i = t.match(n);
    if (!i) return null;
    let a = i[0],
        o = a.replace(/(.)\/+$/, "$1"),
        s = i.slice(1);
    return {
        params: r.reduce(
            (c, {
                paramName: u,
                isOptional: d
            }, h) => {
                if (u === "*") {
                    let v = s[h] || "";
                    o = a.slice(0, a.length - v.length).replace(/(.)\/+$/, "$1");
                }
                const f = s[h];
                return d && !f ? c[u] = void 0 : c[u] = (f || "").replace(/%2F/g, "/"), c;
            }, {}
        ),
        pathname: a,
        pathnameBase: o,
        pattern: e
    };
}

function Mu(e, t = !1, n = !0) {
    he(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
    );
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
            /\/:([\w-]+)(\?)?/g,
            (o, s, l) => (r.push({
                paramName: s,
                isOptional: l != null
            }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
        ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}

function Du(e) {
    try {
        return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
    } catch (t) {
        return he(!1,
            `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
        ), e;
    }
}

function _e(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}

function Lu({
    basename: e,
    pathname: t
}) {
    return t === "/" ? e : Ye([e, t]);
}
var ys = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    hi = (e) => ys.test(e);

function Au(e, t = "/") {
    let {
        pathname: n,
        search: r = "",
        hash: i = ""
    } = typeof e == "string" ? ht(e) : e, a;
    return n ? (n = n.replace(/\/\/+/g, "/"), n.startsWith("/") ? a = Pa(n.substring(1), "/") : a = Pa(n, t)) : a = t, {
        pathname: a,
        search: Nu(r),
        hash: Vu(i)
    };
}

function Pa(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach((i) => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }), n.length > 1 ? n.join("/") : "/";
}

function vr(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}

function vs(e) {
    return e.filter(
        (t, n) => n === 0 || t.route.path && t.route.path.length > 0
    );
}

function fi(e) {
    let t = vs(e);
    return t.map(
        (n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase
    );
}

function mi(e, t, n, r = !1) {
    let i;
    typeof e == "string" ? i = ht(e) : (i = { ...e
    }, K(!i.pathname || !i.pathname.includes("?"),
        vr("?", "pathname", "search", i)
    ), K(!i.pathname || !i.pathname.includes("#"),
        vr("#", "pathname", "hash", i)
    ), K(!i.search || !i.search.includes("#"),
        vr("#", "search", "hash", i)
    ));
    let a = e === "" || i.pathname === "",
        o = a ? "/" : i.pathname,
        s;
    if (o == null)
        s = n;
    else {
        let d = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === "..";)
                h.shift(), d -= 1;
            i.pathname = h.join("/");
        }
        s = d >= 0 ? t[d] : "/";
    }
    let l = Au(i, s),
        c = o && o !== "/" && o.endsWith("/"),
        u = (a || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
var Ye = (e) => e.join("/").replace(/\/\/+/g, "/"),
    ku = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Nu = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    Vu = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e,
    xn = class {
        constructor(e, t, n, r = !1) {
            this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
        }
    };

function fn(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}

function bn(e) {
    return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var ws = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";

function xs(e, t) {
    let n = e;
    if (typeof n != "string" || !ys.test(n))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: n
        };
    let r = n,
        i = !1;
    if (ws)
        try {
            let a = new URL(window.location.href),
                o = n.startsWith("//") ? new URL(a.protocol + n) : new URL(n),
                s = _e(o.pathname, t);
            o.origin === a.origin && s != null ? n = s + o.search + o.hash : i = !0;
        } catch {
            he(!1,
                `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
            );
        }
    return {
        absoluteURL: r,
        isExternal: i,
        to: n
    };
}
var lt = Symbol("Uninstrumented");

function Iu(e, t) {
    let n = {
        lazy: [],
        "lazy.loader": [],
        "lazy.action": [],
        "lazy.middleware": [],
        middleware: [],
        loader: [],
        action: []
    };
    e.forEach(
        (i) => i({
            id: t.id,
            index: t.index,
            path: t.path,
            instrument(a) {
                let o = Object.keys(n);
                for (let s of o)
                    a[s] && n[s].push(a[s]);
            }
        })
    );
    let r = {};
    if (typeof t.lazy == "function" && n.lazy.length > 0) {
        let i = Nt(n.lazy, t.lazy, () => {});
        i && (r.lazy = i);
    }
    if (typeof t.lazy == "object") {
        let i = t.lazy;
        ["middleware", "loader", "action"].forEach((a) => {
            let o = i[a],
                s = n[`lazy.${a}`];
            if (typeof o == "function" && s.length > 0) {
                let l = Nt(s, o, () => {});
                l && (r.lazy = Object.assign(r.lazy || {}, {
                    [a]: l
                }));
            }
        });
    }
    return ["loader", "action"].forEach((i) => {
        let a = t[i];
        if (typeof a == "function" && n[i].length > 0) {
            let o = a[lt] ? ? a,
                s = Nt(
                    n[i],
                    o,
                    (...l) => Sa(l[0])
                );
            s && (i === "loader" && o.hydrate === !0 && (s.hydrate = !0), s[lt] = o, r[i] = s);
        }
    }), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((i) => {
        let a = i[lt] ? ? i,
            o = Nt(
                n.middleware,
                a,
                (...s) => Sa(s[0])
            );
        return o ? (o[lt] = a, o) : i;
    })), r;
}

function Fu(e, t) {
    let n = {
        navigate: [],
        fetch: []
    };
    if (t.forEach(
            (r) => r({
                instrument(i) {
                    let a = Object.keys(i);
                    for (let o of a)
                        i[o] && n[o].push(i[o]);
                }
            })
        ), n.navigate.length > 0) {
        let r = e.navigate[lt] ? ? e.navigate,
            i = Nt(
                n.navigate,
                r,
                (...a) => {
                    let [o, s] = a;
                    return {
                        to: typeof o == "number" || typeof o == "string" ? o : o ? qe(o) : ".",
                        ...Ra(e, s ? ? {})
                    };
                }
            );
        i && (i[lt] = r, e.navigate = i);
    }
    if (n.fetch.length > 0) {
        let r = e.fetch[lt] ? ? e.fetch,
            i = Nt(n.fetch, r, (...a) => {
                let [o, , s, l] = a;
                return {
                    href: s ? ? ".",
                    fetcherKey: o,
                    ...Ra(e, l ? ? {})
                };
            });
        i && (i[lt] = r, e.fetch = i);
    }
    return e;
}

function Nt(e, t, n) {
    return e.length === 0 ? null : async (...r) => {
        let i = await bs(
            e,
            n(...r),
            () => t(...r),
            e.length - 1
        );
        if (i.type === "error")
            throw i.value;
        return i.value;
    };
}
async function bs(e, t, n, r) {
    let i = e[r],
        a;
    if (i) {
        let o, s = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = bs(e, t, n, r - 1), a = await o, K(a, "Expected a result"), a.type === "error" && a.value instanceof Error ? {
            status: "error",
            error: a.value
        } : {
            status: "success",
            error: void 0
        });
        try {
            await i(s, t);
        } catch (l) {
            console.error("An instrumentation function threw an error:", l);
        }
        o || await s(), await o;
    } else
        try {
            a = {
                type: "success",
                value: await n()
            };
        } catch (o) {
            a = {
                type: "error",
                value: o
            };
        }
    return a || {
        type: "error",
        value: new Error("No result assigned in instrumentation chain.")
    };
}

function Sa(e) {
    let {
        request: t,
        context: n,
        params: r,
        unstable_pattern: i
    } = e;
    return {
        request: Ou(t),
        params: { ...r
        },
        unstable_pattern: i,
        context: ju(n)
    };
}

function Ra(e, t) {
    return {
        currentUrl: qe(e.state.location),
        ..."formMethod" in t ? {
            formMethod: t.formMethod
        } : {},
        ..."formEncType" in t ? {
            formEncType: t.formEncType
        } : {},
        ..."formData" in t ? {
            formData: t.formData
        } : {},
        ..."body" in t ? {
            body: t.body
        } : {}
    };
}

function Ou(e) {
    return {
        method: e.method,
        url: e.url,
        headers: {
            get: (...t) => e.headers.get(...t)
        }
    };
}

function ju(e) {
    if (zu(e)) {
        let t = { ...e
        };
        return Object.freeze(t), t;
    } else
        return {
            get: (t) => e.get(t)
        };
}
var Bu = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function zu(e) {
    if (e === null || typeof e != "object")
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Bu;
}
var Ts = [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ],
    $u = new Set(
        Ts
    ),
    _u = [
        "GET",
        ...Ts
    ],
    Uu = new Set(_u),
    Ps = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]),
    Hu = /* @__PURE__ */ new Set([307, 308]),
    wr = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    Wu = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    qt = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    Ku = (e) => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    }),
    Ss = "remix-router-transitions",
    Rs = Symbol("ResetLoaderData");

function Yu(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
    K(
        e.routes.length > 0,
        "You must provide a non-empty routes array to createRouter"
    );
    let r = e.hydrationRouteProperties || [],
        i = e.mapRouteProperties || Ku,
        a = i;
    if (e.unstable_instrumentations) {
        let m = e.unstable_instrumentations;
        a = (p) => ({
            ...i(p),
            ...Iu(
                m.map((w) => w.route).filter(Boolean),
                p
            )
        });
    }
    let o = {},
        s = hn(
            e.routes,
            a,
            void 0,
            o
        ),
        l, c = e.basename || "/";
    c.startsWith("/") || (c = `/${c}`);
    let u = e.dataStrategy || Ju,
        d = {
            ...e.future
        },
        h = null,
        f = /* @__PURE__ */ new Set(),
        v = null,
        x = null,
        T = null,
        P = e.hydrationData != null,
        b = ot(s, e.history.location, c),
        S = !1,
        k = null,
        M;
    if (b == null && !e.patchRoutesOnNavigation) {
        let m = Be(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: p,
                route: w
            } = Fn(s);
        M = !0, b = p, k = {
            [w.id]: m
        };
    } else if (b && !e.hydrationData && An(
            b,
            s,
            e.history.location.pathname
        ).active && (b = null), b)
        if (b.some((m) => m.route.lazy))
            M = !1;
        else if (!b.some((m) => pi(m.route)))
        M = !0;
    else {
        let m = e.hydrationData ? e.hydrationData.loaderData : null,
            p = e.hydrationData ? e.hydrationData.errors : null;
        if (p) {
            let w = b.findIndex(
                (R) => p[R.route.id] !== void 0
            );
            M = b.slice(0, w + 1).every(
                (R) => !Br(R.route, m, p)
            );
        } else
            M = b.every(
                (w) => !Br(w.route, m, p)
            );
    } else {
        M = !1, b = [];
        let m = An(
            null,
            s,
            e.history.location.pathname
        );
        m.active && m.matches && (S = !0, b = m.matches);
    }
    let N, y = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: b,
            initialized: M,
            navigation: wr,
            // Don't restore on initial updateState() if we were SSR'd
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || k,
            fetchers: /* @__PURE__ */ new Map(),
            blockers: /* @__PURE__ */ new Map()
        },
        C = "POP",
        z = null,
        W = !1,
        Y, le = !1,
        Me = /* @__PURE__ */ new Map(),
        ae = null,
        Z = !1,
        te = !1,
        J = /* @__PURE__ */ new Set(),
        H = /* @__PURE__ */ new Map(),
        ee = 0,
        ce = -1,
        De = /* @__PURE__ */ new Map(),
        Ce = /* @__PURE__ */ new Set(),
        Ve = /* @__PURE__ */ new Map(),
        Ie = /* @__PURE__ */ new Map(),
        Le = /* @__PURE__ */ new Set(),
        mt = /* @__PURE__ */ new Map(),
        Dn, Kt = null;

    function Rc() {
        if (h = e.history.listen(
                ({
                    action: m,
                    location: p,
                    delta: w
                }) => {
                    if (Dn) {
                        Dn(), Dn = void 0;
                        return;
                    }
                    he(
                        mt.size === 0 || w != null,
                        "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                    );
                    let R = fa({
                        currentLocation: y.location,
                        nextLocation: p,
                        historyAction: m
                    });
                    if (R && w != null) {
                        let E = new Promise((I) => {
                            Dn = I;
                        });
                        e.history.go(w * -1), Ln(R, {
                            state: "blocked",
                            location: p,
                            proceed() {
                                Ln(R, {
                                    state: "proceeding",
                                    proceed: void 0,
                                    reset: void 0,
                                    location: p
                                }), E.then(() => e.history.go(w));
                            },
                            reset() {
                                let I = new Map(y.blockers);
                                I.set(R, qt), ve({
                                    blockers: I
                                });
                            }
                        }), z ? .resolve(), z = null;
                        return;
                    }
                    return pt(m, p);
                }
            ), n) {
            gd(t, Me);
            let m = () => yd(t, Me);
            t.addEventListener("pagehide", m), ae = () => t.removeEventListener("pagehide", m);
        }
        return y.initialized || pt("POP", y.location, {
            initialHydration: !0
        }), N;
    }

    function Cc() {
        h && h(), ae && ae(), f.clear(), Y && Y.abort(), y.fetchers.forEach((m, p) => mr(p)), y.blockers.forEach((m, p) => ha(p));
    }

    function Ec(m) {
        return f.add(m), () => f.delete(m);
    }

    function ve(m, p = {}) {
        m.matches && (m.matches = m.matches.map((E) => {
            let I = o[E.route.id],
                L = E.route;
            return L.element !== I.element || L.errorElement !== I.errorElement || L.hydrateFallbackElement !== I.hydrateFallbackElement ? {
                ...E,
                route: I
            } : E;
        })), y = {
            ...y,
            ...m
        };
        let w = [],
            R = [];
        y.fetchers.forEach((E, I) => {
            E.state === "idle" && (Le.has(I) ? w.push(I) : R.push(I));
        }), Le.forEach((E) => {
            !y.fetchers.has(E) && !H.has(E) && w.push(E);
        }), [...f].forEach(
            (E) => E(y, {
                deletedFetchers: w,
                newErrors: m.errors ? ? null,
                viewTransitionOpts: p.viewTransitionOpts,
                flushSync: p.flushSync === !0
            })
        ), w.forEach((E) => mr(E)), R.forEach((E) => y.fetchers.delete(E));
    }

    function Lt(m, p, {
        flushSync: w
    } = {}) {
        let R = y.actionData != null && y.navigation.formMethod != null && be(y.navigation.formMethod) && y.navigation.state === "loading" && m.state ? ._isRedirect !== !0,
            E;
        p.actionData ? Object.keys(p.actionData).length > 0 ? E = p.actionData : E = null : R ? E = y.actionData : E = null;
        let I = p.loaderData ? Ia(
                y.loaderData,
                p.loaderData,
                p.matches || [],
                p.errors
            ) : y.loaderData,
            L = y.blockers;
        L.size > 0 && (L = new Map(L), L.forEach(($, O) => L.set(O, qt)));
        let V = Z ? !1 : pa(m, p.matches || y.matches),
            F = W === !0 || y.navigation.formMethod != null && be(y.navigation.formMethod) && m.state ? ._isRedirect !== !0;
        l && (s = l, l = void 0), Z || C === "POP" || (C === "PUSH" ? e.history.push(m, m.state) : C === "REPLACE" && e.history.replace(m, m.state));
        let j;
        if (C === "POP") {
            let $ = Me.get(y.location.pathname);
            $ && $.has(m.pathname) ? j = {
                currentLocation: y.location,
                nextLocation: m
            } : Me.has(m.pathname) && (j = {
                currentLocation: m,
                nextLocation: y.location
            });
        } else if (le) {
            let $ = Me.get(y.location.pathname);
            $ ? $.add(m.pathname) : ($ = /* @__PURE__ */ new Set([m.pathname]), Me.set(y.location.pathname, $)), j = {
                currentLocation: y.location,
                nextLocation: m
            };
        }
        ve({
            ...p,
            // matches, errors, fetchers go through as-is
            actionData: E,
            loaderData: I,
            historyAction: C,
            location: m,
            initialized: !0,
            navigation: wr,
            revalidation: "idle",
            restoreScrollPosition: V,
            preventScrollReset: F,
            blockers: L
        }, {
            viewTransitionOpts: j,
            flushSync: w === !0
        }), C = "POP", W = !1, le = !1, Z = !1, te = !1, z ? .resolve(), z = null, Kt ? .resolve(), Kt = null;
    }
    async function aa(m, p) {
        if (z ? .resolve(), z = null, typeof m == "number") {
            z || (z = Ba());
            let q = z.promise;
            return e.history.go(m), q;
        }
        let w = jr(
                y.location,
                y.matches,
                c,
                m,
                p ? .fromRouteId,
                p ? .relative
            ),
            {
                path: R,
                submission: E,
                error: I
            } = Ca(!1,
                w,
                p
            ),
            L = y.location,
            V = dn(y.location, R, p && p.state);
        V = {
            ...V,
            ...e.history.encodeLocation(V)
        };
        let F = p && p.replace != null ? p.replace : void 0,
            j = "PUSH";
        F === !0 ? j = "REPLACE" : F === !1 || E != null && be(E.formMethod) && E.formAction === y.location.pathname + y.location.search && (j = "REPLACE");
        let $ = p && "preventScrollReset" in p ? p.preventScrollReset === !0 : void 0,
            O = (p && p.flushSync) === !0,
            X = fa({
                currentLocation: L,
                nextLocation: V,
                historyAction: j
            });
        if (X) {
            Ln(X, {
                state: "blocked",
                location: V,
                proceed() {
                    Ln(X, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: V
                    }), aa(m, p);
                },
                reset() {
                    let q = new Map(y.blockers);
                    q.set(X, qt), ve({
                        blockers: q
                    });
                }
            });
            return;
        }
        await pt(j, V, {
            submission: E,
            // Send through the formData serialization error if we have one so we can
            // render at the right error boundary after we match routes
            pendingError: I,
            preventScrollReset: $,
            replace: p && p.replace,
            enableViewTransition: p && p.viewTransition,
            flushSync: O,
            callSiteDefaultShouldRevalidate: p && p.unstable_defaultShouldRevalidate
        });
    }

    function Mc() {
        Kt || (Kt = Ba()), fr(), ve({
            revalidation: "loading"
        });
        let m = Kt.promise;
        return y.navigation.state === "submitting" ? m : y.navigation.state === "idle" ? (pt(y.historyAction, y.location, {
            startUninterruptedRevalidation: !0
        }), m) : (pt(
            C || y.historyAction,
            y.navigation.location, {
                overrideNavigation: y.navigation,
                // Proxy through any rending view transition
                enableViewTransition: le === !0
            }
        ), m);
    }
    async function pt(m, p, w) {
        Y && Y.abort(), Y = null, C = m, Z = (w && w.startUninterruptedRevalidation) === !0, Bc(y.location, y.matches), W = (w && w.preventScrollReset) === !0, le = (w && w.enableViewTransition) === !0;
        let R = l || s,
            E = w && w.overrideNavigation,
            I = w ? .initialHydration && y.matches && y.matches.length > 0 && !S ? (
                // `matchRoutes()` has already been called if we're in here via `router.initialize()`
                y.matches
            ) : ot(R, p, c),
            L = (w && w.flushSync) === !0;
        if (I && y.initialized && !te && od(y.location, p) && !(w && w.submission && be(w.submission.formMethod))) {
            Lt(p, {
                matches: I
            }, {
                flushSync: L
            });
            return;
        }
        let V = An(I, R, p.pathname);
        if (V.active && V.matches && (I = V.matches), !I) {
            let {
                error: pe,
                notFoundMatches: Pe,
                route: Q
            } = pr(
                p.pathname
            );
            Lt(
                p, {
                    matches: Pe,
                    loaderData: {},
                    errors: {
                        [Q.id]: pe
                    }
                }, {
                    flushSync: L
                }
            );
            return;
        }
        Y = new AbortController();
        let F = kt(
                e.history,
                p,
                Y.signal,
                w && w.submission
            ),
            j = e.getContext ? await e.getContext() : new xa(),
            $;
        if (w && w.pendingError)
            $ = [
                st(I).route.id,
                {
                    type: "error",
                    error: w.pendingError
                }
            ];
        else if (w && w.submission && be(w.submission.formMethod)) {
            let pe = await Dc(
                F,
                p,
                w.submission,
                I,
                j,
                V.active,
                w && w.initialHydration === !0, {
                    replace: w.replace,
                    flushSync: L
                }
            );
            if (pe.shortCircuited)
                return;
            if (pe.pendingActionResult) {
                let [Pe, Q] = pe.pendingActionResult;
                if (Ae(Q) && fn(Q.error) && Q.error.status === 404) {
                    Y = null, Lt(p, {
                        matches: pe.matches,
                        loaderData: {},
                        errors: {
                            [Pe]: Q.error
                        }
                    });
                    return;
                }
            }
            I = pe.matches || I, $ = pe.pendingActionResult, E = xr(p, w.submission), L = !1, V.active = !1, F = kt(
                e.history,
                F.url,
                F.signal
            );
        }
        let {
            shortCircuited: O,
            matches: X,
            loaderData: q,
            errors: ge
        } = await Lc(
            F,
            p,
            I,
            j,
            V.active,
            E,
            w && w.submission,
            w && w.fetcherSubmission,
            w && w.replace,
            w && w.initialHydration === !0,
            L,
            $,
            w && w.callSiteDefaultShouldRevalidate
        );
        O || (Y = null, Lt(p, {
            matches: X || I,
            ...Fa($),
            loaderData: q,
            errors: ge
        }));
    }
    async function Dc(m, p, w, R, E, I, L, V = {}) {
        fr();
        let F = md(p, w);
        if (ve({
                navigation: F
            }, {
                flushSync: V.flushSync === !0
            }), I) {
            let O = await kn(
                R,
                p.pathname,
                m.signal
            );
            if (O.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (O.type === "error") {
                if (O.partialMatches.length === 0) {
                    let {
                        matches: q,
                        route: ge
                    } = Fn(s);
                    return {
                        matches: q,
                        pendingActionResult: [
                            ge.id,
                            {
                                type: "error",
                                error: O.error
                            }
                        ]
                    };
                }
                let X = st(O.partialMatches).route.id;
                return {
                    matches: O.partialMatches,
                    pendingActionResult: [
                        X,
                        {
                            type: "error",
                            error: O.error
                        }
                    ]
                };
            } else if (O.matches)
                R = O.matches;
            else {
                let {
                    notFoundMatches: X,
                    error: q,
                    route: ge
                } = pr(
                    p.pathname
                );
                return {
                    matches: X,
                    pendingActionResult: [
                        ge.id,
                        {
                            type: "error",
                            error: q
                        }
                    ]
                };
            }
        }
        let j, $ = Un(R, p);
        if (!$.route.action && !$.route.lazy)
            j = {
                type: "error",
                error: Be(405, {
                    method: m.method,
                    pathname: p.pathname,
                    routeId: $.route.id
                })
            };
        else {
            let O = Bt(
                    a,
                    o,
                    m,
                    R,
                    $,
                    L ? [] : r,
                    E
                ),
                X = await Yt(
                    m,
                    O,
                    E,
                    null
                );
            if (j = X[$.route.id], !j) {
                for (let q of R)
                    if (X[q.route.id]) {
                        j = X[q.route.id];
                        break;
                    }
            }
            if (m.signal.aborted)
                return {
                    shortCircuited: !0
                };
        }
        if (Tt(j)) {
            let O;
            return V && V.replace != null ? O = V.replace : O = ka(
                j.response.headers.get("Location"),
                new URL(m.url),
                c,
                e.history
            ) === y.location.pathname + y.location.search, await gt(m, j, !0, {
                submission: w,
                replace: O
            }), {
                shortCircuited: !0
            };
        }
        if (Ae(j)) {
            let O = st(R, $.route.id);
            return (V && V.replace) !== !0 && (C = "PUSH"), {
                matches: R,
                pendingActionResult: [
                    O.route.id,
                    j,
                    $.route.id
                ]
            };
        }
        return {
            matches: R,
            pendingActionResult: [$.route.id, j]
        };
    }
    async function Lc(m, p, w, R, E, I, L, V, F, j, $, O, X) {
        let q = I || xr(p, L),
            ge = L || V || ja(q),
            pe = !Z && !j;
        if (E) {
            if (pe) {
                let we = oa(O);
                ve({
                    navigation: q,
                    ...we !== void 0 ? {
                        actionData: we
                    } : {}
                }, {
                    flushSync: $
                });
            }
            let G = await kn(
                w,
                p.pathname,
                m.signal
            );
            if (G.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (G.type === "error") {
                if (G.partialMatches.length === 0) {
                    let {
                        matches: At,
                        route: wt
                    } = Fn(s);
                    return {
                        matches: At,
                        loaderData: {},
                        errors: {
                            [wt.id]: G.error
                        }
                    };
                }
                let we = st(G.partialMatches).route.id;
                return {
                    matches: G.partialMatches,
                    loaderData: {},
                    errors: {
                        [we]: G.error
                    }
                };
            } else if (G.matches)
                w = G.matches;
            else {
                let {
                    error: we,
                    notFoundMatches: At,
                    route: wt
                } = pr(
                    p.pathname
                );
                return {
                    matches: At,
                    loaderData: {},
                    errors: {
                        [wt.id]: we
                    }
                };
            }
        }
        let Pe = l || s,
            {
                dsMatches: Q,
                revalidatingFetchers: Fe
            } = Ea(
                m,
                R,
                a,
                o,
                e.history,
                y,
                w,
                ge,
                p,
                j ? [] : r,
                j === !0,
                te,
                J,
                Le,
                Ve,
                Ce,
                Pe,
                c,
                e.patchRoutesOnNavigation != null,
                O,
                X
            );
        if (ce = ++ee, !e.dataStrategy && !Q.some((G) => G.shouldLoad) && !Q.some(
                (G) => G.route.middleware && G.route.middleware.length > 0
            ) && Fe.length === 0) {
            let G = ua();
            return Lt(
                p, {
                    matches: w,
                    loaderData: {},
                    // Commit pending error if we're short circuiting
                    errors: O && Ae(O[1]) ? {
                        [O[0]]: O[1].error
                    } : null,
                    ...Fa(O),
                    ...G ? {
                        fetchers: new Map(y.fetchers)
                    } : {}
                }, {
                    flushSync: $
                }
            ), {
                shortCircuited: !0
            };
        }
        if (pe) {
            let G = {};
            if (!E) {
                G.navigation = q;
                let we = oa(O);
                we !== void 0 && (G.actionData = we);
            }
            Fe.length > 0 && (G.fetchers = Ac(Fe)), ve(G, {
                flushSync: $
            });
        }
        Fe.forEach((G) => {
            Qe(G.key), G.controller && H.set(G.key, G.controller);
        });
        let yt = () => Fe.forEach((G) => Qe(G.key));
        Y && Y.signal.addEventListener(
            "abort",
            yt
        );
        let {
            loaderResults: Gt,
            fetcherResults: it
        } = await sa(
            Q,
            Fe,
            m,
            R
        );
        if (m.signal.aborted)
            return {
                shortCircuited: !0
            };
        Y && Y.signal.removeEventListener(
            "abort",
            yt
        ), Fe.forEach((G) => H.delete(G.key));
        let Ke = On(Gt);
        if (Ke)
            return await gt(m, Ke.result, !0, {
                replace: F
            }), {
                shortCircuited: !0
            };
        if (Ke = On(it), Ke)
            return Ce.add(Ke.key), await gt(m, Ke.result, !0, {
                replace: F
            }), {
                shortCircuited: !0
            };
        let {
            loaderData: gr,
            errors: Xt
        } = Va(
            y,
            w,
            Gt,
            O,
            Fe,
            it
        );
        j && y.errors && (Xt = { ...y.errors,
            ...Xt
        });
        let vt = ua(),
            Nn = da(ce),
            Vn = vt || Nn || Fe.length > 0;
        return {
            matches: w,
            loaderData: gr,
            errors: Xt,
            ...Vn ? {
                fetchers: new Map(y.fetchers)
            } : {}
        };
    }

    function oa(m) {
        if (m && !Ae(m[1]))
            return {
                [m[0]]: m[1].data
            };
        if (y.actionData)
            return Object.keys(y.actionData).length === 0 ? null : y.actionData;
    }

    function Ac(m) {
        return m.forEach((p) => {
            let w = y.fetchers.get(p.key),
                R = Zt(
                    void 0,
                    w ? w.data : void 0
                );
            y.fetchers.set(p.key, R);
        }), new Map(y.fetchers);
    }
    async function kc(m, p, w, R) {
        Qe(m);
        let E = (R && R.flushSync) === !0,
            I = l || s,
            L = jr(
                y.location,
                y.matches,
                c,
                w,
                p,
                R ? .relative
            ),
            V = ot(I, L, c),
            F = An(V, I, L);
        if (F.active && F.matches && (V = F.matches), !V) {
            Je(
                m,
                p,
                Be(404, {
                    pathname: L
                }), {
                    flushSync: E
                }
            );
            return;
        }
        let {
            path: j,
            submission: $,
            error: O
        } = Ca(!0,
            L,
            R
        );
        if (O) {
            Je(m, p, O, {
                flushSync: E
            });
            return;
        }
        let X = e.getContext ? await e.getContext() : new xa(),
            q = (R && R.preventScrollReset) === !0;
        if ($ && be($.formMethod)) {
            await Nc(
                m,
                p,
                j,
                V,
                X,
                F.active,
                E,
                q,
                $,
                R && R.unstable_defaultShouldRevalidate
            );
            return;
        }
        Ve.set(m, {
            routeId: p,
            path: j
        }), await Vc(
            m,
            p,
            j,
            V,
            X,
            F.active,
            E,
            q,
            $
        );
    }
    async function Nc(m, p, w, R, E, I, L, V, F, j) {
        fr(), Ve.delete(m);
        let $ = y.fetchers.get(m);
        Ze(m, pd(F, $), {
            flushSync: L
        });
        let O = new AbortController(),
            X = kt(
                e.history,
                w,
                O.signal,
                F
            );
        if (I) {
            let oe = await kn(
                R,
                new URL(X.url).pathname,
                X.signal,
                m
            );
            if (oe.type === "aborted")
                return;
            if (oe.type === "error") {
                Je(m, p, oe.error, {
                    flushSync: L
                });
                return;
            } else if (oe.matches)
                R = oe.matches;
            else {
                Je(
                    m,
                    p,
                    Be(404, {
                        pathname: w
                    }), {
                        flushSync: L
                    }
                );
                return;
            }
        }
        let q = Un(R, w);
        if (!q.route.action && !q.route.lazy) {
            let oe = Be(405, {
                method: F.formMethod,
                pathname: w,
                routeId: p
            });
            Je(m, p, oe, {
                flushSync: L
            });
            return;
        }
        H.set(m, O);
        let ge = ee,
            pe = Bt(
                a,
                o,
                X,
                R,
                q,
                r,
                E
            ),
            Pe = await Yt(
                X,
                pe,
                E,
                m
            ),
            Q = Pe[q.route.id];
        if (!Q) {
            for (let oe of pe)
                if (Pe[oe.route.id]) {
                    Q = Pe[oe.route.id];
                    break;
                }
        }
        if (X.signal.aborted) {
            H.get(m) === O && H.delete(m);
            return;
        }
        if (Le.has(m)) {
            if (Tt(Q) || Ae(Q)) {
                Ze(m, et(void 0));
                return;
            }
        } else {
            if (Tt(Q))
                if (H.delete(m), ce > ge) {
                    Ze(m, et(void 0));
                    return;
                } else
                    return Ce.add(m), Ze(m, Zt(F)), gt(X, Q, !1, {
                        fetcherSubmission: F,
                        preventScrollReset: V
                    });
            if (Ae(Q)) {
                Je(m, p, Q.error);
                return;
            }
        }
        let Fe = y.navigation.location || y.location,
            yt = kt(
                e.history,
                Fe,
                O.signal
            ),
            Gt = l || s,
            it = y.navigation.state !== "idle" ? ot(Gt, y.navigation.location, c) : y.matches;
        K(it, "Didn't find any matches after fetcher action");
        let Ke = ++ee;
        De.set(m, Ke);
        let gr = Zt(F, Q.data);
        y.fetchers.set(m, gr);
        let {
            dsMatches: Xt,
            revalidatingFetchers: vt
        } = Ea(
            yt,
            E,
            a,
            o,
            e.history,
            y,
            it,
            F,
            Fe,
            r, !1,
            te,
            J,
            Le,
            Ve,
            Ce,
            Gt,
            c,
            e.patchRoutesOnNavigation != null, [q.route.id, Q],
            j
        );
        vt.filter((oe) => oe.key !== m).forEach((oe) => {
            let In = oe.key,
                ya = y.fetchers.get(In),
                _c = Zt(
                    void 0,
                    ya ? ya.data : void 0
                );
            y.fetchers.set(In, _c), Qe(In), oe.controller && H.set(In, oe.controller);
        }), ve({
            fetchers: new Map(y.fetchers)
        });
        let Nn = () => vt.forEach((oe) => Qe(oe.key));
        O.signal.addEventListener(
            "abort",
            Nn
        );
        let {
            loaderResults: Vn,
            fetcherResults: G
        } = await sa(
            Xt,
            vt,
            yt,
            E
        );
        if (O.signal.aborted)
            return;
        if (O.signal.removeEventListener(
                "abort",
                Nn
            ), De.delete(m), H.delete(m), vt.forEach((oe) => H.delete(oe.key)), y.fetchers.has(m)) {
            let oe = et(Q.data);
            y.fetchers.set(m, oe);
        }
        let we = On(Vn);
        if (we)
            return gt(
                yt,
                we.result, !1, {
                    preventScrollReset: V
                }
            );
        if (we = On(G), we)
            return Ce.add(we.key), gt(
                yt,
                we.result, !1, {
                    preventScrollReset: V
                }
            );
        let {
            loaderData: At,
            errors: wt
        } = Va(
            y,
            it,
            Vn,
            void 0,
            vt,
            G
        );
        da(Ke), y.navigation.state === "loading" && Ke > ce ? (K(C, "Expected pending action"), Y && Y.abort(), Lt(y.navigation.location, {
            matches: it,
            loaderData: At,
            errors: wt,
            fetchers: new Map(y.fetchers)
        })) : (ve({
            errors: wt,
            loaderData: Ia(
                y.loaderData,
                At,
                it,
                wt
            ),
            fetchers: new Map(y.fetchers)
        }), te = !1);
    }
    async function Vc(m, p, w, R, E, I, L, V, F) {
        let j = y.fetchers.get(m);
        Ze(
            m,
            Zt(
                F,
                j ? j.data : void 0
            ), {
                flushSync: L
            }
        );
        let $ = new AbortController(),
            O = kt(
                e.history,
                w,
                $.signal
            );
        if (I) {
            let Q = await kn(
                R,
                new URL(O.url).pathname,
                O.signal,
                m
            );
            if (Q.type === "aborted")
                return;
            if (Q.type === "error") {
                Je(m, p, Q.error, {
                    flushSync: L
                });
                return;
            } else if (Q.matches)
                R = Q.matches;
            else {
                Je(
                    m,
                    p,
                    Be(404, {
                        pathname: w
                    }), {
                        flushSync: L
                    }
                );
                return;
            }
        }
        let X = Un(R, w);
        H.set(m, $);
        let q = ee,
            ge = Bt(
                a,
                o,
                O,
                R,
                X,
                r,
                E
            ),
            Pe = (await Yt(
                O,
                ge,
                E,
                m
            ))[X.route.id];
        if (H.get(m) === $ && H.delete(m), !O.signal.aborted) {
            if (Le.has(m)) {
                Ze(m, et(void 0));
                return;
            }
            if (Tt(Pe))
                if (ce > q) {
                    Ze(m, et(void 0));
                    return;
                } else {
                    Ce.add(m), await gt(O, Pe, !1, {
                        preventScrollReset: V
                    });
                    return;
                }
            if (Ae(Pe)) {
                Je(m, p, Pe.error);
                return;
            }
            Ze(m, et(Pe.data));
        }
    }
    async function gt(m, p, w, {
        submission: R,
        fetcherSubmission: E,
        preventScrollReset: I,
        replace: L
    } = {}) {
        w || (z ? .resolve(), z = null), p.response.headers.has("X-Remix-Revalidate") && (te = !0);
        let V = p.response.headers.get("Location");
        K(V, "Expected a Location header on the redirect Response"), V = ka(
            V,
            new URL(m.url),
            c,
            e.history
        );
        let F = dn(y.location, V, {
            _isRedirect: !0
        });
        if (n) {
            let ge = !1;
            if (p.response.headers.has("X-Remix-Reload-Document"))
                ge = !0;
            else if (hi(V)) {
                const pe = ms(V, !0);
                ge = // Hard reload if it's an absolute URL to a new origin
                    pe.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
                    _e(pe.pathname, c) == null;
            }
            if (ge) {
                L ? t.location.replace(V) : t.location.assign(V);
                return;
            }
        }
        Y = null;
        let j = L === !0 || p.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH",
            {
                formMethod: $,
                formAction: O,
                formEncType: X
            } = y.navigation;
        !R && !E && $ && O && X && (R = ja(y.navigation));
        let q = R || E;
        if (Hu.has(p.response.status) && q && be(q.formMethod))
            await pt(j, F, {
                submission: {
                    ...q,
                    formAction: V
                },
                // Preserve these flags across redirects
                preventScrollReset: I || W,
                enableViewTransition: w ? le : void 0
            });
        else {
            let ge = xr(
                F,
                R
            );
            await pt(j, F, {
                overrideNavigation: ge,
                // Send fetcher submissions through for shouldRevalidate
                fetcherSubmission: E,
                // Preserve these flags across redirects
                preventScrollReset: I || W,
                enableViewTransition: w ? le : void 0
            });
        }
    }
    async function Yt(m, p, w, R) {
        let E, I = {};
        try {
            E = await ed(
                u,
                m,
                p,
                R,
                w, !1
            );
        } catch (L) {
            return p.filter((V) => V.shouldLoad).forEach((V) => {
                I[V.route.id] = {
                    type: "error",
                    error: L
                };
            }), I;
        }
        if (m.signal.aborted)
            return I;
        if (!be(m.method))
            for (let L of p) {
                if (E[L.route.id] ? .type === "error")
                    break;
                !E.hasOwnProperty(L.route.id) && !y.loaderData.hasOwnProperty(L.route.id) && (!y.errors || !y.errors.hasOwnProperty(L.route.id)) && L.shouldCallHandler() && (E[L.route.id] = {
                    type: "error",
                    result: new Error(
                        `No result returned from dataStrategy for route ${L.route.id}`
                    )
                });
            }
        for (let [L, V] of Object.entries(E))
            if (ud(V)) {
                let F = V.result;
                I[L] = {
                    type: "redirect",
                    response: id(
                        F,
                        m,
                        L,
                        p,
                        c
                    )
                };
            } else
                I[L] = await rd(V);
        return I;
    }
    async function sa(m, p, w, R) {
        let E = Yt(
                w,
                m,
                R,
                null
            ),
            I = Promise.all(
                p.map(async (F) => {
                    if (F.matches && F.match && F.request && F.controller) {
                        let $ = (await Yt(
                            F.request,
                            F.matches,
                            R,
                            F.key
                        ))[F.match.route.id];
                        return {
                            [F.key]: $
                        };
                    } else
                        return Promise.resolve({
                            [F.key]: {
                                type: "error",
                                error: Be(404, {
                                    pathname: F.path
                                })
                            }
                        });
                })
            ),
            L = await E,
            V = (await I).reduce(
                (F, j) => Object.assign(F, j), {}
            );
        return {
            loaderResults: L,
            fetcherResults: V
        };
    }

    function fr() {
        te = !0, Ve.forEach((m, p) => {
            H.has(p) && J.add(p), Qe(p);
        });
    }

    function Ze(m, p, w = {}) {
        y.fetchers.set(m, p), ve({
            fetchers: new Map(y.fetchers)
        }, {
            flushSync: (w && w.flushSync) === !0
        });
    }

    function Je(m, p, w, R = {}) {
        let E = st(y.matches, p);
        mr(m), ve({
            errors: {
                [E.route.id]: w
            },
            fetchers: new Map(y.fetchers)
        }, {
            flushSync: (R && R.flushSync) === !0
        });
    }

    function la(m) {
        return Ie.set(m, (Ie.get(m) || 0) + 1), Le.has(m) && Le.delete(m), y.fetchers.get(m) || Wu;
    }

    function Ic(m, p) {
        Qe(m, p ? .reason), Ze(m, et(null));
    }

    function mr(m) {
        let p = y.fetchers.get(m);
        H.has(m) && !(p && p.state === "loading" && De.has(m)) && Qe(m), Ve.delete(m), De.delete(m), Ce.delete(m), Le.delete(m), J.delete(m), y.fetchers.delete(m);
    }

    function Fc(m) {
        let p = (Ie.get(m) || 0) - 1;
        p <= 0 ? (Ie.delete(m), Le.add(m)) : Ie.set(m, p), ve({
            fetchers: new Map(y.fetchers)
        });
    }

    function Qe(m, p) {
        let w = H.get(m);
        w && (w.abort(p), H.delete(m));
    }

    function ca(m) {
        for (let p of m) {
            let w = la(p),
                R = et(w.data);
            y.fetchers.set(p, R);
        }
    }

    function ua() {
        let m = [],
            p = !1;
        for (let w of Ce) {
            let R = y.fetchers.get(w);
            K(R, `Expected fetcher: ${w}`), R.state === "loading" && (Ce.delete(w), m.push(w), p = !0);
        }
        return ca(m), p;
    }

    function da(m) {
        let p = [];
        for (let [w, R] of De)
            if (R < m) {
                let E = y.fetchers.get(w);
                K(E, `Expected fetcher: ${w}`), E.state === "loading" && (Qe(w), De.delete(w), p.push(w));
            }
        return ca(p), p.length > 0;
    }

    function Oc(m, p) {
        let w = y.blockers.get(m) || qt;
        return mt.get(m) !== p && mt.set(m, p), w;
    }

    function ha(m) {
        y.blockers.delete(m), mt.delete(m);
    }

    function Ln(m, p) {
        let w = y.blockers.get(m) || qt;
        K(
            w.state === "unblocked" && p.state === "blocked" || w.state === "blocked" && p.state === "blocked" || w.state === "blocked" && p.state === "proceeding" || w.state === "blocked" && p.state === "unblocked" || w.state === "proceeding" && p.state === "unblocked",
            `Invalid blocker state transition: ${w.state} -> ${p.state}`
        );
        let R = new Map(y.blockers);
        R.set(m, p), ve({
            blockers: R
        });
    }

    function fa({
        currentLocation: m,
        nextLocation: p,
        historyAction: w
    }) {
        if (mt.size === 0)
            return;
        mt.size > 1 && he(!1, "A router only supports one blocker at a time");
        let R = Array.from(mt.entries()),
            [E, I] = R[R.length - 1],
            L = y.blockers.get(E);
        if (!(L && L.state === "proceeding") && I({
                currentLocation: m,
                nextLocation: p,
                historyAction: w
            }))
            return E;
    }

    function pr(m) {
        let p = Be(404, {
                pathname: m
            }),
            w = l || s,
            {
                matches: R,
                route: E
            } = Fn(w);
        return {
            notFoundMatches: R,
            route: E,
            error: p
        };
    }

    function jc(m, p, w) {
        if (v = m, T = p, x = w || null, !P && y.navigation === wr) {
            P = !0;
            let R = pa(y.location, y.matches);
            R != null && ve({
                restoreScrollPosition: R
            });
        }
        return () => {
            v = null, T = null, x = null;
        };
    }

    function ma(m, p) {
        return x && x(
            m,
            p.map((R) => yu(R, y.loaderData))
        ) || m.key;
    }

    function Bc(m, p) {
        if (v && T) {
            let w = ma(m, p);
            v[w] = T();
        }
    }

    function pa(m, p) {
        if (v) {
            let w = ma(m, p),
                R = v[w];
            if (typeof R == "number")
                return R;
        }
        return null;
    }

    function An(m, p, w) {
        if (e.patchRoutesOnNavigation)
            if (m) {
                if (Object.keys(m[0].params).length > 0)
                    return {
                        active: !0,
                        matches: tn(
                            p,
                            w,
                            c, !0
                        )
                    };
            } else
                return {
                    active: !0,
                    matches: tn(
                        p,
                        w,
                        c, !0
                    ) || []
                };
        return {
            active: !1,
            matches: null
        };
    }
    async function kn(m, p, w, R) {
        if (!e.patchRoutesOnNavigation)
            return {
                type: "success",
                matches: m
            };
        let E = m;
        for (;;) {
            let I = l == null,
                L = l || s,
                V = o;
            try {
                await e.patchRoutesOnNavigation({
                    signal: w,
                    path: p,
                    matches: E,
                    fetcherKey: R,
                    patch: ($, O) => {
                        w.aborted || Ma(
                            $,
                            O,
                            L,
                            V,
                            a, !1
                        );
                    }
                });
            } catch ($) {
                return {
                    type: "error",
                    error: $,
                    partialMatches: E
                };
            } finally {
                I && !w.aborted && (s = [...s]);
            }
            if (w.aborted)
                return {
                    type: "aborted"
                };
            let F = ot(L, p, c),
                j = null;
            if (F) {
                if (Object.keys(F[0].params).length === 0)
                    return {
                        type: "success",
                        matches: F
                    };
                if (j = tn(
                        L,
                        p,
                        c, !0
                    ), !(j && E.length < j.length && ga(
                        E,
                        j.slice(0, E.length)
                    )))
                    return {
                        type: "success",
                        matches: F
                    };
            }
            if (j || (j = tn(
                    L,
                    p,
                    c, !0
                )), !j || ga(E, j))
                return {
                    type: "success",
                    matches: null
                };
            E = j;
        }
    }

    function ga(m, p) {
        return m.length === p.length && m.every((w, R) => w.route.id === p[R].route.id);
    }

    function zc(m) {
        o = {}, l = hn(
            m,
            a,
            void 0,
            o
        );
    }

    function $c(m, p, w = !1) {
        let R = l == null;
        Ma(
            m,
            p,
            l || s,
            o,
            a,
            w
        ), R && (s = [...s], ve({}));
    }
    return N = {
        get basename() {
            return c;
        },
        get future() {
            return d;
        },
        get state() {
            return y;
        },
        get routes() {
            return s;
        },
        get window() {
            return t;
        },
        initialize: Rc,
        subscribe: Ec,
        enableScrollRestoration: jc,
        navigate: aa,
        fetch: kc,
        revalidate: Mc,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (m) => e.history.createHref(m),
        encodeLocation: (m) => e.history.encodeLocation(m),
        getFetcher: la,
        resetFetcher: Ic,
        deleteFetcher: Fc,
        dispose: Cc,
        getBlocker: Oc,
        deleteBlocker: ha,
        patchRoutes: $c,
        _internalFetchControllers: H,
        // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes: zc,
        _internalSetStateDoNotUseOrYouWillBreakYourApp(m) {
            ve(m);
        }
    }, e.unstable_instrumentations && (N = Fu(
        N,
        e.unstable_instrumentations.map((m) => m.router).filter(Boolean)
    )), N;
}

function Gu(e) {
    return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}

function jr(e, t, n, r, i, a) {
    let o, s;
    if (i) {
        o = [];
        for (let c of t)
            if (o.push(c), c.route.id === i) {
                s = c;
                break;
            }
    } else
        o = t, s = t[t.length - 1];
    let l = mi(
        r || ".",
        fi(o),
        _e(e.pathname, n) || e.pathname,
        a === "path"
    );
    if (r == null && (l.search = e.search, l.hash = e.hash), (r == null || r === "" || r === ".") && s) {
        let c = yi(l.search);
        if (s.route.index && !c)
            l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index";
        else if (!s.route.index && c) {
            let u = new URLSearchParams(l.search),
                d = u.getAll("index");
            u.delete("index"), d.filter((f) => f).forEach((f) => u.append("index", f));
            let h = u.toString();
            l.search = h ? `?${h}` : "";
        }
    }
    return n !== "/" && (l.pathname = Lu({
        basename: n,
        pathname: l.pathname
    })), qe(l);
}

function Ca(e, t, n) {
    if (!n || !Gu(n))
        return {
            path: t
        };
    if (n.formMethod && !fd(n.formMethod))
        return {
            path: t,
            error: Be(405, {
                method: n.formMethod
            })
        };
    let r = () => ({
            path: t,
            error: Be(400, {
                type: "invalid-body"
            })
        }),
        a = (n.formMethod || "get").toUpperCase(),
        o = As(t);
    if (n.body !== void 0) {
        if (n.formEncType === "text/plain") {
            if (!be(a))
                return r();
            let d = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? (
                // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
                Array.from(n.body.entries()).reduce(
                    (h, [f, v]) => `${h}${f}=${v}
`,
                    ""
                )
            ) : String(n.body);
            return {
                path: t,
                submission: {
                    formMethod: a,
                    formAction: o,
                    formEncType: n.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: d
                }
            };
        } else if (n.formEncType === "application/json") {
            if (!be(a))
                return r();
            try {
                let d = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
                return {
                    path: t,
                    submission: {
                        formMethod: a,
                        formAction: o,
                        formEncType: n.formEncType,
                        formData: void 0,
                        json: d,
                        text: void 0
                    }
                };
            } catch {
                return r();
            }
        }
    }
    K(
        typeof FormData == "function",
        "FormData is not available in this environment"
    );
    let s, l;
    if (n.formData)
        s = $r(n.formData), l = n.formData;
    else if (n.body instanceof FormData)
        s = $r(n.body), l = n.body;
    else if (n.body instanceof URLSearchParams)
        s = n.body, l = Na(s);
    else if (n.body == null)
        s = new URLSearchParams(), l = new FormData();
    else
        try {
            s = new URLSearchParams(n.body), l = Na(s);
        } catch {
            return r();
        }
    let c = {
        formMethod: a,
        formAction: o,
        formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
        formData: l,
        json: void 0,
        text: void 0
    };
    if (be(c.formMethod))
        return {
            path: t,
            submission: c
        };
    let u = ht(t);
    return e && u.search && yi(u.search) && s.append("index", ""), u.search = `?${s}`, {
        path: qe(u),
        submission: c
    };
}

function Ea(e, t, n, r, i, a, o, s, l, c, u, d, h, f, v, x, T, P, b, S, k) {
    let M = S ? Ae(S[1]) ? S[1].error : S[1].data : void 0,
        N = i.createURL(a.location),
        y = i.createURL(l),
        C;
    if (u && a.errors) {
        let Z = Object.keys(a.errors)[0];
        C = o.findIndex((te) => te.route.id === Z);
    } else if (S && Ae(S[1])) {
        let Z = S[0];
        C = o.findIndex((te) => te.route.id === Z) - 1;
    }
    let z = S ? S[1].statusCode : void 0,
        W = z && z >= 400,
        Y = {
            currentUrl: N,
            currentParams: a.matches[0] ? .params || {},
            nextUrl: y,
            nextParams: o[0].params,
            ...s,
            actionResult: M,
            actionStatus: z
        },
        le = bn(o),
        Me = o.map((Z, te) => {
            let {
                route: J
            } = Z, H = null;
            if (C != null && te > C ? H = !1 : J.lazy ? H = !0 : pi(J) ? u ? H = Br(
                    J,
                    a.loaderData,
                    a.errors
                ) : Xu(a.loaderData, a.matches[te], Z) && (H = !0) : H = !1, H !== null)
                return zr(
                    n,
                    r,
                    e,
                    le,
                    Z,
                    c,
                    t,
                    H
                );
            let ee = !1;
            typeof k == "boolean" ? ee = k : W ? ee = !1 : (d || N.pathname + N.search === y.pathname + y.search || N.search !== y.search || qu(a.matches[te], Z)) && (ee = !0);
            let ce = {
                    ...Y,
                    defaultShouldRevalidate: ee
                },
                De = rn(Z, ce);
            return zr(
                n,
                r,
                e,
                le,
                Z,
                c,
                t,
                De,
                ce,
                k
            );
        }),
        ae = [];
    return v.forEach((Z, te) => {
        if (u || !o.some((Ie) => Ie.route.id === Z.routeId) || f.has(te))
            return;
        let J = a.fetchers.get(te),
            H = J && J.state !== "idle" && J.data === void 0,
            ee = ot(T, Z.path, P);
        if (!ee) {
            if (b && H)
                return;
            ae.push({
                key: te,
                routeId: Z.routeId,
                path: Z.path,
                matches: null,
                match: null,
                request: null,
                controller: null
            });
            return;
        }
        if (x.has(te))
            return;
        let ce = Un(ee, Z.path),
            De = new AbortController(),
            Ce = kt(
                i,
                Z.path,
                De.signal
            ),
            Ve = null;
        if (h.has(te))
            h.delete(te), Ve = Bt(
                n,
                r,
                Ce,
                ee,
                ce,
                c,
                t
            );
        else if (H)
            d && (Ve = Bt(
                n,
                r,
                Ce,
                ee,
                ce,
                c,
                t
            ));
        else {
            let Ie;
            typeof k == "boolean" ? Ie = k : W ? Ie = !1 : Ie = d;
            let Le = {
                ...Y,
                defaultShouldRevalidate: Ie
            };
            rn(ce, Le) && (Ve = Bt(
                n,
                r,
                Ce,
                ee,
                ce,
                c,
                t,
                Le
            ));
        }
        Ve && ae.push({
            key: te,
            routeId: Z.routeId,
            path: Z.path,
            matches: Ve,
            match: ce,
            request: Ce,
            controller: De
        });
    }), {
        dsMatches: Me,
        revalidatingFetchers: ae
    };
}

function pi(e) {
    return e.loader != null || e.middleware != null && e.middleware.length > 0;
}

function Br(e, t, n) {
    if (e.lazy)
        return !0;
    if (!pi(e))
        return !1;
    let r = t != null && e.id in t,
        i = n != null && n[e.id] !== void 0;
    return !r && i ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !i;
}

function Xu(e, t, n) {
    let r = (
            // [a] -> [a, b]
            !t || // [a, b] -> [a, c]
            n.route.id !== t.route.id
        ),
        i = !e.hasOwnProperty(n.route.id);
    return r || i;
}

function qu(e, t) {
    let n = e.route.path;
    return (
        // param change for this match, /users/123 -> /users/456
        e.pathname !== t.pathname || // splat param changed, which is not present in match.path
        // e.g. /files/images/avatar.jpg -> files/finances.xls
        n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
    );
}

function rn(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean")
            return n;
    }
    return t.defaultShouldRevalidate;
}

function Ma(e, t, n, r, i, a) {
    let o;
    if (e) {
        let c = r[e];
        K(
            c,
            `No route found to patch children into: routeId = ${e}`
        ), c.children || (c.children = []), o = c.children;
    } else
        o = n;
    let s = [],
        l = [];
    if (t.forEach((c) => {
            let u = o.find(
                (d) => Cs(c, d)
            );
            u ? l.push({
                existingRoute: u,
                newRoute: c
            }) : s.push(c);
        }), s.length > 0) {
        let c = hn(
            s,
            i, [e || "_", "patch", String(o ? .length || "0")],
            r
        );
        o.push(...c);
    }
    if (a && l.length > 0)
        for (let c = 0; c < l.length; c++) {
            let {
                existingRoute: u,
                newRoute: d
            } = l[c], h = u, [f] = hn(
                [d],
                i, [],
                // Doesn't matter for mutated routes since they already have an id
                {},
                // Don't touch the manifest here since we're updating in place
                !0
            );
            Object.assign(h, {
                element: f.element ? f.element : h.element,
                errorElement: f.errorElement ? f.errorElement : h.errorElement,
                hydrateFallbackElement: f.hydrateFallbackElement ? f.hydrateFallbackElement : h.hydrateFallbackElement
            });
        }
}

function Cs(e, t) {
    return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every(
        (n, r) => t.children ? .some((i) => Cs(n, i))
    ) : !1;
}
var Da = /* @__PURE__ */ new WeakMap(),
    Es = ({
        key: e,
        route: t,
        manifest: n,
        mapRouteProperties: r
    }) => {
        let i = n[t.id];
        if (K(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object")
            return;
        let a = i.lazy[e];
        if (!a)
            return;
        let o = Da.get(i);
        o || (o = {}, Da.set(i, o));
        let s = o[e];
        if (s)
            return s;
        let l = (async () => {
            let c = fu(e),
                d = i[e] !== void 0 && e !== "hasErrorBoundary";
            if (c)
                he(!c,
                    "Route property " + e + " is not a supported lazy route property. This property will be ignored."
                ), o[e] = Promise.resolve();
            else if (d)
                he(!1,
                    `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`
                );
            else {
                let h = await a();
                h != null && (Object.assign(i, {
                    [e]: h
                }), Object.assign(i, r(i)));
            }
            typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((h) => h === void 0) && (i.lazy = void 0));
        })();
        return o[e] = l, l;
    },
    La = /* @__PURE__ */ new WeakMap();

function Zu(e, t, n, r, i) {
    let a = n[e.id];
    if (K(a, "No route found in manifest"), !e.lazy)
        return {
            lazyRoutePromise: void 0,
            lazyHandlerPromise: void 0
        };
    if (typeof e.lazy == "function") {
        let u = La.get(a);
        if (u)
            return {
                lazyRoutePromise: u,
                lazyHandlerPromise: u
            };
        let d = (async () => {
            K(
                typeof e.lazy == "function",
                "No lazy route function found"
            );
            let h = await e.lazy(),
                f = {};
            for (let v in h) {
                let x = h[v];
                if (x === void 0)
                    continue;
                let T = pu(v),
                    b = a[v] !== void 0 && // This property isn't static since it should always be updated based
                    // on the route updates
                    v !== "hasErrorBoundary";
                T ? he(!T,
                    "Route property " + v + " is not a supported property to be returned from a lazy route function. This property will be ignored."
                ) : b ? he(!b,
                    `Route "${a.id}" has a static property "${v}" defined but its lazy function is also returning a value for this property. The lazy route property "${v}" will be ignored.`
                ) : f[v] = x;
            }
            Object.assign(a, f), Object.assign(a, {
                // To keep things framework agnostic, we use the provided `mapRouteProperties`
                // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
                // since the logic will differ between frameworks.
                ...r(a),
                lazy: void 0
            });
        })();
        return La.set(a, d), d.catch(() => {}), {
            lazyRoutePromise: d,
            lazyHandlerPromise: d
        };
    }
    let o = Object.keys(e.lazy),
        s = [],
        l;
    for (let u of o) {
        if (i && i.includes(u))
            continue;
        let d = Es({
            key: u,
            route: e,
            manifest: n,
            mapRouteProperties: r
        });
        d && (s.push(d), u === t && (l = d));
    }
    let c = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
    return c ? .catch(() => {}), l ? .catch(() => {}), {
        lazyRoutePromise: c,
        lazyHandlerPromise: l
    };
}
async function Aa(e) {
    let t = e.matches.filter((i) => i.shouldLoad),
        n = {};
    return (await Promise.all(t.map((i) => i.resolve()))).forEach((i, a) => {
        n[t[a].route.id] = i;
    }), n;
}
async function Ju(e) {
    return e.matches.some((t) => t.route.middleware) ? Ms(e, () => Aa(e)) : Aa(e);
}

function Ms(e, t) {
    return Qu(
        e,
        t,
        (r) => {
            if (hd(r))
                throw r;
            return r;
        },
        ld,
        n
    );

    function n(r, i, a) {
        if (a)
            return Promise.resolve(
                Object.assign(a.value, {
                    [i]: {
                        type: "error",
                        result: r
                    }
                })
            ); {
            let {
                matches: o
            } = e, s = Math.min(
                // Throwing route
                Math.max(
                    o.findIndex((c) => c.route.id === i),
                    0
                ),
                // or the shallowest route that needs to load data
                Math.max(
                    o.findIndex((c) => c.shouldCallHandler()),
                    0
                )
            ), l = st(
                o,
                o[s].route.id
            ).route.id;
            return Promise.resolve({
                [l]: {
                    type: "error",
                    result: r
                }
            });
        }
    }
}
async function Qu(e, t, n, r, i) {
    let {
        matches: a,
        request: o,
        params: s,
        context: l,
        unstable_pattern: c
    } = e, u = a.flatMap(
        (h) => h.route.middleware ? h.route.middleware.map((f) => [h.route.id, f]) : []
    );
    return await Ds({
            request: o,
            params: s,
            context: l,
            unstable_pattern: c
        },
        u,
        t,
        n,
        r,
        i
    );
}
async function Ds(e, t, n, r, i, a, o = 0) {
    let {
        request: s
    } = e;
    if (s.signal.aborted)
        throw s.signal.reason ? ? new Error(`Request aborted: ${s.method} ${s.url}`);
    let l = t[o];
    if (!l)
        return await n();
    let [c, u] = l, d, h = async () => {
        if (d)
            throw new Error("You may only call `next()` once per middleware");
        try {
            return d = {
                value: await Ds(
                    e,
                    t,
                    n,
                    r,
                    i,
                    a,
                    o + 1
                )
            }, d.value;
        } catch (f) {
            return d = {
                value: await a(f, c, d)
            }, d.value;
        }
    };
    try {
        let f = await u(e, h),
            v = f != null ? r(f) : void 0;
        return i(v) ? v : d ? v ? ? d.value : (d = {
            value: await h()
        }, d.value);
    } catch (f) {
        return await a(f, c, d);
    }
}

function Ls(e, t, n, r, i) {
    let a = Es({
            key: "middleware",
            route: r.route,
            manifest: t,
            mapRouteProperties: e
        }),
        o = Zu(
            r.route,
            be(n.method) ? "action" : "loader",
            t,
            e,
            i
        );
    return {
        middleware: a,
        route: o.lazyRoutePromise,
        handler: o.lazyHandlerPromise
    };
}

function zr(e, t, n, r, i, a, o, s, l = null, c) {
    let u = !1,
        d = Ls(
            e,
            t,
            n,
            i,
            a
        );
    return {
        ...i,
        _lazyPromises: d,
        shouldLoad: s,
        shouldRevalidateArgs: l,
        shouldCallHandler(h) {
            return u = !0, l ? typeof c == "boolean" ? rn(i, {
                ...l,
                defaultShouldRevalidate: c
            }) : typeof h == "boolean" ? rn(i, {
                ...l,
                defaultShouldRevalidate: h
            }) : rn(i, l) : s;
        },
        resolve(h) {
            let {
                lazy: f,
                loader: v,
                middleware: x
            } = i.route, T = u || s || h && !be(n.method) && (f || v), P = x && x.length > 0 && !v && !f;
            return T && (be(n.method) || !P) ? td({
                request: n,
                unstable_pattern: r,
                match: i,
                lazyHandlerPromise: d ? .handler,
                lazyRoutePromise: d ? .route,
                handlerOverride: h,
                scopedContext: o
            }) : Promise.resolve({
                type: "data",
                result: void 0
            });
        }
    };
}

function Bt(e, t, n, r, i, a, o, s = null) {
    return r.map((l) => l.route.id !== i.route.id ? {
        ...l,
        shouldLoad: !1,
        shouldRevalidateArgs: s,
        shouldCallHandler: () => !1,
        _lazyPromises: Ls(
            e,
            t,
            n,
            l,
            a
        ),
        resolve: () => Promise.resolve({
            type: "data",
            result: void 0
        })
    } : zr(
        e,
        t,
        n,
        bn(r),
        l,
        a,
        o, !0,
        s
    ));
}
async function ed(e, t, n, r, i, a) {
    n.some((c) => c._lazyPromises ? .middleware) && await Promise.all(n.map((c) => c._lazyPromises ? .middleware));
    let o = {
            request: t,
            unstable_pattern: bn(n),
            params: n[0].params,
            context: i,
            matches: n
        },
        l = await e({
            ...o,
            fetcherKey: r,
            runClientMiddleware: (c) => {
                let u = o;
                return Ms(u, () => c({
                    ...u,
                    fetcherKey: r,
                    runClientMiddleware: () => {
                        throw new Error(
                            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
                        );
                    }
                }));
            }
        });
    try {
        await Promise.all(
            n.flatMap((c) => [
                c._lazyPromises ? .handler,
                c._lazyPromises ? .route
            ])
        );
    } catch {}
    return l;
}
async function td({
    request: e,
    unstable_pattern: t,
    match: n,
    lazyHandlerPromise: r,
    lazyRoutePromise: i,
    handlerOverride: a,
    scopedContext: o
}) {
    let s, l, c = be(e.method),
        u = c ? "action" : "loader",
        d = (h) => {
            let f, v = new Promise((P, b) => f = b);
            l = () => f(), e.signal.addEventListener("abort", l);
            let x = (P) => typeof h != "function" ? Promise.reject(
                    new Error(
                        `You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${n.route.id}]`
                    )
                ) : h({
                        request: e,
                        unstable_pattern: t,
                        params: n.params,
                        context: o
                    },
                    ...P !== void 0 ? [P] : []
                ),
                T = (async () => {
                    try {
                        return {
                            type: "data",
                            result: await (a ? a((b) => x(b)) : x())
                        };
                    } catch (P) {
                        return {
                            type: "error",
                            result: P
                        };
                    }
                })();
            return Promise.race([T, v]);
        };
    try {
        let h = c ? n.route.action : n.route.loader;
        if (r || i)
            if (h) {
                let f, [v] = await Promise.all([
                    // If the handler throws, don't let it immediately bubble out,
                    // since we need to let the lazy() execution finish so we know if this
                    // route has a boundary that can handle the error
                    d(h).catch((x) => {
                        f = x;
                    }),
                    // Ensure all lazy route promises are resolved before continuing
                    r,
                    i
                ]);
                if (f !== void 0)
                    throw f;
                s = v;
            } else {
                await r;
                let f = c ? n.route.action : n.route.loader;
                if (f)
                    [s] = await Promise.all([d(f), i]);
                else if (u === "action") {
                    let v = new URL(e.url),
                        x = v.pathname + v.search;
                    throw Be(405, {
                        method: e.method,
                        pathname: x,
                        routeId: n.route.id
                    });
                } else
                    return {
                        type: "data",
                        result: void 0
                    };
            }
        else if (h)
            s = await d(h);
        else {
            let f = new URL(e.url),
                v = f.pathname + f.search;
            throw Be(404, {
                pathname: v
            });
        }
    } catch (h) {
        return {
            type: "error",
            result: h
        };
    } finally {
        l && e.signal.removeEventListener("abort", l);
    }
    return s;
}
async function nd(e) {
    let t = e.headers.get("Content-Type");
    return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function rd(e) {
    let {
        result: t,
        type: n
    } = e;
    if (gi(t)) {
        let r;
        try {
            r = await nd(t);
        } catch (i) {
            return {
                type: "error",
                error: i
            };
        }
        return n === "error" ? {
            type: "error",
            error: new xn(t.status, t.statusText, r),
            statusCode: t.status,
            headers: t.headers
        } : {
            type: "data",
            data: r,
            statusCode: t.status,
            headers: t.headers
        };
    }
    return n === "error" ? Oa(t) ? t.data instanceof Error ? {
        type: "error",
        error: t.data,
        statusCode: t.init ? .status,
        headers: t.init ? .headers ? new Headers(t.init.headers) : void 0
    } : {
        type: "error",
        error: sd(t),
        statusCode: fn(t) ? t.status : void 0,
        headers: t.init ? .headers ? new Headers(t.init.headers) : void 0
    } : {
        type: "error",
        error: t,
        statusCode: fn(t) ? t.status : void 0
    } : Oa(t) ? {
        type: "data",
        data: t.data,
        statusCode: t.init ? .status,
        headers: t.init ? .headers ? new Headers(t.init.headers) : void 0
    } : {
        type: "data",
        data: t
    };
}

function id(e, t, n, r, i) {
    let a = e.headers.get("Location");
    if (K(
            a,
            "Redirects returned/thrown from loaders/actions must have a Location header"
        ), !hi(a)) {
        let o = r.slice(
            0,
            r.findIndex((s) => s.route.id === n) + 1
        );
        a = jr(
            new URL(t.url),
            o,
            i,
            a
        ), e.headers.set("Location", a);
    }
    return e;
}

function ka(e, t, n, r) {
    let i = [
        "about:",
        "blob:",
        "chrome:",
        "chrome-untrusted:",
        "content:",
        "data:",
        "devtools:",
        "file:",
        "filesystem:",
        // eslint-disable-next-line no-script-url
        "javascript:"
    ];
    if (hi(e)) {
        let a = e,
            o = a.startsWith("//") ? new URL(t.protocol + a) : new URL(a);
        if (i.includes(o.protocol))
            throw new Error("Invalid redirect location");
        let s = _e(o.pathname, n) != null;
        if (o.origin === t.origin && s)
            return o.pathname + o.search + o.hash;
    }
    try {
        let a = r.createURL(e);
        if (i.includes(a.protocol))
            throw new Error("Invalid redirect location");
    } catch {}
    return e;
}

function kt(e, t, n, r) {
    let i = e.createURL(As(t)).toString(),
        a = {
            signal: n
        };
    if (r && be(r.formMethod)) {
        let {
            formMethod: o,
            formEncType: s
        } = r;
        a.method = o.toUpperCase(), s === "application/json" ? (a.headers = new Headers({
            "Content-Type": s
        }), a.body = JSON.stringify(r.json)) : s === "text/plain" ? a.body = r.text : s === "application/x-www-form-urlencoded" && r.formData ? a.body = $r(r.formData) : a.body = r.formData;
    }
    return new Request(i, a);
}

function $r(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries())
        t.append(n, typeof r == "string" ? r : r.name);
    return t;
}

function Na(e) {
    let t = new FormData();
    for (let [n, r] of e.entries())
        t.append(n, r);
    return t;
}

function ad(e, t, n, r = !1, i = !1) {
    let a = {},
        o = null,
        s, l = !1,
        c = {},
        u = n && Ae(n[1]) ? n[1].error : void 0;
    return e.forEach((d) => {
        if (!(d.route.id in t))
            return;
        let h = d.route.id,
            f = t[h];
        if (K(!Tt(f),
                "Cannot handle redirect results in processLoaderData"
            ), Ae(f)) {
            let v = f.error;
            if (u !== void 0 && (v = u, u = void 0), o = o || {}, i)
                o[h] = v;
            else {
                let x = st(e, h);
                o[x.route.id] == null && (o[x.route.id] = v);
            }
            r || (a[h] = Rs), l || (l = !0, s = fn(f.error) ? f.error.status : 500), f.headers && (c[h] = f.headers);
        } else
            a[h] = f.data, f.statusCode && f.statusCode !== 200 && !l && (s = f.statusCode), f.headers && (c[h] = f.headers);
    }), u !== void 0 && n && (o = {
        [n[0]]: u
    }, n[2] && (a[n[2]] = void 0)), {
        loaderData: a,
        errors: o,
        statusCode: s || 200,
        loaderHeaders: c
    };
}

function Va(e, t, n, r, i, a) {
    let {
        loaderData: o,
        errors: s
    } = ad(
        t,
        n,
        r
    );
    return i.filter((l) => !l.matches || l.matches.some((c) => c.shouldLoad)).forEach((l) => {
        let {
            key: c,
            match: u,
            controller: d
        } = l;
        if (d && d.signal.aborted)
            return;
        let h = a[c];
        if (K(h, "Did not find corresponding fetcher result"), Ae(h)) {
            let f = st(e.matches, u ? .route.id);
            s && s[f.route.id] || (s = {
                ...s,
                [f.route.id]: h.error
            }), e.fetchers.delete(c);
        } else if (Tt(h))
            K(!1, "Unhandled fetcher revalidation redirect");
        else {
            let f = et(h.data);
            e.fetchers.set(c, f);
        }
    }), {
        loaderData: o,
        errors: s
    };
}

function Ia(e, t, n, r) {
    let i = Object.entries(t).filter(([, a]) => a !== Rs).reduce((a, [o, s]) => (a[o] = s, a), {});
    for (let a of n) {
        let o = a.route.id;
        if (!t.hasOwnProperty(o) && e.hasOwnProperty(o) && a.route.loader && (i[o] = e[o]), r && r.hasOwnProperty(o))
            break;
    }
    return i;
}

function Fa(e) {
    return e ? Ae(e[1]) ? {
        // Clear out prior actionData on errors
        actionData: {}
    } : {
        actionData: {
            [e[0]]: e[1].data
        }
    } : {};
}

function st(e, t) {
    return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}

function Fn(e) {
    let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    };
}

function Be(e, {
    pathname: t,
    routeId: n,
    method: r,
    type: i,
    message: a
} = {}) {
    let o = "Unknown Server Error",
        s = "Unknown @remix-run/router error";
    return e === 400 ? (o = "Bad Request", r && t && n ? s = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden", s = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (o = "Not Found", s = `No route matches URL "${t}"`) : e === 405 && (o = "Method Not Allowed", r && t && n ? s = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (s = `Invalid request method "${r.toUpperCase()}"`)), new xn(
        e || 500,
        o,
        new Error(s), !0
    );
}

function On(e) {
    let t = Object.entries(e);
    for (let n = t.length - 1; n >= 0; n--) {
        let [r, i] = t[n];
        if (Tt(i))
            return {
                key: r,
                result: i
            };
    }
}

function As(e) {
    let t = typeof e == "string" ? ht(e) : e;
    return qe({ ...t,
        hash: ""
    });
}

function od(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}

function sd(e) {
    return new xn(
        e.init ? .status ? ? 500,
        e.init ? .statusText ? ? "Internal Server Error",
        e.data
    );
}

function ld(e) {
    return e != null && typeof e == "object" && Object.entries(e).every(
        ([t, n]) => typeof t == "string" && cd(n)
    );
}

function cd(e) {
    return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}

function ud(e) {
    return gi(e.result) && Ps.has(e.result.status);
}

function Ae(e) {
    return e.type === "error";
}

function Tt(e) {
    return (e && e.type) === "redirect";
}

function Oa(e) {
    return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}

function gi(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}

function dd(e) {
    return Ps.has(e);
}

function hd(e) {
    return gi(e) && dd(e.status) && e.headers.has("Location");
}

function fd(e) {
    return Uu.has(e.toUpperCase());
}

function be(e) {
    return $u.has(e.toUpperCase());
}

function yi(e) {
    return new URLSearchParams(e).getAll("index").some((t) => t === "");
}

function Un(e, t) {
    let n = typeof t == "string" ? ht(t).search : t.search;
    if (e[e.length - 1].route.index && yi(n || ""))
        return e[e.length - 1];
    let r = vs(e);
    return r[r.length - 1];
}

function ja(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: i,
        formData: a,
        json: o
    } = e;
    if (!(!t || !n || !r)) {
        if (i != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: i
            };
        if (a != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: a,
                json: void 0,
                text: void 0
            };
        if (o !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: o,
                text: void 0
            };
    }
}

function xr(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    };
}

function md(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    };
}

function Zt(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    };
}

function pd(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    };
}

function et(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    };
}

function gd(e, t) {
    try {
        let n = e.sessionStorage.getItem(
            Ss
        );
        if (n) {
            let r = JSON.parse(n);
            for (let [i, a] of Object.entries(r || {}))
                a && Array.isArray(a) && t.set(i, new Set(a || []));
        }
    } catch {}
}

function yd(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, i] of t)
            n[r] = [...i];
        try {
            e.sessionStorage.setItem(
                Ss,
                JSON.stringify(n)
            );
        } catch (r) {
            he(!1,
                `Failed to save applied view transitions in sessionStorage (${r}).`
            );
        }
    }
}

function Ba() {
    let e, t, n = new Promise((r, i) => {
        e = async (a) => {
            r(a);
            try {
                await n;
            } catch {}
        }, t = async (a) => {
            i(a);
            try {
                await n;
            } catch {}
        };
    });
    return {
        promise: n,
        //@ts-ignore
        resolve: e,
        //@ts-ignore
        reject: t
    };
}
var Mt = me(null);
Mt.displayName = "DataRouter";
var Tn = me(null);
Tn.displayName = "DataRouterState";
var ks = me(!1);

function vd() {
    return B(ks);
}
var vi = me({
    isTransitioning: !1
});
vi.displayName = "ViewTransition";
var Ns = me(
    /* @__PURE__ */
    new Map()
);
Ns.displayName = "Fetchers";
var wd = me(null);
wd.displayName = "Await";
var Ue = me(
    null
);
Ue.displayName = "Navigation";
var ar = me(
    null
);
ar.displayName = "Location";
var We = me({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
We.displayName = "Route";
var wi = me(null);
wi.displayName = "RouteError";
var Vs = "REACT_ROUTER_ERROR",
    xd = "REDIRECT",
    bd = "ROUTE_ERROR_RESPONSE";

function Td(e) {
    if (e.startsWith(`${Vs}:${xd}:{`))
        try {
            let t = JSON.parse(e.slice(28));
            if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
                return t;
        } catch {}
}

function Pd(e) {
    if (e.startsWith(
            `${Vs}:${bd}:{`
        ))
        try {
            let t = JSON.parse(e.slice(40));
            if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
                return new xn(
                    t.status,
                    t.statusText,
                    t.data
                );
        } catch {}
}

function Sd(e, {
    relative: t
} = {}) {
    K(
        Pn(),
        // TODO: This error is probably because they somehow have 2 versions of the
        // router loaded. We can help them understand how to avoid that.
        "useHref() may be used only in the context of a <Router> component."
    );
    let {
        basename: n,
        navigator: r
    } = B(Ue), {
        hash: i,
        pathname: a,
        search: o
    } = Sn(e, {
        relative: t
    }), s = a;
    return n !== "/" && (s = a === "/" ? n : Ye([n, a])), r.createHref({
        pathname: s,
        search: o,
        hash: i
    });
}

function Pn() {
    return B(ar) != null;
}

function Dt() {
    return K(
        Pn(),
        // TODO: This error is probably because they somehow have 2 versions of the
        // router loaded. We can help them understand how to avoid that.
        "useLocation() may be used only in the context of a <Router> component."
    ), B(ar).location;
}
var Is = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function Fs(e) {
    B(Ue).static || ir(e);
}

function Rd() {
    let {
        isDataRoute: e
    } = B(We);
    return e ? $d() : Cd();
}

function Cd() {
    K(
        Pn(),
        // TODO: This error is probably because they somehow have 2 versions of the
        // router loaded. We can help them understand how to avoid that.
        "useNavigate() may be used only in the context of a <Router> component."
    );
    let e = B(Mt),
        {
            basename: t,
            navigator: n
        } = B(Ue),
        {
            matches: r
        } = B(We),
        {
            pathname: i
        } = Dt(),
        a = JSON.stringify(fi(r)),
        o = Ne(!1);
    return Fs(() => {
        o.current = !0;
    }), rt(
        (l, c = {}) => {
            if (he(o.current, Is), !o.current) return;
            if (typeof l == "number") {
                n.go(l);
                return;
            }
            let u = mi(
                l,
                JSON.parse(a),
                i,
                c.relative === "path"
            );
            e == null && t !== "/" && (u.pathname = u.pathname === "/" ? t : Ye([t, u.pathname])), (c.replace ? n.replace : n.push)(
                u,
                c.state,
                c
            );
        }, [
            t,
            n,
            a,
            i,
            e
        ]
    );
}
var Ed = me(null);

function Md(e) {
    let t = B(We).outlet;
    return fe(
        () => t && /* @__PURE__ */ U(Ed.Provider, {
            value: e
        }, t), [t, e]
    );
}

function Dd() {
    let {
        matches: e
    } = B(We), t = e[e.length - 1];
    return t ? t.params : {};
}

function Sn(e, {
    relative: t
} = {}) {
    let {
        matches: n
    } = B(We), {
        pathname: r
    } = Dt(), i = JSON.stringify(fi(n));
    return fe(
        () => mi(
            e,
            JSON.parse(i),
            r,
            t === "path"
        ), [e, i, r, t]
    );
}

function Ld(e, t, n, r, i) {
    K(
        Pn(),
        // TODO: This error is probably because they somehow have 2 versions of the
        // router loaded. We can help them understand how to avoid that.
        "useRoutes() may be used only in the context of a <Router> component."
    );
    let {
        navigator: a
    } = B(Ue), {
        matches: o
    } = B(We), s = o[o.length - 1], l = s ? s.params : {}, c = s ? s.pathname : "/", u = s ? s.pathnameBase : "/", d = s && s.route; {
        let b = d && d.path || "";
        js(
            c, !d || b.endsWith("*") || b.endsWith("*?"),
            `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b === "/" ? "*" : `${b}/*`}">.`
        );
    }
    let h = Dt(),
        f;
    f = h;
    let v = f.pathname || "/",
        x = v;
    if (u !== "/") {
        let b = u.replace(/^\//, "").split("/");
        x = "/" + v.replace(/^\//, "").split("/").slice(b.length).join("/");
    }
    let T = ot(e, {
        pathname: x
    });
    return he(
        d || T != null,
        `No routes matched location "${f.pathname}${f.search}${f.hash}" `
    ), he(
        T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ), Id(
        T && T.map(
            (b) => Object.assign({}, b, {
                params: Object.assign({}, l, b.params),
                pathname: Ye([
                    u,
                    // Re-encode pathnames that were decoded inside matchRoutes.
                    // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
                    // `new URL()` internally and we need to prevent it from treating
                    // them as separators
                    a.encodeLocation ? a.encodeLocation(
                        b.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
                    ).pathname : b.pathname
                ]),
                pathnameBase: b.pathnameBase === "/" ? u : Ye([
                    u,
                    // Re-encode pathnames that were decoded inside matchRoutes
                    // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
                    // `new URL()` internally and we need to prevent it from treating
                    // them as separators
                    a.encodeLocation ? a.encodeLocation(
                        b.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
                    ).pathname : b.pathnameBase
                ])
            })
        ),
        o,
        n,
        r,
        i
    );
}

function Ad() {
    let e = zd(),
        t = fn(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = "rgba(200,200,200, 0.5)",
        i = {
            padding: "0.5rem",
            backgroundColor: r
        },
        a = {
            padding: "2px 4px",
            backgroundColor: r
        },
        o = null;
    return console.error(
        "Error handled by React Router default ErrorBoundary:",
        e
    ), o = /* @__PURE__ */ U(ct, null, /* @__PURE__ */ U("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ U("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ U("code", {
        style: a
    }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ U("code", {
        style: a
    }, "errorElement"), " prop on your route.")), /* @__PURE__ */ U(ct, null, /* @__PURE__ */ U("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ U("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? /* @__PURE__ */ U("pre", {
        style: i
    }, n) : null, o);
}
var kd = /* @__PURE__ */ U(Ad, null),
    Os = class extends nr {
        constructor(e) {
            super(e), this.state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error
            };
        }
        static getDerivedStateFromError(e) {
            return {
                error: e
            };
        }
        static getDerivedStateFromProps(e, t) {
            return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation
            } : {
                error: e.error !== void 0 ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation
            };
        }
        componentDidCatch(e, t) {
            this.props.onError ? this.props.onError(e, t) : console.error(
                "React Router caught the following error during render",
                e
            );
        }
        render() {
            let e = this.state.error;
            if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
                const n = Pd(e.digest);
                n && (e = n);
            }
            let t = e !== void 0 ? /* @__PURE__ */ U(We.Provider, {
                value: this.props.routeContext
            }, /* @__PURE__ */ U(
                wi.Provider, {
                    value: e,
                    children: this.props.component
                }
            )) : this.props.children;
            return this.context ? /* @__PURE__ */ U(Nd, {
                error: e
            }, t) : t;
        }
    };
Os.contextType = ks;
var br = /* @__PURE__ */ new WeakMap();

function Nd({
    children: e,
    error: t
}) {
    let {
        basename: n
    } = B(Ue);
    if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
        let r = Td(t.digest);
        if (r) {
            let i = br.get(t);
            if (i) throw i;
            let a = xs(r.location, n);
            if (ws && !br.get(t))
                if (a.isExternal || r.reloadDocument)
                    window.location.href = a.absoluteURL || a.to;
                else {
                    const o = Promise.resolve().then(
                        () => window.__reactRouterDataRouter.navigate(a.to, {
                            replace: r.replace
                        })
                    );
                    throw br.set(t, o), o;
                }
            return /* @__PURE__ */ U(
                "meta", {
                    httpEquiv: "refresh",
                    content: `0;url=${a.absoluteURL || a.to}`
                }
            );
        }
    }
    return e;
}

function Vd({
    routeContext: e,
    match: t,
    children: n
}) {
    let r = B(Mt);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ U(We.Provider, {
        value: e
    }, n);
}

function Id(e, t = [], n = null, r = null, i = null) {
    if (e == null) {
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if (t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null;
    }
    let a = e,
        o = n ? .errors;
    if (o != null) {
        let u = a.findIndex(
            (d) => d.route.id && o ? .[d.route.id] !== void 0
        );
        K(
            u >= 0,
            `Could not find a matching route for errors on route IDs: ${Object.keys(
        o
      ).join(",")}`
        ), a = a.slice(
            0,
            Math.min(a.length, u + 1)
        );
    }
    let s = !1,
        l = -1;
    if (n)
        for (let u = 0; u < a.length; u++) {
            let d = a[u];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (l = u), d.route.id) {
                let {
                    loaderData: h,
                    errors: f
                } = n, v = d.route.loader && !h.hasOwnProperty(d.route.id) && (!f || f[d.route.id] === void 0);
                if (d.route.lazy || v) {
                    s = !0, l >= 0 ? a = a.slice(0, l + 1) : a = [a[0]];
                    break;
                }
            }
        }
    let c = n && r ? (u, d) => {
        r(u, {
            location: n.location,
            params: n.matches ? .[0] ? .params ? ? {},
            unstable_pattern: bn(n.matches),
            errorInfo: d
        });
    } : void 0;
    return a.reduceRight(
        (u, d, h) => {
            let f, v = !1,
                x = null,
                T = null;
            n && (f = o && d.route.id ? o[d.route.id] : void 0, x = d.route.errorElement || kd, s && (l < 0 && h === 0 ? (js(
                "route-fallback", !1,
                "No `HydrateFallback` element provided to render during initial hydration"
            ), v = !0, T = null) : l === h && (v = !0, T = d.route.hydrateFallbackElement || null)));
            let P = t.concat(a.slice(0, h + 1)),
                b = () => {
                    let S;
                    return f ? S = x : v ? S = T : d.route.Component ? S = /* @__PURE__ */ U(d.route.Component, null) : d.route.element ? S = d.route.element : S = u, /* @__PURE__ */ U(
                        Vd, {
                            match: d,
                            routeContext: {
                                outlet: u,
                                matches: P,
                                isDataRoute: n != null
                            },
                            children: S
                        }
                    );
                };
            return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0) ? /* @__PURE__ */ U(
                Os, {
                    location: n.location,
                    revalidation: n.revalidation,
                    component: x,
                    error: f,
                    children: b(),
                    routeContext: {
                        outlet: null,
                        matches: P,
                        isDataRoute: !0
                    },
                    onError: c
                }
            ) : b();
        },
        null
    );
}

function xi(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}

function Fd(e) {
    let t = B(Mt);
    return K(t, xi(e)), t;
}

function Od(e) {
    let t = B(Tn);
    return K(t, xi(e)), t;
}

function jd(e) {
    let t = B(We);
    return K(t, xi(e)), t;
}

function bi(e) {
    let t = jd(e),
        n = t.matches[t.matches.length - 1];
    return K(
        n.route.id,
        `${e} can only be used on routes that contain a unique "id"`
    ), n.route.id;
}

function Bd() {
    return bi(
        "useRouteId"
        /* UseRouteId */
    );
}

function zd() {
    let e = B(wi),
        t = Od(
            "useRouteError"
            /* UseRouteError */
        ),
        n = bi(
            "useRouteError"
            /* UseRouteError */
        );
    return e !== void 0 ? e : t.errors ? .[n];
}

function $d() {
    let {
        router: e
    } = Fd(
        "useNavigate"
        /* UseNavigateStable */
    ), t = bi(
        "useNavigate"
        /* UseNavigateStable */
    ), n = Ne(!1);
    return Fs(() => {
        n.current = !0;
    }), rt(
        async (i, a = {}) => {
            he(n.current, Is), n.current && (typeof i == "number" ? await e.navigate(i) : await e.navigate(i, {
                fromRouteId: t,
                ...a
            }));
        }, [e, t]
    );
}
var za = {};

function js(e, t, n) {
    !t && !za[e] && (za[e] = !0, he(!1, n));
}
var $a = {};

function _a(e, t) {
    !e && !$a[t] && ($a[t] = !0, console.warn(t));
}
var _d = "useOptimistic",
    Ua = ou[_d],
    Ud = () => {};

function Hd(e) {
    return Ua ? Ua(e) : [e, Ud];
}

function Wd(e) {
    let t = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && (e.element && he(!1,
        "You should not include both `Component` and `element` on your route - `Component` will be used."
    ), Object.assign(t, {
        element: U(e.Component),
        Component: void 0
    })), e.HydrateFallback && (e.hydrateFallbackElement && he(!1,
        "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
    ), Object.assign(t, {
        hydrateFallbackElement: U(e.HydrateFallback),
        HydrateFallback: void 0
    })), e.ErrorBoundary && (e.errorElement && he(!1,
        "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
    ), Object.assign(t, {
        errorElement: U(e.ErrorBoundary),
        ErrorBoundary: void 0
    })), t;
}
var Kd = [
        "HydrateFallback",
        "hydrateFallbackElement"
    ],
    Yd = class {
        constructor() {
            this.status = "pending", this.promise = new Promise((e, t) => {
                this.resolve = (n) => {
                    this.status === "pending" && (this.status = "resolved", e(n));
                }, this.reject = (n) => {
                    this.status === "pending" && (this.status = "rejected", t(n));
                };
            });
        }
    };

function Gd({
    router: e,
    flushSync: t,
    onError: n,
    unstable_useTransitions: r
}) {
    r = vd() || r;
    let [a, o] = Se(e.state), [s, l] = Hd(a), [c, u] = Se(), [d, h] = Se({
        isTransitioning: !1
    }), [f, v] = Se(), [x, T] = Se(), [P, b] = Se(), S = Ne( /* @__PURE__ */ new Map()), k = rt(
        (C, {
            deletedFetchers: z,
            newErrors: W,
            flushSync: Y,
            viewTransitionOpts: le
        }) => {
            W && n && Object.values(W).forEach(
                (ae) => n(ae, {
                    location: C.location,
                    params: C.matches[0] ? .params ? ? {},
                    unstable_pattern: bn(C.matches)
                })
            ), C.fetchers.forEach((ae, Z) => {
                ae.data !== void 0 && S.current.set(Z, ae.data);
            }), z.forEach((ae) => S.current.delete(ae)), _a(
                Y === !1 || t != null,
                'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
            );
            let Me = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
            if (_a(
                    le == null || Me,
                    "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
                ), !le || !Me) {
                t && Y ? t(() => o(C)) : r === !1 ? o(C) : un(() => {
                    r === !0 && l((ae) => Ha(ae, C)), o(C);
                });
                return;
            }
            if (t && Y) {
                t(() => {
                    x && (f ? .resolve(), x.skipTransition()), h({
                        isTransitioning: !0,
                        flushSync: !0,
                        currentLocation: le.currentLocation,
                        nextLocation: le.nextLocation
                    });
                });
                let ae = e.window.document.startViewTransition(() => {
                    t(() => o(C));
                });
                ae.finished.finally(() => {
                    t(() => {
                        v(void 0), T(void 0), u(void 0), h({
                            isTransitioning: !1
                        });
                    });
                }), t(() => T(ae));
                return;
            }
            x ? (f ? .resolve(), x.skipTransition(), b({
                state: C,
                currentLocation: le.currentLocation,
                nextLocation: le.nextLocation
            })) : (u(C), h({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: le.currentLocation,
                nextLocation: le.nextLocation
            }));
        }, [
            e.window,
            t,
            x,
            f,
            r,
            l,
            n
        ]
    );
    ir(() => e.subscribe(k), [e, k]), ke(() => {
        d.isTransitioning && !d.flushSync && v(new Yd());
    }, [d]), ke(() => {
        if (f && c && e.window) {
            let C = c,
                z = f.promise,
                W = e.window.document.startViewTransition(async () => {
                    r === !1 ? o(C) : un(() => {
                        r === !0 && l((Y) => Ha(Y, C)), o(C);
                    }), await z;
                });
            W.finished.finally(() => {
                v(void 0), T(void 0), u(void 0), h({
                    isTransitioning: !1
                });
            }), T(W);
        }
    }, [
        c,
        f,
        e.window,
        r,
        l
    ]), ke(() => {
        f && c && s.location.key === c.location.key && f.resolve();
    }, [f, x, s.location, c]), ke(() => {
        !d.isTransitioning && P && (u(P.state), h({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: P.currentLocation,
            nextLocation: P.nextLocation
        }), b(void 0));
    }, [d.isTransitioning, P]);
    let M = fe(() => ({
            createHref: e.createHref,
            encodeLocation: e.encodeLocation,
            go: (C) => e.navigate(C),
            push: (C, z, W) => e.navigate(C, {
                state: z,
                preventScrollReset: W ? .preventScrollReset
            }),
            replace: (C, z, W) => e.navigate(C, {
                replace: !0,
                state: z,
                preventScrollReset: W ? .preventScrollReset
            })
        }), [e]),
        N = e.basename || "/",
        y = fe(
            () => ({
                router: e,
                navigator: M,
                static: !1,
                basename: N,
                onError: n
            }), [e, M, N, n]
        );
    return /* @__PURE__ */ U(ct, null, /* @__PURE__ */ U(Mt.Provider, {
        value: y
    }, /* @__PURE__ */ U(Tn.Provider, {
        value: s
    }, /* @__PURE__ */ U(Ns.Provider, {
        value: S.current
    }, /* @__PURE__ */ U(vi.Provider, {
        value: d
    }, /* @__PURE__ */ U(
        Jd, {
            basename: N,
            location: s.location,
            navigationType: s.historyAction,
            navigator: M,
            unstable_useTransitions: r
        },
        /* @__PURE__ */
        U(
            Xd, {
                routes: e.routes,
                future: e.future,
                state: s,
                onError: n
            }
        )
    ))))), null);
}

function Ha(e, t) {
    return {
        // Don't surface "current location specific" stuff mid-navigation
        // (historyAction, location, matches, loaderData, errors, initialized,
        // restoreScroll, preventScrollReset, blockers, etc.)
        ...e,
        // Only surface "pending/in-flight stuff"
        // (navigation, revalidation, actionData, fetchers, )
        navigation: t.navigation.state !== "idle" ? t.navigation : e.navigation,
        revalidation: t.revalidation !== "idle" ? t.revalidation : e.revalidation,
        actionData: t.navigation.state !== "submitting" ? t.actionData : e.actionData,
        fetchers: t.fetchers
    };
}
var Xd = hs(qd);

function qd({
    routes: e,
    future: t,
    state: n,
    onError: r
}) {
    return Ld(e, void 0, n, r, t);
}

function Zd(e) {
    return Md(e.context);
}

function Jd({
    basename: e = "/",
    children: t = null,
    location: n,
    navigationType: r = "POP",
    navigator: i,
    static: a = !1,
    unstable_useTransitions: o
}) {
    K(!Pn(),
        "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
    );
    let s = e.replace(/^\/*/, "/"),
        l = fe(
            () => ({
                basename: s,
                navigator: i,
                static: a,
                unstable_useTransitions: o,
                future: {}
            }), [s, i, a, o]
        );
    typeof n == "string" && (n = ht(n));
    let {
        pathname: c = "/",
        search: u = "",
        hash: d = "",
        state: h = null,
        key: f = "default"
    } = n, v = fe(() => {
        let x = _e(c, s);
        return x == null ? null : {
            location: {
                pathname: x,
                search: u,
                hash: d,
                state: h,
                key: f
            },
            navigationType: r
        };
    }, [s, c, u, d, h, f, r]);
    return he(
        v != null,
        `<Router basename="${s}"> is not able to match the URL "${c}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`
    ), v == null ? null : /* @__PURE__ */ U(Ue.Provider, {
        value: l
    }, /* @__PURE__ */ U(ar.Provider, {
        children: t,
        value: v
    }));
}
var Hn = "get",
    Wn = "application/x-www-form-urlencoded";

function or(e) {
    return typeof HTMLElement < "u" && e instanceof HTMLElement;
}

function Qd(e) {
    return or(e) && e.tagName.toLowerCase() === "button";
}

function eh(e) {
    return or(e) && e.tagName.toLowerCase() === "form";
}

function th(e) {
    return or(e) && e.tagName.toLowerCase() === "input";
}

function nh(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}

function rh(e, t) {
    return e.button === 0 && // Ignore everything but left clicks
        (!t || t === "_self") && // Let browser handle "target=_blank" etc.
        !nh(e);
}
var jn = null;

function ih() {
    if (jn === null)
        try {
            new FormData(
                document.createElement("form"),
                // @ts-expect-error if FormData supports the submitter parameter, this will throw
                0
            ), jn = !1;
        } catch {
            jn = !0;
        }
    return jn;
}
var ah = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);

function Tr(e) {
    return e != null && !ah.has(e) ? (he(!1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wn}"`
    ), null) : e;
}

function oh(e, t) {
    let n, r, i, a, o;
    if (eh(e)) {
        let s = e.getAttribute("action");
        r = s ? _e(s, t) : null, n = e.getAttribute("method") || Hn, i = Tr(e.getAttribute("enctype")) || Wn, a = new FormData(e);
    } else if (Qd(e) || th(e) && (e.type === "submit" || e.type === "image")) {
        let s = e.form;
        if (s == null)
            throw new Error(
                'Cannot submit a <button> or <input type="submit"> without a <form>'
            );
        let l = e.getAttribute("formaction") || s.getAttribute("action");
        if (r = l ? _e(l, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || Hn, i = Tr(e.getAttribute("formenctype")) || Tr(s.getAttribute("enctype")) || Wn, a = new FormData(s, e), !ih()) {
            let {
                name: c,
                type: u,
                value: d
            } = e;
            if (u === "image") {
                let h = c ? `${c}.` : "";
                a.append(`${h}x`, "0"), a.append(`${h}y`, "0");
            } else c && a.append(c, d);
        }
    } else {
        if (or(e))
            throw new Error(
                'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
            );
        n = Hn, r = null, i = Wn, o = e;
    }
    return a && i === "text/plain" && (o = a, a = void 0), {
        action: r,
        method: n.toLowerCase(),
        encType: i,
        formData: a,
        body: o
    };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function Ti(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t);
}

function sh(e, t, n, r) {
    let i = typeof e == "string" ? new URL(
        e,
        // This can be called during the SSR flow via PrefetchPageLinksImpl so
        // don't assume window is available
        typeof window > "u" ? "server://singlefetch/" : window.location.origin
    ) : e;
    return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && _e(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${r}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${r}`, i;
}
async function lh(e, t) {
    if (e.id in t)
        return t[e.id];
    try {
        let n = await
        import (
            /* @vite-ignore */
            /* webpackIgnore: true */
            e.module
        );
        return t[e.id] = n, n;
    } catch (n) {
        return console.error(
            `Error loading route module \`${e.module}\`, reloading page...`
        ), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {});
    }
}

function ch(e) {
    return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function uh(e, t, n) {
    let r = await Promise.all(
        e.map(async (i) => {
            let a = t.routes[i.route.id];
            if (a) {
                let o = await lh(a, n);
                return o.links ? o.links() : [];
            }
            return [];
        })
    );
    return mh(
        r.flat(1).filter(ch).filter((i) => i.rel === "stylesheet" || i.rel === "preload").map(
            (i) => i.rel === "stylesheet" ? { ...i,
                rel: "prefetch",
                as: "style"
            } : { ...i,
                rel: "prefetch"
            }
        )
    );
}

function Wa(e, t, n, r, i, a) {
    let o = (l, c) => n[c] ? l.route.id !== n[c].route.id : !0,
        s = (l, c) => (
            // param change, /users/123 -> /users/456
            n[c].pathname !== l.pathname || // splat param changed, which is not present in match.path
            // e.g. /files/images/avatar.jpg -> files/finances.xls
            n[c].route.path ? .endsWith("*") && n[c].params["*"] !== l.params["*"]
        );
    return a === "assets" ? t.filter(
        (l, c) => o(l, c) || s(l, c)
    ) : a === "data" ? t.filter((l, c) => {
        let u = r.routes[l.route.id];
        if (!u || !u.hasLoader)
            return !1;
        if (o(l, c) || s(l, c))
            return !0;
        if (l.route.shouldRevalidate) {
            let d = l.route.shouldRevalidate({
                currentUrl: new URL(
                    i.pathname + i.search + i.hash,
                    window.origin
                ),
                currentParams: n[0] ? .params || {},
                nextUrl: new URL(e, window.origin),
                nextParams: l.params,
                defaultShouldRevalidate: !0
            });
            if (typeof d == "boolean")
                return d;
        }
        return !0;
    }) : [];
}

function dh(e, t, {
    includeHydrateFallback: n
} = {}) {
    return hh(
        e.map((r) => {
            let i = t.routes[r.route.id];
            if (!i) return [];
            let a = [i.module];
            return i.clientActionModule && (a = a.concat(i.clientActionModule)), i.clientLoaderModule && (a = a.concat(i.clientLoaderModule)), n && i.hydrateFallbackModule && (a = a.concat(i.hydrateFallbackModule)), i.imports && (a = a.concat(i.imports)), a;
        }).flat(1)
    );
}

function hh(e) {
    return [...new Set(e)];
}

function fh(e) {
    let t = {},
        n = Object.keys(e).sort();
    for (let r of n)
        t[r] = e[r];
    return t;
}

function mh(e, t) {
    let n = /* @__PURE__ */ new Set();
    return new Set(t), e.reduce((r, i) => {
        let a = JSON.stringify(fh(i));
        return n.has(a) || (n.add(a), r.push({
            key: a,
            link: i
        })), r;
    }, []);
}

function Bs() {
    let e = B(Mt);
    return Ti(
        e,
        "You must render this element inside a <DataRouterContext.Provider> element"
    ), e;
}

function ph() {
    let e = B(Tn);
    return Ti(
        e,
        "You must render this element inside a <DataRouterStateContext.Provider> element"
    ), e;
}
var Pi = me(void 0);
Pi.displayName = "FrameworkContext";

function zs() {
    let e = B(Pi);
    return Ti(
        e,
        "You must render this element inside a <HydratedRouter> element"
    ), e;
}

function gh(e, t) {
    let n = B(Pi),
        [r, i] = Se(!1),
        [a, o] = Se(!1),
        {
            onFocus: s,
            onBlur: l,
            onMouseEnter: c,
            onMouseLeave: u,
            onTouchStart: d
        } = t,
        h = Ne(null);
    ke(() => {
        if (e === "render" && o(!0), e === "viewport") {
            let x = (P) => {
                    P.forEach((b) => {
                        o(b.isIntersecting);
                    });
                },
                T = new IntersectionObserver(x, {
                    threshold: 0.5
                });
            return h.current && T.observe(h.current), () => {
                T.disconnect();
            };
        }
    }, [e]), ke(() => {
        if (r) {
            let x = setTimeout(() => {
                o(!0);
            }, 100);
            return () => {
                clearTimeout(x);
            };
        }
    }, [r]);
    let f = () => {
            i(!0);
        },
        v = () => {
            i(!1), o(!1);
        };
    return n ? e !== "intent" ? [a, h, {}] : [
        a,
        h,
        {
            onFocus: Jt(s, f),
            onBlur: Jt(l, v),
            onMouseEnter: Jt(c, f),
            onMouseLeave: Jt(u, v),
            onTouchStart: Jt(d, f)
        }
    ] : [!1, h, {}];
}

function Jt(e, t) {
    return (n) => {
        e && e(n), n.defaultPrevented || t(n);
    };
}

function yh({
    page: e,
    ...t
}) {
    let {
        router: n
    } = Bs(), r = fe(
        () => ot(n.routes, e, n.basename), [n.routes, e, n.basename]
    );
    return r ? /* @__PURE__ */ U(wh, {
        page: e,
        matches: r,
        ...t
    }) : null;
}

function vh(e) {
    let {
        manifest: t,
        routeModules: n
    } = zs(), [r, i] = Se([]);
    return ke(() => {
        let a = !1;
        return uh(e, t, n).then(
            (o) => {
                a || i(o);
            }
        ), () => {
            a = !0;
        };
    }, [e, t, n]), r;
}

function wh({
    page: e,
    matches: t,
    ...n
}) {
    let r = Dt(),
        {
            future: i,
            manifest: a,
            routeModules: o
        } = zs(),
        {
            basename: s
        } = Bs(),
        {
            loaderData: l,
            matches: c
        } = ph(),
        u = fe(
            () => Wa(
                e,
                t,
                c,
                a,
                r,
                "data"
            ), [e, t, c, a, r]
        ),
        d = fe(
            () => Wa(
                e,
                t,
                c,
                a,
                r,
                "assets"
            ), [e, t, c, a, r]
        ),
        h = fe(() => {
            if (e === r.pathname + r.search + r.hash)
                return [];
            let x = /* @__PURE__ */ new Set(),
                T = !1;
            if (t.forEach((b) => {
                    let S = a.routes[b.route.id];
                    !S || !S.hasLoader || (!u.some((k) => k.route.id === b.route.id) && b.route.id in l && o[b.route.id] ? .shouldRevalidate || S.hasClientLoader ? T = !0 : x.add(b.route.id));
                }), x.size === 0)
                return [];
            let P = sh(
                e,
                s,
                i.unstable_trailingSlashAwareDataRequests,
                "data"
            );
            return T && x.size > 0 && P.searchParams.set(
                "_routes",
                t.filter((b) => x.has(b.route.id)).map((b) => b.route.id).join(",")
            ), [P.pathname + P.search];
        }, [
            s,
            i.unstable_trailingSlashAwareDataRequests,
            l,
            r,
            a,
            u,
            t,
            e,
            o
        ]),
        f = fe(
            () => dh(d, a), [d, a]
        ),
        v = vh(d);
    return /* @__PURE__ */ U(ct, null, h.map((x) => /* @__PURE__ */ U("link", {
        key: x,
        rel: "prefetch",
        as: "fetch",
        href: x,
        ...n
    })), f.map((x) => /* @__PURE__ */ U("link", {
        key: x,
        rel: "modulepreload",
        href: x,
        ...n
    })), v.map(({
        key: x,
        link: T
    }) => (
        // these don't spread `linkProps` because they are full link descriptors
        // already with their own props
        /* @__PURE__ */
        U(
            "link", {
                key: x,
                nonce: n.nonce,
                ...T,
                crossOrigin: T.crossOrigin ? ? n.crossOrigin
            }
        )
    )));
}

function xh(...e) {
    return (t) => {
        e.forEach((n) => {
            typeof n == "function" ? n(t) : n != null && (n.current = t);
        });
    };
}
var bh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    bh && (window.__reactRouterVersion = // @ts-expect-error
        "7.13.0");
} catch {}

function Th(e, t) {
    return Yu({
        basename: t ? .basename,
        getContext: t ? .getContext,
        future: t ? .future,
        history: cu({
            window: t ? .window
        }),
        hydrationData: Ph(),
        routes: e,
        mapRouteProperties: Wd,
        hydrationRouteProperties: Kd,
        dataStrategy: t ? .dataStrategy,
        patchRoutesOnNavigation: t ? .patchRoutesOnNavigation,
        window: t ? .window,
        unstable_instrumentations: t ? .unstable_instrumentations
    }).initialize();
}

function Ph() {
    let e = window ? .__staticRouterHydrationData;
    return e && e.errors && (e = {
        ...e,
        errors: Sh(e.errors)
    }), e;
}

function Sh(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, i] of t)
        if (i && i.__type === "RouteErrorResponse")
            n[r] = new xn(
                i.status,
                i.statusText,
                i.data,
                i.internal === !0
            );
        else if (i && i.__type === "Error") {
        if (i.__subType) {
            let a = window[i.__subType];
            if (typeof a == "function")
                try {
                    let o = new a(i.message);
                    o.stack = "", n[r] = o;
                } catch {}
        }
        if (n[r] == null) {
            let a = new Error(i.message);
            a.stack = "", n[r] = a;
        }
    } else
        n[r] = i;
    return n;
}
var $s = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    xe = Et(
        function({
            onClick: t,
            discover: n = "render",
            prefetch: r = "none",
            relative: i,
            reloadDocument: a,
            replace: o,
            state: s,
            target: l,
            to: c,
            preventScrollReset: u,
            viewTransition: d,
            unstable_defaultShouldRevalidate: h,
            ...f
        }, v) {
            let {
                basename: x,
                unstable_useTransitions: T
            } = B(Ue), P = typeof c == "string" && $s.test(c), b = xs(c, x);
            c = b.to;
            let S = Sd(c, {
                    relative: i
                }),
                [k, M, N] = gh(
                    r,
                    f
                ),
                y = Mh(c, {
                    replace: o,
                    state: s,
                    target: l,
                    preventScrollReset: u,
                    relative: i,
                    viewTransition: d,
                    unstable_defaultShouldRevalidate: h,
                    unstable_useTransitions: T
                });

            function C(W) {
                t && t(W), W.defaultPrevented || y(W);
            }
            let z = (
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                /* @__PURE__ */
                U(
                    "a", {
                        ...f,
                        ...N,
                        href: b.absoluteURL || S,
                        onClick: b.isExternal || a ? t : C,
                        ref: xh(v, M),
                        target: l,
                        "data-discover": !P && n === "render" ? "true" : void 0
                    }
                )
            );
            return k && !P ? /* @__PURE__ */ U(ct, null, z, /* @__PURE__ */ U(yh, {
                page: S
            })) : z;
        }
    );
xe.displayName = "Link";
var Rh = Et(
    function({
        "aria-current": t = "page",
        caseSensitive: n = !1,
        className: r = "",
        end: i = !1,
        style: a,
        to: o,
        viewTransition: s,
        children: l,
        ...c
    }, u) {
        let d = Sn(o, {
                relative: c.relative
            }),
            h = Dt(),
            f = B(Tn),
            {
                navigator: v,
                basename: x
            } = B(Ue),
            T = f != null && // Conditional usage is OK here because the usage of a data router is static
            // eslint-disable-next-line react-hooks/rules-of-hooks
            Nh(d) && s === !0,
            P = v.encodeLocation ? v.encodeLocation(d).pathname : d.pathname,
            b = h.pathname,
            S = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
        n || (b = b.toLowerCase(), S = S ? S.toLowerCase() : null, P = P.toLowerCase()), S && x && (S = _e(S, x) || S);
        const k = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
        let M = b === P || !i && b.startsWith(P) && b.charAt(k) === "/",
            N = S != null && (S === P || !i && S.startsWith(P) && S.charAt(P.length) === "/"),
            y = {
                isActive: M,
                isPending: N,
                isTransitioning: T
            },
            C = M ? t : void 0,
            z;
        typeof r == "function" ? z = r(y) : z = [
            r,
            M ? "active" : null,
            N ? "pending" : null,
            T ? "transitioning" : null
        ].filter(Boolean).join(" ");
        let W = typeof a == "function" ? a(y) : a;
        return /* @__PURE__ */ U(
            xe, {
                ...c,
                "aria-current": C,
                className: z,
                ref: u,
                style: W,
                to: o,
                viewTransition: s
            },
            typeof l == "function" ? l(y) : l
        );
    }
);
Rh.displayName = "NavLink";
var Ch = Et(
    ({
        discover: e = "render",
        fetcherKey: t,
        navigate: n,
        reloadDocument: r,
        replace: i,
        state: a,
        method: o = Hn,
        action: s,
        onSubmit: l,
        relative: c,
        preventScrollReset: u,
        viewTransition: d,
        unstable_defaultShouldRevalidate: h,
        ...f
    }, v) => {
        let {
            unstable_useTransitions: x
        } = B(Ue), T = Ah(), P = kh(s, {
            relative: c
        }), b = o.toLowerCase() === "get" ? "get" : "post", S = typeof s == "string" && $s.test(s);
        return /* @__PURE__ */ U(
            "form", {
                ref: v,
                method: b,
                action: P,
                onSubmit: r ? l : (M) => {
                    if (l && l(M), M.defaultPrevented) return;
                    M.preventDefault();
                    let N = M.nativeEvent.submitter,
                        y = N ? .getAttribute("formmethod") || o,
                        C = () => T(N || M.currentTarget, {
                            fetcherKey: t,
                            method: y,
                            navigate: n,
                            replace: i,
                            state: a,
                            relative: c,
                            preventScrollReset: u,
                            viewTransition: d,
                            unstable_defaultShouldRevalidate: h
                        });
                    x && n !== !1 ? un(() => C()) : C();
                },
                ...f,
                "data-discover": !S && e === "render" ? "true" : void 0
            }
        );
    }
);
Ch.displayName = "Form";

function Eh(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}

function _s(e) {
    let t = B(Mt);
    return K(t, Eh(e)), t;
}

function Mh(e, {
    target: t,
    replace: n,
    state: r,
    preventScrollReset: i,
    relative: a,
    viewTransition: o,
    unstable_defaultShouldRevalidate: s,
    unstable_useTransitions: l
} = {}) {
    let c = Rd(),
        u = Dt(),
        d = Sn(e, {
            relative: a
        });
    return rt(
        (h) => {
            if (rh(h, t)) {
                h.preventDefault();
                let f = n !== void 0 ? n : qe(u) === qe(d),
                    v = () => c(e, {
                        replace: f,
                        state: r,
                        preventScrollReset: i,
                        relative: a,
                        viewTransition: o,
                        unstable_defaultShouldRevalidate: s
                    });
                l ? un(() => v()) : v();
            }
        }, [
            u,
            c,
            d,
            n,
            r,
            t,
            e,
            i,
            a,
            o,
            s,
            l
        ]
    );
}
var Dh = 0,
    Lh = () => `__${String(++Dh)}__`;

function Ah() {
    let {
        router: e
    } = _s(
        "useSubmit"
        /* UseSubmit */
    ), {
        basename: t
    } = B(Ue), n = Bd(), r = e.fetch, i = e.navigate;
    return rt(
        async (a, o = {}) => {
            let {
                action: s,
                method: l,
                encType: c,
                formData: u,
                body: d
            } = oh(
                a,
                t
            );
            if (o.navigate === !1) {
                let h = o.fetcherKey || Lh();
                await r(h, n, o.action || s, {
                    unstable_defaultShouldRevalidate: o.unstable_defaultShouldRevalidate,
                    preventScrollReset: o.preventScrollReset,
                    formData: u,
                    body: d,
                    formMethod: o.method || l,
                    formEncType: o.encType || c,
                    flushSync: o.flushSync
                });
            } else
                await i(o.action || s, {
                    unstable_defaultShouldRevalidate: o.unstable_defaultShouldRevalidate,
                    preventScrollReset: o.preventScrollReset,
                    formData: u,
                    body: d,
                    formMethod: o.method || l,
                    formEncType: o.encType || c,
                    replace: o.replace,
                    state: o.state,
                    fromRouteId: n,
                    flushSync: o.flushSync,
                    viewTransition: o.viewTransition
                });
        }, [r, i, t, n]
    );
}

function kh(e, {
    relative: t
} = {}) {
    let {
        basename: n
    } = B(Ue), r = B(We);
    K(r, "useFormAction must be used inside a RouteContext");
    let [i] = r.matches.slice(-1), a = { ...Sn(e || ".", {
            relative: t
        })
    }, o = Dt();
    if (e == null) {
        a.search = o.search;
        let s = new URLSearchParams(a.search),
            l = s.getAll("index");
        if (l.some((u) => u === "")) {
            s.delete("index"), l.filter((d) => d).forEach((d) => s.append("index", d));
            let u = s.toString();
            a.search = u ? `?${u}` : "";
        }
    }
    return (!e || e === ".") && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (a.pathname = a.pathname === "/" ? n : Ye([n, a.pathname])), qe(a);
}

function Nh(e, {
    relative: t
} = {}) {
    let n = B(vi);
    K(
        n != null,
        "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
    );
    let {
        basename: r
    } = _s(
        "useViewTransitionState"
        /* useViewTransitionState */
    ), i = Sn(e, {
        relative: t
    });
    if (!n.isTransitioning)
        return !1;
    let a = _e(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        o = _e(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return qn(i.pathname, o) != null || qn(i.pathname, a) != null;
}
const Si = me({});

function Ri(e) {
    const t = Ne(null);
    return t.current === null && (t.current = e()), t.current;
}
const Ci = typeof window < "u",
    Us = Ci ? ir : ke,
    sr = /* @__PURE__ */ me(null);

function Ei(e, t) {
    e.indexOf(t) === -1 && e.push(t);
}

function Mi(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
}
const tt = (e, t, n) => n > t ? t : n < e ? e : n;
let Di = () => {};
const nt = {},
    Hs = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);

function Ws(e) {
    return typeof e == "object" && e !== null;
}
const Ks = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Li(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
}
const $e = /* @__NO_SIDE_EFFECTS__ */ (e) => e,
    Vh = (e, t) => (n) => t(e(n)),
    Rn = (...e) => e.reduce(Vh),
    mn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r;
    };
class Ai {
    constructor() {
        this.subscriptions = [];
    }
    add(t) {
        return Ei(this.subscriptions, t), () => Mi(this.subscriptions, t);
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let a = 0; a < i; a++) {
                    const o = this.subscriptions[a];
                    o && o(t, n, r);
                }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
const Ge = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3,
    ze = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;

function Ys(e, t) {
    return t ? e * (1e3 / t) : 0;
}
const Gs = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    Ih = 1e-7,
    Fh = 12;

function Oh(e, t, n, r, i) {
    let a, o, s = 0;
    do
        o = t + (n - t) / 2, a = Gs(o, r, i) - e, a > 0 ? n = o : t = o;
    while (Math.abs(a) > Ih && ++s < Fh);
    return o;
}

function Cn(e, t, n, r) {
    if (e === t && n === r)
        return $e;
    const i = (a) => Oh(a, 0, 1, e, n);
    return (a) => a === 0 || a === 1 ? a : Gs(i(a), t, r);
}
const Xs = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    qs = (e) => (t) => 1 - e(1 - t),
    Zs = /* @__PURE__ */ Cn(0.33, 1.53, 0.69, 0.99),
    ki = /* @__PURE__ */ qs(Zs),
    Js = /* @__PURE__ */ Xs(ki),
    Qs = (e) => (e *= 2) < 1 ? 0.5 * ki(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    Ni = (e) => 1 - Math.sin(Math.acos(e)),
    el = qs(Ni),
    tl = Xs(Ni),
    jh = /* @__PURE__ */ Cn(0.42, 0, 1, 1),
    Bh = /* @__PURE__ */ Cn(0, 0, 0.58, 1),
    nl = /* @__PURE__ */ Cn(0.42, 0, 0.58, 1),
    zh = (e) => Array.isArray(e) && typeof e[0] != "number",
    rl = (e) => Array.isArray(e) && typeof e[0] == "number",
    $h = {
        linear: $e,
        easeIn: jh,
        easeInOut: nl,
        easeOut: Bh,
        circIn: Ni,
        circInOut: tl,
        circOut: el,
        backIn: ki,
        backInOut: Js,
        backOut: Zs,
        anticipate: Qs
    },
    _h = (e) => typeof e == "string",
    Ka = (e) => {
        if (rl(e)) {
            Di(e.length === 4);
            const [t, n, r, i] = e;
            return Cn(t, n, r, i);
        } else if (_h(e))
            return $h[e];
        return e;
    },
    Bn = [
        "setup",
        // Compute
        "read",
        // Read
        "resolveKeyframes",
        // Write/Read/Write/Read
        "preUpdate",
        // Compute
        "update",
        // Compute
        "preRender",
        // Compute
        "render",
        // Write
        "postRender"
        // Compute
    ];

function Uh(e, t) {
    let n = /* @__PURE__ */ new Set(),
        r = /* @__PURE__ */ new Set(),
        i = !1,
        a = !1;
    const o = /* @__PURE__ */ new WeakSet();
    let s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function l(u) {
        o.has(u) && (c.schedule(u), e()), u(s);
    }
    const c = {
        /**
         * Schedule a process to run on the next frame.
         */
        schedule: (u, d = !1, h = !1) => {
            const v = h && i ? n : r;
            return d && o.add(u), v.has(u) || v.add(u), u;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */
        cancel: (u) => {
            r.delete(u), o.delete(u);
        },
        /**
         * Execute all schedule callbacks.
         */
        process: (u) => {
            if (s = u, i) {
                a = !0;
                return;
            }
            i = !0, [n, r] = [r, n], n.forEach(l), n.clear(), i = !1, a && (a = !1, c.process(u));
        }
    };
    return c;
}
const Hh = 40;

function il(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        a = () => n = !0,
        o = Bn.reduce((S, k) => (S[k] = Uh(a), S), {}),
        {
            setup: s,
            read: l,
            resolveKeyframes: c,
            preUpdate: u,
            update: d,
            preRender: h,
            render: f,
            postRender: v
        } = o,
        x = () => {
            const S = nt.useManualTiming ? i.timestamp : performance.now();
            n = !1, nt.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(S - i.timestamp, Hh), 1)), i.timestamp = S, i.isProcessing = !0, s.process(i), l.process(i), c.process(i), u.process(i), d.process(i), h.process(i), f.process(i), v.process(i), i.isProcessing = !1, n && t && (r = !1, e(x));
        },
        T = () => {
            n = !0, r = !0, i.isProcessing || e(x);
        };
    return {
        schedule: Bn.reduce((S, k) => {
            const M = o[k];
            return S[k] = (N, y = !1, C = !1) => (n || T(), M.schedule(N, y, C)), S;
        }, {}),
        cancel: (S) => {
            for (let k = 0; k < Bn.length; k++)
                o[Bn[k]].cancel(S);
        },
        state: i,
        steps: o
    };
}
const {
    schedule: ne,
    cancel: ut,
    state: ye,
    steps: Pr
} = /* @__PURE__ */ il(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $e, !0);
let Kn;

function Wh() {
    Kn = void 0;
}
const Ee = {
        now: () => (Kn === void 0 && Ee.set(ye.isProcessing || nt.useManualTiming ? ye.timestamp : performance.now()), Kn),
        set: (e) => {
            Kn = e, queueMicrotask(Wh);
        }
    },
    al = (e) => (t) => typeof t == "string" && t.startsWith(e),
    Vi = /* @__PURE__ */ al("--"),
    Kh = /* @__PURE__ */ al("var(--"),
    Ii = (e) => Kh(e) ? Yh.test(e.split("/*")[0].trim()) : !1,
    Yh = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Ut = {
        test: (e) => typeof e == "number",
        parse: parseFloat,
        transform: (e) => e
    },
    pn = {
        ...Ut,
        transform: (e) => tt(0, 1, e)
    },
    zn = {
        ...Ut,
        default: 1
    },
    an = (e) => Math.round(e * 1e5) / 1e5,
    Fi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Gh(e) {
    return e == null;
}
const Xh = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Oi = (e, t) => (n) => !!(typeof n == "string" && Xh.test(n) && n.startsWith(e) || t && !Gh(n) && Object.prototype.hasOwnProperty.call(n, t)),
    ol = (e, t, n) => (r) => {
        if (typeof r != "string")
            return r;
        const [i, a, o, s] = r.match(Fi);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(a),
            [n]: parseFloat(o),
            alpha: s !== void 0 ? parseFloat(s) : 1
        };
    },
    qh = (e) => tt(0, 255, e),
    Sr = {
        ...Ut,
        transform: (e) => Math.round(qh(e))
    },
    Pt = {
        test: /* @__PURE__ */ Oi("rgb", "red"),
        parse: /* @__PURE__ */ ol("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Sr.transform(e) + ", " + Sr.transform(t) + ", " + Sr.transform(n) + ", " + an(pn.transform(r)) + ")"
    };

function Zh(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    };
}
const _r = {
        test: /* @__PURE__ */ Oi("#"),
        parse: Zh,
        transform: Pt.transform
    },
    En = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
        test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`
    }),
    at = /* @__PURE__ */ En("deg"),
    Xe = /* @__PURE__ */ En("%"),
    _ = /* @__PURE__ */ En("px"),
    Jh = /* @__PURE__ */ En("vh"),
    Qh = /* @__PURE__ */ En("vw"),
    Ya = {
        ...Xe,
        parse: (e) => Xe.parse(e) / 100,
        transform: (e) => Xe.transform(e * 100)
    },
    Vt = {
        test: /* @__PURE__ */ Oi("hsl", "hue"),
        parse: /* @__PURE__ */ ol("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + Xe.transform(an(t)) + ", " + Xe.transform(an(n)) + ", " + an(pn.transform(r)) + ")"
    },
    de = {
        test: (e) => Pt.test(e) || _r.test(e) || Vt.test(e),
        parse: (e) => Pt.test(e) ? Pt.parse(e) : Vt.test(e) ? Vt.parse(e) : _r.parse(e),
        transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Pt.transform(e) : Vt.transform(e),
        getAnimatableNone: (e) => {
            const t = de.parse(e);
            return t.alpha = 0, de.transform(t);
        }
    },
    ef = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function tf(e) {
    return isNaN(e) && typeof e == "string" && (e.match(Fi) ? .length || 0) + (e.match(ef) ? .length || 0) > 0;
}
const sl = "number",
    ll = "color",
    nf = "var",
    rf = "var(",
    Ga = "${}",
    af = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function gn(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let a = 0;
    const s = t.replace(af, (l) => (de.test(l) ? (r.color.push(a), i.push(ll), n.push(de.parse(l))) : l.startsWith(rf) ? (r.var.push(a), i.push(nf), n.push(l)) : (r.number.push(a), i.push(sl), n.push(parseFloat(l))), ++a, Ga)).split(Ga);
    return {
        values: n,
        split: s,
        indexes: r,
        types: i
    };
}

function cl(e) {
    return gn(e).values;
}

function ul(e) {
    const {
        split: t,
        types: n
    } = gn(e), r = t.length;
    return (i) => {
        let a = "";
        for (let o = 0; o < r; o++)
            if (a += t[o], i[o] !== void 0) {
                const s = n[o];
                s === sl ? a += an(i[o]) : s === ll ? a += de.transform(i[o]) : a += i[o];
            }
        return a;
    };
}
const of = (e) => typeof e == "number" ? 0 : de.test(e) ? de.getAnimatableNone(e) : e;

function sf(e) {
    const t = cl(e);
    return ul(e)(t.map( of ));
}
const dt = {
    test: tf,
    parse: cl,
    createTransformer: ul,
    getAnimatableNone: sf
};

function Rr(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}

function lf({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        a = 0,
        o = 0;
    if (!t)
        i = a = o = n;
    else {
        const s = n < 0.5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - s;
        i = Rr(l, s, e + 1 / 3), a = Rr(l, s, e), o = Rr(l, s, e - 1 / 3);
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(a * 255),
        blue: Math.round(o * 255),
        alpha: r
    };
}

function Zn(e, t) {
    return (n) => n > 0 ? t : e;
}
const re = (e, t, n) => e + (t - e) * n,
    Cr = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i);
    },
    cf = [_r, Pt, Vt],
    uf = (e) => cf.find((t) => t.test(e));

function Xa(e) {
    const t = uf(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === Vt && (n = lf(n)), n;
}
const qa = (e, t) => {
        const n = Xa(e),
            r = Xa(t);
        if (!n || !r)
            return Zn(e, t);
        const i = { ...n
        };
        return (a) => (i.red = Cr(n.red, r.red, a), i.green = Cr(n.green, r.green, a), i.blue = Cr(n.blue, r.blue, a), i.alpha = re(n.alpha, r.alpha, a), Pt.transform(i));
    },
    Ur = /* @__PURE__ */ new Set(["none", "hidden"]);

function df(e, t) {
    return Ur.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}

function hf(e, t) {
    return (n) => re(e, t, n);
}

function ji(e) {
    return typeof e == "number" ? hf : typeof e == "string" ? Ii(e) ? Zn : de.test(e) ? qa : pf : Array.isArray(e) ? dl : typeof e == "object" ? de.test(e) ? qa : ff : Zn;
}

function dl(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((a, o) => ji(a)(a, t[o]));
    return (a) => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](a);
        return n;
    };
}

function ff(e, t) {
    const n = { ...e,
            ...t
        },
        r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = ji(e[i])(e[i], t[i]));
    return (i) => {
        for (const a in r)
            n[a] = r[a](i);
        return n;
    };
}

function mf(e, t) {
    const n = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let i = 0; i < t.values.length; i++) {
        const a = t.types[i],
            o = e.indexes[a][r[a]],
            s = e.values[o] ? ? 0;
        n[i] = s, r[a]++;
    }
    return n;
}
const pf = (e, t) => {
    const n = dt.createTransformer(t),
        r = gn(e),
        i = gn(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Ur.has(e) && !i.values.length || Ur.has(t) && !r.values.length ? df(e, t) : Rn(dl(mf(r, i), i.values), n) : Zn(e, t);
};

function hl(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? re(e, t, n) : ji(e)(e, t);
}
const gf = (e) => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: (n = !0) => ne.update(t, n),
            stop: () => ut(t),
            /**
             * If we're processing this frame we can use the
             * framelocked timestamp to keep things in sync.
             */
            now: () => ye.isProcessing ? ye.timestamp : Ee.now()
        };
    },
    fl = (e, t, n = 10) => {
        let r = "";
        const i = Math.max(Math.round(t / n), 2);
        for (let a = 0; a < i; a++)
            r += Math.round(e(a / (i - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0, r.length - 2)})`;
    },
    Jn = 2e4;

function Bi(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Jn;)
        t += n, r = e.next(t);
    return t >= Jn ? 1 / 0 : t;
}

function yf(e, t = 100, n) {
    const r = n({ ...e,
            keyframes: [0, t]
        }),
        i = Math.min(Bi(r), Jn);
    return {
        type: "keyframes",
        ease: (a) => r.next(i * a).value / t,
        duration: /* @__PURE__ */ ze(i)
    };
}
const vf = 5;

function ml(e, t, n) {
    const r = Math.max(t - vf, 0);
    return Ys(n - e(r), t - r);
}
const se = {
        // Default spring physics
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        // Default duration/bounce-based options
        duration: 800,
        // in ms
        bounce: 0.3,
        visualDuration: 0.3,
        // in seconds
        // Rest thresholds
        restSpeed: {
            granular: 0.01,
            default: 2
        },
        restDelta: {
            granular: 5e-3,
            default: 0.5
        },
        // Limits
        minDuration: 0.01,
        // in seconds
        maxDuration: 10,
        // in seconds
        minDamping: 0.05,
        maxDamping: 1
    },
    Er = 1e-3;

function wf({
    duration: e = se.duration,
    bounce: t = se.bounce,
    velocity: n = se.velocity,
    mass: r = se.mass
}) {
    let i, a, o = 1 - t;
    o = tt(se.minDamping, se.maxDamping, o), e = tt(se.minDuration, se.maxDuration, /* @__PURE__ */ ze(e)), o < 1 ? (i = (c) => {
        const u = c * o,
            d = u * e,
            h = u - n,
            f = Hr(c, o),
            v = Math.exp(-d);
        return Er - h / f * v;
    }, a = (c) => {
        const d = c * o * e,
            h = d * n + n,
            f = Math.pow(o, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-d),
            x = Hr(Math.pow(c, 2), o);
        return (-i(c) + Er > 0 ? -1 : 1) * ((h - f) * v) / x;
    }) : (i = (c) => {
        const u = Math.exp(-c * e),
            d = (c - n) * e + 1;
        return -Er + u * d;
    }, a = (c) => {
        const u = Math.exp(-c * e),
            d = (n - c) * (e * e);
        return u * d;
    });
    const s = 5 / e,
        l = bf(i, a, s);
    if (e = /* @__PURE__ */ Ge(e), isNaN(l))
        return {
            stiffness: se.stiffness,
            damping: se.damping,
            duration: e
        }; {
        const c = Math.pow(l, 2) * r;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(r * c),
            duration: e
        };
    }
}
const xf = 12;

function bf(e, t, n) {
    let r = n;
    for (let i = 1; i < xf; i++)
        r = r - e(r) / t(r);
    return r;
}

function Hr(e, t) {
    return e * Math.sqrt(1 - t * t);
}
const Tf = ["duration", "bounce"],
    Pf = ["stiffness", "damping", "mass"];

function Za(e, t) {
    return t.some((n) => e[n] !== void 0);
}

function Sf(e) {
    let t = {
        velocity: se.velocity,
        stiffness: se.stiffness,
        damping: se.damping,
        mass: se.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Za(e, Pf) && Za(e, Tf))
        if (e.visualDuration) {
            const n = e.visualDuration,
                r = 2 * Math.PI / (n * 1.2),
                i = r * r,
                a = 2 * tt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: se.mass,
                stiffness: i,
                damping: a
            };
        } else {
            const n = wf(e);
            t = {
                ...t,
                ...n,
                mass: se.mass
            }, t.isResolvedFromDuration = !0;
        }
    return t;
}

function Qn(e = se.visualDuration, t = se.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {
        restSpeed: r,
        restDelta: i
    } = n;
    const a = n.keyframes[0],
        o = n.keyframes[n.keyframes.length - 1],
        s = {
            done: !1,
            value: a
        },
        {
            stiffness: l,
            damping: c,
            mass: u,
            duration: d,
            velocity: h,
            isResolvedFromDuration: f
        } = Sf({
            ...n,
            velocity: - /* @__PURE__ */ ze(n.velocity || 0)
        }),
        v = h || 0,
        x = c / (2 * Math.sqrt(l * u)),
        T = o - a,
        P = /* @__PURE__ */ ze(Math.sqrt(l / u)),
        b = Math.abs(T) < 5;
    r || (r = b ? se.restSpeed.granular : se.restSpeed.default), i || (i = b ? se.restDelta.granular : se.restDelta.default);
    let S;
    if (x < 1) {
        const M = Hr(P, x);
        S = (N) => {
            const y = Math.exp(-x * P * N);
            return o - y * ((v + x * P * T) / M * Math.sin(M * N) + T * Math.cos(M * N));
        };
    } else if (x === 1)
        S = (M) => o - Math.exp(-P * M) * (T + (v + P * T) * M);
    else {
        const M = P * Math.sqrt(x * x - 1);
        S = (N) => {
            const y = Math.exp(-x * P * N),
                C = Math.min(M * N, 300);
            return o - y * ((v + x * P * T) * Math.sinh(C) + M * T * Math.cosh(C)) / M;
        };
    }
    const k = {
        calculatedDuration: f && d || null,
        next: (M) => {
            const N = S(M);
            if (f)
                s.done = M >= d;
            else {
                let y = M === 0 ? v : 0;
                x < 1 && (y = M === 0 ? /* @__PURE__ */ Ge(v) : ml(S, M, N));
                const C = Math.abs(y) <= r,
                    z = Math.abs(o - N) <= i;
                s.done = C && z;
            }
            return s.value = s.done ? o : N, s;
        },
        toString: () => {
            const M = Math.min(Bi(k), Jn),
                N = fl((y) => k.next(M * y).value, M, 30);
            return M + "ms " + N;
        },
        toTransition: () => {}
    };
    return k;
}
Qn.applyToOptions = (e) => {
    const t = yf(e, 100, Qn);
    return e.ease = t.ease, e.duration = /* @__PURE__ */ Ge(t.duration), e.type = "keyframes", e;
};

function Wr({
    keyframes: e,
    velocity: t = 0,
    power: n = 0.8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: a = 500,
    modifyTarget: o,
    min: s,
    max: l,
    restDelta: c = 0.5,
    restSpeed: u
}) {
    const d = e[0],
        h = {
            done: !1,
            value: d
        },
        f = (C) => s !== void 0 && C < s || l !== void 0 && C > l,
        v = (C) => s === void 0 ? l : l === void 0 || Math.abs(s - C) < Math.abs(l - C) ? s : l;
    let x = n * t;
    const T = d + x,
        P = o === void 0 ? T : o(T);
    P !== T && (x = P - d);
    const b = (C) => -x * Math.exp(-C / r),
        S = (C) => P + b(C),
        k = (C) => {
            const z = b(C),
                W = S(C);
            h.done = Math.abs(z) <= c, h.value = h.done ? P : W;
        };
    let M, N;
    const y = (C) => {
        f(h.value) && (M = C, N = Qn({
            keyframes: [h.value, v(h.value)],
            velocity: ml(S, C, h.value),
            // TODO: This should be passing * 1000
            damping: i,
            stiffness: a,
            restDelta: c,
            restSpeed: u
        }));
    };
    return y(0), {
        calculatedDuration: null,
        next: (C) => {
            let z = !1;
            return !N && M === void 0 && (z = !0, k(C), y(C)), M !== void 0 && C >= M ? N.next(C - M) : (!z && k(C), h);
        }
    };
}

function Rf(e, t, n) {
    const r = [],
        i = n || nt.mix || hl,
        a = e.length - 1;
    for (let o = 0; o < a; o++) {
        let s = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || $e : t;
            s = Rn(l, s);
        }
        r.push(s);
    }
    return r;
}

function Cf(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const a = e.length;
    if (Di(a === t.length), a === 1)
        return () => t[0];
    if (a === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = Rf(t, r, i),
        l = s.length,
        c = (u) => {
            if (o && u < e[0])
                return t[0];
            let d = 0;
            if (l > 1)
                for (; d < e.length - 2 && !(u < e[d + 1]); d++)
            ;
            const h = /* @__PURE__ */ mn(e[d], e[d + 1], u);
            return s[d](h);
        };
    return n ? (u) => c(tt(e[0], e[a - 1], u)) : c;
}

function Ef(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = /* @__PURE__ */ mn(0, t, r);
        e.push(re(n, 1, i));
    }
}

function Mf(e) {
    const t = [0];
    return Ef(t, e.length - 1), t;
}

function Df(e, t) {
    return e.map((n) => n * t);
}

function Lf(e, t) {
    return e.map(() => t || nl).splice(0, e.length - 1);
}

function on({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = zh(r) ? r.map(Ka) : Ka(r),
        a = {
            done: !1,
            value: t[0]
        },
        o = Df(
            // Only use the provided offsets if they're the correct length
            // TODO Maybe we should warn here if there's a length mismatch
            n && n.length === t.length ? n : Mf(t),
            e
        ),
        s = Cf(o, t, {
            ease: Array.isArray(i) ? i : Lf(t, i)
        });
    return {
        calculatedDuration: e,
        next: (l) => (a.value = s(l), a.done = l >= e, a)
    };
}
const Af = (e) => e !== null;

function zi(e, {
    repeat: t,
    repeatType: n = "loop"
}, r, i = 1) {
    const a = e.filter(Af),
        s = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : a.length - 1;
    return !s || r === void 0 ? a[s] : r;
}
const kf = {
    decay: Wr,
    inertia: Wr,
    tween: on,
    keyframes: on,
    spring: Qn
};

function pl(e) {
    typeof e.type == "string" && (e.type = kf[e.type]);
}
class $i {
    constructor() {
        this.updateFinished();
    }
    get finished() {
        return this._finished;
    }
    updateFinished() {
        this._finished = new Promise((t) => {
            this.resolve = t;
        });
    }
    notifyFinished() {
        this.resolve();
    }
    /**
     * Allows the animation to be awaited.
     *
     * @deprecated Use `finished` instead.
     */
    then(t, n) {
        return this.finished.then(t, n);
    }
}
const Nf = (e) => e / 100;
class _i extends $i {
    constructor(t) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            const {
                motionValue: n
            } = this.options;
            n && n.updatedAt !== Ee.now() && this.tick(Ee.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop ? .());
        }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
    }
    initAnimation() {
        const {
            options: t
        } = this;
        pl(t);
        const {
            type: n = on,
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: a,
            velocity: o = 0
        } = t;
        let {
            keyframes: s
        } = t;
        const l = n || on;
        l !== on && typeof s[0] != "number" && (this.mixKeyframes = Rn(Nf, hl(s[0], s[1])), s = [0, 100]);
        const c = l({ ...t,
            keyframes: s
        });
        a === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...s].reverse(),
            velocity: -o
        })), c.calculatedDuration === null && (c.calculatedDuration = Bi(c));
        const {
            calculatedDuration: u
        } = c;
        this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = c;
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
    }
    tick(t, n = !1) {
        const {
            generator: r,
            totalDuration: i,
            mixKeyframes: a,
            mirroredGenerator: o,
            resolvedDuration: s,
            calculatedDuration: l
        } = this;
        if (this.startTime === null)
            return r.next(0);
        const {
            delay: c = 0,
            keyframes: u,
            repeat: d,
            repeatType: h,
            repeatDelay: f,
            type: v,
            onUpdate: x,
            finalKeyframe: T
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
        const P = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
            b = this.playbackSpeed >= 0 ? P < 0 : P > i;
        this.currentTime = Math.max(P, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let S = this.currentTime,
            k = r;
        if (d) {
            const C = Math.min(this.currentTime, i) / s;
            let z = Math.floor(C),
                W = C % 1;
            !W && C >= 1 && (W = 1), W === 1 && z--, z = Math.min(z, d + 1), !!(z % 2) && (h === "reverse" ? (W = 1 - W, f && (W -= f / s)) : h === "mirror" && (k = o)), S = tt(0, 1, W) * s;
        }
        const M = b ? {
            done: !1,
            value: u[0]
        } : k.next(S);
        a && (M.value = a(M.value));
        let {
            done: N
        } = M;
        !b && l !== null && (N = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const y = this.holdTime === null && (this.state === "finished" || this.state === "running" && N);
        return y && v !== Wr && (M.value = zi(u, this.options, T, this.speed)), x && x(M.value), y && this.finish(), M;
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(t, n) {
        return this.finished.then(t, n);
    }
    get duration() {
        return /* @__PURE__ */ ze(this.calculatedDuration);
    }
    get iterationDuration() {
        const {
            delay: t = 0
        } = this.options || {};
        return this.duration + /* @__PURE__ */ ze(t);
    }
    get time() {
        return /* @__PURE__ */ ze(this.currentTime);
    }
    set time(t) {
        t = /* @__PURE__ */ Ge(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? .start(!1);
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(t) {
        this.updateTime(Ee.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ ze(this.currentTime));
    }
    play() {
        if (this.isStopped)
            return;
        const {
            driver: t = gf,
            startTime: n
        } = this.options;
        this.driver || (this.driver = t((i) => this.tick(i))), this.options.onPlay ? .();
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ? ? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
        this.state = "paused", this.updateTime(Ee.now()), this.holdTime = this.currentTime;
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
    }
    finish() {
        this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .();
    }
    cancel() {
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .();
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0);
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0);
    }
    attachTimeline(t) {
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), t.observe(this);
    }
}

function Vf(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ? ? (e[t] = e[t - 1]);
}
const St = (e) => e * 180 / Math.PI,
    Kr = (e) => {
        const t = St(Math.atan2(e[1], e[0]));
        return Yr(t);
    },
    If = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: Kr,
        rotateZ: Kr,
        skewX: (e) => St(Math.atan(e[1])),
        skewY: (e) => St(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    Yr = (e) => (e = e % 360, e < 0 && (e += 360), e),
    Ja = Kr,
    Qa = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    eo = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    Ff = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Qa,
        scaleY: eo,
        scale: (e) => (Qa(e) + eo(e)) / 2,
        rotateX: (e) => Yr(St(Math.atan2(e[6], e[5]))),
        rotateY: (e) => Yr(St(Math.atan2(-e[2], e[0]))),
        rotateZ: Ja,
        rotate: Ja,
        skewX: (e) => St(Math.atan(e[4])),
        skewY: (e) => St(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function Gr(e) {
    return e.includes("scale") ? 1 : 0;
}

function Xr(e, t) {
    if (!e || e === "none")
        return Gr(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n)
        r = Ff, i = n;
    else {
        const s = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = If, i = s;
    }
    if (!i)
        return Gr(t);
    const a = r[t],
        o = i[1].split(",").map(jf);
    return typeof a == "function" ? a(o) : o[a];
}
const Of = (e, t) => {
    const {
        transform: n = "none"
    } = getComputedStyle(e);
    return Xr(n, t);
};

function jf(e) {
    return parseFloat(e.trim());
}
const Ht = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY"
    ],
    Wt = new Set(Ht),
    to = (e) => e === Ut || e === _,
    Bf = /* @__PURE__ */ new Set(["x", "y", "z"]),
    zf = Ht.filter((e) => !Bf.has(e));

function $f(e) {
    const t = [];
    return zf.forEach((n) => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }), t;
}
const Rt = {
    // Dimensions
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    // Transform
    x: (e, {
        transform: t
    }) => Xr(t, "x"),
    y: (e, {
        transform: t
    }) => Xr(t, "y")
};
Rt.translateX = Rt.x;
Rt.translateY = Rt.y;
const Ct = /* @__PURE__ */ new Set();
let qr = !1,
    Zr = !1,
    Jr = !1;

function gl() {
    if (Zr) {
        const e = Array.from(Ct).filter((r) => r.needsMeasurement),
            t = new Set(e.map((r) => r.element)),
            n = /* @__PURE__ */ new Map();
        t.forEach((r) => {
            const i = $f(r);
            i.length && (n.set(r, i), r.render());
        }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
            r.render();
            const i = n.get(r);
            i && i.forEach(([a, o]) => {
                r.getValue(a) ? .set(o);
            });
        }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
        });
    }
    Zr = !1, qr = !1, Ct.forEach((e) => e.complete(Jr)), Ct.clear();
}

function yl() {
    Ct.forEach((e) => {
        e.readKeyframes(), e.needsMeasurement && (Zr = !0);
    });
}

function _f() {
    Jr = !0, yl(), gl(), Jr = !1;
}
class Ui {
    constructor(t, n, r, i, a, o = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = a, this.isAsync = o;
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (Ct.add(this), qr || (qr = !0, ne.read(yl), ne.resolveKeyframes(gl))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        if (t[0] === null) {
            const a = i ? .get(),
                o = t[t.length - 1];
            if (a !== void 0)
                t[0] = a;
            else if (r && n) {
                const s = r.readValue(n, o);
                s != null && (t[0] = s);
            }
            t[0] === void 0 && (t[0] = o), i && a === void 0 && i.set(t[0]);
        }
        Vf(t);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Ct.delete(this);
    }
    cancel() {
        this.state === "scheduled" && (Ct.delete(this), this.state = "pending");
    }
    resume() {
        this.state === "pending" && this.scheduleResolve();
    }
}
const Uf = (e) => e.startsWith("--");

function Hf(e, t, n) {
    Uf(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const Wf = /* @__PURE__ */ Li(() => window.ScrollTimeline !== void 0),
    Kf = {};

function Yf(e, t) {
    const n = /* @__PURE__ */ Li(e);
    return () => Kf[t] ? ? n();
}
const vl = /* @__PURE__ */ Yf(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            });
        } catch {
            return !1;
        }
        return !0;
    }, "linearEasing"),
    nn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    no = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: /* @__PURE__ */ nn([0, 0.65, 0.55, 1]),
        circOut: /* @__PURE__ */ nn([0.55, 0, 1, 0.45]),
        backIn: /* @__PURE__ */ nn([0.31, 0.01, 0.66, -0.59]),
        backOut: /* @__PURE__ */ nn([0.33, 1.53, 0.69, 0.99])
    };

function wl(e, t) {
    if (e)
        return typeof e == "function" ? vl() ? fl(e, t) : "ease-out" : rl(e) ? nn(e) : Array.isArray(e) ? e.map((n) => wl(n, t) || no.easeOut) : no[e];
}

function Gf(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = "loop",
    ease: s = "easeOut",
    times: l
} = {}, c = void 0) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const d = wl(s, i);
    Array.isArray(d) && (u.easing = d);
    const h = {
        delay: r,
        duration: i,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: a + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return c && (h.pseudoElement = c), e.animate(u, h);
}

function xl(e) {
    return typeof e == "function" && "applyToOptions" in e;
}

function Xf({
    type: e,
    ...t
}) {
    return xl(e) && vl() ? e.applyToOptions(t) : (t.duration ? ? (t.duration = 300), t.ease ? ? (t.ease = "easeOut"), t);
}
class qf extends $i {
    constructor(t) {
        if (super(), this.finishedTime = null, this.isStopped = !1, !t)
            return;
        const {
            element: n,
            name: r,
            keyframes: i,
            pseudoElement: a,
            allowFlatten: o = !1,
            finalKeyframe: s,
            onComplete: l
        } = t;
        this.isPseudoElement = !!a, this.allowFlatten = o, this.options = t, Di(typeof t.type != "string");
        const c = Xf(t);
        this.animation = Gf(n, r, i, c, a), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !a) {
                const u = zi(i, this.options, s, this.speed);
                this.updateMotionValue ? this.updateMotionValue(u) : Hf(n, r, u), this.animation.cancel();
            }
            l ? .(), this.notifyFinished();
        };
    }
    play() {
        this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.finish ? .();
    }
    cancel() {
        try {
            this.animation.cancel();
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {
            state: t
        } = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * In this method, we commit styles back to the DOM before cancelling
     * the animation.
     *
     * This is designed to be overridden by NativeAnimationExtended, which
     * will create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to also correctly calculate velocity for any subsequent animation
     * while deferring the commit until the next animation frame.
     */
    commitStyles() {
        this.isPseudoElement || this.animation.commitStyles ? .();
    }
    get duration() {
        const t = this.animation.effect ? .getComputedTiming ? .().duration || 0;
        return /* @__PURE__ */ ze(Number(t));
    }
    get iterationDuration() {
        const {
            delay: t = 0
        } = this.options || {};
        return this.duration + /* @__PURE__ */ ze(t);
    }
    get time() {
        return /* @__PURE__ */ ze(Number(this.animation.currentTime) || 0);
    }
    set time(t) {
        this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Ge(t);
    }
    /**
     * The playback speed of the animation.
     * 1 = normal speed, 2 = double speed, 0.5 = half speed.
     */
    get speed() {
        return this.animation.playbackRate;
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState;
    }
    get startTime() {
        return Number(this.animation.startTime);
    }
    set startTime(t) {
        this.animation.startTime = t;
    }
    /**
     * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
     */
    attachTimeline({
        timeline: t,
        observe: n
    }) {
        return this.allowFlatten && this.animation.effect ? .updateTiming({
            easing: "linear"
        }), this.animation.onfinish = null, t && Wf() ? (this.animation.timeline = t, $e) : n(this);
    }
}
const bl = {
    anticipate: Qs,
    backInOut: Js,
    circInOut: tl
};

function Zf(e) {
    return e in bl;
}

function Jf(e) {
    typeof e.ease == "string" && Zf(e.ease) && (e.ease = bl[e.ease]);
}
const ro = 10;
class Qf extends qf {
    constructor(t) {
        Jf(t), pl(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * Rather than read commited styles back out of the DOM, we can
     * create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to calculate velocity for any subsequent animation.
     */
    updateMotionValue(t) {
        const {
            motionValue: n,
            onUpdate: r,
            onComplete: i,
            element: a,
            ...o
        } = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return;
        }
        const s = new _i({
                ...o,
                autoplay: !1
            }),
            l = /* @__PURE__ */ Ge(this.finishedTime ? ? this.time);
        n.setWithVelocity(s.sample(l - ro).value, s.sample(l).value, ro), s.stop();
    }
}
const io = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
    (dt.test(e) || e === "0") && // And it contains numbers and/or colors
    !e.startsWith("url("));

function em(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0;
}

function tm(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const a = e[e.length - 1],
        o = io(i, t),
        s = io(a, t);
    return !o || !s ? !1 : em(e) || (n === "spring" || xl(n)) && r;
}

function Qr(e) {
    e.duration = 0, e.type = "keyframes";
}
const nm = /* @__PURE__ */ new Set([
        "opacity",
        "clipPath",
        "filter",
        "transform"
        // TODO: Could be re-enabled now we have support for linear() easing
        // "background-color"
    ]),
    rm = /* @__PURE__ */ Li(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function im(e) {
    const {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: a,
        type: o
    } = e;
    if (!(t ? .owner ? .current instanceof HTMLElement))
        return !1;
    const {
        onUpdate: l,
        transformTemplate: c
    } = t.owner.getProps();
    return rm() && n && nm.has(n) && (n !== "transform" || !c) &&
        /**
         * If we're outputting values to onUpdate then we can't use WAAPI as there's
         * no way to read the value from WAAPI every frame.
         */
        !l && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
const am = 40;
class om extends $i {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: a = 0,
        repeatType: o = "loop",
        keyframes: s,
        name: l,
        motionValue: c,
        element: u,
        ...d
    }) {
        super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel();
        }, this.createdAt = Ee.now();
        const h = {
                autoplay: t,
                delay: n,
                type: r,
                repeat: i,
                repeatDelay: a,
                repeatType: o,
                name: l,
                motionValue: c,
                element: u,
                ...d
            },
            f = u ? .KeyframeResolver || Ui;
        this.keyframeResolver = new f(s, (v, x, T) => this.onKeyframesResolved(v, x, h, !T), l, c, u), this.keyframeResolver ? .scheduleResolve();
    }
    onKeyframesResolved(t, n, r, i) {
        this.keyframeResolver = void 0;
        const {
            name: a,
            type: o,
            velocity: s,
            delay: l,
            isHandoff: c,
            onUpdate: u
        } = r;
        this.resolvedAt = Ee.now(), tm(t, a, o, s) || ((nt.instantAnimations || !l) && u ? .(zi(t, r, n)), t[0] = t[t.length - 1], Qr(r), r.repeat = 0);
        const h = {
                startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > am ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: n,
                ...r,
                keyframes: t
            },
            f = !c && im(h) ? new Qf({
                ...h,
                element: h.motionValue.owner.current
            }) : new _i(h);
        f.finished.then(() => this.notifyFinished()).catch($e), this.pendingTimeline && (this.stopTimeline = f.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = f;
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished;
    }
    then(t, n) {
        return this.finished.finally(t).then(() => {});
    }
    get animation() {
        return this._animation || (this.keyframeResolver ? .resume(), _f()), this._animation;
    }
    get duration() {
        return this.animation.duration;
    }
    get iterationDuration() {
        return this.animation.iterationDuration;
    }
    get time() {
        return this.animation.time;
    }
    set time(t) {
        this.animation.time = t;
    }
    get speed() {
        return this.animation.speed;
    }
    get state() {
        return this.animation.state;
    }
    set speed(t) {
        this.animation.speed = t;
    }
    get startTime() {
        return this.animation.startTime;
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
    }
    play() {
        this.animation.play();
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.complete();
    }
    cancel() {
        this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel();
    }
}
const sm = (
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
    /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);

function lm(e) {
    const t = sm.exec(e);
    if (!t)
        return [, ];
    const [, n, r, i] = t;
    return [`--${n ?? r}`, i];
}

function Tl(e, t, n = 1) {
    const [r, i] = lm(e);
    if (!r)
        return;
    const a = window.getComputedStyle(t).getPropertyValue(r);
    if (a) {
        const o = a.trim();
        return Hs(o) ? parseFloat(o) : o;
    }
    return Ii(i) ? Tl(i, t, n + 1) : i;
}

function Hi(e, t) {
    return e ? .[t] ? ? e ? .default ? ? e;
}
const Pl = /* @__PURE__ */ new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...Ht
    ]),
    cm = {
        test: (e) => e === "auto",
        parse: (e) => e
    },
    Sl = (e) => (t) => t.test(e),
    Rl = [Ut, _, Xe, at, Qh, Jh, cm],
    ao = (e) => Rl.find(Sl(e));

function um(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Ks(e) : !0;
}
const dm = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);

function hm(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Fi) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let a = dm.has(t) ? 1 : 0;
    return r !== n && (a *= 100), t + "(" + a + i + ")";
}
const fm = /\b([a-z-]*)\(.*?\)/gu,
    ei = {
        ...dt,
        getAnimatableNone: (e) => {
            const t = e.match(fm);
            return t ? t.map(hm).join(" ") : e;
        }
    },
    oo = {
        ...Ut,
        transform: Math.round
    },
    mm = {
        rotate: at,
        rotateX: at,
        rotateY: at,
        rotateZ: at,
        scale: zn,
        scaleX: zn,
        scaleY: zn,
        scaleZ: zn,
        skew: at,
        skewX: at,
        skewY: at,
        distance: _,
        translateX: _,
        translateY: _,
        translateZ: _,
        x: _,
        y: _,
        z: _,
        perspective: _,
        transformPerspective: _,
        opacity: pn,
        originX: Ya,
        originY: Ya,
        originZ: _
    },
    Wi = {
        // Border props
        borderWidth: _,
        borderTopWidth: _,
        borderRightWidth: _,
        borderBottomWidth: _,
        borderLeftWidth: _,
        borderRadius: _,
        radius: _,
        borderTopLeftRadius: _,
        borderTopRightRadius: _,
        borderBottomRightRadius: _,
        borderBottomLeftRadius: _,
        // Positioning props
        width: _,
        maxWidth: _,
        height: _,
        maxHeight: _,
        top: _,
        right: _,
        bottom: _,
        left: _,
        // Spacing props
        padding: _,
        paddingTop: _,
        paddingRight: _,
        paddingBottom: _,
        paddingLeft: _,
        margin: _,
        marginTop: _,
        marginRight: _,
        marginBottom: _,
        marginLeft: _,
        // Misc
        backgroundPositionX: _,
        backgroundPositionY: _,
        ...mm,
        zIndex: oo,
        // SVG
        fillOpacity: pn,
        strokeOpacity: pn,
        numOctaves: oo
    },
    pm = {
        ...Wi,
        // Color props
        color: de,
        backgroundColor: de,
        outlineColor: de,
        fill: de,
        stroke: de,
        // Border props
        borderColor: de,
        borderTopColor: de,
        borderRightColor: de,
        borderBottomColor: de,
        borderLeftColor: de,
        filter: ei,
        WebkitFilter: ei
    },
    Cl = (e) => pm[e];

function El(e, t) {
    let n = Cl(e);
    return n !== ei && (n = dt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const gm = /* @__PURE__ */ new Set(["auto", "none", "0"]);

function ym(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        const a = e[r];
        typeof a == "string" && !gm.has(a) && gn(a).values.length && (i = e[r]), r++;
    }
    if (i && n)
        for (const a of t)
            e[a] = El(n, i);
}
class vm extends Ui {
    constructor(t, n, r, i, a) {
        super(t, n, r, i, a, !0);
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let c = t[l];
            if (typeof c == "string" && (c = c.trim(), Ii(c))) {
                const u = Tl(c, n.current);
                u !== void 0 && (t[l] = u), l === t.length - 1 && (this.finalKeyframe = c);
            }
        }
        if (this.resolveNoneKeyframes(), !Pl.has(r) || t.length !== 2)
            return;
        const [i, a] = t, o = ao(i), s = ao(a);
        if (o !== s)
            if (to(o) && to(s))
                for (let l = 0; l < t.length; l++) {
                    const c = t[l];
                    typeof c == "string" && (t[l] = parseFloat(c));
                }
        else Rt[r] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++)
            (t[i] === null || um(t[i])) && r.push(i);
        r.length && ym(t, r, n);
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Rt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1);
    }
    measureEndState() {
        const {
            element: t,
            name: n,
            unresolvedKeyframes: r
        } = this;
        if (!t || !t.current)
            return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const a = r.length - 1,
            o = r[a];
        r[a] = Rt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), this.removedTransforms ? .length && this.removedTransforms.forEach(([s, l]) => {
            t.getValue(s).set(l);
        }), this.resolveNoneKeyframes();
    }
}

function wm(e, t, n) {
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        let r = document;
        const i = n ? .[e] ? ? r.querySelectorAll(e);
        return i ? Array.from(i) : [];
    }
    return Array.from(e);
}
const Ml = (e, t) => t && typeof e == "number" ? t.transform(e) : e;

function Dl(e) {
    return Ws(e) && "offsetHeight" in e;
}
const so = 30,
    xm = (e) => !isNaN(parseFloat(e));
class bm {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     */
    constructor(t, n = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
            const i = Ee.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                for (const a of this.dependents)
                    a.dirty();
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = Ee.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = xm(this.current));
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(t) {
        return this.on("change", t);
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Ai());
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), ne.read(() => {
                this.events.change.getSize() || this.stop();
            });
        } : r;
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear();
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     */
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
        this.events.change ? .notify(this.current);
    }
    addDependent(t) {
        this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t);
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
        return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
        const t = Ee.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > so)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, so);
        return Ys(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     */
    start(t) {
        return this.stop(), new Promise((n) => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
        this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
}

function $t(e, t) {
    return new bm(e, t);
}
const {
    schedule: Ki
} = /* @__PURE__ */ il(queueMicrotask, !1), He = {
    x: !1,
    y: !1
};

function Ll() {
    return He.x || He.y;
}

function Tm(e) {
    return e === "x" || e === "y" ? He[e] ? null : (He[e] = !0, () => {
        He[e] = !1;
    }) : He.x || He.y ? null : (He.x = He.y = !0, () => {
        He.x = He.y = !1;
    });
}

function Al(e, t) {
    const n = wm(e),
        r = new AbortController(),
        i = {
            passive: !0,
            ...t,
            signal: r.signal
        };
    return [n, i, () => r.abort()];
}

function lo(e) {
    return !(e.pointerType === "touch" || Ll());
}

function Pm(e, t, n = {}) {
    const [r, i, a] = Al(e, n), o = (s) => {
        if (!lo(s))
            return;
        const {
            target: l
        } = s, c = t(l, s);
        if (typeof c != "function" || !l)
            return;
        const u = (d) => {
            lo(d) && (c(d), l.removeEventListener("pointerleave", u));
        };
        l.addEventListener("pointerleave", u, i);
    };
    return r.forEach((s) => {
        s.addEventListener("pointerenter", o, i);
    }), a;
}
const kl = (e, t) => t ? e === t ? !0 : kl(e, t.parentElement) : !1,
    Yi = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    Sm = /* @__PURE__ */ new Set([
        "BUTTON",
        "INPUT",
        "SELECT",
        "TEXTAREA",
        "A"
    ]);

function Rm(e) {
    return Sm.has(e.tagName) || e.tabIndex !== -1;
}
const Yn = /* @__PURE__ */ new WeakSet();

function co(e) {
    return (t) => {
        t.key === "Enter" && e(t);
    };
}

function Mr(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }));
}
const Cm = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = co(() => {
        if (Yn.has(n))
            return;
        Mr(n, "down");
        const i = co(() => {
                Mr(n, "up");
            }),
            a = () => Mr(n, "cancel");
        n.addEventListener("keyup", i, t), n.addEventListener("blur", a, t);
    });
    n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};

function uo(e) {
    return Yi(e) && !Ll();
}

function Em(e, t, n = {}) {
    const [r, i, a] = Al(e, n), o = (s) => {
        const l = s.currentTarget;
        if (!uo(s))
            return;
        Yn.add(l);
        const c = t(l, s),
            u = (f, v) => {
                window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", h), Yn.has(l) && Yn.delete(l), uo(f) && typeof c == "function" && c(f, {
                    success: v
                });
            },
            d = (f) => {
                u(f, l === window || l === document || n.useGlobalTarget || kl(l, f.target));
            },
            h = (f) => {
                u(f, !1);
            };
        window.addEventListener("pointerup", d, i), window.addEventListener("pointercancel", h, i);
    };
    return r.forEach((s) => {
        (n.useGlobalTarget ? window : s).addEventListener("pointerdown", o, i), Dl(s) && (s.addEventListener("focus", (c) => Cm(c, i)), !Rm(s) && !s.hasAttribute("tabindex") && (s.tabIndex = 0));
    }), a;
}

function Nl(e) {
    return Ws(e) && "ownerSVGElement" in e;
}

function Mm(e) {
    return Nl(e) && e.tagName === "svg";
}
const Te = (e) => !!(e && e.getVelocity),
    Dm = [...Rl, de, dt],
    Lm = (e) => Dm.find(Sl(e)),
    Gi = me({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never"
    });

function ho(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t);
}

function Am(...e) {
    return (t) => {
        let n = !1;
        const r = e.map((i) => {
            const a = ho(i, t);
            return !n && typeof a == "function" && (n = !0), a;
        });
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const a = r[i];
                    typeof a == "function" ? a() : ho(e[i], null);
                }
            };
    };
}

function km(...e) {
    return rt(Am(...e), e);
}
class Nm extends nr {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = n.offsetParent,
                i = Dl(r) && r.offsetWidth || 0,
                a = this.props.sizeRef.current;
            a.height = n.offsetHeight || 0, a.width = n.offsetWidth || 0, a.top = n.offsetTop, a.left = n.offsetLeft, a.right = i - a.width - a.left;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() {}
    render() {
        return this.props.children;
    }
}

function Vm({
    children: e,
    isPresent: t,
    anchorX: n,
    root: r
}) {
    const i = rr(),
        a = Ne(null),
        o = Ne({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0
        }),
        {
            nonce: s
        } = B(Gi),
        l = km(a, e ? .ref);
    return di(() => {
        const {
            width: c,
            height: u,
            top: d,
            left: h,
            right: f
        } = o.current;
        if (t || !a.current || !c || !u)
            return;
        const v = n === "left" ? `left: ${h}` : `right: ${f}`;
        a.current.dataset.motionPopId = i;
        const x = document.createElement("style");
        s && (x.nonce = s);
        const T = r ? ? document.head;
        return T.appendChild(x), x.sheet && x.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${v}px !important;
            top: ${d}px !important;
          }
        `), () => {
            T.contains(x) && T.removeChild(x);
        };
    }, [t]), g(Nm, {
        isPresent: t,
        childRef: a,
        sizeRef: o,
        children: us(e, {
            ref: l
        })
    });
}
const Im = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: a,
    mode: o,
    anchorX: s,
    root: l
}) => {
    const c = Ri(Fm),
        u = rr();
    let d = !0,
        h = fe(() => (d = !1, {
            id: u,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: (f) => {
                c.set(f, !0);
                for (const v of c.values())
                    if (!v)
                        return;
                r && r();
            },
            register: (f) => (c.set(f, !1), () => c.delete(f))
        }), [n, c, r]);
    return a && d && (h = { ...h
    }), fe(() => {
        c.forEach((f, v) => c.set(v, !1));
    }, [n]), ke(() => {
        !n && !c.size && r && r();
    }, [n]), o === "popLayout" && (e = g(Vm, {
        isPresent: n,
        anchorX: s,
        root: l,
        children: e
    })), g(sr.Provider, {
        value: h,
        children: e
    });
};

function Fm() {
    return /* @__PURE__ */ new Map();
}

function Vl(e = !0) {
    const t = B(sr);
    if (t === null)
        return [!0, null];
    const {
        isPresent: n,
        onExitComplete: r,
        register: i
    } = t, a = rr();
    ke(() => {
        if (e)
            return i(a);
    }, [e]);
    const o = rt(() => e && r && r(a), [a, r, e]);
    return !n && r ? [!1, o] : [!0];
}
const $n = (e) => e.key || "";

function fo(e) {
    const t = [];
    return cs.forEach(e, (n) => {
        ds(n) && t.push(n);
    }), t;
}
const Om = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: r,
        presenceAffectsLayout: i = !0,
        mode: a = "sync",
        propagate: o = !1,
        anchorX: s = "left",
        root: l
    }) => {
        const [c, u] = Vl(o), d = fe(() => fo(e), [e]), h = o && !c ? [] : d.map($n), f = Ne(!0), v = Ne(d), x = Ri(() => /* @__PURE__ */ new Map()), [T, P] = Se(d), [b, S] = Se(d);
        Us(() => {
            f.current = !1, v.current = d;
            for (let N = 0; N < b.length; N++) {
                const y = $n(b[N]);
                h.includes(y) ? x.delete(y) : x.get(y) !== !0 && x.set(y, !1);
            }
        }, [b, h.length, h.join("-")]);
        const k = [];
        if (d !== T) {
            let N = [...d];
            for (let y = 0; y < b.length; y++) {
                const C = b[y],
                    z = $n(C);
                h.includes(z) || (N.splice(y, 0, C), k.push(C));
            }
            return a === "wait" && k.length && (N = k), S(fo(N)), P(d), null;
        }
        const {
            forceRender: M
        } = B(Si);
        return g(Uc, {
            children: b.map((N) => {
                const y = $n(N),
                    C = o && !c ? !1 : d === b || h.includes(y),
                    z = () => {
                        if (x.has(y))
                            x.set(y, !0);
                        else
                            return;
                        let W = !0;
                        x.forEach((Y) => {
                            Y || (W = !1);
                        }), W && (M ? .(), S(v.current), o && u ? .(), r && r());
                    };
                return g(Im, {
                    isPresent: C,
                    initial: !f.current || n ? void 0 : !1,
                    custom: t,
                    presenceAffectsLayout: i,
                    mode: a,
                    root: l,
                    onExitComplete: C ? void 0 : z,
                    anchorX: s,
                    children: N
                }, y);
            })
        });
    },
    Il = me({
        strict: !1
    }),
    mo = {
        animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag"
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    _t = {};
for (const e in mo)
    _t[e] = {
        isEnabled: (t) => mo[e].some((n) => !!t[n])
    };

function jm(e) {
    for (const t in e)
        _t[t] = {
            ..._t[t],
            ...e[t]
        };
}
const Bm = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport"
]);

function er(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Bm.has(e);
}
let Fl = (e) => !er(e);

function zm(e) {
    typeof e == "function" && (Fl = (t) => t.startsWith("on") ? !er(t) : e(t));
}
try {
    zm(require("@emotion/is-prop-valid").default);
} catch {}

function $m(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (Fl(i) || n === !0 && er(i) || !t && !er(i) || // If trying to use native HTML drag events, forward drag listeners
            e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r;
}
const lr = /* @__PURE__ */ me({});

function cr(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function";
}

function yn(e) {
    return typeof e == "string" || Array.isArray(e);
}
const Xi = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit"
    ],
    qi = ["initial", ...Xi];

function ur(e) {
    return cr(e.animate) || qi.some((t) => yn(e[t]));
}

function Ol(e) {
    return !!(ur(e) || e.variants);
}

function _m(e, t) {
    if (ur(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || yn(n) ? n : void 0,
            animate: yn(r) ? r : void 0
        };
    }
    return e.inherit !== !1 ? t : {};
}

function Um(e) {
    const {
        initial: t,
        animate: n
    } = _m(e, B(lr));
    return fe(() => ({
        initial: t,
        animate: n
    }), [po(t), po(n)]);
}

function po(e) {
    return Array.isArray(e) ? e.join(" ") : e;
}
const vn = {};

function Hm(e) {
    for (const t in e)
        vn[t] = e[t], Vi(t) && (vn[t].isCSSVariable = !0);
}

function jl(e, {
    layout: t,
    layoutId: n
}) {
    return Wt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!vn[e] || e === "opacity");
}
const Wm = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Km = Ht.length;

function Ym(e, t, n) {
    let r = "",
        i = !0;
    for (let a = 0; a < Km; a++) {
        const o = Ht[a],
            s = e[o];
        if (s === void 0)
            continue;
        let l = !0;
        if (typeof s == "number" ? l = s === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(s) === 0, !l || n) {
            const c = Ml(s, Wi[o]);
            if (!l) {
                i = !1;
                const u = Wm[o] || o;
                r += `${u}(${c}) `;
            }
            n && (t[o] = c);
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}

function Zi(e, t, n) {
    const {
        style: r,
        vars: i,
        transformOrigin: a
    } = e;
    let o = !1,
        s = !1;
    for (const l in t) {
        const c = t[l];
        if (Wt.has(l)) {
            o = !0;
            continue;
        } else if (Vi(l)) {
            i[l] = c;
            continue;
        } else {
            const u = Ml(c, Wi[l]);
            l.startsWith("origin") ? (s = !0, a[l] = u) : r[l] = u;
        }
    }
    if (t.transform || (o || n ? r.transform = Ym(t, e.transform, n) : r.transform && (r.transform = "none")), s) {
        const {
            originX: l = "50%",
            originY: c = "50%",
            originZ: u = 0
        } = a;
        r.transformOrigin = `${l} ${c} ${u}`;
    }
}
const Ji = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function Bl(e, t, n) {
    for (const r in t)
        !Te(t[r]) && !jl(r, n) && (e[r] = t[r]);
}

function Gm({
    transformTemplate: e
}, t) {
    return fe(() => {
        const n = Ji();
        return Zi(n, t, e), Object.assign({}, n.vars, n.style);
    }, [t]);
}

function Xm(e, t) {
    const n = e.style || {},
        r = {};
    return Bl(r, n, e), Object.assign(r, Gm(e, t)), r;
}

function qm(e, t) {
    const n = {},
        r = Xm(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const Zm = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Jm = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Qm(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const a = i ? Zm : Jm;
    e[a.offset] = _.transform(-r);
    const o = _.transform(t),
        s = _.transform(n);
    e[a.array] = `${o} ${s}`;
}

function zl(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: a = 1,
    pathOffset: o = 0,
    // This is object creation, which we try to avoid per-frame.
    ...s
}, l, c, u) {
    if (Zi(e, s, c), l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: d,
        style: h
    } = e;
    d.transform && (h.transform = d.transform, delete d.transform), (h.transform || d.transformOrigin) && (h.transformOrigin = d.transformOrigin ? ? "50% 50%", delete d.transformOrigin), h.transform && (h.transformBox = u ? .transformBox ? ? "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && Qm(d, i, a, o, !1);
}
const $l = () => ({
        ...Ji(),
        attrs: {}
    }),
    _l = (e) => typeof e == "string" && e.toLowerCase() === "svg";

function ep(e, t, n, r) {
    const i = fe(() => {
        const a = $l();
        return zl(a, t, _l(r), e.transformTemplate, e.style), {
            ...a.attrs,
            style: { ...a.style
            }
        };
    }, [t]);
    if (e.style) {
        const a = {};
        Bl(a, e.style, e), i.style = { ...a,
            ...i.style
        };
    }
    return i;
}
const tp = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
];

function Qi(e) {
    return (
        /**
         * If it's not a string, it's a custom React component. Currently we only support
         * HTML custom React components.
         */
        typeof e != "string" ||
        /**
         * If it contains a dash, the element is a custom HTML webcomponent.
         */
        e.includes("-") ? !1 : (
            /**
             * If it's in our list of lowercase SVG tags, it's an SVG component
             */
            !!(tp.indexOf(e) > -1 ||
                /**
                 * If it contains a capital letter, it's an SVG component
                 */
                /[A-Z]/u.test(e))
        )
    );
}

function np(e, t, n, {
    latestValues: r
}, i, a = !1) {
    const s = (Qi(e) ? ep : qm)(t, r, i, e),
        l = $m(t, typeof e == "string", a),
        c = e !== ct ? { ...l,
            ...s,
            ref: n
        } : {},
        {
            children: u
        } = t,
        d = fe(() => Te(u) ? u.get() : u, [u]);
    return U(e, {
        ...c,
        children: d
    });
}

function go(e) {
    const t = [{}, {}];
    return e ? .values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity();
    }), t;
}

function ea(e, t, n, r) {
    if (typeof t == "function") {
        const [i, a] = go(r);
        t = t(n !== void 0 ? n : e.custom, i, a);
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, a] = go(r);
        t = t(n !== void 0 ? n : e.custom, i, a);
    }
    return t;
}

function Gn(e) {
    return Te(e) ? e.get() : e;
}

function rp({
    scrapeMotionValuesFromProps: e,
    createRenderState: t
}, n, r, i) {
    return {
        latestValues: ip(n, r, i, e),
        renderState: t()
    };
}

function ip(e, t, n, r) {
    const i = {},
        a = r(e, {});
    for (const h in a)
        i[h] = Gn(a[h]);
    let {
        initial: o,
        animate: s
    } = e;
    const l = ur(e),
        c = Ol(e);
    t && c && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || o === !1;
    const d = u ? s : o;
    if (d && typeof d != "boolean" && !cr(d)) {
        const h = Array.isArray(d) ? d : [d];
        for (let f = 0; f < h.length; f++) {
            const v = ea(e, h[f]);
            if (v) {
                const {
                    transitionEnd: x,
                    transition: T,
                    ...P
                } = v;
                for (const b in P) {
                    let S = P[b];
                    if (Array.isArray(S)) {
                        const k = u ? S.length - 1 : 0;
                        S = S[k];
                    }
                    S !== null && (i[b] = S);
                }
                for (const b in x)
                    i[b] = x[b];
            }
        }
    }
    return i;
}
const Ul = (e) => (t, n) => {
    const r = B(lr),
        i = B(sr),
        a = () => rp(e, t, r, i);
    return n ? a() : Ri(a);
};

function ta(e, t, n) {
    const {
        style: r
    } = e, i = {};
    for (const a in r)
        (Te(r[a]) || t.style && Te(t.style[a]) || jl(a, e) || n ? .getValue(a) ? .liveStyle !== void 0) && (i[a] = r[a]);
    return i;
}
const ap = /* @__PURE__ */ Ul({
    scrapeMotionValuesFromProps: ta,
    createRenderState: Ji
});

function Hl(e, t, n) {
    const r = ta(e, t, n);
    for (const i in e)
        if (Te(e[i]) || Te(t[i])) {
            const a = Ht.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[a] = e[i];
        }
    return r;
}
const op = /* @__PURE__ */ Ul({
        scrapeMotionValuesFromProps: Hl,
        createRenderState: $l
    }),
    sp = Symbol.for("motionComponentSymbol");

function It(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}

function lp(e, t, n) {
    return rt(
        (r) => {
            r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : It(n) && (n.current = r));
        },
        /**
         * Include externalRef in dependencies to ensure the callback updates
         * when the ref changes, allowing proper ref forwarding.
         */
        [t]
    );
}
const na = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    cp = "framerAppearId",
    Wl = "data-" + na(cp),
    Kl = me({});

function up(e, t, n, r, i) {
    const {
        visualElement: a
    } = B(lr), o = B(Il), s = B(sr), l = B(Gi).reducedMotion, c = Ne(null);
    r = r || o.renderer, !c.current && r && (c.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = c.current,
        d = B(Kl);
    u && !u.projection && i && (u.type === "html" || u.type === "svg") && dp(c.current, n, i, d);
    const h = Ne(!1);
    di(() => {
        u && h.current && u.update(n, s);
    });
    const f = n[Wl],
        v = Ne(!!f && !window.MotionHandoffIsComplete ? .(f) && window.MotionHasOptimisedAnimation ? .(f));
    return Us(() => {
        u && (h.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), u.scheduleRenderMicrotask(), v.current && u.animationState && u.animationState.animateChanges());
    }), ke(() => {
        u && (!v.current && u.animationState && u.animationState.animateChanges(), v.current && (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete ? .(f);
        }), v.current = !1), u.enteringChildren = void 0);
    }), u;
}

function dp(e, t, n, r) {
    const {
        layoutId: i,
        layout: a,
        drag: o,
        dragConstraints: s,
        layoutScroll: l,
        layoutRoot: c,
        layoutCrossfade: u
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Yl(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: a,
        alwaysMeasureLayout: !!o || s && It(s),
        visualElement: e,
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof a == "string" ? a : "both",
        initialPromotionConfig: r,
        crossfade: u,
        layoutScroll: l,
        layoutRoot: c
    });
}

function Yl(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : Yl(e.parent);
}

function Dr(e, {
    forwardMotionProps: t = !1
} = {}, n, r) {
    n && jm(n);
    const i = Qi(e) ? op : ap;

    function a(s, l) {
        let c;
        const u = {
                ...B(Gi),
                ...s,
                layoutId: hp(s)
            },
            {
                isStatic: d
            } = u,
            h = Um(s),
            f = i(s, d);
        if (!d && Ci) {
            fp();
            const v = mp(u);
            c = v.MeasureLayout, h.visualElement = up(e, f, u, r, v.ProjectionNode);
        }
        return D(lr.Provider, {
            value: h,
            children: [c && h.visualElement ? g(c, {
                visualElement: h.visualElement,
                ...u
            }) : null, np(e, s, lp(f, h.visualElement, l), f, d, t)]
        });
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const o = Et(a);
    return o[sp] = e, o;
}

function hp({
    layoutId: e
}) {
    const t = B(Si).id;
    return t && e !== void 0 ? t + "-" + e : e;
}

function fp(e, t) {
    B(Il).strict;
}

function mp(e) {
    const {
        drag: t,
        layout: n
    } = _t;
    if (!t && !n)
        return {};
    const r = { ...t,
        ...n
    };
    return {
        MeasureLayout: t ? .isEnabled(e) || n ? .isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    };
}

function pp(e, t) {
    if (typeof Proxy > "u")
        return Dr;
    const n = /* @__PURE__ */ new Map(),
        r = (a, o) => Dr(a, o, e, t),
        i = (a, o) => r(a, o);
    return new Proxy(i, {
        /**
         * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
         * The prop name is passed through as `key` and we can use that to generate a `motion`
         * DOM component with that name.
         */
        get: (a, o) => o === "create" ? r : (n.has(o) || n.set(o, Dr(o, void 0, e, t)), n.get(o))
    });
}

function Gl({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    };
}

function gp({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    };
}

function yp(e, t) {
    if (!t)
        return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    };
}

function Lr(e) {
    return e === void 0 || e === 1;
}

function ti({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Lr(e) || !Lr(t) || !Lr(n);
}

function bt(e) {
    return ti(e) || Xl(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}

function Xl(e) {
    return yo(e.x) || yo(e.y);
}

function yo(e) {
    return e && e !== "0%";
}

function tr(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i;
}

function vo(e, t, n, r, i) {
    return i !== void 0 && (e = tr(e, i, r)), tr(e, n, r) + t;
}

function ni(e, t = 0, n = 1, r, i) {
    e.min = vo(e.min, t, n, r, i), e.max = vo(e.max, t, n, r, i);
}

function ql(e, {
    x: t,
    y: n
}) {
    ni(e.x, t.translate, t.scale, t.originPoint), ni(e.y, n.translate, n.scale, n.originPoint);
}
const wo = 0.999999999999,
    xo = 1.0000000000001;

function vp(e, t, n, r = !1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let a, o;
    for (let s = 0; s < i; s++) {
        a = n[s], o = a.projectionDelta;
        const {
            visualElement: l
        } = a.options;
        l && l.props.style && l.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && Ot(e, {
            x: -a.scroll.offset.x,
            y: -a.scroll.offset.y
        }), o && (t.x *= o.x.scale, t.y *= o.y.scale, ql(e, o)), r && bt(a.latestValues) && Ot(e, a.latestValues));
    }
    t.x < xo && t.x > wo && (t.x = 1), t.y < xo && t.y > wo && (t.y = 1);
}

function Ft(e, t) {
    e.min = e.min + t, e.max = e.max + t;
}

function bo(e, t, n, r, i = 0.5) {
    const a = re(e.min, e.max, i);
    ni(e, t, n, a, r);
}

function Ot(e, t) {
    bo(e.x, t.x, t.scaleX, t.scale, t.originX), bo(e.y, t.y, t.scaleY, t.scale, t.originY);
}

function Zl(e, t) {
    return Gl(yp(e.getBoundingClientRect(), t));
}

function wp(e, t, n) {
    const r = Zl(e, n),
        {
            scroll: i
        } = t;
    return i && (Ft(r.x, i.offset.x), Ft(r.y, i.offset.y)), r;
}
const To = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    jt = () => ({
        x: To(),
        y: To()
    }),
    Po = () => ({
        min: 0,
        max: 0
    }),
    ue = () => ({
        x: Po(),
        y: Po()
    }),
    ri = {
        current: null
    },
    Jl = {
        current: !1
    };

function xp() {
    if (Jl.current = !0, !!Ci)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => ri.current = e.matches;
            e.addEventListener("change", t), t();
        } else
            ri.current = !1;
}
const bp = /* @__PURE__ */ new WeakMap();

function Tp(e, t, n) {
    for (const r in t) {
        const i = t[r],
            a = n[r];
        if (Te(i))
            e.addValue(r, i);
        else if (Te(a))
            e.addValue(r, $t(i, {
                owner: e
            }));
        else if (a !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, $t(o !== void 0 ? o : i, {
                    owner: e
                }));
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t;
}
const So = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
];
class Pp {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(t, n, r) {
        return {};
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: a,
        visualState: o
    }, s = {}) {
        this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ui, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const h = Ee.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h, ne.render(this.render, !1, !0));
        };
        const {
            latestValues: l,
            renderState: c
        } = o;
        this.latestValues = l, this.baseTarget = { ...l
        }, this.initialValues = n.initial ? { ...l
        } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = ur(n), this.isVariantNode = Ol(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: u,
            ...d
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in d) {
            const f = d[h];
            l[h] !== void 0 && Te(f) && f.set(l[h]);
        }
    }
    mount(t) {
        this.current = t, bp.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Jl.current || xp(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ri.current, this.parent ? .addChild(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
        this.projection && this.projection.unmount(), ut(this.notifyUpdate), ut(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ? .removeChild(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), n.isMounted = !1);
        }
        this.current = null;
    }
    addChild(t) {
        this.children.add(t), this.enteringChildren ? ? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
    }
    removeChild(t) {
        this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Wt.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", (o) => {
            this.latestValues[t] = o, this.props.onUpdate && ne.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
        });
        let a;
        window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            i(), a && a(), n.owner && n.stop();
        });
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
        let t = "animation";
        for (t in _t) {
            const n = _t[t];
            if (!n)
                continue;
            const {
                isEnabled: r,
                Feature: i
            } = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const a = this.features[t];
                a.isMounted ? a.update() : (a.mount(), a.isMounted = !0);
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ue();
    }
    getStaticValue(t) {
        return this.latestValues[t];
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < So.length; r++) {
            const i = So[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const a = "on" + i,
                o = t[a];
            o && (this.propEventSubscriptions[i] = this.on(i, o));
        }
        this.prevMotionValues = Tp(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(t) {
        return this.values.has(t);
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = $t(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ? ? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (Hs(r) || Ks(r)) ? r = parseFloat(r) : !Lm(r) && dt.test(n) && (r = El(t, n)), this.setBaseTarget(t, Te(r) ? r.get() : r)), Te(r) ? r.get() : r;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(t, n) {
        this.baseTarget[t] = n;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(t) {
        const {
            initial: n
        } = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const a = ea(this.props, n, this.presenceContext ? .custom);
            a && (r = a[t]);
        }
        if (n && r !== void 0)
            return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Te(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Ai()), this.events[t].add(n);
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n);
    }
    scheduleRenderMicrotask() {
        Ki.render(this.render);
    }
}
class Ql extends Pp {
    constructor() {
        super(...arguments), this.KeyframeResolver = vm;
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t];
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Te(t) && (this.childSubscription = t.on("change", (n) => {
            this.current && (this.current.textContent = `${n}`);
        }));
    }
}

function ec(e, {
    style: t,
    vars: n
}, r, i) {
    const a = e.style;
    let o;
    for (o in t)
        a[o] = t[o];
    i ? .applyProjectionStyles(a, r);
    for (o in n)
        a.setProperty(o, n[o]);
}

function Sp(e) {
    return window.getComputedStyle(e);
}
class Rp extends Ql {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = ec;
    }
    readValueFromInstance(t, n) {
        if (Wt.has(n))
            return this.projection ? .isProjecting ? Gr(n) : Of(t, n); {
            const r = Sp(t),
                i = (Vi(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i;
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return Zl(t, n);
    }
    build(t, n, r) {
        Zi(t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return ta(t, n, r);
    }
}
const tc = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
]);

function Cp(e, t, n, r) {
    ec(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(tc.has(i) ? i : na(i), t.attrs[i]);
}
class Ep extends Ql {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ue;
    }
    getBaseTargetFromProps(t, n) {
        return t[n];
    }
    readValueFromInstance(t, n) {
        if (Wt.has(n)) {
            const r = Cl(n);
            return r && r.default || 0;
        }
        return n = tc.has(n) ? n : na(n), t.getAttribute(n);
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Hl(t, n, r);
    }
    build(t, n, r) {
        zl(t, n, this.isSVGTag, r.transformTemplate, r.style);
    }
    renderInstance(t, n, r, i) {
        Cp(t, n, r, i);
    }
    mount(t) {
        this.isSVGTag = _l(t.tagName), super.mount(t);
    }
}
const Mp = (e, t) => Qi(e) ? new Ep(t) : new Rp(t, {
    allowProjection: e !== ct
});

function zt(e, t, n) {
    const r = e.getProps();
    return ea(r, t, n !== void 0 ? n : r.custom, e);
}
const ii = (e) => Array.isArray(e);

function Dp(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, $t(n));
}

function Lp(e) {
    return ii(e) ? e[e.length - 1] || 0 : e;
}

function Ap(e, t) {
    const n = zt(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...a
    } = n || {};
    a = { ...a,
        ...r
    };
    for (const o in a) {
        const s = Lp(a[o]);
        Dp(e, o, s);
    }
}

function kp(e) {
    return !!(Te(e) && e.add);
}

function ai(e, t) {
    const n = e.getValue("willChange");
    if (kp(n))
        return n.add(t);
    if (!n && nt.WillChange) {
        const r = new nt.WillChange("auto");
        e.addValue("willChange", r), r.add(t);
    }
}

function nc(e) {
    return e.props[Wl];
}
const Np = (e) => e !== null;

function Vp(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(Np),
        a = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return i[a];
}
const Ip = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Fp = (e) => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Op = {
        type: "keyframes",
        duration: 0.8
    },
    jp = {
        type: "keyframes",
        ease: [0.25, 0.1, 0.35, 1],
        duration: 0.3
    },
    Bp = (e, {
        keyframes: t
    }) => t.length > 2 ? Op : Wt.has(e) ? e.startsWith("scale") ? Fp(t[1]) : Ip : jp;

function zp({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: a,
    repeatType: o,
    repeatDelay: s,
    from: l,
    elapsed: c,
    ...u
}) {
    return !!Object.keys(u).length;
}
const ra = (e, t, n, r = {}, i, a) => (o) => {
    const s = Hi(r, e) || {},
        l = s.delay || r.delay || 0;
    let {
        elapsed: c = 0
    } = r;
    c = c - /* @__PURE__ */ Ge(l);
    const u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...s,
        delay: -c,
        onUpdate: (h) => {
            t.set(h), s.onUpdate && s.onUpdate(h);
        },
        onComplete: () => {
            o(), s.onComplete && s.onComplete();
        },
        name: e,
        motionValue: t,
        element: a ? void 0 : i
    };
    zp(s) || Object.assign(u, Bp(e, u)), u.duration && (u.duration = /* @__PURE__ */ Ge(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Ge(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
    let d = !1;
    if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Qr(u), u.delay === 0 && (d = !0)), (nt.instantAnimations || nt.skipAnimations) && (d = !0, Qr(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
        const h = Vp(u.keyframes, s);
        if (h !== void 0) {
            ne.update(() => {
                u.onUpdate(h), u.onComplete();
            });
            return;
        }
    }
    return s.isSync ? new _i(u) : new om(u);
};

function $p({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r;
}

function rc(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    let {
        transition: a = e.getDefaultTransition(),
        transitionEnd: o,
        ...s
    } = t;
    r && (a = r);
    const l = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const u in s) {
        const d = e.getValue(u, e.latestValues[u] ? ? null),
            h = s[u];
        if (h === void 0 || c && $p(c, u))
            continue;
        const f = {
                delay: n,
                ...Hi(a || {}, u)
            },
            v = d.get();
        if (v !== void 0 && !d.isAnimating && !Array.isArray(h) && h === v && !f.velocity)
            continue;
        let x = !1;
        if (window.MotionHandoffAnimation) {
            const P = nc(e);
            if (P) {
                const b = window.MotionHandoffAnimation(P, u, ne);
                b !== null && (f.startTime = b, x = !0);
            }
        }
        ai(e, u), d.start(ra(u, d, h, e.shouldReduceMotion && Pl.has(u) ? {
            type: !1
        } : f, e, x));
        const T = d.animation;
        T && l.push(T);
    }
    return o && Promise.all(l).then(() => {
        ne.update(() => {
            o && Ap(e, o);
        });
    }), l;
}

function ic(e, t, n, r = 0, i = 1) {
    const a = Array.from(e).sort((c, u) => c.sortNodePosition(u)).indexOf(t),
        o = e.size,
        s = (o - 1) * r;
    return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}

function oi(e, t, n = {}) {
    const r = zt(e, t, n.type === "exit" ? e.presenceContext ? .custom : void 0);
    let {
        transition: i = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const a = r ? () => Promise.all(rc(e, r, n)) : () => Promise.resolve(),
        o = e.variantChildren && e.variantChildren.size ? (l = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: u,
                staggerDirection: d
            } = i;
            return _p(e, t, l, c, u, d, n);
        } : () => Promise.resolve(),
        {
            when: s
        } = i;
    if (s) {
        const [l, c] = s === "beforeChildren" ? [a, o] : [o, a];
        return l().then(() => c());
    } else
        return Promise.all([a(), o(n.delay)]);
}

function _p(e, t, n = 0, r = 0, i = 0, a = 1, o) {
    const s = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t), s.push(oi(l, t, {
            ...o,
            delay: n + (typeof r == "function" ? 0 : r) + ic(e.variantChildren, l, r, i, a)
        }).then(() => l.notify("AnimationComplete", t)));
    return Promise.all(s);
}

function Up(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map((a) => oi(e, a, n));
        r = Promise.all(i);
    } else if (typeof t == "string")
        r = oi(e, t, n);
    else {
        const i = typeof t == "function" ? zt(e, t, n.custom) : t;
        r = Promise.all(rc(e, i, n));
    }
    return r.then(() => {
        e.notify("AnimationComplete", t);
    });
}

function ac(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0;
}
const Hp = qi.length;

function oc(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? oc(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
    }
    const t = {};
    for (let n = 0; n < Hp; n++) {
        const r = qi[n],
            i = e.props[r];
        (yn(i) || i === !1) && (t[r] = i);
    }
    return t;
}
const Wp = [...Xi].reverse(),
    Kp = Xi.length;

function Yp(e) {
    return (t) => Promise.all(t.map(({
        animation: n,
        options: r
    }) => Up(e, n, r)));
}

function Gp(e) {
    let t = Yp(e),
        n = Ro(),
        r = !0;
    const i = (l) => (c, u) => {
        const d = zt(e, u, l === "exit" ? e.presenceContext ? .custom : void 0);
        if (d) {
            const {
                transition: h,
                transitionEnd: f,
                ...v
            } = d;
            c = { ...c,
                ...v,
                ...f
            };
        }
        return c;
    };

    function a(l) {
        t = l(e);
    }

    function o(l) {
        const {
            props: c
        } = e, u = oc(e.parent) || {}, d = [], h = /* @__PURE__ */ new Set();
        let f = {},
            v = 1 / 0;
        for (let T = 0; T < Kp; T++) {
            const P = Wp[T],
                b = n[P],
                S = c[P] !== void 0 ? c[P] : u[P],
                k = yn(S),
                M = P === l ? b.isActive : null;
            M === !1 && (v = T);
            let N = S === u[P] && S !== c[P] && k;
            if (N && r && e.manuallyAnimateOnMount && (N = !1), b.protectedKeys = { ...f
                }, // If it isn't active and hasn't *just* been set as inactive
                !b.isActive && M === null || // If we didn't and don't have any defined prop for this animation type
                !S && !b.prevProp || // Or if the prop doesn't define an animation
                cr(S) || typeof S == "boolean")
                continue;
            const y = Xp(b.prevProp, S);
            let C = y || // If we're making this variant active, we want to always make it active
                P === l && b.isActive && !N && k || // If we removed a higher-priority variant (i is in reverse order)
                T > v && k,
                z = !1;
            const W = Array.isArray(S) ? S : [S];
            let Y = W.reduce(i(P), {});
            M === !1 && (Y = {});
            const {
                prevResolvedValues: le = {}
            } = b, Me = {
                ...le,
                ...Y
            }, ae = (J) => {
                C = !0, h.has(J) && (z = !0, h.delete(J)), b.needsAnimating[J] = !0;
                const H = e.getValue(J);
                H && (H.liveStyle = !1);
            };
            for (const J in Me) {
                const H = Y[J],
                    ee = le[J];
                if (f.hasOwnProperty(J))
                    continue;
                let ce = !1;
                ii(H) && ii(ee) ? ce = !ac(H, ee) : ce = H !== ee, ce ? H != null ? ae(J) : h.add(J) : H !== void 0 && h.has(J) ? ae(J) : b.protectedKeys[J] = !0;
            }
            b.prevProp = S, b.prevResolvedValues = Y, b.isActive && (f = { ...f,
                ...Y
            }), r && e.blockInitialAnimation && (C = !1);
            const Z = N && y;
            C && (!Z || z) && d.push(...W.map((J) => {
                const H = {
                    type: P
                };
                if (typeof J == "string" && r && !Z && e.manuallyAnimateOnMount && e.parent) {
                    const {
                        parent: ee
                    } = e, ce = zt(ee, J);
                    if (ee.enteringChildren && ce) {
                        const {
                            delayChildren: De
                        } = ce.transition || {};
                        H.delay = ic(ee.enteringChildren, e, De);
                    }
                }
                return {
                    animation: J,
                    options: H
                };
            }));
        }
        if (h.size) {
            const T = {};
            if (typeof c.initial != "boolean") {
                const P = zt(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
                P && P.transition && (T.transition = P.transition);
            }
            h.forEach((P) => {
                const b = e.getBaseTarget(P),
                    S = e.getValue(P);
                S && (S.liveStyle = !0), T[P] = b ? ? null;
            }), d.push({
                animation: T
            });
        }
        let x = !!d.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (x = !1), r = !1, x ? t(d) : Promise.resolve();
    }

    function s(l, c) {
        if (n[l].isActive === c)
            return Promise.resolve();
        e.variantChildren ? .forEach((d) => d.animationState ? .setActive(l, c)), n[l].isActive = c;
        const u = o(l);
        for (const d in n)
            n[d].protectedKeys = {};
        return u;
    }
    return {
        animateChanges: o,
        setActive: s,
        setAnimateFunction: a,
        getState: () => n,
        reset: () => {
            n = Ro();
        }
    };
}

function Xp(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !ac(t, e) : !1;
}

function xt(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    };
}

function Ro() {
    return {
        animate: xt(!0),
        whileInView: xt(),
        whileHover: xt(),
        whileTap: xt(),
        whileDrag: xt(),
        whileFocus: xt(),
        exit: xt()
    };
}
class ft {
    constructor(t) {
        this.isMounted = !1, this.node = t;
    }
    update() {}
}
class qp extends ft {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(t) {
        super(t), t.animationState || (t.animationState = Gp(t));
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        cr(t) && (this.unmountControls = t.subscribe(this.node));
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
        this.node.animationState.reset(), this.unmountControls ? .();
    }
}
let Zp = 0;
class Jp extends ft {
    constructor() {
        super(...arguments), this.id = Zp++;
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => {
            n(this.id);
        });
    }
    mount() {
        const {
            register: t,
            onExitComplete: n
        } = this.node.presenceContext || {};
        n && n(this.id), t && (this.unmount = t(this.id));
    }
    unmount() {}
}
const Qp = {
    animation: {
        Feature: qp
    },
    exit: {
        Feature: Jp
    }
};

function wn(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}

function Mn(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    };
}
const eg = (e) => (t) => Yi(t) && e(t, Mn(t));

function sn(e, t, n, r) {
    return wn(e, t, eg(n), r);
}
const sc = 1e-4,
    tg = 1 - sc,
    ng = 1 + sc,
    lc = 0.01,
    rg = 0 - lc,
    ig = 0 + lc;

function Re(e) {
    return e.max - e.min;
}

function ag(e, t, n) {
    return Math.abs(e - t) <= n;
}

function Co(e, t, n, r = 0.5) {
    e.origin = r, e.originPoint = re(t.min, t.max, e.origin), e.scale = Re(n) / Re(t), e.translate = re(n.min, n.max, e.origin) - e.originPoint, (e.scale >= tg && e.scale <= ng || isNaN(e.scale)) && (e.scale = 1), (e.translate >= rg && e.translate <= ig || isNaN(e.translate)) && (e.translate = 0);
}

function ln(e, t, n, r) {
    Co(e.x, t.x, n.x, r ? r.originX : void 0), Co(e.y, t.y, n.y, r ? r.originY : void 0);
}

function Eo(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Re(t);
}

function og(e, t, n) {
    Eo(e.x, t.x, n.x), Eo(e.y, t.y, n.y);
}

function Mo(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Re(t);
}

function cn(e, t, n) {
    Mo(e.x, t.x, n.x), Mo(e.y, t.y, n.y);
}

function je(e) {
    return [e("x"), e("y")];
}
const cc = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    Do = (e, t) => Math.abs(e - t);

function sg(e, t) {
    const n = Do(e.x, t.x),
        r = Do(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
}
class uc {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i = window,
        dragSnapToOrigin: a = !1,
        distanceThreshold: o = 3
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const h = kr(this.lastMoveEventInfo, this.history),
                    f = this.startEvent !== null,
                    v = sg(h.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!f && !v)
                    return;
                const {
                    point: x
                } = h, {
                    timestamp: T
                } = ye;
                this.history.push({ ...x,
                    timestamp: T
                });
                const {
                    onStart: P,
                    onMove: b
                } = this.handlers;
                f || (P && P(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, h);
            }, this.handlePointerMove = (h, f) => {
                this.lastMoveEvent = h, this.lastMoveEventInfo = Ar(f, this.transformPagePoint), ne.update(this.updatePoint, !0);
            }, this.handlePointerUp = (h, f) => {
                this.end();
                const {
                    onEnd: v,
                    onSessionEnd: x,
                    resumeAnimation: T
                } = this.handlers;
                if (this.dragSnapToOrigin && T && T(), !(this.lastMoveEvent && this.lastMoveEventInfo))
                    return;
                const P = kr(h.type === "pointercancel" ? this.lastMoveEventInfo : Ar(f, this.transformPagePoint), this.history);
                this.startEvent && v && v(h, P), x && x(h, P);
            }, !Yi(t))
            return;
        this.dragSnapToOrigin = a, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = i || window;
        const s = Mn(t),
            l = Ar(s, this.transformPagePoint),
            {
                point: c
            } = l,
            {
                timestamp: u
            } = ye;
        this.history = [{ ...c,
            timestamp: u
        }];
        const {
            onSessionStart: d
        } = n;
        d && d(t, kr(l, this.history)), this.removeListeners = Rn(sn(this.contextWindow, "pointermove", this.handlePointerMove), sn(this.contextWindow, "pointerup", this.handlePointerUp), sn(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
    updateHandlers(t) {
        this.handlers = t;
    }
    end() {
        this.removeListeners && this.removeListeners(), ut(this.updatePoint);
    }
}

function Ar(e, t) {
    return t ? {
        point: t(e.point)
    } : e;
}

function Lo(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    };
}

function kr({
    point: e
}, t) {
    return {
        point: e,
        delta: Lo(e, dc(t)),
        offset: Lo(e, lg(t)),
        velocity: cg(t, 0.1)
    };
}

function lg(e) {
    return e[0];
}

function dc(e) {
    return e[e.length - 1];
}

function cg(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1,
        r = null;
    const i = dc(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ Ge(t)));)
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const a = /* @__PURE__ */ ze(i.timestamp - r.timestamp);
    if (a === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / a,
        y: (i.y - r.y) / a
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}

function ug(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? re(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? re(n, e, r.max) : Math.min(e, n)), e;
}

function Ao(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    };
}

function dg(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: Ao(e.x, n, i),
        y: Ao(e.y, t, r)
    };
}

function ko(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    };
}

function hg(e, t) {
    return {
        x: ko(e.x, t.x),
        y: ko(e.y, t.y)
    };
}

function fg(e, t) {
    let n = 0.5;
    const r = Re(e),
        i = Re(t);
    return i > r ? n = /* @__PURE__ */ mn(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ mn(e.min, e.max - i, t.min)), tt(0, 1, n);
}

function mg(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const si = 0.35;

function pg(e = si) {
    return e === !1 ? e = 0 : e === !0 && (e = si), {
        x: No(e, "left", "right"),
        y: No(e, "top", "bottom")
    };
}

function No(e, t, n) {
    return {
        min: Vo(e, t),
        max: Vo(e, n)
    };
}

function Vo(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
}
const gg = /* @__PURE__ */ new WeakMap();
class yg {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ue(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
    }
    start(t, {
        snapToCursor: n = !1,
        distanceThreshold: r
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const a = (d) => {
                const {
                    dragSnapToOrigin: h
                } = this.getProps();
                h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Mn(d).point);
            },
            o = (d, h) => {
                const {
                    drag: f,
                    dragPropagation: v,
                    onDragStart: x
                } = this.getProps();
                if (f && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = Tm(f), !this.openDragLock))
                    return;
                this.latestPointerEvent = d, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), je((P) => {
                    let b = this.getAxisMotionValue(P).get() || 0;
                    if (Xe.test(b)) {
                        const {
                            projection: S
                        } = this.visualElement;
                        if (S && S.layout) {
                            const k = S.layout.layoutBox[P];
                            k && (b = Re(k) * (parseFloat(b) / 100));
                        }
                    }
                    this.originPoint[P] = b;
                }), x && ne.postRender(() => x(d, h)), ai(this.visualElement, "transform");
                const {
                    animationState: T
                } = this.visualElement;
                T && T.setActive("whileDrag", !0);
            },
            s = (d, h) => {
                this.latestPointerEvent = d, this.latestPanInfo = h;
                const {
                    dragPropagation: f,
                    dragDirectionLock: v,
                    onDirectionLock: x,
                    onDrag: T
                } = this.getProps();
                if (!f && !this.openDragLock)
                    return;
                const {
                    offset: P
                } = h;
                if (v && this.currentDirection === null) {
                    this.currentDirection = vg(P), this.currentDirection !== null && x && x(this.currentDirection);
                    return;
                }
                this.updateAxis("x", h.point, P), this.updateAxis("y", h.point, P), this.visualElement.render(), T && T(d, h);
            },
            l = (d, h) => {
                this.latestPointerEvent = d, this.latestPanInfo = h, this.stop(d, h), this.latestPointerEvent = null, this.latestPanInfo = null;
            },
            c = () => je((d) => this.getAnimationState(d) === "paused" && this.getAxisMotionValue(d).animation ? .play()),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new uc(t, {
            onSessionStart: a,
            onStart: o,
            onMove: s,
            onSessionEnd: l,
            resumeAnimation: c
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            distanceThreshold: r,
            contextWindow: cc(this.visualElement)
        });
    }
    /**
     * @internal
     */
    stop(t, n) {
        const r = t || this.latestPointerEvent,
            i = n || this.latestPanInfo,
            a = this.isDragging;
        if (this.cancel(), !a || !i || !r)
            return;
        const {
            velocity: o
        } = i;
        this.startAnimation(o);
        const {
            onDragEnd: s
        } = this.getProps();
        s && ne.postRender(() => s(r, i));
    }
    /**
     * @internal
     */
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !_n(t, i, this.currentDirection))
            return;
        const a = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = ug(o, this.constraints[t], this.elastic[t])), a.set(o);
    }
    resolveConstraints() {
        const {
            dragConstraints: t,
            dragElastic: n
        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, i = this.constraints;
        t && It(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = dg(r.layoutBox, t) : this.constraints = !1, this.elastic = pg(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && je((a) => {
            this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = mg(r.layoutBox[a], this.constraints[a]));
        });
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !It(t))
            return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const a = wp(r, i.root, this.visualElement.getTransformPagePoint());
        let o = hg(i.layout.layoutBox, a);
        if (n) {
            const s = n(gp(o));
            this.hasMutatedConstraints = !!s, s && (o = Gl(s));
        }
        return o;
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: a,
            dragSnapToOrigin: o,
            onDragTransitionEnd: s
        } = this.getProps(), l = this.constraints || {}, c = je((u) => {
            if (!_n(u, n, this.currentDirection))
                return;
            let d = l && l[u] || {};
            o && (d = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6,
                f = i ? 40 : 1e7,
                v = {
                    type: "inertia",
                    velocity: r ? t[u] : 0,
                    bounceStiffness: h,
                    bounceDamping: f,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...a,
                    ...d
                };
            return this.startAxisValueAnimation(u, v);
        });
        return Promise.all(c).then(s);
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return ai(this.visualElement, t), r.start(ra(t, r, 0, n, this.visualElement, !1));
    }
    stopAnimation() {
        je((t) => this.getAxisMotionValue(t).stop());
    }
    pauseAnimation() {
        je((t) => this.getAxisMotionValue(t).animation ? .pause());
    }
    getAnimationState(t) {
        return this.getAxisMotionValue(t).animation ? .state;
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
    }
    snapToCursor(t) {
        je((n) => {
            const {
                drag: r
            } = this.getProps();
            if (!_n(n, r, this.currentDirection))
                return;
            const {
                projection: i
            } = this.visualElement, a = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: o,
                    max: s
                } = i.layout.layoutBox[n];
                a.set(t[n] - re(o, s, 0.5));
            }
        });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!It(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        je((o) => {
            const s = this.getAxisMotionValue(o);
            if (s && this.constraints !== !1) {
                const l = s.get();
                i[o] = fg({
                    min: l,
                    max: l
                }, this.constraints[o]);
            }
        });
        const {
            transformTemplate: a
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = a ? a({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), je((o) => {
            if (!_n(o, t, null))
                return;
            const s = this.getAxisMotionValue(o),
                {
                    min: l,
                    max: c
                } = this.constraints[o];
            s.set(re(l, c, i[o]));
        });
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        gg.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = sn(t, "pointerdown", (l) => {
                const {
                    drag: c,
                    dragListener: u = !0
                } = this.getProps();
                c && u && this.start(l);
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                It(l) && l.current && (this.constraints = this.resolveRefConstraints());
            },
            {
                projection: i
            } = this.visualElement,
            a = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), ne.read(r);
        const o = wn(window, "resize", () => this.scalePositionWithinConstraints()),
            s = i.addEventListener("didUpdate", (({
                delta: l,
                hasLayoutChanged: c
            }) => {
                this.isDragging && c && (je((u) => {
                    const d = this.getAxisMotionValue(u);
                    d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
                }), this.visualElement.render());
            }));
        return () => {
            o(), n(), a(), s && s();
        };
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: a = !1,
                dragElastic: o = si,
                dragMomentum: s = !0
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: a,
            dragElastic: o,
            dragMomentum: s
        };
    }
}

function _n(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
}

function vg(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class wg extends ft {
    constructor(t) {
        super(t), this.removeGroupControls = $e, this.removeListeners = $e, this.controls = new yg(t);
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || $e;
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners();
    }
}
const Io = (e) => (t, n) => {
    e && ne.postRender(() => e(t, n));
};
class xg extends ft {
    constructor() {
        super(...arguments), this.removePointerDownListener = $e;
    }
    onPointerDown(t) {
        this.session = new uc(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: cc(this.node)
        });
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: Io(t),
            onStart: Io(n),
            onMove: r,
            onEnd: (a, o) => {
                delete this.session, i && ne.postRender(() => i(a, o));
            }
        };
    }
    mount() {
        this.removePointerDownListener = sn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end();
    }
}
const Xn = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: !0,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: !1
};

function Fo(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Qt = {
        correct: (e, t) => {
            if (!t.target)
                return e;
            if (typeof e == "string")
                if (_.test(e))
                    e = parseFloat(e);
                else
                    return e;
            const n = Fo(e, t.target.x),
                r = Fo(e, t.target.y);
            return `${n}% ${r}%`;
        }
    },
    bg = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = dt.parse(e);
            if (i.length > 5)
                return r;
            const a = dt.createTransformer(e),
                o = typeof i[0] != "number" ? 1 : 0,
                s = n.x.scale * t.x,
                l = n.y.scale * t.y;
            i[0 + o] /= s, i[1 + o] /= l;
            const c = re(s, l, 0.5);
            return typeof i[2 + o] == "number" && (i[2 + o] /= c), typeof i[3 + o] == "number" && (i[3 + o] /= c), a(i);
        }
    };
let Nr = !1;
class Tg extends nr {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: a
        } = t;
        Hm(Pg), a && (n.group && n.group.add(a), r && r.register && i && r.register(a), Nr && a.root.didUpdate(), a.addEventListener("animationComplete", () => {
            this.safeToRemove();
        }), a.setOptions({
            ...a.options,
            onExitComplete: () => this.safeToRemove()
        })), Xn.hasEverUpdated = !0;
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: a
        } = this.props, {
            projection: o
        } = r;
        return o && (o.isPresent = a, Nr = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== a ? o.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? o.promote() : o.relegate() || ne.postRender(() => {
            const s = o.getStack();
            (!s || !s.members.length) && this.safeToRemove();
        }))), null;
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), Ki.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        Nr = !0, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t();
    }
    render() {
        return null;
    }
}

function hc(e) {
    const [t, n] = Vl(), r = B(Si);
    return g(Tg, { ...e,
        layoutGroup: r,
        switchLayoutGroup: B(Kl),
        isPresent: t,
        safeToRemove: n
    });
}
const Pg = {
    borderRadius: {
        ...Qt,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius"
        ]
    },
    borderTopLeftRadius: Qt,
    borderTopRightRadius: Qt,
    borderBottomLeftRadius: Qt,
    borderBottomRightRadius: Qt,
    boxShadow: bg
};

function Sg(e, t, n) {
    const r = Te(e) ? e : $t(e);
    return r.start(ra("", r, t, n)), r.animation;
}
const Rg = (e, t) => e.depth - t.depth;
class Cg {
    constructor() {
        this.children = [], this.isDirty = !1;
    }
    add(t) {
        Ei(this.children, t), this.isDirty = !0;
    }
    remove(t) {
        Mi(this.children, t), this.isDirty = !0;
    }
    forEach(t) {
        this.isDirty && this.children.sort(Rg), this.isDirty = !1, this.children.forEach(t);
    }
}

function Eg(e, t) {
    const n = Ee.now(),
        r = ({
            timestamp: i
        }) => {
            const a = i - n;
            a >= t && (ut(r), e(a - t));
        };
    return ne.setup(r, !0), () => ut(r);
}
const fc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    Mg = fc.length,
    Oo = (e) => typeof e == "string" ? parseFloat(e) : e,
    jo = (e) => typeof e == "number" || _.test(e);

function Dg(e, t, n, r, i, a) {
    i ? (e.opacity = re(0, n.opacity ? ? 1, Lg(r)), e.opacityExit = re(t.opacity ? ? 1, 0, Ag(r))) : a && (e.opacity = re(t.opacity ? ? 1, n.opacity ? ? 1, r));
    for (let o = 0; o < Mg; o++) {
        const s = `border${fc[o]}Radius`;
        let l = Bo(t, s),
            c = Bo(n, s);
        if (l === void 0 && c === void 0)
            continue;
        l || (l = 0), c || (c = 0), l === 0 || c === 0 || jo(l) === jo(c) ? (e[s] = Math.max(re(Oo(l), Oo(c), r), 0), (Xe.test(c) || Xe.test(l)) && (e[s] += "%")) : e[s] = c;
    }
    (t.rotate || n.rotate) && (e.rotate = re(t.rotate || 0, n.rotate || 0, r));
}

function Bo(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Lg = /* @__PURE__ */ mc(0, 0.5, el),
    Ag = /* @__PURE__ */ mc(0.5, 0.95, $e);

function mc(e, t, n) {
    return (r) => r < e ? 0 : r > t ? 1 : n( /* @__PURE__ */ mn(e, t, r));
}

function zo(e, t) {
    e.min = t.min, e.max = t.max;
}

function Oe(e, t) {
    zo(e.x, t.x), zo(e.y, t.y);
}

function $o(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}

function _o(e, t, n, r, i) {
    return e -= t, e = tr(e, 1 / n, r), i !== void 0 && (e = tr(e, 1 / i, r)), e;
}

function kg(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
    if (Xe.test(t) && (t = parseFloat(t), t = re(o.min, o.max, t / 100) - o.min), typeof t != "number")
        return;
    let s = re(a.min, a.max, r);
    e === a && (s -= t), e.min = _o(e.min, t, n, s, i), e.max = _o(e.max, t, n, s, i);
}

function Uo(e, t, [n, r, i], a, o) {
    kg(e, t[n], t[r], t[i], t.scale, a, o);
}
const Ng = ["x", "scaleX", "originX"],
    Vg = ["y", "scaleY", "originY"];

function Ho(e, t, n, r) {
    Uo(e.x, t, Ng, n ? n.x : void 0, r ? r.x : void 0), Uo(e.y, t, Vg, n ? n.y : void 0, r ? r.y : void 0);
}

function Wo(e) {
    return e.translate === 0 && e.scale === 1;
}

function pc(e) {
    return Wo(e.x) && Wo(e.y);
}

function Ko(e, t) {
    return e.min === t.min && e.max === t.max;
}

function Ig(e, t) {
    return Ko(e.x, t.x) && Ko(e.y, t.y);
}

function Yo(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}

function gc(e, t) {
    return Yo(e.x, t.x) && Yo(e.y, t.y);
}

function Go(e) {
    return Re(e.x) / Re(e.y);
}

function Xo(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Fg {
    constructor() {
        this.members = [];
    }
    add(t) {
        Ei(this.members, t), t.scheduleRender();
    }
    remove(t) {
        if (Mi(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n);
        }
    }
    relegate(t) {
        const n = this.members.findIndex((i) => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const a = this.members[i];
            if (a.isPresent !== !1) {
                r = a;
                break;
            }
        }
        return r ? (this.promote(r), !0) : !1;
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((t) => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
        });
    }
    scheduleRender() {
        this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
        });
    }
    /**
     * Clear any leads that have been removed this render to prevent them from being
     * used in future animations and to prevent memory leaks
     */
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
}

function Og(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        a = e.y.translate / t.y,
        o = n ? .z || 0;
    if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
        const {
            transformPerspective: c,
            rotate: u,
            rotateX: d,
            rotateY: h,
            skewX: f,
            skewY: v
        } = n;
        c && (r = `perspective(${c}px) ${r}`), u && (r += `rotate(${u}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), f && (r += `skewX(${f}deg) `), v && (r += `skewY(${v}deg) `);
    }
    const s = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const Vr = ["", "X", "Y", "Z"],
    jg = 1e3;
let Bg = 0;

function Ir(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}

function yc(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e)
        return;
    const {
        visualElement: t
    } = e.options;
    if (!t)
        return;
    const n = nc(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: a
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", ne, !(i || a));
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && yc(r);
}

function vc({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(o = {}, s = t ? .()) {
            this.id = Bg++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(_g), this.nodes.forEach(Kg), this.nodes.forEach(Yg), this.nodes.forEach(Ug);
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Cg());
        }
        addEventListener(o, s) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Ai()), this.eventHandlers.get(o).add(s);
        }
        notifyListeners(o, ...s) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...s);
        }
        hasListeners(o) {
            return this.eventHandlers.has(o);
        }
        /**
         * Lifecycles
         */
        mount(o) {
            if (this.instance)
                return;
            this.isSVG = Nl(o) && !Mm(o), this.instance = o;
            const {
                layoutId: s,
                layout: l,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || s) && (this.isLayoutDirty = !0), e) {
                let u, d = 0;
                const h = () => this.root.updateBlockedByResize = !1;
                ne.read(() => {
                    d = window.innerWidth;
                }), e(o, () => {
                    const f = window.innerWidth;
                    f !== d && (d = f, this.root.updateBlockedByResize = !0, u && u(), u = Eg(h, 250), Xn.hasAnimatedSinceResize && (Xn.hasAnimatedSinceResize = !1, this.nodes.forEach(Jo)));
                });
            }
            s && this.root.registerSharedNode(s, this), this.options.animate !== !1 && c && (s || l) && this.addEventListener("didUpdate", ({
                delta: u,
                hasLayoutChanged: d,
                hasRelativeLayoutChanged: h,
                layout: f
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return;
                }
                const v = this.options.transition || c.getDefaultTransition() || Jg,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: T
                    } = c.getProps(),
                    P = !this.targetLayout || !gc(this.targetLayout, f),
                    b = !d && h;
                if (this.options.layoutRoot || this.resumeFrom || b || d && (P || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const S = {
                        ...Hi(v, "layout"),
                        onPlay: x,
                        onComplete: T
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S), this.setAnimationOrigin(u, b);
                } else
                    d || Jo(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = f;
            });
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ut(this.updateProjection);
        }
        // only on the root
        blockUpdate() {
            this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
        }
        // Note: currently only running on root node
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Gg), this.animationId++);
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate;
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && yc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
            }
            const {
                layoutId: s,
                layout: l
            } = this.options;
            if (s === void 0 && !l)
                return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(qo);
                return;
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Zo);
                return;
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Wg), this.nodes.forEach(zg), this.nodes.forEach($g)) : this.nodes.forEach(Zo), this.clearAllSnapshots();
            const s = Ee.now();
            ye.delta = tt(0, 1e3 / 60, s - ye.timestamp), ye.timestamp = s, ye.isProcessing = !0, Pr.update.process(ye), Pr.preRender.process(ye), Pr.render.process(ye), ye.isProcessing = !1;
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Ki.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
            this.nodes.forEach(Hg), this.sharedNodes.forEach(Xg);
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ne.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
            ne.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
            });
        }
        /**
         * Update measurements
         */
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Re(this.snapshot.measuredBox.x) && !Re(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ue(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: s
            } = this.options;
            s && s.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
        }
        updateScroll(o = "measure") {
            let s = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (s = !1), s && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                };
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                s = this.projectionDelta && !pc(this.projectionDelta),
                l = this.getTransformTemplate(),
                c = l ? l(this.latestValues, "") : void 0,
                u = c !== this.prevTransformTemplateValue;
            o && this.instance && (s || bt(this.latestValues) || u) && (i(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
        }
        measure(o = !0) {
            const s = this.measurePageBox();
            let l = this.removeElementScroll(s);
            return o && (l = this.removeTransform(l)), Qg(l), {
                animationId: this.root.animationId,
                measuredBox: s,
                layoutBox: l,
                latestValues: {},
                source: this.id
            };
        }
        measurePageBox() {
            const {
                visualElement: o
            } = this.options;
            if (!o)
                return ue();
            const s = o.measureViewportBox();
            if (!(this.scroll ? .wasRoot || this.path.some(ey))) {
                const {
                    scroll: c
                } = this.root;
                c && (Ft(s.x, c.offset.x), Ft(s.y, c.offset.y));
            }
            return s;
        }
        removeElementScroll(o) {
            const s = ue();
            if (Oe(s, o), this.scroll ? .wasRoot)
                return s;
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l],
                    {
                        scroll: u,
                        options: d
                    } = c;
                c !== this.root && u && d.layoutScroll && (u.wasRoot && Oe(s, o), Ft(s.x, u.offset.x), Ft(s.y, u.offset.y));
            }
            return s;
        }
        applyTransform(o, s = !1) {
            const l = ue();
            Oe(l, o);
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c];
                !s && u.options.layoutScroll && u.scroll && u !== u.root && Ot(l, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }), bt(u.latestValues) && Ot(l, u.latestValues);
            }
            return bt(this.latestValues) && Ot(l, this.latestValues), l;
        }
        removeTransform(o) {
            const s = ue();
            Oe(s, o);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!c.instance || !bt(c.latestValues))
                    continue;
                ti(c.latestValues) && c.updateSnapshot();
                const u = ue(),
                    d = c.measurePageBox();
                Oe(u, d), Ho(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
            }
            return bt(this.latestValues) && Ho(s, this.latestValues), s;
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            };
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp && this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(o = !1) {
            const s = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== s;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {
                layout: u,
                layoutId: d
            } = this.options;
            if (!(!this.layout || !(u || d))) {
                if (this.resolvedRelativeTargetAt = ye.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const h = this.getClosestProjectingParent();
                    h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ue(), this.relativeTargetOrigin = ue(), cn(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), Oe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ue(), this.targetWithTransforms = ue()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), og(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Oe(this.target, this.layout.layoutBox), ql(this.target, this.targetDelta)) : Oe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const h = this.getClosestProjectingParent();
                    h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ue(), this.relativeTargetOrigin = ue(), cn(this.relativeTargetOrigin, this.target, h.target), Oe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || ti(this.parent.latestValues) || Xl(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        calcProjection() {
            const o = this.getLead(),
                s = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (l = !1), s && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ye.timestamp && (l = !1), l)
                return;
            const {
                layout: c,
                layoutId: u
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || u))
                return;
            Oe(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x,
                h = this.treeScale.y;
            vp(this.layoutCorrected, this.treeScale, this.path, s), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = ue());
            const {
                target: f
            } = o;
            if (!f) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return;
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : ($o(this.prevProjectionDelta.x, this.projectionDelta.x), $o(this.prevProjectionDelta.y, this.projectionDelta.y)), ln(this.projectionDelta, this.layoutCorrected, f, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== h || !Xo(this.projectionDelta.x, this.prevProjectionDelta.x) || !Xo(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", f));
        }
        hide() {
            this.isVisible = !1;
        }
        show() {
            this.isVisible = !0;
        }
        scheduleRender(o = !0) {
            if (this.options.visualElement ? .scheduleRender(), o) {
                const s = this.getStack();
                s && s.scheduleRender();
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = jt(), this.projectionDelta = jt(), this.projectionDeltaWithTransform = jt();
        }
        setAnimationOrigin(o, s = !1) {
            const l = this.snapshot,
                c = l ? l.latestValues : {},
                u = { ...this.latestValues
                },
                d = jt();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
            const h = ue(),
                f = l ? l.source : void 0,
                v = this.layout ? this.layout.source : void 0,
                x = f !== v,
                T = this.getStack(),
                P = !T || T.members.length <= 1,
                b = !!(x && !P && this.options.crossfade === !0 && !this.path.some(Zg));
            this.animationProgress = 0;
            let S;
            this.mixTargetDelta = (k) => {
                const M = k / 1e3;
                Qo(d.x, o.x, M), Qo(d.y, o.y, M), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (cn(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), qg(this.relativeTarget, this.relativeTargetOrigin, h, M), S && Ig(this.relativeTarget, S) && (this.isProjectionDirty = !1), S || (S = ue()), Oe(S, this.relativeTarget)), x && (this.animationValues = u, Dg(u, c, this.latestValues, M, b, P)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = M;
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"), this.currentAnimation ? .stop(), this.resumingFrom ? .currentAnimation ? .stop(), this.pendingAnimation && (ut(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ne.update(() => {
                Xn.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = $t(0)), this.currentAnimation = Sg(this.motionValue, [0, 1e3], {
                    ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (s) => {
                        this.mixTargetDelta(s), o.onUpdate && o.onUpdate(s);
                    },
                    onStop: () => {},
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation();
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
            });
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(jg), this.currentAnimation.stop()), this.completeAnimation();
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: s,
                target: l,
                layout: c,
                latestValues: u
            } = o;
            if (!(!s || !l || !c)) {
                if (this !== o && this.layout && c && wc(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || ue();
                    const d = Re(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min, l.x.max = l.x.min + d;
                    const h = Re(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min, l.y.max = l.y.min + h;
                }
                Oe(s, l), Ot(s, u), ln(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
            }
        }
        registerSharedNode(o, s) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new Fg()), this.sharedNodes.get(o).add(s);
            const c = s.options.initialPromotionConfig;
            s.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(s) : void 0
            });
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0;
        }
        getLead() {
            const {
                layoutId: o
            } = this.options;
            return o ? this.getStack() ? .lead || this : this;
        }
        getPrevLead() {
            const {
                layoutId: o
            } = this.options;
            return o ? this.getStack() ? .prevLead : void 0;
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o)
                return this.root.sharedNodes.get(o);
        }
        promote({
            needsReset: o,
            transition: s,
            preserveFollowOpacity: l
        } = {}) {
            const c = this.getStack();
            c && c.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({
                transition: s
            });
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1;
        }
        resetSkewAndRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o)
                return;
            let s = !1;
            const {
                latestValues: l
            } = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (s = !0), !s)
                return;
            const c = {};
            l.z && Ir("z", o, c, this.animationValues);
            for (let u = 0; u < Vr.length; u++)
                Ir(`rotate${Vr[u]}`, o, c, this.animationValues), Ir(`skew${Vr[u]}`, o, c, this.animationValues);
            o.render();
            for (const u in c)
                o.setStaticValue(u, c[u]), this.animationValues && (this.animationValues[u] = c[u]);
            o.scheduleRender();
        }
        applyProjectionStyles(o, s) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return;
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = Gn(s ? .pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
                return;
            }
            const c = this.getLead();
            if (!this.projectionDelta || !this.layout || !c.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = Gn(s ? .pointerEvents) || ""), this.hasProjected && !bt(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
                return;
            }
            o.visibility = "";
            const u = c.animationValues || c.latestValues;
            this.applyTransformsToTarget();
            let d = Og(this.projectionDeltaWithTransform, this.treeScale, u);
            l && (d = l(u, d)), o.transform = d;
            const {
                x: h,
                y: f
            } = this.projectionDelta;
            o.transformOrigin = `${h.origin * 100}% ${f.origin * 100}% 0`, c.animationValues ? o.opacity = c === this ? u.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : o.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
            for (const v in vn) {
                if (u[v] === void 0)
                    continue;
                const {
                    correct: x,
                    applyTo: T,
                    isCSSVariable: P
                } = vn[v], b = d === "none" ? u[v] : x(u[v], c);
                if (T) {
                    const S = T.length;
                    for (let k = 0; k < S; k++)
                        o[T[k]] = b;
                } else
                    P ? this.options.visualElement.renderState.vars[v] = b : o[v] = b;
            }
            this.options.layoutId && (o.pointerEvents = c === this ? Gn(s ? .pointerEvents) || "" : "none");
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
        }
        // Only run on root
        resetTree() {
            this.root.nodes.forEach((o) => o.currentAnimation ? .stop()), this.root.nodes.forEach(qo), this.root.sharedNodes.clear();
        }
    };
}

function zg(e) {
    e.updateLayout();
}

function $g(e) {
    const t = e.resumeFrom ? .snapshot || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {
            layoutBox: n,
            measuredBox: r
        } = e.layout, {
            animationType: i
        } = e.options, a = t.source !== e.layout.source;
        i === "size" ? je((u) => {
            const d = a ? t.measuredBox[u] : t.layoutBox[u],
                h = Re(d);
            d.min = n[u].min, d.max = d.min + h;
        }) : wc(i, t.layoutBox, n) && je((u) => {
            const d = a ? t.measuredBox[u] : t.layoutBox[u],
                h = Re(n[u]);
            d.max = d.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + h);
        });
        const o = jt();
        ln(o, n, t.layoutBox);
        const s = jt();
        a ? ln(s, e.applyTransform(r, !0), t.measuredBox) : ln(s, n, t.layoutBox);
        const l = !pc(o);
        let c = !1;
        if (!e.resumeFrom) {
            const u = e.getClosestProjectingParent();
            if (u && !u.resumeFrom) {
                const {
                    snapshot: d,
                    layout: h
                } = u;
                if (d && h) {
                    const f = ue();
                    cn(f, t.layoutBox, d.layoutBox);
                    const v = ue();
                    cn(v, n, h.layoutBox), gc(f, v) || (c = !0), u.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = f, e.relativeParent = u);
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: n,
            snapshot: t,
            delta: s,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: c
        });
    } else if (e.isLead()) {
        const {
            onExitComplete: n
        } = e.options;
        n && n();
    }
    e.options.transition = void 0;
}

function _g(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}

function Ug(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}

function Hg(e) {
    e.clearSnapshot();
}

function qo(e) {
    e.clearMeasurements();
}

function Zo(e) {
    e.isLayoutDirty = !1;
}

function Wg(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}

function Jo(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}

function Kg(e) {
    e.resolveTargetDelta();
}

function Yg(e) {
    e.calcProjection();
}

function Gg(e) {
    e.resetSkewAndRotation();
}

function Xg(e) {
    e.removeLeadSnapshot();
}

function Qo(e, t, n) {
    e.translate = re(t.translate, 0, n), e.scale = re(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}

function es(e, t, n, r) {
    e.min = re(t.min, n.min, r), e.max = re(t.max, n.max, r);
}

function qg(e, t, n, r) {
    es(e.x, t.x, n.x, r), es(e.y, t.y, n.y, r);
}

function Zg(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Jg = {
        duration: 0.45,
        ease: [0.4, 0, 0.1, 1]
    },
    ts = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    ns = ts("applewebkit/") && !ts("chrome/") ? Math.round : $e;

function rs(e) {
    e.min = ns(e.min), e.max = ns(e.max);
}

function Qg(e) {
    rs(e.x), rs(e.y);
}

function wc(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !ag(Go(t), Go(n), 0.2);
}

function ey(e) {
    return e !== e.root && e.scroll ? .wasRoot;
}
const ty = vc({
        attachResizeListener: (e, t) => wn(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Fr = {
        current: void 0
    },
    xc = vc({
        measureScroll: (e) => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Fr.current) {
                const e = new ty({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Fr.current = e;
            }
            return Fr.current;
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none";
        },
        checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
    }),
    ny = {
        pan: {
            Feature: xg
        },
        drag: {
            Feature: wg,
            ProjectionNode: xc,
            MeasureLayout: hc
        }
    };

function is(e, t, n) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n,
        a = r[i];
    a && ne.postRender(() => a(t, Mn(t)));
}
class ry extends ft {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = Pm(t, (n, r) => (is(this.node, r, "Start"), (i) => is(this.node, i, "End"))));
    }
    unmount() {}
}
class iy extends ft {
    constructor() {
        super(...arguments), this.isActive = !1;
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible");
        } catch {
            t = !0;
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
    }
    mount() {
        this.unmount = Rn(wn(this.node.current, "focus", () => this.onFocus()), wn(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {}
}

function as(e, t, n) {
    const {
        props: r
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n),
        a = r[i];
    a && ne.postRender(() => a(t, Mn(t)));
}
class ay extends ft {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = Em(t, (n, r) => (as(this.node, r, "Start"), (i, {
            success: a
        }) => as(this.node, i, a ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }));
    }
    unmount() {}
}
const li = /* @__PURE__ */ new WeakMap(),
    Or = /* @__PURE__ */ new WeakMap(),
    oy = (e) => {
        const t = li.get(e.target);
        t && t(e);
    },
    sy = (e) => {
        e.forEach(oy);
    };

function ly({
    root: e,
    ...t
}) {
    const n = e || document;
    Or.has(n) || Or.set(n, {});
    const r = Or.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(sy, {
        root: e,
        ...t
    })), r[i];
}

function cy(e, t, n) {
    const r = ly(t);
    return li.set(e, n), r.observe(e), () => {
        li.delete(e), r.unobserve(e);
    };
}
const uy = {
    some: 0,
    all: 1
};
class dy extends ft {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: a
        } = t, o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : uy[i]
        }, s = (l) => {
            const {
                isIntersecting: c
            } = l;
            if (this.isInView === c || (this.isInView = c, a && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {
                onViewportEnter: u,
                onViewportLeave: d
            } = this.node.getProps(), h = c ? u : d;
            h && h(l);
        };
        return cy(this.node.current, o, s);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(hy(t, n)) && this.startObserver();
    }
    unmount() {}
}

function hy({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return (n) => e[n] !== t[n];
}
const fy = {
        inView: {
            Feature: dy
        },
        tap: {
            Feature: ay
        },
        focus: {
            Feature: iy
        },
        hover: {
            Feature: ry
        }
    },
    my = {
        layout: {
            ProjectionNode: xc,
            MeasureLayout: hc
        }
    },
    py = {
        ...Qp,
        ...fy,
        ...ny,
        ...my
    },
    A = /* @__PURE__ */ pp(py, Mp);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    yy = (e) => e.replace(
        /^([A-Z])|[\s-_]+(\w)/g,
        (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
    ),
    os = (e) => {
        const t = yy(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    },
    bc = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = Et(
    ({
        color: e = "currentColor",
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = "",
        children: a,
        iconNode: o,
        ...s
    }, l) => U(
        "svg", {
            ref: l,
            ...vy,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: bc("lucide", i),
            ...s
        }, [
            ...o.map(([c, u]) => U(c, u)),
            ...Array.isArray(a) ? a : [a]
        ]
    )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = (e, t) => {
    const n = Et(
        ({
            className: r,
            ...i
        }, a) => U(wy, {
            ref: a,
            iconNode: t,
            className: bc(
                `lucide-${gy(os(e))}`,
                `lucide-${e}`,
                r
            ),
            ...i
        })
    );
    return n.displayName = os(e), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = [
        ["path", {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }],
        ["path", {
            d: "M19 12H5",
            key: "x3x0zl"
        }]
    ],
    by = ie("arrow-left", xy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ty = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ],
    Py = ie("arrow-right", Ty);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = [
        ["path", {
            d: "M10.268 21a2 2 0 0 0 3.464 0",
            key: "vwvbt9"
        }],
        [
            "path",
            {
                d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
                key: "11g9vi"
            }
        ]
    ],
    Ry = ie("bell", Sy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ],
    Ey = ie("chevron-down", Cy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = [
        ["path", {
            d: "M14.4 14.4 9.6 9.6",
            key: "ic80wn"
        }],
        [
            "path",
            {
                d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",
                key: "nnl7wr"
            }
        ],
        ["path", {
            d: "m21.5 21.5-1.4-1.4",
            key: "1f1ice"
        }],
        ["path", {
            d: "M3.9 3.9 2.5 2.5",
            key: "1evmna"
        }],
        [
            "path",
            {
                d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",
                key: "yhosts"
            }
        ]
    ],
    Tc = ie("dumbbell", My);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "M10 14 21 3",
            key: "gplh6r"
        }],
        ["path", {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }]
    ],
    Ly = ie("external-link", Dy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ay = [
        [
            "path",
            {
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                key: "1jg4f8"
            }
        ]
    ],
    ky = ie("facebook", Ay);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = [
        ["path", {
            d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
            key: "5wwlr5"
        }],
        [
            "path",
            {
                d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                key: "1d0kgt"
            }
        ]
    ],
    ia = ie("house", Ny);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = [
        ["rect", {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw"
        }],
        ["path", {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1"
        }],
        ["line", {
            x1: "17.5",
            x2: "17.51",
            y1: "6.5",
            y2: "6.5",
            key: "r4j83e"
        }]
    ],
    Iy = ie("instagram", Vy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = [
        [
            "path",
            {
                d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
                key: "tarvll"
            }
        ]
    ],
    Pc = ie("laptop", Fy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oy = [
        ["rect", {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }],
        ["path", {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }]
    ],
    jy = ie("mail", Oy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const By = [
        [
            "path",
            {
                d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
                key: "1r0f0z"
            }
        ],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    zy = ie("map-pin", By);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]
    ],
    _y = ie("menu", $y);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uy = [
        [
            "path",
            {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                key: "foiqr5"
            }
        ]
    ],
    Hy = ie("phone", Uy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = [
        ["polygon", {
            points: "6 3 20 12 6 21 6 3",
            key: "1oa8hb"
        }]
    ],
    Ky = ie("play", Wy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = [
        ["path", {
            d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
            key: "hou9p0"
        }],
        ["path", {
            d: "M3 6h18",
            key: "d0wm0j"
        }],
        ["path", {
            d: "M16 10a4 4 0 0 1-8 0",
            key: "1ltviw"
        }]
    ],
    dr = ie("shopping-bag", Yy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = [
        [
            "path",
            {
                d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
                key: "4pj2yx"
            }
        ],
        ["path", {
            d: "M20 3v4",
            key: "1olli1"
        }],
        ["path", {
            d: "M22 5h-4",
            key: "1gvqau"
        }],
        ["path", {
            d: "M4 17v2",
            key: "vumght"
        }],
        ["path", {
            d: "M5 18H3",
            key: "zchphs"
        }]
    ],
    hr = ie("sparkles", Gy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = [
        [
            "path",
            {
                d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
                key: "2ksp49"
            }
        ]
    ],
    qy = ie("star-half", Xy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = [
        [
            "path",
            {
                d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
                key: "r04s7s"
            }
        ]
    ],
    ss = ie("star", Zy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = [
        ["polyline", {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }],
        ["polyline", {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }]
    ],
    Qy = ie("trending-up", Jy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e0 = [
        [
            "path",
            {
                d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                key: "pff0z6"
            }
        ]
    ],
    t0 = ie("twitter", e0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    r0 = ie("x", n0);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i0 = [
        [
            "path",
            {
                d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
                key: "1q2vi4"
            }
        ],
        ["path", {
            d: "m10 15 5-3-5-3z",
            key: "1jp15x"
        }]
    ],
    ci = ie("youtube", i0);

function a0() {
    const [e, t] = Se(!1), [n, r] = Se(!1);
    return ke(() => {
        const i = () => {
            t(window.scrollY > 20);
        };
        return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i);
    }, []), /* @__PURE__ */ D(
        A.nav, {
            initial: {
                y: -100
            },
            animate: {
                y: 0
            },
            transition: {
                duration: 0.5
            },
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e ? "bg-white/90 backdrop-blur-lg shadow-lg" : "bg-transparent"}`,
            children: [
                /* @__PURE__ */
                g("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /* @__PURE__ */ D("div", {
                        className: "flex items-center justify-between h-20",
                        children: [
                            /* @__PURE__ */
                            g(xe, {
                                to: "/",
                                children: /* @__PURE__ */ D(
                                    A.div, {
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        className: "flex items-center gap-3",
                                        children: [
                                            /* @__PURE__ */
                                            g("div", {
                                                className: "bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-xl shadow-lg",
                                                children: /* @__PURE__ */ g(dr, {
                                                    className: "w-6 h-6 text-white"
                                                })
                                            }),
                                            /* @__PURE__ */
                                            D("div", {
                                                children: [
                                                    /* @__PURE__ */
                                                    g("h1", {
                                                        className: "text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                                        children: "KASHANI"
                                                    }),
                                                    /* @__PURE__ */
                                                    g("p", {
                                                        className: "text-xs text-gray-600",
                                                        children: "Store"
                                                    })
                                                ]
                                            })
                                        ]
                                    }
                                )
                            }),
                            /* @__PURE__ */
                            D("div", {
                                className: "hidden md:flex items-center gap-8",
                                children: [
                                    /* @__PURE__ */
                                    g(xe, {
                                        to: "/",
                                        children: /* @__PURE__ */ g(
                                            A.span, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                className: "text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer",
                                                children: "Home"
                                            }
                                        )
                                    }),
                                    /* @__PURE__ */
                                    g(xe, {
                                        to: "/#categories",
                                        children: /* @__PURE__ */ g(
                                            A.span, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                className: "text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer",
                                                children: "Categories"
                                            }
                                        )
                                    }),
                                    /* @__PURE__ */
                                    g(xe, {
                                        to: "/#youtube",
                                        children: /* @__PURE__ */ g(
                                            A.span, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                className: "text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer",
                                                children: "YouTube"
                                            }
                                        )
                                    }),
                                    /* @__PURE__ */
                                    g(xe, {
                                        to: "/#contact",
                                        children: /* @__PURE__ */ g(
                                            A.span, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                className: "text-gray-700 hover:text-purple-600 font-medium transition-colors cursor-pointer",
                                                children: "Contact"
                                            }
                                        )
                                    })
                                ]
                            }),
                            /* @__PURE__ */
                            g(
                                "button", {
                                    onClick: () => r(!n),
                                    className: "md:hidden p-2 text-gray-700 hover:text-purple-600",
                                    children: n ? /* @__PURE__ */ g(r0, {
                                        size: 24
                                    }) : /* @__PURE__ */ g(_y, {
                                        size: 24
                                    })
                                }
                            )
                        ]
                    })
                }),
                /* @__PURE__ */
                g(Om, {
                    children: n && /* @__PURE__ */ g(
                        A.div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: "auto"
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            className: "md:hidden bg-white border-t border-gray-200",
                            children: /* @__PURE__ */ D("div", {
                                className: "px-4 py-6 space-y-4",
                                children: [
                                    /* @__PURE__ */
                                    g(
                                        xe, {
                                            to: "/",
                                            onClick: () => r(!1),
                                            className: "block text-gray-700 hover:text-purple-600 font-medium",
                                            children: "Home"
                                        }
                                    ),
                                    /* @__PURE__ */
                                    g(
                                        xe, {
                                            to: "/#categories",
                                            onClick: () => r(!1),
                                            className: "block text-gray-700 hover:text-purple-600 font-medium",
                                            children: "Categories"
                                        }
                                    ),
                                    /* @__PURE__ */
                                    g(
                                        xe, {
                                            to: "/#youtube",
                                            onClick: () => r(!1),
                                            className: "block text-gray-700 hover:text-purple-600 font-medium",
                                            children: "YouTube"
                                        }
                                    ),
                                    /* @__PURE__ */
                                    g(
                                        xe, {
                                            to: "/#contact",
                                            onClick: () => r(!1),
                                            className: "block text-gray-700 hover:text-purple-600 font-medium",
                                            children: "Contact"
                                        }
                                    )
                                ]
                            })
                        }
                    )
                })
            ]
        }
    );
}

function o0() {
    const e = ( /* @__PURE__ */ new Date()).getFullYear();
    return /* @__PURE__ */ g("footer", {
        id: "contact",
        className: "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white",
        children: /* @__PURE__ */ D("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: [
                /* @__PURE__ */
                D("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",
                    children: [
                        /* @__PURE__ */
                        D(
                            A.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: 0.5
                                },
                                children: [
                                    /* @__PURE__ */
                                    g("h3", {
                                        className: "text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
                                        children: "KASHANI STORE"
                                    }),
                                    /* @__PURE__ */
                                    g("p", {
                                        className: "text-gray-300 mb-4",
                                        children: "Your trusted source for trending products across multiple categories. We curate the best deals from Amazon for you."
                                    })
                                ]
                            }
                        ),
                        /* @__PURE__ */
                        D(
                            A.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.1
                                },
                                children: [
                                    /* @__PURE__ */
                                    g("h3", {
                                        className: "text-xl font-bold mb-4",
                                        children: "Quick Links"
                                    }),
                                    /* @__PURE__ */
                                    D("ul", {
                                        className: "space-y-2",
                                        children: [
                                            /* @__PURE__ */
                                            g("li", {
                                                children: /* @__PURE__ */ g("a", {
                                                    href: "#",
                                                    className: "text-gray-300 hover:text-purple-400 transition-colors",
                                                    children: "Home"
                                                })
                                            }),
                                            /* @__PURE__ */
                                            g("li", {
                                                children: /* @__PURE__ */ g("a", {
                                                    href: "#categories",
                                                    className: "text-gray-300 hover:text-purple-400 transition-colors",
                                                    children: "Categories"
                                                })
                                            }),
                                            /* @__PURE__ */
                                            g("li", {
                                                children: /* @__PURE__ */ g("a", {
                                                    href: "#youtube",
                                                    className: "text-gray-300 hover:text-purple-400 transition-colors",
                                                    children: "YouTube Channel"
                                                })
                                            }),
                                            /* @__PURE__ */
                                            g("li", {
                                                children: /* @__PURE__ */ g("a", {
                                                    href: "#contact",
                                                    className: "text-gray-300 hover:text-purple-400 transition-colors",
                                                    children: "Contact Us"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }
                        ),
                        /* @__PURE__ */
                        D(
                            A.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2
                                },
                                children: [
                                    /* @__PURE__ */
                                    g("h3", {
                                        className: "text-xl font-bold mb-4",
                                        children: "Contact Info"
                                    }),
                                    /* @__PURE__ */
                                    D("ul", {
                                        className: "space-y-3",
                                        children: [
                                            /* @__PURE__ */
                                            D("li", {
                                                className: "flex items-center gap-3 text-gray-300",
                                                children: [
                                                    /* @__PURE__ */
                                                    g(jy, {
                                                        size: 18,
                                                        className: "text-purple-400"
                                                    }),
                                                    /* @__PURE__ */
                                                    g("span", {
                                                        children: "contact@kashanistore.com"
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */
                                            D("li", {
                                                className: "flex items-center gap-3 text-gray-300",
                                                children: [
                                                    /* @__PURE__ */
                                                    g(Hy, {
                                                        size: 18,
                                                        className: "text-purple-400"
                                                    }),
                                                    /* @__PURE__ */
                                                    g("span", {
                                                        children: "+1 (555) 123-4567"
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */
                                            D("li", {
                                                className: "flex items-center gap-3 text-gray-300",
                                                children: [
                                                    /* @__PURE__ */
                                                    g(zy, {
                                                        size: 18,
                                                        className: "text-purple-400"
                                                    }),
                                                    /* @__PURE__ */
                                                    g("span", {
                                                        children: "Your City, Country"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }
                        ),
                        /* @__PURE__ */
                        D(
                            A.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.3
                                },
                                children: [
                                    /* @__PURE__ */
                                    g("h3", {
                                        className: "text-xl font-bold mb-4",
                                        children: "Follow Us"
                                    }),
                                    /* @__PURE__ */
                                    D("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /* @__PURE__ */
                                            g(
                                                A.a, {
                                                    href: "#",
                                                    whileHover: {
                                                        scale: 1.1,
                                                        rotate: 5
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    className: "bg-white/10 p-3 rounded-lg hover:bg-purple-600 transition-colors",
                                                    children: /* @__PURE__ */ g(ci, {
                                                        size: 20
                                                    })
                                                }
                                            ),
                                            /* @__PURE__ */
                                            g(
                                                A.a, {
                                                    href: "#",
                                                    whileHover: {
                                                        scale: 1.1,
                                                        rotate: 5
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    className: "bg-white/10 p-3 rounded-lg hover:bg-purple-600 transition-colors",
                                                    children: /* @__PURE__ */ g(ky, {
                                                        size: 20
                                                    })
                                                }
                                            ),
                                            /* @__PURE__ */
                                            g(
                                                A.a, {
                                                    href: "#",
                                                    whileHover: {
                                                        scale: 1.1,
                                                        rotate: 5
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    className: "bg-white/10 p-3 rounded-lg hover:bg-purple-600 transition-colors",
                                                    children: /* @__PURE__ */ g(t0, {
                                                        size: 20
                                                    })
                                                }
                                            ),
                                            /* @__PURE__ */
                                            g(
                                                A.a, {
                                                    href: "#",
                                                    whileHover: {
                                                        scale: 1.1,
                                                        rotate: 5
                                                    },
                                                    whileTap: {
                                                        scale: 0.95
                                                    },
                                                    className: "bg-white/10 p-3 rounded-lg hover:bg-purple-600 transition-colors",
                                                    children: /* @__PURE__ */ g(Iy, {
                                                        size: 20
                                                    })
                                                }
                                            )
                                        ]
                                    }),
                                    /* @__PURE__ */
                                    g("p", {
                                        className: "text-gray-400 text-sm mt-6",
                                        children: "Subscribe to our YouTube channel for product reviews and unboxing videos!"
                                    })
                                ]
                            }
                        )
                    ]
                }),
                /* @__PURE__ */
                g(
                    A.div, {
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.4
                        },
                        className: "border-t border-white/10 mt-12 pt-8 text-center text-gray-400",
                        children: /* @__PURE__ */ D("p", {
                            children: [
                                "© ",
                                e,
                                " Kashani Store. All rights reserved. | Affiliate Disclosure: As an Amazon Associate, we earn from qualifying purchases."
                            ]
                        })
                    }
                )
            ]
        })
    });
}

function s0() {
    return /* @__PURE__ */ D("div", {
        className: "min-h-screen",
        children: [
            /* @__PURE__ */
            g(a0, {}),
            /* @__PURE__ */
            g("main", {
                children: /* @__PURE__ */ g(Zd, {})
            }),
            /* @__PURE__ */
            g(o0, {})
        ]
    });
}

function l0() {
    return /* @__PURE__ */ D("div", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50",
        children: [
            /* @__PURE__ */
            g(
                A.div, {
                    animate: {
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    },
                    transition: {
                        duration: 20,
                        repeat: 1 / 0,
                        ease: "linear"
                    },
                    className: "absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                }
            ),
            /* @__PURE__ */
            g(
                A.div, {
                    animate: {
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0]
                    },
                    transition: {
                        duration: 15,
                        repeat: 1 / 0,
                        ease: "linear"
                    },
                    className: "absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                }
            ),
            /* @__PURE__ */
            g(
                A.div, {
                    animate: {
                        scale: [1, 1.3, 1],
                        rotate: [0, -180, -360]
                    },
                    transition: {
                        duration: 25,
                        repeat: 1 / 0,
                        ease: "linear"
                    },
                    className: "absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                }
            ),
            /* @__PURE__ */
            D("div", {
                className: "relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",
                children: [
                    /* @__PURE__ */
                    g(
                        A.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "mb-6",
                            children: /* @__PURE__ */ g(
                                A.div, {
                                    animate: {
                                        rotate: [0, 10, -10, 0]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0,
                                        repeatDelay: 3
                                    },
                                    className: "inline-block",
                                    children: /* @__PURE__ */ g(hr, {
                                        size: 48,
                                        className: "text-purple-600 mb-4"
                                    })
                                }
                            )
                        }
                    ),
                    /* @__PURE__ */
                    g(
                        A.h1, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.2
                            },
                            className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent",
                            children: "Welcome to KASHANI Store"
                        }
                    ),
                    /* @__PURE__ */
                    g(
                        A.p, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.4
                            },
                            className: "text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto",
                            children: "Discover the best trending products across all categories with exclusive deals from Amazon"
                        }
                    ),
                    /* @__PURE__ */
                    D(
                        A.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.6
                            },
                            className: "flex flex-wrap items-center justify-center gap-6 mb-12",
                            children: [
                                /* @__PURE__ */
                                D(
                                    A.a, {
                                        href: "#categories",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        className: "flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-purple-300 transition-shadow",
                                        children: [
                                            /* @__PURE__ */
                                            g(dr, {
                                                size: 24
                                            }),
                                            "Browse Categories"
                                        ]
                                    }
                                ),
                                /* @__PURE__ */
                                D(
                                    A.a, {
                                        href: "#youtube",
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        className: "flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-shadow border-2 border-purple-600",
                                        children: [
                                            /* @__PURE__ */
                                            g(Qy, {
                                                size: 24
                                            }),
                                            "Watch Reviews"
                                        ]
                                    }
                                )
                            ]
                        }
                    ),
                    /* @__PURE__ */
                    g(
                        A.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.8
                            },
                            className: "flex flex-wrap items-center justify-center gap-4",
                            children: ["✨ Curated Products", "🔥 Best Deals", "📦 Fast Delivery", "⭐ Top Rated"].map((e, t) => /* @__PURE__ */ g(
                                A.div, {
                                    initial: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 1 + t * 0.1
                                    },
                                    className: "bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg text-gray-700 font-medium",
                                    children: e
                                },
                                t
                            ))
                        }
                    )
                ]
            }),
            /* @__PURE__ */
            g(
                A.div, {
                    animate: {
                        y: [0, 10, 0]
                    },
                    transition: {
                        duration: 1.5,
                        repeat: 1 / 0
                    },
                    className: "absolute bottom-10 left-1/2 transform -translate-x-1/2",
                    children: /* @__PURE__ */ g(Ey, {
                        size: 32,
                        className: "text-purple-600"
                    })
                }
            )
        ]
    });
}
const ls = [
        // Tech Products
        {
            id: "tech-1",
            name: "Wireless Noise Cancelling Headphones",
            category: "Tech",
            price: "$199.99",
            originalPrice: "$249.99",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.5,
            reviews: 1250,
            badge: "Best Seller",
            description: "Premium wireless headphones with active noise cancellation"
        },
        {
            id: "tech-2",
            name: "Smart Watch Pro",
            category: "Tech",
            price: "$299.99",
            originalPrice: "$399.99",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.7,
            reviews: 892,
            badge: "Trending",
            description: "Advanced fitness tracking with heart rate monitoring"
        },
        {
            id: "tech-3",
            name: "4K Webcam for Streaming",
            category: "Tech",
            price: "$149.99",
            image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.4,
            reviews: 567,
            description: "Crystal clear 4K video quality for professional streaming"
        },
        {
            id: "tech-4",
            name: "Mechanical Gaming Keyboard",
            category: "Tech",
            price: "$129.99",
            originalPrice: "$179.99",
            image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.8,
            reviews: 2103,
            badge: "Hot Deal",
            description: "RGB backlit mechanical keyboard with tactile switches"
        },
        // Fashion Products
        {
            id: "fashion-1",
            name: "Luxury Leather Handbag",
            category: "Fashion",
            price: "$189.99",
            originalPrice: "$259.99",
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.6,
            reviews: 743,
            badge: "Trending",
            description: "Elegant genuine leather handbag with multiple compartments"
        },
        {
            id: "fashion-2",
            name: "Designer Sunglasses",
            category: "Fashion",
            price: "$89.99",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.5,
            reviews: 421,
            description: "UV protection polarized sunglasses with premium frames"
        },
        {
            id: "fashion-3",
            name: "Minimalist Watch Collection",
            category: "Fashion",
            price: "$79.99",
            originalPrice: "$129.99",
            image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.7,
            reviews: 1089,
            badge: "Best Seller",
            description: "Elegant minimalist design with Japanese quartz movement"
        },
        {
            id: "fashion-4",
            name: "Premium Leather Wallet",
            category: "Fashion",
            price: "$49.99",
            image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.8,
            reviews: 1532,
            description: "RFID blocking genuine leather bifold wallet"
        },
        // Home & Living Products
        {
            id: "home-1",
            name: "Smart LED Light Bulbs (4-Pack)",
            category: "Home & Living",
            price: "$39.99",
            originalPrice: "$59.99",
            image: "https://images.unsplash.com/photo-1550985616-10810253b84d?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.6,
            reviews: 2876,
            badge: "Best Seller",
            description: "WiFi enabled color changing smart bulbs"
        },
        {
            id: "home-2",
            name: "Bamboo Cutting Board Set",
            category: "Home & Living",
            price: "$34.99",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.7,
            reviews: 1243,
            description: "Eco-friendly bamboo cutting boards in 3 sizes"
        },
        {
            id: "home-3",
            name: "Modern Wall Clock",
            category: "Home & Living",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.5,
            reviews: 687,
            description: "Silent non-ticking minimalist wall clock"
        },
        {
            id: "home-4",
            name: "Aromatherapy Diffuser",
            category: "Home & Living",
            price: "$44.99",
            originalPrice: "$69.99",
            image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.8,
            reviews: 3421,
            badge: "Trending",
            description: "Ultrasonic essential oil diffuser with LED lights"
        },
        // Beauty Products
        {
            id: "beauty-1",
            name: "Skincare Routine Set",
            category: "Beauty",
            price: "$79.99",
            originalPrice: "$119.99",
            image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.7,
            reviews: 1876,
            badge: "Best Seller",
            description: "Complete 5-step skincare routine with natural ingredients"
        },
        {
            id: "beauty-2",
            name: "Makeup Brush Set (12-Piece)",
            category: "Beauty",
            price: "$29.99",
            image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.6,
            reviews: 2341,
            description: "Professional quality makeup brushes with case"
        },
        {
            id: "beauty-3",
            name: "LED Makeup Mirror",
            category: "Beauty",
            price: "$39.99",
            originalPrice: "$59.99",
            image: "https://images.unsplash.com/photo-1585927034152-23cde3c0e399?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.8,
            reviews: 1543,
            badge: "Hot Deal",
            description: "Tri-fold vanity mirror with adjustable LED lighting"
        },
        {
            id: "beauty-4",
            name: "Hair Styling Tools Set",
            category: "Beauty",
            price: "$89.99",
            image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.5,
            reviews: 876,
            description: "Professional hair dryer and curling iron set"
        },
        // Fitness Products
        {
            id: "fitness-1",
            name: "Yoga Mat with Carrying Strap",
            category: "Fitness",
            price: "$34.99",
            image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.7,
            reviews: 3214,
            badge: "Best Seller",
            description: "Extra thick non-slip yoga mat for all exercises"
        },
        {
            id: "fitness-2",
            name: "Adjustable Dumbbells Set",
            category: "Fitness",
            price: "$149.99",
            originalPrice: "$199.99",
            image: "https://images.unsplash.com/photo-1593476123561-9516f2097158?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.8,
            reviews: 1987,
            badge: "Trending",
            description: "Quick-adjust dumbbells from 5 to 52.5 lbs each"
        },
        {
            id: "fitness-3",
            name: "Resistance Bands Set",
            category: "Fitness",
            price: "$24.99",
            image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.6,
            reviews: 2654,
            description: "5 resistance levels with carrying bag and door anchor"
        },
        {
            id: "fitness-4",
            name: "Smart Jump Rope",
            category: "Fitness",
            price: "$39.99",
            originalPrice: "$54.99",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
            amazonLink: "https://amazon.com",
            rating: 4.5,
            reviews: 876,
            badge: "Hot Deal",
            description: "Digital jump rope with calorie counter and app"
        }
    ],
    Sc = [{
            id: "tech",
            name: "Tech",
            icon: "Laptop",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: "fashion",
            name: "Fashion",
            icon: "ShoppingBag",
            color: "from-pink-500 to-rose-500"
        },
        {
            id: "home-living",
            name: "Home & Living",
            icon: "Home",
            color: "from-green-500 to-emerald-500"
        },
        {
            id: "beauty",
            name: "Beauty",
            icon: "Sparkles",
            color: "from-purple-500 to-pink-500"
        },
        {
            id: "fitness",
            name: "Fitness",
            icon: "Dumbbell",
            color: "from-orange-500 to-red-500"
        }
    ];

function c0(e) {
    return e === "home-living" ? ls.filter((t) => t.category === "Home & Living") : ls.filter((t) => t.category.toLowerCase() === e.toLowerCase());
}
const u0 = {
    Laptop: Pc,
    ShoppingBag: dr,
    Home: ia,
    Sparkles: hr,
    Dumbbell: Tc
};

function d0() {
    return /* @__PURE__ */ g("section", {
        id: "categories",
        className: "py-20 bg-white",
        children: /* @__PURE__ */ D("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /* @__PURE__ */
                D(
                    A.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "text-center mb-16",
                        children: [
                            /* @__PURE__ */
                            g("h2", {
                                className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                children: "Trending Categories"
                            }),
                            /* @__PURE__ */
                            g("p", {
                                className: "text-xl text-gray-700 max-w-2xl mx-auto",
                                children: "Explore our curated collection across multiple categories"
                            })
                        ]
                    }
                ),
                /* @__PURE__ */
                g("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",
                    children: Sc.map((e, t) => {
                        const n = u0[e.icon];
                        return /* @__PURE__ */ g(xe, {
                            to: `/category/${e.id}`,
                            children: /* @__PURE__ */ D(
                                A.div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: t * 0.1
                                    },
                                    whileHover: {
                                        y: -10,
                                        scale: 1.02
                                    },
                                    className: "relative group cursor-pointer",
                                    children: [
                                        /* @__PURE__ */
                                        g("div", {
                                            className: "absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300"
                                        }),
                                        /* @__PURE__ */
                                        D("div", {
                                            className: "relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border-2 border-gray-100 group-hover:border-transparent",
                                            children: [
                                                /* @__PURE__ */
                                                g(
                                                    A.div, {
                                                        whileHover: {
                                                            rotate: 360
                                                        },
                                                        transition: {
                                                            duration: 0.5
                                                        },
                                                        className: `w-16 h-16 bg-gradient-to-br ${e.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`,
                                                        children: /* @__PURE__ */ g(n, {
                                                            size: 32,
                                                            className: "text-white"
                                                        })
                                                    }
                                                ),
                                                /* @__PURE__ */
                                                g("h3", {
                                                    className: "text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:${category.color} group-hover:bg-clip-text group-hover:text-transparent transition-all",
                                                    children: e.name
                                                }),
                                                /* @__PURE__ */
                                                D("p", {
                                                    className: "text-gray-600 mb-4",
                                                    children: [
                                                        "Discover the best ",
                                                        e.name.toLowerCase(),
                                                        " products with exclusive deals"
                                                    ]
                                                }),
                                                /* @__PURE__ */
                                                D(
                                                    A.div, {
                                                        className: "flex items-center gap-2 text-purple-600 font-semibold",
                                                        whileHover: {
                                                            x: 5
                                                        },
                                                        children: [
                                                            "Browse Products",
                                                            /* @__PURE__ */
                                                            g(Py, {
                                                                size: 20
                                                            })
                                                        ]
                                                    }
                                                )
                                            ]
                                        })
                                    ]
                                }
                            )
                        }, e.id);
                    })
                }),
                /* @__PURE__ */
                D(
                    A.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.5
                        },
                        className: "bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 md:p-12 text-center",
                        children: [
                            /* @__PURE__ */
                            g("h3", {
                                className: "text-2xl md:text-3xl font-bold text-gray-900 mb-4",
                                children: "Can't Find What You're Looking For?"
                            }),
                            /* @__PURE__ */
                            g("p", {
                                className: "text-lg text-gray-700 mb-6 max-w-2xl mx-auto",
                                children: "We're constantly adding new products and categories. Subscribe to our YouTube channel to stay updated with the latest additions!"
                            }),
                            /* @__PURE__ */
                            D(
                                A.a, {
                                    href: "#youtube",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    className: "inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow",
                                    children: [
                                        /* @__PURE__ */
                                        g(hr, {
                                            size: 20
                                        }),
                                        "Stay Updated"
                                    ]
                                }
                            )
                        ]
                    }
                )
            ]
        })
    });
}
const h0 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

function ui(e) {
    const [t, n] = Se(!1), r = () => {
        n(!0);
    }, {
        src: i,
        alt: a,
        style: o,
        className: s,
        ...l
    } = e;
    return t ? /* @__PURE__ */ g(
        "div", {
            className: `inline-block bg-gray-100 text-center align-middle ${s ?? ""}`,
            style: o,
            children: /* @__PURE__ */ g("div", {
                className: "flex items-center justify-center w-full h-full",
                children: /* @__PURE__ */ g("img", {
                    src: h0,
                    alt: "Error loading image",
                    ...l,
                    "data-original-url": i
                })
            })
        }
    ) : /* @__PURE__ */ g("img", {
        src: i,
        alt: a,
        className: s,
        style: o,
        ...l,
        onError: r
    });
}

function f0() {
    return /* @__PURE__ */ g("section", {
        id: "youtube",
        className: "py-20 bg-gradient-to-br from-red-50 via-pink-50 to-purple-50",
        children: /* @__PURE__ */ D("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /* @__PURE__ */
                D(
                    A.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "text-center mb-12",
                        children: [
                            /* @__PURE__ */
                            g(
                                A.div, {
                                    animate: {
                                        scale: [1, 1.1, 1]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0
                                    },
                                    className: "inline-block mb-4",
                                    children: /* @__PURE__ */ g(ci, {
                                        size: 56,
                                        className: "text-red-600"
                                    })
                                }
                            ),
                            /* @__PURE__ */
                            g("h2", {
                                className: "text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent",
                                children: "KASHANI YouTube Channel"
                            }),
                            /* @__PURE__ */
                            g("p", {
                                className: "text-xl text-gray-700 max-w-2xl mx-auto",
                                children: "Watch our latest product reviews, unboxing videos, and exclusive deals!"
                            })
                        ]
                    }
                ),
                /* @__PURE__ */
                D("div", {
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [
                        /* @__PURE__ */
                        D(
                            A.div, {
                                initial: {
                                    opacity: 0,
                                    x: -50
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                className: "space-y-6",
                                children: [
                                    /* @__PURE__ */
                                    D("div", {
                                        className: "bg-white rounded-2xl p-8 shadow-xl",
                                        children: [
                                            /* @__PURE__ */
                                            D("div", {
                                                className: "flex items-center gap-6 mb-6",
                                                children: [
                                                    /* @__PURE__ */
                                                    g(
                                                        A.div, {
                                                            whileHover: {
                                                                rotate: 360
                                                            },
                                                            transition: {
                                                                duration: 0.5
                                                            },
                                                            className: "w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg overflow-hidden",
                                                            children: /* @__PURE__ */ g(
                                                                ui, {
                                                                    src: "https://images.unsplash.com/photo-1704643671561-c7562fe150df?w=200",
                                                                    alt: "Kashani Channel Logo",
                                                                    className: "w-full h-full object-cover"
                                                                }
                                                            )
                                                        }
                                                    ),
                                                    /* @__PURE__ */
                                                    D("div", {
                                                        children: [
                                                            /* @__PURE__ */
                                                            g("h3", {
                                                                className: "text-2xl font-bold text-gray-900",
                                                                children: "KASHANI"
                                                            }),
                                                            /* @__PURE__ */
                                                            g("p", {
                                                                className: "text-gray-600",
                                                                children: "Product Reviews & Deals"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */
                                            D("div", {
                                                className: "grid grid-cols-3 gap-4 mb-6",
                                                children: [
                                                    /* @__PURE__ */
                                                    D("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /* @__PURE__ */
                                                            g(
                                                                A.div, {
                                                                    initial: {
                                                                        scale: 0
                                                                    },
                                                                    whileInView: {
                                                                        scale: 1
                                                                    },
                                                                    viewport: {
                                                                        once: !0
                                                                    },
                                                                    transition: {
                                                                        duration: 0.5,
                                                                        delay: 0.3
                                                                    },
                                                                    className: "text-3xl font-bold text-purple-600",
                                                                    children: "10K+"
                                                                }
                                                            ),
                                                            /* @__PURE__ */
                                                            g("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Subscribers"
                                                            })
                                                        ]
                                                    }),
                                                    /* @__PURE__ */
                                                    D("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /* @__PURE__ */
                                                            g(
                                                                A.div, {
                                                                    initial: {
                                                                        scale: 0
                                                                    },
                                                                    whileInView: {
                                                                        scale: 1
                                                                    },
                                                                    viewport: {
                                                                        once: !0
                                                                    },
                                                                    transition: {
                                                                        duration: 0.5,
                                                                        delay: 0.4
                                                                    },
                                                                    className: "text-3xl font-bold text-pink-600",
                                                                    children: "150+"
                                                                }
                                                            ),
                                                            /* @__PURE__ */
                                                            g("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Videos"
                                                            })
                                                        ]
                                                    }),
                                                    /* @__PURE__ */
                                                    D("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /* @__PURE__ */
                                                            g(
                                                                A.div, {
                                                                    initial: {
                                                                        scale: 0
                                                                    },
                                                                    whileInView: {
                                                                        scale: 1
                                                                    },
                                                                    viewport: {
                                                                        once: !0
                                                                    },
                                                                    transition: {
                                                                        duration: 0.5,
                                                                        delay: 0.5
                                                                    },
                                                                    className: "text-3xl font-bold text-red-600",
                                                                    children: "500K+"
                                                                }
                                                            ),
                                                            /* @__PURE__ */
                                                            g("div", {
                                                                className: "text-sm text-gray-600",
                                                                children: "Views"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /* @__PURE__ */
                                            D(
                                                A.a, {
                                                    href: "https://youtube.com/@kashani",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    whileHover: {
                                                        scale: 1.02
                                                    },
                                                    whileTap: {
                                                        scale: 0.98
                                                    },
                                                    className: "flex items-center justify-center gap-3 w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow",
                                                    children: [
                                                        /* @__PURE__ */
                                                        g(ci, {
                                                            size: 24
                                                        }),
                                                        "Visit Channel"
                                                    ]
                                                }
                                            )
                                        ]
                                    }),
                                    /* @__PURE__ */
                                    D(
                                        A.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            viewport: {
                                                once: !0
                                            },
                                            transition: {
                                                duration: 0.6,
                                                delay: 0.6
                                            },
                                            className: "bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl",
                                            children: [
                                                /* @__PURE__ */
                                                g(Ry, {
                                                    size: 32,
                                                    className: "mb-4"
                                                }),
                                                /* @__PURE__ */
                                                g("h4", {
                                                    className: "text-xl font-bold mb-2",
                                                    children: "Don't Miss Out!"
                                                }),
                                                /* @__PURE__ */
                                                g("p", {
                                                    className: "mb-4 opacity-90",
                                                    children: "Subscribe and turn on notifications to stay updated with our latest product reviews and exclusive deals."
                                                }),
                                                /* @__PURE__ */
                                                g(
                                                    A.button, {
                                                        whileHover: {
                                                            scale: 1.02
                                                        },
                                                        whileTap: {
                                                            scale: 0.98
                                                        },
                                                        className: "bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors",
                                                        children: "Subscribe Now"
                                                    }
                                                )
                                            ]
                                        }
                                    )
                                ]
                            }
                        ),
                        /* @__PURE__ */
                        D(
                            A.div, {
                                initial: {
                                    opacity: 0,
                                    x: 50
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.4
                                },
                                className: "relative",
                                children: [
                                    /* @__PURE__ */
                                    D("div", {
                                        className: "relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group",
                                        children: [
                                            /* @__PURE__ */
                                            g(
                                                ui, {
                                                    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
                                                    alt: "Latest video thumbnail",
                                                    className: "w-full h-full object-cover opacity-80"
                                                }
                                            ),
                                            /* @__PURE__ */
                                            g(
                                                A.div, {
                                                    whileHover: {
                                                        scale: 1.1
                                                    },
                                                    className: "absolute inset-0 flex items-center justify-center cursor-pointer",
                                                    children: /* @__PURE__ */ g("div", {
                                                        className: "w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-red-700 transition-colors",
                                                        children: /* @__PURE__ */ g(Ky, {
                                                            size: 32,
                                                            fill: "white",
                                                            className: "text-white ml-1"
                                                        })
                                                    })
                                                }
                                            )
                                        ]
                                    }),
                                    /* @__PURE__ */
                                    D(
                                        A.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            viewport: {
                                                once: !0
                                            },
                                            transition: {
                                                duration: 0.6,
                                                delay: 0.6
                                            },
                                            className: "mt-6 bg-white rounded-xl p-6 shadow-lg",
                                            children: [
                                                /* @__PURE__ */
                                                g("h4", {
                                                    className: "font-bold text-lg text-gray-900 mb-2",
                                                    children: "Latest Review: Top 10 Tech Gadgets 2026"
                                                }),
                                                /* @__PURE__ */
                                                g("p", {
                                                    className: "text-gray-600 mb-3",
                                                    children: "Check out our latest video featuring the hottest tech products of the year!"
                                                }),
                                                /* @__PURE__ */
                                                D("div", {
                                                    className: "flex items-center gap-4 text-sm text-gray-600",
                                                    children: [
                                                        /* @__PURE__ */
                                                        g("span", {
                                                            children: "👁️ 45K views"
                                                        }),
                                                        /* @__PURE__ */
                                                        g("span", {
                                                            children: "👍 2.1K likes"
                                                        }),
                                                        /* @__PURE__ */
                                                        g("span", {
                                                            children: "💬 234 comments"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }
                                    )
                                ]
                            }
                        )
                    ]
                })
            ]
        })
    });
}

function m0() {
    return /* @__PURE__ */ D("div", {
        children: [
            /* @__PURE__ */
            g(l0, {}),
            /* @__PURE__ */
            g(d0, {}),
            /* @__PURE__ */
            g(f0, {})
        ]
    });
}

function p0({
    product: e,
    index: t
}) {
    const n = (r) => {
        const i = [],
            a = Math.floor(r),
            o = r % 1 !== 0;
        for (let l = 0; l < a; l++)
            i.push( /* @__PURE__ */ g(ss, {
                size: 16,
                fill: "currentColor",
                className: "text-yellow-400"
            }, l));
        o && i.push( /* @__PURE__ */ g(qy, {
            size: 16,
            fill: "currentColor",
            className: "text-yellow-400"
        }, "half"));
        const s = 5 - Math.ceil(r);
        for (let l = 0; l < s; l++)
            i.push( /* @__PURE__ */ g(ss, {
                size: 16,
                className: "text-gray-300"
            }, `empty-${l}`));
        return i;
    };
    return /* @__PURE__ */ D(
        A.div, {
            initial: {
                opacity: 0,
                y: 50
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: 0.5,
                delay: t * 0.1
            },
            whileHover: {
                y: -10
            },
            className: "bg-white rounded-2xl shadow-lg overflow-hidden group",
            children: [
                /* @__PURE__ */
                D("div", {
                    className: "relative h-64 overflow-hidden bg-gray-100",
                    children: [
                        e.badge && /* @__PURE__ */ g(
                            A.div, {
                                initial: {
                                    x: -100
                                },
                                animate: {
                                    x: 0
                                },
                                className: "absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg",
                                children: e.badge
                            }
                        ),
                        /* @__PURE__ */
                        g(
                            A.div, {
                                whileHover: {
                                    scale: 1.1
                                },
                                transition: {
                                    duration: 0.5
                                },
                                className: "w-full h-full",
                                children: /* @__PURE__ */ g(
                                    ui, {
                                        src: e.image,
                                        alt: e.name,
                                        className: "w-full h-full object-cover"
                                    }
                                )
                            }
                        )
                    ]
                }),
                /* @__PURE__ */
                D("div", {
                    className: "p-6",
                    children: [
                        /* @__PURE__ */
                        g("h3", {
                            className: "text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors",
                            children: e.name
                        }),
                        /* @__PURE__ */
                        g("p", {
                            className: "text-sm text-gray-600 mb-3 line-clamp-2",
                            children: e.description
                        }),
                        /* @__PURE__ */
                        D("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [
                                /* @__PURE__ */
                                g("div", {
                                    className: "flex gap-0.5",
                                    children: n(e.rating)
                                }),
                                /* @__PURE__ */
                                D("span", {
                                    className: "text-sm text-gray-600",
                                    children: [
                                        "(",
                                        e.reviews,
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        /* @__PURE__ */
                        D("div", {
                            className: "flex items-center gap-2 mb-4",
                            children: [
                                /* @__PURE__ */
                                g("span", {
                                    className: "text-2xl font-bold text-purple-600",
                                    children: e.price
                                }),
                                e.originalPrice && /* @__PURE__ */ g("span", {
                                    className: "text-lg text-gray-400 line-through",
                                    children: e.originalPrice
                                })
                            ]
                        }),
                        /* @__PURE__ */
                        D(
                            A.a, {
                                href: e.amazonLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: 0.98
                                },
                                className: "flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow",
                                children: [
                                    "View on Amazon",
                                    /* @__PURE__ */
                                    g(Ly, {
                                        size: 18
                                    })
                                ]
                            }
                        )
                    ]
                })
            ]
        }
    );
}
const g0 = {
    Laptop: Pc,
    ShoppingBag: dr,
    Home: ia,
    Sparkles: hr,
    Dumbbell: Tc
};

function y0() {
    const {
        categoryId: e
    } = Dd(), t = c0(e || ""), n = Sc.find((i) => i.id === e);
    if (!n)
        return /* @__PURE__ */ g("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /* @__PURE__ */ D("div", {
                className: "text-center",
                children: [
                    /* @__PURE__ */
                    g("h2", {
                        className: "text-3xl font-bold text-gray-900 mb-4",
                        children: "Category not found"
                    }),
                    /* @__PURE__ */
                    g(xe, {
                        to: "/",
                        className: "text-purple-600 hover:underline",
                        children: "Return to home"
                    })
                ]
            })
        });
    const r = g0[n.icon];
    return /* @__PURE__ */ D("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50",
        children: [
            /* @__PURE__ */
            g("div", {
                className: "bg-white shadow-sm",
                children: /* @__PURE__ */ D("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                    children: [
                        /* @__PURE__ */
                        g(xe, {
                            to: "/",
                            children: /* @__PURE__ */ D(
                                A.div, {
                                    whileHover: {
                                        x: -5
                                    },
                                    className: "flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 w-fit",
                                    children: [
                                        /* @__PURE__ */
                                        g(by, {
                                            size: 20
                                        }),
                                        /* @__PURE__ */
                                        g("span", {
                                            className: "font-semibold",
                                            children: "Back to Home"
                                        })
                                    ]
                                }
                            )
                        }),
                        /* @__PURE__ */
                        D("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /* @__PURE__ */
                                g(
                                    A.div, {
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: `w-20 h-20 bg-gradient-to-br ${n.color} rounded-2xl flex items-center justify-center shadow-xl`,
                                        children: /* @__PURE__ */ g(r, {
                                            size: 40,
                                            className: "text-white"
                                        })
                                    }
                                ),
                                /* @__PURE__ */
                                D("div", {
                                    children: [
                                        /* @__PURE__ */
                                        g(
                                            A.h1, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 0.2
                                                },
                                                className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2",
                                                children: n.name
                                            }
                                        ),
                                        /* @__PURE__ */
                                        D(
                                            A.p, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -20
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 0.3
                                                },
                                                className: "text-lg text-gray-600",
                                                children: [
                                                    t.length,
                                                    " amazing products to choose from"
                                                ]
                                            }
                                        )
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /* @__PURE__ */
            g("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                children: t.length > 0 ? /* @__PURE__ */ g("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: t.map((i, a) => /* @__PURE__ */ g(p0, {
                        product: i,
                        index: a
                    }, i.id))
                }) : /* @__PURE__ */ D(
                    A.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "text-center py-20",
                        children: [
                            /* @__PURE__ */
                            g("div", {
                                className: "text-6xl mb-4",
                                children: "🔍"
                            }),
                            /* @__PURE__ */
                            g("h3", {
                                className: "text-2xl font-bold text-gray-900 mb-2",
                                children: "No products found"
                            }),
                            /* @__PURE__ */
                            g("p", {
                                className: "text-gray-600",
                                children: "Check back soon for new additions!"
                            })
                        ]
                    }
                )
            }),
            /* @__PURE__ */
            g("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",
                children: /* @__PURE__ */ D(
                    A.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        className: "bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl",
                        children: [
                            /* @__PURE__ */
                            g("h3", {
                                className: "text-2xl md:text-3xl font-bold mb-4",
                                children: "Want to See These Products in Action?"
                            }),
                            /* @__PURE__ */
                            g("p", {
                                className: "text-lg mb-6 opacity-90",
                                children: "Watch our detailed reviews and unboxing videos on our YouTube channel!"
                            }),
                            /* @__PURE__ */
                            g(xe, {
                                to: "/#youtube",
                                children: /* @__PURE__ */ g(
                                    A.button, {
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        className: "bg-white text-purple-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow",
                                        children: "Visit YouTube Channel"
                                    }
                                )
                            })
                        ]
                    }
                )
            })
        ]
    });
}

function v0() {
    return /* @__PURE__ */ g("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50",
        children: /* @__PURE__ */ D("div", {
            className: "text-center px-4",
            children: [
                /* @__PURE__ */
                g(
                    A.div, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "text-9xl mb-4",
                        children: "404"
                    }
                ),
                /* @__PURE__ */
                g(
                    A.h1, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.2
                        },
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        children: "Page Not Found"
                    }
                ),
                /* @__PURE__ */
                g(
                    A.p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.3
                        },
                        className: "text-xl text-gray-600 mb-8",
                        children: "Oops! The page you're looking for doesn't exist."
                    }
                ),
                /* @__PURE__ */
                g(xe, {
                    to: "/",
                    children: /* @__PURE__ */ D(
                        A.button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            className: "flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow mx-auto",
                            children: [
                                /* @__PURE__ */
                                g(ia, {
                                    size: 20
                                }),
                                "Back to Home"
                            ]
                        }
                    )
                })
            ]
        })
    });
}
const w0 = Th([{
    path: "/",
    Component: s0,
    children: [{
            index: !0,
            Component: m0
        },
        {
            path: "category/:categoryId",
            Component: y0
        },
        {
            path: "*",
            Component: v0
        }
    ]
}]);

function x0() {
    return /* @__PURE__ */ g(Gd, {
        router: w0
    });
}
const b0 = /* @__PURE__ */ Object.freeze( /* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: x0
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    T0 as Code0_8
};