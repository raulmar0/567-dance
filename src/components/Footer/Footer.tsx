import './Footer.css'
import PlayButton from '../../assets/play.png'
import PauseButton from '../../assets/pause.png'
import { useEffect, useRef, useState } from 'react'
import { musicArray } from '../../musicArray'

// fix: bpm is not real time

const MINUTE_IN_MS = 60 * 1000;
const NUMBER_OF_BEATS = 8;
const NUMBER_OF_SUBBEATS = 2;
const COUNT_LIMIT = NUMBER_OF_BEATS * NUMBER_OF_SUBBEATS;

export default function Footer() {
  const [bpm, setBpm] = useState('120')
  const [isPlaying, setIsPlaying] = useState(false)
  const [counter, setCounter] = useState(0)

  let timer = null

  useEffect(() => {
    if(!isPlaying) {
      clearInterval(timer)
    } else {
      timer = setInterval(tick, realBpm);
    }
    return () => clearInterval(timer);
  },);

  useEffect(() => {
    if(counter === COUNT_LIMIT) {
      setCounter(0)
    }
  }, [counter])


  let realBpm = ((MINUTE_IN_MS)/parseInt(bpm))/NUMBER_OF_SUBBEATS;


  function handleChange(event: any) {
    setBpm(event.target.value)
    realBpm = ((MINUTE_IN_MS)/parseInt(bpm))/NUMBER_OF_SUBBEATS;

    if(isPlaying) {
      clearInterval(timer)
    }
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)  
  }

  const tick = () => {
    musicArray[counter].fun()
    setCounter(counter + 1);
    console.log(counter)
  }

  return (
    <footer>
      <div className="bpm">
        <input type="number" value={bpm} onInput={handleChange}/>
        bpm
      </div>
      <div className="bpm-slider">
        <input type="range" onChange={handleChange} value={bpm} min="40" max="250" step="5"/>
      </div>
      <div className="toggle-reproduction" onClick={togglePlay}>
        <img src={isPlaying ? PauseButton : PlayButton} alt=""/>
      </div>
    </footer>
  )
}