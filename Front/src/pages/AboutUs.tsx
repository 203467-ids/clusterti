import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap'; // Importa los componentes de tarjeta y layout de Bootstrap
import '../styles/About.css'; // Importa tu archivo CSS
interface Member {
  id: number;
  name: string;
  image: string;
  description: string;
}

const AboutUs: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    // Llamar a la API para obtener la información de los miembros
    fetch('http://127.0.0.1:9000/api/members')
      .then(response => response.json())
      .then((data: Member[]) => setMembers(data))
      .catch(error => console.error('Error fetching members:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Nosotros</h2>
      <Row className="mb-4">
        <Col>
          <h3>Misión y Visión</h3>
          <p>Aquí va la descripción de la misión y visión de la empresa.</p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h3>Miembros</h3>
          <Row>
            {members.map(member => (
              <Col xs={12} md={6} lg={4} key={member.id} className="mb-4">
                <Card className="h-100 card-animation">
                  <div style={{ maxHeight: '200px', overflow: 'hidden' }}> {/* Define un tamaño máximo para las imágenes */}
                    <Card.Img variant="top" src={member.image} alt={member.name} style={{ width: '100%' }} /> {/* Establece un ancho del 100% */}
                  </div>
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <hr className="my-5" /> {/* Agrega un separador horizontal */}
    </div>
  );
}

export default AboutUs;
