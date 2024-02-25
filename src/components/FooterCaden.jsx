import React from "react";
import { FaGithub, FaMediumM, FaLinkedin } from 'react-icons/fa';


const heading = 'Designed and Built by Caden Chen';


const headingLink = "https://github.com/Caden0002/Seasons"


const githubLink = 'https://github.com/Caden0002';
const linkedinLink = 'https://www.linkedin.com/in/caden-chen-576189205/';
const mediumLink = 'https://medium.com/@caden0002';

function Footer(props) {
    return (
        <div className="bg-backgroundColorSecondary">
            <div id="Footer" className="mx-auto flex flex-col h-full items-center p-12 ">

                <div className="flex space-x-8  z-10 mb-4">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={16} className=" text-textColorSecondary hover:text-textColorTertiary"  />
                    </a>
                    <a href={linkedinLink} target="_blank" rel="noopener noreferrer" >
                        <FaLinkedin size={16} className="text-textColorSecondary hover:text-textColorTertiary" />
                    </a>
                    <a href={mediumLink} target="_blank" rel="noopener noreferrer">
                        <FaMediumM size={16} className="text-textColorSecondary hover:text-textColorTertiary" />
                    </a>
                </div>

                <div className="flex flex-col md:flex-row space-x-2">

                    <a href={headingLink} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-textColorSecondary hover:text-textColorTertiary text-center z-10">
                        {heading}
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Footer;
