import{HttpsProxyAgent as p}from"https-proxy-agent";function $(r){if(typeof r=="string")return new p(r);let{host:t,password:o,port:n,protocol:s,username:e}=r,i=`${s}://${t}:${n}`;return e&&o&&(i=`${s}://${e}:${o}@${t}:${n}`),new p(i)}export{$ as makeProxyAgent};
//# sourceMappingURL=makeProxyAgent.mjs.map