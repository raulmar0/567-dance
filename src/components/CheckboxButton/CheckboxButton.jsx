import './CheckboxButton.css'
import { useMyContext } from '../../providers/SoundsProvider'

export default function CheckboxButton({ placeholder, numberElement }) {
  const [state,setState] = useMyContext();
  const handleClick = () => {
    setState({
      ...state,
      numbersArray: state.numbersArray.includes(numberElement) ? state.numbersArray.filter((number) => number !== numberElement) : [...state.numbersArray, numberElement]
    });
  }
  return (
    <div>
      <input type="checkbox" onClick={handleClick} name="" id={placeholder} className="offscreen" />
      <label htmlFor={placeholder} className="counter-button">{ placeholder }</label>
    </div>
  )
}