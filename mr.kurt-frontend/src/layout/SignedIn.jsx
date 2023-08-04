import React from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SignedIn() {
	return (
		<div className='d-flex signed-in'>
			<Button variant='link' className='text-white signed-in-button'>
				<i class="bi bi-person"></i>
			</Button>
			<Button variant='link' className='signed-in-button signed-in-cart '>
				<i class="bi bi-bag"></i>
			</Button>
		</div>
	)
}
