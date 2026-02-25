const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cq85Tfvu.js","assets/radix-1h7f9VDF.js","assets/style-DpsRipQV.css"])))=>i.map(i=>d[i]);
import{_ as w,b as h}from"./index-B5_ljKA8.js";import{r as t,j as e,R as V}from"./radix-1h7f9VDF.js";import{S as q}from"./section-title-Ct8mmINw.js";import{u as L}from"./i18n-Blv0dhYd.js";import"./motion-eszmwozl.js";const S="/My-Portfolio/assets/formBg-D9m73Ati.jpg";function k({label:n,name:r,type:a="text",placeholder:c}){const u=t.useId(),l=`${r}-${u}`,o=`${l}-label`,i=`${l}-hint`;return e.jsxs("div",{className:"relative w-full group my-10",children:[e.jsx("input",{id:l,name:r,type:a,required:!0,"aria-required":"true","aria-labelledby":o,"aria-describedby":i,autoComplete:r==="name"?"name":r==="email"?"email":r==="username"?"username":r==="company"?"organization":void 0,inputMode:a==="email"?"email":"text",enterKeyHint:a==="email"?"send":"next",spellCheck:a==="email"?"false":"true",placeholder:c,className:`\r
        peer w-full h-[50px] px-5 pr-14\r
        rounded-md\r
        bg-[#000c24b3]\r
        text-cyan-300\r
        text-lg tracking-wider\r
        outline-none\r
        border border-cyan-400/30\r
        backdrop-blur-md\r
        shadow-[0_0_15px_rgba(0,140,255,0.25),inset_0_0_10px_rgba(0,0,0,0.8)]\r
        transition-all duration-300\r
        focus:bg-[#00162ed0]\r
        focus:border-cyan-300\r
        focus:shadow-[0_0_25px_rgba(0,200,255,0.6),inset_0_0_12px_rgba(0,0,0,0.9)]\r
        placeholder:text-cyan-500/40\r
        `}),e.jsx("label",{id:o,htmlFor:l,className:`\r
        absolute -top-6 left-0\r
        text-xs tracking-[2px] uppercase\r
        text-cyan-400/70\r
        transition-all duration-300\r
        peer-focus:text-cyan-300\r
        peer-focus:-translate-y-1\r
        cursor-text\r
        `,children:n}),e.jsxs("span",{id:i,className:"sr-only",children:[n," field"]}),e.jsx("span",{className:`\r
        absolute right-4 top-1/2 -translate-y-1/2\r
        w-2.5 h-2.5 rounded-full\r
        bg-cyan-400/40\r
        shadow-[0_0_10px_rgba(0,180,255,0.6)]\r
        transition-all duration-300\r
        peer-focus:bg-cyan-300\r
        peer-focus:scale-125\r
      `}),e.jsx("span",{className:`\r
\r
         pointer-events-none\r
         absolute left-0 top-0 w-full h-[2px]\r
         opacity-0\r
         bg-gradient-to-r from-transparent via-white        to-transparent\r
         blur-[1px]\r
         group-focus-within:opacity-100\r
         group-focus-within:animate-scan\r
       `}),e.jsx("span",{className:`\r
        absolute inset-0 rounded-md\r
        bg-cyan-400/10\r
        opacity-0\r
        transition-opacity duration-300\r
        peer-focus:opacity-100\r
        pointer-events-none\r
      `}),e.jsx("span",{className:`\r
        absolute bottom-0 left-0 h-[2px] w-full\r
        origin-left scale-x-0\r
        bg-gradient-to-r from-cyan-300 to-cyan-500/40\r
        transition-transform duration-300\r
        group-focus-within:scale-x-100\r
      `}),e.jsx("div",{className:"absolute bottom-2 left-5 right-14 h-1 flex gap-[2px] opacity-0 peer-focus:opacity-100",children:Array.from({length:18}).map((I,x)=>e.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${x*.12}s`}},x))})]})}const T=V.forwardRef((n,r)=>e.jsx("input",{...n,ref:r,id:"phone",name:"phone",type:"tel",autoComplete:"tel",inputMode:"tel",className:n.className}));T.displayName="PhoneField";const z=t.lazy(()=>w(()=>import("./index-Cq85Tfvu.js"),__vite__mapDeps([0,1])));function F({value:n,onChange:r,label:a,placeholder:c}){const[u,l]=t.useState(!1);return t.useEffect(()=>{w(()=>Promise.resolve({}),__vite__mapDeps([2])),l(!0)},[]),e.jsxs("div",{className:`\r
  relative w-full group my-10\r
\r
  rounded-md\r
  bg-[#000c24b3]\r
  backdrop-blur-md\r
  border border-cyan-400/30\r
  shadow-[0_0_15px_rgba(0,140,255,0.25),inset_0_0_10px_rgba(0,0,0,0.8)]\r
  transition-all duration-300\r
\r
  focus-within:bg-[#00162ed0]\r
  focus-within:border-cyan-300\r
  focus-within:shadow-[0_0_25px_rgba(0,200,255,0.6),inset_0_0_12px_rgba(0,0,0,0.9)]\r
\r
  flex items-center gap-3 pl-2 overflow-visible\r
\r
  /* COUNTRY BLOCK */\r
  [&_.PhoneInputCountry]:relative\r
  [&_.PhoneInputCountry]:h-[50px]\r
  [&_.PhoneInputCountry]:flex\r
  [&_.PhoneInputCountry]:items-center\r
  [&_.PhoneInputCountry]:border-r\r
  [&_.PhoneInputCountry]:border-cyan-400/20\r
  [&_.PhoneInputCountry]:bg-[#020617]\r
  [&_.PhoneInputCountry]:rounded-l-md\r
\r
  /* FLAG */\r
  [&_.PhoneInputCountryIcon]:w-6\r
  [&_.PhoneInputCountryIcon]:h-4\r
  [&_.PhoneInputCountryIcon]:rounded-sm\r
  [&_.PhoneInputCountryIcon]:shadow-[0_0_6px_rgba(0,255,255,0.6)]\r
\r
  /* ARROW */\r
  [&_.PhoneInputCountrySelectArrow]:text-cyan-300\r
  [&_.PhoneInputCountrySelectArrow]:ml-1\r
  [&_.PhoneInputCountrySelectArrow]:opacity-0\r
\r
  /* === SELECT DROPDOWN FIX === */\r
  [&_.PhoneInputCountrySelect]:absolute\r
  [&_.PhoneInputCountrySelect]:left-0\r
  [&_.PhoneInputCountrySelect]:top-[52px]\r
  [&_.PhoneInputCountrySelect]:z-[9999]\r
  [&_.PhoneInputCountrySelect]:w-[280px]\r
  [&_.PhoneInputCountrySelect]:max-h-[260px]\r
  [&_.PhoneInputCountrySelect]:overflow-y-auto\r
  [&_.PhoneInputCountrySelect]:rounded-md\r
  [&_.PhoneInputCountrySelect]:border\r
  [&_.PhoneInputCountrySelect]:border-cyan-400/40\r
  [&_.PhoneInputCountrySelect]:bg-[#020617f0]\r
  [&_.PhoneInputCountrySelect]:backdrop-blur-md\r
  [&_.PhoneInputCountrySelect]:shadow-[0_0_20px_rgba(0,255,255,0.35)]\r
  [&_.PhoneInputCountrySelect]:text-cyan-200\r
  [&_.PhoneInputCountrySelect]:outline-none\r
\r
  /* OPTIONS */\r
  [&_.PhoneInputCountrySelect_option]:bg-[#020617]\r
  [&_.PhoneInputCountrySelect_option]:text-cyan-200\r
\r
  /* INPUT */\r
  [&_.PhoneInputInput]:peer\r
  [&_.PhoneInputInput]:w-full\r
  [&_.PhoneInputInput]:h-[50px]\r
  [&_.PhoneInputInput]:pr-0 lg:[&_.PhoneInputInput]:pr-[160px]\r
\r
  [&_.PhoneInputInput]:rounded-r-md\r
  [&_.PhoneInputInput]:bg-transparent\r
  [&_.PhoneInputInput]:text-cyan-300\r
  [&_.PhoneInputInput]:text-lg\r
  [&_.PhoneInputInput]:tracking-wider\r
  [&_.PhoneInputInput]:outline-none\r
  [&_.PhoneInputInput]:transition-all\r
  [&_.PhoneInputInput]:focus:shadow-[0_0_25px_rgba(0,200,255,0.6),inset_0_0_12px_rgba(0,0,0,0.9)]
  [&_.PhoneInputInput::placeholder]:text-cyan-500/40
`,children:[e.jsx(t.Suspense,{fallback:e.jsx("div",{className:"h-[50px] w-full rounded-md bg-[#00162ed0] animate-pulse border border-cyan-400/20"}),children:u&&e.jsx(z,{international:!0,autoComplete:"tel",placeholder:c||a,value:n,onChange:o=>r(o||""),inputComponent:T})}),e.jsx("label",{htmlFor:"phone",className:`
        absolute -top-6 left-0
        text-xs tracking-[2px] uppercase
        text-cyan-400/70
        transition-all duration-300
        group-focus-within:text-cyan-300
        group-focus-within:-translate-y-1
      `,children:a}),e.jsx("span",{className:`\r
        absolute right-4 top-1/2 -translate-y-1/2\r
        w-2.5 h-2.5 rounded-full
        bg-cyan-400/40
        shadow-[0_0_10px_rgba(0,180,255,0.6)]
        transition-all duration-300
        group-focus-within:bg-cyan-300
        group-focus-within:scale-125
      `}),e.jsx("span",{className:`\r
         pointer-events-none\r
         absolute left-0 top-0 w-full h-[2px]\r
         opacity-0\r
         bg-gradient-to-r from-transparent via-white to-transparent\r
         blur-[1px]\r
         group-focus-within:opacity-100\r
         group-focus-within:animate-scan\r
       `}),e.jsx("span",{className:`\r
        absolute inset-0 rounded-md
        bg-cyan-400/10
        opacity-0
        transition-opacity duration-300
        group-focus-within:opacity-100
        pointer-events-none
      `}),e.jsx("span",{className:`\r
        absolute bottom-0 left-0 h-[2px] w-full\r
        origin-left scale-x-0\r
        bg-gradient-to-r from-cyan-300 to-cyan-500/40\r
        transition-transform duration-300\r
        group-focus-within:scale-x-100\r
      `}),e.jsx("div",{className:"absolute bottom-2 left-5 right-14 h-1 flex gap-[2px] opacity-0 group-focus-within:opacity-100",children:Array.from({length:18}).map((o,i)=>e.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${i*.12}s`}},i))})]})}function $({label:n,name:r,id:a,placeholder:c}){const u=a||r;return e.jsxs("div",{className:"relative w-full group my-12",children:[e.jsx("textarea",{id:u,name:r,required:!0,autoComplete:"off",placeholder:c||n,rows:5,className:`\r
        peer w-full max-h-[100px]\r
        px-5 pt-2 pb-10 pr-14\r
        rounded-md\r
        resize-none\r
        bg-[#000c24b3]\r
        text-cyan-300\r
        text-lg tracking-wider\r
        outline-none\r
        border border-cyan-400/30\r
        backdrop-blur-md\r
        shadow-[0_0_15px_rgba(0,140,255,0.25),inset_0_0_10px_rgba(0,0,0,0.8)]\r
        transition-all duration-300\r
        focus:bg-[#00162ed0]\r
        focus:border-cyan-300\r
        focus:shadow-[0_0_25px_rgba(0,200,255,0.6),inset_0_0_12px_rgba(0,0,0,0.9)]\r
        placeholder:text-cyan-500/40\r
      `}),e.jsx("label",{htmlFor:u,className:`\r
  absolute -top-6 left-0\r
  text-xs tracking-[2px] uppercase\r
  text-cyan-400/70\r
  transition-all duration-300\r
  peer-focus:text-cyan-300\r
  peer-focus:-translate-y-1\r
`,children:n}),e.jsx("span",{className:`\r
        absolute right-4 top-6\r
        w-2.5 h-2.5 rounded-full\r
        bg-cyan-400/40\r
        shadow-[0_0_10px_rgba(0,180,255,0.6)]\r
        transition-all duration-300\r
        peer-focus:bg-cyan-300\r
        peer-focus:scale-125\r
      `}),e.jsx("span",{className:`\r
        pointer-events-none\r
        absolute left-0 top-0\r
        w-full h-[2px]\r
        opacity-0\r
        bg-gradient-to-r from-transparent via-white to-transparent\r
        blur-[1px]\r
        peer-focus:opacity-100\r
        peer-focus:animate-scan-vertical\r
      `}),e.jsx("span",{className:`\r
        absolute inset-0 rounded-md\r
        bg-cyan-400/10\r
        opacity-0\r
        transition-opacity duration-300\r
        peer-focus:opacity-100\r
        pointer-events-none\r
      `}),e.jsx("span",{className:`\r
        absolute bottom-0 left-0 h-[2px] w-full\r
        origin-left scale-x-0\r
        bg-gradient-to-r from-cyan-300 to-cyan-500/40\r
        transition-transform duration-300\r
        peer-focus:scale-x-100\r
      `}),e.jsx("div",{className:"absolute bottom-3 left-5 right-14 h-1 flex gap-[2px] opacity-0 peer-focus:opacity-100",children:Array.from({length:20}).map((l,o)=>e.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${o*.1}s`}},o))})]})}const M="/api/contact",B="",U=!1;function ne(){const{t:n,i18n:r}=L(),[a,c]=t.useState(!1),[u,l]=t.useState(!1),[o,i]=t.useState(void 0),[I,x]=t.useState(!1),[Y,b]=t.useState(""),[G,_]=t.useState(""),d=t.useRef(null),E=(r.resolvedLanguage||r.language||"uz").split("-")[0]==="ru"?"font-display":"font-brush";t.useEffect(()=>()=>{d.current&&window.clearTimeout(d.current)},[]),t.useEffect(()=>{const m=new Image;m.src=S,m.onload=()=>x(!0)},[]),t.useEffect(()=>{},[]);const D=async m=>{if(m.preventDefault(),a)return;b(""),_("");const f=m.currentTarget;if(!f.checkValidity()){h.error(n("form.errorValidation"),{description:n("form.errorValidationDesc")}),f.reportValidity();return}const{isValidPhoneNumber:R}=await w(async()=>{const{isValidPhoneNumber:p}=await import("./index-Cq85Tfvu.js");return{isValidPhoneNumber:p}},__vite__mapDeps([0,1]));if(!o||!R(o)){h.error(n("form.errorPhone"),{description:n("form.errorPhoneDesc")});return}const v=f.querySelector('input[name="email"]')?.value.trim()||"";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){h.error(n("form.errorEmail"),{description:n("form.errorEmailDesc")});return}const g=new FormData(f),P=g.get("name"),C=g.get("message"),j=g.get("website"),N=g.get("cf-turnstile-response"),O={name:typeof P=="string"?P.trim():"",email:v,phone:o,message:typeof C=="string"?C.trim():"",website:typeof j=="string"?j.trim():"",turnstileToken:typeof N=="string"?N.trim():"",submittedAt:new Date().toISOString()};c(!0);try{const p=await fetch(M,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}),s=await p.json().catch(()=>null),y=typeof s?.requestId=="string"?s.requestId:"",A=typeof s?.error=="string"?s.error:typeof s?.error?.message=="string"?s.error.message:"Request failed";if(!p.ok||!s?.ok)throw y&&b(y),new Error(A);y&&b(y),typeof s?.channel=="string"&&_(s.channel),h.success(n("form.success"),{description:s?.channel==="email"?`${n("form.successDesc")} (fallback: email)`:n("form.successDesc")}),l(!0),f.reset(),i(""),d.current&&window.clearTimeout(d.current),d.current=window.setTimeout(()=>{l(!1),d.current=null},3e3)}catch(p){console.error(p);const s=p instanceof Error?p.message:"";h.error(n("form.errorSend"),{description:s||n("form.errorSendDesc")})}finally{c(!1)}};return e.jsxs("section",{id:"contact",className:"relative w-full flex items-center justify-center overflow-hidden py-6 ",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50",style:I?{backgroundImage:`url(${S})`}:void 0}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-background/30 via-background/5 to-background"}),e.jsx("div",{className:"container mx-auto px-4 relative z-10",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-10 md:gap-16",children:[e.jsx(q,{number:n("contact.number"),title:n("contact.title")}),e.jsxs("div",{className:"w-full max-w-[530px] relative z-10 md:ml-auto",children:[e.jsx("style",{children:`
              @keyframes scan {
                0%{top:0;opacity:0}
                10%{opacity:1}
                90%{opacity:1}
                100%{top:100%;opacity:0}
              }

              @keyframes float {
                0%,100%{transform:translateY(0)}
                50%{transform:translateY(-6px)}
              }

              .scanline{
                position:absolute;
                height:2px;
                width:100%;
                background:linear-gradient(90deg,transparent,hsl(var(--accent)),transparent);
                animation:scan 2s linear infinite;
                filter:blur(1px);
              }

              @media (max-width:380px){
                form button{
                  font-size:13px;
                  letter-spacing:1px;
                }
              }
            `}),e.jsx("h1",{className:`w-full  ml-auto text-center text-[clamp(2.2rem,6.8vw,4.5rem)] leading-[1.05] tracking-[0.02em] sm:tracking-[0.03em] break-words [text-wrap:balance] pb-3 ${E} bg-gradient-to-r from-transparent via-cyber-3 to-transparent bg-[length:90%] bg-no-repeat text-transparent bg-clip-text animate-textGlow pb-5`,children:n("contact.heading")}),e.jsxs("form",{autoComplete:"on",onSubmit:D,className:`\r
              bg-[hsl(var(--card)/0.1)]\r
              backdrop-blur-sm\r
              p-4 sm:p-6 md:p-6\r
              border-l-[4px] md:border-l-[5px]\r
              border-[hsl(var(--primary))]\r
              rounded-xl\r
              relative\r
              shadow-[0_0_18px_hsl(var(--primary)/0.25),0_10px_30px_rgba(0,0,0,0.5),inset_0_0_40px_hsl(var(--primary)/0.08)]\r
            `,children:[e.jsx("input",{type:"text",name:"website",tabIndex:-1,autoComplete:"off","aria-hidden":"true",className:"absolute left-[-9999px] top-[-9999px] h-0 w-0 opacity-0 pointer-events-none"}),B,e.jsx(k,{label:n("form.name"),name:"name",type:"text",placeholder:n("form.namePlaceholder")}),e.jsx(F,{label:n("form.phone"),value:o,onChange:i,placeholder:n("form.phonePlaceholder")}),e.jsx(k,{label:n("form.email"),name:"email",type:"email",placeholder:n("form.emailPlaceholder")}),e.jsx($,{label:n("form.message"),name:"message",placeholder:n("form.messagePlaceholder")}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6",children:[e.jsx("button",{type:"submit",disabled:a,className:"w-full py-3 px-3 text-sm sm:text-base bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold uppercase tracking-[2px] transition-all duration-300 shadow-[var(--shadow-glow)] hover:scale-105 active:scale-95 disabled:opacity-50",children:n(a?"form.sending":u?"form.sent":"form.submit")}),e.jsx("button",{type:"reset",onClick:()=>{i(""),b(""),_("")},className:"w-full py-3 px-3 text-sm sm:text-base bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] font-bold uppercase tracking-[2px] transition-all duration-300 hover:bg-[hsl(var(--accent)/0.2)]",children:n("form.reset")})]}),U]})]})]})})]})}export{ne as default};
