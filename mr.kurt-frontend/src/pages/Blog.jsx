import React from 'react'
import BlogPost from '../components/BlogPost'
import { Container } from 'react-bootstrap'
import img from '../assets/blog/blog1.png'

export default function Blog() {
	return (
		<div className='background-grey'>
			<div className='blog-header bg-darkgrey p-4'>
				<h1>Blog</h1>
			</div>

			<Container>
				<div className='row'>
					<div className='col-12 col-lg-8'>
						<BlogPost />
					</div>
					<div className='col-12 col-lg-4 my-5'>
						<p className='fw-bold p-3 bg-white'>
							Suggested Posts
						</p>

						{
							[null, null, null].map(() => (
								<div className='row my-3'>
									<div className='col-5'>
										<img className='img-fluid' src={img} alt='blogpost photo' />
									</div>

									<div className='col-7'>
										<p>
											How would you like yout coffee?
										</p>
									</div>
								</div>
							))
						}


					</div>
				</div>

			</Container>


		</div>
	)
}
