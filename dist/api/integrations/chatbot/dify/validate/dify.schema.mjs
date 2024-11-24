import{v4 as e}from"uuid";var t=(...i)=>{let r={};return i.forEach(n=>r[n]={minLength:1,description:`The "${n}" cannot be empty`}),{if:{propertyNames:{enum:[...i]}},then:{properties:r}}},s={$id:e(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},botType:{type:"string",enum:["chatBot","textGenerator","agent","workflow"]},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["enabled","botType","triggerType"],...t("enabled","botType","triggerType")},p={$id:e(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...t("remoteJid","status")},a={$id:e(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},difyIdFallback:{type:"string"},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar"],...t("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar")},y={$id:e(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...t("remoteJid","action")};export{y as difyIgnoreJidSchema,s as difySchema,a as difySettingSchema,p as difyStatusSchema};
//# sourceMappingURL=dify.schema.mjs.map