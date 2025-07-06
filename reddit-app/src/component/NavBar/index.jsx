import React from 'react';
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import {FaQrcode} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';

const index = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="px-3" >
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center " style={{fontSize:"30px",fontWeight:"bolder" ,height:"30px"}}>
          <img
            src="https://redditinc.com/hs-fs/hubfs/Reddit%20Inc/Content/Brand%20Page/Reddit_Logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="Reddit logo"
          />
          reddit
        </Navbar.Brand>

      
        <Form className="d-flex flex-grow-1 mx-3">
          <Form.Control
            type="search"
            placeholder="Search Reddit"
            className="me-2 bg-dark text-white border-0 rounded-pill px-3"
            aria-label="Search"
            style={{width:"500px" , color:"white",marginLeft:"240px"}}
          />
        </Form>

        <div className="d-flex gap-2">
          <Button variant="secondary" className="rounded-pill px-3"><FaQrcode/> Get App</Button>
          <Button variant="danger" className="rounded-pill px-3">Log In</Button>
           <Button style={{backgroundColor:"black",marginTop:"-10px",fontSize:"30px" ,border:"none"}} >...</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default index;
