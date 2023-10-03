import React, { useEffect } from 'react';
import { useState } from 'react';
import '../Styles/App.css';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import Main from './Main';
import Stats from './Stats'



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
            playerOne="Joel Embiied" 
            playerTwo="Luka Doncic"
            playerThree="Damian Lillard"
            playerFour="Shai Gilgeous-Alexander"
            playerFive="Giannis Antetokounmpo"
            />}
            reboundPlayerStats={
            <Stats 
            header="Rebound Leaders" 
            title="Rebounds" 
            titleShort="REB"
            playerOne="Anthony Davis" 
            playerTwo="Domantas Sabonis"
            playerThree="Nikola Jokic"
            playerFour="Giannis Antetokounmpo"
            playerFive="Rudy Gobert"
            />}
            assistPlayerStats={
            <Stats  
            header="Assist Leaders" 
            title="Assits" 
            titleShort="AST"
            playerOne="James Harden" 
            playerTwo="Tyrese Haliburton"
            playerThree="Trae Young"
            playerFour="Nikola Jokic"
            playerFive="Chris Paul"
            />}
            blockPlayerStats={
            <Stats 
            header="Block Leaders" 
            title="Blocks" 
            titleShort="BLK"
            playerOne="Jaren Jackson Jr." 
            playerTwo="Nicolas Claxton"
            playerThree="Brook Lopez"
            playerFour="Walker Kessler"
            playerFive="Myles Turner"
            />}
            threePointPlayerStats={
            <Stats 
            header="Three-Point Leaders" 
            title="3-Pointers Made" 
            titleShort="3PM"
            playerOne="Stephen Curry" 
            playerTwo="Klay Thompson"
            playerThree="Damian Lillard"
            playerFour="Lamelo Ball"
            playerFive="Donovan Mitchell"
            />}
            stealPlayerStats={
            <Stats 
            header="Steal Leaders" 
            title="Steals" 
            titleShort="STL"
            playerOne="O.G. Anunoby" 
            playerTwo="Delon Wright"
            playerThree="Jimmy Butler"
            playerFour="Fred VanVleet"
            playerFive="Shai Gilgeous-Alexander"
            />}
        />

    </div>
  );
}

export default App;
