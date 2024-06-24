import { BsYoutube } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";


function Header() {
    
    return(
       <>
          <div className="Header-div">
          <nav>
                
                <li>About Us</li>
                <li>Sustainable Banking</li>
                <li>Invesor Relations</li>
                <li>Media</li>
                <li>Careers</li>
                <li>Branch & ATM Locator</li>
                <li>Help</li>
                
            </nav>

            <nav className="nav2">
                <span className="split">
                    <li>Country Locations</li>
                    <div className="flag"></div>
                </span>
            </nav>
          </div>


          <div className="header-nav">
                <div className="logo"></div>
                <nav className="nav-header">
                    <li>Home</li>
                    <li>Personal</li>
                    <li>Business</li>
                    <li>Corporate</li>
                    <li>Private</li>
                    <li>Ways to Bank</li>
                    <li>Contacts</li>   
                    <li>I am...</li>
                </nav>

                <div className="search-box">
                    <input type="text" placeholder="Search..."/>
                </div>
                <div className="info">Internet Banking</div>
          </div>
       </>
    );
}

export default Header