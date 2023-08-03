//META{"name":"IDToToken","version":"1.9.3","description":"Converts a Discord Client ID to a Half-Token.","author":"BMF","source":"https://github.com/mattswagyt/IDToToken"}*//

module.exports = class IDToToken {
  getName() {
    return "ID to TOKEN";
  }

  getAuthor() {
    return "BMF";
  }

  getVersion() {
    return "1.9.3";
  }

  getDescription() {
    return "Convert Discord ID to Half Token";
  }

  start() {
    BdApi.showToast('ID to TOKEN plugin started', { type: 'info' });

    // Register the slash command
    BdApi.DiscordModules.SlashCommands.register({
      command: {
        name: 'idtotoken',
        description: 'Convert Discord ID to Half Token',
        options: [
          {
            type: 3, // STRING
            name: 'id',
            description: 'Discord ID to convert',
            required: true,
          },
        ],
      },
      execute: async (command, args) => {
        const id = args.id;
        const halfToken = this.convertToHalfToken(id);
        
        BdApi.showToast(`Half Token for ID ${id}: ${halfToken}`, { type: 'info' });
      },
    });
  }

  stop() {
    // Unregister the slash command
    BdApi.DiscordModules.SlashCommands.unregister('idtotoken');
  }

  convertToHalfToken(id) {
    // Logic to convert the ID to half token
    const halfToken = id.slice(-10);
    return halfToken;
  }
};