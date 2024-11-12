import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logoImage from '../assets/img/logo.png';
import headerImage from '../assets/img/bus.png';
import '../dist/css/home.css'
import '../dist/css/main.css'
import bodyImage from '../assets/img/bus2.png';

const Home = () => {
  return (
    <>
      {/* Header Section */}
      <header>
        <Container className="hero-section py-5">
          <div className="row align-items-center" style={{ minHeight: '75vh' }}>
            <div className="col-lg-6 text-left">
              <h1 className="display-5 text-white mb-3">BR Trans Magetan</h1>
              <p className="lead text-white-50 mb-4" style={{ fontSize: '1rem' }}>
              Lebih dari sekadar rental mobil dan bus. Kami juga menyediakan layanan antar-jemput bandara, wisata, dan paket perjalanan. Kunjungi website kami untuk informasi lebih lanjut.
              </p>
              <Button 
                variant="danger" 
                size="lg" 
                className="me-3" 
                href="https://wa.me/6281217455181"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservasi
              </Button>
              <Link to="/kontak">
                <Button variant="outline-danger" size="lg">Contact</Button>
              </Link>
            </div>
            <div className="col-lg-6">
              <img src={headerImage} alt="BR Trans Magetan" className="img-fluid rounded" />
            </div>
          </div>
        </Container>
      </header>

      {/* Profile Section */}
      <section className="profile-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2">
              <p className="lead mb-4">
                Layanan transportasi terpercaya untuk setiap perjalanan Anda di Magetan dan sekitarnya.
              </p>
              <p className="mb-4">
                BR Trans Magetan adalah perusahaan penyewaan mobil dan bus yang berkomitmen untuk memberikan pengalaman perjalanan yang nyaman, aman, dan terjangkau. Dengan armada kendaraan terawat dan tim profesional, kami siap melayani kebutuhan transportasi Anda.
              </p>
              <Button variant="danger" as={Link} to="/service" className="me-3">Service</Button>
              <Button variant="outline-danger" as={Link} to="/armada">Armada Kami</Button>
            </Col>
            <Col lg={6} className="order-lg-1 mb-4 mb-lg-0">
              <Image src={bodyImage} alt="BR Trans Fleet" fluid rounded />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
