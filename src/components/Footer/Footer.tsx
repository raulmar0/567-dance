import './Footer.css'
import PlayButton from '../../assets/play.png'
import { useState } from 'react'

export default function Footer() {
  const [count, setCount] = useState('120')

  function handleChange(event: any) {
    setCount(event.target.value)
  }

  return (
    <footer>
      <div className="bpm">
        <input type="number" value={count} onInput={handleChange}/>
        bpm
      </div>
      <div className="bpm-slider">
        <input type="range" onChange={handleChange} value={count} min="40" max="250" step="10"/>
      </div>
      <div className="toggle-reproduction">
        <img src={PlayButton} alt=""/>
      </div>
    </footer>
  )
}