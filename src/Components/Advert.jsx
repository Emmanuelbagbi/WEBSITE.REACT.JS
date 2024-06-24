

function Advert(params) {

    return(
        <>
            <div className="access-top flex-column d-flex justify-content-center merge">
                <div className="effra-light access-top-title secondary-1-text d-flex justify-content-center align-items-center">
                    <span className="font-weight-bold effra-bold mr-1">access more</span>
                    banking services
                </div>
                <p className="d-flex justify-content-center align-items-center access-top-subtitle"> 
                Whether it's your child's first savings account, your personal savings account, your first
                retirement plan or a business loan, we offer personal and corporate banking products
                and services tailored to meet your needs.
                </p>
            </div><br /><br />
            
           <div className="cont">
           <div className="icon-divA"></div>
           <div class="card">
                <div class="details">
                    <img className="service-img" src="src/assets/Image/firt.png"/><br /><br />
                    <p className="
											service-title
											effra-medium
											secondary-1-text
										">
                        
                        American Express Cards
                    </p>
                    <p className="
											service-text
										">
                        The AMEX Gold and Platinum cards are dual currency cards
                    </p><br /><br />
                    <button className="mode">access more</button>
                </div>
            </div>

            <div class="card1">
                <div class="details">
                    <img className="service-img" src="src/assets/Image/Screenshot 2024-06-16 161945.png"/><br /><br />
                    <p className="
											service-title
											effra-medium
											secondary-1-text
										">
                        
                        Early Savers Account
                    </p>
                    <p className="
											service-text
										">
                                               Find out how you can start saving today for tomorrow with our Early Savers account.
                    </p><br /><br />
                    <button className="mode">access more</button>
                </div>
            </div>


            <div class="card2">
                <div class="details">
                    <img className="service-img" src="src/assets/Image/Screenshot 2024-06-16 163844.png"/><br /><br />
                    <p className="
											service-title
											effra-medium
											secondary-1-text
										">
                        
                        
                        
                        *901# Banking Solution
                    </p>
                    <p className="
											service-text
										">
                                               
                        *901# is a convenient, secure and affordable way to access our services 24/7 through any mobile phone.

                    </p><br /><br />
                    <button className="mode">access more</button>
                </div>
            </div>
            <div className="icon-divB"></div>
           </div>
        </>
    )
}

export default Advert