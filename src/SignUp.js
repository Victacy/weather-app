
import React,{useState} from 'react'
import {Form,Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from './image/sunny.jpg'

function SignUp() {
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("");
    const [signedup,setSignedUp] =useState("");

    const handleUserNameInput =(event) =>{
        setUserName(event.target.value);
    };
    const handleEmailInput =(event) =>{
        setEmail(event.target.value);
    };

    const handlePasswordInput =(event) =>{
        setPassword(event.target.value);
    };

    const handleSignup = (event ) =>{
        event.preventDefault()
        if(username && email && password && password)
        setSignedUp(true);
    };
    function handleSignout(event) {
        event.preventDefault()
        setSignedUp(false);
    }

    return (
        <div>
            {signedup ? (
                <>
                <p>Congratultions, you've created a new account</p>
                <Button onclick={handleSignout} type="submit">Signout</Button>
                <p><Link to="/">Continue</Link></p>
                </>
            ):(
                <>
                <Container>
                    <center>
                    <img src={pic} alt=' '/>
                    <h3>Create an Account</h3>
                    </center>
                    
                <Form className="title">
                    <p>
                    <Form.Group className="auth" value={username} onChange={handleUserNameInput}>
                    <Form.Label className="index" >Username :</Form.Label>
                    <Form.Control className="in" type="text" placeholder="username"/>
                    </Form.Group>
                    </p><br/>

                    <p>
                    <Form.Group className="auth" value={email} onChange={handleEmailInput}>
                    <Form.Label className="index">Email Address:</Form.Label>
                    <Form.Control className="in" type="email" placeholder="example@gmail.com"/>
                    </Form.Group>
                    </p>

                    <p>
                    <Form.Group className="auth" value={password} onChange={handlePasswordInput}>
                    <Form.Label className="index">Password :</Form.Label>
                    <Form.Control className="in" type="password" placeholder="password"/>
                    </Form.Group>
                    </p>

                    <p>
                    <Form.Group className="auth" value={password} onChange={handlePasswordInput}>
                    <Form.Label className="index">Repeat Password :</Form.Label>
                    <Form.Control className="in" type="password" placeholder="password"/>
                    </Form.Group>
                    </p>

                    <p>
                    <Form.Group className="auth" >
                    <Form.Check style={{color:'black'}} type="checkbox" label="Remember me"/>
                    </Form.Group>
                    </p>

                    <center>
                    <Button  onClick={handleSignup} type='submit'>Sign Up</Button>
                    <br/> 
                        <p style={{color:'black'}}>Already have an account?<Link to='/login'>
                        <span>Log in</span>
                        </Link></p>
                    </center>
                </Form>
                </Container>
                </>
            )

            }
            

        </div>
    )
}

export default SignUp
