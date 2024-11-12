import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaBus, FaCar, FaPlane, FaUmbrellaBeach, FaCheckCircle } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
  background-color: #f8f9fa;
  padding: 3rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`

const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`

const IconWrapper = styled.div`
  background-color: #dc3545;
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`

const StyledTitle = styled.h1`
  color: #dc3545;
  font-weight: bold;
  margin-bottom: 2rem;
`

const StyledSubtitle = styled.h2`
  color: #343a40;
  font-weight: bold;
  margin-bottom: 2rem;
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const Service = () => {
  const services = [
    { icon: <FaBus size={40} />, title: 'Sewa Bus', description: 'Layanan bus nyaman untuk perjalanan kelompok dan tur.' },
    { icon: <FaCar size={40} />, title: 'Rental Mobil', description: 'Berbagai pilihan mobil untuk perjalanan pribadi atau bisnis Anda.' },
    { icon: <FaPlane size={40} />, title: 'Antar-Jemput Bandara', description: 'Layanan antar-jemput bandara yang dapat diandalkan.' },
    { icon: <FaUmbrellaBeach size={40} />, title: 'Paket Wisata', description: 'Nikmati perjalanan wisata yang menyenangkan dan terjangkau.' },
  ]

  const features = [
    'Pengemudi Berpengalaman',
    'Armada Modern',
    'Dukungan 24/7',
    'Solusi Disesuaikan',
  ]

  return (
    <StyledContainer className="my-5">
      <StyledTitle className="text-center">Layanan Kami</StyledTitle>
      <Row>
        {services.map((service, index) => (
          <Col key={index} md={6} lg={3} className="mb-4">
            <StyledCard className="h-100 border-0">
              <Card.Body className="d-flex flex-column align-items-center">
                <IconWrapper>{service.icon}</IconWrapper>
                <Card.Title className="text-center font-weight-bold">{service.title}</Card.Title>
                <Card.Text className="text-center">{service.description}</Card.Text>
              </Card.Body>
            </StyledCard>
          </Col>
        ))}
      </Row>
      <div className="mt-5">
        <StyledSubtitle className="text-center">Mengapa Memilih BR Trans?</StyledSubtitle>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={3} className="mb-3">
              <FeatureItem>
                <FaCheckCircle color="#dc3545" size={20} className="mr-2" />
                <span>{feature}</span>
              </FeatureItem>
            </Col>
          ))}
        </Row>
      </div>
    </StyledContainer>
  )
}

export default Service
