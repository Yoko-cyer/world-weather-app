import { useState } from "react"
import axios from "axios"
import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';
import Loading from "./components/Loading";

function App() {

  const [loading, setLoading] = useState(false)
  const [city, setCity] = useState("")
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })

  const getWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(`http://api.weatherapi.com/v1/current.json?key=343a8c615942403699b120523212410&q=${city}&aqi=no`)
    .then(res => {
      setResults({
        country: res.data.location.country,
        cityName: res.data.location.name,
        temperature: res.data.current.temp_c,
        conditionText: res.data.current.condition.text,
        icon: res.data.current.condition.icon
      })
      setCity("")
      setLoading(false)
    })
    .catch(err => alert ("Error happened. Please reload the page to try again"))
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather}/>
        <Results results= {results}/>
        {loading ? <Loading /> : <Results results={results}/>}
      </div>
    </div>
  );
}

export default App;
