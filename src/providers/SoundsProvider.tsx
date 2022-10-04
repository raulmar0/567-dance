import {createContext,useContext,useState} from 'react';

export const AppContext = createContext({});
export const useMyContext = () => useContext(AppContext);

const SoundsProvider = ({ children }: any) =>{

    const [state,setState] = useState({
        "clave": true,
        "claveVolume": 50,
        "cowbell": true,
        "cowbellVolume": 50,
        "bpm": 120,
    });
    return (            
            <AppContext.Provider value={ [state,setState] }>
                {children}
            </AppContext.Provider>  
    );
}

export default SoundsProvider;