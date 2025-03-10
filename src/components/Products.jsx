import React, { useContext, useEffect, useState } from 'react'
import RightButton from '../assets/icons/chevron-right'
import GlobalCart from '../assets/icons/Cart'
import GlobalIcon from '../assets/icons/GlobalHeart'
import { CartContext } from '../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { FavContext } from '../contexts/FavContext'


function Products() {
	const [products, setProducts] = useState([])
	const { addToCart } = useContext(CartContext)
	const { setFav, fav } = useContext(FavContext)
	console.log(fav);

	function getProducts() {
		fetch('https://382faed7566b7ad2.mokky.dev/product')
			.then(res => res.json())
			.then(json => setProducts(json))
	}
	const navigate = useNavigate()
	const navigatePage = id => {
		navigate(`/product/${id}`)
	}

	useEffect(() => {
		getProducts()
	}, [])

	function addToFav(data) {
		setFav([...fav, data]);

	}

	return (
		<section className='cards'>
			<div className='container'>
				<div className='cards__wrap'>
					<h1 className='cards__title'>Скидки</h1>
					<a href='' className='cards__link'>
						Смотреть все
						<RightButton />
					</a>
					<div className='cards__card'>
						{products.map(item => (
							<div key={item.id} className='cards__item'>
								<div className='cards__map'>
									<div
										className='cards__image'
										onClick={() => navigatePage(item.id)}
									>
										<div className='cards__fullimage'>
											<img src={item.image} className='cards__images' />
										</div>
										<button className='cards__icon'
											onClick={() => addToFav(item)}
										>
											<GlobalIcon />
										</button>
									</div>
									<p className='cards__text'>{item.text}</p>
									<a className='cards__price'>{item.price}</a>
									<button
										className='cards__buy'
										onClick={() => addToCart(item)}
									>
										<GlobalCart />В корзину
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Products
