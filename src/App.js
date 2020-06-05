import React from 'react';
import './App.css';
import Displayjobs from './DisplayJobs';
import data from './data'
import { Image } from "react-bootstrap";



function App() {
  return (
    <div className="App">
     <Image className="img" src="../images/bg-header-desktop.svg" style={{ width:"100%" , height:156 }}/>
     <Displayjobs data={data}/>
    </div>
  );
}

export default App;
