import React, { useEffect, useState } from "react";
import "./App.css";
import Cart from "./component/Cart";
import movies from './movies'
function App() {

	const [state, setstate] = useState(movies);
  console.log(state);


	return (
		<div className="App">
			<header>
				<h1>movie</h1>
			</header>

			<main>
				<div className="movie__card"> 
        <Cart names={state} />
        </div>
				<div className="movie__pay">pay</div>
			</main>
			<footer> All Right is reserved.</footer>
		</div>
	);
}

export default App;
