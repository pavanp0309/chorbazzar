import React from 'react'
import useCart from '../hooks/useCart'

const Cart = () => {
  const { cartItems, increment, decrement, removeItem, Total } = useCart()


  return (
    <div className='container'>
      {/* cart header section start */}
      <h3 className='text-center fw-bold display-6 my-2'>Shopping Cart</h3>
      {/* cart header section end */}
     {/* cart-items */}
      {
        (cartItems.length == 0) ? (<h3>cart is Empty 😣</h3>) : (
          <>
            <div className="row">
              {
                cartItems.map((item) => {
                  return <div className='col-12 col-sm-12 col-md-3 col-lg-3' key={item.id}>
                    <div className="card shadow" >
                      <img src={item.image} className="card-img-top" alt="..." width="100%" height="150px" />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title </p>
                        <p className="card-text">{item.price} </p>
                        {/* button functionalities start */}
                        <div className='d-flex justify-content-around'>
                          {/* increment & decrement btn start */}
                          <div class="btn-group" role="group" >
                            <button type="button" class="btn btn-danger" onClick={() => decrement(item.id)}>-</button>
                            <span class="btn btn-warning" >{item.quantity}</span>
                            <button type="button" class="btn btn-success" onClick={() => increment(item.id)}>+</button>
                          </div>
                          {/* increment & decrement btn end */}
                          {/* remove-btn start */}
                          <div className='remove-container'>
                            <button type="button" class="btn btn-danger" onClick={() => removeItem(item.id)}>delete</button>
                          </div>
                          {/* remove-btn end */}

                        </div>
                      </div>
                    </div>

                  </div>
                })
              }
            </div>
          </>
        )}
     {/* cart-items */}

      {/* cart-total */}
      {cartItems.length > 0 ? <p>Total:{Total.toFixed(2)}</p> : <p>Total:00.00</p>}
    </div>
  )
}

export default Cart
