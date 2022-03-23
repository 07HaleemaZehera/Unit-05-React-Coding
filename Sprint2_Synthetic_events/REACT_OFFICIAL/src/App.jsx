import { useState } from 'react'
import logo from './logo.svg'

import {Form} from "./components/Form"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Form/>

       
    </div>
  )
}
export default  App