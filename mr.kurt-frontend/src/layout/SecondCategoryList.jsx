import React from 'react'
import img from '../assets/CompanyLogo.png'
import {  Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function SecondCategoryList() {
	return (
		{/* <div className='w-100 overflow-x-scroll px-md-5 background-grey'>
			<div className='pb-4 d-flex justify-content-between second-category-list'>
				{
					[null, null, null, null, null, null, null, null, null, null, null].map((category) => (
						<Link to={'/products-by-category'} className='pt-3 px-2 d-flex flex-column align-items-center'>
							<Image src={img} className='mb-3 img-fluid second-category-list-img' roundedCircle />
							<span>
								kahve
							</span>
						</Link>
					))
				}
			</div>

		</div> */},

		<div className='w-100 px-md-5 background-grey'>
			<div className='pb-4 d-flex justify-content-center second-category-list'>

				<OwlCarousel className='owl-theme' loop
					margin={10}
					nav
					dots={false}
					navText = {['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>']}
					responsive={
						{
							'0': {
								items: 4
							},
							'600': {
								items: 6
							},
							'1000': {
								items: 8
							}
						}

					}>
					<div class='item'>
						<Link to={'/products-by-category'} className='pt-3 px-2 d-flex flex-column align-items-center'>
							<Image src={img} className='mb-3 img-fluid second-category-list-img' roundedCircle />
							<span>
								Paper Products
							</span>
						</Link>
					</div>
					<div class='item'>
						<Link to={'/products-by-category'} className='pt-3 px-2 d-flex flex-column align-items-center'>
							<Image src={img} className='mb-3 img-fluid second-category-list-img' roundedCircle />
							<span>
								Cafe Shop Products
							</span>
						</Link>
					</div>
					<div class='item'>
						<Link to={'/products-by-category'} className='pt-3 px-2 d-flex flex-column align-items-center'>
							<Image src={img} className='mb-3 img-fluid second-category-list-img' roundedCircle />
							<span>
								Restaurant Products
							</span>
						</Link>
					</div>
					<div class='item'>
						<Link to={'/products-by-category'} className='pt-3 px-2 d-flex flex-column align-items-center'>
							<Image src={img} className='mb-3 img-fluid second-category-list-img' roundedCircle />
							<span>
								Hotel Products
							</span>
						</Link>
					</div>
					<div class='item'>
						<Link to={'/products-by-category'} className='pt-3 px-2 d-flex flex-column align-items-center'>
							<Image src={img} className='mb-3 img-fluid second-category-list-img' roundedCircle />
							<span>
								Bar & Pub Equipments
							</span>
						</Link>
					</div>
					<div class='item'>
						<Link to={'/products-by-category'} className='pt-3 px-2 d-flex flex-column align-items-center'>
							<Image src={img} className='mb-3 img-fluid second-category-list-img' roundedCircle />
							<span>
								Catering Equipments
							</span>
						</Link>
					</div>
					<div class='item'>
						<Link to={'/products-by-category'} className='pt-3 px-2 d-flex flex-column align-items-center'>
							<Image src={img} className='mb-3 img-fluid second-category-list-img' roundedCircle />
							<span>
								Commercial Kitchen Equipments
							</span>
						</Link>
					</div>

				</OwlCarousel>
			</div>

		</div >

	)
}
