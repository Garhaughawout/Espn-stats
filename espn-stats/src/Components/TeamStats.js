import React from "react";


export default function TeamStats(props) {


    return (
        <div className="stats-section">
            <div className="stats-section-header">
                <h1>{props.header}</h1>
            </div>
            <div className="stats-section-table-headers">
                <div className="stats-gray-line"></div>
                <div className="stats-section-table-titles">
                    <h1>{props.title}</h1><h2>{props.titleShort}</h2>
                </div>
                <div className="stats-gray-line"></div>
                <div className="stats-rankings-list">
                    <ul className="stats-unordered-list">
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                <span className="stat-list-ranking">1</span>
                                <img className="team-stats-list-playerimg" src={props.teamOneImg} alt="player"/>
                                {props.teamOne}
                                <span className="stats-list-playerteam">{props.teamOneTeam}</span>
                            </div>
                            <div className="stat-list-stats">
                                {props.teamOneStat}
                            </div>
                        </li>
                        <span className="gray-item">
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                <span className="stat-list-ranking">2</span>
                                <img className="team-stats-list-playerimg"  src={props.teamTwoImg} alt="player"/>
                                {props.teamTwo}
                                <span className="stats-list-playerteam">{props.teamTwoTeam}</span>
                            </div>
                            <div className="stat-list-stats">
                                {props.teamTwoStat}
                            </div>
                        </li>
                        </span>
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                            <span className="stat-list-ranking">3</span>
                                <img className="team-stats-list-playerimg"  src={props.teamThreeImg} alt="player"/>
                                {props.teamThree}
                                <span className="stats-list-playerteam">{props.teamThreeTeam}</span>
                            </div>
                            <div className="stat-list-stats">
                                {props.teamThreeStat}
                            </div>
                        </li>
                        <span className="gray-item">
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                <span className="stat-list-ranking">4</span>
                                <img className="team-stats-list-playerimg"  src={props.teamFourImg} alt="player"/>
                                {props.teamFour}
                                <span className="stats-list-playerteam">{props.teamFourTeam}</span>
                            </div>
                            <div className="stat-list-stats">
                                {props.teamFourStat}
                            </div>
                        </li>
                        </span>
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                <span className="stat-list-ranking">5</span>
                                <img className="team-stats-list-playerimg"  src={props.teamFiveImg} alt="player"/>
                                {props.teamFive}
                                <span className="stats-list-playerteam">{props.teamFiveTeam}</span>
                            </div>
                            <div className="stat-list-stats">
                                {props.teamFiveStat}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}