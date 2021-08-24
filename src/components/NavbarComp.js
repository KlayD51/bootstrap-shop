//import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavbarBrand, NavDropdown} from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardSection from './CardSection';
import Contact from './Contact';
import ItalianSection from './italianSection';

const NavbarComp = () => {
    return (
      <Router>
        <div>

<Navbar bg='info' variant='dark' fixed='top' expand='lg' collapseOnSelect>
      <Navbar.Brand>
        <h3 style={{width:'270px', height:'50px', padding:'10px'}}>International Kitchen</h3>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav>
        <NavDropdown title='Courses'>
          <NavDropdown.Item as={Link} to={'/ItalianSection'}>Italian Course</NavDropdown.Item>
          <NavDropdown.Item href='Cources/Jamaican Course'>Jamaican Course</NavDropdown.Item>
          <NavDropdown.Item href='Cources/Columbian Course'>Columbian Course</NavDropdown.Item>
          <NavDropdown.Item href='Cources/Indian Course'>Indian Course</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='Cources/Promotions'>Promotions</NavDropdown.Item>
        
        </NavDropdown>
        <Nav.Link as={Link} to={'/CardSection'}>Course Overview</Nav.Link>
        <Nav.Link as={Link} to={'Contact'}>Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>

        </div>
        <div>
          <Switch>
        <Route path="/CardSection">
            <CardSection />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/italianSection">
            <ItalianSection />
          </Route>
          </Switch>
        </div>
        </Router>
    )
}

export default NavbarComp
