const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cq85Tfvu.js","assets/radix-1h7f9VDF.js","assets/style-DpsRipQV.css"])))=>i.map(i=>d[i]);
import{_,b as f}from"./index-Cqogz6n0.js";import{r as o,j as e,R as A}from"./radix-1h7f9VDF.js";import{S as V}from"./section-title-CrpavM_G.js";import{u as q}from"./i18n-Blv0dhYd.js";import"./motion-eszmwozl.js";const N="/My-Portfolio/assets/formBg-D9m73Ati.jpg";function S({label:n,name:r,type:t="text",placeholder:c}){const u=o.useId(),l=`${r}-${u}`,a=`${l}-label`,i=`${l}-hint`;return e.jsxs("div",{className:"relative w-full group my-10",children:[e.jsx("input",{id:l,name:r,type:t,required:!0,"aria-required":"true","aria-labelledby":a,"aria-describedby":i,autoComplete:r==="name"?"name":r==="email"?"email":r==="username"?"username":r==="company"?"organization":void 0,inputMode:t==="email"?"email":"text",enterKeyHint:t==="email"?"send":"next",spellCheck:t==="email"?"false":"true",placeholder:c,className:`\r
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
        `}),e.jsx("label",{id:a,htmlFor:l,className:`\r
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
      `}),e.jsx("div",{className:"absolute bottom-2 left-5 right-14 h-1 flex gap-[2px] opacity-0 peer-focus:opacity-100",children:Array.from({length:18}).map((I,h)=>e.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${h*.12}s`}},h))})]})}const k=A.forwardRef((n,r)=>e.jsx("input",{...n,ref:r,id:"phone",name:"phone",type:"tel",autoComplete:"tel",inputMode:"tel",className:n.className}));k.displayName="PhoneField";const L=o.lazy(()=>_(()=>import("./index-Cq85Tfvu.js"),__vite__mapDeps([0,1])));function z({value:n,onChange:r,label:t,placeholder:c}){const[u,l]=o.useState(!1);return o.useEffect(()=>{_(()=>Promise.resolve({}),__vite__mapDeps([2])),l(!0)},[]),e.jsxs("div",{className:`\r
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
`,children:[e.jsx(o.Suspense,{fallback:e.jsx("div",{className:"h-[50px] w-full rounded-md bg-[#00162ed0] animate-pulse border border-cyan-400/20"}),children:u&&e.jsx(L,{international:!0,autoComplete:"tel",placeholder:c||t,value:n,onChange:a=>r(a||""),inputComponent:k})}),e.jsx("label",{htmlFor:"phone",className:`
        absolute -top-6 left-0
        text-xs tracking-[2px] uppercase
        text-cyan-400/70
        transition-all duration-300
        group-focus-within:text-cyan-300
        group-focus-within:-translate-y-1
      `,children:t}),e.jsx("span",{className:`\r
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
      `}),e.jsx("div",{className:"absolute bottom-2 left-5 right-14 h-1 flex gap-[2px] opacity-0 group-focus-within:opacity-100",children:Array.from({length:18}).map((a,i)=>e.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${i*.12}s`}},i))})]})}function F({label:n,name:r,id:t,placeholder:c}){const u=t||r;return e.jsxs("div",{className:"relative w-full group my-12",children:[e.jsx("textarea",{id:u,name:r,required:!0,autoComplete:"off",placeholder:c||n,rows:5,className:`\r
        peer w-full max-h-[100px]\r
        px-5 pt-5 pb-10 pr-14\r
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
      `}),e.jsx("div",{className:"absolute bottom-3 left-5 right-14 h-1 flex gap-[2px] opacity-0 peer-focus:opacity-100",children:Array.from({length:20}).map((l,a)=>e.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${a*.1}s`}},a))})]})}const $="/api/contact",M="",B=!1;function ee(){const{t:n,i18n:r}=q(),[t,c]=o.useState(!1),[u,l]=o.useState(!1),[a,i]=o.useState(void 0),[I,h]=o.useState(!1),[U,x]=o.useState(""),[Y,y]=o.useState(""),D=(r.resolvedLanguage||r.language||"uz").split("-")[0]==="ru"?"font-display":"font-brush";o.useEffect(()=>{const d=new Image;d.src=N,d.onload=()=>h(!0)},[]),o.useEffect(()=>{},[]);const E=async d=>{if(d.preventDefault(),t)return;x(""),y("");const m=d.currentTarget;if(!m.checkValidity()){f.error(n("form.errorValidation"),{description:n("form.errorValidationDesc")}),m.reportValidity();return}const{isValidPhoneNumber:T}=await _(async()=>{const{isValidPhoneNumber:p}=await import("./index-Cq85Tfvu.js");return{isValidPhoneNumber:p}},__vite__mapDeps([0,1]));if(!a||!T(a)){f.error(n("form.errorPhone"),{description:n("form.errorPhoneDesc")});return}const w=m.querySelector('input[name="email"]')?.value.trim()||"";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w)){f.error(n("form.errorEmail"),{description:n("form.errorEmailDesc")});return}const b=new FormData(m),v=b.get("name"),P=b.get("message"),C=b.get("website"),j=b.get("cf-turnstile-response"),O={name:typeof v=="string"?v.trim():"",email:w,phone:a,message:typeof P=="string"?P.trim():"",website:typeof C=="string"?C.trim():"",turnstileToken:typeof j=="string"?j.trim():"",submittedAt:new Date().toISOString()};c(!0);try{const p=await fetch($,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}),s=await p.json().catch(()=>null),g=typeof s?.requestId=="string"?s.requestId:"",R=typeof s?.error=="string"?s.error:typeof s?.error?.message=="string"?s.error.message:"Request failed";if(!p.ok||!s?.ok)throw g&&x(g),new Error(R);g&&x(g),typeof s?.channel=="string"&&y(s.channel),f.success(n("form.success"),{description:s?.channel==="email"?`${n("form.successDesc")} (fallback: email)`:n("form.successDesc")}),l(!0),m.reset(),i(""),setTimeout(()=>l(!1),3e3)}catch(p){console.error(p);const s=p instanceof Error?p.message:"";f.error(n("form.errorSend"),{description:s||n("form.errorSendDesc")})}finally{c(!1)}};return e.jsxs("section",{id:"contact",className:"relative w-full flex items-center justify-center overflow-hidden py-6 ",children:[e.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50",style:I?{backgroundImage:`url(${N})`}:void 0}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-background/30 via-background/5 to-background"}),e.jsx("div",{className:"container mx-auto px-4 relative z-10",children:e.jsxs("div",{className:"flex flex-col md:flex-row gap-10 md:gap-16",children:[e.jsx(V,{number:n("contact.number"),title:n("contact.title")}),e.jsxs("div",{className:"w-full max-w-[530px] relative z-10 md:ml-auto",children:[e.jsx("style",{children:`
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
            `}),e.jsx("h1",{className:`w-full  ml-auto text-center text-[clamp(2.2rem,6.8vw,4.5rem)] leading-[1.05] tracking-[0.02em] sm:tracking-[0.03em] break-words [text-wrap:balance] pb-3 ${D} bg-gradient-to-r from-transparent via-cyber-3 to-transparent bg-[length:90%] bg-no-repeat text-transparent bg-clip-text animate-textGlow pb-5`,children:n("contact.heading")}),e.jsxs("form",{autoComplete:"on",onSubmit:E,className:`\r
              bg-[hsl(var(--card)/0.1)]\r
              backdrop-blur-sm\r
              p-4 sm:p-6 md:p-6\r
              border-l-[4px] md:border-l-[5px]\r
              border-[hsl(var(--primary))]\r
              rounded-xl\r
              relative\r
              shadow-[0_0_18px_hsl(var(--primary)/0.25),0_10px_30px_rgba(0,0,0,0.5),inset_0_0_40px_hsl(var(--primary)/0.08)]\r
            `,children:[e.jsx("input",{type:"text",name:"website",tabIndex:-1,autoComplete:"off","aria-hidden":"true",className:"absolute left-[-9999px] top-[-9999px] h-0 w-0 opacity-0 pointer-events-none"}),M,e.jsx(S,{label:n("form.name"),name:"name",type:"text",placeholder:n("form.namePlaceholder")}),e.jsx(z,{label:n("form.phone"),value:a,onChange:i,placeholder:n("form.phonePlaceholder")}),e.jsx(S,{label:n("form.email"),name:"email",type:"email",placeholder:n("form.emailPlaceholder")}),e.jsx(F,{label:n("form.message"),name:"message",placeholder:n("form.messagePlaceholder")}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6",children:[e.jsx("button",{type:"submit",disabled:t,className:"w-full py-3 px-3 text-sm sm:text-base bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold uppercase tracking-[2px] transition-all duration-300 shadow-[var(--shadow-glow)] hover:scale-105 active:scale-95 disabled:opacity-50",children:n(t?"form.sending":u?"form.sent":"form.submit")}),e.jsx("button",{type:"reset",onClick:()=>{i(""),x(""),y("")},className:"w-full py-3 px-3 text-sm sm:text-base bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] font-bold uppercase tracking-[2px] transition-all duration-300 hover:bg-[hsl(var(--accent)/0.2)]",children:n("form.reset")})]}),B]})]})]})})]})}export{ee as default};
