_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [14],
  {
    Juyh: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("nKUr"),
        c = t("q1tI"),
        i = t("aIN1"),
        n = t("CafY"),
        r = t("TgFl"),
        l = t("KSab"),
        d = function () {
          var e = l.a.sectionContent,
            s = l.a.gallery,
            t = l.a.counter;
          return Object(a.jsx)("section", {
            className: "commonSection",
            children: Object(a.jsx)("div", {
              className: "container",
              children: Object(a.jsxs)("div", {
                className: "row",
                children: [
                  Object(a.jsxs)("div", {
                    className: "col-lg-6 col-sm-12 col-md-6",
                    children: [
                      Object(a.jsx)("h4", {
                        className: "sub_title",
                        children: e.subTitle,
                      }),
                      Object(a.jsx)("h2", {
                        className: "sec_title",
                        children: e.title,
                      }),
                    ],
                  }),
                  Object(a.jsx)("div", {
                    className: "col-lg-6 col-sm-12 col-md-6",
                    children: Object(a.jsx)("div", {
                      className: "agency_img1",
                      children: Object(a.jsx)("img", { src: s[0], alt: "" }),
                    }),
                  }),
                  Object(a.jsxs)("div", {
                    className: "col-lg-12 col-sm-12",
                    children: [
                      Object(a.jsx)("div", {
                        className: "agency_img2",
                        children: Object(a.jsx)("img", { src: s[1], alt: "" }),
                      }),
                      Object(a.jsxs)("div", {
                        className: "compay_date",
                        children: [
                          Object(a.jsx)("h5", { children: t.title }),
                          Object(a.jsx)("h2", { children: t.number }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        o = t("wgpl"),
        j = t("3JPB"),
        b = t("7vrA"),
        h = t("3Z9Z"),
        m = t("JI6e"),
        u = t("0KWo"),
        p = t("60Bi"),
        x = t.n(p),
        O =
          (t("HP2+"),
          function () {
            var e = Object(c.useState)(!1),
              s = e[0],
              t = e[1],
              i = l.H.sectionContent,
              n = l.H.video;
            return Object(a.jsxs)(c.Fragment, {
              children: [
                Object(a.jsxs)("section", {
                  className: "commonSection our_work",
                  children: [
                    Object(a.jsxs)("div", {
                      className: "videoWrap_2",
                      children: [
                        Object(a.jsx)("img", { src: n.image, alt: n.title }),
                        Object(a.jsxs)("div", {
                          className: "play_video",
                          children: [
                            Object(a.jsx)("a", {
                              onClick: function (e) {
                                e.preventDefault(), t(!0);
                              },
                              href: "#",
                              className: "video_popup",
                              children: Object(a.jsx)("i", {
                                className: "fa fa-play",
                              }),
                            }),
                            Object(a.jsx)("h2", { children: n.title }),
                          ],
                        }),
                      ],
                    }),
                    Object(a.jsx)(b.a, {
                      children: Object(a.jsxs)(h.a, {
                        children: [
                          Object(a.jsx)(m.a, { lg: 6, sm: 12 }),
                          Object(a.jsx)(m.a, {
                            lg: 6,
                            sm: 12,
                            children: Object(a.jsx)("div", {
                              className: "ab_detail_wrap",
                              children: Object(a.jsx)(u.a, { data: i }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(a.jsx)(x.a, {
                  channel: "youtube",
                  autoplay: !0,
                  isOpen: s,
                  videoId: n.ID,
                  onClose: function () {
                    return t(!1);
                  },
                }),
              ],
            });
          }),
        v = t("Oqhm"),
        f = t("ejxD"),
        w = t("qU+8"),
        g = t("LvMP"),
        N = t("A8kL"),
        _ = t("5fB9");
      s.default = function () {
        return Object(a.jsx)(_.b, {
          children: Object(a.jsx)(N.b, {
            children: Object(a.jsxs)(n.a, {
              PageTitle: "About Us Page",
              children: [
                Object(a.jsx)(g.a, {}),
                Object(a.jsx)(r.a, { title: "About Us", name: "About" }),
                Object(a.jsx)(d, {}),
                Object(a.jsx)(f.a, {}),
                Object(a.jsx)(v.a, {}),
                Object(a.jsx)(j.a, {}),
                Object(a.jsx)(O, {}),
                Object(a.jsx)(w.a, {}),
                Object(a.jsx)(o.a, { extraClassName: "ready" }),
                Object(a.jsx)(i.a, {}),
              ],
            }),
          }),
        });
      };
    },
    TgFl: function (e, s, t) {
      "use strict";
      var a = t("nKUr");
      t("q1tI");
      s.a = function (e) {
        var s = e.title,
          t = e.name;
        return Object(a.jsx)("section", {
          className: "pageBanner",
          children: Object(a.jsx)("div", {
            className: "container",
            children: Object(a.jsx)("div", {
              className: "row",
              children: Object(a.jsx)("div", {
                className: "col-lg-12",
                children: Object(a.jsxs)("div", {
                  className: "banner_content text-center",
                  children: [
                    Object(a.jsxs)("h4", {
                      children: [
                        Object(a.jsx)("a", { href: "/", children: "home" }),
                        " - ",
                        t,
                      ],
                    }),
                    Object(a.jsx)("h2", { children: s }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
    ejxD: function (e, s, t) {
      "use strict";
      var a = t("rePB"),
        c = t("nKUr"),
        i = t("q1tI"),
        n = t("bTu8"),
        r = t("0Xqd"),
        l = t("cKS0"),
        d = t("Jq2x");
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var s = 1; s < arguments.length; s++) {
              var t = arguments[s];
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var j = {
          init: function () {
            var e = this,
              s = e.params.thumbs;
            if (e.thumbs.initialized) return !1;
            e.thumbs.initialized = !0;
            var t = e.constructor;
            return (
              s.swiper instanceof t
                ? ((e.thumbs.swiper = s.swiper),
                  Object(l.c)(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }),
                  Object(l.c)(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  }))
                : Object(l.e)(s.swiper) &&
                  ((e.thumbs.swiper = new t(
                    Object(l.c)({}, s.swiper, {
                      watchSlidesVisibility: !0,
                      watchSlidesProgress: !0,
                      slideToClickedSlide: !1,
                    })
                  )),
                  (e.thumbs.swiperCreated = !0)),
              e.thumbs.swiper.$el.addClass(
                e.params.thumbs.thumbsContainerClass
              ),
              e.thumbs.swiper.on("tap", e.thumbs.onThumbClick),
              !0
            );
          },
          onThumbClick: function () {
            var e = this,
              s = e.thumbs.swiper;
            if (s) {
              var t = s.clickedIndex,
                a = s.clickedSlide;
              if (
                (!a ||
                  !Object(d.a)(a).hasClass(
                    e.params.thumbs.slideThumbActiveClass
                  )) &&
                "undefined" !== typeof t &&
                null !== t
              ) {
                var c;
                if (
                  ((c = s.params.loop
                    ? parseInt(
                        Object(d.a)(s.clickedSlide).attr(
                          "data-swiper-slide-index"
                        ),
                        10
                      )
                    : t),
                  e.params.loop)
                ) {
                  var i = e.activeIndex;
                  e.slides.eq(i).hasClass(e.params.slideDuplicateClass) &&
                    (e.loopFix(),
                    (e._clientLeft = e.$wrapperEl[0].clientLeft),
                    (i = e.activeIndex));
                  var n = e.slides
                      .eq(i)
                      .prevAll('[data-swiper-slide-index="' + c + '"]')
                      .eq(0)
                      .index(),
                    r = e.slides
                      .eq(i)
                      .nextAll('[data-swiper-slide-index="' + c + '"]')
                      .eq(0)
                      .index();
                  c =
                    "undefined" === typeof n
                      ? r
                      : "undefined" === typeof r
                      ? n
                      : r - i < i - n
                      ? r
                      : n;
                }
                e.slideTo(c);
              }
            }
          },
          update: function (e) {
            var s = this,
              t = s.thumbs.swiper;
            if (t) {
              var a =
                  "auto" === t.params.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : t.params.slidesPerView,
                c = s.params.thumbs.autoScrollOffset,
                i = c && !t.params.loop;
              if (s.realIndex !== t.realIndex || i) {
                var n,
                  r,
                  l = t.activeIndex;
                if (t.params.loop) {
                  t.slides.eq(l).hasClass(t.params.slideDuplicateClass) &&
                    (t.loopFix(),
                    (t._clientLeft = t.$wrapperEl[0].clientLeft),
                    (l = t.activeIndex));
                  var d = t.slides
                      .eq(l)
                      .prevAll(
                        '[data-swiper-slide-index="' + s.realIndex + '"]'
                      )
                      .eq(0)
                      .index(),
                    o = t.slides
                      .eq(l)
                      .nextAll(
                        '[data-swiper-slide-index="' + s.realIndex + '"]'
                      )
                      .eq(0)
                      .index();
                  (n =
                    "undefined" === typeof d
                      ? o
                      : "undefined" === typeof o
                      ? d
                      : o - l === l - d
                      ? l
                      : o - l < l - d
                      ? o
                      : d),
                    (r = s.activeIndex > s.previousIndex ? "next" : "prev");
                } else
                  r = (n = s.realIndex) > s.previousIndex ? "next" : "prev";
                i && (n += "next" === r ? c : -1 * c),
                  t.visibleSlidesIndexes &&
                    t.visibleSlidesIndexes.indexOf(n) < 0 &&
                    (t.params.centeredSlides
                      ? (n =
                          n > l
                            ? n - Math.floor(a / 2) + 1
                            : n + Math.floor(a / 2) - 1)
                      : n > l && (n = n - a + 1),
                    t.slideTo(n, e ? 0 : void 0));
              }
              var j = 1,
                b = s.params.thumbs.slideThumbActiveClass;
              if (
                (s.params.slidesPerView > 1 &&
                  !s.params.centeredSlides &&
                  (j = s.params.slidesPerView),
                s.params.thumbs.multipleActiveThumbs || (j = 1),
                (j = Math.floor(j)),
                t.slides.removeClass(b),
                t.params.loop || (t.params.virtual && t.params.virtual.enabled))
              )
                for (var h = 0; h < j; h += 1)
                  t.$wrapperEl
                    .children(
                      '[data-swiper-slide-index="' + (s.realIndex + h) + '"]'
                    )
                    .addClass(b);
              else
                for (var m = 0; m < j; m += 1)
                  t.slides.eq(s.realIndex + m).addClass(b);
            }
          },
        },
        b = {
          name: "thumbs",
          params: {
            thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-container-thumbs",
            },
          },
          create: function () {
            Object(l.a)(this, {
              thumbs: o({ swiper: null, initialized: !1 }, j),
            });
          },
          on: {
            beforeInit: function (e) {
              var s = e.params.thumbs;
              s && s.swiper && (e.thumbs.init(), e.thumbs.update(!0));
            },
            slideChange: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            update: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            resize: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            observerUpdate: function (e) {
              e.thumbs.swiper && e.thumbs.update();
            },
            setTransition: function (e, s) {
              var t = e.thumbs.swiper;
              t && t.setTransition(s);
            },
            beforeDestroy: function (e) {
              var s = e.thumbs.swiper;
              s && e.thumbs.swiperCreated && s && s.destroy();
            },
          },
        },
        h = t("Xchd"),
        m = t("xqva"),
        u = t("Ndxo"),
        p = t("KSab"),
        x = t("7vrA"),
        O = t("3Z9Z"),
        v = t("JI6e");
      t("4l1m");
      function f(e, s) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          s &&
            (a = a.filter(function (s) {
              return Object.getOwnPropertyDescriptor(e, s).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      function w(e) {
        for (var s = 1; s < arguments.length; s++) {
          var t = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? f(Object(t), !0).forEach(function (s) {
                Object(a.a)(e, s, t[s]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (s) {
                Object.defineProperty(
                  e,
                  s,
                  Object.getOwnPropertyDescriptor(t, s)
                );
              });
        }
        return e;
      }
      n.a.use([r.a, b, h.a]);
      s.a = function () {
        var e = Object(i.useState)(null),
          s = e[0],
          t = e[1],
          a = p.F.sectionContent,
          n = p.F.posts;
        return Object(c.jsx)("section", {
          className: "commonSection testimonial_2",
          children: Object(c.jsx)(x.a, {
            children: Object(c.jsxs)(O.a, {
              className: "testimoniTab",
              children: [
                Object(c.jsxs)(v.a, {
                  lg: 5,
                  children: [
                    Object(c.jsx)("h4", {
                      className: "sub_title color_aaa",
                      children: a.subTitle,
                    }),
                    Object(c.jsx)("h2", {
                      className: "sec_title white",
                      children: a.subTitle,
                    }),
                    Object(c.jsx)(
                      m.a,
                      w(
                        w(
                          { id: "testimonial_2_thumb", onSwiper: t },
                          {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                            spaceBetween: 0,
                            speed: 1400,
                            pagination: {
                              el: "#testimonials-carousel-pagination",
                              type: "bullets",
                              clickable: !0,
                            },
                            autoplay: { delay: 5e3 },
                          }
                        ),
                        {},
                        {
                          children: n.map(function (e, s) {
                            var t = e.name,
                              a = e.designation,
                              i = e.image;
                            return Object(c.jsx)(
                              u.a,
                              {
                                children: Object(c.jsx)("div", {
                                  className: "control_item",
                                  children: Object(c.jsxs)("a", {
                                    href: "#tab_".concat(s),
                                    "data-toggle": "tab",
                                    children: [
                                      Object(c.jsx)("span", {
                                        children: Object(c.jsx)("img", {
                                          src: i,
                                          alt: t,
                                        }),
                                      }),
                                      Object(c.jsxs)("div", {
                                        className: "author_detail",
                                        children: [
                                          Object(c.jsx)("h5", { children: t }),
                                          Object(c.jsx)("h6", { children: a }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              s
                            );
                          }),
                        }
                      )
                    ),
                  ],
                }),
                Object(c.jsxs)(v.a, {
                  lg: 7,
                  children: [
                    Object(c.jsx)("div", {
                      className: "swiper-pagination",
                      id: "testimonials-carousel-pagination",
                    }),
                    Object(c.jsx)("div", {
                      className: "tab-content",
                      children: Object(c.jsx)(
                        m.a,
                        w(
                          w(
                            { thumbs: { swiper: s } },
                            {
                              speed: 1400,
                              mousewheel: !0,
                              slidesPerView: 1,
                              autoplay: { delay: 5e3 },
                            }
                          ),
                          {},
                          {
                            children: n.map(function (e, s) {
                              var t = e.content,
                                a = e.date;
                              return Object(c.jsx)(
                                u.a,
                                {
                                  children: Object(c.jsxs)("div", {
                                    className: "testi_con",
                                    children: [
                                      Object(c.jsx)("p", { children: t }),
                                      Object(c.jsx)("span", { children: a }),
                                    ],
                                  }),
                                },
                                s
                              );
                            }),
                          }
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    "qU+8": function (e, s, t) {
      "use strict";
      var a = t("nKUr"),
        c = t("q1tI"),
        i = t("7vrA"),
        n = t("3Z9Z"),
        r = t("JI6e"),
        l = t("0KWo"),
        d = t("KSab");
      s.a = function () {
        var e = Object(c.useState)(1),
          s = e[0],
          t = e[1],
          o = d.m.sectionContent,
          j = d.m.posts;
        return Object(a.jsx)("section", {
          className: "commonSection chooseUs",
          children: Object(a.jsxs)(i.a, {
            children: [
              Object(a.jsx)(n.a, {
                children: Object(a.jsx)(r.a, {
                  lg: 12,
                  className: "text-center",
                  children: Object(a.jsx)(l.a, { data: o }),
                }),
              }),
              Object(a.jsxs)("div", {
                id: "tabs",
                children: [
                  Object(a.jsx)(n.a, {
                    children: Object(a.jsx)(r.a, {
                      lg: 12,
                      children: Object(a.jsx)("ul", {
                        className: "chooseUs_title",
                        children: j.map(function (e, c) {
                          var i = e.title;
                          return Object(a.jsx)(
                            "li",
                            {
                              className: "".concat(s === c ? "active" : " "),
                              children: Object(a.jsx)("a", {
                                href: "#",
                                onClick: function (e) {
                                  e.preventDefault(), t(c);
                                },
                                children: i,
                              }),
                            },
                            c
                          );
                        }),
                      }),
                    }),
                  }),
                  Object(a.jsx)("div", {
                    className: "tab-content",
                    children: j.map(function (e, t) {
                      return t === s
                        ? Object(a.jsx)(
                            "div",
                            {
                              className:
                                "tab-pane fade show active animated fadeIn",
                              id: "tes_tab_".concat(t),
                              children: Object(a.jsxs)(n.a, {
                                className: "".concat(
                                  0 === t % 2 ? " " : "flex-lg-row-reverse"
                                ),
                                children: [
                                  Object(a.jsx)(r.a, {
                                    lg: 7,
                                    children: Object(a.jsxs)("div", {
                                      className: "wh_choose",
                                      children: [
                                        Object(a.jsx)("p", {
                                          children: e.content,
                                        }),
                                        Object(a.jsx)("ul", {
                                          children: e.lists.map(function (
                                            e,
                                            s
                                          ) {
                                            var t = e.item;
                                            return Object(a.jsxs)(
                                              "li",
                                              {
                                                children: [
                                                  Object(a.jsx)("i", {
                                                    className:
                                                      "fa fa-check-square",
                                                  }),
                                                  " ",
                                                  t,
                                                ],
                                              },
                                              s
                                            );
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(a.jsx)(r.a, {
                                    lg: 5,
                                    children: Object(a.jsx)("div", {
                                      className: "chose_img",
                                      children: Object(a.jsx)("img", {
                                        src: e.image,
                                        alt: "chose_img-".concat(t),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            },
                            t
                          )
                        : null;
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    rB5V: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return t("Juyh");
        },
      ]);
    },
    wgpl: function (e, s, t) {
      "use strict";
      var a = t("nKUr"),
        c = (t("q1tI"), t("YFqc")),
        i = t.n(c);
      s.a = function (e) {
        var s = e.extraClassName,
          t = e.buttonClass;
        return Object(a.jsx)("section", {
          className: "commonSection ".concat(s),
          children: Object(a.jsx)("div", {
            className: "container",
            children: Object(a.jsxs)("div", {
              className: "row",
              children: [
                Object(a.jsx)("div", {
                  className: "col-lg-9 col-sm-8 col-md-9",
                  children: Object(a.jsx)("h2", {
                    className: "sec_title white",
                    children: "Let's Get Your Project Started!",
                  }),
                }),
                Object(a.jsx)("div", {
                  className: "col-lg-3  col-sm-4 col-md-3 text-right",
                  children: Object(a.jsx)(i.a, {
                    href: "/contact",
                    children: Object(a.jsx)("a", {
                      className: "common_btn ".concat(t),
                      children: Object(a.jsx)("span", {
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
  [["rB5V", 0, 2, 1, 3, 4, 5, 7, 8]],
]);
