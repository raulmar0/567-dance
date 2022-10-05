import { Capacitor } from "@capacitor/core";
import FiveSixSevenDance from "./containers/FiveSixSevenDance";
import SoundsProvider from "./providers/SoundsProvider";

if(Capacitor.getPlatform() === "web"){
  document.getElementById("check").style.overscrollBehavior = "initial";
  document.getElementById("check").style.position = "initial";
}


export default function App() {
  return (
    <>
    <SoundsProvider>
      <FiveSixSevenDance />
    </SoundsProvider>
    </>
  )
}