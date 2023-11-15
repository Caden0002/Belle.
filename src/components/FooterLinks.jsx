import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTelegram } from 'react-icons/fa';

const background = "bg-backgroundColorSecondary";

const FooterLinkContent = [
    {
        title: 'EXPLORE BELLE.',
        links: ['Haute Couture', 'Fashion', 'High Jewellery', 'Fine Jewellery', 'Watches', 'Eyewear', 'Fragrance', 'Makeup', 'Skincare', 'Sitemap']
    },
    {
        title: 'ONLINE SERVICES',
        links: ['Payment Methods', 'Shipping Options', 'My Account', 'Returns', 'Care & Services', 'FAQ']
    },
    {
        title: 'BOUTIQUE SERVICES',
        links: ['Find a Boutique', 'Appointments with BELLE.']
    },
    {
        title: 'THE HOUSE OF BELLE.',
        links: ['Careers', 'Legal', 'Privacy', 'Report to Society', 'Fighting Counterfeits', 'Financial Results']
    }
];

const iconComponents = [
    { name: 'Twitter', icon: <FaTwitter /> },
    { name: 'Facebook', icon: <FaFacebook /> },
    { name: 'Instagram', icon: <FaInstagram /> },
    { name: 'LinkedIn', icon: <FaLinkedin /> },
    { name: 'YouTube', icon: <FaYoutube /> },
    { name: 'Telegram', icon: <FaTelegram /> },
];

function FooterLinks(props) {
    return (
        <div className={background}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center md:min-h-full py-20 px-10 md:px-40">
                <div className="container mx-auto md:flex justify-between">
                    {FooterLinkContent.map((column, columnIndex) => (
                        <div key={columnIndex} className="flex flex-col mb-12 md:mb-0">
                            <h4 className="mb-6 text-sm tracking-wide font-medium text-textColorSecondary font-Signikta">{column.title}</h4>
                            <ul className="space-y-2">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="text-textColorTertiary hover:underline text-xs cursor-pointer">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="text-textColorSecondary text-base ">
                        {iconComponents.map((item, index) => (
                            <div key={index} className="mb-8 hover:text-textColorTertiary cursor-pointer">
                                {item.icon}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FooterLinks;
