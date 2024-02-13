import React from "react";

function Skinprop(props){
    return(
        <>
        <img style={{marginLeft:"25px"}} src={props.val} height={"170px"} width={'170px'}/>
        <p className="para">{props.content}</p>
        <div className="quantity">
        <p>{props.ml}</p>
        </div>
        <div className="Rating">
        <p>{props.rating} 
        <i class="fa-solid fa-star"></i>
        </p>
        </div>
        <div className="Viewers">
        <p>{props.viewers}</p>   
        </div>        
        <div className="cont-img">
        <img src={props.fAss} height={"19px"} width={'75px'} /> 
        </div>
        <div className="Rupees">
            <p>{props.Rupee}</p>
            <s className="col">{props.s}</s>
            <p className="col-1">{props.off}</p>
        </div>
        <button className="btn-1">{props.btn}</button> 

        
         </>
    )
}
export default Skinprop

