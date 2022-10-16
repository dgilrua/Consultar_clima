import useClima from "../hooks/useClima"

const Resultado = () => {

    const {resultado, error} = useClima()
    const {main, name, weather} = resultado
    const {description, icon} = weather[0]

  return (
    <div className="contenedor__resultado">
        {error ? <p className="error">{error}</p> : (
            <>
                <h1 className="heading">Clima de {name}</h1>
                <div className="resultado__grid">
                    <div className="resultado__imagen">
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                        <p>{description}</p>
                    </div>
                    <div className='resultado__valores'>
                        <h2>{main.temp} <span className="span_valores">&#8451;</span></h2>
                        <div className="valores__flex">
                            <p><span className="categoria">Max:</span> {main.temp_max}<span className="grados">&#8451;</span></p>
                            <p><span className="categoria">Min:</span> {main.temp_min}<span className="grados">&#8451;</span></p>
                            <p><span className="categoria">Humedad:</span> {main.humidity}%</p>
                        </div>
                    </div>
                </div>
            </>
        )}
    </div>
  )
}

export default Resultado    