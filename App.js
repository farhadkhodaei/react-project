import { Component } from 'react';
import './App.css';
import { Route, Routes  } from 'react-router-dom';
import {Welcome} from './Components/Welcome';
import { MyLink } from './Components/MyLink';


function App () {
  return (
      <div className="App">
        <Routes>
          <Route path='/Welcome' element={<Welcome/>} />
          <Route path='/MyLink' element={<MyLink/>} />
          <Route path='/' element={<MyLink/>} />
        </Routes>
     </div>
  );
}

export default App;
   