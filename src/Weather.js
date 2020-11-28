import React, {useState} from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'

function Weather() {
    const [country,setCountry]=useState("");
    const [city,setCity]=useState("");
    const [weatherstate,setWeatherState]=useState("");
    const [state, setState]= useState("");
    
    const handleCountryInput = (event) => {
        setCountry(event.target.value);
      };

      const handleCityInput = (event) => {
        setCity(event.target.value);
      };
      
      const handleReset=() => {
        (document.querySelectorAll('input')).forEach(
          input => (input.value="")
        )
        setState({itemvalues :[{}]
        });
      }
      
      const getWeatherState=(event) =>{
        event.preventDefault()
          if (country && city)
          axios.get(`http://api.weatherstack.com/current?access_key=72a4bbc38db417f663dcbb6939c55c60&query=${country},${city}`)
          .then((res) => {
              console.log(res)
              setWeatherState(res.data)
          })
      }

    return (
        <div>
          <Form>
              <Form.Group onChange={handleCountryInput}>
                  <Form.Label>{country}</Form.Label>
                  <Form.Control type="text" placeholder="Country"/>
              </Form.Group>
              <Form.Group onChange={handleCityInput}>
                  <Form.Label>{city}</Form.Label>
                  <Form.Control type="text" placeholder="City"/>
              </Form.Group>
              <Button onClick={handleReset}>Reset</Button>
              <Button type="submit" onClick={getWeatherState}>Search</Button>
            </Form>
            <p>Hello,{city} can be found in {country}</p>  
            <p>{` hello, ${city} in ${country} is avery nice place to bring your family for a vacation`}</p>
            {
              weatherstate &&(<div>
                <h1>{weatherstate.location.country}</h1>
                <h3>{weatherstate.location.name}</h3>
                <h4>{weatherstate.location.region}</h4>
                <img src={weatherstate.current.weather_icons} alt=""/>

              </div> )
            }
        </div>
    )
}

export default Weather
