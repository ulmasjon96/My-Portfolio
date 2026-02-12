import { r as E, j as s } from './index-DSexRWl0.js';
const L = () => (
	E.useEffect(() => {
		const r = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
			t = document.querySelectorAll('.circle'),
			x = document.querySelectorAll('input'),
			c = [...document.querySelectorAll('textarea'), ...x],
			a = () => {
				t.forEach(e => e.classList.add('circle-thin'));
			},
			i = () => {
				t.forEach(e => e.classList.remove('circle-thin'));
			};
		(c.forEach(e => {
			(e.addEventListener('mouseover', a), e.addEventListener('mouseout', i));
		}),
			t.forEach(e => {
				((e.x = r.x), (e.y = r.y));
			}));
		const l = e => {
			((r.x = e.clientX),
				(r.y = e.clientY),
				t.forEach(o => {
					o.classList.remove('circle-hidden');
				}));
		};
		window.addEventListener('mousemove', l);
		let m;
		const d = () => {
			let e = r.x,
				o = r.y;
			(t.forEach((n, u) => {
				const v = (t.length - u) / t.length;
				((n.style.transform = `translate3d(${e - 12}px, ${o - 12}px, 0) scale(${v})`), (n.x = e), (n.y = o));
				const h = t[u + 1] || t[0];
				((e += (h.x - e) * 0.35), (o += (h.y - o) * 0.35));
			}),
				(m = requestAnimationFrame(d)));
		};
		return (
			d(),
			() => {
				(cancelAnimationFrame(m),
					window.removeEventListener('mousemove', l),
					c.forEach(e => {
						(e.removeEventListener('mouseover', a), e.removeEventListener('mouseout', i));
					}));
			}
		);
	}, []),
	s.jsx(s.Fragment, {
		children: Array.from({ length: 40 }).map((r, t) => s.jsx('div', { className: 'circle circle-hidden' }, t)),
	})
);
export { L as default, L as MouseTrail };
