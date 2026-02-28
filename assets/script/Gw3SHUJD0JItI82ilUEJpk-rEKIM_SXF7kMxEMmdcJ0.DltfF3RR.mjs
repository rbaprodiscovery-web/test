import{t as e}from"./rolldown-runtime.BfcUj3B8.mjs";import{A as t,D as n,I as r,M as i,P as a,R as o,_ as s,k as c,l,s as u,u as d,w as f,y as ee}from"./react.EImwq13W.mjs";import{S as p,a as te,r as ne,t as re}from"./motion.C7F2c6uy.mjs";import{$ as ie,M as m,Z as ae,b as h,c as g,ct as _,et as oe,g as v,n as y,nt as se,r as b,rt as ce,t as x,tt as S,v as C,w,x as T,z as E}from"./framer.CsEy1i2A.mjs";import{c as D,n as le,s as O,t as k}from"./ND3v08g_c.CICGFFul.mjs";import{n as ue,r as de}from"./tXmftpRwq.edlUcV5z.mjs";var A,j,M=e((()=>{E(),A={position:`relative`,width:`100%`,height:`100%`,display:`flex`,justifyContent:`center`,alignItems:`center`},j={...A,borderRadius:6,background:`rgba(136, 85, 255, 0.3)`,color:`#85F`,border:`1px dashed #85F`,flexDirection:`column`},b.EventHandler,b.EventHandler,b.EventHandler,b.Number,b.Boolean,b.String,b.Enum})),fe=e((()=>{E(),f()})),N=e((()=>{f()})),pe=e((()=>{E()})),P=e((()=>{E()})),me=e((()=>{f()})),he=e((()=>{E()})),ge=e((()=>{r(),f()})),_e=e((()=>{f(),P()})),ve=e((()=>{f(),E(),P(),N()})),ye=e((()=>{E(),f(),M()}));function be(){return t(()=>C.current()===C.canvas,[])}var xe=e((()=>{f(),E()})),Se=e((()=>{f()})),Ce=e((()=>{f(),E(),b.FusedNumber,b.FusedNumber})),we=e((()=>{M(),fe(),N(),pe(),P(),me(),he(),ge(),_e(),ve(),ye(),xe(),Se(),Ce()})),Te=e((()=>{we()}));function F({type:e,url:t,html:n,zoom:r,radius:i,border:a,style:o={}}){return e===`url`&&t?l(De,{url:t,zoom:r,radius:i,border:a,style:o}):e===`html`&&n?l(ke,{html:n,style:o}):l(Ee,{style:o})}function Ee({style:e}){return l(`div`,{style:{minHeight:R(e),...j,overflow:`hidden`,...e},children:l(`div`,{style:V,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function De({url:e,zoom:t,radius:n,border:r,style:o}){let s=!o.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let c=be(),[u,d]=a(c?void 0:!1);return i(()=>{if(!c)return;let t=!0;d(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&d(e)}else{let e=await n.text();console.error(e),d(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),d(e)}),()=>{t=!1}},[e]),c&&s?l(L,{message:`URL embeds do not support auto height.`,style:o}):e.startsWith(`https://`)?u===void 0?l(Ne,{}):u instanceof Error?l(L,{message:u.message,style:o}):u===!0?l(L,{message:`Can’t embed ${e} due to its content security policy.`,style:o}):l(`iframe`,{src:e,style:{...z,...o,...r,zoom:t,borderRadius:n,transformOrigin:`top center`},loading:`lazy`,fetchPriority:c?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:Oe(c),allowFullScreen:!0,allow:`presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write`}):l(L,{message:`Unsupported protocol.`,style:o})}function Oe(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function ke({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return l(n||r?je:Ae,{html:e,...t})}return l(Me,{html:e,...t})}function Ae({html:e,style:t}){let r=n(),[s,c]=a(0);i(()=>{let e=r.current?.contentWindow;function t(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&c(r)}return o.addEventListener(`message`,t),e?.postMessage(`getEmbedHeight`,`*`),()=>{o.removeEventListener(`message`,t)}},[]);let u=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,d={...z,...t};return t.height||(d.height=s+`px`),l(`iframe`,{ref:r,style:d,srcDoc:u})}function je({html:e,style:t}){let r=n();return i(()=>{let t=r.current;if(t)return t.innerHTML=e,I(t),()=>{t.innerHTML=``}},[e]),l(`div`,{ref:r,style:{...B,...t}})}function Me({html:e,style:t}){return l(`div`,{style:{...B,...t},dangerouslySetInnerHTML:{__html:e}})}function I(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)I(t)}function Ne(){return l(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...A,overflow:`hidden`},children:l(`div`,{style:V,children:`Loading…`})})}function L({message:e,style:t}){return l(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:R(t),...A,overflow:`hidden`,...t},children:l(`div`,{style:V,children:e})})}function R(e){if(!e.height)return 200}var z,B,V,Pe=e((()=>{r(),u(),f(),E(),Te(),T(F,{type:{type:b.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:b.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:b.String,displayTextArea:!0,hidden(e){return e.type!==`html`}},border:{title:`Border`,type:b.Border,optional:!0,hidden(e){return e.type!==`url`}},radius:{type:b.BorderRadius,title:`Radius`,hidden(e){return e.type!==`url`}},zoom:{title:`Zoom`,defaultValue:1,type:b.Number,hidden(e){return e.type!==`url`},min:.1,max:1,step:.1,displayStepper:!0}}),z={width:`100%`,height:`100%`,border:`none`},B={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},V={textAlign:`center`,minWidth:140}})),H,U,W,G,K,q,J,Y,X,Z,Q,Fe,$,Ie,Le;e((()=>{u(),E(),re(),f(),Pe(),D(),le(),ue(),H=m(F),U=m(k),W=m(O),G={aO9FOkffY:`(min-width: 810px) and (max-width: 1278.98px)`,LSLVrlW4d:`(max-width: 809.98px)`,NL14tekGC:`(min-width: 1279px)`},K=[],q=`framer-lcgkk`,J={aO9FOkffY:`framer-v-ykj0ez`,LSLVrlW4d:`framer-v-vt8vm4`,NL14tekGC:`framer-v-18fkisu`},Y=(e,t,n)=>e&&t?`position`:n,X=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},Z={Desktop:`NL14tekGC`,Phone:`LSLVrlW4d`,Tablet:`aO9FOkffY`},Q=({value:e})=>S()?null:l(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),Fe=({height:e,id:t,width:n,...r})=>({...r,variant:Z[r.variant]??r.variant??`NL14tekGC`}),$=_(s(function(e,r){let i=n(null),a=r??i,o=ee(),{activeLocale:s,setLocale:u}=se(),f=ae(),{style:re,className:m,layoutId:h,variant:_,...b}=Fe(e);ce(t(()=>de({},s),[s]));let[S,C]=oe(_,G,!1),T=w(q),E=c(g)?.isLayoutTemplate,D=Y(E,!!c(te)?.transition?.layout);return ie({}),l(g.Provider,{value:{activeVariantId:S,humanReadableVariantMap:Z,primaryVariantId:`NL14tekGC`,variantClassNames:J},children:d(ne,{id:h??o,children:[l(Q,{value:`html body { background: rgb(255, 255, 255); }`}),d(p.div,{...b,className:w(T,`framer-18fkisu`,m),ref:a,style:{...re},children:[l(x,{children:l(y,{className:`framer-1xza3t0-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:D,layoutScroll:!0,nodeId:`WpMq2oEjq`,scopeId:`tXmftpRwq`,children:l(F,{height:`100%`,html:`</head>
    <frameset rows="*">
        <frame src="https://bbdnewsletter.vercel.app/" noresize frameborder="0">
    </frameset>
    </html>`,id:`WpMq2oEjq`,layoutId:`WpMq2oEjq`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`url`,url:`https://bbdnewsletter.vercel.app/`,width:`100%`,zoom:1})})}),l(p.div,{className:`framer-1u8ka12`,"data-framer-name":`nav`,layout:D}),l(x,{height:75,width:`calc(${f?.width||`100vw`} - 50px)`,y:900,children:l(y,{className:`framer-18xhg5e-container`,layout:D,layoutScroll:!0,nodeId:`HoM5vMtD7`,scopeId:`tXmftpRwq`,children:l(v,{breakpoint:S,overrides:{LSLVrlW4d:{variant:X(`Cu3DcAsbT`)}},children:l(k,{height:`100%`,id:`HoM5vMtD7`,layoutId:`HoM5vMtD7`,style:{width:`100%`},variant:X(`NRga2Jf4s`),width:`100%`})})})}),l(x,{height:100,width:f?.width||`100vw`,y:0,children:l(y,{className:`framer-1catzmw-container`,layout:D,layoutScroll:!0,nodeId:`wfR__Kwqr`,scopeId:`tXmftpRwq`,children:l(v,{breakpoint:S,overrides:{aO9FOkffY:{variant:X(`RVJZnkOTx`)},LSLVrlW4d:{variant:X(`Bn9R4Qu3_`)}},children:l(O,{height:`100%`,id:`wfR__Kwqr`,layoutId:`wfR__Kwqr`,style:{width:`100%`},variant:X(`m9OYuX4Kl`),width:`100%`})})})})]}),l(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-lcgkk.framer-e3vttq, .framer-lcgkk .framer-e3vttq { display: block; }`,`.framer-lcgkk.framer-18fkisu { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1708px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1279px; }`,`.framer-lcgkk .framer-1xza3t0-container { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 10.840723536036036%) add; bottom: 45px; flex: none; left: 0px; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10.840723536036036%) add; position: fixed; right: 0px; top: 100px; z-index: 1; }`,`.framer-lcgkk .framer-1u8ka12 { -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); flex: none; height: 47px; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 1; }`,`.framer-lcgkk .framer-18xhg5e-container { bottom: 25px; flex: none; height: auto; left: 25px; position: fixed; right: 25px; z-index: 4; }`,`.framer-lcgkk .framer-1catzmw-container { flex: none; height: auto; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; top: 0px; z-index: 3; }`,`@media (min-width: 810px) and (max-width: 1278.98px) { .framer-lcgkk.framer-18fkisu { width: 810px; }}`,`@media (max-width: 809.98px) { .framer-lcgkk.framer-18fkisu { width: 390px; } .framer-lcgkk .framer-1u8ka12 { -webkit-backdrop-filter: unset; backdrop-filter: unset; background: linear-gradient(180deg, #ffffff 0%, rgb(255, 255, 255) 100%); height: 69px; }}`],`framer-lcgkk`),Ie=$,$.displayName=`Page`,$.defaultProps={height:1708,width:1279},h($,[{explicitInter:!0,fonts:[]},...H,...U,...W],{supportsExplicitInterCodegen:!0}),Le={exports:{default:{type:`reactComponent`,name:`FramertXmftpRwq`,slots:[],annotations:{framerAcceptsLayoutTemplate:`true`,framerScrollSections:`false`,framerLayoutTemplateFlowEffect:`true`,framerContractVersion:`1`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"aO9FOkffY":{"layout":["fixed","fixed"]},"LSLVrlW4d":{"layout":["fixed","fixed"]}}}`,framerImmutableVariables:`true`,framerComponentViewportWidth:`true`,framerIntrinsicHeight:`1708`,framerColorSyntax:`true`,framerAutoSizeImages:`true`,framerResponsiveScreen:`true`,framerDisplayContentsDiv:`false`,framerIntrinsicWidth:`1279`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{Le as __FramerMetadata__,Ie as default,K as queryParamNames};
//# sourceMappingURL=Gw3SHUJD0JItI82ilUEJpk-rEKIM_SXF7kMxEMmdcJ0.DltfF3RR.mjs.map