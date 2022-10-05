import { useEffect, useState } from 'react'
import './SideMenu.css'

const SideMenu = () => {
  const [selection, setSelection] = useState('menu')
  return (
    <>
    <div>
      {
        selection === 'menu' ? 
          <div className='side-menu flash-ditto animated'>
            <div className='menu-item' onClick={() => setSelection('resources')}>Resources</div>
            <div className='menu-item' onClick={() => setSelection('about')}>About</div>
          </div>
        : null
      }
      {
        selection === 'resources' ? 
          <div className='side-menu-secondary  '>
            <div className='content flash-ditto animated'>
              <h1>Resources</h1>
              <ul>
                <li>
                  <a href="https://www.facebook.com/1177459290/videos/737789837402551/">Anichi Perez musicality lesson</a>
                </li>
                <li>
                  <a href="https://music.youtube.com/playlist?list=PLsDpnyqf8td1lv-8rSaeGsIWvk6mY-cv2">My personal playlist</a>
                </li>
              </ul>
            </div>
          </div>
        : null
      }
      {
        selection === 'about' ? 
          <div className='side-menu-secondary'>
            <div className='content flash-ditto animated'>
              <h1>About ℹ️</h1>
              <p>Hello! raulmar here :) I have developed this application with ♥️ for you to a blast learning and practicing your Latin rhythmic skills. You can <strong>contact me</strong> on <a href="https://raulmar.me"><strong>raulmar.me</strong></a></p>
              <p>First, you have the instrument components, which consist of a mute/unmute switch and a volume slider, with the only exception of the voice component, as I have added counter buttons so you can choose the desired count. Also, at the bottom you have the rhythm controls to control the speed.</p>
              <p>On the technical side, the used tools were: <strong>React</strong> with <strong>TypeScript</strong> for the UI, <strong>Vite</strong> as bundler, <strong>HowlerJS</strong> for managing the audio and <strong>Capacitor</strong> for the mobile apps</p>
            </div>
          </div>
        : null
      }
    </div>
    </>
  )
}

export {SideMenu}