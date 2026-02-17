import{r as w,j as t}from"./radix-1h7f9VDF.js";import{S as M}from"./section-title-BOOdDvYx.js";import{u as S}from"./i18n-Blv0dhYd.js";import{L as k,d as E,a as b}from"./motion-eszmwozl.js";import"./index-Ctzd2sW5.js";function D(){const r=w.useRef(null),u=w.useRef([]),p=w.useRef();return w.useEffect(()=>{const c=r.current;if(!c)return;const s=c.getContext("2d");if(!s)return;let e=0,o=0;const l=.5,a=150,x=60,h=()=>{const i=c.parentElement;if(i){e=c.width=i.offsetWidth,o=c.height=i.offsetHeight,u.current=[];for(let n=0;n<x;n++)u.current.push({x:Math.random()*e,y:Math.random()*o,vx:(Math.random()-.5)*l,vy:(Math.random()-.5)*l})}};h(),window.addEventListener("resize",h);const f=(i,n)=>{const d=i.x-n.x,m=i.y-n.y;return Math.sqrt(d*d+m*m)},g=()=>{const i=u.current;for(let n=0;n<i.length-1;n++)for(let d=n+1;d<i.length;d++){const m=f(i[n],i[d]);if(m<=a){const N=1-m/a;s.strokeStyle=`hsla(177, 100%, 37%, ${N})`,s.lineWidth=Math.pow(1-m/a,1.5)*2,s.beginPath(),s.moveTo(i[n].x,i[n].y),s.lineTo(i[d].x,i[d].y),s.stroke()}}},y=()=>{const i=u.current;for(const n of i)s.beginPath(),s.arc(n.x,n.y,2,0,Math.PI*2),s.fillStyle="hsl(177, 100%, 47%)",s.fill()},v=()=>{const i=u.current;for(const n of i)n.x+=n.vx,n.y+=n.vy,(n.x<0||n.x>e)&&(n.vx*=-1),(n.y<0||n.y>o)&&(n.vy*=-1)},j=()=>{s.clearRect(0,0,e,o),g(),y(),v(),p.current=requestAnimationFrame(j)};return j(),()=>{window.removeEventListener("resize",h),p.current&&cancelAnimationFrame(p.current)}},[]),t.jsx("canvas",{ref:r,className:"absolute inset-0 w-full h-full"})}const T=`// Get the canvas element and set up the 2D context
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Define a function to resize the canvas
let width, height;
function resizeCanvas() {
  const wrapper = document.querySelector('.canvas-wrapper');
  width = canvas.width = wrapper.offsetWidth;
  height = canvas.height = wrapper.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Speed, number of points, and connection distance
let SPEED = 1;
const DIST = 200;
const number = 80;
let points = [];

// Generate random points (position and velocity)
for (let i = 0; i < number; i++) {
  points.push({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED
  });
}

// Calculate distance between two points
function getDist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Draw lines between close points
function drawLines() {
  for (let i = 0; i < number - 1; i++) {
    for (let j = i + 1; j < number; j++) {
      const dist = getDist(points[i], points[j]);
      if (dist <= DIST) {
        const alpha = 1 - dist / DIST;
        context.strokeStyle = \`rgba(0, 187, 184, \${alpha})\`;
        context.lineWidth = Math.pow(1 - dist / DIST, 1.5);
        context.beginPath();
        context.moveTo(points[i].x, points[i].y);
        context.lineTo(points[j].x, points[j].y);
        context.stroke();
      }
    }
  }
}

// Animate the canvas
function animate() {
  context.clearRect(0, 0, width, height);
  drawLines();
  // Draw and update points...
  requestAnimationFrame(animate);
}

animate();`,C=r=>r.split(`
`).map((p,c)=>{const s=[];let e=p;for(;e.length>0;){const o=e.match(/^(\/\/.*)/);if(o){s.push({text:o[1],type:"comment"}),e=e.slice(o[1].length);continue}const l=e.match(/^('[^']*'|"[^"]*"|`[^`]*`)/);if(l){s.push({text:l[1],type:"string"}),e=e.slice(l[1].length);continue}const a=e.match(/^(const|let|var|function|if|else|for|while|return|new|this|true|false|null|undefined)\b/);if(a){s.push({text:a[1],type:"keyword"}),e=e.slice(a[1].length);continue}const x=e.match(/^(document|window|console|Math|Array|Object|String|Number|querySelector|querySelectorAll|getElementById|getContext|addEventListener|requestAnimationFrame|clearRect|beginPath|moveTo|lineTo|stroke|push|random|sqrt|pow)\b/);if(x){s.push({text:x[1],type:"builtin"}),e=e.slice(x[1].length);continue}const h=e.match(/^(\d+\.?\d*)/);if(h){s.push({text:h[1],type:"number"}),e=e.slice(h[1].length);continue}const f=e.match(/^([+\-*/%=<>!&|?:]+)/);if(f){s.push({text:f[1],type:"operator"}),e=e.slice(f[1].length);continue}const g=e.match(/^([(){}[\];,.])/);if(g){s.push({text:g[1],type:"punctuation"}),e=e.slice(g[1].length);continue}const y=e.match(/^(\w+)/);if(y){s.push({text:y[1],type:"identifier"}),e=e.slice(y[1].length);continue}const v=e.match(/^(\s+)/);if(v){s.push({text:v[1],type:"space"}),e=e.slice(v[1].length);continue}s.push({text:e[0],type:"text"}),e=e.slice(1)}return t.jsxs("div",{className:"hover:bg-foreground/5 transition-colors flex",children:[t.jsx("span",{className:"text-muted-foreground/50 w-8 flex-shrink-0 select-none text-xs text-right pr-4",children:String(c+1).padStart(2,"0")}),t.jsx("span",{className:"flex-1",children:s.map((o,l)=>{let a="";switch(o.type){case"comment":a="text-muted-foreground italic";break;case"string":a="text-[hsl(var(--glow-yellow))]";break;case"keyword":a="text-[hsl(var(--glow-pink))] font-semibold";break;case"builtin":a="text-[hsl(var(--glow-blue))]";break;case"number":a="text-[hsl(142,76%,60%)]";break;case"operator":a="text-[hsl(var(--glow-cyan))]";break;case"punctuation":a="text-muted-foreground";break;default:a="text-foreground"}return t.jsx("span",{className:a,children:o.text},`token-${c}-${l}`)})})]},`line-${c}`)});function L(){const{t:r}=S();return t.jsx(k,{features:E,children:t.jsx("section",{id:"code",className:"py-20 md:py-32 bg-gradient-to-b from-background via-muted/5 to-background",children:t.jsx("div",{className:"container mx-auto px-4",children:t.jsxs("div",{className:"flex flex-col md:flex-row gap-8 md:gap-16",children:[t.jsx(M,{number:r("code.number"),title:r("code.title")}),t.jsxs("div",{className:"flex-1",children:[t.jsxs(b.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-12",children:[t.jsx("h3",{className:"font-display text-3xl md:text-4xl text-foreground mb-4",children:r("code.heading")}),t.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:r("code.description")})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 md:gap-8",children:[t.jsxs(b.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"relative min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-border bg-card/30",children:[t.jsx(D,{}),t.jsx("div",{className:"absolute bottom-4 left-4 glass px-4 py-2 rounded-lg",children:t.jsx("span",{className:"text-sm text-primary font-medium",children:r("code.liveCanvas")})})]}),t.jsxs(b.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"relative min-h-[400px] lg:min-h-[500px] max-h-[500px] rounded-2xl overflow-hidden border border-border bg-card/50",children:[t.jsxs("div",{className:"sticky top-0 flex items-center gap-2 px-4 py-3 bg-card border-b border-border z-10",children:[t.jsxs("div",{className:"flex gap-1.5",children:[t.jsx("span",{className:"w-3 h-3 rounded-full bg-destructive/80"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[hsl(var(--glow-yellow))]/80"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[hsl(142,76%,50%)]/80"})]}),t.jsx("span",{className:"text-xs text-muted-foreground ml-2",children:"particle-canvas.js"})]}),t.jsx("div",{className:"overflow-y-auto h-[calc(100%-48px)] p-4 scrollbar-thin",children:t.jsx("pre",{className:"text-sm leading-relaxed font-mono",children:t.jsx("code",{children:t.jsx(t.Fragment,{children:C(T)})})})})]})]})]})]})})})})}export{L as CodeSection,L as default};
