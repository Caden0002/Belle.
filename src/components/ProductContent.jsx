import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { useCartContext } from "../context/CartContext.jsx";
import { FaArrowLeft } from 'react-icons/fa'; // Import the Font Awesome arrow icon


const background = "bg-backgroundColorPrimary";

const ProductContent = ({ id, image, series, type, price }) => {
    const { addToCart } = useCartContext(); // Get the addToCart function from the context

    const addProductToCart = (item) => {
        addToCart(item); // Call the addToCart function with the product
    };

    return (
        <div className={background}>

            <div className="container flex max-w-screen-xl mx-auto justify-center items-center  font-Signikta md:min-h-full pt-40 pb-5  md:px-40">

                <div className="md:grid md:gap-5 md:grid-cols-12">
                    <div className="md:my-0 col-span-6 place-self-center">
                        <Link to="/shop">
                            <div
                                className="ml-2 border border-textColorTertiary rounded-full w-6 h-6 flex items-center justify-center hover:border-black"
                                style={{ background: 'white' }}>

                                <FaArrowLeft className="text-sm text-textColorTertiary hover:text-black " />
                            </div>
                        </Link>
                        <img className="mx-auto" alt="hero" src={image} style={{ width: "500px", height: "500px" }} />
                    </div>
                    <div className="md:mt-0 px-10 md:col-span-6 place-self-center text-left text-textColorPrimary">

                        <h1 className=" mt-4 text-2xl font-Signikta tracking-widest text-textColorPrimary border-b-4 border-black  mb-4">{series.toUpperCase()}</h1>
                        <h1 className=" text-base font-Signikta tracking-widest text-textColorTertiary">{type}</h1>
                        <a href="#ProductInformation" className=" text-xs font-Signikta tracking-widest text-textColorTertiary mb-4 underline ">More Details</a>
                        <h1 className=" text-xs font-Signikta tracking-widest text-textColorTertiary mb-4">Ref: {id}</h1>
                        <h1 className="text-lg font-Signikta font-bold  text-textColorPrimary mb-8">SGD {price}</h1>
                        <div className="flex justify-center mx-auto">
                            <button
                                className="bg-backgroundColorSecondary text-textColorSecondary text-sm py-4 w-full tracking-widest text-center hover:underline"
                                onClick={() => addProductToCart({
                                    image,
                                    series,
                                    type,
                                    price
                                })}
                            >
                                ADD TO BAG
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductContent;
