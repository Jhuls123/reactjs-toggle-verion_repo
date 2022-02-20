import "./App.css";
import Toggle from "./components/Toggle";
import { SpreadState } from "./Helpers/UseContext";
import React, { useState } from "react"
function App() {
	const [toggle, setToggle] = useState(false);
	return (
		<SpreadState.Provider value={{toggle, setToggle}}>
			<div className={`App ${toggle ? 'dark' : ''}`}>
				<Toggle />
			</div>
		</SpreadState.Provider>
	);
}

export default App;
