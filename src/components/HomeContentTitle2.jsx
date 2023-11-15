5// Define variables for content
const background = "bg-backgroundColorPrimary";
const heading = 'SHOP BY SERIES';

function HomeContentTitle2(props) {
    return (
        <div className={background}>
            <div id="Features" className="container flex max-w-screen-xl mx-auto justify-center items-center  md:min-h-full pt-20 md:pt-40 md:px-60">

                    <div className="md:mt-0 md:col-span-6 place-self-center text-center text-textColorPrimary">
                        <h1 className="my-4 text-3xl tracking-widest font-medium">
                            {heading}
                        </h1>

                    </div>


            </div>
        </div>
    );
}

export default HomeContentTitle2;
