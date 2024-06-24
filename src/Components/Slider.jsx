




function Slider(){

    return(
        <>
            <div className="Slide">
            <div className="Slide-text">
                <b className="big">Earn Locally, Invest</b>
                <h2 className="header-subtext">around the World</h2>
                <p className="paragraph">You can decide How and where you do your banking with our wide variaty of service</p><br />
                <button className="start">access more</button>
            </div>
            </div>

            <div className="vid">
            <div className="vidCard">
                <div className="vid-box1">
                    <div className="vid-img"></div>
                    <span className="achor">
                        <b>Open an account.</b>
                        <p className="vid-paragraph">Open an account and open your world to more.</p>
                    </span>
                </div>

                <div className="vid-box1">
                <div className="vid-img1"></div>
                    <span className="achor">
                        <b>Cards</b>
                        <p className="vid-paragraph">Cards you can use anywhere for all your financial...</p>
                    </span>
                </div>

                
                <div className="vid-box1">
                <div className="vid-img2"></div>
                    <span className="achor">
                        <b>Quick Loans</b>
                        <p className="vid-paragraph">Need  Quick  cash for Quick Fixes? see how we can help.</p>
                    </span>
                </div>


                <div className="vid-box2">
                <div className="vid-img3"></div>
                    <span className="achor">
                        <b>Money Transfer</b>
                        <p className="vid-paragraph">Reliable. Safe and Secure ways to send and recieve money.</p>
                    </span>
                </div>
            </div>
        </div>

        <div className="advert">
            <div className="advert-text">LATEST NEWS<div className="tag"></div>
                    <span className="bend-line"></span>
            </div>
            <span className="scroll">
            <marquee behavior="scroll" direction="left" scrollamount="10">
                <div className="roll"><div className="remark">
                    Access Bank Zambia Limited Completes Acquisition of Atlas Mara, Creates One of Zambia’s Top Five Banks </div>  <div className="remark">Notice of the 35th Annual General Meeting (AGM) of Access Bank PLC</div> <div className="remark"> S&P Global Ratings Provides Aligned Opinion on Access Bank PLC's Sustainable Finance </div>  
                        <div className="remark">
                            Access Bank Plc (Access) enters into acquisition agreements with Standard Chartered Bank
                        </div>
                        <div className="remark"> 
                            Access Bank launches the first American Express® Cards to be issued in Nigeria
                        </div>
                    </div>
            </marquee>
            </span>
        </div>
        <div className="multi-colored-line new-multi-coloured-line"></div>  
    </>
    );
    
    
}



export default Slider
