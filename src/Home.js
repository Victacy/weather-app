import React, {useState} from 'react'
import './Wapp.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap'

function Home() {
   //let arr1 =[1,2,3]
    //let arr2=[...arr1,4,5]
    //console.log(arr2)

    //let arr3=[6,7,8];
    //let arr4=[9,0]
    //arr3=[...arr3,...arr4]
    //console.log(arr3);
    const country="Ghana";
    const city="Accra"
    const [weatherstate,setWeatherState]=useState("");
    //const [redo,setRedo]=useState(10);
   
    

     
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
          <center>
            <p><h2>Welcome home</h2></p>
            </center>
            <Form className="app" >
              <Form.Group className="auth">
                <Form.Label className="index">Search</Form.Label>
                <Form.Control type="text" placeholder="Search"/>
              </Form.Group><br/>
              <Button type="submit" onClick={getWeatherState}>Search</Button>
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

export default Home
