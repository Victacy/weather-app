import React,{useState} from 'react'
import {Form,Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './image/amazon.jpg'

function LogIn() {
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [loggedin, setLoggedIn] = useState("");

    const handleEmailInput =(event) =>{
        setEmail(event.target.value);
    };
    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
      };

      const handleLogin = (event) => {
        event.preventDefault()
        if (email==="euninnett@yahoo.com" && password==="1234") {
            setLoggedIn(true);
        }  
      };

      function handleLogout(event) {
        event.preventDefault();
        setLoggedIn(false);
      }
    return (
        <div >
            {loggedin ? (
                <>
                <p>Welcome</p>
                <Button onClick={handleLogout}>Logout</Button>
                <Link to='/'></Link>
                </>
                ) : (
                <>
                <Container>
                  <center>
                  <img src={logo} alt=" "/>
                  </center>
            <Form className="title">
              <center>
              <h3 style={{color:'darkblue'}}>Log In to your account now</h3>
              </center>
                    <Form.Group className="auth" value={email} onChange={handleEmailInput}>
                      <left>
                     <Form.Label className="index">Email :</Form.Label>
                     </left>
                     <Form.Control className="in" type="email" placeholder="example@gmail.com"></Form.Control>
                    </Form.Group> 
                    <Form.Group  className="auth" value={password} onChange={(event)=>handlePasswordInput(event)}>
                  <Form.Label className="index">Password :</Form.Label>
                     <Form.Control className="in" type="password" placeholder="password"></Form.Control>
                    <Form.Text className="dex">Your password will never be shared,trust us</Form.Text>
                    </Form.Group>
                    <Form.Group className="auth">
                      <Form.Check style={{color:'black'}} type="checkbox" label="Remember me"></Form.Check>
                    </Form.Group>
                    <center>
                  <Button type="submit" onClick={handleLogin}>LogIn</Button>
            <br/> 
                        <p style={{color:'black'}}>Are you a new user?<Link to='/signup'>
                        <span>SignUp</span>
                        </Link></p>
                    </center>
            </Form>
            </Container>
                </>
            
            )}
           
    
        </div>
        
    )
}

export default LogIn
