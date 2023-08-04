import React from 'react'
import logo from '../assets/logo.svg'
import { Button, Container, Form, Image } from 'react-bootstrap'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import SignedIn from './SignedIn';
import ukFlag from '../assets/navigation/uk-flag-round-circle-icon.png'
import pound from '../assets/navigation/pound.jpg'
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
	return (
		<div>
			<div className='nav'>
				<Container>

					<div className='nav-inner'>

						<Link to={'/'}>
							<img className='img-fluid nav-logo' src={logo} alt='Logo' />
						</Link>

						<div className='text-white text-center h-100 d-md-inline-block d-none'>
							<div className="curved-text-container">
								<svg width="400" height="200">
									<path
										id="curvePath1" // Change the id for the first path
										d="M50,100 Q200,30 350,100" // Customize the path here
									/>
									<text className="curved-text">
										<textPath href="#curvePath1" startOffset="50%" textAnchor="middle" className='compiler-font fs-4'>
											MR.KURT
										</textPath>
									</text>
									<path
										id="curvePath2" // Change the id for the second path
										d="M50,80 Q200,250 350,80" // Customize the reversed path here
									/>
									<text className="curved-text">
										<textPath href="#curvePath2" startOffset="50%" textAnchor="middle" className='kaushan-script-font fs-4'>
											Art of Horeca
										</textPath>
									</text>
								</svg>
							</div>

							<h2 className=''>

							</h2>

							<h2 className='kaushan-script-font'>

							</h2>
						</div>


						<div className='d-flex align-items-center'>
							<div>
								<Image className='img-fluid nav-flag' src={ukFlag} alt='uk flag' rounded />
							</div>

							<div className='mx-3'>
								<Image className='img-fluid nav-flag' src={pound} alt='uk flag' roundedCircle />
							</div>


							<SignedIn />
						</div>
					</div>

					<div className='nav-search'>
						<div className='w-10'>
							<Form.Control
								type="text"
								placeholder="Search"
								className=" mr-sm-2 nav-search-bar"
							/>
						</div>

						<Button className='nav-search-button'>
							<i class="bi bi-search"></i>
						</Button>
					</div>
				</Container>



			</div>
		</div>
	)
}
