const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'assets/HeroSection-ZBF1hCi7.js',
			'assets/features-animation-BA_w8hZY.js',
			'assets/AboutSection-BJkR91gP.js',
			'assets/section-title-CjrFYsnq.js',
			'assets/SkillsSection-CTbekC9u.js',
			'assets/ProjectsSection-Fsm-DSbt.js',
			'assets/CodeSection-Barw1Ra2.js',
			'assets/ContactForm-B8uYGIDY.js',
			'assets/MauseTrail-LmhOUG7y.js',
			'assets/MauseTrail-DQafpzUU.css',
		]),
) => i.map(i => d[i]);
function lx(e, n) {
	for (var i = 0; i < n.length; i++) {
		const s = n[i];
		if (typeof s != 'string' && !Array.isArray(s)) {
			for (const a in s)
				if (a !== 'default' && !(a in e)) {
					const u = Object.getOwnPropertyDescriptor(s, a);
					u && Object.defineProperty(e, a, u.get ? u : { enumerable: !0, get: () => s[a] });
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
	const n = document.createElement('link').relList;
	if (n && n.supports && n.supports('modulepreload')) return;
	for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
	new MutationObserver(a => {
		for (const u of a)
			if (u.type === 'childList')
				for (const c of u.addedNodes) c.tagName === 'LINK' && c.rel === 'modulepreload' && s(c);
	}).observe(document, { childList: !0, subtree: !0 });
	function i(a) {
		const u = {};
		return (
			a.integrity && (u.integrity = a.integrity),
			a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
			a.crossOrigin === 'use-credentials'
				? (u.credentials = 'include')
				: a.crossOrigin === 'anonymous'
					? (u.credentials = 'omit')
					: (u.credentials = 'same-origin'),
			u
		);
	}
	function s(a) {
		if (a.ep) return;
		a.ep = !0;
		const u = i(a);
		fetch(a.href, u);
	}
})();
function Eg(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Lu = { exports: {} },
	wo = {},
	Ou = { exports: {} },
	xe = {};
var hp;
function ux() {
	if (hp) return xe;
	hp = 1;
	var e = Symbol.for('react.element'),
		n = Symbol.for('react.portal'),
		i = Symbol.for('react.fragment'),
		s = Symbol.for('react.strict_mode'),
		a = Symbol.for('react.profiler'),
		u = Symbol.for('react.provider'),
		c = Symbol.for('react.context'),
		d = Symbol.for('react.forward_ref'),
		h = Symbol.for('react.suspense'),
		m = Symbol.for('react.memo'),
		g = Symbol.for('react.lazy'),
		y = Symbol.iterator;
	function x(A) {
		return A === null || typeof A != 'object'
			? null
			: ((A = (y && A[y]) || A['@@iterator']), typeof A == 'function' ? A : null);
	}
	var v = {
			isMounted: function () {
				return !1;
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		S = Object.assign,
		P = {};
	function E(A, V, ee) {
		((this.props = A), (this.context = V), (this.refs = P), (this.updater = ee || v));
	}
	((E.prototype.isReactComponent = {}),
		(E.prototype.setState = function (A, V) {
			if (typeof A != 'object' && typeof A != 'function' && A != null)
				throw Error(
					'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
				);
			this.updater.enqueueSetState(this, A, V, 'setState');
		}),
		(E.prototype.forceUpdate = function (A) {
			this.updater.enqueueForceUpdate(this, A, 'forceUpdate');
		}));
	function b() {}
	b.prototype = E.prototype;
	function M(A, V, ee) {
		((this.props = A), (this.context = V), (this.refs = P), (this.updater = ee || v));
	}
	var D = (M.prototype = new b());
	((D.constructor = M), S(D, E.prototype), (D.isPureReactComponent = !0));
	var O = Array.isArray,
		_ = Object.prototype.hasOwnProperty,
		B = { current: null },
		G = { key: !0, ref: !0, __self: !0, __source: !0 };
	function H(A, V, ee) {
		var ie,
			fe = {},
			ve = null,
			le = null;
		if (V != null)
			for (ie in (V.ref !== void 0 && (le = V.ref), V.key !== void 0 && (ve = '' + V.key), V))
				_.call(V, ie) && !G.hasOwnProperty(ie) && (fe[ie] = V[ie]);
		var Se = arguments.length - 2;
		if (Se === 1) fe.children = ee;
		else if (1 < Se) {
			for (var Pe = Array(Se), Ue = 0; Ue < Se; Ue++) Pe[Ue] = arguments[Ue + 2];
			fe.children = Pe;
		}
		if (A && A.defaultProps) for (ie in ((Se = A.defaultProps), Se)) fe[ie] === void 0 && (fe[ie] = Se[ie]);
		return { $$typeof: e, type: A, key: ve, ref: le, props: fe, _owner: B.current };
	}
	function q(A, V) {
		return { $$typeof: e, type: A.type, key: V, ref: A.ref, props: A.props, _owner: A._owner };
	}
	function oe(A) {
		return typeof A == 'object' && A !== null && A.$$typeof === e;
	}
	function ye(A) {
		var V = { '=': '=0', ':': '=2' };
		return (
			'$' +
			A.replace(/[=:]/g, function (ee) {
				return V[ee];
			})
		);
	}
	var J = /\/+/g;
	function ge(A, V) {
		return typeof A == 'object' && A !== null && A.key != null ? ye('' + A.key) : V.toString(36);
	}
	function de(A, V, ee, ie, fe) {
		var ve = typeof A;
		(ve === 'undefined' || ve === 'boolean') && (A = null);
		var le = !1;
		if (A === null) le = !0;
		else
			switch (ve) {
				case 'string':
				case 'number':
					le = !0;
					break;
				case 'object':
					switch (A.$$typeof) {
						case e:
						case n:
							le = !0;
					}
			}
		if (le)
			return (
				(le = A),
				(fe = fe(le)),
				(A = ie === '' ? '.' + ge(le, 0) : ie),
				O(fe)
					? ((ee = ''),
						A != null && (ee = A.replace(J, '$&/') + '/'),
						de(fe, V, ee, '', function (Ue) {
							return Ue;
						}))
					: fe != null &&
						(oe(fe) &&
							(fe = q(
								fe,
								ee + (!fe.key || (le && le.key === fe.key) ? '' : ('' + fe.key).replace(J, '$&/') + '/') + A,
							)),
						V.push(fe)),
				1
			);
		if (((le = 0), (ie = ie === '' ? '.' : ie + ':'), O(A)))
			for (var Se = 0; Se < A.length; Se++) {
				ve = A[Se];
				var Pe = ie + ge(ve, Se);
				le += de(ve, V, ee, Pe, fe);
			}
		else if (((Pe = x(A)), typeof Pe == 'function'))
			for (A = Pe.call(A), Se = 0; !(ve = A.next()).done; )
				((ve = ve.value), (Pe = ie + ge(ve, Se++)), (le += de(ve, V, ee, Pe, fe)));
		else if (ve === 'object')
			throw (
				(V = String(A)),
				Error(
					'Objects are not valid as a React child (found: ' +
						(V === '[object Object]' ? 'object with keys {' + Object.keys(A).join(', ') + '}' : V) +
						'). If you meant to render a collection of children, use an array instead.',
				)
			);
		return le;
	}
	function Ce(A, V, ee) {
		if (A == null) return A;
		var ie = [],
			fe = 0;
		return (
			de(A, ie, '', '', function (ve) {
				return V.call(ee, ve, fe++);
			}),
			ie
		);
	}
	function he(A) {
		if (A._status === -1) {
			var V = A._result;
			((V = V()),
				V.then(
					function (ee) {
						(A._status === 0 || A._status === -1) && ((A._status = 1), (A._result = ee));
					},
					function (ee) {
						(A._status === 0 || A._status === -1) && ((A._status = 2), (A._result = ee));
					},
				),
				A._status === -1 && ((A._status = 0), (A._result = V)));
		}
		if (A._status === 1) return A._result.default;
		throw A._result;
	}
	var X = { current: null },
		F = { transition: null },
		z = { ReactCurrentDispatcher: X, ReactCurrentBatchConfig: F, ReactCurrentOwner: B };
	function W() {
		throw Error('act(...) is not supported in production builds of React.');
	}
	return (
		(xe.Children = {
			map: Ce,
			forEach: function (A, V, ee) {
				Ce(
					A,
					function () {
						V.apply(this, arguments);
					},
					ee,
				);
			},
			count: function (A) {
				var V = 0;
				return (
					Ce(A, function () {
						V++;
					}),
					V
				);
			},
			toArray: function (A) {
				return (
					Ce(A, function (V) {
						return V;
					}) || []
				);
			},
			only: function (A) {
				if (!oe(A)) throw Error('React.Children.only expected to receive a single React element child.');
				return A;
			},
		}),
		(xe.Component = E),
		(xe.Fragment = i),
		(xe.Profiler = a),
		(xe.PureComponent = M),
		(xe.StrictMode = s),
		(xe.Suspense = h),
		(xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
		(xe.act = W),
		(xe.cloneElement = function (A, V, ee) {
			if (A == null)
				throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + A + '.');
			var ie = S({}, A.props),
				fe = A.key,
				ve = A.ref,
				le = A._owner;
			if (V != null) {
				if (
					(V.ref !== void 0 && ((ve = V.ref), (le = B.current)),
					V.key !== void 0 && (fe = '' + V.key),
					A.type && A.type.defaultProps)
				)
					var Se = A.type.defaultProps;
				for (Pe in V)
					_.call(V, Pe) && !G.hasOwnProperty(Pe) && (ie[Pe] = V[Pe] === void 0 && Se !== void 0 ? Se[Pe] : V[Pe]);
			}
			var Pe = arguments.length - 2;
			if (Pe === 1) ie.children = ee;
			else if (1 < Pe) {
				Se = Array(Pe);
				for (var Ue = 0; Ue < Pe; Ue++) Se[Ue] = arguments[Ue + 2];
				ie.children = Se;
			}
			return { $$typeof: e, type: A.type, key: fe, ref: ve, props: ie, _owner: le };
		}),
		(xe.createContext = function (A) {
			return (
				(A = {
					$$typeof: c,
					_currentValue: A,
					_currentValue2: A,
					_threadCount: 0,
					Provider: null,
					Consumer: null,
					_defaultValue: null,
					_globalName: null,
				}),
				(A.Provider = { $$typeof: u, _context: A }),
				(A.Consumer = A)
			);
		}),
		(xe.createElement = H),
		(xe.createFactory = function (A) {
			var V = H.bind(null, A);
			return ((V.type = A), V);
		}),
		(xe.createRef = function () {
			return { current: null };
		}),
		(xe.forwardRef = function (A) {
			return { $$typeof: d, render: A };
		}),
		(xe.isValidElement = oe),
		(xe.lazy = function (A) {
			return { $$typeof: g, _payload: { _status: -1, _result: A }, _init: he };
		}),
		(xe.memo = function (A, V) {
			return { $$typeof: m, type: A, compare: V === void 0 ? null : V };
		}),
		(xe.startTransition = function (A) {
			var V = F.transition;
			F.transition = {};
			try {
				A();
			} finally {
				F.transition = V;
			}
		}),
		(xe.unstable_act = W),
		(xe.useCallback = function (A, V) {
			return X.current.useCallback(A, V);
		}),
		(xe.useContext = function (A) {
			return X.current.useContext(A);
		}),
		(xe.useDebugValue = function () {}),
		(xe.useDeferredValue = function (A) {
			return X.current.useDeferredValue(A);
		}),
		(xe.useEffect = function (A, V) {
			return X.current.useEffect(A, V);
		}),
		(xe.useId = function () {
			return X.current.useId();
		}),
		(xe.useImperativeHandle = function (A, V, ee) {
			return X.current.useImperativeHandle(A, V, ee);
		}),
		(xe.useInsertionEffect = function (A, V) {
			return X.current.useInsertionEffect(A, V);
		}),
		(xe.useLayoutEffect = function (A, V) {
			return X.current.useLayoutEffect(A, V);
		}),
		(xe.useMemo = function (A, V) {
			return X.current.useMemo(A, V);
		}),
		(xe.useReducer = function (A, V, ee) {
			return X.current.useReducer(A, V, ee);
		}),
		(xe.useRef = function (A) {
			return X.current.useRef(A);
		}),
		(xe.useState = function (A) {
			return X.current.useState(A);
		}),
		(xe.useSyncExternalStore = function (A, V, ee) {
			return X.current.useSyncExternalStore(A, V, ee);
		}),
		(xe.useTransition = function () {
			return X.current.useTransition();
		}),
		(xe.version = '18.3.1'),
		xe
	);
}
var pp;
function zc() {
	return (pp || ((pp = 1), (Ou.exports = ux())), Ou.exports);
}
var mp;
function cx() {
	if (mp) return wo;
	mp = 1;
	var e = zc(),
		n = Symbol.for('react.element'),
		i = Symbol.for('react.fragment'),
		s = Object.prototype.hasOwnProperty,
		a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
		u = { key: !0, ref: !0, __self: !0, __source: !0 };
	function c(d, h, m) {
		var g,
			y = {},
			x = null,
			v = null;
		(m !== void 0 && (x = '' + m), h.key !== void 0 && (x = '' + h.key), h.ref !== void 0 && (v = h.ref));
		for (g in h) s.call(h, g) && !u.hasOwnProperty(g) && (y[g] = h[g]);
		if (d && d.defaultProps) for (g in ((h = d.defaultProps), h)) y[g] === void 0 && (y[g] = h[g]);
		return { $$typeof: n, type: d, key: x, ref: v, props: y, _owner: a.current };
	}
	return ((wo.Fragment = i), (wo.jsx = c), (wo.jsxs = c), wo);
}
var gp;
function fx() {
	return (gp || ((gp = 1), (Lu.exports = cx())), Lu.exports);
}
var j = fx(),
	ra = {},
	Nu = { exports: {} },
	xt = {},
	ju = { exports: {} },
	Iu = {};
var yp;
function dx() {
	return (
		yp ||
			((yp = 1),
			(function (e) {
				function n(F, z) {
					var W = F.length;
					F.push(z);
					e: for (; 0 < W; ) {
						var A = (W - 1) >>> 1,
							V = F[A];
						if (0 < a(V, z)) ((F[A] = z), (F[W] = V), (W = A));
						else break e;
					}
				}
				function i(F) {
					return F.length === 0 ? null : F[0];
				}
				function s(F) {
					if (F.length === 0) return null;
					var z = F[0],
						W = F.pop();
					if (W !== z) {
						F[0] = W;
						e: for (var A = 0, V = F.length, ee = V >>> 1; A < ee; ) {
							var ie = 2 * (A + 1) - 1,
								fe = F[ie],
								ve = ie + 1,
								le = F[ve];
							if (0 > a(fe, W))
								ve < V && 0 > a(le, fe) ? ((F[A] = le), (F[ve] = W), (A = ve)) : ((F[A] = fe), (F[ie] = W), (A = ie));
							else if (ve < V && 0 > a(le, W)) ((F[A] = le), (F[ve] = W), (A = ve));
							else break e;
						}
					}
					return z;
				}
				function a(F, z) {
					var W = F.sortIndex - z.sortIndex;
					return W !== 0 ? W : F.id - z.id;
				}
				if (typeof performance == 'object' && typeof performance.now == 'function') {
					var u = performance;
					e.unstable_now = function () {
						return u.now();
					};
				} else {
					var c = Date,
						d = c.now();
					e.unstable_now = function () {
						return c.now() - d;
					};
				}
				var h = [],
					m = [],
					g = 1,
					y = null,
					x = 3,
					v = !1,
					S = !1,
					P = !1,
					E = typeof setTimeout == 'function' ? setTimeout : null,
					b = typeof clearTimeout == 'function' ? clearTimeout : null,
					M = typeof setImmediate < 'u' ? setImmediate : null;
				typeof navigator < 'u' &&
					navigator.scheduling !== void 0 &&
					navigator.scheduling.isInputPending !== void 0 &&
					navigator.scheduling.isInputPending.bind(navigator.scheduling);
				function D(F) {
					for (var z = i(m); z !== null; ) {
						if (z.callback === null) s(m);
						else if (z.startTime <= F) (s(m), (z.sortIndex = z.expirationTime), n(h, z));
						else break;
						z = i(m);
					}
				}
				function O(F) {
					if (((P = !1), D(F), !S))
						if (i(h) !== null) ((S = !0), he(_));
						else {
							var z = i(m);
							z !== null && X(O, z.startTime - F);
						}
				}
				function _(F, z) {
					((S = !1), P && ((P = !1), b(H), (H = -1)), (v = !0));
					var W = x;
					try {
						for (D(z), y = i(h); y !== null && (!(y.expirationTime > z) || (F && !ye())); ) {
							var A = y.callback;
							if (typeof A == 'function') {
								((y.callback = null), (x = y.priorityLevel));
								var V = A(y.expirationTime <= z);
								((z = e.unstable_now()), typeof V == 'function' ? (y.callback = V) : y === i(h) && s(h), D(z));
							} else s(h);
							y = i(h);
						}
						if (y !== null) var ee = !0;
						else {
							var ie = i(m);
							(ie !== null && X(O, ie.startTime - z), (ee = !1));
						}
						return ee;
					} finally {
						((y = null), (x = W), (v = !1));
					}
				}
				var B = !1,
					G = null,
					H = -1,
					q = 5,
					oe = -1;
				function ye() {
					return !(e.unstable_now() - oe < q);
				}
				function J() {
					if (G !== null) {
						var F = e.unstable_now();
						oe = F;
						var z = !0;
						try {
							z = G(!0, F);
						} finally {
							z ? ge() : ((B = !1), (G = null));
						}
					} else B = !1;
				}
				var ge;
				if (typeof M == 'function')
					ge = function () {
						M(J);
					};
				else if (typeof MessageChannel < 'u') {
					var de = new MessageChannel(),
						Ce = de.port2;
					((de.port1.onmessage = J),
						(ge = function () {
							Ce.postMessage(null);
						}));
				} else
					ge = function () {
						E(J, 0);
					};
				function he(F) {
					((G = F), B || ((B = !0), ge()));
				}
				function X(F, z) {
					H = E(function () {
						F(e.unstable_now());
					}, z);
				}
				((e.unstable_IdlePriority = 5),
					(e.unstable_ImmediatePriority = 1),
					(e.unstable_LowPriority = 4),
					(e.unstable_NormalPriority = 3),
					(e.unstable_Profiling = null),
					(e.unstable_UserBlockingPriority = 2),
					(e.unstable_cancelCallback = function (F) {
						F.callback = null;
					}),
					(e.unstable_continueExecution = function () {
						S || v || ((S = !0), he(_));
					}),
					(e.unstable_forceFrameRate = function (F) {
						0 > F || 125 < F
							? console.error(
									'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
								)
							: (q = 0 < F ? Math.floor(1e3 / F) : 5);
					}),
					(e.unstable_getCurrentPriorityLevel = function () {
						return x;
					}),
					(e.unstable_getFirstCallbackNode = function () {
						return i(h);
					}),
					(e.unstable_next = function (F) {
						switch (x) {
							case 1:
							case 2:
							case 3:
								var z = 3;
								break;
							default:
								z = x;
						}
						var W = x;
						x = z;
						try {
							return F();
						} finally {
							x = W;
						}
					}),
					(e.unstable_pauseExecution = function () {}),
					(e.unstable_requestPaint = function () {}),
					(e.unstable_runWithPriority = function (F, z) {
						switch (F) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								F = 3;
						}
						var W = x;
						x = F;
						try {
							return z();
						} finally {
							x = W;
						}
					}),
					(e.unstable_scheduleCallback = function (F, z, W) {
						var A = e.unstable_now();
						switch (
							(typeof W == 'object' && W !== null
								? ((W = W.delay), (W = typeof W == 'number' && 0 < W ? A + W : A))
								: (W = A),
							F)
						) {
							case 1:
								var V = -1;
								break;
							case 2:
								V = 250;
								break;
							case 5:
								V = 1073741823;
								break;
							case 4:
								V = 1e4;
								break;
							default:
								V = 5e3;
						}
						return (
							(V = W + V),
							(F = { id: g++, callback: z, priorityLevel: F, startTime: W, expirationTime: V, sortIndex: -1 }),
							W > A
								? ((F.sortIndex = W),
									n(m, F),
									i(h) === null && F === i(m) && (P ? (b(H), (H = -1)) : (P = !0), X(O, W - A)))
								: ((F.sortIndex = V), n(h, F), S || v || ((S = !0), he(_))),
							F
						);
					}),
					(e.unstable_shouldYield = ye),
					(e.unstable_wrapCallback = function (F) {
						var z = x;
						return function () {
							var W = x;
							x = z;
							try {
								return F.apply(this, arguments);
							} finally {
								x = W;
							}
						};
					}));
			})(Iu)),
		Iu
	);
}
var vp;
function hx() {
	return (vp || ((vp = 1), (ju.exports = dx())), ju.exports);
}
var wp;
function px() {
	if (wp) return xt;
	wp = 1;
	var e = zc(),
		n = hx();
	function i(t) {
		for (var r = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, o = 1; o < arguments.length; o++)
			r += '&args[]=' + encodeURIComponent(arguments[o]);
		return (
			'Minified React error #' +
			t +
			'; visit ' +
			r +
			' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
		);
	}
	var s = new Set(),
		a = {};
	function u(t, r) {
		(c(t, r), c(t + 'Capture', r));
	}
	function c(t, r) {
		for (a[t] = r, t = 0; t < r.length; t++) s.add(r[t]);
	}
	var d = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
		h = Object.prototype.hasOwnProperty,
		m =
			/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		g = {},
		y = {};
	function x(t) {
		return h.call(y, t) ? !0 : h.call(g, t) ? !1 : m.test(t) ? (y[t] = !0) : ((g[t] = !0), !1);
	}
	function v(t, r, o, l) {
		if (o !== null && o.type === 0) return !1;
		switch (typeof r) {
			case 'function':
			case 'symbol':
				return !0;
			case 'boolean':
				return l
					? !1
					: o !== null
						? !o.acceptsBooleans
						: ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-');
			default:
				return !1;
		}
	}
	function S(t, r, o, l) {
		if (r === null || typeof r > 'u' || v(t, r, o, l)) return !0;
		if (l) return !1;
		if (o !== null)
			switch (o.type) {
				case 3:
					return !r;
				case 4:
					return r === !1;
				case 5:
					return isNaN(r);
				case 6:
					return isNaN(r) || 1 > r;
			}
		return !1;
	}
	function P(t, r, o, l, f, p, w) {
		((this.acceptsBooleans = r === 2 || r === 3 || r === 4),
			(this.attributeName = l),
			(this.attributeNamespace = f),
			(this.mustUseProperty = o),
			(this.propertyName = t),
			(this.type = r),
			(this.sanitizeURL = p),
			(this.removeEmptyString = w));
	}
	var E = {};
	('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
		.split(' ')
		.forEach(function (t) {
			E[t] = new P(t, 0, !1, t, null, !1, !1);
		}),
		[
			['acceptCharset', 'accept-charset'],
			['className', 'class'],
			['htmlFor', 'for'],
			['httpEquiv', 'http-equiv'],
		].forEach(function (t) {
			var r = t[0];
			E[r] = new P(r, 1, !1, t[1], null, !1, !1);
		}),
		['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
			E[t] = new P(t, 2, !1, t.toLowerCase(), null, !1, !1);
		}),
		['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (t) {
			E[t] = new P(t, 2, !1, t, null, !1, !1);
		}),
		'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
			.split(' ')
			.forEach(function (t) {
				E[t] = new P(t, 3, !1, t.toLowerCase(), null, !1, !1);
			}),
		['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
			E[t] = new P(t, 3, !0, t, null, !1, !1);
		}),
		['capture', 'download'].forEach(function (t) {
			E[t] = new P(t, 4, !1, t, null, !1, !1);
		}),
		['cols', 'rows', 'size', 'span'].forEach(function (t) {
			E[t] = new P(t, 6, !1, t, null, !1, !1);
		}),
		['rowSpan', 'start'].forEach(function (t) {
			E[t] = new P(t, 5, !1, t.toLowerCase(), null, !1, !1);
		}));
	var b = /[\-:]([a-z])/g;
	function M(t) {
		return t[1].toUpperCase();
	}
	('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
		.split(' ')
		.forEach(function (t) {
			var r = t.replace(b, M);
			E[r] = new P(r, 1, !1, t, null, !1, !1);
		}),
		'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (t) {
			var r = t.replace(b, M);
			E[r] = new P(r, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
		}),
		['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
			var r = t.replace(b, M);
			E[r] = new P(r, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
		}),
		['tabIndex', 'crossOrigin'].forEach(function (t) {
			E[t] = new P(t, 1, !1, t.toLowerCase(), null, !1, !1);
		}),
		(E.xlinkHref = new P('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)),
		['src', 'href', 'action', 'formAction'].forEach(function (t) {
			E[t] = new P(t, 1, !1, t.toLowerCase(), null, !0, !0);
		}));
	function D(t, r, o, l) {
		var f = E.hasOwnProperty(r) ? E[r] : null;
		(f !== null
			? f.type !== 0
			: l || !(2 < r.length) || (r[0] !== 'o' && r[0] !== 'O') || (r[1] !== 'n' && r[1] !== 'N')) &&
			(S(r, o, f, l) && (o = null),
			l || f === null
				? x(r) && (o === null ? t.removeAttribute(r) : t.setAttribute(r, '' + o))
				: f.mustUseProperty
					? (t[f.propertyName] = o === null ? (f.type === 3 ? !1 : '') : o)
					: ((r = f.attributeName),
						(l = f.attributeNamespace),
						o === null
							? t.removeAttribute(r)
							: ((f = f.type),
								(o = f === 3 || (f === 4 && o === !0) ? '' : '' + o),
								l ? t.setAttributeNS(l, r, o) : t.setAttribute(r, o))));
	}
	var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
		_ = Symbol.for('react.element'),
		B = Symbol.for('react.portal'),
		G = Symbol.for('react.fragment'),
		H = Symbol.for('react.strict_mode'),
		q = Symbol.for('react.profiler'),
		oe = Symbol.for('react.provider'),
		ye = Symbol.for('react.context'),
		J = Symbol.for('react.forward_ref'),
		ge = Symbol.for('react.suspense'),
		de = Symbol.for('react.suspense_list'),
		Ce = Symbol.for('react.memo'),
		he = Symbol.for('react.lazy'),
		X = Symbol.for('react.offscreen'),
		F = Symbol.iterator;
	function z(t) {
		return t === null || typeof t != 'object'
			? null
			: ((t = (F && t[F]) || t['@@iterator']), typeof t == 'function' ? t : null);
	}
	var W = Object.assign,
		A;
	function V(t) {
		if (A === void 0)
			try {
				throw Error();
			} catch (o) {
				var r = o.stack.trim().match(/\n( *(at )?)/);
				A = (r && r[1]) || '';
			}
		return (
			`
` +
			A +
			t
		);
	}
	var ee = !1;
	function ie(t, r) {
		if (!t || ee) return '';
		ee = !0;
		var o = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			if (r)
				if (
					((r = function () {
						throw Error();
					}),
					Object.defineProperty(r.prototype, 'props', {
						set: function () {
							throw Error();
						},
					}),
					typeof Reflect == 'object' && Reflect.construct)
				) {
					try {
						Reflect.construct(r, []);
					} catch (I) {
						var l = I;
					}
					Reflect.construct(t, [], r);
				} else {
					try {
						r.call();
					} catch (I) {
						l = I;
					}
					t.call(r.prototype);
				}
			else {
				try {
					throw Error();
				} catch (I) {
					l = I;
				}
				t();
			}
		} catch (I) {
			if (I && l && typeof I.stack == 'string') {
				for (
					var f = I.stack.split(`
`),
						p = l.stack.split(`
`),
						w = f.length - 1,
						T = p.length - 1;
					1 <= w && 0 <= T && f[w] !== p[T];
				)
					T--;
				for (; 1 <= w && 0 <= T; w--, T--)
					if (f[w] !== p[T]) {
						if (w !== 1 || T !== 1)
							do
								if ((w--, T--, 0 > T || f[w] !== p[T])) {
									var k =
										`
` + f[w].replace(' at new ', ' at ');
									return (
										t.displayName && k.includes('<anonymous>') && (k = k.replace('<anonymous>', t.displayName)),
										k
									);
								}
							while (1 <= w && 0 <= T);
						break;
					}
			}
		} finally {
			((ee = !1), (Error.prepareStackTrace = o));
		}
		return (t = t ? t.displayName || t.name : '') ? V(t) : '';
	}
	function fe(t) {
		switch (t.tag) {
			case 5:
				return V(t.type);
			case 16:
				return V('Lazy');
			case 13:
				return V('Suspense');
			case 19:
				return V('SuspenseList');
			case 0:
			case 2:
			case 15:
				return ((t = ie(t.type, !1)), t);
			case 11:
				return ((t = ie(t.type.render, !1)), t);
			case 1:
				return ((t = ie(t.type, !0)), t);
			default:
				return '';
		}
	}
	function ve(t) {
		if (t == null) return null;
		if (typeof t == 'function') return t.displayName || t.name || null;
		if (typeof t == 'string') return t;
		switch (t) {
			case G:
				return 'Fragment';
			case B:
				return 'Portal';
			case q:
				return 'Profiler';
			case H:
				return 'StrictMode';
			case ge:
				return 'Suspense';
			case de:
				return 'SuspenseList';
		}
		if (typeof t == 'object')
			switch (t.$$typeof) {
				case ye:
					return (t.displayName || 'Context') + '.Consumer';
				case oe:
					return (t._context.displayName || 'Context') + '.Provider';
				case J:
					var r = t.render;
					return (
						(t = t.displayName),
						t || ((t = r.displayName || r.name || ''), (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
						t
					);
				case Ce:
					return ((r = t.displayName || null), r !== null ? r : ve(t.type) || 'Memo');
				case he:
					((r = t._payload), (t = t._init));
					try {
						return ve(t(r));
					} catch {}
			}
		return null;
	}
	function le(t) {
		var r = t.type;
		switch (t.tag) {
			case 24:
				return 'Cache';
			case 9:
				return (r.displayName || 'Context') + '.Consumer';
			case 10:
				return (r._context.displayName || 'Context') + '.Provider';
			case 18:
				return 'DehydratedFragment';
			case 11:
				return (
					(t = r.render),
					(t = t.displayName || t.name || ''),
					r.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
				);
			case 7:
				return 'Fragment';
			case 5:
				return r;
			case 4:
				return 'Portal';
			case 3:
				return 'Root';
			case 6:
				return 'Text';
			case 16:
				return ve(r);
			case 8:
				return r === H ? 'StrictMode' : 'Mode';
			case 22:
				return 'Offscreen';
			case 12:
				return 'Profiler';
			case 21:
				return 'Scope';
			case 13:
				return 'Suspense';
			case 19:
				return 'SuspenseList';
			case 25:
				return 'TracingMarker';
			case 1:
			case 0:
			case 17:
			case 2:
			case 14:
			case 15:
				if (typeof r == 'function') return r.displayName || r.name || null;
				if (typeof r == 'string') return r;
		}
		return null;
	}
	function Se(t) {
		switch (typeof t) {
			case 'boolean':
			case 'number':
			case 'string':
			case 'undefined':
				return t;
			case 'object':
				return t;
			default:
				return '';
		}
	}
	function Pe(t) {
		var r = t.type;
		return (t = t.nodeName) && t.toLowerCase() === 'input' && (r === 'checkbox' || r === 'radio');
	}
	function Ue(t) {
		var r = Pe(t) ? 'checked' : 'value',
			o = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
			l = '' + t[r];
		if (!t.hasOwnProperty(r) && typeof o < 'u' && typeof o.get == 'function' && typeof o.set == 'function') {
			var f = o.get,
				p = o.set;
			return (
				Object.defineProperty(t, r, {
					configurable: !0,
					get: function () {
						return f.call(this);
					},
					set: function (w) {
						((l = '' + w), p.call(this, w));
					},
				}),
				Object.defineProperty(t, r, { enumerable: o.enumerable }),
				{
					getValue: function () {
						return l;
					},
					setValue: function (w) {
						l = '' + w;
					},
					stopTracking: function () {
						((t._valueTracker = null), delete t[r]);
					},
				}
			);
		}
	}
	function At(t) {
		t._valueTracker || (t._valueTracker = Ue(t));
	}
	function _n(t) {
		if (!t) return !1;
		var r = t._valueTracker;
		if (!r) return !0;
		var o = r.getValue(),
			l = '';
		return (t && (l = Pe(t) ? (t.checked ? 'true' : 'false') : t.value), (t = l), t !== o ? (r.setValue(t), !0) : !1);
	}
	function Mt(t) {
		if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
		try {
			return t.activeElement || t.body;
		} catch {
			return t.body;
		}
	}
	function Li(t, r) {
		var o = r.checked;
		return W({}, r, {
			defaultChecked: void 0,
			defaultValue: void 0,
			value: void 0,
			checked: o ?? t._wrapperState.initialChecked,
		});
	}
	function $o(t, r) {
		var o = r.defaultValue == null ? '' : r.defaultValue,
			l = r.checked != null ? r.checked : r.defaultChecked;
		((o = Se(r.value != null ? r.value : o)),
			(t._wrapperState = {
				initialChecked: l,
				initialValue: o,
				controlled: r.type === 'checkbox' || r.type === 'radio' ? r.checked != null : r.value != null,
			}));
	}
	function Oi(t, r) {
		((r = r.checked), r != null && D(t, 'checked', r, !1));
	}
	function Ni(t, r) {
		Oi(t, r);
		var o = Se(r.value),
			l = r.type;
		if (o != null)
			l === 'number'
				? ((o === 0 && t.value === '') || t.value != o) && (t.value = '' + o)
				: t.value !== '' + o && (t.value = '' + o);
		else if (l === 'submit' || l === 'reset') {
			t.removeAttribute('value');
			return;
		}
		(r.hasOwnProperty('value')
			? ji(t, r.type, o)
			: r.hasOwnProperty('defaultValue') && ji(t, r.type, Se(r.defaultValue)),
			r.checked == null && r.defaultChecked != null && (t.defaultChecked = !!r.defaultChecked));
	}
	function Vr(t, r, o) {
		if (r.hasOwnProperty('value') || r.hasOwnProperty('defaultValue')) {
			var l = r.type;
			if (!((l !== 'submit' && l !== 'reset') || (r.value !== void 0 && r.value !== null))) return;
			((r = '' + t._wrapperState.initialValue), o || r === t.value || (t.value = r), (t.defaultValue = r));
		}
		((o = t.name),
			o !== '' && (t.name = ''),
			(t.defaultChecked = !!t._wrapperState.initialChecked),
			o !== '' && (t.name = o));
	}
	function ji(t, r, o) {
		(r !== 'number' || Mt(t.ownerDocument) !== t) &&
			(o == null
				? (t.defaultValue = '' + t._wrapperState.initialValue)
				: t.defaultValue !== '' + o && (t.defaultValue = '' + o));
	}
	var Vn = Array.isArray;
	function Dt(t, r, o, l) {
		if (((t = t.options), r)) {
			r = {};
			for (var f = 0; f < o.length; f++) r['$' + o[f]] = !0;
			for (o = 0; o < t.length; o++)
				((f = r.hasOwnProperty('$' + t[o].value)),
					t[o].selected !== f && (t[o].selected = f),
					f && l && (t[o].defaultSelected = !0));
		} else {
			for (o = '' + Se(o), r = null, f = 0; f < t.length; f++) {
				if (t[f].value === o) {
					((t[f].selected = !0), l && (t[f].defaultSelected = !0));
					return;
				}
				r !== null || t[f].disabled || (r = t[f]);
			}
			r !== null && (r.selected = !0);
		}
	}
	function Fr(t, r) {
		if (r.dangerouslySetInnerHTML != null) throw Error(i(91));
		return W({}, r, { value: void 0, defaultValue: void 0, children: '' + t._wrapperState.initialValue });
	}
	function on(t, r) {
		var o = r.value;
		if (o == null) {
			if (((o = r.children), (r = r.defaultValue), o != null)) {
				if (r != null) throw Error(i(92));
				if (Vn(o)) {
					if (1 < o.length) throw Error(i(93));
					o = o[0];
				}
				r = o;
			}
			(r == null && (r = ''), (o = r));
		}
		t._wrapperState = { initialValue: Se(o) };
	}
	function Wo(t, r) {
		var o = Se(r.value),
			l = Se(r.defaultValue);
		(o != null &&
			((o = '' + o),
			o !== t.value && (t.value = o),
			r.defaultValue == null && t.defaultValue !== o && (t.defaultValue = o)),
			l != null && (t.defaultValue = '' + l));
	}
	function Ho(t) {
		var r = t.textContent;
		r === t._wrapperState.initialValue && r !== '' && r !== null && (t.value = r);
	}
	function st(t) {
		switch (t) {
			case 'svg':
				return 'http://www.w3.org/2000/svg';
			case 'math':
				return 'http://www.w3.org/1998/Math/MathML';
			default:
				return 'http://www.w3.org/1999/xhtml';
		}
	}
	function sn(t, r) {
		return t == null || t === 'http://www.w3.org/1999/xhtml'
			? st(r)
			: t === 'http://www.w3.org/2000/svg' && r === 'foreignObject'
				? 'http://www.w3.org/1999/xhtml'
				: t;
	}
	var zr,
		Ko = (function (t) {
			return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
				? function (r, o, l, f) {
						MSApp.execUnsafeLocalFunction(function () {
							return t(r, o, l, f);
						});
					}
				: t;
		})(function (t, r) {
			if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t) t.innerHTML = r;
			else {
				for (
					zr = zr || document.createElement('div'),
						zr.innerHTML = '<svg>' + r.valueOf().toString() + '</svg>',
						r = zr.firstChild;
					t.firstChild;
				)
					t.removeChild(t.firstChild);
				for (; r.firstChild; ) t.appendChild(r.firstChild);
			}
		});
	function an(t, r) {
		if (r) {
			var o = t.firstChild;
			if (o && o === t.lastChild && o.nodeType === 3) {
				o.nodeValue = r;
				return;
			}
		}
		t.textContent = r;
	}
	var mr = {
			animationIterationCount: !0,
			aspectRatio: !0,
			borderImageOutset: !0,
			borderImageSlice: !0,
			borderImageWidth: !0,
			boxFlex: !0,
			boxFlexGroup: !0,
			boxOrdinalGroup: !0,
			columnCount: !0,
			columns: !0,
			flex: !0,
			flexGrow: !0,
			flexPositive: !0,
			flexShrink: !0,
			flexNegative: !0,
			flexOrder: !0,
			gridArea: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowSpan: !0,
			gridRowStart: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnSpan: !0,
			gridColumnStart: !0,
			fontWeight: !0,
			lineClamp: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			tabSize: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeDasharray: !0,
			strokeDashoffset: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
			strokeWidth: !0,
		},
		Go = ['Webkit', 'ms', 'Moz', 'O'];
	Object.keys(mr).forEach(function (t) {
		Go.forEach(function (r) {
			((r = r + t.charAt(0).toUpperCase() + t.substring(1)), (mr[r] = mr[t]));
		});
	});
	function Br(t, r, o) {
		return r == null || typeof r == 'boolean' || r === ''
			? ''
			: o || typeof r != 'number' || r === 0 || (mr.hasOwnProperty(t) && mr[t])
				? ('' + r).trim()
				: r + 'px';
	}
	function En(t, r) {
		t = t.style;
		for (var o in r)
			if (r.hasOwnProperty(o)) {
				var l = o.indexOf('--') === 0,
					f = Br(o, r[o], l);
				(o === 'float' && (o = 'cssFloat'), l ? t.setProperty(o, f) : (t[o] = f));
			}
	}
	var Qo = W(
		{ menuitem: !0 },
		{
			area: !0,
			base: !0,
			br: !0,
			col: !0,
			embed: !0,
			hr: !0,
			img: !0,
			input: !0,
			keygen: !0,
			link: !0,
			meta: !0,
			param: !0,
			source: !0,
			track: !0,
			wbr: !0,
		},
	);
	function ln(t, r) {
		if (r) {
			if (Qo[t] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(i(137, t));
			if (r.dangerouslySetInnerHTML != null) {
				if (r.children != null) throw Error(i(60));
				if (typeof r.dangerouslySetInnerHTML != 'object' || !('__html' in r.dangerouslySetInnerHTML))
					throw Error(i(61));
			}
			if (r.style != null && typeof r.style != 'object') throw Error(i(62));
		}
	}
	function Ii(t, r) {
		if (t.indexOf('-') === -1) return typeof r.is == 'string';
		switch (t) {
			case 'annotation-xml':
			case 'color-profile':
			case 'font-face':
			case 'font-face-src':
			case 'font-face-uri':
			case 'font-face-format':
			case 'font-face-name':
			case 'missing-glyph':
				return !1;
			default:
				return !0;
		}
	}
	var _i = null;
	function Ur(t) {
		return (
			(t = t.target || t.srcElement || window),
			t.correspondingUseElement && (t = t.correspondingUseElement),
			t.nodeType === 3 ? t.parentNode : t
		);
	}
	var $r = null,
		Fn = null,
		un = null;
	function Bt(t) {
		if ((t = ro(t))) {
			if (typeof $r != 'function') throw Error(i(280));
			var r = t.stateNode;
			r && ((r = vs(r)), $r(t.stateNode, t.type, r));
		}
	}
	function Yo(t) {
		Fn ? (un ? un.push(t) : (un = [t])) : (Fn = t);
	}
	function me() {
		if (Fn) {
			var t = Fn,
				r = un;
			if (((un = Fn = null), Bt(t), r)) for (t = 0; t < r.length; t++) Bt(r[t]);
		}
	}
	function ke(t, r) {
		return t(r);
	}
	function Re() {}
	var at = !1;
	function ht(t, r, o) {
		if (at) return t(r, o);
		at = !0;
		try {
			return ke(t, r, o);
		} finally {
			((at = !1), (Fn !== null || un !== null) && (Re(), me()));
		}
	}
	function pt(t, r) {
		var o = t.stateNode;
		if (o === null) return null;
		var l = vs(o);
		if (l === null) return null;
		o = l[r];
		e: switch (r) {
			case 'onClick':
			case 'onClickCapture':
			case 'onDoubleClick':
			case 'onDoubleClickCapture':
			case 'onMouseDown':
			case 'onMouseDownCapture':
			case 'onMouseMove':
			case 'onMouseMoveCapture':
			case 'onMouseUp':
			case 'onMouseUpCapture':
			case 'onMouseEnter':
				((l = !l.disabled) ||
					((t = t.type), (l = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
					(t = !l));
				break e;
			default:
				t = !1;
		}
		if (t) return null;
		if (o && typeof o != 'function') throw Error(i(231, r, typeof o));
		return o;
	}
	var Ut = !1;
	if (d)
		try {
			var qe = {};
			(Object.defineProperty(qe, 'passive', {
				get: function () {
					Ut = !0;
				},
			}),
				window.addEventListener('test', qe, qe),
				window.removeEventListener('test', qe, qe));
		} catch {
			Ut = !1;
		}
	function cn(t, r, o, l, f, p, w, T, k) {
		var I = Array.prototype.slice.call(arguments, 3);
		try {
			r.apply(o, I);
		} catch ($) {
			this.onError($);
		}
	}
	var Vi = !1,
		Xo = null,
		qo = !1,
		qa = null,
		m0 = {
			onError: function (t) {
				((Vi = !0), (Xo = t));
			},
		};
	function g0(t, r, o, l, f, p, w, T, k) {
		((Vi = !1), (Xo = null), cn.apply(m0, arguments));
	}
	function y0(t, r, o, l, f, p, w, T, k) {
		if ((g0.apply(this, arguments), Vi)) {
			if (Vi) {
				var I = Xo;
				((Vi = !1), (Xo = null));
			} else throw Error(i(198));
			qo || ((qo = !0), (qa = I));
		}
	}
	function gr(t) {
		var r = t,
			o = t;
		if (t.alternate) for (; r.return; ) r = r.return;
		else {
			t = r;
			do ((r = t), (r.flags & 4098) !== 0 && (o = r.return), (t = r.return));
			while (t);
		}
		return r.tag === 3 ? o : null;
	}
	function If(t) {
		if (t.tag === 13) {
			var r = t.memoizedState;
			if ((r === null && ((t = t.alternate), t !== null && (r = t.memoizedState)), r !== null)) return r.dehydrated;
		}
		return null;
	}
	function _f(t) {
		if (gr(t) !== t) throw Error(i(188));
	}
	function v0(t) {
		var r = t.alternate;
		if (!r) {
			if (((r = gr(t)), r === null)) throw Error(i(188));
			return r !== t ? null : t;
		}
		for (var o = t, l = r; ; ) {
			var f = o.return;
			if (f === null) break;
			var p = f.alternate;
			if (p === null) {
				if (((l = f.return), l !== null)) {
					o = l;
					continue;
				}
				break;
			}
			if (f.child === p.child) {
				for (p = f.child; p; ) {
					if (p === o) return (_f(f), t);
					if (p === l) return (_f(f), r);
					p = p.sibling;
				}
				throw Error(i(188));
			}
			if (o.return !== l.return) ((o = f), (l = p));
			else {
				for (var w = !1, T = f.child; T; ) {
					if (T === o) {
						((w = !0), (o = f), (l = p));
						break;
					}
					if (T === l) {
						((w = !0), (l = f), (o = p));
						break;
					}
					T = T.sibling;
				}
				if (!w) {
					for (T = p.child; T; ) {
						if (T === o) {
							((w = !0), (o = p), (l = f));
							break;
						}
						if (T === l) {
							((w = !0), (l = p), (o = f));
							break;
						}
						T = T.sibling;
					}
					if (!w) throw Error(i(189));
				}
			}
			if (o.alternate !== l) throw Error(i(190));
		}
		if (o.tag !== 3) throw Error(i(188));
		return o.stateNode.current === o ? t : r;
	}
	function Vf(t) {
		return ((t = v0(t)), t !== null ? Ff(t) : null);
	}
	function Ff(t) {
		if (t.tag === 5 || t.tag === 6) return t;
		for (t = t.child; t !== null; ) {
			var r = Ff(t);
			if (r !== null) return r;
			t = t.sibling;
		}
		return null;
	}
	var zf = n.unstable_scheduleCallback,
		Bf = n.unstable_cancelCallback,
		w0 = n.unstable_shouldYield,
		x0 = n.unstable_requestPaint,
		ze = n.unstable_now,
		S0 = n.unstable_getCurrentPriorityLevel,
		Za = n.unstable_ImmediatePriority,
		Uf = n.unstable_UserBlockingPriority,
		Zo = n.unstable_NormalPriority,
		C0 = n.unstable_LowPriority,
		$f = n.unstable_IdlePriority,
		Jo = null,
		fn = null;
	function E0(t) {
		if (fn && typeof fn.onCommitFiberRoot == 'function')
			try {
				fn.onCommitFiberRoot(Jo, t, void 0, (t.current.flags & 128) === 128);
			} catch {}
	}
	var $t = Math.clz32 ? Math.clz32 : k0,
		P0 = Math.log,
		T0 = Math.LN2;
	function k0(t) {
		return ((t >>>= 0), t === 0 ? 32 : (31 - ((P0(t) / T0) | 0)) | 0);
	}
	var es = 64,
		ts = 4194304;
	function Fi(t) {
		switch (t & -t) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t & 4194240;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return t & 130023424;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 1073741824;
			default:
				return t;
		}
	}
	function ns(t, r) {
		var o = t.pendingLanes;
		if (o === 0) return 0;
		var l = 0,
			f = t.suspendedLanes,
			p = t.pingedLanes,
			w = o & 268435455;
		if (w !== 0) {
			var T = w & ~f;
			T !== 0 ? (l = Fi(T)) : ((p &= w), p !== 0 && (l = Fi(p)));
		} else ((w = o & ~f), w !== 0 ? (l = Fi(w)) : p !== 0 && (l = Fi(p)));
		if (l === 0) return 0;
		if (
			r !== 0 &&
			r !== l &&
			(r & f) === 0 &&
			((f = l & -l), (p = r & -r), f >= p || (f === 16 && (p & 4194240) !== 0))
		)
			return r;
		if (((l & 4) !== 0 && (l |= o & 16), (r = t.entangledLanes), r !== 0))
			for (t = t.entanglements, r &= l; 0 < r; ) ((o = 31 - $t(r)), (f = 1 << o), (l |= t[o]), (r &= ~f));
		return l;
	}
	function b0(t, r) {
		switch (t) {
			case 1:
			case 2:
			case 4:
				return r + 250;
			case 8:
			case 16:
			case 32:
			case 64:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return r + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
			case 67108864:
				return -1;
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function R0(t, r) {
		for (var o = t.suspendedLanes, l = t.pingedLanes, f = t.expirationTimes, p = t.pendingLanes; 0 < p; ) {
			var w = 31 - $t(p),
				T = 1 << w,
				k = f[w];
			(k === -1 ? ((T & o) === 0 || (T & l) !== 0) && (f[w] = b0(T, r)) : k <= r && (t.expiredLanes |= T), (p &= ~T));
		}
	}
	function Ja(t) {
		return ((t = t.pendingLanes & -1073741825), t !== 0 ? t : t & 1073741824 ? 1073741824 : 0);
	}
	function Wf() {
		var t = es;
		return ((es <<= 1), (es & 4194240) === 0 && (es = 64), t);
	}
	function el(t) {
		for (var r = [], o = 0; 31 > o; o++) r.push(t);
		return r;
	}
	function zi(t, r, o) {
		((t.pendingLanes |= r),
			r !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
			(t = t.eventTimes),
			(r = 31 - $t(r)),
			(t[r] = o));
	}
	function A0(t, r) {
		var o = t.pendingLanes & ~r;
		((t.pendingLanes = r),
			(t.suspendedLanes = 0),
			(t.pingedLanes = 0),
			(t.expiredLanes &= r),
			(t.mutableReadLanes &= r),
			(t.entangledLanes &= r),
			(r = t.entanglements));
		var l = t.eventTimes;
		for (t = t.expirationTimes; 0 < o; ) {
			var f = 31 - $t(o),
				p = 1 << f;
			((r[f] = 0), (l[f] = -1), (t[f] = -1), (o &= ~p));
		}
	}
	function tl(t, r) {
		var o = (t.entangledLanes |= r);
		for (t = t.entanglements; o; ) {
			var l = 31 - $t(o),
				f = 1 << l;
			((f & r) | (t[l] & r) && (t[l] |= r), (o &= ~f));
		}
	}
	var be = 0;
	function Hf(t) {
		return ((t &= -t), 1 < t ? (4 < t ? ((t & 268435455) !== 0 ? 16 : 536870912) : 4) : 1);
	}
	var Kf,
		nl,
		Gf,
		Qf,
		Yf,
		rl = !1,
		rs = [],
		zn = null,
		Bn = null,
		Un = null,
		Bi = new Map(),
		Ui = new Map(),
		$n = [],
		M0 =
			'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
				' ',
			);
	function Xf(t, r) {
		switch (t) {
			case 'focusin':
			case 'focusout':
				zn = null;
				break;
			case 'dragenter':
			case 'dragleave':
				Bn = null;
				break;
			case 'mouseover':
			case 'mouseout':
				Un = null;
				break;
			case 'pointerover':
			case 'pointerout':
				Bi.delete(r.pointerId);
				break;
			case 'gotpointercapture':
			case 'lostpointercapture':
				Ui.delete(r.pointerId);
		}
	}
	function $i(t, r, o, l, f, p) {
		return t === null || t.nativeEvent !== p
			? ((t = { blockedOn: r, domEventName: o, eventSystemFlags: l, nativeEvent: p, targetContainers: [f] }),
				r !== null && ((r = ro(r)), r !== null && nl(r)),
				t)
			: ((t.eventSystemFlags |= l), (r = t.targetContainers), f !== null && r.indexOf(f) === -1 && r.push(f), t);
	}
	function D0(t, r, o, l, f) {
		switch (r) {
			case 'focusin':
				return ((zn = $i(zn, t, r, o, l, f)), !0);
			case 'dragenter':
				return ((Bn = $i(Bn, t, r, o, l, f)), !0);
			case 'mouseover':
				return ((Un = $i(Un, t, r, o, l, f)), !0);
			case 'pointerover':
				var p = f.pointerId;
				return (Bi.set(p, $i(Bi.get(p) || null, t, r, o, l, f)), !0);
			case 'gotpointercapture':
				return ((p = f.pointerId), Ui.set(p, $i(Ui.get(p) || null, t, r, o, l, f)), !0);
		}
		return !1;
	}
	function qf(t) {
		var r = yr(t.target);
		if (r !== null) {
			var o = gr(r);
			if (o !== null) {
				if (((r = o.tag), r === 13)) {
					if (((r = If(o)), r !== null)) {
						((t.blockedOn = r),
							Yf(t.priority, function () {
								Gf(o);
							}));
						return;
					}
				} else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
					t.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
					return;
				}
			}
		}
		t.blockedOn = null;
	}
	function is(t) {
		if (t.blockedOn !== null) return !1;
		for (var r = t.targetContainers; 0 < r.length; ) {
			var o = ol(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
			if (o === null) {
				o = t.nativeEvent;
				var l = new o.constructor(o.type, o);
				((_i = l), o.target.dispatchEvent(l), (_i = null));
			} else return ((r = ro(o)), r !== null && nl(r), (t.blockedOn = o), !1);
			r.shift();
		}
		return !0;
	}
	function Zf(t, r, o) {
		is(t) && o.delete(r);
	}
	function L0() {
		((rl = !1),
			zn !== null && is(zn) && (zn = null),
			Bn !== null && is(Bn) && (Bn = null),
			Un !== null && is(Un) && (Un = null),
			Bi.forEach(Zf),
			Ui.forEach(Zf));
	}
	function Wi(t, r) {
		t.blockedOn === r &&
			((t.blockedOn = null), rl || ((rl = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, L0)));
	}
	function Hi(t) {
		function r(f) {
			return Wi(f, t);
		}
		if (0 < rs.length) {
			Wi(rs[0], t);
			for (var o = 1; o < rs.length; o++) {
				var l = rs[o];
				l.blockedOn === t && (l.blockedOn = null);
			}
		}
		for (
			zn !== null && Wi(zn, t), Bn !== null && Wi(Bn, t), Un !== null && Wi(Un, t), Bi.forEach(r), Ui.forEach(r), o = 0;
			o < $n.length;
			o++
		)
			((l = $n[o]), l.blockedOn === t && (l.blockedOn = null));
		for (; 0 < $n.length && ((o = $n[0]), o.blockedOn === null); ) (qf(o), o.blockedOn === null && $n.shift());
	}
	var Wr = O.ReactCurrentBatchConfig,
		os = !0;
	function O0(t, r, o, l) {
		var f = be,
			p = Wr.transition;
		Wr.transition = null;
		try {
			((be = 1), il(t, r, o, l));
		} finally {
			((be = f), (Wr.transition = p));
		}
	}
	function N0(t, r, o, l) {
		var f = be,
			p = Wr.transition;
		Wr.transition = null;
		try {
			((be = 4), il(t, r, o, l));
		} finally {
			((be = f), (Wr.transition = p));
		}
	}
	function il(t, r, o, l) {
		if (os) {
			var f = ol(t, r, o, l);
			if (f === null) (Cl(t, r, l, ss, o), Xf(t, l));
			else if (D0(f, t, r, o, l)) l.stopPropagation();
			else if ((Xf(t, l), r & 4 && -1 < M0.indexOf(t))) {
				for (; f !== null; ) {
					var p = ro(f);
					if ((p !== null && Kf(p), (p = ol(t, r, o, l)), p === null && Cl(t, r, l, ss, o), p === f)) break;
					f = p;
				}
				f !== null && l.stopPropagation();
			} else Cl(t, r, l, null, o);
		}
	}
	var ss = null;
	function ol(t, r, o, l) {
		if (((ss = null), (t = Ur(l)), (t = yr(t)), t !== null))
			if (((r = gr(t)), r === null)) t = null;
			else if (((o = r.tag), o === 13)) {
				if (((t = If(r)), t !== null)) return t;
				t = null;
			} else if (o === 3) {
				if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
				t = null;
			} else r !== t && (t = null);
		return ((ss = t), null);
	}
	function Jf(t) {
		switch (t) {
			case 'cancel':
			case 'click':
			case 'close':
			case 'contextmenu':
			case 'copy':
			case 'cut':
			case 'auxclick':
			case 'dblclick':
			case 'dragend':
			case 'dragstart':
			case 'drop':
			case 'focusin':
			case 'focusout':
			case 'input':
			case 'invalid':
			case 'keydown':
			case 'keypress':
			case 'keyup':
			case 'mousedown':
			case 'mouseup':
			case 'paste':
			case 'pause':
			case 'play':
			case 'pointercancel':
			case 'pointerdown':
			case 'pointerup':
			case 'ratechange':
			case 'reset':
			case 'resize':
			case 'seeked':
			case 'submit':
			case 'touchcancel':
			case 'touchend':
			case 'touchstart':
			case 'volumechange':
			case 'change':
			case 'selectionchange':
			case 'textInput':
			case 'compositionstart':
			case 'compositionend':
			case 'compositionupdate':
			case 'beforeblur':
			case 'afterblur':
			case 'beforeinput':
			case 'blur':
			case 'fullscreenchange':
			case 'focus':
			case 'hashchange':
			case 'popstate':
			case 'select':
			case 'selectstart':
				return 1;
			case 'drag':
			case 'dragenter':
			case 'dragexit':
			case 'dragleave':
			case 'dragover':
			case 'mousemove':
			case 'mouseout':
			case 'mouseover':
			case 'pointermove':
			case 'pointerout':
			case 'pointerover':
			case 'scroll':
			case 'toggle':
			case 'touchmove':
			case 'wheel':
			case 'mouseenter':
			case 'mouseleave':
			case 'pointerenter':
			case 'pointerleave':
				return 4;
			case 'message':
				switch (S0()) {
					case Za:
						return 1;
					case Uf:
						return 4;
					case Zo:
					case C0:
						return 16;
					case $f:
						return 536870912;
					default:
						return 16;
				}
			default:
				return 16;
		}
	}
	var Wn = null,
		sl = null,
		as = null;
	function ed() {
		if (as) return as;
		var t,
			r = sl,
			o = r.length,
			l,
			f = 'value' in Wn ? Wn.value : Wn.textContent,
			p = f.length;
		for (t = 0; t < o && r[t] === f[t]; t++);
		var w = o - t;
		for (l = 1; l <= w && r[o - l] === f[p - l]; l++);
		return (as = f.slice(t, 1 < l ? 1 - l : void 0));
	}
	function ls(t) {
		var r = t.keyCode;
		return (
			'charCode' in t ? ((t = t.charCode), t === 0 && r === 13 && (t = 13)) : (t = r),
			t === 10 && (t = 13),
			32 <= t || t === 13 ? t : 0
		);
	}
	function us() {
		return !0;
	}
	function td() {
		return !1;
	}
	function Et(t) {
		function r(o, l, f, p, w) {
			((this._reactName = o),
				(this._targetInst = f),
				(this.type = l),
				(this.nativeEvent = p),
				(this.target = w),
				(this.currentTarget = null));
			for (var T in t) t.hasOwnProperty(T) && ((o = t[T]), (this[T] = o ? o(p) : p[T]));
			return (
				(this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? us : td),
				(this.isPropagationStopped = td),
				this
			);
		}
		return (
			W(r.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var o = this.nativeEvent;
					o &&
						(o.preventDefault ? o.preventDefault() : typeof o.returnValue != 'unknown' && (o.returnValue = !1),
						(this.isDefaultPrevented = us));
				},
				stopPropagation: function () {
					var o = this.nativeEvent;
					o &&
						(o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != 'unknown' && (o.cancelBubble = !0),
						(this.isPropagationStopped = us));
				},
				persist: function () {},
				isPersistent: us,
			}),
			r
		);
	}
	var Hr = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (t) {
				return t.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0,
		},
		al = Et(Hr),
		Ki = W({}, Hr, { view: 0, detail: 0 }),
		j0 = Et(Ki),
		ll,
		ul,
		Gi,
		cs = W({}, Ki, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: fl,
			button: 0,
			buttons: 0,
			relatedTarget: function (t) {
				return t.relatedTarget === void 0
					? t.fromElement === t.srcElement
						? t.toElement
						: t.fromElement
					: t.relatedTarget;
			},
			movementX: function (t) {
				return 'movementX' in t
					? t.movementX
					: (t !== Gi &&
							(Gi && t.type === 'mousemove'
								? ((ll = t.screenX - Gi.screenX), (ul = t.screenY - Gi.screenY))
								: (ul = ll = 0),
							(Gi = t)),
						ll);
			},
			movementY: function (t) {
				return 'movementY' in t ? t.movementY : ul;
			},
		}),
		nd = Et(cs),
		I0 = W({}, cs, { dataTransfer: 0 }),
		_0 = Et(I0),
		V0 = W({}, Ki, { relatedTarget: 0 }),
		cl = Et(V0),
		F0 = W({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		z0 = Et(F0),
		B0 = W({}, Hr, {
			clipboardData: function (t) {
				return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
			},
		}),
		U0 = Et(B0),
		$0 = W({}, Hr, { data: 0 }),
		rd = Et($0),
		W0 = {
			Esc: 'Escape',
			Spacebar: ' ',
			Left: 'ArrowLeft',
			Up: 'ArrowUp',
			Right: 'ArrowRight',
			Down: 'ArrowDown',
			Del: 'Delete',
			Win: 'OS',
			Menu: 'ContextMenu',
			Apps: 'ContextMenu',
			Scroll: 'ScrollLock',
			MozPrintableKey: 'Unidentified',
		},
		H0 = {
			8: 'Backspace',
			9: 'Tab',
			12: 'Clear',
			13: 'Enter',
			16: 'Shift',
			17: 'Control',
			18: 'Alt',
			19: 'Pause',
			20: 'CapsLock',
			27: 'Escape',
			32: ' ',
			33: 'PageUp',
			34: 'PageDown',
			35: 'End',
			36: 'Home',
			37: 'ArrowLeft',
			38: 'ArrowUp',
			39: 'ArrowRight',
			40: 'ArrowDown',
			45: 'Insert',
			46: 'Delete',
			112: 'F1',
			113: 'F2',
			114: 'F3',
			115: 'F4',
			116: 'F5',
			117: 'F6',
			118: 'F7',
			119: 'F8',
			120: 'F9',
			121: 'F10',
			122: 'F11',
			123: 'F12',
			144: 'NumLock',
			145: 'ScrollLock',
			224: 'Meta',
		},
		K0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
	function G0(t) {
		var r = this.nativeEvent;
		return r.getModifierState ? r.getModifierState(t) : (t = K0[t]) ? !!r[t] : !1;
	}
	function fl() {
		return G0;
	}
	var Q0 = W({}, Ki, {
			key: function (t) {
				if (t.key) {
					var r = W0[t.key] || t.key;
					if (r !== 'Unidentified') return r;
				}
				return t.type === 'keypress'
					? ((t = ls(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
					: t.type === 'keydown' || t.type === 'keyup'
						? H0[t.keyCode] || 'Unidentified'
						: '';
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: fl,
			charCode: function (t) {
				return t.type === 'keypress' ? ls(t) : 0;
			},
			keyCode: function (t) {
				return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
			},
			which: function (t) {
				return t.type === 'keypress' ? ls(t) : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
			},
		}),
		Y0 = Et(Q0),
		X0 = W({}, cs, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		id = Et(X0),
		q0 = W({}, Ki, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: fl,
		}),
		Z0 = Et(q0),
		J0 = W({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		ew = Et(J0),
		tw = W({}, cs, {
			deltaX: function (t) {
				return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
			},
			deltaY: function (t) {
				return 'deltaY' in t ? t.deltaY : 'wheelDeltaY' in t ? -t.wheelDeltaY : 'wheelDelta' in t ? -t.wheelDelta : 0;
			},
			deltaZ: 0,
			deltaMode: 0,
		}),
		nw = Et(tw),
		rw = [9, 13, 27, 32],
		dl = d && 'CompositionEvent' in window,
		Qi = null;
	d && 'documentMode' in document && (Qi = document.documentMode);
	var iw = d && 'TextEvent' in window && !Qi,
		od = d && (!dl || (Qi && 8 < Qi && 11 >= Qi)),
		sd = ' ',
		ad = !1;
	function ld(t, r) {
		switch (t) {
			case 'keyup':
				return rw.indexOf(r.keyCode) !== -1;
			case 'keydown':
				return r.keyCode !== 229;
			case 'keypress':
			case 'mousedown':
			case 'focusout':
				return !0;
			default:
				return !1;
		}
	}
	function ud(t) {
		return ((t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null);
	}
	var Kr = !1;
	function ow(t, r) {
		switch (t) {
			case 'compositionend':
				return ud(r);
			case 'keypress':
				return r.which !== 32 ? null : ((ad = !0), sd);
			case 'textInput':
				return ((t = r.data), t === sd && ad ? null : t);
			default:
				return null;
		}
	}
	function sw(t, r) {
		if (Kr)
			return t === 'compositionend' || (!dl && ld(t, r)) ? ((t = ed()), (as = sl = Wn = null), (Kr = !1), t) : null;
		switch (t) {
			case 'paste':
				return null;
			case 'keypress':
				if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
					if (r.char && 1 < r.char.length) return r.char;
					if (r.which) return String.fromCharCode(r.which);
				}
				return null;
			case 'compositionend':
				return od && r.locale !== 'ko' ? null : r.data;
			default:
				return null;
		}
	}
	var aw = {
		color: !0,
		date: !0,
		datetime: !0,
		'datetime-local': !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function cd(t) {
		var r = t && t.nodeName && t.nodeName.toLowerCase();
		return r === 'input' ? !!aw[t.type] : r === 'textarea';
	}
	function fd(t, r, o, l) {
		(Yo(l),
			(r = ms(r, 'onChange')),
			0 < r.length && ((o = new al('onChange', 'change', null, o, l)), t.push({ event: o, listeners: r })));
	}
	var Yi = null,
		Xi = null;
	function lw(t) {
		Ad(t, 0);
	}
	function fs(t) {
		var r = qr(t);
		if (_n(r)) return t;
	}
	function uw(t, r) {
		if (t === 'change') return r;
	}
	var dd = !1;
	if (d) {
		var hl;
		if (d) {
			var pl = 'oninput' in document;
			if (!pl) {
				var hd = document.createElement('div');
				(hd.setAttribute('oninput', 'return;'), (pl = typeof hd.oninput == 'function'));
			}
			hl = pl;
		} else hl = !1;
		dd = hl && (!document.documentMode || 9 < document.documentMode);
	}
	function pd() {
		Yi && (Yi.detachEvent('onpropertychange', md), (Xi = Yi = null));
	}
	function md(t) {
		if (t.propertyName === 'value' && fs(Xi)) {
			var r = [];
			(fd(r, Xi, t, Ur(t)), ht(lw, r));
		}
	}
	function cw(t, r, o) {
		t === 'focusin' ? (pd(), (Yi = r), (Xi = o), Yi.attachEvent('onpropertychange', md)) : t === 'focusout' && pd();
	}
	function fw(t) {
		if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return fs(Xi);
	}
	function dw(t, r) {
		if (t === 'click') return fs(r);
	}
	function hw(t, r) {
		if (t === 'input' || t === 'change') return fs(r);
	}
	function pw(t, r) {
		return (t === r && (t !== 0 || 1 / t === 1 / r)) || (t !== t && r !== r);
	}
	var Wt = typeof Object.is == 'function' ? Object.is : pw;
	function qi(t, r) {
		if (Wt(t, r)) return !0;
		if (typeof t != 'object' || t === null || typeof r != 'object' || r === null) return !1;
		var o = Object.keys(t),
			l = Object.keys(r);
		if (o.length !== l.length) return !1;
		for (l = 0; l < o.length; l++) {
			var f = o[l];
			if (!h.call(r, f) || !Wt(t[f], r[f])) return !1;
		}
		return !0;
	}
	function gd(t) {
		for (; t && t.firstChild; ) t = t.firstChild;
		return t;
	}
	function yd(t, r) {
		var o = gd(t);
		t = 0;
		for (var l; o; ) {
			if (o.nodeType === 3) {
				if (((l = t + o.textContent.length), t <= r && l >= r)) return { node: o, offset: r - t };
				t = l;
			}
			e: {
				for (; o; ) {
					if (o.nextSibling) {
						o = o.nextSibling;
						break e;
					}
					o = o.parentNode;
				}
				o = void 0;
			}
			o = gd(o);
		}
	}
	function vd(t, r) {
		return t && r
			? t === r
				? !0
				: t && t.nodeType === 3
					? !1
					: r && r.nodeType === 3
						? vd(t, r.parentNode)
						: 'contains' in t
							? t.contains(r)
							: t.compareDocumentPosition
								? !!(t.compareDocumentPosition(r) & 16)
								: !1
			: !1;
	}
	function wd() {
		for (var t = window, r = Mt(); r instanceof t.HTMLIFrameElement; ) {
			try {
				var o = typeof r.contentWindow.location.href == 'string';
			} catch {
				o = !1;
			}
			if (o) t = r.contentWindow;
			else break;
			r = Mt(t.document);
		}
		return r;
	}
	function ml(t) {
		var r = t && t.nodeName && t.nodeName.toLowerCase();
		return (
			r &&
			((r === 'input' &&
				(t.type === 'text' || t.type === 'search' || t.type === 'tel' || t.type === 'url' || t.type === 'password')) ||
				r === 'textarea' ||
				t.contentEditable === 'true')
		);
	}
	function mw(t) {
		var r = wd(),
			o = t.focusedElem,
			l = t.selectionRange;
		if (r !== o && o && o.ownerDocument && vd(o.ownerDocument.documentElement, o)) {
			if (l !== null && ml(o)) {
				if (((r = l.start), (t = l.end), t === void 0 && (t = r), 'selectionStart' in o))
					((o.selectionStart = r), (o.selectionEnd = Math.min(t, o.value.length)));
				else if (((t = ((r = o.ownerDocument || document) && r.defaultView) || window), t.getSelection)) {
					t = t.getSelection();
					var f = o.textContent.length,
						p = Math.min(l.start, f);
					((l = l.end === void 0 ? p : Math.min(l.end, f)),
						!t.extend && p > l && ((f = l), (l = p), (p = f)),
						(f = yd(o, p)));
					var w = yd(o, l);
					f &&
						w &&
						(t.rangeCount !== 1 ||
							t.anchorNode !== f.node ||
							t.anchorOffset !== f.offset ||
							t.focusNode !== w.node ||
							t.focusOffset !== w.offset) &&
						((r = r.createRange()),
						r.setStart(f.node, f.offset),
						t.removeAllRanges(),
						p > l ? (t.addRange(r), t.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset), t.addRange(r)));
				}
			}
			for (r = [], t = o; (t = t.parentNode); )
				t.nodeType === 1 && r.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
			for (typeof o.focus == 'function' && o.focus(), o = 0; o < r.length; o++)
				((t = r[o]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top));
		}
	}
	var gw = d && 'documentMode' in document && 11 >= document.documentMode,
		Gr = null,
		gl = null,
		Zi = null,
		yl = !1;
	function xd(t, r, o) {
		var l = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
		yl ||
			Gr == null ||
			Gr !== Mt(l) ||
			((l = Gr),
			'selectionStart' in l && ml(l)
				? (l = { start: l.selectionStart, end: l.selectionEnd })
				: ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
					(l = {
						anchorNode: l.anchorNode,
						anchorOffset: l.anchorOffset,
						focusNode: l.focusNode,
						focusOffset: l.focusOffset,
					})),
			(Zi && qi(Zi, l)) ||
				((Zi = l),
				(l = ms(gl, 'onSelect')),
				0 < l.length &&
					((r = new al('onSelect', 'select', null, r, o)), t.push({ event: r, listeners: l }), (r.target = Gr))));
	}
	function ds(t, r) {
		var o = {};
		return ((o[t.toLowerCase()] = r.toLowerCase()), (o['Webkit' + t] = 'webkit' + r), (o['Moz' + t] = 'moz' + r), o);
	}
	var Qr = {
			animationend: ds('Animation', 'AnimationEnd'),
			animationiteration: ds('Animation', 'AnimationIteration'),
			animationstart: ds('Animation', 'AnimationStart'),
			transitionend: ds('Transition', 'TransitionEnd'),
		},
		vl = {},
		Sd = {};
	d &&
		((Sd = document.createElement('div').style),
		'AnimationEvent' in window ||
			(delete Qr.animationend.animation, delete Qr.animationiteration.animation, delete Qr.animationstart.animation),
		'TransitionEvent' in window || delete Qr.transitionend.transition);
	function hs(t) {
		if (vl[t]) return vl[t];
		if (!Qr[t]) return t;
		var r = Qr[t],
			o;
		for (o in r) if (r.hasOwnProperty(o) && o in Sd) return (vl[t] = r[o]);
		return t;
	}
	var Cd = hs('animationend'),
		Ed = hs('animationiteration'),
		Pd = hs('animationstart'),
		Td = hs('transitionend'),
		kd = new Map(),
		bd =
			'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
				' ',
			);
	function Hn(t, r) {
		(kd.set(t, r), u(r, [t]));
	}
	for (var wl = 0; wl < bd.length; wl++) {
		var xl = bd[wl],
			yw = xl.toLowerCase(),
			vw = xl[0].toUpperCase() + xl.slice(1);
		Hn(yw, 'on' + vw);
	}
	(Hn(Cd, 'onAnimationEnd'),
		Hn(Ed, 'onAnimationIteration'),
		Hn(Pd, 'onAnimationStart'),
		Hn('dblclick', 'onDoubleClick'),
		Hn('focusin', 'onFocus'),
		Hn('focusout', 'onBlur'),
		Hn(Td, 'onTransitionEnd'),
		c('onMouseEnter', ['mouseout', 'mouseover']),
		c('onMouseLeave', ['mouseout', 'mouseover']),
		c('onPointerEnter', ['pointerout', 'pointerover']),
		c('onPointerLeave', ['pointerout', 'pointerover']),
		u('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
		u('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
		u('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
		u('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
		u('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
		u('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')));
	var Ji =
			'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
				' ',
			),
		ww = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ji));
	function Rd(t, r, o) {
		var l = t.type || 'unknown-event';
		((t.currentTarget = o), y0(l, r, void 0, t), (t.currentTarget = null));
	}
	function Ad(t, r) {
		r = (r & 4) !== 0;
		for (var o = 0; o < t.length; o++) {
			var l = t[o],
				f = l.event;
			l = l.listeners;
			e: {
				var p = void 0;
				if (r)
					for (var w = l.length - 1; 0 <= w; w--) {
						var T = l[w],
							k = T.instance,
							I = T.currentTarget;
						if (((T = T.listener), k !== p && f.isPropagationStopped())) break e;
						(Rd(f, T, I), (p = k));
					}
				else
					for (w = 0; w < l.length; w++) {
						if (
							((T = l[w]),
							(k = T.instance),
							(I = T.currentTarget),
							(T = T.listener),
							k !== p && f.isPropagationStopped())
						)
							break e;
						(Rd(f, T, I), (p = k));
					}
			}
		}
		if (qo) throw ((t = qa), (qo = !1), (qa = null), t);
	}
	function De(t, r) {
		var o = r[Rl];
		o === void 0 && (o = r[Rl] = new Set());
		var l = t + '__bubble';
		o.has(l) || (Md(r, t, 2, !1), o.add(l));
	}
	function Sl(t, r, o) {
		var l = 0;
		(r && (l |= 4), Md(o, t, l, r));
	}
	var ps = '_reactListening' + Math.random().toString(36).slice(2);
	function eo(t) {
		if (!t[ps]) {
			((t[ps] = !0),
				s.forEach(function (o) {
					o !== 'selectionchange' && (ww.has(o) || Sl(o, !1, t), Sl(o, !0, t));
				}));
			var r = t.nodeType === 9 ? t : t.ownerDocument;
			r === null || r[ps] || ((r[ps] = !0), Sl('selectionchange', !1, r));
		}
	}
	function Md(t, r, o, l) {
		switch (Jf(r)) {
			case 1:
				var f = O0;
				break;
			case 4:
				f = N0;
				break;
			default:
				f = il;
		}
		((o = f.bind(null, r, o, t)),
			(f = void 0),
			!Ut || (r !== 'touchstart' && r !== 'touchmove' && r !== 'wheel') || (f = !0),
			l
				? f !== void 0
					? t.addEventListener(r, o, { capture: !0, passive: f })
					: t.addEventListener(r, o, !0)
				: f !== void 0
					? t.addEventListener(r, o, { passive: f })
					: t.addEventListener(r, o, !1));
	}
	function Cl(t, r, o, l, f) {
		var p = l;
		if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
			e: for (;;) {
				if (l === null) return;
				var w = l.tag;
				if (w === 3 || w === 4) {
					var T = l.stateNode.containerInfo;
					if (T === f || (T.nodeType === 8 && T.parentNode === f)) break;
					if (w === 4)
						for (w = l.return; w !== null; ) {
							var k = w.tag;
							if (
								(k === 3 || k === 4) &&
								((k = w.stateNode.containerInfo), k === f || (k.nodeType === 8 && k.parentNode === f))
							)
								return;
							w = w.return;
						}
					for (; T !== null; ) {
						if (((w = yr(T)), w === null)) return;
						if (((k = w.tag), k === 5 || k === 6)) {
							l = p = w;
							continue e;
						}
						T = T.parentNode;
					}
				}
				l = l.return;
			}
		ht(function () {
			var I = p,
				$ = Ur(o),
				K = [];
			e: {
				var U = kd.get(t);
				if (U !== void 0) {
					var Z = al,
						ne = t;
					switch (t) {
						case 'keypress':
							if (ls(o) === 0) break e;
						case 'keydown':
						case 'keyup':
							Z = Y0;
							break;
						case 'focusin':
							((ne = 'focus'), (Z = cl));
							break;
						case 'focusout':
							((ne = 'blur'), (Z = cl));
							break;
						case 'beforeblur':
						case 'afterblur':
							Z = cl;
							break;
						case 'click':
							if (o.button === 2) break e;
						case 'auxclick':
						case 'dblclick':
						case 'mousedown':
						case 'mousemove':
						case 'mouseup':
						case 'mouseout':
						case 'mouseover':
						case 'contextmenu':
							Z = nd;
							break;
						case 'drag':
						case 'dragend':
						case 'dragenter':
						case 'dragexit':
						case 'dragleave':
						case 'dragover':
						case 'dragstart':
						case 'drop':
							Z = _0;
							break;
						case 'touchcancel':
						case 'touchend':
						case 'touchmove':
						case 'touchstart':
							Z = Z0;
							break;
						case Cd:
						case Ed:
						case Pd:
							Z = z0;
							break;
						case Td:
							Z = ew;
							break;
						case 'scroll':
							Z = j0;
							break;
						case 'wheel':
							Z = nw;
							break;
						case 'copy':
						case 'cut':
						case 'paste':
							Z = U0;
							break;
						case 'gotpointercapture':
						case 'lostpointercapture':
						case 'pointercancel':
						case 'pointerdown':
						case 'pointermove':
						case 'pointerout':
						case 'pointerover':
						case 'pointerup':
							Z = id;
					}
					var se = (r & 4) !== 0,
						Be = !se && t === 'scroll',
						L = se ? (U !== null ? U + 'Capture' : null) : U;
					se = [];
					for (var R = I, N; R !== null; ) {
						N = R;
						var Q = N.stateNode;
						if (
							(N.tag === 5 &&
								Q !== null &&
								((N = Q), L !== null && ((Q = pt(R, L)), Q != null && se.push(to(R, Q, N)))),
							Be)
						)
							break;
						R = R.return;
					}
					0 < se.length && ((U = new Z(U, ne, null, o, $)), K.push({ event: U, listeners: se }));
				}
			}
			if ((r & 7) === 0) {
				e: {
					if (
						((U = t === 'mouseover' || t === 'pointerover'),
						(Z = t === 'mouseout' || t === 'pointerout'),
						U && o !== _i && (ne = o.relatedTarget || o.fromElement) && (yr(ne) || ne[Pn]))
					)
						break e;
					if (
						(Z || U) &&
						((U = $.window === $ ? $ : (U = $.ownerDocument) ? U.defaultView || U.parentWindow : window),
						Z
							? ((ne = o.relatedTarget || o.toElement),
								(Z = I),
								(ne = ne ? yr(ne) : null),
								ne !== null && ((Be = gr(ne)), ne !== Be || (ne.tag !== 5 && ne.tag !== 6)) && (ne = null))
							: ((Z = null), (ne = I)),
						Z !== ne)
					) {
						if (
							((se = nd),
							(Q = 'onMouseLeave'),
							(L = 'onMouseEnter'),
							(R = 'mouse'),
							(t === 'pointerout' || t === 'pointerover') &&
								((se = id), (Q = 'onPointerLeave'), (L = 'onPointerEnter'), (R = 'pointer')),
							(Be = Z == null ? U : qr(Z)),
							(N = ne == null ? U : qr(ne)),
							(U = new se(Q, R + 'leave', Z, o, $)),
							(U.target = Be),
							(U.relatedTarget = N),
							(Q = null),
							yr($) === I &&
								((se = new se(L, R + 'enter', ne, o, $)), (se.target = N), (se.relatedTarget = Be), (Q = se)),
							(Be = Q),
							Z && ne)
						)
							t: {
								for (se = Z, L = ne, R = 0, N = se; N; N = Yr(N)) R++;
								for (N = 0, Q = L; Q; Q = Yr(Q)) N++;
								for (; 0 < R - N; ) ((se = Yr(se)), R--);
								for (; 0 < N - R; ) ((L = Yr(L)), N--);
								for (; R--; ) {
									if (se === L || (L !== null && se === L.alternate)) break t;
									((se = Yr(se)), (L = Yr(L)));
								}
								se = null;
							}
						else se = null;
						(Z !== null && Dd(K, U, Z, se, !1), ne !== null && Be !== null && Dd(K, Be, ne, se, !0));
					}
				}
				e: {
					if (
						((U = I ? qr(I) : window),
						(Z = U.nodeName && U.nodeName.toLowerCase()),
						Z === 'select' || (Z === 'input' && U.type === 'file'))
					)
						var ae = uw;
					else if (cd(U))
						if (dd) ae = hw;
						else {
							ae = fw;
							var ue = cw;
						}
					else
						(Z = U.nodeName) &&
							Z.toLowerCase() === 'input' &&
							(U.type === 'checkbox' || U.type === 'radio') &&
							(ae = dw);
					if (ae && (ae = ae(t, I))) {
						fd(K, ae, o, $);
						break e;
					}
					(ue && ue(t, U, I),
						t === 'focusout' &&
							(ue = U._wrapperState) &&
							ue.controlled &&
							U.type === 'number' &&
							ji(U, 'number', U.value));
				}
				switch (((ue = I ? qr(I) : window), t)) {
					case 'focusin':
						(cd(ue) || ue.contentEditable === 'true') && ((Gr = ue), (gl = I), (Zi = null));
						break;
					case 'focusout':
						Zi = gl = Gr = null;
						break;
					case 'mousedown':
						yl = !0;
						break;
					case 'contextmenu':
					case 'mouseup':
					case 'dragend':
						((yl = !1), xd(K, o, $));
						break;
					case 'selectionchange':
						if (gw) break;
					case 'keydown':
					case 'keyup':
						xd(K, o, $);
				}
				var ce;
				if (dl)
					e: {
						switch (t) {
							case 'compositionstart':
								var pe = 'onCompositionStart';
								break e;
							case 'compositionend':
								pe = 'onCompositionEnd';
								break e;
							case 'compositionupdate':
								pe = 'onCompositionUpdate';
								break e;
						}
						pe = void 0;
					}
				else
					Kr
						? ld(t, o) && (pe = 'onCompositionEnd')
						: t === 'keydown' && o.keyCode === 229 && (pe = 'onCompositionStart');
				(pe &&
					(od &&
						o.locale !== 'ko' &&
						(Kr || pe !== 'onCompositionStart'
							? pe === 'onCompositionEnd' && Kr && (ce = ed())
							: ((Wn = $), (sl = 'value' in Wn ? Wn.value : Wn.textContent), (Kr = !0))),
					(ue = ms(I, pe)),
					0 < ue.length &&
						((pe = new rd(pe, t, null, o, $)),
						K.push({ event: pe, listeners: ue }),
						ce ? (pe.data = ce) : ((ce = ud(o)), ce !== null && (pe.data = ce)))),
					(ce = iw ? ow(t, o) : sw(t, o)) &&
						((I = ms(I, 'onBeforeInput')),
						0 < I.length &&
							(($ = new rd('onBeforeInput', 'beforeinput', null, o, $)),
							K.push({ event: $, listeners: I }),
							($.data = ce))));
			}
			Ad(K, r);
		});
	}
	function to(t, r, o) {
		return { instance: t, listener: r, currentTarget: o };
	}
	function ms(t, r) {
		for (var o = r + 'Capture', l = []; t !== null; ) {
			var f = t,
				p = f.stateNode;
			(f.tag === 5 &&
				p !== null &&
				((f = p),
				(p = pt(t, o)),
				p != null && l.unshift(to(t, p, f)),
				(p = pt(t, r)),
				p != null && l.push(to(t, p, f))),
				(t = t.return));
		}
		return l;
	}
	function Yr(t) {
		if (t === null) return null;
		do t = t.return;
		while (t && t.tag !== 5);
		return t || null;
	}
	function Dd(t, r, o, l, f) {
		for (var p = r._reactName, w = []; o !== null && o !== l; ) {
			var T = o,
				k = T.alternate,
				I = T.stateNode;
			if (k !== null && k === l) break;
			(T.tag === 5 &&
				I !== null &&
				((T = I),
				f
					? ((k = pt(o, p)), k != null && w.unshift(to(o, k, T)))
					: f || ((k = pt(o, p)), k != null && w.push(to(o, k, T)))),
				(o = o.return));
		}
		w.length !== 0 && t.push({ event: r, listeners: w });
	}
	var xw = /\r\n?/g,
		Sw = /\u0000|\uFFFD/g;
	function Ld(t) {
		return (typeof t == 'string' ? t : '' + t)
			.replace(
				xw,
				`
`,
			)
			.replace(Sw, '');
	}
	function gs(t, r, o) {
		if (((r = Ld(r)), Ld(t) !== r && o)) throw Error(i(425));
	}
	function ys() {}
	var El = null,
		Pl = null;
	function Tl(t, r) {
		return (
			t === 'textarea' ||
			t === 'noscript' ||
			typeof r.children == 'string' ||
			typeof r.children == 'number' ||
			(typeof r.dangerouslySetInnerHTML == 'object' &&
				r.dangerouslySetInnerHTML !== null &&
				r.dangerouslySetInnerHTML.__html != null)
		);
	}
	var kl = typeof setTimeout == 'function' ? setTimeout : void 0,
		Cw = typeof clearTimeout == 'function' ? clearTimeout : void 0,
		Od = typeof Promise == 'function' ? Promise : void 0,
		Ew =
			typeof queueMicrotask == 'function'
				? queueMicrotask
				: typeof Od < 'u'
					? function (t) {
							return Od.resolve(null).then(t).catch(Pw);
						}
					: kl;
	function Pw(t) {
		setTimeout(function () {
			throw t;
		});
	}
	function bl(t, r) {
		var o = r,
			l = 0;
		do {
			var f = o.nextSibling;
			if ((t.removeChild(o), f && f.nodeType === 8))
				if (((o = f.data), o === '/$')) {
					if (l === 0) {
						(t.removeChild(f), Hi(r));
						return;
					}
					l--;
				} else (o !== '$' && o !== '$?' && o !== '$!') || l++;
			o = f;
		} while (o);
		Hi(r);
	}
	function Kn(t) {
		for (; t != null; t = t.nextSibling) {
			var r = t.nodeType;
			if (r === 1 || r === 3) break;
			if (r === 8) {
				if (((r = t.data), r === '$' || r === '$!' || r === '$?')) break;
				if (r === '/$') return null;
			}
		}
		return t;
	}
	function Nd(t) {
		t = t.previousSibling;
		for (var r = 0; t; ) {
			if (t.nodeType === 8) {
				var o = t.data;
				if (o === '$' || o === '$!' || o === '$?') {
					if (r === 0) return t;
					r--;
				} else o === '/$' && r++;
			}
			t = t.previousSibling;
		}
		return null;
	}
	var Xr = Math.random().toString(36).slice(2),
		dn = '__reactFiber$' + Xr,
		no = '__reactProps$' + Xr,
		Pn = '__reactContainer$' + Xr,
		Rl = '__reactEvents$' + Xr,
		Tw = '__reactListeners$' + Xr,
		kw = '__reactHandles$' + Xr;
	function yr(t) {
		var r = t[dn];
		if (r) return r;
		for (var o = t.parentNode; o; ) {
			if ((r = o[Pn] || o[dn])) {
				if (((o = r.alternate), r.child !== null || (o !== null && o.child !== null)))
					for (t = Nd(t); t !== null; ) {
						if ((o = t[dn])) return o;
						t = Nd(t);
					}
				return r;
			}
			((t = o), (o = t.parentNode));
		}
		return null;
	}
	function ro(t) {
		return ((t = t[dn] || t[Pn]), !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t);
	}
	function qr(t) {
		if (t.tag === 5 || t.tag === 6) return t.stateNode;
		throw Error(i(33));
	}
	function vs(t) {
		return t[no] || null;
	}
	var Al = [],
		Zr = -1;
	function Gn(t) {
		return { current: t };
	}
	function Le(t) {
		0 > Zr || ((t.current = Al[Zr]), (Al[Zr] = null), Zr--);
	}
	function Ae(t, r) {
		(Zr++, (Al[Zr] = t.current), (t.current = r));
	}
	var Qn = {},
		tt = Gn(Qn),
		mt = Gn(!1),
		vr = Qn;
	function Jr(t, r) {
		var o = t.type.contextTypes;
		if (!o) return Qn;
		var l = t.stateNode;
		if (l && l.__reactInternalMemoizedUnmaskedChildContext === r) return l.__reactInternalMemoizedMaskedChildContext;
		var f = {},
			p;
		for (p in o) f[p] = r[p];
		return (
			l &&
				((t = t.stateNode),
				(t.__reactInternalMemoizedUnmaskedChildContext = r),
				(t.__reactInternalMemoizedMaskedChildContext = f)),
			f
		);
	}
	function gt(t) {
		return ((t = t.childContextTypes), t != null);
	}
	function ws() {
		(Le(mt), Le(tt));
	}
	function jd(t, r, o) {
		if (tt.current !== Qn) throw Error(i(168));
		(Ae(tt, r), Ae(mt, o));
	}
	function Id(t, r, o) {
		var l = t.stateNode;
		if (((r = r.childContextTypes), typeof l.getChildContext != 'function')) return o;
		l = l.getChildContext();
		for (var f in l) if (!(f in r)) throw Error(i(108, le(t) || 'Unknown', f));
		return W({}, o, l);
	}
	function xs(t) {
		return (
			(t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Qn),
			(vr = tt.current),
			Ae(tt, t),
			Ae(mt, mt.current),
			!0
		);
	}
	function _d(t, r, o) {
		var l = t.stateNode;
		if (!l) throw Error(i(169));
		(o ? ((t = Id(t, r, vr)), (l.__reactInternalMemoizedMergedChildContext = t), Le(mt), Le(tt), Ae(tt, t)) : Le(mt),
			Ae(mt, o));
	}
	var Tn = null,
		Ss = !1,
		Ml = !1;
	function Vd(t) {
		Tn === null ? (Tn = [t]) : Tn.push(t);
	}
	function bw(t) {
		((Ss = !0), Vd(t));
	}
	function Yn() {
		if (!Ml && Tn !== null) {
			Ml = !0;
			var t = 0,
				r = be;
			try {
				var o = Tn;
				for (be = 1; t < o.length; t++) {
					var l = o[t];
					do l = l(!0);
					while (l !== null);
				}
				((Tn = null), (Ss = !1));
			} catch (f) {
				throw (Tn !== null && (Tn = Tn.slice(t + 1)), zf(Za, Yn), f);
			} finally {
				((be = r), (Ml = !1));
			}
		}
		return null;
	}
	var ei = [],
		ti = 0,
		Cs = null,
		Es = 0,
		Lt = [],
		Ot = 0,
		wr = null,
		kn = 1,
		bn = '';
	function xr(t, r) {
		((ei[ti++] = Es), (ei[ti++] = Cs), (Cs = t), (Es = r));
	}
	function Fd(t, r, o) {
		((Lt[Ot++] = kn), (Lt[Ot++] = bn), (Lt[Ot++] = wr), (wr = t));
		var l = kn;
		t = bn;
		var f = 32 - $t(l) - 1;
		((l &= ~(1 << f)), (o += 1));
		var p = 32 - $t(r) + f;
		if (30 < p) {
			var w = f - (f % 5);
			((p = (l & ((1 << w) - 1)).toString(32)),
				(l >>= w),
				(f -= w),
				(kn = (1 << (32 - $t(r) + f)) | (o << f) | l),
				(bn = p + t));
		} else ((kn = (1 << p) | (o << f) | l), (bn = t));
	}
	function Dl(t) {
		t.return !== null && (xr(t, 1), Fd(t, 1, 0));
	}
	function Ll(t) {
		for (; t === Cs; ) ((Cs = ei[--ti]), (ei[ti] = null), (Es = ei[--ti]), (ei[ti] = null));
		for (; t === wr; )
			((wr = Lt[--Ot]), (Lt[Ot] = null), (bn = Lt[--Ot]), (Lt[Ot] = null), (kn = Lt[--Ot]), (Lt[Ot] = null));
	}
	var Pt = null,
		Tt = null,
		Ne = !1,
		Ht = null;
	function zd(t, r) {
		var o = _t(5, null, null, 0);
		((o.elementType = 'DELETED'),
			(o.stateNode = r),
			(o.return = t),
			(r = t.deletions),
			r === null ? ((t.deletions = [o]), (t.flags |= 16)) : r.push(o));
	}
	function Bd(t, r) {
		switch (t.tag) {
			case 5:
				var o = t.type;
				return (
					(r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r),
					r !== null ? ((t.stateNode = r), (Pt = t), (Tt = Kn(r.firstChild)), !0) : !1
				);
			case 6:
				return (
					(r = t.pendingProps === '' || r.nodeType !== 3 ? null : r),
					r !== null ? ((t.stateNode = r), (Pt = t), (Tt = null), !0) : !1
				);
			case 13:
				return (
					(r = r.nodeType !== 8 ? null : r),
					r !== null
						? ((o = wr !== null ? { id: kn, overflow: bn } : null),
							(t.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }),
							(o = _t(18, null, null, 0)),
							(o.stateNode = r),
							(o.return = t),
							(t.child = o),
							(Pt = t),
							(Tt = null),
							!0)
						: !1
				);
			default:
				return !1;
		}
	}
	function Ol(t) {
		return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
	}
	function Nl(t) {
		if (Ne) {
			var r = Tt;
			if (r) {
				var o = r;
				if (!Bd(t, r)) {
					if (Ol(t)) throw Error(i(418));
					r = Kn(o.nextSibling);
					var l = Pt;
					r && Bd(t, r) ? zd(l, o) : ((t.flags = (t.flags & -4097) | 2), (Ne = !1), (Pt = t));
				}
			} else {
				if (Ol(t)) throw Error(i(418));
				((t.flags = (t.flags & -4097) | 2), (Ne = !1), (Pt = t));
			}
		}
	}
	function Ud(t) {
		for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
		Pt = t;
	}
	function Ps(t) {
		if (t !== Pt) return !1;
		if (!Ne) return (Ud(t), (Ne = !0), !1);
		var r;
		if (
			((r = t.tag !== 3) &&
				!(r = t.tag !== 5) &&
				((r = t.type), (r = r !== 'head' && r !== 'body' && !Tl(t.type, t.memoizedProps))),
			r && (r = Tt))
		) {
			if (Ol(t)) throw ($d(), Error(i(418)));
			for (; r; ) (zd(t, r), (r = Kn(r.nextSibling)));
		}
		if ((Ud(t), t.tag === 13)) {
			if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(i(317));
			e: {
				for (t = t.nextSibling, r = 0; t; ) {
					if (t.nodeType === 8) {
						var o = t.data;
						if (o === '/$') {
							if (r === 0) {
								Tt = Kn(t.nextSibling);
								break e;
							}
							r--;
						} else (o !== '$' && o !== '$!' && o !== '$?') || r++;
					}
					t = t.nextSibling;
				}
				Tt = null;
			}
		} else Tt = Pt ? Kn(t.stateNode.nextSibling) : null;
		return !0;
	}
	function $d() {
		for (var t = Tt; t; ) t = Kn(t.nextSibling);
	}
	function ni() {
		((Tt = Pt = null), (Ne = !1));
	}
	function jl(t) {
		Ht === null ? (Ht = [t]) : Ht.push(t);
	}
	var Rw = O.ReactCurrentBatchConfig;
	function io(t, r, o) {
		if (((t = o.ref), t !== null && typeof t != 'function' && typeof t != 'object')) {
			if (o._owner) {
				if (((o = o._owner), o)) {
					if (o.tag !== 1) throw Error(i(309));
					var l = o.stateNode;
				}
				if (!l) throw Error(i(147, t));
				var f = l,
					p = '' + t;
				return r !== null && r.ref !== null && typeof r.ref == 'function' && r.ref._stringRef === p
					? r.ref
					: ((r = function (w) {
							var T = f.refs;
							w === null ? delete T[p] : (T[p] = w);
						}),
						(r._stringRef = p),
						r);
			}
			if (typeof t != 'string') throw Error(i(284));
			if (!o._owner) throw Error(i(290, t));
		}
		return t;
	}
	function Ts(t, r) {
		throw (
			(t = Object.prototype.toString.call(r)),
			Error(i(31, t === '[object Object]' ? 'object with keys {' + Object.keys(r).join(', ') + '}' : t))
		);
	}
	function Wd(t) {
		var r = t._init;
		return r(t._payload);
	}
	function Hd(t) {
		function r(L, R) {
			if (t) {
				var N = L.deletions;
				N === null ? ((L.deletions = [R]), (L.flags |= 16)) : N.push(R);
			}
		}
		function o(L, R) {
			if (!t) return null;
			for (; R !== null; ) (r(L, R), (R = R.sibling));
			return null;
		}
		function l(L, R) {
			for (L = new Map(); R !== null; ) (R.key !== null ? L.set(R.key, R) : L.set(R.index, R), (R = R.sibling));
			return L;
		}
		function f(L, R) {
			return ((L = rr(L, R)), (L.index = 0), (L.sibling = null), L);
		}
		function p(L, R, N) {
			return (
				(L.index = N),
				t
					? ((N = L.alternate), N !== null ? ((N = N.index), N < R ? ((L.flags |= 2), R) : N) : ((L.flags |= 2), R))
					: ((L.flags |= 1048576), R)
			);
		}
		function w(L) {
			return (t && L.alternate === null && (L.flags |= 2), L);
		}
		function T(L, R, N, Q) {
			return R === null || R.tag !== 6
				? ((R = ku(N, L.mode, Q)), (R.return = L), R)
				: ((R = f(R, N)), (R.return = L), R);
		}
		function k(L, R, N, Q) {
			var ae = N.type;
			return ae === G
				? $(L, R, N.props.children, Q, N.key)
				: R !== null &&
					  (R.elementType === ae || (typeof ae == 'object' && ae !== null && ae.$$typeof === he && Wd(ae) === R.type))
					? ((Q = f(R, N.props)), (Q.ref = io(L, R, N)), (Q.return = L), Q)
					: ((Q = Ys(N.type, N.key, N.props, null, L.mode, Q)), (Q.ref = io(L, R, N)), (Q.return = L), Q);
		}
		function I(L, R, N, Q) {
			return R === null ||
				R.tag !== 4 ||
				R.stateNode.containerInfo !== N.containerInfo ||
				R.stateNode.implementation !== N.implementation
				? ((R = bu(N, L.mode, Q)), (R.return = L), R)
				: ((R = f(R, N.children || [])), (R.return = L), R);
		}
		function $(L, R, N, Q, ae) {
			return R === null || R.tag !== 7
				? ((R = Rr(N, L.mode, Q, ae)), (R.return = L), R)
				: ((R = f(R, N)), (R.return = L), R);
		}
		function K(L, R, N) {
			if ((typeof R == 'string' && R !== '') || typeof R == 'number')
				return ((R = ku('' + R, L.mode, N)), (R.return = L), R);
			if (typeof R == 'object' && R !== null) {
				switch (R.$$typeof) {
					case _:
						return ((N = Ys(R.type, R.key, R.props, null, L.mode, N)), (N.ref = io(L, null, R)), (N.return = L), N);
					case B:
						return ((R = bu(R, L.mode, N)), (R.return = L), R);
					case he:
						var Q = R._init;
						return K(L, Q(R._payload), N);
				}
				if (Vn(R) || z(R)) return ((R = Rr(R, L.mode, N, null)), (R.return = L), R);
				Ts(L, R);
			}
			return null;
		}
		function U(L, R, N, Q) {
			var ae = R !== null ? R.key : null;
			if ((typeof N == 'string' && N !== '') || typeof N == 'number') return ae !== null ? null : T(L, R, '' + N, Q);
			if (typeof N == 'object' && N !== null) {
				switch (N.$$typeof) {
					case _:
						return N.key === ae ? k(L, R, N, Q) : null;
					case B:
						return N.key === ae ? I(L, R, N, Q) : null;
					case he:
						return ((ae = N._init), U(L, R, ae(N._payload), Q));
				}
				if (Vn(N) || z(N)) return ae !== null ? null : $(L, R, N, Q, null);
				Ts(L, N);
			}
			return null;
		}
		function Z(L, R, N, Q, ae) {
			if ((typeof Q == 'string' && Q !== '') || typeof Q == 'number')
				return ((L = L.get(N) || null), T(R, L, '' + Q, ae));
			if (typeof Q == 'object' && Q !== null) {
				switch (Q.$$typeof) {
					case _:
						return ((L = L.get(Q.key === null ? N : Q.key) || null), k(R, L, Q, ae));
					case B:
						return ((L = L.get(Q.key === null ? N : Q.key) || null), I(R, L, Q, ae));
					case he:
						var ue = Q._init;
						return Z(L, R, N, ue(Q._payload), ae);
				}
				if (Vn(Q) || z(Q)) return ((L = L.get(N) || null), $(R, L, Q, ae, null));
				Ts(R, Q);
			}
			return null;
		}
		function ne(L, R, N, Q) {
			for (var ae = null, ue = null, ce = R, pe = (R = 0), Xe = null; ce !== null && pe < N.length; pe++) {
				ce.index > pe ? ((Xe = ce), (ce = null)) : (Xe = ce.sibling);
				var Te = U(L, ce, N[pe], Q);
				if (Te === null) {
					ce === null && (ce = Xe);
					break;
				}
				(t && ce && Te.alternate === null && r(L, ce),
					(R = p(Te, R, pe)),
					ue === null ? (ae = Te) : (ue.sibling = Te),
					(ue = Te),
					(ce = Xe));
			}
			if (pe === N.length) return (o(L, ce), Ne && xr(L, pe), ae);
			if (ce === null) {
				for (; pe < N.length; pe++)
					((ce = K(L, N[pe], Q)),
						ce !== null && ((R = p(ce, R, pe)), ue === null ? (ae = ce) : (ue.sibling = ce), (ue = ce)));
				return (Ne && xr(L, pe), ae);
			}
			for (ce = l(L, ce); pe < N.length; pe++)
				((Xe = Z(ce, L, pe, N[pe], Q)),
					Xe !== null &&
						(t && Xe.alternate !== null && ce.delete(Xe.key === null ? pe : Xe.key),
						(R = p(Xe, R, pe)),
						ue === null ? (ae = Xe) : (ue.sibling = Xe),
						(ue = Xe)));
			return (
				t &&
					ce.forEach(function (ir) {
						return r(L, ir);
					}),
				Ne && xr(L, pe),
				ae
			);
		}
		function se(L, R, N, Q) {
			var ae = z(N);
			if (typeof ae != 'function') throw Error(i(150));
			if (((N = ae.call(N)), N == null)) throw Error(i(151));
			for (
				var ue = (ae = null), ce = R, pe = (R = 0), Xe = null, Te = N.next();
				ce !== null && !Te.done;
				pe++, Te = N.next()
			) {
				ce.index > pe ? ((Xe = ce), (ce = null)) : (Xe = ce.sibling);
				var ir = U(L, ce, Te.value, Q);
				if (ir === null) {
					ce === null && (ce = Xe);
					break;
				}
				(t && ce && ir.alternate === null && r(L, ce),
					(R = p(ir, R, pe)),
					ue === null ? (ae = ir) : (ue.sibling = ir),
					(ue = ir),
					(ce = Xe));
			}
			if (Te.done) return (o(L, ce), Ne && xr(L, pe), ae);
			if (ce === null) {
				for (; !Te.done; pe++, Te = N.next())
					((Te = K(L, Te.value, Q)),
						Te !== null && ((R = p(Te, R, pe)), ue === null ? (ae = Te) : (ue.sibling = Te), (ue = Te)));
				return (Ne && xr(L, pe), ae);
			}
			for (ce = l(L, ce); !Te.done; pe++, Te = N.next())
				((Te = Z(ce, L, pe, Te.value, Q)),
					Te !== null &&
						(t && Te.alternate !== null && ce.delete(Te.key === null ? pe : Te.key),
						(R = p(Te, R, pe)),
						ue === null ? (ae = Te) : (ue.sibling = Te),
						(ue = Te)));
			return (
				t &&
					ce.forEach(function (ax) {
						return r(L, ax);
					}),
				Ne && xr(L, pe),
				ae
			);
		}
		function Be(L, R, N, Q) {
			if (
				(typeof N == 'object' && N !== null && N.type === G && N.key === null && (N = N.props.children),
				typeof N == 'object' && N !== null)
			) {
				switch (N.$$typeof) {
					case _:
						e: {
							for (var ae = N.key, ue = R; ue !== null; ) {
								if (ue.key === ae) {
									if (((ae = N.type), ae === G)) {
										if (ue.tag === 7) {
											(o(L, ue.sibling), (R = f(ue, N.props.children)), (R.return = L), (L = R));
											break e;
										}
									} else if (
										ue.elementType === ae ||
										(typeof ae == 'object' && ae !== null && ae.$$typeof === he && Wd(ae) === ue.type)
									) {
										(o(L, ue.sibling), (R = f(ue, N.props)), (R.ref = io(L, ue, N)), (R.return = L), (L = R));
										break e;
									}
									o(L, ue);
									break;
								} else r(L, ue);
								ue = ue.sibling;
							}
							N.type === G
								? ((R = Rr(N.props.children, L.mode, Q, N.key)), (R.return = L), (L = R))
								: ((Q = Ys(N.type, N.key, N.props, null, L.mode, Q)), (Q.ref = io(L, R, N)), (Q.return = L), (L = Q));
						}
						return w(L);
					case B:
						e: {
							for (ue = N.key; R !== null; ) {
								if (R.key === ue)
									if (
										R.tag === 4 &&
										R.stateNode.containerInfo === N.containerInfo &&
										R.stateNode.implementation === N.implementation
									) {
										(o(L, R.sibling), (R = f(R, N.children || [])), (R.return = L), (L = R));
										break e;
									} else {
										o(L, R);
										break;
									}
								else r(L, R);
								R = R.sibling;
							}
							((R = bu(N, L.mode, Q)), (R.return = L), (L = R));
						}
						return w(L);
					case he:
						return ((ue = N._init), Be(L, R, ue(N._payload), Q));
				}
				if (Vn(N)) return ne(L, R, N, Q);
				if (z(N)) return se(L, R, N, Q);
				Ts(L, N);
			}
			return (typeof N == 'string' && N !== '') || typeof N == 'number'
				? ((N = '' + N),
					R !== null && R.tag === 6
						? (o(L, R.sibling), (R = f(R, N)), (R.return = L), (L = R))
						: (o(L, R), (R = ku(N, L.mode, Q)), (R.return = L), (L = R)),
					w(L))
				: o(L, R);
		}
		return Be;
	}
	var ri = Hd(!0),
		Kd = Hd(!1),
		ks = Gn(null),
		bs = null,
		ii = null,
		Il = null;
	function _l() {
		Il = ii = bs = null;
	}
	function Vl(t) {
		var r = ks.current;
		(Le(ks), (t._currentValue = r));
	}
	function Fl(t, r, o) {
		for (; t !== null; ) {
			var l = t.alternate;
			if (
				((t.childLanes & r) !== r
					? ((t.childLanes |= r), l !== null && (l.childLanes |= r))
					: l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
				t === o)
			)
				break;
			t = t.return;
		}
	}
	function oi(t, r) {
		((bs = t),
			(Il = ii = null),
			(t = t.dependencies),
			t !== null && t.firstContext !== null && ((t.lanes & r) !== 0 && (yt = !0), (t.firstContext = null)));
	}
	function Nt(t) {
		var r = t._currentValue;
		if (Il !== t)
			if (((t = { context: t, memoizedValue: r, next: null }), ii === null)) {
				if (bs === null) throw Error(i(308));
				((ii = t), (bs.dependencies = { lanes: 0, firstContext: t }));
			} else ii = ii.next = t;
		return r;
	}
	var Sr = null;
	function zl(t) {
		Sr === null ? (Sr = [t]) : Sr.push(t);
	}
	function Gd(t, r, o, l) {
		var f = r.interleaved;
		return (f === null ? ((o.next = o), zl(r)) : ((o.next = f.next), (f.next = o)), (r.interleaved = o), Rn(t, l));
	}
	function Rn(t, r) {
		t.lanes |= r;
		var o = t.alternate;
		for (o !== null && (o.lanes |= r), o = t, t = t.return; t !== null; )
			((t.childLanes |= r), (o = t.alternate), o !== null && (o.childLanes |= r), (o = t), (t = t.return));
		return o.tag === 3 ? o.stateNode : null;
	}
	var Xn = !1;
	function Bl(t) {
		t.updateQueue = {
			baseState: t.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, interleaved: null, lanes: 0 },
			effects: null,
		};
	}
	function Qd(t, r) {
		((t = t.updateQueue),
			r.updateQueue === t &&
				(r.updateQueue = {
					baseState: t.baseState,
					firstBaseUpdate: t.firstBaseUpdate,
					lastBaseUpdate: t.lastBaseUpdate,
					shared: t.shared,
					effects: t.effects,
				}));
	}
	function An(t, r) {
		return { eventTime: t, lane: r, tag: 0, payload: null, callback: null, next: null };
	}
	function qn(t, r, o) {
		var l = t.updateQueue;
		if (l === null) return null;
		if (((l = l.shared), (Ee & 2) !== 0)) {
			var f = l.pending;
			return (f === null ? (r.next = r) : ((r.next = f.next), (f.next = r)), (l.pending = r), Rn(t, o));
		}
		return (
			(f = l.interleaved),
			f === null ? ((r.next = r), zl(l)) : ((r.next = f.next), (f.next = r)),
			(l.interleaved = r),
			Rn(t, o)
		);
	}
	function Rs(t, r, o) {
		if (((r = r.updateQueue), r !== null && ((r = r.shared), (o & 4194240) !== 0))) {
			var l = r.lanes;
			((l &= t.pendingLanes), (o |= l), (r.lanes = o), tl(t, o));
		}
	}
	function Yd(t, r) {
		var o = t.updateQueue,
			l = t.alternate;
		if (l !== null && ((l = l.updateQueue), o === l)) {
			var f = null,
				p = null;
			if (((o = o.firstBaseUpdate), o !== null)) {
				do {
					var w = {
						eventTime: o.eventTime,
						lane: o.lane,
						tag: o.tag,
						payload: o.payload,
						callback: o.callback,
						next: null,
					};
					(p === null ? (f = p = w) : (p = p.next = w), (o = o.next));
				} while (o !== null);
				p === null ? (f = p = r) : (p = p.next = r);
			} else f = p = r;
			((o = { baseState: l.baseState, firstBaseUpdate: f, lastBaseUpdate: p, shared: l.shared, effects: l.effects }),
				(t.updateQueue = o));
			return;
		}
		((t = o.lastBaseUpdate), t === null ? (o.firstBaseUpdate = r) : (t.next = r), (o.lastBaseUpdate = r));
	}
	function As(t, r, o, l) {
		var f = t.updateQueue;
		Xn = !1;
		var p = f.firstBaseUpdate,
			w = f.lastBaseUpdate,
			T = f.shared.pending;
		if (T !== null) {
			f.shared.pending = null;
			var k = T,
				I = k.next;
			((k.next = null), w === null ? (p = I) : (w.next = I), (w = k));
			var $ = t.alternate;
			$ !== null &&
				(($ = $.updateQueue),
				(T = $.lastBaseUpdate),
				T !== w && (T === null ? ($.firstBaseUpdate = I) : (T.next = I), ($.lastBaseUpdate = k)));
		}
		if (p !== null) {
			var K = f.baseState;
			((w = 0), ($ = I = k = null), (T = p));
			do {
				var U = T.lane,
					Z = T.eventTime;
				if ((l & U) === U) {
					$ !== null &&
						($ = $.next = { eventTime: Z, lane: 0, tag: T.tag, payload: T.payload, callback: T.callback, next: null });
					e: {
						var ne = t,
							se = T;
						switch (((U = r), (Z = o), se.tag)) {
							case 1:
								if (((ne = se.payload), typeof ne == 'function')) {
									K = ne.call(Z, K, U);
									break e;
								}
								K = ne;
								break e;
							case 3:
								ne.flags = (ne.flags & -65537) | 128;
							case 0:
								if (((ne = se.payload), (U = typeof ne == 'function' ? ne.call(Z, K, U) : ne), U == null)) break e;
								K = W({}, K, U);
								break e;
							case 2:
								Xn = !0;
						}
					}
					T.callback !== null &&
						T.lane !== 0 &&
						((t.flags |= 64), (U = f.effects), U === null ? (f.effects = [T]) : U.push(T));
				} else
					((Z = { eventTime: Z, lane: U, tag: T.tag, payload: T.payload, callback: T.callback, next: null }),
						$ === null ? ((I = $ = Z), (k = K)) : ($ = $.next = Z),
						(w |= U));
				if (((T = T.next), T === null)) {
					if (((T = f.shared.pending), T === null)) break;
					((U = T), (T = U.next), (U.next = null), (f.lastBaseUpdate = U), (f.shared.pending = null));
				}
			} while (!0);
			if (
				($ === null && (k = K),
				(f.baseState = k),
				(f.firstBaseUpdate = I),
				(f.lastBaseUpdate = $),
				(r = f.shared.interleaved),
				r !== null)
			) {
				f = r;
				do ((w |= f.lane), (f = f.next));
				while (f !== r);
			} else p === null && (f.shared.lanes = 0);
			((Pr |= w), (t.lanes = w), (t.memoizedState = K));
		}
	}
	function Xd(t, r, o) {
		if (((t = r.effects), (r.effects = null), t !== null))
			for (r = 0; r < t.length; r++) {
				var l = t[r],
					f = l.callback;
				if (f !== null) {
					if (((l.callback = null), (l = o), typeof f != 'function')) throw Error(i(191, f));
					f.call(l);
				}
			}
	}
	var oo = {},
		hn = Gn(oo),
		so = Gn(oo),
		ao = Gn(oo);
	function Cr(t) {
		if (t === oo) throw Error(i(174));
		return t;
	}
	function Ul(t, r) {
		switch ((Ae(ao, r), Ae(so, t), Ae(hn, oo), (t = r.nodeType), t)) {
			case 9:
			case 11:
				r = (r = r.documentElement) ? r.namespaceURI : sn(null, '');
				break;
			default:
				((t = t === 8 ? r.parentNode : r), (r = t.namespaceURI || null), (t = t.tagName), (r = sn(r, t)));
		}
		(Le(hn), Ae(hn, r));
	}
	function si() {
		(Le(hn), Le(so), Le(ao));
	}
	function qd(t) {
		Cr(ao.current);
		var r = Cr(hn.current),
			o = sn(r, t.type);
		r !== o && (Ae(so, t), Ae(hn, o));
	}
	function $l(t) {
		so.current === t && (Le(hn), Le(so));
	}
	var je = Gn(0);
	function Ms(t) {
		for (var r = t; r !== null; ) {
			if (r.tag === 13) {
				var o = r.memoizedState;
				if (o !== null && ((o = o.dehydrated), o === null || o.data === '$?' || o.data === '$!')) return r;
			} else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
				if ((r.flags & 128) !== 0) return r;
			} else if (r.child !== null) {
				((r.child.return = r), (r = r.child));
				continue;
			}
			if (r === t) break;
			for (; r.sibling === null; ) {
				if (r.return === null || r.return === t) return null;
				r = r.return;
			}
			((r.sibling.return = r.return), (r = r.sibling));
		}
		return null;
	}
	var Wl = [];
	function Hl() {
		for (var t = 0; t < Wl.length; t++) Wl[t]._workInProgressVersionPrimary = null;
		Wl.length = 0;
	}
	var Ds = O.ReactCurrentDispatcher,
		Kl = O.ReactCurrentBatchConfig,
		Er = 0,
		Ie = null,
		He = null,
		Qe = null,
		Ls = !1,
		lo = !1,
		uo = 0,
		Aw = 0;
	function nt() {
		throw Error(i(321));
	}
	function Gl(t, r) {
		if (r === null) return !1;
		for (var o = 0; o < r.length && o < t.length; o++) if (!Wt(t[o], r[o])) return !1;
		return !0;
	}
	function Ql(t, r, o, l, f, p) {
		if (
			((Er = p),
			(Ie = r),
			(r.memoizedState = null),
			(r.updateQueue = null),
			(r.lanes = 0),
			(Ds.current = t === null || t.memoizedState === null ? Ow : Nw),
			(t = o(l, f)),
			lo)
		) {
			p = 0;
			do {
				if (((lo = !1), (uo = 0), 25 <= p)) throw Error(i(301));
				((p += 1), (Qe = He = null), (r.updateQueue = null), (Ds.current = jw), (t = o(l, f)));
			} while (lo);
		}
		if (((Ds.current = js), (r = He !== null && He.next !== null), (Er = 0), (Qe = He = Ie = null), (Ls = !1), r))
			throw Error(i(300));
		return t;
	}
	function Yl() {
		var t = uo !== 0;
		return ((uo = 0), t);
	}
	function pn() {
		var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
		return (Qe === null ? (Ie.memoizedState = Qe = t) : (Qe = Qe.next = t), Qe);
	}
	function jt() {
		if (He === null) {
			var t = Ie.alternate;
			t = t !== null ? t.memoizedState : null;
		} else t = He.next;
		var r = Qe === null ? Ie.memoizedState : Qe.next;
		if (r !== null) ((Qe = r), (He = t));
		else {
			if (t === null) throw Error(i(310));
			((He = t),
				(t = {
					memoizedState: He.memoizedState,
					baseState: He.baseState,
					baseQueue: He.baseQueue,
					queue: He.queue,
					next: null,
				}),
				Qe === null ? (Ie.memoizedState = Qe = t) : (Qe = Qe.next = t));
		}
		return Qe;
	}
	function co(t, r) {
		return typeof r == 'function' ? r(t) : r;
	}
	function Xl(t) {
		var r = jt(),
			o = r.queue;
		if (o === null) throw Error(i(311));
		o.lastRenderedReducer = t;
		var l = He,
			f = l.baseQueue,
			p = o.pending;
		if (p !== null) {
			if (f !== null) {
				var w = f.next;
				((f.next = p.next), (p.next = w));
			}
			((l.baseQueue = f = p), (o.pending = null));
		}
		if (f !== null) {
			((p = f.next), (l = l.baseState));
			var T = (w = null),
				k = null,
				I = p;
			do {
				var $ = I.lane;
				if ((Er & $) === $)
					(k !== null &&
						(k = k.next =
							{ lane: 0, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null }),
						(l = I.hasEagerState ? I.eagerState : t(l, I.action)));
				else {
					var K = { lane: $, action: I.action, hasEagerState: I.hasEagerState, eagerState: I.eagerState, next: null };
					(k === null ? ((T = k = K), (w = l)) : (k = k.next = K), (Ie.lanes |= $), (Pr |= $));
				}
				I = I.next;
			} while (I !== null && I !== p);
			(k === null ? (w = l) : (k.next = T),
				Wt(l, r.memoizedState) || (yt = !0),
				(r.memoizedState = l),
				(r.baseState = w),
				(r.baseQueue = k),
				(o.lastRenderedState = l));
		}
		if (((t = o.interleaved), t !== null)) {
			f = t;
			do ((p = f.lane), (Ie.lanes |= p), (Pr |= p), (f = f.next));
			while (f !== t);
		} else f === null && (o.lanes = 0);
		return [r.memoizedState, o.dispatch];
	}
	function ql(t) {
		var r = jt(),
			o = r.queue;
		if (o === null) throw Error(i(311));
		o.lastRenderedReducer = t;
		var l = o.dispatch,
			f = o.pending,
			p = r.memoizedState;
		if (f !== null) {
			o.pending = null;
			var w = (f = f.next);
			do ((p = t(p, w.action)), (w = w.next));
			while (w !== f);
			(Wt(p, r.memoizedState) || (yt = !0),
				(r.memoizedState = p),
				r.baseQueue === null && (r.baseState = p),
				(o.lastRenderedState = p));
		}
		return [p, l];
	}
	function Zd() {}
	function Jd(t, r) {
		var o = Ie,
			l = jt(),
			f = r(),
			p = !Wt(l.memoizedState, f);
		if (
			(p && ((l.memoizedState = f), (yt = !0)),
			(l = l.queue),
			Zl(nh.bind(null, o, l, t), [t]),
			l.getSnapshot !== r || p || (Qe !== null && Qe.memoizedState.tag & 1))
		) {
			if (((o.flags |= 2048), fo(9, th.bind(null, o, l, f, r), void 0, null), Ye === null)) throw Error(i(349));
			(Er & 30) !== 0 || eh(o, r, f);
		}
		return f;
	}
	function eh(t, r, o) {
		((t.flags |= 16384),
			(t = { getSnapshot: r, value: o }),
			(r = Ie.updateQueue),
			r === null
				? ((r = { lastEffect: null, stores: null }), (Ie.updateQueue = r), (r.stores = [t]))
				: ((o = r.stores), o === null ? (r.stores = [t]) : o.push(t)));
	}
	function th(t, r, o, l) {
		((r.value = o), (r.getSnapshot = l), rh(r) && ih(t));
	}
	function nh(t, r, o) {
		return o(function () {
			rh(r) && ih(t);
		});
	}
	function rh(t) {
		var r = t.getSnapshot;
		t = t.value;
		try {
			var o = r();
			return !Wt(t, o);
		} catch {
			return !0;
		}
	}
	function ih(t) {
		var r = Rn(t, 1);
		r !== null && Yt(r, t, 1, -1);
	}
	function oh(t) {
		var r = pn();
		return (
			typeof t == 'function' && (t = t()),
			(r.memoizedState = r.baseState = t),
			(t = {
				pending: null,
				interleaved: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: co,
				lastRenderedState: t,
			}),
			(r.queue = t),
			(t = t.dispatch = Lw.bind(null, Ie, t)),
			[r.memoizedState, t]
		);
	}
	function fo(t, r, o, l) {
		return (
			(t = { tag: t, create: r, destroy: o, deps: l, next: null }),
			(r = Ie.updateQueue),
			r === null
				? ((r = { lastEffect: null, stores: null }), (Ie.updateQueue = r), (r.lastEffect = t.next = t))
				: ((o = r.lastEffect),
					o === null ? (r.lastEffect = t.next = t) : ((l = o.next), (o.next = t), (t.next = l), (r.lastEffect = t))),
			t
		);
	}
	function sh() {
		return jt().memoizedState;
	}
	function Os(t, r, o, l) {
		var f = pn();
		((Ie.flags |= t), (f.memoizedState = fo(1 | r, o, void 0, l === void 0 ? null : l)));
	}
	function Ns(t, r, o, l) {
		var f = jt();
		l = l === void 0 ? null : l;
		var p = void 0;
		if (He !== null) {
			var w = He.memoizedState;
			if (((p = w.destroy), l !== null && Gl(l, w.deps))) {
				f.memoizedState = fo(r, o, p, l);
				return;
			}
		}
		((Ie.flags |= t), (f.memoizedState = fo(1 | r, o, p, l)));
	}
	function ah(t, r) {
		return Os(8390656, 8, t, r);
	}
	function Zl(t, r) {
		return Ns(2048, 8, t, r);
	}
	function lh(t, r) {
		return Ns(4, 2, t, r);
	}
	function uh(t, r) {
		return Ns(4, 4, t, r);
	}
	function ch(t, r) {
		if (typeof r == 'function')
			return (
				(t = t()),
				r(t),
				function () {
					r(null);
				}
			);
		if (r != null)
			return (
				(t = t()),
				(r.current = t),
				function () {
					r.current = null;
				}
			);
	}
	function fh(t, r, o) {
		return ((o = o != null ? o.concat([t]) : null), Ns(4, 4, ch.bind(null, r, t), o));
	}
	function Jl() {}
	function dh(t, r) {
		var o = jt();
		r = r === void 0 ? null : r;
		var l = o.memoizedState;
		return l !== null && r !== null && Gl(r, l[1]) ? l[0] : ((o.memoizedState = [t, r]), t);
	}
	function hh(t, r) {
		var o = jt();
		r = r === void 0 ? null : r;
		var l = o.memoizedState;
		return l !== null && r !== null && Gl(r, l[1]) ? l[0] : ((t = t()), (o.memoizedState = [t, r]), t);
	}
	function ph(t, r, o) {
		return (Er & 21) === 0
			? (t.baseState && ((t.baseState = !1), (yt = !0)), (t.memoizedState = o))
			: (Wt(o, r) || ((o = Wf()), (Ie.lanes |= o), (Pr |= o), (t.baseState = !0)), r);
	}
	function Mw(t, r) {
		var o = be;
		((be = o !== 0 && 4 > o ? o : 4), t(!0));
		var l = Kl.transition;
		Kl.transition = {};
		try {
			(t(!1), r());
		} finally {
			((be = o), (Kl.transition = l));
		}
	}
	function mh() {
		return jt().memoizedState;
	}
	function Dw(t, r, o) {
		var l = tr(t);
		if (((o = { lane: l, action: o, hasEagerState: !1, eagerState: null, next: null }), gh(t))) yh(r, o);
		else if (((o = Gd(t, r, o, l)), o !== null)) {
			var f = ut();
			(Yt(o, t, l, f), vh(o, r, l));
		}
	}
	function Lw(t, r, o) {
		var l = tr(t),
			f = { lane: l, action: o, hasEagerState: !1, eagerState: null, next: null };
		if (gh(t)) yh(r, f);
		else {
			var p = t.alternate;
			if (t.lanes === 0 && (p === null || p.lanes === 0) && ((p = r.lastRenderedReducer), p !== null))
				try {
					var w = r.lastRenderedState,
						T = p(w, o);
					if (((f.hasEagerState = !0), (f.eagerState = T), Wt(T, w))) {
						var k = r.interleaved;
						(k === null ? ((f.next = f), zl(r)) : ((f.next = k.next), (k.next = f)), (r.interleaved = f));
						return;
					}
				} catch {}
			((o = Gd(t, r, f, l)), o !== null && ((f = ut()), Yt(o, t, l, f), vh(o, r, l)));
		}
	}
	function gh(t) {
		var r = t.alternate;
		return t === Ie || (r !== null && r === Ie);
	}
	function yh(t, r) {
		lo = Ls = !0;
		var o = t.pending;
		(o === null ? (r.next = r) : ((r.next = o.next), (o.next = r)), (t.pending = r));
	}
	function vh(t, r, o) {
		if ((o & 4194240) !== 0) {
			var l = r.lanes;
			((l &= t.pendingLanes), (o |= l), (r.lanes = o), tl(t, o));
		}
	}
	var js = {
			readContext: Nt,
			useCallback: nt,
			useContext: nt,
			useEffect: nt,
			useImperativeHandle: nt,
			useInsertionEffect: nt,
			useLayoutEffect: nt,
			useMemo: nt,
			useReducer: nt,
			useRef: nt,
			useState: nt,
			useDebugValue: nt,
			useDeferredValue: nt,
			useTransition: nt,
			useMutableSource: nt,
			useSyncExternalStore: nt,
			useId: nt,
			unstable_isNewReconciler: !1,
		},
		Ow = {
			readContext: Nt,
			useCallback: function (t, r) {
				return ((pn().memoizedState = [t, r === void 0 ? null : r]), t);
			},
			useContext: Nt,
			useEffect: ah,
			useImperativeHandle: function (t, r, o) {
				return ((o = o != null ? o.concat([t]) : null), Os(4194308, 4, ch.bind(null, r, t), o));
			},
			useLayoutEffect: function (t, r) {
				return Os(4194308, 4, t, r);
			},
			useInsertionEffect: function (t, r) {
				return Os(4, 2, t, r);
			},
			useMemo: function (t, r) {
				var o = pn();
				return ((r = r === void 0 ? null : r), (t = t()), (o.memoizedState = [t, r]), t);
			},
			useReducer: function (t, r, o) {
				var l = pn();
				return (
					(r = o !== void 0 ? o(r) : r),
					(l.memoizedState = l.baseState = r),
					(t = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: t,
						lastRenderedState: r,
					}),
					(l.queue = t),
					(t = t.dispatch = Dw.bind(null, Ie, t)),
					[l.memoizedState, t]
				);
			},
			useRef: function (t) {
				var r = pn();
				return ((t = { current: t }), (r.memoizedState = t));
			},
			useState: oh,
			useDebugValue: Jl,
			useDeferredValue: function (t) {
				return (pn().memoizedState = t);
			},
			useTransition: function () {
				var t = oh(!1),
					r = t[0];
				return ((t = Mw.bind(null, t[1])), (pn().memoizedState = t), [r, t]);
			},
			useMutableSource: function () {},
			useSyncExternalStore: function (t, r, o) {
				var l = Ie,
					f = pn();
				if (Ne) {
					if (o === void 0) throw Error(i(407));
					o = o();
				} else {
					if (((o = r()), Ye === null)) throw Error(i(349));
					(Er & 30) !== 0 || eh(l, r, o);
				}
				f.memoizedState = o;
				var p = { value: o, getSnapshot: r };
				return (
					(f.queue = p),
					ah(nh.bind(null, l, p, t), [t]),
					(l.flags |= 2048),
					fo(9, th.bind(null, l, p, o, r), void 0, null),
					o
				);
			},
			useId: function () {
				var t = pn(),
					r = Ye.identifierPrefix;
				if (Ne) {
					var o = bn,
						l = kn;
					((o = (l & ~(1 << (32 - $t(l) - 1))).toString(32) + o),
						(r = ':' + r + 'R' + o),
						(o = uo++),
						0 < o && (r += 'H' + o.toString(32)),
						(r += ':'));
				} else ((o = Aw++), (r = ':' + r + 'r' + o.toString(32) + ':'));
				return (t.memoizedState = r);
			},
			unstable_isNewReconciler: !1,
		},
		Nw = {
			readContext: Nt,
			useCallback: dh,
			useContext: Nt,
			useEffect: Zl,
			useImperativeHandle: fh,
			useInsertionEffect: lh,
			useLayoutEffect: uh,
			useMemo: hh,
			useReducer: Xl,
			useRef: sh,
			useState: function () {
				return Xl(co);
			},
			useDebugValue: Jl,
			useDeferredValue: function (t) {
				var r = jt();
				return ph(r, He.memoizedState, t);
			},
			useTransition: function () {
				var t = Xl(co)[0],
					r = jt().memoizedState;
				return [t, r];
			},
			useMutableSource: Zd,
			useSyncExternalStore: Jd,
			useId: mh,
			unstable_isNewReconciler: !1,
		},
		jw = {
			readContext: Nt,
			useCallback: dh,
			useContext: Nt,
			useEffect: Zl,
			useImperativeHandle: fh,
			useInsertionEffect: lh,
			useLayoutEffect: uh,
			useMemo: hh,
			useReducer: ql,
			useRef: sh,
			useState: function () {
				return ql(co);
			},
			useDebugValue: Jl,
			useDeferredValue: function (t) {
				var r = jt();
				return He === null ? (r.memoizedState = t) : ph(r, He.memoizedState, t);
			},
			useTransition: function () {
				var t = ql(co)[0],
					r = jt().memoizedState;
				return [t, r];
			},
			useMutableSource: Zd,
			useSyncExternalStore: Jd,
			useId: mh,
			unstable_isNewReconciler: !1,
		};
	function Kt(t, r) {
		if (t && t.defaultProps) {
			((r = W({}, r)), (t = t.defaultProps));
			for (var o in t) r[o] === void 0 && (r[o] = t[o]);
			return r;
		}
		return r;
	}
	function eu(t, r, o, l) {
		((r = t.memoizedState),
			(o = o(l, r)),
			(o = o == null ? r : W({}, r, o)),
			(t.memoizedState = o),
			t.lanes === 0 && (t.updateQueue.baseState = o));
	}
	var Is = {
		isMounted: function (t) {
			return (t = t._reactInternals) ? gr(t) === t : !1;
		},
		enqueueSetState: function (t, r, o) {
			t = t._reactInternals;
			var l = ut(),
				f = tr(t),
				p = An(l, f);
			((p.payload = r), o != null && (p.callback = o), (r = qn(t, p, f)), r !== null && (Yt(r, t, f, l), Rs(r, t, f)));
		},
		enqueueReplaceState: function (t, r, o) {
			t = t._reactInternals;
			var l = ut(),
				f = tr(t),
				p = An(l, f);
			((p.tag = 1),
				(p.payload = r),
				o != null && (p.callback = o),
				(r = qn(t, p, f)),
				r !== null && (Yt(r, t, f, l), Rs(r, t, f)));
		},
		enqueueForceUpdate: function (t, r) {
			t = t._reactInternals;
			var o = ut(),
				l = tr(t),
				f = An(o, l);
			((f.tag = 2), r != null && (f.callback = r), (r = qn(t, f, l)), r !== null && (Yt(r, t, l, o), Rs(r, t, l)));
		},
	};
	function wh(t, r, o, l, f, p, w) {
		return (
			(t = t.stateNode),
			typeof t.shouldComponentUpdate == 'function'
				? t.shouldComponentUpdate(l, p, w)
				: r.prototype && r.prototype.isPureReactComponent
					? !qi(o, l) || !qi(f, p)
					: !0
		);
	}
	function xh(t, r, o) {
		var l = !1,
			f = Qn,
			p = r.contextType;
		return (
			typeof p == 'object' && p !== null
				? (p = Nt(p))
				: ((f = gt(r) ? vr : tt.current), (l = r.contextTypes), (p = (l = l != null) ? Jr(t, f) : Qn)),
			(r = new r(o, p)),
			(t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
			(r.updater = Is),
			(t.stateNode = r),
			(r._reactInternals = t),
			l &&
				((t = t.stateNode),
				(t.__reactInternalMemoizedUnmaskedChildContext = f),
				(t.__reactInternalMemoizedMaskedChildContext = p)),
			r
		);
	}
	function Sh(t, r, o, l) {
		((t = r.state),
			typeof r.componentWillReceiveProps == 'function' && r.componentWillReceiveProps(o, l),
			typeof r.UNSAFE_componentWillReceiveProps == 'function' && r.UNSAFE_componentWillReceiveProps(o, l),
			r.state !== t && Is.enqueueReplaceState(r, r.state, null));
	}
	function tu(t, r, o, l) {
		var f = t.stateNode;
		((f.props = o), (f.state = t.memoizedState), (f.refs = {}), Bl(t));
		var p = r.contextType;
		(typeof p == 'object' && p !== null ? (f.context = Nt(p)) : ((p = gt(r) ? vr : tt.current), (f.context = Jr(t, p))),
			(f.state = t.memoizedState),
			(p = r.getDerivedStateFromProps),
			typeof p == 'function' && (eu(t, r, p, o), (f.state = t.memoizedState)),
			typeof r.getDerivedStateFromProps == 'function' ||
				typeof f.getSnapshotBeforeUpdate == 'function' ||
				(typeof f.UNSAFE_componentWillMount != 'function' && typeof f.componentWillMount != 'function') ||
				((r = f.state),
				typeof f.componentWillMount == 'function' && f.componentWillMount(),
				typeof f.UNSAFE_componentWillMount == 'function' && f.UNSAFE_componentWillMount(),
				r !== f.state && Is.enqueueReplaceState(f, f.state, null),
				As(t, o, f, l),
				(f.state = t.memoizedState)),
			typeof f.componentDidMount == 'function' && (t.flags |= 4194308));
	}
	function ai(t, r) {
		try {
			var o = '',
				l = r;
			do ((o += fe(l)), (l = l.return));
			while (l);
			var f = o;
		} catch (p) {
			f =
				`
Error generating stack: ` +
				p.message +
				`
` +
				p.stack;
		}
		return { value: t, source: r, stack: f, digest: null };
	}
	function nu(t, r, o) {
		return { value: t, source: null, stack: o ?? null, digest: r ?? null };
	}
	function ru(t, r) {
		try {
			console.error(r.value);
		} catch (o) {
			setTimeout(function () {
				throw o;
			});
		}
	}
	var Iw = typeof WeakMap == 'function' ? WeakMap : Map;
	function Ch(t, r, o) {
		((o = An(-1, o)), (o.tag = 3), (o.payload = { element: null }));
		var l = r.value;
		return (
			(o.callback = function () {
				($s || (($s = !0), (vu = l)), ru(t, r));
			}),
			o
		);
	}
	function Eh(t, r, o) {
		((o = An(-1, o)), (o.tag = 3));
		var l = t.type.getDerivedStateFromError;
		if (typeof l == 'function') {
			var f = r.value;
			((o.payload = function () {
				return l(f);
			}),
				(o.callback = function () {
					ru(t, r);
				}));
		}
		var p = t.stateNode;
		return (
			p !== null &&
				typeof p.componentDidCatch == 'function' &&
				(o.callback = function () {
					(ru(t, r), typeof l != 'function' && (Jn === null ? (Jn = new Set([this])) : Jn.add(this)));
					var w = r.stack;
					this.componentDidCatch(r.value, { componentStack: w !== null ? w : '' });
				}),
			o
		);
	}
	function Ph(t, r, o) {
		var l = t.pingCache;
		if (l === null) {
			l = t.pingCache = new Iw();
			var f = new Set();
			l.set(r, f);
		} else ((f = l.get(r)), f === void 0 && ((f = new Set()), l.set(r, f)));
		f.has(o) || (f.add(o), (t = Xw.bind(null, t, r, o)), r.then(t, t));
	}
	function Th(t) {
		do {
			var r;
			if (((r = t.tag === 13) && ((r = t.memoizedState), (r = r !== null ? r.dehydrated !== null : !0)), r)) return t;
			t = t.return;
		} while (t !== null);
		return null;
	}
	function kh(t, r, o, l, f) {
		return (t.mode & 1) === 0
			? (t === r
					? (t.flags |= 65536)
					: ((t.flags |= 128),
						(o.flags |= 131072),
						(o.flags &= -52805),
						o.tag === 1 && (o.alternate === null ? (o.tag = 17) : ((r = An(-1, 1)), (r.tag = 2), qn(o, r, 1))),
						(o.lanes |= 1)),
				t)
			: ((t.flags |= 65536), (t.lanes = f), t);
	}
	var _w = O.ReactCurrentOwner,
		yt = !1;
	function lt(t, r, o, l) {
		r.child = t === null ? Kd(r, null, o, l) : ri(r, t.child, o, l);
	}
	function bh(t, r, o, l, f) {
		o = o.render;
		var p = r.ref;
		return (
			oi(r, f),
			(l = Ql(t, r, o, l, p, f)),
			(o = Yl()),
			t !== null && !yt
				? ((r.updateQueue = t.updateQueue), (r.flags &= -2053), (t.lanes &= ~f), Mn(t, r, f))
				: (Ne && o && Dl(r), (r.flags |= 1), lt(t, r, l, f), r.child)
		);
	}
	function Rh(t, r, o, l, f) {
		if (t === null) {
			var p = o.type;
			return typeof p == 'function' &&
				!Tu(p) &&
				p.defaultProps === void 0 &&
				o.compare === null &&
				o.defaultProps === void 0
				? ((r.tag = 15), (r.type = p), Ah(t, r, p, l, f))
				: ((t = Ys(o.type, null, l, r, r.mode, f)), (t.ref = r.ref), (t.return = r), (r.child = t));
		}
		if (((p = t.child), (t.lanes & f) === 0)) {
			var w = p.memoizedProps;
			if (((o = o.compare), (o = o !== null ? o : qi), o(w, l) && t.ref === r.ref)) return Mn(t, r, f);
		}
		return ((r.flags |= 1), (t = rr(p, l)), (t.ref = r.ref), (t.return = r), (r.child = t));
	}
	function Ah(t, r, o, l, f) {
		if (t !== null) {
			var p = t.memoizedProps;
			if (qi(p, l) && t.ref === r.ref)
				if (((yt = !1), (r.pendingProps = l = p), (t.lanes & f) !== 0)) (t.flags & 131072) !== 0 && (yt = !0);
				else return ((r.lanes = t.lanes), Mn(t, r, f));
		}
		return iu(t, r, o, l, f);
	}
	function Mh(t, r, o) {
		var l = r.pendingProps,
			f = l.children,
			p = t !== null ? t.memoizedState : null;
		if (l.mode === 'hidden')
			if ((r.mode & 1) === 0)
				((r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Ae(ui, kt), (kt |= o));
			else {
				if ((o & 1073741824) === 0)
					return (
						(t = p !== null ? p.baseLanes | o : o),
						(r.lanes = r.childLanes = 1073741824),
						(r.memoizedState = { baseLanes: t, cachePool: null, transitions: null }),
						(r.updateQueue = null),
						Ae(ui, kt),
						(kt |= t),
						null
					);
				((r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
					(l = p !== null ? p.baseLanes : o),
					Ae(ui, kt),
					(kt |= l));
			}
		else (p !== null ? ((l = p.baseLanes | o), (r.memoizedState = null)) : (l = o), Ae(ui, kt), (kt |= l));
		return (lt(t, r, f, o), r.child);
	}
	function Dh(t, r) {
		var o = r.ref;
		((t === null && o !== null) || (t !== null && t.ref !== o)) && ((r.flags |= 512), (r.flags |= 2097152));
	}
	function iu(t, r, o, l, f) {
		var p = gt(o) ? vr : tt.current;
		return (
			(p = Jr(r, p)),
			oi(r, f),
			(o = Ql(t, r, o, l, p, f)),
			(l = Yl()),
			t !== null && !yt
				? ((r.updateQueue = t.updateQueue), (r.flags &= -2053), (t.lanes &= ~f), Mn(t, r, f))
				: (Ne && l && Dl(r), (r.flags |= 1), lt(t, r, o, f), r.child)
		);
	}
	function Lh(t, r, o, l, f) {
		if (gt(o)) {
			var p = !0;
			xs(r);
		} else p = !1;
		if ((oi(r, f), r.stateNode === null)) (Vs(t, r), xh(r, o, l), tu(r, o, l, f), (l = !0));
		else if (t === null) {
			var w = r.stateNode,
				T = r.memoizedProps;
			w.props = T;
			var k = w.context,
				I = o.contextType;
			typeof I == 'object' && I !== null ? (I = Nt(I)) : ((I = gt(o) ? vr : tt.current), (I = Jr(r, I)));
			var $ = o.getDerivedStateFromProps,
				K = typeof $ == 'function' || typeof w.getSnapshotBeforeUpdate == 'function';
			(K ||
				(typeof w.UNSAFE_componentWillReceiveProps != 'function' && typeof w.componentWillReceiveProps != 'function') ||
				((T !== l || k !== I) && Sh(r, w, l, I)),
				(Xn = !1));
			var U = r.memoizedState;
			((w.state = U),
				As(r, l, w, f),
				(k = r.memoizedState),
				T !== l || U !== k || mt.current || Xn
					? (typeof $ == 'function' && (eu(r, o, $, l), (k = r.memoizedState)),
						(T = Xn || wh(r, o, T, l, U, k, I))
							? (K ||
									(typeof w.UNSAFE_componentWillMount != 'function' && typeof w.componentWillMount != 'function') ||
									(typeof w.componentWillMount == 'function' && w.componentWillMount(),
									typeof w.UNSAFE_componentWillMount == 'function' && w.UNSAFE_componentWillMount()),
								typeof w.componentDidMount == 'function' && (r.flags |= 4194308))
							: (typeof w.componentDidMount == 'function' && (r.flags |= 4194308),
								(r.memoizedProps = l),
								(r.memoizedState = k)),
						(w.props = l),
						(w.state = k),
						(w.context = I),
						(l = T))
					: (typeof w.componentDidMount == 'function' && (r.flags |= 4194308), (l = !1)));
		} else {
			((w = r.stateNode),
				Qd(t, r),
				(T = r.memoizedProps),
				(I = r.type === r.elementType ? T : Kt(r.type, T)),
				(w.props = I),
				(K = r.pendingProps),
				(U = w.context),
				(k = o.contextType),
				typeof k == 'object' && k !== null ? (k = Nt(k)) : ((k = gt(o) ? vr : tt.current), (k = Jr(r, k))));
			var Z = o.getDerivedStateFromProps;
			(($ = typeof Z == 'function' || typeof w.getSnapshotBeforeUpdate == 'function') ||
				(typeof w.UNSAFE_componentWillReceiveProps != 'function' && typeof w.componentWillReceiveProps != 'function') ||
				((T !== K || U !== k) && Sh(r, w, l, k)),
				(Xn = !1),
				(U = r.memoizedState),
				(w.state = U),
				As(r, l, w, f));
			var ne = r.memoizedState;
			T !== K || U !== ne || mt.current || Xn
				? (typeof Z == 'function' && (eu(r, o, Z, l), (ne = r.memoizedState)),
					(I = Xn || wh(r, o, I, l, U, ne, k) || !1)
						? ($ ||
								(typeof w.UNSAFE_componentWillUpdate != 'function' && typeof w.componentWillUpdate != 'function') ||
								(typeof w.componentWillUpdate == 'function' && w.componentWillUpdate(l, ne, k),
								typeof w.UNSAFE_componentWillUpdate == 'function' && w.UNSAFE_componentWillUpdate(l, ne, k)),
							typeof w.componentDidUpdate == 'function' && (r.flags |= 4),
							typeof w.getSnapshotBeforeUpdate == 'function' && (r.flags |= 1024))
						: (typeof w.componentDidUpdate != 'function' ||
								(T === t.memoizedProps && U === t.memoizedState) ||
								(r.flags |= 4),
							typeof w.getSnapshotBeforeUpdate != 'function' ||
								(T === t.memoizedProps && U === t.memoizedState) ||
								(r.flags |= 1024),
							(r.memoizedProps = l),
							(r.memoizedState = ne)),
					(w.props = l),
					(w.state = ne),
					(w.context = k),
					(l = I))
				: (typeof w.componentDidUpdate != 'function' ||
						(T === t.memoizedProps && U === t.memoizedState) ||
						(r.flags |= 4),
					typeof w.getSnapshotBeforeUpdate != 'function' ||
						(T === t.memoizedProps && U === t.memoizedState) ||
						(r.flags |= 1024),
					(l = !1));
		}
		return ou(t, r, o, l, p, f);
	}
	function ou(t, r, o, l, f, p) {
		Dh(t, r);
		var w = (r.flags & 128) !== 0;
		if (!l && !w) return (f && _d(r, o, !1), Mn(t, r, p));
		((l = r.stateNode), (_w.current = r));
		var T = w && typeof o.getDerivedStateFromError != 'function' ? null : l.render();
		return (
			(r.flags |= 1),
			t !== null && w ? ((r.child = ri(r, t.child, null, p)), (r.child = ri(r, null, T, p))) : lt(t, r, T, p),
			(r.memoizedState = l.state),
			f && _d(r, o, !0),
			r.child
		);
	}
	function Oh(t) {
		var r = t.stateNode;
		(r.pendingContext ? jd(t, r.pendingContext, r.pendingContext !== r.context) : r.context && jd(t, r.context, !1),
			Ul(t, r.containerInfo));
	}
	function Nh(t, r, o, l, f) {
		return (ni(), jl(f), (r.flags |= 256), lt(t, r, o, l), r.child);
	}
	var su = { dehydrated: null, treeContext: null, retryLane: 0 };
	function au(t) {
		return { baseLanes: t, cachePool: null, transitions: null };
	}
	function jh(t, r, o) {
		var l = r.pendingProps,
			f = je.current,
			p = !1,
			w = (r.flags & 128) !== 0,
			T;
		if (
			((T = w) || (T = t !== null && t.memoizedState === null ? !1 : (f & 2) !== 0),
			T ? ((p = !0), (r.flags &= -129)) : (t === null || t.memoizedState !== null) && (f |= 1),
			Ae(je, f & 1),
			t === null)
		)
			return (
				Nl(r),
				(t = r.memoizedState),
				t !== null && ((t = t.dehydrated), t !== null)
					? ((r.mode & 1) === 0 ? (r.lanes = 1) : t.data === '$!' ? (r.lanes = 8) : (r.lanes = 1073741824), null)
					: ((w = l.children),
						(t = l.fallback),
						p
							? ((l = r.mode),
								(p = r.child),
								(w = { mode: 'hidden', children: w }),
								(l & 1) === 0 && p !== null ? ((p.childLanes = 0), (p.pendingProps = w)) : (p = Xs(w, l, 0, null)),
								(t = Rr(t, l, o, null)),
								(p.return = r),
								(t.return = r),
								(p.sibling = t),
								(r.child = p),
								(r.child.memoizedState = au(o)),
								(r.memoizedState = su),
								t)
							: lu(r, w))
			);
		if (((f = t.memoizedState), f !== null && ((T = f.dehydrated), T !== null))) return Vw(t, r, w, l, T, f, o);
		if (p) {
			((p = l.fallback), (w = r.mode), (f = t.child), (T = f.sibling));
			var k = { mode: 'hidden', children: l.children };
			return (
				(w & 1) === 0 && r.child !== f
					? ((l = r.child), (l.childLanes = 0), (l.pendingProps = k), (r.deletions = null))
					: ((l = rr(f, k)), (l.subtreeFlags = f.subtreeFlags & 14680064)),
				T !== null ? (p = rr(T, p)) : ((p = Rr(p, w, o, null)), (p.flags |= 2)),
				(p.return = r),
				(l.return = r),
				(l.sibling = p),
				(r.child = l),
				(l = p),
				(p = r.child),
				(w = t.child.memoizedState),
				(w = w === null ? au(o) : { baseLanes: w.baseLanes | o, cachePool: null, transitions: w.transitions }),
				(p.memoizedState = w),
				(p.childLanes = t.childLanes & ~o),
				(r.memoizedState = su),
				l
			);
		}
		return (
			(p = t.child),
			(t = p.sibling),
			(l = rr(p, { mode: 'visible', children: l.children })),
			(r.mode & 1) === 0 && (l.lanes = o),
			(l.return = r),
			(l.sibling = null),
			t !== null && ((o = r.deletions), o === null ? ((r.deletions = [t]), (r.flags |= 16)) : o.push(t)),
			(r.child = l),
			(r.memoizedState = null),
			l
		);
	}
	function lu(t, r) {
		return ((r = Xs({ mode: 'visible', children: r }, t.mode, 0, null)), (r.return = t), (t.child = r));
	}
	function _s(t, r, o, l) {
		return (
			l !== null && jl(l),
			ri(r, t.child, null, o),
			(t = lu(r, r.pendingProps.children)),
			(t.flags |= 2),
			(r.memoizedState = null),
			t
		);
	}
	function Vw(t, r, o, l, f, p, w) {
		if (o)
			return r.flags & 256
				? ((r.flags &= -257), (l = nu(Error(i(422)))), _s(t, r, w, l))
				: r.memoizedState !== null
					? ((r.child = t.child), (r.flags |= 128), null)
					: ((p = l.fallback),
						(f = r.mode),
						(l = Xs({ mode: 'visible', children: l.children }, f, 0, null)),
						(p = Rr(p, f, w, null)),
						(p.flags |= 2),
						(l.return = r),
						(p.return = r),
						(l.sibling = p),
						(r.child = l),
						(r.mode & 1) !== 0 && ri(r, t.child, null, w),
						(r.child.memoizedState = au(w)),
						(r.memoizedState = su),
						p);
		if ((r.mode & 1) === 0) return _s(t, r, w, null);
		if (f.data === '$!') {
			if (((l = f.nextSibling && f.nextSibling.dataset), l)) var T = l.dgst;
			return ((l = T), (p = Error(i(419))), (l = nu(p, l, void 0)), _s(t, r, w, l));
		}
		if (((T = (w & t.childLanes) !== 0), yt || T)) {
			if (((l = Ye), l !== null)) {
				switch (w & -w) {
					case 4:
						f = 2;
						break;
					case 16:
						f = 8;
						break;
					case 64:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
					case 67108864:
						f = 32;
						break;
					case 536870912:
						f = 268435456;
						break;
					default:
						f = 0;
				}
				((f = (f & (l.suspendedLanes | w)) !== 0 ? 0 : f),
					f !== 0 && f !== p.retryLane && ((p.retryLane = f), Rn(t, f), Yt(l, t, f, -1)));
			}
			return (Pu(), (l = nu(Error(i(421)))), _s(t, r, w, l));
		}
		return f.data === '$?'
			? ((r.flags |= 128), (r.child = t.child), (r = qw.bind(null, t)), (f._reactRetry = r), null)
			: ((t = p.treeContext),
				(Tt = Kn(f.nextSibling)),
				(Pt = r),
				(Ne = !0),
				(Ht = null),
				t !== null && ((Lt[Ot++] = kn), (Lt[Ot++] = bn), (Lt[Ot++] = wr), (kn = t.id), (bn = t.overflow), (wr = r)),
				(r = lu(r, l.children)),
				(r.flags |= 4096),
				r);
	}
	function Ih(t, r, o) {
		t.lanes |= r;
		var l = t.alternate;
		(l !== null && (l.lanes |= r), Fl(t.return, r, o));
	}
	function uu(t, r, o, l, f) {
		var p = t.memoizedState;
		p === null
			? (t.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: l, tail: o, tailMode: f })
			: ((p.isBackwards = r),
				(p.rendering = null),
				(p.renderingStartTime = 0),
				(p.last = l),
				(p.tail = o),
				(p.tailMode = f));
	}
	function _h(t, r, o) {
		var l = r.pendingProps,
			f = l.revealOrder,
			p = l.tail;
		if ((lt(t, r, l.children, o), (l = je.current), (l & 2) !== 0)) ((l = (l & 1) | 2), (r.flags |= 128));
		else {
			if (t !== null && (t.flags & 128) !== 0)
				e: for (t = r.child; t !== null; ) {
					if (t.tag === 13) t.memoizedState !== null && Ih(t, o, r);
					else if (t.tag === 19) Ih(t, o, r);
					else if (t.child !== null) {
						((t.child.return = t), (t = t.child));
						continue;
					}
					if (t === r) break e;
					for (; t.sibling === null; ) {
						if (t.return === null || t.return === r) break e;
						t = t.return;
					}
					((t.sibling.return = t.return), (t = t.sibling));
				}
			l &= 1;
		}
		if ((Ae(je, l), (r.mode & 1) === 0)) r.memoizedState = null;
		else
			switch (f) {
				case 'forwards':
					for (o = r.child, f = null; o !== null; )
						((t = o.alternate), t !== null && Ms(t) === null && (f = o), (o = o.sibling));
					((o = f),
						o === null ? ((f = r.child), (r.child = null)) : ((f = o.sibling), (o.sibling = null)),
						uu(r, !1, f, o, p));
					break;
				case 'backwards':
					for (o = null, f = r.child, r.child = null; f !== null; ) {
						if (((t = f.alternate), t !== null && Ms(t) === null)) {
							r.child = f;
							break;
						}
						((t = f.sibling), (f.sibling = o), (o = f), (f = t));
					}
					uu(r, !0, o, null, p);
					break;
				case 'together':
					uu(r, !1, null, null, void 0);
					break;
				default:
					r.memoizedState = null;
			}
		return r.child;
	}
	function Vs(t, r) {
		(r.mode & 1) === 0 && t !== null && ((t.alternate = null), (r.alternate = null), (r.flags |= 2));
	}
	function Mn(t, r, o) {
		if ((t !== null && (r.dependencies = t.dependencies), (Pr |= r.lanes), (o & r.childLanes) === 0)) return null;
		if (t !== null && r.child !== t.child) throw Error(i(153));
		if (r.child !== null) {
			for (t = r.child, o = rr(t, t.pendingProps), r.child = o, o.return = r; t.sibling !== null; )
				((t = t.sibling), (o = o.sibling = rr(t, t.pendingProps)), (o.return = r));
			o.sibling = null;
		}
		return r.child;
	}
	function Fw(t, r, o) {
		switch (r.tag) {
			case 3:
				(Oh(r), ni());
				break;
			case 5:
				qd(r);
				break;
			case 1:
				gt(r.type) && xs(r);
				break;
			case 4:
				Ul(r, r.stateNode.containerInfo);
				break;
			case 10:
				var l = r.type._context,
					f = r.memoizedProps.value;
				(Ae(ks, l._currentValue), (l._currentValue = f));
				break;
			case 13:
				if (((l = r.memoizedState), l !== null))
					return l.dehydrated !== null
						? (Ae(je, je.current & 1), (r.flags |= 128), null)
						: (o & r.child.childLanes) !== 0
							? jh(t, r, o)
							: (Ae(je, je.current & 1), (t = Mn(t, r, o)), t !== null ? t.sibling : null);
				Ae(je, je.current & 1);
				break;
			case 19:
				if (((l = (o & r.childLanes) !== 0), (t.flags & 128) !== 0)) {
					if (l) return _h(t, r, o);
					r.flags |= 128;
				}
				if (
					((f = r.memoizedState),
					f !== null && ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
					Ae(je, je.current),
					l)
				)
					break;
				return null;
			case 22:
			case 23:
				return ((r.lanes = 0), Mh(t, r, o));
		}
		return Mn(t, r, o);
	}
	var Vh, cu, Fh, zh;
	((Vh = function (t, r) {
		for (var o = r.child; o !== null; ) {
			if (o.tag === 5 || o.tag === 6) t.appendChild(o.stateNode);
			else if (o.tag !== 4 && o.child !== null) {
				((o.child.return = o), (o = o.child));
				continue;
			}
			if (o === r) break;
			for (; o.sibling === null; ) {
				if (o.return === null || o.return === r) return;
				o = o.return;
			}
			((o.sibling.return = o.return), (o = o.sibling));
		}
	}),
		(cu = function () {}),
		(Fh = function (t, r, o, l) {
			var f = t.memoizedProps;
			if (f !== l) {
				((t = r.stateNode), Cr(hn.current));
				var p = null;
				switch (o) {
					case 'input':
						((f = Li(t, f)), (l = Li(t, l)), (p = []));
						break;
					case 'select':
						((f = W({}, f, { value: void 0 })), (l = W({}, l, { value: void 0 })), (p = []));
						break;
					case 'textarea':
						((f = Fr(t, f)), (l = Fr(t, l)), (p = []));
						break;
					default:
						typeof f.onClick != 'function' && typeof l.onClick == 'function' && (t.onclick = ys);
				}
				ln(o, l);
				var w;
				o = null;
				for (I in f)
					if (!l.hasOwnProperty(I) && f.hasOwnProperty(I) && f[I] != null)
						if (I === 'style') {
							var T = f[I];
							for (w in T) T.hasOwnProperty(w) && (o || (o = {}), (o[w] = ''));
						} else
							I !== 'dangerouslySetInnerHTML' &&
								I !== 'children' &&
								I !== 'suppressContentEditableWarning' &&
								I !== 'suppressHydrationWarning' &&
								I !== 'autoFocus' &&
								(a.hasOwnProperty(I) ? p || (p = []) : (p = p || []).push(I, null));
				for (I in l) {
					var k = l[I];
					if (((T = f?.[I]), l.hasOwnProperty(I) && k !== T && (k != null || T != null)))
						if (I === 'style')
							if (T) {
								for (w in T) !T.hasOwnProperty(w) || (k && k.hasOwnProperty(w)) || (o || (o = {}), (o[w] = ''));
								for (w in k) k.hasOwnProperty(w) && T[w] !== k[w] && (o || (o = {}), (o[w] = k[w]));
							} else (o || (p || (p = []), p.push(I, o)), (o = k));
						else
							I === 'dangerouslySetInnerHTML'
								? ((k = k ? k.__html : void 0),
									(T = T ? T.__html : void 0),
									k != null && T !== k && (p = p || []).push(I, k))
								: I === 'children'
									? (typeof k != 'string' && typeof k != 'number') || (p = p || []).push(I, '' + k)
									: I !== 'suppressContentEditableWarning' &&
										I !== 'suppressHydrationWarning' &&
										(a.hasOwnProperty(I)
											? (k != null && I === 'onScroll' && De('scroll', t), p || T === k || (p = []))
											: (p = p || []).push(I, k));
				}
				o && (p = p || []).push('style', o);
				var I = p;
				(r.updateQueue = I) && (r.flags |= 4);
			}
		}),
		(zh = function (t, r, o, l) {
			o !== l && (r.flags |= 4);
		}));
	function ho(t, r) {
		if (!Ne)
			switch (t.tailMode) {
				case 'hidden':
					r = t.tail;
					for (var o = null; r !== null; ) (r.alternate !== null && (o = r), (r = r.sibling));
					o === null ? (t.tail = null) : (o.sibling = null);
					break;
				case 'collapsed':
					o = t.tail;
					for (var l = null; o !== null; ) (o.alternate !== null && (l = o), (o = o.sibling));
					l === null ? (r || t.tail === null ? (t.tail = null) : (t.tail.sibling = null)) : (l.sibling = null);
			}
	}
	function rt(t) {
		var r = t.alternate !== null && t.alternate.child === t.child,
			o = 0,
			l = 0;
		if (r)
			for (var f = t.child; f !== null; )
				((o |= f.lanes | f.childLanes),
					(l |= f.subtreeFlags & 14680064),
					(l |= f.flags & 14680064),
					(f.return = t),
					(f = f.sibling));
		else
			for (f = t.child; f !== null; )
				((o |= f.lanes | f.childLanes), (l |= f.subtreeFlags), (l |= f.flags), (f.return = t), (f = f.sibling));
		return ((t.subtreeFlags |= l), (t.childLanes = o), r);
	}
	function zw(t, r, o) {
		var l = r.pendingProps;
		switch ((Ll(r), r.tag)) {
			case 2:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return (rt(r), null);
			case 1:
				return (gt(r.type) && ws(), rt(r), null);
			case 3:
				return (
					(l = r.stateNode),
					si(),
					Le(mt),
					Le(tt),
					Hl(),
					l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)),
					(t === null || t.child === null) &&
						(Ps(r)
							? (r.flags |= 4)
							: t === null ||
								(t.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
								((r.flags |= 1024), Ht !== null && (Su(Ht), (Ht = null)))),
					cu(t, r),
					rt(r),
					null
				);
			case 5:
				$l(r);
				var f = Cr(ao.current);
				if (((o = r.type), t !== null && r.stateNode != null))
					(Fh(t, r, o, l, f), t.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152)));
				else {
					if (!l) {
						if (r.stateNode === null) throw Error(i(166));
						return (rt(r), null);
					}
					if (((t = Cr(hn.current)), Ps(r))) {
						((l = r.stateNode), (o = r.type));
						var p = r.memoizedProps;
						switch (((l[dn] = r), (l[no] = p), (t = (r.mode & 1) !== 0), o)) {
							case 'dialog':
								(De('cancel', l), De('close', l));
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								De('load', l);
								break;
							case 'video':
							case 'audio':
								for (f = 0; f < Ji.length; f++) De(Ji[f], l);
								break;
							case 'source':
								De('error', l);
								break;
							case 'img':
							case 'image':
							case 'link':
								(De('error', l), De('load', l));
								break;
							case 'details':
								De('toggle', l);
								break;
							case 'input':
								($o(l, p), De('invalid', l));
								break;
							case 'select':
								((l._wrapperState = { wasMultiple: !!p.multiple }), De('invalid', l));
								break;
							case 'textarea':
								(on(l, p), De('invalid', l));
						}
						(ln(o, p), (f = null));
						for (var w in p)
							if (p.hasOwnProperty(w)) {
								var T = p[w];
								w === 'children'
									? typeof T == 'string'
										? l.textContent !== T &&
											(p.suppressHydrationWarning !== !0 && gs(l.textContent, T, t), (f = ['children', T]))
										: typeof T == 'number' &&
											l.textContent !== '' + T &&
											(p.suppressHydrationWarning !== !0 && gs(l.textContent, T, t), (f = ['children', '' + T]))
									: a.hasOwnProperty(w) && T != null && w === 'onScroll' && De('scroll', l);
							}
						switch (o) {
							case 'input':
								(At(l), Vr(l, p, !0));
								break;
							case 'textarea':
								(At(l), Ho(l));
								break;
							case 'select':
							case 'option':
								break;
							default:
								typeof p.onClick == 'function' && (l.onclick = ys);
						}
						((l = f), (r.updateQueue = l), l !== null && (r.flags |= 4));
					} else {
						((w = f.nodeType === 9 ? f : f.ownerDocument),
							t === 'http://www.w3.org/1999/xhtml' && (t = st(o)),
							t === 'http://www.w3.org/1999/xhtml'
								? o === 'script'
									? ((t = w.createElement('div')),
										(t.innerHTML = '<script><\/script>'),
										(t = t.removeChild(t.firstChild)))
									: typeof l.is == 'string'
										? (t = w.createElement(o, { is: l.is }))
										: ((t = w.createElement(o)),
											o === 'select' && ((w = t), l.multiple ? (w.multiple = !0) : l.size && (w.size = l.size)))
								: (t = w.createElementNS(t, o)),
							(t[dn] = r),
							(t[no] = l),
							Vh(t, r, !1, !1),
							(r.stateNode = t));
						e: {
							switch (((w = Ii(o, l)), o)) {
								case 'dialog':
									(De('cancel', t), De('close', t), (f = l));
									break;
								case 'iframe':
								case 'object':
								case 'embed':
									(De('load', t), (f = l));
									break;
								case 'video':
								case 'audio':
									for (f = 0; f < Ji.length; f++) De(Ji[f], t);
									f = l;
									break;
								case 'source':
									(De('error', t), (f = l));
									break;
								case 'img':
								case 'image':
								case 'link':
									(De('error', t), De('load', t), (f = l));
									break;
								case 'details':
									(De('toggle', t), (f = l));
									break;
								case 'input':
									($o(t, l), (f = Li(t, l)), De('invalid', t));
									break;
								case 'option':
									f = l;
									break;
								case 'select':
									((t._wrapperState = { wasMultiple: !!l.multiple }),
										(f = W({}, l, { value: void 0 })),
										De('invalid', t));
									break;
								case 'textarea':
									(on(t, l), (f = Fr(t, l)), De('invalid', t));
									break;
								default:
									f = l;
							}
							(ln(o, f), (T = f));
							for (p in T)
								if (T.hasOwnProperty(p)) {
									var k = T[p];
									p === 'style'
										? En(t, k)
										: p === 'dangerouslySetInnerHTML'
											? ((k = k ? k.__html : void 0), k != null && Ko(t, k))
											: p === 'children'
												? typeof k == 'string'
													? (o !== 'textarea' || k !== '') && an(t, k)
													: typeof k == 'number' && an(t, '' + k)
												: p !== 'suppressContentEditableWarning' &&
													p !== 'suppressHydrationWarning' &&
													p !== 'autoFocus' &&
													(a.hasOwnProperty(p)
														? k != null && p === 'onScroll' && De('scroll', t)
														: k != null && D(t, p, k, w));
								}
							switch (o) {
								case 'input':
									(At(t), Vr(t, l, !1));
									break;
								case 'textarea':
									(At(t), Ho(t));
									break;
								case 'option':
									l.value != null && t.setAttribute('value', '' + Se(l.value));
									break;
								case 'select':
									((t.multiple = !!l.multiple),
										(p = l.value),
										p != null
											? Dt(t, !!l.multiple, p, !1)
											: l.defaultValue != null && Dt(t, !!l.multiple, l.defaultValue, !0));
									break;
								default:
									typeof f.onClick == 'function' && (t.onclick = ys);
							}
							switch (o) {
								case 'button':
								case 'input':
								case 'select':
								case 'textarea':
									l = !!l.autoFocus;
									break e;
								case 'img':
									l = !0;
									break e;
								default:
									l = !1;
							}
						}
						l && (r.flags |= 4);
					}
					r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
				}
				return (rt(r), null);
			case 6:
				if (t && r.stateNode != null) zh(t, r, t.memoizedProps, l);
				else {
					if (typeof l != 'string' && r.stateNode === null) throw Error(i(166));
					if (((o = Cr(ao.current)), Cr(hn.current), Ps(r))) {
						if (
							((l = r.stateNode), (o = r.memoizedProps), (l[dn] = r), (p = l.nodeValue !== o) && ((t = Pt), t !== null))
						)
							switch (t.tag) {
								case 3:
									gs(l.nodeValue, o, (t.mode & 1) !== 0);
									break;
								case 5:
									t.memoizedProps.suppressHydrationWarning !== !0 && gs(l.nodeValue, o, (t.mode & 1) !== 0);
							}
						p && (r.flags |= 4);
					} else ((l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l)), (l[dn] = r), (r.stateNode = l));
				}
				return (rt(r), null);
			case 13:
				if (
					(Le(je),
					(l = r.memoizedState),
					t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
				) {
					if (Ne && Tt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
						($d(), ni(), (r.flags |= 98560), (p = !1));
					else if (((p = Ps(r)), l !== null && l.dehydrated !== null)) {
						if (t === null) {
							if (!p) throw Error(i(318));
							if (((p = r.memoizedState), (p = p !== null ? p.dehydrated : null), !p)) throw Error(i(317));
							p[dn] = r;
						} else (ni(), (r.flags & 128) === 0 && (r.memoizedState = null), (r.flags |= 4));
						(rt(r), (p = !1));
					} else (Ht !== null && (Su(Ht), (Ht = null)), (p = !0));
					if (!p) return r.flags & 65536 ? r : null;
				}
				return (r.flags & 128) !== 0
					? ((r.lanes = o), r)
					: ((l = l !== null),
						l !== (t !== null && t.memoizedState !== null) &&
							l &&
							((r.child.flags |= 8192),
							(r.mode & 1) !== 0 && (t === null || (je.current & 1) !== 0 ? Ke === 0 && (Ke = 3) : Pu())),
						r.updateQueue !== null && (r.flags |= 4),
						rt(r),
						null);
			case 4:
				return (si(), cu(t, r), t === null && eo(r.stateNode.containerInfo), rt(r), null);
			case 10:
				return (Vl(r.type._context), rt(r), null);
			case 17:
				return (gt(r.type) && ws(), rt(r), null);
			case 19:
				if ((Le(je), (p = r.memoizedState), p === null)) return (rt(r), null);
				if (((l = (r.flags & 128) !== 0), (w = p.rendering), w === null))
					if (l) ho(p, !1);
					else {
						if (Ke !== 0 || (t !== null && (t.flags & 128) !== 0))
							for (t = r.child; t !== null; ) {
								if (((w = Ms(t)), w !== null)) {
									for (
										r.flags |= 128,
											ho(p, !1),
											l = w.updateQueue,
											l !== null && ((r.updateQueue = l), (r.flags |= 4)),
											r.subtreeFlags = 0,
											l = o,
											o = r.child;
										o !== null;
									)
										((p = o),
											(t = l),
											(p.flags &= 14680066),
											(w = p.alternate),
											w === null
												? ((p.childLanes = 0),
													(p.lanes = t),
													(p.child = null),
													(p.subtreeFlags = 0),
													(p.memoizedProps = null),
													(p.memoizedState = null),
													(p.updateQueue = null),
													(p.dependencies = null),
													(p.stateNode = null))
												: ((p.childLanes = w.childLanes),
													(p.lanes = w.lanes),
													(p.child = w.child),
													(p.subtreeFlags = 0),
													(p.deletions = null),
													(p.memoizedProps = w.memoizedProps),
													(p.memoizedState = w.memoizedState),
													(p.updateQueue = w.updateQueue),
													(p.type = w.type),
													(t = w.dependencies),
													(p.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
											(o = o.sibling));
									return (Ae(je, (je.current & 1) | 2), r.child);
								}
								t = t.sibling;
							}
						p.tail !== null && ze() > ci && ((r.flags |= 128), (l = !0), ho(p, !1), (r.lanes = 4194304));
					}
				else {
					if (!l)
						if (((t = Ms(w)), t !== null)) {
							if (
								((r.flags |= 128),
								(l = !0),
								(o = t.updateQueue),
								o !== null && ((r.updateQueue = o), (r.flags |= 4)),
								ho(p, !0),
								p.tail === null && p.tailMode === 'hidden' && !w.alternate && !Ne)
							)
								return (rt(r), null);
						} else
							2 * ze() - p.renderingStartTime > ci &&
								o !== 1073741824 &&
								((r.flags |= 128), (l = !0), ho(p, !1), (r.lanes = 4194304));
					p.isBackwards
						? ((w.sibling = r.child), (r.child = w))
						: ((o = p.last), o !== null ? (o.sibling = w) : (r.child = w), (p.last = w));
				}
				return p.tail !== null
					? ((r = p.tail),
						(p.rendering = r),
						(p.tail = r.sibling),
						(p.renderingStartTime = ze()),
						(r.sibling = null),
						(o = je.current),
						Ae(je, l ? (o & 1) | 2 : o & 1),
						r)
					: (rt(r), null);
			case 22:
			case 23:
				return (
					Eu(),
					(l = r.memoizedState !== null),
					t !== null && (t.memoizedState !== null) !== l && (r.flags |= 8192),
					l && (r.mode & 1) !== 0 ? (kt & 1073741824) !== 0 && (rt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : rt(r),
					null
				);
			case 24:
				return null;
			case 25:
				return null;
		}
		throw Error(i(156, r.tag));
	}
	function Bw(t, r) {
		switch ((Ll(r), r.tag)) {
			case 1:
				return (gt(r.type) && ws(), (t = r.flags), t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null);
			case 3:
				return (
					si(),
					Le(mt),
					Le(tt),
					Hl(),
					(t = r.flags),
					(t & 65536) !== 0 && (t & 128) === 0 ? ((r.flags = (t & -65537) | 128), r) : null
				);
			case 5:
				return ($l(r), null);
			case 13:
				if ((Le(je), (t = r.memoizedState), t !== null && t.dehydrated !== null)) {
					if (r.alternate === null) throw Error(i(340));
					ni();
				}
				return ((t = r.flags), t & 65536 ? ((r.flags = (t & -65537) | 128), r) : null);
			case 19:
				return (Le(je), null);
			case 4:
				return (si(), null);
			case 10:
				return (Vl(r.type._context), null);
			case 22:
			case 23:
				return (Eu(), null);
			case 24:
				return null;
			default:
				return null;
		}
	}
	var Fs = !1,
		it = !1,
		Uw = typeof WeakSet == 'function' ? WeakSet : Set,
		te = null;
	function li(t, r) {
		var o = t.ref;
		if (o !== null)
			if (typeof o == 'function')
				try {
					o(null);
				} catch (l) {
					Ve(t, r, l);
				}
			else o.current = null;
	}
	function fu(t, r, o) {
		try {
			o();
		} catch (l) {
			Ve(t, r, l);
		}
	}
	var Bh = !1;
	function $w(t, r) {
		if (((El = os), (t = wd()), ml(t))) {
			if ('selectionStart' in t) var o = { start: t.selectionStart, end: t.selectionEnd };
			else
				e: {
					o = ((o = t.ownerDocument) && o.defaultView) || window;
					var l = o.getSelection && o.getSelection();
					if (l && l.rangeCount !== 0) {
						o = l.anchorNode;
						var f = l.anchorOffset,
							p = l.focusNode;
						l = l.focusOffset;
						try {
							(o.nodeType, p.nodeType);
						} catch {
							o = null;
							break e;
						}
						var w = 0,
							T = -1,
							k = -1,
							I = 0,
							$ = 0,
							K = t,
							U = null;
						t: for (;;) {
							for (
								var Z;
								K !== o || (f !== 0 && K.nodeType !== 3) || (T = w + f),
									K !== p || (l !== 0 && K.nodeType !== 3) || (k = w + l),
									K.nodeType === 3 && (w += K.nodeValue.length),
									(Z = K.firstChild) !== null;
							)
								((U = K), (K = Z));
							for (;;) {
								if (K === t) break t;
								if ((U === o && ++I === f && (T = w), U === p && ++$ === l && (k = w), (Z = K.nextSibling) !== null))
									break;
								((K = U), (U = K.parentNode));
							}
							K = Z;
						}
						o = T === -1 || k === -1 ? null : { start: T, end: k };
					} else o = null;
				}
			o = o || { start: 0, end: 0 };
		} else o = null;
		for (Pl = { focusedElem: t, selectionRange: o }, os = !1, te = r; te !== null; )
			if (((r = te), (t = r.child), (r.subtreeFlags & 1028) !== 0 && t !== null)) ((t.return = r), (te = t));
			else
				for (; te !== null; ) {
					r = te;
					try {
						var ne = r.alternate;
						if ((r.flags & 1024) !== 0)
							switch (r.tag) {
								case 0:
								case 11:
								case 15:
									break;
								case 1:
									if (ne !== null) {
										var se = ne.memoizedProps,
											Be = ne.memoizedState,
											L = r.stateNode,
											R = L.getSnapshotBeforeUpdate(r.elementType === r.type ? se : Kt(r.type, se), Be);
										L.__reactInternalSnapshotBeforeUpdate = R;
									}
									break;
								case 3:
									var N = r.stateNode.containerInfo;
									N.nodeType === 1
										? (N.textContent = '')
										: N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
									break;
								case 5:
								case 6:
								case 4:
								case 17:
									break;
								default:
									throw Error(i(163));
							}
					} catch (Q) {
						Ve(r, r.return, Q);
					}
					if (((t = r.sibling), t !== null)) {
						((t.return = r.return), (te = t));
						break;
					}
					te = r.return;
				}
		return ((ne = Bh), (Bh = !1), ne);
	}
	function po(t, r, o) {
		var l = r.updateQueue;
		if (((l = l !== null ? l.lastEffect : null), l !== null)) {
			var f = (l = l.next);
			do {
				if ((f.tag & t) === t) {
					var p = f.destroy;
					((f.destroy = void 0), p !== void 0 && fu(r, o, p));
				}
				f = f.next;
			} while (f !== l);
		}
	}
	function zs(t, r) {
		if (((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)) {
			var o = (r = r.next);
			do {
				if ((o.tag & t) === t) {
					var l = o.create;
					o.destroy = l();
				}
				o = o.next;
			} while (o !== r);
		}
	}
	function du(t) {
		var r = t.ref;
		if (r !== null) {
			var o = t.stateNode;
			(t.tag, (t = o), typeof r == 'function' ? r(t) : (r.current = t));
		}
	}
	function Uh(t) {
		var r = t.alternate;
		(r !== null && ((t.alternate = null), Uh(r)),
			(t.child = null),
			(t.deletions = null),
			(t.sibling = null),
			t.tag === 5 &&
				((r = t.stateNode), r !== null && (delete r[dn], delete r[no], delete r[Rl], delete r[Tw], delete r[kw])),
			(t.stateNode = null),
			(t.return = null),
			(t.dependencies = null),
			(t.memoizedProps = null),
			(t.memoizedState = null),
			(t.pendingProps = null),
			(t.stateNode = null),
			(t.updateQueue = null));
	}
	function $h(t) {
		return t.tag === 5 || t.tag === 3 || t.tag === 4;
	}
	function Wh(t) {
		e: for (;;) {
			for (; t.sibling === null; ) {
				if (t.return === null || $h(t.return)) return null;
				t = t.return;
			}
			for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
				if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
				((t.child.return = t), (t = t.child));
			}
			if (!(t.flags & 2)) return t.stateNode;
		}
	}
	function hu(t, r, o) {
		var l = t.tag;
		if (l === 5 || l === 6)
			((t = t.stateNode),
				r
					? o.nodeType === 8
						? o.parentNode.insertBefore(t, r)
						: o.insertBefore(t, r)
					: (o.nodeType === 8 ? ((r = o.parentNode), r.insertBefore(t, o)) : ((r = o), r.appendChild(t)),
						(o = o._reactRootContainer),
						o != null || r.onclick !== null || (r.onclick = ys)));
		else if (l !== 4 && ((t = t.child), t !== null))
			for (hu(t, r, o), t = t.sibling; t !== null; ) (hu(t, r, o), (t = t.sibling));
	}
	function pu(t, r, o) {
		var l = t.tag;
		if (l === 5 || l === 6) ((t = t.stateNode), r ? o.insertBefore(t, r) : o.appendChild(t));
		else if (l !== 4 && ((t = t.child), t !== null))
			for (pu(t, r, o), t = t.sibling; t !== null; ) (pu(t, r, o), (t = t.sibling));
	}
	var Ze = null,
		Gt = !1;
	function Zn(t, r, o) {
		for (o = o.child; o !== null; ) (Hh(t, r, o), (o = o.sibling));
	}
	function Hh(t, r, o) {
		if (fn && typeof fn.onCommitFiberUnmount == 'function')
			try {
				fn.onCommitFiberUnmount(Jo, o);
			} catch {}
		switch (o.tag) {
			case 5:
				it || li(o, r);
			case 6:
				var l = Ze,
					f = Gt;
				((Ze = null),
					Zn(t, r, o),
					(Ze = l),
					(Gt = f),
					Ze !== null &&
						(Gt
							? ((t = Ze), (o = o.stateNode), t.nodeType === 8 ? t.parentNode.removeChild(o) : t.removeChild(o))
							: Ze.removeChild(o.stateNode)));
				break;
			case 18:
				Ze !== null &&
					(Gt
						? ((t = Ze),
							(o = o.stateNode),
							t.nodeType === 8 ? bl(t.parentNode, o) : t.nodeType === 1 && bl(t, o),
							Hi(t))
						: bl(Ze, o.stateNode));
				break;
			case 4:
				((l = Ze), (f = Gt), (Ze = o.stateNode.containerInfo), (Gt = !0), Zn(t, r, o), (Ze = l), (Gt = f));
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				if (!it && ((l = o.updateQueue), l !== null && ((l = l.lastEffect), l !== null))) {
					f = l = l.next;
					do {
						var p = f,
							w = p.destroy;
						((p = p.tag), w !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && fu(o, r, w), (f = f.next));
					} while (f !== l);
				}
				Zn(t, r, o);
				break;
			case 1:
				if (!it && (li(o, r), (l = o.stateNode), typeof l.componentWillUnmount == 'function'))
					try {
						((l.props = o.memoizedProps), (l.state = o.memoizedState), l.componentWillUnmount());
					} catch (T) {
						Ve(o, r, T);
					}
				Zn(t, r, o);
				break;
			case 21:
				Zn(t, r, o);
				break;
			case 22:
				o.mode & 1 ? ((it = (l = it) || o.memoizedState !== null), Zn(t, r, o), (it = l)) : Zn(t, r, o);
				break;
			default:
				Zn(t, r, o);
		}
	}
	function Kh(t) {
		var r = t.updateQueue;
		if (r !== null) {
			t.updateQueue = null;
			var o = t.stateNode;
			(o === null && (o = t.stateNode = new Uw()),
				r.forEach(function (l) {
					var f = Zw.bind(null, t, l);
					o.has(l) || (o.add(l), l.then(f, f));
				}));
		}
	}
	function Qt(t, r) {
		var o = r.deletions;
		if (o !== null)
			for (var l = 0; l < o.length; l++) {
				var f = o[l];
				try {
					var p = t,
						w = r,
						T = w;
					e: for (; T !== null; ) {
						switch (T.tag) {
							case 5:
								((Ze = T.stateNode), (Gt = !1));
								break e;
							case 3:
								((Ze = T.stateNode.containerInfo), (Gt = !0));
								break e;
							case 4:
								((Ze = T.stateNode.containerInfo), (Gt = !0));
								break e;
						}
						T = T.return;
					}
					if (Ze === null) throw Error(i(160));
					(Hh(p, w, f), (Ze = null), (Gt = !1));
					var k = f.alternate;
					(k !== null && (k.return = null), (f.return = null));
				} catch (I) {
					Ve(f, r, I);
				}
			}
		if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) (Gh(r, t), (r = r.sibling));
	}
	function Gh(t, r) {
		var o = t.alternate,
			l = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if ((Qt(r, t), mn(t), l & 4)) {
					try {
						(po(3, t, t.return), zs(3, t));
					} catch (se) {
						Ve(t, t.return, se);
					}
					try {
						po(5, t, t.return);
					} catch (se) {
						Ve(t, t.return, se);
					}
				}
				break;
			case 1:
				(Qt(r, t), mn(t), l & 512 && o !== null && li(o, o.return));
				break;
			case 5:
				if ((Qt(r, t), mn(t), l & 512 && o !== null && li(o, o.return), t.flags & 32)) {
					var f = t.stateNode;
					try {
						an(f, '');
					} catch (se) {
						Ve(t, t.return, se);
					}
				}
				if (l & 4 && ((f = t.stateNode), f != null)) {
					var p = t.memoizedProps,
						w = o !== null ? o.memoizedProps : p,
						T = t.type,
						k = t.updateQueue;
					if (((t.updateQueue = null), k !== null))
						try {
							(T === 'input' && p.type === 'radio' && p.name != null && Oi(f, p), Ii(T, w));
							var I = Ii(T, p);
							for (w = 0; w < k.length; w += 2) {
								var $ = k[w],
									K = k[w + 1];
								$ === 'style'
									? En(f, K)
									: $ === 'dangerouslySetInnerHTML'
										? Ko(f, K)
										: $ === 'children'
											? an(f, K)
											: D(f, $, K, I);
							}
							switch (T) {
								case 'input':
									Ni(f, p);
									break;
								case 'textarea':
									Wo(f, p);
									break;
								case 'select':
									var U = f._wrapperState.wasMultiple;
									f._wrapperState.wasMultiple = !!p.multiple;
									var Z = p.value;
									Z != null
										? Dt(f, !!p.multiple, Z, !1)
										: U !== !!p.multiple &&
											(p.defaultValue != null
												? Dt(f, !!p.multiple, p.defaultValue, !0)
												: Dt(f, !!p.multiple, p.multiple ? [] : '', !1));
							}
							f[no] = p;
						} catch (se) {
							Ve(t, t.return, se);
						}
				}
				break;
			case 6:
				if ((Qt(r, t), mn(t), l & 4)) {
					if (t.stateNode === null) throw Error(i(162));
					((f = t.stateNode), (p = t.memoizedProps));
					try {
						f.nodeValue = p;
					} catch (se) {
						Ve(t, t.return, se);
					}
				}
				break;
			case 3:
				if ((Qt(r, t), mn(t), l & 4 && o !== null && o.memoizedState.isDehydrated))
					try {
						Hi(r.containerInfo);
					} catch (se) {
						Ve(t, t.return, se);
					}
				break;
			case 4:
				(Qt(r, t), mn(t));
				break;
			case 13:
				(Qt(r, t),
					mn(t),
					(f = t.child),
					f.flags & 8192 &&
						((p = f.memoizedState !== null),
						(f.stateNode.isHidden = p),
						!p || (f.alternate !== null && f.alternate.memoizedState !== null) || (yu = ze())),
					l & 4 && Kh(t));
				break;
			case 22:
				if (
					(($ = o !== null && o.memoizedState !== null),
					t.mode & 1 ? ((it = (I = it) || $), Qt(r, t), (it = I)) : Qt(r, t),
					mn(t),
					l & 8192)
				) {
					if (((I = t.memoizedState !== null), (t.stateNode.isHidden = I) && !$ && (t.mode & 1) !== 0))
						for (te = t, $ = t.child; $ !== null; ) {
							for (K = te = $; te !== null; ) {
								switch (((U = te), (Z = U.child), U.tag)) {
									case 0:
									case 11:
									case 14:
									case 15:
										po(4, U, U.return);
										break;
									case 1:
										li(U, U.return);
										var ne = U.stateNode;
										if (typeof ne.componentWillUnmount == 'function') {
											((l = U), (o = U.return));
											try {
												((r = l),
													(ne.props = r.memoizedProps),
													(ne.state = r.memoizedState),
													ne.componentWillUnmount());
											} catch (se) {
												Ve(l, o, se);
											}
										}
										break;
									case 5:
										li(U, U.return);
										break;
									case 22:
										if (U.memoizedState !== null) {
											Xh(K);
											continue;
										}
								}
								Z !== null ? ((Z.return = U), (te = Z)) : Xh(K);
							}
							$ = $.sibling;
						}
					e: for ($ = null, K = t; ; ) {
						if (K.tag === 5) {
							if ($ === null) {
								$ = K;
								try {
									((f = K.stateNode),
										I
											? ((p = f.style),
												typeof p.setProperty == 'function'
													? p.setProperty('display', 'none', 'important')
													: (p.display = 'none'))
											: ((T = K.stateNode),
												(k = K.memoizedProps.style),
												(w = k != null && k.hasOwnProperty('display') ? k.display : null),
												(T.style.display = Br('display', w))));
								} catch (se) {
									Ve(t, t.return, se);
								}
							}
						} else if (K.tag === 6) {
							if ($ === null)
								try {
									K.stateNode.nodeValue = I ? '' : K.memoizedProps;
								} catch (se) {
									Ve(t, t.return, se);
								}
						} else if (((K.tag !== 22 && K.tag !== 23) || K.memoizedState === null || K === t) && K.child !== null) {
							((K.child.return = K), (K = K.child));
							continue;
						}
						if (K === t) break e;
						for (; K.sibling === null; ) {
							if (K.return === null || K.return === t) break e;
							($ === K && ($ = null), (K = K.return));
						}
						($ === K && ($ = null), (K.sibling.return = K.return), (K = K.sibling));
					}
				}
				break;
			case 19:
				(Qt(r, t), mn(t), l & 4 && Kh(t));
				break;
			case 21:
				break;
			default:
				(Qt(r, t), mn(t));
		}
	}
	function mn(t) {
		var r = t.flags;
		if (r & 2) {
			try {
				e: {
					for (var o = t.return; o !== null; ) {
						if ($h(o)) {
							var l = o;
							break e;
						}
						o = o.return;
					}
					throw Error(i(160));
				}
				switch (l.tag) {
					case 5:
						var f = l.stateNode;
						l.flags & 32 && (an(f, ''), (l.flags &= -33));
						var p = Wh(t);
						pu(t, p, f);
						break;
					case 3:
					case 4:
						var w = l.stateNode.containerInfo,
							T = Wh(t);
						hu(t, T, w);
						break;
					default:
						throw Error(i(161));
				}
			} catch (k) {
				Ve(t, t.return, k);
			}
			t.flags &= -3;
		}
		r & 4096 && (t.flags &= -4097);
	}
	function Ww(t, r, o) {
		((te = t), Qh(t));
	}
	function Qh(t, r, o) {
		for (var l = (t.mode & 1) !== 0; te !== null; ) {
			var f = te,
				p = f.child;
			if (f.tag === 22 && l) {
				var w = f.memoizedState !== null || Fs;
				if (!w) {
					var T = f.alternate,
						k = (T !== null && T.memoizedState !== null) || it;
					T = Fs;
					var I = it;
					if (((Fs = w), (it = k) && !I))
						for (te = f; te !== null; )
							((w = te),
								(k = w.child),
								w.tag === 22 && w.memoizedState !== null ? qh(f) : k !== null ? ((k.return = w), (te = k)) : qh(f));
					for (; p !== null; ) ((te = p), Qh(p), (p = p.sibling));
					((te = f), (Fs = T), (it = I));
				}
				Yh(t);
			} else (f.subtreeFlags & 8772) !== 0 && p !== null ? ((p.return = f), (te = p)) : Yh(t);
		}
	}
	function Yh(t) {
		for (; te !== null; ) {
			var r = te;
			if ((r.flags & 8772) !== 0) {
				var o = r.alternate;
				try {
					if ((r.flags & 8772) !== 0)
						switch (r.tag) {
							case 0:
							case 11:
							case 15:
								it || zs(5, r);
								break;
							case 1:
								var l = r.stateNode;
								if (r.flags & 4 && !it)
									if (o === null) l.componentDidMount();
									else {
										var f = r.elementType === r.type ? o.memoizedProps : Kt(r.type, o.memoizedProps);
										l.componentDidUpdate(f, o.memoizedState, l.__reactInternalSnapshotBeforeUpdate);
									}
								var p = r.updateQueue;
								p !== null && Xd(r, p, l);
								break;
							case 3:
								var w = r.updateQueue;
								if (w !== null) {
									if (((o = null), r.child !== null))
										switch (r.child.tag) {
											case 5:
												o = r.child.stateNode;
												break;
											case 1:
												o = r.child.stateNode;
										}
									Xd(r, w, o);
								}
								break;
							case 5:
								var T = r.stateNode;
								if (o === null && r.flags & 4) {
									o = T;
									var k = r.memoizedProps;
									switch (r.type) {
										case 'button':
										case 'input':
										case 'select':
										case 'textarea':
											k.autoFocus && o.focus();
											break;
										case 'img':
											k.src && (o.src = k.src);
									}
								}
								break;
							case 6:
								break;
							case 4:
								break;
							case 12:
								break;
							case 13:
								if (r.memoizedState === null) {
									var I = r.alternate;
									if (I !== null) {
										var $ = I.memoizedState;
										if ($ !== null) {
											var K = $.dehydrated;
											K !== null && Hi(K);
										}
									}
								}
								break;
							case 19:
							case 17:
							case 21:
							case 22:
							case 23:
							case 25:
								break;
							default:
								throw Error(i(163));
						}
					it || (r.flags & 512 && du(r));
				} catch (U) {
					Ve(r, r.return, U);
				}
			}
			if (r === t) {
				te = null;
				break;
			}
			if (((o = r.sibling), o !== null)) {
				((o.return = r.return), (te = o));
				break;
			}
			te = r.return;
		}
	}
	function Xh(t) {
		for (; te !== null; ) {
			var r = te;
			if (r === t) {
				te = null;
				break;
			}
			var o = r.sibling;
			if (o !== null) {
				((o.return = r.return), (te = o));
				break;
			}
			te = r.return;
		}
	}
	function qh(t) {
		for (; te !== null; ) {
			var r = te;
			try {
				switch (r.tag) {
					case 0:
					case 11:
					case 15:
						var o = r.return;
						try {
							zs(4, r);
						} catch (k) {
							Ve(r, o, k);
						}
						break;
					case 1:
						var l = r.stateNode;
						if (typeof l.componentDidMount == 'function') {
							var f = r.return;
							try {
								l.componentDidMount();
							} catch (k) {
								Ve(r, f, k);
							}
						}
						var p = r.return;
						try {
							du(r);
						} catch (k) {
							Ve(r, p, k);
						}
						break;
					case 5:
						var w = r.return;
						try {
							du(r);
						} catch (k) {
							Ve(r, w, k);
						}
				}
			} catch (k) {
				Ve(r, r.return, k);
			}
			if (r === t) {
				te = null;
				break;
			}
			var T = r.sibling;
			if (T !== null) {
				((T.return = r.return), (te = T));
				break;
			}
			te = r.return;
		}
	}
	var Hw = Math.ceil,
		Bs = O.ReactCurrentDispatcher,
		mu = O.ReactCurrentOwner,
		It = O.ReactCurrentBatchConfig,
		Ee = 0,
		Ye = null,
		$e = null,
		Je = 0,
		kt = 0,
		ui = Gn(0),
		Ke = 0,
		mo = null,
		Pr = 0,
		Us = 0,
		gu = 0,
		go = null,
		vt = null,
		yu = 0,
		ci = 1 / 0,
		Dn = null,
		$s = !1,
		vu = null,
		Jn = null,
		Ws = !1,
		er = null,
		Hs = 0,
		yo = 0,
		wu = null,
		Ks = -1,
		Gs = 0;
	function ut() {
		return (Ee & 6) !== 0 ? ze() : Ks !== -1 ? Ks : (Ks = ze());
	}
	function tr(t) {
		return (t.mode & 1) === 0
			? 1
			: (Ee & 2) !== 0 && Je !== 0
				? Je & -Je
				: Rw.transition !== null
					? (Gs === 0 && (Gs = Wf()), Gs)
					: ((t = be), t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Jf(t.type))), t);
	}
	function Yt(t, r, o, l) {
		if (50 < yo) throw ((yo = 0), (wu = null), Error(i(185)));
		(zi(t, o, l),
			((Ee & 2) === 0 || t !== Ye) &&
				(t === Ye && ((Ee & 2) === 0 && (Us |= o), Ke === 4 && nr(t, Je)),
				wt(t, l),
				o === 1 && Ee === 0 && (r.mode & 1) === 0 && ((ci = ze() + 500), Ss && Yn())));
	}
	function wt(t, r) {
		var o = t.callbackNode;
		R0(t, r);
		var l = ns(t, t === Ye ? Je : 0);
		if (l === 0) (o !== null && Bf(o), (t.callbackNode = null), (t.callbackPriority = 0));
		else if (((r = l & -l), t.callbackPriority !== r)) {
			if ((o != null && Bf(o), r === 1))
				(t.tag === 0 ? bw(Jh.bind(null, t)) : Vd(Jh.bind(null, t)),
					Ew(function () {
						(Ee & 6) === 0 && Yn();
					}),
					(o = null));
			else {
				switch (Hf(l)) {
					case 1:
						o = Za;
						break;
					case 4:
						o = Uf;
						break;
					case 16:
						o = Zo;
						break;
					case 536870912:
						o = $f;
						break;
					default:
						o = Zo;
				}
				o = ap(o, Zh.bind(null, t));
			}
			((t.callbackPriority = r), (t.callbackNode = o));
		}
	}
	function Zh(t, r) {
		if (((Ks = -1), (Gs = 0), (Ee & 6) !== 0)) throw Error(i(327));
		var o = t.callbackNode;
		if (fi() && t.callbackNode !== o) return null;
		var l = ns(t, t === Ye ? Je : 0);
		if (l === 0) return null;
		if ((l & 30) !== 0 || (l & t.expiredLanes) !== 0 || r) r = Qs(t, l);
		else {
			r = l;
			var f = Ee;
			Ee |= 2;
			var p = tp();
			(Ye !== t || Je !== r) && ((Dn = null), (ci = ze() + 500), kr(t, r));
			do
				try {
					Qw();
					break;
				} catch (T) {
					ep(t, T);
				}
			while (!0);
			(_l(), (Bs.current = p), (Ee = f), $e !== null ? (r = 0) : ((Ye = null), (Je = 0), (r = Ke)));
		}
		if (r !== 0) {
			if ((r === 2 && ((f = Ja(t)), f !== 0 && ((l = f), (r = xu(t, f)))), r === 1))
				throw ((o = mo), kr(t, 0), nr(t, l), wt(t, ze()), o);
			if (r === 6) nr(t, l);
			else {
				if (
					((f = t.current.alternate),
					(l & 30) === 0 &&
						!Kw(f) &&
						((r = Qs(t, l)), r === 2 && ((p = Ja(t)), p !== 0 && ((l = p), (r = xu(t, p)))), r === 1))
				)
					throw ((o = mo), kr(t, 0), nr(t, l), wt(t, ze()), o);
				switch (((t.finishedWork = f), (t.finishedLanes = l), r)) {
					case 0:
					case 1:
						throw Error(i(345));
					case 2:
						br(t, vt, Dn);
						break;
					case 3:
						if ((nr(t, l), (l & 130023424) === l && ((r = yu + 500 - ze()), 10 < r))) {
							if (ns(t, 0) !== 0) break;
							if (((f = t.suspendedLanes), (f & l) !== l)) {
								(ut(), (t.pingedLanes |= t.suspendedLanes & f));
								break;
							}
							t.timeoutHandle = kl(br.bind(null, t, vt, Dn), r);
							break;
						}
						br(t, vt, Dn);
						break;
					case 4:
						if ((nr(t, l), (l & 4194240) === l)) break;
						for (r = t.eventTimes, f = -1; 0 < l; ) {
							var w = 31 - $t(l);
							((p = 1 << w), (w = r[w]), w > f && (f = w), (l &= ~p));
						}
						if (
							((l = f),
							(l = ze() - l),
							(l =
								(120 > l
									? 120
									: 480 > l
										? 480
										: 1080 > l
											? 1080
											: 1920 > l
												? 1920
												: 3e3 > l
													? 3e3
													: 4320 > l
														? 4320
														: 1960 * Hw(l / 1960)) - l),
							10 < l)
						) {
							t.timeoutHandle = kl(br.bind(null, t, vt, Dn), l);
							break;
						}
						br(t, vt, Dn);
						break;
					case 5:
						br(t, vt, Dn);
						break;
					default:
						throw Error(i(329));
				}
			}
		}
		return (wt(t, ze()), t.callbackNode === o ? Zh.bind(null, t) : null);
	}
	function xu(t, r) {
		var o = go;
		return (
			t.current.memoizedState.isDehydrated && (kr(t, r).flags |= 256),
			(t = Qs(t, r)),
			t !== 2 && ((r = vt), (vt = o), r !== null && Su(r)),
			t
		);
	}
	function Su(t) {
		vt === null ? (vt = t) : vt.push.apply(vt, t);
	}
	function Kw(t) {
		for (var r = t; ; ) {
			if (r.flags & 16384) {
				var o = r.updateQueue;
				if (o !== null && ((o = o.stores), o !== null))
					for (var l = 0; l < o.length; l++) {
						var f = o[l],
							p = f.getSnapshot;
						f = f.value;
						try {
							if (!Wt(p(), f)) return !1;
						} catch {
							return !1;
						}
					}
			}
			if (((o = r.child), r.subtreeFlags & 16384 && o !== null)) ((o.return = r), (r = o));
			else {
				if (r === t) break;
				for (; r.sibling === null; ) {
					if (r.return === null || r.return === t) return !0;
					r = r.return;
				}
				((r.sibling.return = r.return), (r = r.sibling));
			}
		}
		return !0;
	}
	function nr(t, r) {
		for (r &= ~gu, r &= ~Us, t.suspendedLanes |= r, t.pingedLanes &= ~r, t = t.expirationTimes; 0 < r; ) {
			var o = 31 - $t(r),
				l = 1 << o;
			((t[o] = -1), (r &= ~l));
		}
	}
	function Jh(t) {
		if ((Ee & 6) !== 0) throw Error(i(327));
		fi();
		var r = ns(t, 0);
		if ((r & 1) === 0) return (wt(t, ze()), null);
		var o = Qs(t, r);
		if (t.tag !== 0 && o === 2) {
			var l = Ja(t);
			l !== 0 && ((r = l), (o = xu(t, l)));
		}
		if (o === 1) throw ((o = mo), kr(t, 0), nr(t, r), wt(t, ze()), o);
		if (o === 6) throw Error(i(345));
		return ((t.finishedWork = t.current.alternate), (t.finishedLanes = r), br(t, vt, Dn), wt(t, ze()), null);
	}
	function Cu(t, r) {
		var o = Ee;
		Ee |= 1;
		try {
			return t(r);
		} finally {
			((Ee = o), Ee === 0 && ((ci = ze() + 500), Ss && Yn()));
		}
	}
	function Tr(t) {
		er !== null && er.tag === 0 && (Ee & 6) === 0 && fi();
		var r = Ee;
		Ee |= 1;
		var o = It.transition,
			l = be;
		try {
			if (((It.transition = null), (be = 1), t)) return t();
		} finally {
			((be = l), (It.transition = o), (Ee = r), (Ee & 6) === 0 && Yn());
		}
	}
	function Eu() {
		((kt = ui.current), Le(ui));
	}
	function kr(t, r) {
		((t.finishedWork = null), (t.finishedLanes = 0));
		var o = t.timeoutHandle;
		if ((o !== -1 && ((t.timeoutHandle = -1), Cw(o)), $e !== null))
			for (o = $e.return; o !== null; ) {
				var l = o;
				switch ((Ll(l), l.tag)) {
					case 1:
						((l = l.type.childContextTypes), l != null && ws());
						break;
					case 3:
						(si(), Le(mt), Le(tt), Hl());
						break;
					case 5:
						$l(l);
						break;
					case 4:
						si();
						break;
					case 13:
						Le(je);
						break;
					case 19:
						Le(je);
						break;
					case 10:
						Vl(l.type._context);
						break;
					case 22:
					case 23:
						Eu();
				}
				o = o.return;
			}
		if (
			((Ye = t),
			($e = t = rr(t.current, null)),
			(Je = kt = r),
			(Ke = 0),
			(mo = null),
			(gu = Us = Pr = 0),
			(vt = go = null),
			Sr !== null)
		) {
			for (r = 0; r < Sr.length; r++)
				if (((o = Sr[r]), (l = o.interleaved), l !== null)) {
					o.interleaved = null;
					var f = l.next,
						p = o.pending;
					if (p !== null) {
						var w = p.next;
						((p.next = f), (l.next = w));
					}
					o.pending = l;
				}
			Sr = null;
		}
		return t;
	}
	function ep(t, r) {
		do {
			var o = $e;
			try {
				if ((_l(), (Ds.current = js), Ls)) {
					for (var l = Ie.memoizedState; l !== null; ) {
						var f = l.queue;
						(f !== null && (f.pending = null), (l = l.next));
					}
					Ls = !1;
				}
				if (
					((Er = 0), (Qe = He = Ie = null), (lo = !1), (uo = 0), (mu.current = null), o === null || o.return === null)
				) {
					((Ke = 1), (mo = r), ($e = null));
					break;
				}
				e: {
					var p = t,
						w = o.return,
						T = o,
						k = r;
					if (((r = Je), (T.flags |= 32768), k !== null && typeof k == 'object' && typeof k.then == 'function')) {
						var I = k,
							$ = T,
							K = $.tag;
						if (($.mode & 1) === 0 && (K === 0 || K === 11 || K === 15)) {
							var U = $.alternate;
							U
								? (($.updateQueue = U.updateQueue), ($.memoizedState = U.memoizedState), ($.lanes = U.lanes))
								: (($.updateQueue = null), ($.memoizedState = null));
						}
						var Z = Th(w);
						if (Z !== null) {
							((Z.flags &= -257), kh(Z, w, T, p, r), Z.mode & 1 && Ph(p, I, r), (r = Z), (k = I));
							var ne = r.updateQueue;
							if (ne === null) {
								var se = new Set();
								(se.add(k), (r.updateQueue = se));
							} else ne.add(k);
							break e;
						} else {
							if ((r & 1) === 0) {
								(Ph(p, I, r), Pu());
								break e;
							}
							k = Error(i(426));
						}
					} else if (Ne && T.mode & 1) {
						var Be = Th(w);
						if (Be !== null) {
							((Be.flags & 65536) === 0 && (Be.flags |= 256), kh(Be, w, T, p, r), jl(ai(k, T)));
							break e;
						}
					}
					((p = k = ai(k, T)), Ke !== 4 && (Ke = 2), go === null ? (go = [p]) : go.push(p), (p = w));
					do {
						switch (p.tag) {
							case 3:
								((p.flags |= 65536), (r &= -r), (p.lanes |= r));
								var L = Ch(p, k, r);
								Yd(p, L);
								break e;
							case 1:
								T = k;
								var R = p.type,
									N = p.stateNode;
								if (
									(p.flags & 128) === 0 &&
									(typeof R.getDerivedStateFromError == 'function' ||
										(N !== null && typeof N.componentDidCatch == 'function' && (Jn === null || !Jn.has(N))))
								) {
									((p.flags |= 65536), (r &= -r), (p.lanes |= r));
									var Q = Eh(p, T, r);
									Yd(p, Q);
									break e;
								}
						}
						p = p.return;
					} while (p !== null);
				}
				rp(o);
			} catch (ae) {
				((r = ae), $e === o && o !== null && ($e = o = o.return));
				continue;
			}
			break;
		} while (!0);
	}
	function tp() {
		var t = Bs.current;
		return ((Bs.current = js), t === null ? js : t);
	}
	function Pu() {
		((Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
			Ye === null || ((Pr & 268435455) === 0 && (Us & 268435455) === 0) || nr(Ye, Je));
	}
	function Qs(t, r) {
		var o = Ee;
		Ee |= 2;
		var l = tp();
		(Ye !== t || Je !== r) && ((Dn = null), kr(t, r));
		do
			try {
				Gw();
				break;
			} catch (f) {
				ep(t, f);
			}
		while (!0);
		if ((_l(), (Ee = o), (Bs.current = l), $e !== null)) throw Error(i(261));
		return ((Ye = null), (Je = 0), Ke);
	}
	function Gw() {
		for (; $e !== null; ) np($e);
	}
	function Qw() {
		for (; $e !== null && !w0(); ) np($e);
	}
	function np(t) {
		var r = sp(t.alternate, t, kt);
		((t.memoizedProps = t.pendingProps), r === null ? rp(t) : ($e = r), (mu.current = null));
	}
	function rp(t) {
		var r = t;
		do {
			var o = r.alternate;
			if (((t = r.return), (r.flags & 32768) === 0)) {
				if (((o = zw(o, r, kt)), o !== null)) {
					$e = o;
					return;
				}
			} else {
				if (((o = Bw(o, r)), o !== null)) {
					((o.flags &= 32767), ($e = o));
					return;
				}
				if (t !== null) ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null));
				else {
					((Ke = 6), ($e = null));
					return;
				}
			}
			if (((r = r.sibling), r !== null)) {
				$e = r;
				return;
			}
			$e = r = t;
		} while (r !== null);
		Ke === 0 && (Ke = 5);
	}
	function br(t, r, o) {
		var l = be,
			f = It.transition;
		try {
			((It.transition = null), (be = 1), Yw(t, r, o, l));
		} finally {
			((It.transition = f), (be = l));
		}
		return null;
	}
	function Yw(t, r, o, l) {
		do fi();
		while (er !== null);
		if ((Ee & 6) !== 0) throw Error(i(327));
		o = t.finishedWork;
		var f = t.finishedLanes;
		if (o === null) return null;
		if (((t.finishedWork = null), (t.finishedLanes = 0), o === t.current)) throw Error(i(177));
		((t.callbackNode = null), (t.callbackPriority = 0));
		var p = o.lanes | o.childLanes;
		if (
			(A0(t, p),
			t === Ye && (($e = Ye = null), (Je = 0)),
			((o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0) ||
				Ws ||
				((Ws = !0),
				ap(Zo, function () {
					return (fi(), null);
				})),
			(p = (o.flags & 15990) !== 0),
			(o.subtreeFlags & 15990) !== 0 || p)
		) {
			((p = It.transition), (It.transition = null));
			var w = be;
			be = 1;
			var T = Ee;
			((Ee |= 4),
				(mu.current = null),
				$w(t, o),
				Gh(o, t),
				mw(Pl),
				(os = !!El),
				(Pl = El = null),
				(t.current = o),
				Ww(o),
				x0(),
				(Ee = T),
				(be = w),
				(It.transition = p));
		} else t.current = o;
		if (
			(Ws && ((Ws = !1), (er = t), (Hs = f)),
			(p = t.pendingLanes),
			p === 0 && (Jn = null),
			E0(o.stateNode),
			wt(t, ze()),
			r !== null)
		)
			for (l = t.onRecoverableError, o = 0; o < r.length; o++)
				((f = r[o]), l(f.value, { componentStack: f.stack, digest: f.digest }));
		if ($s) throw (($s = !1), (t = vu), (vu = null), t);
		return (
			(Hs & 1) !== 0 && t.tag !== 0 && fi(),
			(p = t.pendingLanes),
			(p & 1) !== 0 ? (t === wu ? yo++ : ((yo = 0), (wu = t))) : (yo = 0),
			Yn(),
			null
		);
	}
	function fi() {
		if (er !== null) {
			var t = Hf(Hs),
				r = It.transition,
				o = be;
			try {
				if (((It.transition = null), (be = 16 > t ? 16 : t), er === null)) var l = !1;
				else {
					if (((t = er), (er = null), (Hs = 0), (Ee & 6) !== 0)) throw Error(i(331));
					var f = Ee;
					for (Ee |= 4, te = t.current; te !== null; ) {
						var p = te,
							w = p.child;
						if ((te.flags & 16) !== 0) {
							var T = p.deletions;
							if (T !== null) {
								for (var k = 0; k < T.length; k++) {
									var I = T[k];
									for (te = I; te !== null; ) {
										var $ = te;
										switch ($.tag) {
											case 0:
											case 11:
											case 15:
												po(8, $, p);
										}
										var K = $.child;
										if (K !== null) ((K.return = $), (te = K));
										else
											for (; te !== null; ) {
												$ = te;
												var U = $.sibling,
													Z = $.return;
												if ((Uh($), $ === I)) {
													te = null;
													break;
												}
												if (U !== null) {
													((U.return = Z), (te = U));
													break;
												}
												te = Z;
											}
									}
								}
								var ne = p.alternate;
								if (ne !== null) {
									var se = ne.child;
									if (se !== null) {
										ne.child = null;
										do {
											var Be = se.sibling;
											((se.sibling = null), (se = Be));
										} while (se !== null);
									}
								}
								te = p;
							}
						}
						if ((p.subtreeFlags & 2064) !== 0 && w !== null) ((w.return = p), (te = w));
						else
							e: for (; te !== null; ) {
								if (((p = te), (p.flags & 2048) !== 0))
									switch (p.tag) {
										case 0:
										case 11:
										case 15:
											po(9, p, p.return);
									}
								var L = p.sibling;
								if (L !== null) {
									((L.return = p.return), (te = L));
									break e;
								}
								te = p.return;
							}
					}
					var R = t.current;
					for (te = R; te !== null; ) {
						w = te;
						var N = w.child;
						if ((w.subtreeFlags & 2064) !== 0 && N !== null) ((N.return = w), (te = N));
						else
							e: for (w = R; te !== null; ) {
								if (((T = te), (T.flags & 2048) !== 0))
									try {
										switch (T.tag) {
											case 0:
											case 11:
											case 15:
												zs(9, T);
										}
									} catch (ae) {
										Ve(T, T.return, ae);
									}
								if (T === w) {
									te = null;
									break e;
								}
								var Q = T.sibling;
								if (Q !== null) {
									((Q.return = T.return), (te = Q));
									break e;
								}
								te = T.return;
							}
					}
					if (((Ee = f), Yn(), fn && typeof fn.onPostCommitFiberRoot == 'function'))
						try {
							fn.onPostCommitFiberRoot(Jo, t);
						} catch {}
					l = !0;
				}
				return l;
			} finally {
				((be = o), (It.transition = r));
			}
		}
		return !1;
	}
	function ip(t, r, o) {
		((r = ai(o, r)), (r = Ch(t, r, 1)), (t = qn(t, r, 1)), (r = ut()), t !== null && (zi(t, 1, r), wt(t, r)));
	}
	function Ve(t, r, o) {
		if (t.tag === 3) ip(t, t, o);
		else
			for (; r !== null; ) {
				if (r.tag === 3) {
					ip(r, t, o);
					break;
				} else if (r.tag === 1) {
					var l = r.stateNode;
					if (
						typeof r.type.getDerivedStateFromError == 'function' ||
						(typeof l.componentDidCatch == 'function' && (Jn === null || !Jn.has(l)))
					) {
						((t = ai(o, t)), (t = Eh(r, t, 1)), (r = qn(r, t, 1)), (t = ut()), r !== null && (zi(r, 1, t), wt(r, t)));
						break;
					}
				}
				r = r.return;
			}
	}
	function Xw(t, r, o) {
		var l = t.pingCache;
		(l !== null && l.delete(r),
			(r = ut()),
			(t.pingedLanes |= t.suspendedLanes & o),
			Ye === t &&
				(Je & o) === o &&
				(Ke === 4 || (Ke === 3 && (Je & 130023424) === Je && 500 > ze() - yu) ? kr(t, 0) : (gu |= o)),
			wt(t, r));
	}
	function op(t, r) {
		r === 0 && ((t.mode & 1) === 0 ? (r = 1) : ((r = ts), (ts <<= 1), (ts & 130023424) === 0 && (ts = 4194304)));
		var o = ut();
		((t = Rn(t, r)), t !== null && (zi(t, r, o), wt(t, o)));
	}
	function qw(t) {
		var r = t.memoizedState,
			o = 0;
		(r !== null && (o = r.retryLane), op(t, o));
	}
	function Zw(t, r) {
		var o = 0;
		switch (t.tag) {
			case 13:
				var l = t.stateNode,
					f = t.memoizedState;
				f !== null && (o = f.retryLane);
				break;
			case 19:
				l = t.stateNode;
				break;
			default:
				throw Error(i(314));
		}
		(l !== null && l.delete(r), op(t, o));
	}
	var sp;
	sp = function (t, r, o) {
		if (t !== null)
			if (t.memoizedProps !== r.pendingProps || mt.current) yt = !0;
			else {
				if ((t.lanes & o) === 0 && (r.flags & 128) === 0) return ((yt = !1), Fw(t, r, o));
				yt = (t.flags & 131072) !== 0;
			}
		else ((yt = !1), Ne && (r.flags & 1048576) !== 0 && Fd(r, Es, r.index));
		switch (((r.lanes = 0), r.tag)) {
			case 2:
				var l = r.type;
				(Vs(t, r), (t = r.pendingProps));
				var f = Jr(r, tt.current);
				(oi(r, o), (f = Ql(null, r, l, t, f, o)));
				var p = Yl();
				return (
					(r.flags |= 1),
					typeof f == 'object' && f !== null && typeof f.render == 'function' && f.$$typeof === void 0
						? ((r.tag = 1),
							(r.memoizedState = null),
							(r.updateQueue = null),
							gt(l) ? ((p = !0), xs(r)) : (p = !1),
							(r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null),
							Bl(r),
							(f.updater = Is),
							(r.stateNode = f),
							(f._reactInternals = r),
							tu(r, l, t, o),
							(r = ou(null, r, l, !0, p, o)))
						: ((r.tag = 0), Ne && p && Dl(r), lt(null, r, f, o), (r = r.child)),
					r
				);
			case 16:
				l = r.elementType;
				e: {
					switch (
						(Vs(t, r),
						(t = r.pendingProps),
						(f = l._init),
						(l = f(l._payload)),
						(r.type = l),
						(f = r.tag = ex(l)),
						(t = Kt(l, t)),
						f)
					) {
						case 0:
							r = iu(null, r, l, t, o);
							break e;
						case 1:
							r = Lh(null, r, l, t, o);
							break e;
						case 11:
							r = bh(null, r, l, t, o);
							break e;
						case 14:
							r = Rh(null, r, l, Kt(l.type, t), o);
							break e;
					}
					throw Error(i(306, l, ''));
				}
				return r;
			case 0:
				return ((l = r.type), (f = r.pendingProps), (f = r.elementType === l ? f : Kt(l, f)), iu(t, r, l, f, o));
			case 1:
				return ((l = r.type), (f = r.pendingProps), (f = r.elementType === l ? f : Kt(l, f)), Lh(t, r, l, f, o));
			case 3:
				e: {
					if ((Oh(r), t === null)) throw Error(i(387));
					((l = r.pendingProps), (p = r.memoizedState), (f = p.element), Qd(t, r), As(r, l, null, o));
					var w = r.memoizedState;
					if (((l = w.element), p.isDehydrated))
						if (
							((p = {
								element: l,
								isDehydrated: !1,
								cache: w.cache,
								pendingSuspenseBoundaries: w.pendingSuspenseBoundaries,
								transitions: w.transitions,
							}),
							(r.updateQueue.baseState = p),
							(r.memoizedState = p),
							r.flags & 256)
						) {
							((f = ai(Error(i(423)), r)), (r = Nh(t, r, l, o, f)));
							break e;
						} else if (l !== f) {
							((f = ai(Error(i(424)), r)), (r = Nh(t, r, l, o, f)));
							break e;
						} else
							for (
								Tt = Kn(r.stateNode.containerInfo.firstChild),
									Pt = r,
									Ne = !0,
									Ht = null,
									o = Kd(r, null, l, o),
									r.child = o;
								o;
							)
								((o.flags = (o.flags & -3) | 4096), (o = o.sibling));
					else {
						if ((ni(), l === f)) {
							r = Mn(t, r, o);
							break e;
						}
						lt(t, r, l, o);
					}
					r = r.child;
				}
				return r;
			case 5:
				return (
					qd(r),
					t === null && Nl(r),
					(l = r.type),
					(f = r.pendingProps),
					(p = t !== null ? t.memoizedProps : null),
					(w = f.children),
					Tl(l, f) ? (w = null) : p !== null && Tl(l, p) && (r.flags |= 32),
					Dh(t, r),
					lt(t, r, w, o),
					r.child
				);
			case 6:
				return (t === null && Nl(r), null);
			case 13:
				return jh(t, r, o);
			case 4:
				return (
					Ul(r, r.stateNode.containerInfo),
					(l = r.pendingProps),
					t === null ? (r.child = ri(r, null, l, o)) : lt(t, r, l, o),
					r.child
				);
			case 11:
				return ((l = r.type), (f = r.pendingProps), (f = r.elementType === l ? f : Kt(l, f)), bh(t, r, l, f, o));
			case 7:
				return (lt(t, r, r.pendingProps, o), r.child);
			case 8:
				return (lt(t, r, r.pendingProps.children, o), r.child);
			case 12:
				return (lt(t, r, r.pendingProps.children, o), r.child);
			case 10:
				e: {
					if (
						((l = r.type._context),
						(f = r.pendingProps),
						(p = r.memoizedProps),
						(w = f.value),
						Ae(ks, l._currentValue),
						(l._currentValue = w),
						p !== null)
					)
						if (Wt(p.value, w)) {
							if (p.children === f.children && !mt.current) {
								r = Mn(t, r, o);
								break e;
							}
						} else
							for (p = r.child, p !== null && (p.return = r); p !== null; ) {
								var T = p.dependencies;
								if (T !== null) {
									w = p.child;
									for (var k = T.firstContext; k !== null; ) {
										if (k.context === l) {
											if (p.tag === 1) {
												((k = An(-1, o & -o)), (k.tag = 2));
												var I = p.updateQueue;
												if (I !== null) {
													I = I.shared;
													var $ = I.pending;
													($ === null ? (k.next = k) : ((k.next = $.next), ($.next = k)), (I.pending = k));
												}
											}
											((p.lanes |= o),
												(k = p.alternate),
												k !== null && (k.lanes |= o),
												Fl(p.return, o, r),
												(T.lanes |= o));
											break;
										}
										k = k.next;
									}
								} else if (p.tag === 10) w = p.type === r.type ? null : p.child;
								else if (p.tag === 18) {
									if (((w = p.return), w === null)) throw Error(i(341));
									((w.lanes |= o), (T = w.alternate), T !== null && (T.lanes |= o), Fl(w, o, r), (w = p.sibling));
								} else w = p.child;
								if (w !== null) w.return = p;
								else
									for (w = p; w !== null; ) {
										if (w === r) {
											w = null;
											break;
										}
										if (((p = w.sibling), p !== null)) {
											((p.return = w.return), (w = p));
											break;
										}
										w = w.return;
									}
								p = w;
							}
					(lt(t, r, f.children, o), (r = r.child));
				}
				return r;
			case 9:
				return (
					(f = r.type),
					(l = r.pendingProps.children),
					oi(r, o),
					(f = Nt(f)),
					(l = l(f)),
					(r.flags |= 1),
					lt(t, r, l, o),
					r.child
				);
			case 14:
				return ((l = r.type), (f = Kt(l, r.pendingProps)), (f = Kt(l.type, f)), Rh(t, r, l, f, o));
			case 15:
				return Ah(t, r, r.type, r.pendingProps, o);
			case 17:
				return (
					(l = r.type),
					(f = r.pendingProps),
					(f = r.elementType === l ? f : Kt(l, f)),
					Vs(t, r),
					(r.tag = 1),
					gt(l) ? ((t = !0), xs(r)) : (t = !1),
					oi(r, o),
					xh(r, l, f),
					tu(r, l, f, o),
					ou(null, r, l, !0, t, o)
				);
			case 19:
				return _h(t, r, o);
			case 22:
				return Mh(t, r, o);
		}
		throw Error(i(156, r.tag));
	};
	function ap(t, r) {
		return zf(t, r);
	}
	function Jw(t, r, o, l) {
		((this.tag = t),
			(this.key = o),
			(this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
			(this.index = 0),
			(this.ref = null),
			(this.pendingProps = r),
			(this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
			(this.mode = l),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null));
	}
	function _t(t, r, o, l) {
		return new Jw(t, r, o, l);
	}
	function Tu(t) {
		return ((t = t.prototype), !(!t || !t.isReactComponent));
	}
	function ex(t) {
		if (typeof t == 'function') return Tu(t) ? 1 : 0;
		if (t != null) {
			if (((t = t.$$typeof), t === J)) return 11;
			if (t === Ce) return 14;
		}
		return 2;
	}
	function rr(t, r) {
		var o = t.alternate;
		return (
			o === null
				? ((o = _t(t.tag, r, t.key, t.mode)),
					(o.elementType = t.elementType),
					(o.type = t.type),
					(o.stateNode = t.stateNode),
					(o.alternate = t),
					(t.alternate = o))
				: ((o.pendingProps = r), (o.type = t.type), (o.flags = 0), (o.subtreeFlags = 0), (o.deletions = null)),
			(o.flags = t.flags & 14680064),
			(o.childLanes = t.childLanes),
			(o.lanes = t.lanes),
			(o.child = t.child),
			(o.memoizedProps = t.memoizedProps),
			(o.memoizedState = t.memoizedState),
			(o.updateQueue = t.updateQueue),
			(r = t.dependencies),
			(o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
			(o.sibling = t.sibling),
			(o.index = t.index),
			(o.ref = t.ref),
			o
		);
	}
	function Ys(t, r, o, l, f, p) {
		var w = 2;
		if (((l = t), typeof t == 'function')) Tu(t) && (w = 1);
		else if (typeof t == 'string') w = 5;
		else
			e: switch (t) {
				case G:
					return Rr(o.children, f, p, r);
				case H:
					((w = 8), (f |= 8));
					break;
				case q:
					return ((t = _t(12, o, r, f | 2)), (t.elementType = q), (t.lanes = p), t);
				case ge:
					return ((t = _t(13, o, r, f)), (t.elementType = ge), (t.lanes = p), t);
				case de:
					return ((t = _t(19, o, r, f)), (t.elementType = de), (t.lanes = p), t);
				case X:
					return Xs(o, f, p, r);
				default:
					if (typeof t == 'object' && t !== null)
						switch (t.$$typeof) {
							case oe:
								w = 10;
								break e;
							case ye:
								w = 9;
								break e;
							case J:
								w = 11;
								break e;
							case Ce:
								w = 14;
								break e;
							case he:
								((w = 16), (l = null));
								break e;
						}
					throw Error(i(130, t == null ? t : typeof t, ''));
			}
		return ((r = _t(w, o, r, f)), (r.elementType = t), (r.type = l), (r.lanes = p), r);
	}
	function Rr(t, r, o, l) {
		return ((t = _t(7, t, l, r)), (t.lanes = o), t);
	}
	function Xs(t, r, o, l) {
		return ((t = _t(22, t, l, r)), (t.elementType = X), (t.lanes = o), (t.stateNode = { isHidden: !1 }), t);
	}
	function ku(t, r, o) {
		return ((t = _t(6, t, null, r)), (t.lanes = o), t);
	}
	function bu(t, r, o) {
		return (
			(r = _t(4, t.children !== null ? t.children : [], t.key, r)),
			(r.lanes = o),
			(r.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }),
			r
		);
	}
	function tx(t, r, o, l, f) {
		((this.tag = r),
			(this.containerInfo = t),
			(this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode = this.pendingContext = this.context = null),
			(this.callbackPriority = 0),
			(this.eventTimes = el(0)),
			(this.expirationTimes = el(-1)),
			(this.entangledLanes =
				this.finishedLanes =
				this.mutableReadLanes =
				this.expiredLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = el(0)),
			(this.identifierPrefix = l),
			(this.onRecoverableError = f),
			(this.mutableSourceEagerHydrationData = null));
	}
	function Ru(t, r, o, l, f, p, w, T, k) {
		return (
			(t = new tx(t, r, o, T, k)),
			r === 1 ? ((r = 1), p === !0 && (r |= 8)) : (r = 0),
			(p = _t(3, null, null, r)),
			(t.current = p),
			(p.stateNode = t),
			(p.memoizedState = {
				element: l,
				isDehydrated: o,
				cache: null,
				transitions: null,
				pendingSuspenseBoundaries: null,
			}),
			Bl(p),
			t
		);
	}
	function nx(t, r, o) {
		var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return { $$typeof: B, key: l == null ? null : '' + l, children: t, containerInfo: r, implementation: o };
	}
	function lp(t) {
		if (!t) return Qn;
		t = t._reactInternals;
		e: {
			if (gr(t) !== t || t.tag !== 1) throw Error(i(170));
			var r = t;
			do {
				switch (r.tag) {
					case 3:
						r = r.stateNode.context;
						break e;
					case 1:
						if (gt(r.type)) {
							r = r.stateNode.__reactInternalMemoizedMergedChildContext;
							break e;
						}
				}
				r = r.return;
			} while (r !== null);
			throw Error(i(171));
		}
		if (t.tag === 1) {
			var o = t.type;
			if (gt(o)) return Id(t, o, r);
		}
		return r;
	}
	function up(t, r, o, l, f, p, w, T, k) {
		return (
			(t = Ru(o, l, !0, t, f, p, w, T, k)),
			(t.context = lp(null)),
			(o = t.current),
			(l = ut()),
			(f = tr(o)),
			(p = An(l, f)),
			(p.callback = r ?? null),
			qn(o, p, f),
			(t.current.lanes = f),
			zi(t, f, l),
			wt(t, l),
			t
		);
	}
	function qs(t, r, o, l) {
		var f = r.current,
			p = ut(),
			w = tr(f);
		return (
			(o = lp(o)),
			r.context === null ? (r.context = o) : (r.pendingContext = o),
			(r = An(p, w)),
			(r.payload = { element: t }),
			(l = l === void 0 ? null : l),
			l !== null && (r.callback = l),
			(t = qn(f, r, w)),
			t !== null && (Yt(t, f, w, p), Rs(t, f, w)),
			w
		);
	}
	function Zs(t) {
		return ((t = t.current), t.child ? (t.child.tag === 5, t.child.stateNode) : null);
	}
	function cp(t, r) {
		if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
			var o = t.retryLane;
			t.retryLane = o !== 0 && o < r ? o : r;
		}
	}
	function Au(t, r) {
		(cp(t, r), (t = t.alternate) && cp(t, r));
	}
	function rx() {
		return null;
	}
	var fp =
		typeof reportError == 'function'
			? reportError
			: function (t) {
					console.error(t);
				};
	function Mu(t) {
		this._internalRoot = t;
	}
	((Js.prototype.render = Mu.prototype.render =
		function (t) {
			var r = this._internalRoot;
			if (r === null) throw Error(i(409));
			qs(t, r, null, null);
		}),
		(Js.prototype.unmount = Mu.prototype.unmount =
			function () {
				var t = this._internalRoot;
				if (t !== null) {
					this._internalRoot = null;
					var r = t.containerInfo;
					(Tr(function () {
						qs(null, t, null, null);
					}),
						(r[Pn] = null));
				}
			}));
	function Js(t) {
		this._internalRoot = t;
	}
	Js.prototype.unstable_scheduleHydration = function (t) {
		if (t) {
			var r = Qf();
			t = { blockedOn: null, target: t, priority: r };
			for (var o = 0; o < $n.length && r !== 0 && r < $n[o].priority; o++);
			($n.splice(o, 0, t), o === 0 && qf(t));
		}
	};
	function Du(t) {
		return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
	}
	function ea(t) {
		return !(
			!t ||
			(t.nodeType !== 1 &&
				t.nodeType !== 9 &&
				t.nodeType !== 11 &&
				(t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
		);
	}
	function dp() {}
	function ix(t, r, o, l, f) {
		if (f) {
			if (typeof l == 'function') {
				var p = l;
				l = function () {
					var I = Zs(w);
					p.call(I);
				};
			}
			var w = up(r, l, t, 0, null, !1, !1, '', dp);
			return ((t._reactRootContainer = w), (t[Pn] = w.current), eo(t.nodeType === 8 ? t.parentNode : t), Tr(), w);
		}
		for (; (f = t.lastChild); ) t.removeChild(f);
		if (typeof l == 'function') {
			var T = l;
			l = function () {
				var I = Zs(k);
				T.call(I);
			};
		}
		var k = Ru(t, 0, !1, null, null, !1, !1, '', dp);
		return (
			(t._reactRootContainer = k),
			(t[Pn] = k.current),
			eo(t.nodeType === 8 ? t.parentNode : t),
			Tr(function () {
				qs(r, k, o, l);
			}),
			k
		);
	}
	function ta(t, r, o, l, f) {
		var p = o._reactRootContainer;
		if (p) {
			var w = p;
			if (typeof f == 'function') {
				var T = f;
				f = function () {
					var k = Zs(w);
					T.call(k);
				};
			}
			qs(r, w, t, f);
		} else w = ix(o, r, t, f, l);
		return Zs(w);
	}
	((Kf = function (t) {
		switch (t.tag) {
			case 3:
				var r = t.stateNode;
				if (r.current.memoizedState.isDehydrated) {
					var o = Fi(r.pendingLanes);
					o !== 0 && (tl(r, o | 1), wt(r, ze()), (Ee & 6) === 0 && ((ci = ze() + 500), Yn()));
				}
				break;
			case 13:
				(Tr(function () {
					var l = Rn(t, 1);
					if (l !== null) {
						var f = ut();
						Yt(l, t, 1, f);
					}
				}),
					Au(t, 1));
		}
	}),
		(nl = function (t) {
			if (t.tag === 13) {
				var r = Rn(t, 134217728);
				if (r !== null) {
					var o = ut();
					Yt(r, t, 134217728, o);
				}
				Au(t, 134217728);
			}
		}),
		(Gf = function (t) {
			if (t.tag === 13) {
				var r = tr(t),
					o = Rn(t, r);
				if (o !== null) {
					var l = ut();
					Yt(o, t, r, l);
				}
				Au(t, r);
			}
		}),
		(Qf = function () {
			return be;
		}),
		(Yf = function (t, r) {
			var o = be;
			try {
				return ((be = t), r());
			} finally {
				be = o;
			}
		}),
		($r = function (t, r, o) {
			switch (r) {
				case 'input':
					if ((Ni(t, o), (r = o.name), o.type === 'radio' && r != null)) {
						for (o = t; o.parentNode; ) o = o.parentNode;
						for (
							o = o.querySelectorAll('input[name=' + JSON.stringify('' + r) + '][type="radio"]'), r = 0;
							r < o.length;
							r++
						) {
							var l = o[r];
							if (l !== t && l.form === t.form) {
								var f = vs(l);
								if (!f) throw Error(i(90));
								(_n(l), Ni(l, f));
							}
						}
					}
					break;
				case 'textarea':
					Wo(t, o);
					break;
				case 'select':
					((r = o.value), r != null && Dt(t, !!o.multiple, r, !1));
			}
		}),
		(ke = Cu),
		(Re = Tr));
	var ox = { usingClientEntryPoint: !1, Events: [ro, qr, vs, Yo, me, Cu] },
		vo = { findFiberByHostInstance: yr, bundleType: 0, version: '18.3.1', rendererPackageName: 'react-dom' },
		sx = {
			bundleType: vo.bundleType,
			version: vo.version,
			rendererPackageName: vo.rendererPackageName,
			rendererConfig: vo.rendererConfig,
			overrideHookState: null,
			overrideHookStateDeletePath: null,
			overrideHookStateRenamePath: null,
			overrideProps: null,
			overridePropsDeletePath: null,
			overridePropsRenamePath: null,
			setErrorHandler: null,
			setSuspenseHandler: null,
			scheduleUpdate: null,
			currentDispatcherRef: O.ReactCurrentDispatcher,
			findHostInstanceByFiber: function (t) {
				return ((t = Vf(t)), t === null ? null : t.stateNode);
			},
			findFiberByHostInstance: vo.findFiberByHostInstance || rx,
			findHostInstancesForRefresh: null,
			scheduleRefresh: null,
			scheduleRoot: null,
			setRefreshHandler: null,
			getCurrentFiber: null,
			reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
		};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
		var na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!na.isDisabled && na.supportsFiber)
			try {
				((Jo = na.inject(sx)), (fn = na));
			} catch {}
	}
	return (
		(xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ox),
		(xt.createPortal = function (t, r) {
			var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!Du(r)) throw Error(i(200));
			return nx(t, r, null, o);
		}),
		(xt.createRoot = function (t, r) {
			if (!Du(t)) throw Error(i(299));
			var o = !1,
				l = '',
				f = fp;
			return (
				r != null &&
					(r.unstable_strictMode === !0 && (o = !0),
					r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
					r.onRecoverableError !== void 0 && (f = r.onRecoverableError)),
				(r = Ru(t, 1, !1, null, null, o, !1, l, f)),
				(t[Pn] = r.current),
				eo(t.nodeType === 8 ? t.parentNode : t),
				new Mu(r)
			);
		}),
		(xt.findDOMNode = function (t) {
			if (t == null) return null;
			if (t.nodeType === 1) return t;
			var r = t._reactInternals;
			if (r === void 0)
				throw typeof t.render == 'function' ? Error(i(188)) : ((t = Object.keys(t).join(',')), Error(i(268, t)));
			return ((t = Vf(r)), (t = t === null ? null : t.stateNode), t);
		}),
		(xt.flushSync = function (t) {
			return Tr(t);
		}),
		(xt.hydrate = function (t, r, o) {
			if (!ea(r)) throw Error(i(200));
			return ta(null, t, r, !0, o);
		}),
		(xt.hydrateRoot = function (t, r, o) {
			if (!Du(t)) throw Error(i(405));
			var l = (o != null && o.hydratedSources) || null,
				f = !1,
				p = '',
				w = fp;
			if (
				(o != null &&
					(o.unstable_strictMode === !0 && (f = !0),
					o.identifierPrefix !== void 0 && (p = o.identifierPrefix),
					o.onRecoverableError !== void 0 && (w = o.onRecoverableError)),
				(r = up(r, null, t, 1, o ?? null, f, !1, p, w)),
				(t[Pn] = r.current),
				eo(t),
				l)
			)
				for (t = 0; t < l.length; t++)
					((o = l[t]),
						(f = o._getVersion),
						(f = f(o._source)),
						r.mutableSourceEagerHydrationData == null
							? (r.mutableSourceEagerHydrationData = [o, f])
							: r.mutableSourceEagerHydrationData.push(o, f));
			return new Js(r);
		}),
		(xt.render = function (t, r, o) {
			if (!ea(r)) throw Error(i(200));
			return ta(null, t, r, !1, o);
		}),
		(xt.unmountComponentAtNode = function (t) {
			if (!ea(t)) throw Error(i(40));
			return t._reactRootContainer
				? (Tr(function () {
						ta(null, null, t, !1, function () {
							((t._reactRootContainer = null), (t[Pn] = null));
						});
					}),
					!0)
				: !1;
		}),
		(xt.unstable_batchedUpdates = Cu),
		(xt.unstable_renderSubtreeIntoContainer = function (t, r, o, l) {
			if (!ea(o)) throw Error(i(200));
			if (t == null || t._reactInternals === void 0) throw Error(i(38));
			return ta(t, r, o, !1, l);
		}),
		(xt.version = '18.3.1-next-f1338f8080-20240426'),
		xt
	);
}
var xp;
function Pg() {
	if (xp) return Nu.exports;
	xp = 1;
	function e() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
			} catch (n) {
				console.error(n);
			}
	}
	return (e(), (Nu.exports = px()), Nu.exports);
}
var Sp;
function mx() {
	if (Sp) return ra;
	Sp = 1;
	var e = Pg();
	return ((ra.createRoot = e.createRoot), (ra.hydrateRoot = e.hydrateRoot), ra);
}
var gx = mx(),
	C = zc();
const Y = Eg(C),
	yx = lx({ __proto__: null, default: Y }, [C]);
var xa = ['light', 'dark'],
	Bc = '(prefers-color-scheme: dark)',
	vx = typeof window > 'u',
	Uc = C.createContext(void 0),
	wx = { setTheme: e => {}, themes: [] },
	Tg = () => {
		var e;
		return (e = C.useContext(Uc)) != null ? e : wx;
	},
	xx = e => (C.useContext(Uc) ? e.children : C.createElement(Cx, { ...e })),
	Sx = ['light', 'dark'],
	Cx = ({
		forcedTheme: e,
		disableTransitionOnChange: n = !1,
		enableSystem: i = !0,
		enableColorScheme: s = !0,
		storageKey: a = 'theme',
		themes: u = Sx,
		defaultTheme: c = i ? 'system' : 'light',
		attribute: d = 'data-theme',
		value: h,
		children: m,
		nonce: g,
	}) => {
		let [y, x] = C.useState(() => Cp(a, c)),
			[v, S] = C.useState(() => Cp(a)),
			P = h ? Object.values(h) : u,
			E = C.useCallback(O => {
				let _ = O;
				if (!_) return;
				O === 'system' && i && (_ = Ep());
				let B = h ? h[_] : _,
					G = n ? Px() : null,
					H = document.documentElement;
				if (
					(d === 'class'
						? (H.classList.remove(...P), B && H.classList.add(B))
						: B
							? H.setAttribute(d, B)
							: H.removeAttribute(d),
					s)
				) {
					let q = xa.includes(c) ? c : null,
						oe = xa.includes(_) ? _ : q;
					H.style.colorScheme = oe;
				}
				G?.();
			}, []),
			b = C.useCallback(
				O => {
					let _ = typeof O == 'function' ? O(O) : O;
					x(_);
					try {
						localStorage.setItem(a, _);
					} catch {}
				},
				[e],
			),
			M = C.useCallback(
				O => {
					let _ = Ep(O);
					(S(_), y === 'system' && i && !e && E('system'));
				},
				[y, e],
			);
		(C.useEffect(() => {
			let O = window.matchMedia(Bc);
			return (O.addListener(M), M(O), () => O.removeListener(M));
		}, [M]),
			C.useEffect(() => {
				let O = _ => {
					if (_.key !== a) return;
					let B = _.newValue || c;
					b(B);
				};
				return (window.addEventListener('storage', O), () => window.removeEventListener('storage', O));
			}, [b]),
			C.useEffect(() => {
				E(e ?? y);
			}, [e, y]));
		let D = C.useMemo(
			() => ({
				theme: y,
				setTheme: b,
				forcedTheme: e,
				resolvedTheme: y === 'system' ? v : y,
				themes: i ? [...u, 'system'] : u,
				systemTheme: i ? v : void 0,
			}),
			[y, b, e, v, i, u],
		);
		return C.createElement(
			Uc.Provider,
			{ value: D },
			C.createElement(Ex, {
				forcedTheme: e,
				disableTransitionOnChange: n,
				enableSystem: i,
				enableColorScheme: s,
				storageKey: a,
				themes: u,
				defaultTheme: c,
				attribute: d,
				value: h,
				children: m,
				attrs: P,
				nonce: g,
			}),
			m,
		);
	},
	Ex = C.memo(
		({
			forcedTheme: e,
			storageKey: n,
			attribute: i,
			enableSystem: s,
			enableColorScheme: a,
			defaultTheme: u,
			value: c,
			attrs: d,
			nonce: h,
		}) => {
			let m = u === 'system',
				g =
					i === 'class'
						? `var d=document.documentElement,c=d.classList;${`c.remove(${d.map(S => `'${S}'`).join(',')})`};`
						: `var d=document.documentElement,n='${i}',s='setAttribute';`,
				y = a
					? xa.includes(u) && u
						? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`
						: "if(e==='light'||e==='dark')d.style.colorScheme=e"
					: '',
				x = (S, P = !1, E = !0) => {
					let b = c ? c[S] : S,
						M = P ? S + "|| ''" : `'${b}'`,
						D = '';
					return (
						a && E && !P && xa.includes(S) && (D += `d.style.colorScheme = '${S}';`),
						i === 'class' ? (P || b ? (D += `c.add(${M})`) : (D += 'null')) : b && (D += `d[s](n,${M})`),
						D
					);
				},
				v = e
					? `!function(){${g}${x(e)}}()`
					: s
						? `!function(){try{${g}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${m})){var t='${Bc}',m=window.matchMedia(t);if(m.media!==t||m.matches){${x('dark')}}else{${x('light')}}}else if(e){${c ? `var x=${JSON.stringify(c)};` : ''}${x(c ? 'x[e]' : 'e', !0)}}${m ? '' : 'else{' + x(u, !1, !1) + '}'}${y}}catch(e){}}()`
						: `!function(){try{${g}var e=localStorage.getItem('${n}');if(e){${c ? `var x=${JSON.stringify(c)};` : ''}${x(c ? 'x[e]' : 'e', !0)}}else{${x(u, !1, !1)};}${y}}catch(t){}}();`;
			return C.createElement('script', { nonce: h, dangerouslySetInnerHTML: { __html: v } });
		},
	),
	Cp = (e, n) => {
		if (vx) return;
		let i;
		try {
			i = localStorage.getItem(e) || void 0;
		} catch {}
		return i || n;
	},
	Px = () => {
		let e = document.createElement('style');
		return (
			e.appendChild(
				document.createTextNode(
					'*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}',
				),
			),
			document.head.appendChild(e),
			() => {
				(window.getComputedStyle(document.body),
					setTimeout(() => {
						document.head.removeChild(e);
					}, 1));
			}
		);
	},
	Ep = e => (e || (e = window.matchMedia(Bc)), e.matches ? 'dark' : 'light'),
	$c = Pg();
const Tx = Eg($c);
var kx = e => {
		switch (e) {
			case 'success':
				return Ax;
			case 'info':
				return Dx;
			case 'warning':
				return Mx;
			case 'error':
				return Lx;
			default:
				return null;
		}
	},
	bx = Array(12).fill(0),
	Rx = ({ visible: e, className: n }) =>
		Y.createElement(
			'div',
			{ className: ['sonner-loading-wrapper', n].filter(Boolean).join(' '), 'data-visible': e },
			Y.createElement(
				'div',
				{ className: 'sonner-spinner' },
				bx.map((i, s) => Y.createElement('div', { className: 'sonner-loading-bar', key: `spinner-bar-${s}` })),
			),
		),
	Ax = Y.createElement(
		'svg',
		{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', fill: 'currentColor', height: '20', width: '20' },
		Y.createElement('path', {
			fillRule: 'evenodd',
			d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
			clipRule: 'evenodd',
		}),
	),
	Mx = Y.createElement(
		'svg',
		{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'currentColor', height: '20', width: '20' },
		Y.createElement('path', {
			fillRule: 'evenodd',
			d: 'M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z',
			clipRule: 'evenodd',
		}),
	),
	Dx = Y.createElement(
		'svg',
		{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', fill: 'currentColor', height: '20', width: '20' },
		Y.createElement('path', {
			fillRule: 'evenodd',
			d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
			clipRule: 'evenodd',
		}),
	),
	Lx = Y.createElement(
		'svg',
		{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 20 20', fill: 'currentColor', height: '20', width: '20' },
		Y.createElement('path', {
			fillRule: 'evenodd',
			d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
			clipRule: 'evenodd',
		}),
	),
	Ox = Y.createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			width: '12',
			height: '12',
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: '1.5',
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
		},
		Y.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
		Y.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' }),
	),
	Nx = () => {
		let [e, n] = Y.useState(document.hidden);
		return (
			Y.useEffect(() => {
				let i = () => {
					n(document.hidden);
				};
				return (
					document.addEventListener('visibilitychange', i),
					() => window.removeEventListener('visibilitychange', i)
				);
			}, []),
			e
		);
	},
	rc = 1,
	jx = class {
		constructor() {
			((this.subscribe = e => (
				this.subscribers.push(e),
				() => {
					let n = this.subscribers.indexOf(e);
					this.subscribers.splice(n, 1);
				}
			)),
				(this.publish = e => {
					this.subscribers.forEach(n => n(e));
				}),
				(this.addToast = e => {
					(this.publish(e), (this.toasts = [...this.toasts, e]));
				}),
				(this.create = e => {
					var n;
					let { message: i, ...s } = e,
						a = typeof e?.id == 'number' || ((n = e.id) == null ? void 0 : n.length) > 0 ? e.id : rc++,
						u = this.toasts.find(d => d.id === a),
						c = e.dismissible === void 0 ? !0 : e.dismissible;
					return (
						this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
						u
							? (this.toasts = this.toasts.map(d =>
									d.id === a
										? (this.publish({ ...d, ...e, id: a, title: i }), { ...d, ...e, id: a, dismissible: c, title: i })
										: d,
								))
							: this.addToast({ title: i, ...s, dismissible: c, id: a }),
						a
					);
				}),
				(this.dismiss = e => (
					this.dismissedToasts.add(e),
					e ||
						this.toasts.forEach(n => {
							this.subscribers.forEach(i => i({ id: n.id, dismiss: !0 }));
						}),
					this.subscribers.forEach(n => n({ id: e, dismiss: !0 })),
					e
				)),
				(this.message = (e, n) => this.create({ ...n, message: e })),
				(this.error = (e, n) => this.create({ ...n, message: e, type: 'error' })),
				(this.success = (e, n) => this.create({ ...n, type: 'success', message: e })),
				(this.info = (e, n) => this.create({ ...n, type: 'info', message: e })),
				(this.warning = (e, n) => this.create({ ...n, type: 'warning', message: e })),
				(this.loading = (e, n) => this.create({ ...n, type: 'loading', message: e })),
				(this.promise = (e, n) => {
					if (!n) return;
					let i;
					n.loading !== void 0 &&
						(i = this.create({
							...n,
							promise: e,
							type: 'loading',
							message: n.loading,
							description: typeof n.description != 'function' ? n.description : void 0,
						}));
					let s = e instanceof Promise ? e : e(),
						a = i !== void 0,
						u,
						c = s
							.then(async h => {
								if (((u = ['resolve', h]), Y.isValidElement(h)))
									((a = !1), this.create({ id: i, type: 'default', message: h }));
								else if (_x(h) && !h.ok) {
									a = !1;
									let m = typeof n.error == 'function' ? await n.error(`HTTP error! status: ${h.status}`) : n.error,
										g =
											typeof n.description == 'function'
												? await n.description(`HTTP error! status: ${h.status}`)
												: n.description;
									this.create({ id: i, type: 'error', message: m, description: g });
								} else if (n.success !== void 0) {
									a = !1;
									let m = typeof n.success == 'function' ? await n.success(h) : n.success,
										g = typeof n.description == 'function' ? await n.description(h) : n.description;
									this.create({ id: i, type: 'success', message: m, description: g });
								}
							})
							.catch(async h => {
								if (((u = ['reject', h]), n.error !== void 0)) {
									a = !1;
									let m = typeof n.error == 'function' ? await n.error(h) : n.error,
										g = typeof n.description == 'function' ? await n.description(h) : n.description;
									this.create({ id: i, type: 'error', message: m, description: g });
								}
							})
							.finally(() => {
								var h;
								(a && (this.dismiss(i), (i = void 0)), (h = n.finally) == null || h.call(n));
							}),
						d = () => new Promise((h, m) => c.then(() => (u[0] === 'reject' ? m(u[1]) : h(u[1]))).catch(m));
					return typeof i != 'string' && typeof i != 'number' ? { unwrap: d } : Object.assign(i, { unwrap: d });
				}),
				(this.custom = (e, n) => {
					let i = n?.id || rc++;
					return (this.create({ jsx: e(i), id: i, ...n }), i);
				}),
				(this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id))),
				(this.subscribers = []),
				(this.toasts = []),
				(this.dismissedToasts = new Set()));
		}
	},
	St = new jx(),
	Ix = (e, n) => {
		let i = n?.id || rc++;
		return (St.addToast({ title: e, ...n, id: i }), i);
	},
	_x = e =>
		e && typeof e == 'object' && 'ok' in e && typeof e.ok == 'boolean' && 'status' in e && typeof e.status == 'number',
	Vx = Ix,
	Fx = () => St.toasts,
	zx = () => St.getActiveToasts(),
	V2 = Object.assign(
		Vx,
		{
			success: St.success,
			info: St.info,
			warning: St.warning,
			error: St.error,
			custom: St.custom,
			message: St.message,
			promise: St.promise,
			dismiss: St.dismiss,
			loading: St.loading,
		},
		{ getHistory: Fx, getToasts: zx },
	);
function Bx(e, { insertAt: n } = {}) {
	if (typeof document > 'u') return;
	let i = document.head || document.getElementsByTagName('head')[0],
		s = document.createElement('style');
	((s.type = 'text/css'),
		n === 'top' && i.firstChild ? i.insertBefore(s, i.firstChild) : i.appendChild(s),
		s.styleSheet ? (s.styleSheet.cssText = e) : s.appendChild(document.createTextNode(e)));
}
Bx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ia(e) {
	return e.label !== void 0;
}
var Ux = 3,
	$x = '32px',
	Wx = '16px',
	Pp = 4e3,
	Hx = 356,
	Kx = 14,
	Gx = 20,
	Qx = 200;
function Xt(...e) {
	return e.filter(Boolean).join(' ');
}
function Yx(e) {
	let [n, i] = e.split('-'),
		s = [];
	return (n && s.push(n), i && s.push(i), s);
}
var Xx = e => {
	var n, i, s, a, u, c, d, h, m, g, y;
	let {
			invert: x,
			toast: v,
			unstyled: S,
			interacting: P,
			setHeights: E,
			visibleToasts: b,
			heights: M,
			index: D,
			toasts: O,
			expanded: _,
			removeToast: B,
			defaultRichColors: G,
			closeButton: H,
			style: q,
			cancelButtonStyle: oe,
			actionButtonStyle: ye,
			className: J = '',
			descriptionClassName: ge = '',
			duration: de,
			position: Ce,
			gap: he,
			loadingIcon: X,
			expandByDefault: F,
			classNames: z,
			icons: W,
			closeButtonAriaLabel: A = 'Close toast',
			pauseWhenPageIsHidden: V,
		} = e,
		[ee, ie] = Y.useState(null),
		[fe, ve] = Y.useState(null),
		[le, Se] = Y.useState(!1),
		[Pe, Ue] = Y.useState(!1),
		[At, _n] = Y.useState(!1),
		[Mt, Li] = Y.useState(!1),
		[$o, Oi] = Y.useState(!1),
		[Ni, Vr] = Y.useState(0),
		[ji, Vn] = Y.useState(0),
		Dt = Y.useRef(v.duration || de || Pp),
		Fr = Y.useRef(null),
		on = Y.useRef(null),
		Wo = D === 0,
		Ho = D + 1 <= b,
		st = v.type,
		sn = v.dismissible !== !1,
		zr = v.className || '',
		Ko = v.descriptionClassName || '',
		an = Y.useMemo(() => M.findIndex(me => me.toastId === v.id) || 0, [M, v.id]),
		mr = Y.useMemo(() => {
			var me;
			return (me = v.closeButton) != null ? me : H;
		}, [v.closeButton, H]),
		Go = Y.useMemo(() => v.duration || de || Pp, [v.duration, de]),
		Br = Y.useRef(0),
		En = Y.useRef(0),
		Qo = Y.useRef(0),
		ln = Y.useRef(null),
		[Ii, _i] = Ce.split('-'),
		Ur = Y.useMemo(() => M.reduce((me, ke, Re) => (Re >= an ? me : me + ke.height), 0), [M, an]),
		$r = Nx(),
		Fn = v.invert || x,
		un = st === 'loading';
	((En.current = Y.useMemo(() => an * he + Ur, [an, Ur])),
		Y.useEffect(() => {
			Dt.current = Go;
		}, [Go]),
		Y.useEffect(() => {
			Se(!0);
		}, []),
		Y.useEffect(() => {
			let me = on.current;
			if (me) {
				let ke = me.getBoundingClientRect().height;
				return (
					Vn(ke),
					E(Re => [{ toastId: v.id, height: ke, position: v.position }, ...Re]),
					() => E(Re => Re.filter(at => at.toastId !== v.id))
				);
			}
		}, [E, v.id]),
		Y.useLayoutEffect(() => {
			if (!le) return;
			let me = on.current,
				ke = me.style.height;
			me.style.height = 'auto';
			let Re = me.getBoundingClientRect().height;
			((me.style.height = ke),
				Vn(Re),
				E(at =>
					at.find(ht => ht.toastId === v.id)
						? at.map(ht => (ht.toastId === v.id ? { ...ht, height: Re } : ht))
						: [{ toastId: v.id, height: Re, position: v.position }, ...at],
				));
		}, [le, v.title, v.description, E, v.id]));
	let Bt = Y.useCallback(() => {
		(Ue(!0),
			Vr(En.current),
			E(me => me.filter(ke => ke.toastId !== v.id)),
			setTimeout(() => {
				B(v);
			}, Qx));
	}, [v, B, E, En]);
	(Y.useEffect(() => {
		if ((v.promise && st === 'loading') || v.duration === 1 / 0 || v.type === 'loading') return;
		let me;
		return (
			_ || P || (V && $r)
				? (() => {
						if (Qo.current < Br.current) {
							let ke = new Date().getTime() - Br.current;
							Dt.current = Dt.current - ke;
						}
						Qo.current = new Date().getTime();
					})()
				: Dt.current !== 1 / 0 &&
					((Br.current = new Date().getTime()),
					(me = setTimeout(() => {
						var ke;
						((ke = v.onAutoClose) == null || ke.call(v, v), Bt());
					}, Dt.current))),
			() => clearTimeout(me)
		);
	}, [_, P, v, st, V, $r, Bt]),
		Y.useEffect(() => {
			v.delete && Bt();
		}, [Bt, v.delete]));
	function Yo() {
		var me, ke, Re;
		return W != null && W.loading
			? Y.createElement(
					'div',
					{
						className: Xt(z?.loader, (me = v?.classNames) == null ? void 0 : me.loader, 'sonner-loader'),
						'data-visible': st === 'loading',
					},
					W.loading,
				)
			: X
				? Y.createElement(
						'div',
						{
							className: Xt(z?.loader, (ke = v?.classNames) == null ? void 0 : ke.loader, 'sonner-loader'),
							'data-visible': st === 'loading',
						},
						X,
					)
				: Y.createElement(Rx, {
						className: Xt(z?.loader, (Re = v?.classNames) == null ? void 0 : Re.loader),
						visible: st === 'loading',
					});
	}
	return Y.createElement(
		'li',
		{
			tabIndex: 0,
			ref: on,
			className: Xt(
				J,
				zr,
				z?.toast,
				(n = v?.classNames) == null ? void 0 : n.toast,
				z?.default,
				z?.[st],
				(i = v?.classNames) == null ? void 0 : i[st],
			),
			'data-sonner-toast': '',
			'data-rich-colors': (s = v.richColors) != null ? s : G,
			'data-styled': !(v.jsx || v.unstyled || S),
			'data-mounted': le,
			'data-promise': !!v.promise,
			'data-swiped': $o,
			'data-removed': Pe,
			'data-visible': Ho,
			'data-y-position': Ii,
			'data-x-position': _i,
			'data-index': D,
			'data-front': Wo,
			'data-swiping': At,
			'data-dismissible': sn,
			'data-type': st,
			'data-invert': Fn,
			'data-swipe-out': Mt,
			'data-swipe-direction': fe,
			'data-expanded': !!(_ || (F && le)),
			style: {
				'--index': D,
				'--toasts-before': D,
				'--z-index': O.length - D,
				'--offset': `${Pe ? Ni : En.current}px`,
				'--initial-height': F ? 'auto' : `${ji}px`,
				...q,
				...v.style,
			},
			onDragEnd: () => {
				(_n(!1), ie(null), (ln.current = null));
			},
			onPointerDown: me => {
				un ||
					!sn ||
					((Fr.current = new Date()),
					Vr(En.current),
					me.target.setPointerCapture(me.pointerId),
					me.target.tagName !== 'BUTTON' && (_n(!0), (ln.current = { x: me.clientX, y: me.clientY })));
			},
			onPointerUp: () => {
				var me, ke, Re, at;
				if (Mt || !sn) return;
				ln.current = null;
				let ht = Number(
						((me = on.current) == null ? void 0 : me.style.getPropertyValue('--swipe-amount-x').replace('px', '')) || 0,
					),
					pt = Number(
						((ke = on.current) == null ? void 0 : ke.style.getPropertyValue('--swipe-amount-y').replace('px', '')) || 0,
					),
					Ut = new Date().getTime() - ((Re = Fr.current) == null ? void 0 : Re.getTime()),
					qe = ee === 'x' ? ht : pt,
					cn = Math.abs(qe) / Ut;
				if (Math.abs(qe) >= Gx || cn > 0.11) {
					(Vr(En.current),
						(at = v.onDismiss) == null || at.call(v, v),
						ve(ee === 'x' ? (ht > 0 ? 'right' : 'left') : pt > 0 ? 'down' : 'up'),
						Bt(),
						Li(!0),
						Oi(!1));
					return;
				}
				(_n(!1), ie(null));
			},
			onPointerMove: me => {
				var ke, Re, at, ht;
				if (!ln.current || !sn || ((ke = window.getSelection()) == null ? void 0 : ke.toString().length) > 0) return;
				let pt = me.clientY - ln.current.y,
					Ut = me.clientX - ln.current.x,
					qe = (Re = e.swipeDirections) != null ? Re : Yx(Ce);
				!ee && (Math.abs(Ut) > 1 || Math.abs(pt) > 1) && ie(Math.abs(Ut) > Math.abs(pt) ? 'x' : 'y');
				let cn = { x: 0, y: 0 };
				(ee === 'y'
					? (qe.includes('top') || qe.includes('bottom')) &&
						((qe.includes('top') && pt < 0) || (qe.includes('bottom') && pt > 0)) &&
						(cn.y = pt)
					: ee === 'x' &&
						(qe.includes('left') || qe.includes('right')) &&
						((qe.includes('left') && Ut < 0) || (qe.includes('right') && Ut > 0)) &&
						(cn.x = Ut),
					(Math.abs(cn.x) > 0 || Math.abs(cn.y) > 0) && Oi(!0),
					(at = on.current) == null || at.style.setProperty('--swipe-amount-x', `${cn.x}px`),
					(ht = on.current) == null || ht.style.setProperty('--swipe-amount-y', `${cn.y}px`));
			},
		},
		mr && !v.jsx
			? Y.createElement(
					'button',
					{
						'aria-label': A,
						'data-disabled': un,
						'data-close-button': !0,
						onClick:
							un || !sn
								? () => {}
								: () => {
										var me;
										(Bt(), (me = v.onDismiss) == null || me.call(v, v));
									},
						className: Xt(z?.closeButton, (a = v?.classNames) == null ? void 0 : a.closeButton),
					},
					(u = W?.close) != null ? u : Ox,
				)
			: null,
		v.jsx || C.isValidElement(v.title)
			? v.jsx
				? v.jsx
				: typeof v.title == 'function'
					? v.title()
					: v.title
			: Y.createElement(
					Y.Fragment,
					null,
					st || v.icon || v.promise
						? Y.createElement(
								'div',
								{ 'data-icon': '', className: Xt(z?.icon, (c = v?.classNames) == null ? void 0 : c.icon) },
								v.promise || (v.type === 'loading' && !v.icon) ? v.icon || Yo() : null,
								v.type !== 'loading' ? v.icon || W?.[st] || kx(st) : null,
							)
						: null,
					Y.createElement(
						'div',
						{ 'data-content': '', className: Xt(z?.content, (d = v?.classNames) == null ? void 0 : d.content) },
						Y.createElement(
							'div',
							{ 'data-title': '', className: Xt(z?.title, (h = v?.classNames) == null ? void 0 : h.title) },
							typeof v.title == 'function' ? v.title() : v.title,
						),
						v.description
							? Y.createElement(
									'div',
									{
										'data-description': '',
										className: Xt(ge, Ko, z?.description, (m = v?.classNames) == null ? void 0 : m.description),
									},
									typeof v.description == 'function' ? v.description() : v.description,
								)
							: null,
					),
					C.isValidElement(v.cancel)
						? v.cancel
						: v.cancel && ia(v.cancel)
							? Y.createElement(
									'button',
									{
										'data-button': !0,
										'data-cancel': !0,
										style: v.cancelButtonStyle || oe,
										onClick: me => {
											var ke, Re;
											ia(v.cancel) && sn && ((Re = (ke = v.cancel).onClick) == null || Re.call(ke, me), Bt());
										},
										className: Xt(z?.cancelButton, (g = v?.classNames) == null ? void 0 : g.cancelButton),
									},
									v.cancel.label,
								)
							: null,
					C.isValidElement(v.action)
						? v.action
						: v.action && ia(v.action)
							? Y.createElement(
									'button',
									{
										'data-button': !0,
										'data-action': !0,
										style: v.actionButtonStyle || ye,
										onClick: me => {
											var ke, Re;
											ia(v.action) &&
												((Re = (ke = v.action).onClick) == null || Re.call(ke, me), !me.defaultPrevented && Bt());
										},
										className: Xt(z?.actionButton, (y = v?.classNames) == null ? void 0 : y.actionButton),
									},
									v.action.label,
								)
							: null,
				),
	);
};
function Tp() {
	if (typeof window > 'u' || typeof document > 'u') return 'ltr';
	let e = document.documentElement.getAttribute('dir');
	return e === 'auto' || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function qx(e, n) {
	let i = {};
	return (
		[e, n].forEach((s, a) => {
			let u = a === 1,
				c = u ? '--mobile-offset' : '--offset',
				d = u ? Wx : $x;
			function h(m) {
				['top', 'right', 'bottom', 'left'].forEach(g => {
					i[`${c}-${g}`] = typeof m == 'number' ? `${m}px` : m;
				});
			}
			typeof s == 'number' || typeof s == 'string'
				? h(s)
				: typeof s == 'object'
					? ['top', 'right', 'bottom', 'left'].forEach(m => {
							s[m] === void 0 ? (i[`${c}-${m}`] = d) : (i[`${c}-${m}`] = typeof s[m] == 'number' ? `${s[m]}px` : s[m]);
						})
					: h(d);
		}),
		i
	);
}
var Zx = C.forwardRef(function (e, n) {
	let {
			invert: i,
			position: s = 'bottom-right',
			hotkey: a = ['altKey', 'KeyT'],
			expand: u,
			closeButton: c,
			className: d,
			offset: h,
			mobileOffset: m,
			theme: g = 'light',
			richColors: y,
			duration: x,
			style: v,
			visibleToasts: S = Ux,
			toastOptions: P,
			dir: E = Tp(),
			gap: b = Kx,
			loadingIcon: M,
			icons: D,
			containerAriaLabel: O = 'Notifications',
			pauseWhenPageIsHidden: _,
		} = e,
		[B, G] = Y.useState([]),
		H = Y.useMemo(() => Array.from(new Set([s].concat(B.filter(V => V.position).map(V => V.position)))), [B, s]),
		[q, oe] = Y.useState([]),
		[ye, J] = Y.useState(!1),
		[ge, de] = Y.useState(!1),
		[Ce, he] = Y.useState(
			g !== 'system'
				? g
				: typeof window < 'u' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light',
		),
		X = Y.useRef(null),
		F = a.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
		z = Y.useRef(null),
		W = Y.useRef(!1),
		A = Y.useCallback(V => {
			G(ee => {
				var ie;
				return (
					((ie = ee.find(fe => fe.id === V.id)) != null && ie.delete) || St.dismiss(V.id),
					ee.filter(({ id: fe }) => fe !== V.id)
				);
			});
		}, []);
	return (
		Y.useEffect(
			() =>
				St.subscribe(V => {
					if (V.dismiss) {
						G(ee => ee.map(ie => (ie.id === V.id ? { ...ie, delete: !0 } : ie)));
						return;
					}
					setTimeout(() => {
						Tx.flushSync(() => {
							G(ee => {
								let ie = ee.findIndex(fe => fe.id === V.id);
								return ie !== -1 ? [...ee.slice(0, ie), { ...ee[ie], ...V }, ...ee.slice(ie + 1)] : [V, ...ee];
							});
						});
					});
				}),
			[],
		),
		Y.useEffect(() => {
			if (g !== 'system') {
				he(g);
				return;
			}
			if (
				(g === 'system' &&
					(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? he('dark') : he('light')),
				typeof window > 'u')
			)
				return;
			let V = window.matchMedia('(prefers-color-scheme: dark)');
			try {
				V.addEventListener('change', ({ matches: ee }) => {
					he(ee ? 'dark' : 'light');
				});
			} catch {
				V.addListener(({ matches: ie }) => {
					try {
						he(ie ? 'dark' : 'light');
					} catch (fe) {
						console.error(fe);
					}
				});
			}
		}, [g]),
		Y.useEffect(() => {
			B.length <= 1 && J(!1);
		}, [B]),
		Y.useEffect(() => {
			let V = ee => {
				var ie, fe;
				(a.every(ve => ee[ve] || ee.code === ve) && (J(!0), (ie = X.current) == null || ie.focus()),
					ee.code === 'Escape' &&
						(document.activeElement === X.current ||
							((fe = X.current) != null && fe.contains(document.activeElement))) &&
						J(!1));
			};
			return (document.addEventListener('keydown', V), () => document.removeEventListener('keydown', V));
		}, [a]),
		Y.useEffect(() => {
			if (X.current)
				return () => {
					z.current && (z.current.focus({ preventScroll: !0 }), (z.current = null), (W.current = !1));
				};
		}, [X.current]),
		Y.createElement(
			'section',
			{
				ref: n,
				'aria-label': `${O} ${F}`,
				tabIndex: -1,
				'aria-live': 'polite',
				'aria-relevant': 'additions text',
				'aria-atomic': 'false',
				suppressHydrationWarning: !0,
			},
			H.map((V, ee) => {
				var ie;
				let [fe, ve] = V.split('-');
				return B.length
					? Y.createElement(
							'ol',
							{
								key: V,
								dir: E === 'auto' ? Tp() : E,
								tabIndex: -1,
								ref: X,
								className: d,
								'data-sonner-toaster': !0,
								'data-theme': Ce,
								'data-y-position': fe,
								'data-lifted': ye && B.length > 1 && !u,
								'data-x-position': ve,
								style: {
									'--front-toast-height': `${((ie = q[0]) == null ? void 0 : ie.height) || 0}px`,
									'--width': `${Hx}px`,
									'--gap': `${b}px`,
									...v,
									...qx(h, m),
								},
								onBlur: le => {
									W.current &&
										!le.currentTarget.contains(le.relatedTarget) &&
										((W.current = !1), z.current && (z.current.focus({ preventScroll: !0 }), (z.current = null)));
								},
								onFocus: le => {
									(le.target instanceof HTMLElement && le.target.dataset.dismissible === 'false') ||
										W.current ||
										((W.current = !0), (z.current = le.relatedTarget));
								},
								onMouseEnter: () => J(!0),
								onMouseMove: () => J(!0),
								onMouseLeave: () => {
									ge || J(!1);
								},
								onDragEnd: () => J(!1),
								onPointerDown: le => {
									(le.target instanceof HTMLElement && le.target.dataset.dismissible === 'false') || de(!0);
								},
								onPointerUp: () => de(!1),
							},
							B.filter(le => (!le.position && ee === 0) || le.position === V).map((le, Se) => {
								var Pe, Ue;
								return Y.createElement(Xx, {
									key: le.id,
									icons: D,
									index: Se,
									toast: le,
									defaultRichColors: y,
									duration: (Pe = P?.duration) != null ? Pe : x,
									className: P?.className,
									descriptionClassName: P?.descriptionClassName,
									invert: i,
									visibleToasts: S,
									closeButton: (Ue = P?.closeButton) != null ? Ue : c,
									interacting: ge,
									position: V,
									style: P?.style,
									unstyled: P?.unstyled,
									classNames: P?.classNames,
									cancelButtonStyle: P?.cancelButtonStyle,
									actionButtonStyle: P?.actionButtonStyle,
									removeToast: A,
									toasts: B.filter(At => At.position == le.position),
									heights: q.filter(At => At.position == le.position),
									setHeights: oe,
									expandByDefault: u,
									gap: b,
									loadingIcon: M,
									expanded: ye,
									pauseWhenPageIsHidden: _,
									swipeDirections: e.swipeDirections,
								});
							}),
						)
					: null;
			}),
		)
	);
});
const Jx = ({ ...e }) => {
	const { theme: n = 'system' } = Tg();
	return j.jsx(Zx, {
		theme: n,
		className: 'toaster group',
		richColors: !0,
		position: 'top-right',
		toastOptions: {
			classNames: {
				toast:
					'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
				description: 'group-[.toast]:text-muted-foreground',
				actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
				cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
			},
		},
		...e,
	});
};
function On(e, n, { checkForDefaultPrevented: i = !0 } = {}) {
	return function (a) {
		if ((e?.(a), i === !1 || !a.defaultPrevented)) return n?.(a);
	};
}
function kp(e, n) {
	if (typeof e == 'function') return e(n);
	e != null && (e.current = n);
}
function kg(...e) {
	return n => {
		let i = !1;
		const s = e.map(a => {
			const u = kp(a, n);
			return (!i && typeof u == 'function' && (i = !0), u);
		});
		if (i)
			return () => {
				for (let a = 0; a < s.length; a++) {
					const u = s[a];
					typeof u == 'function' ? u() : kp(e[a], null);
				}
			};
	};
}
function jr(...e) {
	return C.useCallback(kg(...e), e);
}
function bg(e, n = []) {
	let i = [];
	function s(u, c) {
		const d = C.createContext(c),
			h = i.length;
		i = [...i, c];
		const m = y => {
			const { scope: x, children: v, ...S } = y,
				P = x?.[e]?.[h] || d,
				E = C.useMemo(() => S, Object.values(S));
			return j.jsx(P.Provider, { value: E, children: v });
		};
		m.displayName = u + 'Provider';
		function g(y, x) {
			const v = x?.[e]?.[h] || d,
				S = C.useContext(v);
			if (S) return S;
			if (c !== void 0) return c;
			throw new Error(`\`${y}\` must be used within \`${u}\``);
		}
		return [m, g];
	}
	const a = () => {
		const u = i.map(c => C.createContext(c));
		return function (d) {
			const h = d?.[e] || u;
			return C.useMemo(() => ({ [`__scope${e}`]: { ...d, [e]: h } }), [d, h]);
		};
	};
	return ((a.scopeName = e), [s, e1(a, ...n)]);
}
function e1(...e) {
	const n = e[0];
	if (e.length === 1) return n;
	const i = () => {
		const s = e.map(a => ({ useScope: a(), scopeName: a.scopeName }));
		return function (u) {
			const c = s.reduce((d, { useScope: h, scopeName: m }) => {
				const y = h(u)[`__scope${m}`];
				return { ...d, ...y };
			}, {});
			return C.useMemo(() => ({ [`__scope${n.scopeName}`]: c }), [c]);
		};
	};
	return ((i.scopeName = n.scopeName), i);
}
function t1(e) {
	const n = n1(e),
		i = C.forwardRef((s, a) => {
			const { children: u, ...c } = s,
				d = C.Children.toArray(u),
				h = d.find(i1);
			if (h) {
				const m = h.props.children,
					g = d.map(y =>
						y === h
							? C.Children.count(m) > 1
								? C.Children.only(null)
								: C.isValidElement(m)
									? m.props.children
									: null
							: y,
					);
				return j.jsx(n, { ...c, ref: a, children: C.isValidElement(m) ? C.cloneElement(m, void 0, g) : null });
			}
			return j.jsx(n, { ...c, ref: a, children: u });
		});
	return ((i.displayName = `${e}.Slot`), i);
}
function n1(e) {
	const n = C.forwardRef((i, s) => {
		const { children: a, ...u } = i;
		if (C.isValidElement(a)) {
			const c = s1(a),
				d = o1(u, a.props);
			return (a.type !== C.Fragment && (d.ref = s ? kg(s, c) : c), C.cloneElement(a, d));
		}
		return C.Children.count(a) > 1 ? C.Children.only(null) : null;
	});
	return ((n.displayName = `${e}.SlotClone`), n);
}
var r1 = Symbol('radix.slottable');
function i1(e) {
	return C.isValidElement(e) && typeof e.type == 'function' && '__radixId' in e.type && e.type.__radixId === r1;
}
function o1(e, n) {
	const i = { ...n };
	for (const s in n) {
		const a = e[s],
			u = n[s];
		/^on[A-Z]/.test(s)
			? a && u
				? (i[s] = (...d) => {
						const h = u(...d);
						return (a(...d), h);
					})
				: a && (i[s] = a)
			: s === 'style'
				? (i[s] = { ...a, ...u })
				: s === 'className' && (i[s] = [a, u].filter(Boolean).join(' '));
	}
	return { ...e, ...i };
}
function s1(e) {
	let n = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
		i = n && 'isReactWarning' in n && n.isReactWarning;
	return i
		? e.ref
		: ((n = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
			(i = n && 'isReactWarning' in n && n.isReactWarning),
			i ? e.props.ref : e.props.ref || e.ref);
}
var a1 = [
		'a',
		'button',
		'div',
		'form',
		'h2',
		'h3',
		'img',
		'input',
		'label',
		'li',
		'nav',
		'ol',
		'p',
		'select',
		'span',
		'svg',
		'ul',
	],
	Ir = a1.reduce((e, n) => {
		const i = t1(`Primitive.${n}`),
			s = C.forwardRef((a, u) => {
				const { asChild: c, ...d } = a,
					h = c ? i : n;
				return (typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), j.jsx(h, { ...d, ref: u }));
			});
		return ((s.displayName = `Primitive.${n}`), { ...e, [n]: s });
	}, {});
function l1(e, n) {
	e && $c.flushSync(() => e.dispatchEvent(n));
}
function Ia(e) {
	const n = C.useRef(e);
	return (
		C.useEffect(() => {
			n.current = e;
		}),
		C.useMemo(
			() =>
				(...i) =>
					n.current?.(...i),
			[],
		)
	);
}
function u1(e, n = globalThis?.document) {
	const i = Ia(e);
	C.useEffect(() => {
		const s = a => {
			a.key === 'Escape' && i(a);
		};
		return (
			n.addEventListener('keydown', s, { capture: !0 }),
			() => n.removeEventListener('keydown', s, { capture: !0 })
		);
	}, [i, n]);
}
var c1 = 'DismissableLayer',
	ic = 'dismissableLayer.update',
	f1 = 'dismissableLayer.pointerDownOutside',
	d1 = 'dismissableLayer.focusOutside',
	bp,
	Rg = C.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
	Ag = C.forwardRef((e, n) => {
		const {
				disableOutsidePointerEvents: i = !1,
				onEscapeKeyDown: s,
				onPointerDownOutside: a,
				onFocusOutside: u,
				onInteractOutside: c,
				onDismiss: d,
				...h
			} = e,
			m = C.useContext(Rg),
			[g, y] = C.useState(null),
			x = g?.ownerDocument ?? globalThis?.document,
			[, v] = C.useState({}),
			S = jr(n, G => y(G)),
			P = Array.from(m.layers),
			[E] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
			b = P.indexOf(E),
			M = g ? P.indexOf(g) : -1,
			D = m.layersWithOutsidePointerEventsDisabled.size > 0,
			O = M >= b,
			_ = m1(G => {
				const H = G.target,
					q = [...m.branches].some(oe => oe.contains(H));
				!O || q || (a?.(G), c?.(G), G.defaultPrevented || d?.());
			}, x),
			B = g1(G => {
				const H = G.target;
				[...m.branches].some(oe => oe.contains(H)) || (u?.(G), c?.(G), G.defaultPrevented || d?.());
			}, x);
		return (
			u1(G => {
				M === m.layers.size - 1 && (s?.(G), !G.defaultPrevented && d && (G.preventDefault(), d()));
			}, x),
			C.useEffect(() => {
				if (g)
					return (
						i &&
							(m.layersWithOutsidePointerEventsDisabled.size === 0 &&
								((bp = x.body.style.pointerEvents), (x.body.style.pointerEvents = 'none')),
							m.layersWithOutsidePointerEventsDisabled.add(g)),
						m.layers.add(g),
						Rp(),
						() => {
							i && m.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = bp);
						}
					);
			}, [g, x, i, m]),
			C.useEffect(
				() => () => {
					g && (m.layers.delete(g), m.layersWithOutsidePointerEventsDisabled.delete(g), Rp());
				},
				[g, m],
			),
			C.useEffect(() => {
				const G = () => v({});
				return (document.addEventListener(ic, G), () => document.removeEventListener(ic, G));
			}, []),
			j.jsx(Ir.div, {
				...h,
				ref: S,
				style: { pointerEvents: D ? (O ? 'auto' : 'none') : void 0, ...e.style },
				onFocusCapture: On(e.onFocusCapture, B.onFocusCapture),
				onBlurCapture: On(e.onBlurCapture, B.onBlurCapture),
				onPointerDownCapture: On(e.onPointerDownCapture, _.onPointerDownCapture),
			})
		);
	});
Ag.displayName = c1;
var h1 = 'DismissableLayerBranch',
	p1 = C.forwardRef((e, n) => {
		const i = C.useContext(Rg),
			s = C.useRef(null),
			a = jr(n, s);
		return (
			C.useEffect(() => {
				const u = s.current;
				if (u)
					return (
						i.branches.add(u),
						() => {
							i.branches.delete(u);
						}
					);
			}, [i.branches]),
			j.jsx(Ir.div, { ...e, ref: a })
		);
	});
p1.displayName = h1;
function m1(e, n = globalThis?.document) {
	const i = Ia(e),
		s = C.useRef(!1),
		a = C.useRef(() => {});
	return (
		C.useEffect(() => {
			const u = d => {
					if (d.target && !s.current) {
						let h = function () {
							Mg(f1, i, m, { discrete: !0 });
						};
						const m = { originalEvent: d };
						d.pointerType === 'touch'
							? (n.removeEventListener('click', a.current),
								(a.current = h),
								n.addEventListener('click', a.current, { once: !0 }))
							: h();
					} else n.removeEventListener('click', a.current);
					s.current = !1;
				},
				c = window.setTimeout(() => {
					n.addEventListener('pointerdown', u);
				}, 0);
			return () => {
				(window.clearTimeout(c), n.removeEventListener('pointerdown', u), n.removeEventListener('click', a.current));
			};
		}, [n, i]),
		{ onPointerDownCapture: () => (s.current = !0) }
	);
}
function g1(e, n = globalThis?.document) {
	const i = Ia(e),
		s = C.useRef(!1);
	return (
		C.useEffect(() => {
			const a = u => {
				u.target && !s.current && Mg(d1, i, { originalEvent: u }, { discrete: !1 });
			};
			return (n.addEventListener('focusin', a), () => n.removeEventListener('focusin', a));
		}, [n, i]),
		{ onFocusCapture: () => (s.current = !0), onBlurCapture: () => (s.current = !1) }
	);
}
function Rp() {
	const e = new CustomEvent(ic);
	document.dispatchEvent(e);
}
function Mg(e, n, i, { discrete: s }) {
	const a = i.originalEvent.target,
		u = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: i });
	(n && a.addEventListener(e, n, { once: !0 }), s ? l1(a, u) : a.dispatchEvent(u));
}
var Ro = globalThis?.document ? C.useLayoutEffect : () => {};
const y1 = ['top', 'right', 'bottom', 'left'],
	cr = Math.min,
	bt = Math.max,
	Sa = Math.round,
	oa = Math.floor,
	vn = e => ({ x: e, y: e }),
	v1 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
	w1 = { start: 'end', end: 'start' };
function oc(e, n, i) {
	return bt(e, cr(n, i));
}
function Nn(e, n) {
	return typeof e == 'function' ? e(n) : e;
}
function jn(e) {
	return e.split('-')[0];
}
function ki(e) {
	return e.split('-')[1];
}
function Wc(e) {
	return e === 'x' ? 'y' : 'x';
}
function Hc(e) {
	return e === 'y' ? 'height' : 'width';
}
const x1 = new Set(['top', 'bottom']);
function yn(e) {
	return x1.has(jn(e)) ? 'y' : 'x';
}
function Kc(e) {
	return Wc(yn(e));
}
function S1(e, n, i) {
	i === void 0 && (i = !1);
	const s = ki(e),
		a = Kc(e),
		u = Hc(a);
	let c = a === 'x' ? (s === (i ? 'end' : 'start') ? 'right' : 'left') : s === 'start' ? 'bottom' : 'top';
	return (n.reference[u] > n.floating[u] && (c = Ca(c)), [c, Ca(c)]);
}
function C1(e) {
	const n = Ca(e);
	return [sc(e), n, sc(n)];
}
function sc(e) {
	return e.replace(/start|end/g, n => w1[n]);
}
const Ap = ['left', 'right'],
	Mp = ['right', 'left'],
	E1 = ['top', 'bottom'],
	P1 = ['bottom', 'top'];
function T1(e, n, i) {
	switch (e) {
		case 'top':
		case 'bottom':
			return i ? (n ? Mp : Ap) : n ? Ap : Mp;
		case 'left':
		case 'right':
			return n ? E1 : P1;
		default:
			return [];
	}
}
function k1(e, n, i, s) {
	const a = ki(e);
	let u = T1(jn(e), i === 'start', s);
	return (a && ((u = u.map(c => c + '-' + a)), n && (u = u.concat(u.map(sc)))), u);
}
function Ca(e) {
	return e.replace(/left|right|bottom|top/g, n => v1[n]);
}
function b1(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Dg(e) {
	return typeof e != 'number' ? b1(e) : { top: e, right: e, bottom: e, left: e };
}
function Ea(e) {
	const { x: n, y: i, width: s, height: a } = e;
	return { width: s, height: a, top: i, left: n, right: n + s, bottom: i + a, x: n, y: i };
}
function Dp(e, n, i) {
	let { reference: s, floating: a } = e;
	const u = yn(n),
		c = Kc(n),
		d = Hc(c),
		h = jn(n),
		m = u === 'y',
		g = s.x + s.width / 2 - a.width / 2,
		y = s.y + s.height / 2 - a.height / 2,
		x = s[d] / 2 - a[d] / 2;
	let v;
	switch (h) {
		case 'top':
			v = { x: g, y: s.y - a.height };
			break;
		case 'bottom':
			v = { x: g, y: s.y + s.height };
			break;
		case 'right':
			v = { x: s.x + s.width, y };
			break;
		case 'left':
			v = { x: s.x - a.width, y };
			break;
		default:
			v = { x: s.x, y: s.y };
	}
	switch (ki(n)) {
		case 'start':
			v[c] -= x * (i && m ? -1 : 1);
			break;
		case 'end':
			v[c] += x * (i && m ? -1 : 1);
			break;
	}
	return v;
}
async function R1(e, n) {
	var i;
	n === void 0 && (n = {});
	const { x: s, y: a, platform: u, rects: c, elements: d, strategy: h } = e,
		{
			boundary: m = 'clippingAncestors',
			rootBoundary: g = 'viewport',
			elementContext: y = 'floating',
			altBoundary: x = !1,
			padding: v = 0,
		} = Nn(n, e),
		S = Dg(v),
		E = d[x ? (y === 'floating' ? 'reference' : 'floating') : y],
		b = Ea(
			await u.getClippingRect({
				element:
					(i = await (u.isElement == null ? void 0 : u.isElement(E))) == null || i
						? E
						: E.contextElement || (await (u.getDocumentElement == null ? void 0 : u.getDocumentElement(d.floating))),
				boundary: m,
				rootBoundary: g,
				strategy: h,
			}),
		),
		M = y === 'floating' ? { x: s, y: a, width: c.floating.width, height: c.floating.height } : c.reference,
		D = await (u.getOffsetParent == null ? void 0 : u.getOffsetParent(d.floating)),
		O = (await (u.isElement == null ? void 0 : u.isElement(D)))
			? (await (u.getScale == null ? void 0 : u.getScale(D))) || { x: 1, y: 1 }
			: { x: 1, y: 1 },
		_ = Ea(
			u.convertOffsetParentRelativeRectToViewportRelativeRect
				? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
						elements: d,
						rect: M,
						offsetParent: D,
						strategy: h,
					})
				: M,
		);
	return {
		top: (b.top - _.top + S.top) / O.y,
		bottom: (_.bottom - b.bottom + S.bottom) / O.y,
		left: (b.left - _.left + S.left) / O.x,
		right: (_.right - b.right + S.right) / O.x,
	};
}
const A1 = async (e, n, i) => {
		const { placement: s = 'bottom', strategy: a = 'absolute', middleware: u = [], platform: c } = i,
			d = u.filter(Boolean),
			h = await (c.isRTL == null ? void 0 : c.isRTL(n));
		let m = await c.getElementRects({ reference: e, floating: n, strategy: a }),
			{ x: g, y } = Dp(m, s, h),
			x = s,
			v = {},
			S = 0;
		for (let E = 0; E < d.length; E++) {
			var P;
			const { name: b, fn: M } = d[E],
				{
					x: D,
					y: O,
					data: _,
					reset: B,
				} = await M({
					x: g,
					y,
					initialPlacement: s,
					placement: x,
					strategy: a,
					middlewareData: v,
					rects: m,
					platform: { ...c, detectOverflow: (P = c.detectOverflow) != null ? P : R1 },
					elements: { reference: e, floating: n },
				});
			((g = D ?? g),
				(y = O ?? y),
				(v = { ...v, [b]: { ...v[b], ..._ } }),
				B &&
					S <= 50 &&
					(S++,
					typeof B == 'object' &&
						(B.placement && (x = B.placement),
						B.rects &&
							(m = B.rects === !0 ? await c.getElementRects({ reference: e, floating: n, strategy: a }) : B.rects),
						({ x: g, y } = Dp(m, x, h))),
					(E = -1)));
		}
		return { x: g, y, placement: x, strategy: a, middlewareData: v };
	},
	M1 = e => ({
		name: 'arrow',
		options: e,
		async fn(n) {
			const { x: i, y: s, placement: a, rects: u, platform: c, elements: d, middlewareData: h } = n,
				{ element: m, padding: g = 0 } = Nn(e, n) || {};
			if (m == null) return {};
			const y = Dg(g),
				x = { x: i, y: s },
				v = Kc(a),
				S = Hc(v),
				P = await c.getDimensions(m),
				E = v === 'y',
				b = E ? 'top' : 'left',
				M = E ? 'bottom' : 'right',
				D = E ? 'clientHeight' : 'clientWidth',
				O = u.reference[S] + u.reference[v] - x[v] - u.floating[S],
				_ = x[v] - u.reference[v],
				B = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(m));
			let G = B ? B[D] : 0;
			(!G || !(await (c.isElement == null ? void 0 : c.isElement(B)))) && (G = d.floating[D] || u.floating[S]);
			const H = O / 2 - _ / 2,
				q = G / 2 - P[S] / 2 - 1,
				oe = cr(y[b], q),
				ye = cr(y[M], q),
				J = oe,
				ge = G - P[S] - ye,
				de = G / 2 - P[S] / 2 + H,
				Ce = oc(J, de, ge),
				he = !h.arrow && ki(a) != null && de !== Ce && u.reference[S] / 2 - (de < J ? oe : ye) - P[S] / 2 < 0,
				X = he ? (de < J ? de - J : de - ge) : 0;
			return {
				[v]: x[v] + X,
				data: { [v]: Ce, centerOffset: de - Ce - X, ...(he && { alignmentOffset: X }) },
				reset: he,
			};
		},
	}),
	D1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'flip',
				options: e,
				async fn(n) {
					var i, s;
					const { placement: a, middlewareData: u, rects: c, initialPlacement: d, platform: h, elements: m } = n,
						{
							mainAxis: g = !0,
							crossAxis: y = !0,
							fallbackPlacements: x,
							fallbackStrategy: v = 'bestFit',
							fallbackAxisSideDirection: S = 'none',
							flipAlignment: P = !0,
							...E
						} = Nn(e, n);
					if ((i = u.arrow) != null && i.alignmentOffset) return {};
					const b = jn(a),
						M = yn(d),
						D = jn(d) === d,
						O = await (h.isRTL == null ? void 0 : h.isRTL(m.floating)),
						_ = x || (D || !P ? [Ca(d)] : C1(d)),
						B = S !== 'none';
					!x && B && _.push(...k1(d, P, S, O));
					const G = [d, ..._],
						H = await h.detectOverflow(n, E),
						q = [];
					let oe = ((s = u.flip) == null ? void 0 : s.overflows) || [];
					if ((g && q.push(H[b]), y)) {
						const de = S1(a, c, O);
						q.push(H[de[0]], H[de[1]]);
					}
					if (((oe = [...oe, { placement: a, overflows: q }]), !q.every(de => de <= 0))) {
						var ye, J;
						const de = (((ye = u.flip) == null ? void 0 : ye.index) || 0) + 1,
							Ce = G[de];
						if (
							Ce &&
							(!(y === 'alignment' ? M !== yn(Ce) : !1) ||
								oe.every(F => (yn(F.placement) === M ? F.overflows[0] > 0 : !0)))
						)
							return { data: { index: de, overflows: oe }, reset: { placement: Ce } };
						let he =
							(J = oe.filter(X => X.overflows[0] <= 0).sort((X, F) => X.overflows[1] - F.overflows[1])[0]) == null
								? void 0
								: J.placement;
						if (!he)
							switch (v) {
								case 'bestFit': {
									var ge;
									const X =
										(ge = oe
											.filter(F => {
												if (B) {
													const z = yn(F.placement);
													return z === M || z === 'y';
												}
												return !0;
											})
											.map(F => [F.placement, F.overflows.filter(z => z > 0).reduce((z, W) => z + W, 0)])
											.sort((F, z) => F[1] - z[1])[0]) == null
											? void 0
											: ge[0];
									X && (he = X);
									break;
								}
								case 'initialPlacement':
									he = d;
									break;
							}
						if (a !== he) return { reset: { placement: he } };
					}
					return {};
				},
			}
		);
	};
function Lp(e, n) {
	return { top: e.top - n.height, right: e.right - n.width, bottom: e.bottom - n.height, left: e.left - n.width };
}
function Op(e) {
	return y1.some(n => e[n] >= 0);
}
const L1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'hide',
				options: e,
				async fn(n) {
					const { rects: i, platform: s } = n,
						{ strategy: a = 'referenceHidden', ...u } = Nn(e, n);
					switch (a) {
						case 'referenceHidden': {
							const c = await s.detectOverflow(n, { ...u, elementContext: 'reference' }),
								d = Lp(c, i.reference);
							return { data: { referenceHiddenOffsets: d, referenceHidden: Op(d) } };
						}
						case 'escaped': {
							const c = await s.detectOverflow(n, { ...u, altBoundary: !0 }),
								d = Lp(c, i.floating);
							return { data: { escapedOffsets: d, escaped: Op(d) } };
						}
						default:
							return {};
					}
				},
			}
		);
	},
	Lg = new Set(['left', 'top']);
async function O1(e, n) {
	const { placement: i, platform: s, elements: a } = e,
		u = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)),
		c = jn(i),
		d = ki(i),
		h = yn(i) === 'y',
		m = Lg.has(c) ? -1 : 1,
		g = u && h ? -1 : 1,
		y = Nn(n, e);
	let {
		mainAxis: x,
		crossAxis: v,
		alignmentAxis: S,
	} = typeof y == 'number'
		? { mainAxis: y, crossAxis: 0, alignmentAxis: null }
		: { mainAxis: y.mainAxis || 0, crossAxis: y.crossAxis || 0, alignmentAxis: y.alignmentAxis };
	return (
		d && typeof S == 'number' && (v = d === 'end' ? S * -1 : S),
		h ? { x: v * g, y: x * m } : { x: x * m, y: v * g }
	);
}
const N1 = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: 'offset',
				options: e,
				async fn(n) {
					var i, s;
					const { x: a, y: u, placement: c, middlewareData: d } = n,
						h = await O1(n, e);
					return c === ((i = d.offset) == null ? void 0 : i.placement) && (s = d.arrow) != null && s.alignmentOffset
						? {}
						: { x: a + h.x, y: u + h.y, data: { ...h, placement: c } };
				},
			}
		);
	},
	j1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'shift',
				options: e,
				async fn(n) {
					const { x: i, y: s, placement: a, platform: u } = n,
						{
							mainAxis: c = !0,
							crossAxis: d = !1,
							limiter: h = {
								fn: b => {
									let { x: M, y: D } = b;
									return { x: M, y: D };
								},
							},
							...m
						} = Nn(e, n),
						g = { x: i, y: s },
						y = await u.detectOverflow(n, m),
						x = yn(jn(a)),
						v = Wc(x);
					let S = g[v],
						P = g[x];
					if (c) {
						const b = v === 'y' ? 'top' : 'left',
							M = v === 'y' ? 'bottom' : 'right',
							D = S + y[b],
							O = S - y[M];
						S = oc(D, S, O);
					}
					if (d) {
						const b = x === 'y' ? 'top' : 'left',
							M = x === 'y' ? 'bottom' : 'right',
							D = P + y[b],
							O = P - y[M];
						P = oc(D, P, O);
					}
					const E = h.fn({ ...n, [v]: S, [x]: P });
					return { ...E, data: { x: E.x - i, y: E.y - s, enabled: { [v]: c, [x]: d } } };
				},
			}
		);
	},
	I1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				options: e,
				fn(n) {
					const { x: i, y: s, placement: a, rects: u, middlewareData: c } = n,
						{ offset: d = 0, mainAxis: h = !0, crossAxis: m = !0 } = Nn(e, n),
						g = { x: i, y: s },
						y = yn(a),
						x = Wc(y);
					let v = g[x],
						S = g[y];
					const P = Nn(d, n),
						E = typeof P == 'number' ? { mainAxis: P, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...P };
					if (h) {
						const D = x === 'y' ? 'height' : 'width',
							O = u.reference[x] - u.floating[D] + E.mainAxis,
							_ = u.reference[x] + u.reference[D] - E.mainAxis;
						v < O ? (v = O) : v > _ && (v = _);
					}
					if (m) {
						var b, M;
						const D = x === 'y' ? 'width' : 'height',
							O = Lg.has(jn(a)),
							_ =
								u.reference[y] -
								u.floating[D] +
								((O && ((b = c.offset) == null ? void 0 : b[y])) || 0) +
								(O ? 0 : E.crossAxis),
							B =
								u.reference[y] +
								u.reference[D] +
								(O ? 0 : ((M = c.offset) == null ? void 0 : M[y]) || 0) -
								(O ? E.crossAxis : 0);
						S < _ ? (S = _) : S > B && (S = B);
					}
					return { [x]: v, [y]: S };
				},
			}
		);
	},
	_1 = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'size',
				options: e,
				async fn(n) {
					var i, s;
					const { placement: a, rects: u, platform: c, elements: d } = n,
						{ apply: h = () => {}, ...m } = Nn(e, n),
						g = await c.detectOverflow(n, m),
						y = jn(a),
						x = ki(a),
						v = yn(a) === 'y',
						{ width: S, height: P } = u.floating;
					let E, b;
					y === 'top' || y === 'bottom'
						? ((E = y),
							(b =
								x === ((await (c.isRTL == null ? void 0 : c.isRTL(d.floating))) ? 'start' : 'end') ? 'left' : 'right'))
						: ((b = y), (E = x === 'end' ? 'top' : 'bottom'));
					const M = P - g.top - g.bottom,
						D = S - g.left - g.right,
						O = cr(P - g[E], M),
						_ = cr(S - g[b], D),
						B = !n.middlewareData.shift;
					let G = O,
						H = _;
					if (
						((i = n.middlewareData.shift) != null && i.enabled.x && (H = D),
						(s = n.middlewareData.shift) != null && s.enabled.y && (G = M),
						B && !x)
					) {
						const oe = bt(g.left, 0),
							ye = bt(g.right, 0),
							J = bt(g.top, 0),
							ge = bt(g.bottom, 0);
						v
							? (H = S - 2 * (oe !== 0 || ye !== 0 ? oe + ye : bt(g.left, g.right)))
							: (G = P - 2 * (J !== 0 || ge !== 0 ? J + ge : bt(g.top, g.bottom)));
					}
					await h({ ...n, availableWidth: H, availableHeight: G });
					const q = await c.getDimensions(d.floating);
					return S !== q.width || P !== q.height ? { reset: { rects: !0 } } : {};
				},
			}
		);
	};
function _a() {
	return typeof window < 'u';
}
function bi(e) {
	return Og(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function Rt(e) {
	var n;
	return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Cn(e) {
	var n;
	return (n = (Og(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function Og(e) {
	return _a() ? e instanceof Node || e instanceof Rt(e).Node : !1;
}
function nn(e) {
	return _a() ? e instanceof Element || e instanceof Rt(e).Element : !1;
}
function xn(e) {
	return _a() ? e instanceof HTMLElement || e instanceof Rt(e).HTMLElement : !1;
}
function Np(e) {
	return !_a() || typeof ShadowRoot > 'u' ? !1 : e instanceof ShadowRoot || e instanceof Rt(e).ShadowRoot;
}
const V1 = new Set(['inline', 'contents']);
function _o(e) {
	const { overflow: n, overflowX: i, overflowY: s, display: a } = rn(e);
	return /auto|scroll|overlay|hidden|clip/.test(n + s + i) && !V1.has(a);
}
const F1 = new Set(['table', 'td', 'th']);
function z1(e) {
	return F1.has(bi(e));
}
const B1 = [':popover-open', ':modal'];
function Va(e) {
	return B1.some(n => {
		try {
			return e.matches(n);
		} catch {
			return !1;
		}
	});
}
const U1 = ['transform', 'translate', 'scale', 'rotate', 'perspective'],
	$1 = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'],
	W1 = ['paint', 'layout', 'strict', 'content'];
function Gc(e) {
	const n = Qc(),
		i = nn(e) ? rn(e) : e;
	return (
		U1.some(s => (i[s] ? i[s] !== 'none' : !1)) ||
		(i.containerType ? i.containerType !== 'normal' : !1) ||
		(!n && (i.backdropFilter ? i.backdropFilter !== 'none' : !1)) ||
		(!n && (i.filter ? i.filter !== 'none' : !1)) ||
		$1.some(s => (i.willChange || '').includes(s)) ||
		W1.some(s => (i.contain || '').includes(s))
	);
}
function H1(e) {
	let n = fr(e);
	for (; xn(n) && !Ei(n); ) {
		if (Gc(n)) return n;
		if (Va(n)) return null;
		n = fr(n);
	}
	return null;
}
function Qc() {
	return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
const K1 = new Set(['html', 'body', '#document']);
function Ei(e) {
	return K1.has(bi(e));
}
function rn(e) {
	return Rt(e).getComputedStyle(e);
}
function Fa(e) {
	return nn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function fr(e) {
	if (bi(e) === 'html') return e;
	const n = e.assignedSlot || e.parentNode || (Np(e) && e.host) || Cn(e);
	return Np(n) ? n.host : n;
}
function Ng(e) {
	const n = fr(e);
	return Ei(n) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : xn(n) && _o(n) ? n : Ng(n);
}
function Ao(e, n, i) {
	var s;
	(n === void 0 && (n = []), i === void 0 && (i = !0));
	const a = Ng(e),
		u = a === ((s = e.ownerDocument) == null ? void 0 : s.body),
		c = Rt(a);
	if (u) {
		const d = ac(c);
		return n.concat(c, c.visualViewport || [], _o(a) ? a : [], d && i ? Ao(d) : []);
	}
	return n.concat(a, Ao(a, [], i));
}
function ac(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function jg(e) {
	const n = rn(e);
	let i = parseFloat(n.width) || 0,
		s = parseFloat(n.height) || 0;
	const a = xn(e),
		u = a ? e.offsetWidth : i,
		c = a ? e.offsetHeight : s,
		d = Sa(i) !== u || Sa(s) !== c;
	return (d && ((i = u), (s = c)), { width: i, height: s, $: d });
}
function Yc(e) {
	return nn(e) ? e : e.contextElement;
}
function vi(e) {
	const n = Yc(e);
	if (!xn(n)) return vn(1);
	const i = n.getBoundingClientRect(),
		{ width: s, height: a, $: u } = jg(n);
	let c = (u ? Sa(i.width) : i.width) / s,
		d = (u ? Sa(i.height) : i.height) / a;
	return ((!c || !Number.isFinite(c)) && (c = 1), (!d || !Number.isFinite(d)) && (d = 1), { x: c, y: d });
}
const G1 = vn(0);
function Ig(e) {
	const n = Rt(e);
	return !Qc() || !n.visualViewport ? G1 : { x: n.visualViewport.offsetLeft, y: n.visualViewport.offsetTop };
}
function Q1(e, n, i) {
	return (n === void 0 && (n = !1), !i || (n && i !== Rt(e)) ? !1 : n);
}
function Nr(e, n, i, s) {
	(n === void 0 && (n = !1), i === void 0 && (i = !1));
	const a = e.getBoundingClientRect(),
		u = Yc(e);
	let c = vn(1);
	n && (s ? nn(s) && (c = vi(s)) : (c = vi(e)));
	const d = Q1(u, i, s) ? Ig(u) : vn(0);
	let h = (a.left + d.x) / c.x,
		m = (a.top + d.y) / c.y,
		g = a.width / c.x,
		y = a.height / c.y;
	if (u) {
		const x = Rt(u),
			v = s && nn(s) ? Rt(s) : s;
		let S = x,
			P = ac(S);
		for (; P && s && v !== S; ) {
			const E = vi(P),
				b = P.getBoundingClientRect(),
				M = rn(P),
				D = b.left + (P.clientLeft + parseFloat(M.paddingLeft)) * E.x,
				O = b.top + (P.clientTop + parseFloat(M.paddingTop)) * E.y;
			((h *= E.x), (m *= E.y), (g *= E.x), (y *= E.y), (h += D), (m += O), (S = Rt(P)), (P = ac(S)));
		}
	}
	return Ea({ width: g, height: y, x: h, y: m });
}
function za(e, n) {
	const i = Fa(e).scrollLeft;
	return n ? n.left + i : Nr(Cn(e)).left + i;
}
function _g(e, n) {
	const i = e.getBoundingClientRect(),
		s = i.left + n.scrollLeft - za(e, i),
		a = i.top + n.scrollTop;
	return { x: s, y: a };
}
function Y1(e) {
	let { elements: n, rect: i, offsetParent: s, strategy: a } = e;
	const u = a === 'fixed',
		c = Cn(s),
		d = n ? Va(n.floating) : !1;
	if (s === c || (d && u)) return i;
	let h = { scrollLeft: 0, scrollTop: 0 },
		m = vn(1);
	const g = vn(0),
		y = xn(s);
	if ((y || (!y && !u)) && ((bi(s) !== 'body' || _o(c)) && (h = Fa(s)), xn(s))) {
		const v = Nr(s);
		((m = vi(s)), (g.x = v.x + s.clientLeft), (g.y = v.y + s.clientTop));
	}
	const x = c && !y && !u ? _g(c, h) : vn(0);
	return {
		width: i.width * m.x,
		height: i.height * m.y,
		x: i.x * m.x - h.scrollLeft * m.x + g.x + x.x,
		y: i.y * m.y - h.scrollTop * m.y + g.y + x.y,
	};
}
function X1(e) {
	return Array.from(e.getClientRects());
}
function q1(e) {
	const n = Cn(e),
		i = Fa(e),
		s = e.ownerDocument.body,
		a = bt(n.scrollWidth, n.clientWidth, s.scrollWidth, s.clientWidth),
		u = bt(n.scrollHeight, n.clientHeight, s.scrollHeight, s.clientHeight);
	let c = -i.scrollLeft + za(e);
	const d = -i.scrollTop;
	return (
		rn(s).direction === 'rtl' && (c += bt(n.clientWidth, s.clientWidth) - a),
		{ width: a, height: u, x: c, y: d }
	);
}
const jp = 25;
function Z1(e, n) {
	const i = Rt(e),
		s = Cn(e),
		a = i.visualViewport;
	let u = s.clientWidth,
		c = s.clientHeight,
		d = 0,
		h = 0;
	if (a) {
		((u = a.width), (c = a.height));
		const g = Qc();
		(!g || (g && n === 'fixed')) && ((d = a.offsetLeft), (h = a.offsetTop));
	}
	const m = za(s);
	if (m <= 0) {
		const g = s.ownerDocument,
			y = g.body,
			x = getComputedStyle(y),
			v = (g.compatMode === 'CSS1Compat' && parseFloat(x.marginLeft) + parseFloat(x.marginRight)) || 0,
			S = Math.abs(s.clientWidth - y.clientWidth - v);
		S <= jp && (u -= S);
	} else m <= jp && (u += m);
	return { width: u, height: c, x: d, y: h };
}
const J1 = new Set(['absolute', 'fixed']);
function eS(e, n) {
	const i = Nr(e, !0, n === 'fixed'),
		s = i.top + e.clientTop,
		a = i.left + e.clientLeft,
		u = xn(e) ? vi(e) : vn(1),
		c = e.clientWidth * u.x,
		d = e.clientHeight * u.y,
		h = a * u.x,
		m = s * u.y;
	return { width: c, height: d, x: h, y: m };
}
function Ip(e, n, i) {
	let s;
	if (n === 'viewport') s = Z1(e, i);
	else if (n === 'document') s = q1(Cn(e));
	else if (nn(n)) s = eS(n, i);
	else {
		const a = Ig(e);
		s = { x: n.x - a.x, y: n.y - a.y, width: n.width, height: n.height };
	}
	return Ea(s);
}
function Vg(e, n) {
	const i = fr(e);
	return i === n || !nn(i) || Ei(i) ? !1 : rn(i).position === 'fixed' || Vg(i, n);
}
function tS(e, n) {
	const i = n.get(e);
	if (i) return i;
	let s = Ao(e, [], !1).filter(d => nn(d) && bi(d) !== 'body'),
		a = null;
	const u = rn(e).position === 'fixed';
	let c = u ? fr(e) : e;
	for (; nn(c) && !Ei(c); ) {
		const d = rn(c),
			h = Gc(c);
		(!h && d.position === 'fixed' && (a = null),
			(u ? !h && !a : (!h && d.position === 'static' && !!a && J1.has(a.position)) || (_o(c) && !h && Vg(e, c)))
				? (s = s.filter(g => g !== c))
				: (a = d),
			(c = fr(c)));
	}
	return (n.set(e, s), s);
}
function nS(e) {
	let { element: n, boundary: i, rootBoundary: s, strategy: a } = e;
	const c = [...(i === 'clippingAncestors' ? (Va(n) ? [] : tS(n, this._c)) : [].concat(i)), s],
		d = c[0],
		h = c.reduce(
			(m, g) => {
				const y = Ip(n, g, a);
				return (
					(m.top = bt(y.top, m.top)),
					(m.right = cr(y.right, m.right)),
					(m.bottom = cr(y.bottom, m.bottom)),
					(m.left = bt(y.left, m.left)),
					m
				);
			},
			Ip(n, d, a),
		);
	return { width: h.right - h.left, height: h.bottom - h.top, x: h.left, y: h.top };
}
function rS(e) {
	const { width: n, height: i } = jg(e);
	return { width: n, height: i };
}
function iS(e, n, i) {
	const s = xn(n),
		a = Cn(n),
		u = i === 'fixed',
		c = Nr(e, !0, u, n);
	let d = { scrollLeft: 0, scrollTop: 0 };
	const h = vn(0);
	function m() {
		h.x = za(a);
	}
	if (s || (!s && !u))
		if (((bi(n) !== 'body' || _o(a)) && (d = Fa(n)), s)) {
			const v = Nr(n, !0, u, n);
			((h.x = v.x + n.clientLeft), (h.y = v.y + n.clientTop));
		} else a && m();
	u && !s && a && m();
	const g = a && !s && !u ? _g(a, d) : vn(0),
		y = c.left + d.scrollLeft - h.x - g.x,
		x = c.top + d.scrollTop - h.y - g.y;
	return { x: y, y: x, width: c.width, height: c.height };
}
function _u(e) {
	return rn(e).position === 'static';
}
function _p(e, n) {
	if (!xn(e) || rn(e).position === 'fixed') return null;
	if (n) return n(e);
	let i = e.offsetParent;
	return (Cn(e) === i && (i = i.ownerDocument.body), i);
}
function Fg(e, n) {
	const i = Rt(e);
	if (Va(e)) return i;
	if (!xn(e)) {
		let a = fr(e);
		for (; a && !Ei(a); ) {
			if (nn(a) && !_u(a)) return a;
			a = fr(a);
		}
		return i;
	}
	let s = _p(e, n);
	for (; s && z1(s) && _u(s); ) s = _p(s, n);
	return s && Ei(s) && _u(s) && !Gc(s) ? i : s || H1(e) || i;
}
const oS = async function (e) {
	const n = this.getOffsetParent || Fg,
		i = this.getDimensions,
		s = await i(e.floating);
	return {
		reference: iS(e.reference, await n(e.floating), e.strategy),
		floating: { x: 0, y: 0, width: s.width, height: s.height },
	};
};
function sS(e) {
	return rn(e).direction === 'rtl';
}
const aS = {
	convertOffsetParentRelativeRectToViewportRelativeRect: Y1,
	getDocumentElement: Cn,
	getClippingRect: nS,
	getOffsetParent: Fg,
	getElementRects: oS,
	getClientRects: X1,
	getDimensions: rS,
	getScale: vi,
	isElement: nn,
	isRTL: sS,
};
function zg(e, n) {
	return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function lS(e, n) {
	let i = null,
		s;
	const a = Cn(e);
	function u() {
		var d;
		(clearTimeout(s), (d = i) == null || d.disconnect(), (i = null));
	}
	function c(d, h) {
		(d === void 0 && (d = !1), h === void 0 && (h = 1), u());
		const m = e.getBoundingClientRect(),
			{ left: g, top: y, width: x, height: v } = m;
		if ((d || n(), !x || !v)) return;
		const S = oa(y),
			P = oa(a.clientWidth - (g + x)),
			E = oa(a.clientHeight - (y + v)),
			b = oa(g),
			D = { rootMargin: -S + 'px ' + -P + 'px ' + -E + 'px ' + -b + 'px', threshold: bt(0, cr(1, h)) || 1 };
		let O = !0;
		function _(B) {
			const G = B[0].intersectionRatio;
			if (G !== h) {
				if (!O) return c();
				G
					? c(!1, G)
					: (s = setTimeout(() => {
							c(!1, 1e-7);
						}, 1e3));
			}
			(G === 1 && !zg(m, e.getBoundingClientRect()) && c(), (O = !1));
		}
		try {
			i = new IntersectionObserver(_, { ...D, root: a.ownerDocument });
		} catch {
			i = new IntersectionObserver(_, D);
		}
		i.observe(e);
	}
	return (c(!0), u);
}
function uS(e, n, i, s) {
	s === void 0 && (s = {});
	const {
			ancestorScroll: a = !0,
			ancestorResize: u = !0,
			elementResize: c = typeof ResizeObserver == 'function',
			layoutShift: d = typeof IntersectionObserver == 'function',
			animationFrame: h = !1,
		} = s,
		m = Yc(e),
		g = a || u ? [...(m ? Ao(m) : []), ...Ao(n)] : [];
	g.forEach(b => {
		(a && b.addEventListener('scroll', i, { passive: !0 }), u && b.addEventListener('resize', i));
	});
	const y = m && d ? lS(m, i) : null;
	let x = -1,
		v = null;
	c &&
		((v = new ResizeObserver(b => {
			let [M] = b;
			(M &&
				M.target === m &&
				v &&
				(v.unobserve(n),
				cancelAnimationFrame(x),
				(x = requestAnimationFrame(() => {
					var D;
					(D = v) == null || D.observe(n);
				}))),
				i());
		})),
		m && !h && v.observe(m),
		v.observe(n));
	let S,
		P = h ? Nr(e) : null;
	h && E();
	function E() {
		const b = Nr(e);
		(P && !zg(P, b) && i(), (P = b), (S = requestAnimationFrame(E)));
	}
	return (
		i(),
		() => {
			var b;
			(g.forEach(M => {
				(a && M.removeEventListener('scroll', i), u && M.removeEventListener('resize', i));
			}),
				y?.(),
				(b = v) == null || b.disconnect(),
				(v = null),
				h && cancelAnimationFrame(S));
		}
	);
}
const cS = N1,
	fS = j1,
	dS = D1,
	hS = _1,
	pS = L1,
	Vp = M1,
	mS = I1,
	gS = (e, n, i) => {
		const s = new Map(),
			a = { platform: aS, ...i },
			u = { ...a.platform, _c: s };
		return A1(e, n, { ...a, platform: u });
	};
var yS = typeof document < 'u',
	vS = function () {},
	da = yS ? C.useLayoutEffect : vS;
function Pa(e, n) {
	if (e === n) return !0;
	if (typeof e != typeof n) return !1;
	if (typeof e == 'function' && e.toString() === n.toString()) return !0;
	let i, s, a;
	if (e && n && typeof e == 'object') {
		if (Array.isArray(e)) {
			if (((i = e.length), i !== n.length)) return !1;
			for (s = i; s-- !== 0; ) if (!Pa(e[s], n[s])) return !1;
			return !0;
		}
		if (((a = Object.keys(e)), (i = a.length), i !== Object.keys(n).length)) return !1;
		for (s = i; s-- !== 0; ) if (!{}.hasOwnProperty.call(n, a[s])) return !1;
		for (s = i; s-- !== 0; ) {
			const u = a[s];
			if (!(u === '_owner' && e.$$typeof) && !Pa(e[u], n[u])) return !1;
		}
		return !0;
	}
	return e !== e && n !== n;
}
function Bg(e) {
	return typeof window > 'u' ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fp(e, n) {
	const i = Bg(e);
	return Math.round(n * i) / i;
}
function Vu(e) {
	const n = C.useRef(e);
	return (
		da(() => {
			n.current = e;
		}),
		n
	);
}
function wS(e) {
	e === void 0 && (e = {});
	const {
			placement: n = 'bottom',
			strategy: i = 'absolute',
			middleware: s = [],
			platform: a,
			elements: { reference: u, floating: c } = {},
			transform: d = !0,
			whileElementsMounted: h,
			open: m,
		} = e,
		[g, y] = C.useState({ x: 0, y: 0, strategy: i, placement: n, middlewareData: {}, isPositioned: !1 }),
		[x, v] = C.useState(s);
	Pa(x, s) || v(s);
	const [S, P] = C.useState(null),
		[E, b] = C.useState(null),
		M = C.useCallback(F => {
			F !== B.current && ((B.current = F), P(F));
		}, []),
		D = C.useCallback(F => {
			F !== G.current && ((G.current = F), b(F));
		}, []),
		O = u || S,
		_ = c || E,
		B = C.useRef(null),
		G = C.useRef(null),
		H = C.useRef(g),
		q = h != null,
		oe = Vu(h),
		ye = Vu(a),
		J = Vu(m),
		ge = C.useCallback(() => {
			if (!B.current || !G.current) return;
			const F = { placement: n, strategy: i, middleware: x };
			(ye.current && (F.platform = ye.current),
				gS(B.current, G.current, F).then(z => {
					const W = { ...z, isPositioned: J.current !== !1 };
					de.current &&
						!Pa(H.current, W) &&
						((H.current = W),
						$c.flushSync(() => {
							y(W);
						}));
				}));
		}, [x, n, i, ye, J]);
	da(() => {
		m === !1 && H.current.isPositioned && ((H.current.isPositioned = !1), y(F => ({ ...F, isPositioned: !1 })));
	}, [m]);
	const de = C.useRef(!1);
	(da(
		() => (
			(de.current = !0),
			() => {
				de.current = !1;
			}
		),
		[],
	),
		da(() => {
			if ((O && (B.current = O), _ && (G.current = _), O && _)) {
				if (oe.current) return oe.current(O, _, ge);
				ge();
			}
		}, [O, _, ge, oe, q]));
	const Ce = C.useMemo(() => ({ reference: B, floating: G, setReference: M, setFloating: D }), [M, D]),
		he = C.useMemo(() => ({ reference: O, floating: _ }), [O, _]),
		X = C.useMemo(() => {
			const F = { position: i, left: 0, top: 0 };
			if (!he.floating) return F;
			const z = Fp(he.floating, g.x),
				W = Fp(he.floating, g.y);
			return d
				? {
						...F,
						transform: 'translate(' + z + 'px, ' + W + 'px)',
						...(Bg(he.floating) >= 1.5 && { willChange: 'transform' }),
					}
				: { position: i, left: z, top: W };
		}, [i, d, he.floating, g.x, g.y]);
	return C.useMemo(() => ({ ...g, update: ge, refs: Ce, elements: he, floatingStyles: X }), [g, ge, Ce, he, X]);
}
const xS = e => {
		function n(i) {
			return {}.hasOwnProperty.call(i, 'current');
		}
		return {
			name: 'arrow',
			options: e,
			fn(i) {
				const { element: s, padding: a } = typeof e == 'function' ? e(i) : e;
				return s && n(s)
					? s.current != null
						? Vp({ element: s.current, padding: a }).fn(i)
						: {}
					: s
						? Vp({ element: s, padding: a }).fn(i)
						: {};
			},
		};
	},
	SS = (e, n) => ({ ...cS(e), options: [e, n] }),
	CS = (e, n) => ({ ...fS(e), options: [e, n] }),
	ES = (e, n) => ({ ...mS(e), options: [e, n] }),
	PS = (e, n) => ({ ...dS(e), options: [e, n] }),
	TS = (e, n) => ({ ...hS(e), options: [e, n] }),
	kS = (e, n) => ({ ...pS(e), options: [e, n] }),
	bS = (e, n) => ({ ...xS(e), options: [e, n] });
var RS = 'Arrow',
	Ug = C.forwardRef((e, n) => {
		const { children: i, width: s = 10, height: a = 5, ...u } = e;
		return j.jsx(Ir.svg, {
			...u,
			ref: n,
			width: s,
			height: a,
			viewBox: '0 0 30 10',
			preserveAspectRatio: 'none',
			children: e.asChild ? i : j.jsx('polygon', { points: '0,0 30,0 15,10' }),
		});
	});
Ug.displayName = RS;
var AS = Ug;
function MS(e) {
	const [n, i] = C.useState(void 0);
	return (
		Ro(() => {
			if (e) {
				i({ width: e.offsetWidth, height: e.offsetHeight });
				const s = new ResizeObserver(a => {
					if (!Array.isArray(a) || !a.length) return;
					const u = a[0];
					let c, d;
					if ('borderBoxSize' in u) {
						const h = u.borderBoxSize,
							m = Array.isArray(h) ? h[0] : h;
						((c = m.inlineSize), (d = m.blockSize));
					} else ((c = e.offsetWidth), (d = e.offsetHeight));
					i({ width: c, height: d });
				});
				return (s.observe(e, { box: 'border-box' }), () => s.unobserve(e));
			} else i(void 0);
		}, [e]),
		n
	);
}
var $g = 'Popper',
	[Wg, Hg] = bg($g),
	[F2, Kg] = Wg($g),
	Gg = 'PopperAnchor',
	Qg = C.forwardRef((e, n) => {
		const { __scopePopper: i, virtualRef: s, ...a } = e,
			u = Kg(Gg, i),
			c = C.useRef(null),
			d = jr(n, c),
			h = C.useRef(null);
		return (
			C.useEffect(() => {
				const m = h.current;
				((h.current = s?.current || c.current), m !== h.current && u.onAnchorChange(h.current));
			}),
			s ? null : j.jsx(Ir.div, { ...a, ref: d })
		);
	});
Qg.displayName = Gg;
var Xc = 'PopperContent',
	[DS, LS] = Wg(Xc),
	Yg = C.forwardRef((e, n) => {
		const {
				__scopePopper: i,
				side: s = 'bottom',
				sideOffset: a = 0,
				align: u = 'center',
				alignOffset: c = 0,
				arrowPadding: d = 0,
				avoidCollisions: h = !0,
				collisionBoundary: m = [],
				collisionPadding: g = 0,
				sticky: y = 'partial',
				hideWhenDetached: x = !1,
				updatePositionStrategy: v = 'optimized',
				onPlaced: S,
				...P
			} = e,
			E = Kg(Xc, i),
			[b, M] = C.useState(null),
			D = jr(n, le => M(le)),
			[O, _] = C.useState(null),
			B = MS(O),
			G = B?.width ?? 0,
			H = B?.height ?? 0,
			q = s + (u !== 'center' ? '-' + u : ''),
			oe = typeof g == 'number' ? g : { top: 0, right: 0, bottom: 0, left: 0, ...g },
			ye = Array.isArray(m) ? m : [m],
			J = ye.length > 0,
			ge = { padding: oe, boundary: ye.filter(NS), altBoundary: J },
			{
				refs: de,
				floatingStyles: Ce,
				placement: he,
				isPositioned: X,
				middlewareData: F,
			} = wS({
				strategy: 'fixed',
				placement: q,
				whileElementsMounted: (...le) => uS(...le, { animationFrame: v === 'always' }),
				elements: { reference: E.anchor },
				middleware: [
					SS({ mainAxis: a + H, alignmentAxis: c }),
					h && CS({ mainAxis: !0, crossAxis: !1, limiter: y === 'partial' ? ES() : void 0, ...ge }),
					h && PS({ ...ge }),
					TS({
						...ge,
						apply: ({ elements: le, rects: Se, availableWidth: Pe, availableHeight: Ue }) => {
							const { width: At, height: _n } = Se.reference,
								Mt = le.floating.style;
							(Mt.setProperty('--radix-popper-available-width', `${Pe}px`),
								Mt.setProperty('--radix-popper-available-height', `${Ue}px`),
								Mt.setProperty('--radix-popper-anchor-width', `${At}px`),
								Mt.setProperty('--radix-popper-anchor-height', `${_n}px`));
						},
					}),
					O && bS({ element: O, padding: d }),
					jS({ arrowWidth: G, arrowHeight: H }),
					x && kS({ strategy: 'referenceHidden', ...ge }),
				],
			}),
			[z, W] = Zg(he),
			A = Ia(S);
		Ro(() => {
			X && A?.();
		}, [X, A]);
		const V = F.arrow?.x,
			ee = F.arrow?.y,
			ie = F.arrow?.centerOffset !== 0,
			[fe, ve] = C.useState();
		return (
			Ro(() => {
				b && ve(window.getComputedStyle(b).zIndex);
			}, [b]),
			j.jsx('div', {
				ref: de.setFloating,
				'data-radix-popper-content-wrapper': '',
				style: {
					...Ce,
					transform: X ? Ce.transform : 'translate(0, -200%)',
					minWidth: 'max-content',
					zIndex: fe,
					'--radix-popper-transform-origin': [F.transformOrigin?.x, F.transformOrigin?.y].join(' '),
					...(F.hide?.referenceHidden && { visibility: 'hidden', pointerEvents: 'none' }),
				},
				dir: e.dir,
				children: j.jsx(DS, {
					scope: i,
					placedSide: z,
					onArrowChange: _,
					arrowX: V,
					arrowY: ee,
					shouldHideArrow: ie,
					children: j.jsx(Ir.div, {
						'data-side': z,
						'data-align': W,
						...P,
						ref: D,
						style: { ...P.style, animation: X ? void 0 : 'none' },
					}),
				}),
			})
		);
	});
Yg.displayName = Xc;
var Xg = 'PopperArrow',
	OS = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
	qg = C.forwardRef(function (n, i) {
		const { __scopePopper: s, ...a } = n,
			u = LS(Xg, s),
			c = OS[u.placedSide];
		return j.jsx('span', {
			ref: u.onArrowChange,
			style: {
				position: 'absolute',
				left: u.arrowX,
				top: u.arrowY,
				[c]: 0,
				transformOrigin: { top: '', right: '0 0', bottom: 'center 0', left: '100% 0' }[u.placedSide],
				transform: {
					top: 'translateY(100%)',
					right: 'translateY(50%) rotate(90deg) translateX(-50%)',
					bottom: 'rotate(180deg)',
					left: 'translateY(50%) rotate(-90deg) translateX(50%)',
				}[u.placedSide],
				visibility: u.shouldHideArrow ? 'hidden' : void 0,
			},
			children: j.jsx(AS, { ...a, ref: i, style: { ...a.style, display: 'block' } }),
		});
	});
qg.displayName = Xg;
function NS(e) {
	return e !== null;
}
var jS = e => ({
	name: 'transformOrigin',
	options: e,
	fn(n) {
		const { placement: i, rects: s, middlewareData: a } = n,
			c = a.arrow?.centerOffset !== 0,
			d = c ? 0 : e.arrowWidth,
			h = c ? 0 : e.arrowHeight,
			[m, g] = Zg(i),
			y = { start: '0%', center: '50%', end: '100%' }[g],
			x = (a.arrow?.x ?? 0) + d / 2,
			v = (a.arrow?.y ?? 0) + h / 2;
		let S = '',
			P = '';
		return (
			m === 'bottom'
				? ((S = c ? y : `${x}px`), (P = `${-h}px`))
				: m === 'top'
					? ((S = c ? y : `${x}px`), (P = `${s.floating.height + h}px`))
					: m === 'right'
						? ((S = `${-h}px`), (P = c ? y : `${v}px`))
						: m === 'left' && ((S = `${s.floating.width + h}px`), (P = c ? y : `${v}px`)),
			{ data: { x: S, y: P } }
		);
	},
});
function Zg(e) {
	const [n, i = 'center'] = e.split('-');
	return [n, i];
}
var IS = Qg,
	_S = Yg,
	VS = qg;
function FS(e, n) {
	return C.useReducer((i, s) => n[i][s] ?? i, e);
}
var Jg = e => {
	const { present: n, children: i } = e,
		s = zS(n),
		a = typeof i == 'function' ? i({ present: s.isPresent }) : C.Children.only(i),
		u = jr(s.ref, BS(a));
	return typeof i == 'function' || s.isPresent ? C.cloneElement(a, { ref: u }) : null;
};
Jg.displayName = 'Presence';
function zS(e) {
	const [n, i] = C.useState(),
		s = C.useRef(null),
		a = C.useRef(e),
		u = C.useRef('none'),
		c = e ? 'mounted' : 'unmounted',
		[d, h] = FS(c, {
			mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
			unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
			unmounted: { MOUNT: 'mounted' },
		});
	return (
		C.useEffect(() => {
			const m = sa(s.current);
			u.current = d === 'mounted' ? m : 'none';
		}, [d]),
		Ro(() => {
			const m = s.current,
				g = a.current;
			if (g !== e) {
				const x = u.current,
					v = sa(m);
				(e
					? h('MOUNT')
					: v === 'none' || m?.display === 'none'
						? h('UNMOUNT')
						: h(g && x !== v ? 'ANIMATION_OUT' : 'UNMOUNT'),
					(a.current = e));
			}
		}, [e, h]),
		Ro(() => {
			if (n) {
				let m;
				const g = n.ownerDocument.defaultView ?? window,
					y = v => {
						const P = sa(s.current).includes(CSS.escape(v.animationName));
						if (v.target === n && P && (h('ANIMATION_END'), !a.current)) {
							const E = n.style.animationFillMode;
							((n.style.animationFillMode = 'forwards'),
								(m = g.setTimeout(() => {
									n.style.animationFillMode === 'forwards' && (n.style.animationFillMode = E);
								})));
						}
					},
					x = v => {
						v.target === n && (u.current = sa(s.current));
					};
				return (
					n.addEventListener('animationstart', x),
					n.addEventListener('animationcancel', y),
					n.addEventListener('animationend', y),
					() => {
						(g.clearTimeout(m),
							n.removeEventListener('animationstart', x),
							n.removeEventListener('animationcancel', y),
							n.removeEventListener('animationend', y));
					}
				);
			} else h('ANIMATION_END');
		}, [n, h]),
		{
			isPresent: ['mounted', 'unmountSuspended'].includes(d),
			ref: C.useCallback(m => {
				((s.current = m ? getComputedStyle(m) : null), i(m));
			}, []),
		}
	);
}
function sa(e) {
	return e?.animationName || 'none';
}
function BS(e) {
	let n = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
		i = n && 'isReactWarning' in n && n.isReactWarning;
	return i
		? e.ref
		: ((n = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
			(i = n && 'isReactWarning' in n && n.isReactWarning),
			i ? e.props.ref : e.props.ref || e.ref);
}
var US = Symbol('radix.slottable');
function $S(e) {
	const n = ({ children: i }) => j.jsx(j.Fragment, { children: i });
	return ((n.displayName = `${e}.Slottable`), (n.__radixId = US), n);
}
var WS = Object.freeze({
		position: 'absolute',
		border: 0,
		width: 1,
		height: 1,
		padding: 0,
		margin: -1,
		overflow: 'hidden',
		clip: 'rect(0, 0, 0, 0)',
		whiteSpace: 'nowrap',
		wordWrap: 'normal',
	}),
	HS = 'VisuallyHidden',
	ey = C.forwardRef((e, n) => j.jsx(Ir.span, { ...e, ref: n, style: { ...WS, ...e.style } }));
ey.displayName = HS;
var KS = ey,
	[Ba] = bg('Tooltip', [Hg]),
	qc = Hg(),
	ty = 'TooltipProvider',
	GS = 700,
	zp = 'tooltip.open',
	[QS, ny] = Ba(ty),
	ry = e => {
		const {
				__scopeTooltip: n,
				delayDuration: i = GS,
				skipDelayDuration: s = 300,
				disableHoverableContent: a = !1,
				children: u,
			} = e,
			c = C.useRef(!0),
			d = C.useRef(!1),
			h = C.useRef(0);
		return (
			C.useEffect(() => {
				const m = h.current;
				return () => window.clearTimeout(m);
			}, []),
			j.jsx(QS, {
				scope: n,
				isOpenDelayedRef: c,
				delayDuration: i,
				onOpen: C.useCallback(() => {
					(window.clearTimeout(h.current), (c.current = !1));
				}, []),
				onClose: C.useCallback(() => {
					(window.clearTimeout(h.current), (h.current = window.setTimeout(() => (c.current = !0), s)));
				}, [s]),
				isPointerInTransitRef: d,
				onPointerInTransitChange: C.useCallback(m => {
					d.current = m;
				}, []),
				disableHoverableContent: a,
				children: u,
			})
		);
	};
ry.displayName = ty;
var iy = 'Tooltip',
	[z2, Ua] = Ba(iy),
	lc = 'TooltipTrigger',
	YS = C.forwardRef((e, n) => {
		const { __scopeTooltip: i, ...s } = e,
			a = Ua(lc, i),
			u = ny(lc, i),
			c = qc(i),
			d = C.useRef(null),
			h = jr(n, d, a.onTriggerChange),
			m = C.useRef(!1),
			g = C.useRef(!1),
			y = C.useCallback(() => (m.current = !1), []);
		return (
			C.useEffect(() => () => document.removeEventListener('pointerup', y), [y]),
			j.jsx(IS, {
				asChild: !0,
				...c,
				children: j.jsx(Ir.button, {
					'aria-describedby': a.open ? a.contentId : void 0,
					'data-state': a.stateAttribute,
					...s,
					ref: h,
					onPointerMove: On(e.onPointerMove, x => {
						x.pointerType !== 'touch' &&
							!g.current &&
							!u.isPointerInTransitRef.current &&
							(a.onTriggerEnter(), (g.current = !0));
					}),
					onPointerLeave: On(e.onPointerLeave, () => {
						(a.onTriggerLeave(), (g.current = !1));
					}),
					onPointerDown: On(e.onPointerDown, () => {
						(a.open && a.onClose(), (m.current = !0), document.addEventListener('pointerup', y, { once: !0 }));
					}),
					onFocus: On(e.onFocus, () => {
						m.current || a.onOpen();
					}),
					onBlur: On(e.onBlur, a.onClose),
					onClick: On(e.onClick, a.onClose),
				}),
			})
		);
	});
YS.displayName = lc;
var XS = 'TooltipPortal',
	[B2, qS] = Ba(XS, { forceMount: void 0 }),
	Pi = 'TooltipContent',
	oy = C.forwardRef((e, n) => {
		const i = qS(Pi, e.__scopeTooltip),
			{ forceMount: s = i.forceMount, side: a = 'top', ...u } = e,
			c = Ua(Pi, e.__scopeTooltip);
		return j.jsx(Jg, {
			present: s || c.open,
			children: c.disableHoverableContent ? j.jsx(sy, { side: a, ...u, ref: n }) : j.jsx(ZS, { side: a, ...u, ref: n }),
		});
	}),
	ZS = C.forwardRef((e, n) => {
		const i = Ua(Pi, e.__scopeTooltip),
			s = ny(Pi, e.__scopeTooltip),
			a = C.useRef(null),
			u = jr(n, a),
			[c, d] = C.useState(null),
			{ trigger: h, onClose: m } = i,
			g = a.current,
			{ onPointerInTransitChange: y } = s,
			x = C.useCallback(() => {
				(d(null), y(!1));
			}, [y]),
			v = C.useCallback(
				(S, P) => {
					const E = S.currentTarget,
						b = { x: S.clientX, y: S.clientY },
						M = rC(b, E.getBoundingClientRect()),
						D = iC(b, M),
						O = oC(P.getBoundingClientRect()),
						_ = aC([...D, ...O]);
					(d(_), y(!0));
				},
				[y],
			);
		return (
			C.useEffect(() => () => x(), [x]),
			C.useEffect(() => {
				if (h && g) {
					const S = E => v(E, g),
						P = E => v(E, h);
					return (
						h.addEventListener('pointerleave', S),
						g.addEventListener('pointerleave', P),
						() => {
							(h.removeEventListener('pointerleave', S), g.removeEventListener('pointerleave', P));
						}
					);
				}
			}, [h, g, v, x]),
			C.useEffect(() => {
				if (c) {
					const S = P => {
						const E = P.target,
							b = { x: P.clientX, y: P.clientY },
							M = h?.contains(E) || g?.contains(E),
							D = !sC(b, c);
						M ? x() : D && (x(), m());
					};
					return (document.addEventListener('pointermove', S), () => document.removeEventListener('pointermove', S));
				}
			}, [h, g, c, m, x]),
			j.jsx(sy, { ...e, ref: u })
		);
	}),
	[JS, eC] = Ba(iy, { isInside: !1 }),
	tC = $S('TooltipContent'),
	sy = C.forwardRef((e, n) => {
		const { __scopeTooltip: i, children: s, 'aria-label': a, onEscapeKeyDown: u, onPointerDownOutside: c, ...d } = e,
			h = Ua(Pi, i),
			m = qc(i),
			{ onClose: g } = h;
		return (
			C.useEffect(() => (document.addEventListener(zp, g), () => document.removeEventListener(zp, g)), [g]),
			C.useEffect(() => {
				if (h.trigger) {
					const y = x => {
						x.target?.contains(h.trigger) && g();
					};
					return (
						window.addEventListener('scroll', y, { capture: !0 }),
						() => window.removeEventListener('scroll', y, { capture: !0 })
					);
				}
			}, [h.trigger, g]),
			j.jsx(Ag, {
				asChild: !0,
				disableOutsidePointerEvents: !1,
				onEscapeKeyDown: u,
				onPointerDownOutside: c,
				onFocusOutside: y => y.preventDefault(),
				onDismiss: g,
				children: j.jsxs(_S, {
					'data-state': h.stateAttribute,
					...m,
					...d,
					ref: n,
					style: {
						...d.style,
						'--radix-tooltip-content-transform-origin': 'var(--radix-popper-transform-origin)',
						'--radix-tooltip-content-available-width': 'var(--radix-popper-available-width)',
						'--radix-tooltip-content-available-height': 'var(--radix-popper-available-height)',
						'--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
						'--radix-tooltip-trigger-height': 'var(--radix-popper-anchor-height)',
					},
					children: [
						j.jsx(tC, { children: s }),
						j.jsx(JS, {
							scope: i,
							isInside: !0,
							children: j.jsx(KS, { id: h.contentId, role: 'tooltip', children: a || s }),
						}),
					],
				}),
			})
		);
	});
oy.displayName = Pi;
var ay = 'TooltipArrow',
	nC = C.forwardRef((e, n) => {
		const { __scopeTooltip: i, ...s } = e,
			a = qc(i);
		return eC(ay, i).isInside ? null : j.jsx(VS, { ...a, ...s, ref: n });
	});
nC.displayName = ay;
function rC(e, n) {
	const i = Math.abs(n.top - e.y),
		s = Math.abs(n.bottom - e.y),
		a = Math.abs(n.right - e.x),
		u = Math.abs(n.left - e.x);
	switch (Math.min(i, s, a, u)) {
		case u:
			return 'left';
		case a:
			return 'right';
		case i:
			return 'top';
		case s:
			return 'bottom';
		default:
			throw new Error('unreachable');
	}
}
function iC(e, n, i = 5) {
	const s = [];
	switch (n) {
		case 'top':
			s.push({ x: e.x - i, y: e.y + i }, { x: e.x + i, y: e.y + i });
			break;
		case 'bottom':
			s.push({ x: e.x - i, y: e.y - i }, { x: e.x + i, y: e.y - i });
			break;
		case 'left':
			s.push({ x: e.x + i, y: e.y - i }, { x: e.x + i, y: e.y + i });
			break;
		case 'right':
			s.push({ x: e.x - i, y: e.y - i }, { x: e.x - i, y: e.y + i });
			break;
	}
	return s;
}
function oC(e) {
	const { top: n, right: i, bottom: s, left: a } = e;
	return [
		{ x: a, y: n },
		{ x: i, y: n },
		{ x: i, y: s },
		{ x: a, y: s },
	];
}
function sC(e, n) {
	const { x: i, y: s } = e;
	let a = !1;
	for (let u = 0, c = n.length - 1; u < n.length; c = u++) {
		const d = n[u],
			h = n[c],
			m = d.x,
			g = d.y,
			y = h.x,
			x = h.y;
		g > s != x > s && i < ((y - m) * (s - g)) / (x - g) + m && (a = !a);
	}
	return a;
}
function aC(e) {
	const n = e.slice();
	return (n.sort((i, s) => (i.x < s.x ? -1 : i.x > s.x ? 1 : i.y < s.y ? -1 : i.y > s.y ? 1 : 0)), lC(n));
}
function lC(e) {
	if (e.length <= 1) return e.slice();
	const n = [];
	for (let s = 0; s < e.length; s++) {
		const a = e[s];
		for (; n.length >= 2; ) {
			const u = n[n.length - 1],
				c = n[n.length - 2];
			if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) n.pop();
			else break;
		}
		n.push(a);
	}
	n.pop();
	const i = [];
	for (let s = e.length - 1; s >= 0; s--) {
		const a = e[s];
		for (; i.length >= 2; ) {
			const u = i[i.length - 1],
				c = i[i.length - 2];
			if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) i.pop();
			else break;
		}
		i.push(a);
	}
	return (i.pop(), n.length === 1 && i.length === 1 && n[0].x === i[0].x && n[0].y === i[0].y ? n : n.concat(i));
}
var uC = ry,
	ly = oy;
function uy(e) {
	var n,
		i,
		s = '';
	if (typeof e == 'string' || typeof e == 'number') s += e;
	else if (typeof e == 'object')
		if (Array.isArray(e)) {
			var a = e.length;
			for (n = 0; n < a; n++) e[n] && (i = uy(e[n])) && (s && (s += ' '), (s += i));
		} else for (i in e) e[i] && (s && (s += ' '), (s += i));
	return s;
}
function cC() {
	for (var e, n, i = 0, s = '', a = arguments.length; i < a; i++)
		(e = arguments[i]) && (n = uy(e)) && (s && (s += ' '), (s += n));
	return s;
}
const Zc = '-',
	fC = e => {
		const n = hC(e),
			{ conflictingClassGroups: i, conflictingClassGroupModifiers: s } = e;
		return {
			getClassGroupId: c => {
				const d = c.split(Zc);
				return (d[0] === '' && d.length !== 1 && d.shift(), cy(d, n) || dC(c));
			},
			getConflictingClassGroupIds: (c, d) => {
				const h = i[c] || [];
				return d && s[c] ? [...h, ...s[c]] : h;
			},
		};
	},
	cy = (e, n) => {
		if (e.length === 0) return n.classGroupId;
		const i = e[0],
			s = n.nextPart.get(i),
			a = s ? cy(e.slice(1), s) : void 0;
		if (a) return a;
		if (n.validators.length === 0) return;
		const u = e.join(Zc);
		return n.validators.find(({ validator: c }) => c(u))?.classGroupId;
	},
	Bp = /^\[(.+)\]$/,
	dC = e => {
		if (Bp.test(e)) {
			const n = Bp.exec(e)[1],
				i = n?.substring(0, n.indexOf(':'));
			if (i) return 'arbitrary..' + i;
		}
	},
	hC = e => {
		const { theme: n, prefix: i } = e,
			s = { nextPart: new Map(), validators: [] };
		return (
			mC(Object.entries(e.classGroups), i).forEach(([u, c]) => {
				uc(c, s, u, n);
			}),
			s
		);
	},
	uc = (e, n, i, s) => {
		e.forEach(a => {
			if (typeof a == 'string') {
				const u = a === '' ? n : Up(n, a);
				u.classGroupId = i;
				return;
			}
			if (typeof a == 'function') {
				if (pC(a)) {
					uc(a(s), n, i, s);
					return;
				}
				n.validators.push({ validator: a, classGroupId: i });
				return;
			}
			Object.entries(a).forEach(([u, c]) => {
				uc(c, Up(n, u), i, s);
			});
		});
	},
	Up = (e, n) => {
		let i = e;
		return (
			n.split(Zc).forEach(s => {
				(i.nextPart.has(s) || i.nextPart.set(s, { nextPart: new Map(), validators: [] }), (i = i.nextPart.get(s)));
			}),
			i
		);
	},
	pC = e => e.isThemeGetter,
	mC = (e, n) =>
		n
			? e.map(([i, s]) => {
					const a = s.map(u =>
						typeof u == 'string'
							? n + u
							: typeof u == 'object'
								? Object.fromEntries(Object.entries(u).map(([c, d]) => [n + c, d]))
								: u,
					);
					return [i, a];
				})
			: e,
	gC = e => {
		if (e < 1) return { get: () => {}, set: () => {} };
		let n = 0,
			i = new Map(),
			s = new Map();
		const a = (u, c) => {
			(i.set(u, c), n++, n > e && ((n = 0), (s = i), (i = new Map())));
		};
		return {
			get(u) {
				let c = i.get(u);
				if (c !== void 0) return c;
				if ((c = s.get(u)) !== void 0) return (a(u, c), c);
			},
			set(u, c) {
				i.has(u) ? i.set(u, c) : a(u, c);
			},
		};
	},
	fy = '!',
	yC = e => {
		const { separator: n, experimentalParseClassName: i } = e,
			s = n.length === 1,
			a = n[0],
			u = n.length,
			c = d => {
				const h = [];
				let m = 0,
					g = 0,
					y;
				for (let E = 0; E < d.length; E++) {
					let b = d[E];
					if (m === 0) {
						if (b === a && (s || d.slice(E, E + u) === n)) {
							(h.push(d.slice(g, E)), (g = E + u));
							continue;
						}
						if (b === '/') {
							y = E;
							continue;
						}
					}
					b === '[' ? m++ : b === ']' && m--;
				}
				const x = h.length === 0 ? d : d.substring(g),
					v = x.startsWith(fy),
					S = v ? x.substring(1) : x,
					P = y && y > g ? y - g : void 0;
				return { modifiers: h, hasImportantModifier: v, baseClassName: S, maybePostfixModifierPosition: P };
			};
		return i ? d => i({ className: d, parseClassName: c }) : c;
	},
	vC = e => {
		if (e.length <= 1) return e;
		const n = [];
		let i = [];
		return (
			e.forEach(s => {
				s[0] === '[' ? (n.push(...i.sort(), s), (i = [])) : i.push(s);
			}),
			n.push(...i.sort()),
			n
		);
	},
	wC = e => ({ cache: gC(e.cacheSize), parseClassName: yC(e), ...fC(e) }),
	xC = /\s+/,
	SC = (e, n) => {
		const { parseClassName: i, getClassGroupId: s, getConflictingClassGroupIds: a } = n,
			u = [],
			c = e.trim().split(xC);
		let d = '';
		for (let h = c.length - 1; h >= 0; h -= 1) {
			const m = c[h],
				{ modifiers: g, hasImportantModifier: y, baseClassName: x, maybePostfixModifierPosition: v } = i(m);
			let S = !!v,
				P = s(S ? x.substring(0, v) : x);
			if (!P) {
				if (!S) {
					d = m + (d.length > 0 ? ' ' + d : d);
					continue;
				}
				if (((P = s(x)), !P)) {
					d = m + (d.length > 0 ? ' ' + d : d);
					continue;
				}
				S = !1;
			}
			const E = vC(g).join(':'),
				b = y ? E + fy : E,
				M = b + P;
			if (u.includes(M)) continue;
			u.push(M);
			const D = a(P, S);
			for (let O = 0; O < D.length; ++O) {
				const _ = D[O];
				u.push(b + _);
			}
			d = m + (d.length > 0 ? ' ' + d : d);
		}
		return d;
	};
function CC() {
	let e = 0,
		n,
		i,
		s = '';
	for (; e < arguments.length; ) (n = arguments[e++]) && (i = dy(n)) && (s && (s += ' '), (s += i));
	return s;
}
const dy = e => {
	if (typeof e == 'string') return e;
	let n,
		i = '';
	for (let s = 0; s < e.length; s++) e[s] && (n = dy(e[s])) && (i && (i += ' '), (i += n));
	return i;
};
function EC(e, ...n) {
	let i,
		s,
		a,
		u = c;
	function c(h) {
		const m = n.reduce((g, y) => y(g), e());
		return ((i = wC(m)), (s = i.cache.get), (a = i.cache.set), (u = d), d(h));
	}
	function d(h) {
		const m = s(h);
		if (m) return m;
		const g = SC(h, i);
		return (a(h, g), g);
	}
	return function () {
		return u(CC.apply(null, arguments));
	};
}
const Oe = e => {
		const n = i => i[e] || [];
		return ((n.isThemeGetter = !0), n);
	},
	hy = /^\[(?:([a-z-]+):)?(.+)\]$/i,
	PC = /^\d+\/\d+$/,
	TC = new Set(['px', 'full', 'screen']),
	kC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	bC =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	RC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
	AC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	MC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	Ln = e => wi(e) || TC.has(e) || PC.test(e),
	or = e => Ri(e, 'length', VC),
	wi = e => !!e && !Number.isNaN(Number(e)),
	Fu = e => Ri(e, 'number', wi),
	xo = e => !!e && Number.isInteger(Number(e)),
	DC = e => e.endsWith('%') && wi(e.slice(0, -1)),
	we = e => hy.test(e),
	sr = e => kC.test(e),
	LC = new Set(['length', 'size', 'percentage']),
	OC = e => Ri(e, LC, py),
	NC = e => Ri(e, 'position', py),
	jC = new Set(['image', 'url']),
	IC = e => Ri(e, jC, zC),
	_C = e => Ri(e, '', FC),
	So = () => !0,
	Ri = (e, n, i) => {
		const s = hy.exec(e);
		return s ? (s[1] ? (typeof n == 'string' ? s[1] === n : n.has(s[1])) : i(s[2])) : !1;
	},
	VC = e => bC.test(e) && !RC.test(e),
	py = () => !1,
	FC = e => AC.test(e),
	zC = e => MC.test(e),
	BC = () => {
		const e = Oe('colors'),
			n = Oe('spacing'),
			i = Oe('blur'),
			s = Oe('brightness'),
			a = Oe('borderColor'),
			u = Oe('borderRadius'),
			c = Oe('borderSpacing'),
			d = Oe('borderWidth'),
			h = Oe('contrast'),
			m = Oe('grayscale'),
			g = Oe('hueRotate'),
			y = Oe('invert'),
			x = Oe('gap'),
			v = Oe('gradientColorStops'),
			S = Oe('gradientColorStopPositions'),
			P = Oe('inset'),
			E = Oe('margin'),
			b = Oe('opacity'),
			M = Oe('padding'),
			D = Oe('saturate'),
			O = Oe('scale'),
			_ = Oe('sepia'),
			B = Oe('skew'),
			G = Oe('space'),
			H = Oe('translate'),
			q = () => ['auto', 'contain', 'none'],
			oe = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
			ye = () => ['auto', we, n],
			J = () => [we, n],
			ge = () => ['', Ln, or],
			de = () => ['auto', wi, we],
			Ce = () => ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'],
			he = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
			X = () => [
				'normal',
				'multiply',
				'screen',
				'overlay',
				'darken',
				'lighten',
				'color-dodge',
				'color-burn',
				'hard-light',
				'soft-light',
				'difference',
				'exclusion',
				'hue',
				'saturation',
				'color',
				'luminosity',
			],
			F = () => ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
			z = () => ['', '0', we],
			W = () => ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'],
			A = () => [wi, we];
		return {
			cacheSize: 500,
			separator: ':',
			theme: {
				colors: [So],
				spacing: [Ln, or],
				blur: ['none', '', sr, we],
				brightness: A(),
				borderColor: [e],
				borderRadius: ['none', '', 'full', sr, we],
				borderSpacing: J(),
				borderWidth: ge(),
				contrast: A(),
				grayscale: z(),
				hueRotate: A(),
				invert: z(),
				gap: J(),
				gradientColorStops: [e],
				gradientColorStopPositions: [DC, or],
				inset: ye(),
				margin: ye(),
				opacity: A(),
				padding: J(),
				saturate: A(),
				scale: A(),
				sepia: z(),
				skew: A(),
				space: J(),
				translate: J(),
			},
			classGroups: {
				aspect: [{ aspect: ['auto', 'square', 'video', we] }],
				container: ['container'],
				columns: [{ columns: [sr] }],
				'break-after': [{ 'break-after': W() }],
				'break-before': [{ 'break-before': W() }],
				'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
				'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
				box: [{ box: ['border', 'content'] }],
				display: [
					'block',
					'inline-block',
					'inline',
					'flex',
					'inline-flex',
					'table',
					'inline-table',
					'table-caption',
					'table-cell',
					'table-column',
					'table-column-group',
					'table-footer-group',
					'table-header-group',
					'table-row-group',
					'table-row',
					'flow-root',
					'grid',
					'inline-grid',
					'contents',
					'list-item',
					'hidden',
				],
				float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
				clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
				isolation: ['isolate', 'isolation-auto'],
				'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
				'object-position': [{ object: [...Ce(), we] }],
				overflow: [{ overflow: oe() }],
				'overflow-x': [{ 'overflow-x': oe() }],
				'overflow-y': [{ 'overflow-y': oe() }],
				overscroll: [{ overscroll: q() }],
				'overscroll-x': [{ 'overscroll-x': q() }],
				'overscroll-y': [{ 'overscroll-y': q() }],
				position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
				inset: [{ inset: [P] }],
				'inset-x': [{ 'inset-x': [P] }],
				'inset-y': [{ 'inset-y': [P] }],
				start: [{ start: [P] }],
				end: [{ end: [P] }],
				top: [{ top: [P] }],
				right: [{ right: [P] }],
				bottom: [{ bottom: [P] }],
				left: [{ left: [P] }],
				visibility: ['visible', 'invisible', 'collapse'],
				z: [{ z: ['auto', xo, we] }],
				basis: [{ basis: ye() }],
				'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
				'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
				flex: [{ flex: ['1', 'auto', 'initial', 'none', we] }],
				grow: [{ grow: z() }],
				shrink: [{ shrink: z() }],
				order: [{ order: ['first', 'last', 'none', xo, we] }],
				'grid-cols': [{ 'grid-cols': [So] }],
				'col-start-end': [{ col: ['auto', { span: ['full', xo, we] }, we] }],
				'col-start': [{ 'col-start': de() }],
				'col-end': [{ 'col-end': de() }],
				'grid-rows': [{ 'grid-rows': [So] }],
				'row-start-end': [{ row: ['auto', { span: [xo, we] }, we] }],
				'row-start': [{ 'row-start': de() }],
				'row-end': [{ 'row-end': de() }],
				'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
				'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', we] }],
				'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', we] }],
				gap: [{ gap: [x] }],
				'gap-x': [{ 'gap-x': [x] }],
				'gap-y': [{ 'gap-y': [x] }],
				'justify-content': [{ justify: ['normal', ...F()] }],
				'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
				'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
				'align-content': [{ content: ['normal', ...F(), 'baseline'] }],
				'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
				'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
				'place-content': [{ 'place-content': [...F(), 'baseline'] }],
				'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
				'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
				p: [{ p: [M] }],
				px: [{ px: [M] }],
				py: [{ py: [M] }],
				ps: [{ ps: [M] }],
				pe: [{ pe: [M] }],
				pt: [{ pt: [M] }],
				pr: [{ pr: [M] }],
				pb: [{ pb: [M] }],
				pl: [{ pl: [M] }],
				m: [{ m: [E] }],
				mx: [{ mx: [E] }],
				my: [{ my: [E] }],
				ms: [{ ms: [E] }],
				me: [{ me: [E] }],
				mt: [{ mt: [E] }],
				mr: [{ mr: [E] }],
				mb: [{ mb: [E] }],
				ml: [{ ml: [E] }],
				'space-x': [{ 'space-x': [G] }],
				'space-x-reverse': ['space-x-reverse'],
				'space-y': [{ 'space-y': [G] }],
				'space-y-reverse': ['space-y-reverse'],
				w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', we, n] }],
				'min-w': [{ 'min-w': [we, n, 'min', 'max', 'fit'] }],
				'max-w': [{ 'max-w': [we, n, 'none', 'full', 'min', 'max', 'fit', 'prose', { screen: [sr] }, sr] }],
				h: [{ h: [we, n, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				'min-h': [{ 'min-h': [we, n, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				'max-h': [{ 'max-h': [we, n, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
				size: [{ size: [we, n, 'auto', 'min', 'max', 'fit'] }],
				'font-size': [{ text: ['base', sr, or] }],
				'font-smoothing': ['antialiased', 'subpixel-antialiased'],
				'font-style': ['italic', 'not-italic'],
				'font-weight': [
					{ font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', Fu] },
				],
				'font-family': [{ font: [So] }],
				'fvn-normal': ['normal-nums'],
				'fvn-ordinal': ['ordinal'],
				'fvn-slashed-zero': ['slashed-zero'],
				'fvn-figure': ['lining-nums', 'oldstyle-nums'],
				'fvn-spacing': ['proportional-nums', 'tabular-nums'],
				'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
				tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', we] }],
				'line-clamp': [{ 'line-clamp': ['none', wi, Fu] }],
				leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', Ln, we] }],
				'list-image': [{ 'list-image': ['none', we] }],
				'list-style-type': [{ list: ['none', 'disc', 'decimal', we] }],
				'list-style-position': [{ list: ['inside', 'outside'] }],
				'placeholder-color': [{ placeholder: [e] }],
				'placeholder-opacity': [{ 'placeholder-opacity': [b] }],
				'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
				'text-color': [{ text: [e] }],
				'text-opacity': [{ 'text-opacity': [b] }],
				'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
				'text-decoration-style': [{ decoration: [...he(), 'wavy'] }],
				'text-decoration-thickness': [{ decoration: ['auto', 'from-font', Ln, or] }],
				'underline-offset': [{ 'underline-offset': ['auto', Ln, we] }],
				'text-decoration-color': [{ decoration: [e] }],
				'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
				'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
				'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
				indent: [{ indent: J() }],
				'vertical-align': [
					{ align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', we] },
				],
				whitespace: [{ whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] }],
				break: [{ break: ['normal', 'words', 'all', 'keep'] }],
				hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
				content: [{ content: ['none', we] }],
				'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
				'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
				'bg-opacity': [{ 'bg-opacity': [b] }],
				'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
				'bg-position': [{ bg: [...Ce(), NC] }],
				'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
				'bg-size': [{ bg: ['auto', 'cover', 'contain', OC] }],
				'bg-image': [{ bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, IC] }],
				'bg-color': [{ bg: [e] }],
				'gradient-from-pos': [{ from: [S] }],
				'gradient-via-pos': [{ via: [S] }],
				'gradient-to-pos': [{ to: [S] }],
				'gradient-from': [{ from: [v] }],
				'gradient-via': [{ via: [v] }],
				'gradient-to': [{ to: [v] }],
				rounded: [{ rounded: [u] }],
				'rounded-s': [{ 'rounded-s': [u] }],
				'rounded-e': [{ 'rounded-e': [u] }],
				'rounded-t': [{ 'rounded-t': [u] }],
				'rounded-r': [{ 'rounded-r': [u] }],
				'rounded-b': [{ 'rounded-b': [u] }],
				'rounded-l': [{ 'rounded-l': [u] }],
				'rounded-ss': [{ 'rounded-ss': [u] }],
				'rounded-se': [{ 'rounded-se': [u] }],
				'rounded-ee': [{ 'rounded-ee': [u] }],
				'rounded-es': [{ 'rounded-es': [u] }],
				'rounded-tl': [{ 'rounded-tl': [u] }],
				'rounded-tr': [{ 'rounded-tr': [u] }],
				'rounded-br': [{ 'rounded-br': [u] }],
				'rounded-bl': [{ 'rounded-bl': [u] }],
				'border-w': [{ border: [d] }],
				'border-w-x': [{ 'border-x': [d] }],
				'border-w-y': [{ 'border-y': [d] }],
				'border-w-s': [{ 'border-s': [d] }],
				'border-w-e': [{ 'border-e': [d] }],
				'border-w-t': [{ 'border-t': [d] }],
				'border-w-r': [{ 'border-r': [d] }],
				'border-w-b': [{ 'border-b': [d] }],
				'border-w-l': [{ 'border-l': [d] }],
				'border-opacity': [{ 'border-opacity': [b] }],
				'border-style': [{ border: [...he(), 'hidden'] }],
				'divide-x': [{ 'divide-x': [d] }],
				'divide-x-reverse': ['divide-x-reverse'],
				'divide-y': [{ 'divide-y': [d] }],
				'divide-y-reverse': ['divide-y-reverse'],
				'divide-opacity': [{ 'divide-opacity': [b] }],
				'divide-style': [{ divide: he() }],
				'border-color': [{ border: [a] }],
				'border-color-x': [{ 'border-x': [a] }],
				'border-color-y': [{ 'border-y': [a] }],
				'border-color-s': [{ 'border-s': [a] }],
				'border-color-e': [{ 'border-e': [a] }],
				'border-color-t': [{ 'border-t': [a] }],
				'border-color-r': [{ 'border-r': [a] }],
				'border-color-b': [{ 'border-b': [a] }],
				'border-color-l': [{ 'border-l': [a] }],
				'divide-color': [{ divide: [a] }],
				'outline-style': [{ outline: ['', ...he()] }],
				'outline-offset': [{ 'outline-offset': [Ln, we] }],
				'outline-w': [{ outline: [Ln, or] }],
				'outline-color': [{ outline: [e] }],
				'ring-w': [{ ring: ge() }],
				'ring-w-inset': ['ring-inset'],
				'ring-color': [{ ring: [e] }],
				'ring-opacity': [{ 'ring-opacity': [b] }],
				'ring-offset-w': [{ 'ring-offset': [Ln, or] }],
				'ring-offset-color': [{ 'ring-offset': [e] }],
				shadow: [{ shadow: ['', 'inner', 'none', sr, _C] }],
				'shadow-color': [{ shadow: [So] }],
				opacity: [{ opacity: [b] }],
				'mix-blend': [{ 'mix-blend': [...X(), 'plus-lighter', 'plus-darker'] }],
				'bg-blend': [{ 'bg-blend': X() }],
				filter: [{ filter: ['', 'none'] }],
				blur: [{ blur: [i] }],
				brightness: [{ brightness: [s] }],
				contrast: [{ contrast: [h] }],
				'drop-shadow': [{ 'drop-shadow': ['', 'none', sr, we] }],
				grayscale: [{ grayscale: [m] }],
				'hue-rotate': [{ 'hue-rotate': [g] }],
				invert: [{ invert: [y] }],
				saturate: [{ saturate: [D] }],
				sepia: [{ sepia: [_] }],
				'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
				'backdrop-blur': [{ 'backdrop-blur': [i] }],
				'backdrop-brightness': [{ 'backdrop-brightness': [s] }],
				'backdrop-contrast': [{ 'backdrop-contrast': [h] }],
				'backdrop-grayscale': [{ 'backdrop-grayscale': [m] }],
				'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [g] }],
				'backdrop-invert': [{ 'backdrop-invert': [y] }],
				'backdrop-opacity': [{ 'backdrop-opacity': [b] }],
				'backdrop-saturate': [{ 'backdrop-saturate': [D] }],
				'backdrop-sepia': [{ 'backdrop-sepia': [_] }],
				'border-collapse': [{ border: ['collapse', 'separate'] }],
				'border-spacing': [{ 'border-spacing': [c] }],
				'border-spacing-x': [{ 'border-spacing-x': [c] }],
				'border-spacing-y': [{ 'border-spacing-y': [c] }],
				'table-layout': [{ table: ['auto', 'fixed'] }],
				caption: [{ caption: ['top', 'bottom'] }],
				transition: [{ transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', we] }],
				duration: [{ duration: A() }],
				ease: [{ ease: ['linear', 'in', 'out', 'in-out', we] }],
				delay: [{ delay: A() }],
				animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', we] }],
				transform: [{ transform: ['', 'gpu', 'none'] }],
				scale: [{ scale: [O] }],
				'scale-x': [{ 'scale-x': [O] }],
				'scale-y': [{ 'scale-y': [O] }],
				rotate: [{ rotate: [xo, we] }],
				'translate-x': [{ 'translate-x': [H] }],
				'translate-y': [{ 'translate-y': [H] }],
				'skew-x': [{ 'skew-x': [B] }],
				'skew-y': [{ 'skew-y': [B] }],
				'transform-origin': [
					{
						origin: [
							'center',
							'top',
							'top-right',
							'right',
							'bottom-right',
							'bottom',
							'bottom-left',
							'left',
							'top-left',
							we,
						],
					},
				],
				accent: [{ accent: ['auto', e] }],
				appearance: [{ appearance: ['none', 'auto'] }],
				cursor: [
					{
						cursor: [
							'auto',
							'default',
							'pointer',
							'wait',
							'text',
							'move',
							'help',
							'not-allowed',
							'none',
							'context-menu',
							'progress',
							'cell',
							'crosshair',
							'vertical-text',
							'alias',
							'copy',
							'no-drop',
							'grab',
							'grabbing',
							'all-scroll',
							'col-resize',
							'row-resize',
							'n-resize',
							'e-resize',
							's-resize',
							'w-resize',
							'ne-resize',
							'nw-resize',
							'se-resize',
							'sw-resize',
							'ew-resize',
							'ns-resize',
							'nesw-resize',
							'nwse-resize',
							'zoom-in',
							'zoom-out',
							we,
						],
					},
				],
				'caret-color': [{ caret: [e] }],
				'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
				resize: [{ resize: ['none', 'y', 'x', ''] }],
				'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
				'scroll-m': [{ 'scroll-m': J() }],
				'scroll-mx': [{ 'scroll-mx': J() }],
				'scroll-my': [{ 'scroll-my': J() }],
				'scroll-ms': [{ 'scroll-ms': J() }],
				'scroll-me': [{ 'scroll-me': J() }],
				'scroll-mt': [{ 'scroll-mt': J() }],
				'scroll-mr': [{ 'scroll-mr': J() }],
				'scroll-mb': [{ 'scroll-mb': J() }],
				'scroll-ml': [{ 'scroll-ml': J() }],
				'scroll-p': [{ 'scroll-p': J() }],
				'scroll-px': [{ 'scroll-px': J() }],
				'scroll-py': [{ 'scroll-py': J() }],
				'scroll-ps': [{ 'scroll-ps': J() }],
				'scroll-pe': [{ 'scroll-pe': J() }],
				'scroll-pt': [{ 'scroll-pt': J() }],
				'scroll-pr': [{ 'scroll-pr': J() }],
				'scroll-pb': [{ 'scroll-pb': J() }],
				'scroll-pl': [{ 'scroll-pl': J() }],
				'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
				'snap-stop': [{ snap: ['normal', 'always'] }],
				'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
				'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
				touch: [{ touch: ['auto', 'none', 'manipulation'] }],
				'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
				'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
				'touch-pz': ['touch-pinch-zoom'],
				select: [{ select: ['none', 'text', 'all', 'auto'] }],
				'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', we] }],
				fill: [{ fill: [e, 'none'] }],
				'stroke-w': [{ stroke: [Ln, or, Fu] }],
				stroke: [{ stroke: [e, 'none'] }],
				sr: ['sr-only', 'not-sr-only'],
				'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
			},
			conflictingClassGroups: {
				overflow: ['overflow-x', 'overflow-y'],
				overscroll: ['overscroll-x', 'overscroll-y'],
				inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
				'inset-x': ['right', 'left'],
				'inset-y': ['top', 'bottom'],
				flex: ['basis', 'grow', 'shrink'],
				gap: ['gap-x', 'gap-y'],
				p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
				px: ['pr', 'pl'],
				py: ['pt', 'pb'],
				m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
				mx: ['mr', 'ml'],
				my: ['mt', 'mb'],
				size: ['w', 'h'],
				'font-size': ['leading'],
				'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
				'fvn-ordinal': ['fvn-normal'],
				'fvn-slashed-zero': ['fvn-normal'],
				'fvn-figure': ['fvn-normal'],
				'fvn-spacing': ['fvn-normal'],
				'fvn-fraction': ['fvn-normal'],
				'line-clamp': ['display', 'overflow'],
				rounded: [
					'rounded-s',
					'rounded-e',
					'rounded-t',
					'rounded-r',
					'rounded-b',
					'rounded-l',
					'rounded-ss',
					'rounded-se',
					'rounded-ee',
					'rounded-es',
					'rounded-tl',
					'rounded-tr',
					'rounded-br',
					'rounded-bl',
				],
				'rounded-s': ['rounded-ss', 'rounded-es'],
				'rounded-e': ['rounded-se', 'rounded-ee'],
				'rounded-t': ['rounded-tl', 'rounded-tr'],
				'rounded-r': ['rounded-tr', 'rounded-br'],
				'rounded-b': ['rounded-br', 'rounded-bl'],
				'rounded-l': ['rounded-tl', 'rounded-bl'],
				'border-spacing': ['border-spacing-x', 'border-spacing-y'],
				'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
				'border-w-x': ['border-w-r', 'border-w-l'],
				'border-w-y': ['border-w-t', 'border-w-b'],
				'border-color': [
					'border-color-s',
					'border-color-e',
					'border-color-t',
					'border-color-r',
					'border-color-b',
					'border-color-l',
				],
				'border-color-x': ['border-color-r', 'border-color-l'],
				'border-color-y': ['border-color-t', 'border-color-b'],
				'scroll-m': [
					'scroll-mx',
					'scroll-my',
					'scroll-ms',
					'scroll-me',
					'scroll-mt',
					'scroll-mr',
					'scroll-mb',
					'scroll-ml',
				],
				'scroll-mx': ['scroll-mr', 'scroll-ml'],
				'scroll-my': ['scroll-mt', 'scroll-mb'],
				'scroll-p': [
					'scroll-px',
					'scroll-py',
					'scroll-ps',
					'scroll-pe',
					'scroll-pt',
					'scroll-pr',
					'scroll-pb',
					'scroll-pl',
				],
				'scroll-px': ['scroll-pr', 'scroll-pl'],
				'scroll-py': ['scroll-pt', 'scroll-pb'],
				touch: ['touch-x', 'touch-y', 'touch-pz'],
				'touch-x': ['touch'],
				'touch-y': ['touch'],
				'touch-pz': ['touch'],
			},
			conflictingClassGroupModifiers: { 'font-size': ['leading'] },
		};
	},
	UC = EC(BC);
function xi(...e) {
	return UC(cC(e));
}
const $C = uC,
	WC = C.forwardRef(({ className: e, sideOffset: n = 4, ...i }, s) =>
		j.jsx(ly, {
			ref: s,
			sideOffset: n,
			className: xi(
				'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				e,
			),
			...i,
		}),
	);
WC.displayName = ly.displayName;
var $a = class {
		constructor() {
			((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
		}
		subscribe(e) {
			return (
				this.listeners.add(e),
				this.onSubscribe(),
				() => {
					(this.listeners.delete(e), this.onUnsubscribe());
				}
			);
		}
		hasListeners() {
			return this.listeners.size > 0;
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	HC = {
		setTimeout: (e, n) => setTimeout(e, n),
		clearTimeout: e => clearTimeout(e),
		setInterval: (e, n) => setInterval(e, n),
		clearInterval: e => clearInterval(e),
	},
	KC = class {
		#e = HC;
		#n = !1;
		setTimeoutProvider(e) {
			this.#e = e;
		}
		setTimeout(e, n) {
			return this.#e.setTimeout(e, n);
		}
		clearTimeout(e) {
			this.#e.clearTimeout(e);
		}
		setInterval(e, n) {
			return this.#e.setInterval(e, n);
		}
		clearInterval(e) {
			this.#e.clearInterval(e);
		}
	},
	cc = new KC();
function GC(e) {
	setTimeout(e, 0);
}
var Wa = typeof window > 'u' || 'Deno' in globalThis;
function Jt() {}
function QC(e, n) {
	return typeof e == 'function' ? e(n) : e;
}
function YC(e) {
	return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function XC(e, n) {
	return Math.max(e + (n || 0) - Date.now(), 0);
}
function fc(e, n) {
	return typeof e == 'function' ? e(n) : e;
}
function qC(e, n) {
	return typeof e == 'function' ? e(n) : e;
}
function $p(e, n) {
	const { type: i = 'all', exact: s, fetchStatus: a, predicate: u, queryKey: c, stale: d } = e;
	if (c) {
		if (s) {
			if (n.queryHash !== Jc(c, n.options)) return !1;
		} else if (!Do(n.queryKey, c)) return !1;
	}
	if (i !== 'all') {
		const h = n.isActive();
		if ((i === 'active' && !h) || (i === 'inactive' && h)) return !1;
	}
	return !((typeof d == 'boolean' && n.isStale() !== d) || (a && a !== n.state.fetchStatus) || (u && !u(n)));
}
function Wp(e, n) {
	const { exact: i, status: s, predicate: a, mutationKey: u } = e;
	if (u) {
		if (!n.options.mutationKey) return !1;
		if (i) {
			if (Mo(n.options.mutationKey) !== Mo(u)) return !1;
		} else if (!Do(n.options.mutationKey, u)) return !1;
	}
	return !((s && n.state.status !== s) || (a && !a(n)));
}
function Jc(e, n) {
	return (n?.queryKeyHashFn || Mo)(e);
}
function Mo(e) {
	return JSON.stringify(e, (n, i) =>
		dc(i)
			? Object.keys(i)
					.sort()
					.reduce((s, a) => ((s[a] = i[a]), s), {})
			: i,
	);
}
function Do(e, n) {
	return e === n
		? !0
		: typeof e != typeof n
			? !1
			: e && n && typeof e == 'object' && typeof n == 'object'
				? Object.keys(n).every(i => Do(e[i], n[i]))
				: !1;
}
var ZC = Object.prototype.hasOwnProperty;
function my(e, n, i = 0) {
	if (e === n) return e;
	if (i > 500) return n;
	const s = Hp(e) && Hp(n);
	if (!s && !(dc(e) && dc(n))) return n;
	const u = (s ? e : Object.keys(e)).length,
		c = s ? n : Object.keys(n),
		d = c.length,
		h = s ? new Array(d) : {};
	let m = 0;
	for (let g = 0; g < d; g++) {
		const y = s ? g : c[g],
			x = e[y],
			v = n[y];
		if (x === v) {
			((h[y] = x), (s ? g < u : ZC.call(e, y)) && m++);
			continue;
		}
		if (x === null || v === null || typeof x != 'object' || typeof v != 'object') {
			h[y] = v;
			continue;
		}
		const S = my(x, v, i + 1);
		((h[y] = S), S === x && m++);
	}
	return u === d && m === u ? e : h;
}
function Hp(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function dc(e) {
	if (!Kp(e)) return !1;
	const n = e.constructor;
	if (n === void 0) return !0;
	const i = n.prototype;
	return !(!Kp(i) || !i.hasOwnProperty('isPrototypeOf') || Object.getPrototypeOf(e) !== Object.prototype);
}
function Kp(e) {
	return Object.prototype.toString.call(e) === '[object Object]';
}
function JC(e) {
	return new Promise(n => {
		cc.setTimeout(n, e);
	});
}
function eE(e, n, i) {
	return typeof i.structuralSharing == 'function'
		? i.structuralSharing(e, n)
		: i.structuralSharing !== !1
			? my(e, n)
			: n;
}
function tE(e, n, i = 0) {
	const s = [...e, n];
	return i && s.length > i ? s.slice(1) : s;
}
function nE(e, n, i = 0) {
	const s = [n, ...e];
	return i && s.length > i ? s.slice(0, -1) : s;
}
var ef = Symbol();
function gy(e, n) {
	return !e.queryFn && n?.initialPromise
		? () => n.initialPromise
		: !e.queryFn || e.queryFn === ef
			? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
			: e.queryFn;
}
function rE(e, n, i) {
	let s = !1,
		a;
	return (
		Object.defineProperty(e, 'signal', {
			enumerable: !0,
			get: () => ((a ??= n()), s || ((s = !0), a.aborted ? i() : a.addEventListener('abort', i, { once: !0 })), a),
		}),
		e
	);
}
var iE = class extends $a {
		#e;
		#n;
		#t;
		constructor() {
			(super(),
				(this.#t = e => {
					if (!Wa && window.addEventListener) {
						const n = () => e();
						return (
							window.addEventListener('visibilitychange', n, !1),
							() => {
								window.removeEventListener('visibilitychange', n);
							}
						);
					}
				}));
		}
		onSubscribe() {
			this.#n || this.setEventListener(this.#t);
		}
		onUnsubscribe() {
			this.hasListeners() || (this.#n?.(), (this.#n = void 0));
		}
		setEventListener(e) {
			((this.#t = e),
				this.#n?.(),
				(this.#n = e(n => {
					typeof n == 'boolean' ? this.setFocused(n) : this.onFocus();
				})));
		}
		setFocused(e) {
			this.#e !== e && ((this.#e = e), this.onFocus());
		}
		onFocus() {
			const e = this.isFocused();
			this.listeners.forEach(n => {
				n(e);
			});
		}
		isFocused() {
			return typeof this.#e == 'boolean' ? this.#e : globalThis.document?.visibilityState !== 'hidden';
		}
	},
	yy = new iE();
function oE() {
	let e, n;
	const i = new Promise((a, u) => {
		((e = a), (n = u));
	});
	((i.status = 'pending'), i.catch(() => {}));
	function s(a) {
		(Object.assign(i, a), delete i.resolve, delete i.reject);
	}
	return (
		(i.resolve = a => {
			(s({ status: 'fulfilled', value: a }), e(a));
		}),
		(i.reject = a => {
			(s({ status: 'rejected', reason: a }), n(a));
		}),
		i
	);
}
var sE = GC;
function aE() {
	let e = [],
		n = 0,
		i = d => {
			d();
		},
		s = d => {
			d();
		},
		a = sE;
	const u = d => {
			n
				? e.push(d)
				: a(() => {
						i(d);
					});
		},
		c = () => {
			const d = e;
			((e = []),
				d.length &&
					a(() => {
						s(() => {
							d.forEach(h => {
								i(h);
							});
						});
					}));
		};
	return {
		batch: d => {
			let h;
			n++;
			try {
				h = d();
			} finally {
				(n--, n || c());
			}
			return h;
		},
		batchCalls:
			d =>
			(...h) => {
				u(() => {
					d(...h);
				});
			},
		schedule: u,
		setNotifyFunction: d => {
			i = d;
		},
		setBatchNotifyFunction: d => {
			s = d;
		},
		setScheduler: d => {
			a = d;
		},
	};
}
var ct = aE(),
	lE = class extends $a {
		#e = !0;
		#n;
		#t;
		constructor() {
			(super(),
				(this.#t = e => {
					if (!Wa && window.addEventListener) {
						const n = () => e(!0),
							i = () => e(!1);
						return (
							window.addEventListener('online', n, !1),
							window.addEventListener('offline', i, !1),
							() => {
								(window.removeEventListener('online', n), window.removeEventListener('offline', i));
							}
						);
					}
				}));
		}
		onSubscribe() {
			this.#n || this.setEventListener(this.#t);
		}
		onUnsubscribe() {
			this.hasListeners() || (this.#n?.(), (this.#n = void 0));
		}
		setEventListener(e) {
			((this.#t = e), this.#n?.(), (this.#n = e(this.setOnline.bind(this))));
		}
		setOnline(e) {
			this.#e !== e &&
				((this.#e = e),
				this.listeners.forEach(i => {
					i(e);
				}));
		}
		isOnline() {
			return this.#e;
		}
	},
	Ta = new lE();
function uE(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function vy(e) {
	return (e ?? 'online') === 'online' ? Ta.isOnline() : !0;
}
var hc = class extends Error {
	constructor(e) {
		(super('CancelledError'), (this.revert = e?.revert), (this.silent = e?.silent));
	}
};
function wy(e) {
	let n = !1,
		i = 0,
		s;
	const a = oE(),
		u = () => a.status !== 'pending',
		c = P => {
			if (!u()) {
				const E = new hc(P);
				(x(E), e.onCancel?.(E));
			}
		},
		d = () => {
			n = !0;
		},
		h = () => {
			n = !1;
		},
		m = () => yy.isFocused() && (e.networkMode === 'always' || Ta.isOnline()) && e.canRun(),
		g = () => vy(e.networkMode) && e.canRun(),
		y = P => {
			u() || (s?.(), a.resolve(P));
		},
		x = P => {
			u() || (s?.(), a.reject(P));
		},
		v = () =>
			new Promise(P => {
				((s = E => {
					(u() || m()) && P(E);
				}),
					e.onPause?.());
			}).then(() => {
				((s = void 0), u() || e.onContinue?.());
			}),
		S = () => {
			if (u()) return;
			let P;
			const E = i === 0 ? e.initialPromise : void 0;
			try {
				P = E ?? e.fn();
			} catch (b) {
				P = Promise.reject(b);
			}
			Promise.resolve(P)
				.then(y)
				.catch(b => {
					if (u()) return;
					const M = e.retry ?? (Wa ? 0 : 3),
						D = e.retryDelay ?? uE,
						O = typeof D == 'function' ? D(i, b) : D,
						_ = M === !0 || (typeof M == 'number' && i < M) || (typeof M == 'function' && M(i, b));
					if (n || !_) {
						x(b);
						return;
					}
					(i++,
						e.onFail?.(i, b),
						JC(O)
							.then(() => (m() ? void 0 : v()))
							.then(() => {
								n ? x(b) : S();
							}));
				});
		};
	return {
		promise: a,
		status: () => a.status,
		cancel: c,
		continue: () => (s?.(), a),
		cancelRetry: d,
		continueRetry: h,
		canStart: g,
		start: () => (g() ? S() : v().then(S), a),
	};
}
var xy = class {
		#e;
		destroy() {
			this.clearGcTimeout();
		}
		scheduleGc() {
			(this.clearGcTimeout(),
				YC(this.gcTime) &&
					(this.#e = cc.setTimeout(() => {
						this.optionalRemove();
					}, this.gcTime)));
		}
		updateGcTime(e) {
			this.gcTime = Math.max(this.gcTime || 0, e ?? (Wa ? 1 / 0 : 300 * 1e3));
		}
		clearGcTimeout() {
			this.#e && (cc.clearTimeout(this.#e), (this.#e = void 0));
		}
	},
	cE = class extends xy {
		#e;
		#n;
		#t;
		#i;
		#r;
		#s;
		#a;
		constructor(e) {
			(super(),
				(this.#a = !1),
				(this.#s = e.defaultOptions),
				this.setOptions(e.options),
				(this.observers = []),
				(this.#i = e.client),
				(this.#t = this.#i.getQueryCache()),
				(this.queryKey = e.queryKey),
				(this.queryHash = e.queryHash),
				(this.#e = Qp(this.options)),
				(this.state = e.state ?? this.#e),
				this.scheduleGc());
		}
		get meta() {
			return this.options.meta;
		}
		get promise() {
			return this.#r?.promise;
		}
		setOptions(e) {
			if (
				((this.options = { ...this.#s, ...e }),
				this.updateGcTime(this.options.gcTime),
				this.state && this.state.data === void 0)
			) {
				const n = Qp(this.options);
				n.data !== void 0 && (this.setState(Gp(n.data, n.dataUpdatedAt)), (this.#e = n));
			}
		}
		optionalRemove() {
			!this.observers.length && this.state.fetchStatus === 'idle' && this.#t.remove(this);
		}
		setData(e, n) {
			const i = eE(this.state.data, e, this.options);
			return (this.#o({ data: i, type: 'success', dataUpdatedAt: n?.updatedAt, manual: n?.manual }), i);
		}
		setState(e, n) {
			this.#o({ type: 'setState', state: e, setStateOptions: n });
		}
		cancel(e) {
			const n = this.#r?.promise;
			return (this.#r?.cancel(e), n ? n.then(Jt).catch(Jt) : Promise.resolve());
		}
		destroy() {
			(super.destroy(), this.cancel({ silent: !0 }));
		}
		reset() {
			(this.destroy(), this.setState(this.#e));
		}
		isActive() {
			return this.observers.some(e => qC(e.options.enabled, this) !== !1);
		}
		isDisabled() {
			return this.getObserversCount() > 0
				? !this.isActive()
				: this.options.queryFn === ef || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
		}
		isStatic() {
			return this.getObserversCount() > 0 ? this.observers.some(e => fc(e.options.staleTime, this) === 'static') : !1;
		}
		isStale() {
			return this.getObserversCount() > 0
				? this.observers.some(e => e.getCurrentResult().isStale)
				: this.state.data === void 0 || this.state.isInvalidated;
		}
		isStaleByTime(e = 0) {
			return this.state.data === void 0
				? !0
				: e === 'static'
					? !1
					: this.state.isInvalidated
						? !0
						: !XC(this.state.dataUpdatedAt, e);
		}
		onFocus() {
			(this.observers.find(n => n.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#r?.continue());
		}
		onOnline() {
			(this.observers.find(n => n.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#r?.continue());
		}
		addObserver(e) {
			this.observers.includes(e) ||
				(this.observers.push(e),
				this.clearGcTimeout(),
				this.#t.notify({ type: 'observerAdded', query: this, observer: e }));
		}
		removeObserver(e) {
			this.observers.includes(e) &&
				((this.observers = this.observers.filter(n => n !== e)),
				this.observers.length ||
					(this.#r && (this.#a ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()), this.scheduleGc()),
				this.#t.notify({ type: 'observerRemoved', query: this, observer: e }));
		}
		getObserversCount() {
			return this.observers.length;
		}
		invalidate() {
			this.state.isInvalidated || this.#o({ type: 'invalidate' });
		}
		async fetch(e, n) {
			if (this.state.fetchStatus !== 'idle' && this.#r?.status() !== 'rejected') {
				if (this.state.data !== void 0 && n?.cancelRefetch) this.cancel({ silent: !0 });
				else if (this.#r) return (this.#r.continueRetry(), this.#r.promise);
			}
			if ((e && this.setOptions(e), !this.options.queryFn)) {
				const d = this.observers.find(h => h.options.queryFn);
				d && this.setOptions(d.options);
			}
			const i = new AbortController(),
				s = d => {
					Object.defineProperty(d, 'signal', { enumerable: !0, get: () => ((this.#a = !0), i.signal) });
				},
				a = () => {
					const d = gy(this.options, n),
						m = (() => {
							const g = { client: this.#i, queryKey: this.queryKey, meta: this.meta };
							return (s(g), g);
						})();
					return ((this.#a = !1), this.options.persister ? this.options.persister(d, m, this) : d(m));
				},
				c = (() => {
					const d = {
						fetchOptions: n,
						options: this.options,
						queryKey: this.queryKey,
						client: this.#i,
						state: this.state,
						fetchFn: a,
					};
					return (s(d), d);
				})();
			(this.options.behavior?.onFetch(c, this),
				(this.#n = this.state),
				(this.state.fetchStatus === 'idle' || this.state.fetchMeta !== c.fetchOptions?.meta) &&
					this.#o({ type: 'fetch', meta: c.fetchOptions?.meta }),
				(this.#r = wy({
					initialPromise: n?.initialPromise,
					fn: c.fetchFn,
					onCancel: d => {
						(d instanceof hc && d.revert && this.setState({ ...this.#n, fetchStatus: 'idle' }), i.abort());
					},
					onFail: (d, h) => {
						this.#o({ type: 'failed', failureCount: d, error: h });
					},
					onPause: () => {
						this.#o({ type: 'pause' });
					},
					onContinue: () => {
						this.#o({ type: 'continue' });
					},
					retry: c.options.retry,
					retryDelay: c.options.retryDelay,
					networkMode: c.options.networkMode,
					canRun: () => !0,
				})));
			try {
				const d = await this.#r.start();
				if (d === void 0) throw new Error(`${this.queryHash} data is undefined`);
				return (
					this.setData(d),
					this.#t.config.onSuccess?.(d, this),
					this.#t.config.onSettled?.(d, this.state.error, this),
					d
				);
			} catch (d) {
				if (d instanceof hc) {
					if (d.silent) return this.#r.promise;
					if (d.revert) {
						if (this.state.data === void 0) throw d;
						return this.state.data;
					}
				}
				throw (
					this.#o({ type: 'error', error: d }),
					this.#t.config.onError?.(d, this),
					this.#t.config.onSettled?.(this.state.data, d, this),
					d
				);
			} finally {
				this.scheduleGc();
			}
		}
		#o(e) {
			const n = i => {
				switch (e.type) {
					case 'failed':
						return { ...i, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
					case 'pause':
						return { ...i, fetchStatus: 'paused' };
					case 'continue':
						return { ...i, fetchStatus: 'fetching' };
					case 'fetch':
						return { ...i, ...fE(i.data, this.options), fetchMeta: e.meta ?? null };
					case 'success':
						const s = {
							...i,
							...Gp(e.data, e.dataUpdatedAt),
							dataUpdateCount: i.dataUpdateCount + 1,
							...(!e.manual && { fetchStatus: 'idle', fetchFailureCount: 0, fetchFailureReason: null }),
						};
						return ((this.#n = e.manual ? s : void 0), s);
					case 'error':
						const a = e.error;
						return {
							...i,
							error: a,
							errorUpdateCount: i.errorUpdateCount + 1,
							errorUpdatedAt: Date.now(),
							fetchFailureCount: i.fetchFailureCount + 1,
							fetchFailureReason: a,
							fetchStatus: 'idle',
							status: 'error',
							isInvalidated: !0,
						};
					case 'invalidate':
						return { ...i, isInvalidated: !0 };
					case 'setState':
						return { ...i, ...e.state };
				}
			};
			((this.state = n(this.state)),
				ct.batch(() => {
					(this.observers.forEach(i => {
						i.onQueryUpdate();
					}),
						this.#t.notify({ query: this, type: 'updated', action: e }));
				}));
		}
	};
function fE(e, n) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: vy(n.networkMode) ? 'fetching' : 'paused',
		...(e === void 0 && { error: null, status: 'pending' }),
	};
}
function Gp(e, n) {
	return { data: e, dataUpdatedAt: n ?? Date.now(), error: null, isInvalidated: !1, status: 'success' };
}
function Qp(e) {
	const n = typeof e.initialData == 'function' ? e.initialData() : e.initialData,
		i = n !== void 0,
		s = i ? (typeof e.initialDataUpdatedAt == 'function' ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
	return {
		data: n,
		dataUpdateCount: 0,
		dataUpdatedAt: i ? (s ?? Date.now()) : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: i ? 'success' : 'pending',
		fetchStatus: 'idle',
	};
}
function Yp(e) {
	return {
		onFetch: (n, i) => {
			const s = n.options,
				a = n.fetchOptions?.meta?.fetchMore?.direction,
				u = n.state.data?.pages || [],
				c = n.state.data?.pageParams || [];
			let d = { pages: [], pageParams: [] },
				h = 0;
			const m = async () => {
				let g = !1;
				const y = S => {
						rE(
							S,
							() => n.signal,
							() => (g = !0),
						);
					},
					x = gy(n.options, n.fetchOptions),
					v = async (S, P, E) => {
						if (g) return Promise.reject();
						if (P == null && S.pages.length) return Promise.resolve(S);
						const M = (() => {
								const B = {
									client: n.client,
									queryKey: n.queryKey,
									pageParam: P,
									direction: E ? 'backward' : 'forward',
									meta: n.options.meta,
								};
								return (y(B), B);
							})(),
							D = await x(M),
							{ maxPages: O } = n.options,
							_ = E ? nE : tE;
						return { pages: _(S.pages, D, O), pageParams: _(S.pageParams, P, O) };
					};
				if (a && u.length) {
					const S = a === 'backward',
						P = S ? dE : Xp,
						E = { pages: u, pageParams: c },
						b = P(s, E);
					d = await v(E, b, S);
				} else {
					const S = e ?? u.length;
					do {
						const P = h === 0 ? (c[0] ?? s.initialPageParam) : Xp(s, d);
						if (h > 0 && P == null) break;
						((d = await v(d, P)), h++);
					} while (h < S);
				}
				return d;
			};
			n.options.persister
				? (n.fetchFn = () =>
						n.options.persister?.(
							m,
							{ client: n.client, queryKey: n.queryKey, meta: n.options.meta, signal: n.signal },
							i,
						))
				: (n.fetchFn = m);
		},
	};
}
function Xp(e, { pages: n, pageParams: i }) {
	const s = n.length - 1;
	return n.length > 0 ? e.getNextPageParam(n[s], n, i[s], i) : void 0;
}
function dE(e, { pages: n, pageParams: i }) {
	return n.length > 0 ? e.getPreviousPageParam?.(n[0], n, i[0], i) : void 0;
}
var hE = class extends xy {
	#e;
	#n;
	#t;
	#i;
	constructor(e) {
		(super(),
			(this.#e = e.client),
			(this.mutationId = e.mutationId),
			(this.#t = e.mutationCache),
			(this.#n = []),
			(this.state = e.state || pE()),
			this.setOptions(e.options),
			this.scheduleGc());
	}
	setOptions(e) {
		((this.options = e), this.updateGcTime(this.options.gcTime));
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(e) {
		this.#n.includes(e) ||
			(this.#n.push(e), this.clearGcTimeout(), this.#t.notify({ type: 'observerAdded', mutation: this, observer: e }));
	}
	removeObserver(e) {
		((this.#n = this.#n.filter(n => n !== e)),
			this.scheduleGc(),
			this.#t.notify({ type: 'observerRemoved', mutation: this, observer: e }));
	}
	optionalRemove() {
		this.#n.length || (this.state.status === 'pending' ? this.scheduleGc() : this.#t.remove(this));
	}
	continue() {
		return this.#i?.continue() ?? this.execute(this.state.variables);
	}
	async execute(e) {
		const n = () => {
				this.#r({ type: 'continue' });
			},
			i = { client: this.#e, meta: this.options.meta, mutationKey: this.options.mutationKey };
		this.#i = wy({
			fn: () =>
				this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(new Error('No mutationFn found')),
			onFail: (u, c) => {
				this.#r({ type: 'failed', failureCount: u, error: c });
			},
			onPause: () => {
				this.#r({ type: 'pause' });
			},
			onContinue: n,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#t.canRun(this),
		});
		const s = this.state.status === 'pending',
			a = !this.#i.canStart();
		try {
			if (s) n();
			else {
				(this.#r({ type: 'pending', variables: e, isPaused: a }),
					this.#t.config.onMutate && (await this.#t.config.onMutate(e, this, i)));
				const c = await this.options.onMutate?.(e, i);
				c !== this.state.context && this.#r({ type: 'pending', context: c, variables: e, isPaused: a });
			}
			const u = await this.#i.start();
			return (
				await this.#t.config.onSuccess?.(u, e, this.state.context, this, i),
				await this.options.onSuccess?.(u, e, this.state.context, i),
				await this.#t.config.onSettled?.(u, null, this.state.variables, this.state.context, this, i),
				await this.options.onSettled?.(u, null, e, this.state.context, i),
				this.#r({ type: 'success', data: u }),
				u
			);
		} catch (u) {
			try {
				await this.#t.config.onError?.(u, e, this.state.context, this, i);
			} catch (c) {
				Promise.reject(c);
			}
			try {
				await this.options.onError?.(u, e, this.state.context, i);
			} catch (c) {
				Promise.reject(c);
			}
			try {
				await this.#t.config.onSettled?.(void 0, u, this.state.variables, this.state.context, this, i);
			} catch (c) {
				Promise.reject(c);
			}
			try {
				await this.options.onSettled?.(void 0, u, e, this.state.context, i);
			} catch (c) {
				Promise.reject(c);
			}
			throw (this.#r({ type: 'error', error: u }), u);
		} finally {
			this.#t.runNext(this);
		}
	}
	#r(e) {
		const n = i => {
			switch (e.type) {
				case 'failed':
					return { ...i, failureCount: e.failureCount, failureReason: e.error };
				case 'pause':
					return { ...i, isPaused: !0 };
				case 'continue':
					return { ...i, isPaused: !1 };
				case 'pending':
					return {
						...i,
						context: e.context,
						data: void 0,
						failureCount: 0,
						failureReason: null,
						error: null,
						isPaused: e.isPaused,
						status: 'pending',
						variables: e.variables,
						submittedAt: Date.now(),
					};
				case 'success':
					return {
						...i,
						data: e.data,
						failureCount: 0,
						failureReason: null,
						error: null,
						status: 'success',
						isPaused: !1,
					};
				case 'error':
					return {
						...i,
						data: void 0,
						error: e.error,
						failureCount: i.failureCount + 1,
						failureReason: e.error,
						isPaused: !1,
						status: 'error',
					};
			}
		};
		((this.state = n(this.state)),
			ct.batch(() => {
				(this.#n.forEach(i => {
					i.onMutationUpdate(e);
				}),
					this.#t.notify({ mutation: this, type: 'updated', action: e }));
			}));
	}
};
function pE() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: 'idle',
		variables: void 0,
		submittedAt: 0,
	};
}
var mE = class extends $a {
	constructor(e = {}) {
		(super(), (this.config = e), (this.#e = new Set()), (this.#n = new Map()), (this.#t = 0));
	}
	#e;
	#n;
	#t;
	build(e, n, i) {
		const s = new hE({
			client: e,
			mutationCache: this,
			mutationId: ++this.#t,
			options: e.defaultMutationOptions(n),
			state: i,
		});
		return (this.add(s), s);
	}
	add(e) {
		this.#e.add(e);
		const n = aa(e);
		if (typeof n == 'string') {
			const i = this.#n.get(n);
			i ? i.push(e) : this.#n.set(n, [e]);
		}
		this.notify({ type: 'added', mutation: e });
	}
	remove(e) {
		if (this.#e.delete(e)) {
			const n = aa(e);
			if (typeof n == 'string') {
				const i = this.#n.get(n);
				if (i)
					if (i.length > 1) {
						const s = i.indexOf(e);
						s !== -1 && i.splice(s, 1);
					} else i[0] === e && this.#n.delete(n);
			}
		}
		this.notify({ type: 'removed', mutation: e });
	}
	canRun(e) {
		const n = aa(e);
		if (typeof n == 'string') {
			const s = this.#n.get(n)?.find(a => a.state.status === 'pending');
			return !s || s === e;
		} else return !0;
	}
	runNext(e) {
		const n = aa(e);
		return typeof n == 'string'
			? (this.#n
					.get(n)
					?.find(s => s !== e && s.state.isPaused)
					?.continue() ?? Promise.resolve())
			: Promise.resolve();
	}
	clear() {
		ct.batch(() => {
			(this.#e.forEach(e => {
				this.notify({ type: 'removed', mutation: e });
			}),
				this.#e.clear(),
				this.#n.clear());
		});
	}
	getAll() {
		return Array.from(this.#e);
	}
	find(e) {
		const n = { exact: !0, ...e };
		return this.getAll().find(i => Wp(n, i));
	}
	findAll(e = {}) {
		return this.getAll().filter(n => Wp(e, n));
	}
	notify(e) {
		ct.batch(() => {
			this.listeners.forEach(n => {
				n(e);
			});
		});
	}
	resumePausedMutations() {
		const e = this.getAll().filter(n => n.state.isPaused);
		return ct.batch(() => Promise.all(e.map(n => n.continue().catch(Jt))));
	}
};
function aa(e) {
	return e.options.scope?.id;
}
var gE = class extends $a {
		constructor(e = {}) {
			(super(), (this.config = e), (this.#e = new Map()));
		}
		#e;
		build(e, n, i) {
			const s = n.queryKey,
				a = n.queryHash ?? Jc(s, n);
			let u = this.get(a);
			return (
				u ||
					((u = new cE({
						client: e,
						queryKey: s,
						queryHash: a,
						options: e.defaultQueryOptions(n),
						state: i,
						defaultOptions: e.getQueryDefaults(s),
					})),
					this.add(u)),
				u
			);
		}
		add(e) {
			this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({ type: 'added', query: e }));
		}
		remove(e) {
			const n = this.#e.get(e.queryHash);
			n && (e.destroy(), n === e && this.#e.delete(e.queryHash), this.notify({ type: 'removed', query: e }));
		}
		clear() {
			ct.batch(() => {
				this.getAll().forEach(e => {
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
			const n = { exact: !0, ...e };
			return this.getAll().find(i => $p(n, i));
		}
		findAll(e = {}) {
			const n = this.getAll();
			return Object.keys(e).length > 0 ? n.filter(i => $p(e, i)) : n;
		}
		notify(e) {
			ct.batch(() => {
				this.listeners.forEach(n => {
					n(e);
				});
			});
		}
		onFocus() {
			ct.batch(() => {
				this.getAll().forEach(e => {
					e.onFocus();
				});
			});
		}
		onOnline() {
			ct.batch(() => {
				this.getAll().forEach(e => {
					e.onOnline();
				});
			});
		}
	},
	yE = class {
		#e;
		#n;
		#t;
		#i;
		#r;
		#s;
		#a;
		#o;
		constructor(e = {}) {
			((this.#e = e.queryCache || new gE()),
				(this.#n = e.mutationCache || new mE()),
				(this.#t = e.defaultOptions || {}),
				(this.#i = new Map()),
				(this.#r = new Map()),
				(this.#s = 0));
		}
		mount() {
			(this.#s++,
				this.#s === 1 &&
					((this.#a = yy.subscribe(async e => {
						e && (await this.resumePausedMutations(), this.#e.onFocus());
					})),
					(this.#o = Ta.subscribe(async e => {
						e && (await this.resumePausedMutations(), this.#e.onOnline());
					}))));
		}
		unmount() {
			(this.#s--, this.#s === 0 && (this.#a?.(), (this.#a = void 0), this.#o?.(), (this.#o = void 0)));
		}
		isFetching(e) {
			return this.#e.findAll({ ...e, fetchStatus: 'fetching' }).length;
		}
		isMutating(e) {
			return this.#n.findAll({ ...e, status: 'pending' }).length;
		}
		getQueryData(e) {
			const n = this.defaultQueryOptions({ queryKey: e });
			return this.#e.get(n.queryHash)?.state.data;
		}
		ensureQueryData(e) {
			const n = this.defaultQueryOptions(e),
				i = this.#e.build(this, n),
				s = i.state.data;
			return s === void 0
				? this.fetchQuery(e)
				: (e.revalidateIfStale && i.isStaleByTime(fc(n.staleTime, i)) && this.prefetchQuery(n), Promise.resolve(s));
		}
		getQueriesData(e) {
			return this.#e.findAll(e).map(({ queryKey: n, state: i }) => {
				const s = i.data;
				return [n, s];
			});
		}
		setQueryData(e, n, i) {
			const s = this.defaultQueryOptions({ queryKey: e }),
				u = this.#e.get(s.queryHash)?.state.data,
				c = QC(n, u);
			if (c !== void 0) return this.#e.build(this, s).setData(c, { ...i, manual: !0 });
		}
		setQueriesData(e, n, i) {
			return ct.batch(() => this.#e.findAll(e).map(({ queryKey: s }) => [s, this.setQueryData(s, n, i)]));
		}
		getQueryState(e) {
			const n = this.defaultQueryOptions({ queryKey: e });
			return this.#e.get(n.queryHash)?.state;
		}
		removeQueries(e) {
			const n = this.#e;
			ct.batch(() => {
				n.findAll(e).forEach(i => {
					n.remove(i);
				});
			});
		}
		resetQueries(e, n) {
			const i = this.#e;
			return ct.batch(
				() => (
					i.findAll(e).forEach(s => {
						s.reset();
					}),
					this.refetchQueries({ type: 'active', ...e }, n)
				),
			);
		}
		cancelQueries(e, n = {}) {
			const i = { revert: !0, ...n },
				s = ct.batch(() => this.#e.findAll(e).map(a => a.cancel(i)));
			return Promise.all(s).then(Jt).catch(Jt);
		}
		invalidateQueries(e, n = {}) {
			return ct.batch(
				() => (
					this.#e.findAll(e).forEach(i => {
						i.invalidate();
					}),
					e?.refetchType === 'none'
						? Promise.resolve()
						: this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? 'active' }, n)
				),
			);
		}
		refetchQueries(e, n = {}) {
			const i = { ...n, cancelRefetch: n.cancelRefetch ?? !0 },
				s = ct.batch(() =>
					this.#e
						.findAll(e)
						.filter(a => !a.isDisabled() && !a.isStatic())
						.map(a => {
							let u = a.fetch(void 0, i);
							return (i.throwOnError || (u = u.catch(Jt)), a.state.fetchStatus === 'paused' ? Promise.resolve() : u);
						}),
				);
			return Promise.all(s).then(Jt);
		}
		fetchQuery(e) {
			const n = this.defaultQueryOptions(e);
			n.retry === void 0 && (n.retry = !1);
			const i = this.#e.build(this, n);
			return i.isStaleByTime(fc(n.staleTime, i)) ? i.fetch(n) : Promise.resolve(i.state.data);
		}
		prefetchQuery(e) {
			return this.fetchQuery(e).then(Jt).catch(Jt);
		}
		fetchInfiniteQuery(e) {
			return ((e.behavior = Yp(e.pages)), this.fetchQuery(e));
		}
		prefetchInfiniteQuery(e) {
			return this.fetchInfiniteQuery(e).then(Jt).catch(Jt);
		}
		ensureInfiniteQueryData(e) {
			return ((e.behavior = Yp(e.pages)), this.ensureQueryData(e));
		}
		resumePausedMutations() {
			return Ta.isOnline() ? this.#n.resumePausedMutations() : Promise.resolve();
		}
		getQueryCache() {
			return this.#e;
		}
		getMutationCache() {
			return this.#n;
		}
		getDefaultOptions() {
			return this.#t;
		}
		setDefaultOptions(e) {
			this.#t = e;
		}
		setQueryDefaults(e, n) {
			this.#i.set(Mo(e), { queryKey: e, defaultOptions: n });
		}
		getQueryDefaults(e) {
			const n = [...this.#i.values()],
				i = {};
			return (
				n.forEach(s => {
					Do(e, s.queryKey) && Object.assign(i, s.defaultOptions);
				}),
				i
			);
		}
		setMutationDefaults(e, n) {
			this.#r.set(Mo(e), { mutationKey: e, defaultOptions: n });
		}
		getMutationDefaults(e) {
			const n = [...this.#r.values()],
				i = {};
			return (
				n.forEach(s => {
					Do(e, s.mutationKey) && Object.assign(i, s.defaultOptions);
				}),
				i
			);
		}
		defaultQueryOptions(e) {
			if (e._defaulted) return e;
			const n = { ...this.#t.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
			return (
				n.queryHash || (n.queryHash = Jc(n.queryKey, n)),
				n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== 'always'),
				n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
				!n.networkMode && n.persister && (n.networkMode = 'offlineFirst'),
				n.queryFn === ef && (n.enabled = !1),
				n
			);
		}
		defaultMutationOptions(e) {
			return e?._defaulted
				? e
				: {
						...this.#t.mutations,
						...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
						...e,
						_defaulted: !0,
					};
		}
		clear() {
			(this.#e.clear(), this.#n.clear());
		}
	},
	vE = C.createContext(void 0),
	wE = ({ client: e, children: n }) => (
		C.useEffect(
			() => (
				e.mount(),
				() => {
					e.unmount();
				}
			),
			[e],
		),
		j.jsx(vE.Provider, { value: e, children: n })
	);
function ka() {
	return (
		(ka = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var i = arguments[n];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
					}
					return e;
				}),
		ka.apply(this, arguments)
	);
}
var lr;
(function (e) {
	((e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE'));
})(lr || (lr = {}));
const qp = 'popstate';
function xE(e) {
	e === void 0 && (e = {});
	function n(a, u) {
		let { pathname: c = '/', search: d = '', hash: h = '' } = Vo(a.location.hash.substr(1));
		return (
			!c.startsWith('/') && !c.startsWith('.') && (c = '/' + c),
			pc(
				'',
				{ pathname: c, search: d, hash: h },
				(u.state && u.state.usr) || null,
				(u.state && u.state.key) || 'default',
			)
		);
	}
	function i(a, u) {
		let c = a.document.querySelector('base'),
			d = '';
		if (c && c.getAttribute('href')) {
			let h = a.location.href,
				m = h.indexOf('#');
			d = m === -1 ? h : h.slice(0, m);
		}
		return d + '#' + (typeof u == 'string' ? u : Sy(u));
	}
	function s(a, u) {
		tf(
			a.pathname.charAt(0) === '/',
			'relative pathnames are not supported in hash history.push(' + JSON.stringify(u) + ')',
		);
	}
	return CE(n, i, s, e);
}
function Ct(e, n) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(n);
}
function tf(e, n) {
	if (!e) {
		typeof console < 'u' && console.warn(n);
		try {
			throw new Error(n);
		} catch {}
	}
}
function SE() {
	return Math.random().toString(36).substr(2, 8);
}
function Zp(e, n) {
	return { usr: e.state, key: e.key, idx: n };
}
function pc(e, n, i, s) {
	return (
		i === void 0 && (i = null),
		ka({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof n == 'string' ? Vo(n) : n, {
			state: i,
			key: (n && n.key) || s || SE(),
		})
	);
}
function Sy(e) {
	let { pathname: n = '/', search: i = '', hash: s = '' } = e;
	return (
		i && i !== '?' && (n += i.charAt(0) === '?' ? i : '?' + i),
		s && s !== '#' && (n += s.charAt(0) === '#' ? s : '#' + s),
		n
	);
}
function Vo(e) {
	let n = {};
	if (e) {
		let i = e.indexOf('#');
		i >= 0 && ((n.hash = e.substr(i)), (e = e.substr(0, i)));
		let s = e.indexOf('?');
		(s >= 0 && ((n.search = e.substr(s)), (e = e.substr(0, s))), e && (n.pathname = e));
	}
	return n;
}
function CE(e, n, i, s) {
	s === void 0 && (s = {});
	let { window: a = document.defaultView, v5Compat: u = !1 } = s,
		c = a.history,
		d = lr.Pop,
		h = null,
		m = g();
	m == null && ((m = 0), c.replaceState(ka({}, c.state, { idx: m }), ''));
	function g() {
		return (c.state || { idx: null }).idx;
	}
	function y() {
		d = lr.Pop;
		let E = g(),
			b = E == null ? null : E - m;
		((m = E), h && h({ action: d, location: P.location, delta: b }));
	}
	function x(E, b) {
		d = lr.Push;
		let M = pc(P.location, E, b);
		(i && i(M, E), (m = g() + 1));
		let D = Zp(M, m),
			O = P.createHref(M);
		try {
			c.pushState(D, '', O);
		} catch (_) {
			if (_ instanceof DOMException && _.name === 'DataCloneError') throw _;
			a.location.assign(O);
		}
		u && h && h({ action: d, location: P.location, delta: 1 });
	}
	function v(E, b) {
		d = lr.Replace;
		let M = pc(P.location, E, b);
		(i && i(M, E), (m = g()));
		let D = Zp(M, m),
			O = P.createHref(M);
		(c.replaceState(D, '', O), u && h && h({ action: d, location: P.location, delta: 0 }));
	}
	function S(E) {
		let b = a.location.origin !== 'null' ? a.location.origin : a.location.href,
			M = typeof E == 'string' ? E : Sy(E);
		return (
			(M = M.replace(/ $/, '%20')),
			Ct(b, 'No window.location.(origin|href) available to create URL for href: ' + M),
			new URL(M, b)
		);
	}
	let P = {
		get action() {
			return d;
		},
		get location() {
			return e(a, c);
		},
		listen(E) {
			if (h) throw new Error('A history only accepts one active listener');
			return (
				a.addEventListener(qp, y),
				(h = E),
				() => {
					(a.removeEventListener(qp, y), (h = null));
				}
			);
		},
		createHref(E) {
			return n(a, E);
		},
		createURL: S,
		encodeLocation(E) {
			let b = S(E);
			return { pathname: b.pathname, search: b.search, hash: b.hash };
		},
		push: x,
		replace: v,
		go(E) {
			return c.go(E);
		},
	};
	return P;
}
var Jp;
(function (e) {
	((e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error'));
})(Jp || (Jp = {}));
function EE(e, n, i) {
	return (i === void 0 && (i = '/'), PE(e, n, i));
}
function PE(e, n, i, s) {
	let a = typeof n == 'string' ? Vo(n) : n,
		u = Py(a.pathname || '/', i);
	if (u == null) return null;
	let c = Cy(e);
	TE(c);
	let d = null;
	for (let h = 0; d == null && h < c.length; ++h) {
		let m = _E(u);
		d = NE(c[h], m);
	}
	return d;
}
function Cy(e, n, i, s) {
	(n === void 0 && (n = []), i === void 0 && (i = []), s === void 0 && (s = ''));
	let a = (u, c, d) => {
		let h = {
			relativePath: d === void 0 ? u.path || '' : d,
			caseSensitive: u.caseSensitive === !0,
			childrenIndex: c,
			route: u,
		};
		h.relativePath.startsWith('/') &&
			(Ct(
				h.relativePath.startsWith(s),
				'Absolute route path "' +
					h.relativePath +
					'" nested under path ' +
					('"' + s + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.',
			),
			(h.relativePath = h.relativePath.slice(s.length)));
		let m = Si([s, h.relativePath]),
			g = i.concat(h);
		(u.children &&
			u.children.length > 0 &&
			(Ct(
				u.index !== !0,
				'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + m + '".'),
			),
			Cy(u.children, n, g, m)),
			!(u.path == null && !u.index) && n.push({ path: m, score: LE(m, u.index), routesMeta: g }));
	};
	return (
		e.forEach((u, c) => {
			var d;
			if (u.path === '' || !((d = u.path) != null && d.includes('?'))) a(u, c);
			else for (let h of Ey(u.path)) a(u, c, h);
		}),
		n
	);
}
function Ey(e) {
	let n = e.split('/');
	if (n.length === 0) return [];
	let [i, ...s] = n,
		a = i.endsWith('?'),
		u = i.replace(/\?$/, '');
	if (s.length === 0) return a ? [u, ''] : [u];
	let c = Ey(s.join('/')),
		d = [];
	return (
		d.push(...c.map(h => (h === '' ? u : [u, h].join('/')))),
		a && d.push(...c),
		d.map(h => (e.startsWith('/') && h === '' ? '/' : h))
	);
}
function TE(e) {
	e.sort((n, i) =>
		n.score !== i.score
			? i.score - n.score
			: OE(
					n.routesMeta.map(s => s.childrenIndex),
					i.routesMeta.map(s => s.childrenIndex),
				),
	);
}
const kE = /^:[\w-]+$/,
	bE = 3,
	RE = 2,
	AE = 1,
	ME = 10,
	DE = -2,
	em = e => e === '*';
function LE(e, n) {
	let i = e.split('/'),
		s = i.length;
	return (
		i.some(em) && (s += DE),
		n && (s += RE),
		i.filter(a => !em(a)).reduce((a, u) => a + (kE.test(u) ? bE : u === '' ? AE : ME), s)
	);
}
function OE(e, n) {
	return e.length === n.length && e.slice(0, -1).every((s, a) => s === n[a]) ? e[e.length - 1] - n[n.length - 1] : 0;
}
function NE(e, n, i) {
	let { routesMeta: s } = e,
		a = {},
		u = '/',
		c = [];
	for (let d = 0; d < s.length; ++d) {
		let h = s[d],
			m = d === s.length - 1,
			g = u === '/' ? n : n.slice(u.length) || '/',
			y = jE({ path: h.relativePath, caseSensitive: h.caseSensitive, end: m }, g),
			x = h.route;
		if (!y) return null;
		(Object.assign(a, y.params),
			c.push({ params: a, pathname: Si([u, y.pathname]), pathnameBase: VE(Si([u, y.pathnameBase])), route: x }),
			y.pathnameBase !== '/' && (u = Si([u, y.pathnameBase])));
	}
	return c;
}
function jE(e, n) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [i, s] = IE(e.path, e.caseSensitive, e.end),
		a = n.match(i);
	if (!a) return null;
	let u = a[0],
		c = u.replace(/(.)\/+$/, '$1'),
		d = a.slice(1);
	return {
		params: s.reduce((m, g, y) => {
			let { paramName: x, isOptional: v } = g;
			if (x === '*') {
				let P = d[y] || '';
				c = u.slice(0, u.length - P.length).replace(/(.)\/+$/, '$1');
			}
			const S = d[y];
			return (v && !S ? (m[x] = void 0) : (m[x] = (S || '').replace(/%2F/g, '/')), m);
		}, {}),
		pathname: u,
		pathnameBase: c,
		pattern: e,
	};
}
function IE(e, n, i) {
	(n === void 0 && (n = !1),
		i === void 0 && (i = !0),
		tf(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
		));
	let s = [],
		a =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(c, d, h) => (s.push({ paramName: d, isOptional: h != null }), h ? '/?([^\\/]+)?' : '/([^\\/]+)'),
				);
	return (
		e.endsWith('*')
			? (s.push({ paramName: '*' }), (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: i
				? (a += '\\/*$')
				: e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
		[new RegExp(a, n ? void 0 : 'i'), s]
	);
}
function _E(e) {
	try {
		return e
			.split('/')
			.map(n => decodeURIComponent(n).replace(/\//g, '%2F'))
			.join('/');
	} catch (n) {
		return (
			tf(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + n + ').'),
			),
			e
		);
	}
}
function Py(e, n) {
	if (n === '/') return e;
	if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
	let i = n.endsWith('/') ? n.length - 1 : n.length,
		s = e.charAt(i);
	return s && s !== '/' ? null : e.slice(i) || '/';
}
const Si = e => e.join('/').replace(/\/\/+/g, '/'),
	VE = e => e.replace(/\/+$/, '').replace(/^\/*/, '/');
function FE(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const Ty = ['post', 'put', 'patch', 'delete'];
new Set(Ty);
const zE = ['get', ...Ty];
new Set(zE);
function ba() {
	return (
		(ba = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var i = arguments[n];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
					}
					return e;
				}),
		ba.apply(this, arguments)
	);
}
const BE = C.createContext(null),
	UE = C.createContext(null),
	ky = C.createContext(null),
	Ha = C.createContext(null),
	Ka = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	by = C.createContext(null);
function nf() {
	return C.useContext(Ha) != null;
}
function Ry() {
	return (nf() || Ct(!1), C.useContext(Ha).location);
}
function $E(e, n) {
	return WE(e, n);
}
function WE(e, n, i, s) {
	nf() || Ct(!1);
	let { navigator: a } = C.useContext(ky),
		{ matches: u } = C.useContext(Ka),
		c = u[u.length - 1],
		d = c ? c.params : {};
	c && c.pathname;
	let h = c ? c.pathnameBase : '/';
	c && c.route;
	let m = Ry(),
		g;
	if (n) {
		var y;
		let E = typeof n == 'string' ? Vo(n) : n;
		(h === '/' || ((y = E.pathname) != null && y.startsWith(h)) || Ct(!1), (g = E));
	} else g = m;
	let x = g.pathname || '/',
		v = x;
	if (h !== '/') {
		let E = h.replace(/^\//, '').split('/');
		v = '/' + x.replace(/^\//, '').split('/').slice(E.length).join('/');
	}
	let S = EE(e, { pathname: v }),
		P = YE(
			S &&
				S.map(E =>
					Object.assign({}, E, {
						params: Object.assign({}, d, E.params),
						pathname: Si([h, a.encodeLocation ? a.encodeLocation(E.pathname).pathname : E.pathname]),
						pathnameBase:
							E.pathnameBase === '/'
								? h
								: Si([h, a.encodeLocation ? a.encodeLocation(E.pathnameBase).pathname : E.pathnameBase]),
					}),
				),
			u,
			i,
			s,
		);
	return n && P
		? C.createElement(
				Ha.Provider,
				{
					value: {
						location: ba({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, g),
						navigationType: lr.Pop,
					},
				},
				P,
			)
		: P;
}
function HE() {
	let e = JE(),
		n = FE(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
		i = e instanceof Error ? e.stack : null,
		a = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
	return C.createElement(
		C.Fragment,
		null,
		C.createElement('h2', null, 'Unexpected Application Error!'),
		C.createElement('h3', { style: { fontStyle: 'italic' } }, n),
		i ? C.createElement('pre', { style: a }, i) : null,
		null,
	);
}
const KE = C.createElement(HE, null);
class GE extends C.Component {
	constructor(n) {
		(super(n), (this.state = { location: n.location, revalidation: n.revalidation, error: n.error }));
	}
	static getDerivedStateFromError(n) {
		return { error: n };
	}
	static getDerivedStateFromProps(n, i) {
		return i.location !== n.location || (i.revalidation !== 'idle' && n.revalidation === 'idle')
			? { error: n.error, location: n.location, revalidation: n.revalidation }
			: {
					error: n.error !== void 0 ? n.error : i.error,
					location: i.location,
					revalidation: n.revalidation || i.revalidation,
				};
	}
	componentDidCatch(n, i) {
		console.error('React Router caught the following error during render', n, i);
	}
	render() {
		return this.state.error !== void 0
			? C.createElement(
					Ka.Provider,
					{ value: this.props.routeContext },
					C.createElement(by.Provider, { value: this.state.error, children: this.props.component }),
				)
			: this.props.children;
	}
}
function QE(e) {
	let { routeContext: n, match: i, children: s } = e,
		a = C.useContext(BE);
	return (
		a &&
			a.static &&
			a.staticContext &&
			(i.route.errorElement || i.route.ErrorBoundary) &&
			(a.staticContext._deepestRenderedBoundaryId = i.route.id),
		C.createElement(Ka.Provider, { value: n }, s)
	);
}
function YE(e, n, i, s) {
	var a;
	if ((n === void 0 && (n = []), i === void 0 && (i = null), s === void 0 && (s = null), e == null)) {
		var u;
		if (!i) return null;
		if (i.errors) e = i.matches;
		else if ((u = s) != null && u.v7_partialHydration && n.length === 0 && !i.initialized && i.matches.length > 0)
			e = i.matches;
		else return null;
	}
	let c = e,
		d = (a = i) == null ? void 0 : a.errors;
	if (d != null) {
		let g = c.findIndex(y => y.route.id && d?.[y.route.id] !== void 0);
		(g >= 0 || Ct(!1), (c = c.slice(0, Math.min(c.length, g + 1))));
	}
	let h = !1,
		m = -1;
	if (i && s && s.v7_partialHydration)
		for (let g = 0; g < c.length; g++) {
			let y = c[g];
			if (((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (m = g), y.route.id)) {
				let { loaderData: x, errors: v } = i,
					S = y.route.loader && x[y.route.id] === void 0 && (!v || v[y.route.id] === void 0);
				if (y.route.lazy || S) {
					((h = !0), m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]));
					break;
				}
			}
		}
	return c.reduceRight((g, y, x) => {
		let v,
			S = !1,
			P = null,
			E = null;
		i &&
			((v = d && y.route.id ? d[y.route.id] : void 0),
			(P = y.route.errorElement || KE),
			h &&
				(m < 0 && x === 0
					? (eP('route-fallback'), (S = !0), (E = null))
					: m === x && ((S = !0), (E = y.route.hydrateFallbackElement || null))));
		let b = n.concat(c.slice(0, x + 1)),
			M = () => {
				let D;
				return (
					v
						? (D = P)
						: S
							? (D = E)
							: y.route.Component
								? (D = C.createElement(y.route.Component, null))
								: y.route.element
									? (D = y.route.element)
									: (D = g),
					C.createElement(QE, {
						match: y,
						routeContext: { outlet: g, matches: b, isDataRoute: i != null },
						children: D,
					})
				);
			};
		return i && (y.route.ErrorBoundary || y.route.errorElement || x === 0)
			? C.createElement(GE, {
					location: i.location,
					revalidation: i.revalidation,
					component: P,
					error: v,
					children: M(),
					routeContext: { outlet: null, matches: b, isDataRoute: !0 },
				})
			: M();
	}, null);
}
var Ay = (function (e) {
	return (
		(e.UseBlocker = 'useBlocker'),
		(e.UseLoaderData = 'useLoaderData'),
		(e.UseActionData = 'useActionData'),
		(e.UseRouteError = 'useRouteError'),
		(e.UseNavigation = 'useNavigation'),
		(e.UseRouteLoaderData = 'useRouteLoaderData'),
		(e.UseMatches = 'useMatches'),
		(e.UseRevalidator = 'useRevalidator'),
		(e.UseNavigateStable = 'useNavigate'),
		(e.UseRouteId = 'useRouteId'),
		e
	);
})(Ay || {});
function XE(e) {
	let n = C.useContext(UE);
	return (n || Ct(!1), n);
}
function qE(e) {
	let n = C.useContext(Ka);
	return (n || Ct(!1), n);
}
function ZE(e) {
	let n = qE(),
		i = n.matches[n.matches.length - 1];
	return (i.route.id || Ct(!1), i.route.id);
}
function JE() {
	var e;
	let n = C.useContext(by),
		i = XE(Ay.UseRouteError),
		s = ZE();
	return n !== void 0 ? n : (e = i.errors) == null ? void 0 : e[s];
}
const tm = {};
function eP(e, n, i) {
	tm[e] || (tm[e] = !0);
}
function tP(e, n) {
	(e?.v7_startTransition, e?.v7_relativeSplatPath);
}
function mc(e) {
	Ct(!1);
}
function nP(e) {
	let {
		basename: n = '/',
		children: i = null,
		location: s,
		navigationType: a = lr.Pop,
		navigator: u,
		static: c = !1,
		future: d,
	} = e;
	nf() && Ct(!1);
	let h = n.replace(/^\/*/, '/'),
		m = C.useMemo(
			() => ({ basename: h, navigator: u, static: c, future: ba({ v7_relativeSplatPath: !1 }, d) }),
			[h, d, u, c],
		);
	typeof s == 'string' && (s = Vo(s));
	let { pathname: g = '/', search: y = '', hash: x = '', state: v = null, key: S = 'default' } = s,
		P = C.useMemo(() => {
			let E = Py(g, h);
			return E == null ? null : { location: { pathname: E, search: y, hash: x, state: v, key: S }, navigationType: a };
		}, [h, g, y, x, v, S, a]);
	return P == null
		? null
		: C.createElement(ky.Provider, { value: m }, C.createElement(Ha.Provider, { children: i, value: P }));
}
function rP(e) {
	let { children: n, location: i } = e;
	return $E(gc(n), i);
}
new Promise(() => {});
function gc(e, n) {
	n === void 0 && (n = []);
	let i = [];
	return (
		C.Children.forEach(e, (s, a) => {
			if (!C.isValidElement(s)) return;
			let u = [...n, a];
			if (s.type === C.Fragment) {
				i.push.apply(i, gc(s.props.children, u));
				return;
			}
			(s.type !== mc && Ct(!1), !s.props.index || !s.props.children || Ct(!1));
			let c = {
				id: s.props.id || u.join('-'),
				caseSensitive: s.props.caseSensitive,
				element: s.props.element,
				Component: s.props.Component,
				index: s.props.index,
				path: s.props.path,
				loader: s.props.loader,
				action: s.props.action,
				errorElement: s.props.errorElement,
				ErrorBoundary: s.props.ErrorBoundary,
				hasErrorBoundary: s.props.ErrorBoundary != null || s.props.errorElement != null,
				shouldRevalidate: s.props.shouldRevalidate,
				handle: s.props.handle,
				lazy: s.props.lazy,
			};
			(s.props.children && (c.children = gc(s.props.children, u)), i.push(c));
		}),
		i
	);
}
const iP = '6';
try {
	window.__reactRouterVersion = iP;
} catch {}
const oP = 'startTransition',
	nm = yx[oP];
function sP(e) {
	let { basename: n, children: i, future: s, window: a } = e,
		u = C.useRef();
	u.current == null && (u.current = xE({ window: a, v5Compat: !0 }));
	let c = u.current,
		[d, h] = C.useState({ action: c.action, location: c.location }),
		{ v7_startTransition: m } = s || {},
		g = C.useCallback(
			y => {
				m && nm ? nm(() => h(y)) : h(y);
			},
			[h, m],
		);
	return (
		C.useLayoutEffect(() => c.listen(g), [c, g]),
		C.useEffect(() => tP(s), [s]),
		C.createElement(nP, {
			basename: n,
			children: i,
			location: d.location,
			navigationType: d.action,
			navigator: c,
			future: s,
		})
	);
}
var rm;
(function (e) {
	((e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher'),
		(e.useViewTransitionState = 'useViewTransitionState'));
})(rm || (rm = {}));
var im;
(function (e) {
	((e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration'));
})(im || (im = {}));
function aP({ children: e }) {
	return j.jsx(xx, {
		attribute: 'class',
		defaultTheme: 'dark',
		enableSystem: !0,
		disableTransitionOnChange: !0,
		children: e,
	});
}
const lP = 'modulepreload',
	uP = function (e) {
		return '/My-Portfolio/' + e;
	},
	om = {},
	_r = function (n, i, s) {
		let a = Promise.resolve();
		if (i && i.length > 0) {
			let h = function (m) {
				return Promise.all(
					m.map(g =>
						Promise.resolve(g).then(
							y => ({ status: 'fulfilled', value: y }),
							y => ({ status: 'rejected', reason: y }),
						),
					),
				);
			};
			document.getElementsByTagName('link');
			const c = document.querySelector('meta[property=csp-nonce]'),
				d = c?.nonce || c?.getAttribute('nonce');
			a = h(
				i.map(m => {
					if (((m = uP(m)), m in om)) return;
					om[m] = !0;
					const g = m.endsWith('.css'),
						y = g ? '[rel="stylesheet"]' : '';
					if (document.querySelector(`link[href="${m}"]${y}`)) return;
					const x = document.createElement('link');
					if (
						((x.rel = g ? 'stylesheet' : lP),
						g || (x.as = 'script'),
						(x.crossOrigin = ''),
						(x.href = m),
						d && x.setAttribute('nonce', d),
						document.head.appendChild(x),
						g)
					)
						return new Promise((v, S) => {
							(x.addEventListener('load', v),
								x.addEventListener('error', () => S(new Error(`Unable to preload CSS for ${m}`))));
						});
				}),
			);
		}
		function u(c) {
			const d = new Event('vite:preloadError', { cancelable: !0 });
			if (((d.payload = c), window.dispatchEvent(d), !d.defaultPrevented)) throw c;
		}
		return a.then(c => {
			for (const d of c || []) d.status === 'rejected' && u(d.reason);
			return n().catch(u);
		});
	},
	rf = C.createContext({});
function of(e) {
	const n = C.useRef(null);
	return (n.current === null && (n.current = e()), n.current);
}
const My = typeof window < 'u',
	Dy = My ? C.useLayoutEffect : C.useEffect,
	Ga = C.createContext(null);
function sf(e, n) {
	e.indexOf(n) === -1 && e.push(n);
}
function Ra(e, n) {
	const i = e.indexOf(n);
	i > -1 && e.splice(i, 1);
}
const Sn = (e, n, i) => (i > n ? n : i < e ? e : i);
let af = () => {};
const In = {},
	Ly = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Oy(e) {
	return typeof e == 'object' && e !== null;
}
const Ny = e => /^0[^.\s]+$/u.test(e);
function lf(e) {
	let n;
	return () => (n === void 0 && (n = e()), n);
}
const Ft = e => e,
	cP = (e, n) => i => n(e(i)),
	Fo = (...e) => e.reduce(cP),
	Lo = (e, n, i) => {
		const s = n - e;
		return s === 0 ? 1 : (i - e) / s;
	};
class uf {
	constructor() {
		this.subscriptions = [];
	}
	add(n) {
		return (sf(this.subscriptions, n), () => Ra(this.subscriptions, n));
	}
	notify(n, i, s) {
		const a = this.subscriptions.length;
		if (a)
			if (a === 1) this.subscriptions[0](n, i, s);
			else
				for (let u = 0; u < a; u++) {
					const c = this.subscriptions[u];
					c && c(n, i, s);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const tn = e => e * 1e3,
	Vt = e => e / 1e3;
function jy(e, n) {
	return n ? e * (1e3 / n) : 0;
}
const Iy = (e, n, i) => (((1 - 3 * i + 3 * n) * e + (3 * i - 6 * n)) * e + 3 * n) * e,
	fP = 1e-7,
	dP = 12;
function hP(e, n, i, s, a) {
	let u,
		c,
		d = 0;
	do ((c = n + (i - n) / 2), (u = Iy(c, s, a) - e), u > 0 ? (i = c) : (n = c));
	while (Math.abs(u) > fP && ++d < dP);
	return c;
}
function zo(e, n, i, s) {
	if (e === n && i === s) return Ft;
	const a = u => hP(u, 0, 1, e, i);
	return u => (u === 0 || u === 1 ? u : Iy(a(u), n, s));
}
const _y = e => n => (n <= 0.5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2),
	Vy = e => n => 1 - e(1 - n),
	Fy = zo(0.33, 1.53, 0.69, 0.99),
	cf = Vy(Fy),
	zy = _y(cf),
	By = e => ((e *= 2) < 1 ? 0.5 * cf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
	ff = e => 1 - Math.sin(Math.acos(e)),
	Uy = Vy(ff),
	$y = _y(ff),
	pP = zo(0.42, 0, 1, 1),
	mP = zo(0, 0, 0.58, 1),
	Wy = zo(0.42, 0, 0.58, 1),
	gP = e => Array.isArray(e) && typeof e[0] != 'number',
	Hy = e => Array.isArray(e) && typeof e[0] == 'number',
	yP = {
		linear: Ft,
		easeIn: pP,
		easeInOut: Wy,
		easeOut: mP,
		circIn: ff,
		circInOut: $y,
		circOut: Uy,
		backIn: cf,
		backInOut: zy,
		backOut: Fy,
		anticipate: By,
	},
	vP = e => typeof e == 'string',
	sm = e => {
		if (Hy(e)) {
			af(e.length === 4);
			const [n, i, s, a] = e;
			return zo(n, i, s, a);
		} else if (vP(e)) return yP[e];
		return e;
	},
	la = ['setup', 'read', 'resolveKeyframes', 'preUpdate', 'update', 'preRender', 'render', 'postRender'];
function wP(e, n) {
	let i = new Set(),
		s = new Set(),
		a = !1,
		u = !1;
	const c = new WeakSet();
	let d = { delta: 0, timestamp: 0, isProcessing: !1 };
	function h(g) {
		(c.has(g) && (m.schedule(g), e()), g(d));
	}
	const m = {
		schedule: (g, y = !1, x = !1) => {
			const S = x && a ? i : s;
			return (y && c.add(g), S.has(g) || S.add(g), g);
		},
		cancel: g => {
			(s.delete(g), c.delete(g));
		},
		process: g => {
			if (((d = g), a)) {
				u = !0;
				return;
			}
			((a = !0), ([i, s] = [s, i]), i.forEach(h), i.clear(), (a = !1), u && ((u = !1), m.process(g)));
		},
	};
	return m;
}
const xP = 40;
function Ky(e, n) {
	let i = !1,
		s = !0;
	const a = { delta: 0, timestamp: 0, isProcessing: !1 },
		u = () => (i = !0),
		c = la.reduce((D, O) => ((D[O] = wP(u)), D), {}),
		{ setup: d, read: h, resolveKeyframes: m, preUpdate: g, update: y, preRender: x, render: v, postRender: S } = c,
		P = () => {
			const D = In.useManualTiming ? a.timestamp : performance.now();
			((i = !1),
				In.useManualTiming || (a.delta = s ? 1e3 / 60 : Math.max(Math.min(D - a.timestamp, xP), 1)),
				(a.timestamp = D),
				(a.isProcessing = !0),
				d.process(a),
				h.process(a),
				m.process(a),
				g.process(a),
				y.process(a),
				x.process(a),
				v.process(a),
				S.process(a),
				(a.isProcessing = !1),
				i && n && ((s = !1), e(P)));
		},
		E = () => {
			((i = !0), (s = !0), a.isProcessing || e(P));
		};
	return {
		schedule: la.reduce((D, O) => {
			const _ = c[O];
			return ((D[O] = (B, G = !1, H = !1) => (i || E(), _.schedule(B, G, H))), D);
		}, {}),
		cancel: D => {
			for (let O = 0; O < la.length; O++) c[la[O]].cancel(D);
		},
		state: a,
		steps: c,
	};
}
const {
	schedule: Me,
	cancel: dr,
	state: et,
	steps: zu,
} = Ky(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : Ft, !0);
let ha;
function SP() {
	ha = void 0;
}
const ft = {
		now: () => (ha === void 0 && ft.set(et.isProcessing || In.useManualTiming ? et.timestamp : performance.now()), ha),
		set: e => {
			((ha = e), queueMicrotask(SP));
		},
	},
	Gy = e => n => typeof n == 'string' && n.startsWith(e),
	Qy = Gy('--'),
	CP = Gy('var(--'),
	df = e => (CP(e) ? EP.test(e.split('/*')[0].trim()) : !1),
	EP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function am(e) {
	return typeof e != 'string' ? !1 : e.split('/*')[0].includes('var(--');
}
const Ai = { test: e => typeof e == 'number', parse: parseFloat, transform: e => e },
	Oo = { ...Ai, transform: e => Sn(0, 1, e) },
	ua = { ...Ai, default: 1 },
	Po = e => Math.round(e * 1e5) / 1e5,
	hf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function PP(e) {
	return e == null;
}
const TP =
		/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
	pf = (e, n) => i =>
		!!(
			(typeof i == 'string' && TP.test(i) && i.startsWith(e)) ||
			(n && !PP(i) && Object.prototype.hasOwnProperty.call(i, n))
		),
	Yy = (e, n, i) => s => {
		if (typeof s != 'string') return s;
		const [a, u, c, d] = s.match(hf);
		return { [e]: parseFloat(a), [n]: parseFloat(u), [i]: parseFloat(c), alpha: d !== void 0 ? parseFloat(d) : 1 };
	},
	kP = e => Sn(0, 255, e),
	Bu = { ...Ai, transform: e => Math.round(kP(e)) },
	Dr = {
		test: pf('rgb', 'red'),
		parse: Yy('red', 'green', 'blue'),
		transform: ({ red: e, green: n, blue: i, alpha: s = 1 }) =>
			'rgba(' + Bu.transform(e) + ', ' + Bu.transform(n) + ', ' + Bu.transform(i) + ', ' + Po(Oo.transform(s)) + ')',
	};
function bP(e) {
	let n = '',
		i = '',
		s = '',
		a = '';
	return (
		e.length > 5
			? ((n = e.substring(1, 3)), (i = e.substring(3, 5)), (s = e.substring(5, 7)), (a = e.substring(7, 9)))
			: ((n = e.substring(1, 2)),
				(i = e.substring(2, 3)),
				(s = e.substring(3, 4)),
				(a = e.substring(4, 5)),
				(n += n),
				(i += i),
				(s += s),
				(a += a)),
		{ red: parseInt(n, 16), green: parseInt(i, 16), blue: parseInt(s, 16), alpha: a ? parseInt(a, 16) / 255 : 1 }
	);
}
const yc = { test: pf('#'), parse: bP, transform: Dr.transform },
	Bo = e => ({
		test: n => typeof n == 'string' && n.endsWith(e) && n.split(' ').length === 1,
		parse: parseFloat,
		transform: n => `${n}${e}`,
	}),
	ar = Bo('deg'),
	wn = Bo('%'),
	re = Bo('px'),
	RP = Bo('vh'),
	AP = Bo('vw'),
	lm = { ...wn, parse: e => wn.parse(e) / 100, transform: e => wn.transform(e * 100) },
	hi = {
		test: pf('hsl', 'hue'),
		parse: Yy('hue', 'saturation', 'lightness'),
		transform: ({ hue: e, saturation: n, lightness: i, alpha: s = 1 }) =>
			'hsla(' +
			Math.round(e) +
			', ' +
			wn.transform(Po(n)) +
			', ' +
			wn.transform(Po(i)) +
			', ' +
			Po(Oo.transform(s)) +
			')',
	},
	We = {
		test: e => Dr.test(e) || yc.test(e) || hi.test(e),
		parse: e => (Dr.test(e) ? Dr.parse(e) : hi.test(e) ? hi.parse(e) : yc.parse(e)),
		transform: e => (typeof e == 'string' ? e : e.hasOwnProperty('red') ? Dr.transform(e) : hi.transform(e)),
		getAnimatableNone: e => {
			const n = We.parse(e);
			return ((n.alpha = 0), We.transform(n));
		},
	},
	MP =
		/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function DP(e) {
	return isNaN(e) && typeof e == 'string' && (e.match(hf)?.length || 0) + (e.match(MP)?.length || 0) > 0;
}
const Xy = 'number',
	qy = 'color',
	LP = 'var',
	OP = 'var(',
	um = '${}',
	NP =
		/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function No(e) {
	const n = e.toString(),
		i = [],
		s = { color: [], number: [], var: [] },
		a = [];
	let u = 0;
	const d = n
		.replace(
			NP,
			h => (
				We.test(h)
					? (s.color.push(u), a.push(qy), i.push(We.parse(h)))
					: h.startsWith(OP)
						? (s.var.push(u), a.push(LP), i.push(h))
						: (s.number.push(u), a.push(Xy), i.push(parseFloat(h))),
				++u,
				um
			),
		)
		.split(um);
	return { values: i, split: d, indexes: s, types: a };
}
function Zy(e) {
	return No(e).values;
}
function Jy(e) {
	const { split: n, types: i } = No(e),
		s = n.length;
	return a => {
		let u = '';
		for (let c = 0; c < s; c++)
			if (((u += n[c]), a[c] !== void 0)) {
				const d = i[c];
				d === Xy ? (u += Po(a[c])) : d === qy ? (u += We.transform(a[c])) : (u += a[c]);
			}
		return u;
	};
}
const jP = e => (typeof e == 'number' ? 0 : We.test(e) ? We.getAnimatableNone(e) : e);
function IP(e) {
	const n = Zy(e);
	return Jy(e)(n.map(jP));
}
const hr = { test: DP, parse: Zy, createTransformer: Jy, getAnimatableNone: IP };
function Uu(e, n, i) {
	return (
		i < 0 && (i += 1),
		i > 1 && (i -= 1),
		i < 1 / 6 ? e + (n - e) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? e + (n - e) * (2 / 3 - i) * 6 : e
	);
}
function _P({ hue: e, saturation: n, lightness: i, alpha: s }) {
	((e /= 360), (n /= 100), (i /= 100));
	let a = 0,
		u = 0,
		c = 0;
	if (!n) a = u = c = i;
	else {
		const d = i < 0.5 ? i * (1 + n) : i + n - i * n,
			h = 2 * i - d;
		((a = Uu(h, d, e + 1 / 3)), (u = Uu(h, d, e)), (c = Uu(h, d, e - 1 / 3)));
	}
	return { red: Math.round(a * 255), green: Math.round(u * 255), blue: Math.round(c * 255), alpha: s };
}
function Aa(e, n) {
	return i => (i > 0 ? n : e);
}
const _e = (e, n, i) => e + (n - e) * i,
	$u = (e, n, i) => {
		const s = e * e,
			a = i * (n * n - s) + s;
		return a < 0 ? 0 : Math.sqrt(a);
	},
	VP = [yc, Dr, hi],
	FP = e => VP.find(n => n.test(e));
function cm(e) {
	const n = FP(e);
	if (!n) return !1;
	let i = n.parse(e);
	return (n === hi && (i = _P(i)), i);
}
const fm = (e, n) => {
		const i = cm(e),
			s = cm(n);
		if (!i || !s) return Aa(e, n);
		const a = { ...i };
		return u => (
			(a.red = $u(i.red, s.red, u)),
			(a.green = $u(i.green, s.green, u)),
			(a.blue = $u(i.blue, s.blue, u)),
			(a.alpha = _e(i.alpha, s.alpha, u)),
			Dr.transform(a)
		);
	},
	vc = new Set(['none', 'hidden']);
function zP(e, n) {
	return vc.has(e) ? i => (i <= 0 ? e : n) : i => (i >= 1 ? n : e);
}
function BP(e, n) {
	return i => _e(e, n, i);
}
function mf(e) {
	return typeof e == 'number'
		? BP
		: typeof e == 'string'
			? df(e)
				? Aa
				: We.test(e)
					? fm
					: WP
			: Array.isArray(e)
				? ev
				: typeof e == 'object'
					? We.test(e)
						? fm
						: UP
					: Aa;
}
function ev(e, n) {
	const i = [...e],
		s = i.length,
		a = e.map((u, c) => mf(u)(u, n[c]));
	return u => {
		for (let c = 0; c < s; c++) i[c] = a[c](u);
		return i;
	};
}
function UP(e, n) {
	const i = { ...e, ...n },
		s = {};
	for (const a in i) e[a] !== void 0 && n[a] !== void 0 && (s[a] = mf(e[a])(e[a], n[a]));
	return a => {
		for (const u in s) i[u] = s[u](a);
		return i;
	};
}
function $P(e, n) {
	const i = [],
		s = { color: 0, var: 0, number: 0 };
	for (let a = 0; a < n.values.length; a++) {
		const u = n.types[a],
			c = e.indexes[u][s[u]],
			d = e.values[c] ?? 0;
		((i[a] = d), s[u]++);
	}
	return i;
}
const WP = (e, n) => {
	const i = hr.createTransformer(n),
		s = No(e),
		a = No(n);
	return s.indexes.var.length === a.indexes.var.length &&
		s.indexes.color.length === a.indexes.color.length &&
		s.indexes.number.length >= a.indexes.number.length
		? (vc.has(e) && !a.values.length) || (vc.has(n) && !s.values.length)
			? zP(e, n)
			: Fo(ev($P(s, a), a.values), i)
		: Aa(e, n);
};
function tv(e, n, i) {
	return typeof e == 'number' && typeof n == 'number' && typeof i == 'number' ? _e(e, n, i) : mf(e)(e, n);
}
const HP = e => {
		const n = ({ timestamp: i }) => e(i);
		return {
			start: (i = !0) => Me.update(n, i),
			stop: () => dr(n),
			now: () => (et.isProcessing ? et.timestamp : ft.now()),
		};
	},
	nv = (e, n, i = 10) => {
		let s = '';
		const a = Math.max(Math.round(n / i), 2);
		for (let u = 0; u < a; u++) s += Math.round(e(u / (a - 1)) * 1e4) / 1e4 + ', ';
		return `linear(${s.substring(0, s.length - 2)})`;
	},
	Ma = 2e4;
function gf(e) {
	let n = 0;
	const i = 50;
	let s = e.next(n);
	for (; !s.done && n < Ma; ) ((n += i), (s = e.next(n)));
	return n >= Ma ? 1 / 0 : n;
}
function KP(e, n = 100, i) {
	const s = i({ ...e, keyframes: [0, n] }),
		a = Math.min(gf(s), Ma);
	return { type: 'keyframes', ease: u => s.next(a * u).value / n, duration: Vt(a) };
}
const GP = 5;
function rv(e, n, i) {
	const s = Math.max(n - GP, 0);
	return jy(i - e(s), n - s);
}
const Fe = {
		stiffness: 100,
		damping: 10,
		mass: 1,
		velocity: 0,
		duration: 800,
		bounce: 0.3,
		visualDuration: 0.3,
		restSpeed: { granular: 0.01, default: 2 },
		restDelta: { granular: 0.005, default: 0.5 },
		minDuration: 0.01,
		maxDuration: 10,
		minDamping: 0.05,
		maxDamping: 1,
	},
	Wu = 0.001;
function QP({ duration: e = Fe.duration, bounce: n = Fe.bounce, velocity: i = Fe.velocity, mass: s = Fe.mass }) {
	let a,
		u,
		c = 1 - n;
	((c = Sn(Fe.minDamping, Fe.maxDamping, c)),
		(e = Sn(Fe.minDuration, Fe.maxDuration, Vt(e))),
		c < 1
			? ((a = m => {
					const g = m * c,
						y = g * e,
						x = g - i,
						v = wc(m, c),
						S = Math.exp(-y);
					return Wu - (x / v) * S;
				}),
				(u = m => {
					const y = m * c * e,
						x = y * i + i,
						v = Math.pow(c, 2) * Math.pow(m, 2) * e,
						S = Math.exp(-y),
						P = wc(Math.pow(m, 2), c);
					return ((-a(m) + Wu > 0 ? -1 : 1) * ((x - v) * S)) / P;
				}))
			: ((a = m => {
					const g = Math.exp(-m * e),
						y = (m - i) * e + 1;
					return -Wu + g * y;
				}),
				(u = m => {
					const g = Math.exp(-m * e),
						y = (i - m) * (e * e);
					return g * y;
				})));
	const d = 5 / e,
		h = XP(a, u, d);
	if (((e = tn(e)), isNaN(h))) return { stiffness: Fe.stiffness, damping: Fe.damping, duration: e };
	{
		const m = Math.pow(h, 2) * s;
		return { stiffness: m, damping: c * 2 * Math.sqrt(s * m), duration: e };
	}
}
const YP = 12;
function XP(e, n, i) {
	let s = i;
	for (let a = 1; a < YP; a++) s = s - e(s) / n(s);
	return s;
}
function wc(e, n) {
	return e * Math.sqrt(1 - n * n);
}
const qP = ['duration', 'bounce'],
	ZP = ['stiffness', 'damping', 'mass'];
function dm(e, n) {
	return n.some(i => e[i] !== void 0);
}
function JP(e) {
	let n = {
		velocity: Fe.velocity,
		stiffness: Fe.stiffness,
		damping: Fe.damping,
		mass: Fe.mass,
		isResolvedFromDuration: !1,
		...e,
	};
	if (!dm(e, ZP) && dm(e, qP))
		if (e.visualDuration) {
			const i = e.visualDuration,
				s = (2 * Math.PI) / (i * 1.2),
				a = s * s,
				u = 2 * Sn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(a);
			n = { ...n, mass: Fe.mass, stiffness: a, damping: u };
		} else {
			const i = QP(e);
			((n = { ...n, ...i, mass: Fe.mass }), (n.isResolvedFromDuration = !0));
		}
	return n;
}
function Da(e = Fe.visualDuration, n = Fe.bounce) {
	const i = typeof e != 'object' ? { visualDuration: e, keyframes: [0, 1], bounce: n } : e;
	let { restSpeed: s, restDelta: a } = i;
	const u = i.keyframes[0],
		c = i.keyframes[i.keyframes.length - 1],
		d = { done: !1, value: u },
		{
			stiffness: h,
			damping: m,
			mass: g,
			duration: y,
			velocity: x,
			isResolvedFromDuration: v,
		} = JP({ ...i, velocity: -Vt(i.velocity || 0) }),
		S = x || 0,
		P = m / (2 * Math.sqrt(h * g)),
		E = c - u,
		b = Vt(Math.sqrt(h / g)),
		M = Math.abs(E) < 5;
	(s || (s = M ? Fe.restSpeed.granular : Fe.restSpeed.default),
		a || (a = M ? Fe.restDelta.granular : Fe.restDelta.default));
	let D;
	if (P < 1) {
		const _ = wc(b, P);
		D = B => {
			const G = Math.exp(-P * b * B);
			return c - G * (((S + P * b * E) / _) * Math.sin(_ * B) + E * Math.cos(_ * B));
		};
	} else if (P === 1) D = _ => c - Math.exp(-b * _) * (E + (S + b * E) * _);
	else {
		const _ = b * Math.sqrt(P * P - 1);
		D = B => {
			const G = Math.exp(-P * b * B),
				H = Math.min(_ * B, 300);
			return c - (G * ((S + P * b * E) * Math.sinh(H) + _ * E * Math.cosh(H))) / _;
		};
	}
	const O = {
		calculatedDuration: (v && y) || null,
		next: _ => {
			const B = D(_);
			if (v) d.done = _ >= y;
			else {
				let G = _ === 0 ? S : 0;
				P < 1 && (G = _ === 0 ? tn(S) : rv(D, _, B));
				const H = Math.abs(G) <= s,
					q = Math.abs(c - B) <= a;
				d.done = H && q;
			}
			return ((d.value = d.done ? c : B), d);
		},
		toString: () => {
			const _ = Math.min(gf(O), Ma),
				B = nv(G => O.next(_ * G).value, _, 30);
			return _ + 'ms ' + B;
		},
		toTransition: () => {},
	};
	return O;
}
Da.applyToOptions = e => {
	const n = KP(e, 100, Da);
	return ((e.ease = n.ease), (e.duration = tn(n.duration)), (e.type = 'keyframes'), e);
};
function xc({
	keyframes: e,
	velocity: n = 0,
	power: i = 0.8,
	timeConstant: s = 325,
	bounceDamping: a = 10,
	bounceStiffness: u = 500,
	modifyTarget: c,
	min: d,
	max: h,
	restDelta: m = 0.5,
	restSpeed: g,
}) {
	const y = e[0],
		x = { done: !1, value: y },
		v = H => (d !== void 0 && H < d) || (h !== void 0 && H > h),
		S = H => (d === void 0 ? h : h === void 0 || Math.abs(d - H) < Math.abs(h - H) ? d : h);
	let P = i * n;
	const E = y + P,
		b = c === void 0 ? E : c(E);
	b !== E && (P = b - y);
	const M = H => -P * Math.exp(-H / s),
		D = H => b + M(H),
		O = H => {
			const q = M(H),
				oe = D(H);
			((x.done = Math.abs(q) <= m), (x.value = x.done ? b : oe));
		};
	let _, B;
	const G = H => {
		v(x.value) &&
			((_ = H),
			(B = Da({
				keyframes: [x.value, S(x.value)],
				velocity: rv(D, H, x.value),
				damping: a,
				stiffness: u,
				restDelta: m,
				restSpeed: g,
			})));
	};
	return (
		G(0),
		{
			calculatedDuration: null,
			next: H => {
				let q = !1;
				return (!B && _ === void 0 && ((q = !0), O(H), G(H)), _ !== void 0 && H >= _ ? B.next(H - _) : (!q && O(H), x));
			},
		}
	);
}
function eT(e, n, i) {
	const s = [],
		a = i || In.mix || tv,
		u = e.length - 1;
	for (let c = 0; c < u; c++) {
		let d = a(e[c], e[c + 1]);
		if (n) {
			const h = Array.isArray(n) ? n[c] || Ft : n;
			d = Fo(h, d);
		}
		s.push(d);
	}
	return s;
}
function tT(e, n, { clamp: i = !0, ease: s, mixer: a } = {}) {
	const u = e.length;
	if ((af(u === n.length), u === 1)) return () => n[0];
	if (u === 2 && n[0] === n[1]) return () => n[1];
	const c = e[0] === e[1];
	e[0] > e[u - 1] && ((e = [...e].reverse()), (n = [...n].reverse()));
	const d = eT(n, s, a),
		h = d.length,
		m = g => {
			if (c && g < e[0]) return n[0];
			let y = 0;
			if (h > 1) for (; y < e.length - 2 && !(g < e[y + 1]); y++);
			const x = Lo(e[y], e[y + 1], g);
			return d[y](x);
		};
	return i ? g => m(Sn(e[0], e[u - 1], g)) : m;
}
function nT(e, n) {
	const i = e[e.length - 1];
	for (let s = 1; s <= n; s++) {
		const a = Lo(0, n, s);
		e.push(_e(i, 1, a));
	}
}
function rT(e) {
	const n = [0];
	return (nT(n, e.length - 1), n);
}
function iT(e, n) {
	return e.map(i => i * n);
}
function oT(e, n) {
	return e.map(() => n || Wy).splice(0, e.length - 1);
}
function To({ duration: e = 300, keyframes: n, times: i, ease: s = 'easeInOut' }) {
	const a = gP(s) ? s.map(sm) : sm(s),
		u = { done: !1, value: n[0] },
		c = iT(i && i.length === n.length ? i : rT(n), e),
		d = tT(c, n, { ease: Array.isArray(a) ? a : oT(n, a) });
	return { calculatedDuration: e, next: h => ((u.value = d(h)), (u.done = h >= e), u) };
}
const sT = e => e !== null;
function yf(e, { repeat: n, repeatType: i = 'loop' }, s, a = 1) {
	const u = e.filter(sT),
		d = a < 0 || (n && i !== 'loop' && n % 2 === 1) ? 0 : u.length - 1;
	return !d || s === void 0 ? u[d] : s;
}
const aT = { decay: xc, inertia: xc, tween: To, keyframes: To, spring: Da };
function iv(e) {
	typeof e.type == 'string' && (e.type = aT[e.type]);
}
class vf {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise(n => {
			this.resolve = n;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(n, i) {
		return this.finished.then(n, i);
	}
}
const lT = e => e / 100;
class wf extends vf {
	constructor(n) {
		(super(),
			(this.state = 'idle'),
			(this.startTime = null),
			(this.isStopped = !1),
			(this.currentTime = 0),
			(this.holdTime = null),
			(this.playbackSpeed = 1),
			(this.stop = () => {
				const { motionValue: i } = this.options;
				(i && i.updatedAt !== ft.now() && this.tick(ft.now()),
					(this.isStopped = !0),
					this.state !== 'idle' && (this.teardown(), this.options.onStop?.()));
			}),
			(this.options = n),
			this.initAnimation(),
			this.play(),
			n.autoplay === !1 && this.pause());
	}
	initAnimation() {
		const { options: n } = this;
		iv(n);
		const { type: i = To, repeat: s = 0, repeatDelay: a = 0, repeatType: u, velocity: c = 0 } = n;
		let { keyframes: d } = n;
		const h = i || To;
		h !== To && typeof d[0] != 'number' && ((this.mixKeyframes = Fo(lT, tv(d[0], d[1]))), (d = [0, 100]));
		const m = h({ ...n, keyframes: d });
		(u === 'mirror' && (this.mirroredGenerator = h({ ...n, keyframes: [...d].reverse(), velocity: -c })),
			m.calculatedDuration === null && (m.calculatedDuration = gf(m)));
		const { calculatedDuration: g } = m;
		((this.calculatedDuration = g),
			(this.resolvedDuration = g + a),
			(this.totalDuration = this.resolvedDuration * (s + 1) - a),
			(this.generator = m));
	}
	updateTime(n) {
		const i = Math.round(n - this.startTime) * this.playbackSpeed;
		this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = i);
	}
	tick(n, i = !1) {
		const {
			generator: s,
			totalDuration: a,
			mixKeyframes: u,
			mirroredGenerator: c,
			resolvedDuration: d,
			calculatedDuration: h,
		} = this;
		if (this.startTime === null) return s.next(0);
		const {
			delay: m = 0,
			keyframes: g,
			repeat: y,
			repeatType: x,
			repeatDelay: v,
			type: S,
			onUpdate: P,
			finalKeyframe: E,
		} = this.options;
		(this.speed > 0
			? (this.startTime = Math.min(this.startTime, n))
			: this.speed < 0 && (this.startTime = Math.min(n - a / this.speed, this.startTime)),
			i ? (this.currentTime = n) : this.updateTime(n));
		const b = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
			M = this.playbackSpeed >= 0 ? b < 0 : b > a;
		((this.currentTime = Math.max(b, 0)),
			this.state === 'finished' && this.holdTime === null && (this.currentTime = a));
		let D = this.currentTime,
			O = s;
		if (y) {
			const H = Math.min(this.currentTime, a) / d;
			let q = Math.floor(H),
				oe = H % 1;
			(!oe && H >= 1 && (oe = 1),
				oe === 1 && q--,
				(q = Math.min(q, y + 1)),
				q % 2 && (x === 'reverse' ? ((oe = 1 - oe), v && (oe -= v / d)) : x === 'mirror' && (O = c)),
				(D = Sn(0, 1, oe) * d));
		}
		const _ = M ? { done: !1, value: g[0] } : O.next(D);
		u && (_.value = u(_.value));
		let { done: B } = _;
		!M && h !== null && (B = this.playbackSpeed >= 0 ? this.currentTime >= a : this.currentTime <= 0);
		const G = this.holdTime === null && (this.state === 'finished' || (this.state === 'running' && B));
		return (G && S !== xc && (_.value = yf(g, this.options, E, this.speed)), P && P(_.value), G && this.finish(), _);
	}
	then(n, i) {
		return this.finished.then(n, i);
	}
	get duration() {
		return Vt(this.calculatedDuration);
	}
	get iterationDuration() {
		const { delay: n = 0 } = this.options || {};
		return this.duration + Vt(n);
	}
	get time() {
		return Vt(this.currentTime);
	}
	set time(n) {
		((n = tn(n)),
			(this.currentTime = n),
			this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
				? (this.holdTime = n)
				: this.driver && (this.startTime = this.driver.now() - n / this.playbackSpeed),
			this.driver?.start(!1));
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(n) {
		this.updateTime(ft.now());
		const i = this.playbackSpeed !== n;
		((this.playbackSpeed = n), i && (this.time = Vt(this.currentTime)));
	}
	play() {
		if (this.isStopped) return;
		const { driver: n = HP, startTime: i } = this.options;
		(this.driver || (this.driver = n(a => this.tick(a))), this.options.onPlay?.());
		const s = this.driver.now();
		(this.state === 'finished'
			? (this.updateFinished(), (this.startTime = s))
			: this.holdTime !== null
				? (this.startTime = s - this.holdTime)
				: this.startTime || (this.startTime = i ?? s),
			this.state === 'finished' && this.speed < 0 && (this.startTime += this.calculatedDuration),
			(this.holdTime = null),
			(this.state = 'running'),
			this.driver.start());
	}
	pause() {
		((this.state = 'paused'), this.updateTime(ft.now()), (this.holdTime = this.currentTime));
	}
	complete() {
		(this.state !== 'running' && this.play(), (this.state = 'finished'), (this.holdTime = null));
	}
	finish() {
		(this.notifyFinished(), this.teardown(), (this.state = 'finished'), this.options.onComplete?.());
	}
	cancel() {
		((this.holdTime = null), (this.startTime = 0), this.tick(0), this.teardown(), this.options.onCancel?.());
	}
	teardown() {
		((this.state = 'idle'), this.stopDriver(), (this.startTime = this.holdTime = null));
	}
	stopDriver() {
		this.driver && (this.driver.stop(), (this.driver = void 0));
	}
	sample(n) {
		return ((this.startTime = 0), this.tick(n, !0));
	}
	attachTimeline(n) {
		return (
			this.options.allowFlatten &&
				((this.options.type = 'keyframes'), (this.options.ease = 'linear'), this.initAnimation()),
			this.driver?.stop(),
			n.observe(this)
		);
	}
}
function uT(e) {
	for (let n = 1; n < e.length; n++) e[n] ?? (e[n] = e[n - 1]);
}
const Lr = e => (e * 180) / Math.PI,
	Sc = e => {
		const n = Lr(Math.atan2(e[1], e[0]));
		return Cc(n);
	},
	cT = {
		x: 4,
		y: 5,
		translateX: 4,
		translateY: 5,
		scaleX: 0,
		scaleY: 3,
		scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
		rotate: Sc,
		rotateZ: Sc,
		skewX: e => Lr(Math.atan(e[1])),
		skewY: e => Lr(Math.atan(e[2])),
		skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
	},
	Cc = e => ((e = e % 360), e < 0 && (e += 360), e),
	hm = Sc,
	pm = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
	mm = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
	fT = {
		x: 12,
		y: 13,
		z: 14,
		translateX: 12,
		translateY: 13,
		translateZ: 14,
		scaleX: pm,
		scaleY: mm,
		scale: e => (pm(e) + mm(e)) / 2,
		rotateX: e => Cc(Lr(Math.atan2(e[6], e[5]))),
		rotateY: e => Cc(Lr(Math.atan2(-e[2], e[0]))),
		rotateZ: hm,
		rotate: hm,
		skewX: e => Lr(Math.atan(e[4])),
		skewY: e => Lr(Math.atan(e[1])),
		skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
	};
function Ec(e) {
	return e.includes('scale') ? 1 : 0;
}
function Pc(e, n) {
	if (!e || e === 'none') return Ec(n);
	const i = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
	let s, a;
	if (i) ((s = fT), (a = i));
	else {
		const d = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		((s = cT), (a = d));
	}
	if (!a) return Ec(n);
	const u = s[n],
		c = a[1].split(',').map(hT);
	return typeof u == 'function' ? u(c) : c[u];
}
const dT = (e, n) => {
	const { transform: i = 'none' } = getComputedStyle(e);
	return Pc(i, n);
};
function hT(e) {
	return parseFloat(e.trim());
}
const Mi = [
		'transformPerspective',
		'x',
		'y',
		'z',
		'translateX',
		'translateY',
		'translateZ',
		'scale',
		'scaleX',
		'scaleY',
		'rotate',
		'rotateX',
		'rotateY',
		'rotateZ',
		'skew',
		'skewX',
		'skewY',
	],
	Di = new Set(Mi),
	gm = e => e === Ai || e === re,
	pT = new Set(['x', 'y', 'z']),
	mT = Mi.filter(e => !pT.has(e));
function gT(e) {
	const n = [];
	return (
		mT.forEach(i => {
			const s = e.getValue(i);
			s !== void 0 && (n.push([i, s.get()]), s.set(i.startsWith('scale') ? 1 : 0));
		}),
		n
	);
}
const ur = {
	width: ({ x: e }, { paddingLeft: n = '0', paddingRight: i = '0' }) => e.max - e.min - parseFloat(n) - parseFloat(i),
	height: ({ y: e }, { paddingTop: n = '0', paddingBottom: i = '0' }) => e.max - e.min - parseFloat(n) - parseFloat(i),
	top: (e, { top: n }) => parseFloat(n),
	left: (e, { left: n }) => parseFloat(n),
	bottom: ({ y: e }, { top: n }) => parseFloat(n) + (e.max - e.min),
	right: ({ x: e }, { left: n }) => parseFloat(n) + (e.max - e.min),
	x: (e, { transform: n }) => Pc(n, 'x'),
	y: (e, { transform: n }) => Pc(n, 'y'),
};
ur.translateX = ur.x;
ur.translateY = ur.y;
const Or = new Set();
let Tc = !1,
	kc = !1,
	bc = !1;
function ov() {
	if (kc) {
		const e = Array.from(Or).filter(s => s.needsMeasurement),
			n = new Set(e.map(s => s.element)),
			i = new Map();
		(n.forEach(s => {
			const a = gT(s);
			a.length && (i.set(s, a), s.render());
		}),
			e.forEach(s => s.measureInitialState()),
			n.forEach(s => {
				s.render();
				const a = i.get(s);
				a &&
					a.forEach(([u, c]) => {
						s.getValue(u)?.set(c);
					});
			}),
			e.forEach(s => s.measureEndState()),
			e.forEach(s => {
				s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
			}));
	}
	((kc = !1), (Tc = !1), Or.forEach(e => e.complete(bc)), Or.clear());
}
function sv() {
	Or.forEach(e => {
		(e.readKeyframes(), e.needsMeasurement && (kc = !0));
	});
}
function yT() {
	((bc = !0), sv(), ov(), (bc = !1));
}
class xf {
	constructor(n, i, s, a, u, c = !1) {
		((this.state = 'pending'),
			(this.isAsync = !1),
			(this.needsMeasurement = !1),
			(this.unresolvedKeyframes = [...n]),
			(this.onComplete = i),
			(this.name = s),
			(this.motionValue = a),
			(this.element = u),
			(this.isAsync = c));
	}
	scheduleResolve() {
		((this.state = 'scheduled'),
			this.isAsync
				? (Or.add(this), Tc || ((Tc = !0), Me.read(sv), Me.resolveKeyframes(ov)))
				: (this.readKeyframes(), this.complete()));
	}
	readKeyframes() {
		const { unresolvedKeyframes: n, name: i, element: s, motionValue: a } = this;
		if (n[0] === null) {
			const u = a?.get(),
				c = n[n.length - 1];
			if (u !== void 0) n[0] = u;
			else if (s && i) {
				const d = s.readValue(i, c);
				d != null && (n[0] = d);
			}
			(n[0] === void 0 && (n[0] = c), a && u === void 0 && a.set(n[0]));
		}
		uT(n);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(n = !1) {
		((this.state = 'complete'), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n), Or.delete(this));
	}
	cancel() {
		this.state === 'scheduled' && (Or.delete(this), (this.state = 'pending'));
	}
	resume() {
		this.state === 'pending' && this.scheduleResolve();
	}
}
const vT = e => e.startsWith('--');
function wT(e, n, i) {
	vT(n) ? e.style.setProperty(n, i) : (e.style[n] = i);
}
const xT = lf(() => window.ScrollTimeline !== void 0),
	ST = {};
function CT(e, n) {
	const i = lf(e);
	return () => ST[n] ?? i();
}
const av = CT(() => {
		try {
			document.createElement('div').animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
		} catch {
			return !1;
		}
		return !0;
	}, 'linearEasing'),
	Eo = ([e, n, i, s]) => `cubic-bezier(${e}, ${n}, ${i}, ${s})`,
	ym = {
		linear: 'linear',
		ease: 'ease',
		easeIn: 'ease-in',
		easeOut: 'ease-out',
		easeInOut: 'ease-in-out',
		circIn: Eo([0, 0.65, 0.55, 1]),
		circOut: Eo([0.55, 0, 1, 0.45]),
		backIn: Eo([0.31, 0.01, 0.66, -0.59]),
		backOut: Eo([0.33, 1.53, 0.69, 0.99]),
	};
function lv(e, n) {
	if (e)
		return typeof e == 'function'
			? av()
				? nv(e, n)
				: 'ease-out'
			: Hy(e)
				? Eo(e)
				: Array.isArray(e)
					? e.map(i => lv(i, n) || ym.easeOut)
					: ym[e];
}
function ET(
	e,
	n,
	i,
	{ delay: s = 0, duration: a = 300, repeat: u = 0, repeatType: c = 'loop', ease: d = 'easeOut', times: h } = {},
	m = void 0,
) {
	const g = { [n]: i };
	h && (g.offset = h);
	const y = lv(d, a);
	Array.isArray(y) && (g.easing = y);
	const x = {
		delay: s,
		duration: a,
		easing: Array.isArray(y) ? 'linear' : y,
		fill: 'both',
		iterations: u + 1,
		direction: c === 'reverse' ? 'alternate' : 'normal',
	};
	return (m && (x.pseudoElement = m), e.animate(g, x));
}
function uv(e) {
	return typeof e == 'function' && 'applyToOptions' in e;
}
function PT({ type: e, ...n }) {
	return uv(e) && av() ? e.applyToOptions(n) : (n.duration ?? (n.duration = 300), n.ease ?? (n.ease = 'easeOut'), n);
}
class cv extends vf {
	constructor(n) {
		if ((super(), (this.finishedTime = null), (this.isStopped = !1), (this.manualStartTime = null), !n)) return;
		const {
			element: i,
			name: s,
			keyframes: a,
			pseudoElement: u,
			allowFlatten: c = !1,
			finalKeyframe: d,
			onComplete: h,
		} = n;
		((this.isPseudoElement = !!u), (this.allowFlatten = c), (this.options = n), af(typeof n.type != 'string'));
		const m = PT(n);
		((this.animation = ET(i, s, a, m, u)),
			m.autoplay === !1 && this.animation.pause(),
			(this.animation.onfinish = () => {
				if (((this.finishedTime = this.time), !u)) {
					const g = yf(a, this.options, d, this.speed);
					(this.updateMotionValue ? this.updateMotionValue(g) : wT(i, s, g), this.animation.cancel());
				}
				(h?.(), this.notifyFinished());
			}));
	}
	play() {
		this.isStopped ||
			((this.manualStartTime = null), this.animation.play(), this.state === 'finished' && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		const { state: n } = this;
		n === 'idle' ||
			n === 'finished' ||
			(this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		const n = this.options?.element;
		!this.isPseudoElement && n?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		const n = this.animation.effect?.getComputedTiming?.().duration || 0;
		return Vt(Number(n));
	}
	get iterationDuration() {
		const { delay: n = 0 } = this.options || {};
		return this.duration + Vt(n);
	}
	get time() {
		return Vt(Number(this.animation.currentTime) || 0);
	}
	set time(n) {
		((this.manualStartTime = null), (this.finishedTime = null), (this.animation.currentTime = tn(n)));
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(n) {
		(n < 0 && (this.finishedTime = null), (this.animation.playbackRate = n));
	}
	get state() {
		return this.finishedTime !== null ? 'finished' : this.animation.playState;
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(n) {
		this.manualStartTime = this.animation.startTime = n;
	}
	attachTimeline({ timeline: n, observe: i }) {
		return (
			this.allowFlatten && this.animation.effect?.updateTiming({ easing: 'linear' }),
			(this.animation.onfinish = null),
			n && xT() ? ((this.animation.timeline = n), Ft) : i(this)
		);
	}
}
const fv = { anticipate: By, backInOut: zy, circInOut: $y };
function TT(e) {
	return e in fv;
}
function kT(e) {
	typeof e.ease == 'string' && TT(e.ease) && (e.ease = fv[e.ease]);
}
const Hu = 10;
class bT extends cv {
	constructor(n) {
		(kT(n), iv(n), super(n), n.startTime !== void 0 && (this.startTime = n.startTime), (this.options = n));
	}
	updateMotionValue(n) {
		const { motionValue: i, onUpdate: s, onComplete: a, element: u, ...c } = this.options;
		if (!i) return;
		if (n !== void 0) {
			i.set(n);
			return;
		}
		const d = new wf({ ...c, autoplay: !1 }),
			h = Math.max(Hu, ft.now() - this.startTime),
			m = Sn(0, Hu, h - Hu);
		(i.setWithVelocity(d.sample(Math.max(0, h - m)).value, d.sample(h).value, m), d.stop());
	}
}
const vm = (e, n) =>
	n === 'zIndex'
		? !1
		: !!(
				typeof e == 'number' ||
				Array.isArray(e) ||
				(typeof e == 'string' && (hr.test(e) || e === '0') && !e.startsWith('url('))
			);
function RT(e) {
	const n = e[0];
	if (e.length === 1) return !0;
	for (let i = 0; i < e.length; i++) if (e[i] !== n) return !0;
}
function AT(e, n, i, s) {
	const a = e[0];
	if (a === null) return !1;
	if (n === 'display' || n === 'visibility') return !0;
	const u = e[e.length - 1],
		c = vm(a, n),
		d = vm(u, n);
	return !c || !d ? !1 : RT(e) || ((i === 'spring' || uv(i)) && s);
}
function Rc(e) {
	((e.duration = 0), (e.type = 'keyframes'));
}
const MT = new Set(['opacity', 'clipPath', 'filter', 'transform']),
	DT = lf(() => Object.hasOwnProperty.call(Element.prototype, 'animate'));
function LT(e) {
	const { motionValue: n, name: i, repeatDelay: s, repeatType: a, damping: u, type: c } = e;
	if (!(n?.owner?.current instanceof HTMLElement)) return !1;
	const { onUpdate: h, transformTemplate: m } = n.owner.getProps();
	return (
		DT() && i && MT.has(i) && (i !== 'transform' || !m) && !h && !s && a !== 'mirror' && u !== 0 && c !== 'inertia'
	);
}
const OT = 40;
class NT extends vf {
	constructor({
		autoplay: n = !0,
		delay: i = 0,
		type: s = 'keyframes',
		repeat: a = 0,
		repeatDelay: u = 0,
		repeatType: c = 'loop',
		keyframes: d,
		name: h,
		motionValue: m,
		element: g,
		...y
	}) {
		(super(),
			(this.stop = () => {
				(this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel());
			}),
			(this.createdAt = ft.now()));
		const x = {
				autoplay: n,
				delay: i,
				type: s,
				repeat: a,
				repeatDelay: u,
				repeatType: c,
				name: h,
				motionValue: m,
				element: g,
				...y,
			},
			v = g?.KeyframeResolver || xf;
		((this.keyframeResolver = new v(d, (S, P, E) => this.onKeyframesResolved(S, P, x, !E), h, m, g)),
			this.keyframeResolver?.scheduleResolve());
	}
	onKeyframesResolved(n, i, s, a) {
		this.keyframeResolver = void 0;
		const { name: u, type: c, velocity: d, delay: h, isHandoff: m, onUpdate: g } = s;
		((this.resolvedAt = ft.now()),
			AT(n, u, c, d) ||
				((In.instantAnimations || !h) && g?.(yf(n, s, i)), (n[0] = n[n.length - 1]), Rc(s), (s.repeat = 0)));
		const x = {
				startTime: a
					? this.resolvedAt
						? this.resolvedAt - this.createdAt > OT
							? this.resolvedAt
							: this.createdAt
						: this.createdAt
					: void 0,
				finalKeyframe: i,
				...s,
				keyframes: n,
			},
			v = !m && LT(x),
			S = x.motionValue?.owner?.current,
			P = v ? new bT({ ...x, element: S }) : new wf(x);
		(P.finished
			.then(() => {
				this.notifyFinished();
			})
			.catch(Ft),
			this.pendingTimeline &&
				((this.stopTimeline = P.attachTimeline(this.pendingTimeline)), (this.pendingTimeline = void 0)),
			(this._animation = P));
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(n, i) {
		return this.finished.finally(n).then(() => {});
	}
	get animation() {
		return (this._animation || (this.keyframeResolver?.resume(), yT()), this._animation);
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
	set time(n) {
		this.animation.time = n;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(n) {
		this.animation.speed = n;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(n) {
		return (
			this._animation ? (this.stopTimeline = this.animation.attachTimeline(n)) : (this.pendingTimeline = n),
			() => this.stop()
		);
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
		(this._animation && this.animation.cancel(), this.keyframeResolver?.cancel());
	}
}
function dv(e, n, i, s = 0, a = 1) {
	const u = Array.from(e)
			.sort((m, g) => m.sortNodePosition(g))
			.indexOf(n),
		c = e.size,
		d = (c - 1) * s;
	return typeof i == 'function' ? i(u, c) : a === 1 ? u * s : d - u * s;
}
const jT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function IT(e) {
	const n = jT.exec(e);
	if (!n) return [,];
	const [, i, s, a] = n;
	return [`--${i ?? s}`, a];
}
function hv(e, n, i = 1) {
	const [s, a] = IT(e);
	if (!s) return;
	const u = window.getComputedStyle(n).getPropertyValue(s);
	if (u) {
		const c = u.trim();
		return Ly(c) ? parseFloat(c) : c;
	}
	return df(a) ? hv(a, n, i + 1) : a;
}
const _T = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
	VT = e => ({ type: 'spring', stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
	FT = { type: 'keyframes', duration: 0.8 },
	zT = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	BT = (e, { keyframes: n }) => (n.length > 2 ? FT : Di.has(e) ? (e.startsWith('scale') ? VT(n[1]) : _T) : zT),
	UT = e => e !== null;
function $T(e, { repeat: n, repeatType: i = 'loop' }, s) {
	const a = e.filter(UT),
		u = n && i !== 'loop' && n % 2 === 1 ? 0 : a.length - 1;
	return a[u];
}
function pv(e, n) {
	if (e?.inherit && n) {
		const { inherit: i, ...s } = e;
		return { ...n, ...s };
	}
	return e;
}
function Sf(e, n) {
	const i = e?.[n] ?? e?.default ?? e;
	return i !== e ? pv(i, e) : i;
}
function WT({
	when: e,
	delay: n,
	delayChildren: i,
	staggerChildren: s,
	staggerDirection: a,
	repeat: u,
	repeatType: c,
	repeatDelay: d,
	from: h,
	elapsed: m,
	...g
}) {
	return !!Object.keys(g).length;
}
const Cf =
	(e, n, i, s = {}, a, u) =>
	c => {
		const d = Sf(s, e) || {},
			h = d.delay || s.delay || 0;
		let { elapsed: m = 0 } = s;
		m = m - tn(h);
		const g = {
			keyframes: Array.isArray(i) ? i : [null, i],
			ease: 'easeOut',
			velocity: n.getVelocity(),
			...d,
			delay: -m,
			onUpdate: x => {
				(n.set(x), d.onUpdate && d.onUpdate(x));
			},
			onComplete: () => {
				(c(), d.onComplete && d.onComplete());
			},
			name: e,
			motionValue: n,
			element: u ? void 0 : a,
		};
		(WT(d) || Object.assign(g, BT(e, g)),
			g.duration && (g.duration = tn(g.duration)),
			g.repeatDelay && (g.repeatDelay = tn(g.repeatDelay)),
			g.from !== void 0 && (g.keyframes[0] = g.from));
		let y = !1;
		if (
			((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) && (Rc(g), g.delay === 0 && (y = !0)),
			(In.instantAnimations || In.skipAnimations || a?.shouldSkipAnimations) && ((y = !0), Rc(g), (g.delay = 0)),
			(g.allowFlatten = !d.type && !d.ease),
			y && !u && n.get() !== void 0)
		) {
			const x = $T(g.keyframes, d);
			if (x !== void 0) {
				Me.update(() => {
					(g.onUpdate(x), g.onComplete());
				});
				return;
			}
		}
		return d.isSync ? new wf(g) : new NT(g);
	};
function wm(e) {
	const n = [{}, {}];
	return (
		e?.values.forEach((i, s) => {
			((n[0][s] = i.get()), (n[1][s] = i.getVelocity()));
		}),
		n
	);
}
function Ef(e, n, i, s) {
	if (typeof n == 'function') {
		const [a, u] = wm(s);
		n = n(i !== void 0 ? i : e.custom, a, u);
	}
	if ((typeof n == 'string' && (n = e.variants && e.variants[n]), typeof n == 'function')) {
		const [a, u] = wm(s);
		n = n(i !== void 0 ? i : e.custom, a, u);
	}
	return n;
}
function Ci(e, n, i) {
	const s = e.getProps();
	return Ef(s, n, i !== void 0 ? i : s.custom, e);
}
const mv = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', ...Mi]),
	xm = 30,
	HT = e => !isNaN(parseFloat(e));
class KT {
	constructor(n, i = {}) {
		((this.canTrackVelocity = null),
			(this.events = {}),
			(this.updateAndNotify = s => {
				const a = ft.now();
				if (
					(this.updatedAt !== a && this.setPrevFrameValue(),
					(this.prev = this.current),
					this.setCurrent(s),
					this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
				)
					for (const u of this.dependents) u.dirty();
			}),
			(this.hasAnimated = !1),
			this.setCurrent(n),
			(this.owner = i.owner));
	}
	setCurrent(n) {
		((this.current = n),
			(this.updatedAt = ft.now()),
			this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = HT(this.current)));
	}
	setPrevFrameValue(n = this.current) {
		((this.prevFrameValue = n), (this.prevUpdatedAt = this.updatedAt));
	}
	onChange(n) {
		return this.on('change', n);
	}
	on(n, i) {
		this.events[n] || (this.events[n] = new uf());
		const s = this.events[n].add(i);
		return n === 'change'
			? () => {
					(s(),
						Me.read(() => {
							this.events.change.getSize() || this.stop();
						}));
				}
			: s;
	}
	clearListeners() {
		for (const n in this.events) this.events[n].clear();
	}
	attach(n, i) {
		((this.passiveEffect = n), (this.stopPassiveEffect = i));
	}
	set(n) {
		this.passiveEffect ? this.passiveEffect(n, this.updateAndNotify) : this.updateAndNotify(n);
	}
	setWithVelocity(n, i, s) {
		(this.set(i), (this.prev = void 0), (this.prevFrameValue = n), (this.prevUpdatedAt = this.updatedAt - s));
	}
	jump(n, i = !0) {
		(this.updateAndNotify(n),
			(this.prev = n),
			(this.prevUpdatedAt = this.prevFrameValue = void 0),
			i && this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect());
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(n) {
		(this.dependents || (this.dependents = new Set()), this.dependents.add(n));
	}
	removeDependent(n) {
		this.dependents && this.dependents.delete(n);
	}
	get() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		const n = ft.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > xm) return 0;
		const i = Math.min(this.updatedAt - this.prevUpdatedAt, xm);
		return jy(parseFloat(this.current) - parseFloat(this.prevFrameValue), i);
	}
	start(n) {
		return (
			this.stop(),
			new Promise(i => {
				((this.hasAnimated = !0),
					(this.animation = n(i)),
					this.events.animationStart && this.events.animationStart.notify());
			}).then(() => {
				(this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation());
			})
		);
	}
	stop() {
		(this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
			this.clearAnimation());
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		(this.dependents?.clear(),
			this.events.destroy?.notify(),
			this.clearListeners(),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect());
	}
}
function Ti(e, n) {
	return new KT(e, n);
}
const Ac = e => Array.isArray(e);
function GT(e, n, i) {
	e.hasValue(n) ? e.getValue(n).set(i) : e.addValue(n, Ti(i));
}
function QT(e) {
	return Ac(e) ? e[e.length - 1] || 0 : e;
}
function YT(e, n) {
	const i = Ci(e, n);
	let { transitionEnd: s = {}, transition: a = {}, ...u } = i || {};
	u = { ...u, ...s };
	for (const c in u) {
		const d = QT(u[c]);
		GT(e, c, d);
	}
}
const ot = e => !!(e && e.getVelocity);
function XT(e) {
	return !!(ot(e) && e.add);
}
function Mc(e, n) {
	const i = e.getValue('willChange');
	if (XT(i)) return i.add(n);
	if (!i && In.WillChange) {
		const s = new In.WillChange('auto');
		(e.addValue('willChange', s), s.add(n));
	}
}
function Pf(e) {
	return e.replace(/([A-Z])/g, n => `-${n.toLowerCase()}`);
}
const qT = 'framerAppearId',
	gv = 'data-' + Pf(qT);
function yv(e) {
	return e.props[gv];
}
function ZT({ protectedKeys: e, needsAnimating: n }, i) {
	const s = e.hasOwnProperty(i) && n[i] !== !0;
	return ((n[i] = !1), s);
}
function vv(e, n, { delay: i = 0, transitionOverride: s, type: a } = {}) {
	let { transition: u, transitionEnd: c, ...d } = n;
	const h = e.getDefaultTransition();
	u = u ? pv(u, h) : h;
	const m = u?.reduceMotion;
	s && (u = s);
	const g = [],
		y = a && e.animationState && e.animationState.getState()[a];
	for (const x in d) {
		const v = e.getValue(x, e.latestValues[x] ?? null),
			S = d[x];
		if (S === void 0 || (y && ZT(y, x))) continue;
		const P = { delay: i, ...Sf(u || {}, x) },
			E = v.get();
		if (E !== void 0 && !v.isAnimating && !Array.isArray(S) && S === E && !P.velocity) continue;
		let b = !1;
		if (window.MotionHandoffAnimation) {
			const O = yv(e);
			if (O) {
				const _ = window.MotionHandoffAnimation(O, x, Me);
				_ !== null && ((P.startTime = _), (b = !0));
			}
		}
		Mc(e, x);
		const M = m ?? e.shouldReduceMotion;
		v.start(Cf(x, v, S, M && mv.has(x) ? { type: !1 } : P, e, b));
		const D = v.animation;
		D && g.push(D);
	}
	if (c) {
		const x = () =>
			Me.update(() => {
				c && YT(e, c);
			});
		g.length ? Promise.all(g).then(x) : x();
	}
	return g;
}
function Dc(e, n, i = {}) {
	const s = Ci(e, n, i.type === 'exit' ? e.presenceContext?.custom : void 0);
	let { transition: a = e.getDefaultTransition() || {} } = s || {};
	i.transitionOverride && (a = i.transitionOverride);
	const u = s ? () => Promise.all(vv(e, s, i)) : () => Promise.resolve(),
		c =
			e.variantChildren && e.variantChildren.size
				? (h = 0) => {
						const { delayChildren: m = 0, staggerChildren: g, staggerDirection: y } = a;
						return JT(e, n, h, m, g, y, i);
					}
				: () => Promise.resolve(),
		{ when: d } = a;
	if (d) {
		const [h, m] = d === 'beforeChildren' ? [u, c] : [c, u];
		return h().then(() => m());
	} else return Promise.all([u(), c(i.delay)]);
}
function JT(e, n, i = 0, s = 0, a = 0, u = 1, c) {
	const d = [];
	for (const h of e.variantChildren)
		(h.notify('AnimationStart', n),
			d.push(
				Dc(h, n, { ...c, delay: i + (typeof s == 'function' ? 0 : s) + dv(e.variantChildren, h, s, a, u) }).then(() =>
					h.notify('AnimationComplete', n),
				),
			));
	return Promise.all(d);
}
function ek(e, n, i = {}) {
	e.notify('AnimationStart', n);
	let s;
	if (Array.isArray(n)) {
		const a = n.map(u => Dc(e, u, i));
		s = Promise.all(a);
	} else if (typeof n == 'string') s = Dc(e, n, i);
	else {
		const a = typeof n == 'function' ? Ci(e, n, i.custom) : n;
		s = Promise.all(vv(e, a, i));
	}
	return s.then(() => {
		e.notify('AnimationComplete', n);
	});
}
const tk = { test: e => e === 'auto', parse: e => e },
	wv = e => n => n.test(e),
	xv = [Ai, re, wn, ar, AP, RP, tk],
	Sm = e => xv.find(wv(e));
function nk(e) {
	return typeof e == 'number' ? e === 0 : e !== null ? e === 'none' || e === '0' || Ny(e) : !0;
}
const rk = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function ik(e) {
	const [n, i] = e.slice(0, -1).split('(');
	if (n === 'drop-shadow') return e;
	const [s] = i.match(hf) || [];
	if (!s) return e;
	const a = i.replace(s, '');
	let u = rk.has(n) ? 1 : 0;
	return (s !== i && (u *= 100), n + '(' + u + a + ')');
}
const ok = /\b([a-z-]*)\(.*?\)/gu,
	Lc = {
		...hr,
		getAnimatableNone: e => {
			const n = e.match(ok);
			return n ? n.map(ik).join(' ') : e;
		},
	},
	Cm = { ...Ai, transform: Math.round },
	sk = {
		rotate: ar,
		rotateX: ar,
		rotateY: ar,
		rotateZ: ar,
		scale: ua,
		scaleX: ua,
		scaleY: ua,
		scaleZ: ua,
		skew: ar,
		skewX: ar,
		skewY: ar,
		distance: re,
		translateX: re,
		translateY: re,
		translateZ: re,
		x: re,
		y: re,
		z: re,
		perspective: re,
		transformPerspective: re,
		opacity: Oo,
		originX: lm,
		originY: lm,
		originZ: re,
	},
	Tf = {
		borderWidth: re,
		borderTopWidth: re,
		borderRightWidth: re,
		borderBottomWidth: re,
		borderLeftWidth: re,
		borderRadius: re,
		borderTopLeftRadius: re,
		borderTopRightRadius: re,
		borderBottomRightRadius: re,
		borderBottomLeftRadius: re,
		width: re,
		maxWidth: re,
		height: re,
		maxHeight: re,
		top: re,
		right: re,
		bottom: re,
		left: re,
		inset: re,
		insetBlock: re,
		insetBlockStart: re,
		insetBlockEnd: re,
		insetInline: re,
		insetInlineStart: re,
		insetInlineEnd: re,
		padding: re,
		paddingTop: re,
		paddingRight: re,
		paddingBottom: re,
		paddingLeft: re,
		paddingBlock: re,
		paddingBlockStart: re,
		paddingBlockEnd: re,
		paddingInline: re,
		paddingInlineStart: re,
		paddingInlineEnd: re,
		margin: re,
		marginTop: re,
		marginRight: re,
		marginBottom: re,
		marginLeft: re,
		marginBlock: re,
		marginBlockStart: re,
		marginBlockEnd: re,
		marginInline: re,
		marginInlineStart: re,
		marginInlineEnd: re,
		fontSize: re,
		backgroundPositionX: re,
		backgroundPositionY: re,
		...sk,
		zIndex: Cm,
		fillOpacity: Oo,
		strokeOpacity: Oo,
		numOctaves: Cm,
	},
	ak = {
		...Tf,
		color: We,
		backgroundColor: We,
		outlineColor: We,
		fill: We,
		stroke: We,
		borderColor: We,
		borderTopColor: We,
		borderRightColor: We,
		borderBottomColor: We,
		borderLeftColor: We,
		filter: Lc,
		WebkitFilter: Lc,
	},
	Sv = e => ak[e];
function Cv(e, n) {
	let i = Sv(e);
	return (i !== Lc && (i = hr), i.getAnimatableNone ? i.getAnimatableNone(n) : void 0);
}
const lk = new Set(['auto', 'none', '0']);
function uk(e, n, i) {
	let s = 0,
		a;
	for (; s < e.length && !a; ) {
		const u = e[s];
		(typeof u == 'string' && !lk.has(u) && No(u).values.length && (a = e[s]), s++);
	}
	if (a && i) for (const u of n) e[u] = Cv(i, a);
}
class ck extends xf {
	constructor(n, i, s, a, u) {
		super(n, i, s, a, u, !0);
	}
	readKeyframes() {
		const { unresolvedKeyframes: n, element: i, name: s } = this;
		if (!i || !i.current) return;
		super.readKeyframes();
		for (let g = 0; g < n.length; g++) {
			let y = n[g];
			if (typeof y == 'string' && ((y = y.trim()), df(y))) {
				const x = hv(y, i.current);
				(x !== void 0 && (n[g] = x), g === n.length - 1 && (this.finalKeyframe = y));
			}
		}
		if ((this.resolveNoneKeyframes(), !mv.has(s) || n.length !== 2)) return;
		const [a, u] = n,
			c = Sm(a),
			d = Sm(u),
			h = am(a),
			m = am(u);
		if (h !== m && ur[s]) {
			this.needsMeasurement = !0;
			return;
		}
		if (c !== d)
			if (gm(c) && gm(d))
				for (let g = 0; g < n.length; g++) {
					const y = n[g];
					typeof y == 'string' && (n[g] = parseFloat(y));
				}
			else ur[s] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes: n, name: i } = this,
			s = [];
		for (let a = 0; a < n.length; a++) (n[a] === null || nk(n[a])) && s.push(a);
		s.length && uk(n, s, i);
	}
	measureInitialState() {
		const { element: n, unresolvedKeyframes: i, name: s } = this;
		if (!n || !n.current) return;
		(s === 'height' && (this.suspendedScrollY = window.pageYOffset),
			(this.measuredOrigin = ur[s](n.measureViewportBox(), window.getComputedStyle(n.current))),
			(i[0] = this.measuredOrigin));
		const a = i[i.length - 1];
		a !== void 0 && n.getValue(s, a).jump(a, !1);
	}
	measureEndState() {
		const { element: n, name: i, unresolvedKeyframes: s } = this;
		if (!n || !n.current) return;
		const a = n.getValue(i);
		a && a.jump(this.measuredOrigin, !1);
		const u = s.length - 1,
			c = s[u];
		((s[u] = ur[i](n.measureViewportBox(), window.getComputedStyle(n.current))),
			c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c),
			this.removedTransforms?.length &&
				this.removedTransforms.forEach(([d, h]) => {
					n.getValue(d).set(h);
				}),
			this.resolveNoneKeyframes());
	}
}
const fk = new Set(['opacity', 'clipPath', 'filter', 'transform']);
function Ev(e, n, i) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == 'string') {
		let s = document;
		const a = i?.[e] ?? s.querySelectorAll(e);
		return a ? Array.from(a) : [];
	}
	return Array.from(e).filter(s => s != null);
}
const Pv = (e, n) => (n && typeof e == 'number' ? n.transform(e) : e);
function Oc(e) {
	return Oy(e) && 'offsetHeight' in e;
}
const { schedule: kf } = Ky(queueMicrotask, !1),
	Zt = { x: !1, y: !1 };
function Tv() {
	return Zt.x || Zt.y;
}
function dk(e) {
	return e === 'x' || e === 'y'
		? Zt[e]
			? null
			: ((Zt[e] = !0),
				() => {
					Zt[e] = !1;
				})
		: Zt.x || Zt.y
			? null
			: ((Zt.x = Zt.y = !0),
				() => {
					Zt.x = Zt.y = !1;
				});
}
function kv(e, n) {
	const i = Ev(e),
		s = new AbortController(),
		a = { passive: !0, ...n, signal: s.signal };
	return [i, a, () => s.abort()];
}
function hk(e) {
	return !(e.pointerType === 'touch' || Tv());
}
function pk(e, n, i = {}) {
	const [s, a, u] = kv(e, i);
	return (
		s.forEach(c => {
			let d = !1,
				h = !1,
				m;
			const g = () => {
					c.removeEventListener('pointerleave', S);
				},
				y = E => {
					(m && (m(E), (m = void 0)), g());
				},
				x = E => {
					((d = !1),
						window.removeEventListener('pointerup', x),
						window.removeEventListener('pointercancel', x),
						h && ((h = !1), y(E)));
				},
				v = () => {
					((d = !0), window.addEventListener('pointerup', x, a), window.addEventListener('pointercancel', x, a));
				},
				S = E => {
					if (E.pointerType !== 'touch') {
						if (d) {
							h = !0;
							return;
						}
						y(E);
					}
				},
				P = E => {
					if (!hk(E)) return;
					h = !1;
					const b = n(c, E);
					typeof b == 'function' && ((m = b), c.addEventListener('pointerleave', S, a));
				};
			(c.addEventListener('pointerenter', P, a), c.addEventListener('pointerdown', v, a));
		}),
		u
	);
}
const bv = (e, n) => (n ? (e === n ? !0 : bv(e, n.parentElement)) : !1),
	bf = e => (e.pointerType === 'mouse' ? typeof e.button != 'number' || e.button <= 0 : e.isPrimary !== !1),
	mk = new Set(['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A']);
function gk(e) {
	return mk.has(e.tagName) || e.isContentEditable === !0;
}
const yk = new Set(['INPUT', 'SELECT', 'TEXTAREA']);
function vk(e) {
	return yk.has(e.tagName) || e.isContentEditable === !0;
}
const pa = new WeakSet();
function Em(e) {
	return n => {
		n.key === 'Enter' && e(n);
	};
}
function Ku(e, n) {
	e.dispatchEvent(new PointerEvent('pointer' + n, { isPrimary: !0, bubbles: !0 }));
}
const wk = (e, n) => {
	const i = e.currentTarget;
	if (!i) return;
	const s = Em(() => {
		if (pa.has(i)) return;
		Ku(i, 'down');
		const a = Em(() => {
				Ku(i, 'up');
			}),
			u = () => Ku(i, 'cancel');
		(i.addEventListener('keyup', a, n), i.addEventListener('blur', u, n));
	});
	(i.addEventListener('keydown', s, n), i.addEventListener('blur', () => i.removeEventListener('keydown', s), n));
};
function Pm(e) {
	return bf(e) && !Tv();
}
const Tm = new WeakSet();
function xk(e, n, i = {}) {
	const [s, a, u] = kv(e, i),
		c = d => {
			const h = d.currentTarget;
			if (!Pm(d) || Tm.has(d)) return;
			(pa.add(h), i.stopPropagation && Tm.add(d));
			const m = n(h, d),
				g = (v, S) => {
					(window.removeEventListener('pointerup', y),
						window.removeEventListener('pointercancel', x),
						pa.has(h) && pa.delete(h),
						Pm(v) && typeof m == 'function' && m(v, { success: S }));
				},
				y = v => {
					g(v, h === window || h === document || i.useGlobalTarget || bv(h, v.target));
				},
				x = v => {
					g(v, !1);
				};
			(window.addEventListener('pointerup', y, a), window.addEventListener('pointercancel', x, a));
		};
	return (
		s.forEach(d => {
			((i.useGlobalTarget ? window : d).addEventListener('pointerdown', c, a),
				Oc(d) &&
					(d.addEventListener('focus', m => wk(m, a)), !gk(d) && !d.hasAttribute('tabindex') && (d.tabIndex = 0)));
		}),
		u
	);
}
function Rf(e) {
	return Oy(e) && 'ownerSVGElement' in e;
}
const ma = new WeakMap();
let ga;
const Rv = (e, n, i) => (s, a) => (a && a[0] ? a[0][e + 'Size'] : Rf(s) && 'getBBox' in s ? s.getBBox()[n] : s[i]),
	Sk = Rv('inline', 'width', 'offsetWidth'),
	Ck = Rv('block', 'height', 'offsetHeight');
function Ek({ target: e, borderBoxSize: n }) {
	ma.get(e)?.forEach(i => {
		i(e, {
			get width() {
				return Sk(e, n);
			},
			get height() {
				return Ck(e, n);
			},
		});
	});
}
function Pk(e) {
	e.forEach(Ek);
}
function Tk() {
	typeof ResizeObserver > 'u' || (ga = new ResizeObserver(Pk));
}
function kk(e, n) {
	ga || Tk();
	const i = Ev(e);
	return (
		i.forEach(s => {
			let a = ma.get(s);
			(a || ((a = new Set()), ma.set(s, a)), a.add(n), ga?.observe(s));
		}),
		() => {
			i.forEach(s => {
				const a = ma.get(s);
				(a?.delete(n), a?.size || ga?.unobserve(s));
			});
		}
	);
}
const ya = new Set();
let pi;
function bk() {
	((pi = () => {
		const e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			},
		};
		ya.forEach(n => n(e));
	}),
		window.addEventListener('resize', pi));
}
function Rk(e) {
	return (
		ya.add(e),
		pi || bk(),
		() => {
			(ya.delete(e), !ya.size && typeof pi == 'function' && (window.removeEventListener('resize', pi), (pi = void 0)));
		}
	);
}
function km(e, n) {
	return typeof e == 'function' ? Rk(e) : kk(e, n);
}
function Ak(e) {
	return Rf(e) && e.tagName === 'svg';
}
const Mk = [...xv, We, hr],
	Dk = e => Mk.find(wv(e)),
	bm = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	mi = () => ({ x: bm(), y: bm() }),
	Rm = () => ({ min: 0, max: 0 }),
	Ge = () => ({ x: Rm(), y: Rm() }),
	Lk = new WeakMap();
function Qa(e) {
	return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
function jo(e) {
	return typeof e == 'string' || Array.isArray(e);
}
const Af = ['animate', 'whileInView', 'whileFocus', 'whileHover', 'whileTap', 'whileDrag', 'exit'],
	Mf = ['initial', ...Af];
function Ya(e) {
	return Qa(e.animate) || Mf.some(n => jo(e[n]));
}
function Av(e) {
	return !!(Ya(e) || e.variants);
}
function Ok(e, n, i) {
	for (const s in n) {
		const a = n[s],
			u = i[s];
		if (ot(a)) e.addValue(s, a);
		else if (ot(u)) e.addValue(s, Ti(a, { owner: e }));
		else if (u !== a)
			if (e.hasValue(s)) {
				const c = e.getValue(s);
				c.liveStyle === !0 ? c.jump(a) : c.hasAnimated || c.set(a);
			} else {
				const c = e.getStaticValue(s);
				e.addValue(s, Ti(c !== void 0 ? c : a, { owner: e }));
			}
	}
	for (const s in i) n[s] === void 0 && e.removeValue(s);
	return n;
}
const Nc = { current: null },
	Mv = { current: !1 },
	Nk = typeof window < 'u';
function jk() {
	if (((Mv.current = !0), !!Nk))
		if (window.matchMedia) {
			const e = window.matchMedia('(prefers-reduced-motion)'),
				n = () => (Nc.current = e.matches);
			(e.addEventListener('change', n), n());
		} else Nc.current = !1;
}
const Am = [
	'AnimationStart',
	'AnimationComplete',
	'Update',
	'BeforeLayoutMeasure',
	'LayoutMeasure',
	'LayoutAnimationStart',
	'LayoutAnimationComplete',
];
let La = {};
function Dv(e) {
	La = e;
}
function Ik() {
	return La;
}
class _k {
	scrapeMotionValuesFromProps(n, i, s) {
		return {};
	}
	constructor(
		{
			parent: n,
			props: i,
			presenceContext: s,
			reducedMotionConfig: a,
			skipAnimations: u,
			blockInitialAnimation: c,
			visualState: d,
		},
		h = {},
	) {
		((this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.shouldSkipAnimations = !1),
			(this.values = new Map()),
			(this.KeyframeResolver = xf),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.hasBeenMounted = !1),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () => this.notify('Update', this.latestValues)),
			(this.render = () => {
				this.current &&
					(this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
			}),
			(this.renderScheduledAt = 0),
			(this.scheduleRender = () => {
				const v = ft.now();
				this.renderScheduledAt < v && ((this.renderScheduledAt = v), Me.render(this.render, !1, !0));
			}));
		const { latestValues: m, renderState: g } = d;
		((this.latestValues = m),
			(this.baseTarget = { ...m }),
			(this.initialValues = i.initial ? { ...m } : {}),
			(this.renderState = g),
			(this.parent = n),
			(this.props = i),
			(this.presenceContext = s),
			(this.depth = n ? n.depth + 1 : 0),
			(this.reducedMotionConfig = a),
			(this.skipAnimationsConfig = u),
			(this.options = h),
			(this.blockInitialAnimation = !!c),
			(this.isControllingVariants = Ya(i)),
			(this.isVariantNode = Av(i)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(n && n.current)));
		const { willChange: y, ...x } = this.scrapeMotionValuesFromProps(i, {}, this);
		for (const v in x) {
			const S = x[v];
			m[v] !== void 0 && ot(S) && S.set(m[v]);
		}
	}
	mount(n) {
		if (this.hasBeenMounted)
			for (const i in this.initialValues)
				(this.values.get(i)?.jump(this.initialValues[i]), (this.latestValues[i] = this.initialValues[i]));
		((this.current = n),
			Lk.set(n, this),
			this.projection && !this.projection.instance && this.projection.mount(n),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((i, s) => this.bindToMotionValue(s, i)),
			this.reducedMotionConfig === 'never'
				? (this.shouldReduceMotion = !1)
				: this.reducedMotionConfig === 'always'
					? (this.shouldReduceMotion = !0)
					: (Mv.current || jk(), (this.shouldReduceMotion = Nc.current)),
			(this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
			this.parent?.addChild(this),
			this.update(this.props, this.presenceContext),
			(this.hasBeenMounted = !0));
	}
	unmount() {
		(this.projection && this.projection.unmount(),
			dr(this.notifyUpdate),
			dr(this.render),
			this.valueSubscriptions.forEach(n => n()),
			this.valueSubscriptions.clear(),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent?.removeChild(this));
		for (const n in this.events) this.events[n].clear();
		for (const n in this.features) {
			const i = this.features[n];
			i && (i.unmount(), (i.isMounted = !1));
		}
		this.current = null;
	}
	addChild(n) {
		(this.children.add(n), this.enteringChildren ?? (this.enteringChildren = new Set()), this.enteringChildren.add(n));
	}
	removeChild(n) {
		(this.children.delete(n), this.enteringChildren && this.enteringChildren.delete(n));
	}
	bindToMotionValue(n, i) {
		if (
			(this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)(),
			i.accelerate && fk.has(n) && this.current instanceof HTMLElement)
		) {
			const { factory: c, keyframes: d, times: h, ease: m, duration: g } = i.accelerate,
				y = new cv({ element: this.current, name: n, keyframes: d, times: h, ease: m, duration: tn(g) }),
				x = c(y);
			this.valueSubscriptions.set(n, () => {
				(x(), y.cancel());
			});
			return;
		}
		const s = Di.has(n);
		s && this.onBindTransform && this.onBindTransform();
		const a = i.on('change', c => {
			((this.latestValues[n] = c),
				this.props.onUpdate && Me.preRender(this.notifyUpdate),
				s && this.projection && (this.projection.isTransformDirty = !0),
				this.scheduleRender());
		});
		let u;
		(typeof window < 'u' && window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, n, i)),
			this.valueSubscriptions.set(n, () => {
				(a(), u && u(), i.owner && i.stop());
			}));
	}
	sortNodePosition(n) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== n.type
			? 0
			: this.sortInstanceNodePosition(this.current, n.current);
	}
	updateFeatures() {
		let n = 'animation';
		for (n in La) {
			const i = La[n];
			if (!i) continue;
			const { isEnabled: s, Feature: a } = i;
			if ((!this.features[n] && a && s(this.props) && (this.features[n] = new a(this)), this.features[n])) {
				const u = this.features[n];
				u.isMounted ? u.update() : (u.mount(), (u.isMounted = !0));
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ge();
	}
	getStaticValue(n) {
		return this.latestValues[n];
	}
	setStaticValue(n, i) {
		this.latestValues[n] = i;
	}
	update(n, i) {
		((n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = n),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = i));
		for (let s = 0; s < Am.length; s++) {
			const a = Am[s];
			this.propEventSubscriptions[a] && (this.propEventSubscriptions[a](), delete this.propEventSubscriptions[a]);
			const u = 'on' + a,
				c = n[u];
			c && (this.propEventSubscriptions[a] = this.on(a, c));
		}
		((this.prevMotionValues = Ok(
			this,
			this.scrapeMotionValuesFromProps(n, this.prevProps || {}, this),
			this.prevMotionValues,
		)),
			this.handleChildMotionValue && this.handleChildMotionValue());
	}
	getProps() {
		return this.props;
	}
	getVariant(n) {
		return this.props.variants ? this.props.variants[n] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(n) {
		const i = this.getClosestVariantNode();
		if (i) return (i.variantChildren && i.variantChildren.add(n), () => i.variantChildren.delete(n));
	}
	addValue(n, i) {
		const s = this.values.get(n);
		i !== s &&
			(s && this.removeValue(n), this.bindToMotionValue(n, i), this.values.set(n, i), (this.latestValues[n] = i.get()));
	}
	removeValue(n) {
		this.values.delete(n);
		const i = this.valueSubscriptions.get(n);
		(i && (i(), this.valueSubscriptions.delete(n)),
			delete this.latestValues[n],
			this.removeValueFromRenderState(n, this.renderState));
	}
	hasValue(n) {
		return this.values.has(n);
	}
	getValue(n, i) {
		if (this.props.values && this.props.values[n]) return this.props.values[n];
		let s = this.values.get(n);
		return (
			s === void 0 && i !== void 0 && ((s = Ti(i === null ? void 0 : i, { owner: this })), this.addValue(n, s)),
			s
		);
	}
	readValue(n, i) {
		let s =
			this.latestValues[n] !== void 0 || !this.current
				? this.latestValues[n]
				: (this.getBaseTargetFromProps(this.props, n) ?? this.readValueFromInstance(this.current, n, this.options));
		return (
			s != null &&
				(typeof s == 'string' && (Ly(s) || Ny(s)) ? (s = parseFloat(s)) : !Dk(s) && hr.test(i) && (s = Cv(n, i)),
				this.setBaseTarget(n, ot(s) ? s.get() : s)),
			ot(s) ? s.get() : s
		);
	}
	setBaseTarget(n, i) {
		this.baseTarget[n] = i;
	}
	getBaseTarget(n) {
		const { initial: i } = this.props;
		let s;
		if (typeof i == 'string' || typeof i == 'object') {
			const u = Ef(this.props, i, this.presenceContext?.custom);
			u && (s = u[n]);
		}
		if (i && s !== void 0) return s;
		const a = this.getBaseTargetFromProps(this.props, n);
		return a !== void 0 && !ot(a) ? a : this.initialValues[n] !== void 0 && s === void 0 ? void 0 : this.baseTarget[n];
	}
	on(n, i) {
		return (this.events[n] || (this.events[n] = new uf()), this.events[n].add(i));
	}
	notify(n, ...i) {
		this.events[n] && this.events[n].notify(...i);
	}
	scheduleRenderMicrotask() {
		kf.render(this.render);
	}
}
class Lv extends _k {
	constructor() {
		(super(...arguments), (this.KeyframeResolver = ck));
	}
	sortInstanceNodePosition(n, i) {
		return n.compareDocumentPosition(i) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(n, i) {
		const s = n.style;
		return s ? s[i] : void 0;
	}
	removeValueFromRenderState(n, { vars: i, style: s }) {
		(delete i[n], delete s[n]);
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		const { children: n } = this.props;
		ot(n) &&
			(this.childSubscription = n.on('change', i => {
				this.current && (this.current.textContent = `${i}`);
			}));
	}
}
class pr {
	constructor(n) {
		((this.isMounted = !1), (this.node = n));
	}
	update() {}
}
function Ov({ top: e, left: n, right: i, bottom: s }) {
	return { x: { min: n, max: i }, y: { min: e, max: s } };
}
function Vk({ x: e, y: n }) {
	return { top: n.min, right: e.max, bottom: n.max, left: e.min };
}
function Fk(e, n) {
	if (!n) return e;
	const i = n({ x: e.left, y: e.top }),
		s = n({ x: e.right, y: e.bottom });
	return { top: i.y, left: i.x, bottom: s.y, right: s.x };
}
function Gu(e) {
	return e === void 0 || e === 1;
}
function jc({ scale: e, scaleX: n, scaleY: i }) {
	return !Gu(e) || !Gu(n) || !Gu(i);
}
function Mr(e) {
	return jc(e) || Nv(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Nv(e) {
	return Mm(e.x) || Mm(e.y);
}
function Mm(e) {
	return e && e !== '0%';
}
function Oa(e, n, i) {
	const s = e - i,
		a = n * s;
	return i + a;
}
function Dm(e, n, i, s, a) {
	return (a !== void 0 && (e = Oa(e, a, s)), Oa(e, i, s) + n);
}
function Ic(e, n = 0, i = 1, s, a) {
	((e.min = Dm(e.min, n, i, s, a)), (e.max = Dm(e.max, n, i, s, a)));
}
function jv(e, { x: n, y: i }) {
	(Ic(e.x, n.translate, n.scale, n.originPoint), Ic(e.y, i.translate, i.scale, i.originPoint));
}
const Lm = 0.999999999999,
	Om = 1.0000000000001;
function zk(e, n, i, s = !1) {
	const a = i.length;
	if (!a) return;
	n.x = n.y = 1;
	let u, c;
	for (let d = 0; d < a; d++) {
		((u = i[d]), (c = u.projectionDelta));
		const { visualElement: h } = u.options;
		(h && h.props.style && h.props.style.display === 'contents') ||
			(s &&
				u.options.layoutScroll &&
				u.scroll &&
				u !== u.root &&
				yi(e, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
			c && ((n.x *= c.x.scale), (n.y *= c.y.scale), jv(e, c)),
			s && Mr(u.latestValues) && yi(e, u.latestValues));
	}
	(n.x < Om && n.x > Lm && (n.x = 1), n.y < Om && n.y > Lm && (n.y = 1));
}
function gi(e, n) {
	((e.min = e.min + n), (e.max = e.max + n));
}
function Nm(e, n, i, s, a = 0.5) {
	const u = _e(e.min, e.max, a);
	Ic(e, n, i, u, s);
}
function yi(e, n) {
	(Nm(e.x, n.x, n.scaleX, n.scale, n.originX), Nm(e.y, n.y, n.scaleY, n.scale, n.originY));
}
function Iv(e, n) {
	return Ov(Fk(e.getBoundingClientRect(), n));
}
function Bk(e, n, i) {
	const s = Iv(e, i),
		{ scroll: a } = n;
	return (a && (gi(s.x, a.offset.x), gi(s.y, a.offset.y)), s);
}
const Uk = { x: 'translateX', y: 'translateY', z: 'translateZ', transformPerspective: 'perspective' },
	$k = Mi.length;
function Wk(e, n, i) {
	let s = '',
		a = !0;
	for (let u = 0; u < $k; u++) {
		const c = Mi[u],
			d = e[c];
		if (d === void 0) continue;
		let h = !0;
		if (typeof d == 'number') h = d === (c.startsWith('scale') ? 1 : 0);
		else {
			const m = parseFloat(d);
			h = c.startsWith('scale') ? m === 1 : m === 0;
		}
		if (!h || i) {
			const m = Pv(d, Tf[c]);
			if (!h) {
				a = !1;
				const g = Uk[c] || c;
				s += `${g}(${m}) `;
			}
			i && (n[c] = m);
		}
	}
	return ((s = s.trim()), i ? (s = i(n, a ? '' : s)) : a && (s = 'none'), s);
}
function Df(e, n, i) {
	const { style: s, vars: a, transformOrigin: u } = e;
	let c = !1,
		d = !1;
	for (const h in n) {
		const m = n[h];
		if (Di.has(h)) {
			c = !0;
			continue;
		} else if (Qy(h)) {
			a[h] = m;
			continue;
		} else {
			const g = Pv(m, Tf[h]);
			h.startsWith('origin') ? ((d = !0), (u[h] = g)) : (s[h] = g);
		}
	}
	if ((n.transform || (c || i ? (s.transform = Wk(n, e.transform, i)) : s.transform && (s.transform = 'none')), d)) {
		const { originX: h = '50%', originY: m = '50%', originZ: g = 0 } = u;
		s.transformOrigin = `${h} ${m} ${g}`;
	}
}
function _v(e, { style: n, vars: i }, s, a) {
	const u = e.style;
	let c;
	for (c in n) u[c] = n[c];
	a?.applyProjectionStyles(u, s);
	for (c in i) u.setProperty(c, i[c]);
}
function jm(e, n) {
	return n.max === n.min ? 0 : (e / (n.max - n.min)) * 100;
}
const Co = {
		correct: (e, n) => {
			if (!n.target) return e;
			if (typeof e == 'string')
				if (re.test(e)) e = parseFloat(e);
				else return e;
			const i = jm(e, n.target.x),
				s = jm(e, n.target.y);
			return `${i}% ${s}%`;
		},
	},
	Hk = {
		correct: (e, { treeScale: n, projectionDelta: i }) => {
			const s = e,
				a = hr.parse(e);
			if (a.length > 5) return s;
			const u = hr.createTransformer(e),
				c = typeof a[0] != 'number' ? 1 : 0,
				d = i.x.scale * n.x,
				h = i.y.scale * n.y;
			((a[0 + c] /= d), (a[1 + c] /= h));
			const m = _e(d, h, 0.5);
			return (typeof a[2 + c] == 'number' && (a[2 + c] /= m), typeof a[3 + c] == 'number' && (a[3 + c] /= m), u(a));
		},
	},
	_c = {
		borderRadius: {
			...Co,
			applyTo: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius'],
		},
		borderTopLeftRadius: Co,
		borderTopRightRadius: Co,
		borderBottomLeftRadius: Co,
		borderBottomRightRadius: Co,
		boxShadow: Hk,
	};
function Vv(e, { layout: n, layoutId: i }) {
	return Di.has(e) || e.startsWith('origin') || ((n || i !== void 0) && (!!_c[e] || e === 'opacity'));
}
function Lf(e, n, i) {
	const s = e.style,
		a = n?.style,
		u = {};
	if (!s) return u;
	for (const c in s) (ot(s[c]) || (a && ot(a[c])) || Vv(c, e) || i?.getValue(c)?.liveStyle !== void 0) && (u[c] = s[c]);
	return u;
}
function Kk(e) {
	return window.getComputedStyle(e);
}
class Gk extends Lv {
	constructor() {
		(super(...arguments), (this.type = 'html'), (this.renderInstance = _v));
	}
	readValueFromInstance(n, i) {
		if (Di.has(i)) return this.projection?.isProjecting ? Ec(i) : dT(n, i);
		{
			const s = Kk(n),
				a = (Qy(i) ? s.getPropertyValue(i) : s[i]) || 0;
			return typeof a == 'string' ? a.trim() : a;
		}
	}
	measureInstanceViewportBox(n, { transformPagePoint: i }) {
		return Iv(n, i);
	}
	build(n, i, s) {
		Df(n, i, s.transformTemplate);
	}
	scrapeMotionValuesFromProps(n, i, s) {
		return Lf(n, i, s);
	}
}
const Qk = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
	Yk = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function Xk(e, n, i = 1, s = 0, a = !0) {
	e.pathLength = 1;
	const u = a ? Qk : Yk;
	((e[u.offset] = `${-s}`), (e[u.array] = `${n} ${i}`));
}
const qk = ['offsetDistance', 'offsetPath', 'offsetRotate', 'offsetAnchor'];
function Fv(
	e,
	{ attrX: n, attrY: i, attrScale: s, pathLength: a, pathSpacing: u = 1, pathOffset: c = 0, ...d },
	h,
	m,
	g,
) {
	if ((Df(e, d, m), h)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	((e.attrs = e.style), (e.style = {}));
	const { attrs: y, style: x } = e;
	(y.transform && ((x.transform = y.transform), delete y.transform),
		(x.transform || y.transformOrigin) &&
			((x.transformOrigin = y.transformOrigin ?? '50% 50%'), delete y.transformOrigin),
		x.transform && ((x.transformBox = g?.transformBox ?? 'fill-box'), delete y.transformBox));
	for (const v of qk) y[v] !== void 0 && ((x[v] = y[v]), delete y[v]);
	(n !== void 0 && (y.x = n),
		i !== void 0 && (y.y = i),
		s !== void 0 && (y.scale = s),
		a !== void 0 && Xk(y, a, u, c, !1));
}
const zv = new Set([
		'baseFrequency',
		'diffuseConstant',
		'kernelMatrix',
		'kernelUnitLength',
		'keySplines',
		'keyTimes',
		'limitingConeAngle',
		'markerHeight',
		'markerWidth',
		'numOctaves',
		'targetX',
		'targetY',
		'surfaceScale',
		'specularConstant',
		'specularExponent',
		'stdDeviation',
		'tableValues',
		'viewBox',
		'gradientTransform',
		'pathLength',
		'startOffset',
		'textLength',
		'lengthAdjust',
	]),
	Bv = e => typeof e == 'string' && e.toLowerCase() === 'svg';
function Zk(e, n, i, s) {
	_v(e, n, void 0, s);
	for (const a in n.attrs) e.setAttribute(zv.has(a) ? a : Pf(a), n.attrs[a]);
}
function Uv(e, n, i) {
	const s = Lf(e, n, i);
	for (const a in e)
		if (ot(e[a]) || ot(n[a])) {
			const u = Mi.indexOf(a) !== -1 ? 'attr' + a.charAt(0).toUpperCase() + a.substring(1) : a;
			s[u] = e[a];
		}
	return s;
}
class Jk extends Lv {
	constructor() {
		(super(...arguments), (this.type = 'svg'), (this.isSVGTag = !1), (this.measureInstanceViewportBox = Ge));
	}
	getBaseTargetFromProps(n, i) {
		return n[i];
	}
	readValueFromInstance(n, i) {
		if (Di.has(i)) {
			const s = Sv(i);
			return (s && s.default) || 0;
		}
		return ((i = zv.has(i) ? i : Pf(i)), n.getAttribute(i));
	}
	scrapeMotionValuesFromProps(n, i, s) {
		return Uv(n, i, s);
	}
	build(n, i, s) {
		Fv(n, i, this.isSVGTag, s.transformTemplate, s.style);
	}
	renderInstance(n, i, s, a) {
		Zk(n, i, s, a);
	}
	mount(n) {
		((this.isSVGTag = Bv(n.tagName)), super.mount(n));
	}
}
const eb = Mf.length;
function $v(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		const i = e.parent ? $v(e.parent) || {} : {};
		return (e.props.initial !== void 0 && (i.initial = e.props.initial), i);
	}
	const n = {};
	for (let i = 0; i < eb; i++) {
		const s = Mf[i],
			a = e.props[s];
		(jo(a) || a === !1) && (n[s] = a);
	}
	return n;
}
function Wv(e, n) {
	if (!Array.isArray(n)) return !1;
	const i = n.length;
	if (i !== e.length) return !1;
	for (let s = 0; s < i; s++) if (n[s] !== e[s]) return !1;
	return !0;
}
const tb = [...Af].reverse(),
	nb = Af.length;
function rb(e) {
	return n => Promise.all(n.map(({ animation: i, options: s }) => ek(e, i, s)));
}
function ib(e) {
	let n = rb(e),
		i = Im(),
		s = !0;
	const a = h => (m, g) => {
		const y = Ci(e, g, h === 'exit' ? e.presenceContext?.custom : void 0);
		if (y) {
			const { transition: x, transitionEnd: v, ...S } = y;
			m = { ...m, ...S, ...v };
		}
		return m;
	};
	function u(h) {
		n = h(e);
	}
	function c(h) {
		const { props: m } = e,
			g = $v(e.parent) || {},
			y = [],
			x = new Set();
		let v = {},
			S = 1 / 0;
		for (let E = 0; E < nb; E++) {
			const b = tb[E],
				M = i[b],
				D = m[b] !== void 0 ? m[b] : g[b],
				O = jo(D),
				_ = b === h ? M.isActive : null;
			_ === !1 && (S = E);
			let B = D === g[b] && D !== m[b] && O;
			if (
				(B && s && e.manuallyAnimateOnMount && (B = !1),
				(M.protectedKeys = { ...v }),
				(!M.isActive && _ === null) || (!D && !M.prevProp) || Qa(D) || typeof D == 'boolean')
			)
				continue;
			if (b === 'exit' && M.isActive && _ !== !0) {
				M.prevResolvedValues && (v = { ...v, ...M.prevResolvedValues });
				continue;
			}
			const G = ob(M.prevProp, D);
			let H = G || (b === h && M.isActive && !B && O) || (E > S && O),
				q = !1;
			const oe = Array.isArray(D) ? D : [D];
			let ye = oe.reduce(a(b), {});
			_ === !1 && (ye = {});
			const { prevResolvedValues: J = {} } = M,
				ge = { ...J, ...ye },
				de = X => {
					((H = !0), x.has(X) && ((q = !0), x.delete(X)), (M.needsAnimating[X] = !0));
					const F = e.getValue(X);
					F && (F.liveStyle = !1);
				};
			for (const X in ge) {
				const F = ye[X],
					z = J[X];
				if (v.hasOwnProperty(X)) continue;
				let W = !1;
				(Ac(F) && Ac(z) ? (W = !Wv(F, z)) : (W = F !== z),
					W ? (F != null ? de(X) : x.add(X)) : F !== void 0 && x.has(X) ? de(X) : (M.protectedKeys[X] = !0));
			}
			((M.prevProp = D),
				(M.prevResolvedValues = ye),
				M.isActive && (v = { ...v, ...ye }),
				s && e.blockInitialAnimation && (H = !1));
			const Ce = B && G;
			H &&
				(!Ce || q) &&
				y.push(
					...oe.map(X => {
						const F = { type: b };
						if (typeof X == 'string' && s && !Ce && e.manuallyAnimateOnMount && e.parent) {
							const { parent: z } = e,
								W = Ci(z, X);
							if (z.enteringChildren && W) {
								const { delayChildren: A } = W.transition || {};
								F.delay = dv(z.enteringChildren, e, A);
							}
						}
						return { animation: X, options: F };
					}),
				);
		}
		if (x.size) {
			const E = {};
			if (typeof m.initial != 'boolean') {
				const b = Ci(e, Array.isArray(m.initial) ? m.initial[0] : m.initial);
				b && b.transition && (E.transition = b.transition);
			}
			(x.forEach(b => {
				const M = e.getBaseTarget(b),
					D = e.getValue(b);
				(D && (D.liveStyle = !0), (E[b] = M ?? null));
			}),
				y.push({ animation: E }));
		}
		let P = !!y.length;
		return (
			s && (m.initial === !1 || m.initial === m.animate) && !e.manuallyAnimateOnMount && (P = !1),
			(s = !1),
			P ? n(y) : Promise.resolve()
		);
	}
	function d(h, m) {
		if (i[h].isActive === m) return Promise.resolve();
		(e.variantChildren?.forEach(y => y.animationState?.setActive(h, m)), (i[h].isActive = m));
		const g = c(h);
		for (const y in i) i[y].protectedKeys = {};
		return g;
	}
	return {
		animateChanges: c,
		setActive: d,
		setAnimateFunction: u,
		getState: () => i,
		reset: () => {
			i = Im();
		},
	};
}
function ob(e, n) {
	return typeof n == 'string' ? n !== e : Array.isArray(n) ? !Wv(n, e) : !1;
}
function Ar(e = !1) {
	return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Im() {
	return {
		animate: Ar(!0),
		whileInView: Ar(),
		whileHover: Ar(),
		whileTap: Ar(),
		whileDrag: Ar(),
		whileFocus: Ar(),
		exit: Ar(),
	};
}
function _m(e, n) {
	((e.min = n.min), (e.max = n.max));
}
function qt(e, n) {
	(_m(e.x, n.x), _m(e.y, n.y));
}
function Vm(e, n) {
	((e.translate = n.translate), (e.scale = n.scale), (e.originPoint = n.originPoint), (e.origin = n.origin));
}
const Hv = 1e-4,
	sb = 1 - Hv,
	ab = 1 + Hv,
	Kv = 0.01,
	lb = 0 - Kv,
	ub = 0 + Kv;
function dt(e) {
	return e.max - e.min;
}
function cb(e, n, i) {
	return Math.abs(e - n) <= i;
}
function Fm(e, n, i, s = 0.5) {
	((e.origin = s),
		(e.originPoint = _e(n.min, n.max, e.origin)),
		(e.scale = dt(i) / dt(n)),
		(e.translate = _e(i.min, i.max, e.origin) - e.originPoint),
		((e.scale >= sb && e.scale <= ab) || isNaN(e.scale)) && (e.scale = 1),
		((e.translate >= lb && e.translate <= ub) || isNaN(e.translate)) && (e.translate = 0));
}
function ko(e, n, i, s) {
	(Fm(e.x, n.x, i.x, s ? s.originX : void 0), Fm(e.y, n.y, i.y, s ? s.originY : void 0));
}
function zm(e, n, i) {
	((e.min = i.min + n.min), (e.max = e.min + dt(n)));
}
function fb(e, n, i) {
	(zm(e.x, n.x, i.x), zm(e.y, n.y, i.y));
}
function Bm(e, n, i) {
	((e.min = n.min - i.min), (e.max = e.min + dt(n)));
}
function Na(e, n, i) {
	(Bm(e.x, n.x, i.x), Bm(e.y, n.y, i.y));
}
function Um(e, n, i, s, a) {
	return ((e -= n), (e = Oa(e, 1 / i, s)), a !== void 0 && (e = Oa(e, 1 / a, s)), e);
}
function db(e, n = 0, i = 1, s = 0.5, a, u = e, c = e) {
	if ((wn.test(n) && ((n = parseFloat(n)), (n = _e(c.min, c.max, n / 100) - c.min)), typeof n != 'number')) return;
	let d = _e(u.min, u.max, s);
	(e === u && (d -= n), (e.min = Um(e.min, n, i, d, a)), (e.max = Um(e.max, n, i, d, a)));
}
function $m(e, n, [i, s, a], u, c) {
	db(e, n[i], n[s], n[a], n.scale, u, c);
}
const hb = ['x', 'scaleX', 'originX'],
	pb = ['y', 'scaleY', 'originY'];
function Wm(e, n, i, s) {
	($m(e.x, n, hb, i ? i.x : void 0, s ? s.x : void 0), $m(e.y, n, pb, i ? i.y : void 0, s ? s.y : void 0));
}
function Hm(e) {
	return e.translate === 0 && e.scale === 1;
}
function Gv(e) {
	return Hm(e.x) && Hm(e.y);
}
function Km(e, n) {
	return e.min === n.min && e.max === n.max;
}
function mb(e, n) {
	return Km(e.x, n.x) && Km(e.y, n.y);
}
function Gm(e, n) {
	return Math.round(e.min) === Math.round(n.min) && Math.round(e.max) === Math.round(n.max);
}
function Qv(e, n) {
	return Gm(e.x, n.x) && Gm(e.y, n.y);
}
function Qm(e) {
	return dt(e.x) / dt(e.y);
}
function Ym(e, n) {
	return e.translate === n.translate && e.scale === n.scale && e.originPoint === n.originPoint;
}
function gn(e) {
	return [e('x'), e('y')];
}
function gb(e, n, i) {
	let s = '';
	const a = e.x.translate / n.x,
		u = e.y.translate / n.y,
		c = i?.z || 0;
	if (
		((a || u || c) && (s = `translate3d(${a}px, ${u}px, ${c}px) `),
		(n.x !== 1 || n.y !== 1) && (s += `scale(${1 / n.x}, ${1 / n.y}) `),
		i)
	) {
		const { transformPerspective: m, rotate: g, rotateX: y, rotateY: x, skewX: v, skewY: S } = i;
		(m && (s = `perspective(${m}px) ${s}`),
			g && (s += `rotate(${g}deg) `),
			y && (s += `rotateX(${y}deg) `),
			x && (s += `rotateY(${x}deg) `),
			v && (s += `skewX(${v}deg) `),
			S && (s += `skewY(${S}deg) `));
	}
	const d = e.x.scale * n.x,
		h = e.y.scale * n.y;
	return ((d !== 1 || h !== 1) && (s += `scale(${d}, ${h})`), s || 'none');
}
const Yv = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
	yb = Yv.length,
	Xm = e => (typeof e == 'string' ? parseFloat(e) : e),
	qm = e => typeof e == 'number' || re.test(e);
function vb(e, n, i, s, a, u) {
	a
		? ((e.opacity = _e(0, i.opacity ?? 1, wb(s))), (e.opacityExit = _e(n.opacity ?? 1, 0, xb(s))))
		: u && (e.opacity = _e(n.opacity ?? 1, i.opacity ?? 1, s));
	for (let c = 0; c < yb; c++) {
		const d = `border${Yv[c]}Radius`;
		let h = Zm(n, d),
			m = Zm(i, d);
		if (h === void 0 && m === void 0) continue;
		(h || (h = 0),
			m || (m = 0),
			h === 0 || m === 0 || qm(h) === qm(m)
				? ((e[d] = Math.max(_e(Xm(h), Xm(m), s), 0)), (wn.test(m) || wn.test(h)) && (e[d] += '%'))
				: (e[d] = m));
	}
	(n.rotate || i.rotate) && (e.rotate = _e(n.rotate || 0, i.rotate || 0, s));
}
function Zm(e, n) {
	return e[n] !== void 0 ? e[n] : e.borderRadius;
}
const wb = Xv(0, 0.5, Uy),
	xb = Xv(0.5, 0.95, Ft);
function Xv(e, n, i) {
	return s => (s < e ? 0 : s > n ? 1 : i(Lo(e, n, s)));
}
function Sb(e, n, i) {
	const s = ot(e) ? e : Ti(e);
	return (s.start(Cf('', s, n, i)), s.animation);
}
function Io(e, n, i, s = { passive: !0 }) {
	return (e.addEventListener(n, i, s), () => e.removeEventListener(n, i));
}
const Cb = (e, n) => e.depth - n.depth;
class Eb {
	constructor() {
		((this.children = []), (this.isDirty = !1));
	}
	add(n) {
		(sf(this.children, n), (this.isDirty = !0));
	}
	remove(n) {
		(Ra(this.children, n), (this.isDirty = !0));
	}
	forEach(n) {
		(this.isDirty && this.children.sort(Cb), (this.isDirty = !1), this.children.forEach(n));
	}
}
function Pb(e, n) {
	const i = ft.now(),
		s = ({ timestamp: a }) => {
			const u = a - i;
			u >= n && (dr(s), e(u - n));
		};
	return (Me.setup(s, !0), () => dr(s));
}
function va(e) {
	return ot(e) ? e.get() : e;
}
class Tb {
	constructor() {
		this.members = [];
	}
	add(n) {
		sf(this.members, n);
		for (let i = this.members.length - 1; i >= 0; i--) {
			const s = this.members[i];
			if (s === n || s === this.lead || s === this.prevLead) continue;
			const a = s.instance;
			a && a.isConnected === !1 && s.isPresent !== !1 && !s.snapshot && Ra(this.members, s);
		}
		n.scheduleRender();
	}
	remove(n) {
		if ((Ra(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead)) {
			const i = this.members[this.members.length - 1];
			i && this.promote(i);
		}
	}
	relegate(n) {
		const i = this.members.findIndex(a => n === a);
		if (i === 0) return !1;
		let s;
		for (let a = i; a >= 0; a--) {
			const u = this.members[a],
				c = u.instance;
			if (u.isPresent !== !1 && (!c || c.isConnected !== !1)) {
				s = u;
				break;
			}
		}
		return s ? (this.promote(s), !0) : !1;
	}
	promote(n, i) {
		const s = this.lead;
		if (n !== s && ((this.prevLead = s), (this.lead = n), n.show(), s)) {
			(s.instance && s.scheduleRender(), n.scheduleRender());
			const a = s.options.layoutDependency,
				u = n.options.layoutDependency;
			if (!(a !== void 0 && u !== void 0 && a === u)) {
				const h = s.instance;
				(h && h.isConnected === !1 && !s.snapshot) ||
					((n.resumeFrom = s),
					i && (n.resumeFrom.preserveOpacity = !0),
					s.snapshot && ((n.snapshot = s.snapshot), (n.snapshot.latestValues = s.animationValues || s.latestValues)),
					n.root && n.root.isUpdating && (n.isLayoutDirty = !0));
			}
			const { crossfade: d } = n.options;
			d === !1 && s.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach(n => {
			const { options: i, resumingFrom: s } = n;
			(i.onExitComplete && i.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete());
		});
	}
	scheduleRender() {
		this.members.forEach(n => {
			n.instance && n.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
}
const wa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
	Qu = ['', 'X', 'Y', 'Z'],
	kb = 1e3;
let bb = 0;
function Yu(e, n, i, s) {
	const { latestValues: a } = n;
	a[e] && ((i[e] = a[e]), n.setStaticValue(e, 0), s && (s[e] = 0));
}
function qv(e) {
	if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
	const { visualElement: n } = e.options;
	if (!n) return;
	const i = yv(n);
	if (window.MotionHasOptimisedAnimation(i, 'transform')) {
		const { layout: a, layoutId: u } = e.options;
		window.MotionCancelOptimisedAnimation(i, 'transform', Me, !(a || u));
	}
	const { parent: s } = e;
	s && !s.hasCheckedOptimisedAppear && qv(s);
}
function Zv({ attachResizeListener: e, defaultParent: n, measureScroll: i, checkIsScrollRoot: s, resetTransform: a }) {
	return class {
		constructor(c = {}, d = n?.()) {
			((this.id = bb++),
				(this.animationId = 0),
				(this.animationCommitId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isProjectionDirty = !1),
				(this.isSharedProjectionDirty = !1),
				(this.isTransformDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.hasCheckedOptimisedAppear = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.hasTreeAnimated = !1),
				(this.layoutVersion = 0),
				(this.updateScheduled = !1),
				(this.scheduleUpdate = () => this.update()),
				(this.projectionUpdateScheduled = !1),
				(this.checkUpdateFailed = () => {
					this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
				}),
				(this.updateProjection = () => {
					((this.projectionUpdateScheduled = !1),
						this.nodes.forEach(Mb),
						this.nodes.forEach(Nb),
						this.nodes.forEach(jb),
						this.nodes.forEach(Db));
				}),
				(this.resolvedRelativeTargetAt = 0),
				(this.linkedParentVersion = 0),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = c),
				(this.root = d ? d.root || d : this),
				(this.path = d ? [...d.path, d] : []),
				(this.parent = d),
				(this.depth = d ? d.depth + 1 : 0));
			for (let h = 0; h < this.path.length; h++) this.path[h].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Eb());
		}
		addEventListener(c, d) {
			return (this.eventHandlers.has(c) || this.eventHandlers.set(c, new uf()), this.eventHandlers.get(c).add(d));
		}
		notifyListeners(c, ...d) {
			const h = this.eventHandlers.get(c);
			h && h.notify(...d);
		}
		hasListeners(c) {
			return this.eventHandlers.has(c);
		}
		mount(c) {
			if (this.instance) return;
			((this.isSVG = Rf(c) && !Ak(c)), (this.instance = c));
			const { layoutId: d, layout: h, visualElement: m } = this.options;
			if (
				(m && !m.current && m.mount(c),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				this.root.hasTreeAnimated && (h || d) && (this.isLayoutDirty = !0),
				e)
			) {
				let g,
					y = 0;
				const x = () => (this.root.updateBlockedByResize = !1);
				(Me.read(() => {
					y = window.innerWidth;
				}),
					e(c, () => {
						const v = window.innerWidth;
						v !== y &&
							((y = v),
							(this.root.updateBlockedByResize = !0),
							g && g(),
							(g = Pb(x, 250)),
							wa.hasAnimatedSinceResize && ((wa.hasAnimatedSinceResize = !1), this.nodes.forEach(tg)));
					}));
			}
			(d && this.root.registerSharedNode(d, this),
				this.options.animate !== !1 &&
					m &&
					(d || h) &&
					this.addEventListener(
						'didUpdate',
						({ delta: g, hasLayoutChanged: y, hasRelativeLayoutChanged: x, layout: v }) => {
							if (this.isTreeAnimationBlocked()) {
								((this.target = void 0), (this.relativeTarget = void 0));
								return;
							}
							const S = this.options.transition || m.getDefaultTransition() || zb,
								{ onLayoutAnimationStart: P, onLayoutAnimationComplete: E } = m.getProps(),
								b = !this.targetLayout || !Qv(this.targetLayout, v),
								M = !y && x;
							if (this.options.layoutRoot || this.resumeFrom || M || (y && (b || !this.currentAnimation))) {
								this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0));
								const D = { ...Sf(S, 'layout'), onPlay: P, onComplete: E };
								((m.shouldReduceMotion || this.options.layoutRoot) && ((D.delay = 0), (D.type = !1)),
									this.startAnimation(D),
									this.setAnimationOrigin(g, M));
							} else (y || tg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete());
							this.targetLayout = v;
						},
					));
		}
		unmount() {
			(this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this));
			const c = this.getStack();
			(c && c.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				this.eventHandlers.clear(),
				dr(this.updateProjection));
		}
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
			return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(Ib), this.animationId++);
		}
		getTransformTemplate() {
			const { visualElement: c } = this.options;
			return c && c.getProps().transformTemplate;
		}
		willUpdate(c = !0) {
			if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (
				(window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && qv(this),
				!this.root.isUpdating && this.root.startUpdate(),
				this.isLayoutDirty)
			)
				return;
			this.isLayoutDirty = !0;
			for (let g = 0; g < this.path.length; g++) {
				const y = this.path[g];
				((y.shouldResetTransform = !0), y.updateScroll('snapshot'), y.options.layoutRoot && y.willUpdate(!1));
			}
			const { layoutId: d, layout: h } = this.options;
			if (d === void 0 && !h) return;
			const m = this.getTransformTemplate();
			((this.prevTransformTemplateValue = m ? m(this.latestValues, '') : void 0),
				this.updateSnapshot(),
				c && this.notifyListeners('willUpdate'));
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				(this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Jm));
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(eg);
				return;
			}
			((this.animationCommitId = this.animationId),
				this.isUpdating
					? ((this.isUpdating = !1), this.nodes.forEach(Ob), this.nodes.forEach(Rb), this.nodes.forEach(Ab))
					: this.nodes.forEach(eg),
				this.clearAllSnapshots());
			const d = ft.now();
			((et.delta = Sn(0, 1e3 / 60, d - et.timestamp)),
				(et.timestamp = d),
				(et.isProcessing = !0),
				zu.update.process(et),
				zu.preRender.process(et),
				zu.render.process(et),
				(et.isProcessing = !1));
		}
		didUpdate() {
			this.updateScheduled || ((this.updateScheduled = !0), kf.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			(this.nodes.forEach(Lb), this.sharedNodes.forEach(_b));
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled ||
				((this.projectionUpdateScheduled = !0), Me.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			Me.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot ||
				!this.instance ||
				((this.snapshot = this.measure()),
				this.snapshot &&
					!dt(this.snapshot.measuredBox.x) &&
					!dt(this.snapshot.measuredBox.y) &&
					(this.snapshot = void 0));
		}
		updateLayout() {
			if (
				!this.instance ||
				(this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
			)
				return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let h = 0; h < this.path.length; h++) this.path[h].updateScroll();
			const c = this.layout;
			((this.layout = this.measure(!1)),
				this.layoutVersion++,
				(this.layoutCorrected = Ge()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners('measure', this.layout.layoutBox));
			const { visualElement: d } = this.options;
			d && d.notify('LayoutMeasure', this.layout.layoutBox, c ? c.layoutBox : void 0);
		}
		updateScroll(c = 'measure') {
			let d = !!(this.options.layoutScroll && this.instance);
			if (
				(this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (d = !1),
				d && this.instance)
			) {
				const h = s(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: c,
					isRoot: h,
					offset: i(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : h,
				};
			}
		}
		resetTransform() {
			if (!a) return;
			const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
				d = this.projectionDelta && !Gv(this.projectionDelta),
				h = this.getTransformTemplate(),
				m = h ? h(this.latestValues, '') : void 0,
				g = m !== this.prevTransformTemplateValue;
			c &&
				this.instance &&
				(d || Mr(this.latestValues) || g) &&
				(a(this.instance, m), (this.shouldResetTransform = !1), this.scheduleRender());
		}
		measure(c = !0) {
			const d = this.measurePageBox();
			let h = this.removeElementScroll(d);
			return (
				c && (h = this.removeTransform(h)),
				Bb(h),
				{ animationId: this.root.animationId, measuredBox: d, layoutBox: h, latestValues: {}, source: this.id }
			);
		}
		measurePageBox() {
			const { visualElement: c } = this.options;
			if (!c) return Ge();
			const d = c.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(Ub))) {
				const { scroll: m } = this.root;
				m && (gi(d.x, m.offset.x), gi(d.y, m.offset.y));
			}
			return d;
		}
		removeElementScroll(c) {
			const d = Ge();
			if ((qt(d, c), this.scroll?.wasRoot)) return d;
			for (let h = 0; h < this.path.length; h++) {
				const m = this.path[h],
					{ scroll: g, options: y } = m;
				m !== this.root && g && y.layoutScroll && (g.wasRoot && qt(d, c), gi(d.x, g.offset.x), gi(d.y, g.offset.y));
			}
			return d;
		}
		applyTransform(c, d = !1) {
			const h = Ge();
			qt(h, c);
			for (let m = 0; m < this.path.length; m++) {
				const g = this.path[m];
				(!d &&
					g.options.layoutScroll &&
					g.scroll &&
					g !== g.root &&
					yi(h, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
					Mr(g.latestValues) && yi(h, g.latestValues));
			}
			return (Mr(this.latestValues) && yi(h, this.latestValues), h);
		}
		removeTransform(c) {
			const d = Ge();
			qt(d, c);
			for (let h = 0; h < this.path.length; h++) {
				const m = this.path[h];
				if (!m.instance || !Mr(m.latestValues)) continue;
				jc(m.latestValues) && m.updateSnapshot();
				const g = Ge(),
					y = m.measurePageBox();
				(qt(g, y), Wm(d, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, g));
			}
			return (Mr(this.latestValues) && Wm(d, this.latestValues), d);
		}
		setTargetDelta(c) {
			((this.targetDelta = c), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0));
		}
		setOptions(c) {
			this.options = { ...this.options, ...c, crossfade: c.crossfade !== void 0 ? c.crossfade : !0 };
		}
		clearMeasurements() {
			((this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1));
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent &&
				this.relativeParent.resolvedRelativeTargetAt !== et.timestamp &&
				this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(c = !1) {
			const d = this.getLead();
			(this.isProjectionDirty || (this.isProjectionDirty = d.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = d.isTransformDirty),
				this.isSharedProjectionDirty || (this.isSharedProjectionDirty = d.isSharedProjectionDirty));
			const h = !!this.resumingFrom || this !== d;
			if (
				!(
					c ||
					(h && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					this.parent?.isProjectionDirty ||
					this.attemptToResolveRelativeTarget ||
					this.root.updateBlockedByResize
				)
			)
				return;
			const { layout: g, layoutId: y } = this.options;
			if (!this.layout || !(g || y)) return;
			this.resolvedRelativeTargetAt = et.timestamp;
			const x = this.getClosestProjectingParent();
			(x && this.linkedParentVersion !== x.layoutVersion && !x.options.layoutRoot && this.removeRelativeTarget(),
				!this.targetDelta &&
					!this.relativeTarget &&
					(x && x.layout
						? this.createRelativeTarget(x, this.layout.layoutBox, x.layout.layoutBox)
						: this.removeRelativeTarget()),
				!(!this.relativeTarget && !this.targetDelta) &&
					(this.target || ((this.target = Ge()), (this.targetWithTransforms = Ge())),
					this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target
						? (this.forceRelativeParentToResolveTarget(),
							fb(this.target, this.relativeTarget, this.relativeParent.target))
						: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: qt(this.target, this.layout.layoutBox),
								jv(this.target, this.targetDelta))
							: qt(this.target, this.layout.layoutBox),
					this.attemptToResolveRelativeTarget &&
						((this.attemptToResolveRelativeTarget = !1),
						x &&
						!!x.resumingFrom == !!this.resumingFrom &&
						!x.options.layoutScroll &&
						x.target &&
						this.animationProgress !== 1
							? this.createRelativeTarget(x, this.target, x.target)
							: (this.relativeParent = this.relativeTarget = void 0))));
		}
		getClosestProjectingParent() {
			if (!(!this.parent || jc(this.parent.latestValues) || Nv(this.parent.latestValues)))
				return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(c, d, h) {
			((this.relativeParent = c),
				(this.linkedParentVersion = c.layoutVersion),
				this.forceRelativeParentToResolveTarget(),
				(this.relativeTarget = Ge()),
				(this.relativeTargetOrigin = Ge()),
				Na(this.relativeTargetOrigin, d, h),
				qt(this.relativeTarget, this.relativeTargetOrigin));
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			const c = this.getLead(),
				d = !!this.resumingFrom || this !== c;
			let h = !0;
			if (
				((this.isProjectionDirty || this.parent?.isProjectionDirty) && (h = !1),
				d && (this.isSharedProjectionDirty || this.isTransformDirty) && (h = !1),
				this.resolvedRelativeTargetAt === et.timestamp && (h = !1),
				h)
			)
				return;
			const { layout: m, layoutId: g } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(m || g))
			)
				return;
			qt(this.layoutCorrected, this.layout.layoutBox);
			const y = this.treeScale.x,
				x = this.treeScale.y;
			(zk(this.layoutCorrected, this.treeScale, this.path, d),
				c.layout &&
					!c.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					((c.target = c.layout.layoutBox), (c.targetWithTransforms = Ge())));
			const { target: v } = c;
			if (!v) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			(!this.projectionDelta || !this.prevProjectionDelta
				? this.createProjectionDeltas()
				: (Vm(this.prevProjectionDelta.x, this.projectionDelta.x),
					Vm(this.prevProjectionDelta.y, this.projectionDelta.y)),
				ko(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
				(this.treeScale.x !== y ||
					this.treeScale.y !== x ||
					!Ym(this.projectionDelta.x, this.prevProjectionDelta.x) ||
					!Ym(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
					((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners('projectionUpdate', v)));
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(c = !0) {
			if ((this.options.visualElement?.scheduleRender(), c)) {
				const d = this.getStack();
				d && d.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			((this.prevProjectionDelta = mi()), (this.projectionDelta = mi()), (this.projectionDeltaWithTransform = mi()));
		}
		setAnimationOrigin(c, d = !1) {
			const h = this.snapshot,
				m = h ? h.latestValues : {},
				g = { ...this.latestValues },
				y = mi();
			((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !d));
			const x = Ge(),
				v = h ? h.source : void 0,
				S = this.layout ? this.layout.source : void 0,
				P = v !== S,
				E = this.getStack(),
				b = !E || E.members.length <= 1,
				M = !!(P && !b && this.options.crossfade === !0 && !this.path.some(Fb));
			this.animationProgress = 0;
			let D;
			((this.mixTargetDelta = O => {
				const _ = O / 1e3;
				(ng(y.x, c.x, _),
					ng(y.y, c.y, _),
					this.setTargetDelta(y),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(Na(x, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						Vb(this.relativeTarget, this.relativeTargetOrigin, x, _),
						D && mb(this.relativeTarget, D) && (this.isProjectionDirty = !1),
						D || (D = Ge()),
						qt(D, this.relativeTarget)),
					P && ((this.animationValues = g), vb(g, m, this.latestValues, _, M, b)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = _));
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
		}
		startAnimation(c) {
			(this.notifyListeners('animationStart'),
				this.currentAnimation?.stop(),
				this.resumingFrom?.currentAnimation?.stop(),
				this.pendingAnimation && (dr(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = Me.update(() => {
					((wa.hasAnimatedSinceResize = !0),
						this.motionValue || (this.motionValue = Ti(0)),
						(this.currentAnimation = Sb(this.motionValue, [0, 1e3], {
							...c,
							velocity: 0,
							isSync: !0,
							onUpdate: d => {
								(this.mixTargetDelta(d), c.onUpdate && c.onUpdate(d));
							},
							onStop: () => {},
							onComplete: () => {
								(c.onComplete && c.onComplete(), this.completeAnimation());
							},
						})),
						this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
						(this.pendingAnimation = void 0));
				})));
		}
		completeAnimation() {
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
			const c = this.getStack();
			(c && c.exitAnimationComplete(),
				(this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
				this.notifyListeners('animationComplete'));
		}
		finishAnimation() {
			(this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(kb), this.currentAnimation.stop()),
				this.completeAnimation());
		}
		applyTransformsToTarget() {
			const c = this.getLead();
			let { targetWithTransforms: d, target: h, layout: m, latestValues: g } = c;
			if (!(!d || !h || !m)) {
				if (this !== c && this.layout && m && Jv(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
					h = this.target || Ge();
					const y = dt(this.layout.layoutBox.x);
					((h.x.min = c.target.x.min), (h.x.max = h.x.min + y));
					const x = dt(this.layout.layoutBox.y);
					((h.y.min = c.target.y.min), (h.y.max = h.y.min + x));
				}
				(qt(d, h), yi(d, g), ko(this.projectionDeltaWithTransform, this.layoutCorrected, d, g));
			}
		}
		registerSharedNode(c, d) {
			(this.sharedNodes.has(c) || this.sharedNodes.set(c, new Tb()), this.sharedNodes.get(c).add(d));
			const m = d.options.initialPromotionConfig;
			d.promote({
				transition: m ? m.transition : void 0,
				preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(d) : void 0,
			});
		}
		isLead() {
			const c = this.getStack();
			return c ? c.lead === this : !0;
		}
		getLead() {
			const { layoutId: c } = this.options;
			return c ? this.getStack()?.lead || this : this;
		}
		getPrevLead() {
			const { layoutId: c } = this.options;
			return c ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			const { layoutId: c } = this.options;
			if (c) return this.root.sharedNodes.get(c);
		}
		promote({ needsReset: c, transition: d, preserveFollowOpacity: h } = {}) {
			const m = this.getStack();
			(m && m.promote(this, h),
				c && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				d && this.setOptions({ transition: d }));
		}
		relegate() {
			const c = this.getStack();
			return c ? c.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			const { visualElement: c } = this.options;
			if (!c) return;
			let d = !1;
			const { latestValues: h } = c;
			if (((h.z || h.rotate || h.rotateX || h.rotateY || h.rotateZ || h.skewX || h.skewY) && (d = !0), !d)) return;
			const m = {};
			h.z && Yu('z', c, m, this.animationValues);
			for (let g = 0; g < Qu.length; g++)
				(Yu(`rotate${Qu[g]}`, c, m, this.animationValues), Yu(`skew${Qu[g]}`, c, m, this.animationValues));
			c.render();
			for (const g in m) (c.setStaticValue(g, m[g]), this.animationValues && (this.animationValues[g] = m[g]));
			c.scheduleRender();
		}
		applyProjectionStyles(c, d) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				c.visibility = 'hidden';
				return;
			}
			const h = this.getTransformTemplate();
			if (this.needsReset) {
				((this.needsReset = !1),
					(c.visibility = ''),
					(c.opacity = ''),
					(c.pointerEvents = va(d?.pointerEvents) || ''),
					(c.transform = h ? h(this.latestValues, '') : 'none'));
				return;
			}
			const m = this.getLead();
			if (!this.projectionDelta || !this.layout || !m.target) {
				(this.options.layoutId &&
					((c.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
					(c.pointerEvents = va(d?.pointerEvents) || '')),
					this.hasProjected &&
						!Mr(this.latestValues) &&
						((c.transform = h ? h({}, '') : 'none'), (this.hasProjected = !1)));
				return;
			}
			c.visibility = '';
			const g = m.animationValues || m.latestValues;
			this.applyTransformsToTarget();
			let y = gb(this.projectionDeltaWithTransform, this.treeScale, g);
			(h && (y = h(g, y)), (c.transform = y));
			const { x, y: v } = this.projectionDelta;
			((c.transformOrigin = `${x.origin * 100}% ${v.origin * 100}% 0`),
				m.animationValues
					? (c.opacity =
							m === this
								? (g.opacity ?? this.latestValues.opacity ?? 1)
								: this.preserveOpacity
									? this.latestValues.opacity
									: g.opacityExit)
					: (c.opacity =
							m === this ? (g.opacity !== void 0 ? g.opacity : '') : g.opacityExit !== void 0 ? g.opacityExit : 0));
			for (const S in _c) {
				if (g[S] === void 0) continue;
				const { correct: P, applyTo: E, isCSSVariable: b } = _c[S],
					M = y === 'none' ? g[S] : P(g[S], m);
				if (E) {
					const D = E.length;
					for (let O = 0; O < D; O++) c[E[O]] = M;
				} else b ? (this.options.visualElement.renderState.vars[S] = M) : (c[S] = M);
			}
			this.options.layoutId && (c.pointerEvents = m === this ? va(d?.pointerEvents) || '' : 'none');
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			(this.root.nodes.forEach(c => c.currentAnimation?.stop()),
				this.root.nodes.forEach(Jm),
				this.root.sharedNodes.clear());
		}
	};
}
function Rb(e) {
	e.updateLayout();
}
function Ab(e) {
	const n = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
		const { layoutBox: i, measuredBox: s } = e.layout,
			{ animationType: a } = e.options,
			u = n.source !== e.layout.source;
		a === 'size'
			? gn(g => {
					const y = u ? n.measuredBox[g] : n.layoutBox[g],
						x = dt(y);
					((y.min = i[g].min), (y.max = y.min + x));
				})
			: Jv(a, n.layoutBox, i) &&
				gn(g => {
					const y = u ? n.measuredBox[g] : n.layoutBox[g],
						x = dt(i[g]);
					((y.max = y.min + x),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0), (e.relativeTarget[g].max = e.relativeTarget[g].min + x)));
				});
		const c = mi();
		ko(c, i, n.layoutBox);
		const d = mi();
		u ? ko(d, e.applyTransform(s, !0), n.measuredBox) : ko(d, i, n.layoutBox);
		const h = !Gv(c);
		let m = !1;
		if (!e.resumeFrom) {
			const g = e.getClosestProjectingParent();
			if (g && !g.resumeFrom) {
				const { snapshot: y, layout: x } = g;
				if (y && x) {
					const v = Ge();
					Na(v, n.layoutBox, y.layoutBox);
					const S = Ge();
					(Na(S, i, x.layoutBox),
						Qv(v, S) || (m = !0),
						g.options.layoutRoot && ((e.relativeTarget = S), (e.relativeTargetOrigin = v), (e.relativeParent = g)));
				}
			}
		}
		e.notifyListeners('didUpdate', {
			layout: i,
			snapshot: n,
			delta: d,
			layoutDelta: c,
			hasLayoutChanged: h,
			hasRelativeLayoutChanged: m,
		});
	} else if (e.isLead()) {
		const { onExitComplete: i } = e.options;
		i && i();
	}
	e.options.transition = void 0;
}
function Mb(e) {
	e.parent &&
		(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
		e.isSharedProjectionDirty ||
			(e.isSharedProjectionDirty = !!(
				e.isProjectionDirty ||
				e.parent.isProjectionDirty ||
				e.parent.isSharedProjectionDirty
			)),
		e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Db(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Lb(e) {
	e.clearSnapshot();
}
function Jm(e) {
	e.clearMeasurements();
}
function eg(e) {
	e.isLayoutDirty = !1;
}
function Ob(e) {
	const { visualElement: n } = e.options;
	(n && n.getProps().onBeforeLayoutMeasure && n.notify('BeforeLayoutMeasure'), e.resetTransform());
}
function tg(e) {
	(e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0));
}
function Nb(e) {
	e.resolveTargetDelta();
}
function jb(e) {
	e.calcProjection();
}
function Ib(e) {
	e.resetSkewAndRotation();
}
function _b(e) {
	e.removeLeadSnapshot();
}
function ng(e, n, i) {
	((e.translate = _e(n.translate, 0, i)),
		(e.scale = _e(n.scale, 1, i)),
		(e.origin = n.origin),
		(e.originPoint = n.originPoint));
}
function rg(e, n, i, s) {
	((e.min = _e(n.min, i.min, s)), (e.max = _e(n.max, i.max, s)));
}
function Vb(e, n, i, s) {
	(rg(e.x, n.x, i.x, s), rg(e.y, n.y, i.y, s));
}
function Fb(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const zb = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	ig = e => typeof navigator < 'u' && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
	og = ig('applewebkit/') && !ig('chrome/') ? Math.round : Ft;
function sg(e) {
	((e.min = og(e.min)), (e.max = og(e.max)));
}
function Bb(e) {
	(sg(e.x), sg(e.y));
}
function Jv(e, n, i) {
	return e === 'position' || (e === 'preserve-aspect' && !cb(Qm(n), Qm(i), 0.2));
}
function Ub(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
const $b = Zv({
		attachResizeListener: (e, n) => Io(e, 'resize', n),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
			y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
		}),
		checkIsScrollRoot: () => !0,
	}),
	Xu = { current: void 0 },
	e0 = Zv({
		measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!Xu.current) {
				const e = new $b({});
				(e.mount(window), e.setOptions({ layoutScroll: !0 }), (Xu.current = e));
			}
			return Xu.current;
		},
		resetTransform: (e, n) => {
			e.style.transform = n !== void 0 ? n : 'none';
		},
		checkIsScrollRoot: e => window.getComputedStyle(e).position === 'fixed',
	}),
	Of = C.createContext({ transformPagePoint: e => e, isStatic: !1, reducedMotion: 'never' });
function ag(e, n) {
	if (typeof e == 'function') return e(n);
	e != null && (e.current = n);
}
function Wb(...e) {
	return n => {
		let i = !1;
		const s = e.map(a => {
			const u = ag(a, n);
			return (!i && typeof u == 'function' && (i = !0), u);
		});
		if (i)
			return () => {
				for (let a = 0; a < s.length; a++) {
					const u = s[a];
					typeof u == 'function' ? u() : ag(e[a], null);
				}
			};
	};
}
function Hb(...e) {
	return C.useCallback(Wb(...e), e);
}
class Kb extends C.Component {
	getSnapshotBeforeUpdate(n) {
		const i = this.props.childRef.current;
		if (i && n.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			const s = i.offsetParent,
				a = (Oc(s) && s.offsetWidth) || 0,
				u = (Oc(s) && s.offsetHeight) || 0,
				c = this.props.sizeRef.current;
			((c.height = i.offsetHeight || 0),
				(c.width = i.offsetWidth || 0),
				(c.top = i.offsetTop),
				(c.left = i.offsetLeft),
				(c.right = a - c.width - c.left),
				(c.bottom = u - c.height - c.top));
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
}
function Gb({ children: e, isPresent: n, anchorX: i, anchorY: s, root: a, pop: u }) {
	const c = C.useId(),
		d = C.useRef(null),
		h = C.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
		{ nonce: m } = C.useContext(Of),
		g = e.props?.ref ?? e?.ref,
		y = Hb(d, g);
	return (
		C.useInsertionEffect(() => {
			const { width: x, height: v, top: S, left: P, right: E, bottom: b } = h.current;
			if (n || u === !1 || !d.current || !x || !v) return;
			const M = i === 'left' ? `left: ${P}` : `right: ${E}`,
				D = s === 'bottom' ? `bottom: ${b}` : `top: ${S}`;
			d.current.dataset.motionPopId = c;
			const O = document.createElement('style');
			m && (O.nonce = m);
			const _ = a ?? document.head;
			return (
				_.appendChild(O),
				O.sheet &&
					O.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${x}px !important;
            height: ${v}px !important;
            ${M}px !important;
            ${D}px !important;
          }
        `),
				() => {
					_.contains(O) && _.removeChild(O);
				}
			);
		}, [n]),
		j.jsx(Kb, { isPresent: n, childRef: d, sizeRef: h, pop: u, children: u === !1 ? e : C.cloneElement(e, { ref: y }) })
	);
}
const Qb = ({
	children: e,
	initial: n,
	isPresent: i,
	onExitComplete: s,
	custom: a,
	presenceAffectsLayout: u,
	mode: c,
	anchorX: d,
	anchorY: h,
	root: m,
}) => {
	const g = of(Yb),
		y = C.useId();
	let x = !0,
		v = C.useMemo(
			() => (
				(x = !1),
				{
					id: y,
					initial: n,
					isPresent: i,
					custom: a,
					onExitComplete: S => {
						g.set(S, !0);
						for (const P of g.values()) if (!P) return;
						s && s();
					},
					register: S => (g.set(S, !1), () => g.delete(S)),
				}
			),
			[i, g, s],
		);
	return (
		u && x && (v = { ...v }),
		C.useMemo(() => {
			g.forEach((S, P) => g.set(P, !1));
		}, [i]),
		C.useEffect(() => {
			!i && !g.size && s && s();
		}, [i]),
		(e = j.jsx(Gb, { pop: c === 'popLayout', isPresent: i, anchorX: d, anchorY: h, root: m, children: e })),
		j.jsx(Ga.Provider, { value: v, children: e })
	);
};
function Yb() {
	return new Map();
}
function t0(e = !0) {
	const n = C.useContext(Ga);
	if (n === null) return [!0, null];
	const { isPresent: i, onExitComplete: s, register: a } = n,
		u = C.useId();
	C.useEffect(() => {
		if (e) return a(u);
	}, [e]);
	const c = C.useCallback(() => e && s && s(u), [u, s, e]);
	return !i && s ? [!1, c] : [!0];
}
const ca = e => e.key || '';
function lg(e) {
	const n = [];
	return (
		C.Children.forEach(e, i => {
			C.isValidElement(i) && n.push(i);
		}),
		n
	);
}
const Xb = ({
		children: e,
		custom: n,
		initial: i = !0,
		onExitComplete: s,
		presenceAffectsLayout: a = !0,
		mode: u = 'sync',
		propagate: c = !1,
		anchorX: d = 'left',
		anchorY: h = 'top',
		root: m,
	}) => {
		const [g, y] = t0(c),
			x = C.useMemo(() => lg(e), [e]),
			v = c && !g ? [] : x.map(ca),
			S = C.useRef(!0),
			P = C.useRef(x),
			E = of(() => new Map()),
			b = C.useRef(new Set()),
			[M, D] = C.useState(x),
			[O, _] = C.useState(x);
		Dy(() => {
			((S.current = !1), (P.current = x));
			for (let H = 0; H < O.length; H++) {
				const q = ca(O[H]);
				v.includes(q) ? (E.delete(q), b.current.delete(q)) : E.get(q) !== !0 && E.set(q, !1);
			}
		}, [O, v.length, v.join('-')]);
		const B = [];
		if (x !== M) {
			let H = [...x];
			for (let q = 0; q < O.length; q++) {
				const oe = O[q],
					ye = ca(oe);
				v.includes(ye) || (H.splice(q, 0, oe), B.push(oe));
			}
			return (u === 'wait' && B.length && (H = B), _(lg(H)), D(x), null);
		}
		const { forceRender: G } = C.useContext(rf);
		return j.jsx(j.Fragment, {
			children: O.map(H => {
				const q = ca(H),
					oe = c && !g ? !1 : x === O || v.includes(q),
					ye = () => {
						if (b.current.has(q)) return;
						if ((b.current.add(q), E.has(q))) E.set(q, !0);
						else return;
						let J = !0;
						(E.forEach(ge => {
							ge || (J = !1);
						}),
							J && (G?.(), _(P.current), c && y?.(), s && s()));
					};
				return j.jsx(
					Qb,
					{
						isPresent: oe,
						initial: !S.current || i ? void 0 : !1,
						custom: n,
						presenceAffectsLayout: a,
						mode: u,
						root: m,
						onExitComplete: oe ? void 0 : ye,
						anchorX: d,
						anchorY: h,
						children: H,
					},
					q,
				);
			}),
		});
	},
	n0 = C.createContext({ strict: !1 }),
	ug = {
		animation: ['animate', 'variants', 'whileHover', 'whileTap', 'exit', 'whileInView', 'whileFocus', 'whileDrag'],
		exit: ['exit'],
		drag: ['drag', 'dragControls'],
		focus: ['whileFocus'],
		hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
		tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
		pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
		inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
		layout: ['layout', 'layoutId'],
	};
let cg = !1;
function qb() {
	if (cg) return;
	const e = {};
	for (const n in ug) e[n] = { isEnabled: i => ug[n].some(s => !!i[s]) };
	(Dv(e), (cg = !0));
}
function r0() {
	return (qb(), Ik());
}
function Zb(e) {
	const n = r0();
	for (const i in e) n[i] = { ...n[i], ...e[i] };
	Dv(n);
}
const Jb = new Set([
	'animate',
	'exit',
	'variants',
	'initial',
	'style',
	'values',
	'variants',
	'transition',
	'transformTemplate',
	'custom',
	'inherit',
	'onBeforeLayoutMeasure',
	'onAnimationStart',
	'onAnimationComplete',
	'onUpdate',
	'onDragStart',
	'onDrag',
	'onDragEnd',
	'onMeasureDragConstraints',
	'onDirectionLock',
	'onDragTransitionEnd',
	'_dragX',
	'_dragY',
	'onHoverStart',
	'onHoverEnd',
	'onViewportEnter',
	'onViewportLeave',
	'globalTapTarget',
	'propagate',
	'ignoreStrict',
	'viewport',
]);
function ja(e) {
	return (
		e.startsWith('while') ||
		(e.startsWith('drag') && e !== 'draggable') ||
		e.startsWith('layout') ||
		e.startsWith('onTap') ||
		e.startsWith('onPan') ||
		e.startsWith('onLayout') ||
		Jb.has(e)
	);
}
let i0 = e => !ja(e);
function eR(e) {
	typeof e == 'function' && (i0 = n => (n.startsWith('on') ? !ja(n) : e(n)));
}
try {
	eR(require('@emotion/is-prop-valid').default);
} catch {}
function tR(e, n, i) {
	const s = {};
	for (const a in e)
		(a === 'values' && typeof e.values == 'object') ||
			((i0(a) || (i === !0 && ja(a)) || (!n && !ja(a)) || (e.draggable && a.startsWith('onDrag'))) && (s[a] = e[a]));
	return s;
}
const Xa = C.createContext({});
function nR(e, n) {
	if (Ya(e)) {
		const { initial: i, animate: s } = e;
		return { initial: i === !1 || jo(i) ? i : void 0, animate: jo(s) ? s : void 0 };
	}
	return e.inherit !== !1 ? n : {};
}
function rR(e) {
	const { initial: n, animate: i } = nR(e, C.useContext(Xa));
	return C.useMemo(() => ({ initial: n, animate: i }), [fg(n), fg(i)]);
}
function fg(e) {
	return Array.isArray(e) ? e.join(' ') : e;
}
const Nf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function o0(e, n, i) {
	for (const s in n) !ot(n[s]) && !Vv(s, i) && (e[s] = n[s]);
}
function iR({ transformTemplate: e }, n) {
	return C.useMemo(() => {
		const i = Nf();
		return (Df(i, n, e), Object.assign({}, i.vars, i.style));
	}, [n]);
}
function oR(e, n) {
	const i = e.style || {},
		s = {};
	return (o0(s, i, e), Object.assign(s, iR(e, n)), s);
}
function sR(e, n) {
	const i = {},
		s = oR(e, n);
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((i.draggable = !1),
			(s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = 'none'),
			(s.touchAction = e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
		e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0),
		(i.style = s),
		i
	);
}
const s0 = () => ({ ...Nf(), attrs: {} });
function aR(e, n, i, s) {
	const a = C.useMemo(() => {
		const u = s0();
		return (Fv(u, n, Bv(s), e.transformTemplate, e.style), { ...u.attrs, style: { ...u.style } });
	}, [n]);
	if (e.style) {
		const u = {};
		(o0(u, e.style, e), (a.style = { ...u, ...a.style }));
	}
	return a;
}
const lR = [
	'animate',
	'circle',
	'defs',
	'desc',
	'ellipse',
	'g',
	'image',
	'line',
	'filter',
	'marker',
	'mask',
	'metadata',
	'path',
	'pattern',
	'polygon',
	'polyline',
	'rect',
	'stop',
	'switch',
	'symbol',
	'svg',
	'text',
	'tspan',
	'use',
	'view',
];
function jf(e) {
	return typeof e != 'string' || e.includes('-') ? !1 : !!(lR.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function uR(e, n, i, { latestValues: s }, a, u = !1, c) {
	const h = ((c ?? jf(e)) ? aR : sR)(n, s, a, e),
		m = tR(n, typeof e == 'string', u),
		g = e !== C.Fragment ? { ...m, ...h, ref: i } : {},
		{ children: y } = n,
		x = C.useMemo(() => (ot(y) ? y.get() : y), [y]);
	return C.createElement(e, { ...g, children: x });
}
function cR({ scrapeMotionValuesFromProps: e, createRenderState: n }, i, s, a) {
	return { latestValues: fR(i, s, a, e), renderState: n() };
}
function fR(e, n, i, s) {
	const a = {},
		u = s(e, {});
	for (const x in u) a[x] = va(u[x]);
	let { initial: c, animate: d } = e;
	const h = Ya(e),
		m = Av(e);
	n && m && !h && e.inherit !== !1 && (c === void 0 && (c = n.initial), d === void 0 && (d = n.animate));
	let g = i ? i.initial === !1 : !1;
	g = g || c === !1;
	const y = g ? d : c;
	if (y && typeof y != 'boolean' && !Qa(y)) {
		const x = Array.isArray(y) ? y : [y];
		for (let v = 0; v < x.length; v++) {
			const S = Ef(e, x[v]);
			if (S) {
				const { transitionEnd: P, transition: E, ...b } = S;
				for (const M in b) {
					let D = b[M];
					if (Array.isArray(D)) {
						const O = g ? D.length - 1 : 0;
						D = D[O];
					}
					D !== null && (a[M] = D);
				}
				for (const M in P) a[M] = P[M];
			}
		}
	}
	return a;
}
const a0 = e => (n, i) => {
		const s = C.useContext(Xa),
			a = C.useContext(Ga),
			u = () => cR(e, n, s, a);
		return i ? u() : of(u);
	},
	dR = a0({ scrapeMotionValuesFromProps: Lf, createRenderState: Nf }),
	hR = a0({ scrapeMotionValuesFromProps: Uv, createRenderState: s0 }),
	pR = Symbol.for('motionComponentSymbol');
function mR(e, n, i) {
	const s = C.useRef(i);
	C.useInsertionEffect(() => {
		s.current = i;
	});
	const a = C.useRef(null);
	return C.useCallback(
		u => {
			(u && e.onMount?.(u), n && (u ? n.mount(u) : n.unmount()));
			const c = s.current;
			if (typeof c == 'function')
				if (u) {
					const d = c(u);
					typeof d == 'function' && (a.current = d);
				} else a.current ? (a.current(), (a.current = null)) : c(u);
			else c && (c.current = u);
		},
		[n],
	);
}
const l0 = C.createContext({});
function di(e) {
	return e && typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current');
}
function gR(e, n, i, s, a, u) {
	const { visualElement: c } = C.useContext(Xa),
		d = C.useContext(n0),
		h = C.useContext(Ga),
		m = C.useContext(Of),
		g = m.reducedMotion,
		y = m.skipAnimations,
		x = C.useRef(null),
		v = C.useRef(!1);
	((s = s || d.renderer),
		!x.current &&
			s &&
			((x.current = s(e, {
				visualState: n,
				parent: c,
				props: i,
				presenceContext: h,
				blockInitialAnimation: h ? h.initial === !1 : !1,
				reducedMotionConfig: g,
				skipAnimations: y,
				isSVG: u,
			})),
			v.current && x.current && (x.current.manuallyAnimateOnMount = !0)));
	const S = x.current,
		P = C.useContext(l0);
	S && !S.projection && a && (S.type === 'html' || S.type === 'svg') && yR(x.current, i, a, P);
	const E = C.useRef(!1);
	C.useInsertionEffect(() => {
		S && E.current && S.update(i, h);
	});
	const b = i[gv],
		M = C.useRef(!!b && !window.MotionHandoffIsComplete?.(b) && window.MotionHasOptimisedAnimation?.(b));
	return (
		Dy(() => {
			((v.current = !0),
				S &&
					((E.current = !0),
					(window.MotionIsMounted = !0),
					S.updateFeatures(),
					S.scheduleRenderMicrotask(),
					M.current && S.animationState && S.animationState.animateChanges()));
		}),
		C.useEffect(() => {
			S &&
				(!M.current && S.animationState && S.animationState.animateChanges(),
				M.current &&
					(queueMicrotask(() => {
						window.MotionHandoffMarkAsComplete?.(b);
					}),
					(M.current = !1)),
				(S.enteringChildren = void 0));
		}),
		S
	);
}
function yR(e, n, i, s) {
	const { layoutId: a, layout: u, drag: c, dragConstraints: d, layoutScroll: h, layoutRoot: m, layoutCrossfade: g } = n;
	((e.projection = new i(e.latestValues, n['data-framer-portal-id'] ? void 0 : u0(e.parent))),
		e.projection.setOptions({
			layoutId: a,
			layout: u,
			alwaysMeasureLayout: !!c || (d && di(d)),
			visualElement: e,
			animationType: typeof u == 'string' ? u : 'both',
			initialPromotionConfig: s,
			crossfade: g,
			layoutScroll: h,
			layoutRoot: m,
		}));
}
function u0(e) {
	if (e) return e.options.allowProjection !== !1 ? e.projection : u0(e.parent);
}
function qu(e, { forwardMotionProps: n = !1, type: i } = {}, s, a) {
	s && Zb(s);
	const u = i ? i === 'svg' : jf(e),
		c = u ? hR : dR;
	function d(m, g) {
		let y;
		const x = { ...C.useContext(Of), ...m, layoutId: vR(m) },
			{ isStatic: v } = x,
			S = rR(m),
			P = c(m, v);
		if (!v && My) {
			wR();
			const E = xR(x);
			((y = E.MeasureLayout), (S.visualElement = gR(e, P, x, a, E.ProjectionNode, u)));
		}
		return j.jsxs(Xa.Provider, {
			value: S,
			children: [
				y && S.visualElement ? j.jsx(y, { visualElement: S.visualElement, ...x }) : null,
				uR(e, m, mR(P, S.visualElement, g), P, v, n, u),
			],
		});
	}
	d.displayName = `motion.${typeof e == 'string' ? e : `create(${e.displayName ?? e.name ?? ''})`}`;
	const h = C.forwardRef(d);
	return ((h[pR] = e), h);
}
function vR({ layoutId: e }) {
	const n = C.useContext(rf).id;
	return n && e !== void 0 ? n + '-' + e : e;
}
function wR(e, n) {
	C.useContext(n0).strict;
}
function xR(e) {
	const n = r0(),
		{ drag: i, layout: s } = n;
	if (!i && !s) return {};
	const a = { ...i, ...s };
	return {
		MeasureLayout: i?.isEnabled(e) || s?.isEnabled(e) ? a.MeasureLayout : void 0,
		ProjectionNode: a.ProjectionNode,
	};
}
function SR(e, n) {
	if (typeof Proxy > 'u') return qu;
	const i = new Map(),
		s = (u, c) => qu(u, c, e, n),
		a = (u, c) => s(u, c);
	return new Proxy(a, { get: (u, c) => (c === 'create' ? s : (i.has(c) || i.set(c, qu(c, void 0, e, n)), i.get(c))) });
}
const CR = (e, n) => ((n.isSVG ?? jf(e)) ? new Jk(n) : new Gk(n, { allowProjection: e !== C.Fragment }));
class ER extends pr {
	constructor(n) {
		(super(n), n.animationState || (n.animationState = ib(n)));
	}
	updateAnimationControlsSubscription() {
		const { animate: n } = this.node.getProps();
		Qa(n) && (this.unmountControls = n.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate: n } = this.node.getProps(),
			{ animate: i } = this.node.prevProps || {};
		n !== i && this.updateAnimationControlsSubscription();
	}
	unmount() {
		(this.node.animationState.reset(), this.unmountControls?.());
	}
}
let PR = 0;
class TR extends pr {
	constructor() {
		(super(...arguments), (this.id = PR++));
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: n, onExitComplete: i } = this.node.presenceContext,
			{ isPresent: s } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || n === s) return;
		const a = this.node.animationState.setActive('exit', !n);
		i &&
			!n &&
			a.then(() => {
				i(this.id);
			});
	}
	mount() {
		const { register: n, onExitComplete: i } = this.node.presenceContext || {};
		(i && i(this.id), n && (this.unmount = n(this.id)));
	}
	unmount() {}
}
const kR = { animation: { Feature: ER }, exit: { Feature: TR } };
function Uo(e) {
	return { point: { x: e.pageX, y: e.pageY } };
}
const bR = e => n => bf(n) && e(n, Uo(n));
function bo(e, n, i, s) {
	return Io(e, n, bR(i), s);
}
const c0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
	dg = (e, n) => Math.abs(e - n);
function RR(e, n) {
	const i = dg(e.x, n.x),
		s = dg(e.y, n.y);
	return Math.sqrt(i ** 2 + s ** 2);
}
const hg = new Set(['auto', 'scroll']);
class f0 {
	constructor(
		n,
		i,
		{
			transformPagePoint: s,
			contextWindow: a = window,
			dragSnapToOrigin: u = !1,
			distanceThreshold: c = 3,
			element: d,
		} = {},
	) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.contextWindow = window),
			(this.scrollPositions = new Map()),
			(this.removeScrollListeners = null),
			(this.onElementScroll = v => {
				this.handleScroll(v.target);
			}),
			(this.onWindowScroll = () => {
				this.handleScroll(window);
			}),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const v = Ju(this.lastMoveEventInfo, this.history),
					S = this.startEvent !== null,
					P = RR(v.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
				if (!S && !P) return;
				const { point: E } = v,
					{ timestamp: b } = et;
				this.history.push({ ...E, timestamp: b });
				const { onStart: M, onMove: D } = this.handlers;
				(S || (M && M(this.lastMoveEvent, v), (this.startEvent = this.lastMoveEvent)), D && D(this.lastMoveEvent, v));
			}),
			(this.handlePointerMove = (v, S) => {
				((this.lastMoveEvent = v),
					(this.lastMoveEventInfo = Zu(S, this.transformPagePoint)),
					Me.update(this.updatePoint, !0));
			}),
			(this.handlePointerUp = (v, S) => {
				this.end();
				const { onEnd: P, onSessionEnd: E, resumeAnimation: b } = this.handlers;
				if (((this.dragSnapToOrigin || !this.startEvent) && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
					return;
				const M = Ju(
					v.type === 'pointercancel' ? this.lastMoveEventInfo : Zu(S, this.transformPagePoint),
					this.history,
				);
				(this.startEvent && P && P(v, M), E && E(v, M));
			}),
			!bf(n))
		)
			return;
		((this.dragSnapToOrigin = u),
			(this.handlers = i),
			(this.transformPagePoint = s),
			(this.distanceThreshold = c),
			(this.contextWindow = a || window));
		const h = Uo(n),
			m = Zu(h, this.transformPagePoint),
			{ point: g } = m,
			{ timestamp: y } = et;
		this.history = [{ ...g, timestamp: y }];
		const { onSessionStart: x } = i;
		(x && x(n, Ju(m, this.history)),
			(this.removeListeners = Fo(
				bo(this.contextWindow, 'pointermove', this.handlePointerMove),
				bo(this.contextWindow, 'pointerup', this.handlePointerUp),
				bo(this.contextWindow, 'pointercancel', this.handlePointerUp),
			)),
			d && this.startScrollTracking(d));
	}
	startScrollTracking(n) {
		let i = n.parentElement;
		for (; i; ) {
			const s = getComputedStyle(i);
			((hg.has(s.overflowX) || hg.has(s.overflowY)) && this.scrollPositions.set(i, { x: i.scrollLeft, y: i.scrollTop }),
				(i = i.parentElement));
		}
		(this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
			window.addEventListener('scroll', this.onElementScroll, { capture: !0, passive: !0 }),
			window.addEventListener('scroll', this.onWindowScroll, { passive: !0 }),
			(this.removeScrollListeners = () => {
				(window.removeEventListener('scroll', this.onElementScroll, { capture: !0 }),
					window.removeEventListener('scroll', this.onWindowScroll));
			}));
	}
	handleScroll(n) {
		const i = this.scrollPositions.get(n);
		if (!i) return;
		const s = n === window,
			a = s ? { x: window.scrollX, y: window.scrollY } : { x: n.scrollLeft, y: n.scrollTop },
			u = { x: a.x - i.x, y: a.y - i.y };
		(u.x === 0 && u.y === 0) ||
			(s
				? this.lastMoveEventInfo && ((this.lastMoveEventInfo.point.x += u.x), (this.lastMoveEventInfo.point.y += u.y))
				: this.history.length > 0 && ((this.history[0].x -= u.x), (this.history[0].y -= u.y)),
			this.scrollPositions.set(n, a),
			Me.update(this.updatePoint, !0));
	}
	updateHandlers(n) {
		this.handlers = n;
	}
	end() {
		(this.removeListeners && this.removeListeners(),
			this.removeScrollListeners && this.removeScrollListeners(),
			this.scrollPositions.clear(),
			dr(this.updatePoint));
	}
}
function Zu(e, n) {
	return n ? { point: n(e.point) } : e;
}
function pg(e, n) {
	return { x: e.x - n.x, y: e.y - n.y };
}
function Ju({ point: e }, n) {
	return { point: e, delta: pg(e, d0(n)), offset: pg(e, AR(n)), velocity: MR(n, 0.1) };
}
function AR(e) {
	return e[0];
}
function d0(e) {
	return e[e.length - 1];
}
function MR(e, n) {
	if (e.length < 2) return { x: 0, y: 0 };
	let i = e.length - 1,
		s = null;
	const a = d0(e);
	for (; i >= 0 && ((s = e[i]), !(a.timestamp - s.timestamp > tn(n))); ) i--;
	if (!s) return { x: 0, y: 0 };
	s === e[0] && e.length > 2 && a.timestamp - s.timestamp > tn(n) * 2 && (s = e[1]);
	const u = Vt(a.timestamp - s.timestamp);
	if (u === 0) return { x: 0, y: 0 };
	const c = { x: (a.x - s.x) / u, y: (a.y - s.y) / u };
	return (c.x === 1 / 0 && (c.x = 0), c.y === 1 / 0 && (c.y = 0), c);
}
function DR(e, { min: n, max: i }, s) {
	return (
		n !== void 0 && e < n
			? (e = s ? _e(n, e, s.min) : Math.max(e, n))
			: i !== void 0 && e > i && (e = s ? _e(i, e, s.max) : Math.min(e, i)),
		e
	);
}
function mg(e, n, i) {
	return { min: n !== void 0 ? e.min + n : void 0, max: i !== void 0 ? e.max + i - (e.max - e.min) : void 0 };
}
function LR(e, { top: n, left: i, bottom: s, right: a }) {
	return { x: mg(e.x, i, a), y: mg(e.y, n, s) };
}
function gg(e, n) {
	let i = n.min - e.min,
		s = n.max - e.max;
	return (n.max - n.min < e.max - e.min && ([i, s] = [s, i]), { min: i, max: s });
}
function OR(e, n) {
	return { x: gg(e.x, n.x), y: gg(e.y, n.y) };
}
function NR(e, n) {
	let i = 0.5;
	const s = dt(e),
		a = dt(n);
	return (a > s ? (i = Lo(n.min, n.max - s, e.min)) : s > a && (i = Lo(e.min, e.max - a, n.min)), Sn(0, 1, i));
}
function jR(e, n) {
	const i = {};
	return (n.min !== void 0 && (i.min = n.min - e.min), n.max !== void 0 && (i.max = n.max - e.min), i);
}
const Vc = 0.35;
function IR(e = Vc) {
	return (e === !1 ? (e = 0) : e === !0 && (e = Vc), { x: yg(e, 'left', 'right'), y: yg(e, 'top', 'bottom') });
}
function yg(e, n, i) {
	return { min: vg(e, n), max: vg(e, i) };
}
function vg(e, n) {
	return typeof e == 'number' ? e : e[n] || 0;
}
const _R = new WeakMap();
class VR {
	constructor(n) {
		((this.openDragLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = Ge()),
			(this.latestPointerEvent = null),
			(this.latestPanInfo = null),
			(this.visualElement = n));
	}
	start(n, { snapToCursor: i = !1, distanceThreshold: s } = {}) {
		const { presenceContext: a } = this.visualElement;
		if (a && a.isPresent === !1) return;
		const u = y => {
				(i && this.snapToCursor(Uo(y).point), this.stopAnimation());
			},
			c = (y, x) => {
				const { drag: v, dragPropagation: S, onDragStart: P } = this.getProps();
				if (v && !S && (this.openDragLock && this.openDragLock(), (this.openDragLock = dk(v)), !this.openDragLock))
					return;
				((this.latestPointerEvent = y),
					(this.latestPanInfo = x),
					(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
					gn(b => {
						let M = this.getAxisMotionValue(b).get() || 0;
						if (wn.test(M)) {
							const { projection: D } = this.visualElement;
							if (D && D.layout) {
								const O = D.layout.layoutBox[b];
								O && (M = dt(O) * (parseFloat(M) / 100));
							}
						}
						this.originPoint[b] = M;
					}),
					P && Me.update(() => P(y, x), !1, !0),
					Mc(this.visualElement, 'transform'));
				const { animationState: E } = this.visualElement;
				E && E.setActive('whileDrag', !0);
			},
			d = (y, x) => {
				((this.latestPointerEvent = y), (this.latestPanInfo = x));
				const { dragPropagation: v, dragDirectionLock: S, onDirectionLock: P, onDrag: E } = this.getProps();
				if (!v && !this.openDragLock) return;
				const { offset: b } = x;
				if (S && this.currentDirection === null) {
					((this.currentDirection = zR(b)), this.currentDirection !== null && P && P(this.currentDirection));
					return;
				}
				(this.updateAxis('x', x.point, b),
					this.updateAxis('y', x.point, b),
					this.visualElement.render(),
					E && Me.update(() => E(y, x), !1, !0));
			},
			h = (y, x) => {
				((this.latestPointerEvent = y),
					(this.latestPanInfo = x),
					this.stop(y, x),
					(this.latestPointerEvent = null),
					(this.latestPanInfo = null));
			},
			m = () => {
				const { dragSnapToOrigin: y } = this.getProps();
				(y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
			},
			{ dragSnapToOrigin: g } = this.getProps();
		this.panSession = new f0(
			n,
			{ onSessionStart: u, onStart: c, onMove: d, onSessionEnd: h, resumeAnimation: m },
			{
				transformPagePoint: this.visualElement.getTransformPagePoint(),
				dragSnapToOrigin: g,
				distanceThreshold: s,
				contextWindow: c0(this.visualElement),
				element: this.visualElement.current,
			},
		);
	}
	stop(n, i) {
		const s = n || this.latestPointerEvent,
			a = i || this.latestPanInfo,
			u = this.isDragging;
		if ((this.cancel(), !u || !a || !s)) return;
		const { velocity: c } = a;
		this.startAnimation(c);
		const { onDragEnd: d } = this.getProps();
		d && Me.postRender(() => d(s, a));
	}
	cancel() {
		this.isDragging = !1;
		const { projection: n, animationState: i } = this.visualElement;
		(n && (n.isAnimationBlocked = !1), this.endPanSession());
		const { dragPropagation: s } = this.getProps();
		(!s && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)), i && i.setActive('whileDrag', !1));
	}
	endPanSession() {
		(this.panSession && this.panSession.end(), (this.panSession = void 0));
	}
	updateAxis(n, i, s) {
		const { drag: a } = this.getProps();
		if (!s || !fa(n, a, this.currentDirection)) return;
		const u = this.getAxisMotionValue(n);
		let c = this.originPoint[n] + s[n];
		(this.constraints && this.constraints[n] && (c = DR(c, this.constraints[n], this.elastic[n])), u.set(c));
	}
	resolveConstraints() {
		const { dragConstraints: n, dragElastic: i } = this.getProps(),
			s =
				this.visualElement.projection && !this.visualElement.projection.layout
					? this.visualElement.projection.measure(!1)
					: this.visualElement.projection?.layout,
			a = this.constraints;
		(n && di(n)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: n && s
				? (this.constraints = LR(s.layoutBox, n))
				: (this.constraints = !1),
			(this.elastic = IR(i)),
			a !== this.constraints &&
				!di(n) &&
				s &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				gn(u => {
					this.constraints !== !1 &&
						this.getAxisMotionValue(u) &&
						(this.constraints[u] = jR(s.layoutBox[u], this.constraints[u]));
				}));
	}
	resolveRefConstraints() {
		const { dragConstraints: n, onMeasureDragConstraints: i } = this.getProps();
		if (!n || !di(n)) return !1;
		const s = n.current,
			{ projection: a } = this.visualElement;
		if (!a || !a.layout) return !1;
		const u = Bk(s, a.root, this.visualElement.getTransformPagePoint());
		let c = OR(a.layout.layoutBox, u);
		if (i) {
			const d = i(Vk(c));
			((this.hasMutatedConstraints = !!d), d && (c = Ov(d)));
		}
		return c;
	}
	startAnimation(n) {
		const {
				drag: i,
				dragMomentum: s,
				dragElastic: a,
				dragTransition: u,
				dragSnapToOrigin: c,
				onDragTransitionEnd: d,
			} = this.getProps(),
			h = this.constraints || {},
			m = gn(g => {
				if (!fa(g, i, this.currentDirection)) return;
				let y = (h && h[g]) || {};
				c && (y = { min: 0, max: 0 });
				const x = a ? 200 : 1e6,
					v = a ? 40 : 1e7,
					S = {
						type: 'inertia',
						velocity: s ? n[g] : 0,
						bounceStiffness: x,
						bounceDamping: v,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...u,
						...y,
					};
				return this.startAxisValueAnimation(g, S);
			});
		return Promise.all(m).then(d);
	}
	startAxisValueAnimation(n, i) {
		const s = this.getAxisMotionValue(n);
		return (Mc(this.visualElement, n), s.start(Cf(n, s, 0, i, this.visualElement, !1)));
	}
	stopAnimation() {
		gn(n => this.getAxisMotionValue(n).stop());
	}
	getAxisMotionValue(n) {
		const i = `_drag${n.toUpperCase()}`,
			s = this.visualElement.getProps(),
			a = s[i];
		return a || this.visualElement.getValue(n, (s.initial ? s.initial[n] : void 0) || 0);
	}
	snapToCursor(n) {
		gn(i => {
			const { drag: s } = this.getProps();
			if (!fa(i, s, this.currentDirection)) return;
			const { projection: a } = this.visualElement,
				u = this.getAxisMotionValue(i);
			if (a && a.layout) {
				const { min: c, max: d } = a.layout.layoutBox[i],
					h = u.get() || 0;
				u.set(n[i] - _e(c, d, 0.5) + h);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: n, dragConstraints: i } = this.getProps(),
			{ projection: s } = this.visualElement;
		if (!di(i) || !s || !this.constraints) return;
		this.stopAnimation();
		const a = { x: 0, y: 0 };
		gn(c => {
			const d = this.getAxisMotionValue(c);
			if (d && this.constraints !== !1) {
				const h = d.get();
				a[c] = NR({ min: h, max: h }, this.constraints[c]);
			}
		});
		const { transformTemplate: u } = this.visualElement.getProps();
		((this.visualElement.current.style.transform = u ? u({}, '') : 'none'),
			s.root && s.root.updateScroll(),
			s.updateLayout(),
			(this.constraints = !1),
			this.resolveConstraints(),
			gn(c => {
				if (!fa(c, n, null)) return;
				const d = this.getAxisMotionValue(c),
					{ min: h, max: m } = this.constraints[c];
				d.set(_e(h, m, a[c]));
			}),
			this.visualElement.render());
	}
	addListeners() {
		if (!this.visualElement.current) return;
		_R.set(this.visualElement, this);
		const n = this.visualElement.current,
			i = bo(n, 'pointerdown', m => {
				const { drag: g, dragListener: y = !0 } = this.getProps(),
					x = m.target,
					v = x !== n && vk(x);
				g && y && !v && this.start(m);
			});
		let s;
		const a = () => {
				const { dragConstraints: m } = this.getProps();
				di(m) &&
					m.current &&
					((this.constraints = this.resolveRefConstraints()),
					s || (s = FR(n, m.current, () => this.scalePositionWithinConstraints())));
			},
			{ projection: u } = this.visualElement,
			c = u.addEventListener('measure', a);
		(u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()), Me.read(a));
		const d = Io(window, 'resize', () => this.scalePositionWithinConstraints()),
			h = u.addEventListener('didUpdate', ({ delta: m, hasLayoutChanged: g }) => {
				this.isDragging &&
					g &&
					(gn(y => {
						const x = this.getAxisMotionValue(y);
						x && ((this.originPoint[y] += m[y].translate), x.set(x.get() + m[y].translate));
					}),
					this.visualElement.render());
			});
		return () => {
			(d(), i(), c(), h && h(), s && s());
		};
	}
	getProps() {
		const n = this.visualElement.getProps(),
			{
				drag: i = !1,
				dragDirectionLock: s = !1,
				dragPropagation: a = !1,
				dragConstraints: u = !1,
				dragElastic: c = Vc,
				dragMomentum: d = !0,
			} = n;
		return {
			...n,
			drag: i,
			dragDirectionLock: s,
			dragPropagation: a,
			dragConstraints: u,
			dragElastic: c,
			dragMomentum: d,
		};
	}
}
function wg(e) {
	let n = !0;
	return () => {
		if (n) {
			n = !1;
			return;
		}
		e();
	};
}
function FR(e, n, i) {
	const s = km(e, wg(i)),
		a = km(n, wg(i));
	return () => {
		(s(), a());
	};
}
function fa(e, n, i) {
	return (n === !0 || n === e) && (i === null || i === e);
}
function zR(e, n = 10) {
	let i = null;
	return (Math.abs(e.y) > n ? (i = 'y') : Math.abs(e.x) > n && (i = 'x'), i);
}
class BR extends pr {
	constructor(n) {
		(super(n), (this.removeGroupControls = Ft), (this.removeListeners = Ft), (this.controls = new VR(n)));
	}
	mount() {
		const { dragControls: n } = this.node.getProps();
		(n && (this.removeGroupControls = n.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || Ft));
	}
	update() {
		const { dragControls: n } = this.node.getProps(),
			{ dragControls: i } = this.node.prevProps || {};
		n !== i && (this.removeGroupControls(), n && (this.removeGroupControls = n.subscribe(this.controls)));
	}
	unmount() {
		(this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession());
	}
}
const ec = e => (n, i) => {
	e && Me.update(() => e(n, i), !1, !0);
};
class UR extends pr {
	constructor() {
		(super(...arguments), (this.removePointerDownListener = Ft));
	}
	onPointerDown(n) {
		this.session = new f0(n, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: c0(this.node),
		});
	}
	createPanHandlers() {
		const { onPanSessionStart: n, onPanStart: i, onPan: s, onPanEnd: a } = this.node.getProps();
		return {
			onSessionStart: ec(n),
			onStart: ec(i),
			onMove: ec(s),
			onEnd: (u, c) => {
				(delete this.session, a && Me.postRender(() => a(u, c)));
			},
		};
	}
	mount() {
		this.removePointerDownListener = bo(this.node.current, 'pointerdown', n => this.onPointerDown(n));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		(this.removePointerDownListener(), this.session && this.session.end());
	}
}
let tc = !1;
class $R extends C.Component {
	componentDidMount() {
		const { visualElement: n, layoutGroup: i, switchLayoutGroup: s, layoutId: a } = this.props,
			{ projection: u } = n;
		(u &&
			(i.group && i.group.add(u),
			s && s.register && a && s.register(u),
			tc && u.root.didUpdate(),
			u.addEventListener('animationComplete', () => {
				this.safeToRemove();
			}),
			u.setOptions({
				...u.options,
				layoutDependency: this.props.layoutDependency,
				onExitComplete: () => this.safeToRemove(),
			})),
			(wa.hasEverUpdated = !0));
	}
	getSnapshotBeforeUpdate(n) {
		const { layoutDependency: i, visualElement: s, drag: a, isPresent: u } = this.props,
			{ projection: c } = s;
		return (
			c &&
				((c.isPresent = u),
				n.layoutDependency !== i && c.setOptions({ ...c.options, layoutDependency: i }),
				(tc = !0),
				a || n.layoutDependency !== i || i === void 0 || n.isPresent !== u ? c.willUpdate() : this.safeToRemove(),
				n.isPresent !== u &&
					(u
						? c.promote()
						: c.relegate() ||
							Me.postRender(() => {
								const d = c.getStack();
								(!d || !d.members.length) && this.safeToRemove();
							}))),
			null
		);
	}
	componentDidUpdate() {
		const { projection: n } = this.props.visualElement;
		n &&
			(n.root.didUpdate(),
			kf.postRender(() => {
				!n.currentAnimation && n.isLead() && this.safeToRemove();
			}));
	}
	componentWillUnmount() {
		const { visualElement: n, layoutGroup: i, switchLayoutGroup: s } = this.props,
			{ projection: a } = n;
		((tc = !0),
			a && (a.scheduleCheckAfterUnmount(), i && i.group && i.group.remove(a), s && s.deregister && s.deregister(a)));
	}
	safeToRemove() {
		const { safeToRemove: n } = this.props;
		n && n();
	}
	render() {
		return null;
	}
}
function h0(e) {
	const [n, i] = t0(),
		s = C.useContext(rf);
	return j.jsx($R, { ...e, layoutGroup: s, switchLayoutGroup: C.useContext(l0), isPresent: n, safeToRemove: i });
}
const WR = { pan: { Feature: UR }, drag: { Feature: BR, ProjectionNode: e0, MeasureLayout: h0 } };
function xg(e, n, i) {
	const { props: s } = e;
	e.animationState && s.whileHover && e.animationState.setActive('whileHover', i === 'Start');
	const a = 'onHover' + i,
		u = s[a];
	u && Me.postRender(() => u(n, Uo(n)));
}
class HR extends pr {
	mount() {
		const { current: n } = this.node;
		n && (this.unmount = pk(n, (i, s) => (xg(this.node, s, 'Start'), a => xg(this.node, a, 'End'))));
	}
	unmount() {}
}
class KR extends pr {
	constructor() {
		(super(...arguments), (this.isActive = !1));
	}
	onFocus() {
		let n = !1;
		try {
			n = this.node.current.matches(':focus-visible');
		} catch {
			n = !0;
		}
		!n || !this.node.animationState || (this.node.animationState.setActive('whileFocus', !0), (this.isActive = !0));
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive('whileFocus', !1), (this.isActive = !1));
	}
	mount() {
		this.unmount = Fo(
			Io(this.node.current, 'focus', () => this.onFocus()),
			Io(this.node.current, 'blur', () => this.onBlur()),
		);
	}
	unmount() {}
}
function Sg(e, n, i) {
	const { props: s } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && s.whileTap && e.animationState.setActive('whileTap', i === 'Start');
	const a = 'onTap' + (i === 'End' ? '' : i),
		u = s[a];
	u && Me.postRender(() => u(n, Uo(n)));
}
class GR extends pr {
	mount() {
		const { current: n } = this.node;
		if (!n) return;
		const { globalTapTarget: i, propagate: s } = this.node.props;
		this.unmount = xk(
			n,
			(a, u) => (Sg(this.node, u, 'Start'), (c, { success: d }) => Sg(this.node, c, d ? 'End' : 'Cancel')),
			{ useGlobalTarget: i, stopPropagation: s?.tap === !1 },
		);
	}
	unmount() {}
}
const Fc = new WeakMap(),
	nc = new WeakMap(),
	QR = e => {
		const n = Fc.get(e.target);
		n && n(e);
	},
	YR = e => {
		e.forEach(QR);
	};
function XR({ root: e, ...n }) {
	const i = e || document;
	nc.has(i) || nc.set(i, {});
	const s = nc.get(i),
		a = JSON.stringify(n);
	return (s[a] || (s[a] = new IntersectionObserver(YR, { root: e, ...n })), s[a]);
}
function qR(e, n, i) {
	const s = XR(n);
	return (
		Fc.set(e, i),
		s.observe(e),
		() => {
			(Fc.delete(e), s.unobserve(e));
		}
	);
}
const ZR = { some: 0, all: 1 };
class JR extends pr {
	constructor() {
		(super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
	}
	startObserver() {
		this.unmount();
		const { viewport: n = {} } = this.node.getProps(),
			{ root: i, margin: s, amount: a = 'some', once: u } = n,
			c = { root: i ? i.current : void 0, rootMargin: s, threshold: typeof a == 'number' ? a : ZR[a] },
			d = h => {
				const { isIntersecting: m } = h;
				if (this.isInView === m || ((this.isInView = m), u && !m && this.hasEnteredView)) return;
				(m && (this.hasEnteredView = !0),
					this.node.animationState && this.node.animationState.setActive('whileInView', m));
				const { onViewportEnter: g, onViewportLeave: y } = this.node.getProps(),
					x = m ? g : y;
				x && x(h);
			};
		return qR(this.node.current, c, d);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > 'u') return;
		const { props: n, prevProps: i } = this.node;
		['amount', 'margin', 'root'].some(e2(n, i)) && this.startObserver();
	}
	unmount() {}
}
function e2({ viewport: e = {} }, { viewport: n = {} } = {}) {
	return i => e[i] !== n[i];
}
const t2 = { inView: { Feature: JR }, tap: { Feature: GR }, focus: { Feature: KR }, hover: { Feature: HR } },
	n2 = { layout: { ProjectionNode: e0, MeasureLayout: h0 } },
	r2 = { ...kR, ...t2, ...WR, ...n2 },
	en = SR(r2, CR);
const i2 = e => e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
	p0 = (...e) =>
		e
			.filter((n, i, s) => !!n && n.trim() !== '' && s.indexOf(n) === i)
			.join(' ')
			.trim();
var o2 = {
	xmlns: 'http://www.w3.org/2000/svg',
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 2,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
};
const s2 = C.forwardRef(
	(
		{
			color: e = 'currentColor',
			size: n = 24,
			strokeWidth: i = 2,
			absoluteStrokeWidth: s,
			className: a = '',
			children: u,
			iconNode: c,
			...d
		},
		h,
	) =>
		C.createElement(
			'svg',
			{
				ref: h,
				...o2,
				width: n,
				height: n,
				stroke: e,
				strokeWidth: s ? (Number(i) * 24) / Number(n) : i,
				className: p0('lucide', a),
				...d,
			},
			[...c.map(([m, g]) => C.createElement(m, g)), ...(Array.isArray(u) ? u : [u])],
		),
);
const zt = (e, n) => {
	const i = C.forwardRef(({ className: s, ...a }, u) =>
		C.createElement(s2, { ref: u, iconNode: n, className: p0(`lucide-${i2(e)}`, s), ...a }),
	);
	return ((i.displayName = `${e}`), i);
};
const a2 = zt('Github', [
	[
		'path',
		{
			d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
			key: 'tonef',
		},
	],
	['path', { d: 'M9 18c-4.51 2-5-2-7-2', key: '9comsn' }],
]);
const l2 = zt('Globe', [
	['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
	['path', { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20', key: '13o1zl' }],
	['path', { d: 'M2 12h20', key: '9i4pu4' }],
]);
const u2 = zt('Instagram', [
	['rect', { width: '20', height: '20', x: '2', y: '2', rx: '5', ry: '5', key: '2e1cvw' }],
	['path', { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', key: '9exkf1' }],
	['line', { x1: '17.5', x2: '17.51', y1: '6.5', y2: '6.5', key: 'r4j83e' }],
]);
const c2 = zt('Mail', [
	['rect', { width: '20', height: '16', x: '2', y: '4', rx: '2', key: '18n3k1' }],
	['path', { d: 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7', key: '1ocrg3' }],
]);
const f2 = zt('MapPin', [
	[
		'path',
		{
			d: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0',
			key: '1r0f0z',
		},
	],
	['circle', { cx: '12', cy: '10', r: '3', key: 'ilqhr7' }],
]);
const d2 = zt('Menu', [
	['line', { x1: '4', x2: '20', y1: '12', y2: '12', key: '1e0a9i' }],
	['line', { x1: '4', x2: '20', y1: '6', y2: '6', key: '1owob3' }],
	['line', { x1: '4', x2: '20', y1: '18', y2: '18', key: 'yk5zj1' }],
]);
const h2 = zt('MessageCircle', [['path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z', key: 'vv11sd' }]]);
const p2 = zt('Moon', [['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }]]);
const m2 = zt('Phone', [
	[
		'path',
		{
			d: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
			key: 'foiqr5',
		},
	],
]);
const g2 = zt('Send', [
	[
		'path',
		{
			d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
			key: '1ffxy3',
		},
	],
	['path', { d: 'm21.854 2.147-10.94 10.939', key: '12cjpa' }],
]);
const y2 = zt('Sun', [
	['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
	['path', { d: 'M12 2v2', key: 'tus03m' }],
	['path', { d: 'M12 20v2', key: '1lh1kg' }],
	['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
	['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
	['path', { d: 'M2 12h2', key: '1t8f8n' }],
	['path', { d: 'M20 12h2', key: '1q8mjw' }],
	['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
	['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
]);
const v2 = zt('X', [
	['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
	['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
]);
function w2({ className: e }) {
	const { theme: n, setTheme: i } = Tg(),
		[s, a] = C.useState(!1);
	if (
		(C.useEffect(() => {
			a(!0);
		}, []),
		!s)
	)
		return null;
	const u = n === 'dark',
		c = () => {
			i(u ? 'light' : 'dark');
		};
	return j.jsx(en.button, {
		onClick: c,
		whileHover: { scale: 1.1 },
		whileTap: { scale: 0.9 },
		className: xi(
			'flex h-10 w-10 items-center justify-center rounded-full',
			'bg-secondary border border-border',
			'text-foreground hover:text-primary',
			'transition-colors duration-300',
			e,
		),
		'aria-label': `Switch to ${u ? 'light' : 'dark'} mode`,
		children: j.jsx(en.div, {
			initial: !1,
			animate: { rotate: u ? 0 : 180 },
			transition: { duration: 0.3 },
			children: u ? j.jsx(p2, { className: 'h-5 w-5' }) : j.jsx(y2, { className: 'h-5 w-5' }),
		}),
	});
}
const Cg = [
	{ href: '#about', label: 'About', hoverColor: 'hover:text-[hsl(var(--glow-cyan))]' },
	{ href: '#skills', label: 'Skills', hoverColor: 'hover:text-[hsl(var(--glow-pink))]' },
	{ href: '#projects', label: 'Projects', hoverColor: 'hover:text-[hsl(var(--glow-yellow))]' },
	{ href: '#code', label: 'Code', hoverColor: 'hover:text-[hsl(142,76%,50%)]' },
	{ href: '#contact', label: 'Contact', hoverColor: 'hover:text-[hsl(var(--glow-blue))]' },
];
function x2() {
	const [e, n] = C.useState(!1),
		[i, s] = C.useState(!1);
	return (
		C.useEffect(() => {
			const a = () => {
				n(window.scrollY >= 600);
			};
			return (window.addEventListener('scroll', a), () => window.removeEventListener('scroll', a));
		}, []),
		j.jsxs(en.header, {
			initial: { y: -100, opacity: 0 },
			animate: { y: e ? 0 : -100, opacity: e ? 1 : 0 },
			transition: { duration: 0.3 },
			className: xi('fixed top-0 left-0 right-0 z-50', 'bg-background/80 backdrop-blur-lg border-b border-border'),
			children: [
				j.jsx('nav', {
					className: 'container mx-auto px-4',
					children: j.jsxs('div', {
						className: 'flex h-16 items-center justify-between',
						children: [
							j.jsx('a', {
								href: '#',
								className: 'font-display text-2xl text-foreground hover:text-primary transition-colors',
								children: "Hello I'm O'lmas",
							}),
							j.jsx('ul', {
								className: 'hidden md:flex items-center gap-8',
								children: Cg.map(a =>
									j.jsx(
										'li',
										{
											children: j.jsx('a', {
												href: a.href,
												className: xi(
													'relative text-lg font-semibold uppercase tracking-wide',
													'text-foreground transition-colors duration-300',
													a.hoverColor,
													"after:content-[''] after:absolute after:w-full after:h-0.5",
													'after:bg-current after:bottom-0 after:left-0',
													'after:scale-x-0 after:origin-right after:transition-transform',
													'hover:after:scale-x-100 hover:after:origin-left',
												),
												children: a.label,
											}),
										},
										a.href,
									),
								),
							}),
							j.jsxs('div', {
								className: 'flex items-center gap-4',
								children: [
									j.jsx(w2, {}),
									j.jsx('button', {
										onClick: () => s(!i),
										className: 'md:hidden text-foreground hover:text-primary transition-colors',
										children: i ? j.jsx(v2, { className: 'h-6 w-6' }) : j.jsx(d2, { className: 'h-6 w-6' }),
									}),
								],
							}),
						],
					}),
				}),
				j.jsx(Xb, {
					children:
						i &&
						j.jsx(en.div, {
							initial: { opacity: 0, height: 0 },
							animate: { opacity: 1, height: '100vh' },
							exit: { opacity: 0, height: 0 },
							className: 'md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-lg z-40',
							children: j.jsxs('nav', {
								className: 'container mx-auto px-4 py-8',
								children: [
									j.jsx('ul', {
										className: 'flex flex-col items-center gap-8',
										children: Cg.map((a, u) =>
											j.jsx(
												en.li,
												{
													initial: { opacity: 0, y: 20 },
													animate: { opacity: 1, y: 0 },
													transition: { delay: u * 0.1 },
													children: j.jsx('a', {
														href: a.href,
														onClick: () => s(!1),
														className: xi(
															'text-2xl font-bold uppercase tracking-widest text-foreground transition-colors',
															a.hoverColor,
														),
														children: a.label,
													}),
												},
												a.href,
											),
										),
									}),
									j.jsx('div', {
										className:
											'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none',
										children: j.jsx('span', {
											className: 'text-[150px] font-bold uppercase stroke-text opacity-20',
											children: "O'lmas",
										}),
									}),
								],
							}),
						}),
				}),
			],
		})
	);
}
const S2 = ({ text: e, duration: n, className: i }) => {
		const s = C.useRef(null),
			[a, u] = C.useState({ x: 0.5, y: 0.5 }),
			[c, d] = C.useState(!1),
			[h, m] = C.useState({ cx: '50%', cy: '50%' });
		return (
			C.useEffect(() => {
				const g = s.current;
				if (!g) return;
				(() => {
					const x = g.getBoundingClientRect(),
						v = x.width || 1,
						S = x.height || 1,
						P = ((a.x - x.left) / v) * 100,
						E = ((a.y - x.top) / S) * 100,
						b = Math.min(100, Math.max(0, P || 50)),
						M = Math.min(100, Math.max(0, E || 50));
					m({ cx: `${b}%`, cy: `${M}%` });
				})();
			}, [a]),
			j.jsxs('svg', {
				ref: s,
				width: '100%',
				height: '100%',
				viewBox: '0 0 300 100',
				xmlns: 'http://www.w3.org/2000/svg',
				onMouseEnter: () => d(!0),
				onMouseLeave: () => d(!1),
				onMouseMove: g => u({ x: g.clientX, y: g.clientY }),
				className: xi('select-none uppercase cursor-pointer', i),
				children: [
					j.jsxs('defs', {
						children: [
							j.jsxs('filter', {
								id: 'glow',
								children: [
									j.jsx('feGaussianBlur', { stdDeviation: '6', result: 'coloredBlur' }),
									j.jsxs('feMerge', {
										children: [
											j.jsx('feMergeNode', { in: 'coloredBlur' }),
											j.jsx('feMergeNode', { in: 'SourceGraphic' }),
										],
									}),
								],
							}),
							j.jsxs('radialGradient', {
								id: 'textGradient',
								gradientUnits: 'userSpaceOnUse',
								cx: h.cx,
								cy: h.cy,
								r: '40%',
								children: [
									j.jsx('stop', { offset: '0%', stopColor: 'hsl(var(--primary))', stopOpacity: '1' }),
									j.jsx('stop', { offset: '40%', stopColor: 'hsl(var(--primary))', stopOpacity: '0.6' }),
									j.jsx('stop', { offset: '70%', stopColor: 'hsl(var(--primary))', stopOpacity: '0.2' }),
									j.jsx('stop', { offset: '100%', stopColor: 'hsl(var(--primary))', stopOpacity: '0' }),
								],
							}),
							j.jsxs(en.radialGradient, {
								id: 'revealMask',
								gradientUnits: 'userSpaceOnUse',
								r: '20%',
								initial: { cx: '50%', cy: '50%' },
								animate: h,
								transition: { duration: n ?? 0.15, ease: 'easeOut' },
								children: [
									j.jsx('stop', { offset: '0%', stopColor: 'white' }),
									j.jsx('stop', { offset: '100%', stopColor: 'black' }),
								],
							}),
							j.jsx('mask', {
								id: 'textMask',
								children: j.jsx('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#revealMask)' }),
							}),
						],
					}),
					j.jsx('text', {
						x: '50%',
						y: '50%',
						textAnchor: 'middle',
						dominantBaseline: 'middle',
						strokeWidth: '0.3',
						className: 'fill-transparent stroke-muted-foreground/30 font-sans text-7xl font-bold',
						style: { opacity: c ? 0.7 : 0 },
						children: e,
					}),
					j.jsx(en.text, {
						x: '50%',
						y: '50%',
						textAnchor: 'middle',
						dominantBaseline: 'middle',
						strokeWidth: '0.3',
						className: 'fill-transparent stroke-primary font-sans text-7xl font-extrabold',
						initial: { strokeDashoffset: 1e3, strokeDasharray: 1e3 },
						animate: { strokeDashoffset: 0 },
						transition: { duration: 4, ease: 'easeInOut' },
						children: e,
					}),
					j.jsx('text', {
						x: '50%',
						y: '50%',
						textAnchor: 'middle',
						dominantBaseline: 'middle',
						fill: 'url(#textGradient)',
						stroke: 'none',
						mask: 'url(#textMask)',
						filter: 'url(#glow)',
						className: 'font-sans text-7xl font-extrabold',
						children: e,
					}),
				],
			})
		);
	},
	C2 = () =>
		j.jsx('div', {
			className: 'absolute inset-0 z-0',
			style: {
				background: 'radial-gradient(125% 125% at 50% 10%, hsl(var(--card) / 0.6) 50%, hsl(var(--primary) / 0.2) 100%)',
			},
		}),
	E2 = [
		{
			title: 'About Me',
			links: [
				{ label: 'My Story', href: '#about' },
				{ label: 'Skills', href: '#skills' },
				{ label: 'Projects', href: '#projects' },
				{ label: 'Resume', href: '#' },
			],
		},
		{
			title: 'Helpful Links',
			links: [
				{ label: 'FAQs', href: '#' },
				{ label: 'Support', href: '#' },
				{ label: 'Live Chat', href: '#', pulse: !0 },
			],
		},
	],
	P2 = [
		{
			icon: j.jsx(c2, { size: 18, className: 'text-primary' }),
			text: 'ulmasjon@example.com',
			href: 'mailto:ulmasjon@example.com',
		},
		{ icon: j.jsx(m2, { size: 18, className: 'text-primary' }), text: '+998 90 123 45 67', href: 'tel:+998901234567' },
		{ icon: j.jsx(f2, { size: 18, className: 'text-primary' }), text: "Toshkent, O'zbekiston" },
	],
	T2 = [
		{ icon: j.jsx(a2, { size: 20 }), label: 'GitHub', href: '#' },
		{ icon: j.jsx(u2, { size: 20 }), label: 'Instagram', href: '#' },
		{ icon: j.jsx(g2, { size: 20 }), label: 'Telegram', href: '#' },
		{ icon: j.jsx(h2, { size: 20 }), label: 'VK', href: '#' },
		{ icon: j.jsx(l2, { size: 20 }), label: 'Website', href: '#' },
	];
function k2() {
	return j.jsxs('footer', {
		id: 'contact',
		className: 'relative overflow-hidden rounded-3xl mx-4 md:mx-8 mb-8 bg-card/50',
		children: [
			j.jsxs('div', {
				className: 'relative z-10 max-w-7xl mx-auto p-8 md:p-14',
				children: [
					j.jsxs('div', {
						className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12',
						children: [
							j.jsxs(en.div, {
								initial: { opacity: 0, y: 30 },
								whileInView: { opacity: 1, y: 0 },
								viewport: { once: !0 },
								transition: { duration: 0.5 },
								className: 'flex flex-col space-y-4',
								children: [
									j.jsxs('div', {
										className: 'flex items-center space-x-2',
										children: [
											j.jsx('span', { className: 'text-primary text-3xl', children: '❤' }),
											j.jsx('span', { className: 'text-foreground text-3xl font-bold', children: "O'lmas" }),
										],
									}),
									j.jsx('p', {
										className: 'text-sm text-muted-foreground leading-relaxed',
										children:
											'Front-end dasturchi va UI/UX dizayner. Chiroyli va funksional veb ilovalar yaratishga ishtiyoqmand.',
									}),
								],
							}),
							E2.map((e, n) =>
								j.jsxs(
									en.div,
									{
										initial: { opacity: 0, y: 30 },
										whileInView: { opacity: 1, y: 0 },
										viewport: { once: !0 },
										transition: { duration: 0.5, delay: 0.1 * (n + 1) },
										children: [
											j.jsx('h4', { className: 'text-foreground text-lg font-semibold mb-6', children: e.title }),
											j.jsx('ul', {
												className: 'space-y-3',
												children: e.links.map(i =>
													j.jsxs(
														'li',
														{
															className: 'relative',
															children: [
																j.jsx('a', {
																	href: i.href,
																	className: 'text-muted-foreground hover:text-primary transition-colors',
																	children: i.label,
																}),
																i.pulse &&
																	j.jsx('span', {
																		className: 'absolute -top-1 -right-3 w-2 h-2 rounded-full bg-primary animate-pulse',
																	}),
															],
														},
														i.label,
													),
												),
											}),
										],
									},
									e.title,
								),
							),
							j.jsxs(en.div, {
								initial: { opacity: 0, y: 30 },
								whileInView: { opacity: 1, y: 0 },
								viewport: { once: !0 },
								transition: { duration: 0.5, delay: 0.3 },
								children: [
									j.jsx('h4', { className: 'text-foreground text-lg font-semibold mb-6', children: "Bog'lanish" }),
									j.jsx('ul', {
										className: 'space-y-4',
										children: P2.map((e, n) =>
											j.jsxs(
												'li',
												{
													className: 'flex items-center space-x-3',
													children: [
														e.icon,
														e.href
															? j.jsx('a', {
																	href: e.href,
																	className: 'text-muted-foreground hover:text-primary transition-colors',
																	children: e.text,
																})
															: j.jsx('span', {
																	className: 'text-muted-foreground hover:text-primary transition-colors',
																	children: e.text,
																}),
													],
												},
												n,
											),
										),
									}),
								],
							}),
						],
					}),
					j.jsx('hr', { className: 'border-t border-border my-8' }),
					j.jsxs('div', {
						className: 'flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0',
						children: [
							j.jsx('div', {
								className: 'flex space-x-6',
								children: T2.map(({ icon: e, label: n, href: i }) =>
									j.jsx(
										en.a,
										{
											href: i,
											'aria-label': n,
											whileHover: { scale: 1.2, color: 'hsl(var(--primary))' },
											className: 'text-muted-foreground hover:text-primary transition-colors',
											children: e,
										},
										n,
									),
								),
							}),
							j.jsxs('p', {
								className: 'text-muted-foreground text-center md:text-left',
								children: ['© ', new Date().getFullYear(), " O'lmasjon. Barcha huquqlar himoyalangan."],
							}),
						],
					}),
				],
			}),
			j.jsx('div', {
				className: 'hidden lg:flex h-[30rem] -mt-[100px] -mb-[120px]',
				children: j.jsx(S2, { text: "O'lmas", className: 'z-50' }),
			}),
			j.jsx(C2, {}),
		],
	});
}
const b2 = C.lazy(() => _r(() => import('./HeroSection-ZBF1hCi7.js'), __vite__mapDeps([0, 1]))),
	R2 = C.lazy(() => _r(() => import('./AboutSection-BJkR91gP.js'), __vite__mapDeps([2, 3, 1]))),
	A2 = C.lazy(() => _r(() => import('./SkillsSection-CTbekC9u.js'), __vite__mapDeps([4, 3, 1]))),
	M2 = C.lazy(() => _r(() => import('./ProjectsSection-Fsm-DSbt.js'), __vite__mapDeps([5, 3, 1]))),
	D2 = C.lazy(() => _r(() => import('./CodeSection-Barw1Ra2.js'), __vite__mapDeps([6, 3, 1]))),
	L2 = C.lazy(() => _r(() => import('./ContactForm-B8uYGIDY.js'), __vite__mapDeps([7, 3]))),
	O2 = C.lazy(() => _r(() => import('./MauseTrail-LmhOUG7y.js'), __vite__mapDeps([8, 9]))),
	N2 = () =>
		j.jsxs('div', {
			className: 'min-h-screen bg-background text-foreground overflow-x-hidden cursor-none',
			children: [
				j.jsx(x2, {}),
				j.jsx('main', {
					children: j.jsxs(C.Suspense, {
						fallback: j.jsx('div', {
							className: 'h-screen flex items-center justify-center text-lg',
							children: 'Loading...',
						}),
						children: [
							j.jsx(b2, {}),
							j.jsx(O2, {}),
							j.jsx(R2, {}),
							j.jsx(A2, {}),
							j.jsx(M2, {}),
							j.jsx(D2, {}),
							j.jsx(L2, {}),
						],
					}),
				}),
				j.jsx(k2, {}),
			],
		}),
	j2 = () => {
		const e = Ry();
		return (
			C.useEffect(() => {
				console.error('404 Error: User attempted to access non-existent route:', e.pathname);
			}, [e.pathname]),
			j.jsx('div', {
				className: 'flex min-h-screen items-center justify-center bg-muted',
				children: j.jsxs('div', {
					className: 'text-center',
					children: [
						j.jsx('h1', { className: 'mb-4 text-4xl font-bold', children: '404' }),
						j.jsx('p', { className: 'mb-4 text-xl text-muted-foreground', children: 'Oops! Page not found' }),
						j.jsx('a', {
							href: '/',
							className: 'text-primary underline hover:text-primary/90',
							children: 'Return to Home',
						}),
					],
				}),
			})
		);
	},
	I2 = new yE(),
	_2 = () =>
		j.jsx(wE, {
			client: I2,
			children: j.jsx(aP, {
				children: j.jsxs($C, {
					children: [
						j.jsx(Jx, { richColors: !0, position: 'top-right' }),
						j.jsx(sP, {
							future: { v7_startTransition: !0, v7_relativeSplatPath: !0 },
							children: j.jsxs(rP, {
								children: [
									j.jsx(mc, { path: '/', element: j.jsx(N2, {}) }),
									j.jsx(mc, { path: '*', element: j.jsx(j2, {}) }),
								],
							}),
						}),
					],
				}),
			}),
		});
gx.createRoot(document.getElementById('root')).render(j.jsx(_2, {}));
export {
	Xb as A,
	xi as a,
	Ev as b,
	cC as c,
	zt as d,
	SR as e,
	kR as f,
	a2 as G,
	t2 as g,
	CR as h,
	u2 as I,
	Eg as i,
	j,
	n0 as L,
	Zb as l,
	h2 as M,
	en as m,
	Y as R,
	C as r,
	g2 as S,
	w2 as T,
	V2 as u,
	v2 as X,
};
