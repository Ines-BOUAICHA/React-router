import React from 'react';
import {Navbar, Container, Nav, Form, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from './Rating';
import { Link } from 'react-router-dom';
const NavBar = ({name, setName, setRatingSearch, ratingSearch }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" >
            <div style = {{display:"flex", justifyContent: "space-between"}}></div>
            <div style = {{display:"flex"}}> 
               </div> 
   <Container>

    <Navbar.Brand> <Link to="/"> Home</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link> <Link to="/About"> About</Link></Nav.Link>
      <Nav.Link> <Link to="/Contact"> Contact</Link></Nav.Link>
    </Nav>
    <FormControl
    type="search"
    placeholder="search"
    className="mr-2"
    aria-label="search"
    onChange={(e) => setName(e.target.value)}/>
     </Container>
               <div>
                 <Form inline> 
                  <FormControl  type ="text" placeholder="Search a movie" className= "mr-sm-2" value={name} onChange={(e)=>setName(e.target.value)} /> 
                  <span style = {{paddingBottom:"10px"}}> </span> 
                  <Rating  setRate={setRatingSearch} rate={ratingSearch}/>
                  </Form> 
                  </div>
            </Navbar>  
        </div>
    )
}
export default NavBar;