import React from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function ContactUs() {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<div>
			<h2 className='contact-us-header'>
				Contact
			</h2>

			<Container>
				<p className='contact-us-text'>
					Cafemarkt Elektronik Ticaret A.Ş <br />
					Merkez: Büyükdere Cad. No:105/A Gayrettepe Şişli/İstanbulDepo/Şube: İstoç, Mahmutbey Mah. 2447 Sok. No:157 Bağcılar/İstanbul <br />
					Mal kabul ve iadeler depo adresinden yapılmaktadır. <br />

					Telefon: (0850) 811 12 23 <br />
					Eposta: info@cafemarkt.com <br />
					Posta Kodu: 34218 <br />
					Vergi Dairesi: ZincirlikuyuVergi No: 1950467235 <br />
					İMMİB Sicil No: 12/84720 <br />
					Ticaret Sicil No: 131824-5 <br />
					Mersis No: 0195046723500001 <br />
					Kep Adresi: cafemarkt@hs01.kep.tr
				</p>

				<p className='contact-us-text'>
					Destek Hattımız: 0850 811 12 23<br />
					Hafta içi: 09:00-18:00 - Cumartesi: 09:00-13:30
				</p>

				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18579.94266742767!2d34.56926384937985!3d36.80206798016808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f4ebbadff751%3A0x65b9cb327d152f33!2sCHRISTAL%20TOWER!5e0!3m2!1str!2sae!4v1690965437994!5m2!1str!2sae" className='contact-us-map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



			</Container>

			<h2 className='contact-us-header'>
				Contact
			</h2>

			<Container>

				<Form noValidate validated={validated} onSubmit={handleSubmit} className='contact-us-form'>
					<Row className="mb-3">


						{/* TODO - validation must be done */}
						<div className='col-lg-6 col-12'>
							<Form.Group controlId="validationCustom01">
								<Form.Control
									required
									type="text"
									placeholder="First name"
									className='contact-us-form-item'
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							</Form.Group>
							<Form.Group controlId="validationCustom02">
								<Form.Control
									required
									type="text"
									placeholder="Last name"
									className='contact-us-form-item'
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							</Form.Group>

							<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
								<Form.Control required type="email" placeholder="name@example.com" className='contact-us-form-item' />
							</Form.Group>
						</div>

						<div className='col-lg-6 col-12'>

							<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
								<Form.Control required as="textarea" rows={3} placeholder='Your Message' className='contact-us-form-text-item contact-us-form-item' />
							</Form.Group>


							<Form.Group className="mb-3">
								<Form.Check
									required
									label="Agree to terms and conditions"
									feedback="You must agree before submitting."
									feedbackType="invalid"
									className='fw-bold'
								/>
							</Form.Group>

							<Button className='contact-us-form-button' type="submit">Submit form</Button>
						</div>


					</Row>



				</Form>

			</Container>
		</div>
	)
}
