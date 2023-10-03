import React from "react";


export default function Stats(props) {

    
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
                    <ol className="stats-ordered-list">
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                {props.playerOne}
                            </div>
                            <div>
                                {props.playerOneStat}
                            </div>
                        </li>
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                {props.playerTwo}
                            </div>
                            <div>
                                {props.playerTwoStat}
                            </div>
                        </li>
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                {props.playerThree}
                            </div>
                            <div>
                                {props.playerThreeStat}
                            </div>
                        </li>
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                {props.playerFour}
                            </div>
                            <div>
                                {props.playerFourStat}
                            </div>
                        </li>
                        <li className="stats-list-item">
                            <div className="stat-list-name">
                                {props.playerFive}
                            </div>
                            <div>
                                {props.playerFiveStat}
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}