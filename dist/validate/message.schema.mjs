import{v4 as e}from"uuid";var n=(...i)=>{let s={};return i.forEach(o=>s[o]={minLength:1,description:`The "${o}" cannot be empty`}),{if:{propertyNames:{enum:[...i]}},then:{properties:s}}},t={type:"string",description:"Invalid format"},p={$id:e(),type:"object",properties:{number:{...t},name:{type:"string"},language:{type:"string"},components:{type:"array"},webhookUrl:{type:"string"}},required:["name","language"]},r={properties:{key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id"],...n("id")},message:{type:"object"}}},a={$id:e(),type:"object",properties:{number:{...t},isVideo:{type:"boolean",enum:[!0,!1]},callDuration:{type:"integer",minimum:1,maximum:15}},required:["number","callDuration"]},u={$id:e(),type:"object",properties:{number:{...t},text:{type:"string"},linkPreview:{type:"boolean"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...r},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","text"]},y={$id:e(),type:"object",properties:{number:{...t},mediatype:{type:"string",enum:["image","document","video","audio"]},mimetype:{type:"string"},media:{type:"string"},fileName:{type:"string"},caption:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...r},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","mediatype"]},d={$id:e(),type:"object",properties:{number:{...t},video:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...r},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]},c={$id:e(),type:"object",properties:{number:{...t},audio:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...r},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]},l={$id:e(),type:"object",properties:{type:{type:"string",enum:["text","image","audio","video"]},content:{type:"string"},caption:{type:"string"},backgroundColor:{type:"string"},font:{type:"integer",minimum:0,maximum:5},statusJidList:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"statusJidList" must be an array of numeric strings'}},allContacts:{type:"boolean",enum:[!0,!1]}},required:["type"]},g={$id:e(),type:"object",properties:{number:{...t},sticker:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...r},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]},b={$id:e(),type:"object",properties:{number:{...t},latitude:{type:"number"},longitude:{type:"number"},name:{type:"string"},address:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...r},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","latitude","longitude","name","address"]},S={$id:e(),type:"object",properties:{number:{...t},contact:{type:"array",items:{type:"object",properties:{fullName:{type:"string"},wuid:{type:"string",minLength:10,pattern:"\\d+",description:'"wuid" must be a numeric string'},phoneNumber:{type:"string",minLength:10},organization:{type:"string"},email:{type:"string"},url:{type:"string"}},required:["fullName","phoneNumber"],...n("fullName")},minItems:1,uniqueItems:!0}},required:["number","contact"]},h={$id:e(),type:"object",properties:{key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id","remoteJid","fromMe"],...n("id","remoteJid")},reaction:{type:"string"}},required:["key","reaction"]},f={$id:e(),type:"object",properties:{number:{...t},name:{type:"string"},selectableCount:{type:"integer",minimum:0,maximum:10},values:{type:"array",minItems:2,maxItems:10,uniqueItems:!0,items:{type:"string"}},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...r},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","name","selectableCount","values"]},q={$id:e(),type:"object",properties:{number:{...t},title:{type:"string"},description:{type:"string"},footerText:{type:"string"},buttonText:{type:"string"},sections:{type:"array",minItems:1,uniqueItems:!0,items:{type:"object",properties:{title:{type:"string"},rows:{type:"array",minItems:1,uniqueItems:!0,items:{type:"object",properties:{title:{type:"string"},description:{type:"string"},rowId:{type:"string"}},required:["title","rowId"],...n("title","description","rowId")}}},required:["title","rows"],...n("title")}},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...r},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","title","footerText","buttonText","sections"]},I={$id:e(),type:"object",properties:{number:{...t},thumbnailUrl:{type:"string"},title:{type:"string"},description:{type:"string"},footer:{type:"string"},buttons:{type:"array",items:{type:"object",properties:{type:{type:"string",enum:["reply","copy","url","call","pix"]},displayText:{type:"string"},id:{type:"string"},url:{type:"string"},phoneNumber:{type:"string"},currency:{type:"string"},name:{type:"string"},keyType:{type:"string",enum:["phone","email","cpf","cnpj","random"]},key:{type:"string"}},required:["type"],...n("id","url","phoneNumber")}},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...r},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]};export{c as audioMessageSchema,I as buttonsMessageSchema,S as contactMessageSchema,q as listMessageSchema,b as locationMessageSchema,y as mediaMessageSchema,a as offerCallSchema,f as pollMessageSchema,d as ptvMessageSchema,h as reactionMessageSchema,l as statusMessageSchema,g as stickerMessageSchema,p as templateMessageSchema,u as textMessageSchema};
//# sourceMappingURL=message.schema.mjs.map