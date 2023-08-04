import React from 'react'
import logo from '../assets/CompanyLogo.png'
import { Button, Container, Form, Image } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import SignedIn from './SignedIn';
import ukFlag from '../assets/navigation/uk-flag-round-circle-icon.png'
import pound from '../assets/navigation/pound.jpg'
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default function
	() {
	return (
		<div>
			{/* <OwlCarousel className='owl-theme' loop margin={10} nav>
					<div class='item'>
						<h4>1</h4>
					</div>
					<div class='item'>
						<h4>2</h4>
					</div>
					<div class='item'>
						<h4>3</h4>
					</div>

				</OwlCarousel> */}
			<div className='nav'>
				<Container>

					<div className='nav-inner'>

						<Link to={'/'}>
							<img className='img-fluid nav-logo' src={logo} alt='Logo' />
						</Link>


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
