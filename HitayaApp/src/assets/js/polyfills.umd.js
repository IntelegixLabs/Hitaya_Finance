/** @license
 *
 * jsPDF - PDF Document creation from JavaScript
 * Version 2.5.1 Built on 2022-01-28T15:37:57.791Z
 *                      CommitID 00000000
 *
 * Copyright (c) 2010-2021 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
 *               2015-2021 yWorks GmbH, http://www.yworks.com
 *               2015-2021 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
 *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
 *               2010 Aaron Spike, https://github.com/acspike
 *               2012 Willow Systems Corporation, https://github.com/willowsystems
 *               2012 Pablo Hess, https://github.com/pablohess
 *               2012 Florian Jenett, https://github.com/fjenett
 *               2013 Warren Weckesser, https://github.com/warrenweckesser
 *               2013 Youssef Beddad, https://github.com/lifof
 *               2013 Lee Driscoll, https://github.com/lsdriscoll
 *               2013 Stefan Slonevskiy, https://github.com/stefslon
 *               2013 Jeremy Morel, https://github.com/jmorel
 *               2013 Christoph Hartmann, https://github.com/chris-rock
 *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
 *               2014 James Makes, https://github.com/dollaruw
 *               2014 Diego Casorran, https://github.com/diegocr
 *               2014 Steven Spungin, https://github.com/Flamenco
 *               2014 Kenneth Glassey, https://github.com/Gavvers
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Contributor(s):
 *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
 *    kim3er, mfo, alnorth, Flamenco
 */

/**
 * Copyright (c) 2014-2020 Denis Pushkarev
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

!(function (t) {
  "function" == typeof define && define.amd ? define(t) : t();
})(function () {
  "use strict";
  var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function e(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var r = function (t) {
      return t && t.Math == Math && t;
    },
    n =
      r("object" == typeof globalThis && globalThis) ||
      r("object" == typeof window && window) ||
      r("object" == typeof self && self) ||
      r("object" == typeof t && t) ||
      Function("return this")(),
    o = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    i = !o(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    a = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    u = n.document,
    c = a(u) && a(u.createElement),
    f = function (t) {
      return c ? u.createElement(t) : {};
    },
    s =
      !i &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(f("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    l = function (t) {
      if (!a(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    p = function (t, e) {
      if (!a(t)) return t;
      var r, n;
      if (e && "function" == typeof (r = t.toString) && !a((n = r.call(t))))
        return n;
      if ("function" == typeof (r = t.valueOf) && !a((n = r.call(t)))) return n;
      if (!e && "function" == typeof (r = t.toString) && !a((n = r.call(t))))
        return n;
      throw TypeError("Can't convert object to primitive value");
    },
    y = Object.defineProperty,
    h = {
      f: i
        ? y
        : function (t, e, r) {
            if ((l(t), (e = p(e, !0)), l(r), s))
              try {
                return y(t, e, r);
              } catch (t) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported");
            return "value" in r && (t[e] = r.value), t;
          },
    },
    d = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    v = i
      ? function (t, e, r) {
          return h.f(t, e, d(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        },
    g = function (t, e) {
      try {
        v(n, t, e);
      } catch (r) {
        n[t] = e;
      }
      return e;
    },
    b = n["__core-js_shared__"] || g("__core-js_shared__", {}),
    A = e(function (t) {
      (t.exports = function (t, e) {
        return b[t] || (b[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.6.5",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
      });
    }),
    m = {}.hasOwnProperty,
    w = function (t, e) {
      return m.call(t, e);
    },
    T = 0,
    S = Math.random(),
    O = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++T + S).toString(36)
      );
    },
    E =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        return !String(Symbol());
      }),
    j = E && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    M = A("wks"),
    L = n.Symbol,
    x = j ? L : (L && L.withoutSetter) || O,
    R = function (t) {
      return (
        w(M, t) || (E && w(L, t) ? (M[t] = L[t]) : (M[t] = x("Symbol." + t))),
        M[t]
      );
    },
    I = {};
  I[R("toStringTag")] = "z";
  var _ = "[object z]" === String(I),
    P = Function.toString;
  "function" != typeof b.inspectSource &&
    (b.inspectSource = function (t) {
      return P.call(t);
    });
  var B,
    C,
    F,
    U = b.inspectSource,
    D = n.WeakMap,
    k = "function" == typeof D && /native code/.test(U(D)),
    N = A("keys"),
    V = function (t) {
      return N[t] || (N[t] = O(t));
    },
    W = {},
    Y = n.WeakMap;
  if (k) {
    var G = new Y(),
      q = G.get,
      H = G.has,
      z = G.set;
    (B = function (t, e) {
      return z.call(G, t, e), e;
    }),
      (C = function (t) {
        return q.call(G, t) || {};
      }),
      (F = function (t) {
        return H.call(G, t);
      });
  } else {
    var X = V("state");
    (W[X] = !0),
      (B = function (t, e) {
        return v(t, X, e), e;
      }),
      (C = function (t) {
        return w(t, X) ? t[X] : {};
      }),
      (F = function (t) {
        return w(t, X);
      });
  }
  var K = {
      set: B,
      get: C,
      has: F,
      enforce: function (t) {
        return F(t) ? C(t) : B(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!a(e) || (r = C(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return r;
        };
      },
    },
    J = e(function (t) {
      var e = K.get,
        r = K.enforce,
        o = String(String).split("String");
      (t.exports = function (t, e, i, a) {
        var u = !!a && !!a.unsafe,
          c = !!a && !!a.enumerable,
          f = !!a && !!a.noTargetGet;
        "function" == typeof i &&
          ("string" != typeof e || w(i, "name") || v(i, "name", e),
          (r(i).source = o.join("string" == typeof e ? e : ""))),
          t !== n
            ? (u ? !f && t[e] && (c = !0) : delete t[e],
              c ? (t[e] = i) : v(t, e, i))
            : c
            ? (t[e] = i)
            : g(e, i);
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && e(this).source) || U(this);
      });
    }),
    Q = {}.toString,
    Z = function (t) {
      return Q.call(t).slice(8, -1);
    },
    $ = R("toStringTag"),
    tt =
      "Arguments" ==
      Z(
        (function () {
          return arguments;
        })()
      ),
    et = _
      ? Z
      : function (t) {
          var e, r, n;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (r = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), $))
            ? r
            : tt
            ? Z(e)
            : "Object" == (n = Z(e)) && "function" == typeof e.callee
            ? "Arguments"
            : n;
        },
    rt = _
      ? {}.toString
      : function () {
          return "[object " + et(this) + "]";
        };
  _ || J(Object.prototype, "toString", rt, { unsafe: !0 });
  var nt,
    ot,
    it,
    at = Math.ceil,
    ut = Math.floor,
    ct = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? ut : at)(t);
    },
    ft = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    st = function (t) {
      return function (e, r) {
        var n,
          o,
          i = String(ft(e)),
          a = ct(r),
          u = i.length;
        return a < 0 || a >= u
          ? t
            ? ""
            : void 0
          : (n = i.charCodeAt(a)) < 55296 ||
            n > 56319 ||
            a + 1 === u ||
            (o = i.charCodeAt(a + 1)) < 56320 ||
            o > 57343
          ? t
            ? i.charAt(a)
            : n
          : t
          ? i.slice(a, a + 2)
          : o - 56320 + ((n - 55296) << 10) + 65536;
      };
    },
    lt = { codeAt: st(!1), charAt: st(!0) },
    pt = {}.propertyIsEnumerable,
    yt = Object.getOwnPropertyDescriptor,
    ht = {
      f:
        yt && !pt.call({ 1: 2 }, 1)
          ? function (t) {
              var e = yt(this, t);
              return !!e && e.enumerable;
            }
          : pt,
    },
    dt = "".split,
    vt = o(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == Z(t) ? dt.call(t, "") : Object(t);
        }
      : Object,
    gt = function (t) {
      return vt(ft(t));
    },
    bt = Object.getOwnPropertyDescriptor,
    At = {
      f: i
        ? bt
        : function (t, e) {
            if (((t = gt(t)), (e = p(e, !0)), s))
              try {
                return bt(t, e);
              } catch (t) {}
            if (w(t, e)) return d(!ht.f.call(t, e), t[e]);
          },
    },
    mt = n,
    wt = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    Tt = function (t, e) {
      return arguments.length < 2
        ? wt(mt[t]) || wt(n[t])
        : (mt[t] && mt[t][e]) || (n[t] && n[t][e]);
    },
    St = Math.min,
    Ot = function (t) {
      return t > 0 ? St(ct(t), 9007199254740991) : 0;
    },
    Et = Math.max,
    jt = Math.min,
    Mt = function (t, e) {
      var r = ct(t);
      return r < 0 ? Et(r + e, 0) : jt(r, e);
    },
    Lt = function (t) {
      return function (e, r, n) {
        var o,
          i = gt(e),
          a = Ot(i.length),
          u = Mt(n, a);
        if (t && r != r) {
          for (; a > u; ) if ((o = i[u++]) != o) return !0;
        } else
          for (; a > u; u++)
            if ((t || u in i) && i[u] === r) return t || u || 0;
        return !t && -1;
      };
    },
    xt = { includes: Lt(!0), indexOf: Lt(!1) },
    Rt = xt.indexOf,
    It = function (t, e) {
      var r,
        n = gt(t),
        o = 0,
        i = [];
      for (r in n) !w(W, r) && w(n, r) && i.push(r);
      for (; e.length > o; ) w(n, (r = e[o++])) && (~Rt(i, r) || i.push(r));
      return i;
    },
    _t = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    Pt = _t.concat("length", "prototype"),
    Bt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return It(t, Pt);
        },
    },
    Ct = { f: Object.getOwnPropertySymbols },
    Ft =
      Tt("Reflect", "ownKeys") ||
      function (t) {
        var e = Bt.f(l(t)),
          r = Ct.f;
        return r ? e.concat(r(t)) : e;
      },
    Ut = function (t, e) {
      for (var r = Ft(e), n = h.f, o = At.f, i = 0; i < r.length; i++) {
        var a = r[i];
        w(t, a) || n(t, a, o(e, a));
      }
    },
    Dt = /#|\.prototype\./,
    kt = function (t, e) {
      var r = Vt[Nt(t)];
      return r == Yt || (r != Wt && ("function" == typeof e ? o(e) : !!e));
    },
    Nt = (kt.normalize = function (t) {
      return String(t).replace(Dt, ".").toLowerCase();
    }),
    Vt = (kt.data = {}),
    Wt = (kt.NATIVE = "N"),
    Yt = (kt.POLYFILL = "P"),
    Gt = kt,
    qt = At.f,
    Ht = function (t, e) {
      var r,
        o,
        i,
        a,
        u,
        c = t.target,
        f = t.global,
        s = t.stat;
      if ((r = f ? n : s ? n[c] || g(c, {}) : (n[c] || {}).prototype))
        for (o in e) {
          if (
            ((a = e[o]),
            (i = t.noTargetGet ? (u = qt(r, o)) && u.value : r[o]),
            !Gt(f ? o : c + (s ? "." : "#") + o, t.forced) && void 0 !== i)
          ) {
            if (typeof a == typeof i) continue;
            Ut(a, i);
          }
          (t.sham || (i && i.sham)) && v(a, "sham", !0), J(r, o, a, t);
        }
    },
    zt = function (t) {
      return Object(ft(t));
    },
    Xt = !o(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    Kt = V("IE_PROTO"),
    Jt = Object.prototype,
    Qt = Xt
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = zt(t)),
            w(t, Kt)
              ? t[Kt]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? Jt
              : null
          );
        },
    Zt = R("iterator"),
    $t = !1;
  [].keys &&
    ("next" in (it = [].keys())
      ? (ot = Qt(Qt(it))) !== Object.prototype && (nt = ot)
      : ($t = !0)),
    null == nt && (nt = {}),
    w(nt, Zt) ||
      v(nt, Zt, function () {
        return this;
      });
  var te,
    ee = { IteratorPrototype: nt, BUGGY_SAFARI_ITERATORS: $t },
    re =
      Object.keys ||
      function (t) {
        return It(t, _t);
      },
    ne = i
      ? Object.defineProperties
      : function (t, e) {
          l(t);
          for (var r, n = re(e), o = n.length, i = 0; o > i; )
            h.f(t, (r = n[i++]), e[r]);
          return t;
        },
    oe = Tt("document", "documentElement"),
    ie = V("IE_PROTO"),
    ae = function () {},
    ue = function (t) {
      return "<script>" + t + "</script>";
    },
    ce = function () {
      try {
        te = document.domain && new ActiveXObject("htmlfile");
      } catch (t) {}
      var t, e;
      ce = te
        ? (function (t) {
            t.write(ue("")), t.close();
            var e = t.parentWindow.Object;
            return (t = null), e;
          })(te)
        : (((e = f("iframe")).style.display = "none"),
          oe.appendChild(e),
          (e.src = String("javascript:")),
          (t = e.contentWindow.document).open(),
          t.write(ue("document.F=Object")),
          t.close(),
          t.F);
      for (var r = _t.length; r--; ) delete ce.prototype[_t[r]];
      return ce();
    };
  W[ie] = !0;
  var fe =
      Object.create ||
      function (t, e) {
        var r;
        return (
          null !== t
            ? ((ae.prototype = l(t)),
              (r = new ae()),
              (ae.prototype = null),
              (r[ie] = t))
            : (r = ce()),
          void 0 === e ? r : ne(r, e)
        );
      },
    se = h.f,
    le = R("toStringTag"),
    pe = function (t, e, r) {
      t &&
        !w((t = r ? t : t.prototype), le) &&
        se(t, le, { configurable: !0, value: e });
    },
    ye = {},
    he = ee.IteratorPrototype,
    de = function () {
      return this;
    },
    ve =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function (r, n) {
              return (
                l(r),
                (function (t) {
                  if (!a(t) && null !== t)
                    throw TypeError(
                      "Can't set " + String(t) + " as a prototype"
                    );
                })(n),
                e ? t.call(r, n) : (r.__proto__ = n),
                r
              );
            };
          })()
        : void 0),
    ge = ee.IteratorPrototype,
    be = ee.BUGGY_SAFARI_ITERATORS,
    Ae = R("iterator"),
    me = function () {
      return this;
    },
    we = function (t, e, r, n, o, i, a) {
      !(function (t, e, r) {
        var n = e + " Iterator";
        (t.prototype = fe(he, { next: d(1, r) })), pe(t, n, !1), (ye[n] = de);
      })(r, e, n);
      var u,
        c,
        f,
        s = function (t) {
          if (t === o && g) return g;
          if (!be && t in y) return y[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        l = e + " Iterator",
        p = !1,
        y = t.prototype,
        h = y[Ae] || y["@@iterator"] || (o && y[o]),
        g = (!be && h) || s(o),
        b = ("Array" == e && y.entries) || h;
      if (
        (b &&
          ((u = Qt(b.call(new t()))),
          ge !== Object.prototype &&
            u.next &&
            (Qt(u) !== ge &&
              (ve ? ve(u, ge) : "function" != typeof u[Ae] && v(u, Ae, me)),
            pe(u, l, !0))),
        "values" == o &&
          h &&
          "values" !== h.name &&
          ((p = !0),
          (g = function () {
            return h.call(this);
          })),
        y[Ae] !== g && v(y, Ae, g),
        (ye[e] = g),
        o)
      )
        if (
          ((c = {
            values: s("values"),
            keys: i ? g : s("keys"),
            entries: s("entries"),
          }),
          a)
        )
          for (f in c) (be || p || !(f in y)) && J(y, f, c[f]);
        else Ht({ target: e, proto: !0, forced: be || p }, c);
      return c;
    },
    Te = lt.charAt,
    Se = K.set,
    Oe = K.getterFor("String Iterator");
  we(
    String,
    "String",
    function (t) {
      Se(this, { type: "String Iterator", string: String(t), index: 0 });
    },
    function () {
      var t,
        e = Oe(this),
        r = e.string,
        n = e.index;
      return n >= r.length
        ? { value: void 0, done: !0 }
        : ((t = Te(r, n)), (e.index += t.length), { value: t, done: !1 });
    }
  );
  var Ee = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    },
    je = R("unscopables"),
    Me = Array.prototype;
  null == Me[je] && h.f(Me, je, { configurable: !0, value: fe(null) });
  var Le = function (t) {
      Me[je][t] = !0;
    },
    xe = K.set,
    Re = K.getterFor("Array Iterator"),
    Ie = we(
      Array,
      "Array",
      function (t, e) {
        xe(this, { type: "Array Iterator", target: gt(t), index: 0, kind: e });
      },
      function () {
        var t = Re(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
        return !e || n >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == r
          ? { value: n, done: !1 }
          : "values" == r
          ? { value: e[n], done: !1 }
          : { value: [n, e[n]], done: !1 };
      },
      "values"
    );
  (ye.Arguments = ye.Array), Le("keys"), Le("values"), Le("entries");
  var _e = R("iterator"),
    Pe = R("toStringTag"),
    Be = Ie.values;
  for (var Ce in Ee) {
    var Fe = n[Ce],
      Ue = Fe && Fe.prototype;
    if (Ue) {
      if (Ue[_e] !== Be)
        try {
          v(Ue, _e, Be);
        } catch (t) {
          Ue[_e] = Be;
        }
      if ((Ue[Pe] || v(Ue, Pe, Ce), Ee[Ce]))
        for (var De in Ie)
          if (Ue[De] !== Ie[De])
            try {
              v(Ue, De, Ie[De]);
            } catch (t) {
              Ue[De] = Ie[De];
            }
    }
  }
  var ke = n.Promise,
    Ne = function (t, e, r) {
      for (var n in e) J(t, n, e[n], r);
      return t;
    },
    Ve = R("species"),
    We = function (t) {
      var e = Tt(t),
        r = h.f;
      i &&
        e &&
        !e[Ve] &&
        r(e, Ve, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    Ye = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    },
    Ge = function (t, e, r) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
      return t;
    },
    qe = R("iterator"),
    He = Array.prototype,
    ze = function (t) {
      return void 0 !== t && (ye.Array === t || He[qe] === t);
    },
    Xe = function (t, e, r) {
      if ((Ye(t), void 0 === e)) return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function (r, n, o) {
            return t.call(e, r, n, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    },
    Ke = R("iterator"),
    Je = function (t) {
      if (null != t) return t[Ke] || t["@@iterator"] || ye[et(t)];
    },
    Qe = function (t, e, r, n) {
      try {
        return n ? e(l(r)[0], r[1]) : e(r);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && l(o.call(t)), e);
      }
    },
    Ze = e(function (t) {
      var e = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
      (t.exports = function (t, r, n, o, i) {
        var a,
          u,
          c,
          f,
          s,
          p,
          y,
          h = Xe(r, n, o ? 2 : 1);
        if (i) a = t;
        else {
          if ("function" != typeof (u = Je(t)))
            throw TypeError("Target is not iterable");
          if (ze(u)) {
            for (c = 0, f = Ot(t.length); f > c; c++)
              if (
                (s = o ? h(l((y = t[c]))[0], y[1]) : h(t[c])) &&
                s instanceof e
              )
                return s;
            return new e(!1);
          }
          a = u.call(t);
        }
        for (p = a.next; !(y = p.call(a)).done; )
          if (
            "object" == typeof (s = Qe(a, h, y.value, o)) &&
            s &&
            s instanceof e
          )
            return s;
        return new e(!1);
      }).stop = function (t) {
        return new e(!0, t);
      };
    }),
    $e = R("iterator"),
    tr = !1;
  try {
    var er = 0,
      rr = {
        next: function () {
          return { done: !!er++ };
        },
        return: function () {
          tr = !0;
        },
      };
    (rr[$e] = function () {
      return this;
    }),
      Array.from(rr, function () {
        throw 2;
      });
  } catch (t) {}
  var nr,
    or,
    ir,
    ar = function (t, e) {
      if (!e && !tr) return !1;
      var r = !1;
      try {
        var n = {};
        (n[$e] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          t(n);
      } catch (t) {}
      return r;
    },
    ur = R("species"),
    cr = function (t, e) {
      var r,
        n = l(t).constructor;
      return void 0 === n || null == (r = l(n)[ur]) ? e : Ye(r);
    },
    fr = Tt("navigator", "userAgent") || "",
    sr = /(iphone|ipod|ipad).*applewebkit/i.test(fr),
    lr = n.location,
    pr = n.setImmediate,
    yr = n.clearImmediate,
    hr = n.process,
    dr = n.MessageChannel,
    vr = n.Dispatch,
    gr = 0,
    br = {},
    Ar = function (t) {
      if (br.hasOwnProperty(t)) {
        var e = br[t];
        delete br[t], e();
      }
    },
    mr = function (t) {
      return function () {
        Ar(t);
      };
    },
    wr = function (t) {
      Ar(t.data);
    },
    Tr = function (t) {
      n.postMessage(t + "", lr.protocol + "//" + lr.host);
    };
  (pr && yr) ||
    ((pr = function (t) {
      for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
      return (
        (br[++gr] = function () {
          ("function" == typeof t ? t : Function(t)).apply(void 0, e);
        }),
        nr(gr),
        gr
      );
    }),
    (yr = function (t) {
      delete br[t];
    }),
    "process" == Z(hr)
      ? (nr = function (t) {
          hr.nextTick(mr(t));
        })
      : vr && vr.now
      ? (nr = function (t) {
          vr.now(mr(t));
        })
      : dr && !sr
      ? ((ir = (or = new dr()).port2),
        (or.port1.onmessage = wr),
        (nr = Xe(ir.postMessage, ir, 1)))
      : !n.addEventListener ||
        "function" != typeof postMessage ||
        n.importScripts ||
        o(Tr) ||
        "file:" === lr.protocol
      ? (nr =
          "onreadystatechange" in f("script")
            ? function (t) {
                oe.appendChild(f("script")).onreadystatechange = function () {
                  oe.removeChild(this), Ar(t);
                };
              }
            : function (t) {
                setTimeout(mr(t), 0);
              })
      : ((nr = Tr), n.addEventListener("message", wr, !1)));
  var Sr,
    Or,
    Er,
    jr,
    Mr,
    Lr,
    xr,
    Rr,
    Ir = { set: pr, clear: yr },
    _r = At.f,
    Pr = Ir.set,
    Br = n.MutationObserver || n.WebKitMutationObserver,
    Cr = n.process,
    Fr = n.Promise,
    Ur = "process" == Z(Cr),
    Dr = _r(n, "queueMicrotask"),
    kr = Dr && Dr.value;
  kr ||
    ((Sr = function () {
      var t, e;
      for (Ur && (t = Cr.domain) && t.exit(); Or; ) {
        (e = Or.fn), (Or = Or.next);
        try {
          e();
        } catch (t) {
          throw (Or ? jr() : (Er = void 0), t);
        }
      }
      (Er = void 0), t && t.enter();
    }),
    Ur
      ? (jr = function () {
          Cr.nextTick(Sr);
        })
      : Br && !sr
      ? ((Mr = !0),
        (Lr = document.createTextNode("")),
        new Br(Sr).observe(Lr, { characterData: !0 }),
        (jr = function () {
          Lr.data = Mr = !Mr;
        }))
      : Fr && Fr.resolve
      ? ((xr = Fr.resolve(void 0)),
        (Rr = xr.then),
        (jr = function () {
          Rr.call(xr, Sr);
        }))
      : (jr = function () {
          Pr.call(n, Sr);
        }));
  var Nr,
    Vr,
    Wr =
      kr ||
      function (t) {
        var e = { fn: t, next: void 0 };
        Er && (Er.next = e), Or || ((Or = e), jr()), (Er = e);
      },
    Yr = function (t) {
      var e, r;
      (this.promise = new t(function (t, n) {
        if (void 0 !== e || void 0 !== r)
          throw TypeError("Bad Promise constructor");
        (e = t), (r = n);
      })),
        (this.resolve = Ye(e)),
        (this.reject = Ye(r));
    },
    Gr = {
      f: function (t) {
        return new Yr(t);
      },
    },
    qr = function (t, e) {
      if ((l(t), a(e) && e.constructor === t)) return e;
      var r = Gr.f(t);
      return (0, r.resolve)(e), r.promise;
    },
    Hr = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (t) {
        return { error: !0, value: t };
      }
    },
    zr = n.process,
    Xr = zr && zr.versions,
    Kr = Xr && Xr.v8;
  Kr
    ? (Vr = (Nr = Kr.split("."))[0] + Nr[1])
    : fr &&
      (!(Nr = fr.match(/Edge\/(\d+)/)) || Nr[1] >= 74) &&
      (Nr = fr.match(/Chrome\/(\d+)/)) &&
      (Vr = Nr[1]);
  var Jr,
    Qr,
    Zr,
    $r,
    tn = Vr && +Vr,
    en = Ir.set,
    rn = R("species"),
    nn = "Promise",
    on = K.get,
    an = K.set,
    un = K.getterFor(nn),
    cn = ke,
    fn = n.TypeError,
    sn = n.document,
    ln = n.process,
    pn = Tt("fetch"),
    yn = Gr.f,
    hn = yn,
    dn = "process" == Z(ln),
    vn = !!(sn && sn.createEvent && n.dispatchEvent),
    gn = Gt(nn, function () {
      if (!(U(cn) !== String(cn))) {
        if (66 === tn) return !0;
        if (!dn && "function" != typeof PromiseRejectionEvent) return !0;
      }
      if (tn >= 51 && /native code/.test(cn)) return !1;
      var t = cn.resolve(1),
        e = function (t) {
          t(
            function () {},
            function () {}
          );
        };
      return (
        ((t.constructor = {})[rn] = e), !(t.then(function () {}) instanceof e)
      );
    }),
    bn =
      gn ||
      !ar(function (t) {
        cn.all(t).catch(function () {});
      }),
    An = function (t) {
      var e;
      return !(!a(t) || "function" != typeof (e = t.then)) && e;
    },
    mn = function (t, e, r) {
      if (!e.notified) {
        e.notified = !0;
        var n = e.reactions;
        Wr(function () {
          for (var o = e.value, i = 1 == e.state, a = 0; n.length > a; ) {
            var u,
              c,
              f,
              s = n[a++],
              l = i ? s.ok : s.fail,
              p = s.resolve,
              y = s.reject,
              h = s.domain;
            try {
              l
                ? (i || (2 === e.rejection && On(t, e), (e.rejection = 1)),
                  !0 === l
                    ? (u = o)
                    : (h && h.enter(), (u = l(o)), h && (h.exit(), (f = !0))),
                  u === s.promise
                    ? y(fn("Promise-chain cycle"))
                    : (c = An(u))
                    ? c.call(u, p, y)
                    : p(u))
                : y(o);
            } catch (t) {
              h && !f && h.exit(), y(t);
            }
          }
          (e.reactions = []), (e.notified = !1), r && !e.rejection && Tn(t, e);
        });
      }
    },
    wn = function (t, e, r) {
      var o, i;
      vn
        ? (((o = sn.createEvent("Event")).promise = e),
          (o.reason = r),
          o.initEvent(t, !1, !0),
          n.dispatchEvent(o))
        : (o = { promise: e, reason: r }),
        (i = n["on" + t])
          ? i(o)
          : "unhandledrejection" === t &&
            (function (t, e) {
              var r = n.console;
              r &&
                r.error &&
                (1 === arguments.length ? r.error(t) : r.error(t, e));
            })("Unhandled promise rejection", r);
    },
    Tn = function (t, e) {
      en.call(n, function () {
        var r,
          n = e.value;
        if (
          Sn(e) &&
          ((r = Hr(function () {
            dn
              ? ln.emit("unhandledRejection", n, t)
              : wn("unhandledrejection", t, n);
          })),
          (e.rejection = dn || Sn(e) ? 2 : 1),
          r.error)
        )
          throw r.value;
      });
    },
    Sn = function (t) {
      return 1 !== t.rejection && !t.parent;
    },
    On = function (t, e) {
      en.call(n, function () {
        dn
          ? ln.emit("rejectionHandled", t)
          : wn("rejectionhandled", t, e.value);
      });
    },
    En = function (t, e, r, n) {
      return function (o) {
        t(e, r, o, n);
      };
    },
    jn = function (t, e, r, n) {
      e.done ||
        ((e.done = !0),
        n && (e = n),
        (e.value = r),
        (e.state = 2),
        mn(t, e, !0));
    },
    Mn = function (t, e, r, n) {
      if (!e.done) {
        (e.done = !0), n && (e = n);
        try {
          if (t === r) throw fn("Promise can't be resolved itself");
          var o = An(r);
          o
            ? Wr(function () {
                var n = { done: !1 };
                try {
                  o.call(r, En(Mn, t, n, e), En(jn, t, n, e));
                } catch (r) {
                  jn(t, n, r, e);
                }
              })
            : ((e.value = r), (e.state = 1), mn(t, e, !1));
        } catch (r) {
          jn(t, { done: !1 }, r, e);
        }
      }
    };
  gn &&
    ((cn = function (t) {
      Ge(this, cn, nn), Ye(t), Jr.call(this);
      var e = on(this);
      try {
        t(En(Mn, this, e), En(jn, this, e));
      } catch (t) {
        jn(this, e, t);
      }
    }),
    ((Jr = function (t) {
      an(this, {
        type: nn,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0,
      });
    }).prototype = Ne(cn.prototype, {
      then: function (t, e) {
        var r = un(this),
          n = yn(cr(this, cn));
        return (
          (n.ok = "function" != typeof t || t),
          (n.fail = "function" == typeof e && e),
          (n.domain = dn ? ln.domain : void 0),
          (r.parent = !0),
          r.reactions.push(n),
          0 != r.state && mn(this, r, !1),
          n.promise
        );
      },
      catch: function (t) {
        return this.then(void 0, t);
      },
    })),
    (Qr = function () {
      var t = new Jr(),
        e = on(t);
      (this.promise = t),
        (this.resolve = En(Mn, t, e)),
        (this.reject = En(jn, t, e));
    }),
    (Gr.f = yn =
      function (t) {
        return t === cn || t === Zr ? new Qr(t) : hn(t);
      }),
    "function" == typeof ke &&
      (($r = ke.prototype.then),
      J(
        ke.prototype,
        "then",
        function (t, e) {
          var r = this;
          return new cn(function (t, e) {
            $r.call(r, t, e);
          }).then(t, e);
        },
        { unsafe: !0 }
      ),
      "function" == typeof pn &&
        Ht(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (t) {
              return qr(cn, pn.apply(n, arguments));
            },
          }
        ))),
    Ht({ global: !0, wrap: !0, forced: gn }, { Promise: cn }),
    pe(cn, nn, !1),
    We(nn),
    (Zr = Tt(nn)),
    Ht(
      { target: nn, stat: !0, forced: gn },
      {
        reject: function (t) {
          var e = yn(this);
          return e.reject.call(void 0, t), e.promise;
        },
      }
    ),
    Ht(
      { target: nn, stat: !0, forced: gn },
      {
        resolve: function (t) {
          return qr(this, t);
        },
      }
    ),
    Ht(
      { target: nn, stat: !0, forced: bn },
      {
        all: function (t) {
          var e = this,
            r = yn(e),
            n = r.resolve,
            o = r.reject,
            i = Hr(function () {
              var r = Ye(e.resolve),
                i = [],
                a = 0,
                u = 1;
              Ze(t, function (t) {
                var c = a++,
                  f = !1;
                i.push(void 0),
                  u++,
                  r.call(e, t).then(function (t) {
                    f || ((f = !0), (i[c] = t), --u || n(i));
                  }, o);
              }),
                --u || n(i);
            });
          return i.error && o(i.value), r.promise;
        },
        race: function (t) {
          var e = this,
            r = yn(e),
            n = r.reject,
            o = Hr(function () {
              var o = Ye(e.resolve);
              Ze(t, function (t) {
                o.call(e, t).then(r.resolve, n);
              });
            });
          return o.error && n(o.value), r.promise;
        },
      }
    ),
    Ht(
      { target: "Promise", stat: !0 },
      {
        allSettled: function (t) {
          var e = this,
            r = Gr.f(e),
            n = r.resolve,
            o = r.reject,
            i = Hr(function () {
              var r = Ye(e.resolve),
                o = [],
                i = 0,
                a = 1;
              Ze(t, function (t) {
                var u = i++,
                  c = !1;
                o.push(void 0),
                  a++,
                  r.call(e, t).then(
                    function (t) {
                      c ||
                        ((c = !0),
                        (o[u] = { status: "fulfilled", value: t }),
                        --a || n(o));
                    },
                    function (t) {
                      c ||
                        ((c = !0),
                        (o[u] = { status: "rejected", reason: t }),
                        --a || n(o));
                    }
                  );
              }),
                --a || n(o);
            });
          return i.error && o(i.value), r.promise;
        },
      }
    );
  var Ln =
    !!ke &&
    o(function () {
      ke.prototype.finally.call({ then: function () {} }, function () {});
    });
  Ht(
    { target: "Promise", proto: !0, real: !0, forced: Ln },
    {
      finally: function (t) {
        var e = cr(this, Tt("Promise")),
          r = "function" == typeof t;
        return this.then(
          r
            ? function (r) {
                return qr(e, t()).then(function () {
                  return r;
                });
              }
            : t,
          r
            ? function (r) {
                return qr(e, t()).then(function () {
                  throw r;
                });
              }
            : t
        );
      },
    }
  ),
    "function" != typeof ke ||
      ke.prototype.finally ||
      J(ke.prototype, "finally", Tt("Promise").prototype.finally);
  mt.Promise;
  var xn =
      Array.isArray ||
      function (t) {
        return "Array" == Z(t);
      },
    Rn = R("species"),
    In = function (t, e) {
      var r;
      return (
        xn(t) &&
          ("function" != typeof (r = t.constructor) ||
          (r !== Array && !xn(r.prototype))
            ? a(r) && null === (r = r[Rn]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    },
    _n = [].push,
    Pn = function (t) {
      var e = 1 == t,
        r = 2 == t,
        n = 3 == t,
        o = 4 == t,
        i = 6 == t,
        a = 5 == t || i;
      return function (u, c, f, s) {
        for (
          var l,
            p,
            y = zt(u),
            h = vt(y),
            d = Xe(c, f, 3),
            v = Ot(h.length),
            g = 0,
            b = s || In,
            A = e ? b(u, v) : r ? b(u, 0) : void 0;
          v > g;
          g++
        )
          if ((a || g in h) && ((p = d((l = h[g]), g, y)), t))
            if (e) A[g] = p;
            else if (p)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return l;
                case 6:
                  return g;
                case 2:
                  _n.call(A, l);
              }
            else if (o) return !1;
        return i ? -1 : n || o ? o : A;
      };
    },
    Bn = {
      forEach: Pn(0),
      map: Pn(1),
      filter: Pn(2),
      some: Pn(3),
      every: Pn(4),
      find: Pn(5),
      findIndex: Pn(6),
    },
    Cn = R("species"),
    Fn = Object.defineProperty,
    Un = {},
    Dn = function (t) {
      throw t;
    },
    kn = function (t, e) {
      if (w(Un, t)) return Un[t];
      e || (e = {});
      var r = [][t],
        n = !!w(e, "ACCESSORS") && e.ACCESSORS,
        a = w(e, 0) ? e[0] : Dn,
        u = w(e, 1) ? e[1] : void 0;
      return (Un[t] =
        !!r &&
        !o(function () {
          if (n && !i) return !0;
          var t = { length: -1 };
          n ? Fn(t, 1, { enumerable: !0, get: Dn }) : (t[1] = 1),
            r.call(t, a, u);
        }));
    },
    Nn = Bn.map,
    Vn = (function (t) {
      return (
        tn >= 51 ||
        !o(function () {
          var e = [];
          return (
            ((e.constructor = {})[Cn] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    })("map"),
    Wn = kn("map");
  Ht(
    { target: "Array", proto: !0, forced: !Vn || !Wn },
    {
      map: function (t) {
        return Nn(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Yn = Function.call,
    Gn = function (t, e, r) {
      return Xe(Yn, n[t].prototype[e], r);
    };
  Gn("Array", "map");
  Ht({ target: "Array", stat: !0 }, { isArray: xn });
  mt.Array.isArray;
  var qn = function (t) {
      return function (e, r, n, o) {
        Ye(r);
        var i = zt(e),
          a = vt(i),
          u = Ot(i.length),
          c = t ? u - 1 : 0,
          f = t ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (c in a) {
              (o = a[c]), (c += f);
              break;
            }
            if (((c += f), t ? c < 0 : u <= c))
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; t ? c >= 0 : u > c; c += f) c in a && (o = r(o, a[c], c, i));
        return o;
      };
    },
    Hn = { left: qn(!1), right: qn(!0) },
    zn = function (t, e) {
      var r = [][t];
      return (
        !!r &&
        o(function () {
          r.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    Xn = Hn.left,
    Kn = zn("reduce"),
    Jn = kn("reduce", { 1: 0 });
  Ht(
    { target: "Array", proto: !0, forced: !Kn || !Jn },
    {
      reduce: function (t) {
        return Xn(
          this,
          t,
          arguments.length,
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  Gn("Array", "reduce");
  var Qn = Bn.forEach,
    Zn = zn("forEach"),
    $n = kn("forEach"),
    to =
      Zn && $n
        ? [].forEach
        : function (t) {
            return Qn(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  Ht({ target: "Array", proto: !0, forced: [].forEach != to }, { forEach: to });
  Gn("Array", "forEach");
  var eo = Bn.find,
    ro = !0,
    no = kn("find");
  "find" in [] &&
    Array(1).find(function () {
      ro = !1;
    }),
    Ht(
      { target: "Array", proto: !0, forced: ro || !no },
      {
        find: function (t) {
          return eo(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    Le("find");
  Gn("Array", "find");
  Ht({ target: "Object", stat: !0, sham: !i }, { create: fe });
  mt.Object;
  var oo = o(function () {
    re(1);
  });
  Ht(
    { target: "Object", stat: !0, forced: oo },
    {
      keys: function (t) {
        return re(zt(t));
      },
    }
  );
  mt.Object.keys;
  var io = ht.f,
    ao = function (t) {
      return function (e) {
        for (var r, n = gt(e), o = re(n), a = o.length, u = 0, c = []; a > u; )
          (r = o[u++]), (i && !io.call(n, r)) || c.push(t ? [r, n[r]] : n[r]);
        return c;
      };
    },
    uo = { entries: ao(!0), values: ao(!1) }.values;
  Ht(
    { target: "Object", stat: !0 },
    {
      values: function (t) {
        return uo(t);
      },
    }
  );
  mt.Object.values;
  var co = Object.assign,
    fo = Object.defineProperty,
    so =
      !co ||
      o(function () {
        if (
          i &&
          1 !==
            co(
              { b: 1 },
              co(
                fo({}, "a", {
                  enumerable: !0,
                  get: function () {
                    fo(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          r = Symbol();
        return (
          (t[r] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != co({}, t)[r] || "abcdefghijklmnopqrst" != re(co({}, e)).join("")
        );
      })
        ? function (t, e) {
            for (
              var r = zt(t), n = arguments.length, o = 1, a = Ct.f, u = ht.f;
              n > o;

            )
              for (
                var c,
                  f = vt(arguments[o++]),
                  s = a ? re(f).concat(a(f)) : re(f),
                  l = s.length,
                  p = 0;
                l > p;

              )
                (c = s[p++]), (i && !u.call(f, c)) || (r[c] = f[c]);
            return r;
          }
        : co;
  Ht(
    { target: "Object", stat: !0, forced: Object.assign !== so },
    { assign: so }
  );
  mt.Object.assign;
  var lo = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    po = "[" + lo + "]",
    yo = RegExp("^" + po + po + "*"),
    ho = RegExp(po + po + "*$"),
    vo = function (t) {
      return function (e) {
        var r = String(ft(e));
        return (
          1 & t && (r = r.replace(yo, "")), 2 & t && (r = r.replace(ho, "")), r
        );
      };
    },
    go = { start: vo(1), end: vo(2), trim: vo(3) },
    bo = function (t) {
      return o(function () {
        return !!lo[t]() || "​᠎" != "​᠎"[t]() || lo[t].name !== t;
      });
    },
    Ao = go.trim;
  Ht(
    { target: "String", proto: !0, forced: bo("trim") },
    {
      trim: function () {
        return Ao(this);
      },
    }
  );
  Gn("String", "trim");
  var mo = go.start,
    wo = bo("trimStart"),
    To = wo
      ? function () {
          return mo(this);
        }
      : "".trimStart;
  Ht(
    { target: "String", proto: !0, forced: wo },
    { trimStart: To, trimLeft: To }
  );
  Gn("String", "trimLeft");
  var So = go.end,
    Oo = bo("trimEnd"),
    Eo = Oo
      ? function () {
          return So(this);
        }
      : "".trimEnd;
  Ht(
    { target: "String", proto: !0, forced: Oo },
    { trimEnd: Eo, trimRight: Eo }
  );
  Gn("String", "trimRight");
  var jo = Math.floor;
  Ht(
    { target: "Number", stat: !0 },
    {
      isInteger: function (t) {
        return !a(t) && isFinite(t) && jo(t) === t;
      },
    }
  );
  mt.Number.isInteger;
  var Mo,
    Lo = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
    xo = h.f,
    Ro = n.Int8Array,
    Io = Ro && Ro.prototype,
    _o = n.Uint8ClampedArray,
    Po = _o && _o.prototype,
    Bo = Ro && Qt(Ro),
    Co = Io && Qt(Io),
    Fo = Object.prototype,
    Uo = Fo.isPrototypeOf,
    Do = R("toStringTag"),
    ko = O("TYPED_ARRAY_TAG"),
    No = Lo && !!ve && "Opera" !== et(n.opera),
    Vo = !1,
    Wo = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8,
    },
    Yo = function (t) {
      return a(t) && w(Wo, et(t));
    };
  for (Mo in Wo) n[Mo] || (No = !1);
  if (
    (!No || "function" != typeof Bo || Bo === Function.prototype) &&
    ((Bo = function () {
      throw TypeError("Incorrect invocation");
    }),
    No)
  )
    for (Mo in Wo) n[Mo] && ve(n[Mo], Bo);
  if ((!No || !Co || Co === Fo) && ((Co = Bo.prototype), No))
    for (Mo in Wo) n[Mo] && ve(n[Mo].prototype, Co);
  if ((No && Qt(Po) !== Co && ve(Po, Co), i && !w(Co, Do)))
    for (Mo in ((Vo = !0),
    xo(Co, Do, {
      get: function () {
        return a(this) ? this[ko] : void 0;
      },
    }),
    Wo))
      n[Mo] && v(n[Mo], ko, Mo);
  var Go = {
      NATIVE_ARRAY_BUFFER_VIEWS: No,
      TYPED_ARRAY_TAG: Vo && ko,
      aTypedArray: function (t) {
        if (Yo(t)) return t;
        throw TypeError("Target is not a typed array");
      },
      aTypedArrayConstructor: function (t) {
        if (ve) {
          if (Uo.call(Bo, t)) return t;
        } else
          for (var e in Wo)
            if (w(Wo, Mo)) {
              var r = n[e];
              if (r && (t === r || Uo.call(r, t))) return t;
            }
        throw TypeError("Target is not a typed array constructor");
      },
      exportTypedArrayMethod: function (t, e, r) {
        if (i) {
          if (r)
            for (var o in Wo) {
              var a = n[o];
              a && w(a.prototype, t) && delete a.prototype[t];
            }
          (Co[t] && !r) || J(Co, t, r ? e : (No && Io[t]) || e);
        }
      },
      exportTypedArrayStaticMethod: function (t, e, r) {
        var o, a;
        if (i) {
          if (ve) {
            if (r) for (o in Wo) (a = n[o]) && w(a, t) && delete a[t];
            if (Bo[t] && !r) return;
            try {
              return J(Bo, t, r ? e : (No && Ro[t]) || e);
            } catch (t) {}
          }
          for (o in Wo) !(a = n[o]) || (a[t] && !r) || J(a, t, e);
        }
      },
      isView: function (t) {
        var e = et(t);
        return "DataView" === e || w(Wo, e);
      },
      isTypedArray: Yo,
      TypedArray: Bo,
      TypedArrayPrototype: Co,
    },
    qo = Go.NATIVE_ARRAY_BUFFER_VIEWS,
    Ho = n.ArrayBuffer,
    zo = n.Int8Array,
    Xo =
      !qo ||
      !o(function () {
        zo(1);
      }) ||
      !o(function () {
        new zo(-1);
      }) ||
      !ar(function (t) {
        new zo(), new zo(null), new zo(1.5), new zo(t);
      }, !0) ||
      o(function () {
        return 1 !== new zo(new Ho(2), 1, void 0).length;
      }),
    Ko = function (t) {
      if (void 0 === t) return 0;
      var e = ct(t),
        r = Ot(e);
      if (e !== r) throw RangeError("Wrong length or index");
      return r;
    },
    Jo = Math.abs,
    Qo = Math.pow,
    Zo = Math.floor,
    $o = Math.log,
    ti = Math.LN2,
    ei = function (t, e, r) {
      var n,
        o,
        i,
        a = new Array(r),
        u = 8 * r - e - 1,
        c = (1 << u) - 1,
        f = c >> 1,
        s = 23 === e ? Qo(2, -24) - Qo(2, -77) : 0,
        l = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0,
        p = 0;
      for (
        (t = Jo(t)) != t || t === 1 / 0
          ? ((o = t != t ? 1 : 0), (n = c))
          : ((n = Zo($o(t) / ti)),
            t * (i = Qo(2, -n)) < 1 && (n--, (i *= 2)),
            (t += n + f >= 1 ? s / i : s * Qo(2, 1 - f)) * i >= 2 &&
              (n++, (i /= 2)),
            n + f >= c
              ? ((o = 0), (n = c))
              : n + f >= 1
              ? ((o = (t * i - 1) * Qo(2, e)), (n += f))
              : ((o = t * Qo(2, f - 1) * Qo(2, e)), (n = 0)));
        e >= 8;
        a[p++] = 255 & o, o /= 256, e -= 8
      );
      for (n = (n << e) | o, u += e; u > 0; a[p++] = 255 & n, n /= 256, u -= 8);
      return (a[--p] |= 128 * l), a;
    },
    ri = function (t, e) {
      var r,
        n = t.length,
        o = 8 * n - e - 1,
        i = (1 << o) - 1,
        a = i >> 1,
        u = o - 7,
        c = n - 1,
        f = t[c--],
        s = 127 & f;
      for (f >>= 7; u > 0; s = 256 * s + t[c], c--, u -= 8);
      for (
        r = s & ((1 << -u) - 1), s >>= -u, u += e;
        u > 0;
        r = 256 * r + t[c], c--, u -= 8
      );
      if (0 === s) s = 1 - a;
      else {
        if (s === i) return r ? NaN : f ? -1 / 0 : 1 / 0;
        (r += Qo(2, e)), (s -= a);
      }
      return (f ? -1 : 1) * r * Qo(2, s - e);
    },
    ni = function (t) {
      for (
        var e = zt(this),
          r = Ot(e.length),
          n = arguments.length,
          o = Mt(n > 1 ? arguments[1] : void 0, r),
          i = n > 2 ? arguments[2] : void 0,
          a = void 0 === i ? r : Mt(i, r);
        a > o;

      )
        e[o++] = t;
      return e;
    },
    oi = Bt.f,
    ii = h.f,
    ai = K.get,
    ui = K.set,
    ci = n.ArrayBuffer,
    fi = ci,
    si = n.DataView,
    li = si && si.prototype,
    pi = Object.prototype,
    yi = n.RangeError,
    hi = ei,
    di = ri,
    vi = function (t) {
      return [255 & t];
    },
    gi = function (t) {
      return [255 & t, (t >> 8) & 255];
    },
    bi = function (t) {
      return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
    },
    Ai = function (t) {
      return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
    },
    mi = function (t) {
      return hi(t, 23, 4);
    },
    wi = function (t) {
      return hi(t, 52, 8);
    },
    Ti = function (t, e) {
      ii(t.prototype, e, {
        get: function () {
          return ai(this)[e];
        },
      });
    },
    Si = function (t, e, r, n) {
      var o = Ko(r),
        i = ai(t);
      if (o + e > i.byteLength) throw yi("Wrong index");
      var a = ai(i.buffer).bytes,
        u = o + i.byteOffset,
        c = a.slice(u, u + e);
      return n ? c : c.reverse();
    },
    Oi = function (t, e, r, n, o, i) {
      var a = Ko(r),
        u = ai(t);
      if (a + e > u.byteLength) throw yi("Wrong index");
      for (
        var c = ai(u.buffer).bytes, f = a + u.byteOffset, s = n(+o), l = 0;
        l < e;
        l++
      )
        c[f + l] = s[i ? l : e - l - 1];
    };
  if (Lo) {
    if (
      !o(function () {
        ci(1);
      }) ||
      !o(function () {
        new ci(-1);
      }) ||
      o(function () {
        return new ci(), new ci(1.5), new ci(NaN), "ArrayBuffer" != ci.name;
      })
    ) {
      for (
        var Ei,
          ji = ((fi = function (t) {
            return Ge(this, fi), new ci(Ko(t));
          }).prototype = ci.prototype),
          Mi = oi(ci),
          Li = 0;
        Mi.length > Li;

      )
        (Ei = Mi[Li++]) in fi || v(fi, Ei, ci[Ei]);
      ji.constructor = fi;
    }
    ve && Qt(li) !== pi && ve(li, pi);
    var xi = new si(new fi(2)),
      Ri = li.setInt8;
    xi.setInt8(0, 2147483648),
      xi.setInt8(1, 2147483649),
      (!xi.getInt8(0) && xi.getInt8(1)) ||
        Ne(
          li,
          {
            setInt8: function (t, e) {
              Ri.call(this, t, (e << 24) >> 24);
            },
            setUint8: function (t, e) {
              Ri.call(this, t, (e << 24) >> 24);
            },
          },
          { unsafe: !0 }
        );
  } else
    (fi = function (t) {
      Ge(this, fi, "ArrayBuffer");
      var e = Ko(t);
      ui(this, { bytes: ni.call(new Array(e), 0), byteLength: e }),
        i || (this.byteLength = e);
    }),
      (si = function (t, e, r) {
        Ge(this, si, "DataView"), Ge(t, fi, "DataView");
        var n = ai(t).byteLength,
          o = ct(e);
        if (o < 0 || o > n) throw yi("Wrong offset");
        if (o + (r = void 0 === r ? n - o : Ot(r)) > n)
          throw yi("Wrong length");
        ui(this, { buffer: t, byteLength: r, byteOffset: o }),
          i ||
            ((this.buffer = t), (this.byteLength = r), (this.byteOffset = o));
      }),
      i &&
        (Ti(fi, "byteLength"),
        Ti(si, "buffer"),
        Ti(si, "byteLength"),
        Ti(si, "byteOffset")),
      Ne(si.prototype, {
        getInt8: function (t) {
          return (Si(this, 1, t)[0] << 24) >> 24;
        },
        getUint8: function (t) {
          return Si(this, 1, t)[0];
        },
        getInt16: function (t) {
          var e = Si(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
          return (((e[1] << 8) | e[0]) << 16) >> 16;
        },
        getUint16: function (t) {
          var e = Si(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
          return (e[1] << 8) | e[0];
        },
        getInt32: function (t) {
          return Ai(
            Si(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)
          );
        },
        getUint32: function (t) {
          return (
            Ai(Si(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>>
            0
          );
        },
        getFloat32: function (t) {
          return di(
            Si(this, 4, t, arguments.length > 1 ? arguments[1] : void 0),
            23
          );
        },
        getFloat64: function (t) {
          return di(
            Si(this, 8, t, arguments.length > 1 ? arguments[1] : void 0),
            52
          );
        },
        setInt8: function (t, e) {
          Oi(this, 1, t, vi, e);
        },
        setUint8: function (t, e) {
          Oi(this, 1, t, vi, e);
        },
        setInt16: function (t, e) {
          Oi(this, 2, t, gi, e, arguments.length > 2 ? arguments[2] : void 0);
        },
        setUint16: function (t, e) {
          Oi(this, 2, t, gi, e, arguments.length > 2 ? arguments[2] : void 0);
        },
        setInt32: function (t, e) {
          Oi(this, 4, t, bi, e, arguments.length > 2 ? arguments[2] : void 0);
        },
        setUint32: function (t, e) {
          Oi(this, 4, t, bi, e, arguments.length > 2 ? arguments[2] : void 0);
        },
        setFloat32: function (t, e) {
          Oi(this, 4, t, mi, e, arguments.length > 2 ? arguments[2] : void 0);
        },
        setFloat64: function (t, e) {
          Oi(this, 8, t, wi, e, arguments.length > 2 ? arguments[2] : void 0);
        },
      });
  pe(fi, "ArrayBuffer"), pe(si, "DataView");
  var Ii = { ArrayBuffer: fi, DataView: si },
    _i = function (t, e) {
      var r = (function (t) {
        var e = ct(t);
        if (e < 0) throw RangeError("The argument can't be less than 0");
        return e;
      })(t);
      if (r % e) throw RangeError("Wrong offset");
      return r;
    },
    Pi = Go.aTypedArrayConstructor,
    Bi = function (t) {
      var e,
        r,
        n,
        o,
        i,
        a,
        u = zt(t),
        c = arguments.length,
        f = c > 1 ? arguments[1] : void 0,
        s = void 0 !== f,
        l = Je(u);
      if (null != l && !ze(l))
        for (a = (i = l.call(u)).next, u = []; !(o = a.call(i)).done; )
          u.push(o.value);
      for (
        s && c > 2 && (f = Xe(f, arguments[2], 2)),
          r = Ot(u.length),
          n = new (Pi(this))(r),
          e = 0;
        r > e;
        e++
      )
        n[e] = s ? f(u[e], e) : u[e];
      return n;
    };
  e(function (t) {
    var e = Bt.f,
      r = Bn.forEach,
      o = K.get,
      u = K.set,
      c = h.f,
      f = At.f,
      s = Math.round,
      l = n.RangeError,
      y = Ii.ArrayBuffer,
      g = Ii.DataView,
      b = Go.NATIVE_ARRAY_BUFFER_VIEWS,
      A = Go.TYPED_ARRAY_TAG,
      m = Go.TypedArray,
      T = Go.TypedArrayPrototype,
      S = Go.aTypedArrayConstructor,
      O = Go.isTypedArray,
      E = function (t, e) {
        for (var r = 0, n = e.length, o = new (S(t))(n); n > r; ) o[r] = e[r++];
        return o;
      },
      j = function (t, e) {
        c(t, e, {
          get: function () {
            return o(this)[e];
          },
        });
      },
      M = function (t) {
        var e;
        return (
          t instanceof y ||
          "ArrayBuffer" == (e = et(t)) ||
          "SharedArrayBuffer" == e
        );
      },
      L = function (t, e) {
        return (
          O(t) && "symbol" != typeof e && e in t && String(+e) == String(e)
        );
      },
      x = function (t, e) {
        return L(t, (e = p(e, !0))) ? d(2, t[e]) : f(t, e);
      },
      R = function (t, e, r) {
        return !(L(t, (e = p(e, !0))) && a(r) && w(r, "value")) ||
          w(r, "get") ||
          w(r, "set") ||
          r.configurable ||
          (w(r, "writable") && !r.writable) ||
          (w(r, "enumerable") && !r.enumerable)
          ? c(t, e, r)
          : ((t[e] = r.value), t);
      };
    i
      ? (b ||
          ((At.f = x),
          (h.f = R),
          j(T, "buffer"),
          j(T, "byteOffset"),
          j(T, "byteLength"),
          j(T, "length")),
        Ht(
          { target: "Object", stat: !0, forced: !b },
          { getOwnPropertyDescriptor: x, defineProperty: R }
        ),
        (t.exports = function (t, i, f) {
          var p = t.match(/\d+$/)[0] / 8,
            h = t + (f ? "Clamped" : "") + "Array",
            d = "get" + t,
            w = "set" + t,
            S = n[h],
            j = S,
            L = j && j.prototype,
            x = {},
            R = function (t, e) {
              c(t, e, {
                get: function () {
                  return (function (t, e) {
                    var r = o(t);
                    return r.view[d](e * p + r.byteOffset, !0);
                  })(this, e);
                },
                set: function (t) {
                  return (function (t, e, r) {
                    var n = o(t);
                    f && (r = (r = s(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                      n.view[w](e * p + n.byteOffset, r, !0);
                  })(this, e, t);
                },
                enumerable: !0,
              });
            };
          b
            ? Xo &&
              ((j = i(function (t, e, r, n) {
                return (
                  Ge(t, j, h),
                  (function (t, e, r) {
                    var n, o;
                    return (
                      ve &&
                        "function" == typeof (n = e.constructor) &&
                        n !== r &&
                        a((o = n.prototype)) &&
                        o !== r.prototype &&
                        ve(t, o),
                      t
                    );
                  })(
                    a(e)
                      ? M(e)
                        ? void 0 !== n
                          ? new S(e, _i(r, p), n)
                          : void 0 !== r
                          ? new S(e, _i(r, p))
                          : new S(e)
                        : O(e)
                        ? E(j, e)
                        : Bi.call(j, e)
                      : new S(Ko(e)),
                    t,
                    j
                  )
                );
              })),
              ve && ve(j, m),
              r(e(S), function (t) {
                t in j || v(j, t, S[t]);
              }),
              (j.prototype = L))
            : ((j = i(function (t, e, r, n) {
                Ge(t, j, h);
                var o,
                  i,
                  c,
                  f = 0,
                  s = 0;
                if (a(e)) {
                  if (!M(e)) return O(e) ? E(j, e) : Bi.call(j, e);
                  (o = e), (s = _i(r, p));
                  var d = e.byteLength;
                  if (void 0 === n) {
                    if (d % p) throw l("Wrong length");
                    if ((i = d - s) < 0) throw l("Wrong length");
                  } else if ((i = Ot(n) * p) + s > d) throw l("Wrong length");
                  c = i / p;
                } else (c = Ko(e)), (o = new y((i = c * p)));
                for (
                  u(t, {
                    buffer: o,
                    byteOffset: s,
                    byteLength: i,
                    length: c,
                    view: new g(o),
                  });
                  f < c;

                )
                  R(t, f++);
              })),
              ve && ve(j, m),
              (L = j.prototype = fe(T))),
            L.constructor !== j && v(L, "constructor", j),
            A && v(L, A, h),
            (x[h] = j),
            Ht({ global: !0, forced: j != S, sham: !b }, x),
            "BYTES_PER_ELEMENT" in j || v(j, "BYTES_PER_ELEMENT", p),
            "BYTES_PER_ELEMENT" in L || v(L, "BYTES_PER_ELEMENT", p),
            We(h);
        }))
      : (t.exports = function () {});
  })("Uint8", function (t) {
    return function (e, r, n) {
      return t(this, e, r, n);
    };
  }),
    (0, Go.exportTypedArrayStaticMethod)("from", Bi, Xo);
  var Ci = Go.aTypedArrayConstructor;
  (0, Go.exportTypedArrayStaticMethod)(
    "of",
    function () {
      for (var t = 0, e = arguments.length, r = new (Ci(this))(e); e > t; )
        r[t] = arguments[t++];
      return r;
    },
    Xo
  );
  var Fi = Math.min,
    Ui =
      [].copyWithin ||
      function (t, e) {
        var r = zt(this),
          n = Ot(r.length),
          o = Mt(t, n),
          i = Mt(e, n),
          a = arguments.length > 2 ? arguments[2] : void 0,
          u = Fi((void 0 === a ? n : Mt(a, n)) - i, n - o),
          c = 1;
        for (
          i < o && o < i + u && ((c = -1), (i += u - 1), (o += u - 1));
          u-- > 0;

        )
          i in r ? (r[o] = r[i]) : delete r[o], (o += c), (i += c);
        return r;
      },
    Di = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("copyWithin", function (t, e) {
    return Ui.call(
      Di(this),
      t,
      e,
      arguments.length > 2 ? arguments[2] : void 0
    );
  });
  var ki = Bn.every,
    Ni = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("every", function (t) {
    return ki(Ni(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var Vi = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("fill", function (t) {
    return ni.apply(Vi(this), arguments);
  });
  var Wi = Bn.filter,
    Yi = Go.aTypedArray,
    Gi = Go.aTypedArrayConstructor;
  (0, Go.exportTypedArrayMethod)("filter", function (t) {
    for (
      var e = Wi(Yi(this), t, arguments.length > 1 ? arguments[1] : void 0),
        r = cr(this, this.constructor),
        n = 0,
        o = e.length,
        i = new (Gi(r))(o);
      o > n;

    )
      i[n] = e[n++];
    return i;
  });
  var qi = Bn.find,
    Hi = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("find", function (t) {
    return qi(Hi(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var zi = Bn.findIndex,
    Xi = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("findIndex", function (t) {
    return zi(Xi(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var Ki = Bn.forEach,
    Ji = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("forEach", function (t) {
    Ki(Ji(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var Qi = xt.includes,
    Zi = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("includes", function (t) {
    return Qi(Zi(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var $i = xt.indexOf,
    ta = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("indexOf", function (t) {
    return $i(ta(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var ea = Go.aTypedArray,
    ra = [].join;
  (0, Go.exportTypedArrayMethod)("join", function (t) {
    return ra.apply(ea(this), arguments);
  });
  var na = Math.min,
    oa = [].lastIndexOf,
    ia = !!oa && 1 / [1].lastIndexOf(1, -0) < 0,
    aa = zn("lastIndexOf"),
    ua = kn("indexOf", { ACCESSORS: !0, 1: 0 }),
    ca =
      ia || !aa || !ua
        ? function (t) {
            if (ia) return oa.apply(this, arguments) || 0;
            var e = gt(this),
              r = Ot(e.length),
              n = r - 1;
            for (
              arguments.length > 1 && (n = na(n, ct(arguments[1]))),
                n < 0 && (n = r + n);
              n >= 0;
              n--
            )
              if (n in e && e[n] === t) return n || 0;
            return -1;
          }
        : oa,
    fa = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("lastIndexOf", function (t) {
    return ca.apply(fa(this), arguments);
  });
  var sa = Bn.map,
    la = Go.aTypedArray,
    pa = Go.aTypedArrayConstructor;
  (0, Go.exportTypedArrayMethod)("map", function (t) {
    return sa(
      la(this),
      t,
      arguments.length > 1 ? arguments[1] : void 0,
      function (t, e) {
        return new (pa(cr(t, t.constructor)))(e);
      }
    );
  });
  var ya = Hn.left,
    ha = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("reduce", function (t) {
    return ya(
      ha(this),
      t,
      arguments.length,
      arguments.length > 1 ? arguments[1] : void 0
    );
  });
  var da = Hn.right,
    va = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("reduceRight", function (t) {
    return da(
      va(this),
      t,
      arguments.length,
      arguments.length > 1 ? arguments[1] : void 0
    );
  });
  var ga = Go.aTypedArray,
    ba = Go.exportTypedArrayMethod,
    Aa = Math.floor;
  ba("reverse", function () {
    for (var t, e = ga(this).length, r = Aa(e / 2), n = 0; n < r; )
      (t = this[n]), (this[n++] = this[--e]), (this[e] = t);
    return this;
  });
  var ma = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)(
    "set",
    function (t) {
      ma(this);
      var e = _i(arguments.length > 1 ? arguments[1] : void 0, 1),
        r = this.length,
        n = zt(t),
        o = Ot(n.length),
        i = 0;
      if (o + e > r) throw RangeError("Wrong length");
      for (; i < o; ) this[e + i] = n[i++];
    },
    o(function () {
      new Int8Array(1).set({});
    })
  );
  var wa = Go.aTypedArray,
    Ta = Go.aTypedArrayConstructor,
    Sa = [].slice;
  (0, Go.exportTypedArrayMethod)(
    "slice",
    function (t, e) {
      for (
        var r = Sa.call(wa(this), t, e),
          n = cr(this, this.constructor),
          o = 0,
          i = r.length,
          a = new (Ta(n))(i);
        i > o;

      )
        a[o] = r[o++];
      return a;
    },
    o(function () {
      new Int8Array(1).slice();
    })
  );
  var Oa = Bn.some,
    Ea = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("some", function (t) {
    return Oa(Ea(this), t, arguments.length > 1 ? arguments[1] : void 0);
  });
  var ja = Go.aTypedArray,
    Ma = [].sort;
  (0, Go.exportTypedArrayMethod)("sort", function (t) {
    return Ma.call(ja(this), t);
  });
  var La = Go.aTypedArray;
  (0, Go.exportTypedArrayMethod)("subarray", function (t, e) {
    var r = La(this),
      n = r.length,
      o = Mt(t, n);
    return new (cr(r, r.constructor))(
      r.buffer,
      r.byteOffset + o * r.BYTES_PER_ELEMENT,
      Ot((void 0 === e ? n : Mt(e, n)) - o)
    );
  });
  var xa = n.Int8Array,
    Ra = Go.aTypedArray,
    Ia = Go.exportTypedArrayMethod,
    _a = [].toLocaleString,
    Pa = [].slice,
    Ba =
      !!xa &&
      o(function () {
        _a.call(new xa(1));
      });
  Ia(
    "toLocaleString",
    function () {
      return _a.apply(Ba ? Pa.call(Ra(this)) : Ra(this), arguments);
    },
    o(function () {
      return [1, 2].toLocaleString() != new xa([1, 2]).toLocaleString();
    }) ||
      !o(function () {
        xa.prototype.toLocaleString.call([1, 2]);
      })
  );
  var Ca = Go.exportTypedArrayMethod,
    Fa = n.Uint8Array,
    Ua = (Fa && Fa.prototype) || {},
    Da = [].toString,
    ka = [].join;
  o(function () {
    Da.call({});
  }) &&
    (Da = function () {
      return ka.call(this);
    });
  var Na = Ua.toString != Da;
  Ca("toString", Da, Na);
  var Va = R("iterator"),
    Wa = n.Uint8Array,
    Ya = Ie.values,
    Ga = Ie.keys,
    qa = Ie.entries,
    Ha = Go.aTypedArray,
    za = Go.exportTypedArrayMethod,
    Xa = Wa && Wa.prototype[Va],
    Ka = !!Xa && ("values" == Xa.name || null == Xa.name),
    Ja = function () {
      return Ya.call(Ha(this));
    };
  za("entries", function () {
    return qa.call(Ha(this));
  }),
    za("keys", function () {
      return Ga.call(Ha(this));
    }),
    za("values", Ja, !Ka),
    za(Va, Ja, !Ka);
  n.Uint8Array;
  var Qa = (function () {
      return "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : this;
    })(),
    Za =
      Qa.BlobBuilder ||
      Qa.WebKitBlobBuilder ||
      Qa.MSBlobBuilder ||
      Qa.MozBlobBuilder;
  Qa.URL =
    Qa.URL ||
    Qa.webkitURL ||
    function (t, e) {
      return ((e = document.createElement("a")).href = t), e;
    };
  var $a = Qa.Blob,
    tu = URL.createObjectURL,
    eu = URL.revokeObjectURL,
    ru = Qa.Symbol && Qa.Symbol.toStringTag,
    nu = !1,
    ou = !1,
    iu = !!Qa.ArrayBuffer,
    au = Za && Za.prototype.append && Za.prototype.getBlob;
  try {
    (nu = 2 === new Blob(["ä"]).size),
      (ou = 2 === new Blob([new Uint8Array([1, 2])]).size);
  } catch (t) {}
  function uu(t) {
    return t.map(function (t) {
      if (t.buffer instanceof ArrayBuffer) {
        var e = t.buffer;
        if (t.byteLength !== e.byteLength) {
          var r = new Uint8Array(t.byteLength);
          r.set(new Uint8Array(e, t.byteOffset, t.byteLength)), (e = r.buffer);
        }
        return e;
      }
      return t;
    });
  }
  function cu(t, e) {
    e = e || {};
    var r = new Za();
    return (
      uu(t).forEach(function (t) {
        r.append(t);
      }),
      e.type ? r.getBlob(e.type) : r.getBlob()
    );
  }
  function fu(t, e) {
    return new $a(uu(t), e || {});
  }
  if (
    (Qa.Blob &&
      ((cu.prototype = Blob.prototype), (fu.prototype = Blob.prototype)),
    ru)
  )
    try {
      (File.prototype[ru] = "File"),
        (Blob.prototype[ru] = "Blob"),
        (FileReader.prototype[ru] = "FileReader");
    } catch (t) {}
  function su() {
    var t =
        !!Qa.ActiveXObject ||
        ("-ms-scroll-limit" in document.documentElement.style &&
          "-ms-ime-align" in document.documentElement.style),
      e = Qa.XMLHttpRequest && Qa.XMLHttpRequest.prototype.send;
    t &&
      e &&
      (XMLHttpRequest.prototype.send = function (t) {
        t instanceof Blob
          ? (this.setRequestHeader("Content-Type", t.type), e.call(this, t))
          : e.call(this, t);
      });
    try {
      new File([], "");
    } catch (t) {
      try {
        var r = new Function(
          'class File extends Blob {constructor(chunks, name, opts) {opts = opts || {};super(chunks, opts || {});this.name = name;this.lastModifiedDate = opts.lastModified ? new Date(opts.lastModified) : new Date;this.lastModified = +this.lastModifiedDate;}};return new File([], ""), File'
        )();
        Qa.File = r;
      } catch (t) {
        r = function (t, e, r) {
          var n = new Blob(t, r),
            o =
              r && void 0 !== r.lastModified
                ? new Date(r.lastModified)
                : new Date();
          return (
            (n.name = e),
            (n.lastModifiedDate = o),
            (n.lastModified = +o),
            (n.toString = function () {
              return "[object File]";
            }),
            ru && (n[ru] = "File"),
            n
          );
        };
        Qa.File = r;
      }
    }
  }
  nu
    ? (su(), (Qa.Blob = ou ? Qa.Blob : fu))
    : au
    ? (su(), (Qa.Blob = cu))
    : (function () {
        function t(t) {
          for (var e = [], r = 0; r < t.length; r++) {
            var n = t.charCodeAt(r);
            n < 128
              ? e.push(n)
              : n < 2048
              ? e.push(192 | (n >> 6), 128 | (63 & n))
              : n < 55296 || n >= 57344
              ? e.push(224 | (n >> 12), 128 | ((n >> 6) & 63), 128 | (63 & n))
              : (r++,
                (n = 65536 + (((1023 & n) << 10) | (1023 & t.charCodeAt(r)))),
                e.push(
                  240 | (n >> 18),
                  128 | ((n >> 12) & 63),
                  128 | ((n >> 6) & 63),
                  128 | (63 & n)
                ));
          }
          return e;
        }
        function e(t) {
          var e, r, n, o, i, a;
          for (e = "", n = t.length, r = 0; r < n; )
            switch ((o = t[r++]) >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                e += String.fromCharCode(o);
                break;
              case 12:
              case 13:
                (i = t[r++]),
                  (e += String.fromCharCode(((31 & o) << 6) | (63 & i)));
                break;
              case 14:
                (i = t[r++]),
                  (a = t[r++]),
                  (e += String.fromCharCode(
                    ((15 & o) << 12) | ((63 & i) << 6) | ((63 & a) << 0)
                  ));
            }
          return e;
        }
        function r(t) {
          for (
            var e = new Array(t.byteLength),
              r = new Uint8Array(t),
              n = e.length;
            n--;

          )
            e[n] = r[n];
          return e;
        }
        function n(t) {
          for (
            var e =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              r = [],
              n = 0;
            n < t.length;
            n += 3
          ) {
            var o = t[n],
              i = n + 1 < t.length,
              a = i ? t[n + 1] : 0,
              u = n + 2 < t.length,
              c = u ? t[n + 2] : 0,
              f = o >> 2,
              s = ((3 & o) << 4) | (a >> 4),
              l = ((15 & a) << 2) | (c >> 6),
              p = 63 & c;
            u || ((p = 64), i || (l = 64)), r.push(e[f], e[s], e[l], e[p]);
          }
          return r.join("");
        }
        var o =
          Object.create ||
          function (t) {
            function e() {}
            return (e.prototype = t), new e();
          };
        if (iu)
          var i = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            a =
              ArrayBuffer.isView ||
              function (t) {
                return t && i.indexOf(Object.prototype.toString.call(t)) > -1;
              };
        function u(e, n) {
          for (var o = 0, i = (e = e || []).length; o < i; o++) {
            var c = e[o];
            c instanceof u
              ? (e[o] = c._buffer)
              : "string" == typeof c
              ? (e[o] = t(c))
              : iu && (ArrayBuffer.prototype.isPrototypeOf(c) || a(c))
              ? (e[o] = r(c))
              : iu && (f = c) && DataView.prototype.isPrototypeOf(f)
              ? (e[o] = r(c.buffer))
              : (e[o] = t(String(c)));
          }
          var f;
          (this._buffer = [].concat.apply([], e)),
            (this.size = this._buffer.length),
            (this.type = (n && n.type) || "");
        }
        function c(t, e, r) {
          r = r || {};
          var n = u.call(this, t, r) || this;
          return (
            (n.name = e),
            (n.lastModifiedDate = r.lastModified
              ? new Date(r.lastModified)
              : new Date()),
            (n.lastModified = +n.lastModifiedDate),
            n
          );
        }
        if (
          ((u.prototype.slice = function (t, e, r) {
            return new u(
              [this._buffer.slice(t || 0, e || this._buffer.length)],
              { type: r }
            );
          }),
          (u.prototype.toString = function () {
            return "[object Blob]";
          }),
          (c.prototype = o(u.prototype)),
          (c.prototype.constructor = c),
          Object.setPrototypeOf)
        )
          Object.setPrototypeOf(c, u);
        else
          try {
            c.__proto__ = u;
          } catch (t) {}
        function f() {
          if (!(this instanceof f))
            throw new TypeError(
              "Failed to construct 'FileReader': Please use the 'new' operator, this DOM object constructor cannot be called as a function."
            );
          var t = document.createDocumentFragment();
          (this.addEventListener = t.addEventListener),
            (this.dispatchEvent = function (e) {
              var r = this["on" + e.type];
              "function" == typeof r && r(e), t.dispatchEvent(e);
            }),
            (this.removeEventListener = t.removeEventListener);
        }
        function s(t, e, r) {
          if (!(e instanceof u))
            throw new TypeError(
              "Failed to execute '" +
                r +
                "' on 'FileReader': parameter 1 is not of type 'Blob'."
            );
          (t.result = ""),
            setTimeout(function () {
              (this.readyState = f.LOADING),
                t.dispatchEvent(new Event("load")),
                t.dispatchEvent(new Event("loadend"));
            });
        }
        (c.prototype.toString = function () {
          return "[object File]";
        }),
          (f.EMPTY = 0),
          (f.LOADING = 1),
          (f.DONE = 2),
          (f.prototype.error = null),
          (f.prototype.onabort = null),
          (f.prototype.onerror = null),
          (f.prototype.onload = null),
          (f.prototype.onloadend = null),
          (f.prototype.onloadstart = null),
          (f.prototype.onprogress = null),
          (f.prototype.readAsDataURL = function (t) {
            s(this, t, "readAsDataURL"),
              (this.result = "data:" + t.type + ";base64," + n(t._buffer));
          }),
          (f.prototype.readAsText = function (t) {
            s(this, t, "readAsText"), (this.result = e(t._buffer));
          }),
          (f.prototype.readAsArrayBuffer = function (t) {
            s(this, t, "readAsText"), (this.result = t._buffer.slice());
          }),
          (f.prototype.abort = function () {}),
          (URL.createObjectURL = function (t) {
            return t instanceof u
              ? "data:" + t.type + ";base64," + n(t._buffer)
              : tu.call(URL, t);
          }),
          (URL.revokeObjectURL = function (t) {
            eu && eu.call(URL, t);
          });
        var l = Qa.XMLHttpRequest && Qa.XMLHttpRequest.prototype.send;
        l &&
          (XMLHttpRequest.prototype.send = function (t) {
            t instanceof u
              ? (this.setRequestHeader("Content-Type", t.type),
                l.call(this, e(t._buffer)))
              : l.call(this, t);
          }),
          (Qa.FileReader = f),
          (Qa.File = c),
          (Qa.Blob = u);
      })();
  var lu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  void 0 === Qa.btoa &&
    (Qa.btoa = function (t) {
      var e,
        r,
        n,
        o,
        i,
        a = 0,
        u = 0,
        c = "",
        f = [];
      if (!t) return t;
      do {
        (e =
          ((i =
            (t.charCodeAt(a++) << 16) |
            (t.charCodeAt(a++) << 8) |
            t.charCodeAt(a++)) >>
            18) &
          63),
          (r = (i >> 12) & 63),
          (n = (i >> 6) & 63),
          (o = 63 & i),
          (f[u++] = lu.charAt(e) + lu.charAt(r) + lu.charAt(n) + lu.charAt(o));
      } while (a < t.length);
      c = f.join("");
      var s = t.length % 3;
      return (s ? c.slice(0, s - 3) : c) + "===".slice(s || 3);
    }),
    void 0 === Qa.atob &&
      (Qa.atob = function (t) {
        var e,
          r,
          n,
          o,
          i,
          a,
          u = 0,
          c = 0,
          f = [];
        if (!t) return t;
        t += "";
        do {
          (e =
            ((a =
              (lu.indexOf(t.charAt(u++)) << 18) |
              (lu.indexOf(t.charAt(u++)) << 12) |
              ((o = lu.indexOf(t.charAt(u++))) << 6) |
              (i = lu.indexOf(t.charAt(u++)))) >>
              16) &
            255),
            (r = (a >> 8) & 255),
            (n = 255 & a),
            (f[c++] =
              64 == o
                ? String.fromCharCode(e)
                : 64 == i
                ? String.fromCharCode(e, r)
                : String.fromCharCode(e, r, n));
        } while (u < t.length);
        return f.join("");
      });
});
