import React from 'react';
import { CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import SummaryCardLayout from '../../SummaryCardLayout/SummaryCardLayout';
import SummaryCardSkillList from '../../SummaryCardSkillList/SummaryCardSkillList';

import '../SummaryCardContent.css';


const summary = (props) => {
    return (
        <SummaryCardLayout icon={faLaptopCode} iconSize="4x" cardTitle="Other Skills">

            <CardText>I advocate
                <Link className="priority-text" to="/cv-site/profile" onClick={() => props.onSelectSkill("TDD")}> TDD </Link> methodology and the use of
                <Link className="priority-text" to="/cv-site/profile" onClick={() => props.onSelectSkill("automated unit testing")}> automated unit testing.</Link>
            </CardText>

            <SummaryCardSkillList
                heading="I test with:"
                skillList={["Pytest", "Jest/Enzyme", "Cypress", "JUnit", "RSpec"]}
                onSelectSkill={props.onSelectSkill}
            />

            <SummaryCardSkillList
                heading="Other technologies I use:"
                skillList={["Git", "MySQL", "Postgres", "gRPC", "OAuth", "Cookiecutter", "Multi-threading", "MVC", "OOP"]} 
                onSelectSkill={props.onSelectSkill}
            />
        </SummaryCardLayout>
    );
};

export default summary;