import{r as y,j as t}from"./index-BYuuGU3h.js";import{S as M}from"./section-title-Ce0X5g9k.js";import{m as b,L as S,d as k}from"./features-animation-5VP2Ri0g.js";function E(){const w=y.useRef(null),h=y.useRef([]),x=y.useRef();return y.useEffect(()=>{const r=w.current;if(!r)return;const s=r.getContext("2d");if(!s)return;let e=0,o=0;const c=.5,a=150,m=60,d=()=>{const i=r.parentElement;if(i){e=r.width=i.offsetWidth,o=r.height=i.offsetHeight,h.current=[];for(let n=0;n<m;n++)h.current.push({x:Math.random()*e,y:Math.random()*o,vx:(Math.random()-.5)*c,vy:(Math.random()-.5)*c})}};d(),window.addEventListener("resize",d);const p=(i,n)=>{const l=i.x-n.x,u=i.y-n.y;return Math.sqrt(l*l+u*u)},f=()=>{const i=h.current;for(let n=0;n<i.length-1;n++)for(let l=n+1;l<i.length;l++){const u=p(i[n],i[l]);if(u<=a){const N=1-u/a;s.strokeStyle=`hsla(177, 100%, 37%, ${N})`,s.lineWidth=Math.pow(1-u/a,1.5)*2,s.beginPath(),s.moveTo(i[n].x,i[n].y),s.lineTo(i[l].x,i[l].y),s.stroke()}}},g=()=>{const i=h.current;for(const n of i)s.beginPath(),s.arc(n.x,n.y,2,0,Math.PI*2),s.fillStyle="hsl(177, 100%, 47%)",s.fill()},v=()=>{const i=h.current;for(const n of i)n.x+=n.vx,n.y+=n.vy,(n.x<0||n.x>e)&&(n.vx*=-1),(n.y<0||n.y>o)&&(n.vy*=-1)},j=()=>{s.clearRect(0,0,e,o),f(),g(),v(),x.current=requestAnimationFrame(j)};return j(),()=>{window.removeEventListener("resize",d),x.current&&cancelAnimationFrame(x.current)}},[]),t.jsx("canvas",{ref:w,className:"absolute inset-0 w-full h-full"})}const D=`// Get the canvas element and set up the 2D context
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

animate();`,C=w=>w.split(`
`).map((x,r)=>{const s=[];let e=x;for(;e.length>0;){const o=e.match(/^(\/\/.*)/);if(o){s.push({text:o[1],type:"comment"}),e=e.slice(o[1].length);continue}const c=e.match(/^('[^']*'|"[^"]*"|`[^`]*`)/);if(c){s.push({text:c[1],type:"string"}),e=e.slice(c[1].length);continue}const a=e.match(/^(const|let|var|function|if|else|for|while|return|new|this|true|false|null|undefined)\b/);if(a){s.push({text:a[1],type:"keyword"}),e=e.slice(a[1].length);continue}const m=e.match(/^(document|window|console|Math|Array|Object|String|Number|querySelector|querySelectorAll|getElementById|getContext|addEventListener|requestAnimationFrame|clearRect|beginPath|moveTo|lineTo|stroke|push|random|sqrt|pow)\b/);if(m){s.push({text:m[1],type:"builtin"}),e=e.slice(m[1].length);continue}const d=e.match(/^(\d+\.?\d*)/);if(d){s.push({text:d[1],type:"number"}),e=e.slice(d[1].length);continue}const p=e.match(/^([+\-*/%=<>!&|?:]+)/);if(p){s.push({text:p[1],type:"operator"}),e=e.slice(p[1].length);continue}const f=e.match(/^([(){}[\];,.])/);if(f){s.push({text:f[1],type:"punctuation"}),e=e.slice(f[1].length);continue}const g=e.match(/^(\w+)/);if(g){s.push({text:g[1],type:"identifier"}),e=e.slice(g[1].length);continue}const v=e.match(/^(\s+)/);if(v){s.push({text:v[1],type:"space"}),e=e.slice(v[1].length);continue}s.push({text:e[0],type:"text"}),e=e.slice(1)}return t.jsx(S,{features:k,children:t.jsxs("div",{className:"hover:bg-foreground/5 transition-colors flex",children:[t.jsx("span",{className:"text-muted-foreground/50 w-8 flex-shrink-0 select-none text-xs text-right pr-4",children:String(r+1).padStart(2,"0")}),t.jsx("span",{className:"flex-1",children:s.map((o,c)=>{let a="";switch(o.type){case"comment":a="text-muted-foreground italic";break;case"string":a="text-[hsl(var(--glow-yellow))]";break;case"keyword":a="text-[hsl(var(--glow-pink))] font-semibold";break;case"builtin":a="text-[hsl(var(--glow-blue))]";break;case"number":a="text-[hsl(142,76%,60%)]";break;case"operator":a="text-[hsl(var(--glow-cyan))]";break;case"punctuation":a="text-muted-foreground";break;case"identifier":a="text-foreground";break;default:a="text-foreground"}return t.jsx("span",{className:a,children:o.text},c)})})]},r)})});function I(){return t.jsx("section",{id:"code",className:"py-20 md:py-32 bg-gradient-to-b from-background via-muted/5 to-background",children:t.jsx("div",{className:"container mx-auto px-4",children:t.jsxs("div",{className:"flex flex-col md:flex-row gap-8 md:gap-16",children:[t.jsx(M,{number:"04",title:"Code"}),t.jsxs("div",{className:"flex-1",children:[t.jsxs(b.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-12",children:[t.jsx("h3",{className:"font-display text-3xl md:text-4xl text-foreground mb-4",children:"Creative Coding"}),t.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Interactive particle animation with canvas. Watch the code come to life with real-time visualization."})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 gap-6 md:gap-8",children:[t.jsxs(b.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6},className:"relative min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-border bg-card/30",children:[t.jsx(E,{}),t.jsx("div",{className:"absolute bottom-4 left-4 glass px-4 py-2 rounded-lg",children:t.jsx("span",{className:"text-sm text-primary font-medium",children:"Live Canvas Animation"})})]}),t.jsxs(b.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"relative min-h-[400px] lg:min-h-[500px] max-h-[500px] rounded-2xl overflow-hidden border border-border bg-card/50",children:[t.jsxs("div",{className:"sticky top-0 flex items-center gap-2 px-4 py-3 bg-card border-b border-border z-10",children:[t.jsxs("div",{className:"flex gap-1.5",children:[t.jsx("span",{className:"w-3 h-3 rounded-full bg-destructive/80"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[hsl(var(--glow-yellow))]/80"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[hsl(142,76%,50%)]/80"})]}),t.jsx("span",{className:"text-xs text-muted-foreground ml-2",children:"particle-canvas.js"})]}),t.jsx("div",{className:"overflow-y-auto h-[calc(100%-48px)] p-4 scrollbar-thin",children:t.jsx("pre",{className:"text-sm leading-relaxed font-mono",children:t.jsx("code",{children:C(D)})})})]})]})]})]})})})}export{I as CodeSection,I as default};
