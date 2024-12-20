(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    2337: function (e) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        n = "~";
      function Events() {}
      function EE(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function addListener(e, t, i, o, s) {
        if ("function" != typeof i)
          throw TypeError("The listener must be a function");
        var a = new EE(i, o || e, s),
          c = n ? n + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], a])
              : e._events[c].push(a)
            : ((e._events[c] = a), e._eventsCount++),
          e
        );
      }
      function clearEvent(e, t) {
        0 == --e._eventsCount
          ? (e._events = new Events())
          : delete e._events[t];
      }
      function EventEmitter() {
        (this._events = new Events()), (this._eventsCount = 0);
      }
      Object.create &&
        ((Events.prototype = Object.create(null)),
        new Events().__proto__ || (n = !1)),
        (EventEmitter.prototype.eventNames = function () {
          var e,
            i,
            o = [];
          if (0 === this._eventsCount) return o;
          for (i in (e = this._events))
            t.call(e, i) && o.push(n ? i.slice(1) : i);
          return Object.getOwnPropertySymbols
            ? o.concat(Object.getOwnPropertySymbols(e))
            : o;
        }),
        (EventEmitter.prototype.listeners = function (e) {
          var t = n ? n + e : e,
            i = this._events[t];
          if (!i) return [];
          if (i.fn) return [i.fn];
          for (var o = 0, s = i.length, a = Array(s); o < s; o++)
            a[o] = i[o].fn;
          return a;
        }),
        (EventEmitter.prototype.listenerCount = function (e) {
          var t = n ? n + e : e,
            i = this._events[t];
          return i ? (i.fn ? 1 : i.length) : 0;
        }),
        (EventEmitter.prototype.emit = function (e, t, i, o, s, a) {
          var c = n ? n + e : e;
          if (!this._events[c]) return !1;
          var u,
            l,
            d = this._events[c],
            h = arguments.length;
          if (d.fn) {
            switch ((d.once && this.removeListener(e, d.fn, void 0, !0), h)) {
              case 1:
                return d.fn.call(d.context), !0;
              case 2:
                return d.fn.call(d.context, t), !0;
              case 3:
                return d.fn.call(d.context, t, i), !0;
              case 4:
                return d.fn.call(d.context, t, i, o), !0;
              case 5:
                return d.fn.call(d.context, t, i, o, s), !0;
              case 6:
                return d.fn.call(d.context, t, i, o, s, a), !0;
            }
            for (l = 1, u = Array(h - 1); l < h; l++) u[l - 1] = arguments[l];
            d.fn.apply(d.context, u);
          } else {
            var f,
              p = d.length;
            for (l = 0; l < p; l++)
              switch (
                (d[l].once && this.removeListener(e, d[l].fn, void 0, !0), h)
              ) {
                case 1:
                  d[l].fn.call(d[l].context);
                  break;
                case 2:
                  d[l].fn.call(d[l].context, t);
                  break;
                case 3:
                  d[l].fn.call(d[l].context, t, i);
                  break;
                case 4:
                  d[l].fn.call(d[l].context, t, i, o);
                  break;
                default:
                  if (!u)
                    for (f = 1, u = Array(h - 1); f < h; f++)
                      u[f - 1] = arguments[f];
                  d[l].fn.apply(d[l].context, u);
              }
          }
          return !0;
        }),
        (EventEmitter.prototype.on = function (e, t, n) {
          return addListener(this, e, t, n, !1);
        }),
        (EventEmitter.prototype.once = function (e, t, n) {
          return addListener(this, e, t, n, !0);
        }),
        (EventEmitter.prototype.removeListener = function (e, t, i, o) {
          var s = n ? n + e : e;
          if (!this._events[s]) return this;
          if (!t) return clearEvent(this, s), this;
          var a = this._events[s];
          if (a.fn)
            a.fn !== t ||
              (o && !a.once) ||
              (i && a.context !== i) ||
              clearEvent(this, s);
          else {
            for (var c = 0, u = [], l = a.length; c < l; c++)
              (a[c].fn !== t ||
                (o && !a[c].once) ||
                (i && a[c].context !== i)) &&
                u.push(a[c]);
            u.length
              ? (this._events[s] = 1 === u.length ? u[0] : u)
              : clearEvent(this, s);
          }
          return this;
        }),
        (EventEmitter.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = n ? n + e : e), this._events[t] && clearEvent(this, t))
              : ((this._events = new Events()), (this._eventsCount = 0)),
            this
          );
        }),
        (EventEmitter.prototype.off = EventEmitter.prototype.removeListener),
        (EventEmitter.prototype.addListener = EventEmitter.prototype.on),
        (EventEmitter.prefixed = n),
        (EventEmitter.EventEmitter = EventEmitter),
        (e.exports = EventEmitter);
    },
    7418: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(1126);
        },
      ]);
    },
    1126: function (e, t, n) {
      "use strict";
      let i, o;
      n.r(t),
        n.d(t, {
          default: function () {
            return App;
          },
        });
      var s = n(2676);
      n(4869);
      var a = n(9598),
        c = n(143),
        u = n(715),
        collectTypes = (e, t) => {
          if (Array.isArray(e)) for (var n of e) collectTypes(n, t);
          else if ("object" == typeof e && null !== e)
            for (var i in e)
              "__typename" === i && "string" == typeof e[i]
                ? t.add(e[i])
                : collectTypes(e[i], t);
          return t;
        },
        formatNode = (e) => {
          if ("definitions" in e) {
            var t = [];
            for (var n of e.definitions) {
              var i = formatNode(n);
              t.push(i);
            }
            return { ...e, definitions: t };
          }
          if ("directives" in e && e.directives && e.directives.length) {
            var o = [],
              s = {};
            for (var c of e.directives) {
              var u = c.name.value;
              "_" !== u[0] ? o.push(c) : (u = u.slice(1)), (s[u] = c);
            }
            e = { ...e, directives: o, _directives: s };
          }
          if ("selectionSet" in e) {
            var l = [],
              d = e.kind === a.hY.OPERATION_DEFINITION;
            if (e.selectionSet) {
              for (var h of e.selectionSet.selections || []) {
                d =
                  d ||
                  (h.kind === a.hY.FIELD &&
                    "__typename" === h.name.value &&
                    !h.alias);
                var f = formatNode(h);
                l.push(f);
              }
              return (
                d ||
                  l.push({
                    kind: a.hY.FIELD,
                    name: { kind: a.hY.NAME, value: "__typename" },
                    _generated: !0,
                  }),
                { ...e, selectionSet: { ...e.selectionSet, selections: l } }
              );
            }
          }
          return e;
        },
        l = new Map(),
        formatDocument = (e) => {
          var t = (0, c.k)(e),
            n = l.get(t.__key);
          return (
            n ||
              (l.set(t.__key, (n = formatNode(t))),
              Object.defineProperty(n, "__key", {
                value: t.__key,
                enumerable: !1,
              })),
            n
          );
        };
      function withPromise(e) {
        var source$ = (t) => e(t);
        return (
          (source$.toPromise = () =>
            (0, u.Vi)(
              (0, u.qn)(1)((0, u.hX)((e) => !e.stale && !e.hasNext)(source$))
            )),
          (source$.then = (e, t) => source$.toPromise().then(e, t)),
          (source$.subscribe = (e) => (0, u.Ld)(e)(source$)),
          source$
        );
      }
      function makeOperation(e, t, n) {
        return {
          ...t,
          kind: e,
          context: t.context ? { ...t.context, ...n } : n || t.context,
        };
      }
      var noop = () => {},
        shouldSkip = ({ kind: e }) => "mutation" !== e && "query" !== e,
        mapTypeNames = (e) => {
          var t = formatDocument(e.query);
          if (t === e.query) return e;
          var n = makeOperation(e.kind, e);
          return (n.query = t), n;
        },
        cacheExchange = ({ forward: e, client: t, dispatchDebug: n }) => {
          var i = new Map(),
            o = new Map(),
            isOperationCached = (e) =>
              "query" === e.kind &&
              "network-only" !== e.context.requestPolicy &&
              ("cache-only" === e.context.requestPolicy || i.has(e.key));
          return (n) => {
            var s = (0, u.UI)((e) => {
                var n = i.get(e.key) || (0, c.m)(e, { data: null });
                return (
                  (n = { ...n, operation: e }),
                  "cache-and-network" === e.context.requestPolicy &&
                    ((n.stale = !0), reexecuteOperation(t, e)),
                  n
                );
              })((0, u.hX)((e) => !shouldSkip(e) && isOperationCached(e))(n)),
              a = (0, u.bw)((e) => {
                var { operation: n } = e;
                if (n) {
                  var s = n.context.additionalTypenames || [];
                  if (
                    ("subscription" !== e.operation.kind &&
                      (s = [...collectTypes(e.data, new Set())].concat(s)),
                    "mutation" === e.operation.kind ||
                      "subscription" === e.operation.kind)
                  ) {
                    for (var a = new Set(), c = 0; c < s.length; c++) {
                      var u = s[c],
                        l = o.get(u);
                      for (var d of (l || o.set(u, (l = new Set())),
                      l.values()))
                        a.add(d);
                      l.clear();
                    }
                    for (var h of a.values())
                      i.has(h) &&
                        ((n = i.get(h).operation),
                        i.delete(h),
                        reexecuteOperation(t, n));
                  } else if ("query" === n.kind && e.data) {
                    i.set(n.key, e);
                    for (var f = 0; f < s.length; f++) {
                      var p = s[f],
                        v = o.get(p);
                      v || o.set(p, (v = new Set())), v.add(n.key);
                    }
                  }
                }
              })(
                e(
                  (0, u.hX)(
                    (e) =>
                      "query" !== e.kind ||
                      "cache-only" !== e.context.requestPolicy
                  )(
                    (0, u.UI)((e) => e)(
                      (0, u.TS)([
                        (0, u.UI)(mapTypeNames)(
                          (0, u.hX)(
                            (e) => !shouldSkip(e) && !isOperationCached(e)
                          )(n)
                        ),
                        (0, u.hX)((e) => shouldSkip(e))(n),
                      ])
                    )
                  )
                )
              );
            return (0, u.TS)([s, a]);
          };
        },
        reexecuteOperation = (e, t) =>
          e.reexecuteOperation(
            makeOperation(t.kind, t, { requestPolicy: "network-only" })
          ),
        fetchExchange =
          ({ forward: e, dispatchDebug: t }) =>
          (t) => {
            var n = (0, u.zg)((e) => {
                var n = (0, c.a)(e),
                  i = (0, c.d)(e, n),
                  o = (0, c.e)(e, n);
                return (0, u.Rs)(
                  (0, u.hX)((t) => "teardown" === t.kind && t.key === e.key)(t)
                )((0, c.f)(e, i, o));
              })(
                (0, u.hX)(
                  (e) =>
                    "teardown" !== e.kind &&
                    ("subscription" !== e.kind ||
                      !!e.context.fetchSubscriptions)
                )(t)
              ),
              i = e(
                (0, u.hX)(
                  (e) =>
                    "teardown" === e.kind ||
                    ("subscription" === e.kind && !e.context.fetchSubscriptions)
                )(t)
              );
            return (0, u.TS)([n, i]);
          },
        composeExchanges =
          (e) =>
          ({ client: t, forward: n, dispatchDebug: i }) =>
            e.reduceRight(
              (e, n) =>
                n({
                  client: t,
                  forward: (t) => (0, u.BN)(e((0, u.BN)(t))),
                  dispatchDebug(e) {},
                }),
              n
            ),
        fallbackExchange =
          ({ dispatchDebug: e }) =>
          (e) =>
            (0, u.hX)((e) => !1)(e),
        Q = function Client(e) {
          var t = 0,
            n = new Map(),
            i = new Map(),
            o = new Set(),
            s = [],
            a = {
              url: e.url,
              fetchSubscriptions: e.fetchSubscriptions,
              fetchOptions: e.fetchOptions,
              fetch: e.fetch,
              preferGetMethod: e.preferGetMethod,
              requestPolicy: e.requestPolicy || "cache-first",
            },
            l = (0, u.nN)();
          function nextOperation(e) {
            ("mutation" !== e.kind && "teardown" !== e.kind && o.has(e.key)) ||
              ("teardown" === e.kind
                ? o.delete(e.key)
                : "mutation" !== e.kind && o.add(e.key),
              l.next(e));
          }
          var d = !1;
          function dispatchOperation(e) {
            if ((e && nextOperation(e), !d)) {
              for (d = !0; d && (e = s.shift()); ) nextOperation(e);
              d = !1;
            }
          }
          var makeResultSource = (e) => {
              var t = (0, u.Rs)(
                (0, u.hX)((t) => "teardown" === t.kind && t.key === e.key)(
                  l.source
                )
              )(
                (0, u.hX)(
                  (t) =>
                    t.operation.kind === e.kind &&
                    t.operation.key === e.key &&
                    (!t.operation.context._instance ||
                      t.operation.context._instance === e.context._instance)
                )(p)
              );
              return (
                (t =
                  "query" !== e.kind
                    ? (0, u.oE)((e) => !!e.hasNext, !0)(t)
                    : (0, u.wt)((t) => {
                        var n = (0, u._A)(t);
                        return t.stale || t.hasNext
                          ? n
                          : (0, u.TS)([
                              n,
                              (0, u.UI)(() => ((t.stale = !0), t))(
                                (0, u.qn)(1)(
                                  (0, u.hX)((t) => t.key === e.key)(l.source)
                                )
                              ),
                            ]);
                      })(t)),
                (t =
                  "mutation" !== e.kind
                    ? (0, u.ok)(() => {
                        o.delete(e.key),
                          n.delete(e.key),
                          i.delete(e.key),
                          (d = !1);
                        for (var t = s.length - 1; t >= 0; t--)
                          s[t].key === e.key && s.splice(t, 1);
                        nextOperation(makeOperation("teardown", e, e.context));
                      })(
                        (0, u.Mq)((t) => {
                          if (t.stale) {
                            if (t.hasNext) {
                              for (var i of s)
                                if (i.key === t.operation.key) {
                                  o.delete(i.key);
                                  break;
                                }
                            } else o.delete(e.key);
                          } else t.hasNext || o.delete(e.key);
                          n.set(e.key, t);
                        })(t)
                      )
                    : (0, u.Hr)(() => {
                        nextOperation(e);
                      })(t)),
                (0, u.BN)(t)
              );
            },
            h = Object.assign(
              this instanceof Client ? this : Object.create(Client.prototype),
              {
                suspense: !!e.suspense,
                operations$: l.source,
                reexecuteOperation(e) {
                  if ("teardown" === e.kind) dispatchOperation(e);
                  else if ("mutation" === e.kind)
                    s.push(e), Promise.resolve().then(dispatchOperation);
                  else if (i.has(e.key)) {
                    for (var t = !1, n = 0; n < s.length; n++)
                      s[n].key === e.key && ((s[n] = e), (t = !0));
                    t ||
                    (o.has(e.key) && "network-only" !== e.context.requestPolicy)
                      ? o.delete(e.key)
                      : s.push(e),
                      Promise.resolve().then(dispatchOperation);
                  }
                },
                createRequestOperation: (e, n, i) => (
                  i || (i = {}),
                  makeOperation(e, n, {
                    _instance: "mutation" === e ? (t = (t + 1) | 0) : void 0,
                    ...a,
                    ...i,
                    requestPolicy: i.requestPolicy || a.requestPolicy,
                    suspense: i.suspense || (!1 !== i.suspense && h.suspense),
                  })
                ),
                executeRequestOperation: (e) =>
                  "mutation" === e.kind
                    ? withPromise(makeResultSource(e))
                    : withPromise(
                        (0, u.Vo)(() => {
                          var t = i.get(e.key);
                          t || i.set(e.key, (t = makeResultSource(e))),
                            (t = (0, u.Hr)(() => {
                              dispatchOperation(e);
                            })(t));
                          var o = n.get(e.key);
                          return "query" === e.kind &&
                            o &&
                            (o.stale || o.hasNext)
                            ? (0, u.wt)(u._A)(
                                (0, u.TS)([
                                  t,
                                  (0, u.hX)((t) => t === n.get(e.key))(
                                    (0, u._A)(o)
                                  ),
                                ])
                              )
                            : t;
                        })
                      ),
                executeQuery(e, t) {
                  var n = h.createRequestOperation("query", e, t);
                  return h.executeRequestOperation(n);
                },
                executeSubscription(e, t) {
                  var n = h.createRequestOperation("subscription", e, t);
                  return h.executeRequestOperation(n);
                },
                executeMutation(e, t) {
                  var n = h.createRequestOperation("mutation", e, t);
                  return h.executeRequestOperation(n);
                },
                readQuery(e, t, n) {
                  var i = null;
                  return (
                    (0, u.Ld)((e) => {
                      i = e;
                    })(h.query(e, t, n)).unsubscribe(),
                    i
                  );
                },
                query: (e, t, n) => h.executeQuery((0, c.h)(e, t), n),
                subscription: (e, t, n) =>
                  h.executeSubscription((0, c.h)(e, t), n),
                mutation: (e, t, n) => h.executeMutation((0, c.h)(e, t), n),
              }
            ),
            f = composeExchanges(e.exchanges),
            p = (0, u.BN)(
              f({
                client: h,
                dispatchDebug: noop,
                forward: fallbackExchange({ dispatchDebug: noop }),
              })(l.source)
            );
          return (0, u.nY)(p), h;
        },
        d = n(4655);
      let h = {
        formatters: void 0,
        fees: void 0,
        serializers: void 0,
        id: 534352,
        name: "Scroll",
        nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
        rpcUrls: {
          default: {
            http: ["https://rpc.scroll.io"],
            webSocket: ["wss://wss-rpc.scroll.io/ws"],
          },
        },
        blockExplorers: {
          default: {
            name: "Scrollscan",
            url: "https://scrollscan.com",
            apiUrl: "https://api.scrollscan.com/api",
          },
        },
        contracts: {
          multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 14,
          },
        },
        testnet: !1,
      };
      var f = n(2773);
      let p = 256;
      function uid_uid(e = 11) {
        if (!i || p + e > 512) {
          (i = ""), (p = 0);
          for (let e = 0; e < 256; e++)
            i += ((256 + 256 * Math.random()) | 0).toString(16).substring(1);
        }
        return i.substring(p, p++ + e);
      }
      let subscribeWithSelector = (e) => (t, n, i) => {
          let o = i.subscribe;
          i.subscribe = (e, t, n) => {
            let s = e;
            if (t) {
              let o = (null == n ? void 0 : n.equalityFn) || Object.is,
                a = e(i.getState());
              (s = (n) => {
                let i = e(n);
                if (!o(a, i)) {
                  let e = a;
                  t((a = i), e);
                }
              }),
                (null == n ? void 0 : n.fireImmediately) && t(a, a);
            }
            return o(s);
          };
          let s = e(t, n, i);
          return s;
        },
        toThenable = (e) => (t) => {
          try {
            let n = e(t);
            if (n instanceof Promise) return n;
            return {
              then: (e) => toThenable(e)(n),
              catch(e) {
                return this;
              },
            };
          } catch (e) {
            return {
              then(e) {
                return this;
              },
              catch: (t) => toThenable(t)(e),
            };
          }
        },
        oldImpl = (e, t) => (n, i, o) => {
          let s,
            a,
            c = {
              getStorage: () => localStorage,
              serialize: JSON.stringify,
              deserialize: JSON.parse,
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            u = !1,
            l = new Set(),
            d = new Set();
          try {
            s = c.getStorage();
          } catch (e) {}
          if (!s)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              i,
              o
            );
          let h = toThenable(c.serialize),
            setItem = () => {
              let e;
              let t = c.partialize({ ...i() }),
                n = h({ state: t, version: c.version })
                  .then((e) => s.setItem(c.name, e))
                  .catch((t) => {
                    e = t;
                  });
              if (e) throw e;
              return n;
            },
            f = o.setState;
          o.setState = (e, t) => {
            f(e, t), setItem();
          };
          let p = e(
              (...e) => {
                n(...e), setItem();
              },
              i,
              o
            ),
            hydrate = () => {
              var e;
              if (!s) return;
              (u = !1), l.forEach((e) => e(i()));
              let t =
                (null == (e = c.onRehydrateStorage)
                  ? void 0
                  : e.call(c, i())) || void 0;
              return toThenable(s.getItem.bind(s))(c.name)
                .then((e) => {
                  if (e) return c.deserialize(e);
                })
                .then((e) => {
                  if (e) {
                    if ("number" != typeof e.version || e.version === c.version)
                      return e.state;
                    if (c.migrate) return c.migrate(e.state, e.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then((e) => {
                  var t;
                  return (
                    n((a = c.merge(e, null != (t = i()) ? t : p)), !0),
                    setItem()
                  );
                })
                .then(() => {
                  null == t || t(a, void 0), (u = !0), d.forEach((e) => e(a));
                })
                .catch((e) => {
                  null == t || t(void 0, e);
                });
            };
          return (
            (o.persist = {
              setOptions: (e) => {
                (c = { ...c, ...e }), e.getStorage && (s = e.getStorage());
              },
              clearStorage: () => {
                null == s || s.removeItem(c.name);
              },
              getOptions: () => c,
              rehydrate: () => hydrate(),
              hasHydrated: () => u,
              onHydrate: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                d.add(e),
                () => {
                  d.delete(e);
                }
              ),
            }),
            hydrate(),
            a || p
          );
        },
        newImpl = (e, t) => (n, i, o) => {
          let s,
            a = {
              storage: (function (e, t) {
                let n;
                try {
                  n = e();
                } catch (e) {
                  return;
                }
                return {
                  getItem: (e) => {
                    var i;
                    let parse = (e) =>
                        null === e
                          ? null
                          : JSON.parse(e, null == t ? void 0 : t.reviver),
                      o = null != (i = n.getItem(e)) ? i : null;
                    return o instanceof Promise ? o.then(parse) : parse(o);
                  },
                  setItem: (e, i) =>
                    n.setItem(
                      e,
                      JSON.stringify(i, null == t ? void 0 : t.replacer)
                    ),
                  removeItem: (e) => n.removeItem(e),
                };
              })(() => localStorage),
              partialize: (e) => e,
              version: 0,
              merge: (e, t) => ({ ...t, ...e }),
              ...t,
            },
            c = !1,
            u = new Set(),
            l = new Set(),
            d = a.storage;
          if (!d)
            return e(
              (...e) => {
                console.warn(
                  `[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`
                ),
                  n(...e);
              },
              i,
              o
            );
          let setItem = () => {
              let e = a.partialize({ ...i() });
              return d.setItem(a.name, { state: e, version: a.version });
            },
            h = o.setState;
          o.setState = (e, t) => {
            h(e, t), setItem();
          };
          let f = e(
              (...e) => {
                n(...e), setItem();
              },
              i,
              o
            ),
            hydrate = () => {
              var e, t;
              if (!d) return;
              (c = !1),
                u.forEach((e) => {
                  var t;
                  return e(null != (t = i()) ? t : f);
                });
              let o =
                (null == (t = a.onRehydrateStorage)
                  ? void 0
                  : t.call(a, null != (e = i()) ? e : f)) || void 0;
              return toThenable(d.getItem.bind(d))(a.name)
                .then((e) => {
                  if (e) {
                    if ("number" != typeof e.version || e.version === a.version)
                      return e.state;
                    if (a.migrate) return a.migrate(e.state, e.version);
                    console.error(
                      "State loaded from storage couldn't be migrated since no migrate function was provided"
                    );
                  }
                })
                .then((e) => {
                  var t;
                  return (
                    n((s = a.merge(e, null != (t = i()) ? t : f)), !0),
                    setItem()
                  );
                })
                .then(() => {
                  null == o || o(s, void 0),
                    (s = i()),
                    (c = !0),
                    l.forEach((e) => e(s));
                })
                .catch((e) => {
                  null == o || o(void 0, e);
                });
            };
          return (
            (o.persist = {
              setOptions: (e) => {
                (a = { ...a, ...e }), e.storage && (d = e.storage);
              },
              clearStorage: () => {
                null == d || d.removeItem(a.name);
              },
              getOptions: () => a,
              rehydrate: () => hydrate(),
              hasHydrated: () => c,
              onHydrate: (e) => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              ),
              onFinishHydration: (e) => (
                l.add(e),
                () => {
                  l.delete(e);
                }
              ),
            }),
            a.skipHydration || hydrate(),
            s || f
          );
        },
        persist = (e, t) =>
          "getStorage" in t || "serialize" in t || "deserialize" in t
            ? (console.warn(
                "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
              ),
              oldImpl(e, t))
            : newImpl(e, t),
        createStoreImpl = (e) => {
          let t;
          let n = new Set(),
            setState = (e, i) => {
              let o = "function" == typeof e ? e(t) : e;
              if (!Object.is(o, t)) {
                let e = t;
                (t = (null != i ? i : "object" != typeof o)
                  ? o
                  : Object.assign({}, t, o)),
                  n.forEach((n) => n(t, e));
              }
            },
            getState = () => t,
            i = {
              setState,
              getState,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
                ),
                  n.clear();
              },
            };
          return (t = e(setState, getState, i)), i;
        },
        vanilla_createStore = (e) => (e ? createStoreImpl(e) : createStoreImpl);
      var v = n(7770),
        m = n(182);
      function withTimeout(
        e,
        { errorInstance: t = Error("timed out"), timeout: n, signal: i }
      ) {
        return new Promise((o, s) => {
          (async () => {
            let a;
            try {
              let c = new AbortController();
              n > 0 &&
                (a = setTimeout(() => {
                  i ? c.abort() : s(t);
                }, n)),
                o(await e({ signal: c?.signal || null }));
            } catch (e) {
              e?.name === "AbortError" && s(t), s(e);
            } finally {
              clearTimeout(a);
            }
          })();
        });
      }
      async function wait(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function withRetry(
        e,
        { delay: t = 100, retryCount: n = 2, shouldRetry: i = () => !0 } = {}
      ) {
        return new Promise((o, s) => {
          let attemptRetry = async ({ count: a = 0 } = {}) => {
            let retry = async ({ error: e }) => {
              let n = "function" == typeof t ? t({ count: a, error: e }) : t;
              n && (await wait(n)), attemptRetry({ count: a + 1 });
            };
            try {
              let t = await e();
              o(t);
            } catch (e) {
              if (a < n && (await i({ count: a, error: e })))
                return retry({ error: e });
              s(e);
            }
          };
          attemptRetry();
        });
      }
      var y = n(2293),
        g = n(716);
      let ChainNotConfiguredError = class ChainNotConfiguredError extends g.G {
        constructor() {
          super("Chain not configured."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotConfiguredError",
            });
        }
      };
      let ProviderNotFoundError = class ProviderNotFoundError extends g.G {
        constructor() {
          super("Provider not found."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderNotFoundError",
            });
        }
      };
      let b = /(rabby|trustwallet)/,
        w = {
          coinbaseWallet: {
            id: "coinbaseWallet",
            name: "Coinbase Wallet",
            provider: (e) =>
              e?.coinbaseWalletExtension
                ? e.coinbaseWalletExtension
                : findProvider(e, "isCoinbaseWallet"),
          },
          metaMask: {
            id: "metaMask",
            name: "MetaMask",
            provider: (e) =>
              findProvider(e, (e) => {
                if (
                  !e.isMetaMask ||
                  (e.isBraveWallet && !e._events && !e._state)
                )
                  return !1;
                for (let t of [
                  "isApexWallet",
                  "isAvalanche",
                  "isBitKeep",
                  "isBlockWallet",
                  "isKuCoinWallet",
                  "isMathWallet",
                  "isOkxWallet",
                  "isOKExWallet",
                  "isOneInchIOSWallet",
                  "isOneInchAndroidWallet",
                  "isOpera",
                  "isPortal",
                  "isRabby",
                  "isTokenPocket",
                  "isTokenary",
                  "isZerion",
                ])
                  if (e[t]) return !1;
                return !0;
              }),
          },
          phantom: {
            id: "phantom",
            name: "Phantom",
            provider: (e) =>
              e?.phantom?.ethereum
                ? e.phantom?.ethereum
                : findProvider(e, "isPhantom"),
          },
        };
      function injected(e = {}) {
        let t, n, i, o;
        let { shimDisconnect: s = !0, unstable_shimAsyncInject: a } = e;
        function getTarget() {
          let t = e.target;
          if ("function" == typeof t) {
            let e = t();
            if (e) return e;
          }
          return "object" == typeof t
            ? t
            : "string" == typeof t
            ? {
                ...(w[t] ?? {
                  id: t,
                  name: `${t[0].toUpperCase()}${t.slice(1)}`,
                  provider: `is${t[0].toUpperCase()}${t.slice(1)}`,
                }),
              }
            : {
                id: "injected",
                name: "Injected",
                provider: (e) => e?.ethereum,
              };
        }
        return (c) => ({
          get icon() {
            return getTarget().icon;
          },
          get id() {
            return getTarget().id;
          },
          get name() {
            return getTarget().name;
          },
          get supportsSimulation() {
            return b.test(this.id.toLowerCase());
          },
          type: injected.type,
          async setup() {
            let n = await this.getProvider();
            n &&
              e.target &&
              (i || ((i = this.onConnect.bind(this)), n.on("connect", i)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                n.on("accountsChanged", t)));
          },
          async connect({ chainId: a, isReconnecting: u } = {}) {
            let l = await this.getProvider();
            if (!l) throw new ProviderNotFoundError();
            let d = [];
            if (u) d = await this.getAccounts().catch(() => []);
            else if (s)
              try {
                let e = await l.request({
                  method: "wallet_requestPermissions",
                  params: [{ eth_accounts: {} }],
                });
                d = e[0]?.caveats?.[0]?.value?.map((e) => v.K(e));
              } catch (e) {
                if (e.code === m.ab.code) throw new m.ab(e);
                if (e.code === m.pT.code) throw e;
              }
            try {
              if (!d?.length && !u) {
                let e = await l.request({ method: "eth_requestAccounts" });
                d = e.map((e) => (0, v.K)(e));
              }
              i && (l.removeListener("connect", i), (i = void 0)),
                t ||
                  ((t = this.onAccountsChanged.bind(this)),
                  l.on("accountsChanged", t)),
                n ||
                  ((n = this.onChainChanged.bind(this)),
                  l.on("chainChanged", n)),
                o ||
                  ((o = this.onDisconnect.bind(this)), l.on("disconnect", o));
              let h = await this.getChainId();
              if (a && h !== a) {
                let e = await this.switchChain({ chainId: a }).catch((e) => {
                  if (e.code === m.ab.code) throw e;
                  return { id: h };
                });
                h = e?.id ?? h;
              }
              return (
                s && (await c.storage?.removeItem(`${this.id}.disconnected`)),
                e.target ||
                  (await c.storage?.setItem("injected.connected", !0)),
                { accounts: d, chainId: h }
              );
            } catch (e) {
              if (e.code === m.ab.code) throw new m.ab(e);
              if (e.code === m.pT.code) throw new m.pT(e);
              throw e;
            }
          },
          async disconnect() {
            let t = await this.getProvider();
            if (!t) throw new ProviderNotFoundError();
            n && (t.removeListener("chainChanged", n), (n = void 0)),
              o && (t.removeListener("disconnect", o), (o = void 0)),
              i || ((i = this.onConnect.bind(this)), t.on("connect", i));
            try {
              await withTimeout(
                () =>
                  t.request({
                    method: "wallet_revokePermissions",
                    params: [{ eth_accounts: {} }],
                  }),
                { timeout: 100 }
              );
            } catch {}
            s && (await c.storage?.setItem(`${this.id}.disconnected`, !0)),
              e.target || (await c.storage?.removeItem("injected.connected"));
          },
          async getAccounts() {
            let e = await this.getProvider();
            if (!e) throw new ProviderNotFoundError();
            let t = await e.request({ method: "eth_accounts" });
            return t.map((e) => (0, v.K)(e));
          },
          async getChainId() {
            let e = await this.getProvider();
            if (!e) throw new ProviderNotFoundError();
            let t = await e.request({ method: "eth_chainId" });
            return Number(t);
          },
          async getProvider() {
            let e;
            if ("undefined" == typeof window) return;
            let t = getTarget();
            return (
              (e =
                "function" == typeof t.provider
                  ? t.provider(window)
                  : "string" == typeof t.provider
                  ? findProvider(window, t.provider)
                  : t.provider) &&
                !e.removeListener &&
                ("off" in e && "function" == typeof e.off
                  ? (e.removeListener = e.off)
                  : (e.removeListener = () => {})),
              e
            );
          },
          async isAuthorized() {
            try {
              let t =
                s && (await c.storage?.getItem(`${this.id}.disconnected`));
              if (t) return !1;
              if (!e.target) {
                let e = await c.storage?.getItem("injected.connected");
                if (!e) return !1;
              }
              let n = await this.getProvider();
              if (!n) {
                if (void 0 !== a && !1 !== a) {
                  let handleEthereum = async () => {
                      "undefined" != typeof window &&
                        window.removeEventListener(
                          "ethereum#initialized",
                          handleEthereum
                        );
                      let e = await this.getProvider();
                      return !!e;
                    },
                    e = "number" == typeof a ? a : 1e3,
                    t = await Promise.race([
                      ...("undefined" != typeof window
                        ? [
                            new Promise((e) =>
                              window.addEventListener(
                                "ethereum#initialized",
                                () => e(handleEthereum()),
                                { once: !0 }
                              )
                            ),
                          ]
                        : []),
                      new Promise((t) =>
                        setTimeout(() => t(handleEthereum()), e)
                      ),
                    ]);
                  if (t) return !0;
                }
                throw new ProviderNotFoundError();
              }
              let i = await withRetry(() => this.getAccounts());
              return !!i.length;
            } catch {
              return !1;
            }
          },
          async switchChain({ addEthereumChainParameter: e, chainId: t }) {
            let n = await this.getProvider();
            if (!n) throw new ProviderNotFoundError();
            let i = c.chains.find((e) => e.id === t);
            if (!i) throw new m.x3(new ChainNotConfiguredError());
            try {
              return (
                await Promise.all([
                  n
                    .request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, y.eC)(t) }],
                    })
                    .then(async () => {
                      let e = await this.getChainId();
                      e === t && c.emitter.emit("change", { chainId: t });
                    }),
                  new Promise((e) =>
                    c.emitter.once("change", ({ chainId: n }) => {
                      n === t && e();
                    })
                  ),
                ]),
                i
              );
            } catch (o) {
              if (4902 === o.code || o?.data?.originalError?.code === 4902)
                try {
                  let o, s;
                  let { default: a, ...c } = i.blockExplorers ?? {};
                  e?.blockExplorerUrls
                    ? (o = e.blockExplorerUrls)
                    : a && (o = [a.url, ...Object.values(c).map((e) => e.url)]),
                    (s = e?.rpcUrls?.length
                      ? e.rpcUrls
                      : [i.rpcUrls.default?.http[0] ?? ""]);
                  let u = {
                    blockExplorerUrls: o,
                    chainId: (0, y.eC)(t),
                    chainName: e?.chainName ?? i.name,
                    iconUrls: e?.iconUrls,
                    nativeCurrency: e?.nativeCurrency ?? i.nativeCurrency,
                    rpcUrls: s,
                  };
                  await n.request({
                    method: "wallet_addEthereumChain",
                    params: [u],
                  });
                  let l = await this.getChainId();
                  if (l !== t)
                    throw new m.ab(
                      Error("User rejected switch after adding network.")
                    );
                  return i;
                } catch (e) {
                  throw new m.ab(e);
                }
              if (o.code === m.ab.code) throw new m.ab(o);
              throw new m.x3(o);
            }
          },
          async onAccountsChanged(e) {
            if (0 === e.length) this.onDisconnect();
            else if (c.emitter.listenerCount("connect")) {
              let e = (await this.getChainId()).toString();
              this.onConnect({ chainId: e }),
                s && (await c.storage?.removeItem(`${this.id}.disconnected`));
            } else
              c.emitter.emit("change", { accounts: e.map((e) => (0, v.K)(e)) });
          },
          onChainChanged(e) {
            let t = Number(e);
            c.emitter.emit("change", { chainId: t });
          },
          async onConnect(e) {
            let s = await this.getAccounts();
            if (0 === s.length) return;
            let a = Number(e.chainId);
            c.emitter.emit("connect", { accounts: s, chainId: a });
            let u = await this.getProvider();
            u &&
              (i && (u.removeListener("connect", i), (i = void 0)),
              t ||
                ((t = this.onAccountsChanged.bind(this)),
                u.on("accountsChanged", t)),
              n ||
                ((n = this.onChainChanged.bind(this)), u.on("chainChanged", n)),
              o || ((o = this.onDisconnect.bind(this)), u.on("disconnect", o)));
          },
          async onDisconnect(e) {
            let t = await this.getProvider();
            (e && 1013 === e.code && t && (await this.getAccounts()).length) ||
              (c.emitter.emit("disconnect"),
              t &&
                (n && (t.removeListener("chainChanged", n), (n = void 0)),
                o && (t.removeListener("disconnect", o), (o = void 0)),
                i || ((i = this.onConnect.bind(this)), t.on("connect", i))));
          },
        });
      }
      function findProvider(e, t) {
        function isProvider(e) {
          return "function" == typeof t ? t(e) : "string" != typeof t || e[t];
        }
        let n = e.ethereum;
        return n?.providers
          ? n.providers.find((e) => isProvider(e))
          : n && isProvider(n)
          ? n
          : void 0;
      }
      injected.type = "injected";
      var E = n(2337);
      let Emitter = class Emitter {
        constructor(e) {
          Object.defineProperty(this, "uid", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          }),
            Object.defineProperty(this, "_emitter", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: new E(),
            });
        }
        on(e, t) {
          this._emitter.on(e, t);
        }
        once(e, t) {
          this._emitter.once(e, t);
        }
        off(e, t) {
          this._emitter.off(e, t);
        }
        emit(e, ...t) {
          let n = t[0];
          this._emitter.emit(e, { uid: this.uid, ...n });
        }
        listenerCount(e) {
          return this._emitter.listenerCount(e);
        }
      };
      function deserialize_deserialize(e, t) {
        return JSON.parse(e, (e, n) => {
          let i = n;
          return (
            i?.__type === "bigint" && (i = BigInt(i.value)),
            i?.__type === "Map" && (i = new Map(i.value)),
            t?.(e, i) ?? i
          );
        });
      }
      function getReferenceKey(e, t) {
        return e.slice(0, t).join(".") || ".";
      }
      function getCutoff(e, t) {
        let { length: n } = e;
        for (let i = 0; i < n; ++i) if (e[i] === t) return i + 1;
        return 0;
      }
      function serialize_serialize(e, t, n, i) {
        return JSON.stringify(
          e,
          (function (e, t) {
            let n = "function" == typeof e,
              i = "function" == typeof t,
              o = [],
              s = [];
            return function (a, c) {
              if ("object" == typeof c) {
                if (o.length) {
                  let e = getCutoff(o, this);
                  0 === e ? (o[o.length] = this) : (o.splice(e), s.splice(e)),
                    (s[s.length] = a);
                  let n = getCutoff(o, c);
                  if (0 !== n)
                    return i
                      ? t.call(this, a, c, getReferenceKey(s, n))
                      : `[ref=${getReferenceKey(s, n)}]`;
                } else (o[0] = c), (s[0] = a);
              }
              return n ? e.call(this, a, c) : c;
            };
          })((e, n) => {
            let i = n;
            return (
              "bigint" == typeof i &&
                (i = { __type: "bigint", value: n.toString() }),
              i instanceof Map &&
                (i = { __type: "Map", value: Array.from(n.entries()) }),
              t?.(e, i) ?? i
            );
          }, i),
          n ?? void 0
        );
      }
      let S = { getItem: () => null, setItem: () => {}, removeItem: () => {} },
        P = 256;
      var x = n(3403),
        O = n(3495),
        k = n(764);
      let UrlRequiredError = class UrlRequiredError extends k.G {
        constructor() {
          super(
            "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
            { docsPath: "/docs/clients/intro" }
          );
        }
      };
      var C = n(1078),
        R = n(5869);
      let I = {
        current: 0,
        take() {
          return this.current++;
        },
        reset() {
          this.current = 0;
        },
      };
      var N = n(2394),
        A = n(4306);
      let T = new A.k(8192);
      var _ = n(7055),
        q = n(7887),
        j = n(5877),
        M = n(8495),
        F = n(7214),
        D = class extends F.l {
          constructor(e = {}) {
            super(), (this.config = e), (this.#e = new Map());
          }
          #e;
          build(e, t, n) {
            let i = t.queryKey,
              o = t.queryHash ?? (0, q.Rm)(i, t),
              s = this.get(o);
            return (
              s ||
                ((s = new j.A({
                  cache: this,
                  queryKey: i,
                  queryHash: o,
                  options: e.defaultQueryOptions(t),
                  state: n,
                  defaultOptions: e.getQueryDefaults(i),
                })),
                this.add(s)),
              s
            );
          }
          add(e) {
            this.#e.has(e.queryHash) ||
              (this.#e.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#e.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#e.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            M.V.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#e.get(e);
          }
          getAll() {
            return [...this.#e.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, q._x)(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0
              ? t.filter((t) => (0, q._x)(e, t))
              : t;
          }
          notify(e) {
            M.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            M.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            M.V.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        L = n(153),
        $ = n(7015),
        U = class extends L.F {
          #t;
          #r;
          #n;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#r = e.mutationCache),
              (this.#t = []),
              (this.state = e.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
                submittedAt: 0,
              }),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#t.includes(e) ||
              (this.#t.push(e),
              this.clearGcTimeout(),
              this.#r.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#t = this.#t.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#r.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#t.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#r.remove(this));
          }
          continue() {
            return this.#n?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            this.#n = (0, $.Mz)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#i({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#i({ type: "pause" });
              },
              onContinue: () => {
                this.#i({ type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#r.canRun(this),
            });
            let t = "pending" === this.state.status,
              n = !this.#n.canStart();
            try {
              if (!t) {
                this.#i({ type: "pending", variables: e, isPaused: n }),
                  await this.#r.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#i({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: n,
                  });
              }
              let i = await this.#n.start();
              return (
                await this.#r.config.onSuccess?.(
                  i,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(i, e, this.state.context),
                await this.#r.config.onSettled?.(
                  i,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(i, null, e, this.state.context),
                this.#i({ type: "success", data: i }),
                i
              );
            } catch (t) {
              try {
                throw (
                  (await this.#r.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#r.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context
                  ),
                  t)
                );
              } finally {
                this.#i({ type: "error", error: t });
              }
            } finally {
              this.#r.runNext(this);
            }
          }
          #i(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              M.V.batch(() => {
                this.#t.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#r.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        },
        B = class extends F.l {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#o = new Map()),
              (this.#s = Date.now());
          }
          #o;
          #s;
          build(e, t, n) {
            let i = new U({
              mutationCache: this,
              mutationId: ++this.#s,
              options: e.defaultMutationOptions(t),
              state: n,
            });
            return this.add(i), i;
          }
          add(e) {
            let t = scopeFor(e),
              n = this.#o.get(t) ?? [];
            n.push(e),
              this.#o.set(t, n),
              this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            let t = scopeFor(e);
            if (this.#o.has(t)) {
              let n = this.#o.get(t)?.filter((t) => t !== e);
              n && (0 === n.length ? this.#o.delete(t) : this.#o.set(t, n));
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = this.#o
              .get(scopeFor(e))
              ?.find((e) => "pending" === e.state.status);
            return !t || t === e;
          }
          runNext(e) {
            let t = this.#o
              .get(scopeFor(e))
              ?.find((t) => t !== e && t.state.isPaused);
            return t?.continue() ?? Promise.resolve();
          }
          clear() {
            M.V.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          getAll() {
            return [...this.#o.values()].flat();
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => (0, q.X7)(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => (0, q.X7)(e, t));
          }
          notify(e) {
            M.V.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return M.V.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(q.ZT)))
            );
          }
        };
      function scopeFor(e) {
        return e.options.scope?.id ?? String(e.mutationId);
      }
      var z = n(8944),
        V = n(5182);
      function getNextPageParam(e, { pages: t, pageParams: n }) {
        let i = t.length - 1;
        return e.getNextPageParam(t[i], t, n[i], n);
      }
      function getPreviousPageParam(e, { pages: t, pageParams: n }) {
        return e.getPreviousPageParam?.(t[0], t, n[0], n);
      }
      var G = class {
          #a;
          #r;
          #c;
          #u;
          #l;
          #d;
          #h;
          #f;
          constructor(e = {}) {
            (this.#a = e.queryCache || new D()),
              (this.#r = e.mutationCache || new B()),
              (this.#c = e.defaultOptions || {}),
              (this.#u = new Map()),
              (this.#l = new Map()),
              (this.#d = 0);
          }
          mount() {
            this.#d++,
              1 === this.#d &&
                ((this.#h = z.j.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#a.onFocus());
                })),
                (this.#f = V.N.subscribe(async (e) => {
                  e && (await this.resumePausedMutations(), this.#a.onOnline());
                })));
          }
          unmount() {
            this.#d--,
              0 === this.#d &&
                (this.#h?.(),
                (this.#h = void 0),
                this.#f?.(),
                (this.#f = void 0));
          }
          isFetching(e) {
            return this.#a.findAll({ ...e, fetchStatus: "fetching" }).length;
          }
          isMutating(e) {
            return this.#r.findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#a.get(t.queryHash)?.state.data;
          }
          ensureQueryData(e) {
            let t = this.getQueryData(e.queryKey);
            if (void 0 === t) return this.fetchQuery(e);
            {
              let n = this.defaultQueryOptions(e),
                i = this.#a.build(this, n);
              return (
                e.revalidateIfStale &&
                  i.isStaleByTime((0, q.KC)(n.staleTime, i)) &&
                  this.prefetchQuery(n),
                Promise.resolve(t)
              );
            }
          }
          getQueriesData(e) {
            return this.#a.findAll(e).map(({ queryKey: e, state: t }) => {
              let n = t.data;
              return [e, n];
            });
          }
          setQueryData(e, t, n) {
            let i = this.defaultQueryOptions({ queryKey: e }),
              o = this.#a.get(i.queryHash),
              s = o?.state.data,
              a = (0, q.SE)(t, s);
            if (void 0 !== a)
              return this.#a.build(this, i).setData(a, { ...n, manual: !0 });
          }
          setQueriesData(e, t, n) {
            return M.V.batch(() =>
              this.#a
                .findAll(e)
                .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)])
            );
          }
          getQueryState(e) {
            let t = this.defaultQueryOptions({ queryKey: e });
            return this.#a.get(t.queryHash)?.state;
          }
          removeQueries(e) {
            let t = this.#a;
            M.V.batch(() => {
              t.findAll(e).forEach((e) => {
                t.remove(e);
              });
            });
          }
          resetQueries(e, t) {
            let n = this.#a,
              i = { type: "active", ...e };
            return M.V.batch(
              () => (
                n.findAll(e).forEach((e) => {
                  e.reset();
                }),
                this.refetchQueries(i, t)
              )
            );
          }
          cancelQueries(e = {}, t = {}) {
            let n = { revert: !0, ...t },
              i = M.V.batch(() => this.#a.findAll(e).map((e) => e.cancel(n)));
            return Promise.all(i).then(q.ZT).catch(q.ZT);
          }
          invalidateQueries(e = {}, t = {}) {
            return M.V.batch(() => {
              if (
                (this.#a.findAll(e).forEach((e) => {
                  e.invalidate();
                }),
                "none" === e.refetchType)
              )
                return Promise.resolve();
              let n = { ...e, type: e.refetchType ?? e.type ?? "active" };
              return this.refetchQueries(n, t);
            });
          }
          refetchQueries(e = {}, t) {
            let n = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 },
              i = M.V.batch(() =>
                this.#a
                  .findAll(e)
                  .filter((e) => !e.isDisabled())
                  .map((e) => {
                    let t = e.fetch(void 0, n);
                    return (
                      n.throwOnError || (t = t.catch(q.ZT)),
                      "paused" === e.state.fetchStatus ? Promise.resolve() : t
                    );
                  })
              );
            return Promise.all(i).then(q.ZT);
          }
          fetchQuery(e) {
            let t = this.defaultQueryOptions(e);
            void 0 === t.retry && (t.retry = !1);
            let n = this.#a.build(this, t);
            return n.isStaleByTime((0, q.KC)(t.staleTime, n))
              ? n.fetch(t)
              : Promise.resolve(n.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(q.ZT).catch(q.ZT);
          }
          fetchInfiniteQuery(e) {
            var t;
            return (
              (e.behavior =
                ((t = e.pages),
                {
                  onFetch: (e, n) => {
                    let fetchFn = async () => {
                      let n;
                      let i = e.options,
                        o = e.fetchOptions?.meta?.fetchMore?.direction,
                        s = e.state.data?.pages || [],
                        a = e.state.data?.pageParams || [],
                        c = !1,
                        addSignalProperty = (t) => {
                          Object.defineProperty(t, "signal", {
                            enumerable: !0,
                            get: () => (
                              e.signal.aborted
                                ? (c = !0)
                                : e.signal.addEventListener("abort", () => {
                                    c = !0;
                                  }),
                              e.signal
                            ),
                          });
                        },
                        u = (0, q.cG)(e.options, e.fetchOptions),
                        fetchPage = async (t, n, i) => {
                          if (c) return Promise.reject();
                          if (null == n && t.pages.length)
                            return Promise.resolve(t);
                          let o = {
                            queryKey: e.queryKey,
                            pageParam: n,
                            direction: i ? "backward" : "forward",
                            meta: e.options.meta,
                          };
                          addSignalProperty(o);
                          let s = await u(o),
                            { maxPages: a } = e.options,
                            l = i ? q.Ht : q.VX;
                          return {
                            pages: l(t.pages, s, a),
                            pageParams: l(t.pageParams, n, a),
                          };
                        };
                      if (o && s.length) {
                        let e = "backward" === o,
                          t = e ? getPreviousPageParam : getNextPageParam,
                          c = { pages: s, pageParams: a },
                          u = t(i, c);
                        n = await fetchPage(c, u, e);
                      } else {
                        n = await fetchPage(
                          { pages: [], pageParams: [] },
                          a[0] ?? i.initialPageParam
                        );
                        let e = t ?? s.length;
                        for (let t = 1; t < e; t++) {
                          let e = getNextPageParam(i, n);
                          n = await fetchPage(n, e);
                        }
                      }
                      return n;
                    };
                    e.options.persister
                      ? (e.fetchFn = () =>
                          e.options.persister?.(
                            fetchFn,
                            {
                              queryKey: e.queryKey,
                              meta: e.options.meta,
                              signal: e.signal,
                            },
                            n
                          ))
                      : (e.fetchFn = fetchFn);
                  },
                })),
              this.fetchQuery(e)
            );
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(q.ZT).catch(q.ZT);
          }
          resumePausedMutations() {
            return V.N.isOnline()
              ? this.#r.resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return this.#a;
          }
          getMutationCache() {
            return this.#r;
          }
          getDefaultOptions() {
            return this.#c;
          }
          setDefaultOptions(e) {
            this.#c = e;
          }
          setQueryDefaults(e, t) {
            this.#u.set((0, q.Ym)(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            let t = [...this.#u.values()],
              n = {};
            return (
              t.forEach((t) => {
                (0, q.to)(e, t.queryKey) && (n = { ...n, ...t.defaultOptions });
              }),
              n
            );
          }
          setMutationDefaults(e, t) {
            this.#l.set((0, q.Ym)(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            let t = [...this.#l.values()],
              n = {};
            return (
              t.forEach((t) => {
                (0, q.to)(e, t.mutationKey) &&
                  (n = { ...n, ...t.defaultOptions });
              }),
              n
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            let t = {
              ...this.#c.queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = (0, q.Rm)(t.queryKey, t)),
              void 0 === t.refetchOnReconnect &&
                (t.refetchOnReconnect = "always" !== t.networkMode),
              void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              !0 !== t.enabled && t.queryFn === q.CN && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e?._defaulted
              ? e
              : {
                  ...this.#c.mutations,
                  ...(e?.mutationKey &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            this.#a.clear(), this.#r.clear();
          }
        },
        H = n(7611);
      let K = new G(),
        J = (function (e) {
          let t;
          let {
              multiInjectedProviderDiscovery: n = !0,
              storage: i = (function (e) {
                let {
                  deserialize: t = deserialize_deserialize,
                  key: n = "wagmi",
                  serialize: i = serialize_serialize,
                  storage: o = S,
                } = e;
                function unwrap(e) {
                  return e instanceof Promise
                    ? e.then((e) => e).catch(() => null)
                    : e;
                }
                return {
                  ...o,
                  key: n,
                  async getItem(e, i) {
                    let s = o.getItem(`${n}.${e}`),
                      a = await unwrap(s);
                    return a ? t(a) ?? null : i ?? null;
                  },
                  async setItem(e, t) {
                    let s = `${n}.${e}`;
                    null === t
                      ? await unwrap(o.removeItem(s))
                      : await unwrap(o.setItem(s, i(t)));
                  },
                  async removeItem(e) {
                    await unwrap(o.removeItem(`${n}.${e}`));
                  },
                };
              })({
                storage:
                  "undefined" != typeof window && window.localStorage
                    ? window.localStorage
                    : S,
              }),
              syncConnectedChain: s = !0,
              ssr: a,
              ...c
            } = e,
            u =
              "undefined" != typeof window && n
                ? (function () {
                    let e = new Set(),
                      t = [],
                      request = () =>
                        (function (e) {
                          let handler = (t) => e(t.detail);
                          return (
                            window.addEventListener(
                              "eip6963:announceProvider",
                              handler
                            ),
                            window.dispatchEvent(
                              new CustomEvent("eip6963:requestProvider")
                            ),
                            () =>
                              window.removeEventListener(
                                "eip6963:announceProvider",
                                handler
                              )
                          );
                        })((n) => {
                          t.some(({ info: e }) => e.uuid === n.info.uuid) ||
                            ((t = [...t, n]),
                            e.forEach((e) => e(t, { added: [n] })));
                        }),
                      n = request();
                    return {
                      _listeners: () => e,
                      clear() {
                        e.forEach((e) => e([], { removed: [...t] })), (t = []);
                      },
                      destroy() {
                        this.clear(), e.clear(), n();
                      },
                      findProvider: ({ rdns: e }) =>
                        t.find((t) => t.info.rdns === e),
                      getProviders: () => t,
                      reset() {
                        this.clear(), n(), (n = request());
                      },
                      subscribe: (n, { emitImmediately: i } = {}) => (
                        e.add(n), i && n(t, { added: t }), () => e.delete(n)
                      ),
                    };
                  })()
                : void 0,
            l = vanilla_createStore(() => c.chains),
            d = vanilla_createStore(() =>
              [
                ...(c.connectors ?? []),
                ...(a
                  ? []
                  : u?.getProviders().map(providerDetailToConnector) ?? []),
              ].map(setup)
            );
          function setup(e) {
            var t;
            let n =
                ((t = (function (e = 11) {
                  if (!o || P + e > 512) {
                    (o = ""), (P = 0);
                    for (let e = 0; e < 256; e++)
                      o += ((256 + 256 * Math.random()) | 0)
                        .toString(16)
                        .substring(1);
                  }
                  return o.substring(P, P++ + e);
                })()),
                new Emitter(t)),
              s = {
                ...e({ emitter: n, chains: l.getState(), storage: i }),
                emitter: n,
                uid: n.uid,
              };
            return n.on("connect", connect), s.setup?.(), s;
          }
          function providerDetailToConnector(e) {
            let { info: t } = e,
              n = e.provider;
            return injected({ target: { ...t, id: t.rdns, provider: n } });
          }
          let h = new Map();
          function getInitialState() {
            return {
              chainId: l.getState()[0].id,
              connections: new Map(),
              current: null,
              status: "disconnected",
            };
          }
          let p = "0.0.0-canary-";
          t = x.i.startsWith(p)
            ? Number.parseInt(x.i.replace(p, ""))
            : Number.parseInt(x.i.split(".")[0] ?? "0");
          let v = vanilla_createStore(
            subscribeWithSelector(
              i
                ? persist(getInitialState, {
                    migrate(e, n) {
                      if (n === t) return e;
                      let i = getInitialState(),
                        o =
                          e &&
                          "object" == typeof e &&
                          "chainId" in e &&
                          "number" == typeof e.chainId
                            ? e.chainId
                            : i.chainId;
                      return { ...i, chainId: o };
                    },
                    name: "store",
                    partialize: (e) => ({
                      connections: {
                        __type: "Map",
                        value: Array.from(e.connections.entries()).map(
                          ([e, t]) => {
                            let {
                              id: n,
                              name: i,
                              type: o,
                              uid: s,
                            } = t.connector;
                            return [
                              e,
                              {
                                ...t,
                                connector: { id: n, name: i, type: o, uid: s },
                              },
                            ];
                          }
                        ),
                      },
                      chainId: e.chainId,
                      current: e.current,
                    }),
                    skipHydration: a,
                    storage: i,
                    version: t,
                  })
                : getInitialState
            )
          );
          function change(e) {
            v.setState((t) => {
              let n = t.connections.get(e.uid);
              return n
                ? {
                    ...t,
                    connections: new Map(t.connections).set(e.uid, {
                      accounts: e.accounts ?? n.accounts,
                      chainId: e.chainId ?? n.chainId,
                      connector: n.connector,
                    }),
                  }
                : t;
            });
          }
          function connect(e) {
            "connecting" !== v.getState().status &&
              "reconnecting" !== v.getState().status &&
              v.setState((t) => {
                let n = d.getState().find((t) => t.uid === e.uid);
                return n
                  ? (n.emitter.listenerCount("connect") &&
                      n.emitter.off("connect", change),
                    n.emitter.listenerCount("change") ||
                      n.emitter.on("change", change),
                    n.emitter.listenerCount("disconnect") ||
                      n.emitter.on("disconnect", disconnect),
                    {
                      ...t,
                      connections: new Map(t.connections).set(e.uid, {
                        accounts: e.accounts,
                        chainId: e.chainId,
                        connector: n,
                      }),
                      current: e.uid,
                      status: "connected",
                    })
                  : t;
              });
          }
          function disconnect(e) {
            v.setState((t) => {
              let n = t.connections.get(e.uid);
              if (n) {
                let e = n.connector;
                e.emitter.listenerCount("change") &&
                  n.connector.emitter.off("change", change),
                  e.emitter.listenerCount("disconnect") &&
                    n.connector.emitter.off("disconnect", disconnect),
                  e.emitter.listenerCount("connect") ||
                    n.connector.emitter.on("connect", connect);
              }
              if ((t.connections.delete(e.uid), 0 === t.connections.size))
                return {
                  ...t,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                };
              let i = t.connections.values().next().value;
              return {
                ...t,
                connections: new Map(t.connections),
                current: i.connector.uid,
              };
            });
          }
          return (
            s &&
              v.subscribe(
                ({ connections: e, current: t }) =>
                  t ? e.get(t)?.chainId : void 0,
                (e) => {
                  let t = l.getState().some((t) => t.id === e);
                  if (t)
                    return v.setState((t) => ({
                      ...t,
                      chainId: e ?? t.chainId,
                    }));
                }
              ),
            u?.subscribe((e) => {
              let t = new Map();
              for (let e of d.getState()) t.set(e.id, !0);
              let n = [];
              for (let i of e) {
                let e = setup(providerDetailToConnector(i));
                t.has(e.id) || n.push(e);
              }
              (!i || v.persist.hasHydrated()) &&
                d.setState((e) => [...e, ...n], !0);
            }),
            {
              get chains() {
                return l.getState();
              },
              get connectors() {
                return d.getState();
              },
              storage: i,
              getClient: function (e = {}) {
                let t;
                let n = e.chainId ?? v.getState().chainId,
                  i = l.getState().find((e) => e.id === n);
                if (e.chainId && !i) throw new ChainNotConfiguredError();
                {
                  let e = h.get(v.getState().chainId);
                  if (e && !i) return e;
                  if (!i) throw new ChainNotConfiguredError();
                }
                {
                  let e = h.get(n);
                  if (e) return e;
                }
                if (c.client) t = c.client({ chain: i });
                else {
                  let e = i.id,
                    n = l.getState().map((e) => e.id),
                    o = {},
                    s = Object.entries(c);
                  for (let [t, i] of s)
                    if (
                      "chains" !== t &&
                      "client" !== t &&
                      "connectors" !== t &&
                      "transports" !== t
                    ) {
                      if ("object" == typeof i) {
                        if (e in i) o[t] = i[e];
                        else {
                          let e = n.some((e) => e in i);
                          if (e) continue;
                          o[t] = i;
                        }
                      } else o[t] = i;
                    }
                  t = (function (e) {
                    let {
                        batch: t,
                        cacheTime: n = e.pollingInterval ?? 4e3,
                        ccipRead: i,
                        key: o = "base",
                        name: s = "Base Client",
                        pollingInterval: a = 4e3,
                        type: c = "base",
                      } = e,
                      u = e.chain,
                      l = e.account ? (0, f.T)(e.account) : void 0,
                      {
                        config: d,
                        request: h,
                        value: p,
                      } = e.transport({ chain: u, pollingInterval: a }),
                      v = { ...d, ...p },
                      m = {
                        account: l,
                        batch: t,
                        cacheTime: n,
                        ccipRead: i,
                        chain: u,
                        key: o,
                        name: s,
                        pollingInterval: a,
                        request: h,
                        transport: v,
                        type: c,
                        uid: uid_uid(),
                      };
                    return Object.assign(m, {
                      extend: (function extend(e) {
                        return (t) => {
                          let n = t(e);
                          for (let e in m) delete n[e];
                          let i = { ...e, ...n };
                          return Object.assign(i, { extend: extend(i) });
                        };
                      })(m),
                    });
                  })({
                    ...o,
                    chain: i,
                    batch: o.batch ?? { multicall: !0 },
                    transport: (t) => c.transports[e]({ ...t, connectors: d }),
                  });
                }
                return h.set(n, t), t;
              },
              get state() {
                return v.getState();
              },
              setState(e) {
                let t;
                t = "function" == typeof e ? e(v.getState()) : e;
                let n = getInitialState();
                "object" != typeof t && (t = n);
                let i = Object.keys(n).some((e) => !(e in t));
                i && (t = n), v.setState(t, !0);
              },
              subscribe: (e, t, n) =>
                v.subscribe(
                  e,
                  t,
                  n ? { ...n, fireImmediately: n.emitImmediately } : void 0
                ),
              _internal: {
                mipd: u,
                store: v,
                ssr: !!a,
                syncConnectedChain: s,
                transports: c.transports,
                chains: {
                  setState(e) {
                    let t = "function" == typeof e ? e(l.getState()) : e;
                    if (0 !== t.length) return l.setState(t, !0);
                  },
                  subscribe: (e) => l.subscribe(e),
                },
                connectors: {
                  providerDetailToConnector,
                  setup,
                  setState: (e) =>
                    d.setState(
                      "function" == typeof e ? e(d.getState()) : e,
                      !0
                    ),
                  subscribe: (e) => d.subscribe(e),
                },
                events: { change, connect, disconnect },
              },
            }
          );
        })({
          chains: [h],
          transports: {
            [h.id]: (function (e, t = {}) {
              let {
                batch: n,
                fetchOptions: i,
                key: o = "http",
                name: s = "HTTP JSON-RPC",
                onFetchRequest: a,
                onFetchResponse: c,
                retryDelay: u,
              } = t;
              return ({ chain: l, retryCount: d, timeout: h }) => {
                let { batchSize: f = 1e3, wait: p = 0 } =
                    "object" == typeof n ? n : {},
                  v = t.retryCount ?? d,
                  g = h ?? t.timeout ?? 1e4,
                  b = e || l?.rpcUrls.default.http[0];
                if (!b) throw new UrlRequiredError();
                let w = (function (e, t = {}) {
                  return {
                    async request(n) {
                      let {
                          body: i,
                          onRequest: o = t.onRequest,
                          onResponse: s = t.onResponse,
                          timeout: a = t.timeout ?? 1e4,
                        } = n,
                        c = {
                          ...(t.fetchOptions ?? {}),
                          ...(n.fetchOptions ?? {}),
                        },
                        { headers: u, method: l, signal: d } = c;
                      try {
                        let t;
                        let n = await withTimeout(
                          async ({ signal: t }) => {
                            let n = {
                                ...c,
                                body: Array.isArray(i)
                                  ? (0, R.P)(
                                      i.map((e) => ({
                                        jsonrpc: "2.0",
                                        id: e.id ?? I.take(),
                                        ...e,
                                      }))
                                    )
                                  : (0, R.P)({
                                      jsonrpc: "2.0",
                                      id: i.id ?? I.take(),
                                      ...i,
                                    }),
                                headers: {
                                  ...u,
                                  "Content-Type": "application/json",
                                },
                                method: l || "POST",
                                signal: d || (a > 0 ? t : null),
                              },
                              s = new Request(e, n);
                            o && (await o(s));
                            let h = await fetch(e, n);
                            return h;
                          },
                          {
                            errorInstance: new O.W5({ body: i, url: e }),
                            timeout: a,
                            signal: !0,
                          }
                        );
                        if (
                          (s && (await s(n)),
                          n.headers
                            .get("Content-Type")
                            ?.startsWith("application/json")
                            ? (t = await n.json())
                            : ((t = await n.text()),
                              (t = JSON.parse(t || "{}"))),
                          !n.ok)
                        )
                          throw new O.Gg({
                            body: i,
                            details: (0, R.P)(t.error) || n.statusText,
                            headers: n.headers,
                            status: n.status,
                            url: e,
                          });
                        return t;
                      } catch (t) {
                        if (t instanceof O.Gg || t instanceof O.W5) throw t;
                        throw new O.Gg({ body: i, details: t.message, url: e });
                      }
                    },
                  };
                })(b, {
                  fetchOptions: i,
                  onRequest: a,
                  onResponse: c,
                  timeout: g,
                });
                return (function (
                  {
                    key: e,
                    name: t,
                    request: n,
                    retryCount: i = 3,
                    retryDelay: o = 150,
                    timeout: s,
                    type: a,
                  },
                  c
                ) {
                  let u = uid_uid();
                  return {
                    config: {
                      key: e,
                      name: t,
                      request: n,
                      retryCount: i,
                      retryDelay: o,
                      timeout: s,
                      type: a,
                    },
                    request: (function (e, t = {}) {
                      return async (n, i = {}) => {
                        let {
                            dedupe: o = !1,
                            retryDelay: s = 150,
                            retryCount: a = 3,
                            uid: c,
                          } = { ...t, ...i },
                          u = o
                            ? (0, N.w)((0, y.$G)(`${c}.${(0, R.P)(n)}`))
                            : void 0;
                        return (function (e, { enabled: t = !0, id: n }) {
                          if (!t || !n) return e();
                          if (T.get(n)) return T.get(n);
                          let i = e().finally(() => T.delete(n));
                          return T.set(n, i), i;
                        })(
                          () =>
                            withRetry(
                              async () => {
                                try {
                                  return await e(n);
                                } catch (e) {
                                  switch (e.code) {
                                    case m.s7.code:
                                      throw new m.s7(e);
                                    case m.B.code:
                                      throw new m.B(e);
                                    case m.LX.code:
                                      throw new m.LX(e);
                                    case m.nY.code:
                                      throw new m.nY(e);
                                    case m.XS.code:
                                      throw new m.XS(e);
                                    case m.yR.code:
                                      throw new m.yR(e);
                                    case m.Og.code:
                                      throw new m.Og(e);
                                    case m.pT.code:
                                      throw new m.pT(e);
                                    case m.KB.code:
                                      throw new m.KB(e);
                                    case m.gS.code:
                                      throw new m.gS(e);
                                    case m.Pv.code:
                                      throw new m.Pv(e);
                                    case m.GD.code:
                                      throw new m.GD(e);
                                    case m.ab.code:
                                      throw new m.ab(e);
                                    case m.PE.code:
                                      throw new m.PE(e);
                                    case m.Ts.code:
                                      throw new m.Ts(e);
                                    case m.u5.code:
                                      throw new m.u5(e);
                                    case m.I0.code:
                                      throw new m.I0(e);
                                    case m.x3.code:
                                      throw new m.x3(e);
                                    case 5e3:
                                      throw new m.ab(e);
                                    default:
                                      if (e instanceof k.G) throw e;
                                      throw new m.ir(e);
                                  }
                                }
                              },
                              {
                                delay: ({ count: e, error: t }) => {
                                  if (t && t instanceof O.Gg) {
                                    let e = t?.headers?.get("Retry-After");
                                    if (e?.match(/\d/))
                                      return 1e3 * Number.parseInt(e);
                                  }
                                  return ~~(1 << e) * s;
                                },
                                retryCount: a,
                                shouldRetry: ({ error: e }) =>
                                  "code" in e && "number" == typeof e.code
                                    ? -1 === e.code ||
                                      e.code === m.Pv.code ||
                                      e.code === m.XS.code
                                    : !(e instanceof O.Gg) ||
                                      !e.status ||
                                      403 === e.status ||
                                      408 === e.status ||
                                      413 === e.status ||
                                      429 === e.status ||
                                      500 === e.status ||
                                      502 === e.status ||
                                      503 === e.status ||
                                      504 === e.status,
                              }
                            ),
                          { enabled: o, id: u }
                        );
                      };
                    })(n, { retryCount: i, retryDelay: o, uid: u }),
                    value: c,
                  };
                })(
                  {
                    key: o,
                    name: s,
                    async request({ method: e, params: t }) {
                      let i = { method: e, params: t },
                        { schedule: o } = (0, C.S)({
                          id: b,
                          wait: p,
                          shouldSplitBatch: (e) => e.length > f,
                          fn: (e) => w.request({ body: e }),
                          sort: (e, t) => e.id - t.id,
                        }),
                        fn = async (e) =>
                          n ? o(e) : [await w.request({ body: e })],
                        [{ error: s, result: a }] = await fn(i);
                      if (s) throw new O.bs({ body: i, error: s, url: b });
                      return a;
                    },
                    retryCount: v,
                    retryDelay: u,
                    timeout: g,
                    type: "http",
                  },
                  { fetchOptions: i, url: b }
                );
              };
            })(
              "https://scroll.blockpi.network/v1/rpc/c2aeb0a284b9c2e9190b336319dea80cbf010911"
            ),
          },
        });
      function App(e) {
        let { Component: t, pageProps: n } = e,
          i = Q({
            url: "https://Petsmarkets-backend.xyz/graphql",
            exchanges: [cacheExchange, fetchExchange],
          });
        return (0, s.jsx)(_.F, {
          config: J,
          children: (0, s.jsx)(H.aH, {
            client: K,
            children: (0, s.jsx)(d.zt, {
              value: i,
              children: (0, s.jsx)(t, { ...n }),
            }),
          }),
        });
      }
    },
    4869: function () {},
    4655: function (e, t, n) {
      "use strict";
      n.d(t, {
        aM: function () {
          return useQuery;
        },
        zt: function () {
          return c;
        },
      });
      var i = n(143),
        o = n(5271),
        s = n(715),
        a = o.createContext({}),
        c = a.Provider;
      a.Consumer, (a.displayName = "UrqlContext");
      var useClient = () => o.useContext(a),
        u = {
          fetching: !1,
          stale: !1,
          error: void 0,
          data: void 0,
          extensions: void 0,
          operation: void 0,
        },
        areOperationsEqual = (e, t) =>
          e === t || !(!e || !t || e.key !== t.key),
        computeNextState = (e, t) => {
          var n = {
            ...e,
            ...t,
            data: void 0 !== t.data || t.error ? t.data : e.data,
            fetching: !!t.fetching,
            stale: !!t.stale,
          };
          return ((e, t) => {
            for (var n in e) if (!(n in t)) return !0;
            for (var i in t)
              if (
                "operation" === i
                  ? !areOperationsEqual(e[i], t[i])
                  : e[i] !== t[i]
              )
                return !0;
            return !1;
          })(e, n)
            ? n
            : e;
        },
        hasDepsChanged = (e, t) => {
          for (var n = 0, i = t.length; n < i; n++)
            if (e[n] !== t[n]) return !0;
          return !1;
        };
      o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var getCacheForClient = (e) => {
          if (!e._react) {
            var t = new Set(),
              n = new Map();
            e.operations$ &&
              (0, s.Ld)((e) => {
                "teardown" === e.kind &&
                  t.has(e.key) &&
                  (t.delete(e.key), n.delete(e.key));
              })(e.operations$),
              (e._react = {
                get: (e) => n.get(e),
                set(e, i) {
                  t.delete(e), n.set(e, i);
                },
                dispose(e) {
                  t.add(e);
                },
              });
          }
          return e._react;
        },
        isSuspense = (e, t) =>
          t && void 0 !== t.suspense ? !!t.suspense : e.suspense;
      function useQuery(e) {
        var t,
          n,
          a,
          c = useClient(),
          l = getCacheForClient(c),
          d = isSuspense(c, e.context),
          h =
            ((t = e.query),
            (n = e.variables),
            (a = o.useRef(void 0)),
            o.useMemo(() => {
              var e = (0, i.h)(t, n);
              return void 0 !== a.current && a.current.key === e.key
                ? a.current
                : ((a.current = e), e);
            }, [t, n])),
          f = o.useMemo(() => {
            if (e.pause) return null;
            var t = c.executeQuery(h, {
              requestPolicy: e.requestPolicy,
              ...e.context,
            });
            return d
              ? (0, s.Mq)((e) => {
                  l.set(h.key, e);
                })(t)
              : t;
          }, [l, c, h, d, e.pause, e.requestPolicy, e.context]),
          p = o.useCallback(
            (e, t) => {
              if (!e) return { fetching: !1 };
              var n = l.get(h.key);
              if (n) {
                if (t && null != n && "then" in n) throw n;
              } else {
                var i,
                  o = (0, s.Ld)((e) => {
                    (n = e), i && i(n);
                  })((0, s.oE)(() => (t && !i) || !n)(e));
                if (null == n && t) {
                  var a = new Promise((e) => {
                    i = e;
                  });
                  throw (l.set(h.key, a), a);
                }
                o.unsubscribe();
              }
              return n || { fetching: !0 };
            },
            [l, h]
          ),
          v = [c, h, e.requestPolicy, e.context, e.pause],
          [m, y] = o.useState(() => [f, computeNextState(u, p(f, d)), v]),
          g = m[1];
        return (
          f !== m[0] &&
            hasDepsChanged(m[2], v) &&
            y([f, (g = computeNextState(m[1], p(f, d))), v]),
          o.useEffect(() => {
            var e = m[0],
              t = m[2][1],
              n = !1,
              updateResult = (e) => {
                (n = !0),
                  y((t) => {
                    var n = computeNextState(t[1], e);
                    return t[1] !== n ? [t[0], n, t[2]] : t;
                  });
              };
            if (e) {
              var i = (0, s.Ld)(updateResult)(
                (0, s.ok)(() => {
                  updateResult({ fetching: !1 });
                })(e)
              );
              return (
                n || updateResult({ fetching: !0 }),
                () => {
                  l.dispose(t.key), i.unsubscribe();
                }
              );
            }
            updateResult({ fetching: !1 });
          }, [l, m[0], m[2][1]]),
          [
            g,
            o.useCallback(
              (t) => {
                var n = { requestPolicy: e.requestPolicy, ...e.context, ...t };
                y((e) => [
                  d
                    ? (0, s.Mq)((e) => {
                        l.set(h.key, e);
                      })(c.executeQuery(h, n))
                    : c.executeQuery(h, n),
                  e[1],
                  v,
                ]);
              },
              [c, l, h, d, e.requestPolicy, e.context, e.pause]
            ),
          ]
        );
      }
    },
    9598: function (e, t, n) {
      "use strict";
      n.d(t, {
        Qc: function () {
          return parse;
        },
        S0: function () {
          return print;
        },
        __: function () {
          return GraphQLError;
        },
        hY: function () {
          return c;
        },
      });
      var i,
        o,
        s,
        a,
        c = {
          NAME: "Name",
          DOCUMENT: "Document",
          OPERATION_DEFINITION: "OperationDefinition",
          VARIABLE_DEFINITION: "VariableDefinition",
          SELECTION_SET: "SelectionSet",
          FIELD: "Field",
          ARGUMENT: "Argument",
          FRAGMENT_SPREAD: "FragmentSpread",
          INLINE_FRAGMENT: "InlineFragment",
          FRAGMENT_DEFINITION: "FragmentDefinition",
          VARIABLE: "Variable",
          INT: "IntValue",
          FLOAT: "FloatValue",
          STRING: "StringValue",
          BOOLEAN: "BooleanValue",
          NULL: "NullValue",
          ENUM: "EnumValue",
          LIST: "ListValue",
          OBJECT: "ObjectValue",
          OBJECT_FIELD: "ObjectField",
          DIRECTIVE: "Directive",
          NAMED_TYPE: "NamedType",
          LIST_TYPE: "ListType",
          NON_NULL_TYPE: "NonNullType",
        };
      let GraphQLError = class GraphQLError extends Error {
        constructor(e, t, n, i, o, s, a) {
          super(e),
            (this.name = "GraphQLError"),
            (this.message = e),
            o && (this.path = o),
            t && (this.nodes = Array.isArray(t) ? t : [t]),
            n && (this.source = n),
            i && (this.positions = i),
            s && (this.originalError = s);
          var c = a;
          if (!c && s) {
            var u = s.extensions;
            u && "object" == typeof u && (c = u);
          }
          this.extensions = c || {};
        }
        toJSON() {
          return { ...this, message: this.message };
        }
        toString() {
          return this.message;
        }
        get [Symbol.toStringTag]() {
          return "GraphQLError";
        }
      };
      function error(e) {
        return new GraphQLError(
          `Syntax Error: Unexpected token at ${a} in ${e}`
        );
      }
      function advance(e) {
        if (((e.lastIndex = a), e.test(s)))
          return s.slice(a, (a = e.lastIndex));
      }
      var u = / +(?=[^\s])/y;
      function ignored() {
        for (
          var e = 0 | s.charCodeAt(a++);
          9 === e ||
          10 === e ||
          13 === e ||
          32 === e ||
          35 === e ||
          44 === e ||
          65279 === e;
          e = 0 | s.charCodeAt(a++)
        )
          if (35 === e) for (; 10 !== (e = s.charCodeAt(a++)) && 13 !== e; );
        a--;
      }
      var l = /[_A-Za-z]\w*/y,
        d = RegExp(
          "(?:(null|true|false)|\\$(" +
            l.source +
            ')|(-?\\d+)((?:\\.\\d+)?[eE][+-]?\\d+|\\.\\d+)?|("""(?:"""|(?:[\\s\\S]*?[^\\\\])"""))|("(?:"|[^\\r\\n]*?[^\\\\]"))|(' +
            l.source +
            "))",
          "y"
        ),
        h =
          (((i = h || {})[(i.Const = 1)] = "Const"),
          (i[(i.Var = 2)] = "Var"),
          (i[(i.Int = 3)] = "Int"),
          (i[(i.Float = 4)] = "Float"),
          (i[(i.BlockString = 5)] = "BlockString"),
          (i[(i.String = 6)] = "String"),
          (i[(i.Enum = 7)] = "Enum"),
          i),
        f = /\\/g;
      function value(e) {
        if (((d.lastIndex = a), 91 === s.charCodeAt(a))) {
          a++, ignored();
          for (var t, n, i, o = []; 93 !== s.charCodeAt(a); ) o.push(value(e));
          return a++, ignored(), { kind: "ListValue", values: o };
        }
        if (123 === s.charCodeAt(a)) {
          a++, ignored();
          for (var c = []; 125 !== s.charCodeAt(a); ) {
            if (
              null == (t = advance(l)) ||
              (ignored(), 58 !== s.charCodeAt(a++))
            )
              throw error("ObjectField");
            ignored(),
              c.push({
                kind: "ObjectField",
                name: { kind: "Name", value: t },
                value: value(e),
              });
          }
          return a++, ignored(), { kind: "ObjectValue", fields: c };
        }
        if (null != (n = d.exec(s))) {
          if (((a = d.lastIndex), ignored(), null != (t = n[h.Const])))
            return "null" === t
              ? { kind: "NullValue" }
              : { kind: "BooleanValue", value: "true" === t };
          if (null != (t = n[h.Var])) {
            if (!e)
              return { kind: "Variable", name: { kind: "Name", value: t } };
            throw error("Variable");
          }
          if (null != (t = n[h.Int]))
            return null != (i = n[h.Float])
              ? { kind: "FloatValue", value: t + i }
              : { kind: "IntValue", value: t };
          if (null != (t = n[h.BlockString]))
            return {
              kind: "StringValue",
              value: (function (e) {
                for (
                  var t = e.split("\n"),
                    n = "",
                    i = 0,
                    o = 0,
                    s = t.length - 1,
                    a = 0;
                  a < t.length;
                  a++
                )
                  (u.lastIndex = 0),
                    u.test(t[a]) &&
                      (a && (!i || u.lastIndex < i) && (i = u.lastIndex),
                      (o = o || a),
                      (s = a));
                for (var c = o; c <= s; c++)
                  c !== o && (n += "\n"),
                    (n += t[c].slice(i).replace(/\\"""/g, '"""'));
                return n;
              })(t.slice(3, -3)),
              block: !0,
            };
          else if (null != (t = n[h.String]))
            return {
              kind: "StringValue",
              value: f.test(t) ? JSON.parse(t) : t.slice(1, -1),
              block: !1,
            };
          else if (null != (t = n[h.Enum]))
            return { kind: "EnumValue", value: t };
        }
        throw error("Value");
      }
      function arguments_(e) {
        if (40 === s.charCodeAt(a)) {
          var t,
            n = [];
          a++, ignored();
          do {
            if (
              null == (t = advance(l)) ||
              (ignored(), 58 !== s.charCodeAt(a++))
            )
              throw error("Argument");
            ignored(),
              n.push({
                kind: "Argument",
                name: { kind: "Name", value: t },
                value: value(e),
              });
          } while (41 !== s.charCodeAt(a));
          return a++, ignored(), n;
        }
      }
      function directives(e) {
        if (64 === s.charCodeAt(a)) {
          var t,
            n = [];
          do {
            if ((a++, null == (t = advance(l)))) throw error("Directive");
            ignored(),
              n.push({
                kind: "Directive",
                name: { kind: "Name", value: t },
                arguments: arguments_(e),
              });
          } while (64 === s.charCodeAt(a));
          return n;
        }
      }
      var p = RegExp("(?:(\\.{3})|(" + l.source + "))", "y"),
        v =
          (((o = v || {})[(o.Spread = 1)] = "Spread"),
          (o[(o.Name = 2)] = "Name"),
          o);
      function selectionSet() {
        var e,
          t,
          n = [];
        do
          if (((p.lastIndex = a), null != (t = p.exec(s)))) {
            if (((a = p.lastIndex), null != t[v.Spread])) {
              ignored();
              var i = advance(l);
              if (null != i && "on" !== i)
                ignored(),
                  n.push({
                    kind: "FragmentSpread",
                    name: { kind: "Name", value: i },
                    directives: directives(!1),
                  });
              else {
                if ((ignored(), "on" === i)) {
                  if (null == (i = advance(l))) throw error("NamedType");
                  ignored();
                }
                var o = directives(!1);
                if (123 !== s.charCodeAt(a++)) throw error("InlineFragment");
                ignored(),
                  n.push({
                    kind: "InlineFragment",
                    typeCondition: i
                      ? { kind: "NamedType", name: { kind: "Name", value: i } }
                      : void 0,
                    directives: o,
                    selectionSet: selectionSet(),
                  });
              }
            } else if (null != (e = t[v.Name])) {
              var c = void 0;
              if ((ignored(), 58 === s.charCodeAt(a))) {
                if ((a++, ignored(), (c = e), null == (e = advance(l))))
                  throw error("Field");
                ignored();
              }
              var u = arguments_(!1);
              ignored();
              var d = directives(!1),
                h = void 0;
              123 === s.charCodeAt(a) && (a++, ignored(), (h = selectionSet())),
                n.push({
                  kind: "Field",
                  alias: c ? { kind: "Name", value: c } : void 0,
                  name: { kind: "Name", value: e },
                  arguments: u,
                  directives: d,
                  selectionSet: h,
                });
            }
          } else throw error("SelectionSet");
        while (125 !== s.charCodeAt(a));
        return a++, ignored(), { kind: "SelectionSet", selections: n };
      }
      var m = /(?:query|mutation|subscription|fragment)/y;
      function parse(e, t) {
        return (
          (s = "string" == typeof e.body ? e.body : e),
          (a = 0),
          (function () {
            ignored();
            var e,
              t,
              n = [];
            do
              if ("fragment" === (e = advance(m)))
                ignored(),
                  n.push(
                    (function () {
                      if (
                        null == (e = advance(l)) ||
                        (ignored(), "on" !== advance(l)) ||
                        (ignored(), null == (t = advance(l)))
                      )
                        throw error("FragmentDefinition");
                      ignored();
                      var e,
                        t,
                        n = directives(!1);
                      if (123 !== s.charCodeAt(a++))
                        throw error("FragmentDefinition");
                      return (
                        ignored(),
                        {
                          kind: "FragmentDefinition",
                          name: { kind: "Name", value: e },
                          typeCondition: {
                            kind: "NamedType",
                            name: { kind: "Name", value: t },
                          },
                          directives: n,
                          selectionSet: selectionSet(),
                        }
                      );
                    })()
                  );
              else if (
                null !=
                (t = (function (e) {
                  var t, n, i;
                  if (
                    (e &&
                      (ignored(),
                      (t = advance(l)),
                      (n = (function () {
                        if ((ignored(), 40 === s.charCodeAt(a))) {
                          var e,
                            t = [];
                          a++, ignored();
                          do {
                            if (
                              36 !== s.charCodeAt(a++) ||
                              null == (e = advance(l))
                            )
                              throw error("Variable");
                            if ((ignored(), 58 !== s.charCodeAt(a++)))
                              throw error("VariableDefinition");
                            ignored();
                            var n = (function () {
                                for (var e, t = 0; 91 === s.charCodeAt(a); )
                                  t++, a++, ignored();
                                if (null == (e = advance(l)))
                                  throw error("NamedType");
                                ignored();
                                var n = {
                                  kind: "NamedType",
                                  name: { kind: "Name", value: e },
                                };
                                do
                                  if (
                                    (33 === s.charCodeAt(a) &&
                                      (a++,
                                      ignored(),
                                      (n = { kind: "NonNullType", type: n })),
                                    t)
                                  ) {
                                    if (93 !== s.charCodeAt(a++))
                                      throw error("NamedType");
                                    ignored(),
                                      (n = { kind: "ListType", type: n });
                                  }
                                while (t--);
                                return n;
                              })(),
                              i = void 0;
                            61 === s.charCodeAt(a) &&
                              (a++, ignored(), (i = value(!0))),
                              ignored(),
                              t.push({
                                kind: "VariableDefinition",
                                variable: {
                                  kind: "Variable",
                                  name: { kind: "Name", value: e },
                                },
                                type: n,
                                defaultValue: i,
                                directives: directives(!0),
                              });
                          } while (41 !== s.charCodeAt(a));
                          return a++, ignored(), t;
                        }
                      })()),
                      (i = directives(!1))),
                    123 === s.charCodeAt(a))
                  )
                    return (
                      a++,
                      ignored(),
                      {
                        kind: "OperationDefinition",
                        operation: e || "query",
                        name: t ? { kind: "Name", value: t } : void 0,
                        variableDefinitions: n,
                        directives: i,
                        selectionSet: selectionSet(),
                      }
                    );
                })(e))
              )
                n.push(t);
              else throw error("Document");
            while (a < s.length);
            return { kind: "Document", definitions: n };
          })()
        );
      }
      function mapJoin(e, t, n) {
        for (var i = "", o = 0; o < e.length; o++)
          o && (i += t), (i += n(e[o]));
        return i;
      }
      var y = "\n",
        g = {
          OperationDefinition(e) {
            var t = e.operation;
            return (
              e.name && (t += " " + e.name.value),
              e.variableDefinitions &&
                e.variableDefinitions.length &&
                (e.name || (t += " "),
                (t +=
                  "(" +
                  mapJoin(e.variableDefinitions, ", ", g.VariableDefinition) +
                  ")")),
              e.directives &&
                e.directives.length &&
                (t += " " + mapJoin(e.directives, " ", g.Directive)),
              "query" !== t
                ? t + " " + g.SelectionSet(e.selectionSet)
                : g.SelectionSet(e.selectionSet)
            );
          },
          VariableDefinition(e) {
            var t = g.Variable(e.variable) + ": " + _print(e.type);
            return (
              e.defaultValue && (t += " = " + _print(e.defaultValue)),
              e.directives &&
                e.directives.length &&
                (t += " " + mapJoin(e.directives, " ", g.Directive)),
              t
            );
          },
          Field(e) {
            var t = e.alias
              ? e.alias.value + ": " + e.name.value
              : e.name.value;
            if (e.arguments && e.arguments.length) {
              var n = mapJoin(e.arguments, ", ", g.Argument);
              t.length + n.length + 2 > 80
                ? (t +=
                    "(" +
                    (y += "  ") +
                    mapJoin(e.arguments, y, g.Argument) +
                    (y = y.slice(0, -2)) +
                    ")")
                : (t += "(" + n + ")");
            }
            return (
              e.directives &&
                e.directives.length &&
                (t += " " + mapJoin(e.directives, " ", g.Directive)),
              e.selectionSet && (t += " " + g.SelectionSet(e.selectionSet)),
              t
            );
          },
          StringValue: (e) =>
            e.block
              ? ('"""\n' + e.value.replace(/"""/g, '\\"""') + '\n"""').replace(
                  /\n/g,
                  y
                )
              : JSON.stringify(e.value),
          BooleanValue: (e) => "" + e.value,
          NullValue: (e) => "null",
          IntValue: (e) => e.value,
          FloatValue: (e) => e.value,
          EnumValue: (e) => e.value,
          Name: (e) => e.value,
          Variable: (e) => "$" + e.name.value,
          ListValue: (e) => "[" + mapJoin(e.values, ", ", _print) + "]",
          ObjectValue: (e) =>
            "{" + mapJoin(e.fields, ", ", g.ObjectField) + "}",
          ObjectField: (e) => e.name.value + ": " + _print(e.value),
          Document: (e) =>
            e.definitions && e.definitions.length
              ? mapJoin(e.definitions, "\n\n", _print)
              : "",
          SelectionSet: (e) =>
            "{" +
            (y += "  ") +
            mapJoin(e.selections, y, _print) +
            (y = y.slice(0, -2)) +
            "}",
          Argument: (e) => e.name.value + ": " + _print(e.value),
          FragmentSpread(e) {
            var t = "..." + e.name.value;
            return (
              e.directives &&
                e.directives.length &&
                (t += " " + mapJoin(e.directives, " ", g.Directive)),
              t
            );
          },
          InlineFragment(e) {
            var t = "...";
            return (
              e.typeCondition && (t += " on " + e.typeCondition.name.value),
              e.directives &&
                e.directives.length &&
                (t += " " + mapJoin(e.directives, " ", g.Directive)),
              t + " " + g.SelectionSet(e.selectionSet)
            );
          },
          FragmentDefinition(e) {
            var t = "fragment " + e.name.value;
            return (
              (t += " on " + e.typeCondition.name.value),
              e.directives &&
                e.directives.length &&
                (t += " " + mapJoin(e.directives, " ", g.Directive)),
              t + " " + g.SelectionSet(e.selectionSet)
            );
          },
          Directive(e) {
            var t = "@" + e.name.value;
            return (
              e.arguments &&
                e.arguments.length &&
                (t += "(" + mapJoin(e.arguments, ", ", g.Argument) + ")"),
              t
            );
          },
          NamedType: (e) => e.name.value,
          ListType: (e) => "[" + _print(e.type) + "]",
          NonNullType: (e) => _print(e.type) + "!",
        },
        _print = (e) => g[e.kind](e);
      function print(e) {
        return (y = "\n"), g[e.kind] ? g[e.kind](e) : "";
      }
    },
    8944: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return s;
        },
      });
      var i = n(7214),
        o = n(7887),
        s = new (class extends i.l {
          #p;
          #v;
          #m;
          constructor() {
            super(),
              (this.#m = (e) => {
                if (!o.sk && window.addEventListener) {
                  let listener = () => e();
                  return (
                    window.addEventListener("visibilitychange", listener, !1),
                    () => {
                      window.removeEventListener("visibilitychange", listener);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#v || this.setEventListener(this.#m);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#v?.(), (this.#v = void 0));
          }
          setEventListener(e) {
            (this.#m = e),
              this.#v?.(),
              (this.#v = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            let t = this.#p !== e;
            t && ((this.#p = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#p
              ? this.#p
              : globalThis.document?.visibilityState !== "hidden";
          }
        })();
    },
    8495: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return i;
        },
      });
      var i = (function () {
        let e = [],
          t = 0,
          notifyFn = (e) => {
            e();
          },
          batchNotifyFn = (e) => {
            e();
          },
          scheduleFn = (e) => setTimeout(e, 0),
          schedule = (n) => {
            t
              ? e.push(n)
              : scheduleFn(() => {
                  notifyFn(n);
                });
          },
          flush = () => {
            let t = e;
            (e = []),
              t.length &&
                scheduleFn(() => {
                  batchNotifyFn(() => {
                    t.forEach((e) => {
                      notifyFn(e);
                    });
                  });
                });
          };
        return {
          batch: (e) => {
            let n;
            t++;
            try {
              n = e();
            } finally {
              --t || flush();
            }
            return n;
          },
          batchCalls:
            (e) =>
            (...t) => {
              schedule(() => {
                e(...t);
              });
            },
          schedule,
          setNotifyFunction: (e) => {
            notifyFn = e;
          },
          setBatchNotifyFunction: (e) => {
            batchNotifyFn = e;
          },
          setScheduler: (e) => {
            scheduleFn = e;
          },
        };
      })();
    },
    5182: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return s;
        },
      });
      var i = n(7214),
        o = n(7887),
        s = new (class extends i.l {
          #y = !0;
          #v;
          #m;
          constructor() {
            super(),
              (this.#m = (e) => {
                if (!o.sk && window.addEventListener) {
                  let onlineListener = () => e(!0),
                    offlineListener = () => e(!1);
                  return (
                    window.addEventListener("online", onlineListener, !1),
                    window.addEventListener("offline", offlineListener, !1),
                    () => {
                      window.removeEventListener("online", onlineListener),
                        window.removeEventListener("offline", offlineListener);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#v || this.setEventListener(this.#m);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#v?.(), (this.#v = void 0));
          }
          setEventListener(e) {
            (this.#m = e),
              this.#v?.(),
              (this.#v = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            let t = this.#y !== e;
            t &&
              ((this.#y = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#y;
          }
        })();
    },
    5877: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return c;
        },
        z: function () {
          return fetchState;
        },
      });
      var i = n(7887),
        o = n(8495),
        s = n(7015),
        a = n(153),
        c = class extends a.F {
          #g;
          #b;
          #w;
          #n;
          #c;
          #E;
          constructor(e) {
            super(),
              (this.#E = !1),
              (this.#c = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#w = e.cache),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#g =
                e.state ||
                (function (e) {
                  let t =
                      "function" == typeof e.initialData
                        ? e.initialData()
                        : e.initialData,
                    n = void 0 !== t,
                    i = n
                      ? "function" == typeof e.initialDataUpdatedAt
                        ? e.initialDataUpdatedAt()
                        : e.initialDataUpdatedAt
                      : 0;
                  return {
                    data: t,
                    dataUpdateCount: 0,
                    dataUpdatedAt: n ? i ?? Date.now() : 0,
                    error: null,
                    errorUpdateCount: 0,
                    errorUpdatedAt: 0,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: null,
                    isInvalidated: !1,
                    status: n ? "success" : "pending",
                    fetchStatus: "idle",
                  };
                })(this.options)),
              (this.state = this.#g),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#n?.promise;
          }
          setOptions(e) {
            (this.options = { ...this.#c, ...e }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#w.remove(this);
          }
          setData(e, t) {
            let n = (0, i.oE)(this.state.data, e, this.options);
            return (
              this.#i({
                data: n,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              n
            );
          }
          setState(e, t) {
            this.#i({ type: "setState", state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#n?.promise;
            return (
              this.#n?.cancel(e),
              t ? t.then(i.ZT).catch(i.ZT) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#g);
          }
          isActive() {
            return this.observers.some((e) => !1 !== e.options.enabled);
          }
          isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive();
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((e) => e.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(e = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !(0, i.Kp)(this.state.dataUpdatedAt, e)
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#n?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#n?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#w.notify({
                type: "observerAdded",
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#n &&
                  (this.#E
                    ? this.#n.cancel({ revert: !0 })
                    : this.#n.cancelRetry()),
                this.scheduleGc()),
              this.#w.notify({
                type: "observerRemoved",
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#i({ type: "invalidate" });
          }
          fetch(e, t) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#n) return this.#n.continueRetry(), this.#n.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let n = new AbortController(),
              addSignalProperty = (e) => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => ((this.#E = !0), n.signal),
                });
              },
              o = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () => {
                  let e = (0, i.cG)(this.options, t),
                    n = { queryKey: this.queryKey, meta: this.meta };
                  return (addSignalProperty(n),
                  (this.#E = !1),
                  this.options.persister)
                    ? this.options.persister(e, n, this)
                    : e(n);
                },
              };
            addSignalProperty(o),
              this.options.behavior?.onFetch(o, this),
              (this.#b = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== o.fetchOptions?.meta) &&
                this.#i({ type: "fetch", meta: o.fetchOptions?.meta });
            let onError = (e) => {
              ((0, s.DV)(e) && e.silent) ||
                this.#i({ type: "error", error: e }),
                (0, s.DV)(e) ||
                  (this.#w.config.onError?.(e, this),
                  this.#w.config.onSettled?.(this.state.data, e, this)),
                this.isFetchingOptimistic || this.scheduleGc(),
                (this.isFetchingOptimistic = !1);
            };
            return (
              (this.#n = (0, s.Mz)({
                initialPromise: t?.initialPromise,
                fn: o.fetchFn,
                abort: n.abort.bind(n),
                onSuccess: (e) => {
                  if (void 0 === e) {
                    onError(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  this.setData(e),
                    this.#w.config.onSuccess?.(e, this),
                    this.#w.config.onSettled?.(e, this.state.error, this),
                    this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1);
                },
                onError,
                onFail: (e, t) => {
                  this.#i({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#i({ type: "pause" });
                },
                onContinue: () => {
                  this.#i({ type: "continue" });
                },
                retry: o.options.retry,
                retryDelay: o.options.retryDelay,
                networkMode: o.options.networkMode,
                canRun: () => !0,
              })),
              this.#n.start()
            );
          }
          #i(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case "pause":
                  return { ...t, fetchStatus: "paused" };
                case "continue":
                  return { ...t, fetchStatus: "fetching" };
                case "fetch":
                  return {
                    ...t,
                    ...fetchState(t.data, this.options),
                    fetchMeta: e.meta ?? null,
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!e.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let n = e.error;
                  if ((0, s.DV)(n) && n.revert && this.#b)
                    return { ...this.#b, fetchStatus: "idle" };
                  return {
                    ...t,
                    error: n,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: n,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...t, isInvalidated: !0 };
                case "setState":
                  return { ...t, ...e.state };
              }
            })(this.state)),
              o.V.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#w.notify({ query: this, type: "updated", action: e });
              });
          }
        };
      function fetchState(e, t) {
        return {
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchStatus: (0, s.Kw)(t.networkMode) ? "fetching" : "paused",
          ...(void 0 === e && { error: null, status: "pending" }),
        };
      }
    },
    153: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return o;
        },
      });
      var i = n(7887),
        o = class {
          #S;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            this.clearGcTimeout(),
              (0, i.PN)(this.gcTime) &&
                (this.#S = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (i.sk ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#S && (clearTimeout(this.#S), (this.#S = void 0));
          }
        };
    },
    7015: function (e, t, n) {
      "use strict";
      n.d(t, {
        DV: function () {
          return isCancelledError;
        },
        Kw: function () {
          return canFetch;
        },
        Mz: function () {
          return createRetryer;
        },
      });
      var i = n(8944),
        o = n(5182),
        s = n(7887);
      function defaultRetryDelay(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function canFetch(e) {
        return (e ?? "online") !== "online" || o.N.isOnline();
      }
      var a = class {
        constructor(e) {
          (this.revert = e?.revert), (this.silent = e?.silent);
        }
      };
      function isCancelledError(e) {
        return e instanceof a;
      }
      function createRetryer(e) {
        let t,
          n,
          c,
          u = !1,
          l = 0,
          d = !1,
          h = new Promise((e, t) => {
            (n = e), (c = t);
          }),
          canContinue = () =>
            i.j.isFocused() &&
            ("always" === e.networkMode || o.N.isOnline()) &&
            e.canRun(),
          canStart = () => canFetch(e.networkMode) && e.canRun(),
          resolve = (i) => {
            d || ((d = !0), e.onSuccess?.(i), t?.(), n(i));
          },
          reject = (n) => {
            d || ((d = !0), e.onError?.(n), t?.(), c(n));
          },
          pause = () =>
            new Promise((n) => {
              (t = (e) => {
                (d || canContinue()) && n(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), d || e.onContinue?.();
            }),
          run = () => {
            let t;
            if (d) return;
            let n = 0 === l ? e.initialPromise : void 0;
            try {
              t = n ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(resolve)
              .catch((t) => {
                if (d) return;
                let n = e.retry ?? (s.sk ? 0 : 3),
                  i = e.retryDelay ?? defaultRetryDelay,
                  o = "function" == typeof i ? i(l, t) : i,
                  a =
                    !0 === n ||
                    ("number" == typeof n && l < n) ||
                    ("function" == typeof n && n(l, t));
                if (u || !a) {
                  reject(t);
                  return;
                }
                l++,
                  e.onFail?.(l, t),
                  (0, s._v)(o)
                    .then(() => (canContinue() ? void 0 : pause()))
                    .then(() => {
                      u ? reject(t) : run();
                    });
              });
          };
        return {
          promise: h,
          cancel: (t) => {
            d || (reject(new a(t)), e.abort?.());
          },
          continue: () => (t?.(), h),
          cancelRetry: () => {
            u = !0;
          },
          continueRetry: () => {
            u = !1;
          },
          canStart,
          start: () => (canStart() ? run() : pause().then(run), h),
        };
      }
    },
    7214: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var i = class {
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      };
    },
    7887: function (e, t, n) {
      "use strict";
      n.d(t, {
        CN: function () {
          return o;
        },
        Ht: function () {
          return addToStart;
        },
        KC: function () {
          return resolveStaleTime;
        },
        Kp: function () {
          return timeUntilStale;
        },
        PN: function () {
          return isValidTimeout;
        },
        Q$: function () {
          return replaceEqualDeep;
        },
        Rm: function () {
          return hashQueryKeyByOptions;
        },
        SE: function () {
          return functionalUpdate;
        },
        VS: function () {
          return shallowEqualObjects;
        },
        VX: function () {
          return addToEnd;
        },
        X7: function () {
          return matchMutation;
        },
        Ym: function () {
          return hashKey;
        },
        ZT: function () {
          return noop;
        },
        _v: function () {
          return sleep;
        },
        _x: function () {
          return matchQuery;
        },
        cG: function () {
          return ensureQueryFn;
        },
        oE: function () {
          return replaceData;
        },
        sk: function () {
          return i;
        },
        to: function () {
          return partialMatchKey;
        },
      });
      var i = "undefined" == typeof window || "Deno" in globalThis;
      function noop() {}
      function functionalUpdate(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function isValidTimeout(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function timeUntilStale(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function resolveStaleTime(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function matchQuery(e, t) {
        let {
          type: n = "all",
          exact: i,
          fetchStatus: o,
          predicate: s,
          queryKey: a,
          stale: c,
        } = e;
        if (a) {
          if (i) {
            if (t.queryHash !== hashQueryKeyByOptions(a, t.options)) return !1;
          } else if (!partialMatchKey(t.queryKey, a)) return !1;
        }
        if ("all" !== n) {
          let e = t.isActive();
          if (("active" === n && !e) || ("inactive" === n && e)) return !1;
        }
        return (
          ("boolean" != typeof c || t.isStale() === c) &&
          (!o || o === t.state.fetchStatus) &&
          (!s || !!s(t))
        );
      }
      function matchMutation(e, t) {
        let { exact: n, status: i, predicate: o, mutationKey: s } = e;
        if (s) {
          if (!t.options.mutationKey) return !1;
          if (n) {
            if (hashKey(t.options.mutationKey) !== hashKey(s)) return !1;
          } else if (!partialMatchKey(t.options.mutationKey, s)) return !1;
        }
        return (!i || t.state.status === i) && (!o || !!o(t));
      }
      function hashQueryKeyByOptions(e, t) {
        let n = t?.queryKeyHashFn || hashKey;
        return n(e);
      }
      function hashKey(e) {
        return JSON.stringify(e, (e, t) =>
          isPlainObject(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
            : t
        );
      }
      function partialMatchKey(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            !Object.keys(t).some((n) => !partialMatchKey(e[n], t[n])))
        );
      }
      function replaceEqualDeep(e, t) {
        if (e === t) return e;
        let n = isPlainArray(e) && isPlainArray(t);
        if (n || (isPlainObject(e) && isPlainObject(t))) {
          let i = n ? e : Object.keys(e),
            o = i.length,
            s = n ? t : Object.keys(t),
            a = s.length,
            c = n ? [] : {},
            u = 0;
          for (let o = 0; o < a; o++) {
            let a = n ? o : s[o];
            ((!n && i.includes(a)) || n) && void 0 === e[a] && void 0 === t[a]
              ? ((c[a] = void 0), u++)
              : ((c[a] = replaceEqualDeep(e[a], t[a])),
                c[a] === e[a] && void 0 !== e[a] && u++);
          }
          return o === a && u === o ? e : c;
        }
        return t;
      }
      function shallowEqualObjects(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let n in e) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function isPlainArray(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function isPlainObject(e) {
        if (!hasObjectPrototype(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let n = t.prototype;
        return (
          !!(hasObjectPrototype(n) && n.hasOwnProperty("isPrototypeOf")) &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function hasObjectPrototype(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function sleep(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function replaceData(e, t, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(e, t)
          : !1 !== n.structuralSharing
          ? replaceEqualDeep(e, t)
          : t;
      }
      function addToEnd(e, t, n = 0) {
        let i = [...e, t];
        return n && i.length > n ? i.slice(1) : i;
      }
      function addToStart(e, t, n = 0) {
        let i = [t, ...e];
        return n && i.length > n ? i.slice(0, -1) : i;
      }
      var o = Symbol(),
        ensureQueryFn = (e, t) =>
          !e.queryFn && t?.initialPromise
            ? () => t.initialPromise
            : e.queryFn && e.queryFn !== o
            ? e.queryFn
            : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
    },
    7611: function (e, t, n) {
      "use strict";
      n.d(t, {
        NL: function () {
          return useQueryClient;
        },
        aH: function () {
          return QueryClientProvider;
        },
      });
      var i = n(5271),
        o = n(2676),
        s = i.createContext(void 0),
        useQueryClient = (e) => {
          let t = i.useContext(s);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        QueryClientProvider = ({ client: e, children: t }) => (
          i.useEffect(
            () => (
              e.mount(),
              () => {
                e.unmount();
              }
            ),
            [e]
          ),
          (0, o.jsx)(s.Provider, { value: e, children: t })
        );
    },
    143: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return makeFetchBody;
        },
        d: function () {
          return makeFetchURL;
        },
        e: function () {
          return makeFetchOptions;
        },
        f: function () {
          return makeFetchSource;
        },
        h: function () {
          return createRequest;
        },
        k: function () {
          return keyDocument;
        },
        m: function () {
          return makeResult;
        },
      });
      var i = n(9598),
        o = n(715),
        rehydrateGraphQlError = (e) =>
          e && e.message && (e.extensions || "GraphQLError" === e.name)
            ? e
            : "object" == typeof e && e.message
            ? new i.__(
                e.message,
                e.nodes,
                e.source,
                e.positions,
                e.path,
                e,
                e.extensions || {}
              )
            : new i.__(e);
      let CombinedError = class CombinedError extends Error {
        constructor(e) {
          var t = (e.graphQLErrors || []).map(rehydrateGraphQlError),
            n = ((e, t) => {
              var n = "";
              if (e) return `[Network] ${e.message}`;
              if (t)
                for (var i of t)
                  n && (n += "\n"), (n += `[GraphQL] ${i.message}`);
              return n;
            })(e.networkError, t);
          super(n),
            (this.name = "CombinedError"),
            (this.message = n),
            (this.graphQLErrors = t),
            (this.networkError = e.networkError),
            (this.response = e.response);
        }
        toString() {
          return this.message;
        }
      };
      var phash = (e, t) => {
          for (var n = 0 | (t || 5381), i = 0, o = 0 | e.length; i < o; i++)
            n = (n << 5) + n + e.charCodeAt(i);
          return n;
        },
        s = new Set(),
        a = new WeakMap(),
        stringify = (e, t) => {
          if (null === e || s.has(e)) return "null";
          if ("object" != typeof e) return JSON.stringify(e) || "";
          if (e.toJSON) return stringify(e.toJSON(), t);
          if (Array.isArray(e)) {
            var n = "[";
            for (var i of e)
              n.length > 1 && (n += ","), (n += stringify(i, t) || "null");
            return n + "]";
          }
          if (
            !t &&
            ((c !== NoopConstructor && e instanceof c) ||
              (u !== NoopConstructor && e instanceof u))
          )
            return "null";
          var o = Object.keys(e).sort();
          if (
            !o.length &&
            e.constructor &&
            Object.getPrototypeOf(e).constructor !==
              Object.prototype.constructor
          ) {
            var l = a.get(e) || Math.random().toString(36).slice(2);
            return a.set(e, l), stringify({ __key: l }, t);
          }
          s.add(e);
          var d = "{";
          for (var h of o) {
            var f = stringify(e[h], t);
            f && (d.length > 1 && (d += ","), (d += stringify(h, t) + ":" + f));
          }
          return s.delete(e), d + "}";
        },
        extract = (e, t, n) => {
          if (null == n || "object" != typeof n || n.toJSON || s.has(n));
          else if (Array.isArray(n))
            for (var i = 0, o = n.length; i < o; i++)
              extract(e, `${t}.${i}`, n[i]);
          else if (n instanceof c || n instanceof u) e.set(t, n);
          else
            for (var a of (s.add(n), Object.keys(n)))
              extract(e, `${t}.${a}`, n[a]);
        },
        stringifyVariables = (e, t) => (s.clear(), stringify(e, t || !1));
      let NoopConstructor = class NoopConstructor {};
      var c = "undefined" != typeof File ? File : NoopConstructor,
        u = "undefined" != typeof Blob ? Blob : NoopConstructor,
        l = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,
        d = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g,
        replaceOutsideStrings = (e, t) => (t % 2 == 0 ? e.replace(d, "\n") : e),
        sanitizeDocument = (e) =>
          e.split(l).map(replaceOutsideStrings).join("").trim(),
        h = new Map(),
        f = new Map(),
        stringifyDocument = (e) => {
          var t;
          return (
            "string" == typeof e
              ? (t = sanitizeDocument(e))
              : e.loc && f.get(e.__key) === e
              ? (t = e.loc.source.body)
              : ((t = h.get(e) || sanitizeDocument((0, i.S0)(e))), h.set(e, t)),
            "string" == typeof e ||
              e.loc ||
              (e.loc = {
                start: 0,
                end: t.length,
                source: {
                  body: t,
                  name: "gql",
                  locationOffset: { line: 1, column: 1 },
                },
              }),
            t
          );
        },
        hashDocument = (e) => {
          var t;
          if (e.documentId) t = phash(e.documentId);
          else if (((t = phash(stringifyDocument(e))), e.definitions)) {
            var n = getOperationName(e);
            n &&
              (t = phash(
                `
# ${n}`,
                t
              ));
          }
          return t;
        },
        keyDocument = (e) => {
          var t, n;
          return (
            "string" == typeof e
              ? ((t = hashDocument(e)),
                (n = f.get(t) || (0, i.Qc)(e, { noLocation: !0 })))
              : ((t = e.__key || hashDocument(e)), (n = f.get(t) || e)),
            n.loc || stringifyDocument(n),
            (n.__key = t),
            f.set(t, n),
            n
          );
        },
        createRequest = (e, t, n) => {
          var i = t || {},
            o = keyDocument(e),
            s = stringifyVariables(i, !0),
            a = o.__key;
          return (
            "{}" !== s && (a = phash(s, a)),
            { key: a, query: o, variables: i, extensions: n }
          );
        },
        getOperationName = (e) => {
          for (var t of e.definitions)
            if (t.kind === i.hY.OPERATION_DEFINITION)
              return t.name ? t.name.value : void 0;
        },
        makeResult = (e, t, n) => {
          if (!("data" in t || ("errors" in t && Array.isArray(t.errors))))
            throw Error("No Content");
          var i = "subscription" === e.kind;
          return {
            operation: e,
            data: t.data,
            error: Array.isArray(t.errors)
              ? new CombinedError({ graphQLErrors: t.errors, response: n })
              : void 0,
            extensions: t.extensions ? { ...t.extensions } : void 0,
            hasNext: null == t.hasNext ? i : t.hasNext,
            stale: !1,
          };
        },
        deepMerge = (e, t) => {
          if (
            "object" == typeof e &&
            null != e &&
            (!e.constructor || e.constructor === Object || Array.isArray(e))
          ) {
            for (var n of ((e = Array.isArray(e) ? [...e] : { ...e }),
            Object.keys(t)))
              e[n] = deepMerge(e[n], t[n]);
            return e;
          }
          return t;
        },
        mergeResultPatch = (e, t, n, i) => {
          var o = e.error ? e.error.graphQLErrors : [],
            s = !!e.extensions || !!(t.payload || t).extensions,
            a = { ...e.extensions, ...(t.payload || t).extensions },
            c = t.incremental;
          "path" in t && (c = [t]);
          var u = { data: e.data };
          if (c) {
            var _loop = function (e) {
              Array.isArray(e.errors) && o.push(...e.errors),
                e.extensions && (Object.assign(a, e.extensions), (s = !0));
              var t = "data",
                n = u,
                c = [];
              if (e.path) c = e.path;
              else if (i) {
                var l = i.find((t) => t.id === e.id);
                c = e.subPath ? [...l.path, ...e.subPath] : l.path;
              }
              for (var d = 0, h = c.length; d < h; t = c[d++])
                n = n[t] = Array.isArray(n[t]) ? [...n[t]] : { ...n[t] };
              if (e.items)
                for (
                  var f = +t >= 0 ? t : 0, p = 0, v = e.items.length;
                  p < v;
                  p++
                )
                  n[f + p] = deepMerge(n[f + p], e.items[p]);
              else void 0 !== e.data && (n[t] = deepMerge(n[t], e.data));
            };
            for (var l of c) _loop(l);
          } else
            (u.data = (t.payload || t).data || e.data),
              (o = t.errors || (t.payload && t.payload.errors) || o);
          return {
            operation: e.operation,
            data: u.data,
            error: o.length
              ? new CombinedError({ graphQLErrors: o, response: n })
              : void 0,
            extensions: s ? a : void 0,
            hasNext: null != t.hasNext ? t.hasNext : e.hasNext,
            stale: !1,
          };
        },
        makeErrorResult = (e, t, n) => ({
          operation: e,
          data: void 0,
          error: new CombinedError({ networkError: t, response: n }),
          extensions: void 0,
          hasNext: !1,
          stale: !1,
        });
      function makeFetchBody(e) {
        var t = {
          query: void 0,
          documentId: void 0,
          operationName: getOperationName(e.query),
          variables: e.variables || void 0,
          extensions: e.extensions,
        };
        return (
          "documentId" in e.query &&
          e.query.documentId &&
          (!e.query.definitions || !e.query.definitions.length)
            ? (t.documentId = e.query.documentId)
            : (e.extensions &&
                e.extensions.persistedQuery &&
                !e.extensions.persistedQuery.miss) ||
              (t.query = stringifyDocument(e.query)),
          t
        );
      }
      var makeFetchURL = (e, t) => {
          var n = "query" === e.kind && e.context.preferGetMethod;
          if (!n || !t) return e.context.url;
          var i = splitOutSearchParams(e.context.url);
          for (var o in t) {
            var s = t[o];
            s && i[1].set(o, "object" == typeof s ? stringifyVariables(s) : s);
          }
          var a = i.join("?");
          return a.length > 2047 && "force" !== n
            ? ((e.context.preferGetMethod = !1), e.context.url)
            : a;
        },
        splitOutSearchParams = (e) => {
          var t = e.indexOf("?");
          return t > -1
            ? [e.slice(0, t), new URLSearchParams(e.slice(t + 1))]
            : [e, new URLSearchParams()];
        },
        serializeBody = (e, t) => {
          if (t && !("query" === e.kind && e.context.preferGetMethod)) {
            var n,
              i,
              o = stringifyVariables(t),
              a =
                ((n = t.variables),
                (i = new Map()),
                (c !== NoopConstructor || u !== NoopConstructor) &&
                  (s.clear(), extract(i, "variables", n)),
                i);
            if (a.size) {
              var l = new FormData();
              l.append("operations", o),
                l.append(
                  "map",
                  stringifyVariables({ ...[...a.keys()].map((e) => [e]) })
                );
              var d = 0;
              for (var h of a.values()) l.append("" + d++, h);
              return l;
            }
            return o;
          }
        },
        makeFetchOptions = (e, t) => {
          var n,
            i = {
              accept:
                "subscription" === e.kind
                  ? "text/event-stream, multipart/mixed"
                  : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed",
            },
            o =
              ("function" == typeof e.context.fetchOptions
                ? e.context.fetchOptions()
                : e.context.fetchOptions) || {};
          if (o.headers) {
            if ("has" in (n = o.headers) && !Object.keys(n).length)
              o.headers.forEach((e, t) => {
                i[t] = e;
              });
            else if (Array.isArray(o.headers))
              o.headers.forEach((e, t) => {
                Array.isArray(e)
                  ? i[e[0]]
                    ? (i[e[0]] = `${i[e[0]]},${e[1]}`)
                    : (i[e[0]] = e[1])
                  : (i[t] = e);
              });
            else for (var s in o.headers) i[s.toLowerCase()] = o.headers[s];
          }
          var a = serializeBody(e, t);
          return (
            "string" != typeof a ||
              i["content-type"] ||
              (i["content-type"] = "application/json"),
            { ...o, method: a ? "POST" : "GET", body: a, headers: i }
          );
        },
        p = "undefined" != typeof TextDecoder ? new TextDecoder() : null,
        v = /boundary="?([^=";]+)"?/i,
        m = /data: ?([^\n]+)/,
        toString = (e) =>
          "Buffer" === e.constructor.name ? e.toString() : p.decode(e);
      async function* streamBody(e) {
        if (e.body[Symbol.asyncIterator])
          for await (var t of e.body) yield toString(t);
        else {
          var n,
            i = e.body.getReader();
          try {
            for (; !(n = await i.read()).done; ) yield toString(n.value);
          } finally {
            i.cancel();
          }
        }
      }
      async function* split(e, t) {
        var n,
          i = "";
        for await (var o of e)
          for (i += o; (n = i.indexOf(t)) > -1; )
            yield i.slice(0, n), (i = i.slice(n + t.length));
      }
      async function* fetchOperation(e, t, n) {
        var i = !0,
          o = null;
        try {
          yield await Promise.resolve();
          var s,
            a,
            c =
              (s = await (e.context.fetch || fetch)(t, n)).headers.get(
                "Content-Type"
              ) || "";
          for await (var u of /multipart\/mixed/i.test(c)
            ? (async function* (e, t) {
                var n,
                  i = e.match(v),
                  o = "--" + (i ? i[1] : "-"),
                  s = !0;
                for await (var a of split(streamBody(t), "\r\n" + o)) {
                  if (s) {
                    s = !1;
                    var c = a.indexOf(o);
                    if (!(c > -1)) continue;
                    a = a.slice(c + o.length);
                  }
                  try {
                    yield (n = JSON.parse(a.slice(a.indexOf("\r\n\r\n") + 4)));
                  } catch (e) {
                    if (!n) throw e;
                  }
                  if (n && !1 === n.hasNext) break;
                }
                n && !1 !== n.hasNext && (yield { hasNext: !1 });
              })(c, s)
            : /text\/event-stream/i.test(c)
            ? (async function* (e) {
                var t;
                for await (var n of split(streamBody(e), "\n\n")) {
                  var i = n.match(m);
                  if (i) {
                    var o = i[1];
                    try {
                      yield (t = JSON.parse(o));
                    } catch (e) {
                      if (!t) throw e;
                    }
                    if (t && !1 === t.hasNext) break;
                  }
                }
                t && !1 !== t.hasNext && (yield { hasNext: !1 });
              })(s)
            : /text\//i.test(c)
            ? (async function* (e) {
                var t = await e.text();
                try {
                  var n = JSON.parse(t);
                  yield n;
                } catch (e) {
                  throw Error(t);
                }
              })(s)
            : (async function* (e) {
                yield JSON.parse(await e.text());
              })(s))
            u.pending && !o
              ? (a = u.pending)
              : u.pending && (a = [...a, ...u.pending]),
              (o = o ? mergeResultPatch(o, u, s, a) : makeResult(e, u, s)),
              (i = !1),
              yield o,
              (i = !0);
          o || (yield (o = makeResult(e, {}, s)));
        } catch (t) {
          if (!i) throw t;
          yield makeErrorResult(
            e,
            s && (s.status < 200 || s.status >= 300) && s.statusText
              ? Error(s.statusText)
              : t,
            s
          );
        }
      }
      function makeFetchSource(e, t, n) {
        var i;
        return (
          "undefined" != typeof AbortController &&
            (n.signal = (i = new AbortController()).signal),
          (0, o.ok)(() => {
            i && i.abort();
          })((0, o.hX)((e) => !!e)((0, o.fY)(fetchOperation(e, t, n))))
        );
      }
    },
    716: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return BaseError;
        },
      });
      var i,
        o,
        s = n(3403);
      let getVersion = () => `@wagmi/core@${s.i}`;
      var __classPrivateFieldGet = function (e, t, n, i) {
        if ("a" === n && !i)
          throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
      };
      let BaseError = class BaseError extends Error {
        get docsBaseUrl() {
          return "https://wagmi.sh/core";
        }
        get version() {
          return getVersion();
        }
        constructor(e, t = {}) {
          super(),
            i.add(this),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WagmiCoreError",
            });
          let n =
              t.cause instanceof BaseError
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            o =
              (t.cause instanceof BaseError && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(o
              ? [
                  `Docs: ${this.docsBaseUrl}${o}.html${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = o),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return __classPrivateFieldGet(this, i, "m", o).call(this, this, e);
        }
      };
      (i = new WeakSet()),
        (o = function _BaseError_walk(e, t) {
          return t?.(e)
            ? e
            : e.cause
            ? __classPrivateFieldGet(this, i, "m", _BaseError_walk).call(
                this,
                e.cause,
                t
              )
            : e;
        });
    },
    3403: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return i;
        },
      });
      let i = "2.11.4";
    },
    2773: function (e, t, n) {
      "use strict";
      function parseAccount(e) {
        return "string" == typeof e ? { address: e, type: "json-rpc" } : e;
      }
      n.d(t, {
        T: function () {
          return parseAccount;
        },
      });
    },
    6467: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return InvalidAddressError;
        },
      });
      var i = n(764);
      let InvalidAddressError = class InvalidAddressError extends i.G {
        constructor({ address: e }) {
          super(`Address "${e}" is invalid.`, {
            metaMessages: [
              "- Address must be a hex value of 20 bytes (40 hex characters).",
              "- Address must match its checksum counterpart.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAddressError",
            });
        }
      };
    },
    764: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return BaseError;
        },
      });
      var i = n(9096);
      let BaseError = class BaseError extends Error {
        constructor(e, t = {}) {
          super(),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ViemError",
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: (0, i.bo)(),
            });
          let n =
              t.cause instanceof BaseError
                ? t.cause.details
                : t.cause?.message
                ? t.cause.message
                : t.details,
            o =
              (t.cause instanceof BaseError && t.cause.docsPath) || t.docsPath;
          (this.message = [
            e || "An error occurred.",
            "",
            ...(t.metaMessages ? [...t.metaMessages, ""] : []),
            ...(o
              ? [
                  `Docs: ${t.docsBaseUrl ?? "https://viem.sh"}${o}${
                    t.docsSlug ? `#${t.docsSlug}` : ""
                  }`,
                ]
              : []),
            ...(n ? [`Details: ${n}`] : []),
            `Version: ${this.version}`,
          ].join("\n")),
            t.cause && (this.cause = t.cause),
            (this.details = n),
            (this.docsPath = o),
            (this.metaMessages = t.metaMessages),
            (this.shortMessage = e);
        }
        walk(e) {
          return (function walk(e, t) {
            return t?.(e)
              ? e
              : e && "object" == typeof e && "cause" in e
              ? walk(e.cause, t)
              : t
              ? null
              : e;
          })(this, e);
        }
      };
    },
    619: function (e, t, n) {
      "use strict";
      n.d(t, {
        $s: function () {
          return SizeExceedsPaddingSizeError;
        },
        W_: function () {
          return InvalidBytesLengthError;
        },
        mV: function () {
          return SliceOffsetOutOfBoundsError;
        },
      });
      var i = n(764);
      let SliceOffsetOutOfBoundsError = class SliceOffsetOutOfBoundsError extends i.G {
        constructor({ offset: e, position: t, size: n }) {
          super(
            `Slice ${
              "start" === t ? "starting" : "ending"
            } at offset "${e}" is out-of-bounds (size: ${n}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SliceOffsetOutOfBoundsError",
            });
        }
      };
      let SizeExceedsPaddingSizeError = class SizeExceedsPaddingSizeError extends i.G {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} size (${e}) exceeds padding size (${t}).`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SizeExceedsPaddingSizeError",
            });
        }
      };
      let InvalidBytesLengthError = class InvalidBytesLengthError extends i.G {
        constructor({ size: e, targetSize: t, type: n }) {
          super(
            `${n.charAt(0).toUpperCase()}${n
              .slice(1)
              .toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidBytesLengthError",
            });
        }
      };
    },
    3186: function (e, t, n) {
      "use strict";
      n.d(t, {
        J5: function () {
          return IntegerOutOfRangeError;
        },
        M6: function () {
          return SizeOverflowError;
        },
        yr: function () {
          return InvalidBytesBooleanError;
        },
      });
      var i = n(764);
      let IntegerOutOfRangeError = class IntegerOutOfRangeError extends i.G {
        constructor({ max: e, min: t, signed: n, size: i, value: o }) {
          super(
            `Number "${o}" is not in safe ${
              i ? `${8 * i}-bit ${n ? "signed" : "unsigned"} ` : ""
            }integer range ${e ? `(${t} to ${e})` : `(above ${t})`}`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "IntegerOutOfRangeError",
            });
        }
      };
      let InvalidBytesBooleanError = class InvalidBytesBooleanError extends i.G {
        constructor(e) {
          super(
            `Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidBytesBooleanError",
            });
        }
      };
      let SizeOverflowError = class SizeOverflowError extends i.G {
        constructor({ givenSize: e, maxSize: t }) {
          super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SizeOverflowError",
            });
        }
      };
    },
    3495: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gg: function () {
          return HttpRequestError;
        },
        W5: function () {
          return TimeoutError;
        },
        bs: function () {
          return RpcRequestError;
        },
      });
      var i = n(5869),
        o = n(764),
        s = n(9096);
      let HttpRequestError = class HttpRequestError extends o.G {
        constructor({ body: e, details: t, headers: n, status: o, url: a }) {
          super("HTTP request failed.", {
            details: t,
            metaMessages: [
              o && `Status: ${o}`,
              `URL: ${(0, s.Gr)(a)}`,
              e && `Request body: ${(0, i.P)(e)}`,
            ].filter(Boolean),
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "HttpRequestError",
            }),
            Object.defineProperty(this, "body", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "headers", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "status", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "url", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.body = e),
            (this.headers = n),
            (this.status = o),
            (this.url = a);
        }
      };
      let RpcRequestError = class RpcRequestError extends o.G {
        constructor({ body: e, error: t, url: n }) {
          super("RPC Request failed.", {
            cause: t,
            details: t.message,
            metaMessages: [
              `URL: ${(0, s.Gr)(n)}`,
              `Request body: ${(0, i.P)(e)}`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RpcRequestError",
            }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.code = t.code);
        }
      };
      let TimeoutError = class TimeoutError extends o.G {
        constructor({ body: e, url: t }) {
          super("The request took too long to respond.", {
            details: "The request timed out.",
            metaMessages: [
              `URL: ${(0, s.Gr)(t)}`,
              `Request body: ${(0, i.P)(e)}`,
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TimeoutError",
            });
        }
      };
    },
    182: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return InvalidRequestRpcError;
        },
        GD: function () {
          return JsonRpcVersionUnsupportedError;
        },
        I0: function () {
          return ChainDisconnectedError;
        },
        KB: function () {
          return TransactionRejectedRpcError;
        },
        LX: function () {
          return MethodNotFoundRpcError;
        },
        Og: function () {
          return ResourceNotFoundRpcError;
        },
        PE: function () {
          return UnauthorizedProviderError;
        },
        Pv: function () {
          return LimitExceededRpcError;
        },
        Ts: function () {
          return UnsupportedProviderMethodError;
        },
        XS: function () {
          return InternalRpcError;
        },
        ab: function () {
          return UserRejectedRequestError;
        },
        gS: function () {
          return MethodNotSupportedRpcError;
        },
        ir: function () {
          return UnknownRpcError;
        },
        nY: function () {
          return InvalidParamsRpcError;
        },
        pT: function () {
          return ResourceUnavailableRpcError;
        },
        s7: function () {
          return ParseRpcError;
        },
        u5: function () {
          return ProviderDisconnectedError;
        },
        x3: function () {
          return SwitchChainError;
        },
        yR: function () {
          return InvalidInputRpcError;
        },
      });
      var i = n(764),
        o = n(3495);
      let RpcError = class RpcError extends i.G {
        constructor(
          e,
          { code: t, docsPath: n, metaMessages: i, shortMessage: s }
        ) {
          super(s, {
            cause: e,
            docsPath: n,
            metaMessages: i || e?.metaMessages,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RpcError",
            }),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.name = e.name),
            (this.code = e instanceof o.bs ? e.code : t ?? -1);
        }
      };
      let ProviderRpcError = class ProviderRpcError extends RpcError {
        constructor(e, t) {
          super(e, t),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderRpcError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = t.data);
        }
      };
      let ParseRpcError = class ParseRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: ParseRpcError.code,
            shortMessage:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ParseRpcError",
            });
        }
      };
      Object.defineProperty(ParseRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32700,
      });
      let InvalidRequestRpcError = class InvalidRequestRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: InvalidRequestRpcError.code,
            shortMessage: "JSON is not a valid request object.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidRequestRpcError",
            });
        }
      };
      Object.defineProperty(InvalidRequestRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32600,
      });
      let MethodNotFoundRpcError = class MethodNotFoundRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: MethodNotFoundRpcError.code,
            shortMessage: "The method does not exist / is not available.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "MethodNotFoundRpcError",
            });
        }
      };
      Object.defineProperty(MethodNotFoundRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32601,
      });
      let InvalidParamsRpcError = class InvalidParamsRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: InvalidParamsRpcError.code,
            shortMessage:
              "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidParamsRpcError",
            });
        }
      };
      Object.defineProperty(InvalidParamsRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32602,
      });
      let InternalRpcError = class InternalRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: InternalRpcError.code,
            shortMessage: "An internal error was received.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InternalRpcError",
            });
        }
      };
      Object.defineProperty(InternalRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32603,
      });
      let InvalidInputRpcError = class InvalidInputRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: InvalidInputRpcError.code,
            shortMessage:
              "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidInputRpcError",
            });
        }
      };
      Object.defineProperty(InvalidInputRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32e3,
      });
      let ResourceNotFoundRpcError = class ResourceNotFoundRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: ResourceNotFoundRpcError.code,
            shortMessage: "Requested resource not found.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceNotFoundRpcError",
            });
        }
      };
      Object.defineProperty(ResourceNotFoundRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32001,
      });
      let ResourceUnavailableRpcError = class ResourceUnavailableRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: ResourceUnavailableRpcError.code,
            shortMessage: "Requested resource not available.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ResourceUnavailableRpcError",
            });
        }
      };
      Object.defineProperty(ResourceUnavailableRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32002,
      });
      let TransactionRejectedRpcError = class TransactionRejectedRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: TransactionRejectedRpcError.code,
            shortMessage: "Transaction creation failed.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionRejectedRpcError",
            });
        }
      };
      Object.defineProperty(TransactionRejectedRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32003,
      });
      let MethodNotSupportedRpcError = class MethodNotSupportedRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: MethodNotSupportedRpcError.code,
            shortMessage: "Method is not implemented.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "MethodNotSupportedRpcError",
            });
        }
      };
      Object.defineProperty(MethodNotSupportedRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32004,
      });
      let LimitExceededRpcError = class LimitExceededRpcError extends RpcError {
        constructor(e) {
          super(e, {
            code: LimitExceededRpcError.code,
            shortMessage: "Request exceeds defined limit.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "LimitExceededRpcError",
            });
        }
      };
      Object.defineProperty(LimitExceededRpcError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32005,
      });
      let JsonRpcVersionUnsupportedError = class JsonRpcVersionUnsupportedError extends RpcError {
        constructor(e) {
          super(e, {
            code: JsonRpcVersionUnsupportedError.code,
            shortMessage: "Version of JSON-RPC protocol is not supported.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "JsonRpcVersionUnsupportedError",
            });
        }
      };
      Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: -32006,
      });
      let UserRejectedRequestError = class UserRejectedRequestError extends ProviderRpcError {
        constructor(e) {
          super(e, {
            code: UserRejectedRequestError.code,
            shortMessage: "User rejected the request.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UserRejectedRequestError",
            });
        }
      };
      Object.defineProperty(UserRejectedRequestError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4001,
      });
      let UnauthorizedProviderError = class UnauthorizedProviderError extends ProviderRpcError {
        constructor(e) {
          super(e, {
            code: UnauthorizedProviderError.code,
            shortMessage:
              "The requested method and/or account has not been authorized by the user.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnauthorizedProviderError",
            });
        }
      };
      Object.defineProperty(UnauthorizedProviderError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4100,
      });
      let UnsupportedProviderMethodError = class UnsupportedProviderMethodError extends ProviderRpcError {
        constructor(e) {
          super(e, {
            code: UnsupportedProviderMethodError.code,
            shortMessage: "The Provider does not support the requested method.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnsupportedProviderMethodError",
            });
        }
      };
      Object.defineProperty(UnsupportedProviderMethodError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4200,
      });
      let ProviderDisconnectedError = class ProviderDisconnectedError extends ProviderRpcError {
        constructor(e) {
          super(e, {
            code: ProviderDisconnectedError.code,
            shortMessage: "The Provider is disconnected from all chains.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ProviderDisconnectedError",
            });
        }
      };
      Object.defineProperty(ProviderDisconnectedError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4900,
      });
      let ChainDisconnectedError = class ChainDisconnectedError extends ProviderRpcError {
        constructor(e) {
          super(e, {
            code: ChainDisconnectedError.code,
            shortMessage:
              "The Provider is not connected to the requested chain.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainDisconnectedError",
            });
        }
      };
      Object.defineProperty(ChainDisconnectedError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4901,
      });
      let SwitchChainError = class SwitchChainError extends ProviderRpcError {
        constructor(e) {
          super(e, {
            code: SwitchChainError.code,
            shortMessage: "An error occurred when attempting to switch chain.",
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "SwitchChainError",
            });
        }
      };
      Object.defineProperty(SwitchChainError, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 4902,
      });
      let UnknownRpcError = class UnknownRpcError extends RpcError {
        constructor(e) {
          super(e, { shortMessage: "An unknown RPC error occurred." }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownRpcError",
            });
        }
      };
    },
    9096: function (e, t, n) {
      "use strict";
      n.d(t, {
        CR: function () {
          return getContractAddress;
        },
        Gr: function () {
          return getUrl;
        },
        bo: function () {
          return getVersion;
        },
      });
      let getContractAddress = (e) => e,
        getUrl = (e) => e,
        getVersion = () => "viem@2.16.1";
    },
    7770: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return getAddress;
        },
        x: function () {
          return checksumAddress;
        },
      });
      var i = n(6467),
        o = n(8513),
        s = n(2394),
        a = n(4306),
        c = n(9740);
      let u = new a.k(8192);
      function checksumAddress(e, t) {
        if (u.has(`${e}.${t}`)) return u.get(`${e}.${t}`);
        let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
          i = (0, s.w)((0, o.qX)(n), "bytes"),
          a = (t ? n.substring(`${t}0x`.length) : n).split("");
        for (let e = 0; e < 40; e += 2)
          i[e >> 1] >> 4 >= 8 && a[e] && (a[e] = a[e].toUpperCase()),
            (15 & i[e >> 1]) >= 8 &&
              a[e + 1] &&
              (a[e + 1] = a[e + 1].toUpperCase());
        let c = `0x${a.join("")}`;
        return u.set(`${e}.${t}`, c), c;
      }
      function getAddress(e, t) {
        if (!(0, c.U)(e, { strict: !1 })) throw new i.b({ address: e });
        return checksumAddress(e, t);
      }
    },
    9740: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return isAddress;
        },
      });
      var i = n(4306),
        o = n(7770);
      let s = /^0x[a-fA-F0-9]{40}$/,
        a = new i.k(8192);
      function isAddress(e, t) {
        let { strict: n = !0 } = t ?? {},
          i = `${e}.${n}`;
        if (a.has(i)) return a.get(i);
        let c =
          !!s.test(e) && (e.toLowerCase() === e || !n || (0, o.x)(e) === e);
        return a.set(i, c), c;
      }
    },
    1594: function (e, t, n) {
      "use strict";
      function isHex(e, { strict: t = !0 } = {}) {
        return (
          !!e &&
          "string" == typeof e &&
          (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
        );
      }
      n.d(t, {
        v: function () {
          return isHex;
        },
      });
    },
    3944: function (e, t, n) {
      "use strict";
      n.d(t, {
        gc: function () {
          return padHex;
        },
        vk: function () {
          return pad;
        },
      });
      var i = n(619);
      function pad(e, { dir: t, size: n = 32 } = {}) {
        return "string" == typeof e
          ? padHex(e, { dir: t, size: n })
          : (function (e, { dir: t, size: n = 32 } = {}) {
              if (null === n) return e;
              if (e.length > n)
                throw new i.$s({
                  size: e.length,
                  targetSize: n,
                  type: "bytes",
                });
              let o = new Uint8Array(n);
              for (let i = 0; i < n; i++) {
                let s = "right" === t;
                o[s ? i : n - i - 1] = e[s ? i : e.length - i - 1];
              }
              return o;
            })(e, { dir: t, size: n });
      }
      function padHex(e, { dir: t, size: n = 32 } = {}) {
        if (null === n) return e;
        let o = e.replace("0x", "");
        if (o.length > 2 * n)
          throw new i.$s({
            size: Math.ceil(o.length / 2),
            targetSize: n,
            type: "hex",
          });
        return `0x${o["right" === t ? "padEnd" : "padStart"](2 * n, "0")}`;
      }
    },
    9551: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return size;
        },
      });
      var i = n(1594);
      function size(e) {
        return (0, i.v)(e, { strict: !1 })
          ? Math.ceil((e.length - 2) / 2)
          : e.length;
      }
    },
    1874: function (e, t, n) {
      "use strict";
      n.d(t, {
        Yf: function () {
          return assertSize;
        },
        ly: function () {
          return hexToNumber;
        },
        y_: function () {
          return hexToBigInt;
        },
      });
      var i = n(3186),
        o = n(9551);
      function assertSize(e, { size: t }) {
        if ((0, o.d)(e) > t)
          throw new i.M6({ givenSize: (0, o.d)(e), maxSize: t });
      }
      function hexToBigInt(e, t = {}) {
        let { signed: n } = t;
        t.size && assertSize(e, { size: t.size });
        let i = BigInt(e);
        if (!n) return i;
        let o = (e.length - 2) / 2,
          s = (1n << (8n * BigInt(o) - 1n)) - 1n;
        return i <= s ? i : i - BigInt(`0x${"f".padStart(2 * o, "f")}`) - 1n;
      }
      function hexToNumber(e, t = {}) {
        return Number(hexToBigInt(e, t));
      }
    },
    8513: function (e, t, n) {
      "use strict";
      n.d(t, {
        O0: function () {
          return toBytes;
        },
        nr: function () {
          return hexToBytes;
        },
        qX: function () {
          return stringToBytes;
        },
      });
      var i = n(764),
        o = n(1594),
        s = n(3944),
        a = n(1874),
        c = n(2293);
      let u = new TextEncoder();
      function toBytes(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? (function (e, t) {
              let n = (0, c.eC)(e, t);
              return hexToBytes(n);
            })(e, t)
          : "boolean" == typeof e
          ? (function (e, t = {}) {
              let n = new Uint8Array(1);
              return ((n[0] = Number(e)), "number" == typeof t.size)
                ? ((0, a.Yf)(n, { size: t.size }),
                  (0, s.vk)(n, { size: t.size }))
                : n;
            })(e, t)
          : (0, o.v)(e)
          ? hexToBytes(e, t)
          : stringToBytes(e, t);
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function charCodeToBase16(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function hexToBytes(e, t = {}) {
        let n = e;
        t.size &&
          ((0, a.Yf)(n, { size: t.size }),
          (n = (0, s.vk)(n, { dir: "right", size: t.size })));
        let o = n.slice(2);
        o.length % 2 && (o = `0${o}`);
        let c = o.length / 2,
          u = new Uint8Array(c);
        for (let e = 0, t = 0; e < c; e++) {
          let n = charCodeToBase16(o.charCodeAt(t++)),
            s = charCodeToBase16(o.charCodeAt(t++));
          if (void 0 === n || void 0 === s)
            throw new i.G(
              `Invalid byte sequence ("${o[t - 2]}${o[t - 1]}" in "${o}").`
            );
          u[e] = 16 * n + s;
        }
        return u;
      }
      function stringToBytes(e, t = {}) {
        let n = u.encode(e);
        return "number" == typeof t.size
          ? ((0, a.Yf)(n, { size: t.size }),
            (0, s.vk)(n, { dir: "right", size: t.size }))
          : n;
      }
    },
    2293: function (e, t, n) {
      "use strict";
      n.d(t, {
        $G: function () {
          return stringToHex;
        },
        C4: function () {
          return boolToHex;
        },
        NC: function () {
          return toHex;
        },
        ci: function () {
          return bytesToHex;
        },
        eC: function () {
          return numberToHex;
        },
      });
      var i = n(3186),
        o = n(3944),
        s = n(1874);
      let a = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function toHex(e, t = {}) {
        return "number" == typeof e || "bigint" == typeof e
          ? numberToHex(e, t)
          : "string" == typeof e
          ? stringToHex(e, t)
          : "boolean" == typeof e
          ? boolToHex(e, t)
          : bytesToHex(e, t);
      }
      function boolToHex(e, t = {}) {
        let n = `0x${Number(e)}`;
        return "number" == typeof t.size
          ? ((0, s.Yf)(n, { size: t.size }), (0, o.vk)(n, { size: t.size }))
          : n;
      }
      function bytesToHex(e, t = {}) {
        let n = "";
        for (let t = 0; t < e.length; t++) n += a[e[t]];
        let i = `0x${n}`;
        return "number" == typeof t.size
          ? ((0, s.Yf)(i, { size: t.size }),
            (0, o.vk)(i, { dir: "right", size: t.size }))
          : i;
      }
      function numberToHex(e, t = {}) {
        let n;
        let { signed: s, size: a } = t,
          c = BigInt(e);
        a
          ? (n = s
              ? (1n << (8n * BigInt(a) - 1n)) - 1n
              : 2n ** (8n * BigInt(a)) - 1n)
          : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
        let u = "bigint" == typeof n && s ? -n - 1n : 0;
        if ((n && c > n) || c < u) {
          let t = "bigint" == typeof e ? "n" : "";
          throw new i.J5({
            max: n ? `${n}${t}` : void 0,
            min: `${u}${t}`,
            signed: s,
            size: a,
            value: `${e}${t}`,
          });
        }
        let l = `0x${(s && c < 0
          ? (1n << BigInt(8 * a)) + BigInt(c)
          : c
        ).toString(16)}`;
        return a ? (0, o.vk)(l, { size: a }) : l;
      }
      let c = new TextEncoder();
      function stringToHex(e, t = {}) {
        let n = c.encode(e);
        return bytesToHex(n, t);
      }
    },
    2394: function (e, t, n) {
      "use strict";
      function number(e) {
        if (!Number.isSafeInteger(e) || e < 0)
          throw Error(`Wrong positive integer: ${e}`);
      }
      function bytes(e, ...t) {
        if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
        if (t.length > 0 && !t.includes(e.length))
          throw Error(
            `Expected Uint8Array of length ${t}, not of length=${e.length}`
          );
      }
      function exists(e, t = !0) {
        if (e.destroyed) throw Error("Hash instance has been destroyed");
        if (t && e.finished)
          throw Error("Hash#digest() has already been called");
      }
      n.d(t, {
        w: function () {
          return keccak256;
        },
      });
      let i = BigInt(4294967296 - 1),
        o = BigInt(32),
        rotlSH = (e, t, n) => (e << n) | (t >>> (32 - n)),
        rotlSL = (e, t, n) => (t << n) | (e >>> (32 - n)),
        rotlBH = (e, t, n) => (t << (n - 32)) | (e >>> (64 - n)),
        rotlBL = (e, t, n) => (e << (n - 32)) | (t >>> (64 - n)),
        u8a = (e) => e instanceof Uint8Array,
        u32 = (e) =>
          new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
        s = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      if (!s) throw Error("Non little-endian hardware is not supported");
      function toBytes(e) {
        if (
          ("string" == typeof e &&
            (e = (function (e) {
              if ("string" != typeof e)
                throw Error(`utf8ToBytes expected string, got ${typeof e}`);
              return new Uint8Array(new TextEncoder().encode(e));
            })(e)),
          !u8a(e))
        )
          throw Error(`expected Uint8Array, got ${typeof e}`);
        return e;
      }
      let Hash = class Hash {
        clone() {
          return this._cloneInto();
        }
      };
      let [a, c, u] = [[], [], []],
        l = BigInt(0),
        d = BigInt(1),
        h = BigInt(2),
        f = BigInt(7),
        p = BigInt(256),
        v = BigInt(113);
      for (let e = 0, t = d, n = 1, i = 0; e < 24; e++) {
        ([n, i] = [i, (2 * n + 3 * i) % 5]),
          a.push(2 * (5 * i + n)),
          c.push((((e + 1) * (e + 2)) / 2) % 64);
        let o = l;
        for (let e = 0; e < 7; e++)
          (t = ((t << d) ^ ((t >> f) * v)) % p) & h &&
            (o ^= d << ((d << BigInt(e)) - d));
        u.push(o);
      }
      let [m, y] = (function (e, t = !1) {
          let n = new Uint32Array(e.length),
            s = new Uint32Array(e.length);
          for (let a = 0; a < e.length; a++) {
            let { h: c, l: u } = (function (e, t = !1) {
              return t
                ? { h: Number(e & i), l: Number((e >> o) & i) }
                : { h: 0 | Number((e >> o) & i), l: 0 | Number(e & i) };
            })(e[a], t);
            [n[a], s[a]] = [c, u];
          }
          return [n, s];
        })(u, !0),
        rotlH = (e, t, n) => (n > 32 ? rotlBH(e, t, n) : rotlSH(e, t, n)),
        rotlL = (e, t, n) => (n > 32 ? rotlBL(e, t, n) : rotlSL(e, t, n));
      let Keccak = class Keccak extends Hash {
        constructor(e, t, n, i = !1, o = 24) {
          if (
            (super(),
            (this.blockLen = e),
            (this.suffix = t),
            (this.outputLen = n),
            (this.enableXOF = i),
            (this.rounds = o),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            number(n),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)), (this.state32 = u32(this.state));
        }
        keccak() {
          !(function (e, t = 24) {
            let n = new Uint32Array(10);
            for (let i = 24 - t; i < 24; i++) {
              for (let t = 0; t < 10; t++)
                n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
              for (let t = 0; t < 10; t += 2) {
                let i = (t + 8) % 10,
                  o = (t + 2) % 10,
                  s = n[o],
                  a = n[o + 1],
                  c = rotlH(s, a, 1) ^ n[i],
                  u = rotlL(s, a, 1) ^ n[i + 1];
                for (let n = 0; n < 50; n += 10)
                  (e[t + n] ^= c), (e[t + n + 1] ^= u);
              }
              let t = e[2],
                o = e[3];
              for (let n = 0; n < 24; n++) {
                let i = c[n],
                  s = rotlH(t, o, i),
                  u = rotlL(t, o, i),
                  l = a[n];
                (t = e[l]), (o = e[l + 1]), (e[l] = s), (e[l + 1] = u);
              }
              for (let t = 0; t < 50; t += 10) {
                for (let i = 0; i < 10; i++) n[i] = e[t + i];
                for (let i = 0; i < 10; i++)
                  e[t + i] ^= ~n[(i + 2) % 10] & n[(i + 4) % 10];
              }
              (e[0] ^= m[i]), (e[1] ^= y[i]);
            }
            n.fill(0);
          })(this.state32, this.rounds),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(e) {
          exists(this);
          let { blockLen: t, state: n } = this;
          e = toBytes(e);
          let i = e.length;
          for (let o = 0; o < i; ) {
            let s = Math.min(t - this.pos, i - o);
            for (let t = 0; t < s; t++) n[this.pos++] ^= e[o++];
            this.pos === t && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: e, suffix: t, pos: n, blockLen: i } = this;
          (e[n] ^= t),
            (128 & t) != 0 && n === i - 1 && this.keccak(),
            (e[i - 1] ^= 128),
            this.keccak();
        }
        writeInto(e) {
          exists(this, !1), bytes(e), this.finish();
          let t = this.state,
            { blockLen: n } = this;
          for (let i = 0, o = e.length; i < o; ) {
            this.posOut >= n && this.keccak();
            let s = Math.min(n - this.posOut, o - i);
            e.set(t.subarray(this.posOut, this.posOut + s), i),
              (this.posOut += s),
              (i += s);
          }
          return e;
        }
        xofInto(e) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(e);
        }
        xof(e) {
          return number(e), this.xofInto(new Uint8Array(e));
        }
        digestInto(e) {
          if (
            (!(function (e, t) {
              bytes(e);
              let n = t.outputLen;
              if (e.length < n)
                throw Error(
                  `digestInto() expects output buffer of length at least ${n}`
                );
            })(e, this),
            this.finished)
          )
            throw Error("digest() was already called");
          return this.writeInto(e), this.destroy(), e;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(e) {
          let {
            blockLen: t,
            suffix: n,
            outputLen: i,
            rounds: o,
            enableXOF: s,
          } = this;
          return (
            e || (e = new Keccak(t, n, i, s, o)),
            e.state32.set(this.state32),
            (e.pos = this.pos),
            (e.posOut = this.posOut),
            (e.finished = this.finished),
            (e.rounds = o),
            (e.suffix = n),
            (e.outputLen = i),
            (e.enableXOF = s),
            (e.destroyed = this.destroyed),
            e
          );
        }
      };
      let g = (function (e) {
        let hashC = (t) => e().update(toBytes(t)).digest(),
          t = e();
        return (
          (hashC.outputLen = t.outputLen),
          (hashC.blockLen = t.blockLen),
          (hashC.create = () => e()),
          hashC
        );
      })(() => new Keccak(136, 1, 32));
      var b = n(1594),
        w = n(8513),
        E = n(2293);
      function keccak256(e, t) {
        let n = g((0, b.v)(e, { strict: !1 }) ? (0, w.O0)(e) : e);
        return "bytes" === (t || "hex") ? n : (0, E.NC)(n);
      }
    },
    4306: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return LruMap;
        },
      });
      let LruMap = class LruMap extends Map {
        constructor(e) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = e);
        }
        set(e, t) {
          return (
            super.set(e, t),
            this.maxSize &&
              this.size > this.maxSize &&
              this.delete(this.keys().next().value),
            this
          );
        }
      };
    },
    1078: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return createBatchScheduler;
        },
      });
      let i = new Map();
      function createBatchScheduler({
        fn: e,
        id: t,
        shouldSplitBatch: n,
        wait: o = 0,
        sort: s,
      }) {
        let exec = async () => {
            let t = getScheduler();
            flush();
            let n = t.map(({ args: e }) => e);
            0 !== n.length &&
              e(n)
                .then((e) => {
                  s && Array.isArray(e) && e.sort(s);
                  for (let n = 0; n < t.length; n++) {
                    let { pendingPromise: i } = t[n];
                    i.resolve?.([e[n], e]);
                  }
                })
                .catch((e) => {
                  for (let n = 0; n < t.length; n++) {
                    let { pendingPromise: i } = t[n];
                    i.reject?.(e);
                  }
                });
          },
          flush = () => i.delete(t),
          getBatchedArgs = () => getScheduler().map(({ args: e }) => e),
          getScheduler = () => i.get(t) || [],
          setScheduler = (e) => i.set(t, [...getScheduler(), e]);
        return {
          flush,
          async schedule(e) {
            let t = {},
              i = new Promise((e, n) => {
                (t.resolve = e), (t.reject = n);
              }),
              s = n?.([...getBatchedArgs(), e]);
            s && exec();
            let a = getScheduler().length > 0;
            return (
              a
                ? setScheduler({ args: e, pendingPromise: t })
                : (setScheduler({ args: e, pendingPromise: t }),
                  setTimeout(exec, o)),
              i
            );
          },
        };
      }
    },
    5869: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return stringify;
        },
      });
      let stringify = (e, t, n) =>
        JSON.stringify(
          e,
          (e, n) => {
            let i = "bigint" == typeof n ? n.toString() : n;
            return "function" == typeof t ? t(e, i) : i;
          },
          n
        );
    },
    7055: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return s;
        },
        F: function () {
          return WagmiProvider;
        },
      });
      var i = n(5271);
      let o = !1;
      async function reconnect(e, t = {}) {
        let n;
        if (o) return [];
        (o = !0),
          e.setState((e) => ({
            ...e,
            status: e.current ? "reconnecting" : "connecting",
          }));
        let i = [];
        if (t.connectors?.length)
          for (let n of t.connectors) {
            let t;
            (t = "function" == typeof n ? e._internal.connectors.setup(n) : n),
              i.push(t);
          }
        else i.push(...e.connectors);
        try {
          n = await e.storage?.getItem("recentConnectorId");
        } catch {}
        let s = {};
        for (let [, t] of e.state.connections) s[t.connector.id] = 1;
        n && (s[n] = 0);
        let a =
            Object.keys(s).length > 0
              ? [...i].sort((e, t) => (s[e.id] ?? 10) - (s[t.id] ?? 10))
              : i,
          c = !1,
          u = [],
          l = [];
        for (let t of a) {
          let n = await t.getProvider().catch(() => void 0);
          if (!n || l.some((e) => e === n)) continue;
          let i = await t.isAuthorized();
          if (!i) continue;
          let o = await t.connect({ isReconnecting: !0 }).catch(() => null);
          o &&
            (t.emitter.off("connect", e._internal.events.connect),
            t.emitter.on("change", e._internal.events.change),
            t.emitter.on("disconnect", e._internal.events.disconnect),
            e.setState((e) => {
              let n = new Map(c ? e.connections : new Map()).set(t.uid, {
                accounts: o.accounts,
                chainId: o.chainId,
                connector: t,
              });
              return { ...e, current: c ? e.current : t.uid, connections: n };
            }),
            u.push({ accounts: o.accounts, chainId: o.chainId, connector: t }),
            l.push(n),
            (c = !0));
        }
        return (
          ("reconnecting" === e.state.status ||
            "connecting" === e.state.status) &&
            (c
              ? e.setState((e) => ({ ...e, status: "connected" }))
              : e.setState((e) => ({
                  ...e,
                  connections: new Map(),
                  current: null,
                  status: "disconnected",
                }))),
          (o = !1),
          u
        );
      }
      function Hydrate(e) {
        let {
            children: t,
            config: n,
            initialState: o,
            reconnectOnMount: s = !0,
          } = e,
          { onMount: a } = (function (e, t) {
            let { initialState: n, reconnectOnMount: i } = t;
            return (
              n &&
                !e._internal.store.persist.hasHydrated() &&
                e.setState({
                  ...n,
                  connections: i ? n.connections : new Map(),
                  status: i ? "reconnecting" : "disconnected",
                }),
              {
                async onMount() {
                  if (e._internal.ssr) {
                    await e._internal.store.persist.rehydrate();
                    let t = e._internal.mipd
                      ?.getProviders()
                      .map(e._internal.connectors.providerDetailToConnector)
                      .map(e._internal.connectors.setup);
                    e._internal.connectors.setState((e) => [
                      ...e,
                      ...(t ?? []),
                    ]);
                  }
                  i
                    ? reconnect(e)
                    : e.storage &&
                      e.setState((e) => ({ ...e, connections: new Map() }));
                },
              }
            );
          })(n, { initialState: o, reconnectOnMount: s });
        n._internal.ssr || a();
        let c = (0, i.useRef)(!0);
        return (
          (0, i.useEffect)(() => {
            if (c.current && n._internal.ssr)
              return (
                a(),
                () => {
                  c.current = !1;
                }
              );
          }, []),
          t
        );
      }
      let s = (0, i.createContext)(void 0);
      function WagmiProvider(e) {
        let { children: t, config: n } = e;
        return (0, i.createElement)(
          Hydrate,
          e,
          (0, i.createElement)(s.Provider, { value: n }, t)
        );
      }
    },
    715: function (e, t, n) {
      "use strict";
      n.d(t, {
        BN: function () {
          return share;
        },
        Hr: function () {
          return onStart;
        },
        Ld: function () {
          return subscribe;
        },
        Mq: function () {
          return onPush;
        },
        Rs: function () {
          return takeUntil;
        },
        TS: function () {
          return merge;
        },
        UI: function () {
          return map;
        },
        Vi: function () {
          return toPromise;
        },
        Vo: function () {
          return lazy;
        },
        _A: function () {
          return fromValue;
        },
        bw: function () {
          return onPush;
        },
        fY: function () {
          return fromAsyncIterable;
        },
        hX: function () {
          return filter;
        },
        nN: function () {
          return makeSubject;
        },
        nY: function () {
          return publish;
        },
        oE: function () {
          return takeWhile;
        },
        ok: function () {
          return onEnd;
        },
        qn: function () {
          return take;
        },
        wt: function () {
          return switchMap;
        },
        zg: function () {
          return mergeMap;
        },
      });
      var teardownPlaceholder = () => {};
      function start(e) {
        return { tag: 0, 0: e };
      }
      function push(e) {
        return { tag: 1, 0: e };
      }
      var asyncIteratorSymbol = () =>
          ("function" == typeof Symbol && Symbol.asyncIterator) ||
          "@@asyncIterator",
        identity = (e) => e;
      function filter(e) {
        return (t) => (n) => {
          var i = teardownPlaceholder;
          t((t) => {
            0 === t
              ? n(0)
              : 0 === t.tag
              ? ((i = t[0]), n(t))
              : e(t[0])
              ? n(t)
              : i(0);
          });
        };
      }
      function map(e) {
        return (t) => (n) =>
          t((t) => {
            0 === t || 0 === t.tag ? n(t) : n(push(e(t[0])));
          });
      }
      function mergeMap(e) {
        return (t) => (n) => {
          var i = [],
            o = teardownPlaceholder,
            s = !1,
            a = !1;
          t((t) => {
            if (a);
            else if (0 === t) (a = !0), i.length || n(0);
            else if (0 === t.tag) o = t[0];
            else {
              var c, u;
              (s = !1),
                (c = e(t[0])),
                (u = teardownPlaceholder),
                c((e) => {
                  if (0 === e) {
                    if (i.length) {
                      var t = i.indexOf(u);
                      t > -1 && (i = i.slice()).splice(t, 1),
                        i.length || (a ? n(0) : s || ((s = !0), o(0)));
                    }
                  } else
                    0 === e.tag
                      ? (i.push((u = e[0])), u(0))
                      : i.length && (n(e), u(0));
                }),
                s || ((s = !0), o(0));
            }
          }),
            n(
              start((e) => {
                if (1 === e) {
                  a || ((a = !0), o(1));
                  for (var t = 0, n = i, c = i.length; t < c; t++) n[t](1);
                  i.length = 0;
                } else {
                  a || s ? (s = !1) : ((s = !0), o(0));
                  for (var u = 0, l = i, d = i.length; u < d; u++) l[u](0);
                }
              })
            );
        };
      }
      function merge(e) {
        var t;
        return (t = r(e)), mergeMap(identity)(t);
      }
      function onEnd(e) {
        return (t) => (n) => {
          var i = !1;
          t((t) => {
            if (i);
            else if (0 === t) (i = !0), n(0), e();
            else if (0 === t.tag) {
              var o = t[0];
              n(
                start((t) => {
                  1 === t ? ((i = !0), o(1), e()) : o(t);
                })
              );
            } else n(t);
          });
        };
      }
      function onPush(e) {
        return (t) => (n) => {
          var i = !1;
          t((t) => {
            if (i);
            else if (0 === t) (i = !0), n(0);
            else if (0 === t.tag) {
              var o = t[0];
              n(
                start((e) => {
                  1 === e && (i = !0), o(e);
                })
              );
            } else e(t[0]), n(t);
          });
        };
      }
      function onStart(e) {
        return (t) => (n) =>
          t((t) => {
            0 === t ? n(0) : 0 === t.tag ? (n(t), e()) : n(t);
          });
      }
      function share(e) {
        var t = [],
          n = teardownPlaceholder,
          i = !1;
        return (o) => {
          t.push(o),
            1 === t.length &&
              e((e) => {
                if (0 === e) {
                  for (var o = 0, s = t, a = t.length; o < a; o++) s[o](0);
                  t.length = 0;
                } else if (0 === e.tag) n = e[0];
                else {
                  i = !1;
                  for (var c = 0, u = t, l = t.length; c < l; c++) u[c](e);
                }
              }),
            o(
              start((e) => {
                if (1 === e) {
                  var s = t.indexOf(o);
                  s > -1 && (t = t.slice()).splice(s, 1), t.length || n(1);
                } else i || ((i = !0), n(0));
              })
            );
        };
      }
      function switchMap(e) {
        return (t) => (n) => {
          var i = teardownPlaceholder,
            o = teardownPlaceholder,
            s = !1,
            a = !1,
            c = !1,
            u = !1;
          t((t) => {
            if (u);
            else if (0 === t) (u = !0), c || n(0);
            else if (0 === t.tag) i = t[0];
            else {
              var l;
              c && (o(1), (o = teardownPlaceholder)),
                s ? (s = !1) : ((s = !0), i(0)),
                (l = e(t[0])),
                (c = !0),
                l((e) => {
                  c &&
                    (0 === e
                      ? ((c = !1), u ? n(0) : s || ((s = !0), i(0)))
                      : 0 === e.tag
                      ? ((a = !1), (o = e[0])(0))
                      : (n(e), a ? (a = !1) : o(0)));
                });
            }
          }),
            n(
              start((e) => {
                1 === e
                  ? (u || ((u = !0), i(1)), c && ((c = !1), o(1)))
                  : (u || s || ((s = !0), i(0)), c && !a && ((a = !0), o(0)));
              })
            );
        };
      }
      function take(e) {
        return (t) => (n) => {
          var i = teardownPlaceholder,
            o = !1,
            s = 0;
          t((t) => {
            o ||
              (0 === t
                ? ((o = !0), n(0))
                : 0 === t.tag
                ? e <= 0
                  ? ((o = !0), n(0), t[0](1))
                  : (i = t[0])
                : s++ < e
                ? (n(t), !o && s >= e && ((o = !0), n(0), i(1)))
                : n(t));
          }),
            n(
              start((t) => {
                1 !== t || o
                  ? 0 === t && !o && s < e && i(0)
                  : ((o = !0), i(1));
              })
            );
        };
      }
      function takeUntil(e) {
        return (t) => (n) => {
          var i = teardownPlaceholder,
            o = teardownPlaceholder,
            s = !1;
          t((t) => {
            s ||
              (0 === t
                ? ((s = !0), o(1), n(0))
                : 0 === t.tag
                ? ((i = t[0]),
                  e((e) => {
                    0 === e ||
                      (0 === e.tag
                        ? (o = e[0])(0)
                        : ((s = !0), o(1), i(1), n(0)));
                  }))
                : n(t));
          }),
            n(
              start((e) => {
                1 !== e || s ? s || i(0) : ((s = !0), i(1), o(1));
              })
            );
        };
      }
      function takeWhile(e, t) {
        return (n) => (i) => {
          var o = teardownPlaceholder,
            s = !1;
          n((n) => {
            s ||
              (0 === n
                ? ((s = !0), i(0))
                : 0 === n.tag
                ? ((o = n[0]), i(n))
                : e(n[0])
                ? i(n)
                : ((s = !0), t && i(n), i(0), o(1)));
          });
        };
      }
      function lazy(e) {
        return (t) => e()(t);
      }
      function fromAsyncIterable(e) {
        return (t) => {
          var n,
            i = (e[asyncIteratorSymbol()] && e[asyncIteratorSymbol()]()) || e,
            o = !1,
            s = !1,
            a = !1;
          t(
            start(async (e) => {
              if (1 === e) (o = !0), i.return && i.return();
              else if (s) a = !0;
              else {
                for (a = s = !0; a && !o; )
                  if ((n = await i.next()).done)
                    (o = !0), i.return && (await i.return()), t(0);
                  else
                    try {
                      (a = !1), t(push(n.value));
                    } catch (e) {
                      if (i.throw) (o = !!(await i.throw(e)).done) && t(0);
                      else throw e;
                    }
                s = !1;
              }
            })
          );
        };
      }
      var r = function (e) {
        return e[Symbol.asyncIterator]
          ? fromAsyncIterable(e)
          : (t) => {
              var n,
                i = e[Symbol.iterator](),
                o = !1,
                s = !1,
                a = !1;
              t(
                start((e) => {
                  if (1 === e) (o = !0), i.return && i.return();
                  else if (s) a = !0;
                  else {
                    for (a = s = !0; a && !o; )
                      if ((n = i.next()).done)
                        (o = !0), i.return && i.return(), t(0);
                      else
                        try {
                          (a = !1), t(push(n.value));
                        } catch (e) {
                          if (i.throw) (o = !!i.throw(e).done) && t(0);
                          else throw e;
                        }
                    s = !1;
                  }
                })
              );
            };
      };
      function fromValue(e) {
        return (t) => {
          var n = !1;
          t(
            start((i) => {
              1 === i ? (n = !0) : n || ((n = !0), t(push(e)), t(0));
            })
          );
        };
      }
      function makeSubject() {
        var e, t, n;
        return {
          source: share(
            ((n = (n) => ((e = n.next), (t = n.complete), teardownPlaceholder)),
            (e) => {
              var t = !1,
                i = n({
                  next(n) {
                    t || e(push(n));
                  },
                  complete() {
                    t || ((t = !0), e(0));
                  },
                });
              e(
                start((e) => {
                  1 !== e || t || ((t = !0), i());
                })
              );
            })
          ),
          next(t) {
            e && e(t);
          },
          complete() {
            t && t();
          },
        };
      }
      function subscribe(e) {
        return (t) => {
          var n = teardownPlaceholder,
            i = !1;
          return (
            t((t) => {
              0 === t
                ? (i = !0)
                : 0 === t.tag
                ? (n = t[0])(0)
                : i || (e(t[0]), n(0));
            }),
            {
              unsubscribe() {
                i || ((i = !0), n(1));
              },
            }
          );
        };
      }
      function publish(e) {
        subscribe((e) => {})(e);
      }
      function toPromise(e) {
        return new Promise((t) => {
          var n,
            i = teardownPlaceholder;
          e((e) => {
            0 === e
              ? Promise.resolve(n).then(t)
              : 0 === e.tag
              ? (i = e[0])(0)
              : ((n = e[0]), i(0));
          });
        });
      }
    },
  },
  function (e) {
    var __webpack_exec__ = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return __webpack_exec__(7418), __webpack_exec__(5606);
    }),
      (_N_E = e.O());
  },
]);
