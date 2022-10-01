import { useState, useContext } from 'react'
import './Instrument.css'
import { AppContext, useMyContext } from '../../providers/SoundsProvider'

export default function Instrument({ instrument, instrumentString }) {
  const [isChecked, setIsChecked] = useState(true)
  const [state,setState] = useMyContext();

  function toggleCheckbox() {
    setIsChecked(!isChecked)
  }

  return (
    <article>
      <figure>
        <img src={instrument} alt="" />
      </figure>
      <div className="toggle-mute">
        <input type="checkbox" name="" id={instrument} className="offscreen" checked={isChecked} readOnly onInput={toggleCheckbox}
        onClick={() => {
          setState({ ...state, [instrumentString]: !isChecked })
        }}/>
        <label htmlFor={instrument} className="switch"></label>
      </div>
      <div className="volume-slider">
        <input type="range" onInput={(e) => {
          setState({ ...state, [instrumentString + 'Volume']: e.target.value })
        }} step="10" />
      </div>
    </article>
  )
}