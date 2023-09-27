import React from "react";
import { useState } from "react";
import storyimg1 from "../Images/storyimg-1.jpg";
import storyimg2 from "../Images/storyimg-2.jpg";
import storyimg3 from "../Images/storyimg-3.jpg";

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
            <div className="side-content">
                <h1>NBA News</h1>
                <div className="gray-line"></div>
                <div className="side-content-news">
                    <div className="side-content-story">
                        <div className="side-content-story-image">
                            <img src={storyimg1} alt="Story 1"/>
                        </div>
                        <div className="side-content-story-text">
                            <p className="news-title">Predicting four NBA teams likely to improve and three to decline during the 2023-2024 season</p>
                            <p className="news-story">Will the Nuggests stay atop the leauge? Can the pisitons make moves toward the playoffs?
                                Here's a projection of which NBA teams will impove from last season and which ones will decline.
                            </p>
                            <p className="news-story-footer"> 1d &#8226; Kevin Pelton</p>
                        </div>
                    </div>
                </div>
                <div className="gray-line"></div>
                <div className="side-content-news">
                    <div className="side-content-story">
                        <div className="side-content-story-image">
                            <img src={storyimg2} alt="Story 2"/>
                        </div>
                        <div className="side-content-story-text">
                            <p className="news-title">Delly's 'Best Basketball Ahead' of him</p>
                            <p className="news-story">Matthew Dellavedova is primed for a big season for Melbourne United as he 
                            looks to reestablish himself in the Boomers squad ahead of the paris 2024 Olympics.
                            </p>
                            <p className="news-story-footer"> 2d &#8226;</p>
                        </div>
                    </div>
                </div>
                <div className="gray-line"></div>
                <div className="side-content-news">
                    <div className="side-content-story">
                        <div className="side-content-story-image">
                            <img src={storyimg3} alt="Story 3"/>
                        </div>
                        <div className="side-content-story-text">
                            <p className="news-title">Will Giannis leave the Bucks in free agency?</p>
                            <p className="news-story">The 'NBA Today' crew debates whether Giannis Antetokounmpo will leave the Bucks
                            after his current contract expires.
                            </p>
                            <p className="news-story-footer"> 4d &#8226;</p>
                        </div>
                    </div>
                </div>
                <div className="gray-line"></div>
                <div className="all-news-tag">
                    <button>All NBA News</button>
                </div>
            </div>
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