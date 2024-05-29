import banner from '../assets/home/perfumeBanner.png';
import { Link } from 'react-router-dom';

const background = banner;
const background2 = "bg-backgroundColorPrimary"
const heading = 'GIVE WONDER, GIVE BELLE.';
const heading2 = 'BELLE.  FOURTH SERIES';
const subHeading = 'ESSENCE ELIXIR';
const button1 = 'DISCOVER';

function HomeHero() {
    return (
        // Component Container
        <div
            className="bg-cover bg-right bg-no-repeat"
            style={{ backgroundImage: `url(${background})` }}
        >
        <div id="Home" className="container max-w-screen-xl flex items-center min-h-screen font-Signikta py-20 px-10 xl:px-80">
            <div className="w-screen md:w-1/2 ">
                {/* Hero content */}
                <div className=" mt-24  text-center text-textColorSecondary">
                    {/* Hero headline */}
                    <h1 className="text-lg tracking-widest font-thin">
                        {heading}
                    </h1>
                    <h1 className="mb-4 text-lg tracking-widest font-thin">
                        {heading2}
                    </h1>
                    {/* Hero subheadline */}
                    <p className="text-4xl mb-8 ">
                        {subHeading}
                    </p>
                    {/* Call to Action buttons */}
                    <Link to="/shop/essence">
                    <div className="flex justify-center mx-auto">
                        <button className="text-sm tracking-widest py-4 px-8 border border-textColorSecondary hover:bg-white hover:text-black">
                            {button1}
                        </button>
                    </div>
                    </Link>

                </div>

            </div>
            </div>
        </div>
    );
}

export default HomeHero;
