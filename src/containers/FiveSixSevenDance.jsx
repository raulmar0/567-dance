import './FiveSixSevenDance.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Instruments from './Instruments/Instruments';
import { useState } from 'react';
import { SideMenu } from '../components/SideMenu/SideMenu';
import { useMyContext } from '../providers/SoundsProvider';

export default function FiveSixSevenDance() {
  const [menuState, setMenuState] = useState('close-menu')
  const getMenuState = (menuState) => {
    setMenuState(menuState)
  }
  const [state] = useMyContext();
  console.log(state)
  return (
    <>
      <div className="main-container">
        <div className="five-six-seven-dance-container">
          <Header onClick={getMenuState}/>
          <Instruments />
          <Footer />
          {
            menuState === 'hamburguer-menu' ? <SideMenu /> : null
          }
        </div>
      </div>
    </>
  )
}