import React, {useState} from 'react'
import './Wapp.css'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'

function Home() {
   //let arr1 =[1,2,3]
    //let arr2=[...arr1,4,5]
    //console.log(arr2)

    //let arr3=[6,7,8];
    //let arr4=[9,0]
    //arr3=[...arr3,...arr4]
    //console.log(arr3);
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
          if (country==="Ghana" && city==="Accra")
          axios.get(`http://api.weatherstack.com/current?access_key=72a4bbc38db417f663dcbb6939c55c60&query=${country},${city}`)
          .then((res) => {
              console.log(res)
              setWeatherState(res.data)
          })
      }

    return (
        <div className="bg">
            <p>Welcome home</p>
            <Form >
              <Form.Group onChange={handleCountryInput}>
                  <Form.Label>{country}</Form.Label>
                  <Form.Control type="text" placeholder="Country"/>
              </Form.Group>
              <Form.Group onChange={handleCityInput}>
                  <Form.Label>{city}</Form.Label>
                  <Form.Control type="text" placeholder="City"/>
              </Form.Group>
              <Button type="submit" onClick={getWeatherState}>Search</Button>
            </Form>
            <p>Hello,{city} can be found in {country}</p>  
            <p>{` hello, ${city} in ${country} is avery nice place to bring your family for a vacation`}</p>
            {
              weatherstate &&(<div className="app">
                <span className="app"><h1>{weatherstate.location.country}</h1>
                <h3>{weatherstate.location.name}</h3>
                <h4>{weatherstate.location.region}</h4></span>
                <img src={weatherstate.current.weather_icons} alt=""/>

              </div> )
            }

        </div>
    )
}

export default Home
