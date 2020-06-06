import React, { useState } from "react";
import "./App.css";
import Displayjobs from "./Displayjobs";
import allData from "./data";
import { Image,Row } from "react-bootstrap";


function App() {
  
  const [filterjobs, setFilterjobs] = useState([]);

  const isTagInJobs = ({ role, level, tools, languages }) => {
    if (filterjobs.length === 0) {
      return true;
    }
    const tags = [role, level];

    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }
    return tags.some((tag) => filterjobs.includes(tag));
  };

  const filteredData = allData.filter(isTagInJobs);

  const handleClick = (item) => {
    setFilterjobs([...filterjobs, item]);
  };

  const handleRemove =(chooseJob)=>{

    setFilterjobs(filterjobs.filter(job => job !== chooseJob))

  }

  return (
    <div className="App">
      <Image
        className="img"
        src="../images/bg-header-desktop.svg"
        style={{ width: "100%", height: 156 }}
      />
      <Row className='row-box-filter'>
        {filteredData.length > 0 && filterjobs.map(
          job=><span 
          onClick={()=>{handleRemove(job)}}
          className='row-box-filter-items' 
          >{job}</span>)}
      </Row>
      
      {filteredData.map((job) => (
        <Displayjobs job={job} key={job.id} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default App;
