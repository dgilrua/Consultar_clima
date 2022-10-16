import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import useClima from '../hooks/useClima'

const AppClima = () => {

  const {resultado} = useClima()

  return (
    <>
        <main className='principal'>
            <Formulario />

            {resultado?.id && <Resultado />}
        </main>
    </>
  )
}

export default AppClima