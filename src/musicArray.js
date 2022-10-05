import {Howl, Howler} from 'howler';
import ClaveSound from './assets/clave6.wav'
import CowbellSound from './assets/cowbell-latin-hit.wav'
import Guiro from './assets/guiro.wav'
import ShortGuiro from './assets/short-guiro.wav'
import Bongo from './assets/bongo.wav'
import ShortBongo from './assets/short-bongo.wav'
import Bass from './assets/bass.wav'
import { Capacitor } from '@capacitor/core';


let bell = new Howl({
  src: [CowbellSound]
});
let clave = new Howl({
  src: [ClaveSound]
});
let guiro = new Howl({
  src: [Guiro],
})
let shortguiro = new Howl({
  src: [ShortGuiro]
})
let bongo = new Howl({
  src: [Bongo]
})
let shortbongo = new Howl({
  src: [ShortBongo]
})
let bass = new Howl({
  src: [Bass]
})


if ('speechSynthesis' in window) {
  var msg = new SpeechSynthesisUtterance();
  var synth = window.speechSynthesis;
}
let rate = 1;
let volume = 1;
let activeNumbers = [];

const dynamicRate = (bpm) => {
  if(window.innerWidth < 500) {
    return bpm > 190 ? 2 : 1
  }
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
  if(bpm >= 170 && bpm <= 190) {
    return 3.2
  }
  if(bpm > 190 && bpm <= 260) {
    return 3.8
  }
}

const msgVolume = (volumen, active) => {
  volume = volumen / 100 * active;
}

const setActiveNumbers = (array) => {
  activeNumbers = array
}

const guiroVolume = (volume) => {
  guiro.volume(volume);
  shortguiro.volume(volume)
}

const tumbaoVolume = (volume) => {
  bongo.volume(volume);
  shortbongo.volume(volume);
}

export const MusicArrayFun = ({state}) => {
  bell.volume(state.cowbellVolume / 100 * state.cowbell)
  clave.volume(state.claveVolume / 100 * state.clave)
  guiroVolume(state.guiroVolume / 100 * state.guiro)
  tumbaoVolume(state.tumbaoVolume / 100 * state.tumbao)
  bass.volume(state.bassVolume / 100 * state.bass)
  console.log(state)
  rate = dynamicRate(state.bpm);
  msgVolume(state.voiceVolume, state.voice);
  setActiveNumbers(state.numbersArray)
  return null
}


function voice(number) {
  if(!activeNumbers.includes(number)) {
    return
  }
  if (synth.speaking) {
    synth.cancel();
  }
  msg.text = number;
  msg.rate = rate;
  msg.volume = volume;
  msg.lang = 'en-us'
  window.speechSynthesis.speak(msg); 
}

export const musicArray = [
  // 1.1
  {
    fun: () => {
      voice(1)
      bell.play() 
      guiro.play()
    }
  },
  // 1.2
  {
    fun: () => {
    }
  },
  // 2.1
  {
    fun: () => {
      voice(2)
      clave.play()
      shortguiro.play()
      shortbongo.play()

    }
  },
  // 2.2
  {
    fun: () => {
      shortguiro.play()

    }
  },
  // 3.1
  {
    fun: () => {
      voice(3)
      clave.play()
      bell.play()
      guiro.play()

    }
  },
  // 3.2
  {
    fun: () => {
    }
  },
  // 4.1
  {
    fun: () => {
      voice(4)
      shortguiro.play()
      bongo.play()
      bass.play()
    }
  },
  // 4.2
  {
    fun: () => {
      shortguiro.play()
      bongo.play()
    }
  },
  // 5.1
  {
    fun: () => {
      voice(5)
      clave.play()
      bell.play()
      guiro.play()
    }
  },
  // 5.2
  {
    fun: () => {
    }
  },
  // 6.1
  {
    fun: () => {
      voice(6)
      shortguiro.play()
      shortbongo.play()

    }
  },
  // 6.2
  {
    fun: () => {
      clave.play()
      shortguiro.play()
    }
  },
  // 7.1
  {
    fun: () => {
      voice(7)
      bell.play()
      guiro.play()

    }
  },
  // 7.2
  {
    fun: () => {
    }
  },
  // 8.1
  {
    fun: () => {
      voice(8)
      clave.play()
      shortguiro.play()
      bongo.play()
      bass.play()
    }
  },
  // 8.2
  {
    fun: () => {
      shortguiro.play()
      bongo.play()
    }
  },

]

