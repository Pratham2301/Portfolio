import React from "react";
import { Volunteerexperience } from "../portfolio";
import { Container, Row } from "reactstrap";

import Fade from 'react-reveal/Fade';

import VolunteerExperienceCard from "../components/VolunteerExperienceCard";

const VolunteerExperience = () => {
	return Volunteerexperience && (
		<section className="section section-lg">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-briefcase-24 text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-info">Volunteer Experience</h4>
					</div>
				</div>
				<Row className="row-grid align-items-start">
					{Volunteerexperience.map((data, i) => {
						return <VolunteerExperienceCard key={i} {...data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default VolunteerExperience;