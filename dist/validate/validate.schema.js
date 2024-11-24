var A=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var j=Object.prototype.hasOwnProperty;var L=(r,e)=>{for(var t in e)A(r,t,{get:e[t],enumerable:!0})},$=(r,e,t,E)=>{if(e&&typeof e=="object"||typeof e=="function")for(let y of D(e))!j.call(r,y)&&y!==t&&A(r,y,{get:()=>e[y],enumerable:!(E=v(e,y))||E.enumerable});return r};var R=r=>$(A({},"__esModule",{value:!0}),r);var ht={};L(ht,{AcceptGroupInviteSchema:()=>ce,archiveChatSchema:()=>H,audioMessageSchema:()=>Ce,blockUserSchema:()=>z,buttonsMessageSchema:()=>ve,chatwootSchema:()=>Be,contactMessageSchema:()=>qe,contactValidateSchema:()=>Z,createGroupSchema:()=>oe,deleteMessageSchema:()=>V,difyIgnoreJidSchema:()=>Ye,difySchema:()=>He,difySettingSchema:()=>Ve,difyStatusSchema:()=>We,eventSchema:()=>bt,evolutionBotIgnoreJidSchema:()=>Ze,evolutionBotSchema:()=>Ke,evolutionBotSettingSchema:()=>ze,evolutionBotStatusSchema:()=>Qe,flowiseIgnoreJidSchema:()=>rt,flowiseSchema:()=>Xe,flowiseSettingSchema:()=>tt,flowiseStatusSchema:()=>et,getParticipantsSchema:()=>pe,groupInviteSchema:()=>me,groupJidSchema:()=>se,groupSendInviteSchema:()=>ae,handleLabelSchema:()=>Ne,instanceSchema:()=>he,listMessageSchema:()=>Ue,locationMessageSchema:()=>_e,markChatUnreadSchema:()=>W,mediaMessageSchema:()=>Me,messageUpSchema:()=>ee,messageValidateSchema:()=>X,offerCallSchema:()=>fe,openaiCredsSchema:()=>it,openaiIgnoreJidSchema:()=>pt,openaiSchema:()=>nt,openaiSettingSchema:()=>st,openaiStatusSchema:()=>ot,pollMessageSchema:()=>we,presenceOnlySchema:()=>Te,presenceSchema:()=>Q,privacySettingsSchema:()=>te,profileNameSchema:()=>re,profilePictureSchema:()=>Y,profileSchema:()=>ie,profileStatusSchema:()=>ne,proxySchema:()=>je,ptvMessageSchema:()=>Ie,pusherSchema:()=>ut,reactionMessageSchema:()=>ke,readMessageSchema:()=>B,settingsSchema:()=>$e,statusMessageSchema:()=>xe,stickerMessageSchema:()=>Pe,templateMessageSchema:()=>Je,templateSchema:()=>Fe,textMessageSchema:()=>Ae,toggleEphemeralSchema:()=>de,typebotIgnoreJidSchema:()=>gt,typebotSchema:()=>at,typebotSettingSchema:()=>yt,typebotStartSchema:()=>ct,typebotStatusSchema:()=>mt,updateGroupDescriptionSchema:()=>Se,updateGroupPictureSchema:()=>ue,updateGroupSubjectSchema:()=>le,updateMessageSchema:()=>K,updateParticipantsSchema:()=>ye,updateSettingsSchema:()=>ge,webhookSchema:()=>St,whatsappNumberSchema:()=>G});module.exports=R(ht);var n=require("uuid"),i=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},F={type:"string",description:"Invalid format"},G={$id:(0,n.v4)(),type:"object",properties:{numbers:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",description:'"numbers" must be an array of numeric strings'}}}},B={$id:(0,n.v4)(),type:"object",properties:{readMessages:{type:"array",minItems:1,uniqueItems:!0,items:{properties:{id:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]},remoteJid:{type:"string"}},required:["id","fromMe","remoteJid"],...i("id","remoteJid")}}},required:["readMessages"]},H={$id:(0,n.v4)(),type:"object",properties:{chat:{type:"string"},lastMessage:{type:"object",properties:{key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id","fromMe","remoteJid"],...i("id","remoteJid")},messageTimestamp:{type:"integer",minLength:1}},required:["key"],...i("messageTimestamp")},archive:{type:"boolean",enum:[!0,!1]}},required:["archive"]},W={$id:(0,n.v4)(),type:"object",properties:{chat:{type:"string"},lastMessage:{type:"object",properties:{key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id","fromMe","remoteJid"],...i("id","remoteJid")},messageTimestamp:{type:"integer",minLength:1}},required:["key"],...i("messageTimestamp")}},required:["lastMessage"]},V={$id:(0,n.v4)(),type:"object",properties:{id:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]},remoteJid:{type:"string"},participant:{type:"string"}},required:["id","fromMe","remoteJid"],...i("id","remoteJid","participant")},Y={$id:(0,n.v4)(),type:"object",properties:{number:{type:"string"},picture:{type:"string"}}},K={$id:(0,n.v4)(),type:"object",properties:{number:{type:"string"},text:{type:"string"},key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id","fromMe","remoteJid"],...i("id","remoteJid")}},...i("number","text","key")},Q={$id:(0,n.v4)(),type:"object",properties:{number:{...F},delay:{type:"number"},presence:{type:"string",enum:["unavailable","available","composing","recording","paused"]}},required:["number","presence","delay"]},z={$id:(0,n.v4)(),type:"object",properties:{number:{type:"string"},status:{type:"string",enum:["block","unblock"]}},required:["number","status"],...i("number","status")},Z={$id:(0,n.v4)(),type:"object",properties:{where:{type:"object",properties:{_id:{type:"string",minLength:1},pushName:{type:"string",minLength:1},id:{type:"string",minLength:1}},...i("_id","id","pushName")}}},X={$id:(0,n.v4)(),type:"object",properties:{where:{type:"object",properties:{_id:{type:"string",minLength:1},key:{type:"object",if:{propertyNames:{enum:["fromMe","remoteJid","id"]}},then:{properties:{remoteJid:{type:"string",minLength:1,description:"The property cannot be empty"},id:{type:"string",minLength:1,description:"The property cannot be empty"},fromMe:{type:"boolean",enum:[!0,!1]}}}},message:{type:"object"}},...i("_id")},limit:{type:"integer"}}},ee={$id:(0,n.v4)(),type:"object",properties:{where:{type:"object",properties:{_id:{type:"string"},remoteJid:{type:"string"},id:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]},participant:{type:"string"},status:{type:"string",enum:["ERROR","PENDING","SERVER_ACK","DELIVERY_ACK","READ","PLAYED"]}},...i("_id","remoteJid","id","status")},limit:{type:"integer"}}},te={$id:(0,n.v4)(),type:"object",properties:{readreceipts:{type:"string",enum:["all","none"]},profile:{type:"string",enum:["all","contacts","contact_blacklist","none"]},status:{type:"string",enum:["all","contacts","contact_blacklist","none"]},online:{type:"string",enum:["all","match_last_seen"]},last:{type:"string",enum:["all","contacts","contact_blacklist","none"]},groupadd:{type:"string",enum:["all","contacts","contact_blacklist","none"]}},required:["readreceipts","profile","status","online","last","groupadd"],...i("readreceipts","profile","status","online","last","groupadd")},re={$id:(0,n.v4)(),type:"object",properties:{name:{type:"string"}},...i("name")},ne={$id:(0,n.v4)(),type:"object",properties:{status:{type:"string"}},...i("status")},ie={type:"object",properties:{wuid:{type:"string"},name:{type:"string"},picture:{type:"string"},status:{type:"string"},isBusiness:{type:"boolean"}}};var s=require("uuid"),p=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},oe={$id:(0,s.v4)(),type:"object",properties:{subject:{type:"string"},description:{type:"string"},profilePicture:{type:"string"},promoteParticipants:{type:"boolean",enum:[!0,!1]},participants:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",minLength:10,pattern:"\\d+",description:'"participants" must be an array of numeric strings'}}},required:["subject","participants"],...p("subject","description","profilePicture")},se={$id:(0,s.v4)(),type:"object",properties:{groupJid:{type:"string",pattern:"^[\\d-]+@g.us$"}},required:["groupJid"],...p("groupJid")},pe={$id:(0,s.v4)(),type:"object",properties:{getParticipants:{type:"string",enum:["true","false"]}},required:["getParticipants"],...p("getParticipants")},ae={$id:(0,s.v4)(),type:"object",properties:{groupJid:{type:"string"},description:{type:"string"},numbers:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",minLength:10,pattern:"\\d+",description:'"numbers" must be an array of numeric strings'}}},required:["groupJid","description","numbers"],...p("groupJid","description","numbers")},me={$id:(0,s.v4)(),type:"object",properties:{inviteCode:{type:"string",pattern:"^[a-zA-Z0-9]{22}$"}},required:["inviteCode"],...p("inviteCode")},ce={$id:(0,s.v4)(),type:"object",properties:{inviteCode:{type:"string",pattern:"^[a-zA-Z0-9]{22}$"}},required:["inviteCode"],...p("inviteCode")},ye={$id:(0,s.v4)(),type:"object",properties:{groupJid:{type:"string"},action:{type:"string",enum:["add","remove","promote","demote"]},participants:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",minLength:10,pattern:"\\d+",description:'"participants" must be an array of numeric strings'}}},required:["groupJid","action","participants"],...p("groupJid","action")},ge={$id:(0,s.v4)(),type:"object",properties:{groupJid:{type:"string"},action:{type:"string",enum:["announcement","not_announcement","locked","unlocked"]}},required:["groupJid","action"],...p("groupJid","action")},de={$id:(0,s.v4)(),type:"object",properties:{groupJid:{type:"string"},expiration:{type:"number",enum:[0,86400,604800,7776e3]}},required:["groupJid","expiration"],...p("groupJid","expiration")},ue={$id:(0,s.v4)(),type:"object",properties:{groupJid:{type:"string"},image:{type:"string"}},required:["groupJid","image"],...p("groupJid","image")},le={$id:(0,s.v4)(),type:"object",properties:{groupJid:{type:"string"},subject:{type:"string"}},required:["groupJid","subject"],...p("groupJid","subject")},Se={$id:(0,s.v4)(),type:"object",properties:{groupJid:{type:"string"},description:{type:"string"}},required:["groupJid","description"],...p("groupJid","description")};var I={WHATSAPP_BUSINESS:"WHATSAPP-BUSINESS",WHATSAPP_BAILEYS:"WHATSAPP-BAILEYS",EVOLUTION:"EVOLUTION"};var M=require("uuid"),be=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},he={$id:(0,M.v4)(),type:"object",properties:{instanceName:{type:"string"},token:{type:"string"},number:{type:"string",pattern:"^\\d+[\\.@\\w-]+"},businessId:{type:"string"},qrcode:{type:"boolean"},Integration:{type:"string",enum:Object.values(I)},rejectCall:{type:"boolean"},msgCall:{type:"string"},groupsIgnore:{type:"boolean"},alwaysOnline:{type:"boolean"},readMessages:{type:"boolean"},readStatus:{type:"boolean"},syncFullHistory:{type:"boolean"},proxyHost:{type:"string"},proxyPort:{type:"string"},proxyProtocol:{type:"string"},proxyUsername:{type:"string"},proxyPassword:{type:"string"},webhookUrl:{type:"string"},webhookByEvents:{type:"boolean"},webhookBase64:{type:"boolean"},webhookEvents:{type:"array",minItems:0,items:{type:"string",enum:["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS"]}},rabbitmqEnabled:{type:"boolean"},rabbitmqEvents:{type:"array",minItems:0,items:{type:"string",enum:["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS"]}},sqsEnabled:{type:"boolean"},sqsEvents:{type:"array",minItems:0,items:{type:"string",enum:["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS"]}},chatwootAccountId:{type:"string"},chatwootToken:{type:"string"},chatwootUrl:{type:"string"},chatwootSignMsg:{type:"boolean"},chatwootReopenConversation:{type:"boolean"},chatwootConversationPending:{type:"boolean"},chatwootImportContacts:{type:"boolean"},chatwootNameInbox:{type:"string"},chatwootMergeBrazilContacts:{type:"boolean"},chatwootImportMessages:{type:"boolean"},chatwootDaysLimitImportMessages:{type:"number"}},...be("instanceName")},Te={$id:(0,M.v4)(),type:"object",properties:{presence:{type:"string",enum:["unavailable","available","composing","recording","paused"]}},required:["presence"]};var C=require("uuid"),Ee=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},Oe={type:"string",description:"Invalid format"},Ne={$id:(0,C.v4)(),type:"object",properties:{number:{...Oe},labelId:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["number","labelId","action"],...Ee("number","labelId","action")};var o=require("uuid"),g=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},a={type:"string",description:"Invalid format"},Je={$id:(0,o.v4)(),type:"object",properties:{number:{...a},name:{type:"string"},language:{type:"string"},components:{type:"array"},webhookUrl:{type:"string"}},required:["name","language"]},m={properties:{key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id"],...g("id")},message:{type:"object"}}},fe={$id:(0,o.v4)(),type:"object",properties:{number:{...a},isVideo:{type:"boolean",enum:[!0,!1]},callDuration:{type:"integer",minimum:1,maximum:15}},required:["number","callDuration"]},Ae={$id:(0,o.v4)(),type:"object",properties:{number:{...a},text:{type:"string"},linkPreview:{type:"boolean"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...m},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","text"]},Me={$id:(0,o.v4)(),type:"object",properties:{number:{...a},mediatype:{type:"string",enum:["image","document","video","audio"]},mimetype:{type:"string"},media:{type:"string"},fileName:{type:"string"},caption:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...m},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","mediatype"]},Ie={$id:(0,o.v4)(),type:"object",properties:{number:{...a},video:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...m},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]},Ce={$id:(0,o.v4)(),type:"object",properties:{number:{...a},audio:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...m},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]},xe={$id:(0,o.v4)(),type:"object",properties:{type:{type:"string",enum:["text","image","audio","video"]},content:{type:"string"},caption:{type:"string"},backgroundColor:{type:"string"},font:{type:"integer",minimum:0,maximum:5},statusJidList:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"statusJidList" must be an array of numeric strings'}},allContacts:{type:"boolean",enum:[!0,!1]}},required:["type"]},Pe={$id:(0,o.v4)(),type:"object",properties:{number:{...a},sticker:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...m},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]},_e={$id:(0,o.v4)(),type:"object",properties:{number:{...a},latitude:{type:"number"},longitude:{type:"number"},name:{type:"string"},address:{type:"string"},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...m},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","latitude","longitude","name","address"]},qe={$id:(0,o.v4)(),type:"object",properties:{number:{...a},contact:{type:"array",items:{type:"object",properties:{fullName:{type:"string"},wuid:{type:"string",minLength:10,pattern:"\\d+",description:'"wuid" must be a numeric string'},phoneNumber:{type:"string",minLength:10},organization:{type:"string"},email:{type:"string"},url:{type:"string"}},required:["fullName","phoneNumber"],...g("fullName")},minItems:1,uniqueItems:!0}},required:["number","contact"]},ke={$id:(0,o.v4)(),type:"object",properties:{key:{type:"object",properties:{id:{type:"string"},remoteJid:{type:"string"},fromMe:{type:"boolean",enum:[!0,!1]}},required:["id","remoteJid","fromMe"],...g("id","remoteJid")},reaction:{type:"string"}},required:["key","reaction"]},we={$id:(0,o.v4)(),type:"object",properties:{number:{...a},name:{type:"string"},selectableCount:{type:"integer",minimum:0,maximum:10},values:{type:"array",minItems:2,maxItems:10,uniqueItems:!0,items:{type:"string"}},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...m},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","name","selectableCount","values"]},Ue={$id:(0,o.v4)(),type:"object",properties:{number:{...a},title:{type:"string"},description:{type:"string"},footerText:{type:"string"},buttonText:{type:"string"},sections:{type:"array",minItems:1,uniqueItems:!0,items:{type:"object",properties:{title:{type:"string"},rows:{type:"array",minItems:1,uniqueItems:!0,items:{type:"object",properties:{title:{type:"string"},description:{type:"string"},rowId:{type:"string"}},required:["title","rowId"],...g("title","description","rowId")}}},required:["title","rows"],...g("title")}},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...m},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number","title","footerText","buttonText","sections"]},ve={$id:(0,o.v4)(),type:"object",properties:{number:{...a},thumbnailUrl:{type:"string"},title:{type:"string"},description:{type:"string"},footer:{type:"string"},buttons:{type:"array",items:{type:"object",properties:{type:{type:"string",enum:["reply","copy","url","call","pix"]},displayText:{type:"string"},id:{type:"string"},url:{type:"string"},phoneNumber:{type:"string"},currency:{type:"string"},name:{type:"string"},keyType:{type:"string",enum:["phone","email","cpf","cnpj","random"]},key:{type:"string"}},required:["type"],...g("id","url","phoneNumber")}},delay:{type:"integer",description:"Enter a value in milliseconds"},quoted:{...m},everyOne:{type:"boolean",enum:[!0,!1]},mentioned:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",pattern:"^\\d+",description:'"mentioned" must be an array of numeric strings'}}},required:["number"]};var x=require("uuid"),De=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},je={$id:(0,x.v4)(),type:"object",properties:{enabled:{type:"boolean",enum:[!0,!1]},host:{type:"string"},port:{type:"string"},protocol:{type:"string"},username:{type:"string"},password:{type:"string"}},required:["enabled","host","port","protocol"],...De("enabled","host","port","protocol")};var P=require("uuid"),Le=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},$e={$id:(0,P.v4)(),type:"object",properties:{rejectCall:{type:"boolean"},msgCall:{type:"string"},groupsIgnore:{type:"boolean"},alwaysOnline:{type:"boolean"},readMessages:{type:"boolean"},readStatus:{type:"boolean"},syncFullHistory:{type:"boolean"}},required:["rejectCall","groupsIgnore","alwaysOnline","readMessages","readStatus","syncFullHistory"],...Le("rejectCall","groupsIgnore","alwaysOnline","readMessages","readStatus","syncFullHistory")};var _=require("uuid"),Re=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},Fe={$id:(0,_.v4)(),type:"object",properties:{name:{type:"string"},category:{type:"string",enum:["AUTHENTICATION","MARKETING","UTILITY"]},allowCategoryChange:{type:"boolean"},language:{type:"string"},components:{type:"array"},webhookUrl:{type:"string"}},required:["name","category","language","components"],...Re("name","category","language","components")};var q=require("uuid"),Ge=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},Be={$id:(0,q.v4)(),type:"object",properties:{enabled:{type:"boolean",enum:[!0,!1]},accountId:{type:"string"},token:{type:"string"},url:{type:"string"},signMsg:{type:"boolean",enum:[!0,!1]},signDelimiter:{type:["string","null"]},nameInbox:{type:["string","null"]},reopenConversation:{type:"boolean",enum:[!0,!1]},conversationPending:{type:"boolean",enum:[!0,!1]},autoCreate:{type:"boolean",enum:[!0,!1]},importContacts:{type:"boolean",enum:[!0,!1]},mergeBrazilContacts:{type:"boolean",enum:[!0,!1]},importMessages:{type:"boolean",enum:[!0,!1]},daysLimitImportMessages:{type:"number"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","accountId","token","url","signMsg","reopenConversation","conversationPending"],...Ge("enabled","accountId","token","url","signMsg","reopenConversation","conversationPending")};var l=require("uuid"),O=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},He={$id:(0,l.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},botType:{type:"string",enum:["chatBot","textGenerator","agent","workflow"]},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["enabled","botType","triggerType"],...O("enabled","botType","triggerType")},We={$id:(0,l.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...O("remoteJid","status")},Ve={$id:(0,l.v4)(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},difyIdFallback:{type:"string"},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar"],...O("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar")},Ye={$id:(0,l.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...O("remoteJid","action")};var S=require("uuid"),N=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},Ke={$id:(0,S.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["enabled","apiUrl","triggerType"],...N("enabled","apiUrl","triggerType")},Qe={$id:(0,S.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...N("remoteJid","status")},ze={$id:(0,S.v4)(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},botIdFallback:{type:"string"},splitMessages:{type:"boolean"},timePerChar:{type:"integer"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar"],...N("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids","splitMessages","timePerChar")},Ze={$id:(0,S.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...N("remoteJid","action")};var b=require("uuid"),J=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},Xe={$id:(0,b.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},apiUrl:{type:"string"},apiKey:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","apiUrl","triggerType"],...J("enabled","apiUrl","triggerType")},et={$id:(0,b.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...J("remoteJid","status")},tt={$id:(0,b.v4)(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}},botIdFallback:{type:"string"}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids"],...J("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids")},rt={$id:(0,b.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...J("remoteJid","action")};var d=require("uuid"),h=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},nt={$id:(0,d.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},openaiCredsId:{type:"string"},botType:{type:"string",enum:["assistant","chatCompletion"]},assistantId:{type:"string"},functionUrl:{type:"string"},model:{type:"string"},systemMessages:{type:"array",items:{type:"string"}},assistantMessages:{type:"array",items:{type:"string"}},userMessages:{type:"array",items:{type:"string"}},maxTokens:{type:"integer"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","openaiCredsId","botType","triggerType"],...h("enabled","openaiCredsId","botType","triggerType")},it={$id:(0,d.v4)(),type:"object",properties:{name:{type:"string"},apiKey:{type:"string"}},required:["name","apiKey"],...h("name","apiKey")},ot={$id:(0,d.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...h("remoteJid","status")},st={$id:(0,d.v4)(),type:"object",properties:{openaiCredsId:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},speechToText:{type:"boolean"},ignoreJids:{type:"array",items:{type:"string"}},openaiIdFallback:{type:"string"}},required:["openaiCredsId","expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids"],...h("openaiCredsId","expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe","keepOpen","debounceTime","ignoreJids")},pt={$id:(0,d.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...h("remoteJid","action")};var u=require("uuid"),T=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},at={$id:(0,u.v4)(),type:"object",properties:{enabled:{type:"boolean"},description:{type:"string"},url:{type:"string"},typebot:{type:"string"},triggerType:{type:"string",enum:["all","keyword","none","advanced"]},triggerOperator:{type:"string",enum:["equals","contains","startsWith","endsWith","regex"]},triggerValue:{type:"string"},expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},ignoreJids:{type:"array",items:{type:"string"}}},required:["enabled","url","typebot","triggerType"],...T("enabled","url","typebot","triggerType")},mt={$id:(0,u.v4)(),type:"object",properties:{remoteJid:{type:"string"},status:{type:"string",enum:["opened","closed","paused","delete"]}},required:["remoteJid","status"],...T("remoteJid","status")},ct={$id:(0,u.v4)(),type:"object",properties:{remoteJid:{type:"string"},url:{type:"string"},typebot:{type:"string"}},required:["remoteJid","url","typebot"],...T("remoteJid","url","typebot")},yt={$id:(0,u.v4)(),type:"object",properties:{expire:{type:"integer"},keywordFinish:{type:"string"},delayMessage:{type:"integer"},unknownMessage:{type:"string"},listeningFromMe:{type:"boolean"},stopBotFromMe:{type:"boolean"},keepOpen:{type:"boolean"},debounceTime:{type:"integer"},typebotIdFallback:{type:"string"},ignoreJids:{type:"array",items:{type:"string"}}},required:["expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe"],...T("expire","keywordFinish","delayMessage","unknownMessage","listeningFromMe","stopBotFromMe")},gt={$id:(0,u.v4)(),type:"object",properties:{remoteJid:{type:"string"},action:{type:"string",enum:["add","remove"]}},required:["remoteJid","action"],...T("remoteJid","action")};var U=require("uuid");var f=class f{constructor(e,t,E,y){this.prisma=e,this.monitor=t,this.status=E,this.name=y}set prisma(e){this.prismaRepository=e}get prisma(){return this.prismaRepository}set monitor(e){this.waMonitor=e}get monitor(){return this.waMonitor}set name(e){this.integrationName=e}get name(){return this.integrationName}set status(e){this.integrationStatus=e}get status(){return this.integrationStatus}async set(e,t){if(this.status)return t[this.name]?.enabled?t[this.name].events.length===0&&(t[this.name].events=f.events):t[this.name].events=[],this.prisma[this.name].upsert({where:{instanceId:this.monitor.waInstances[e].instanceId},update:{enabled:t[this.name]?.enabled,events:t[this.name].events},create:{enabled:t[this.name]?.enabled,events:t[this.name].events,instanceId:this.monitor.waInstances[e].instanceId}})}async get(e){if(!this.status)return;if(this.monitor.waInstances[e]===void 0)return null;let t=await this.prisma[this.name].findUnique({where:{instanceId:this.monitor.waInstances[e].instanceId}});return t||null}};f.events=["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS","REMOVE_INSTANCE","LOGOUT_INSTANCE"];var c=f;var k=require("uuid");var dt=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},ut={$id:(0,k.v4)(),type:"object",properties:{pusher:{type:"object",properties:{enabled:{type:"boolean"},appId:{type:"string"},key:{type:"string"},secret:{type:"string"},cluster:{type:"string"},useTLS:{type:"boolean"},events:{type:"array",minItems:0,items:{type:"string",enum:c.events}}},required:["enabled","appId","key","secret","cluster","useTLS"],...dt("enabled","appId","key","secret","cluster","useTLS")}},required:["pusher"]};var w=require("uuid");var lt=(...r)=>{let e={};return r.forEach(t=>e[t]={minLength:1,description:`The "${t}" cannot be empty`}),{if:{propertyNames:{enum:[...r]}},then:{properties:e}}},St={$id:(0,w.v4)(),type:"object",properties:{webhook:{type:"object",properties:{enabled:{type:"boolean"},url:{type:"string"},headers:{type:"object"},byEvents:{type:"boolean"},base64:{type:"boolean"},events:{type:"array",minItems:0,items:{type:"string",enum:c.events}}},required:["enabled","url"],...lt("enabled","url")}},required:["webhook"]};var bt={$id:(0,U.v4)(),type:"object",properties:{websocket:{$ref:"#/$defs/event"},rabbitmq:{$ref:"#/$defs/event"},sqs:{$ref:"#/$defs/event"}},$defs:{event:{type:"object",properties:{enabled:{type:"boolean",enum:[!0,!1]},events:{type:"array",minItems:0,items:{type:"string",enum:c.events}}},required:["enabled"]}}};0&&(module.exports={AcceptGroupInviteSchema,archiveChatSchema,audioMessageSchema,blockUserSchema,buttonsMessageSchema,chatwootSchema,contactMessageSchema,contactValidateSchema,createGroupSchema,deleteMessageSchema,difyIgnoreJidSchema,difySchema,difySettingSchema,difyStatusSchema,eventSchema,evolutionBotIgnoreJidSchema,evolutionBotSchema,evolutionBotSettingSchema,evolutionBotStatusSchema,flowiseIgnoreJidSchema,flowiseSchema,flowiseSettingSchema,flowiseStatusSchema,getParticipantsSchema,groupInviteSchema,groupJidSchema,groupSendInviteSchema,handleLabelSchema,instanceSchema,listMessageSchema,locationMessageSchema,markChatUnreadSchema,mediaMessageSchema,messageUpSchema,messageValidateSchema,offerCallSchema,openaiCredsSchema,openaiIgnoreJidSchema,openaiSchema,openaiSettingSchema,openaiStatusSchema,pollMessageSchema,presenceOnlySchema,presenceSchema,privacySettingsSchema,profileNameSchema,profilePictureSchema,profileSchema,profileStatusSchema,proxySchema,ptvMessageSchema,pusherSchema,reactionMessageSchema,readMessageSchema,settingsSchema,statusMessageSchema,stickerMessageSchema,templateMessageSchema,templateSchema,textMessageSchema,toggleEphemeralSchema,typebotIgnoreJidSchema,typebotSchema,typebotSettingSchema,typebotStartSchema,typebotStatusSchema,updateGroupDescriptionSchema,updateGroupPictureSchema,updateGroupSubjectSchema,updateMessageSchema,updateParticipantsSchema,updateSettingsSchema,webhookSchema,whatsappNumberSchema});
//# sourceMappingURL=validate.schema.js.map