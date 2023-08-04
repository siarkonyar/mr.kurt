import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AboutUsHeader from '../layout/AboutUsHeader'

export default function AboutUs() {
	return (

		<div >
			<AboutUsHeader />

			<div id='AboutUs'>
				<Container>

					<h3 className='about-us-title'>
						Who Are We?
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>

					<Row className='about-us-youtube-videos'>
						<Col lg={6}>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</Col>
						<Col lg={6}>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
						</Col>
					</Row>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>

					<div className='corporate-information'>
						<h3>
							Corporate Information
						</h3>
						{
							[...Array(10)].map(x =>
								<p>Lorem ipsum dolor sit amet</p>
							)
						}

					</div>


				</Container>
			</div>


		</div>
	)
}
