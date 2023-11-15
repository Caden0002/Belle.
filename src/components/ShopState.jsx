import React, { useState } from 'react';
import ShopHero from './ShopHero.jsx';
import DataSeriesDescriptions from './data/DataSeriesDescription.js';
import ShopItems from './ShopItems.jsx';

const ShopState = () => {
    const [currentSeries, setCurrentSeries] = useState('Essence Elixirs');

    const handleSeriesChange = (series) => {
        setCurrentSeries(series);
    };

    return (
        <div>
            <ShopHero
                currentSeries={currentSeries}
                seriesDescriptions={DataSeriesDescriptions}
                onSeriesChange={handleSeriesChange}
            />
            <ShopItems currentSeries={currentSeries} />

            {/* You can add other components or content here */}
        </div>
    );
}

export default ShopState;
