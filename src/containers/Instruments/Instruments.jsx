import './Instruments.css'
import Instrument from '../../components/Instrument/Instrument'
import VoiceComponent from '../../components/VoiceComponent/VoiceComponent'
import Clave from '../../assets/001-claves.png'
import Guiro from '../../assets/003-guiro.png'
import Bass from '../../assets/005-guitar.png'
import Tumbao from '../../assets/007-bongo.png'
import CowBell from '../../assets/010-cow-bell-1.png'
import { SideMenu } from '../../components/SideMenu/SideMenu'
import { MusicArrayFun } from '../../musicArray'
import { useMyContext } from '../../providers/SoundsProvider'

export default function Instruments() {
  const [state,setState] = useMyContext();
  const instrumentsArray = [Clave, CowBell, Guiro, Tumbao, Bass];
  const instrumentsStrings = ['clave', 'cowbell', 'guiro', 'tumbao', 'bass'];
  return (
    <main>
      {
        instrumentsArray.map((instrument, index) => {
          return <Instrument 
                  key={index} 
                  instrumentString={instrumentsStrings[index]} 
                  instrument={instrument}
                  />
        })
      }
      {
        <VoiceComponent />
        // Capacitor.getPlatform() === 'android' ? null : <VoiceComponent />
      }
      <MusicArrayFun state={state}/>
    </main>
  )
}