_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [20],
  {
    "/ium": function (e, t, a) {
      "use strict";
      var s = a("nKUr"),
        n = (a("q1tI"), a("KSab")),
        c = a("7vrA"),
        i = a("3Z9Z"),
        r = a("JI6e");
      t.a = function () {
        var e = n.b.sectionContent,
          t = n.b.button,
          a = n.b.gallery;
        return Object(s.jsx)("section", {
          className: "commonSection ab_agency",
          children: Object(s.jsx)(c.a, {
            children: Object(s.jsxs)(i.a, {
              children: [
                Object(s.jsxs)(r.a, {
                  lg: 6,
                  md: 6,
                  sm: 12,
                  className: "PR_79",
                  children: [
                    Object(s.jsx)("h4", {
                      className: "sub_title",
                      children: e.subTitle,
                    }),
                    Object(s.jsx)("h2", {
                      className: "sec_title MB_45",
                      children: e.title,
                    }),
                    Object(s.jsx)("p", {
                      className: "sec_desc",
                      children: e.text,
                    }),
                    Object(s.jsx)("a", {
                      className: "common_btn red_bg",
                      href: t.url,
                      children: Object(s.jsx)("span", { children: t.label }),
                    }),
                  ],
                }),
                Object(s.jsx)(r.a, {
                  lg: 6,
                  md: 6,
                  sm: 12,
                  children: a.map(function (e, t) {
                    return Object(s.jsx)(
                      "div",
                      {
                        className: "ab_img".concat(t + 1),
                        children: Object(s.jsx)("img", { src: e, alt: "" }),
                      },
                      t
                    );
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    "2fLP": function (e, t, a) {
      "use strict";
      var s = a("nKUr"),
        n = (a("q1tI"), a("7vrA")),
        c = a("3Z9Z"),
        i = a("JI6e"),
        r = a("0KWo"),
        l = a("k4Hf"),
        o = a("KSab");
      t.a = function () {
        return Object(s.jsx)("section", {
          className: "commonSection blog",
          children: Object(s.jsxs)(n.a, {
            children: [
              Object(s.jsx)(c.a, {
                children: Object(s.jsx)(i.a, {
                  lg: 12,
                  className: "text-center",
                  children: Object(s.jsx)(r.a, { data: o.e }),
                }),
              }),
              Object(s.jsx)(c.a, {
                children: o.d.slice(0, 3).map(function (e, t) {
                  return Object(s.jsx)(
                    i.a,
                    {
                      lg: 4,
                      sm: 12,
                      md: 6,
                      children: Object(s.jsx)(l.a, { data: e }),
                    },
                    t
                  );
                }),
              }),
            ],
          }),
        });
      };
    },
    "42op": function (e, t, a) {
      "use strict";
      var s = a("cKS0");
      function n() {
        return (n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var s in a)
                Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
            }
            return e;
          }).apply(this, arguments);
      }
      var c = {
        setTranslate: function () {
          for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
            var s = e.slides.eq(a),
              n = -s[0].swiperSlideOffset;
            e.params.virtualTranslate || (n -= e.translate);
            var c = 0;
            e.isHorizontal() || ((c = n), (n = 0));
            var i = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(s[0].progress), 0)
              : 1 + Math.min(Math.max(s[0].progress, -1), 0);
            s.css({ opacity: i }).transform(
              "translate3d(" + n + "px, " + c + "px, 0px)"
            );
          }
        },
        setTransition: function (e) {
          var t = this,
            a = t.slides,
            s = t.$wrapperEl;
          if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
            var n = !1;
            a.transitionEnd(function () {
              if (!n && t && !t.destroyed) {
                (n = !0), (t.animating = !1);
                for (
                  var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                  a < e.length;
                  a += 1
                )
                  s.trigger(e[a]);
              }
            });
          }
        },
      };
      t.a = {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          Object(s.a)(this, { fadeEffect: n({}, c) });
        },
        on: {
          beforeInit: function (e) {
            if ("fade" === e.params.effect) {
              e.classNames.push(e.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              Object(s.c)(e.params, t), Object(s.c)(e.originalParams, t);
            }
          },
          setTranslate: function (e) {
            "fade" === e.params.effect && e.fadeEffect.setTranslate();
          },
          setTransition: function (e, t) {
            "fade" === e.params.effect && e.fadeEffect.setTransition(t);
          },
        },
      };
    },
    "5du1": function (e, t, a) {
      "use strict";
      var s = a("nKUr"),
        n = a("q1tI"),
        c = a("KSab"),
        i = a("60Bi"),
        r = a.n(i),
        l = a("0KWo"),
        o = (a("HP2+"), a("7vrA")),
        j = a("3Z9Z"),
        d = a("JI6e");
      t.a = function () {
        var e = Object(n.useState)(!1),
          t = e[0],
          a = e[1],
          i = c.I.sectionContent,
          b = c.I.video;
        return Object(s.jsxs)(n.Fragment, {
          children: [
            Object(s.jsx)("section", {
              className: "commonSection what_wedo pb-0 border-bottom-0",
              children: Object(s.jsxs)(o.a, {
                children: [
                  Object(s.jsx)(j.a, {
                    children: Object(s.jsx)(d.a, {
                      lg: 12,
                      className: "text-center",
                      children: Object(s.jsx)(l.a, { data: i }),
                    }),
                  }),
                  Object(s.jsx)(j.a, {
                    children: Object(s.jsx)(d.a, {
                      lg: 12,
                      children: Object(s.jsxs)("div", {
                        className: "videoWrap mb-0",
                        children: [
                          Object(s.jsx)("img", { src: b.image, alt: "" }),
                          Object(s.jsxs)("div", {
                            className: "play_video",
                            children: [
                              Object(s.jsx)("a", {
                                className: "video_popup",
                                onClick: function (e) {
                                  e.preventDefault(), a(!0);
                                },
                                href: "#",
                                children: Object(s.jsx)("i", {
                                  className: "fa fa-play",
                                }),
                              }),
                              Object(s.jsx)("h2", { children: b.title }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
            Object(s.jsx)(r.a, {
              channel: "youtube",
              autoplay: !0,
              isOpen: t,
              videoId: b.ID,
              onClose: function () {
                return a(!1);
              },
            }),
          ],
        });
      };
    },
    CViU: function (e, t, a) {
      "use strict";
      var s = a("nKUr");
      a("q1tI");
      t.a = function (e) {
        var t = e.data,
          a = t.image,
          n = t.title,
          c = t.categories,
          i = t.url;
        return Object(s.jsxs)("div", {
          className: "singlefolio",
          children: [
            Object(s.jsx)("img", { src: a, alt: n }),
            Object(s.jsxs)("div", {
              className: "folioHover",
              children: [
                Object(s.jsx)("a", {
                  className: "cate",
                  href: "#",
                  children: c.map(function (e) {
                    return e + ", ";
                  }),
                }),
                Object(s.jsx)("h4", {
                  children: Object(s.jsx)("a", { href: i, children: n }),
                }),
              ],
            }),
          ],
        });
      };
    },
    RFKG: function (e, t, a) {
      "use strict";
      var s = a("nKUr"),
        n = (a("q1tI"), a("7vrA")),
        c = a("3Z9Z"),
        i = a("JI6e"),
        r = a("0KWo"),
        l = a("CViU"),
        o = a("KSab");
      t.a = function () {
        var e = o.u.sectionContent;
        return Object(s.jsx)("section", {
          className: "commonSection porfolio",
          children: Object(s.jsxs)(n.a, {
            children: [
              Object(s.jsx)(c.a, {
                children: Object(s.jsx)(i.a, {
                  lg: 12,
                  className: "text-center",
                  children: Object(s.jsx)(r.a, { data: e }),
                }),
              }),
              Object(s.jsx)(c.a, {
                id: "Grid",
                children: Object(s.jsx)("div", {
                  className: "custom",
                  children: Object(s.jsx)(c.a, {
                    children: o.s.map(function (e, t) {
                      return Object(s.jsx)(
                        i.a,
                        {
                          lg: 4,
                          md: 6,
                          sm: 12,
                          children: Object(s.jsx)(l.a, { data: e }),
                        },
                        t
                      );
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    RNiq: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = a("nKUr"),
        n = (a("q1tI"), a("CafY")),
        c = a("wgpl"),
        i = a("aIN1"),
        r = a("2fLP"),
        l = a("fyCe"),
        o = a("hGDJ"),
        j = a("3JPB"),
        d = a("m53H"),
        b = a("mIR7"),
        m = a("RFKG"),
        h = a("Oqhm"),
        x = a("kn39"),
        O = a("/ium"),
        u = a("5du1"),
        f = a("LvMP"),
        v = a("A8kL"),
        p = a("5fB9"),
        g = a("rePB"),
        N = a("YFqc"),
        C = a.n(N),
        E = a("xqva"),
        _ = a("Ndxo"),
        w = a("bTu8"),
        y = a("0Xqd"),
        k = a("g0Ox"),
        P = a("42op"),
        I = a("7vrA"),
        K = a("3Z9Z"),
        q = a("JI6e"),
        S = a("KSab");
      function T(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, s);
        }
        return a;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(a), !0).forEach(function (t) {
                Object(g.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : T(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      w.a.use([y.a, k.a, P.a]);
      var $ = function () {
        return Object(s.jsx)("section", {
          className: "main-slider",
          children: Object(s.jsxs)(
            E.a,
            Z(
              Z(
                {},
                {
                  slidesPerView: 1,
                  loop: !0,
                  effect: "fade",
                  navigation: {
                    nextEl: "#main-slider-next",
                    prevEl: "#main-slider-prev",
                  },
                  autoplay: { delay: 5e3 },
                }
              ),
              {},
              {
                children: [
                  S.A.map(function (e, t) {
                    var a = e.image,
                      n = e.subTitle,
                      c = e.title,
                      i = e.button;
                    return Object(s.jsxs)(
                      _.a,
                      {
                        children: [
                          Object(s.jsx)("div", {
                            className: "image-layer",
                            style: { backgroundImage: "url(".concat(a, ")") },
                          }),
                          Object(s.jsx)(I.a, {
                            children: Object(s.jsx)(K.a, {
                              children: Object(s.jsxs)(q.a, {
                                lg: 12,
                                className: "text-center",
                                children: [
                                  Object(s.jsx)("p", {
                                    className: "main-slider__subtext",
                                    children: n,
                                  }),
                                  Object(s.jsx)("h3", {
                                    className: "main-slider__title",
                                    children: c,
                                  }),
                                  Object(s.jsx)(C.a, {
                                    href: i.url,
                                    children: Object(s.jsx)("a", {
                                      className: "common_btn",
                                      children: Object(s.jsx)("span", {
                                        children: i.label,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      },
                      t
                    );
                  }),
                  Object(s.jsx)("div", {
                    className: "swiper-button-prev",
                    id: "main-slider-prev",
                    children: Object(s.jsx)("i", {
                      className: "fa fa-angle-left",
                    }),
                  }),
                  Object(s.jsx)("div", {
                    className: "swiper-button-next",
                    id: "main-slider-next",
                    children: Object(s.jsx)("i", {
                      className: "fa fa-angle-right",
                    }),
                  }),
                ],
              }
            )
          ),
        });
      };
      t.default = function () {
        return Object(s.jsx)(p.b, {
          children: Object(s.jsx)(v.b, {
            children: Object(s.jsxs)(n.a, {
              PageTitle: "Home One",
              children: [
                Object(s.jsx)(f.a, {}),
                Object(s.jsx)($, {}),
                Object(s.jsx)(x.a, {}),
                Object(s.jsx)(O.a, {}),
                Object(s.jsx)(u.a, {}),
                Object(s.jsx)(h.a, {}),
                Object(s.jsx)(m.a, {}),
                Object(s.jsx)(d.a, {}),
                Object(s.jsx)(b.a, {}),
                Object(s.jsx)(j.a, {}),
                Object(s.jsx)(o.a, {}),
                Object(s.jsx)(l.a, {}),
                Object(s.jsx)(r.a, {}),
                Object(s.jsx)(c.a, { extraClassName: "ready" }),
                Object(s.jsx)(i.a, {}),
              ],
            }),
          }),
        });
      };
    },
    fyCe: function (e, t, a) {
      "use strict";
      var s = a("nKUr"),
        n = (a("q1tI"), a("7vrA")),
        c = a("3Z9Z"),
        i = a("JI6e"),
        r = a("KSab");
      t.a = function () {
        var e = r.r.iconName,
          t = r.r.title,
          a = r.r.specialText,
          l = r.r.text;
        return Object(s.jsx)("section", {
          className: "commonSection testimonial",
          children: Object(s.jsx)(n.a, {
            children: Object(s.jsx)(c.a, {
              children: Object(s.jsx)(i.a, {
                lg: { span: 10, offset: 1 },
                sm: 12,
                className: "text-center",
                children: Object(s.jsxs)("div", {
                  className: "testimonial_content",
                  children: [
                    Object(s.jsx)("div", {
                      className: "testi_icon",
                      children: Object(s.jsx)("i", { className: e }),
                    }),
                    Object(s.jsxs)("h2", {
                      children: [t, Object(s.jsx)("span", { children: a })],
                    }),
                    Object(s.jsx)("p", { children: l }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
    g0Ox: function (e, t, a) {
      "use strict";
      var s = a("Jq2x"),
        n = a("cKS0");
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var s in a)
                Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s]);
            }
            return e;
          }).apply(this, arguments);
      }
      var i = {
        update: function () {
          var e = this,
            t = e.params.navigation;
          if (!e.params.loop) {
            var a = e.navigation,
              s = a.$nextEl,
              n = a.$prevEl;
            n &&
              n.length > 0 &&
              (e.isBeginning
                ? n.addClass(t.disabledClass)
                : n.removeClass(t.disabledClass),
              n[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass)),
              s &&
                s.length > 0 &&
                (e.isEnd
                  ? s.addClass(t.disabledClass)
                  : s.removeClass(t.disabledClass),
                s[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](t.lockClass));
          }
        },
        onPrevClick: function (e) {
          var t = this;
          e.preventDefault(),
            (t.isBeginning && !t.params.loop) || t.slidePrev();
        },
        onNextClick: function (e) {
          var t = this;
          e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
        },
        init: function () {
          var e,
            t,
            a = this,
            c = a.params.navigation;
          (c.nextEl || c.prevEl) &&
            (c.nextEl &&
              ((e = Object(s.a)(c.nextEl)),
              a.params.uniqueNavElements &&
                "string" === typeof c.nextEl &&
                e.length > 1 &&
                1 === a.$el.find(c.nextEl).length &&
                (e = a.$el.find(c.nextEl))),
            c.prevEl &&
              ((t = Object(s.a)(c.prevEl)),
              a.params.uniqueNavElements &&
                "string" === typeof c.prevEl &&
                t.length > 1 &&
                1 === a.$el.find(c.prevEl).length &&
                (t = a.$el.find(c.prevEl))),
            e && e.length > 0 && e.on("click", a.navigation.onNextClick),
            t && t.length > 0 && t.on("click", a.navigation.onPrevClick),
            Object(n.c)(a.navigation, {
              $nextEl: e,
              nextEl: e && e[0],
              $prevEl: t,
              prevEl: t && t[0],
            }));
        },
        destroy: function () {
          var e = this,
            t = e.navigation,
            a = t.$nextEl,
            s = t.$prevEl;
          a &&
            a.length &&
            (a.off("click", e.navigation.onNextClick),
            a.removeClass(e.params.navigation.disabledClass)),
            s &&
              s.length &&
              (s.off("click", e.navigation.onPrevClick),
              s.removeClass(e.params.navigation.disabledClass));
        },
      };
      t.a = {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          Object(n.a)(this, { navigation: c({}, i) });
        },
        on: {
          init: function (e) {
            e.navigation.init(), e.navigation.update();
          },
          toEdge: function (e) {
            e.navigation.update();
          },
          fromEdge: function (e) {
            e.navigation.update();
          },
          destroy: function (e) {
            e.navigation.destroy();
          },
          click: function (e, t) {
            var a,
              n = e.navigation,
              c = n.$nextEl,
              i = n.$prevEl;
            !e.params.navigation.hideOnClick ||
              Object(s.a)(t.target).is(i) ||
              Object(s.a)(t.target).is(c) ||
              (c
                ? (a = c.hasClass(e.params.navigation.hiddenClass))
                : i && (a = i.hasClass(e.params.navigation.hiddenClass)),
              !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"),
              c && c.toggleClass(e.params.navigation.hiddenClass),
              i && i.toggleClass(e.params.navigation.hiddenClass));
          },
        },
      };
    },
    k4Hf: function (e, t, a) {
      "use strict";
      var s = a("nKUr"),
        n = (a("q1tI"), a("YFqc")),
        c = a.n(n);
      t.a = function (e) {
        var t = e.data,
          a = t.image,
          n = t.title,
          i = t.url,
          r = t.date;
        return Object(s.jsxs)("div", {
          className: "latestBlogItem",
          children: [
            Object(s.jsx)("div", {
              className: "lbi_thumb",
              children: Object(s.jsx)("img", { src: a, alt: n }),
            }),
            Object(s.jsxs)("div", {
              className: "lbi_details",
              children: [
                Object(s.jsx)(c.a, {
                  href: i,
                  children: Object(s.jsx)("a", {
                    className: "lbid_date",
                    children: r,
                  }),
                }),
                Object(s.jsx)("h2", {
                  children: Object(s.jsx)(c.a, {
                    href: i,
                    children: Object(s.jsx)("a", { children: n }),
                  }),
                }),
                Object(s.jsx)(c.a, {
                  href: i,
                  children: Object(s.jsx)("a", {
                    className: "learnM",
                    children: "Learn More",
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    kn39: function (e, t, a) {
      "use strict";
      var s = a("nKUr"),
        n = (a("q1tI"), a("7vrA")),
        c = a("3Z9Z"),
        i = a("JI6e"),
        r = a("KSab"),
        l = a("YFqc"),
        o = a.n(l),
        j = function (e) {
          var t = e.data,
            a = t.url,
            n = t.iconName,
            c = t.title;
          return Object(s.jsx)(o.a, {
            href: a,
            children: Object(s.jsx)("a", {
              className: "icon_box_1 text-center",
              children: Object(s.jsxs)("div", {
                className: "flipper",
                children: [
                  Object(s.jsxs)("div", {
                    className: "front",
                    children: [
                      Object(s.jsx)("i", { className: n }),
                      Object(s.jsx)("h3", { children: c }),
                    ],
                  }),
                  Object(s.jsxs)("div", {
                    className: "back",
                    children: [
                      Object(s.jsx)("i", { className: n }),
                      Object(s.jsx)("h3", { children: c }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      t.a = function () {
        var e = r.z.sectionContent,
          t = r.z.posts,
          a = e.title,
          l = e.subTitle,
          o = e.text;
        return Object(s.jsx)("section", {
          className: "service_section commonSection",
          children: Object(s.jsxs)(n.a, {
            children: [
              Object(s.jsx)(c.a, {
                children: Object(s.jsxs)(i.a, {
                  lg: 12,
                  className: "text-center",
                  children: [
                    Object(s.jsx)("h4", {
                      className: "sub_title red_color",
                      children: l,
                    }),
                    Object(s.jsx)("h2", {
                      className: "sec_title white",
                      children: a,
                    }),
                    Object(s.jsx)("p", {
                      className: "sec_desc color_aaa",
                      children: o,
                    }),
                  ],
                }),
              }),
              Object(s.jsx)(c.a, {
                className: "custom_column",
                children: t.map(function (e, t) {
                  return Object(s.jsx)(
                    i.a,
                    {
                      lg: 3,
                      md: 6,
                      sm: 12,
                      children: Object(s.jsx)(j, { data: e }),
                    },
                    t
                  );
                }),
              }),
            ],
          }),
        });
      };
    },
    vlRD: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a("RNiq");
        },
      ]);
    },
    wgpl: function (e, t, a) {
      "use strict";
      var s = a("nKUr"),
        n = (a("q1tI"), a("YFqc")),
        c = a.n(n);
      t.a = function (e) {
        var t = e.extraClassName,
          a = e.buttonClass;
        return Object(s.jsx)("section", {
          className: "commonSection ".concat(t),
          children: Object(s.jsx)("div", {
            className: "container",
            children: Object(s.jsxs)("div", {
              className: "row",
              children: [
                Object(s.jsx)("div", {
                  className: "col-lg-9 col-sm-8 col-md-9",
                  children: Object(s.jsx)("h2", {
                    className: "sec_title white",
                    children: "Let's Get Your Project Started!",
                  }),
                }),
                Object(s.jsx)("div", {
                  className: "col-lg-3  col-sm-4 col-md-3 text-right",
                  children: Object(s.jsx)(c.a, {
                    href: "/contact",
                    children: Object(s.jsx)("a", {
                      className: "common_btn ".concat(a),
                      children: Object(s.jsx)("span", {
                        children: "Contact with us",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
  },
  [["vlRD", 0, 2, 1, 3, 4, 5, 7, 6, 8]],
]);
