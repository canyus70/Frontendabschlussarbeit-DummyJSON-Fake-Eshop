import { Link } from "react-router-dom";
import HomeButton from "./../../assets/images/navbar/Home.svg";
import "./Navbar.scss"

const Navbar
 = () => {
    return ( 
      <nav className="nav_Navbar">
         <Link to="/home">
            <img className="homeButton_Navbar" src={HomeButton} alt="HomeButton" />
         </Link>
         <div className="toggleContainer_Navbar">
            <div className="toggle_Navbar"></div>
         </div>
         <div><Link to="/cart">Warenkorb</Link></div>
      </nav>
     );
}
 
export default Navbar
;