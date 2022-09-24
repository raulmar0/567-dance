import './Instrument.css'

export default function Instrument({ instrument } : any) {
  return (
    <article>
      <figure>
        <img src={instrument} alt="" />
      </figure>
      <div className="toggle-mute">
        <input type="checkbox" name="" id={instrument} className="offscreen" />
        <label htmlFor={instrument} className="switch"></label>
      </div>
      <div className="volume-slider">
        <input type="range" />
      </div>
    </article>
  )
}