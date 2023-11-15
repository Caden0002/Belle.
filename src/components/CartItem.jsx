import React from 'react';

const CartItem = ({ image, series, type, price }) => {
    return (
        <div className="cart-item flex items-center">
            <img src={image} alt={type} className="w-20 h-20 mr-4" />
            <div className=" ">
                <h2 className="mb-1 text-xs text-textColorPrimary font-Signikta tracking-widest">
                    {series.toUpperCase()}
                </h2>
                <h2 className="mb-2 text-xs text-textColorTertiary font-thin font-Signikta tracking-widest">
                    {type}
                </h2>
                <p className="text-xs text-textColorPrimary font-Signikta tracking-widest">SGD {price}</p>
            </div>
        </div>

    );
};

export default CartItem;
