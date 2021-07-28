import React,{useState} from 'react';
import './App.css';
import CountryButton from './components/CountryButtons';
import CountryList from './components/CountryList';
import MostSpokenLanguage from "./components/MostSpokenLanguage";

function App() {
  const [checkedButton,setCheckedButton]=useState("country");

  //seçilen butona göre ülke listesini yada istatistiği gösterme
  return (
    <div className="App">
     <CountryButton setCheckedButton={setCheckedButton}/>
     {
      checkedButton==="country"?<CountryList/>:<MostSpokenLanguage/>
     }
     
    </div>
  );
}

export default App;
