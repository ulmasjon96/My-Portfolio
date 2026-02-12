import{j as e,m as u,c as w,r as l,a as j,G as p,T as v,M as N,I as k,S as I}from"./index-CL-aliam.js";import{L as T,d as S,m as a}from"./features-animation-BRZYRdJo.js";const F="/My-Portfolio/assets/hero-bg-cX0l4YhF.webp",D="/My-Portfolio/assets/heroSection-DVxjq-e9.webp";function g({href:r,icon:t,label:n,platform:s,delay:o=0}){return e.jsxs(e.Fragment,{children:[e.jsx(u.a,{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":n,initial:{opacity:0,y:-15},animate:{opacity:1,y:0},transition:{duration:.4,delay:o},whileTap:{scale:.9},className:w("social-icon",s,"flex h-12 w-12 items-center justify-center rounded-full","border-2 border-transparent bg-[#0f0f0f] text-white","transition-all duration-300 relative overflow-hidden"),children:t}),e.jsx("style",{children:`
        .social-icon {
          background:
            linear-gradient(#0f0f0f, #0f0f0f) padding-box,
            linear-gradient(
              120deg,
              #ff00cc,
              #00c6ff,
              #f6c90e,
              #ff00cc
            ) border-box;
          background-size: 300% 300%;
        }

        .github:hover {
          color: #f6c90e;
          background:
            linear-gradient(#0f0f0f, #0f0f0f) padding-box,
            linear-gradient(120deg, #f6c90e, #d17a00) border-box;
          animation: glow-github 2s infinite ease-in-out, borderFlow 6s linear infinite;
          transform: scale(1.2) rotate(10deg);
        }

        .telegram:hover {
          color: #00c6ff;
          background:
            linear-gradient(#0f0f0f, #0f0f0f) padding-box,
            linear-gradient(120deg, #00c6ff, #0077ff) border-box;
          animation: glow-telegram 2s infinite ease-in-out, borderFlow 6s linear infinite;
          transform: scale(1.2) rotate(10deg);
        }

        .vk:hover {
          color: #63a4ff;
          background:
            linear-gradient(#0f0f0f, #0f0f0f) padding-box,
            linear-gradient(120deg, #63a4ff, #83d0ff) border-box;
          animation: glow-vk 2s infinite ease-in-out, borderFlow 6s linear infinite;
          transform: scale(1.2) rotate(10deg);
        }

        .instagram:hover {
          color: #dd2a7b;
          background:
            linear-gradient(#0f0f0f, #0f0f0f) padding-box,
            linear-gradient(120deg, #dd2a7b, #feda77, #8134af) border-box;
          animation: glow-instagram 2s infinite ease-in-out, borderFlow 6s linear infinite;
          transform: scale(1.2) rotate(10deg);
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }

        @keyframes glow-github {
          0%,100% { box-shadow: 0 0 15px #f6c90e; }
          50% { box-shadow: 0 0 35px #f6c90e; }
        }

        @keyframes glow-telegram {
          0%,100% { box-shadow: 0 0 15px #00c6ff; }
          50% { box-shadow: 0 0 35px #00c6ff; }
        }

        @keyframes glow-vk {
          0%,100% { box-shadow: 0 0 15px #63a4ff; }
          50% { box-shadow: 0 0 35px #63a4ff; }
        }

        @keyframes glow-instagram {
          0%,100% { box-shadow: 0 0 15px #dd2a7b; }
          50% { box-shadow: 0 0 35px #dd2a7b; }
        }
      `})]})}function z({phrases:r,className:t,speed:n=100,deleteSpeed:s=50,pauseTime:o=2e3}){const[c,b]=l.useState(0),[i,f]=l.useState(""),[d,m]=l.useState(!1);return l.useEffect(()=>{const x=r[c],h=setTimeout(()=>{d?i.length>0?f(i.slice(0,-1)):(m(!1),b(y=>(y+1)%r.length)):i.length<x.length?f(x.slice(0,i.length+1)):setTimeout(()=>m(!0),o)},d?s:n);return()=>clearTimeout(h)},[i,d,c,r,n,s,o]),e.jsxs("span",{className:j("inline-block",t),children:[i,e.jsx(u.span,{animate:{opacity:[1,0,1]},transition:{duration:.8,repeat:1/0},className:"ml-1 inline-block w-[3px] h-[1em] bg-primary align-middle"})]})}const H=[{href:"https://github.com",icon:e.jsx(p,{className:"h-6 w-6"}),label:"GitHub",platform:"github"},{href:"https://vk.com",icon:e.jsx(N,{className:"h-6 w-6"}),label:"VK",platform:"vk"},{href:"https://instagram.com",icon:e.jsx(k,{className:"h-6 w-6"}),label:"Instagram",platform:"instagram"},{href:"https://t.me",icon:e.jsx(I,{className:"h-6 w-6"}),label:"Telegram",platform:"telegram"}],M=["Ismatov O'lmasjon","Front-end Developer","UI/UX Designer","Web 3.0 Enthusiast"];function E(){return e.jsxs(T,{features:S,children:[" ",e.jsxs("section",{className:"relative min-h-screen flex flex-col overflow-hidden bg-background",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30",style:{backgroundImage:`url(${F})`}}),e.jsx("div",{className:" inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background"}),e.jsx("div",{className:"absolute inset-0 opacity-10",children:e.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,backgroundSize:"50px 50px"}})}),e.jsxs(a.header,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.6,delay:1.5},className:"relative z-10 flex items-center justify-between p-4 md:p-8",children:[e.jsx(g,{href:"https://github.com",icon:e.jsx(p,{className:"h-6 w-6"}),label:"GitHub",platform:"github",delay:1.6}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"flex gap-3",children:H.slice(1).map((r,t)=>e.jsx(g,{...r,delay:1.7+t*.1},r.label))}),e.jsx(v,{className:"ml-4"})]})]}),e.jsx("div",{className:"relative z-10 flex-1   mt-16",children:e.jsx("div",{className:"w-full max-w-[89rem] mx-auto",children:e.jsxs("div",{className:`\r
              flex\r
							justify-between\r
\r
							flex-col\r
							lg:flex-row\r
\r
              gap-8 lg:gap-12\r
              items-center\r
              w-full\r
            `,children:[e.jsx(a.div,{initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.4},className:`\r
              flex justify-center\r
              order-first lg:order-last\r
              lg:justify-self-end\r
            `,children:e.jsxs("div",{className:"relative ",children:[e.jsx(a.div,{animate:{rotate:360},transition:{duration:25,repeat:1/0,ease:"linear"},className:" -inset-6 rounded-full border-2 border-dashed border-primary/20"}),e.jsx(a.div,{animate:{rotate:-360},transition:{duration:20,repeat:1/0,ease:"linear"},className:" -inset-3 rounded-full border border-primary/30"}),e.jsx("div",{className:"absolute inset-0 rounded-full bg-primary/20 blur-3xl"}),e.jsx(a.div,{transition:{duration:4,repeat:1/0,ease:"easeInOut"},className:`\r
              relative\r
              flex items-center justify-center\r
              w-[300px] h-[300px]\r
              md:w-[360px] md:h-[360px]\r
              lg:w-[460px] lg:h-[460px]\r
              rounded-full\r
              bg-gradient-to-br from-primary/30 via-primary/10 to-transparent\r
              backdrop-blur-sm\r
              border border-primary/20\r
              shadow-2xl shadow-primary/20\r
              overflow-hidden\r
            `,children:e.jsx("img",{src:D,alt:"Developer workspace",className:"w-[100%] h-[100%] object-cover rounded-2xl shadow-xl"})}),e.jsx(a.div,{animate:{y:[-10,10,-10],x:[-5,5,-5]},transition:{duration:3,repeat:1/0,ease:"easeInOut"},className:"absolute -top-4 -right-4 w-4 h-4 rounded-full bg-primary/60"}),e.jsx(a.div,{animate:{y:[10,-10,10],x:[5,-5,5]},transition:{duration:4,repeat:1/0,ease:"easeInOut",delay:.5},className:"absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[hsl(var(--glow-pink))]/60"})]})}),e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1},className:`\r
          order-last lg:order-first\r
          lg:justify-self-start\r
          text-center lg:text-left\r
        `,children:[e.jsx(a.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},className:"font-elegant text-4xl md:text-5xl lg:text-6xl mb-4 text-glow",children:"Hello everyone, I'm".split("").map((r,t)=>e.jsx(a.span,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.1,delay:.6+t*.04},children:r},t))}),e.jsx("div",{className:"mb-8 overflow-hidden",children:e.jsx("h2",{className:"typewriter-text text-6xl  text-foreground text-reflect text-glow-lg md:text-7xl h-[2em] font-bold uppercase tracking-wider text-glow-lg",children:e.jsx(z,{phrases:M,speed:100})})}),e.jsx(a.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.5,delay:2},className:"flex justify-center lg:justify-start",children:e.jsx(a.a,{href:"#contact",whileHover:{scale:1.05},whileTap:{scale:.95},className:"px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold",children:"Contact Me"})})]})]})})}),e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:2.5},className:"relative z-10 flex justify-center pb-8",children:e.jsxs(a.div,{animate:{y:[0,10,0]},transition:{duration:1.5,repeat:1/0},className:"flex flex-col items-center gap-2 text-muted-foreground",children:[e.jsx("span",{className:"text-sm",children:"Scroll Down"}),e.jsx("div",{className:"w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2",children:e.jsx(a.div,{animate:{y:[0,12,0],opacity:[1,0,1]},transition:{duration:1.5,repeat:1/0},className:"w-1.5 h-3 rounded-full bg-primary"})})]})})]})]})}export{E as HeroSection,E as default};
