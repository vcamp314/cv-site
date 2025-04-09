import React from 'react';
import { CardText, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

import { faJsSquare } from '@fortawesome/free-brands-svg-icons';

import SummaryCardLayout from '../../SummaryCardLayout/SummaryCardLayout';
import SummaryCardSkillList from '../../SummaryCardSkillList/SummaryCardSkillList';

import '../SummaryCardContent.css';


const summary = (props) => {
    return (
        <SummaryCardLayout icon={faJsSquare} iconSize="4x" cardTitle="Languages">

            <CardText>My best languages are
                <Link className="priority-text" to="/cv-site/profile" onClick={() => props.onSelectSkill("JavaScript")}> TypeScript/JavaScript
                </Link>,
                <Link className="priority-text" to="/cv-site/profile" onClick={() => props.onSelectSkill("Go")}> Go</Link>,
                <Link className="priority-text" to="/cv-site/profile" onClick={() => props.onSelectSkill("Python")}> Python</Link>, and
                <Link className="priority-text" to="/cv-site/profile" onClick={() => props.onSelectSkill("Ruby")}> Ruby.</Link>
            </CardText>

            <SummaryCardSkillList
                heading="Other languages I use:"
                skillList={["HTML", "CSS", "Dart", "PHP", "SQL", "C#", "C++", "C", "XML"]} 
                onSelectSkill={props.onSelectSkill}
            />

            <CardSubtitle className="card-subtitles-spacing"><h6>Spoken languages:</h6></CardSubtitle>
            <ul className="list-unstyled">
                <li>English: (Native)</li>
                <li>Portuguese: (Near-Native)</li>
                <li>Japanese: (Working Proficiency) </li>
            </ul>
        </SummaryCardLayout>
    );
};

export default summary;