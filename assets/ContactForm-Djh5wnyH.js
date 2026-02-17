const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cq85Tfvu.js","assets/radix-1h7f9VDF.js","assets/style-DpsRipQV.css"])))=>i.map(i=>d[i]);
import{_ as h,b as d}from"./index-Ctzd2sW5.js";import{j as n,R as T,r as l}from"./radix-1h7f9VDF.js";import{S as E}from"./section-title-BOOdDvYx.js";import{u as D}from"./i18n-Blv0dhYd.js";import"./motion-eszmwozl.js";const _="/My-Portfolio/assets/formBg-D9m73Ati.jpg";function I({label:e,name:r,type:t="text",placeholder:i}){const a=`${r}-label`,o=`${r}-hint`;return n.jsxs("div",{className:"relative w-full group my-10",children:[n.jsx("input",{id:r,name:r,type:t,required:!0,"aria-required":"true","aria-labelledby":a,"aria-describedby":o,autoComplete:r==="name"?"name":r==="email"?"email":r==="username"?"username":r==="company"?"organization":void 0,inputMode:t==="email"?"email":"text",enterKeyHint:t==="email"?"send":"next",spellCheck:t==="email"?"false":"true",placeholder:i,className:`\r
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
        `}),n.jsx("label",{id:a,htmlFor:r,className:`\r
        absolute -top-6 left-0\r
        text-xs tracking-[2px] uppercase\r
        text-cyan-400/70\r
        transition-all duration-300\r
        peer-focus:text-cyan-300\r
        peer-focus:-translate-y-1\r
        cursor-text\r
        `,children:e}),n.jsxs("span",{id:o,className:"sr-only",children:[e," field"]}),n.jsx("span",{className:`\r
        absolute right-4 top-1/2 -translate-y-1/2\r
        w-2.5 h-2.5 rounded-full\r
        bg-cyan-400/40\r
        shadow-[0_0_10px_rgba(0,180,255,0.6)]\r
        transition-all duration-300\r
        peer-focus:bg-cyan-300\r
        peer-focus:scale-125\r
      `}),n.jsx("span",{className:`\r
\r
         pointer-events-none\r
         absolute left-0 top-0 w-full h-[2px]\r
         opacity-0\r
         bg-gradient-to-r from-transparent via-white        to-transparent\r
         blur-[1px]\r
         group-focus-within:opacity-100\r
         group-focus-within:animate-scan\r
       `}),n.jsx("span",{className:`\r
        absolute inset-0 rounded-md\r
        bg-cyan-400/10\r
        opacity-0\r
        transition-opacity duration-300\r
        peer-focus:opacity-100\r
        pointer-events-none\r
      `}),n.jsx("span",{className:`\r
        absolute bottom-0 left-0 h-[2px] w-full\r
        origin-left scale-x-0\r
        bg-gradient-to-r from-cyan-300 to-cyan-500/40\r
        transition-transform duration-300\r
        group-focus-within:scale-x-100\r
      `}),n.jsx("div",{className:"absolute bottom-2 left-5 right-14 h-1 flex gap-[2px] opacity-0 peer-focus:opacity-100",children:Array.from({length:18}).map((s,c)=>n.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${c*.12}s`}},c))})]})}const w=T.forwardRef((e,r)=>n.jsx("input",{...e,ref:r,id:"phone",name:"phone",type:"tel",autoComplete:"tel",inputMode:"tel",className:e.className}));w.displayName="PhoneField";const O=l.lazy(()=>h(()=>import("./index-Cq85Tfvu.js"),__vite__mapDeps([0,1])));function A({value:e,onChange:r,label:t,placeholder:i}){const[a,o]=l.useState(!1);return l.useEffect(()=>{h(()=>Promise.resolve({}),__vite__mapDeps([2])),o(!0)},[]),n.jsxs("div",{className:`\r
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
  [&_.PhoneInputInput]:focus:shadow-[0_0_25px_rgba(0,200,255,0.6),inset_0_0_12px_rgba(0,0,0,0.9)]\r
        placeholder:text-cyan-500/40\r
  [&_.PhoneInputInput::placeholder]:text-cyan-500/40\r
`,children:[n.jsx(l.Suspense,{fallback:n.jsx("div",{className:"h-[50px] w-full rounded-md bg-[#00162ed0] animate-pulse border border-cyan-400/20"}),children:a&&n.jsx(O,{international:!0,defaultCountry:"UZ",autoComplete:"tel",placeholder:i||t,value:e,onChange:s=>r(s||""),inputComponent:w})}),n.jsx("label",{htmlFor:"phone",className:`\r
        absolute -top-6 left-0\r
        text-xs tracking-[2px] uppercase\r
        text-cyan-400/70\r
        transition-all duration-300\r
        peer-focus:text-cyan-300\r
        peer-focus:-translate-y-1\r
      `,children:t}),n.jsx("span",{className:`\r
        absolute right-4 top-1/2 -translate-y-1/2\r
        w-2.5 h-2.5 rounded-full\r
        bg-cyan-400/40\r
        shadow-[0_0_10px_rgba(0,180,255,0.6)]\r
        transition-all duration-300\r
        peer-focus:bg-cyan-300\r
        peer-focus:scale-125\r
      `}),n.jsx("span",{className:`\r
         pointer-events-none\r
         absolute left-0 top-0 w-full h-[2px]\r
         opacity-0\r
         bg-gradient-to-r from-transparent via-white to-transparent\r
         blur-[1px]\r
         group-focus-within:opacity-100\r
         group-focus-within:animate-scan\r
       `}),n.jsx("span",{className:`\r
        absolute inset-0 rounded-md\r
        bg-cyan-400/10\r
        opacity-0\r
        transition-opacity duration-300\r
        peer-focus:opacity-100\r
        pointer-events-none\r
      `}),n.jsx("span",{className:`\r
        absolute bottom-0 left-0 h-[2px] w-full\r
        origin-left scale-x-0\r
        bg-gradient-to-r from-cyan-300 to-cyan-500/40\r
        transition-transform duration-300\r
        group-focus-within:scale-x-100\r
      `}),n.jsx("div",{className:"absolute bottom-2 left-5 right-14 h-1 flex gap-[2px] opacity-0 group-focus-within:opacity-100",children:Array.from({length:18}).map((s,c)=>n.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${c*.12}s`}},c))})]})}function R({label:e,name:r,id:t,placeholder:i}){const a=t||r;return n.jsxs("div",{className:"relative w-full group my-12",children:[n.jsx("textarea",{id:a,name:r,required:!0,autoComplete:"off",placeholder:i||e,rows:5,className:`\r
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
      `}),n.jsx("label",{htmlFor:a,className:`\r
  absolute -top-6 left-0\r
  text-xs tracking-[2px] uppercase\r
  text-cyan-400/70\r
  transition-all duration-300\r
  peer-focus:text-cyan-300\r
  peer-focus:-translate-y-1\r
`,children:e}),n.jsx("span",{className:`\r
        absolute right-4 top-6\r
        w-2.5 h-2.5 rounded-full\r
        bg-cyan-400/40\r
        shadow-[0_0_10px_rgba(0,180,255,0.6)]\r
        transition-all duration-300\r
        peer-focus:bg-cyan-300\r
        peer-focus:scale-125\r
      `}),n.jsx("span",{className:`\r
        pointer-events-none\r
        absolute left-0 top-0\r
        w-full h-[2px]\r
        opacity-0\r
        bg-gradient-to-r from-transparent via-white to-transparent\r
        blur-[1px]\r
        peer-focus:opacity-100\r
        peer-focus:animate-scan-vertical\r
      `}),n.jsx("span",{className:`\r
        absolute inset-0 rounded-md\r
        bg-cyan-400/10\r
        opacity-0\r
        transition-opacity duration-300\r
        peer-focus:opacity-100\r
        pointer-events-none\r
      `}),n.jsx("span",{className:`\r
        absolute bottom-0 left-0 h-[2px] w-full\r
        origin-left scale-x-0\r
        bg-gradient-to-r from-cyan-300 to-cyan-500/40\r
        transition-transform duration-300\r
        peer-focus:scale-x-100\r
      `}),n.jsx("div",{className:"absolute bottom-3 left-5 right-14 h-1 flex gap-[2px] opacity-0 peer-focus:opacity-100",children:Array.from({length:20}).map((o,s)=>n.jsx("span",{className:"flex-1 bg-cyan-400/40 animate-equalizer",style:{animationDelay:`${s*.1}s`}},s))})]})}const $="8423383975:AAHPPQ8K7BCiWkaVtvqIO9J53q0Emiqhwo4",q="560000221";function b(e){return e?(typeof e=="string"?e:e.name).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function K(){const{t:e}=D(),[r,t]=l.useState(!1),[i,a]=l.useState(!1),[o,s]=l.useState(void 0),[c,P]=l.useState(!1);l.useEffect(()=>{const p=new Image;p.src=_,p.onload=()=>P(!0)},[]);const v=async p=>{if(p.preventDefault(),r)return;const u=p.currentTarget;if(!u.checkValidity()){d.error(e("form.errorValidation"),{description:e("form.errorValidationDesc")}),u.reportValidity();return}const{isValidPhoneNumber:C}=await h(async()=>{const{isValidPhoneNumber:m}=await import("./index-Cq85Tfvu.js");return{isValidPhoneNumber:m}},__vite__mapDeps([0,1]));if(!o||!C(o)){d.error(e("form.errorPhone"),{description:e("form.errorPhoneDesc")});return}const j=u.querySelector('input[name="email"]')?.value.trim()||"";if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(j)){d.error(e("form.errorEmail"),{description:e("form.errorEmailDesc")});return}const x=new FormData(u),N=b(x.get("name")),f=b(x.get("email")),S=b(x.get("message")),g=b(o),k=`
<b>🧠 <u>PORTFOLIO CONTACT REQUEST</u></b>

<blockquote>
📥 Sizning saytingizdan yangi murojaat keldi
</blockquote>

<b>━━━━━━━━━━━━━━━━━━━━</b>

<b>👤 Foydalanuvchi</b>

<b>Ism:</b> ${N||"Kiritilmagan"}

<b>Telefon:</b> <a href="tel:${g}">${g}</a>

<b>Email:</b> <a href="mailto:${f}">${f}</a>

<b>━━━━━━━━━━━━━━━━━━━━</b>

<b>💬 Xabar matni</b>

<blockquote expandable>
${S||"Xabar yozilmagan"}
</blockquote>

<b>━━━━━━━━━━━━━━━━━━━━</b>

<i>🕒 ${new Date().toLocaleString()}</i>
`;t(!0);try{const y=await(await fetch(`https://api.telegram.org/bot${$}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:q,text:k,parse_mode:"HTML",disable_web_page_preview:!0})})).json();if(!y.ok)throw new Error(y.description);d.success(e("form.success"),{description:e("form.successDesc")}),a(!0),u.reset(),s(""),setTimeout(()=>a(!1),3e3)}catch(m){console.error(m),d.error(e("form.errorSend"),{description:e("form.errorSendDesc")})}finally{t(!1)}};return n.jsxs("section",{id:"contact",className:"relative min-h-screen w-full flex items-center justify-center overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50",style:c?{backgroundImage:`url(${_})`}:void 0}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-background/30 via-background/5 to-background"}),n.jsx("div",{className:"container mx-auto px-4 relative z-10",children:n.jsxs("div",{className:"flex flex-col md:flex-row gap-10 md:gap-16",children:[n.jsx(E,{number:e("contact.number"),title:e("contact.title")}),n.jsxs("div",{className:"w-full max-w-[530px] relative z-10 md:ml-auto",children:[n.jsx("style",{children:`
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
            `}),n.jsx("h1",{className:"text-[40px] xs:text-[50px] sm:text-[65px] md:text-[65px] lg:text-[70px] leading-tight tracking-[2px] sm:tracking-[3px] md:tracking-[5px] text-center font-brush break-words pb-2 sm:mb-6 md:mb-8 bg-gradient-to-r from-transparent via-cyber-3 to-transparent bg-[length:90%] bg-no-repeat text-transparent bg-clip-text animate-textGlow",children:e("contact.heading")}),n.jsxs("form",{autoComplete:"on",onSubmit:v,className:`\r
              bg-[hsl(var(--card)/0.1)]\r
              backdrop-blur-sm\r
              p-4 sm:p-6 md:p-6\r
              border-l-[4px] md:border-l-[5px]\r
              border-[hsl(var(--primary))]\r
              rounded-xl\r
              relative\r
              shadow-[0_0_18px_hsl(var(--primary)/0.25),0_10px_30px_rgba(0,0,0,0.5),inset_0_0_40px_hsl(var(--primary)/0.08)]\r
            `,children:[n.jsx(I,{label:e("form.name"),name:"name",type:"text",placeholder:e("form.namePlaceholder")}),n.jsx(A,{label:e("form.phone"),value:o,onChange:s,placeholder:e("form.phonePlaceholder")}),n.jsx(I,{label:e("form.email"),name:"email",type:"email",placeholder:e("form.emailPlaceholder")}),n.jsx(R,{label:e("form.message"),name:"message",placeholder:e("form.messagePlaceholder")}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6",children:[n.jsx("button",{type:"submit",disabled:r,className:"w-full py-3 px-3 text-sm sm:text-base bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold uppercase tracking-[2px] transition-all duration-300 shadow-[var(--shadow-glow)] hover:scale-105 active:scale-95 disabled:opacity-50",children:e(r?"form.sending":i?"form.sent":"form.submit")}),n.jsx("button",{type:"reset",onClick:()=>s(""),className:"w-full py-3 px-3 text-sm sm:text-base bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] border border-[hsl(var(--border))] font-bold uppercase tracking-[2px] transition-all duration-300 hover:bg-[hsl(var(--accent)/0.2)]",children:e("form.reset")})]})]})]})]})})]})}export{K as default};
