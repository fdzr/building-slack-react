import React from 'react';
import './App.css';
import './index.css';

import {BrowserRouter,
       Routes, 
       Route} from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <>
          <Header/>
          <div className='flex h-[100vh]'>
            <Sidebar/>
            <Routes>
                <Route path="/"/>
              </Routes>
          </div>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
