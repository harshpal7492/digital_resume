import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import airbnb_black from "../../Assets/Projects/airbnb_black.png";
import linkedin_black from "../../Assets/Projects/linkedin_black.jpg";
import taggr_logo from "../../Assets/Projects/taggr_logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airbnb_black}
              isBlog={false}
              title="Airbnb"
              description="SPA just like offical one."
              link="https://github.com/Harshpall/airbnb-front"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkedin_black}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Clone of linkedIn front-end."
              link="https://github.com/Harshpall/linkedIn"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taggr_logo}
              isBlog={false}
              title="taggr"
              description="Iot based application using flutter for controlling sensor's data from Mobile."
              link="https://github.com/Harshpall/linkedIn"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
