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
                        <li className="stats-list-item"></li>
                        <li className="stats-list-item"></li>
                        <li className="stats-list-item"></li>
                        <li className="stats-list-item"></li>
                        <li className="stats-list-item"></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}