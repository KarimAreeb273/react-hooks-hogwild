import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogRender ({ hog }) {

const { image, name} = hog
const [show, setShow] = useState(false)

function handleDetails () {
    setShow(!show)
}

    return (
        <div className="ui card eight wide column pigTile" onClick = {handleDetails}>
            <div className="image">
                <img src = {image} alt = {name} />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
            </div> 
            <div className="extra content">
               {show ? <HogDetails hog = {hog} /> : null}
            </div>   
        </div>    
        )
}

export default HogRender;