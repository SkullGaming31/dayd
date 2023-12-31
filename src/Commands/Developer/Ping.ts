import { ApplicationCommandType } from 'discord.js';
import { Command } from '../../Structures/Command';

export default new Command({
	name: 'ping',
	description: 'Returns Pong',
	UserPerms: ['ManageMessages'],
	BotPerms: ['ManageMessages'],
	defaultMemberPermissions: ['ManageMessages'],
	type: ApplicationCommandType.ChatInput,

	run: async ({ interaction, client }) => {
		const ping = client.ws.ping;
		interaction.reply({ content: `Bot Latency: ${ping}ms`, ephemeral: true });
	}
});