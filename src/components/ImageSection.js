import React from 'react';
import about from "../img/me.jpg";

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/> 
            </div>
            <div className="about-info">
                <h4>I am <span> Sandra</span></h4>
                <p className="about-text">
                    I am a Software Engineer.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Sandra Cheptoo</p>
                        <p>: 22</p>
                        <p>: Kenyan</p>
                        <p>: English, Swahili</p>
                        <p>: 167, Springette, Nairobi Kenya</p>
                    </div>
                </div>
                <button className="btn">Download Resume</button>
            </div>
        </div>
    );
}

export default ImageSection;