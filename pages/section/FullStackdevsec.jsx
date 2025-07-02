import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FullStackdevsec({ devservices = [] }) {
  const [selecteddevservices, setSelecteddevservices] = useState(devservices[0]);

  useEffect(() => {
    if (devservices.length > 0 && !selecteddevservices) {
      setSelecteddevservices(devservices[0]);
    }
  }, [devservices, selecteddevservices]);

  if (!selecteddevservices) return null;

  return (
    <Container className="my-5">
      <Row className="mt-4 full-stack-dev-sec">
        {/* Left Sidebar */}
        <Col md={5} className="d-flex flex-column scroll-container">
          {devservices.map((service, index) => (
            <Card
              key={index}
              className={`mb-3  shadow-sm ${
                selecteddevservices.title === service.title ? "bg-primary text-white" : ""
              }`}
              onClick={() => setSelecteddevservices(service)}
              style={{ cursor: "pointer", borderRadius: "10px" }}
            >
              <Card.Body>
                <h5>{service.title}</h5>
                <p className="mb-0 text-5xl text-wrap">{service.description}</p>
              </Card.Body>
            </Card>
          ))}
        </Col>

        {/* Right Content Area */}
        <Col md={7} >
          <Card className="p-4 shadow-sm card-con" style={{ borderRadius: "10px" }}>
            <h4>{selecteddevservices.title}</h4>
            <p style={{ color: 'black', fontSize: '18px' }}>{selecteddevservices.description}</p>
            <ul>
              {selecteddevservices.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
