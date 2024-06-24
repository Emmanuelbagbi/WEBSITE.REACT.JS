

function FeatCard(params) {
    
    return(
        <>
            <section className="access-promotion section-space">
                    <div className="access-promotion-block">
                        <h4 className="white-text effra-medium">your bank is </h4>
                        <h2 className="white-text effra-bold">CLOSA</h2>
                        <p class="private-text">
                            <p>
                                <h3 class="tx-30">than you think.</h3>
                            </p>
                        </p>
                        <p class="white-text">
                            With our one stop agency banking, you can now carry out banking transactions like.
                        </p>
                        <button className="mode">access more</button>
                    </div>
                    <div class="access-promotion-img"></div>
            </section>


            <section className="solutions-section section-add">
                <div className="container">
                    <div className="access-top flex-column d-flex justify-content-center align-items-center">
                        <div className="effra-light access-top-title business-text d-flex justify-content-center align-items-center ">
                            <span className="font-weight-bold effra-bold mr-1">explore more</span>
                            than banking
                        </div>
                        <p className="d-flex justify-content-center align-items-center access-top-subtitle">Whether it's your child's first savings account, your personal savings account, your first home or retirement plan, we offer personal banking products and services</p>

                    </div><br />

                    <div className="solutions-grid">
                        <div className="solutions-card">
                            <img className="solutions-img" src="src/assets/Image/financing.png" alt="Financing" />
                            <div className="solutions-body white-text">
                                <h3 class="effra-medium solutions-body-head">Financing</h3>
                                <div className="solutions-body-text">
                                 Based on specific requirements to bridge funding gaps with flexible repayment structures.
                                </div>
                                <div className="solutions-button">
                                    <button className=" white-button ">access more</button>
                                </div>
                            </div>
                        </div>

                        <div className="solutions-card">
                            <img className="solutions-img" src="src/assets/Image/equipping-growing-businesses.png" alt="Financing" />
                            <div className="solutions-body white-text">
                                <h3 class="effra-medium solutions-body-head">Equipping Growing Businesses</h3>
                                <div className="solutions-body-text">
                                    We believe in growth and sustainability and we want to grow your business with you. See how we can help.
                                </div>
                                <div className="solutions-button">
                                    <button className=" white-button ">access more</button>
                                </div>
                            </div>
                        </div>

                        <div className="solutions-card">
                            <img className="solutions-img" src="src/assets/Image/sustainable-banking.png" alt="Financing" />
                            <div className="solutions-body white-text">
                                <h3 class="effra-medium solutions-body-head">Sustainable Banking</h3>
                                <div className="solutions-body-text">
                                    For over two decades, we have been taking actionable steps towards sustainability in a rapidly changing world.
                                </div>
                                <div className="solutions-button">
                                    <button className=" white-button ">access more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="multi-colored-line new-multi-coloured-line"></div>
        </>
    )
}
export default FeatCard