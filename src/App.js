import React from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import JobData from './data/images/data.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Card  data={JobData}/>
     
    </div>
  );
}

export default App;
