import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './App.css';

function GymForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    poids: '',
    coach: '',
    but: '',
    hauteur: '',
    abonnement: '',
  });

  const [coaches, setCoaches] = useState([]);
  const [buts, setButs] = useState([]);
  const [abonnements, setAbonnements] = useState([]);

  useEffect(() => {
    // Remplacer ces appels par des requêtes vers votre API pour récupérer les coachs et les objectifs
    setCoaches(['Coach A', 'Coach B', 'Coach C']);
    setButs(['Perte de poids', 'Musculation', 'Cardio']);
    setAbonnements(['1 mois', '3 mois', '6 mois', '1 an']);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Envoyer les données du formulaire à votre API
  };

  return (
    <Container className="gym-form-container">
      <h1 className="gym-form-title">Formulaire d'inscription</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNom">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Entrez votre nom"
          />
        </Form.Group>

        <Form.Group controlId="formPrenom">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Entrez votre prénom"
          />
        </Form.Group>

        <Form.Group controlId="formPoids">
          <Form.Label>Poids</Form.Label>
          <Form.Control
            type="number"
            name="poids"
            value={formData.poids}
            onChange={handleChange}
            placeholder="Entrez votre poids (kg)"
          />
        </Form.Group>
        
        <Form.Group controlId="formHauteur">
          <Form.Label>Hauteur</Form.Label>
          <Form.Control
            type="number"
            name="hauteur"
            value={formData.hauteur}
            onChange={handleChange}
            placeholder="Entrez votre hauteur (cm)"
          />
        </Form.Group>

        <Form.Group controlId="formCoach">
          <Form.Label>Coach</Form.Label>
          <Form.Control
            as="select"
            name="coach"
            value={formData.coach}
            onChange={handleChange}
          >
            <option value="">Choisissez un coach</option>
            {coaches.map((coach, index) => (
              <option key={index} value={coach}>
                {coach}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBut">
          <Form.Label>But</Form.Label>
          <Form.Control
            as="select"
            name="but"
            value={formData.but}
            onChange={handleChange}
          >
            <option value="">Choisissez un but</option>
            {buts.map((but, index) => (
              <option key={index} value={but}>
                {but}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formAbonnement">
          <Form.Label>Type d'abonnement</Form.Label>
          <Form.Control
            as="select"
            name="abonnement"
            value={formData.abonnement}
            onChange={handleChange}
          >
            <option value="">Choisissez un abonnement</option>
            {abonnements.map((abonnement, index) => (
              <option key={index} value={abonnement}>
                {abonnement}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 gym-form-button">
          Soumettre
        </Button>
      </Form>
    </Container>
  );
}

export default GymForm;
