import{t as e}from"./rolldown-runtime.BfcUj3B8.mjs";import{A as t,D as n,I as r,M as i,P as a,R as o,_ as s,k as c,l,s as u,u as d,w as f,y as ee}from"./react.EImwq13W.mjs";import{S as p,a as te,r as ne,t as m}from"./motion.C7F2c6uy.mjs";import{$ as re,C as h,Q as ie,R as g,T as _,X as ae,b as v,ct as y,et as b,g as x,j as S,m as C,n as w,nt as oe,o as T,r as E,rt as se,t as D,y as O}from"./framer.DxbcDixk.mjs";import{n as ce,t as k}from"./BZG6mlaWi.Cy6QnAy9.mjs";import{n as le,t as A}from"./ND3v08g_c.DCl4Unir.mjs";import{n as ue,t as de}from"./ddJBhqexe.C0RddABz.mjs";import{n as fe,r as pe}from"./tXmftpRwq.CC5j1ptT.mjs";var j,M,N=e((()=>{g(),j={position:`relative`,width:`100%`,height:`100%`,display:`flex`,justifyContent:`center`,alignItems:`center`},M={...j,borderRadius:6,background:`rgba(136, 85, 255, 0.3)`,color:`#85F`,border:`1px dashed #85F`,flexDirection:`column`},E.EventHandler,E.EventHandler,E.EventHandler,E.Number,E.Boolean,E.String,E.Enum})),me=e((()=>{g(),f()})),P=e((()=>{f()})),he=e((()=>{g()})),F=e((()=>{g()})),ge=e((()=>{f()})),_e=e((()=>{g()})),ve=e((()=>{r(),f()})),ye=e((()=>{f(),F()})),be=e((()=>{f(),g(),F(),P()})),xe=e((()=>{g(),f(),N()}));function Se(){return t(()=>x.current()===x.canvas,[])}var Ce=e((()=>{f(),g()})),we=e((()=>{f()})),Te=e((()=>{f(),g(),E.FusedNumber,E.FusedNumber})),Ee=e((()=>{N(),me(),P(),he(),F(),ge(),_e(),ve(),ye(),be(),xe(),Ce(),we(),Te()})),De=e((()=>{Ee()}));function I({type:e,url:t,html:n,zoom:r,radius:i,border:a,style:o={}}){return e===`url`&&t?l(ke,{url:t,zoom:r,radius:i,border:a,style:o}):e===`html`&&n?l(je,{html:n,style:o}):l(Oe,{style:o})}function Oe({style:e}){return l(`div`,{style:{minHeight:z(e),...M,overflow:`hidden`,...e},children:l(`div`,{style:H,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function ke({url:e,zoom:t,radius:n,border:r,style:o}){let s=!o.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let c=Se(),[u,d]=a(c?void 0:!1);return i(()=>{if(!c)return;let t=!0;d(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&d(e)}else{let e=await n.text();console.error(e),d(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),d(e)}),()=>{t=!1}},[e]),c&&s?l(R,{message:`URL embeds do not support auto height.`,style:o}):e.startsWith(`https://`)?u===void 0?l(Fe,{}):u instanceof Error?l(R,{message:u.message,style:o}):u===!0?l(R,{message:`Can’t embed ${e} due to its content security policy.`,style:o}):l(`iframe`,{src:e,style:{...B,...o,...r,zoom:t,borderRadius:n,transformOrigin:`top center`},loading:`lazy`,fetchPriority:c?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:Ae(c),allowFullScreen:!0,allow:`presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write`}):l(R,{message:`Unsupported protocol.`,style:o})}function Ae(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function je({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return l(n||r?Ne:Me,{html:e,...t})}return l(Pe,{html:e,...t})}function Me({html:e,style:t}){let r=n(),[s,c]=a(0);i(()=>{let e=r.current?.contentWindow;function t(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&c(r)}return o.addEventListener(`message`,t),e?.postMessage(`getEmbedHeight`,`*`),()=>{o.removeEventListener(`message`,t)}},[]);let u=`
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
`,d={...B,...t};return t.height||(d.height=s+`px`),l(`iframe`,{ref:r,style:d,srcDoc:u})}function Ne({html:e,style:t}){let r=n();return i(()=>{let t=r.current;if(t)return t.innerHTML=e,L(t),()=>{t.innerHTML=``}},[e]),l(`div`,{ref:r,style:{...V,...t}})}function Pe({html:e,style:t}){return l(`div`,{style:{...V,...t},dangerouslySetInnerHTML:{__html:e}})}function L(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)L(t)}function Fe(){return l(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...j,overflow:`hidden`},children:l(`div`,{style:H,children:`Loading…`})})}function R({message:e,style:t}){return l(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:z(t),...j,overflow:`hidden`,...t},children:l(`div`,{style:H,children:e})})}function z(e){if(!e.height)return 200}var B,V,H,Ie=e((()=>{r(),u(),f(),g(),De(),v(I,{type:{type:E.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:E.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:E.String,displayTextArea:!0,hidden(e){return e.type!==`html`}},border:{title:`Border`,type:E.Border,optional:!0,hidden(e){return e.type!==`url`}},radius:{type:E.BorderRadius,title:`Radius`,hidden(e){return e.type!==`url`}},zoom:{title:`Zoom`,defaultValue:1,type:E.Number,hidden(e){return e.type!==`url`},min:.1,max:1,step:.1,displayStepper:!0}}),B={width:`100%`,height:`100%`,border:`none`},V={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},H={textAlign:`center`,minWidth:140}})),U,W,G,K,q,J,Y,X,Z,Q,Le,Re,$,ze,Be;e((()=>{u(),g(),m(),f(),Ie(),ce(),ue(),le(),fe(),U=S(I),W=S(A),G=S(k),K={aO9FOkffY:`(min-width: 810px) and (max-width: 1278.98px)`,LSLVrlW4d:`(max-width: 809.98px)`,NL14tekGC:`(min-width: 1279px)`},q=[],J=`framer-hWaCW`,Y={aO9FOkffY:`framer-v-ykj0ez`,LSLVrlW4d:`framer-v-vt8vm4`,NL14tekGC:`framer-v-18fkisu`},X=(e,t,n)=>e&&t?`position`:n,Z=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},Q={Desktop:`NL14tekGC`,Phone:`LSLVrlW4d`,Tablet:`aO9FOkffY`},Le=({value:e})=>b()?null:l(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),Re=({height:e,id:t,width:n,...r})=>({...r,variant:Q[r.variant]??r.variant??`NL14tekGC`}),$=y(s(function(e,r){let i=n(null),a=r??i,o=ee(),{activeLocale:s,setLocale:u}=oe(),f=ae(),{style:m,className:g,layoutId:_,variant:v,...y}=Re(e);se(t(()=>pe({},s),[s]));let[b,x]=re(v,K,!1),S=h(J),E=c(T)?.isLayoutTemplate,O=X(E,!!c(te)?.transition?.layout);return ie({}),l(T.Provider,{value:{activeVariantId:b,humanReadableVariantMap:Q,primaryVariantId:`NL14tekGC`,variantClassNames:Y},children:d(ne,{id:_??o,children:[l(Le,{value:`html body { background: rgb(255, 255, 255); }`}),d(p.div,{...y,className:h(S,`framer-18fkisu`,g),ref:a,style:{...m},children:[l(D,{children:l(w,{className:`framer-1xza3t0-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:O,layoutScroll:!0,nodeId:`WpMq2oEjq`,scopeId:`tXmftpRwq`,children:l(I,{height:`100%`,html:`</head>
    <frameset rows="*">
        <frame src="https://bbdnewsletter.vercel.app/" noresize frameborder="0">
    </frameset>
    </html>`,id:`WpMq2oEjq`,layoutId:`WpMq2oEjq`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`url`,url:`https://bbdnewsletter.vercel.app/`,width:`100%`,zoom:1})})}),l(p.div,{className:`framer-1u8ka12`,"data-framer-name":`nav`,layout:O}),l(D,{height:75,width:`calc(${f?.width||`100vw`} - 50px)`,y:900,children:l(w,{className:`framer-18xhg5e-container`,layout:O,layoutScroll:!0,nodeId:`HoM5vMtD7`,scopeId:`tXmftpRwq`,children:l(C,{breakpoint:b,overrides:{LSLVrlW4d:{variant:Z(`Cu3DcAsbT`)}},children:l(A,{height:`100%`,id:`HoM5vMtD7`,layoutId:`HoM5vMtD7`,style:{width:`100%`},variant:Z(`NRga2Jf4s`),width:`100%`})})})}),l(D,{height:100,width:f?.width||`100vw`,y:0,children:l(w,{className:`framer-1catzmw-container`,layout:O,layoutScroll:!0,nodeId:`wfR__Kwqr`,scopeId:`tXmftpRwq`,children:l(C,{breakpoint:b,overrides:{aO9FOkffY:{variant:Z(`RVJZnkOTx`)},LSLVrlW4d:{variant:Z(`Bn9R4Qu3_`)}},children:l(k,{height:`100%`,id:`wfR__Kwqr`,layoutId:`wfR__Kwqr`,style:{width:`100%`},variant:Z(`m9OYuX4Kl`),width:`100%`})})})})]}),l(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-hWaCW.framer-e3vttq, .framer-hWaCW .framer-e3vttq { display: block; }`,`.framer-hWaCW.framer-18fkisu { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1708px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1279px; }`,`.framer-hWaCW .framer-1xza3t0-container { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 10.840723536036036%) add; bottom: 45px; flex: none; left: 0px; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10.840723536036036%) add; position: fixed; right: 0px; top: 100px; z-index: 1; }`,`.framer-hWaCW .framer-1u8ka12 { -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); flex: none; height: 47px; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 1; }`,`.framer-hWaCW .framer-18xhg5e-container { bottom: 25px; flex: none; height: auto; left: 25px; position: fixed; right: 25px; z-index: 4; }`,`.framer-hWaCW .framer-1catzmw-container { flex: none; height: auto; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; top: 0px; z-index: 3; }`,`@media (min-width: 810px) and (max-width: 1278.98px) { .framer-hWaCW.framer-18fkisu { width: 810px; }}`,`@media (max-width: 809.98px) { .framer-hWaCW.framer-18fkisu { width: 390px; } .framer-hWaCW .framer-1u8ka12 { -webkit-backdrop-filter: unset; backdrop-filter: unset; background: linear-gradient(180deg, #ffffff 0%, rgb(255, 255, 255) 100%); height: 69px; }}`],`framer-hWaCW`),ze=$,$.displayName=`Page`,$.defaultProps={height:1708,width:1279},O($,[{explicitInter:!0,fonts:[]},...U,...W,...G],{supportsExplicitInterCodegen:!0}),$.loader={load:(e,t)=>(t.locale,Promise.allSettled([_(de,{},t),_(A,{},t),_(k,{},t)]))},Be={exports:{queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramertXmftpRwq`,slots:[],annotations:{framerIntrinsicHeight:`1708`,framerResponsiveScreen:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"aO9FOkffY":{"layout":["fixed","fixed"]},"LSLVrlW4d":{"layout":["fixed","fixed"]}}}`,framerImmutableVariables:`true`,framerScrollSections:`false`,framerLayoutTemplateFlowEffect:`true`,framerColorSyntax:`true`,framerComponentViewportWidth:`true`,framerIntrinsicWidth:`1279`,framerAcceptsLayoutTemplate:`true`,framerDisplayContentsDiv:`false`,framerAutoSizeImages:`true`,framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{Be as __FramerMetadata__,ze as default,q as queryParamNames};
//# sourceMappingURL=LclU7y333jc4fbs9yPsPmp7af-HVd3Dwj6O0N3TC1iE.DWWSNQa2.mjs.map