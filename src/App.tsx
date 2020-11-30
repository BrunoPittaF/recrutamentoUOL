import React from 'react';
import Home from './Pages/Home';
import {GlobalStyle} from './Assets/styles/global';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Home/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
