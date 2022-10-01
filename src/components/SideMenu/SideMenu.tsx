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
            <div className='flash-ditto animated'>
              <h1>Resources</h1>
            </div>
          </div>
        : null
      }
      {
        selection === 'about' ? 
          <div className='side-menu-secondary'>
            <div className='flash-ditto animated'>
              <h1>About</h1>
            </div>
          </div>
        : null
      }
    </div>
    </>
  )
}

export {SideMenu}