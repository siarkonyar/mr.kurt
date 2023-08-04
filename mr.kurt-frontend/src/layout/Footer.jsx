import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../assets/logo.svg'
import paypal from '../assets/footer/payments/paypal.png'
import masterCard from '../assets/footer/payments/masterCard.png'
import visa from '../assets/footer/payments/visa.png'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<div>
			<div className='background-black py-5 text-white'>
				<Container>
					<div className='row'>
						<div className='col-md-3 col-12'>
							<Link to={'/'}>
								<img className='img-fluid' src={logo} alt='logo' />
							</Link>

						</div>

						<div className='col-sm-3 col-6'>
							<h4 className='my-4'>Information</h4>
							<ul className='footer-list list-unstyled'>
								<li className='footer-list-item'>
									<Link to={'/about-us'} className='footer-list-item-link'>
										About Us
									</Link>

								</li>
								<li className='footer-list-item'>
									Our Website
								</li>
								<li className='footer-list-item'>
									<Link to={'/blog'} className='footer-list-item-link'>
										Blog
									</Link>

								</li>
								<li className='footer-list-item'>
									Career
								</li>
								<li className='footer-list-item'>
									<Link to={'/contact-us'} className='footer-list-item-link'>
										Contact Us
									</Link>

								</li>
								<li className='footer-list-item'>
									Our Bank Accounts
								</li>
								<li className='footer-list-item'>
									Export
								</li>
								<li className='footer-list-item'>
									Payment
								</li>
							</ul>
						</div>

						<div className='col-sm-3 col-6'>
							<h4 className='my-4'>Help Center</h4>
							<ul className='footer-list list-unstyled'>
								<li className='footer-list-item'>
									Frecuently Asked Questions
								</li>
								<li className='footer-list-item'>
									Corporate Sales Form
								</li>
								<li className='footer-list-item'>
									Sales Contract
								</li>
								<li className='footer-list-item'>

									Protection of Personal Data
								</li>
								<li className='footer-list-item'>
									Privacy Policy
								</li>
								<li className='footer-list-item'>
									Cookie Policy
								</li>
							</ul>
						</div>
						<div className='col-sm-3 col-6'>
							<h4 className='my-4'>Brands</h4>
							<ul className='footer-list list-unstyled'>
								<li className='footer-list-item'>
									Frecuently Asked Questions
								</li>
								<li className='footer-list-item'>
									Corporate Sales Form
								</li>
								<li className='footer-list-item'>
									Sales Contract
								</li>
								<li className='footer-list-item'>

									Protection of Personal Data
								</li>
								<li className='footer-list-item'>
									Privacy Policy
								</li>
								<li className='footer-list-item'>
									Cookie Policy
								</li>
							</ul>
						</div>



					</div>

					<div className='footer-social-media'>
						<a>
							<i class="bi bi-facebook"></i>
						</a>
						<a>
							<i class="bi bi-twitter"></i>
						</a>
						<a>
							<i class="bi bi-instagram"></i>
						</a>
						<a>
							<i class="bi bi-linkedin"></i>
						</a>
						<a>
							<i class="bi bi-youtube"></i>
						</a>
					</div>

					<div className='text-center'>
						Nisbets Limited Catering Equipment Supplies <br />
						UK registered company no, 016931112 | VAT no. 974 8030 00 |
						1983 - 2023 Nisbets Limited and its affiliates. All Rights Reserved. <br />
						Registered office: Nisbets Limited, Fourth Way, Avonmouth, Bristol BS11 8TB <br />
						Tel: 0117 316 5000<br />
					</div>
				</Container>
			</div>

			<div className='d-flex justify-content-end footer-payment-methods'>
				<img className='img-fluid' src={paypal} alt='paypal' />
				<img className='img-fluid' src={masterCard} alt='master card' />
				<img className='img-fluid' src={visa} alt='visa' />
			</div>

		</div>

	)
}
