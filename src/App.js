import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavbarBrand, NavDropdown} from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import LandingPage from './components/LandingPage'
import CardSection from './components/CardSection'
import ItalianSection from './components/italianSection'
import JamaicanSection from './components/JamaicanSection'
import ColumbianCourse from './components/ColumbianCourse'
import IndianSection from './components/IndianSection'
import Promo from './components/Promo'


function App() {
  return (
    <div className='app'>
     <Navbar bg='info' variant='dark' fixed='top' expand='lg' collapseOnSelect>
      <Navbar.Brand>
        <h3 style={{width:'270px', height:'50px', padding:'10px'}}>International Kitchen</h3>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav>
        <NavDropdown title='Courses'>
          <NavDropdown.Item href='Cources/Italian Course'>Italian Course</NavDropdown.Item>
          <NavDropdown.Item href='Cources/Jamaican Course'>Jamaican Course</NavDropdown.Item>
          <NavDropdown.Item href='Cources/Columbian Course'>Columbian Course</NavDropdown.Item>
          <NavDropdown.Item href='Cources/Indian Course'>Indian Course</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='Cources/Promotions'>Promotions</NavDropdown.Item>
        
        </NavDropdown>
        <Nav.Link href='Price Overview' style={{}}>Price Overview</Nav.Link>
        <Nav.Link href='ontact' style={{}}>Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>

      <LandingPage />
      <CardSection />
      <ItalianSection />
      <JamaicanSection />
      <ColumbianCourse />
      <IndianSection />
      <br></br>
      <Promo />


    </div>
  );
}

export default App;
