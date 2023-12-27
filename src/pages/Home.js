import React from "react"

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
            <div className="allPages">
                <div className="about">
                    <div className="about-img">
                        
                    </div>
                    <div className="about-info">
                        <h3>since 2019</h3>
                        <h1>We are a creative film and video <br /> production campany based in <br />
                            Ekpoma Edo State.
                        </h1>
                        <div className="stroke"></div>
                        <p>We are a creative film and photo production company hungry for quality in aesthetics
                            to create modern recognizable stuff we are working with a strong network of experienced 
                            professionals. We set up teams to shape your identity, push your idea and manage the workflow
                            from pre to post-production.
                        </p>
                    </div>
                </div>
            </div>
            <footer>
                <div className="allPages">
                    <small>&copy; Copyright Favor Bless Media 2023</small>
                    <a href="https://devroyale.netlify.app" target="_blank" rel="noreferrer">Designed by Dev Royale</a>
                </div>
            </footer>
        </div>
    )
}

export default Home;