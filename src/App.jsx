import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Card from './components/Card'
import Tugas from './components/TugasKel14';


function App() {

  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App">

        <Tugas />

      </div>
    </>
  )
}

export default App
