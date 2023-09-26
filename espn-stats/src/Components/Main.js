import React from "react";
import { useState } from "react";

export default function Main() {
    
    
    const [selectedTeam, setSelectedTeam] = useState("");
    

    function handleChange(event) {
        setSelectedTeam(event.target.value);
    }
    

    const teams = nbaTeams.map((team) => {
        return <option value={team}>{team}</option>
    })

    return (
        <div className="main-container">
            <div className="main-content">
                <div className="main-content-header">
                    <h1>NBA Stats Leaders 2022-23</h1>
                    <select onChange={handleChange}>
                        <option>Team Statistics</option>
                        {teams}
                    </select>
                </div>
            </div>
            <div className="side-content"></div>
        </div>
    )
}


const nbaTeams = [
    "Atlanta Hawks","Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks",
    "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers",
    "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder",
    "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors",
    "Utah Jazz", "Washington Wizards"
]