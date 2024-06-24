

function HeroSection (params) {
    
    return(
        <>
            <section className="access-more-main section-gap">
            <div className="container private-text pos-relative">
                <div className="access-top flex-column d-flex justify-content-center align-items-center">
                    <div className="effra-light access-top-title d-flex justify-content-center align-items-center">
                        <span className="font-weight-bold effra-bold mr-1"> access more </span>
                        ways to bank
                    </div>
                    <p className="d-flex justify-content-center align-items-center access-top-subtitle">
                        The less time you spend in a bank, the more time you have for yourself. Choose from a variety of easy 
                        and secure ways to manage your money on-the-go.
                    </p>
                </div>
            </div>

            <div className="access-more-container container mx-0 swiper-container-initialized swiper-container-horizontal">
                <div className="icon-div"></div>
                <div className="float"></div>
                <div className="float1"></div>
                <div className="float2"></div>
                <div className="float3"></div>
                <div className="float4"></div>
                <div className="float5"></div>
                <div className="icon-div1"></div>
            </div>
            </section>

            <section className="payday-calc section-gap">
                    <div className="container p-0 payday-calc-container">
                       <div className="payday-calc-box white-text">
                            <div className="payday-calc-box-1">
                                <h2 className="effra-medium payday-calc-title">Payday Loan Calculator</h2>
                                <p class="payday-calc-box-text">
                                    Your financial needs are important to us.
                                    We know that some emergencies arise before payday and you may be low on cash.
                                    With Payday Loan by Access, you can borrow money and pay back at the agreed time.
                                </p>
                                <div class="payday-calc-terms">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle mr-1 white-text"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                * Terms and Conditions Apply
                                </div>
                            </div>
                            <div class="payday-calc-box-2">
                            <p class="">What's your monthly salary?</p>
                            <div class="loan-drag-calc"> 
                            <div class="loan-amount">N5,000,000</div>
                            <div class="loan-drag-circle">
                            <div class="loan-drag-dot"></div>
                            </div>
                        </div>

                    </div>
                    
                </div>



                <div class="payday-calc-float-parent">
                         <div class="private-text payday-calc-float">
                        <div class="payday-calc-float-top">
                            Eligible Loan Amount
                        </div>
                    <div class="main-text payday-calc-float-amount">
                            N0
                    </div>
                    <div class="effra-light payday-calc-float-text">
                    <div class="effra-medium"> Tenor:</div>
                    Your next pay day or 30-days, whichever comes first 
                    </div>
                    <button className="btn private-button button-outline"> Get Instant Loan Now</button> 
                    </div>


                </div>
            </div>
            </section>
        </>
    );

}

export default HeroSection

