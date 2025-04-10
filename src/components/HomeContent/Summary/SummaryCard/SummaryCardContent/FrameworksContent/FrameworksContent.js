import React from 'react';
import { CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import { faReact } from '@fortawesome/free-brands-svg-icons';

import SummaryCardLayout from '../../SummaryCardLayout/SummaryCardLayout';
import SummaryCardSkillList from '../../SummaryCardSkillList/SummaryCardSkillList';

import '../SummaryCardContent.css';


const summary = (props) => {
    return (
        <SummaryCardLayout icon={faReact} iconSize="4x" cardTitle="Frameworks">

            <CardText>My favourite stack is
                <Link className="priority-text" to="/cv-site/profile" onClick={() => props.onSelectSkill("React")}> Flask </Link>
                on the backend and
                <Link className="priority-text" to="/cv-site/profile" onClick={() => props.onSelectSkill("React")}> React </Link>
                on the frontend.
            </CardText>


            <SummaryCardSkillList
                heading="Backend frameworks:"
                skillList={["Gin", "Rails", "FastAPI", "Django", "cakePHP", "Laravel"]} 
                onSelectSkill={props.onSelectSkill}
            />

            <SummaryCardSkillList
                heading="Frontend frameworks I use:"
                skillList={["Vue", "Redux", "React Router", "Flutter", "Reactstrap", "Vuetify", "Next", "jQuery"]} 
                onSelectSkill={props.onSelectSkill}
            />


        </SummaryCardLayout>
    );
};

export default summary;