import React from 'react'
import './Card.css'

export default function Card({ user }) {

  // El componente user, el cuál viene con datos de la API, sólo cuenta con los datos first_name, last_name y avatar
  // por esta razón, se ha decidido hacer un split al url de "avatar", esto para revisar y determinar si la imágen es
  // de twitter o facebook. Sin embargo, parece que todas las url contienen "twitter" en su url, por lo que no es la mejor solución
  let url = user.avatar
  let newArr = url.split('/')


  // Aquí se construye la tarjeta para mostrar los datos de los usuarios, después de construir el nombre, se usa un
  // operador ternario para, dependiendo de el url del avatar, decidir qué imágen se usará para la red social y crear el url hacia la misma
  return (
    <article>
      <img src={user.avatar} alt="avatar" />
      <div>
        <p>{user.first_name} {user.last_name}</p>
        {newArr[5] === 'twitter' ?
          <a href={'https://twitter.com/' + newArr[6]} target="_blank" rel="noopener noreferrer" ><img className="social-media" src="data:image/jpeg;base64,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" alt="social_media" /></a> :
          <a href={'https://facebook.com/' + newArr[6]} target="_blank" rel="noopener noreferrer" ><img className="social-media" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5doerLr7fTHzeE9WKHV2umHlcDy9Pnd4eyut9O1vtdZbat5ibmWoceGk7/M0eSrs9G/xtxMY6ZvgLVIYaWJ8OFBAAAC40lEQVR4nO3c63KqMBRAYU9iqaLg/d7W2vd/yE5nzt/ihjTsvTNrPQDDNxIDJDqZEBERERERERERERERERFZL4QYqydF7ZMcXKyadju97m/zzhZ7n8SqCY/T8Z+kXa19sv2LdbztRLqflu6EsXm8i3kOhbF9WffxeROG9tHT50xYbTd9fb6E7Vt/nydhqO9DgH6EcdZ7BPoSVpdhPjfCajUU6EQYhwN9COPncKALYdgeChe2socIv8LmnAJ0IIzXJKADYZMyCD0IE69R+8Iw+F7Gi7CVv67wKQzTVKB1YbMsXBhSbtdcCOtT6cLUudC8MD7SgbaFdepsb17YDHw140YYZn8ANC2M+78QWl57qvoMw8PuvHC3fljL70k3q7qu/a0Bt9LZ8HhpgvbJDioKgffWp28SvqRA7TMdmvDJ6egWKBV+Ob1EJ1LhyfB09yyZ0PFHKBMeG+3TTEgkPFXap5mQSGj5nuxpIuELQsshRGg/hAjthxCh/RAitB9ChPZDiNB+CBHarwxh6PiJci3ZWnptnv3SWRm4ev2920IgPN86jvDTfKsqrD4EiMR0V98qyceU1kF3iXgEofLy2wjCe/FX6Yful+kIwn3xwpXuOv8Iws/ihcr3NPmFa+UdU/mFS+XdKPmFZ+UtU/mFr8WPQ+3nx/zCi/K2t/xC7VcA2YUH7b2Z2YXqWxezCzfFf4bqmzOzC2/Ff9M8ihdqT4f5hdrDMLtQ+VXiCEL93x7mFiq/ShxBOC9+HL5pTxbZhVPtySK7UNuXXXhQH4a5hWvtZ6fswnf1ySL3GvBZ/yqdbGcdSf4O8q3rCLpL+P8LvxdFu02qjiNo455Vxn6arhAitB9ChPZDiNB+CBHaDyFC+yFEaD+ECO2HEKH9ECK0H0KE9kOI0H4IEdoPIUL7IURoP4QI7YcQof0QIrQfQoT2Q4jQfggR2g8hQvshRGg/hAjthxCh/RAitB9ChPZDiNB+CBH26BsaQkVVLImVewAAAABJRU5ErkJggg==" alt="social_media" /></a>
        }
      </div>
    </article>
  )
}