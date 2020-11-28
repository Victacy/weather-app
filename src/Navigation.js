import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

function Navigation() {
    return (
    <Navbar bg="light" expand="lg">
                <Nav>
                    <Link className="lay p-2" to ="/">Home</Link>
                    <Link className="lay p-2 " to ="/login">LogIn</Link>
                    <Link className="lay p-2 " to ="/signup">SignUp</Link>
                    <Link className="lay p-2 " to ="/weather">Weather</Link>
                    
          

                </Nav>
            
        </Navbar>
   
  );
}

export default Navigation;
