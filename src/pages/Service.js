import React from "react";
import Film from "./Films";

function Service() {
    return (
        <div className="allPages">
            <div className="services">
                <h2>Filming Services</h2>
                <div className="stroke stroke2"></div>
                <p>I offer different services such as filming services, workshop and private tuition, <br />
                    equipment hire, if you have any question don't hesitate to contact me
                </p>
            </div>
            <div className="cards">
                <div className="card">
                    <h3>Filming Services</h3>
                    <p>I can film your project wheter it is a commercial advertise, or a short
                        film or a document film. I have expertise in these fields.
                    </p>
                </div>
                <div className="card">
                    <h3>Private tuition</h3>
                    <p>I offer private titions for absolute beginners or mid-level producers
                        who need more advice.
                    </p>
                </div>
                <div className="card">
                    <h3>Equipment Hire</h3>
                    <p>I have available equipmentsfor Hire which you can use for your own
                        project.
                    </p>
                </div>
            </div>
            <Film />
        </div>
    )
}

export default Service;