import {useContext} from 'react'
import { CartContext } from '../store/CartContext'

const useCart = () => {
  return useContext(CartContext)
}

export default useCart
