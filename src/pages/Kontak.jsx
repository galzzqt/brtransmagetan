import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../dist/css/kontak.css'


const Kontak = () => {
  return (
    <Container className="py-5" style={{ paddingTop: '200px' }}>
      <Row className="mb-5">
        <Col>
          <h1 className="text-center mb-4">Contact Us</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2 className="mb-4">Send Us a Message</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Pesan</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message" />
            </Form.Group>

            <Button variant="danger" type="submit">
              Kirim Pesan
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h2 className="mb-4">Kontak & Alamat Kami</h2>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>BRTrans Magetan</Card.Title>
              <Card.Text>
                <p><FaMapMarkerAlt />Dk. Gedangan, Dsn. Mbelo, Desa Bedagung, Kec. Panekan, Kab. Magetan</p>
                <p><FaPhone /> Phone: +62 812-1745-5181</p>
                <p><FaEnvelope /> Email: brtransmagetan@gmail.com</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Social Media</Card.Title>
              <Card.Text>
                <p><FaFacebook /> Facebook: <a href="https://www.facebook.com/Grandong.lawu" target="_blank" rel="noopener noreferrer">BRTrans Magetan</a></p>
                <p><FaInstagram /> Instagram: <a href="https://www.instagram.com/brtransss?igsh=bzU1dzdmdGcyc282" target="_blank" rel="noopener noreferrer">@brtrans</a></p>
                <p><FaWhatsapp /> WhatsApp: <a href="https://wa.me/6281217455181" target="_blank" rel="noopener noreferrer">+62 812-1745-5181</a></p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Kontak;
