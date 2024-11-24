import{v4 as e}from"uuid";var t=(...i)=>{let r={};return i.forEach(p=>r[p]={minLength:1,description:`The "${p}" cannot be empty`}),{if:{propertyNames:{enum:[...i]}},then:{properties:r}}},o={$id:e(),type:"object",properties:{subject:{type:"string"},description:{type:"string"},profilePicture:{type:"string"},promoteParticipants:{type:"boolean",enum:[!0,!1]},participants:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",minLength:10,pattern:"\\d+",description:'"participants" must be an array of numeric strings'}}},required:["subject","participants"],...t("subject","description","profilePicture")},s={$id:e(),type:"object",properties:{groupJid:{type:"string",pattern:"^[\\d-]+@g.us$"}},required:["groupJid"],...t("groupJid")},c={$id:e(),type:"object",properties:{getParticipants:{type:"string",enum:["true","false"]}},required:["getParticipants"],...t("getParticipants")},a={$id:e(),type:"object",properties:{groupJid:{type:"string"},description:{type:"string"},numbers:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",minLength:10,pattern:"\\d+",description:'"numbers" must be an array of numeric strings'}}},required:["groupJid","description","numbers"],...t("groupJid","description","numbers")},u={$id:e(),type:"object",properties:{inviteCode:{type:"string",pattern:"^[a-zA-Z0-9]{22}$"}},required:["inviteCode"],...t("inviteCode")},d={$id:e(),type:"object",properties:{inviteCode:{type:"string",pattern:"^[a-zA-Z0-9]{22}$"}},required:["inviteCode"],...t("inviteCode")},m={$id:e(),type:"object",properties:{groupJid:{type:"string"},action:{type:"string",enum:["add","remove","promote","demote"]},participants:{type:"array",minItems:1,uniqueItems:!0,items:{type:"string",minLength:10,pattern:"\\d+",description:'"participants" must be an array of numeric strings'}}},required:["groupJid","action","participants"],...t("groupJid","action")},g={$id:e(),type:"object",properties:{groupJid:{type:"string"},action:{type:"string",enum:["announcement","not_announcement","locked","unlocked"]}},required:["groupJid","action"],...t("groupJid","action")},y={$id:e(),type:"object",properties:{groupJid:{type:"string"},expiration:{type:"number",enum:[0,86400,604800,7776e3]}},required:["groupJid","expiration"],...t("groupJid","expiration")},S={$id:e(),type:"object",properties:{groupJid:{type:"string"},image:{type:"string"}},required:["groupJid","image"],...t("groupJid","image")},J={$id:e(),type:"object",properties:{groupJid:{type:"string"},subject:{type:"string"}},required:["groupJid","subject"],...t("groupJid","subject")},h={$id:e(),type:"object",properties:{groupJid:{type:"string"},description:{type:"string"}},required:["groupJid","description"],...t("groupJid","description")};export{d as AcceptGroupInviteSchema,o as createGroupSchema,c as getParticipantsSchema,u as groupInviteSchema,s as groupJidSchema,a as groupSendInviteSchema,y as toggleEphemeralSchema,h as updateGroupDescriptionSchema,S as updateGroupPictureSchema,J as updateGroupSubjectSchema,m as updateParticipantsSchema,g as updateSettingsSchema};
//# sourceMappingURL=group.schema.mjs.map