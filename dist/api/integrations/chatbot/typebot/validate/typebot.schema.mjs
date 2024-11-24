import{v4 as e}from"uuid";var t=(...r)=>{let o={};return r.forEach(i=>o[i]={minLength:1,description:`The "${i}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:o}}},p={$id:e(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},url:{type:"string"},typebot:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","url","typebot","triggerType"],...t("enabled","url","typebot","triggerType")},s={$id:e(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...t("remoteJid","status")},y={$id:e(),type:"object",properties:{remoteJid:{type:"string"},url:{type:"string"},typebot:{type:"string"}},required:["remoteJid","url","typebot"],...t("remoteJid","url","typebot")},a={$id:e(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},typebotIdFallback:{type:"string"},ignoreJids:{type:"array",items:{type:"string"}}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe"],...t("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe")},g={$id:e(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...t("remoteJid","action")};export{g as typebotIgnoreJidSchema,p as typebotSchema,a as typebotSettingSchema,y as typebotStartSchema,s as typebotStatusSchema};
//# sourceMappingURL=typebot.schema.mjs.map