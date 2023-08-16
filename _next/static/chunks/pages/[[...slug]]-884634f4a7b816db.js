(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [120], {
        8e3: function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AmpStateContext = void 0;
            const a = ((r = n(7294)) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = a
        },
        5646: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isInAmpMode = i, t.useAmp = function() {
                return i(a.default.useContext(o.AmpStateContext))
            };
            var r, a = (r = n(7294)) && r.__esModule ? r : {
                    default: r
                },
                o = n(8e3);

            function i({
                ampFirst: e = !1,
                hybrid: t = !1,
                hasQuery: n = !1
            } = {}) {
                return e || t && n
            }
        },
        2717: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultHead = d, t.default = void 0;
            var r, a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                                r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                            }
                    return t.default = e, t
                }(n(7294)),
                o = (r = n(1585)) && r.__esModule ? r : {
                    default: r
                },
                i = n(8e3),
                s = n(5850),
                c = n(5646);

            function d(e = !1) {
                const t = [a.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push(a.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function l(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce(((e, t) => "string" === typeof t || "number" === typeof t ? e : e.concat(t)), [])) : e.concat(t)
            }
            const p = ["name", "httpEquiv", "charSet", "itemProp"];

            function u(e, t) {
                return e.reduce(((e, t) => {
                    const n = a.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(l, []).reverse().concat(d(t.inAmpMode)).filter(function() {
                    const e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return a => {
                        let o = !0,
                            i = !1;
                        if (a.key && "number" !== typeof a.key && a.key.indexOf("$") > 0) {
                            i = !0;
                            const t = a.key.slice(a.key.indexOf("$") + 1);
                            e.has(t) ? o = !1 : e.add(t)
                        }
                        switch (a.type) {
                            case "title":
                            case "base":
                                t.has(a.type) ? o = !1 : t.add(a.type);
                                break;
                            case "meta":
                                for (let e = 0, t = p.length; e < t; e++) {
                                    const t = p[e];
                                    if (a.props.hasOwnProperty(t))
                                        if ("charSet" === t) n.has(t) ? o = !1 : n.add(t);
                                        else {
                                            const e = a.props[t],
                                                n = r[t] || new Set;
                                            "name" === t && i || !n.has(e) ? (n.add(e), r[t] = n) : o = !1
                                        }
                                }
                        }
                        return o
                    }
                }()).reverse().map(((e, n) => {
                    const r = e.key || n;
                    if (!t.inAmpMode && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((t => e.props.href.startsWith(t)))) {
                        const t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, a.default.cloneElement(e, t)
                    }
                    return a.default.cloneElement(e, {
                        key: r
                    })
                }))
            }
            var m = function({
                children: e
            }) {
                const t = a.useContext(i.AmpStateContext),
                    n = a.useContext(s.HeadManagerContext);
                return a.default.createElement(o.default, {
                    reduceComponentsToState: u,
                    headManager: n,
                    inAmpMode: c.isInAmpMode(t)
                }, e)
            };
            t.default = m
        },
        1585: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e, t
            }(n(7294));
            class a extends r.Component {
                constructor(e) {
                    super(e), this.emitChange = () => {
                        this._hasHeadManager && this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances], this.props))
                    }, this._hasHeadManager = this.props.headManager && this.props.headManager.mountedInstances
                }
                componentDidMount() {
                    this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                }
                componentDidUpdate() {
                    this.emitChange()
                }
                componentWillUnmount() {
                    this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                }
                render() {
                    return null
                }
            }
            t.default = a
        },
        1726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return l
                }
            });
            var r = n(9756),
                a = n(7294),
                o = n(4055),
                i = n(1060),
                s = n(4584),
                c = n(2132),
                d = n(9008);
            var l = !0;
            t.default = (0, r.$j)(null)((function(e) {
                const t = (0, r.I0)(),
                    {
                        hasError: n,
                        fonts: l = [],
                        pageMeta: p = {},
                        projectMeta: u = {},
                        name: m
                    } = e,
                    f = {
                        google: {
                            families: l.length > 0 ? ["Nunito Sans", ...l] : ["Nunito Sans"]
                        },
                        timeout: 5e3
                    };
                (0, a.useEffect)((() => (h(), window.addEventListener("resize", h), () => {
                    window.removeEventListener("resize", h)
                })), []);
                const h = () => {
                    let e, n = window.innerWidth;
                    n >= 1200 ? e = "xl" : n >= 992 ? e = "lg" : n >= 768 ? e = "md" : n >= 576 ? e = "sm" : n >= 479 ? e = "xs" : n < 479 && (e = "xxs"), t(o.uiActions.setView(e, n))
                };
                let g = {
                        name: p.name || "",
                        title: p.title || "",
                        description: p.description || "",
                        favIcon: p.favIcon || "",
                        headExtras: p.headExtras || ""
                    },
                    y = {
                        title: u.metaTitle || "",
                        description: u.metaDescription || "",
                        favIcon: u.favIcon || "",
                        headExtras: u.headExtras,
                        googleMetaImage: u.googleMetaImage || ""
                    },
                    v = g.name || y.name || "",
                    w = g.title || y.title || "",
                    E = g.description || y.description || "",
                    _ = y.googleMetaImage || "";
                const M = e => e.charAt(0).toUpperCase() + e.slice(1);
                let k;
                return k = w || `${M(m)} | ${M(v)}`, a.createElement("div", null, a.createElement(d.default, null, a.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, maximum-scale=1"
                }), a.createElement("meta", {
                    name: "version",
                    content: "0.9.153",
                    key: "cd-meta-version"
                }), a.createElement("meta", {
                    charSet: "utf-8",
                    key: "cd-meta-charSet"
                }), a.createElement("title", {
                    key: "cd-page-title"
                }, " ", k, " "), k && a.createElement("meta", {
                    property: "og:title",
                    content: k,
                    key: "cd-page-ogtitle"
                }), k && a.createElement("meta", {
                    property: "twitter:title",
                    content: k,
                    key: "cd-page-twittertitle"
                }), E && a.createElement("meta", {
                    name: "description",
                    content: E,
                    key: "cd-page-metadesc"
                }), E && a.createElement("meta", {
                    property: "og:description",
                    content: E,
                    key: "cd-page-ogdesc"
                }), E && a.createElement("meta", {
                    property: "twitter:description",
                    content: E,
                    key: "cd-page-twitterdesc"
                }), _ && a.createElement("meta", {
                    property: "og:image",
                    content: _,
                    key: "cd-page-ogimage"
                }), _ && a.createElement("meta", {
                    property: "twitter:image",
                    content: _,
                    key: "cd-page-twitterimage"
                }), a.createElement("link", {
                    rel: "stylesheet",
                    href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                })), a.createElement(s.default, {
                    config: f
                }, a.createElement(i.default, {
                    hasError: n,
                    origin: "CLIENT"
                }), a.createElement(c.Ix, null)))
            }))
        },
        7708: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[[...slug]]", function() {
                return n(1726)
            }])
        },
        9008: function(e, t, n) {
            e.exports = n(2717)
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], (function() {
            return t = 7708, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);