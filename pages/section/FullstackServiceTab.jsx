import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Data for tabs
const servicetabData = [
  {
    title: "Rapid Application Development",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem ",
    image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741082871/2150010130_ncysgy.jpg",
    points: ["Enable faster time-to-market and project delivery", "Drive productivity and faster iteration cycles"]
  },
  {
    title: "Vast Community and Library Support",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem ",
    image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741082868/2150010127_mbsw2f.jpg",
    points: ["Access to thousands of open-source libraries", "Strong community support for troubleshooting"]
  },
  {
    title: "User-Friendly Data Architecture",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem ",
    image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741082869/2150038906_ygmewh.jpg",
    points: ["Seamless integration with databases and APIs", "Powerful tools for data science and AI"]
  },
  {
    title: "Integrated Scalability in Enterprise Apps",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem ",
    image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741082871/123_n9opef.jpg",
    points: ["Built-in scalability for growing business needs", "Secure and reliable enterprise-level solutions"]
  },
  {
    title: "Object-Oriented and Dynamically-Typed",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem ",
    image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741082871/11817488_4843334_uhaocb.jpg",
    points: ["Flexible and object-oriented programming", "Secure and reliable enterprise-level solutions"]
  },
  {
    title: "Platform-Independent and Embeddable",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit a aliquid, vel totam accusantium commodi deserunt, lorem ",
    image: "https://res.cloudinary.com/dwyn5jgh3/image/upload/v1741082867/business-technology-cloud-computing-server-service-concept-with-developer-team-working-concept-isometric-design_115495-170_wpndyf.jpg",
    points: ["Cross-platform compatibility", "Can be embedded into other applications"]
  }
];

export default function PythonDevelopmentTabs() {
  const [activeTab, setActiveTab] = useState(servicetabData[0]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleTabs = servicetabData.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 4 < servicetabData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <Container className="my-5 fullstack-service-tab">
      <Row className="con">
        {/* Left: Image */}
        <Col lg={6} md={12} className="mb-4 mb-lg-0 text-center">
          <img
            src={activeTab.image}
            alt={activeTab.title}
            className="img-fluid rounded shadow "
            style={{ width: "90%", height: "auto", objectFit: "cover" }}

          />
        </Col>

        {/* Right: Content */}
        <Col lg={6} md={12} className="">
          <h3 className="fw-bold">{activeTab.title}</h3>
          <p className=" text-black">{activeTab.description}</p>
          <ul className="list-unstyled p-3">
            {activeTab.points.map((point, index) => (
              <li key={index} className="mb-2" style={{listStyleType: "disc", color: "black"}}>
                 {point}
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      {/* Tabs Section */}
      <Row className="mt-5 justify-content-center align-items-center">
        {/* Left Arrow */}
        

        {/* Tabs */}
        {visibleTabs.map((tab) => (
          <Col xs={6} sm={4} md={3} key={tab.title} className="mb-3">
            <Card
              className={`p-3 text-center shadow-sm tab-card  ${activeTab.title === tab.title ? "active-tab" : ""}`}
              onClick={() => setActiveTab(tab)}
              style={{ height: "100px" }}
            >
              <h6 className="fw-bold">{tab.title}</h6>
            </Card>
          </Col>
        ))}

        {/* Right Arrow */}
        <Col xs="auto flex">
        <div className="p-3">
          <Button
            onClick={handleNext}
            disabled={startIndex + 4 >= servicetabData.length}
            className="arrow-btn"
            aria-label="Next Tabs"
          >
            ▶
          </Button>
          </div>
          <div className="p-3">
          <Button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="arrow-btn"
            aria-label="Previous Tabs"
          >
            ◀
          </Button>
          </div>
        </Col>
      </Row>
   

      {/* Custom CSS */}
      <style jsx>{`
        .tab-card {
          cursor: pointer;
          border-radius: 12px;
          transition: all 0.3s ease-in-out;
        }
        .tab-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }
        .active-tab {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
        }
        .arrow-btn {
          background: #007bff;
          border: none;
          padding: 8px 16px;
          font-size: 20px;
        }
        .arrow-btn:disabled {
          background: #ccc;
        }
      `}</style>
    </Container>
  );
}
