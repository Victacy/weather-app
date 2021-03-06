import React, {useState} from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'

function Weather() {
    const [country,setCountry]=useState("");
    const [city,setCity]=useState("");
    const [weatherstate,setWeatherState]=useState("");
    //const [redo,setRedo]=useState(10);
   
    const handleCountryInput = (event) => {
        setCountry(event.target.value);
      };

      const handleCityInput = (event) => {
        setCity(event.target.value);
      };
        //setRedo(redo+1);
      
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
        <div className="weath">
          <center>
            <h2>Check the weather of the place you want</h2>
          </center>
          <Form classNam="title">
              <Form.Group className="auth" onChange={handleCountryInput}>
                  <Form.Label className="index"></Form.Label>
                  <Form.Control type="text" placeholder="Country"/>
              </Form.Group>
              <Form.Group className="auth" onChange={handleCityInput}>
                  <Form.Label className="index"></Form.Label>
                  <Form.Control type="text" placeholder="City"/>
              </Form.Group><br/>
              <center>
              <Button type="reset" style={{marginRight: 10 }}>Reset</Button>
              <Button type="submit" onClick={getWeatherState}>Search</Button>
              </center>
            </Form>
            <br/>
            {
              weatherstate &&(<div className="app">
                <span className="app"><h1>{weatherstate.request.query}</h1>
                <h3>{weatherstate.location.lat}
               <p> {weatherstate.location.localtime}</p></h3>
                <h4>{weatherstate.current.temperature}</h4>
                <h5>{weatherstate.current.weather_descriptions}</h5></span>

                <img src={weatherstate.current.weather_icons} alt=""/>

              </div> )
            }
            
        </div>
    )
}

export default Weather
