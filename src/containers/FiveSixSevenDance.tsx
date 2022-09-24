import './FiveSixSevenDance.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Instruments from './Instruments/Instruments';


export default function FiveSixSevenDance() {
  return (
    <>
      <div className="main-container">
        <div className="five-six-seven-dance-container">
          <Header />
          <Instruments />
          <Footer />
        </div>
      </div>
    </>
  )
}