import React from 'react';
import './App.css';
import Row from './components/Row'
import data from './requests';
import Banner from './components/Banner'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title = "Netflix Originals" Url = {data.NetflixOriginals} isNetflix />
      <Row title = "Trending" Url = {data.trending} />
      <Row title = "Top Rated"
      Url = {
        data.topRated
      }
      />
      <Row title = "Action"
      Url = {
        data.Action
      }
      />
      <Row title = "Comedy"
      Url = {
        data.Comedy
      }
      />
      <Row title = "Horror"
      Url = {
        data.Horror
      }
      />
      <Row title = "Romance"
      Url = {
        data.Romantic
      }
      />
      <Row title = "Documentaries"
      Url = {
        data.Documentary
      }
      />
    </div>
  );
}

export default App;
