import {useState} from 'react'
import useClima from '../hooks/useClima'

const Formulario = () => {

    const {datosBusqueda, datos} = useClima()

    const [alerta, setAlerta] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta('')
    }

  return (
    <div className='izquierdo'>
        <h1>Buscador de clima</h1>
        <form action=""
            onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    name="ciudad" 
                    id="ciudad"
                    placeholder='Escribe el nombre de una ciudad'
                    value={datos.ciudad}
                    onChange={e => datosBusqueda(e)} 
                />
            </div>
            <div className='select'>
                <label htmlFor="pais">Pais</label>
                <select 
                    name="pais" 
                    id="pais"
                    value={datos.pais}
                    onChange={e => datosBusqueda(e)}
                >
                    <option value="">Seleccione un pais</option>
                    <option value="CO">Colombia</option>
                    <option value="US">Estados Unidos</option>
                    <option value="AR">Argentina</option>
                    <option value="MX">Mexico</option>
                    <option value="ES">España</option>
                    <option value="CA">Canada</option>
                </select>
            </div>

            <input 
                type="submit" 
                value='Consultar Clima' 
            />
        </form>

        {alerta && <p className='alerta'>{alerta}</p>}
    </div>
  )
}

export default Formulario