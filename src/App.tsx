import { useState } from 'react'
import './App.css'
import Light from "./components/light"

function App() {
  const colors = ['red', 'yellow', 'lime']
  const [activeLight, setActiveLight] = useState<string | null>()

  return (
    <div className="App">
      {colors.map((color, index) => {
        return <Light color={color} colorName={color} index={index} active={activeLight === color} onClick={() => { activeLight === color ? setActiveLight(null) : setActiveLight(color) }} />
      })}
    </div>
  )
}
export default App
