import {createContext, useContext, useState} from 'react'

const myContext = createContext();

export const useCode = () => useContext(myContext);

const CurrencyProvider = ({children}) => {

    const [code, setCode] = useState('USD')

    const changeCode = (code) => {
        setCode(code)
    }

    return <myContext.Provider value={{code, changeCode}}>
        {children}
    </myContext.Provider>
}

export default CurrencyProvider;