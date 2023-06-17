import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './pages/Home';
import Appearances from './pages/Appearances';
import Publications from './pages/Publications';
import About from './pages/About';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="/">Steinzi</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/appearances">Appearances</Nav.Link>
                  <Nav.Link href="/publications">Publications</Nav.Link>
                  <Nav.Link href="/about">About Me</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appearances" element={<Appearances />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
  );
}
export default App;