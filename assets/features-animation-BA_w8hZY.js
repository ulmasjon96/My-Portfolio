import { g as f, l as i, L as l, h as L, e as m, r as s, j as u, f as x } from './index-DSexRWl0.js';
function y({ children: n, features: e, strict: d = !1 }) {
	const [, c] = s.useState(!a(e)),
		t = s.useRef(void 0);
	if (!a(e)) {
		const { renderer: r, ...o } = e;
		((t.current = r), i(o));
	}
	return (
		s.useEffect(() => {
			a(e) &&
				e().then(({ renderer: r, ...o }) => {
					(i(o), (t.current = r), c(!0));
				});
		}, []),
		u.jsx(l.Provider, { value: { renderer: t.current, strict: d }, children: n })
	);
}
function a(n) {
	return typeof n == 'function';
}
const E = m(),
	h = { renderer: L, ...x, ...f };
export { h as d, y as L, E as m };
