import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botContainer, removeBotFromContainer, fireBot }) {
	//your bot army code here...

	const botArmy = botContainer.map((botCollect) => {
		return (
			<BotCard
				key={botCollect.id}
				bot={botCollect}
				handleClick={removeBotFromContainer}
				handleDischarge={fireBot}
			/>
		);
	});

	return (
		<div className="ui segment inverted olive bot-army">
			<div className="ui five column grid">
				<div className="row bot-army-row">
					Your Bot Army
					{botArmy}
				</div>
			</div>
		</div>
	);
}

export default YourBotArmy;
