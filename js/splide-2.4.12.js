/*!
 * Splide.js
 * Version  : 2.4.12
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */
! function(e) {
    var i = {};

    function o(t) {
        if (i[t]) return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = e, o.c = i, o.d = function(t, n, e) {
        o.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: e
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "_esModule", {
            value: !0
        })
    }, o.t = function(n, t) {
        if (1 & t && (n = o(n)), 8 & t) return n;
        if (4 & t && "object" == typeof n && n && n._esModule) return n;
        var e = Object.create(null);
        if (o.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: n
            }), 2 & t && "string" != typeof n)
            for (var i in n) o.d(e, i, function(t) {
                return n[t]
            }.bind(null, i));
        return e
    }, o.n = function(t) {
        var n = t && t._esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(n, "a", n), n
    }, o.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, o.p = "", o(o.s = 0)
}([function(t, n, e) {
    "use strict";
    e.r(n), e.d(n, "cm", function() {
        return At
    });
    var s = {};
    e.r(s), e.d(s, "CREATED", function() {
        return G
    }), e.d(s, "MOUNTED", function() {
        return X
    }), e.d(s, "IDLE", function() {
        return V
    }), e.d(s, "MOVING", function() {
        return U
    }), e.d(s, "DESTROYED", function() {
        return Y
    });

    function i() {
        return (i = Object.assign || function(t) {
            for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n];
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }
            return t
        }).apply(this, arguments)
    }
    var b = Object.keys;

    function m(e, i) {
        b(e).some(function(t, n) {
            return i(e[t], t, n)
        })
    }

    function g(n) {
        return b(n).map(function(t) {
            return n[t]
        })
    }

    function o(t) {
        return "object" == typeof t
    }

    function u(t, n) {
        var e = i({}, t);
        return m(n, function(t, n) {
            o(t) ? (o(e[n]) || (e[n] = {}), e[n] = u(e[n], t)) : e[n] = t
        }), e
    }

    function r(t) {
        return Array.isArray(t) ? t : [t]
    }

    function y(t, n, e) {
        return Math.min(Math.max(t, e < n ? e : n), e < n ? n : e)
    }

    function h(t, n) {
        var e = 0;
        return t.replace(/%s/g, function() {
            return r(n)[e++]
        })
    }

    function w(t) {
        var n = typeof t;
        return "number" == n && 0 < t ? parseFloat(t) + "px" : "string" == n ? t : ""
    }

    function v(t) {
        return t < 10 ? "0" + t : t
    }

    function x(t, n) {
        var e;
        return "string" == typeof n && (P(e = f("div", {}), {
            position: "absolute",
            width: n
        }), k(t, e), n = e.clientWidth, E(e)), +n || 0
    }

    function c(t, n) {
        return t ? t.querySelector(n.split(" ")[0]) : null
    }

    function _(t, n) {
        return d(t, n)[0]
    }

    function d(t, n) {
        return t ? g(t.children).filter(function(t) {
            return z(t, n.split(" ")[0]) || t.tagName === n
        }) : []
    }

    function f(t, n) {
        var e = document.createElement(t);
        return m(n, function(t, n) {
            return M(e, n, t)
        }), e
    }

    function l(t) {
        var n = f("div", {});
        return n.innerHTML = t, n.firstChild
    }

    function E(t) {
        r(t).forEach(function(t) {
            var n;
            !t || (n = t.parentElement) && n.removeChild(t)
        })
    }

    function k(t, n) {
        t && t.appendChild(n)
    }

    function S(t, n) {
        var e;
        t && n && ((e = n.parentElement) && e.insertBefore(t, n))
    }

    function P(e, t) {
        e && m(t, function(t, n) {
            null !== t && (e.style[n] = t)
        })
    }

    function a(n, t, e) {
        n && r(t).forEach(function(t) {
            t && n.classList[e ? "remove" : "add"](t)
        })
    }

    function C(t, n) {
        a(t, n, !1)
    }

    function I(t, n) {
        a(t, n, !0)
    }

    function z(t, n) {
        return !!t && t.classList.contains(n)
    }

    function M(t, n, e) {
        t && t.setAttribute(n, e)
    }

    function O(t, n) {
        return t ? t.getAttribute(n) : ""
    }

    function A(t, n) {
        r(n).forEach(function(n) {
            r(t).forEach(function(t) {
                return t && t.removeAttribute(n)
            })
        })
    }

    function T(t) {
        return t.getBoundingClientRect()
    }

    function p(u, c) {
        var d, l;
        return {
            mount: function() {
                d = c.Elements.list, u.on("transitionend", function(t) {
                    t.target === d && l && l()
                }, d)
            },
            start: function(t, n, e, i, o) {
                var r = u.options,
                    s = c.Controller.edgeIndex,
                    a = r.speed;
                l = o, u.is(j) && (0 === e && s <= n || s <= e && 0 === n) && (a = r.rewindSpeed || a), P(d, {
                    transition: "transform " + a + "ms " + r.easing,
                    transform: "translate(" + i.x + "px," + i.y + "px)"
                })
            }
        }
    }

    function L(e, s) {
        function a(t) {
            var n = e.options;
            P(s.Elements.slides[t], {
                transition: "opacity " + n.speed + "ms " + n.easing
            })
        }
        return {
            mount: function() {
                a(e.index)
            },
            start: function(t, n, e, i, o) {
                var r = s.Elements.track;
                P(r, {
                    height: w(r.clientHeight)
                }), a(n), o(), P(r, {
                    height: ""
                })
            }
        }
    }
    var j = "slide",
        W = "loop",
        H = "fade";
    var q = "[cm]";

    function D(t) {
        console.error(q + " " + t)
    }

    function N(t, n) {
        if (!t) throw new Error(n)
    }
    var R = "cm",
        B = {
            active: "is-active",
            visible: "is-visible",
            loading: "is-loading"
        },
        F = {
            type: "slide",
            rewind: !1,
            speed: 400,
            rewindSpeed: 0,
            waitForTransition: !0,
            width: 0,
            height: 0,
            fixedWidth: 0,
            fixedHeight: 0,
            heightRatio: 0,
            autoWidth: !1,
            autoHeight: !1,
            perPage: 1,
            perMove: 0,
            clones: 0,
            start: 0,
            focus: !1,
            gap: 0,
            padding: 0,
            arrows: !0,
            arrowPath: "",
            pagination: !0,
            autoplay: !1,
            interval: 5e3,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            resetProgress: !0,
            lazyLoad: !1,
            preloadPages: 1,
            easing: "cubic-bezier(.42,.65,.27,.99)",
            keyboard: "global",
            drag: !0,
            dragAngleThreshold: 30,
            swipeDistanceThreshold: 150,
            flickVelocityThreshold: .6,
            flickPower: 600,
            flickMaxPages: 1,
            direction: "ltr",
            cover: !1,
            accessibility: !0,
            slideFocus: !0,
            isNavigation: !1,
            trimSpace: !0,
            updateOnMove: !1,
            throttle: 100,
            destroy: !1,
            breakpoints: !1,
            classes: {
                root: R,
                slider: R + "_slider",
                track: R + "_track",
                list: R + "_list",
                slide: R + "_slide",
                container: R + "_slide_container",
                arrows: R + "_arrows",
                arrow: R + "_arrow",
                prev: R + "_arrow_prev",
                next: R + "_arrow_next",
                pagination: R + "_pagination",
                page: R + "_pagination_page",
                clone: R + "_slide_clone",
                progress: R + "_progress",
                bar: R + "_progress_bar",
                autoplay: R + "_autoplay",
                play: R + "_play",
                pause: R + "_pause",
                spinner: R + "_spinner",
                sr: R + "_sr"
            },
            i18n: {
                prev: "Previous slide",
                next: "Next slide",
                first: "Go to first slide",
                last: "Go to last slide",
                slideX: "Go to slide %s",
                pageX: "Go to page %s",
                play: "Start autoplay",
                pause: "Pause autoplay"
            }
        },
        G = 1,
        X = 2,
        V = 3,
        U = 4,
        Y = 5;

    function J(t, n) {
        for (var e = 0; e < n.length; e++) {
            var i = n[e];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function K(t) {
        var n = O(t.root, "data-cm");
        if (n) try {
            t.options = JSON.parse(n)
        } catch (t) {
            D(t.message)
        }
        return {
            mount: function() {
                t.State.is(G) && (t.index = t.options.start)
            }
        }
    }

    function Q(h, o) {
        var t, i = h.root,
            r = h.classes,
            p = [];
        i.id || (window.splide = window.splide || {}, t = window.splide.uid || 0, window.splide.uid = ++t, i.id = "splide" + v(t));
        var s = {
            mount: function() {
                var t = this;
                this.init(), h.on("refresh", function() {
                    t.destroy(), t.init()
                }).on("updated", function() {
                    I(i, n()), C(i, n())
                })
            },
            destroy: function() {
                p.forEach(function(t) {
                    t.destroy()
                }), p = [], I(i, n())
            },
            init: function() {
                var e = this;
                ! function() {
                    s.slider = _(i, r.slider), s.track = c(i, "." + r.track), s.list = _(s.track, r.list), N(s.track && s.list, "Track or list was not found."), s.slides = d(s.list, r.slide);
                    var t = a(r.arrows);
                    s.arrows = {
                        prev: c(t, "." + r.prev),
                        next: c(t, "." + r.next)
                    };
                    var n = a(r.autoplay);
                    s.bar = c(a(r.progress), "." + r.bar), s.play = c(n, "." + r.play), s.pause = c(n, "." + r.pause), s.track.id = s.track.id || i.id + "-track", s.list.id = s.list.id || i.id + "-list"
                }(), C(i, n()), this.slides.forEach(function(t, n) {
                    e.register(t, n, -1)
                })
            },
            register: function(t, n, e) {
                var o, i, r, s, a, u, c, d = (i = n, r = e, s = t, a = (o = h).options.updateOnMove, u = "ready.slide updated.slide resize.slide moved.slide" + (a ? " move.slide" : ""), c = {
                    slide: s,
                    index: i,
                    realIndex: r,
                    container: _(s, o.classes.container),
                    isClone: -1 < r,
                    mount: function() {
                        var t = this;
                        this.isClone || (s.id = o.root.id + "-slide" + v(i + 1)), o.on(u, function() {
                            return t.update()
                        }).on(ot, f).on("click", function() {
                            return o.emit("click", t)
                        }, s), a && o.on("move.slide", function(t) {
                            t === r && l(!0, !1)
                        }), P(s, {
                            display: ""
                        }), this.styles = O(s, "style") || ""
                    },
                    destroy: function() {
                        o.off(u).off(ot).off("click", s), I(s, g(B)), f(), A(this.container, "style")
                    },
                    update: function() {
                        l(this.isActive(), !1), l(this.isVisible(), !0)
                    },
                    isActive: function() {
                        return o.index === i
                    },
                    isVisible: function() {
                        var t = this.isActive();
                        if (o.is(H) || t) return t;
                        var n = T(o.Components.Elements.track),
                            e = T(s);
                        return o.options.direction === it ? n.top <= e.top && e.bottom <= n.bottom : n.left <= e.left && e.right <= n.right
                    },
                    isWithin: function(t, n) {
                        var e = Math.abs(t - i);
                        return o.is(j) || this.isClone || (e = Math.min(e, o.length - e)), e < n
                    }
                });

                function l(t, n) {
                    var e = n ? "visible" : "active",
                        i = B[e];
                    t ? (C(s, i), o.emit(e, c)) : z(s, i) && (I(s, i), o.emit(n ? "hidden" : "inactive", c))
                }

                function f() {
                    M(s, "style", c.styles)
                }
                d.mount(), p.push(d)
            },
            getSlide: function(n) {
                return p.filter(function(t) {
                    return t.index === n
                })[0]
            },
            getSlides: function(t) {
                return t ? p : p.filter(function(t) {
                    return !t.isClone
                })
            },
            getSlidesByPage: function(t) {
                var e = o.Controller.toIndex(t),
                    n = h.options,
                    i = !1 !== n.focus ? 1 : n.perPage;
                return p.filter(function(t) {
                    var n = t.index;
                    return e <= n && n < e + i
                })
            },
            add: function(t, n, e) {
                var i, o, r, s, a;
                "string" == typeof t && (t = l(t)), t instanceof Element && (i = this.slides[n], P(t, {
                    display: "none"
                }), i ? (S(t, i), this.slides.splice(n, 0, t)) : (k(this.list, t), this.slides.push(t)), o = function() {
                    e && e(t)
                }, s = t.querySelectorAll("img"), (a = s.length) ? (r = 0, m(s, function(t) {
                    t.onload = t.onerror = function() {
                        ++r === a && o()
                    }
                })) : o())
            },
            remove: function(t) {
                E(this.slides.splice(t, 1)[0])
            },
            each: function(t) {
                p.forEach(t)
            },
            get length() {
                return this.slides.length
            },
            get total() {
                return p.length
            }
        };

        function n() {
            var t = r.root,
                n = h.options;
            return [t + "_" + n.type, t + "_" + n.direction, n.drag ? t + "_draggable" : "", n.isNavigation ? t + "_nav" : "", B.active]
        }

        function a(t) {
            return _(i, t) || _(s.slider, t)
        }
        return s
    }

    function Z(r, i) {
        var s, e, a = {
            mount: function() {
                s = r.options, e = r.is(W), r.on("move", function(t) {
                    r.index = t
                }).on("updated refresh", function(t) {
                    s = t || s, r.index = y(r.index, 0, a.edgeIndex)
                })
            },
            go: function(t, n) {
                var e = this.trim(this.parse(t));
                i.Track.go(e, this.rewind(e), n)
            },
            parse: function(t) {
                var n = r.index,
                    e = String(t).match(/([+\-<>]+)(\d+)?/),
                    i = e ? e[1] : "",
                    o = e ? parseInt(e[2]) : 0;
                switch (i) {
                    case "+":
                        n += o || 1;
                        break;
                    case "-":
                        n -= o || 1;
                        break;
                    case ">":
                    case "<":
                        n = function(t, n, e) {
                            if (-1 < t) return a.toIndex(t);
                            var i = s.perMove,
                                o = e ? -1 : 1;
                            if (i) return n + i * o;
                            return a.toIndex(a.toPage(n) + o)
                        }(o, n, "<" === i);
                        break;
                    default:
                        n = parseInt(t)
                }
                return n
            },
            toIndex: function(t) {
                if (o()) return t;
                var n = r.length,
                    e = s.perPage,
                    i = t * e;
                return n - e <= (i -= (this.pageLength * e - n) * rt(i / n)) && i < n && (i = n - e), i
            },
            toPage: function(t) {
                if (o()) return t;
                var n = r.length,
                    e = s.perPage;
                return rt(n - e <= t && t < n ? (n - 1) / e : t / e)
            },
            trim: function(t) {
                return e || (t = s.rewind ? this.rewind(t) : y(t, 0, this.edgeIndex)), t
            },
            rewind: function(t) {
                var n = this.edgeIndex;
                if (e) {
                    for (; n < t;) t -= n + 1;
                    for (; t < 0;) t += n + 1
                } else n < t ? t = 0 : t < 0 && (t = n);
                return t
            },
            isRtl: function() {
                return s.direction === et
            },
            get pageLength() {
                var t = r.length;
                return o() ? t : Math.ceil(t / s.perPage)
            },
            get edgeIndex() {
                var t = r.length;
                return t ? o() || s.isNavigation || e ? t - 1 : t - s.perPage : 0
            },
            get prevIndex() {
                var t = r.index - 1;
                return (e || s.rewind) && (t = this.rewind(t)), -1 < t ? t : -1
            },
            get nextIndex() {
                var t = r.index + 1;
                return (e || s.rewind) && (t = this.rewind(t)), r.index < t && t <= this.edgeIndex || 0 === t ? t : -1
            }
        };

        function o() {
            return !1 !== s.focus
        }
        return a
    }

    function $(r, s) {
        var i, n, o, e = r.options.direction === it,
            a = r.is(H),
            u = r.options.direction === et,
            c = !1,
            d = u ? 1 : -1,
            l = {
                sign: d,
                mount: function() {
                    n = s.Elements, i = s.Layout, o = n.list
                },
                mounted: function() {
                    var t = this;
                    a || (this.jump(0), r.on("mounted resize updated", function() {
                        t.jump(r.index)
                    }))
                },
                go: function(t, n, e) {
                    var i = h(t),
                        o = r.index;
                    r.State.is(U) && c || (c = t !== n, e || r.emit("move", n, o, t), 1 <= Math.abs(i - this.position) || a ? s.Transition.start(t, n, o, this.toCoord(i), function() {
                        f(t, n, o, e)
                    }) : t !== o && "move" === r.options.trimSpace ? s.Controller.go(t + t - o, e) : f(t, n, o, e))
                },
                jump: function(t) {
                    this.translate(h(t))
                },
                translate: function(t) {
                    P(o, {
                        transform: "translate" + (e ? "Y" : "X") + "(" + t + "px)"
                    })
                },
                cancel: function() {
                    r.is(W) ? this.shift() : this.translate(this.position), P(o, {
                        transition: ""
                    })
                },
                shift: function() {
                    var t = st(this.position),
                        n = st(this.toPosition(0)),
                        e = st(this.toPosition(r.length)),
                        i = e - n;
                    t < n ? t += i : e < t && (t -= i), this.translate(d * t)
                },
                trim: function(t) {
                    return !r.options.trimSpace || r.is(W) ? t : y(t, d * (i.totalSize() - i.size - i.gap), 0)
                },
                toIndex: function(i) {
                    var o = this,
                        r = 0,
                        s = 1 / 0;
                    return n.getSlides(!0).forEach(function(t) {
                        var n = t.index,
                            e = st(o.toPosition(n) - i);
                        e < s && (s = e, r = n)
                    }), r
                },
                toCoord: function(t) {
                    return {
                        x: e ? 0 : t,
                        y: e ? t : 0
                    }
                },
                toPosition: function(t) {
                    var n = i.totalSize(t) - i.slideSize(t) - i.gap;
                    return d * (n + this.offset(t))
                },
                offset: function(t) {
                    var n = r.options.focus,
                        e = i.slideSize(t);
                    return "center" === n ? -(i.size - e) / 2 : -(parseInt(n) || 0) * (e + i.gap)
                },
                get position() {
                    var t = e ? "top" : u ? "right" : "left";
                    return T(o)[t] - (T(n.track)[t] - i.padding[t] * d)
                }
            };

        function f(t, n, e, i) {
            P(o, {
                transition: ""
            }), c = !1, a || l.jump(n), i || r.emit("moved", n, e, t)
        }

        function h(t) {
            return l.trim(l.toPosition(t))
        }
        return l
    }

    function tt(o, t) {
        var a = [],
            n = 0,
            u = t.Elements,
            e = {
                mount: function() {
                    var t = this;
                    o.is(W) && (i(), o.on("refresh", i).on("resize", function() {
                        n !== r() && (t.destroy(), o.refresh())
                    }))
                },
                destroy: function() {
                    E(a), a = []
                },
                get clones() {
                    return a
                },
                get length() {
                    return a.length
                }
            };

        function i() {
            e.destroy(),
                function(i) {
                    var o = u.length,
                        r = u.register;
                    if (o) {
                        for (var s = u.slides; s.length < i;) s = s.concat(s);
                        s.slice(0, i).forEach(function(t, n) {
                            var e = c(t);
                            k(u.list, e), a.push(e), r(e, n + o, n % o)
                        }), s.slice(-i).forEach(function(t, n) {
                            var e = c(t);
                            S(e, s[0]), a.push(e), r(e, n - i, (o + n - i % o) % o)
                        })
                    }
                }(n = r())
        }

        function r() {
            var t = o.options;
            if (t.clones) return t.clones;
            var n = t.autoWidth || t.autoHeight ? u.length : t.perPage,
                e = t.direction === it ? "Height" : "Width",
                i = x(o.root, t["fixed" + e]);
            return i && (n = Math.ceil(u.track["client" + e] / i)), n * (t.drag ? t.flickMaxPages + 1 : 1)
        }

        function c(t) {
            var n = t.cloneNode(!0);
            return C(n, o.classes.clone), A(n, "id"), n
        }
        return e
    }
    var nt = function() {
            function t(t, n, e) {
                function i(t) {
                    t.elm && t.elm.removeEventListener(t.event, t.handler, t.options)
                }
                var o, r;
                void 0 === n && (n = {}), void 0 === e && (e = {}), this.root = t instanceof Element ? t : document.querySelector(t), N(this.root, "An invalid element/selector was given."), this.Components = null, this.Event = (o = [], {
                    on: function(t, n, e, i) {
                        void 0 === e && (e = null), void 0 === i && (i = {}), t.split(" ").forEach(function(t) {
                            e && e.addEventListener(t, n, i), o.push({
                                event: t,
                                handler: n,
                                elm: e,
                                options: i
                            })
                        })
                    },
                    off: function(t, e) {
                        void 0 === e && (e = null), t.split(" ").forEach(function(n) {
                            o = o.filter(function(t) {
                                return !t || t.event !== n || t.elm !== e || (i(t), !1)
                            })
                        })
                    },
                    emit: function(n) {
                        for (var t = arguments.length, e = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) e[i - 1] = arguments[i];
                        o.forEach(function(t) {
                            t.elm || t.event.split(".")[0] !== n || t.handler.apply(t, e)
                        })
                    },
                    destroy: function() {
                        o.forEach(i), o = []
                    }
                }), this.State = (r = G, {
                    set: function(t) {
                        r = t
                    },
                    is: function(t) {
                        return t === r
                    }
                }), this.STATES = s, this._o = u(F, n), this._i = 0, this._c = e, this._e = {}, this._t = null
            }
            var n, e, i, o = t.prototype;
            return o.mount = function(t, n) {
                var e, i, o, r, s = this;
                void 0 === t && (t = this._e), void 0 === n && (n = this._t), this.State.set(G), this._e = t, this._t = n, this.Components = (i = u((e = this)._c, t), o = n, r = {}, m(i, function(t, n) {
                    r[n] = t(e, r, n.toLowerCase())
                }), o = o || (e.is(H) ? L : p), r.Transition = o(e, r), r);
                try {
                    m(this.Components, function(t, n) {
                        var e = t.required;
                        void 0 === e || e ? t.mount && t.mount() : delete s.Components[n]
                    })
                } catch (t) {
                    return void D(t.message)
                }
                var a = this.State;
                return a.set(X), m(this.Components, function(t) {
                    t.mounted && t.mounted()
                }), this.emit("mounted"), a.set(V), this.emit("ready"), P(this.root, {
                    visibility: "visible"
                }), this.on("move drag", function() {
                    return a.set(U)
                }).on("moved dragged", function() {
                    return a.set(V)
                }), this
            }, o.sync = function(t) {
                return this.sibling = t, this
            }, o.on = function(t, n, e, i) {
                return void 0 === e && (e = null), void 0 === i && (i = {}), this.Event.on(t, n, e, i), this
            }, o.off = function(t, n) {
                return void 0 === n && (n = null), this.Event.off(t, n), this
            }, o.emit = function(t) {
                for (var n, e = arguments.length, i = new Array(1 < e ? e - 1 : 0), o = 1; o < e; o++) i[o - 1] = arguments[o];
                return (n = this.Event).emit.apply(n, [t].concat(i)), this
            }, o.go = function(t, n) {
                return void 0 === n && (n = this.options.waitForTransition), (this.State.is(V) || this.State.is(U) && !n) && this.Components.Controller.go(t, !1), this
            }, o.is = function(t) {
                return t === this._o.type
            }, o.add = function(t, n) {
                return void 0 === n && (n = -1), this.Components.Elements.add(t, n, this.refresh.bind(this)), this
            }, o.remove = function(t) {
                return this.Components.Elements.remove(t), this.refresh(), this
            }, o.refresh = function() {
                return this.emit("refresh").emit("resize"), this
            }, o.destroy = function(n) {
                var t = this;
                if (void 0 === n && (n = !0), !this.State.is(G)) return g(this.Components).reverse().forEach(function(t) {
                    t.destroy && t.destroy(n)
                }), this.emit("destroy", n), this.Event.destroy(), this.State.set(Y), this;
                this.on("ready", function() {
                    return t.destroy(n)
                })
            }, n = t, (e = [{
                key: "index",
                get: function() {
                    return this._i
                },
                set: function(t) {
                    this._i = parseInt(t)
                }
            }, {
                key: "length",
                get: function() {
                    return this.Components.Elements.length
                }
            }, {
                key: "options",
                get: function() {
                    return this._o
                },
                set: function(t) {
                    var n = this.State.is(G);
                    n || this.emit("update"), this._o = u(this._o, t), n || this.emit("updated", this._o)
                }
            }, {
                key: "classes",
                get: function() {
                    return this._o.classes
                }
            }, {
                key: "i18n",
                get: function() {
                    return this._o.i18n
                }
            }]) && J(n.prototype, e), i && J(n, i), t
        }(),
        et = "rtl",
        it = "ttb",
        ot = "update.slide",
        rt = Math.floor,
        st = Math.abs;

    function at(t, n) {
        var e;
        return function() {
            e = e || setTimeout(function() {
                t(), e = null
            }, n)
        }
    }

    function ut(n, e, i) {
        function o(t) {
            c || (r || (r = t, a && a < 1 && (r -= a * e)), a = (s = t - r) / e, e <= s && (r = 0, a = 1, n()), i && i(a), u(o))
        }
        var r, s, a, u = window.requestAnimationFrame,
            c = !0;
        return {
            pause: function() {
                c = !0, r = 0
            },
            play: function(t) {
                r = 0, c && (c = !1, t && (a = 0), u(o))
            }
        }
    }

    function ct(t, n) {
        var e, i, r, o, s, a, u, c, d, l, f, h, p = n.Elements,
            g = t.options.direction === it,
            v = (e = {
                mount: function() {
                    t.on("resize load", at(function() {
                        t.emit("resize")
                    }, t.options.throttle), window).on("resize", y).on("updated refresh", m), m(), this.totalSize = g ? this.totalHeight : this.totalWidth, this.slideSize = g ? this.slideHeight : this.slideWidth
                },
                destroy: function() {
                    A([p.list, p.track], "style")
                },
                get size() {
                    return g ? this.height : this.width
                }
            }, i = g ? (c = t, f = n.Elements, h = c.root, {
                margin: "marginBottom",
                init: function() {
                    this.resize()
                },
                resize: function() {
                    l = c.options, d = f.track, this.gap = x(h, l.gap);
                    var t = l.padding,
                        n = x(h, t.top || t),
                        e = x(h, t.bottom || t);
                    this.padding = {
                        top: n,
                        bottom: e
                    }, P(d, {
                        paddingTop: w(n),
                        paddingBottom: w(e)
                    })
                },
                totalHeight: function(t) {
                    void 0 === t && (t = c.length - 1);
                    var n = f.getSlide(t);
                    return n ? T(n.slide).bottom - T(f.list).top + this.gap : 0
                },
                slideWidth: function() {
                    return x(h, l.fixedWidth || this.width)
                },
                slideHeight: function(t) {
                    if (l.autoHeight) {
                        var n = f.getSlide(t);
                        return n ? n.slide.offsetHeight : 0
                    }
                    var e = l.fixedHeight || (this.height + this.gap) / l.perPage - this.gap;
                    return x(h, e)
                },
                get width() {
                    return d.clientWidth
                },
                get height() {
                    var t = l.height || this.width * l.heightRatio;
                    return N(t, '"height" or "heightRatio" is missing.'), x(h, t) - this.padding.top - this.padding.bottom
                }
            }) : (r = t, s = n.Elements, a = r.root, {
                margin: "margin" + ((u = r.options).direction === et ? "Left" : "Right"),
                height: 0,
                init: function() {
                    this.resize()
                },
                resize: function() {
                    u = r.options, o = s.track, this.gap = x(a, u.gap);
                    var t = u.padding,
                        n = x(a, t.left || t),
                        e = x(a, t.right || t);
                    this.padding = {
                        left: n,
                        right: e
                    }, P(o, {
                        paddingLeft: w(n),
                        paddingRight: w(e)
                    })
                },
                totalWidth: function(t) {
                    void 0 === t && (t = r.length - 1);
                    var n, e, i = s.getSlide(t),
                        o = 0;
                    return i && (n = T(i.slide), e = T(s.list), o = u.direction === et ? e.right - n.left : n.right - e.left, o += this.gap), o
                },
                slideWidth: function(t) {
                    if (u.autoWidth) {
                        var n = s.getSlide(t);
                        return n ? n.slide.offsetWidth : 0
                    }
                    var e = u.fixedWidth || (this.width + this.gap) / u.perPage - this.gap;
                    return x(a, e)
                },
                slideHeight: function() {
                    var t = u.height || u.fixedHeight || this.width * u.heightRatio;
                    return x(a, t)
                },
                get width() {
                    return o.clientWidth - this.padding.left - this.padding.right
                }
            }), b(i).forEach(function(t) {
                e[t] || Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }), e);

        function m() {
            v.init(), P(t.root, {
                maxWidth: w(t.options.width)
            }), p.each(function(t) {
                t.slide.style[v.margin] = w(v.gap)
            }), y()
        }

        function y() {
            var n = t.options;
            v.resize(), P(p.track, {
                height: w(v.height)
            });
            var e = n.autoHeight ? null : w(v.slideHeight());
            p.each(function(t) {
                P(t.container, {
                    height: e
                }), P(t.slide, {
                    width: n.autoWidth ? null : w(v.slideWidth(t.index)),
                    height: t.container ? null : e
                })
            })
        }
        return v
    }

    function dt(u, c) {
        var e, i, o, r, d = c.Track,
            l = c.Controller,
            s = u.options.direction === it,
            f = s ? "y" : "x",
            n = {
                disabled: !1,
                mount: function() {
                    var t = this,
                        n = c.Elements,
                        e = n.track;
                    u.on("touchstart mousedown", a, e).on("touchmove mousemove", p, e, {
                        passive: !1
                    }).on("touchend touchcancel mouseleave mouseup dragend", g, e).on("mounted refresh", function() {
                        m(n.list.querySelectorAll("img, a"), function(t) {
                            u.off("dragstart", t).on("dragstart", function(t) {
                                t.preventDefault()
                            }, t, {
                                passive: !1
                            })
                        })
                    }).on("mounted updated", function() {
                        t.disabled = !u.options.drag
                    })
                }
            };

        function a(t) {
            n.disabled || r || h(t)
        }

        function h(t) {
            e = d.toCoord(d.position), i = v(t, {}), o = i
        }

        function p(t) {
            var n;
            i && (o = v(t, i), r ? (t.cancelable && t.preventDefault(), u.is(H) || (n = e[f] + o.offset[f], d.translate(function(t) {
                {
                    var n, e, i;
                    u.is(j) && (n = d.sign, e = n * d.trim(d.toPosition(0)), i = n * d.trim(d.toPosition(l.edgeIndex)), (t *= n) < e ? t = e - 7 * Math.log(e - t) : i < t && (t = i + 7 * Math.log(t - i)), t *= n)
                }
                return t
            }(n)))) : function(t) {
                var n = t.offset;
                if (u.State.is(U) && u.options.waitForTransition) return !1;
                var e = 180 * Math.atan(gt(n.y) / gt(n.x)) / Math.PI;
                s && (e = 90 - e);
                return e < u.options.dragAngleThreshold
            }(o) && (u.emit("drag", i), r = !0, d.cancel(), h(t)))
        }

        function g() {
            i = null, r && (u.emit("dragged", o), function(t) {
                var n = t.velocity[f],
                    e = gt(n); {
                    var i, o, r, s, a;
                    0 < e && (i = u.options, o = u.index, r = n < 0 ? -1 : 1, s = o, u.is(H) || (a = d.position, e > i.flickVelocityThreshold && gt(t.offset[f]) < i.swipeDistanceThreshold && (a += r * Math.min(e * i.flickPower, c.Layout.size * (i.flickMaxPages || 1))), s = d.toIndex(a)), s === o && .1 < e && (s = o + r * d.sign), u.is(j) && (s = y(s, 0, l.edgeIndex)), l.go(s, i.isNavigation))
                }
            }(o), r = !1)
        }

        function v(t, n) {
            var e = t.timeStamp,
                i = t.touches,
                o = i ? i[0] : t,
                r = o.clientX,
                s = o.clientY,
                a = n.to || {},
                u = a.x,
                c = a.y,
                d = {
                    x: r - (void 0 === u ? r : u),
                    y: s - (void 0 === c ? s : c)
                },
                l = e - (n.time || 0);
            return {
                to: {
                    x: r,
                    y: s
                },
                offset: d,
                time: e,
                velocity: {
                    x: d.x / l,
                    y: d.y / l
                }
            }
        }
        return n
    }

    function lt(t, n) {
        var e = !1;

        function i(t) {
            e && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation())
        }
        return {
            required: t.options.drag && !t.is(H),
            mount: function() {
                t.on("click", i, n.Elements.track, {
                    capture: !0
                }).on("drag", function() {
                    e = !0
                }).on("moved", function() {
                    e = !1
                })
            }
        }
    }

    function ft(o, r, s) {
        var a, u, t, i = o.classes,
            c = o.root,
            d = r.Elements;

        function n() {
            var t = r.Controller,
                n = t.prevIndex,
                e = t.nextIndex,
                i = o.length > o.options.perPage || o.is(W);
            a.disabled = n < 0 || !i, u.disabled = e < 0 || !i, o.emit(s + ":updated", a, u, n, e)
        }

        function e(t) {
            return l('<button class="' + i.arrow + " " + (t ? i.prev : i.next) + '" type="button">')
        }
        return {
            required: o.options.arrows,
            mount: function() {
                a = d.arrows.prev, u = d.arrows.next, a && u || !o.options.arrows || (a = e(!0), u = e(!1), t = !0, function() {
                    var t = f("div", {
                        class: i.arrows
                    });
                    k(t, a), k(t, u);
                    var n = d.slider,
                        e = "slider" === o.options.arrows && n ? n : c;
                    S(t, e.firstElementChild)
                }()), a && u && o.on("click", function() {
                    o.go("<")
                }, a).on("click", function() {
                    o.go(">")
                }, u).on("mounted move updated refresh", n), this.arrows = {
                    prev: a,
                    next: u
                }
            },
            mounted: function() {
                o.emit(s + ":mounted", a, u)
            },
            destroy: function() {
                A([a, u], "disabled"), t && E(a.parentElement)
            }
        }
    }

    function ht(s, n, r) {
        var a = {},
            u = n.Elements,
            c = {
                mount: function() {
                    var t, n, o, r, e, i = s.options.pagination;
                    i && (n = s.options, o = s.classes, r = f("ul", {
                        class: o.pagination
                    }), e = u.getSlides(!1).filter(function(t) {
                        return !1 !== n.focus || t.index % n.perPage == 0
                    }).map(function(t, n) {
                        var e = f("li", {}),
                            i = f("button", {
                                class: o.page,
                                type: "button"
                            });
                        return k(e, i), k(r, e), s.on("click", function() {
                            s.go(">" + n)
                        }, i), {
                            li: e,
                            button: i,
                            page: n,
                            Slides: u.getSlidesByPage(n)
                        }
                    }), a = {
                        list: r,
                        items: e
                    }, t = u.slider, k("slider" === i && t ? t : s.root, a.list), s.on(bt, d)), s.off(wt).on(wt, function() {
                        c.destroy(), s.options.pagination && (c.mount(), c.mounted())
                    })
                },
                mounted: function() {
                    var t;
                    s.options.pagination && (t = s.index, s.emit(r + ":mounted", a, this.getItem(t)), d(t, -1))
                },
                destroy: function() {
                    E(a.list), a.items && a.items.forEach(function(t) {
                        s.off("click", t.button)
                    }), s.off(bt), a = {}
                },
                getItem: function(t) {
                    return a.items[n.Controller.toPage(t)]
                },
                get data() {
                    return a
                }
            };

        function d(t, n) {
            var e = c.getItem(n),
                i = c.getItem(t),
                o = B.active;
            e && I(e.button, o), i && C(i.button, o), s.emit(r + ":updated", a, e, i)
        }
        return c
    }

    function pt(a, e) {
        var u = a.i18n,
            i = e.Elements,
            o = [Pt, Ct, kt, St, Et, "role"];

        function n(t, n) {
            M(t, Pt, !n), a.options.slideFocus && M(t, Ct, n ? 0 : -1)
        }

        function t(t, n) {
            var e = i.track.id;
            M(t, kt, e), M(n, kt, e)
        }

        function r(t, n, e, i) {
            var o = a.index,
                r = -1 < e && o < e ? u.last : u.prev,
                s = -1 < i && i < o ? u.first : u.next;
            M(t, St, r), M(n, St, s)
        }

        function s(t, n) {
            n && M(n.button, Et, !0), t.items.forEach(function(t) {
                var n = a.options,
                    e = h(!1 === n.focus && 1 < n.perPage ? u.pageX : u.slideX, t.page + 1),
                    i = t.button,
                    o = t.Slides.map(function(t) {
                        return t.slide.id
                    });
                M(i, kt, o.join(" ")), M(i, St, e)
            })
        }

        function c(t, n, e) {
            n && A(n.button, Et), e && M(e.button, Et, !0)
        }

        function d(s) {
            i.each(function(t) {
                var n = t.slide,
                    e = t.realIndex;
                f(n) || M(n, "role", "button");
                var i = -1 < e ? e : t.index,
                    o = h(u.slideX, i + 1),
                    r = s.Components.Elements.getSlide(i);
                M(n, St, o), r && M(n, kt, r.slide.id)
            })
        }

        function l(t, n) {
            var e = t.slide;
            n ? M(e, Et, !0) : A(e, Et)
        }

        function f(t) {
            return "BUTTON" === t.tagName
        }
        return {
            required: a.options.accessibility,
            mount: function() {
                a.on("visible", function(t) {
                    n(t.slide, !0)
                }).on("hidden", function(t) {
                    n(t.slide, !1)
                }).on("arrows:mounted", t).on("arrows:updated", r).on("pagination:mounted", s).on("pagination:updated", c).on("refresh", function() {
                    A(e.Clones.clones, o)
                }), a.options.isNavigation && a.on("navigation:mounted", d).on("active", function(t) {
                    l(t, !0)
                }).on("inactive", function(t) {
                    l(t, !1)
                }), ["play", "pause"].forEach(function(t) {
                    var n = i[t];
                    n && (f(n) || M(n, "role", "button"), M(n, kt, i.track.id), M(n, St, u[t]))
                })
            },
            destroy: function() {
                var t = e.Arrows,
                    n = t ? t.arrows : {};
                A(i.slides.concat([n.prev, n.next, i.play, i.pause]), o)
            }
        }
    }
    var gt = Math.abs,
        vt = 1,
        mt = 2,
        yt = 3,
        bt = "move.page",
        wt = "updated.page refresh.page",
        xt = "data-splide-lazy",
        _t = "data-splide-lazy-srcset",
        Et = "aria-current",
        kt = "aria-controls",
        St = "aria-label",
        Pt = "aria-hidden",
        Ct = "tabindex",
        It = {
            ltr: {
                ArrowLeft: "<",
                ArrowRight: ">",
                Left: "<",
                Right: ">"
            },
            rtl: {
                ArrowLeft: ">",
                ArrowRight: "<",
                Left: ">",
                Right: "<"
            },
            ttb: {
                ArrowUp: "<",
                ArrowDown: ">",
                Up: "<",
                Down: ">"
            }
        },
        zt = "move.sync",
        Mt = [" ", "Enter", "Spacebar"],
        Ot = {
            Options: K,
            Breakpoints: function(r) {
                var s, a, u = r.options.breakpoints,
                    n = at(t, 50),
                    c = [];

                function t() {
                    var t, n, e, i, o = (t = c.filter(function(t) {
                        return t.mql.matches
                    })[0]) ? t.point : -1;
                    o !== a && (a = o, n = r.State, (i = (e = u[o] || s).destroy) ? (r.options = s, r.destroy("completely" === i)) : (n.is(Y) && (n.set(G), r.mount()), r.options = e))
                }
                return {
                    required: u && matchMedia,
                    mount: function() {
                        c = Object.keys(u).sort(function(t, n) {
                            return t - n
                        }).map(function(t) {
                            return {
                                point: t,
                                mql: matchMedia("(max-width:" + t + "px)")
                            }
                        }), this.destroy(!0), addEventListener("resize", n), s = r.options, t()
                    },
                    destroy: function(t) {
                        t && removeEventListener("resize", n)
                    }
                }
            },
            Controller: Z,
            Elements: Q,
            Track: $,
            Clones: tt,
            Layout: ct,
            Drag: dt,
            Click: lt,
            Autoplay: function(o, t, e) {
                var i, r = [],
                    s = t.Elements,
                    a = {
                        required: o.options.autoplay,
                        mount: function() {
                            var t = o.options;
                            s.slides.length > t.perPage && (i = ut(function() {
                                o.go(">")
                            }, t.interval, function(t) {
                                o.emit(e + ":playing", t), s.bar && P(s.bar, {
                                    width: 100 * t + "%"
                                })
                            }), function() {
                                var t = o.options,
                                    n = o.sibling,
                                    e = [o.root, n ? n.root : null];
                                t.pauseOnHover && (u(e, "mouseleave", vt, !0), u(e, "mouseenter", vt, !1));
                                t.pauseOnFocus && (u(e, "focusout", mt, !0), u(e, "focusin", mt, !1));
                                s.play && o.on("click", function() {
                                    a.play(mt), a.play(yt)
                                }, s.play);
                                s.pause && u([s.pause], "click", yt, !1);
                                o.on("move refresh", function() {
                                    a.play()
                                }).on("destroy", function() {
                                    a.pause()
                                })
                            }(), this.play())
                        },
                        play: function(n) {
                            void 0 === n && (n = 0), (r = r.filter(function(t) {
                                return t !== n
                            })).length || (o.emit(e + ":play"), i.play(o.options.resetProgress))
                        },
                        pause: function(t) {
                            void 0 === t && (t = 0), i.pause(), -1 === r.indexOf(t) && r.push(t), 1 === r.length && o.emit(e + ":pause")
                        }
                    };

                function u(t, n, e, i) {
                    t.forEach(function(t) {
                        o.on(n, function() {
                            a[i ? "play" : "pause"](e)
                        }, t)
                    })
                }
                return a
            },
            Cover: function(t, n) {
                function e(e) {
                    n.Elements.each(function(t) {
                        var n = _(t.slide, "IMG") || _(t.container, "IMG");
                        n && n.src && i(n, e)
                    })
                }

                function i(t, n) {
                    P(t.parentElement, {
                        background: n ? "" : 'center/cover no-repeat url("' + t.src + '")'
                    }), P(t, {
                        display: n ? "" : "none"
                    })
                }
                return {
                    required: t.options.cover,
                    mount: function() {
                        t.on("lazyload:loaded", function(t) {
                            i(t, !1)
                        }), t.on("mounted updated refresh", function() {
                            return e(!1)
                        })
                    },
                    destroy: function() {
                        e(!0)
                    }
                }
            },
            Arrows: ft,
            Pagination: ht,
            LazyLoad: function(o, t, r) {
                var n, e, i = o.options,
                    s = "sequential" === i.lazyLoad;

                function a() {
                    e = [], n = 0
                }

                function u(n) {
                    n = isNaN(n) ? o.index : n, (e = e.filter(function(t) {
                        return !t.Slide.isWithin(n, i.perPage * (i.preloadPages + 1)) || (c(t.img, t.Slide), !1)
                    }))[0] || o.off("moved." + r)
                }

                function c(t, n) {
                    C(n.slide, B.loading);
                    var e = f("span", {
                        class: o.classes.spinner
                    });
                    k(t.parentElement, e), t.onload = function() {
                        l(t, e, n, !1)
                    }, t.onerror = function() {
                        l(t, e, n, !0)
                    }, M(t, "srcset", O(t, _t) || ""), M(t, "src", O(t, xt) || "")
                }

                function d() {
                    var t;
                    n < e.length && c((t = e[n]).img, t.Slide), n++
                }

                function l(t, n, e, i) {
                    I(e.slide, B.loading), i || (E(n), P(t, {
                        display: ""
                    }), o.emit(r + ":loaded", t).emit("resize")), s && d()
                }
                return {
                    required: i.lazyLoad,
                    mount: function() {
                        o.on("mounted refresh", function() {
                            a(), t.Elements.each(function(n) {
                                m(n.slide.querySelectorAll("[" + xt + "], [" + _t + "]"), function(t) {
                                    t.src || t.srcset || (e.push({
                                        img: t,
                                        Slide: n
                                    }), P(t, {
                                        display: "none"
                                    }))
                                })
                            }), s && d()
                        }), s || o.on("mounted refresh moved." + r, u)
                    },
                    destroy: a
                }
            },
            Keyboard: function(o) {
                var r;
                return {
                    mount: function() {
                        o.on("mounted updated", function() {
                            var t = o.options,
                                n = o.root,
                                e = It[t.direction],
                                i = t.keyboard;
                            r && (o.off("keydown", r), A(n, Ct)), i && ("focused" === i ? M(r = n, Ct, 0) : r = document, o.on("keydown", function(t) {
                                e[t.key] && o.go(e[t.key])
                            }, r))
                        })
                    }
                }
            },
            Sync: function(i) {
                var o = i.sibling,
                    t = o && o.options.isNavigation;

                function r() {
                    i.on(zt, function(t, n, e) {
                        o.off(zt).go(o.is(W) ? e : t, !1), s()
                    })
                }

                function s() {
                    o.on(zt, function(t, n, e) {
                        i.off(zt).go(i.is(W) ? e : t, !1), r()
                    })
                }

                function a(t) {
                    i.State.is(V) && o.go(t)
                }
                return {
                    required: !!o,
                    mount: function() {
                        r(), s(), t && o.Components.Elements.each(function(t) {
                            var n = t.slide,
                                e = t.index;
                            i.on("mouseup touchend", function(t) {
                                t.button && 0 !== t.button || a(e)
                            }, n), i.on("keyup", function(t) {
                                -1 < Mt.indexOf(t.key) && (t.preventDefault(), a(e))
                            }, n, {
                                passive: !1
                            })
                        })
                    },
                    mounted: function() {
                        t && o.emit("navigation:mounted", i)
                    }
                }
            },
            A11y: pt
        };
    var At = function(e) {
        var t, n;

        function i(t, n) {
            return e.call(this, t, n, Ot) || this
        }
        return n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t)._proto_ = n, i
    }(nt);
    window.Splide = At
}]);