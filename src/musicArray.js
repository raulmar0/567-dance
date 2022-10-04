import {Howl, Howler} from 'howler';
import ClaveSound from './assets/clave6.wav'
import CowbellSound from './assets/cowbell-latin-hit.wav'

let bell = new Howl({
  src: [CowbellSound]
});
let sound = new Howl({
  src: [ClaveSound]
});
let msg = new SpeechSynthesisUtterance();
let synth = window.speechSynthesis;
let rate = 1;

const dynamicRate = (bpm) => {
  bpm = parseInt(bpm)
  if(bpm >= 40 && bpm < 90) {
    return 1
  }
  if(bpm >= 90 && bpm < 140) {
    return 2
  }
  if(bpm >= 140 && bpm < 170) {
    return 3
  }
  if(bpm > 170 && bpm <= 190) {
    return 3.2
  }
  if(bpm > 190 && bpm <= 260) {
    return 3.8
  }
}

export const MusicArrayFun = ({state}) => {
  bell.volume(state.cowbellVolume / 100 * state.cowbell)
  sound.volume(state.claveVolume / 100 * state.clave)
  console.log(state)
  rate = dynamicRate(state.bpm);
  return null
}


function voice(number) {
  if (synth.speaking) {
    synth.cancel();
  }
  msg.text = number;
  msg.rate = rate
  window.speechSynthesis.speak(msg); 
}

export const musicArray = [
  // 1.1
  {
    fun: (counter) => {
      voice('one')
      bell.play() 
    }
  },
  // 1.2
  {
    fun: (counter) => {
    }
  },
  // 2.1
  {
    fun: (counter) => {
      voice('two')
      sound.play()
      

    }
  },
  // 2.2
  {
    fun: (counter) => {
    }
  },
  // 3.1
  {
    fun: (counter) => {
      voice('three')
      sound.play()
      bell.play()
    }
  },
  // 3.2
  {
    fun: (counter) => {
    }
  },
  // 4.1
  {
    fun: (counter) => {
      voice('four')


    }
  },
  // 4.2
  {
    fun: (counter) => {
    }
  },
  // 5.1
  {
    fun: (counter) => {
      voice('five')
      sound.play()
      bell.play()
    }
  },
  // 5.2
  {
    fun: (counter) => {
    }
  },
  // 6.1
  {
    fun: (counter) => {
      voice('six')
    }
  },
  // 6.2
  {
    fun: (counter) => {
      sound.play()
    }
  },
  // 7.1
  {
    fun: (counter) => {
      voice('seven')
      bell.play()
    }
  },
  // 7.2
  {
    fun: (counter) => {
    }
  },
  // 8.1
  {
    fun: (counter) => {
      voice('eight')
      sound.play()
    }
  },
  // 8.2
  {
    fun: (counter) => {
    }
  },

]

