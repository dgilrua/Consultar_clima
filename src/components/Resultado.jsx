import useClima from "../hooks/useClima"

const Resultado = () => {

    const {resultado} = useClima()
    const {main, name, weather} = resultado

  return (
    <div className="contenedor__resultado">
        <h1 className="heading">Clima de {name}</h1>
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="" />
    </div>
  )
}

export default Resultado    