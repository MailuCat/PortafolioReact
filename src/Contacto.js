import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Contacto = () => {
      const form = useRef();

      const enviarForm = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kl4nhbv', 'template_v9rmw9e', form.current, 'Jrc0SO05xvI0i7zUM')
          .then((result) => {
              console.log(result.text);
              
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <Container fluid="md" className='Container_contacto'>
      <h2>¿Alguna duda?</h2>
      <h4>Me puedes escribir ...</h4>
        <form ref={form} onSubmit={enviarForm}>
          <div className="mb-3">
            <Row>
              <Col xs={12} md={6}>
              <label className="form-label">Nombre</label>
              </Col>
              <Col xs={12} md={6}>
              <input name="from_name" placeholder="" type="text" className="form-control"/>
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col xs={12} md={6}>
                <label className="form-label">Correo electrónico</label>
              </Col>
              <Col xs={12} md={6}>
                <input name="email" placeholder="" type="email" className="form-control"/>
              </Col>
            </Row>
          </div>
          <div className="form-floating">
             <Row>
             <Col xs={12} md={6}>
                  <label className="form-label">Comentario</label>
                </Col>
                <Col xs={12} md={6}>
                  <textarea name="message" placeholder="" className="form-control"></textarea>
                </Col>
             </Row>
                <label ></label>
          </div>
            <Row>
              <Col xs={12} md={6}>
              </Col>
              <Col xs={12} md={6} className="input_margin">
              <input type="submit" value="Enviar"  />
              </Col>
            </Row>
      </form>

    </Container>
)
}
export default Contacto