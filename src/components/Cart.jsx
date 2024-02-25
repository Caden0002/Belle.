import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import CartItem from './CartItem.jsx';
import { useCartContext } from '../context/CartContext';



const background = 'bg-backgroundColorPrimary';

const Cart = ({ setShowCart }) => {
    const { product, removeFromCart } = useCartContext();

    // Calculate the subtotal
    const sum = product.reduce((total, item) => total + parseFloat(item.price), 0).toLocaleString();

    const modalRef = useRef();

    const handleCloseModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setShowCart(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleCloseModal);
        return () => {
            document.removeEventListener('mousedown', handleCloseModal);
        };
    }, []);

    return (
        <div className="bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-50 flex items-center justify-center">
            <div ref={modalRef} className={`max-w-[400px] md:max-w-[500px] w-full ${background} py-2 md:p-6 z-60 rounded-md`}>
                <div className="relative">
                    <FaTimes
                        className="absolute right-4 top-4 m-2 text-[16px] text-textColorPrimary cursor-pointer"
                        onClick={() => setShowCart(false)}
                    />
                    <h3 className="pt-6 text-2xl font-bold tracking-widest text-textColorPrimary text-center">
                        SHOPPING BAG
                    </h3>
                </div>

                <div className="mt-6 max-h-[60vh] overflow-y-auto px-10 md:px-20">
                    {product?.map((item, index) => (
                        <div className="flex items-center justify-between py-4 border-b" key={index}>
                            <CartItem
                                image={item.image}
                                series={item.series}
                                type={item.type}
                                price={item.price}
                            />
                            <button
                                className="text-xs text-textColorPrimary cursor-pointer"
                                onClick={() => removeFromCart(item)}
                            >
                                <FaTimes />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-4  ">
                    <div className=" bg-gray-200 text-textColorPrimary text-sm py-6 w-80 tracking-widest text-center">
                        SUBTOTAL: SGD {sum}
                    </div>
                </div>

                <div className="flex justify-center mt-4">

                    <button className=" bg-backgroundColorSecondary text-textColorSecondary text-sm py-4 w-80 tracking-widest text-center hover:underline">
                        REVIEW BAG & CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
