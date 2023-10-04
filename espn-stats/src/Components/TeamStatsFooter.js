import React from "react";


export default function TeamStatsSection(props) { 
    
    
    return (
        <div className="team-stats-container">
            <div className="team-stats-content">
                <div className="team-stats-header">
                    <h1>{props.header}</h1>
                </div>
                <div className="team-stats-sections">
                    <div className="team-stats-section">
                        <div className="team-stats-gray-line"></div>
                        <h1 className="team-stats-sideheader">{props.sideHeaderOne}</h1>
                        <div className="team-stats-gray-line"></div>
                        <p>{props.firstContentOne}</p>
                        <p className="gray-background-label">{props.firstContentTwo}</p>
                        <p>{props.firstContentThree}</p>
                    </div>
                    <div className="team-stats-section">
                        <div className="team-stats-gray-line"></div>
                        <h1 className="team-stats-sideheader">{props.sideHeaderTwo}</h1>
                        <div className="team-stats-gray-line"></div>
                        <p>{props.secondContentOne}</p>
                        <p className="gray-background-label">{props.secondContentTwo}</p>
                        <p>{props.secondContentThree}</p>
                    </div>
                    <div className="team-stats-section">
                        <div className="team-stats-gray-line"></div>
                        <h1 className="team-stats-sideheader">{props.sideHeaderThree}</h1>
                        <div className="team-stats-gray-line"></div>
                        <p>{props.thirdContentOne}</p>
                        <p className="gray-background-label">{props.thirdContentTwo}</p>
                        <p>{props.thirdContentThree}</p>
                    </div>
                </div>
            </div>
            <div className="space-between"></div>
        </div>
    )
}
