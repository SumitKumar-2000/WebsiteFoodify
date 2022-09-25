import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/navbar.css'
import { Link } from 'react-scroll'

function Nav2() {
  return (
    <Navbar bg="transparent" expand="lg" style={{position: "fixed"}}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={require('../assets/foodifyyLogo.PNG')} alt="foodify icon" className='foodifyIcon'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to='home' smooth={true} offset={-100} duration={700} className='navButton curPointer'>Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='service' smooth={true} offset={-100} duration={700} className='navButton curPointer'>Service</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='service' smooth={true} offset={-100} duration={700} className='navButton curPointer'>About Us</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to='service' smooth={true} offset={-100} duration={700} className='navButton curPointer'>Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav2;