import React from 'react'
import './Navbar.css'
import { FaShoppingCart,FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const items = useSelector((state) => state.cart)
  return (
    <div className='nav'>
      <div className='navbar'>
        <Link className='navLink' to='/'><span className='logo'>React-Redux</span></Link>
        <input type="text" name="" id="" />
        <span className='search'><FaSearch/></span>
        <div>
          <Link className='navLink' to='/'>Home</Link>
          <Link className='navLink' to='/cart'><FaShoppingCart />
            <span className='count'>{items.length}</span>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar