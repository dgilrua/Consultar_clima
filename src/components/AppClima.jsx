import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import useClima from '../hooks/useClima'
import Spinner from './Spinner'

const AppClima = () => {

  const {resultado, cargando, error} = useClima()

  return (
    <>
        <main className='principal'>
            <Formulario />

            {cargando ? <Spinner /> : resultado.id ? <Resultado /> : null}
        </main>
    </>
  )
}

export default AppClima