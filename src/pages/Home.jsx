import React from 'react'
import useProduct from '../hooks/useProduct'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const {product,isLoading,isError}=useProduct()
   let Productdata=product.slice(0,4)
 

  if(isLoading){
    return <h2 className="fw-bold text-center fs-3 my-3">Loading...</h2>
  }
  if(isError){
    return <h2 className="fw-bold text-center fs-3 my-3">Error...😫😫</h2>
  }

  return (
    <div className='container'>
      <div className="row" id='home'>
        {Productdata.map((items)=>{
          return <ProductCard key={items.id} data={items} />
        })}
      </div>


    </div>
  )
}

export default Home
