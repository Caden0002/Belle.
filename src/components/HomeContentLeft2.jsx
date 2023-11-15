import contentImage from '../assets/home/essenceParfum15.webp'
import {Link} from "react-router-dom";


const background = "bg-backgroundColorPrimary";
const image = contentImage;
const heading = 'NEW';
const subHeading1 = 'ESSENCE ELIXIR\nPARFUM 15 ML';
const button = 'SHOP NOW';

function HomeContentLeft2(props) {
    return (
        <div className={background}>
            <div id="Features" className="container flex max-w-screen-xl mx-auto justify-center items-center  font-Signikta md:min-h-full pt-5 pb-10 px-10 md:px-60">
                <div className="md:grid md:gap-5 md:grid-cols-12">
                    <div className="md:my-0 col-span-6 place-self-center order-last ">
                        <img className="mx-auto" alt="hero" src={image} />
                    </div>
                    <div className="md:mt-0 md:col-span-6 place-self-center text-center text-textColorPrimary">
                        <h1 className="my-4 text-lg tracking-widest ">
                            {heading}
                        </h1>
                        <h1 className="text-4xl mb-8 whitespace-pre-line tracking-wide">
                            {subHeading1}
                        </h1>

                        <Link to="/shop/essence">
                        <div className="flex justify-center mx-auto">
                            <button className="text-sm tracking-widest border-b border-textColorPrimary transition duration-300 hover:border-0">
                                {button}
                            </button>
                        </div>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomeContentLeft2;
