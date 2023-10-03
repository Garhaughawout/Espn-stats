import React from "react";
import Logo from '../Images/Logo-NBA.png';


export default function BottomHeader() {
    return (
        <div className="bottom-header">
            <img className="NBA-logo" src={Logo} alt="NBA-logo"></img>
            <div className="bottom-header-buttons">
                <button>Home</button>
                <button className="middle-priority">Free Agency</button>
                <button className="non-priority">NBA Trade Machine</button>
                <button className="middle-priority">Scores</button>
                <button >Schedule</button>
                <button className="middle-priority">Standings</button>
                <button className="middle-priority">Stats</button>
                <button className="middle-priority">Teams</button>
                <button className="non-priority">Players</button>
                <button className="non-priority">Fantasy Men's Basketball - Sign Up</button>
                <button className="non-priority">Depth Charts</button>
                <button>More</button>
            </div>  
        </div>
    )
}