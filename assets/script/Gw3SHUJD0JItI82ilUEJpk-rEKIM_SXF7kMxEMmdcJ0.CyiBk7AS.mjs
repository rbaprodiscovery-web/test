import{t as e}from"./rolldown-runtime.toN5-jYZ.mjs";import{A as t,D as n,I as r,M as i,P as a,R as o,_ as s,k as c,l,s as u,u as d,w as f,y as ee}from"./react.DT7vEJL4.mjs";import{S as p,a as te,r as ne,t as re}from"./motion.B-oV1k42.mjs";import{$ as ie,Q as ae,R as m,X as oe,b as h,c as g,et as _,g as v,j as y,n as b,nt as se,r as x,st as ce,t as S,tt as le,v as C,w,x as T}from"./framer.CNzwOQDA.mjs";import{i as E,n as ue,r as D,t as O}from"./ND3v08g_c.JhHStK-G.mjs";import{n as de,r as fe}from"./tXmftpRwq.CxgsTXa-.mjs";var k,A,j=e((()=>{m(),k={position:`relative`,width:`100%`,height:`100%`,display:`flex`,justifyContent:`center`,alignItems:`center`},A={...k,borderRadius:6,background:`rgba(136, 85, 255, 0.3)`,color:`#85F`,border:`1px dashed #85F`,flexDirection:`column`},x.EventHandler,x.EventHandler,x.EventHandler,x.Number,x.Boolean,x.String,x.Enum})),pe=e((()=>{m(),f()})),M=e((()=>{f()})),me=e((()=>{m()})),N=e((()=>{m()})),he=e((()=>{f()})),ge=e((()=>{m()})),_e=e((()=>{r(),f()})),ve=e((()=>{f(),N()})),ye=e((()=>{f(),m(),N(),M()})),be=e((()=>{m(),f(),j()}));function xe(){return t(()=>C.current()===C.canvas,[])}var Se=e((()=>{f(),m()})),Ce=e((()=>{f()})),we=e((()=>{f(),m(),x.FusedNumber,x.FusedNumber})),Te=e((()=>{j(),pe(),M(),me(),N(),he(),ge(),_e(),ve(),ye(),be(),Se(),Ce(),we()})),Ee=e((()=>{Te()}));function P({type:e,url:t,html:n,zoom:r,radius:i,border:a,style:o={}}){return e===`url`&&t?l(Oe,{url:t,zoom:r,radius:i,border:a,style:o}):e===`html`&&n?l(Ae,{html:n,style:o}):l(De,{style:o})}function De({style:e}){return l(`div`,{style:{minHeight:L(e),...A,overflow:`hidden`,...e},children:l(`div`,{style:B,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function Oe({url:e,zoom:t,radius:n,border:r,style:o}){let s=!o.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let c=xe(),[u,d]=a(c?void 0:!1);return i(()=>{if(!c)return;let t=!0;d(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&d(e)}else{let e=await n.text();console.error(e),d(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),d(e)}),()=>{t=!1}},[e]),c&&s?l(I,{message:`URL embeds do not support auto height.`,style:o}):e.startsWith(`https://`)?u===void 0?l(Pe,{}):u instanceof Error?l(I,{message:u.message,style:o}):u===!0?l(I,{message:`Can’t embed ${e} due to its content security policy.`,style:o}):l(`iframe`,{src:e,style:{...R,...o,...r,zoom:t,borderRadius:n,transformOrigin:`top center`},loading:`lazy`,fetchPriority:c?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:ke(c),allowFullScreen:!0,allow:`presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write`}):l(I,{message:`Unsupported protocol.`,style:o})}function ke(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function Ae({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return l(n||r?Me:je,{html:e,...t})}return l(Ne,{html:e,...t})}function je({html:e,style:t}){let r=n(),[s,c]=a(0);i(()=>{let e=r.current?.contentWindow;function t(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&c(r)}return o.addEventListener(`message`,t),e?.postMessage(`getEmbedHeight`,`*`),()=>{o.removeEventListener(`message`,t)}},[]);let u=`
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
`,d={...R,...t};return t.height||(d.height=s+`px`),l(`iframe`,{ref:r,style:d,srcDoc:u})}function Me({html:e,style:t}){let r=n();return i(()=>{let t=r.current;if(t)return t.innerHTML=e,F(t),()=>{t.innerHTML=``}},[e]),l(`div`,{ref:r,style:{...z,...t}})}function Ne({html:e,style:t}){return l(`div`,{style:{...z,...t},dangerouslySetInnerHTML:{__html:e}})}function F(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)F(t)}function Pe(){return l(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...k,overflow:`hidden`},children:l(`div`,{style:B,children:`Loading…`})})}function I({message:e,style:t}){return l(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:L(t),...k,overflow:`hidden`,...t},children:l(`div`,{style:B,children:e})})}function L(e){if(!e.height)return 200}var R,z,B,Fe=e((()=>{r(),u(),f(),m(),Ee(),T(P,{type:{type:x.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:x.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:x.String,displayTextArea:!0,hidden(e){return e.type!==`html`}},border:{title:`Border`,type:x.Border,optional:!0,hidden(e){return e.type!==`url`}},radius:{type:x.BorderRadius,title:`Radius`,hidden(e){return e.type!==`url`}},zoom:{title:`Zoom`,defaultValue:1,type:x.Number,hidden(e){return e.type!==`url`},min:.1,max:1,step:.1,displayStepper:!0}}),R={width:`100%`,height:`100%`,border:`none`},z={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},B={textAlign:`center`,minWidth:140}})),V,H,U,W,G,K,q,J,Y,X,Z,Ie,Q,Le,$;e((()=>{u(),m(),re(),f(),Fe(),E(),ue(),de(),V=y(P),H=y(O),U=y(D),W={aO9FOkffY:`(min-width: 810px) and (max-width: 1278.98px)`,LSLVrlW4d:`(max-width: 809.98px)`,NL14tekGC:`(min-width: 1279px)`},G=[],K=`framer-lcgkk`,q={aO9FOkffY:`framer-v-ykj0ez`,LSLVrlW4d:`framer-v-vt8vm4`,NL14tekGC:`framer-v-18fkisu`},J=(e,t,n)=>e&&t?`position`:n,Y=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},X={Desktop:`NL14tekGC`,Phone:`LSLVrlW4d`,Tablet:`aO9FOkffY`},Z=({value:e})=>_()?null:l(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),Ie=({height:e,id:t,width:n,...r})=>({...r,variant:X[r.variant]??r.variant??`NL14tekGC`}),Q=ce(s(function(e,r){let i=n(null),a=r??i,o=ee(),{activeLocale:s,setLocale:u}=le(),f=oe(),{style:re,className:m,layoutId:h,variant:_,...y}=Ie(e);se(t(()=>fe({},s),[s]));let[x,ce]=ie(_,W,!1),C=w(K),T=c(g)?.isLayoutTemplate,E=J(T,!!c(te)?.transition?.layout);return ae({}),l(g.Provider,{value:{activeVariantId:x,humanReadableVariantMap:X,primaryVariantId:`NL14tekGC`,variantClassNames:q},children:d(ne,{id:h??o,children:[l(Z,{value:`html body { background: rgb(255, 255, 255); }`}),d(p.div,{...y,className:w(C,`framer-18fkisu`,m),ref:a,style:{...re},children:[l(S,{children:l(b,{className:`framer-1xza3t0-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:E,layoutScroll:!0,nodeId:`WpMq2oEjq`,scopeId:`tXmftpRwq`,children:l(P,{height:`100%`,html:`</head>
    <frameset rows="*">
        <frame src="https://bbdnewsletter.vercel.app/" noresize frameborder="0">
    </frameset>
    </html>`,id:`WpMq2oEjq`,layoutId:`WpMq2oEjq`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`url`,url:`https://bbdnewsletter.vercel.app/`,width:`100%`,zoom:1})})}),l(p.div,{className:`framer-1u8ka12`,"data-framer-name":`nav`,layout:E}),l(S,{height:75,width:`calc(${f?.width||`100vw`} - 50px)`,y:900,children:l(b,{className:`framer-18xhg5e-container`,layout:E,layoutScroll:!0,nodeId:`HoM5vMtD7`,scopeId:`tXmftpRwq`,children:l(v,{breakpoint:x,overrides:{LSLVrlW4d:{variant:Y(`Cu3DcAsbT`)}},children:l(O,{height:`100%`,id:`HoM5vMtD7`,layoutId:`HoM5vMtD7`,style:{width:`100%`},variant:Y(`NRga2Jf4s`),width:`100%`})})})}),l(S,{height:100,width:f?.width||`100vw`,y:0,children:l(b,{className:`framer-1catzmw-container`,layout:E,layoutScroll:!0,nodeId:`wfR__Kwqr`,scopeId:`tXmftpRwq`,children:l(v,{breakpoint:x,overrides:{aO9FOkffY:{variant:Y(`RVJZnkOTx`)},LSLVrlW4d:{variant:Y(`Bn9R4Qu3_`)}},children:l(D,{height:`100%`,id:`wfR__Kwqr`,layoutId:`wfR__Kwqr`,style:{width:`100%`},variant:Y(`m9OYuX4Kl`),width:`100%`})})})})]}),l(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-lcgkk.framer-e3vttq, .framer-lcgkk .framer-e3vttq { display: block; }`,`.framer-lcgkk.framer-18fkisu { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1708px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1279px; }`,`.framer-lcgkk .framer-1xza3t0-container { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 10.840723536036036%) add; bottom: 45px; flex: none; left: 0px; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10.840723536036036%) add; position: fixed; right: 0px; top: 100px; z-index: 1; }`,`.framer-lcgkk .framer-1u8ka12 { -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px); flex: none; height: 47px; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 1; }`,`.framer-lcgkk .framer-18xhg5e-container { bottom: 25px; flex: none; height: auto; left: 25px; position: fixed; right: 25px; z-index: 4; }`,`.framer-lcgkk .framer-1catzmw-container { flex: none; height: auto; left: 0px; mix-blend-mode: difference; position: fixed; right: 0px; top: 0px; z-index: 3; }`,`@media (min-width: 810px) and (max-width: 1278.98px) { .framer-lcgkk.framer-18fkisu { width: 810px; }}`,`@media (max-width: 809.98px) { .framer-lcgkk.framer-18fkisu { width: 390px; } .framer-lcgkk .framer-1u8ka12 { -webkit-backdrop-filter: unset; backdrop-filter: unset; background: linear-gradient(180deg, #ffffff 0%, rgb(255, 255, 255) 100%); height: 69px; }}`],`framer-lcgkk`),Le=Q,Q.displayName=`Page`,Q.defaultProps={height:1708,width:1279},h(Q,[{explicitInter:!0,fonts:[]},...V,...H,...U],{supportsExplicitInterCodegen:!0}),$={exports:{default:{type:`reactComponent`,name:`FramertXmftpRwq`,slots:[],annotations:{framerAcceptsLayoutTemplate:`true`,framerScrollSections:`false`,framerLayoutTemplateFlowEffect:`true`,framerContractVersion:`1`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"aO9FOkffY":{"layout":["fixed","fixed"]},"LSLVrlW4d":{"layout":["fixed","fixed"]}}}`,framerImmutableVariables:`true`,framerComponentViewportWidth:`true`,framerIntrinsicHeight:`1708`,framerColorSyntax:`true`,framerAutoSizeImages:`true`,framerResponsiveScreen:`true`,framerDisplayContentsDiv:`false`,framerIntrinsicWidth:`1279`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{$ as __FramerMetadata__,Le as default,G as queryParamNames};
//# sourceMappingURL=Gw3SHUJD0JItI82ilUEJpk-rEKIM_SXF7kMxEMmdcJ0.CyiBk7AS.mjs.map