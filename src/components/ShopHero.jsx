import React from 'react';
import parfumeriebutton from '../assets/shop/ParfumerieParfum.webp'
import aromebutton from '../assets/shop/AromeParfum.webp'
import fleurbutton from '../assets/shop/FleurParfum.webp'
import essencebutton from '../assets/shop/EssenceParfum.jpeg'

import { Link } from 'react-router-dom';



const background = 'bg-backgroundColorPrimary';

function ShopHero({ currentSeries, seriesDescriptions, onSeriesChange }) {
    return (
        <div className={background}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-full pt-40 px-10 md:px-40 border-b border-grey-200">
                <div className="max-w-4xl mx-auto text-center font-Signikta">
                    <div className="text-3xl font-semibold mb-6">
                        {currentSeries}
                    </div>
                    <div className="text-sm font-Roboto font-thin text-textColorTertiary md:px-44 leading-6">
                        {seriesDescriptions[currentSeries]}
                    </div>

                    {/* Buttons Section */}
                    <div className="flex justify-center mt-10">

                        <Link to="/shop/parfumerie">
                        <button
                            className={`bg-accent text-base pb-3 md:py-3 md:px-6 mx-1 md:mx-2 ${currentSeries === 'Parfumerie Collection' && 'border-b border-pink-500'}`}
                            onClick={() => onSeriesChange('Parfumerie Collection')}
                        >
                            <img className= 'border border-black rounded-full w-[50px] h-[50px] grid place-items-center' src={parfumeriebutton}/>
                        </button>
                        </Link>

                        <Link to="/shop/arome">

                        <button
                            className={`bg-accent text-base pb-3 md:py-3 md:px-6 mx-1 md:mx-2 ${currentSeries === 'Arome Series' && 'border-b border-green-500'}`}
                            onClick={() => onSeriesChange('Arome Series')}
                        >
                            <img className= 'border border-black rounded-full w-[50px] h-[50px] grid place-items-center' src={aromebutton}/>
                        </button>
                        </Link>

                        <Link to="/shop/fleur">

                        <button
                            className={`bg-accent text-base pb-3 md:py-3 md:px-6 mx-1 md:mx-2 ${currentSeries === 'Fleur Fragrances' && 'border-b border-red-500'}`}
                            onClick={() => onSeriesChange('Fleur Fragrances')}
                        >
                            <img className= 'border border-black rounded-full w-[50px] h-[50px]  grid place-items-center' src={fleurbutton}/>
                        </button>
                        </Link>

                        <Link to="/shop/essence">
                        <button
                            className={`bg-accent text-base pb-3 md:py-3 md:px-6 mx-1 md:mx-2 ${currentSeries === 'Essence Elixirs' && 'border-b border-yellow-500'}`}
                            onClick={() => onSeriesChange('Essence Elixirs')}
                        >
                            <img className= 'border border-black rounded-full w-[50px] h-[50px] grid place-items-center' src={essencebutton}/>
                        </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopHero;
