import fleur from '../assets/home/FleurFragrancesSeries.svg';
import parfumerie from '../assets/home/ParfumerieCollection.svg';
import arome from '../assets/home/AromaSeries.svg';
import essence from '../assets/home/EssenceElixirSeries.svg';

import { Link } from 'react-router-dom';



const background = "bg-backgroundColorPrimary";

const seriesContent = [
    {
        logo: parfumerie,
        link: 'parfumerie',
        title: 'Belle.Parfumerie Collection',
    },
    {
        logo: arome,
        link: 'arome',
        title: 'Belle.Arome Series',
    },
    {
        logo: fleur,
        link: 'fleur',
        title: 'Belle.Fleur Fragrances',
    },
    {
        logo: essence,
        link: 'essence',
        title: 'Belle.Essence Elixirs',
    },
];

// Capitalize all titles
seriesContent.forEach((item) => {
    item.title = item.title.toUpperCase();
});

function Series() {
    return (
        <div className={background}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-full py-10 px-10 md:px-20">
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6`}>
                    {seriesContent.map((item, index) => (
                        <Link to={`/shop/${item.link}`} key={index} >
                            <div className="text-center cursor-pointer transform scale-100 transition-transform duration-300 ease-in-out hover:scale-105">
                                <div className=" w-44 md:w-64 mx-auto flex justify-center items-center">
                                    <img src={item.logo} alt={item.title} />
                                </div>
                                <h2 className="mt-4 text-xs tracking-widest text-gray-700 font-Signikta">
                                    {item.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default Series;
