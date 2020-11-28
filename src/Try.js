import React, {useState} from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'

function Try() {
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
            
          })
      }

    return (
        <div>
          <Form >
              <Form.Group onChange={handleCountryInput}>
                  <Form.Label>{country}</Form.Label>
                  <Form.Control type="text" placeholder="Country"/>
              </Form.Group>
              <Form.Group onChange={handleCityInput}>
                  <Form.Label>{city}</Form.Label>
                  <Form.Control type="text" placeholder="City"/>
              </Form.Group>
              <Button type="reset" >Reset</Button>
              <Button type="submit" onClick={getWeatherState}>Search</Button>
            </Form>
            <p>Hello,{city} can be found in {country}</p>  
            <p>{` hello, ${city} in ${country} is avery nice place to bring your family for a vacation`}</p>
        </div>
    )
}

export default Try
