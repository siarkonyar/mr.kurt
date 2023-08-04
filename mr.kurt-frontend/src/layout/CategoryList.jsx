import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function CategoryList() {
	return (
		<div className='category-list'>
			<Button className='category-list-category-expand-button category-list-button'>
				Categories
			</Button>

			<div className='category-list-category-list'>
				<Button className='category-list-button category-item discounted-products-button'>
					Discounted <br/> Products
				</Button>
				{
					[null, null, null,null, null, null,null, null, null,].map((category) => (
						<Button className='category-list-button category-item'>
							Category
						</Button>
					))
				}
			</div>

		</div>
	);
}
