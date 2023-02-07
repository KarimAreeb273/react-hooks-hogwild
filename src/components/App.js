import React, { useState } from "react";
import Nav from "./Nav";
import HogTitle from "./HogTitle";
import HogFilter from "./HogFilter";

import hogs from "../porkers_data";

function App() {

const [greased, setGreased] = useState(false);
const [sortBy, setSortBy] = useState("name");

const showHogs = hogs
	.filter((hog) => greased? hog.greased : true)
	.sort((hog1, hog2) => {
		if (sortBy === "weight"){
			return hog1.weight - hog2.weight;
		} else {
			return hog1.name.localeCompare(hog2.name);
		}
	})


	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
        		<Nav />
     		</div>
			<div className="sixteen wide column centered">
				<HogFilter showGreased={greased} onShowGreased={setGreased} sortBy = {sortBy} setSortBy = {setSortBy}/>
			</div>
			<div className="sixteen wide column centered">
				<HogTitle hogs = {showHogs}/>
			</div>
		</div>
	);
}

export default App;

