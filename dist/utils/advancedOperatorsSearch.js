var c=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var h=(t,r)=>{for(var s in r)c(t,s,{get:r[s],enumerable:!0})},m=(t,r,s,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of p(r))!f.call(t,e)&&e!==s&&c(t,e,{get:()=>r[e],enumerable:!(n=g(r,e))||n.enumerable});return t};var b=t=>m(c({},"__esModule",{value:!0}),t);var w={};h(w,{advancedOperatorsSearch:()=>v});module.exports=b(w);function d(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}function v(t,r){let s=r.split(" ").reduce((e,a)=>{let[i,...l]=a.split(":"),u=l.join(":");return e[i]||(e[i]=[]),e[i].push(u),e},{}),n=d(t);return Object.entries(s).every(([e,a])=>a.some(i=>i.split(",").every(u=>{let o=d(u);switch(e.toLowerCase()){case"contains":return n.includes(o);case"notcontains":return!n.includes(o);case"startswith":return n.startsWith(o);case"endswith":return n.endsWith(o);case"exact":return n===o;default:return!1}})))}0&&(module.exports={advancedOperatorsSearch});
//# sourceMappingURL=advancedOperatorsSearch.js.map