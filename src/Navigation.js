import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

function Navigation() {
    return (
    <Navbar bg="light" expand="lg">
                <Nav>
                    <Link className="d-inline p-2 bg-light text-dark" to ="/">Home</Link>
                    <Link className="d-inline p-2 bg-light text-dark" to ="/login">LogIn</Link>
                    <Link className="d-inline p-2 bg-light text-dark" to ="/signup">SignUp</Link>
                    <Link className="d-inline p-2 bg-light text-dark" to ="/weather">Weather</Link>
                    <Link className="d-inline p-2 bg-light text-dark" to ="/try">Try</Link>
          

                </Nav>
            
        </Navbar>
   
  );
}

export default Navigation;
