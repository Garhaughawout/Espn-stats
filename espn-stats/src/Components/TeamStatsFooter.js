import React from "react";


export default function TeamStatsSection() { 
    return (
        <div className="team-stats-container">
            <div className="team-stats-content">
                <div className="team-stats-header">
                    <h1>Team Statistics</h1>
                </div>
                <div className="team-stats-sections">
                    <div className="team-stats-section">
                        <div className="team-stats-gray-line"></div>
                        <h1 className="team-stats-sideheader">TEAM</h1>
                        <div className="team-stats-gray-line"></div>
                        <p>Points</p>
                        <p className="gray-background-label">Rebounds</p>
                        <p>Field Goal %</p>
                    </div>
                    <div className="team-stats-section">
                        <div className="team-stats-gray-line"></div>
                        <h1 className="team-stats-sideheader">OPPONENT</h1>
                        <div className="team-stats-gray-line"></div>
                        <p>Opponent Points</p>
                        <p className="gray-background-label">Opponent Rebounds</p>
                        <p>Opponent Field Goal %</p>
                    </div>
                    <div className="team-stats-section">
                        <div className="team-stats-gray-line"></div>
                        <h1 className="team-stats-sideheader">DIFFERENTIAL</h1>
                        <div className="team-stats-gray-line"></div>
                        <p>Points Differential</p>
                        <p className="gray-background-label">Rebounds Differential</p>
                        <p>Field Goal % Differential</p>
                    </div>
                </div>
            </div>
            <div className="space-between"></div>
        </div>
    )
}
