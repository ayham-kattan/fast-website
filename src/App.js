import React, {  useState } from "react";
import "./App.css";
import Cart from "./component/Cart";
import Filter from "./component/Filter";
import movies from './movies'
function App() {

	const [state] = useState(movies);
	const [type, settype] = useState(movies.type);
	const [rating, setrating] = useState(movies.rating);
  
  

	return (
		<div className="App">
			<header>
				<h1>movie</h1>
			</header>

			<main>
				<Filter
					number={state.length}
					type={type}
					rating={rating}
				
    
					settype={settype}

				/>

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
