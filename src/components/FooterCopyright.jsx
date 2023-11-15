import React from 'react';

const background = "bg-backgroundColorSecondary";

function FooterCopyright(props) {
    return (
        <div className={background}>
            <div className="container max-w-screen-xl mx-auto flex md:min-h-fill py-10 px-10 md:px-40 border-t border-textColorTertiary ">


                    {/* Copyright */}
                    <div className="flex flex-row  text-xs text-textColorTertiary  ">
                        <div className="">
                            Copyright© 2018 - 2023 BELLE. All rights reserved.
                        </div>
                        <div className="font-bold ml-12">
                            <a href="/privacy-notice ">Privacy Notice</a>
                            <span className="mx-2">|</span>
                            <a href="/status">Status</a>
                        </div>
                    </div>

            </div>
        </div>
    );
}

export default FooterCopyright;
