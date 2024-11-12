import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { navLinks } from '../data/index';
import { NavLink } from 'react-router-dom'; // Ubah ini
import Button from 'react-bootstrap/esm/Button';
import logoImage from '../assets/img/logo.png';

const NavbarComp = () => {
  // Nomor WA
  const whatsappNumber = '6281217455181';
  const message = 'Hallo, Saya ingin melakukan reservasi kendaraan.';

  // WA URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Navbar Section */}
      <Navbar expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img
              src={logoImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Your Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((link) => (
                <div className='nav-link' key={link.id}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    } 
                    end
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger text-white">Reservasi</Button>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;