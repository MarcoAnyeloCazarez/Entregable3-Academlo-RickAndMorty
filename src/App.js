import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import LocationInfo from './Components/LocationInfo';
import ResidentsList from './Components/ResidentsList';
import SearchBox from './Components/SearchBox';

function App() {

  const [ location, setLocation ] = useState({});
  const [ residents, setResidents ] = useState([ ])

  useEffect(() => {
    let randomNumber = Math.floor( Math.random() * (127 - 1) + 1)
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomNumber}`)
      .then(answ => {
        setLocation(answ.data)
        setResidents(answ.data.residents)
      }
      )
  },[]);
  // console.log(residents);

  // const urlResidents = location?.residents

  return (
    <div className="App">
      <nav className='imagenPortada'>
        <img src="https://a-static.besthdwallpaper.com/rick-y-morty-y-monstruos-papel-pintado-3360x1260-24072_91.jpg" alt="" />
      </nav>
      <div className="title"> <b> Rick and Morty Wiki </b>  </div>
      < SearchBox setLocation={setLocation} setResidents={setResidents}/>
      < LocationInfo location = {location}/>
      < ResidentsList residents = { residents } />
    </div>
  );
}

export default App;
