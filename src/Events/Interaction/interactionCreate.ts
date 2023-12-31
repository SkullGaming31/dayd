import { CommandInteractionOptionResolver } from 'discord.js';
import { Event } from '../../Structures/Event';
import { ExtendedInteraction } from '../../Typings/Command';
import { client } from '../../index';

export default new Event<'interactionCreate'>('interactionCreate', async (interaction) => {
	//chat input commands
	if (interaction.isCommand()) {
		const command = client.commands.get(interaction.commandName);
		// console.log(command);
		if (!command) return interaction.reply({ content: 'You have used a non-existant command, please try another command', ephemeral: true });

		command.run({
			args: interaction.options as CommandInteractionOptionResolver,
			client,
			interaction: interaction as ExtendedInteraction
		});
	}
});