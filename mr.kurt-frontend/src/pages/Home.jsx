import React, { useEffect } from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/carousel/carousel-img.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, CloseButton, Container } from 'react-bootstrap';
import SecondCategoryList from '../layout/SecondCategoryList';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ProductCard from '../components/ProductCard';
import productService from '../services/productService';
import womanCook from '../assets/main-page/woman-cook.png';
import banner1 from '../assets/main-page/banners/banner1.png'
import banner2 from '../assets/main-page/banners/banner2.png'
import banner3 from '../assets/main-page/banners/banner3.png'
import banner4 from '../assets/main-page/banners/banner4.png'
import banner5 from '../assets/main-page/banners/banner5.png'
import cardImage1 from '../assets/main-page/cards/shipping.png'
import cardImage2 from '../assets/main-page/cards/secure-payment.png'
import cardImage3 from '../assets/main-page/cards/import.png'
import cardImage4 from '../assets/main-page/cards/help.png'
import cardImage5 from '../assets/main-page/cards/headphones.png'
import blog1 from '../assets/blog/blog1.png'
import ProductGroup from '../components/ProductGroup';

export default function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		let productService1 = new productService();
		productService1.getProducts().then(result => setProducts(result.data.data));
	})

	return (
		<div className='home'>

			<div className='f8-background p-4'>
				<Container>
					<Carousel>
						<Carousel.Item>
							<img src={img} alt='carousel slide' className='w-100 d-block' />
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img src={img} alt='carousel slide' className='w-100 d-block' />
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img src={img} alt='carousel slide' className='w-100 d-block' />
							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>
									Praesent commodo cursus magna, vel scelerisque nisl consectetur.
								</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>

					<OwlCarousel className='owl-theme mt-4' loop margin={10} nav dots={false}>

						{
							[null, null, null, null, null, null].map((item) => (
								<div class='item'>
									<img src={img} />
								</div>
							))
						}

					</OwlCarousel>

				</Container>


			</div>

			<div>
				<Container className='p-4'>
					<p className='h4 text-center fw-bold mb-4'>
						Good Deals
					</p>

					<div className='row'>
						{
							products.filter((item, index) => index < 4).map(product => (
								<div className='col-lg-3 col-6 d-flex justify-content-center'>
									<ProductCard product={product} />

								</div>

							))
						}

					</div>
				</Container>

			</div>

			<div className='f8-background pt-4 pb-4'>
				<Container>
					<div className='row p-4 editors-choices'>
						<div className='d-flex justify-content-between'>
							<p className='fw-bold h5'>Editors Choices</p>
							<p className='fw-bold'>Most Popular <span className='grey'>  •  Most Recent  •  Most Sold</span></p>
						</div>

						<div className=''>


							<div className='row my-4'>
								<div className='col-lg-3 col-6 d-flex justify-content-between'>
									<img src={womanCook} className='img-fluid' alt='editor'/>

								</div>
								{
									products.filter((item, index) => index < 3).map(product => (
										<div className='col-lg-3 col-6 d-flex justify-content-center'>
											<ProductCard product={product} className='h-100'/>

										</div>

									))
								}
							</div>
						</div>
					</div>

					<div className='pt-5 pb-5 row'>
						<div className='col-12 col-lg-6 explore-now-text d-flex justify-content-center'>
							<img src={banner1} className='img-fluid' alt='banner'/>
						</div>

						<div className='col-12 col-lg-6 row'>
							<div className='col-6 explore-now-text d-flex justify-content-center'>
								<img src={banner2} className='img-fluid'  alt='banner'/>
							</div>
							<div className='col-6 explore-now-text d-flex justify-content-center'>
								<img src={banner3} className='img-fluid'  alt='banner'/>
							</div>
							<div className='col-6 explore-now-text d-flex justify-content-center'>
								<img src={banner4} className='img-fluid'  alt='banner'/>
							</div>
							<div className='col-6 explore-now-text d-flex justify-content-center'>
								<img src={banner5} className='img-fluid' alt='banner' />
							</div>
						</div>
					</div>

					{[null, null, null].map(item => (
						<ProductGroup products={products} header={'Editors Choices'} productAmount={4}/>
					))}

					<div className='main-page-information-cards d-flex flex-lg-row flex-column justify-content-center align-items-center'>
						<div className='main-page-information-card'>
							<img className='mb-2' src={cardImage1} alt='shipping' />
							<p className='h5 fw-bold'>Free Shipping</p>
							<p>Free Shipping Over 100 GDP</p>
						</div>
						<div className='main-page-information-card'>
							<img className='mb-2' src={cardImage2} alt='payment' />
							<p className='h5 fw-bold'>Secure Payment</p>
							<p>Your payment is 100% secure with us</p>
						</div>
						<div className='main-page-information-card'>
							<img className='mb-2' src={cardImage3} alt='export' />
							<p className='h5 fw-bold'>Export</p>
							<p>You can order from outside the UK</p>
						</div>
						<div className='main-page-information-card'>
							<img className='mb-2' src={cardImage4} alt='support' />
							<p className='h5 fw-bold'>Support</p>
							<p>You can reach our support 24/7</p>
						</div>
						<div className='main-page-information-card'>
							<img className='mb-2' src={cardImage5} alt='support' />
							<p className='h5 fw-bold'>Support</p>
							<p>You can reach our support 24/7</p>
						</div>
					</div>


				</Container>


			</div>

			<div className='main-page-blog'>
				<Container className='d-flex flex-column justify-content-center text-center'>
					<p className='h2 fw-bold m-4'>
						Mr. Kurt Blog
					</p>

					<div className='row'>
						{
							[null, null, null].map(item => (
								<div className='col-lg-4 col-12 text-left d-flex flex-column justify-content-center align-items-center my-4'>
									<div className='w-75 d-flex flex-column justify-content-center align-items-center'>
										<img src={blog1} className='img-fluid w-100' alt='blog' />
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
										<p className='fw-bold'>Read the Rest</p>
									</div>



								</div>
							))
						}
					</div>
				</Container>
			</div>

			<Container className='mt-5'>
				<div className='row'>
					<div className='col-lg-5 col-12'>
						<img className='img-fluid w-100' src={banner2} alt='coffee'/>
					</div>

					<div className='col-lg-7 col-12 p-3'>
						<p className='h5 fw-bold mb-3'>Mr. Kurt</p>
						<p className='mb-3'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>

						<Button variant='dark'>Get Contact</Button>
					</div>
				</div>
			</Container>


			<Container>
				<div className='text-center my-5'>
					<p className='h4 fw-bold'> <span className='youtube-red me-2'><i class="bi bi-youtube"></i></span> Mr. Kurt <span className='youtube-red'>TV</span></p>
					<div className='row'>
						{
							[null, null, null, null].map(item => (
								<div className='col-lg-3 col-12 my-4'>
									<iframe width="" height="" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
								</div>
							))
						}
					</div>

				</div>
			</Container>



		</div>


	);
}
