import React from "react";
import './Skincare.css';
import img1 from '../assets/skin1.webp';
import Skinprop from "./Skinprops";
import fAssure from '../assets/fassured.png';
import img2 from '../assets/skin2.webp';
import img3 from '../assets/skin3.webp';
import img4 from '../assets/skin4.webp';
import img5 from '../assets/skin5.webp';
import img6 from '../assets/skin6.webp';
import img7 from '../assets/skin7.webp';
import img8 from '../assets/skin8.webp';
import img9 from '../assets/skin9.webp';
import img10 from '../assets/skin10.webp';
import img11 from '../assets/skin11.webp';
import img12 from '../assets/skin12.webp';

function Skincare(){
    return(
        <>
         <div className="full-box">
            <div className="box">
                <Skinprop val={img1}
                content="Forecast Bright Complete VitaminC Serum Bright Skin,Face Serum,Light Texture"
                ml="60ml" rating='3.5' viewers='(1,622)'
                fAss={fAssure} Rupee="₹195" s="₹599" off="67% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img2}
                content="L'Oréal Paris Glycolic Bright Skin Brightening Serum|Glowing Skin With Reduced Spots"
                ml="30ml" rating='4.3' viewers='(2,995)'
                fAss={fAssure} Rupee="₹411" s="₹749" off="45% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img3}
                content="AXE Signature Demin Cologne Talcum Powder, 300 g Talcum Powder Men for Daily Use"
                ml="300g" rating='4.3' viewers='(18,622)'
                fAss={fAssure} Rupee="₹157" s="₹199" off="21% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img4}
                content="HIMALAYA PURIFYING NEEM | PREVENTS PIMPLE | ANTI BACTERIAL Face Wash"
                ml="400ml" rating='4.4'viewers='(22,487)'
                fAss={fAssure} Rupee="₹225" s="₹500" off="55% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img5}
                content="Garnier Men Acno Fight Anti-Pimple , 150g (Pack of 2)| Repairs Skin & Balances Oils Face Wash"
                ml="60ml" rating='3.5' viewers='(1,622)'
                fAss={fAssure} Rupee="₹195" s="₹599" off="67% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img6}
                content="BIOTIQUE Face Care Combo Papaya Tan Removal Face Scrub & Papaya Deep Cleanse Face Wash"
                ml="200g" rating='4.2' viewers='(200)'
                fAss={fAssure} Rupee="₹195" s="₹325" off="40% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img7}
                content="NIVEA Body Milk with Almond Oil for Very Dry Skin"
                ml="600ml" rating='4.5'viewers='(68,458)'
                fAss={fAssure} Rupee="₹191" s="₹548" off="65% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img8}
                content="Dr. Alies Professional Vitamin C Face Serum - Skin Brightening Serum , Anti-Aging, Skin Repair, Supercharged Face Serum"
                ml="30ml" rating='3.9' viewers='(79,200)'
                fAss={fAssure} Rupee="₹129" s="₹549" off="76% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img9}
                content="Lakme Absolute Perfect Radiance Skin Brightening Day Creme and Facewash "
                ml="2 items in the set" rating='4.4' viewers='(3,454)'
                fAss={fAssure} Rupee="₹260" s="₹520" off="50% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img10}
                content="Globus Naturals Activated Charcoal Peel off Mask For Men Enriched With Vitamin-E"
                ml="100g" rating='4.2' viewers='(200)'
                fAss={fAssure} Rupee="₹195" s="₹325" off="40% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img11}
                content="KAYAYURVEDA 100% Pure Aloe Vera Gel for glowing Face, Skin & Hair"
                ml="600ml" rating='4.2' viewers='(8,452)'
                fAss={fAssure} Rupee="₹119" s="₹728" off="85% off" btn="Sales Price Live"
                />
            </div>
            <div className="box">
                <Skinprop val={img12}
                content="POND's Age Miracle, Youthful Glow,Formulated By The Ponds Day Cream | SPF 15 PA++|"
                ml="50g" rating='4.1' viewers='(4,322)'
                fAss={fAssure} Rupee="₹330" s="₹825" off="60% off" btn="Sales Price Live"
                />

            </div>

        </div>
        
        
         </>
    )
}
export default Skincare


