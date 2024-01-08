import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import "./style.css"

const defaultweight = 50
const defaultheight = 150

const App = () => {
  const [height, setheight] = useState(defaultheight)
  const [weight, setweight] = useState(defaultweight)

  const onheightchange = (event) => {
    const inputheight = event.target.value
    setheight(inputheight)
  }

  const onweightchange = (event) => {
    const inputweight = event.target.value
    setweight(inputweight)
  }

  const output = useMemo(() => {
    const calculatedheight = height/100
    return (weight/(calculatedheight*calculatedheight)).toFixed(1)
  }, [weight, height])

  return (
    <main>
      <h1>Project 7: BMI CALCULATOR</h1>
      <div className="input-section">
        <p class="slider-output">Weight: {weight} kg</p>
        <input className="input-slider" onChange={ onweightchange } type="range" step="1" min="40" max="220" />
        <p class="slider-output">Height: {height} cm</p>
        <input className="input-slider" onChange={ onheightchange } type="range" min="140" max="220" />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  )
}

export default App