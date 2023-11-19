import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaBars, FaTimes, FaRegUser } from 'react-icons/fa'
import { BsCart2, } from 'react-icons/bs'
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
const Navbar = () => {
    const [show, setShow] = useState(false)
    const cartLength = useSelector(state => state.cartSystem.quantity);
   
    return (
        <div className='w-full'>
            <header className='flex gap-10 justify-between items-center relative '>
                <span className='max-md:absolute top-5 left-3 md:hidden text-xl' onClick={() => setShow(!show)}>
                    {show ? <FaTimes /> : <FaBars />}
                </span>
                <div className='max-lg:ml-10'><h1>company logo</h1></div>
                <nav className={show ? ' responsive' : ''}>
                    <NavLink to='/' >HOME</NavLink>

                    <NavLink to='/'>DINING</NavLink>
                    <NavLink to='/'>LIGHTING</NavLink>
                    <NavLink to='/'>DECOR</NavLink>
                    <NavLink to='/'>GARDEN</NavLink>
                    <NavLink to='/'>DEALS</NavLink>
                    <NavLink to='/'>BEST-SELLERS</NavLink>
                    <NavLink to='/'>DIWALI STORE</NavLink>

                </nav>

                <div className='flex gap-4'>
                    <button className='symbol'><AiOutlineSearch /></button>
                    <NavLink to='/user' className='symbol' ><FaRegUser /></NavLink>
                    <NavLink to='/' className='symbol'><AiOutlineHeart /></NavLink>

                    <NavLink to='/addtocart' className='symbol relative'>
                       {cartLength>0 && <span className='absolute bg-red-400 -top-2 -right-2 rounded-full text-sm h-4 w-4 flex justify-center items-center'> {cartLength}</span>}
                        <BsCart2 />
                    </NavLink>

                </div>

            </header>

        </div>
    )
}

export default Navbar
