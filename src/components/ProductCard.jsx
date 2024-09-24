import React from 'react'
import useCart from '../hooks/useCart'

const ProductCard = ({ data }) => {
  console.log(data)
  const { AddtoCart } = useCart()

  return (
    <div className='col-12 col-sm-12 col-md-3 col-lg-3'>
      <div className="card shadow" id='product-card'>
        <img src={data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className='btn btn-success rounded-pill' onClick={() => AddtoCart(data)}>addtocart</button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard
