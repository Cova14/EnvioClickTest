import React, { useEffect, useState } from 'react';
import Card from './components/Card'
import axios from 'axios'
import './App.css';

function App () {
  
  const [data, setData] = useState([])

  useEffect(() => {
    //we get the data from the API
    getDataFromAPI()
  }, [])

  function getDataFromAPI () {
    axios.get('https://reqres.in/api/users?delay=50')
    .then(response => {
      console.log(response.data.data)
      setData(response.data.data)
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }
  
    return (
      <div className="App">
        <Card />
      </div>
    );
}

export default App;
