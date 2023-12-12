import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, Outlet } from 'react-router-dom'
import { NavDropdown } from "react-bootstrap";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Menu() {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{ fontSize: '24px' }}>Delicias Express</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="" style={{ fontSize: '20px' }}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/ProyeComida/public/products" style={{ fontSize: '20px' }}>Productos</Nav.Link>
                        <Nav.Link as={Link} to="/ProyeComida/public/login" style={{ fontSize: '20px' }}>Iniciar Sesion</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <section>
                <Container>
                    <Slider {...carouselSettings}>
                        <div>
                            <img src="img/papas-fritas.jpg" alt="Imagen 1" style={{ width: '60%' }} />
                        </div>
                        <div>
                            <img src="img/cafe-frio.jpg" alt="Imagen 2" style={{ width: '60%' }} />
                        </div>
                    </Slider>
                </Container>

            </section>

            <section>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </section>
        </>
    );
}

export default Menu;