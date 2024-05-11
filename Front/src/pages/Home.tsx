import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Home.css'; // Importa tu archivo CSS

const Home: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    // Aquí llamarías a tu ruta de API para obtener las imágenes desde MongoDB
    // Ejemplo:
    fetch('http://127.0.0.1:9000/api/images')
      .then(response => response.json())
      .then(data => {
        // Mapea los datos para obtener solo las URLs de las imágenes
        const urls = data.map((item: { id: string; url: string }) => item.url);
        setImageUrls(urls);
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="container">
      <hr className="my-5" /> {/* Agrega un separador horizontal */}
      <div className="content-wrapper" style={{ zIndex: 1 }}>
        <Carousel>
          {imageUrls.map((imageUrl, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={imageUrl}
                alt={`Slide ${index}`}
              />
              <Carousel.Caption>
                <h3>Actividades {index}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="row mt-4" style={{ backgroundColor: '#336699', minHeight: '400px' }}>
          <div className="col d-flex align-items-center justify-content-center">
            <p className="text-uppercase font-weight-bold text-white" style={{ fontSize: '24px' }}>Clúster de tecnologías de la información y comunicaciones en el estado de Chiapas</p>
          </div>
        </div>
      </div>
      <hr className="my-5" /> {/* Agrega un separador horizontal */}
    </div>
  );
}

export default Home;