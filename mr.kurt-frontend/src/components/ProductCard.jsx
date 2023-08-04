import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/product-images/product-image.png';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {


	return (
		<div className='w-100 my-3'>
			<Card className='w-100 product-card'>
				<Card.Img className='img-fluid' variant="top" src={img} />
				<Card.Body>
					<Card.Title>
						<Link to={`/product/${product.id}`}>
							{product.productName}
						</Link>
					</Card.Title>
					<Card.Text>
						{product.quantityPerUnit}
					</Card.Text>
					<Card.Text className='fw-bold'>
						With Tax <br />
						{product.unitPrice} £
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}
