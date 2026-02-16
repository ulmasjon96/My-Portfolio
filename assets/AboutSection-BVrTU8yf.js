import { r as m, j as e } from './radix-CFyMAmnS.js';
import { a as u } from './index-DY3dzlHZ.js';
import { u as p, m as c, L as b, d as h, a as d } from './motion-mDcWmv0I.js';
import { S as y } from './section-title-JfikkDL4.js';
import { u as j } from './i18n-eAXfqVEm.js';
import './icons-DL-dbEzw.js';
const v = {
	up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
	down: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0 } },
	left: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
	right: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
	scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
};
function n({ children: t, className: a, delay: l = 0, direction: s = 'up' }) {
	const r = m.useRef(null),
		o = p(r, { once: !0, margin: '-100px' });
	return e.jsx(c.div, {
		ref: r,
		initial: 'hidden',
		animate: o ? 'visible' : 'hidden',
		variants: v[s],
		transition: { duration: 0.6, delay: l, ease: [0.25, 0.1, 0.25, 1] },
		className: u(a),
		children: t,
	});
}
function i({ children: t, className: a, delay: l = 0 }) {
	const s = m.useRef(null),
		r = p(s, { once: !0, margin: '-100px' }),
		o = t.split(' ');
	return e.jsx(c.span, {
		ref: s,
		className: u('inline-block', a),
		children: o.map((f, x) =>
			e.jsxs(
				c.span,
				{
					className: 'inline-block',
					initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
					animate: r ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(10px)' },
					transition: { duration: 0.4, delay: l + x * 0.05, ease: 'easeOut' },
					children: [f, ' '],
				},
				x,
			),
		),
	});
}
const g = '/My-Portfolio/assets/about-1-B-aLhjeX.webp',
	N = '/My-Portfolio/assets/about-2-CPvLfvCf.webp';
function V() {
	const { t } = j();
	return e.jsx(b, {
		features: h,
		children: e.jsx('section', {
			id: 'about',
			className: 'py-20 md:py-32',
			children: e.jsx('div', {
				className: 'container mx-auto px-4',
				children: e.jsxs('div', {
					className: 'flex flex-col md:flex-row gap-8 md:gap-16',
					children: [
						e.jsx(y, { number: t('about.number'), title: t('about.title') }),
						e.jsxs('div', {
							className: 'flex-1 space-y-12',
							children: [
								e.jsxs(n, {
									delay: 0.2,
									className: 'flex flex-col md:flex-row gap-8 items-start',
									children: [
										e.jsx(d.div, {
											whileHover: { scale: 1.05, rotate: 2 },
											className: 'w-48 h-60 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-primary/20',
											children: e.jsx('div', {
												className:
													'w-full h-full bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center',
												children: e.jsx('img', { src: g, alt: '' }),
											}),
										}),
										e.jsxs('div', {
											className: 'flex-1',
											children: [
												e.jsx('p', {
													className: 'text-lg md:text-xl text-muted-foreground leading-relaxed',
													children: e.jsx(i, { delay: 0.3, children: t('about.p1') }),
												}),
												e.jsx('p', {
													className: 'text-lg md:text-xl text-muted-foreground leading-relaxed mt-4',
													children: e.jsx(i, { delay: 0.4, children: t('about.p2') }),
												}),
												e.jsx('p', {
													className: 'text-lg md:text-xl text-muted-foreground leading-relaxed mt-4',
													children: e.jsx(i, { delay: 0.5, children: t('about.p3') }),
												}),
											],
										}),
									],
								}),
								e.jsxs(n, {
									delay: 0.4,
									direction: 'left',
									className: 'flex flex-col md:flex-row-reverse gap-8 items-start',
									children: [
										e.jsx(d.div, {
											whileHover: { scale: 1.05, rotate: -2 },
											className: 'w-48 h-60 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-primary/20',
											children: e.jsx('div', {
												className:
													'w-full h-full bg-gradient-to-br from-muted to-primary/20 flex items-center justify-center',
												children: e.jsx('img', { src: N, className: 'w-full h-full object-cover', alt: '' }),
											}),
										}),
										e.jsxs('div', {
											className: 'flex-1',
											children: [
												e.jsx('p', {
													className: 'text-lg md:text-xl text-muted-foreground leading-relaxed',
													children: e.jsx(i, { delay: 0.5, children: t('about.p4') }),
												}),
												e.jsx('p', {
													className: 'text-lg md:text-xl text-muted-foreground leading-relaxed mt-4',
													children: e.jsx(i, { delay: 0.6, children: t('about.p5') }),
												}),
											],
										}),
									],
								}),
								e.jsx(n, {
									delay: 0.6,
									direction: 'scale',
									children: e.jsx('div', {
										className: 'grid grid-cols-2 md:grid-cols-4 gap-6 mt-12',
										children: [
											{ value: '2+', label: t('about.stat.experience') },
											{ value: '15+', label: t('about.stat.projects') },
											{ value: '10+', label: t('about.stat.technologies') },
											{ value: '100%', label: t('about.stat.dedication') },
										].map((a, l) =>
											e.jsxs(
												d.div,
												{
													initial: { opacity: 0, y: 20 },
													whileInView: { opacity: 1, y: 0 },
													viewport: { once: !0 },
													transition: { delay: 0.7 + l * 0.1 },
													whileHover: { scale: 1.05, y: -5 },
													className:
														'text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all',
													children: [
														e.jsx('div', {
															className: 'text-4xl md:text-5xl font-bold text-primary mb-2',
															children: a.value,
														}),
														e.jsx('div', { className: 'text-sm text-muted-foreground', children: a.label }),
													],
												},
												a.label,
											),
										),
									}),
								}),
							],
						}),
					],
				}),
			}),
		}),
	});
}
export { V as AboutSection, V as default };
