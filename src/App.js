import './App.css';
import RangersList from './components/rangers/RangersList';
import Navbar from './components/navbar/Navbar';
import mock from './mock.json';
import { useState } from 'react';

function App() {

  const [ rangers, setRangers ] = useState( mock );

  const shuffleRangers = () => setRangers( rangers => shuffleArray( rangers ) );

  const shuffleArray = ( array ) => {

    let newArray = [ ...array ];

    for ( let i = newArray.length - 1; i > 0; i-- ) {
        const j = Math.floor( Math.random() * ( i + 1 ) );
        [ newArray[i], newArray[j] ] = [ newArray[j], newArray[i] ];
    }
    
    return newArray;
  }

  return (
    <div className="App">
      <Navbar onShuffleClick={ shuffleRangers }/>
      <RangersList rangers={ rangers }/>
    </div>
  );
}

export default App;
