
import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
                <Form>
                    <Form.Group value={username} onChange={handleUserNameInput}>
                    <Form.Label>Username :</Form.Label>
                    <Form.Control type="text" placeholder="username"/>
                    </Form.Group>

                    <Form.Group value={email} onChange={handleEmailInput}>
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="example@gmail.com"/>
                    </Form.Group>

                    <Form.Group value={password} onChange={handlePasswordInput}>
                    <Form.Label>Password :</Form.Label>
                    <Form.Control type="password" placeholder="password"/>
                    </Form.Group>

                    <Form.Group value={password} onChange={handlePasswordInput}>
                    <Form.Label>Repeat Password :</Form.Label>
                    <Form.Control type="password" placeholder="password"/>
                    </Form.Group>
                
                    <Form.Group >
                    <Form.Check type="checkbox" label="Remember me"/>
                    </Form.Group>
                    <Button  onClick={handleSignup} type='submit'>Sign Up</Button>
                    <br/> 
                        <p>Are you a new user?<Link to='/login'>
                        <span>Log in</span>
                        </Link></p>
                </Form>
                </>
            )

            }
            

        </div>
    )
}

export default SignUp
