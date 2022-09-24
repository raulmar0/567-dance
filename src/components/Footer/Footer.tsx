import './Footer.css'
import PlayButton from '../../assets/play.png'

export default function Footer() {
  return (
    <footer>
      <div className="bpm">
        120 bpm
      </div>
      <div className="bpm-slider">
        <input type="range" />
      </div>
      <div className="toggle-reproduction">
        <img src={PlayButton} alt=""/>
      </div>
    </footer>
  )
}