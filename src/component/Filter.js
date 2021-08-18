import React from 'react'

function Filter({ number, type, rating, setrating, settype }) {
	return (
		<div>
			{number} movies
			<br />
			rating
			<select value={rating} onChange={setrating}>
				<option value="latest">latest</option>
				<option value="highest">highest</option>
				<option value="lowest">lowest</option>
			</select>
			<br />
			types{"  "}
			<select value={type} onChange={settype}>
				<option value="action">action</option>
				<option value="comedy">comedy</option>
			</select>
		</div>
	);
}

export default Filter
