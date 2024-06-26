import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CoachsList() {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem('user-info'));

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch("http://localhost:8000/api/coachslist");
      result = await result.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    let result = await fetch(`http://localhost:8000/api/delete/${id}`, {
      method: 'DELETE'
    });
    if (result.ok) {
      setData(data.filter(item => item.id !== id));
    } else {
      alert('Failed to delete the product');
    }
  };

  return (
    <div>
      
      <h1>Our Coachs</h1>
      <br /> 
      <Container>
        <Row>
          {data.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card style={{ width: '20rem' }}> {/* Adjusted the size of the card */}
                {product.file_path ? (
                  <Card.Img 
                    variant="top" 
                    src={`http://localhost:8000/${product.file_path}`} 
                    alt={product.name} 
                    style={{ width: '100%', height: '200px', objectFit: 'contain' }} // Adjusted the size of the image
                  />
                ) : (
                  <Card.Img 
                    variant="top" 
                    src="placeholder.jpg" 
                    alt="No Image" 
                    style={{ width: '100%', height: '200px', objectFit: 'contain' }} // Adjusted the size of the image
                  /> 
                )}
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.2rem' }}>{product.name}</Card.Title> {/* Adjusted the size of the text */}
                  <Card.Text style={{ fontSize: '0.9rem' }}>
                    {product.description}
                  </Card.Text>
                  {/* Afficher le bouton de suppression si l'utilisateur est admin */}
                  {user.role === 'admin' && (
                    <Button variant="dark" onClick={() => handleDelete(product.id)} style={{ fontSize: '0.8rem' }}>Delete</Button> // Adjusted the size of the button
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default CoachsList;
