import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logoImage from '../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <img src={logoImage} alt="BR Trans Magetan Logo" className="mb-3" style={{ maxWidth: '200px' }} />
              <p>Your trusted partner for comfortable and safe transportation in Magetan and beyond.</p>
              <div className="d-flex">
              <a href="https://www.facebook.com/Grandong.lawu" className="text-light me-3"><FaFacebook size={24} /></a>
              <a href="https://www.instagram.com/brtransss?igsh=bzU1dzdmdGcyc282" className="text-light me-3"><FaInstagram size={24} /></a>
              <a href="https://api.whatsapp.com/send/?phone=6281217455181&text&type=phone_number&app_absent=0" className="text-light"><FaWhatsapp size={24} /></a>
            </div>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3 text-danger">Menu</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/armada" className="text-light text-decoration-none">Armada</Link></li>
              <li><Link to="/service" className="text-light text-decoration-none">Service</Link></li>
              <li><Link to="/faq" className="text-light text-decoration-none">Faq</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="mb-3 text-danger">Kontak Kami</h5>
            <p style={{ fontSize: '0.875rem' }}>Ds. Bedagung, Panekan, Magetan<br />
              Jawa Timur, Indonesia 63319</p>
              <p style={{ fontSize: '0.875rem' }}>Phone: +62 812-1745-5181<br />
              Email: brtransmagetan@gmail.com</p>

          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 BR Trans X Abimanyu. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
