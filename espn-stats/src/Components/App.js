import React from 'react';
import '../Styles/App.css';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import Main from './Main';

function App() {
  
    return (
    <div className="App">
        <TopHeader />
        <BottomHeader />
        <Main />
    </div>
  );
}

export default App;
