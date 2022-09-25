import { useState } from 'react'
import './Header.css'

export default function Header(props: any) {
  const [menuState, setMenuState] = useState('hamburguer-menu')

  function toggleMenuState() {
    setMenuState(menuState === 'hamburguer-menu' ? 'close-menu' : 'hamburguer-menu'),
    props.onClick(menuState)
  }

  return (
  <header>
    <h1 className="header-title">567 Dance! 💃🕺</h1>
    <div onClick={toggleMenuState}>
      <div className={menuState}></div>
    </div>
  </header>
  )
}