const background = "bg-backgroundColorSecondary";
const brand = 'BELLE.';


function FooterBrand() {
    return (
        <div className={background}>
            <div className="container max-w-screen-xl mx-auto flex justify-center items-center min-h-screen ">
                <h1 className="text-4xl font-bold text-textColorSecondary font-Signikta tracking-widest">
                    {brand}
                </h1>
            </div>
        </div>
    );
}

export default FooterBrand;
