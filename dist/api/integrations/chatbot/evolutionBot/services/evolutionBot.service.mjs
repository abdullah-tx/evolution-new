var R={WHATSAPP_BUSINESS:"WHATSAPP-BUSINESS",WHATSAPP_BAILEYS:"WHATSAPP-BAILEYS",EVOLUTION:"EVOLUTION"};import w from"dayjs";import Q from"fs";import{isBooleanString as b}from"class-validator";import Y from"dotenv";Y.config();var D=class{constructor(){this.loadEnv()}get(e){return this.env[e]}loadEnv(){this.env=this.envProcess(),this.env.PRODUCTION=process.env?.NODE_ENV==="PROD",process.env?.DOCKER_ENV==="true"&&(this.env.SERVER.TYPE=process.env.SERVER_TYPE,this.env.SERVER.PORT=Number.parseInt(process.env.SERVER_PORT)||8080)}envProcess(){return{SERVER:{TYPE:process.env.SERVER_TYPE||"http",PORT:Number.parseInt(process.env.SERVER_PORT)||8080,URL:process.env.SERVER_URL,DISABLE_DOCS:process.env?.SERVER_DISABLE_DOCS==="true",DISABLE_MANAGER:process.env?.SERVER_DISABLE_MANAGER==="true"},CORS:{ORIGIN:process.env.CORS_ORIGIN?.split(",")||["*"],METHODS:process.env.CORS_METHODS?.split(",")||["POST","GET","PUT","DELETE"],CREDENTIALS:process.env?.CORS_CREDENTIALS==="true"},SSL_CONF:{PRIVKEY:process.env?.SSL_CONF_PRIVKEY||"",FULLCHAIN:process.env?.SSL_CONF_FULLCHAIN||""},PROVIDER:{ENABLED:process.env?.PROVIDER_ENABLED==="true",HOST:process.env.PROVIDER_HOST,PORT:process.env?.PROVIDER_PORT||"5656",PREFIX:process.env?.PROVIDER_PREFIX||"evolution"},DATABASE:{CONNECTION:{URI:process.env.DATABASE_CONNECTION_URI||"",CLIENT_NAME:process.env.DATABASE_CONNECTION_CLIENT_NAME||"evolution"},PROVIDER:process.env.DATABASE_PROVIDER||"postgresql",SAVE_DATA:{INSTANCE:process.env?.DATABASE_SAVE_DATA_INSTANCE==="true",NEW_MESSAGE:process.env?.DATABASE_SAVE_DATA_NEW_MESSAGE==="true",MESSAGE_UPDATE:process.env?.DATABASE_SAVE_MESSAGE_UPDATE==="true",CONTACTS:process.env?.DATABASE_SAVE_DATA_CONTACTS==="true",CHATS:process.env?.DATABASE_SAVE_DATA_CHATS==="true",HISTORIC:process.env?.DATABASE_SAVE_DATA_HISTORIC==="true",LABELS:process.env?.DATABASE_SAVE_DATA_LABELS==="true",IS_ON_WHATSAPP:process.env?.DATABASE_SAVE_IS_ON_WHATSAPP==="true",IS_ON_WHATSAPP_DAYS:Number.parseInt(process.env?.DATABASE_SAVE_IS_ON_WHATSAPP_DAYS??"7")},DELETE_DATA:{LOGICAL_MESSAGE_DELETE:process.env?.DATABASE_DELETE_MESSAGE==="true"}},RABBITMQ:{ENABLED:process.env?.RABBITMQ_ENABLED==="true",GLOBAL_ENABLED:process.env?.RABBITMQ_GLOBAL_ENABLED==="true",EXCHANGE_NAME:process.env?.RABBITMQ_EXCHANGE_NAME||"evolution_exchange",URI:process.env.RABBITMQ_URI||"",EVENTS:{APPLICATION_STARTUP:process.env?.RABBITMQ_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.RABBITMQ_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.RABBITMQ_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.RABBITMQ_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.RABBITMQ_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.RABBITMQ_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.RABBITMQ_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.RABBITMQ_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.RABBITMQ_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.RABBITMQ_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.RABBITMQ_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.RABBITMQ_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.RABBITMQ_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.RABBITMQ_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.RABBITMQ_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.RABBITMQ_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.RABBITMQ_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.RABBITMQ_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.RABBITMQ_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.RABBITMQ_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.RABBITMQ_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.RABBITMQ_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.RABBITMQ_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.RABBITMQ_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.RABBITMQ_EVENTS_CALL==="true",TYPEBOT_START:process.env?.RABBITMQ_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.RABBITMQ_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},SQS:{ENABLED:process.env?.SQS_ENABLED==="true",ACCESS_KEY_ID:process.env.SQS_ACCESS_KEY_ID||"",SECRET_ACCESS_KEY:process.env.SQS_SECRET_ACCESS_KEY||"",ACCOUNT_ID:process.env.SQS_ACCOUNT_ID||"",REGION:process.env.SQS_REGION||""},WEBSOCKET:{ENABLED:process.env?.WEBSOCKET_ENABLED==="true",GLOBAL_EVENTS:process.env?.WEBSOCKET_GLOBAL_EVENTS==="true"},PUSHER:{ENABLED:process.env?.PUSHER_ENABLED==="true",GLOBAL:{ENABLED:process.env?.PUSHER_GLOBAL_ENABLED==="true",APP_ID:process.env?.PUSHER_GLOBAL_APP_ID||"",KEY:process.env?.PUSHER_GLOBAL_KEY||"",SECRET:process.env?.PUSHER_GLOBAL_SECRET||"",CLUSTER:process.env?.PUSHER_GLOBAL_CLUSTER||"",USE_TLS:process.env?.PUSHER_GLOBAL_USE_TLS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.PUSHER_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.PUSHER_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.PUSHER_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.PUSHER_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.PUSHER_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.PUSHER_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.PUSHER_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.PUSHER_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.PUSHER_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.PUSHER_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.PUSHER_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.PUSHER_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.PUSHER_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.PUSHER_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.PUSHER_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.PUSHER_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.PUSHER_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.PUSHER_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.PUSHER_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.PUSHER_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.PUSHER_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.PUSHER_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.PUSHER_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.PUSHER_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.PUSHER_EVENTS_CALL==="true",TYPEBOT_START:process.env?.PUSHER_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.PUSHER_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},WA_BUSINESS:{TOKEN_WEBHOOK:process.env.WA_BUSINESS_TOKEN_WEBHOOK||"evolution",URL:process.env.WA_BUSINESS_URL||"https://graph.facebook.com",VERSION:process.env.WA_BUSINESS_VERSION||"v18.0",LANGUAGE:process.env.WA_BUSINESS_LANGUAGE||"en"},LOG:{LEVEL:process.env?.LOG_LEVEL?.split(",")||["ERROR","WARN","DEBUG","INFO","LOG","VERBOSE","DARK","WEBHOOKS","WEBSOCKET"],COLOR:process.env?.LOG_COLOR==="true",BAILEYS:process.env?.LOG_BAILEYS||"error"},DEL_INSTANCE:b(process.env?.DEL_INSTANCE)?process.env.DEL_INSTANCE==="true":Number.parseInt(process.env.DEL_INSTANCE)||!1,DEL_TEMP_INSTANCES:b(process.env?.DEL_TEMP_INSTANCES)?process.env.DEL_TEMP_INSTANCES==="true":!0,LANGUAGE:process.env?.LANGUAGE||"en",WEBHOOK:{GLOBAL:{URL:process.env?.WEBHOOK_GLOBAL_URL||"",ENABLED:process.env?.WEBHOOK_GLOBAL_ENABLED==="true",WEBHOOK_BY_EVENTS:process.env?.WEBHOOK_GLOBAL_WEBHOOK_BY_EVENTS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.WEBHOOK_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.WEBHOOK_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.WEBHOOK_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.WEBHOOK_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.WEBHOOK_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.WEBHOOK_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.WEBHOOK_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.WEBHOOK_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.WEBHOOK_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.WEBHOOK_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.WEBHOOK_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.WEBHOOK_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.WEBHOOK_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.WEBHOOK_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.WEBHOOK_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.WEBHOOK_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.WEBHOOK_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.WEBHOOK_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.WEBHOOK_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.WEBHOOK_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.WEBHOOK_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.WEBHOOK_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.WEBHOOK_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.WEBHOOK_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.WEBHOOK_EVENTS_CALL==="true",TYPEBOT_START:process.env?.WEBHOOK_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.WEBHOOK_EVENTS_TYPEBOT_CHANGE_STATUS==="true",ERRORS:process.env?.WEBHOOK_EVENTS_ERRORS==="true",ERRORS_WEBHOOK:process.env?.WEBHOOK_EVENTS_ERRORS_WEBHOOK||""}},CONFIG_SESSION_PHONE:{CLIENT:process.env?.CONFIG_SESSION_PHONE_CLIENT||"Evolution API",NAME:process.env?.CONFIG_SESSION_PHONE_NAME||"Chrome",VERSION:process.env?.CONFIG_SESSION_PHONE_VERSION||null},QRCODE:{LIMIT:Number.parseInt(process.env.QRCODE_LIMIT)||30,COLOR:process.env.QRCODE_COLOR||"#198754"},TYPEBOT:{ENABLED:process.env?.TYPEBOT_ENABLED==="true",API_VERSION:process.env?.TYPEBOT_API_VERSION||"old",SEND_MEDIA_BASE64:process.env?.TYPEBOT_SEND_MEDIA_BASE64==="true"},CHATWOOT:{ENABLED:process.env?.CHATWOOT_ENABLED==="true",MESSAGE_DELETE:process.env.CHATWOOT_MESSAGE_DELETE==="true",MESSAGE_READ:process.env.CHATWOOT_MESSAGE_READ==="true",BOT_CONTACT:!process.env.CHATWOOT_BOT_CONTACT||process.env.CHATWOOT_BOT_CONTACT==="true",IMPORT:{DATABASE:{CONNECTION:{URI:process.env.CHATWOOT_IMPORT_DATABASE_CONNECTION_URI||""}},PLACEHOLDER_MEDIA_MESSAGE:process.env?.CHATWOOT_IMPORT_PLACEHOLDER_MEDIA_MESSAGE==="true"}},OPENAI:{ENABLED:process.env?.OPENAI_ENABLED==="true",API_KEY_GLOBAL:process.env?.OPENAI_API_KEY_GLOBAL||null},DIFY:{ENABLED:process.env?.DIFY_ENABLED==="true"},CACHE:{REDIS:{ENABLED:process.env?.CACHE_REDIS_ENABLED==="true",URI:process.env?.CACHE_REDIS_URI||"",PREFIX_KEY:process.env?.CACHE_REDIS_PREFIX_KEY||"evolution-cache",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||604800,SAVE_INSTANCES:process.env?.CACHE_REDIS_SAVE_INSTANCES==="true"},LOCAL:{ENABLED:process.env?.CACHE_LOCAL_ENABLED==="true",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||86400}},S3:{ACCESS_KEY:process.env?.S3_ACCESS_KEY,SECRET_KEY:process.env?.S3_SECRET_KEY,ENDPOINT:process.env?.S3_ENDPOINT,BUCKET_NAME:process.env?.S3_BUCKET,ENABLE:process.env?.S3_ENABLED==="true",PORT:Number.parseInt(process.env?.S3_PORT||"9000"),USE_SSL:process.env?.S3_USE_SSL==="true",REGION:process.env?.S3_REGION},AUTHENTICATION:{API_KEY:{KEY:process.env.AUTHENTICATION_API_KEY||"BQYHJGJHJ"},EXPOSE_IN_FETCH_INSTANCES:process.env?.AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES==="true"}}}},L=new D;var F=JSON.parse(Q.readFileSync("./package.json","utf8")),v=N=>w(N).toDate().toString().replace(/\sGMT.+/,""),p=(E=>(E.LOG="\x1B[32m",E.INFO="\x1B[34m",E.WARN="\x1B[33m",E.ERROR="\x1B[31m",E.DEBUG="\x1B[36m",E.VERBOSE="\x1B[37m",E.DARK="\x1B[30m",E))(p||{});var H=(E=>(E.LOG="\x1B[32m%s\x1B[0m",E.DARK="\x1B[30m%s\x1B[0m",E.INFO="\x1B[34m%s\x1B[0m",E.WARN="\x1B[33m%s\x1B[0m",E.ERROR="\x1B[31m%s\x1B[0m",E.DEBUG="\x1B[36m%s\x1B[0m",E.VERBOSE="\x1B[37m%s\x1B[0m",E))(H||{}),G=(E=>(E.LOG="LOG",E.WARN="WARN",E.INFO="INFO",E.DARK="DARK",E.ERROR="ERROR",E.DEBUG="DEBUG",E.VERBOSE="VERBOSE",E))(G||{}),M=(E=>(E.LOG="\x1B[42m",E.INFO="\x1B[44m",E.WARN="\x1B[43m",E.DARK="\x1B[40m",E.ERROR="\x1B[41m",E.DEBUG="\x1B[46m",E.VERBOSE="\x1B[47m",E))(M||{}),I=class{constructor(e="Logger"){this.configService=L;this.instance=null;this.context=e}setContext(e){this.context=e}setInstance(e){this.instance=e}console(e,o){let t=[];this.configService.get("LOG").LEVEL.forEach(s=>t.push(G[s]));let S=typeof e;t.includes(o)&&(L.get("LOG").COLOR?(console.log("\x1B[1m"+H[o],"[Evolution API]","\x1B[1m"+p[o],this.instance?`[${this.instance}]`:"","\x1B[1m"+p[o],`v${F.version}`,"\x1B[1m"+p[o],process.pid.toString(),"\x1B[0m","\x1B[1m"+p[o],"-","\x1B[1m\x1B[37m",`${v(Date.now())}  `,"\x1B[0m",p[o]+M[o]+"\x1B[1m",`${o} \x1B[0m`,"\x1B[33m\x1B[1m",`[${this.context}]\x1B[0m`,p[o]+"\x1B[1m",`[${S}]\x1B[0m`,p[o],S!=="object"?e:"","\x1B[0m"),S==="object"&&console.log(e,`
`)):console.log("[Evolution API]",this.instance?`[${this.instance}]`:"",process.pid.toString(),"-",`${v(Date.now())}  `,`${o} `,`[${this.context}]`,`[${S}]`,e))}log(e){this.console(e,"LOG")}info(e){this.console(e,"INFO")}warn(e){this.console(e,"WARN")}error(e){this.console(e,"ERROR")}verbose(e){this.console(e,"VERBOSE")}debug(e){this.console(e,"DEBUG")}dark(e){this.console(e,"DARK")}};import k from"axios";import $ from"fs";var X=JSON.parse($.readFileSync("./package.json","utf8")),B=async N=>{if(!(process.env.TELEMETRY_ENABLED===void 0||process.env.TELEMETRY_ENABLED==="true")||N==="/")return;let o={route:N,apiVersion:`${X.version}`,timestamp:new Date},t=process.env.TELEMETRY_URL&&process.env.TELEMETRY_URL!==""?process.env.TELEMETRY_URL:"https://log.evolution-api.com/telemetry";k.post(t,o).then(()=>{}).catch(()=>{})};import q from"axios";var m=class{constructor(e,o,t){this.waMonitor=e;this.configService=o;this.prismaRepository=t;this.logger=new I("EvolutionBotService")}async createNewSession(e,o){try{return{session:await this.prismaRepository.integrationSession.create({data:{remoteJid:o.remoteJid,pushName:o.pushName,sessionId:o.remoteJid,status:"opened",awaitUser:!1,botId:o.botId,instanceId:e.instanceId,type:"evolution"}})}}catch(t){this.logger.error(t);return}}isImageMessage(e){return e.includes("imageMessage")}async sendMessageToBot(e,o,t,S,s,T){let E={inputs:{sessionId:o.id,remoteJid:S,pushName:s,instanceName:e.instanceName,serverUrl:this.configService.get("SERVER").URL,apiKey:this.configService.get("AUTHENTICATION").API_KEY.KEY},query:T,conversation_id:o.sessionId===S?void 0:o.sessionId,user:S};if(this.isImageMessage(T)){let C=T.split("|");E.files=[{type:"image",url:C[1].split("?")[0]}],E.query=C[2]||T}e.integration===R.WHATSAPP_BAILEYS&&(await e.client.presenceSubscribe(S),await e.client.sendPresenceUpdate("composing",S));let n={"Content-Type":"application/json"};t.apiKey&&(n={...n,Authorization:`Bearer ${t.apiKey}`});let r=await q.post(t.apiUrl,E,{headers:n});return e.integration===R.WHATSAPP_BAILEYS&&await e.client.sendPresenceUpdate("paused",S),r?.data?.message}async sendMessageWhatsApp(e,o,t,S,s){let T=/(!?)\[(.*?)\]\((.*?)\)/g,E="",n=0,r,c=_=>{let A=_.split(".").pop()?.toLowerCase(),a=["jpg","jpeg","png","gif","bmp","webp"],i=["mp3","wav","aac","ogg"],O=["mp4","avi","mkv","mov"],P=["pdf","doc","docx","xls","xlsx","ppt","pptx","txt"];return a.includes(A||"")?"image":i.includes(A||"")?"audio":O.includes(A||"")?"video":P.includes(A||"")?"document":null};for(;(r=T.exec(s))!==null;){let[_,A,a,i]=r,O=c(i),P=s.slice(n,r.index);if(P&&(E+=P),O){let y=S.splitMessages??!1,h=S.timePerChar??0,x=1e3,f=2e4;if(E.trim())if(y){let U=E.trim().split(`

`);for(let l=0;l<U.length;l++){let g=U[l],W=Math.min(Math.max(g.length*h,x),f);e.integration===R.WHATSAPP_BAILEYS&&(await e.client.presenceSubscribe(o),await e.client.sendPresenceUpdate("composing",o)),await new Promise(K=>{setTimeout(async()=>{await e.textMessage({number:o.split("@")[0],delay:S?.delayMessage||1e3,text:g},!1),K()},W)}),e.integration===R.WHATSAPP_BAILEYS&&await e.client.sendPresenceUpdate("paused",o)}}else await e.textMessage({number:o.split("@")[0],delay:S?.delayMessage||1e3,text:E.trim()},!1),E="";O==="audio"?await e.audioWhatsapp({number:o.split("@")[0],delay:S?.delayMessage||1e3,audio:i,caption:a}):await e.mediaMessage({number:o.split("@")[0],delay:S?.delayMessage||1e3,mediatype:O,media:i,caption:a},null,!1)}else E+=`[${a}](${i})`;n=T.lastIndex}if(n<s.length){let _=s.slice(n);_.trim()&&(E+=_)}let C=S.splitMessages??!1,u=S.timePerChar??0,d=1e3,V=2e4;if(E.trim())if(C){let _=E.trim().split(`

`);for(let A=0;A<_.length;A++){let a=_[A],i=Math.min(Math.max(a.length*u,d),V);e.integration===R.WHATSAPP_BAILEYS&&(await e.client.presenceSubscribe(o),await e.client.sendPresenceUpdate("composing",o)),await new Promise(O=>{setTimeout(async()=>{await e.textMessage({number:o.split("@")[0],delay:S?.delayMessage||1e3,text:a},!1),O()},i)}),e.integration===R.WHATSAPP_BAILEYS&&await e.client.sendPresenceUpdate("paused",o)}}else await e.textMessage({number:o.split("@")[0],delay:S?.delayMessage||1e3,text:E.trim()},!1),E="";B("/message/sendText"),await this.prismaRepository.integrationSession.update({where:{id:t.id},data:{status:"opened",awaitUser:!0}})}async initNewSession(e,o,t,S,s,T,E){let n=await this.createNewSession(e,{remoteJid:o,pushName:E,botId:t.id});n.session&&(s=n.session);let r=await this.sendMessageToBot(e,s,t,o,E,T);r&&await this.sendMessageWhatsApp(e,o,s,S,r)}async processBot(e,o,t,S,s,T,E){if(S&&S.status!=="opened")return;if(S&&s.expire&&s.expire>0){let r=Date.now(),c=new Date(S.updatedAt).getTime(),C=r-c;if(Math.floor(C/1e3/60)>s.expire){s.keepOpen?await this.prismaRepository.integrationSession.update({where:{id:S.id},data:{status:"closed"}}):await this.prismaRepository.integrationSession.deleteMany({where:{botId:t.id,remoteJid:o}}),await this.initNewSession(e,o,t,s,S,T,E);return}}if(!S){await this.initNewSession(e,o,t,s,S,T,E);return}if(await this.prismaRepository.integrationSession.update({where:{id:S.id},data:{status:"opened",awaitUser:!1}}),!T){s.unknownMessage&&(this.waMonitor.waInstances[e.instanceName].textMessage({number:o.split("@")[0],delay:s.delayMessage||1e3,text:s.unknownMessage},!1),B("/message/sendText"));return}if(s.keywordFinish&&T.toLowerCase()===s.keywordFinish.toLowerCase()){s.keepOpen?await this.prismaRepository.integrationSession.update({where:{id:S.id},data:{status:"closed"}}):await this.prismaRepository.integrationSession.deleteMany({where:{botId:t.id,remoteJid:o}});return}let n=await this.sendMessageToBot(e,S,t,o,E,T);n&&await this.sendMessageWhatsApp(e,o,S,s,n)}};export{m as EvolutionBotService};
//# sourceMappingURL=evolutionBot.service.mjs.map