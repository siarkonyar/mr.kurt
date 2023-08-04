import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGroup(props) {
	const products = props.products;
	const header = props.header;
	const productAmount = props.productAmount;
	
	return (
		<div>
			<div className='p-4 product-group mb-5'>

				<div>
					<div className='d-flex justify-content-between'>
						<p className='fw-bold h5'>{header}</p>
						<p className='fw-bold'>Most Popular <span className='grey'>  •  Most Recent  •  Most Sold</span> </p>

					</div>

					<div className='row'>
						{
							products.filter((item, index) => index < productAmount).map(product => (
								<div className='col-lg-3 col-6 d-flex justify-content-center'>
									<ProductCard product={product} />
								</div>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}
