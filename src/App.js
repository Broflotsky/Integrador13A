import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import { ROUTES } from './helpers/RoutesPath';


function App() {

   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => {
         return char.id !== Number(id)
      }))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path={ROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
         </Routes>

      </div>
   );
}

export default App;
