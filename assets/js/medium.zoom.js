(parcelRequire = (function (e, t, o, n) {
    var r = "function" == typeof parcelRequire && parcelRequire,
        i = "function" == typeof require && require;
    function d(o, n) {
        if (!t[o]) {
            if (!e[o]) {
                var a = "function" == typeof parcelRequire && parcelRequire;
                if (!n && a) return a(o, !0);
                if (r) return r(o, !0);
                if (i && "string" == typeof o) return i(o);
                var c = new Error("Cannot find module '" + o + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
            }
            (l.resolve = function (t) {
                return e[o][1][t] || t;
            }),
                (l.cache = {});
            var u = (t[o] = new d.Module(o));
            e[o][0].call(u.exports, l, u, u.exports, this);
        }
        return t[o].exports;
        function l(e) {
            return d(l.resolve(e));
        }
    }
    (d.isParcelRequire = !0),
        (d.Module = function (e) {
            (this.id = e), (this.bundle = d), (this.exports = {});
        }),
        (d.modules = e),
        (d.cache = t),
        (d.parent = r),
        (d.register = function (t, o) {
            e[t] = [
                function (e, t) {
                    t.exports = o;
                },
                {},
            ];
        });
    for (var a = 0; a < o.length; a++) d(o[a]);
    if (o.length) {
        var c = d(o[o.length - 1]);
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = c)
            : "function" == typeof define &&
              define.amd &&
              define(function () {
                  return c;
              });
    }
    return d;
})(
    {
        UWhY: [
            function (e, t, o) {
                [].slice.call(document.querySelectorAll("p.placeholder")).forEach(function (e) {
                    e.innerHTML = e.textContent
                        .split(" ")
                        .filter(function (e) {
                            return e.length > 4;
                        })
                        .map(function (e) {
                            return '<span class="placeholder__word">'.concat(e, "</span>");
                        })
                        .join(" ");
                });
            },
            {},
        ],
    },
    {},
    ["UWhY"]
)),
    (parcelRequire = (function (e, t, o, n) {
        var r = "function" == typeof parcelRequire && parcelRequire,
            i = "function" == typeof require && require;
        function d(o, n) {
            if (!t[o]) {
                if (!e[o]) {
                    var a = "function" == typeof parcelRequire && parcelRequire;
                    if (!n && a) return a(o, !0);
                    if (r) return r(o, !0);
                    if (i && "string" == typeof o) return i(o);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw ((c.code = "MODULE_NOT_FOUND"), c);
                }
                (l.resolve = function (t) {
                    return e[o][1][t] || t;
                }),
                    (l.cache = {});
                var u = (t[o] = new d.Module(o));
                e[o][0].call(u.exports, l, u, u.exports, this);
            }
            return t[o].exports;
            function l(e) {
                return d(l.resolve(e));
            }
        }
        (d.isParcelRequire = !0),
            (d.Module = function (e) {
                (this.id = e), (this.bundle = d), (this.exports = {});
            }),
            (d.modules = e),
            (d.cache = t),
            (d.parent = r),
            (d.register = function (t, o) {
                e[t] = [
                    function (e, t) {
                        t.exports = o;
                    },
                    {},
                ];
            });
        for (var a = 0; a < o.length; a++) d(o[a]);
        if (o.length) {
            var c = d(o[o.length - 1]);
            "object" == typeof exports && "undefined" != typeof module
                ? (module.exports = c)
                : "function" == typeof define &&
                  define.amd &&
                  define(function () {
                      return c;
                  });
        }
        return d;
    })(
        {
            TvQq: [
                function (e, t, o) {
                    "use strict";
                    Object.defineProperty(o, "__esModule", { value: !0 }), (o.default = void 0);
                    var n =
                            Object.assign ||
                            function (e) {
                                for (var t, o = 1; o < arguments.length; o++) for (var n in (t = arguments[o])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                return e;
                            },
                        r = function (e) {
                            return "IMG" === e.tagName;
                        },
                        i = function (e) {
                            return e && 1 === e.nodeType;
                        },
                        d = function (e) {
                            return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
                        },
                        a = function (e) {
                            try {
                                return Array.isArray(e)
                                    ? e.filter(r)
                                    : (function (e) {
                                          return NodeList.prototype.isPrototypeOf(e);
                                      })(e)
                                    ? [].slice.call(e).filter(r)
                                    : i(e)
                                    ? [e].filter(r)
                                    : "string" == typeof e
                                    ? [].slice.call(document.querySelectorAll(e)).filter(r)
                                    : [];
                            } catch (e) {
                                throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
                            }
                        },
                        c = function (e, t) {
                            var o = n({ bubbles: !1, cancelable: !1, detail: void 0 }, t);
                            if ("function" == typeof window.CustomEvent) return new CustomEvent(e, o);
                            var r = document.createEvent("CustomEvent");
                            return r.initCustomEvent(e, o.bubbles, o.cancelable, o.detail), r;
                        },
                        u =
                            window.Promise ||
                            function (e) {
                                function t() {}
                                e(t, t);
                            };
                    !(function (e, t) {
                        void 0 === t && (t = {});
                        var o = t.insertAt;
                        if (e && "undefined" != typeof document) {
                            var n = document.head || document.getElementsByTagName("head")[0],
                                r = document.createElement("style");
                            (r.type = "text/css"), "top" === o && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
                        }
                    })(
                        ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"
                    );
                    var l = function e(t) {
                        var o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            r = function () {
                                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                                var n = t.reduce(function (e, t) {
                                    return [].concat(e, a(t));
                                }, []);
                                return (
                                    n
                                        .filter(function (e) {
                                            return -1 === f.indexOf(e);
                                        })
                                        .forEach(function (e) {
                                            f.push(e), e.classList.add("medium-zoom-image");
                                        }),
                                    p.forEach(function (e) {
                                        var t = e.type,
                                            o = e.listener,
                                            r = e.options;
                                        n.forEach(function (e) {
                                            e.addEventListener(t, o, r);
                                        });
                                    }),
                                    b
                                );
                            },
                            l = function () {
                                var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).target,
                                    t = function () {
                                        var e = Math.min,
                                            t = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight, left: 0, top: 0, right: 0, bottom: 0 },
                                            o = void 0,
                                            r = void 0;
                                        if (v.container)
                                            if (v.container instanceof Object) (o = (t = n({}, t, v.container)).width - t.left - t.right - 2 * v.margin), (r = t.height - t.top - t.bottom - 2 * v.margin);
                                            else {
                                                var a = (i(v.container) ? v.container : document.querySelector(v.container)).getBoundingClientRect(),
                                                    c = a.width,
                                                    u = a.height,
                                                    l = a.left,
                                                    m = a.top;
                                                t = n({}, t, { width: c, height: u, left: l, top: m });
                                            }
                                        (o = o || t.width - 2 * v.margin), (r = r || t.height - 2 * v.margin);
                                        var s = z.zoomedHd || z.original,
                                            f = d(s) ? o : s.naturalWidth || o,
                                            p = d(s) ? r : s.naturalHeight || r,
                                            g = s.getBoundingClientRect(),
                                            h = g.top,
                                            y = g.left,
                                            b = g.width,
                                            E = g.height,
                                            w = e(f, o) / b,
                                            L = e(p, r) / E,
                                            H = e(w, L),
                                            x = "scale(" + H + ") translate3d(" + ((o - b) / 2 - y + v.margin + t.left) / H + "px, " + ((r - E) / 2 - h + v.margin + t.top) / H + "px, 0)";
                                        (z.zoomed.style.transform = x), z.zoomedHd && (z.zoomedHd.style.transform = x);
                                    };
                                return new u(function (o) {
                                    if (e && -1 === f.indexOf(e)) o(b);
                                    else if (z.zoomed) o(b);
                                    else {
                                        if (e) z.original = e;
                                        else {
                                            if (!(0 < f.length)) return void o(b);
                                            var n = f;
                                            z.original = n[0];
                                        }
                                        if (
                                            (z.original.dispatchEvent(c("medium-zoom:open", { detail: { zoom: b } })),
                                            (h = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
                                            (g = !0),
                                            (z.zoomed = (function (e) {
                                                var t = e.getBoundingClientRect(),
                                                    o = t.top,
                                                    n = t.left,
                                                    r = t.width,
                                                    i = t.height,
                                                    d = e.cloneNode(),
                                                    a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                                                    c = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
                                                return (
                                                    d.removeAttribute("id"),
                                                    (d.style.position = "absolute"),
                                                    (d.style.top = o + a + "px"),
                                                    (d.style.left = n + c + "px"),
                                                    (d.style.width = r + "px"),
                                                    (d.style.height = i + "px"),
                                                    (d.style.transform = ""),
                                                    d
                                                );
                                            })(z.original)),
                                            document.body.appendChild(y),
                                            v.template)
                                        ) {
                                            var r = i(v.template) ? v.template : document.querySelector(v.template);
                                            (z.template = document.createElement("div")), z.template.appendChild(r.content.cloneNode(!0)), document.body.appendChild(z.template);
                                        }
                                        if (
                                            (document.body.appendChild(z.zoomed),
                                            window.requestAnimationFrame(function () {
                                                document.body.classList.add("medium-zoom--opened");
                                            }),
                                            z.original.classList.add("medium-zoom-image--hidden"),
                                            z.zoomed.classList.add("medium-zoom-image--opened"),
                                            z.zoomed.addEventListener("click", m),
                                            z.zoomed.addEventListener("transitionend", function e() {
                                                (g = !1), z.zoomed.removeEventListener("transitionend", e), z.original.dispatchEvent(c("medium-zoom:opened", { detail: { zoom: b } })), o(b);
                                            }),
                                            z.original.getAttribute("data-zoom-src"))
                                        ) {
                                            (z.zoomedHd = z.zoomed.cloneNode()),
                                                z.zoomedHd.removeAttribute("srcset"),
                                                z.zoomedHd.removeAttribute("sizes"),
                                                (z.zoomedHd.src = z.zoomed.getAttribute("data-zoom-src")),
                                                (z.zoomedHd.onerror = function () {
                                                    clearInterval(d), console.warn("Unable to reach the zoom image target " + z.zoomedHd.src), (z.zoomedHd = null), t();
                                                });
                                            var d = setInterval(function () {
                                                z.zoomedHd.complete && (clearInterval(d), z.zoomedHd.classList.add("medium-zoom-image--opened"), z.zoomedHd.addEventListener("click", m), document.body.appendChild(z.zoomedHd), t());
                                            }, 10);
                                        } else if (z.original.hasAttribute("srcset")) {
                                            (z.zoomedHd = z.zoomed.cloneNode()), z.zoomedHd.removeAttribute("sizes");
                                            var a = z.zoomedHd.addEventListener("load", function () {
                                                z.zoomedHd.removeEventListener("load", a), z.zoomedHd.classList.add("medium-zoom-image--opened"), z.zoomedHd.addEventListener("click", m), document.body.appendChild(z.zoomedHd), t();
                                            });
                                        } else t();
                                    }
                                });
                            },
                            m = function () {
                                return new u(function (e) {
                                    !g && z.original
                                        ? ((g = !0),
                                          document.body.classList.remove("medium-zoom--opened"),
                                          (z.zoomed.style.transform = ""),
                                          z.zoomedHd && (z.zoomedHd.style.transform = ""),
                                          z.template && ((z.template.style.transition = "opacity 150ms"), (z.template.style.opacity = 0)),
                                          z.original.dispatchEvent(c("medium-zoom:close", { detail: { zoom: b } })),
                                          z.zoomed.addEventListener("transitionend", function t() {
                                              z.original.classList.remove("medium-zoom-image--hidden"),
                                                  document.body.removeChild(z.zoomed),
                                                  z.zoomedHd && document.body.removeChild(z.zoomedHd),
                                                  document.body.removeChild(y),
                                                  z.zoomed.classList.remove("medium-zoom-image--opened"),
                                                  z.template && document.body.removeChild(z.template),
                                                  (g = !1),
                                                  z.zoomed.removeEventListener("transitionend", t),
                                                  z.original.dispatchEvent(c("medium-zoom:closed", { detail: { zoom: b } })),
                                                  (z.original = null),
                                                  (z.zoomed = null),
                                                  (z.zoomedHd = null),
                                                  (z.template = null),
                                                  e(b);
                                          }))
                                        : e(b);
                                });
                            },
                            s = function () {
                                var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).target;
                                return z.original ? m() : l({ target: e });
                            },
                            f = [],
                            p = [],
                            g = !1,
                            h = 0,
                            v = o,
                            z = { original: null, zoomed: null, zoomedHd: null, template: null };
                        "[object Object]" === Object.prototype.toString.call(t) ? (v = t) : (t || "string" == typeof t) && r(t);
                        var y = (function (e) {
                            var t = document.createElement("div");
                            return t.classList.add("medium-zoom-overlay"), (t.style.background = e), t;
                        })((v = n({ margin: 0, background: "#fff", scrollOffset: 40, container: null, template: null }, v)).background);
                        document.addEventListener("click", function (e) {
                            var t = e.target;
                            return t === y ? void m() : void (-1 === f.indexOf(t) || s({ target: t }));
                        }),
                            document.addEventListener("keyup", function (e) {
                                27 === (e.keyCode || e.which) && m();
                            }),
                            document.addEventListener("scroll", function () {
                                if (!g && z.original) {
                                    var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                                    Math.abs(h - e) > v.scrollOffset && setTimeout(m, 150);
                                }
                            }),
                            window.addEventListener("resize", m);
                        var b = {
                            open: l,
                            close: m,
                            toggle: s,
                            update: function () {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e;
                                if ((e.background && (y.style.background = e.background), e.container && e.container instanceof Object && (t.container = n({}, v.container, e.container)), e.template)) {
                                    var o = i(e.template) ? e.template : document.querySelector(e.template);
                                    t.template = o;
                                }
                                return (
                                    (v = n({}, v, t)),
                                    f.forEach(function (e) {
                                        e.dispatchEvent(c("medium-zoom:update", { detail: { zoom: b } }));
                                    }),
                                    b
                                );
                            },
                            clone: function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                return e(n({}, v, t));
                            },
                            attach: r,
                            detach: function () {
                                for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                                z.zoomed && m();
                                var n =
                                    0 < t.length
                                        ? t.reduce(function (e, t) {
                                              return [].concat(e, a(t));
                                          }, [])
                                        : f;
                                return (
                                    n.forEach(function (e) {
                                        e.classList.remove("medium-zoom-image"), e.dispatchEvent(c("medium-zoom:detach", { detail: { zoom: b } }));
                                    }),
                                    (f = f.filter(function (e) {
                                        return -1 === n.indexOf(e);
                                    })),
                                    b
                                );
                            },
                            on: function (e, t) {
                                var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                                return (
                                    f.forEach(function (n) {
                                        n.addEventListener("medium-zoom:" + e, t, o);
                                    }),
                                    p.push({ type: "medium-zoom:" + e, listener: t, options: o }),
                                    b
                                );
                            },
                            off: function (e, t) {
                                var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                                return (
                                    f.forEach(function (n) {
                                        n.removeEventListener("medium-zoom:" + e, t, o);
                                    }),
                                    (p = p.filter(function (o) {
                                        return o.type !== "medium-zoom:" + e || o.listener.toString() !== t.toString();
                                    })),
                                    b
                                );
                            },
                            getOptions: function () {
                                return v;
                            },
                            getImages: function () {
                                return f;
                            },
                            getZoomedImage: function () {
                                return z.original;
                            },
                        };
                        return b;
                    };
                    o.default = l;
                },
                {},
            ],
            H99C: [
                function (e, t, o) {
                    "use strict";
                    var n = (function (e) {
                        return e && e.__esModule ? e : { default: e };
                    })(e("medium-zoom"));
                    var r = (0, n.default)(".article-post img"),
                        i = (0, n.default)("#zoom-margin", { margin: 48 }),
                        d = (0, n.default)("#zoom-background", { background: "#212530" }),
                        a = (0, n.default)("#zoom-scrollOffset", { scrollOffset: 0, background: "rgba(25, 18, 25, .9)" }),
                        c = (0, n.default)("#zoom-trigger"),
                        u = (document.querySelector("#button-trigger"), (0, n.default)("#zoom-detach"));
                    u.on("closed", function () {
                        return u.detach();
                    });
                    var l = [r, i, d, a, c, u],
                        m = document.querySelector("#history");
                    l.forEach(function (e) {
                        e.on("open", function (e) {
                            new Date().toLocaleTimeString();
                        }),
                            e.on("detach", function (e) {
                                var t = new Date().toLocaleTimeString();
                                m.innerHTML += '<li>Image <em>"'.concat(e.target.alt, '"</em> was detached at ').concat(t, "</li>");
                            });
                    });
                },
                { "medium-zoom": "TvQq" },
            ],
        },
        {},
        ["H99C"]
    ));
