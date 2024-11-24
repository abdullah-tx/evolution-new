var s=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var d=(t,e)=>{for(var i in e)s(t,i,{get:e[i],enumerable:!0})},m=(t,e,i,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of y(e))!g.call(t,r)&&r!==i&&s(t,r,{get:()=>e[r],enumerable:!(p=a(e,r))||p.enumerable});return t};var c=t=>m(s({},"__esModule",{value:!0}),t);var M={};d(M,{difyIgnoreJidSchema:()=>h,difySchema:()=>l,difySettingSchema:()=>b,difyStatusSchema:()=>u});module.exports=c(M);var n=require("uuid"),o=(...t)=>{let e={};return t.forEach(i=>e[i]={minLength:1,description:`The "${i}" cannot be empty`}),{if:{propertyNames:{enum:[...t]}},then:{properties:e}}},l={$id:(0,n.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},botType:{type:"string",enum:["chatBot","textGenerator","agent","workflow"]},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["enabled","botType","triggerType"],...o("enabled","botType","triggerType")},u={$id:(0,n.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...o("remoteJid","status")},b={$id:(0,n.v4)(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},difyIdFallback:{type:"string"},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar"],...o("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar")},h={$id:(0,n.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...o("remoteJid","action")};0&&(module.exports={difyIgnoreJidSchema,difySchema,difySettingSchema,difyStatusSchema});
//# sourceMappingURL=dify.schema.js.map