import React, { useEffect } from 'react';
import { useState } from 'react';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import Main from './Main';
import PlayerStats from './PlayerStats'
import TeamStatsFooter from './TeamStatsFooter';
import TeamStats from './TeamStats';
import TeamData from './TeamData';
import playerInfo from './PlayerData';

function App() {
    const [results, setResults] = useState([]);
    const URL = "https://www.balldontlie.io/api/v1/stats"

    useEffect(() => {
        fetch(URL)
           .then((res) => res.json())
           .then((data) => {
              setResults(data);
              console.log(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    return (
    <div className="App">
        <TopHeader />
        <BottomHeader />
        <Main
            pointPlayerStats={pointPlayerComponent}
            reboundPlayerStats={reboundPlayerComponent}
            assistPlayerStats={assistPlayerComponent}
            blockPlayerStats={blockPlayerComponent}
            threePointPlayerStats={threePointComponent}
            stealPlayerStats={stealPlayerComponent}
            pointTeamStats={pointTeamComponent}
            pointsAllowedTeamStats={pointsAllowedTeamComponent}
            fieldGoalTeamStats={fieldGoalTeamComponent}
            reboundTeamStats={reboundTeamComponent}
            pointDiffTeamStats={PointDiffTeamComponent}
            blocksTeamStats={blockTeamComponent}
        />
        <TeamStatsFooter />

    </div>
  );
}

const pointTeamComponent = <TeamStats 
header="Point Leaders" 
title="Points" 
titleShort="PTS"

teamOne={TeamData.pointsTeams.teamOne.name}
teamOneImg={TeamData.pointsTeams.teamOne.img}
teamOneStat={TeamData.pointsTeams.teamOne.stat}

teamTwo={TeamData.pointsTeams.teamTwo.name}
teamTwoImg={TeamData.pointsTeams.teamTwo.img}
teamTwoStat={TeamData.pointsTeams.teamTwo.stat}

teamThree={TeamData.pointsTeams.teamThree.name}
teamThreeImg={TeamData.pointsTeams.teamThree.img}
teamThreeStat={TeamData.pointsTeams.teamThree.stat}

teamFour={TeamData.pointsTeams.teamFour.name}
teamFourImg={TeamData.pointsTeams.teamFour.img}
teamFourStat={TeamData.pointsTeams.teamFour.stat}

teamFive={TeamData.pointsTeams.teamFive.name}
teamFiveImg={TeamData.pointsTeams.teamFive.img}
teamFiveStat={TeamData.pointsTeams.teamFive.stat}


/>
const pointsAllowedTeamComponent = <TeamStats 
header="Points Allowed"
title="Points Allowed"
titleShort="PTS"

teamOne={TeamData.pointsAllowedTeams.teamOne.name}
teamOneImg={TeamData.pointsAllowedTeams.teamOne.img}
teamOneStat={TeamData.pointsAllowedTeams.teamOne.stat}

teamTwo={TeamData.pointsAllowedTeams.teamTwo.name}
teamTwoImg={TeamData.pointsAllowedTeams.teamTwo.img}
teamTwoStat={TeamData.pointsAllowedTeams.teamTwo.stat}

teamThree={TeamData.pointsAllowedTeams.teamThree.name}
teamThreeImg={TeamData.pointsAllowedTeams.teamThree.img}
teamThreeStat={TeamData.pointsAllowedTeams.teamThree.stat}

teamFour={TeamData.pointsAllowedTeams.teamFour.name}
teamFourImg={TeamData.pointsAllowedTeams.teamFour.img}
teamFourStat={TeamData.pointsAllowedTeams.teamFour.stat}

teamFive={TeamData.pointsAllowedTeams.teamFive.name}
teamFiveImg={TeamData.pointsAllowedTeams.teamFive.img}
teamFiveStat={TeamData.pointsAllowedTeams.teamFive.stat}

/>
const fieldGoalTeamComponent = <TeamStats
header="Field Goal %"
title="Percentage"
titleShort="FG%"

teamOne={TeamData.fieldGoalTeams.teamOne.name}
teamOneImg={TeamData.fieldGoalTeams.teamOne.img}
teamOneStat={TeamData.fieldGoalTeams.teamOne.stat}

teamTwo={TeamData.fieldGoalTeams.teamTwo.name}
teamTwoImg={TeamData.fieldGoalTeams.teamTwo.img}
teamTwoStat={TeamData.fieldGoalTeams.teamTwo.stat}

teamThree={TeamData.fieldGoalTeams.teamThree.name}
teamThreeImg={TeamData.fieldGoalTeams.teamThree.img}
teamThreeStat={TeamData.fieldGoalTeams.teamThree.stat}

teamFour={TeamData.fieldGoalTeams.teamFour.name}
teamFourImg={TeamData.fieldGoalTeams.teamFour.img}
teamFourStat={TeamData.fieldGoalTeams.teamFour.stat}

teamFive={TeamData.fieldGoalTeams.teamFive.name}
teamFiveImg={TeamData.fieldGoalTeams.teamFive.img}
teamFiveStat={TeamData.fieldGoalTeams.teamFive.stat}
/>
const reboundTeamComponent = <TeamStats 
header="Rebound Leaders"
title="Rebounds"
titleShort="REB"

teamOne={TeamData.reboundTeams.teamOne.name}
teamOneImg={TeamData.reboundTeams.teamOne.img}
teamOneStat={TeamData.reboundTeams.teamOne.stat}

teamTwo={TeamData.reboundTeams.teamTwo.name}
teamTwoImg={TeamData.reboundTeams.teamTwo.img}
teamTwoStat={TeamData.reboundTeams.teamTwo.stat}

teamThree={TeamData.reboundTeams.teamThree.name}
teamThreeImg={TeamData.pointsTeams.teamThree.img}
teamThreeStat={TeamData.pointsTeams.teamThree.stat}

teamFour={TeamData.reboundTeams.teamFour.name}
teamFourImg={TeamData.reboundTeams.teamFour.img}
teamFourStat={TeamData.reboundTeams.teamFour.stat}

teamFive={TeamData.reboundTeams.teamFive.name}
teamFiveImg={TeamData.reboundTeams.teamFive.img}
teamFiveStat={TeamData.reboundTeams.teamFive.stat}
/>
const PointDiffTeamComponent = <TeamStats
header="Point Differential"
title="Point Differential"
titleShort="PTSDIFF"

teamOne={TeamData.pointDiffTeams.teamOne.name}
teamOneImg={TeamData.pointDiffTeams.teamOne.img}
teamOneStat={TeamData.pointDiffTeams.teamOne.stat}

teamTwo={TeamData.pointDiffTeams.teamTwo.name}
teamTwoImg={TeamData.pointDiffTeams.teamTwo.img}
teamTwoStat={TeamData.pointDiffTeams.teamTwo.stat}

teamThree={TeamData.pointDiffTeams.teamThree.name}
teamThreeImg={TeamData.pointDiffTeams.teamThree.img}
teamThreeStat={TeamData.pointDiffTeams.teamThree.stat}

teamFour={TeamData.pointDiffTeams.teamFour.name}
teamFourImg={TeamData.pointDiffTeams.teamFour.img}
teamFourStat={TeamData.pointDiffTeams.teamFour.stat}

teamFive={TeamData.pointDiffTeams.teamFive.name}
teamFiveImg={TeamData.pointDiffTeams.teamFive.img}
teamFiveStat={TeamData.pointDiffTeams.teamFive.stat}
/>

const blockTeamComponent = <TeamStats
header="Block Leaders"
title="Blocks"
titleShort="BLK"

teamOne={TeamData.blockTeams.teamOne.name}
teamOneImg={TeamData.blockTeams.teamOne.img}
teamOneStat={TeamData.blockTeams.teamOne.stat}

teamTwo={TeamData.blockTeams.teamTwo.name}
teamTwoImg={TeamData.blockTeams.teamTwo.img}
teamTwoStat={TeamData.blockTeams.teamTwo.stat}

teamThree={TeamData.blockTeams.teamThree.name}
teamThreeImg={TeamData.blockTeams.teamThree.img}
teamThreeStat={TeamData.blockTeams.teamThree.stat}

teamFour={TeamData.blockTeams.teamFour.name}
teamFourImg={TeamData.blockTeams.teamFour.img}
teamFourStat={TeamData.blockTeams.teamFour.stat}

teamFive={TeamData.blockTeams.teamFive.name}
teamFiveImg={TeamData.blockTeams.teamFive.img}
teamFiveStat={TeamData.blockTeams.teamFive.stat}
/>

const pointPlayerComponent = <PlayerStats 
header="Point Leaders" 
title="Points" 
titleShort="PTS" 

playerOne={playerInfo.pointsPlayers.playerOne.name} 
playerOneTeam={playerInfo.pointsPlayers.playerOne.team} 
playerOneImg={playerInfo.pointsPlayers.playerOne.img}
playerOneStat={playerInfo.pointsPlayers.playerOne.stat}

playerTwo={playerInfo.pointsPlayers.playerTwo.name}
playerTwoTeam={playerInfo.pointsPlayers.playerTwo.team} 
playerTwoImg={playerInfo.pointsPlayers.playerTwo.img}
playerTwoStat={playerInfo.pointsPlayers.playerTwo.stat}

playerThree={playerInfo.pointsPlayers.playerThree.name} 
playerThreeTeam={playerInfo.pointsPlayers.playerThree.team} 
playerThreeImg={playerInfo.pointsPlayers.playerThree.img}
playerThreeStat={playerInfo.pointsPlayers.playerThree.stat}

playerFour={playerInfo.pointsPlayers.playerFour.name}
playerFourTeam={playerInfo.pointsPlayers.playerFour.team} 
playerFourImg={playerInfo.pointsPlayers.playerFour.img}
playerFourStat={playerInfo.pointsPlayers.playerFour.stat}

playerFive={playerInfo.pointsPlayers.playerFive.name} 
playerFiveTeam={playerInfo.pointsPlayers.playerFive.team}
playerFiveImg={playerInfo.pointsPlayers.playerFive.img}
playerFiveStat={playerInfo.pointsPlayers.playerFive.stat}
/> 



const reboundPlayerComponent = <PlayerStats 
header="Rebound Leaders" 
title="Rebounds" 
titleShort="REB"

playerOne={playerInfo.reboundsPlayers.playerOne.name} 
playerOneTeam={playerInfo.reboundsPlayers.playerOne.team} 
playerOneImg={playerInfo.reboundsPlayers.playerOne.img}
playerOneStat={playerInfo.reboundsPlayers.playerOne.stat}

playerTwo={playerInfo.reboundsPlayers.playerTwo.name}
playerTwoTeam={playerInfo.reboundsPlayers.playerTwo.team} 
playerTwoImg={playerInfo.reboundsPlayers.playerTwo.img}
playerTwoStat={playerInfo.reboundsPlayers.playerTwo.stat}

playerThree={playerInfo.reboundsPlayers.playerThree.name} 
playerThreeTeam={playerInfo.reboundsPlayers.playerThree.team} 
playerThreeImg={playerInfo.reboundsPlayers.playerThree.img}
playerThreeStat={playerInfo.reboundsPlayers.playerThree.stat}

playerFour={playerInfo.reboundsPlayers.playerFour.name}
playerFourTeam={playerInfo.reboundsPlayers.playerFour.team} 
playerFourImg={playerInfo.reboundsPlayers.playerFour.img}
playerFourStat={playerInfo.reboundsPlayers.playerFour.stat}

playerFive={playerInfo.reboundsPlayers.playerFive.name} 
playerFiveTeam={playerInfo.reboundsPlayers.playerFive.team}
playerFiveImg={playerInfo.reboundsPlayers.playerFive.img}
playerFiveStat={playerInfo.reboundsPlayers.playerFive.stat}
/>



const assistPlayerComponent = <PlayerStats  
header="Assist Leaders" 
title="Assits" 
titleShort="AST"

playerOne={playerInfo.assistsPlayers.playerOne.name} 
playerOneTeam={playerInfo.assistsPlayers.playerOne.team} 
playerOneImg={playerInfo.assistsPlayers.playerOne.img}
playerOneStat={playerInfo.assistsPlayers.playerOne.stat}

playerTwo={playerInfo.assistsPlayers.playerTwo.name}
playerTwoTeam={playerInfo.assistsPlayers.playerTwo.team} 
playerTwoImg={playerInfo.assistsPlayers.playerTwo.img}
playerTwoStat={playerInfo.assistsPlayers.playerTwo.stat}

playerThree={playerInfo.assistsPlayers.playerThree.name} 
playerThreeTeam={playerInfo.assistsPlayers.playerThree.team} 
playerThreeImg={playerInfo.assistsPlayers.playerThree.img}
playerThreeStat={playerInfo.assistsPlayers.playerThree.stat}

playerFour={playerInfo.assistsPlayers.playerFour.name}
playerFourTeam={playerInfo.assistsPlayers.playerFour.team} 
playerFourImg={playerInfo.assistsPlayers.playerFour.img}
playerFourStat={playerInfo.assistsPlayers.playerFour.stat}

playerFive={playerInfo.assistsPlayers.playerFive.name} 
playerFiveTeam={playerInfo.assistsPlayers.playerFive.team}
playerFiveImg={playerInfo.assistsPlayers.playerFive.img}
playerFiveStat={playerInfo.assistsPlayers.playerFive.stat}
/>



const blockPlayerComponent = <PlayerStats 
header="Block Leaders" 
title="Blocks" 
titleShort="BLK"

playerOne={playerInfo.blocksPlayers.playerOne.name} 
playerOneTeam={playerInfo.blocksPlayers.playerOne.team} 
playerOneImg={playerInfo.blocksPlayers.playerOne.img}
playerOneStat={playerInfo.blocksPlayers.playerOne.stat}

playerTwo={playerInfo.blocksPlayers.playerTwo.name}
playerTwoTeam={playerInfo.blocksPlayers.playerTwo.team} 
playerTwoImg={playerInfo.blocksPlayers.playerTwo.img}
playerTwoStat={playerInfo.blocksPlayers.playerTwo.stat}

playerThree={playerInfo.blocksPlayers.playerThree.name} 
playerThreeTeam={playerInfo.blocksPlayers.playerThree.team} 
playerThreeImg={playerInfo.blocksPlayers.playerThree.img}
playerThreeStat={playerInfo.blocksPlayers.playerThree.stat}

playerFour={playerInfo.blocksPlayers.playerFour.name}
playerFourTeam={playerInfo.blocksPlayers.playerFour.team} 
playerFourImg={playerInfo.blocksPlayers.playerFour.img}
playerFourStat={playerInfo.blocksPlayers.playerFour.stat}

playerFive={playerInfo.blocksPlayers.playerFive.name} 
playerFiveTeam={playerInfo.blocksPlayers.playerFive.team}
playerFiveImg={playerInfo.blocksPlayers.playerFive.img}
playerFiveStat={playerInfo.blocksPlayers.playerFive.stat}
/>


const threePointComponent = <PlayerStats 
header="Three-Point Leaders" 
title="3-Pointers Made" 
titleShort="3PM"

playerOne={playerInfo.threePointPlayers.playerOne.name} 
playerOneTeam={playerInfo.threePointPlayers.playerOne.team} 
playerOneImg={playerInfo.threePointPlayers.playerOne.img}
playerOneStat={playerInfo.threePointPlayers.playerOne.stat}

playerTwo={playerInfo.threePointPlayers.playerTwo.name}
playerTwoTeam={playerInfo.threePointPlayers.playerTwo.team} 
playerTwoImg={playerInfo.threePointPlayers.playerTwo.img}
playerTwoStat={playerInfo.threePointPlayers.playerTwo.stat}

playerThree={playerInfo.threePointPlayers.playerThree.name} 
playerThreeTeam={playerInfo.threePointPlayers.playerThree.team} 
playerThreeImg={playerInfo.threePointPlayers.playerThree.img}
playerThreeStat={playerInfo.threePointPlayers.playerThree.stat}

playerFour={playerInfo.threePointPlayers.playerFour.name}
playerFourTeam={playerInfo.threePointPlayers.playerFour.team} 
playerFourImg={playerInfo.threePointPlayers.playerFour.img}
playerFourStat={playerInfo.threePointPlayers.playerFour.stat}

playerFive={playerInfo.threePointPlayers.playerFive.name} 
playerFiveTeam={playerInfo.threePointPlayers.playerFive.team}
playerFiveImg={playerInfo.threePointPlayers.playerFive.img}
playerFiveStat={playerInfo.threePointPlayers.playerFive.stat}
/>



const stealPlayerComponent = <PlayerStats 
header="Steal Leaders" 
title="Steals" 
titleShort="STL"

playerOne={playerInfo.stealsPlayers.playerOne.name} 
playerOneTeam={playerInfo.stealsPlayers.playerOne.team} 
playerOneImg={playerInfo.stealsPlayers.playerOne.img}
playerOneStat={playerInfo.stealsPlayers.playerOne.stat}

playerTwo={playerInfo.stealsPlayers.playerTwo.name}
playerTwoTeam={playerInfo.stealsPlayers.playerTwo.team} 
playerTwoImg={playerInfo.stealsPlayers.playerTwo.img}
playerTwoStat={playerInfo.stealsPlayers.playerTwo.stat}

playerThree={playerInfo.stealsPlayers.playerThree.name} 
playerThreeTeam={playerInfo.stealsPlayers.playerThree.team} 
playerThreeImg={playerInfo.stealsPlayers.playerThree.img}
playerThreeStat={playerInfo.stealsPlayers.playerThree.stat}

playerFour={playerInfo.stealsPlayers.playerFour.name}
playerFourTeam={playerInfo.stealsPlayers.playerFour.team} 
playerFourImg={playerInfo.stealsPlayers.playerFour.img}
playerFourStat={playerInfo.stealsPlayers.playerFour.stat}

playerFive={playerInfo.stealsPlayers.playerFive.name} 
playerFiveTeam={playerInfo.stealsPlayers.playerFive.team}
playerFiveImg={playerInfo.stealsPlayers.playerFive.img}
playerFiveStat={playerInfo.stealsPlayers.playerFive.stat}

/>






export default App;
