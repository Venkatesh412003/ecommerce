import React from "react";
import image from '../assets/flipkart.png';
import image1 from '../assets/icon.svg';
import image2 from '../assets/icon1.svg';
import image3 from '../assets/icon2.svg';
import image4 from '../assets/icon3.svg';
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <>
<nav> 

<div className="nav-bar">
 <img src={image} alt="Flipkart-Logo" height={"20px"} width={"67px"} className="image1"/>
<h4 className="side-1">Explore <span>plus+</span></h4>

<form>
<i class="fa-solid fa-magnifying-glass"></i>
<input type="text" placeholder="Search for Products,Brands and More" />
</form>

<img src={image1} height={"20px"} className="image2"/>
<Link to='/'>
<h4 className="cont">Skin Care</h4>
</Link>
<img src={image2} height={'20px'} className="image3"/>
<Link to="/Login">
<h4 className="cont1">Login In</h4>
</Link>
<img src={image3} height={'20px'} className="image4" />
<Link  to="/Mens">
<h4 className="cont2">Mens Wear</h4>
</Link>
<img src={image4} height={'20px'} className="image5" />

</div>
</nav> 
        </>
    )
}
export default NavBar