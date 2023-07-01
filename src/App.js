import React, {useState} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './pages/Home';
import Appearances from './pages/Appearances';
import Publications from './pages/Publications';
import About from './pages/About';





function App() {
  const [page, setPage] = useState('home');
  const renderPage = () => {
    switch(page) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'appearances': return <Appearances />;
      case 'publications': return <Publications />;
      default: return <Home />;
    }
  };
  return (
        <div className="App">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand to="/">Steinzi</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link onClick={() => setPage('home')}>Home</Nav.Link>
                  <Nav.Link onClick={() => setPage('appearances')}>Appearances</Nav.Link>
                  <Nav.Link onClick={() => setPage('publications')}>Publications</Nav.Link>
                  <Nav.Link onClick={() => setPage('about')}>About Me</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container>
          {renderPage()}
          </Container>
        </div>

  );
}
export default App;