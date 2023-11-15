import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';


const background = "bg-backgroundColorPrimary";

const header1 = "CLIENT CARE";
const content1 = "Fragrance and Beauty";
const content2 = "800 321 9876";
const content3 = "Email";

const header2 = "FIND A BOUTIQUE";
const content4 = "Enter a location to find the closest BELLE. stores";

function Contact(props) {
    const [location, setLocation] = useState('');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the location, e.g., pass it to a function or component.
        console.log('User entered location:', location);
    };

    return (
        <div className={background}>
            <div id="Contact" className="container max-w-screen-xl mx-auto md:min-h-full py-10 md:pt-80 px-10 md:px-40">
                <div className="md:flex md:flex-row">
                    <div className="md:w-1/3 mb-12 text-center md:text-left">
                        <h2 className="text-center md:text-left tracking-wide font-medium mb-4 font-Signikta">
                            {header1}
                        </h2>
                        <p className="text-sm text-textColorTertiary mb-2">{content1}</p>
                        <p className="text-sm text-textColorTertiary underline mb-2">{content2}</p>
                        <p className="text-sm text-textColorTertiary underline mb-2">{content3}</p>
                    </div>
                    <div className="md:w-1/3 text-center md:text-left">
                        <h2 className="text-center md:text-left tracking-wide font-medium mb-4 font-Signikta">
                            {header2}
                        </h2>
                        <p className="text-sm text-textColorTertiary mb-2">{content4}</p>
                        <form className='text-gray-700' onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="location"
                                value={location}
                                onChange={handleLocationChange}
                                placeholder="Town or Postcode"
                                style={{
                                    border: 'none',
                                    borderBottom: '1px solid #9E9E9E', // Set the border for the bottom
                                    outline: 'none', // Remove the default outline
                                }}
                                className="text-sm"


                            />
                            <button type="submit"
                                    className="text-sm " // Apply text size and padding classes
                            ><FaSearch/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
