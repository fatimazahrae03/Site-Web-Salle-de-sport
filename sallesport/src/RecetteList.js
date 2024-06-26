import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RecettetList() {
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user-info"));

  useEffect(() => {
    const fetchData = async () => {
      let result = await fetch("http://localhost:8000/api/recettelist");
      result = await result.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    let result = await fetch(`http://localhost:8000/api/delete/${id}`, {
      method: "DELETE",
    });
    if (result.ok) {
      setData(data.filter((item) => item.id !== id));
    } else {
      alert("Failed to delete the recette");
    }
  };

  return (
    <div>
      <h1>Recettes</h1>
      <br />
      <Container>
        <Row>
          {data.map((recette, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                {recette.file_path ? (
                  <div
                    style={{
                      overflow: "hidden",
                      height: "200px", // Définir la hauteur souhaitée
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={`http://localhost:8000/${recette.file_path}`}
                      alt={recette.name}
                      style={{ objectFit: "cover", height: "100%" }}
                    />
                  </div>
                ) : (
                  <Card.Img
                    variant="top"
                    src="placeholder.jpg"
                    alt="No Image"
                  />
                )}
                <Card.Body>
                  <Card.Title>{recette.name}</Card.Title>
                  {user.role === "admin" && (
                    <Button
                      variant="dark" // Changer la couleur en noir
                      onClick={() => handleDelete(recette.id)}
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

export default RecettetList;
