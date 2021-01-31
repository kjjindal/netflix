import React from 'react';
import Row from './Row';
import request from './Requests';
import './App.css';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <>
    <div className="app">
    <Nav  />
    <Banner   />
    <Row  title="NETFLIX  ORIGINALS" fetchurl={request.fetchNetflixOriginals}  islarge />
     <Row  title="NETFLIX  TRENDING"  fetchurl={request.fetchTrending} />
     </div>
  
    </>
  );
} 

export default App;
