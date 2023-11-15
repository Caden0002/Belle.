import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure to import the correct dependencies
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Product from "./pages/Product.jsx";
import ShopItems from "./components/ShopItems.jsx";
import ScrollToTop from './components/ScrollToTop.jsx'; // Import the ScrollToTop component


function App(props) {
    return (
        <Router>
            <ScrollToTop /> {/* Include the ScrollToTop component */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />}>
                    <Route path ='parfumerie' element = {<ShopItems currentSeries="Parfumerie Collection" />} />
                    <Route path="arome" element={<ShopItems currentSeries="Arome Series" />} />
                    <Route path="fleur" element={<ShopItems currentSeries="Fleur Fragrances" />} />
                    <Route path="essence" element={<ShopItems currentSeries="Essence Elixirs" />} />
                </Route>
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </Router>
    );
}

export default App;
