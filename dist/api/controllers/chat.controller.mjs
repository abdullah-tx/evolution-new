var a=class{constructor(t){this.waMonitor=t}async whatsappNumber({instanceName:t},e){return await this.waMonitor.waInstances[t].whatsappNumber(e)}async readMessage({instanceName:t},e){return await this.waMonitor.waInstances[t].markMessageAsRead(e)}async archiveChat({instanceName:t},e){return await this.waMonitor.waInstances[t].archiveChat(e)}async markChatUnread({instanceName:t},e){return await this.waMonitor.waInstances[t].markChatUnread(e)}async deleteMessage({instanceName:t},e){return await this.waMonitor.waInstances[t].deleteMessage(e)}async fetchProfilePicture({instanceName:t},e){return await this.waMonitor.waInstances[t].profilePicture(e.number)}async fetchProfile({instanceName:t},e){return await this.waMonitor.waInstances[t].fetchProfile(t,e.number)}async fetchContacts({instanceName:t},e){return await this.waMonitor.waInstances[t].fetchContacts(e)}async getBase64FromMediaMessage({instanceName:t},e){return await this.waMonitor.waInstances[t].getBase64FromMediaMessage(e)}async fetchMessages({instanceName:t},e){return await this.waMonitor.waInstances[t].fetchMessages(e)}async fetchStatusMessage({instanceName:t},e){return await this.waMonitor.waInstances[t].fetchStatusMessage(e)}async fetchChats({instanceName:t},e){return await this.waMonitor.waInstances[t].fetchChats(e)}async sendPresence({instanceName:t},e){return await this.waMonitor.waInstances[t].sendPresence(e)}async fetchPrivacySettings({instanceName:t}){return await this.waMonitor.waInstances[t].fetchPrivacySettings()}async updatePrivacySettings({instanceName:t},e){return await this.waMonitor.waInstances[t].updatePrivacySettings(e)}async fetchBusinessProfile({instanceName:t},e){return await this.waMonitor.waInstances[t].fetchBusinessProfile(e.number)}async updateProfileName({instanceName:t},e){return await this.waMonitor.waInstances[t].updateProfileName(e.name)}async updateProfileStatus({instanceName:t},e){return await this.waMonitor.waInstances[t].updateProfileStatus(e.status)}async updateProfilePicture({instanceName:t},e){return await this.waMonitor.waInstances[t].updateProfilePicture(e.picture)}async removeProfilePicture({instanceName:t}){return await this.waMonitor.waInstances[t].removeProfilePicture()}async updateMessage({instanceName:t},e){return await this.waMonitor.waInstances[t].updateMessage(e)}async blockUser({instanceName:t},e){return await this.waMonitor.waInstances[t].blockUser(e)}};export{a as ChatController};
//# sourceMappingURL=chat.controller.mjs.map