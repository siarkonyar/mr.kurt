import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function AboutUsHeader() {
	return (
		<div className='about-us-header'>
			<Container>
				<h2 className='fw-bold mb-5'>
					About Us
				</h2>

				<ul className='list-unstyled d-flex justify-content-between flex-md-row flex-column about-us-header-list'>
					<li className='about-us-header-list-item'>
						<NavLink exact to="/about-us" className='about-us-header-link'>
							About Us
						</NavLink>
					</li>
					<li className='about-us-header-list-item'>
						<NavLink exact to="/about-returns" className='about-us-header-link'>
							Returns
						</NavLink>
					</li>
					<li className='about-us-header-list-item'>
						<NavLink exact to="/about-shipping" className='about-us-header-link'>
							Shipping
						</NavLink>
					</li>
					<li className='about-us-header-list-item'>
						<NavLink exact to="/about-protection-of-personal-data" className='about-us-header-link'>
							Protection of Personal Data
						</NavLink>
					</li>
					<li className='about-us-header-list-item'>
						<NavLink exact to="/about-payment" className='about-us-header-link'>
							Payment
						</NavLink>
					</li>
					<li className='about-us-header-list-item'>
						<NavLink exact to="/about-membership" className='about-us-header-link'>
							Membership
						</NavLink>
					</li>
				</ul>
			</Container>

		</div>
	)
}
