import{SQS as W}from"@aws-sdk/client-sqs";import{isBooleanString as B}from"class-validator";import M from"dotenv";M.config();var P=class{constructor(){this.loadEnv()}get(E){return this.env[E]}loadEnv(){this.env=this.envProcess(),this.env.PRODUCTION=process.env?.NODE_ENV==="PROD",process.env?.DOCKER_ENV==="true"&&(this.env.SERVER.TYPE=process.env.SERVER_TYPE,this.env.SERVER.PORT=Number.parseInt(process.env.SERVER_PORT)||8080)}envProcess(){return{SERVER:{TYPE:process.env.SERVER_TYPE||"http",PORT:Number.parseInt(process.env.SERVER_PORT)||8080,URL:process.env.SERVER_URL,DISABLE_DOCS:process.env?.SERVER_DISABLE_DOCS==="true",DISABLE_MANAGER:process.env?.SERVER_DISABLE_MANAGER==="true"},CORS:{ORIGIN:process.env.CORS_ORIGIN?.split(",")||["*"],METHODS:process.env.CORS_METHODS?.split(",")||["POST","GET","PUT","DELETE"],CREDENTIALS:process.env?.CORS_CREDENTIALS==="true"},SSL_CONF:{PRIVKEY:process.env?.SSL_CONF_PRIVKEY||"",FULLCHAIN:process.env?.SSL_CONF_FULLCHAIN||""},PROVIDER:{ENABLED:process.env?.PROVIDER_ENABLED==="true",HOST:process.env.PROVIDER_HOST,PORT:process.env?.PROVIDER_PORT||"5656",PREFIX:process.env?.PROVIDER_PREFIX||"evolution"},DATABASE:{CONNECTION:{URI:process.env.DATABASE_CONNECTION_URI||"",CLIENT_NAME:process.env.DATABASE_CONNECTION_CLIENT_NAME||"evolution"},PROVIDER:process.env.DATABASE_PROVIDER||"postgresql",SAVE_DATA:{INSTANCE:process.env?.DATABASE_SAVE_DATA_INSTANCE==="true",NEW_MESSAGE:process.env?.DATABASE_SAVE_DATA_NEW_MESSAGE==="true",MESSAGE_UPDATE:process.env?.DATABASE_SAVE_MESSAGE_UPDATE==="true",CONTACTS:process.env?.DATABASE_SAVE_DATA_CONTACTS==="true",CHATS:process.env?.DATABASE_SAVE_DATA_CHATS==="true",HISTORIC:process.env?.DATABASE_SAVE_DATA_HISTORIC==="true",LABELS:process.env?.DATABASE_SAVE_DATA_LABELS==="true",IS_ON_WHATSAPP:process.env?.DATABASE_SAVE_IS_ON_WHATSAPP==="true",IS_ON_WHATSAPP_DAYS:Number.parseInt(process.env?.DATABASE_SAVE_IS_ON_WHATSAPP_DAYS??"7")},DELETE_DATA:{LOGICAL_MESSAGE_DELETE:process.env?.DATABASE_DELETE_MESSAGE==="true"}},RABBITMQ:{ENABLED:process.env?.RABBITMQ_ENABLED==="true",GLOBAL_ENABLED:process.env?.RABBITMQ_GLOBAL_ENABLED==="true",EXCHANGE_NAME:process.env?.RABBITMQ_EXCHANGE_NAME||"evolution_exchange",URI:process.env.RABBITMQ_URI||"",EVENTS:{APPLICATION_STARTUP:process.env?.RABBITMQ_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.RABBITMQ_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.RABBITMQ_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.RABBITMQ_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.RABBITMQ_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.RABBITMQ_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.RABBITMQ_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.RABBITMQ_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.RABBITMQ_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.RABBITMQ_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.RABBITMQ_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.RABBITMQ_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.RABBITMQ_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.RABBITMQ_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.RABBITMQ_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.RABBITMQ_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.RABBITMQ_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.RABBITMQ_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.RABBITMQ_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.RABBITMQ_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.RABBITMQ_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.RABBITMQ_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.RABBITMQ_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.RABBITMQ_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.RABBITMQ_EVENTS_CALL==="true",TYPEBOT_START:process.env?.RABBITMQ_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.RABBITMQ_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},SQS:{ENABLED:process.env?.SQS_ENABLED==="true",ACCESS_KEY_ID:process.env.SQS_ACCESS_KEY_ID||"",SECRET_ACCESS_KEY:process.env.SQS_SECRET_ACCESS_KEY||"",ACCOUNT_ID:process.env.SQS_ACCOUNT_ID||"",REGION:process.env.SQS_REGION||""},WEBSOCKET:{ENABLED:process.env?.WEBSOCKET_ENABLED==="true",GLOBAL_EVENTS:process.env?.WEBSOCKET_GLOBAL_EVENTS==="true"},PUSHER:{ENABLED:process.env?.PUSHER_ENABLED==="true",GLOBAL:{ENABLED:process.env?.PUSHER_GLOBAL_ENABLED==="true",APP_ID:process.env?.PUSHER_GLOBAL_APP_ID||"",KEY:process.env?.PUSHER_GLOBAL_KEY||"",SECRET:process.env?.PUSHER_GLOBAL_SECRET||"",CLUSTER:process.env?.PUSHER_GLOBAL_CLUSTER||"",USE_TLS:process.env?.PUSHER_GLOBAL_USE_TLS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.PUSHER_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.PUSHER_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.PUSHER_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.PUSHER_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.PUSHER_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.PUSHER_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.PUSHER_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.PUSHER_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.PUSHER_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.PUSHER_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.PUSHER_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.PUSHER_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.PUSHER_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.PUSHER_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.PUSHER_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.PUSHER_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.PUSHER_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.PUSHER_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.PUSHER_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.PUSHER_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.PUSHER_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.PUSHER_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.PUSHER_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.PUSHER_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.PUSHER_EVENTS_CALL==="true",TYPEBOT_START:process.env?.PUSHER_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.PUSHER_EVENTS_TYPEBOT_CHANGE_STATUS==="true"}},WA_BUSINESS:{TOKEN_WEBHOOK:process.env.WA_BUSINESS_TOKEN_WEBHOOK||"evolution",URL:process.env.WA_BUSINESS_URL||"https://graph.facebook.com",VERSION:process.env.WA_BUSINESS_VERSION||"v18.0",LANGUAGE:process.env.WA_BUSINESS_LANGUAGE||"en"},LOG:{LEVEL:process.env?.LOG_LEVEL?.split(",")||["ERROR","WARN","DEBUG","INFO","LOG","VERBOSE","DARK","WEBHOOKS","WEBSOCKET"],COLOR:process.env?.LOG_COLOR==="true",BAILEYS:process.env?.LOG_BAILEYS||"error"},DEL_INSTANCE:B(process.env?.DEL_INSTANCE)?process.env.DEL_INSTANCE==="true":Number.parseInt(process.env.DEL_INSTANCE)||!1,DEL_TEMP_INSTANCES:B(process.env?.DEL_TEMP_INSTANCES)?process.env.DEL_TEMP_INSTANCES==="true":!0,LANGUAGE:process.env?.LANGUAGE||"en",WEBHOOK:{GLOBAL:{URL:process.env?.WEBHOOK_GLOBAL_URL||"",ENABLED:process.env?.WEBHOOK_GLOBAL_ENABLED==="true",WEBHOOK_BY_EVENTS:process.env?.WEBHOOK_GLOBAL_WEBHOOK_BY_EVENTS==="true"},EVENTS:{APPLICATION_STARTUP:process.env?.WEBHOOK_EVENTS_APPLICATION_STARTUP==="true",INSTANCE_CREATE:process.env?.WEBHOOK_EVENTS_INSTANCE_CREATE==="true",INSTANCE_DELETE:process.env?.WEBHOOK_EVENTS_INSTANCE_DELETE==="true",QRCODE_UPDATED:process.env?.WEBHOOK_EVENTS_QRCODE_UPDATED==="true",MESSAGES_SET:process.env?.WEBHOOK_EVENTS_MESSAGES_SET==="true",MESSAGES_UPSERT:process.env?.WEBHOOK_EVENTS_MESSAGES_UPSERT==="true",MESSAGES_EDITED:process.env?.WEBHOOK_EVENTS_MESSAGES_EDITED==="true",MESSAGES_UPDATE:process.env?.WEBHOOK_EVENTS_MESSAGES_UPDATE==="true",MESSAGES_DELETE:process.env?.WEBHOOK_EVENTS_MESSAGES_DELETE==="true",SEND_MESSAGE:process.env?.WEBHOOK_EVENTS_SEND_MESSAGE==="true",CONTACTS_SET:process.env?.WEBHOOK_EVENTS_CONTACTS_SET==="true",CONTACTS_UPDATE:process.env?.WEBHOOK_EVENTS_CONTACTS_UPDATE==="true",CONTACTS_UPSERT:process.env?.WEBHOOK_EVENTS_CONTACTS_UPSERT==="true",PRESENCE_UPDATE:process.env?.WEBHOOK_EVENTS_PRESENCE_UPDATE==="true",CHATS_SET:process.env?.WEBHOOK_EVENTS_CHATS_SET==="true",CHATS_UPDATE:process.env?.WEBHOOK_EVENTS_CHATS_UPDATE==="true",CHATS_UPSERT:process.env?.WEBHOOK_EVENTS_CHATS_UPSERT==="true",CHATS_DELETE:process.env?.WEBHOOK_EVENTS_CHATS_DELETE==="true",CONNECTION_UPDATE:process.env?.WEBHOOK_EVENTS_CONNECTION_UPDATE==="true",LABELS_EDIT:process.env?.WEBHOOK_EVENTS_LABELS_EDIT==="true",LABELS_ASSOCIATION:process.env?.WEBHOOK_EVENTS_LABELS_ASSOCIATION==="true",GROUPS_UPSERT:process.env?.WEBHOOK_EVENTS_GROUPS_UPSERT==="true",GROUP_UPDATE:process.env?.WEBHOOK_EVENTS_GROUPS_UPDATE==="true",GROUP_PARTICIPANTS_UPDATE:process.env?.WEBHOOK_EVENTS_GROUP_PARTICIPANTS_UPDATE==="true",CALL:process.env?.WEBHOOK_EVENTS_CALL==="true",TYPEBOT_START:process.env?.WEBHOOK_EVENTS_TYPEBOT_START==="true",TYPEBOT_CHANGE_STATUS:process.env?.WEBHOOK_EVENTS_TYPEBOT_CHANGE_STATUS==="true",ERRORS:process.env?.WEBHOOK_EVENTS_ERRORS==="true",ERRORS_WEBHOOK:process.env?.WEBHOOK_EVENTS_ERRORS_WEBHOOK||""}},CONFIG_SESSION_PHONE:{CLIENT:process.env?.CONFIG_SESSION_PHONE_CLIENT||"Evolution API",NAME:process.env?.CONFIG_SESSION_PHONE_NAME||"Chrome",VERSION:process.env?.CONFIG_SESSION_PHONE_VERSION||null},QRCODE:{LIMIT:Number.parseInt(process.env.QRCODE_LIMIT)||30,COLOR:process.env.QRCODE_COLOR||"#198754"},TYPEBOT:{ENABLED:process.env?.TYPEBOT_ENABLED==="true",API_VERSION:process.env?.TYPEBOT_API_VERSION||"old",SEND_MEDIA_BASE64:process.env?.TYPEBOT_SEND_MEDIA_BASE64==="true"},CHATWOOT:{ENABLED:process.env?.CHATWOOT_ENABLED==="true",MESSAGE_DELETE:process.env.CHATWOOT_MESSAGE_DELETE==="true",MESSAGE_READ:process.env.CHATWOOT_MESSAGE_READ==="true",BOT_CONTACT:!process.env.CHATWOOT_BOT_CONTACT||process.env.CHATWOOT_BOT_CONTACT==="true",IMPORT:{DATABASE:{CONNECTION:{URI:process.env.CHATWOOT_IMPORT_DATABASE_CONNECTION_URI||""}},PLACEHOLDER_MEDIA_MESSAGE:process.env?.CHATWOOT_IMPORT_PLACEHOLDER_MEDIA_MESSAGE==="true"}},OPENAI:{ENABLED:process.env?.OPENAI_ENABLED==="true",API_KEY_GLOBAL:process.env?.OPENAI_API_KEY_GLOBAL||null},DIFY:{ENABLED:process.env?.DIFY_ENABLED==="true"},CACHE:{REDIS:{ENABLED:process.env?.CACHE_REDIS_ENABLED==="true",URI:process.env?.CACHE_REDIS_URI||"",PREFIX_KEY:process.env?.CACHE_REDIS_PREFIX_KEY||"evolution-cache",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||604800,SAVE_INSTANCES:process.env?.CACHE_REDIS_SAVE_INSTANCES==="true"},LOCAL:{ENABLED:process.env?.CACHE_LOCAL_ENABLED==="true",TTL:Number.parseInt(process.env?.CACHE_REDIS_TTL)||86400}},S3:{ACCESS_KEY:process.env?.S3_ACCESS_KEY,SECRET_KEY:process.env?.S3_SECRET_KEY,ENDPOINT:process.env?.S3_ENDPOINT,BUCKET_NAME:process.env?.S3_BUCKET,ENABLE:process.env?.S3_ENABLED==="true",PORT:Number.parseInt(process.env?.S3_PORT||"9000"),USE_SSL:process.env?.S3_USE_SSL==="true",REGION:process.env?.S3_REGION},AUTHENTICATION:{API_KEY:{KEY:process.env.AUTHENTICATION_API_KEY||"BQYHJGJHJ"},EXPOSE_IN_FETCH_INSTANCES:process.env?.AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES==="true"}}}},_=new P;import V from"dayjs";import h from"fs";var K=JSON.parse(h.readFileSync("./package.json","utf8")),u=O=>V(O).toDate().toString().replace(/\sGMT.+/,""),n=(S=>(S.LOG="\x1B[32m",S.INFO="\x1B[34m",S.WARN="\x1B[33m",S.ERROR="\x1B[31m",S.DEBUG="\x1B[36m",S.VERBOSE="\x1B[37m",S.DARK="\x1B[30m",S))(n||{});var l=(S=>(S.LOG="\x1B[32m%s\x1B[0m",S.DARK="\x1B[30m%s\x1B[0m",S.INFO="\x1B[34m%s\x1B[0m",S.WARN="\x1B[33m%s\x1B[0m",S.ERROR="\x1B[31m%s\x1B[0m",S.DEBUG="\x1B[36m%s\x1B[0m",S.VERBOSE="\x1B[37m%s\x1B[0m",S))(l||{}),U=(S=>(S.LOG="LOG",S.WARN="WARN",S.INFO="INFO",S.DARK="DARK",S.ERROR="ERROR",S.DEBUG="DEBUG",S.VERBOSE="VERBOSE",S))(U||{}),v=(S=>(S.LOG="\x1B[42m",S.INFO="\x1B[44m",S.WARN="\x1B[43m",S.DARK="\x1B[40m",S.ERROR="\x1B[41m",S.DEBUG="\x1B[46m",S.VERBOSE="\x1B[47m",S))(v||{}),C=class{constructor(E="Logger"){this.configService=_;this.instance=null;this.context=E}setContext(E){this.context=E}setInstance(E){this.instance=E}console(E,e){let T=[];this.configService.get("LOG").LEVEL.forEach(A=>T.push(U[A]));let o=typeof E;T.includes(e)&&(_.get("LOG").COLOR?(console.log("\x1B[1m"+l[e],"[Evolution API]","\x1B[1m"+n[e],this.instance?`[${this.instance}]`:"","\x1B[1m"+n[e],`v${K.version}`,"\x1B[1m"+n[e],process.pid.toString(),"\x1B[0m","\x1B[1m"+n[e],"-","\x1B[1m\x1B[37m",`${u(Date.now())}  `,"\x1B[0m",n[e]+v[e]+"\x1B[1m",`${e} \x1B[0m`,"\x1B[33m\x1B[1m",`[${this.context}]\x1B[0m`,n[e]+"\x1B[1m",`[${o}]\x1B[0m`,n[e],o!=="object"?E:"","\x1B[0m"),o==="object"&&console.log(E,`
`)):console.log("[Evolution API]",this.instance?`[${this.instance}]`:"",process.pid.toString(),"-",`${u(Date.now())}  `,`${e} `,`[${this.context}]`,`[${o}]`,E))}log(E){this.console(E,"LOG")}info(E){this.console(E,"INFO")}warn(E){this.console(E,"WARN")}error(E){this.console(E,"ERROR")}verbose(E){this.console(E,"VERBOSE")}debug(E){this.console(E,"DEBUG")}dark(E){this.console(E,"DARK")}};var i=class i{constructor(E,e,T,o){this.prisma=E,this.monitor=e,this.status=T,this.name=o}set prisma(E){this.prismaRepository=E}get prisma(){return this.prismaRepository}set monitor(E){this.waMonitor=E}get monitor(){return this.waMonitor}set name(E){this.integrationName=E}get name(){return this.integrationName}set status(E){this.integrationStatus=E}get status(){return this.integrationStatus}async set(E,e){if(this.status)return e[this.name]?.enabled?e[this.name].events.length===0&&(e[this.name].events=i.events):e[this.name].events=[],this.prisma[this.name].upsert({where:{instanceId:this.monitor.waInstances[E].instanceId},update:{enabled:e[this.name]?.enabled,events:e[this.name].events},create:{enabled:e[this.name]?.enabled,events:e[this.name].events,instanceId:this.monitor.waInstances[E].instanceId}})}async get(E){if(!this.status)return;if(this.monitor.waInstances[E]===void 0)return null;let e=await this.prisma[this.name].findUnique({where:{instanceId:this.monitor.waInstances[E].instanceId}});return e||null}};i.events=["APPLICATION_STARTUP","QRCODE_UPDATED","MESSAGES_SET","MESSAGES_UPSERT","MESSAGES_EDITED","MESSAGES_UPDATE","MESSAGES_DELETE","SEND_MESSAGE","CONTACTS_SET","CONTACTS_UPSERT","CONTACTS_UPDATE","PRESENCE_UPDATE","CHATS_SET","CHATS_UPSERT","CHATS_UPDATE","CHATS_DELETE","GROUPS_UPSERT","GROUP_UPDATE","GROUP_PARTICIPANTS_UPDATE","CONNECTION_UPDATE","LABELS_EDIT","LABELS_ASSOCIATION","CALL","TYPEBOT_START","TYPEBOT_CHANGE_STATUS","REMOVE_INSTANCE","LOGOUT_INSTANCE"];var a=i;var b=class extends a{constructor(e,T){super(e,T,_.get("SQS")?.ENABLED,"sqs");this.logger=new C("SqsController")}init(){this.status&&new Promise(e=>{let T=_.get("SQS");this.sqs=new W({credentials:{accessKeyId:T.ACCESS_KEY_ID,secretAccessKey:T.SECRET_ACCESS_KEY},region:T.REGION}),this.logger.info("SQS initialized"),e()})}set channel(e){this.sqs=e}get channel(){return this.sqs}async emit({instanceName:e,origin:T,event:o,data:A,serverUrl:s,dateTime:S,sender:r,apiKey:p}){if(!this.status)return;let R=await this.get(e),N=R?.events,G=o.replace(/[.-]/gm,"_").toUpperCase();if(R?.enabled&&this.sqs&&Array.isArray(N)&&N.includes(G)){let I=`${o.replace(".","_").toLowerCase()}`,D=`${e}_${I}.fifo`,c=_.get("SQS"),H=`https://sqs.${c.REGION}.amazonaws.com/${c.ACCOUNT_ID}/${D}`,L={event:o,instance:e,data:A,server_url:s,date_time:S,sender:r,apikey:p},m={MessageBody:JSON.stringify(L),MessageGroupId:"evolution",MessageDeduplicationId:`${e}_${I}_${Date.now()}`,QueueUrl:H};this.sqs.sendMessage(m,t=>{if(t)this.logger.error({local:`${T}.sendData-SQS`,message:t?.message,hostName:t?.hostname,code:t?.code,stack:t?.stack,name:t?.name,url:D,server_url:s});else if(_.get("LOG").LEVEL.includes("WEBHOOKS")){let g={local:`${T}.sendData-SQS`,...L};this.logger.log(g)}})}}async initQueues(e,T){if(!T||!T.length)return;T.map(A=>`${A.replace(/_/g,"_").toLowerCase()}`).forEach(A=>{let s=`${e}_${A}.fifo`;this.sqs.createQueue({QueueName:s,Attributes:{FifoQueue:"true"}},(S,r)=>{S?this.logger.error(`Error creating queue ${s}: ${S.message}`):this.logger.info(`Queue ${s} created: ${r.QueueUrl}`)})})}async removeQueues(e,T){let o=Array.isArray(T)?T.map(s=>String(s)):[];if(!T||!o.length)return;o.map(s=>`${s.replace(/_/g,"_").toLowerCase()}`).forEach(s=>{let S=`${e}_${s}.fifo`;this.sqs.getQueueUrl({QueueName:S},(r,p)=>{if(r)this.logger.error(`Error getting queue URL for ${S}: ${r.message}`);else{let R=p.QueueUrl;this.sqs.deleteQueue({QueueUrl:R},N=>{N?this.logger.error(`Error deleting queue ${S}: ${N.message}`):this.logger.info(`Queue ${S} deleted`)})}})})}};export{b as SqsController};
//# sourceMappingURL=sqs.controller.mjs.map