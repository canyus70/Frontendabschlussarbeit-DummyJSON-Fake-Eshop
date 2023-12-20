import { Link } from "react-router-dom";
import HomeButton from "./../../assets/images/navbar/Home.svg";
import HomeButtoncopy from "./../../assets/images/navbar/Homecopy.svg";
import "./Navbar.scss"
import { useContext } from "react";
import { Products } from "./../../context/Context";
import Heart from "../svg/HeartFilled";
import CartIcon from "../svg/CartIcon";
import CartIconcopy from "../svg/CartIconcopy";

const Navbar = () => {

   const changeMode = useContext(Products)

   const modeChange = () => {
      if (changeMode.darkmode === false) {
         changeMode.setDarkmode(true)
      } else {
         changeMode.setDarkmode(false)
      }
   }

    return ( 
      <nav className="nav_Navbar">
         <Link className="homeIcon_Navbar" to="/home">
            <img className="homeButton_Navbar" src={changeMode.darkmode ? HomeButtoncopy : HomeButton} alt="HomeButton" />
         </Link>
         <div className="cartContainer_Navbar">
            <Link to="/cart">{changeMode.darkmode ? <CartIconcopy/> : <CartIcon/>}</Link>
            <div className="cartCounter_Navbar"><p>{changeMode.warenkorb.length}</p></div>
         </div>
         <div className="heartContainer_Navbar">
            <Link className="heartIcon_Navbar" to='/favorites'><Heart/></Link>
            <div className="heartCounter_Navbar"><p>{changeMode.favorites.length}</p></div>
         </div>
         <div onClick={modeChange} className="toggleContainer_Navbar">
            <div className={`toggle_Navbar ${changeMode.darkmode ? "dark" : ""}`}></div>
            <div className="toggleBackground_NBavbar"></div>
         </div>
      </nav>
     );
}
 
export default Navbar
;