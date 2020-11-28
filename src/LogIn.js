import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';

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
                </>
                ) : (
                <>
            <Form>
                    <Form.Group value={email} onChange={handleEmailInput}>
                     <Form.Label>Email :</Form.Label>
                     <Form.Control type="email" placeholder="example@gmail.com"></Form.Control>
                    </Form.Group> 
                    <Form.Group value={password} onChange={(event)=>handlePasswordInput(event)}>
                  <Form.Label>Password :</Form.Label>
                     <Form.Control type="password" placeholder="password"></Form.Control>
                    <Form.Text><h6>Your password will never be shared,trust us</h6></Form.Text>
                    </Form.Group>
                    <Form.Group>
                      <Form.Check type="checkbox" label="Remember me"></Form.Check>
                    </Form.Group>
                  <Button type="submit" onClick={handleLogin}>LogIn</Button>
            <br/> 
                        <p>Are you a new user?<Link to='/signup'>
                        <span>SignUp</span>
                        </Link></p>
            </Form>
                </>
            
            )}
           
    
        </div>
        
    )
}

export default LogIn
