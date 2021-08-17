import React from 'react'
import './Cart.css'
function Cart({names}) {
    return (
			<div className="carts">
				<div className="cart">
					{names.map((name) => (
						<div className="cart__paragraph">
							<a href={name.name}>
								<h3>{name.name}</h3>
								<img src={name.image} alt={name.name} />
								
							</a>
							<div className="cart__title">
								<p>{name.type}</p>
								<p>{name.title}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
}

export default Cart
