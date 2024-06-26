import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProgramsList() {
  

    const [data, setData] = useState([]);
    const user = JSON.parse(localStorage.getItem("user-info"));
  
    useEffect(() => {
      const fetchData = async () => {
        let result = await fetch("http://localhost:8000/api/programslist");
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
        alert('Failed to delete the recette');
      }
    };
  return (
    <div>
      <h1>Programs</h1>
      <br/> 
      <Container>
        <Row>
          {data.map((program, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                {program.file_path ? (
                  <Card.Img variant="top" src={`http://localhost:8000/${program.file_path}`} alt={program.name} />
                ) : (
                  <Card.Img variant="top" src="placeholder.jpg" alt="No Image" /> // Provide a placeholder image if no image
                )}
                <Card.Body>
                  <Card.Title>{program.name}</Card.Title>
                  {user.role === "admin" && (
                    <Button
                      variant="dark" // Changer la couleur en noir
                      onClick={() => handleDelete(program.id)}
                    >
                      Delete
                    </Button>
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

export default ProgramsList;
