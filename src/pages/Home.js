import React from "react"
import About from "./About";

function Home() {
    return (
        <div>
            <div className="banner">
                <div className="allPages">
                    <div className="bannerInfo">
                        <p>The best Videography Service You need</p>
                        <h1>A good ending is the <br /> most important </h1>
                        <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Debitis optio <br /> maxime natus reprehenderit architecto at pariatur quibusdam.
                            Consequuntur</p>
                        <button className="btn">Get in touch</button>
                    </div>
                </div>
            </div>
            <About />
        </div>
    )
}

export default Home;