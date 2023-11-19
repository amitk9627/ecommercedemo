import React from 'react';
import { useSelector } from 'react-redux'
import CartCard from '../components/CartCard'

const AddToCart = () => {
  const { cart } = useSelector(state => state.cartSystem);

  return (
    <div className='w-screen'>
      <table className="w-2/3 p-4">
        {
          cart?.map((item) => <CartCard item={item} key={item.id} />)
        }
      </table>
      {/*  */}
    </div>
  )
}

export default AddToCart
