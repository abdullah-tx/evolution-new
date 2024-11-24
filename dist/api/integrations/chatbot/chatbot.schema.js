var l=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var J=(t,e)=>{for(var r in e)l(t,r,{get:e[r],enumerable:!0})},k=(t,e,r,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of S(e))!M.call(t,o)&&o!==r&&l(t,o,{get:()=>e[o],enumerable:!(u=h(e,o))||u.enumerable});return t};var F=t=>k(l({},"__esModule",{value:!0}),t);var H={};J(H,{chatwootSchema:()=>O,difyIgnoreJidSchema:()=>N,difySchema:()=>w,difySettingSchema:()=>T,difyStatusSchema:()=>f,evolutionBotIgnoreJidSchema:()=>B,evolutionBotSchema:()=>$,evolutionBotSettingSchema:()=>v,evolutionBotStatusSchema:()=>q,flowiseIgnoreJidSchema:()=>E,flowiseSchema:()=>j,flowiseSettingSchema:()=>I,flowiseStatusSchema:()=>C,openaiCredsSchema:()=>W,openaiIgnoreJidSchema:()=>K,openaiSchema:()=>P,openaiSettingSchema:()=>L,openaiStatusSchema:()=>U,typebotIgnoreJidSchema:()=>A,typebotSchema:()=>V,typebotSettingSchema:()=>G,typebotStartSchema:()=>D,typebotStatusSchema:()=>z});module.exports=F(H);var b=require("uuid"),x=(...t)=>{let e={};return t.forEach(r=>e[r]={minLength:1,description:`The "${r}" cannot be empty`}),{if:{propertyNames:{enum:[...t]}},then:{properties:e}}},O={$id:(0,b.v4)(),type:"object",properties:{enabled:{type:"boolean",enum:[!0,!1]},accountId:{type:"string"},token:{type:"string"},url:{type:"string"},signMsg:{type:"boolean",enum:[!0,!1]},signDelimiter:{type:["string","null"]},nameInbox:{type:["string","null"]},reopenConversation:{type:"boolean",enum:[!0,!1]},conversationPending:{type:"boolean",enum:[!0,!1]},autoCreate:{type:"boolean",enum:[!0,!1]},importContacts:{type:"boolean",enum:[!0,!1]},mergeBrazilContacts:{type:"boolean",enum:[!0,!1]},importMessages:{type:"boolean",enum:[!0,!1]},daysLimitImportMessages:{type:"number"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","accountId","token","url","signMsg","reopenConversation","conversationPending"],...x("enabled","accountId","token","url","signMsg","reopenConversation","conversationPending")};var s=require("uuid"),m=(...t)=>{let e={};return t.forEach(r=>e[r]={minLength:1,description:`The "${r}" cannot be empty`}),{if:{propertyNames:{enum:[...t]}},then:{properties:e}}},w={$id:(0,s.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},botType:{type:"string",enum:["chatBot","textGenerator","agent","workflow"]},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["enabled","botType","triggerType"],...m("enabled","botType","triggerType")},f={$id:(0,s.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...m("remoteJid","status")},T={$id:(0,s.v4)(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},difyIdFallback:{type:"string"},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar"],...m("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar")},N={$id:(0,s.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...m("remoteJid","action")};var p=require("uuid"),d=(...t)=>{let e={};return t.forEach(r=>e[r]={minLength:1,description:`The "${r}" cannot be empty`}),{if:{propertyNames:{enum:[...t]}},then:{properties:e}}},$={$id:(0,p.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["enabled","apiUrl","triggerType"],...d("enabled","apiUrl","triggerType")},q={$id:(0,p.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...d("remoteJid","status")},v={$id:(0,p.v4)(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},botIdFallback:{type:"string"},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar"],...d("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar")},B={$id:(0,p.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...d("remoteJid","action")};var a=require("uuid"),c=(...t)=>{let e={};return t.forEach(r=>e[r]={minLength:1,description:`The "${r}" cannot be empty`}),{if:{propertyNames:{enum:[...t]}},then:{properties:e}}},j={$id:(0,a.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","apiUrl","triggerType"],...c("enabled","apiUrl","triggerType")},C={$id:(0,a.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...c("remoteJid","status")},I={$id:(0,a.v4)(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},botIdFallback:{type:"string"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids"],...c("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids")},E={$id:(0,a.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...c("remoteJid","action")};var n=require("uuid"),y=(...t)=>{let e={};return t.forEach(r=>e[r]={minLength:1,description:`The "${r}" cannot be empty`}),{if:{propertyNames:{enum:[...t]}},then:{properties:e}}},P={$id:(0,n.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},openaiCredsId:{type:"string"},botType:{type:"string",enum:["assistant","chatCompletion"]},assistantId:{type:"string"},functionUrl:{type:"string"},model:{type:"string"},systemMessages:{type:"array",items:{type:"string"}},assistantMessages:{type:"array",items:{type:"string"}},userMessages:{type:"array",items:{type:"string"}},maxTokens:{type:"integer"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","openaiCredsId","botType","triggerType"],...y("enabled","openaiCredsId","botType","triggerType")},W={$id:(0,n.v4)(),type:"object",properties:{name:{type:"string"},apiKey:{type:"string"}},required:["name","apiKey"],...y("name","apiKey")},U={$id:(0,n.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...y("remoteJid","status")},L={$id:(0,n.v4)(),type:"object",properties:{openaiCredsId:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},speechToText:{type:"boolean"},ignoreJids:{type:"array",items:{type:"string"}},openaiIdFallback:{type:"string"}},required:["openaiCredsId","expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids"],...y("openaiCredsId","expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids")},K={$id:(0,n.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...y("remoteJid","action")};var i=require("uuid"),g=(...t)=>{let e={};return t.forEach(r=>e[r]={minLength:1,description:`The "${r}" cannot be empty`}),{if:{propertyNames:{enum:[...t]}},then:{properties:e}}},V={$id:(0,i.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},url:{type:"string"},typebot:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","url","typebot","triggerType"],...g("enabled","url","typebot","triggerType")},z={$id:(0,i.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...g("remoteJid","status")},D={$id:(0,i.v4)(),type:"object",properties:{remoteJid:{type:"string"},url:{type:"string"},typebot:{type:"string"}},required:["remoteJid","url","typebot"],...g("remoteJid","url","typebot")},G={$id:(0,i.v4)(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},typebotIdFallback:{type:"string"},ignoreJids:{type:"array",items:{type:"string"}}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe"],...g("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe")},A={$id:(0,i.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...g("remoteJid","action")};0&&(module.exports={chatwootSchema,difyIgnoreJidSchema,difySchema,difySettingSchema,difyStatusSchema,evolutionBotIgnoreJidSchema,evolutionBotSchema,evolutionBotSettingSchema,evolutionBotStatusSchema,flowiseIgnoreJidSchema,flowiseSchema,flowiseSettingSchema,flowiseStatusSchema,openaiCredsSchema,openaiIgnoreJidSchema,openaiSchema,openaiSettingSchema,openaiStatusSchema,typebotIgnoreJidSchema,typebotSchema,typebotSettingSchema,typebotStartSchema,typebotStatusSchema});
//# sourceMappingURL=chatbot.schema.js.map