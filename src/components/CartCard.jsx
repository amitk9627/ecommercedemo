import React from 'react'
import {useDispatch} from 'react-redux'
import {RemoveFromCart } from '../redux/reducer'
import { FaTimes } from 'react-icons/fa'
const CartCard = ({ item }) => {
    const dispatch=useDispatch();
    return (
        <tr className='h-20 bg-gray-100 w-2/3  m-2  p-3' >
            
            <td><img src={item.thumbnail} alt="" className='h-12 object-cover rounded-full' /></td>
            <td ><span className=' px-2'>{(item.title).slice(0, 25)}</span></td>
            <td><span className='px-2 font-bold pb-2'>Rs :- {item.price}</span></td>
            <td><span
                onClick={() => dispatch(RemoveFromCart(item))}
                className='  font-semibold text-white '
                style={{ backgroundColor: "#00A9E7" }}
            >
                <FaTimes className="text-blue-400"/>
            </span></td>

        </tr>
    )
}

export default CartCard
