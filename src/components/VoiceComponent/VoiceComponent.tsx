import Voice from '../../assets/011-voice.png'
import Instrument from '../Instrument/Instrument'
import CheckboxButton from '../CheckboxButton/CheckboxButton'
import './VoiceComponent.css'

export default function VoiceComponent() {
  const buttons = [1,2,3,4,5,6,7,8];
  return (
    <div className="voice">
      <Instrument instrument={Voice} />
      <div className="counter-buttons">
        {
          buttons.map((button, index) => {
            return <CheckboxButton placeholder={button} key={index} />
          })
        }
      </div>
    </div>
  )
}
