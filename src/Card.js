import React from "react";
import './Card.css';

const Card = () => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src='https://robohash.org/test?size=200x200'/>
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
    );
}

export default Card;