import React from "react";
import './Skincare.css';
import img1 from '../assets/shirt1.webp';
import Skinprop from "./Skinprops";
import fAssure from '../assets/fassured.png';
import img2 from '../assets/shirt2.webp';
import img3 from '../assets/shirt3.webp';
import img4 from '../assets/shirt4.webp';
import img5 from '../assets/shirt5.webp';
import img6 from '../assets/shirt6.webp';
import img7 from '../assets/shirt7.webp';
import img8 from '../assets/shirt8.webp';
import img9 from '../assets/shirt9.webp';
import img10 from '../assets/shirt10.webp';
import img11 from '../assets/shirt11.webp';
import img12 from '../assets/shirt12.webp';


function Mens(){
    return(
        <>
        
         <div className="full-box">
            <div className="box">
                <Skinprop val={img1}
                content="Men printed Flowers Neck Cotton purify Shirts White"
                rating='3.5' viewers='(1,622)'
                fAss={fAssure} Rupee="₹195" s="₹599" off="67% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img2}
                content="Men Printed Hooded Neck Cotton Blend Black T-Shirt"
                rating='4.3' viewers='(2,995)'
                fAss={fAssure} Rupee="₹411" s="₹749" off="45% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img3}
                content="Men Printed Hooded Neck Cotton Blend Black T-Shirt"
                rating='4.3' viewers='(18,622)'
                fAss={fAssure} Rupee="₹157" s="₹199" off="21% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img4}
                content="Men Regular Fit Checkered Spread Collar Casual Shirt#JustHere"
                rating='4.4'viewers='(22,487)'
                fAss={fAssure} Rupee="₹225" s="₹500" off="55% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img5}
                content="Men Regular Fit Solid Spread Collar Casual Shirt#JustHere"
                 rating='3.5' viewers='(1,622)'
                fAss={fAssure} Rupee="₹195" s="₹599" off="67% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img6}
                content="Men Regular Fit Solid Mandarin Collar Casual Shirt#JustHere"
                rating='4.2' viewers='(200)'
                fAss={fAssure} Rupee="₹195" s="₹325" off="40% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img7}
                content="Men Regular Fit Solid Black Collar Casual Shirt#JustHere"
                 rating='4.5'viewers='(68,458)'
                fAss={fAssure} Rupee="₹191" s="₹548" off="65% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img8}
                content="Men Regular Fit Solid Gray Collar Casual Shirt#JustHere"
                 rating='3.9' viewers='(79,200)'
                fAss={fAssure} Rupee="₹129" s="₹549" off="76% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img9}
                content="Men Regular Fit Solid Brown Collar Casual Shirt#JustHere"
                rating='4.4' viewers='(3,454)'
                fAss={fAssure} Rupee="₹260" s="₹520" off="50% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img10}
                content="Men Slim Fit Striped Mandarin Collar Casual Shirt"
                 rating='4.2' viewers='(200)'
                fAss={fAssure} Rupee="₹195" s="₹325" off="40% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img11}
                content="Men Printed Hooded Neck Cotton Blend Black T-Shirt"
                rating='4.2' viewers='(8,452)'
                fAss={fAssure} Rupee="₹119" s="₹728" off="85% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img12}
                content="Men Slim Fit Striped Mandarin Collar Casual Shirt"
                 rating='4.1' viewers='(4,322)'
                fAss={fAssure} Rupee="₹330" s="₹825" off="60% off" btn="Sales Price Live"
                />

            </div>

        </div>
        
        



        </>
    )
}
export default Mens