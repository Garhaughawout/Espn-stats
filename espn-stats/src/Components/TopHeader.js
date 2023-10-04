import React from "react";
import EspnLogo from '../Images/Espn-logo.png';
import { useState } from "react";
import EspnPlusLogo from '../Images/ESPN_Plus.png';
import bentoMenu from '../Images/bento-menu.png';
import linedMenu from '../Images/3lined-menu.png';

export default function TopHeader() {

    const dropDownList = ["Home", "Scores", "Schedule", "Standings", "Stats", "Teams", "Depth Charts", "Daily Lines"]
    const dropDownItems = dropDownList.map((item) => {
        return <li className="dropdown-list-item">{item}</li>
    })

    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
        setShowMenu(prevState => !prevState);
    }

    const arrowStyling = {
        color: "gray"
    }

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-left-content">
                    <div className="header-left-button">
                        <img src={linedMenu} onClick={handleShowMenu} className="hamburger-menu" alt="hamburger-menu"/>
                    <div className="dropdown-menu" >
                        <div className="dropdown-unorderedlist">
                            {showMenu ? <ul className="dropdown-items">
                                {dropDownItems}
                            </ul>
                                : null}
                        </div>
                    </div>
                </div>
                    <img src={EspnLogo} alt="ESPN Logo" />
                    <ul className="header-content-buttons">
                    </ul>
                </div>
                <div className="header-right-content">
                    <img className="espn-plus-logo" src={EspnPlusLogo} alt="Espn Plus Logo"></img><span style={arrowStyling}> &#709;</span>
                    <ul>
                    <li><button className="header-content-button">Watch <span style={arrowStyling}>&#709;</span></button></li>
                    <li><button className="header-content-button">Listen <span style={arrowStyling}>&#709;</span></button></li>
                    <li><button className="header-content-button">Fantasy <span style={arrowStyling}>&#709;</span></button></li>
                    <li ><img className="bento-menu-image" alt="bento-menu" src={bentoMenu}></img></li><span style={arrowStyling}>&#709;</span>
                    </ul>
                </div>
            </div>
        </div>
    )
}