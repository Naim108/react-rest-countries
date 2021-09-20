import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>

    </div>
  );
}

function Countries(){
  const [countries,setCountries]=useState([])
  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>setCountries(data))
  }
  ,[])
  return (
    <div>
      
    </div>
  )
}

export default App;
