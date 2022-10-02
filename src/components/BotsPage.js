import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({ botCollection, setBotCollection, setCheckCollection }) {
	//start here with your code for step one
	const [botContainer, setBotContainer] = useState([]);

	function addBotToContainer(bot) {
		const botInContainer = botContainer.find((robot) => robot.id === bot.id);
		if (!botInContainer) {
			setBotContainer([...botContainer, bot]);
		}
	}

	function removeBotFromContainer(bot) {
		const botInContainer = botContainer.find((robot) => robot.id === bot.id);
		if (botInContainer) {
			setBotContainer(
				botContainer.filter((robotfiltered) => robotfiltered.id !== bot.id)
			);
		}
	}

	function fireBot(bot) {
		setBotCollection(
			botCollection.filter((robotfiltered) => robotfiltered.id !== bot.id)
		);
		removeBotFromContainer(bot);
		fetch(`http://localhost:3000/bots/${bot.id}`, {
			method: "DELETE",
			headers: {
				"content-type": "application/json",
			},
		});
		setCheckCollection(true);
	}

	return (
		<div>
			<YourBotArmy
				botContainer={botContainer}
				removeBotFromContainer={removeBotFromContainer}
				fireBot={fireBot}
			/>
			<BotCollection
				botCollection={botCollection}
				addBotToContainer={addBotToContainer}
				fireBot={fireBot}
			/>
		</div>
	);
}

export default BotsPage;
