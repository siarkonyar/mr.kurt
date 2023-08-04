import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/carousel/carousel-img.png';
import { Container, ListGroup } from 'react-bootstrap';
import SecondCategoryList from '../layout/SecondCategoryList';
import productService from '../services/productService';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';

export default function ProductsByCategory() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService1 = new productService();
    productService1.getProducts().then(result => setProducts(result.data.data));
  })


  return (
    <div className='background-grey'>
      <SecondCategoryList />
      <Container>
        <div className='row '>
          <Carousel className='col-md-9 col-12 h-100 mt-3'>
            <Carousel.Item>
              <img src={img} alt='carousel slide' className='w-100 d-block img-fluid' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img} alt='carousel slide' className='w-100 d-block img-fluid' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={img} alt='carousel slide' className='w-100 d-block img-fluid' />
            </Carousel.Item>
          </Carousel>

          <div className='col-md-3 col-12'>
            {
              products.filter((item, index) => index < 1).map(product => (

                <ProductCard  product={product} />

              ))
            }
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-3 products-by-category-category-list'>
            <div className='products-by-category-category-list-inner bg-white'>
              <p className='products-by-category-category-list-header'>
                Categories
              </p>

              <ul className='list-unstyled'>
                {
                  [null, null, null, null, null, null, null, null, null, null, null, null, null, null].map(item => (
                    <li>

                      <Link to='/products-by-category'>category</Link>
                    </li>
                  ))
                }

              </ul>
            </div>
          </div>



          <div className='col-12 col-md-9 mx-'>
            <div className='row w-100'>

              {
                products.filter((item, index) => index < 20).map(product => (

                  <div className='col-6 col-md-4'>
                    <ProductCard product={product} />
                  </div>

                ))
              }
            </div>

          </div>
        </div>

      </Container>


    </div>
  )
}
