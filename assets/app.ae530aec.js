import{d as p,o as i,c as u,p as d,m as l,k as r,_,W as s,a5 as f,a6 as m,a7 as h,a8 as v,a9 as A,aa as g,ab as S,ac as w,ad as y,ae as P,Z as b,u as D,j as C,A as E,af as R,ag as x,ah as I,ai as T}from"./chunks/framework.956eca13.js";import{t as j}from"./chunks/theme.0da85616.js";const B=e=>(d("data-v-7db4dd73"),e=e(),l(),e),O={class:"super-doctor-page"},V=B(()=>r("div",{class:"wrapper"},[r("iframe",{src:"https://consult-doc-client.itheima.net/"})],-1)),k=[V],F=p({__name:"SuperDoctor",setup(e){return(t,a)=>(i(),u("div",O,k))}});const L=_(F,[["__scopeId","data-v-7db4dd73"]]),$={...j,enhanceApp({app:e}){e.component("SuperDoctor",L)}};function c(e){if(e.extends){const t=c(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=c($),N=p({name:"VitePressApp",setup(){const{site:e}=D();return C(()=>{E(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),x(),I(),o.setup&&o.setup(),()=>T(o.Layout)}});async function G(){const e=M(),t=H();t.provide(m,e);const a=h(e.route);return t.provide(v,a),t.component("Content",A),t.component("ClientOnly",g),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:S}),{app:t,router:e,data:a}}function H(){return w(N)}function M(){let e=s,t;return y(a=>{let n=P(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),b(()=>import(n),[])):null},o.NotFound)}s&&G().then(({app:e,router:t,data:a})=>{t.go().then(()=>{f(t.route,a.site),e.mount("#app")})});export{G as createApp};
