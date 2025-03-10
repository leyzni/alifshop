import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Navigation, Thumbs } from 'swiper/modules'
import '/src/style.css'

function ProductItem() {
	const [product, setProduct] = useState({})
	const location = useLocation()
	function getProduct() {
		fetch(
			`https://382faed7566b7ad2.mokky.dev/product/${location.pathname.split('/')[2]
			}`
		)
			.then(res => res.json())
			.then(json => setProduct(json))
	}
	useEffect(() => {
		getProduct()
	}, [])
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	return (
		<>
			<div>{product.text}</div>
			{
				<div className='swiper-container'>
					<div className='thumbs-container'>
						<Swiper
							onSwiper={setThumbsSwiper}
							spaceBetween={10}
							slidesPerView={4}
							direction='vertical'
							watchSlidesProgress
							className='thumbs-swiper'
						>
							<SwiperSlide>
								<div className='cards__swipers'>
									{/* <img src={product.image} alt='Product' /> */}
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className='cards__swipers'>
									{/* <img src={product.imageTwo} alt='Product' /> */}
								</div>
							</SwiperSlide>
						</Swiper>
					</div>

					<div className='main-slider-container'>
						<Swiper
							modules={[Navigation, Thumbs]}
							spaceBetween={10}
							slidesPerView={1}
							navigation
							thumbs={{ swiper: thumbsSwiper }}
							className='main-swiper'
						>
							<SwiperSlide>
								<img src={product.image} alt='Product' />
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			}
			;
		</>
	)
}

export default ProductItem
