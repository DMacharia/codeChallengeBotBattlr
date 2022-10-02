import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botCollection, addBotToContainer, fireBot }) {
	// map through botCollection
	const botCollectionItems = botCollection.map((botCollect) => {
		return (
			<BotCard
				key={botCollect.id}
				bot={botCollect}
				handleClick={addBotToContainer}
				handleDischarge={fireBot}
			/>
		);
	});
	console.log(botCollection)

	return (
		<div className="ui four column grid">
			<div className="row">
				Collection of all bots
				{botCollectionItems}
			</div>
		</div>
	);
}

export default BotCollection;
