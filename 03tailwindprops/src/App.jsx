import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name:"ashish"
    ,age:21
  }
  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-md">Tailwind Test</h1>
      <Card username ="ashish" btnText="visit me"/>
      <Card username="aman" btnText="asian"/>
    </>
  );
}

export default App
