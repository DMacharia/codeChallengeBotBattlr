import React, { useState, useEffect } from "react";
import BotsPage from "./BotsPage";

function App() {
	const APIURL = "http://localhost:3000/bots";
	const [botCollection, setBotCollection] = useState([]);
	const [checkCollection, setCheckCollection] = useState(false);

	useEffect(() => {
		fetch(APIURL)
			.then((res) => res.json())
			.then((data) => setBotCollection(data))
			.catch((error) => console.error(error));
	}, [checkCollection]);



	return (
		<div className="App">
			<BotsPage
				botCollection={botCollection}
				setBotCollection={setBotCollection}
				setCheckCollection={setCheckCollection}
			/>
		</div>
	);
}

export default App;
