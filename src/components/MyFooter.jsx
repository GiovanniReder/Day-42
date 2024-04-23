import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function MyFooter (){
    return(
        <Navbar sticky="bottom" expand="md" className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Fantasy</Nav.Link>
              <Nav.Link href="#link">History</Nav.Link>
              <Nav.Link href="#link">Horror</Nav.Link>
              <Nav.Link href="#link">Romance</Nav.Link>
              <Nav.Link href="#link">Scifi</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default MyFooter;