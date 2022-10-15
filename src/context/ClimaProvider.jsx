import {createContext, useState} from 'react'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {
    
    const [datos, setDatos] = useState({
        ciudad: '',
        pais: ''
    })

    const datosBusqueda = e => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

  return (
    <ClimaContext.Provider
        value={{
            datosBusqueda,
            datos
        }}
    >
        {children}
    </ClimaContext.Provider>
  )
}

export default ClimaContext
export {
    ClimaProvider
}