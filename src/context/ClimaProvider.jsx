import axios from 'axios'
import {createContext, useState} from 'react'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {
    
    const [datos, setDatos] = useState({
        ciudad: '',
        pais: ''
    })

    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState({})

    const llamadoApi = async () => {
        setCargando(true)
        try {
            const {ciudad, pais} = datos
            const apiKey = import.meta.env.VITE_API_KEY
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${apiKey}`

            const {data} = await axios(url)
            setError('')
            const {lat, lon} = data[0]

            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`
            const {data: clima} = await axios(url2)

            setResultado(clima)

        } catch (error) {
           setError('Ciudad no encontrada')
        }
        setCargando(false)
    }

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
            datos,
            llamadoApi,
            resultado,
            cargando,
            error
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