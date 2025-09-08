import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TypesExample from './compoment/Excercite1';
import SizesExample from './compoment/Excercite2';
// import BasicExample from './compoment/Excercite3';
import BasicButtonExample from './compoment/Excercite4';
// import BasicExample from './compoment/Excercite5';
import VariantsExample from './compoment/Excercite6';
import BasicExample from './compoment/Excercite7';
import FormExample from './compoment/Excercite8';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormExample></FormExample>
    </>
  )
}

export default App
