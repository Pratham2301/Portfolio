import React from 'react';
import { projects } from '../portfolio';
import { Container, Row } from 'reactstrap';
import ProjectsCard from '../components/ProjectsCard';

const Projects = () => {
  return (
    projects && (
      <section className="section section-lg mb-150" style={{background: 'linear-gradient(90deg, rgba(70,65,149,1) 22%, rgba(142,83,185,1) 75%, rgba(226,81,200,1) 100%)'}}>
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="ni ni-laptop text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Projects</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {projects.map((data, i) => {
              return <ProjectsCard key={i} {...data} />;
            })}
          </Row>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    )
  );
};

export default Projects;
