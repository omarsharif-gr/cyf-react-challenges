import React, { useState, useEffect } from 'react';
import BabyNamesData from "./babyNamesData.json"

const BabyNames = () => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    fetch(BabyNamesData, {
      headers: {
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setNames(data);
      });
  }, []);
  console.log(names);
  return (
    <div className="App-content">
      <div className="container">
      {names}
      </div>
    </div>
  );
};
export default BabyNames