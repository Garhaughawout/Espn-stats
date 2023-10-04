import React from "react";
import espnLogo from "../Images/Espn-logo.png"


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo-img">
                    <img src={espnLogo}/>
                </div>
                <div className="footer-text">
                    <button>Terms of Use </button>
                    <p className="breakup-line">|</p>
                    <button>Privacy Policy</button>
                    <p className="breakup-line">|</p>
                    <button>Your US State Privacy Rights</button>
                    <p className="breakup-line">|</p>
                    <button>Children's Online Privacy Policy</button>
                    <p className="breakup-line">|</p>
                    <button>Interest-Based Ads</button>
                    <p className="breakup-line">|</p>
                    <button>About Nielson Measurement</button>
                    <p className="breakup-line">|</p>
                    <button></button>
                </div>
            </div>
        </div>
    )
}