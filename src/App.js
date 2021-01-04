import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
    }

    fetchFilms();
  }, [])

  console.log('DATA', films);
  return (
    <table>
      <thead>
          <tr>
            <th>Título</th>
            <th>Diretor</th>
            <th>Produtor</th>
            <th>Personagens</th>
            <th>Data de lançamento</th>
          </tr>
      </thead>
      <tbody>
            {films.map((cur) => {
              return (
                <tr key={cur.episode_id}>
                  <td>{cur.title}</td>
                  <td>{cur.director}</td>
                  <td>{cur.producer}</td>
                  <td>{cur.characters}</td>
                  <td>{cur.release_date}</td>
                </tr>
              );
            })}
      </tbody>

    </table>
  );
}

export default App;
