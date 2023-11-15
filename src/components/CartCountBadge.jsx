import React from 'react';
import { useCartContext } from '../context/CartContext.jsx';

function CartCountBadge() {
    const { product } = useCartContext();

    return (
        <span className="relative">
            {product.length > 0 && (
                <span className="text-textColorPrimary text-xs">
                    {product.length}
                </span>
            )}
        </span>
    );
}

export default CartCountBadge;
