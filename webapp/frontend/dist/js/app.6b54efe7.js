(function(){"use strict";var e={7123:function(e,t,n){n(7658);class r{constructor(){this.events={}}$on(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)}$off(e,t){if(this.events[e])for(var n=0;n<this.events[e].length;n++)if(this.events[e][n]===t){this.events[e].splice(n,1);break}}$emit(e,...t){this.events[e]&&this.events[e].forEach((function(e){e(...t)}))}}t["Z"]=new r},5395:function(e,t,n){n(7658);var r=n(9242),o=n(3396);function i(e,t,n,r,i,a){const u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(u)}var a={async mounted(){},methods:{}},u=n(89);const s=(0,u.Z)(a,[["render",i]]);var c=s,l=n(2483);const f=[{path:"/",name:"home",redirect:"/channels/1",children:[{path:"/channels/:userId",name:"Channels",component:()=>n.e(891).then(n.bind(n,2891))},{path:"/channel/:channelId",name:"Channel",component:()=>n.e(643).then(n.bind(n,643))},{path:"/favourites",name:"Favourites",component:()=>n.e(758).then(n.bind(n,1758))}]}],d=(0,l.p7)({history:(0,l.PO)("/colorsfront/"),routes:f,scrollBehavior(){return{top:0}}});var h=d,p=n(65),v=(0,p.MT)({state:{restAddr:"https://92.255.79.59/colorsserver/api",sidebarVisible:"",sidebarUnfoldable:!1,searchQuery:"",userId:null,filters:{}},mutations:{toggleSidebar(e){e.sidebarVisible=!e.sidebarVisible},toggleUnfoldable(e){e.sidebarUnfoldable=!e.sidebarUnfoldable},updateSidebarVisible(e,t){e.sidebarVisible=t.value}},actions:{},modules:{}}),b=n(6265),m=n.n(b),g=n(7123);const y=m().create({withCredentials:!0});v.state.myApi=y,g.Z.$on("noresponse",(e=>{if(e.response){if(console.log(e.response.data),console.log(e.response.status),!1===e.response?.data?.isAutenticated)return h.push("/login");alert("Сервер не отвечает. Код ошибки: "+(0!=e.response.status?e.response.status:404))}else alert("Сервер не отвечает")})),g.Z.$on("wrongInputData",(e=>{alert("Некорректно введенные данные")}));const w=(0,r.ri)(c);w.use(v),w.use(h),w.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{643:"4cf0f370",758:"acc9e590",891:"bb9c90f3"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{643:"800aca14",758:"9e29eb05",891:"4a38abb4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="@coreui/coreui-free-vue-admin-template:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/colorsfront/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={643:1,758:1,891:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5395)}));r=n.O(r)})();
//# sourceMappingURL=app.6b54efe7.js.map