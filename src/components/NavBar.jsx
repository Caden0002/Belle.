import { useState } from 'react';
import { FaSearch, FaUser, FaStar, FaShoppingCart } from 'react-icons/fa';
import CartCountBadge from './CartCountBadge';

import { Link } from 'react-router-dom'; // Import the Link component



const background = "bg-backgroundColorPrimary ";
const companyName = 'BELLE.';

function NavBar({ setShowCart }) {
    return (
        <div className="">
            <header className={`fixed inset-x-0 top-0 z-50 ${background} border-b border-grey-200`}>

                    <nav className="flex items-center max-w-screen-xl mx-auto">

                        <div className="flex flex-1 p-8">
                        </div>

                    <div className="flex-1 text-4xl font-bold text-textColorPrimary font-Signikta tracking-widest flex-grow text-center  ">
                        <Link to="/">{companyName}</Link>
                    </div>

                    <div className="flex flex-1  items-center justify-end gap-x-6 p-8 cursor-pointer  ">
                        <a className="hidden md:block text-sm text-textColorPrimary ">
                            <FaSearch />
                        </a>
                        <a className="hidden md:block text-sm text-textColorPrimary">
                            <FaUser />
                        </a>
                        <a className="hidden md:block text-sm text-textColorPrimary">
                            <FaStar />
                        </a>
                        <a className="text-xl md:text-sm text-textColorPrimary " onClick={() => setShowCart(true)}>
                            <FaShoppingCart />

                        </a>
                        <CartCountBadge />
                    </div>

                </nav>
            </header>
        </div>
    );
}

export default NavBar;
