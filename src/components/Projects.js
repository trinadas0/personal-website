import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Book Tracker with PHP and SQL",
      description: "A simple Book Tracker application built with PHP and MySQL.",
      imgUrl: projImg2,
      link: "https://booktracker.das24.myweb.cs.uwindsor.ca/",
    },
    {
      title: "PyTorch Image Classification",
      description: "Building a simple CNN using PyTorch.",
      imgUrl: projImg1,
      link: "https://github.com/trinadas0/pytorch-image-classification",
    },
    {
      title: "PyTorch Image Classification",
      description: "Building a simple CNN using PyTorch.",
      imgUrl: projImg1,
      link: "https://github.com/trinadas0/pytorch-image-classification",
    },
    {
      title: "PyTorch Image Classification",
      description: "Building a simple CNN using PyTorch.",
      imgUrl: projImg1,
      link: "https://github.com/trinadas0/pytorch-image-classification",
    },
    {
      title: "PyTorch Image Classification",
      description: "Building a simple CNN using PyTorch.",
      imgUrl: projImg1,
      link: "https://github.com/trinadas0/pytorch-image-classification",
    },
    {
      title: "PyTorch Image Classification",
      description: "Building a simple CNN using PyTorch.",
      imgUrl: projImg1,
      link: "https://github.com/trinadas0/pytorch-image-classification",
    },
  ];

  return (
<section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* New div for the rounded background */}
                  <div className="projects-bg">
                    <h2>Projects</h2>
                    <p>Explore my diverse range of projects, showcasing skills in software development, UX/UI design, and data science.</p>
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
