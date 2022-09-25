import './Instruments.css'
import Instrument from '../../components/Instrument/Instrument'
import VoiceComponent from '../../components/VoiceComponent/VoiceComponent'
import Clave from '../../assets/001-claves.png'
import Guiro from '../../assets/003-guiro.png'
import Bass from '../../assets/005-guitar.png'
import Tumbao from '../../assets/007-bongo.png'
import CowBell from '../../assets/010-cow-bell-1.png'
import { SideMenu } from '../../components/SideMenu/SideMenu'


export default function Instruments() {
  const instrumentsArray = [Clave, Guiro, Bass, Tumbao, CowBell];
  return (
    <main>
      {
        instrumentsArray.map((instrument, index) => {
          return <Instrument key={index} instrument={instrument} />
        })
      }
      <VoiceComponent />
    </main>
  )
}