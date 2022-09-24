import './CheckboxButton.css'

export default function CheckboxButton({ placeholder } : any) {
  return (
    <div>
      <input type="checkbox" name="" id={placeholder} className="offscreen" />
      <label htmlFor={placeholder} className="counter-button">{ placeholder }</label>
    </div>
  )
}