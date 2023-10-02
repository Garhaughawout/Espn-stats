import React from 'react';
import '../Styles/App.css';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import Main from './Main';
import Stats from './Stats'

function App() {

    return (
    <div className="App">
        <TopHeader />
        <BottomHeader />
        <Main
            pointPlayerStats={<Stats header="Point Leaders" title="Points" titleShort="PTS"/>}
            reboundPlayerStats={<Stats header="Rebound Leaders" title="Rebounds" titleShort="REB"/>}
            assistPlayerStats={<Stats  header="Assist Leaders" title="Assits" titleShort="AST"/>}
            blockPlayerStats={<Stats header="Block Leaders" title="Blocks" titleShort="BLK"/>}
            threePointPlayerStats={<Stats header="Three-Point Leaders" title="3-Pointers Made" titleShort="3PM"/>}
            stealPlayerStats={<Stats header="Steal Leaders" title="Steals" titleShort="STL"/>}
        />

    </div>
  );
}

export default App;
