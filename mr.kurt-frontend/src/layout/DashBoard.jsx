import React from 'react'
import Nav from './Nav'
import CategoryList from './CategoryList'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductsByCategory from '../pages/ProductsByCategory'
import Footer from './Footer'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import ProductDetail from '../pages/ProductDetail'
import SecondCategoryList from './SecondCategoryList'
import Blog from '../pages/Blog'

export default function DashBoard() {
	return (
		<div className='overflow-hidden'>
			<Nav/>
			<SecondCategoryList/>
			{/* <CategoryList/> */}
			<Routes>
				<Route exact path='/product/:id' Component={ProductDetail}/>
				<Route exact path='/' Component={Home}/>
				<Route exact path='/products-by-category' Component={ProductsByCategory}/>
				<Route exact path='/about-us' Component={AboutUs}/>
				<Route exact path='/contact-us' Component={ContactUs}/>
				<Route exact path='/blog' Component={Blog}/>
			</Routes>
			<Footer/>
		</div>
	)
}
