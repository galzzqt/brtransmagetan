import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import busImage1 from '../assets/img/medium.jpg';
import busImage2 from '../assets/img/bigbus.jpg';
import busImage3 from '../assets/img/elf.jpg';
import '../dist/css/armada.css';

const Armada = () => {
  const busData = [
    {
      id: 1,
      name: 'Big Bus',
      image: busImage2,
      capacity: '50 seats',
      features: ['Air Conditioning', 'Reclining Seats', 'TV & DVD Player', 'Wi-Fi', 'Youtube TV'],
      description: 'Ideal untuk perjalanan bersama rombongan besar.',
    },
    {
      id: 2,
      name: 'Medium Bus',
      image: busImage1,
      capacity: '35 seats',
      features: ['Air Conditioning', 'Comfortable Seats', 'Audio System', 'Youtube'],
      description: 'Ideal untuk perjalanan bersama rombongan berkapasitas menengah.',
    },
    {
      id: 3,
      name: 'Elf / Hiace',
      image: busImage3,
      capacity: '15-20 seats',
      features: ['Air Conditioning', 'Youtube TV', 'Reclining Seat'],
      description: 'Cocok untuk perjalananbersama keluarga besar.',
    },
  ];

  const handleReservation = (busName) => {
    const phoneNumber = '6281217455181'; // Replace with your actual WhatsApp number
    const message = encodeURIComponent(`Halo, saya ingin memesan ${busName}. Bisakah Anda memberikan informasi lebih lanjut?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="armada-bg">
      <Container className="py-5 mt-5">
        <h1 className="text-center mb-5 armada-title">Armada Kami</h1>
        <Row>
          {busData.map((bus) => (
            <Col key={bus.id} lg={4} md={6} className="mb-4">
              <Card className="h-100 bus-card">
                <div className="image-wrapper">
                  <Card.Img variant="top" src={bus.image} alt={bus.name} />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="bus-title">{bus.name}</Card.Title>
                  <Card.Text>
                    <p className="capacity"><i className="fas fa-users"></i> {bus.capacity}</p>
                    <h6 className="features-title">Fasilitas :</h6>
                    <ul className="features-list">
                      {bus.features.map((feature, index) => (
                        <li key={index}><i className="fas fa-check"></i> {feature}</li>
                      ))}
                    </ul>
                    <p className="description">{bus.description}</p>
                  </Card.Text>
                  <Button 
                    variant="danger" 
                    className="mt-auto book-btn"
                    onClick={() => handleReservation(bus.name)}
                  >
                    Reservasi
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Armada;