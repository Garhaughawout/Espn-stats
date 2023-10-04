import React from "react";


export default function PlayerStats(props) {

    
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
                                <img className="stats-list-playerimg" src={props.playerOneImg} alt="player"/>
                                {props.playerOne}
                                <span className="stats-list-playerteam">{props.playerOneTeam}</span>
                            </div>
                            <div className="stat-list-stats">
                                {props.playerOneStat}
                            </div>
                        </li>
                        <span className="gray-item">
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                <span className="stat-list-ranking">2</span>
                                <img className="stats-list-playerimg" src={props.playerTwoImg} alt="player"/>
                                {props.playerTwo}
                                <span className="stats-list-playerteam">{props.playerTwoTeam}</span>
                            </div>
                            <div className="stat-list-stats">
                                {props.playerTwoStat}
                            </div>
                        </li>
                        </span>
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                            <span className="stat-list-ranking">3</span>
                                <img className="stats-list-playerimg" src={props.playerThreeImg} alt="player"/>
                                {props.playerThree}
                                <span className="stats-list-playerteam">{props.playerThreeTeam}</span>
                            </div>
                            <div className="stat-list-stats">
                                {props.playerThreeStat}
                            </div>
                        </li>
                        <span className="gray-item">
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                <span className="stat-list-ranking">4</span>
                                <img className="stats-list-playerimg" src={props.playerFourImg} alt="player"/>
                                {props.playerFour}
                                <span className="stats-list-playerteam">{props.playerFourTeam}</span>
                            </div>
                            <div className="stat-list-stats">
                                {props.playerFourStat}
                            </div>
                        </li>
                        </span>
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                <span className="stat-list-ranking">5</span>
                                <img className="stats-list-playerimg" src={props.playerFiveImg} alt="player"/>
                                {props.playerFive}
                                <span className="stats-list-playerteam">{props.playerFiveTeam}</span>
                            </div>
                            <div className="stat-list-stats">
                                {props.playerFiveStat}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}