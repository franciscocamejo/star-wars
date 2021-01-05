import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


const App = () => {
    const [films,setFilms] = useState([]);
    const [planets,setPlanets] = useState([]);

    const fetchData  = () => {
      const filmAPI = 'https://swapi.dev/api/films/?format=json';
      const planetAPI = 'https://swapi.dev/api/planets'

      const getFilm = axios.get(filmAPI)
      const getPlanet = axios.get(planetAPI)
      axios.all([getFilm, getPlanet]).then(
        axios.spread((...allData) => {
            const allDataFilm = allData[0].data.results.title
            const allDataPlanet = allData[1].data.results.name

          setFilms(allDataFilm)
          setPlanets(allDataPlanet)
        })
      )
    }

    useEffect(() => {
      fetchData()
    }, [])
    return (
      <div className="App">
        Film's name is: {films}
        Planet's name is: {planets}
      </div>
    )
  
  }

  

export default App;
