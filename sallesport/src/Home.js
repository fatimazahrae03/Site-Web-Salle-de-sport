import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div style={{ backgroundColor: '#f4f4f4', paddingTop: '50px', paddingBottom: '50px' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} style={{ textAlign: 'center' }}>
            <div>
              <h1 style={{ color: '#333', fontSize: '3rem', marginBottom: '20px' }}>Bienvenue à notre salle de sport</h1>
              <p style={{ color: '#666', fontSize: '1.2rem', lineHeight: '1.6' }}>
                Chez nous, vous trouverez tout ce dont vous avez besoin pour vous entraîner et atteindre vos objectifs de fitness.
                Nous offrons une variété de programmes d'entraînement, un accompagnement personnalisé et une atmosphère motivante pour vous aider à réussir.
              </p>
            </div>
          </Col>
          <Col md={6} style={{ textAlign: 'center' }}>
            <img
              src="salle.jpg"
              alt="Salle de sport"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
            />
          </Col>
        </Row>
        
        {/* Nouvelle section */}
        <Row className="mt-5">
          <Col md={4} style={{ textAlign: 'center', padding: '20px' }}>
            <img src="images.jpg" alt="Matériel" className="home-image" />
            <h3 style={{ color: '#333', marginTop: '20px' }}>Matériel de Qualité</h3>
            <p style={{ color: '#666' }}>Nous disposons d'un équipement de haute qualité pour tous vos besoins d'entraînement.</p>
          </Col>
          <Col md={4} style={{ textAlign: 'center', padding: '20px' }}>
            <img src="images (1).jpg" alt="Coachs" className="home-image" />
            <h3 style={{ color: '#333', marginTop: '20px' }}>Coachs Expérimentés</h3>
            <p style={{ color: '#666' }}>Nos coachs sont qualifiés et expérimentés pour vous guider vers vos objectifs.</p>
          </Col>
          <Col md={4} style={{ textAlign: 'center', padding: '20px' }}>
            <img src="images (2).jpg" alt="Ambiance" className="home-image" />
            <h3 style={{ color: '#333', marginTop: '20px' }}>Ambiance Motivante</h3>
            <p style={{ color: '#666' }}>Nous créons une ambiance positive et motivante pour booster vos séances.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
