import React from 'react'
import './Cart.css'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
const Cart = () => {
  const products = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  // const totalAmount = ()=>{
  //     totalAmount= price*products
  // }

  const handleRemove=(productId)=>{
    dispatch(remove(productId))
  }
  return (
    <div className='cart'>
      <h3>Cart Items</h3>
      <div className='cartWrapper'>
          {
            products.map(product =>(
              <div key={product.id} className='cartCard'>
                  <img src={product.image} alt="" />
                  <h5>{product.title}</h5>
                  <h5>{product.price}</h5>
                  <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button>
              </div>
            ))
          }
      </div>
                  <div className='total'>
                      <h2>Total Amount:{products.length}  </h2>
                      <button>place Order</button>
                  </div>
    </div>
  )
}

export default Cart