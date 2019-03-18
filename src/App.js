import React, { useEffect, useState } from 'react';
import Home from './components/Home'
import axios from 'axios'
import './App.css';

function App() {

  // useState es un Hook de React el cuál nos permite crear un estado para ciertas "variables, por así decirlo"
  // como se puede ver, toma dos valores: "users", que sería el objeto, o, en este caso un arreglo, el cuál se define en
  // useState([]), de ser un objeto se usaría useState({}).
  // Y el segundo valor que es "setUsers", esto sirve para pasarle datos a nuestro estado de "users"
  const [users, setUsers] = useState([])

  // useEffect es el reemplazo de los ciclos de vida como "ComponentWillMount". Aquí, al poner el [] al final de la función
  // le estamos diciendo que sólo se realice lo que está dentro de las llaves al inicio de la aplicación.
  // Use Effect es una función que recive un callBack, y dentro de él, le decimos lo que queremos que se monte en la App.
  // En este caso, queremos traer los datos.
  useEffect(() => {
    // Llamamos a la función para consultar la API cuando la app se monta.
    getDataFromAPI()
  }, [])

  function getDataFromAPI() {
    // se consulta la api con axios
    axios.get('https://reqres.in/api/users?page=2')
      // se crea una promesa que recive una respuesta de la api
      .then(response => {
        // se actualiza el "State" de nuestros usuarios
        setUsers(response.data.data)
      }).catch(error => {
        console.log(error)
      })
  }

  // Aquí debajo, le pasamos a el componente Home nuestros "users" que están definidos en useState
  return (
    <div className="App">
      <Home users={users} />
    </div>
  )
}

export default App;
