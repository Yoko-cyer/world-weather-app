
const Form = ({city, setCity, getWeather}) => {
  
  return (
    <form onSubmit={getWeather} setCity={setCity} city={city}>
      <input type="text" name="city" placeholeder="place name" onChange={e => setCity(e.target.value)} value={city}/>
      <button type="submit">Get Weather</button>
    </form>
  )
}

export default Form