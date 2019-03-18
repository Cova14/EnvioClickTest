import React from 'react'
import Card from './Card'
import './Home.css'

// Como se puede ver, en nuestra función estamos usando el "destructuring" de ES5, esto para evitar tener que pasar los
// props como props.users, símplemente usamos users.
export default function ({ users }) {
    return (
        <div>
            <header>
                <h1>
                    Home Page
                </h1>
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </header>
            <main>
                <div className="info">
                    <div className="info-container">
                        <br />
                        <h1>¡Hola! Esta es mi prueba</h1>
                        <br />
                        <p>
                            Como puedes ver, hay algunas cosas que están creadas sin mucho funcionamiento, por ejemplo, los "links" de la barra de navegación
                            esto debido a que consideré que es mejor enfocarse al problema que se tiene que resolver más que a el resto de la página.
                            Sin embargo, se trató de crear ciertas animaciones y demás para que se viera relativamente bien.
                        </p>
                        <br />
                        <p>
                            Debajo se encuentrarn unas tarjetas que utilizan css para su posicionamiento, no se utilizaron frameworks para esto.
                        </p>
                        <p>El consumo de la API se realizó con <a className="custom-link" href="https://github.com/axios/axios" target="_blank" rel="noopener noreferrer">axios</a>.</p>
                        <br />
                        <p>
                            Si quieres saber un poco más del funcionamiento de este proyecto, puedes dar click <a className="custom-link" href="https://github.com/Cova14/EnvioClickTest" target="_blank" rel="noopener noreferrer">aquí</a> para ir al repositorio. Ahí podrás leer el archivo "README.md"
                        </p>
                    </div>
                </div>
                <div className="cards-header-separator">
                    <p>
                        Aquí te presento las cards creadas con los datos consumidos de la API de <a href="https://reqres.in" target="_blank" rel="noopener noreferrer" >Reqres</a>.
                    </p>
                    <p>
                        Intenta hacer click en algúno de los íconos de redes sociales
                    </p>
                </div>
                <section>
                    {// tomamos los datos de los usuarios que recivimos como props en la función, los mapeamos y por cada uno de ellos creamos un componente de Card
                        users.map((u, i) => {
                            return (
                                <Card user={u} key={i} />
                            )
                        })}
                </section>
            </main>
            <footer>
                <p>Creado por: <a className="custom-link" href="https://github.com/Cova14" target="_blank" rel="noopener noreferrer" >Arturo Covarrubias</a> </p>
            </footer>
        </div>
    )
}