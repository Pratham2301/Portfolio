import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg rounded-0 border-none" style={{ background: 'linear-gradient(90deg, rgba(70,65,149,1) 22%, rgba(142,83,185,1) 75%, rgba(226,81,200,1) 100%)' }}>
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: '200px' }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                ALL
              </p>
              <p className="text-white mt-3">{bio}</p>
              <div className='d-flex align-items-center justify-content-start'>
                <div className="my-3 icon-shape bg-gradient-white shadow rounded text-dark me-5">
                  <i className="ni ni-pin-3 text-info mr-2" />
                  {location}
                </div>
                <SocialLinks />

              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
