import React from 'react';
import { Card, CardBody, Badge } from 'reactstrap';
import { EducationType } from '../types/sections';
import Fade from 'react-reveal/Fade';

const EducationCard = ({
  schoolName,
  subHeader,
  duration,
  desc,
  grade,
  descBullets,
}: EducationType) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4 " style={{ height: 150, width: 800 }}>
        <CardBody>
          <div className="d-flex px-3" style={{ height: 150 }}>
            <div className="pl-4">
              <h5 className="text-info">{schoolName}</h5>
              <h6>{subHeader}</h6>
              <h5>
              <Badge color="info" className="mr-1 display-2">
                {duration}
              </Badge>
              {grade && (
                  <Badge color="primary" className="mr-1">
                    {grade}
                  </Badge>

              )}
              </h5>
              <p className="description mt-3">{desc}</p>
              <ul>
                {descBullets
                  ? descBullets.map((desc) => {
                    return <li key={desc}>{desc}</li>;
                  })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
