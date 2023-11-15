import NavBar from "../components/NavBar.jsx";
import HomeHero from "../components/HomeHero.jsx";
import HomeContentTitle from "../components/HomeContentTitle.jsx";
import HomeContentLeft from "../components/HomeContentLeft.jsx";
import HomeContentRight from "../components/HomeContentRight.jsx";
import HomeContentLeft2 from "../components/HomeContentLeft2.jsx";
import HomeContentTitle2 from "../components/HomeContentTitle2.jsx";
import Series from "../components/Series.jsx";
import Contact from "../components/Contact.jsx";
import FooterBrand from "../components/FooterBrand.jsx";
import FooterLinks from "../components/FooterLinks.jsx";
import FooterCopyright from "../components/FooterCopyright.jsx";
import FooterCaden from "../components/FooterCaden.jsx";

import {CartContextProvider} from "../context/CartContext.jsx"
import Cart from "../components/Cart.jsx";
import { useState } from "react";






export default function Home() {
    const [showCart, setShowCart] = useState(false);

    return (
        <CartContextProvider>
            <NavBar setShowCart={setShowCart} />
            <HomeHero />
            <HomeContentTitle />
            <HomeContentLeft />
            <HomeContentRight />
            <HomeContentLeft2 />
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
