var c=Object.create;var o=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames;var l=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var f=(e,t)=>{for(var s in t)o(e,s,{get:t[s],enumerable:!0})},a=(e,t,s,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of T(t))!L.call(e,r)&&r!==s&&o(e,r,{get:()=>t[r],enumerable:!(n=m(t,r))||n.enumerable});return e};var i=(e,t,s)=>(s=e!=null?c(l(e)):{},a(t||!e||!e.__esModule?o(s,"default",{value:e,enumerable:!0}):s,e)),v=e=>a(o({},"__esModule",{value:!0}),e);var u={};f(u,{sendTelemetry:()=>d});module.exports=v(u);var p=i(require("axios")),E=i(require("fs")),R=JSON.parse(E.default.readFileSync("./package.json","utf8")),d=async e=>{if(!(process.env.TELEMETRY_ENABLED===void 0||process.env.TELEMETRY_ENABLED==="true")||e==="/")return;let s={route:e,apiVersion:`${R.version}`,timestamp:new Date},n=process.env.TELEMETRY_URL&&process.env.TELEMETRY_URL!==""?process.env.TELEMETRY_URL:"https://log.evolution-api.com/telemetry";p.default.post(n,s).then(()=>{}).catch(()=>{})};0&&(module.exports={sendTelemetry});
//# sourceMappingURL=sendTelemetry.js.map