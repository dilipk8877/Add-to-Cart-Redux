import React from 'react'
import './Home.css'
import Product from '../components/Product'
// import img1 from './img/img1.jpg'
// import img2 from './img/img2.jpg'
// import img3 from './img/img3.jpg'


const Home = () => {
  return (
    <div className='home'>
      <section>
        <h3>Product</h3>
        <Product />
      </section>
    </div>
  )
}

export default Home