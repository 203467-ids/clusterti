import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(formData);
    // Puedes enviar los datos del formulario a tu backend aquí
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2>Contacto</h2>
          <p>¡Contáctanos para más información!</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingresa tu nombre"
                value={formData.name}
                onChange={handleInputChange}
                required // Campo requerido
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                value={formData.email}
                onChange={handleInputChange}
                required // Campo requerido
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="Escribe tu mensaje aquí"
                value={formData.message}
                onChange={handleInputChange}
                required // Campo requerido
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
