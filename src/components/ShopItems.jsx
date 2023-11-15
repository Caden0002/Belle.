import React from 'react';
import { Link } from 'react-router-dom';
import DataShopItems from './data/DataShopItems'; // Import your shop items data
import { useCartContext } from "../context/CartContext.jsx";

const background = 'bg-backgroundColorPrimary';

function ShopItems({ currentSeries }) {
    // Filter shop items based on the current series
    const itemsForCurrentSeries = DataShopItems.filter((item) => item.series === currentSeries);
    const { addToCart } = useCartContext();

    const addProductToCart = (item) => {
        addToCart(item); // Call the addToCart function with the product
    };

    return (
        <div className={background}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-full py-10 px-10 md:px-20">
                <div className={`grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-6 gap-y-24`}>
                    {itemsForCurrentSeries.map((item) => (
                        <div key={item.id} className="text-center cursor-pointer">
                            <Link to={`/product/${item.id}`}>
                                <div className="w-50 h-50 md:w-80 md:h-80 mx-auto flex justify-center items-center border-b-4 border-transparent transition-transform duration-300 ease-in-out transform hover:border-textColorPrimary hover:scale-105">
                                    <img src={item.image} alt={item.type} />
                                </div>
                            </Link>
                            <h2 className="mt-8 text-xs md:text-sm text-textColorPrimary font-Signikta tracking-widest ">
                                {item.series.toUpperCase()}
                            </h2>
                            <h2 className="text-xs md:text-sm text-grey-700 font-thin font-Signikta tracking-widest">
                                {item.type}
                            </h2>
                            <p className="my-2 text-xs md:text-sm text-textColorPrimary font-Signikta tracking-widest">SGD {item.price}</p>
                            <button
                                className="text-xs tracking-wide p-1 border-b border-grey-300 transition duration-300 hover:border-b-2 hover:border-textColorPrimary"
                                onClick={() => addProductToCart({
                                    image: item.image,
                                    series: item.series,
                                    type: item.type,
                                    price: item.price
                                })}
                            >
                                ADD TO BAG
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShopItems;
