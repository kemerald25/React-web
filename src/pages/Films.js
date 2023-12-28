import React from "react";
import myImage from "../img/land.jpg";
import { Link } from 'react-router-dom';

function Film() {
    return (
        <div className="allPages">
            <div className="allFilms">
                <div className="films">
                    <h2>Featured Films</h2>
                    <div className="stroke"></div>
                    <p>Take a glance of my recent video projects of different genre</p>
                </div>
                <Link to="/Film" className="btn">Explore More</Link>
            </div>
            <div className="filmGrid">
                <div className="cardImg">
                    <img src={myImage}/>
                </div>
                <div className="cardImg">
                    <img src={myImage}/>
                </div>
                <div className="cardImg">
                    <img src={myImage}/>
                </div>
            </div>
            <div className="filmGrid">
                <div className="cardImg">
                    <img src={myImage}/>
                </div>
                <div className="cardImg">
                    <img src={myImage}/>
                </div>
                <div className="cardImg">
                    <img src={myImage}/>
                </div>
            </div>
            <div className="filmGrid">
                <div className="cardImg">
                    <img src={myImage}/>
                </div>
                <div className="cardImg">
                    <img src={myImage}/>
                </div>
                <div className="cardImg">
                    <img src={myImage}/>
                </div>
            </div>
        </div>
    )
}

export default Film;