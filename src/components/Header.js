import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {

  //let btnName ="Login";
  const [btnNameReact, setbtnNameReact] = useState("Login")

    return(
      <div className='header'>
          <div className='logo-container'>
              <img className='logo' alt="logo" src={LOGO_URL}/>
          </div>
          <div className='nav-items'>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Cart</li>
              <button className="login" type="text"
                onClick={()=>{
                  btnNameReact==="Login"
                  ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                }}
              >{btnNameReact}</button>
            </ul>
            
          </div>
      </div>
    )
  }

  export default Header;