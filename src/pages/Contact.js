import React from "react"

function Contact() {
    return (
        <div className="allPages">
            <div className="all-contact">
                <h2>Contact me now for more enquiries</h2>
                <div className="contact">
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2450611350664!2d6.167977037170402!3d6.739932597931722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104695d835affb47%3A0x3021cf4a05a2d69f!2sEkpoma%2C%20Edo!5e0!3m2!1sen!2sng!4v1703761574790!5m2!1sen!2sng"
                            width="700"
                            height="350"
                            style={{ border: '0' }}  // Corrected style prop
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="contact-frame">
                        <form>
                            <div className="name">
                                <input type="text" name="firstname" id="firstname" placeholder="Firstname" required />
                                <input type="text" name="lastname" id="lastname" placeholder="Lastname" required />
                            </div>
                            <div className="name">
                                <input type="email" name="email" id="email" placeholder="Email" required /> <br />
                                <input type="text" name="number" id="number" placeholder="Phone Number" required /> <br />
                            </div>
                            <textarea type="text" name="message" id="message" placeholder="Your Message" required /> <br />
                            <button className="btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;