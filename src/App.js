import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';


function Libro({ numero, titulo, año }) {
  return (
    <div>
      <span style={{ marginRight: 10}}>{numero}</span>
      <span>{titulo}</span>
      <br/>
      <span>{año}</span>
      <br/>
      <br/>
    </div>
  )
}

function Autor({ nombre, edad, libros }) {

  return (
    <div>
      <h1>{nombre}</h1>
      <span>{edad}</span>
      <br/>
      <br/>
      {
        libros.map((libro, idx) => (
          <Libro numero={idx + 1} titulo={libro.titulo} año={libro.año} />
        ))
      }
    </div>
  )
}

function Counter() {
  let [count, actualizarCount] = useState(0)

  function agregarConteo() {
    count = count + 1
    actualizarCount(count)
  }

  function quitarConteo() {
    count = count - 1
    actualizarCount(count)
  }


  return (
    <div>
      <h1>Conteo Actual</h1>
      <span>{count}</span>
      <br/>
      <button onClick={agregarConteo}>+</button>
      <button onClick={quitarConteo}>-</button>
    </div>
  )
}

function App() {

  const librosNiko = [
    {
      titulo: '120 dias en sodoma',
      año: 2020 
    },
    {
      titulo: '130 dias en sodoma',
      año: 2020 
    },
    {
      titulo: '150 dias en sodoma',
      año: 2020 
    },
    {
      titulo: '170 dias en sodoma',
      año: 2020 
    },
  ]

  const librosWilly = [
    {
      titulo: '120 dias en sodoma',
      año: 2020 
    },
    {
      titulo: '130 dias en sodoma',
      año: 2020 
    },
  ]

  return (
    <>
      <Autor  nombre="Niko" edad={25} libros={librosNiko} />
      <Autor nombre="Willy" edad={10} libros={librosWilly} />
      <Counter />
    </>
  );
}

//Tengo un formulario donde tengo los datos de un libro 
//llenas datos del libro
//cuando tocas el boton de agregar elijas primero el autor, en un combobox
//Agregar Libro



export default App
