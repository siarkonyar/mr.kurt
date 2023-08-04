import React from 'react'
import img from '../assets/CompanyLogo.png'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CategoryList from './CategoryList'

export default function SecondCategoryList() {
	return (
		<div className='w-100 overflow-x-scroll px-md-5 background-grey'>
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

		</div>

	)
}
