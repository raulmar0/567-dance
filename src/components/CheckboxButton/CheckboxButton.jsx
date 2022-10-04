import './CheckboxButton.css'
import { useMyContext } from '../../providers/SoundsProvider'

export default function CheckboxButton({ placeholder, numberString }) {
  const [state,setState] = useMyContext();
  const handleClick = () => {
    setState({
      ...state,
      numbersArray: state.numbersArray.includes(numberString) ? state.numbersArray.filter((number) => number !== numberString) : [...state.numbersArray, numberString]
    });
  }
  return (
    <div>
      <input type="checkbox" onClick={handleClick} name="" id={placeholder} className="offscreen" />
      <label htmlFor={placeholder} className="counter-button">{ placeholder }</label>
    </div>
  )
}