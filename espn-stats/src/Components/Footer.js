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
                    <div className="footer-text-section">
                        <button>Terms of Use </button>
                        <p className="breakup-line"></p>
                        <button>Privacy Policy</button>
                        <p className="breakup-line"></p>
                        <button>Your US State Privacy Rights</button>
                        <p className="breakup-line"></p>
                        <button>Children's Online Privacy Policy</button>
                        <p className="breakup-line"></p>
                        <button>Interest-Based Ads</button>
                        <p className="breakup-line"></p>
                        <button>About Nielson Measurement</button>
                    </div>
                    <div className="footer-text-section">
                        <button>Do Not Sell or Share My Personal Information</button>
                        <p className="breakup-line"></p>
                        <button>Contact Us</button>
                        <p className="breakup-line"></p>
                        <button>Disney Ad Sales Site</button>
                        <p className="breakup-line"></p>
                        <button>Work for ESPN</button>
                    </div>
                    <div className="footer-text-section">
                        <p className="copy-right-text">Copyright: &#xA9; ESPN Enterpries, Inc. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}