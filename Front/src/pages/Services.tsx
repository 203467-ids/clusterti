import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap'; // Importa los componentes de tarjeta y layout de Bootstrap
import '../styles/Services.css'; // Importa tu archivo CSS
interface Services {
  id: number;
  name: string;
  image: string;
  description: string;
}
const Services: React.FC = () => {
  const [services, setServices] = useState<Services[]>([]);

  useEffect(() => {
    // Llamar a la API para obtener la información de los miembros
    fetch('http://127.0.0.1:9000/api/services')
      .then(response => response.json())
      .then((data: Services[]) => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);
  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Servicios</h2>
      <Row className="mb-4">
        <Col>
          <Row>
            {services.map(services => (
              <Col xs={12} md={6} lg={4} key={services.id} className="mb-4">
                <Card className="h-100 card-animation">
                  <div style={{ maxHeight: '200px', overflow: 'hidden' }}> {/* Define un tamaño máximo para las imágenes */}
                    <Card.Img variant="top" src={services.image} alt={services.name} style={{ width: '100%' }} /> {/* Establece un ancho del 100% */}
                  </div>
                  <Card.Body>
                    <Card.Title>{services.name}</Card.Title>
                    <Card.Text>{services.description}</Card.Text>
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

export default Services;
