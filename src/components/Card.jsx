import React from 'react'
import { useDispatch } from 'react-redux'
import { AddTOCart, } from '../redux/reducer'

import { AiFillStar } from 'react-icons/ai'
const Card = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div className='h-80 w-60 bg-gray-100 relative max-lg:w-48 max-lg:h-72 ' >
            <span className='absolute top-0 left-0 bg-rose-800 text-xs py-0.5 px-2 text-white'>Best Seller</span>
            <img src={item.thumbnail} alt="" className='h-48 object-cover max-lg:40' />
            <div className='flex flex-col justify-evenly gap-3 max-lg:gap-0'>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm px-2'>{(item.title).slice(0, 25)}</p>
                    <p className='px-2 flex gap-1 items-center'>
                        <span className='flex text-yellow-400'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                        <span className='text-xs'>{item.rating} reviews</span>
                    </p>
                    <p className='px-2 font-bold pb-2'>Rs :- {item.price}</p>
                </div>
                <p
                    onClick={() => dispatch(AddTOCart(item))}
                    className='p-2 text-center font-semibold text-white'
                    style={{ backgroundColor: "#00A9E7" }}
                >
                    Add to cart
                </p>
            </div>
        </div>
    )
}

export default Card
