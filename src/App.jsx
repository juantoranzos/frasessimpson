import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logosimpson.png'
import { Container, Button } from 'react-bootstrap';
import Frase from './components/Frase';
import { useEffect, useState } from 'react';


function App() {
  const [personaje, setPersonaje] = useState({});
  useEffect (()=>{
   consultarAPI()
  },[])
  const consultarAPI = async ()=>{
    //realizar una peticion get
    //https://thesimpsonsquoteapi.glitch.me/quotes
    try{
      const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      const dato = await respuesta.json()
      console.log(respuesta)
      console.log(dato[0])
      setPersonaje(dato[0])
    }catch(error){
      console.log(error);
    }
    

  }
  return (
    <>
<Container className='text-center my-5'>
      <img src={logo} alt="logo de los simpson"  className='w-50'/>
      <Frase personaje ={personaje}/>
      <Button variant='warning' onClick={consultarAPI}> Obtener frase</Button>
  
</Container>

    </>
  )
}

export default App

