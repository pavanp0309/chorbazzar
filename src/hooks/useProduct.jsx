import {useContext} from 'react'
import {ProductContext} from "../store/ProductContext"

const useProduct = () => {
  return useContext(ProductContext)
}

export default useProduct
