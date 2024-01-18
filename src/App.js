// import logo from './logo.svg';
import './App.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link ,Route , BrowserRouter, Routes }  from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import About from './About';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main_div'>
      <Routes>
      <Route Component={About} path='/about'></Route>
      <Route Component={Home} path='/'></Route>
      <Route Component={Users} path='/users'></Route>
      </Routes>
      </div>
   
      </BrowserRouter>

     <Footer/>
    </div>
  );
}

export default App;
