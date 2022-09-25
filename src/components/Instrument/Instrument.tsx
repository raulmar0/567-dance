import { useState } from 'react'
import './Instrument.css'

export default function Instrument({ instrument } : any) {
  const [isChecked, setIsChecked] = useState(true)

  function toggleCheckbox() {
    setIsChecked(!isChecked)
  }

  return (
    <article>
      <figure>
        <img src={instrument} alt="" />
      </figure>
      <div className="toggle-mute">
        <input type="checkbox" name="" id={instrument} className="offscreen" checked={isChecked} onInput={toggleCheckbox}/>
        <label htmlFor={instrument} className="switch"></label>
      </div>
      <div className="volume-slider">
        <input type="range" />
      </div>
    </article>
  )
}