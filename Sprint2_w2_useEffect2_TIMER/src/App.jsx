import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Timer} from "./components/Timer"
function App() {
  
  const [show, setShow] = useState(true)
  return (
    <div className="App">
    {show?<Timer/>:""}
     <button
     onClick={()=>{


      // l.ehdouehd
      setShow(!show)
      
     }}
     >  {show?"hide timer":"show timer"}</button>
    </div>
  )
}

export default App
