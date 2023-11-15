import React, { useState } from 'react';
import DataSeriesDescriptions from './data/DataSeriesDescription.js';
import DataTypeDescription from "./data/DataTypeDescription.js";
import DataSeriesInspiration from "./data/DataSeriesInspiration.js";

const background = "bg-backgroundColorPrimary";


const ProductInformation = ({ series, type }) => {
    const seriesDescription = DataSeriesDescriptions[series] || "Series description not found";
    const typeDescription = DataTypeDescription[type] || "Type description not found";
    const inspiration = DataSeriesInspiration[series] || "Inspiration not found";
    const faqContent = {
        Questions: [
            "DESCRIPTION",
            "COMPOSITION",
            "INSPIRATION",
            "DELIVERY & RETURNS",
        ],
        Answers: [
            seriesDescription,

            typeDescription,

            inspiration,

            'All orders placed on the Official Online Boutique are uniquely packaged by BELLE and delivered in Singapore. BELLE is pleased to offer complimentary standard delivery for all orders.\n' +
            '\n' +
            'BELLE offers the following delivery option: Standard Delivery.\n' +
            'Please note, Standard delivery is between 2 – 4 working days, and all deliveries are contact free\n' +
            'You can return all or part of your BELLE online boutique order within 14 calendar days from the date of order delivery, provided products are in original packaging with packing list and original receipt. For hygiene and safety reasons, products that have been unsealed or used are generally not eligible for return. For certain products, it may not be possible to determine if the product has been used (for example, the product may not be sold sealed or in any package). Such products may also not be eligible for return. All returns remain at BELLE’s sole discretion.\n' +
            '\n' +
            'Please note that returns will not be accepted at any other retail outlet that sells BELLE products.\n' +
            '\n' +
            'All refunds will be credited to the original card/method that was used for payment, and refund processing time may vary depending on your bank. Please note, BELLE online boutique orders cannot be exchanged, but you may, subject to these terms and conditions, return an order to receive a refund.\n' +
            '\n' +
            'Please contact our Client Care Representative Online or call 800 321 9876, Mon to Fri excluding Public Holidays, 1000-1900 and we will arrange for our carrier to collect the products from you.'
        ]
    };



    const [activeIndex, setActiveIndex] = useState (null);

    const toggleAccordion = (index) => {
        if (index === activeIndex) {
            setActiveIndex (null); // Close if clicked again
        } else {
            setActiveIndex (index); // Open the clicked question
        }
    };

    return (
        <div className={background}>
            {/*container for the section*/}
            <div id="ProductInformation" className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-full py-20 px-10">
                <div className="lg:w-8/12 w-full">
                    {/* FAQ headline */}
                    <h1 className="mb-8 text-3xl tracking-widest font-medium text-center">
                        PRODUCT INFORMATION
                    </h1>
                    {/* FAQ questions and answers */}
                    {faqContent.Questions.map ((question, index) => (
                        <div key={index}>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full py-5 text-base tracking-widest font-medium text-left border-b border-gray-200 text-textColorPrimary  ${
                                    activeIndex === index ? '' : ''
                                }`}
                                onClick={() => toggleAccordion (index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{question}</span>
                            </button>
                            {activeIndex === index && (
                                <div
                                    className={`py-5 border-b border-gray-200  ${
                                        activeIndex === index ? 'block' : 'hidden'
                                    }`}
                                >
                                    <p className="mb-2 text-sm font-Roboto text-textColorTertiary leading-6 whitespace-pre-line ">
                                        {faqContent.Answers[index]}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ProductInformation;


