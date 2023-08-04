import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';
import { Container, Accordion, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProductCard from '../components/ProductCard';
import ProductGroup from '../components/ProductGroup';

export default function ProductDetail(props) {

	let { id } = useParams();

	const [product, setProduct] = useState({});
	const [products, setProducts] = useState([]);
	const [activeThumb, setActiveThumb] = useState();
	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount(amount => amount + 1);
	}
	const decrease = () => {
		if (amount == 1) {
		} else {
			setAmount(amount => amount - 1);
		}
	}


	useEffect(() => {
		let productService1 = new productService();
		productService1.getProductById(id).then(result => setProduct(result.data.data));

	}, [])

	useEffect(() => {
		let productService1 = new productService();
		productService1.getProducts().then(result => setProducts(result.data.data));
	}, [])

	let photos = [
		require('../assets/product-images/product-image.png'),
		require('../assets/main-page/banners/banner1.png'),
		require('../assets/main-page/banners/banner2.png'),
		require('../assets/main-page/banners/banner3.png'),
		require('../assets/main-page/banners/banner4.png'),
		require('../assets/main-page/banners/banner5.png')
	]

	return (
		<div className='background-grey py-5'>
			<Container>
				<div className='row'>
					<div className='col-12 col-lg-6'>

						<div className='product-images-swiper'>
							<Swiper
								loop={true}
								spaceBetween={10}
								navigation={true}
								grabCursor={true}
								thumbs={{ swiper: activeThumb }}
								modules={[Navigation, Thumbs]}
								className='product-images-slider'
							>
								{
									photos.map((item, index) => (
										<SwiperSlide key={index}>
											<img src={item} alt='product images' />
										</SwiperSlide>
									))
								}
							</Swiper>
							<Swiper
								onSwiper={setActiveThumb}
								loop={true}
								spaceBetween={10}
								slidesPerView={4}
								modules={[Navigation, Thumbs]}
								className='product-images-slider-thumbs'
							>
								{
									photos.map((item, index) => (
										<SwiperSlide key={index}>
											<div className='product-images-slider-thumbs-wrapper'>
												<img src={item} alt='product images' />
											</div>


										</SwiperSlide>
									))
								}
							</Swiper>
						</div>

						<Accordion flush className='my-4'>
							<Accordion.Item eventKey="0" className='my-2'>
								<Accordion.Header className='product-detail-accordion-header'>Product Description</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
									minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
									culpa qui officia deserunt mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1" className='my-2'>
								<Accordion.Header className='product-detail-accordion-header'>Payment</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
									minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
									culpa qui officia deserunt mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2" className='my-2'>
								<Accordion.Header className='product-detail-accordion-header'>Shipment</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
									minim veniam, quis nostrud exercitation ullamco laboris nisi ut
									aliquip ex ea commodo consequat. Duis aute irure dolor in
									reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
									culpa qui officia deserunt mollit anim id est laborum.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>

					<div className='col-12 col-lg-6 p-3'>
						<h1 className='fw-normal'>
							{product.productName}
						</h1>
						<h3>
							{product.quantityPerUnit}
						</h3>
						<div className='row d-flex align-items-center'>
							<p className='product-detail-price col-12 col-sm-6'>
								{product.unitPrice}
								<span><i class="bi bi-currency-pound"></i></span>
							</p>

							<div className='col-12 col-sm-6 d-flex fs-3'>
								<i class="bi bi-star-fill star-color "></i>
								<i class="bi bi-star-fill star-color "></i>
								<i class="bi bi-star-fill star-color "></i>
								<i class="bi bi-star-fill star-color "></i>
								<i class="bi bi-star-fill star-color "></i>
								<p className='px-2 fw-bold'>5,0</p>
							</div>
						</div>

						<div className='row align-items-center'>
							<div className='product-detail-counter col-12 col-md-4 my-3'>
								<Button className='product-detail-counter-decrease' onClick={decrease}>-</Button>
								<div className='product-detail-counter-count'>
									<p >
										{amount}
									</p>
								</div>

								<Button className='product-detail-counter-increase' onClick={increase}>+</Button>
							</div>
							<div className='col-12 col-md-4 p-3'>
								<Button className='product-detail-add-to-cart-button'>
									Add To Cart
								</Button>
							</div>
							<div className='col-12 col-md-4 p-3'>
								<Button className='product-detail-buy-now-button'>
									Buy Now
								</Button>
							</div>
						</div>

						<div className='product-detail-like my-5'>
							<button className='product-detail-like-button'>
								<i class="bi bi-heart-fill"></i> <span>
									Like
								</span>
							</button>
						</div>
					</div>
				</div>

				<ProductGroup products={products} header={'Similar Products'} productAmount={4}/>
			</Container>

		</div>
	)
}
