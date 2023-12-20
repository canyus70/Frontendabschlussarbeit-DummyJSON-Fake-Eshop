import { Link } from "react-router-dom";
import HomeButton from "./../../assets/images/navbar/Home.svg";
import "./Navbar.scss"
import { useContext } from "react";
import { Products } from "./../../context/Context";
import Heart from "../svg/Heart";
import CartIcon from "../svg/CartIcon";

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
         <Link to="/home">
            <img className="homeButton_Navbar" src={HomeButton} alt="HomeButton" />
         </Link>
         <div>
            <Link to="/cart"> <CartIcon/></Link>
         </div>
         <div>
            <Link to='/favorites'> <Heart /> </Link>
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