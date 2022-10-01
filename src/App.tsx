import FiveSixSevenDance from "./containers/FiveSixSevenDance";
import SoundsProvider from "./providers/SoundsProvider";

export default function App() {
  return (
    <>
    <SoundsProvider>
      <FiveSixSevenDance />
    </SoundsProvider>
    </>
  )
}