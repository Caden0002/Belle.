import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import ProductContent from '../components/ProductContent.jsx';
import ProductInformation from '../components/ProductInformation.jsx';
import Contact from '../components/Contact.jsx';
import FooterBrand from '../components/FooterBrand.jsx';
import FooterLinks from '../components/FooterLinks.jsx';
import FooterCopyright from '../components/FooterCopyright.jsx';
import FooterCaden from '../components/FooterCaden.jsx';
import { CartContextProvider } from '../context/CartContext.jsx';
import Cart from '../components/Cart.jsx';

// Import your product data
import DataShopItems from '../components/data/DataShopItems';
import Series from "../components/Series.jsx";
import HomeContentTitle2 from "../components/HomeContentTitle2.jsx";

export default function Product() {
    const { id } = useParams();
    const [showCart, setShowCart] = useState(false);

    // Find the product with the matching id
    const product = DataShopItems.find(item => item.id === parseInt(id));

    return (
        <CartContextProvider>
            <NavBar setShowCart={setShowCart} />
            <ProductContent
                id={product.id}
                image={product.image}
                series={product.series}
                type={product.type}
                price={product.price}
            />
            <ProductInformation
                series={product.series}
                type={product.type}
            />
            <HomeContentTitle2 />
            <Series />
            <Contact />
            <FooterBrand />
            <FooterLinks />
            <FooterCopyright />
            <FooterCaden />
            {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
        </CartContextProvider>
    );
}
