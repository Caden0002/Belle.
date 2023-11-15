import React, { useState } from 'react';
import NavBar from "../components/NavBar.jsx";
import ShopHero from "../components/ShopHero.jsx";
import Contact from "../components/Contact.jsx";
import FooterBrand from "../components/FooterBrand.jsx";
import FooterLinks from "../components/FooterLinks.jsx";
import FooterCopyright from "../components/FooterCopyright.jsx";
import FooterCaden from "../components/FooterCaden.jsx";
import ShopState from "../components/ShopState.jsx";
import ShopItems from "../components/ShopItems.jsx";
import { CartContextProvider } from "../context/CartContext.jsx";
import Cart from "../components/Cart.jsx";

export default function Shop() {
    const [showCart, setShowCart] = useState(false);


    return (
        <CartContextProvider>
            <NavBar setShowCart={setShowCart} />
            <ShopState >
                <ShopHero />
                <ShopItems />
            </ShopState>
            <Contact />
            <FooterBrand />
            <FooterLinks />
            <FooterCopyright />
            <FooterCaden />
            {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
        </CartContextProvider>
    );
}
