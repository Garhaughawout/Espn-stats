import React, { useEffect } from 'react';
import { useState } from 'react';
import '../Styles/App.css';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import Main from './Main';
import Stats from './Stats'
import TeamStatsSection from './TeamStatsSection';


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
            pointPlayerStats={
            <Stats 
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
            />}
            reboundPlayerStats={
            <Stats 
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
            />}
            assistPlayerStats={
            <Stats  
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
            />}
            blockPlayerStats={
            <Stats 
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
            />}
            threePointPlayerStats={
            <Stats 
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
            />}
            stealPlayerStats={
            <Stats 
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
            />}
        />
        <TeamStatsSection />

    </div>
  );
}


const playerInfo = {
    pointsPlayers : {
        playerOne : {
            name: "Joel Embiid",
            team: "PHI",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&h=80&w=110&scale=crop",
            stat: 33.1
        },
        playerTwo : {
            name: "Luka Doncic",
            team: "DAL",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3945274.png&h=80&w=110&scale=crop",
            stat: 32.4
        },
        playerThree : {
            name: "Damian Lillard",
            team: "POR",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6606.png&h=80&w=110&scale=crop",
            stat: 32.2
        },
        playerFour : {
            name: "Shai Gilgeous-Alexander",
            team: "OKC",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278073.png&h=80&w=110&scale=crop",
            stat: 31.4
        },
        playerFive : {
            name: "Giannis Antetokounmpo",
            team: "MIL",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png&h=80&w=110&scale=crop",
            stat: 31.1
        }
    },
    reboundsPlayers : {
        playerOne : {
            name: "Anthony Davis",
            team: "LAL",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6583.png&h=80&w=110&scale=crop",
            stat: 12.5
        },
        playerTwo : {
            name: "Domantas Sabonis",
            team: "IND",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3155942.png&h=80&w=110&scale=crop",
            stat: 12.3
        },
        playerThree : {
            name: "Nikola Jokic",
            team: "DEN",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3112335.png&h=80&w=110&scale=crop",
            stat: 11.8
        },
        playerFour : {
            name: "Giannis Antetokounmpo",
            team: "MIL",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032977.png&h=80&w=110&scale=crop",
            stat: 11.8
        },
        playerFive : {
            name: "Rudy Gobert",
            team: "UTA",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032976.png&h=80&w=110&scale=crop",
            stat: 11.6
        }
    },
    assistsPlayers : {
        playerOne : {
            name: "James Harden",
            team: "BKN",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&h=80&w=110&scale=crop",
            stat: 10.7
        },
        playerTwo : {
            name: "Tyrese Haliburton",
            team: "SAC",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4396993.png&h=80&w=110&scale=crop",
            stat: 10.4
        },
        playerThree : {
            name: "Trae Young",
            team: "ATL",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277905.png&h=80&w=110&scale=crop",
            stat: 10.2
        },
        playerFour : {
            name: "Nikola Jokic",
            team: "DEN",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3112335.png&h=80&w=110&scale=crop",
            stat: 9.8
        },
        playerFive : {
            name: "Chris Paul",
            team: "PHX",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2779.png&h=80&w=110&scale=crop",
            stat: 8.9
        }
    },
    blocksPlayers : {
        playerOne : {
            name: "Jaren Jackson Jr.",
            team: "MEM",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277961.png&h=80&w=110&scale=crop",
            stat: 3.0
        },
        playerTwo : {
            name: "Nicolas Claxton",
            team: "BKN",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278067.png&h=80&w=110&scale=crop",
            stat: 2.5
        },
        playerThree : {
            name: "Brook Lopez",
            team: "MIL",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3448.png&h=80&w=110&scale=crop",
            stat: 2.4
        },
        playerFour : {
            name: "Walker Kessler",
            team: "GSW",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433136.png&h=80&w=110&scale=crop",
            stat: 2.3
        },
        playerFive : {
            name: "Myles Turner",
            team: "IND",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3133628.png&h=80&w=110&scale=crop",
            stat: 2.2
        }
    },
    threePointPlayers : {
        playerOne : {
            name: "Stephen Curry",
            team: "GSW",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&h=80&w=110&scale=crop",
            stat: 4.9
        },
        playerTwo : {
            name: "Klay Thompson",
            team: "GSW",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&h=80&w=110&scale=crop",
            stat: 4.4
        },
        playerThree : {
            name: "Damian Lillard",
            team: "POR",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6606.png&h=80&w=110&scale=crop",
            stat: 4.2
        },
        playerFour : {
            name: "Lamelo Ball",
            team: "CHA",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4432816.png&h=80&w=110&scale=crop",
            stat: 4.0
        },
        playerFive : {
            name: "Donovan Mitchell",
            team: "UTA",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3908809.png&h=80&w=110&scale=crop",
            stat: 3.6
        }
    },
    stealsPlayers : {
        playerOne : {
            name: "O.G. Anunoby",
            team: "TOR",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934719.png&h=80&w=110&scale=crop",
            stat: 1.9
        },
        playerTwo : {
            name: "Delon Wright",
            team: "SAC",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3064447.png&h=80&w=110&scale=crop",
            stat: 1.8
        },
        playerThree : {
            name: "Jimmy Butler",
            team: "MIA",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6430.png&h=80&w=110&scale=crop",
            stat: 1.8
        },
        playerFour : {
            name: "Fred VanVleet",
            team: "TOR",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991230.png&h=80&w=110&scale=crop",
            stat: 1.8
        },
        playerFive : {
            name: "Shai Gilgeous-Alexander",
            team: "OKC",
            img: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4278073.png&h=80&w=110&scale=crop",
            stat: 1.6
        }
    }
}
export default App;
