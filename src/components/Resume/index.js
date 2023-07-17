import React from 'react';
import '../../App.css';
import myDocument from '../../assets/documents/Forest Carter Resume.pdf'



function Resume() {
    return(
        <section>
            <h1 className="page-header">Resume</h1>
            <div className="resume-document">
            <a href={myDocument} className="document" download>Click to download resume</a>
            </div>
            <div className="skill-title">
                <h3 className="frontend">Front-End Skills</h3>
            </div>
            <ul className="frontend-skill-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Responsive Design</li>
                <li>JavaScript</li>
                <li>JQuery</li>

            </ul>
            <div className="skill-title">
                <h3 className="backend">Back-End Skills</h3>
            </div>
            <ul className="backend-skill-list">
                <li>NodeJS</li>
                <li>ExpressJS</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MVC</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>MERN</li>
            </ul>

        </section>

    )
}

export default Resume;