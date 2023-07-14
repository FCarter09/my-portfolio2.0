import React from 'react';
import '../../App.css';
// import your fontawesome library
import '../../fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function About() {
    return (
        <section className='about-section'>
            <h1 className="page-header">About Me</h1>
            <div>
                <h1 className="userIcon"><FontAwesomeIcon icon={faUser} size="6x" style={{ color: 'white' }}/></h1>
            </div>
            <p className="about-me">
                Hi, my name is Forest Carter. I am from Buckingham County, Virginia. 
                I began my journey in web development in May 2022. I attended a coding program at Richmond University where I 
                became certified as a Full-Stack Web Developer in November 2022. Before I began my transition into the tech field I was a case manager
                for about 8 years in the greater Richmond, Virginia area. As a case manager, I worked with at-risk youth and their families in a variety settings to include
                school, home, and community settings. My experience as a case manager has helped me to grow as a person as well as understanding
                the importance of relationships with clients and working alongside others. I have enjoyed the challenge of learning skills in
                web development. It allows me to embrace a more creative side of problem-solving and design.
                I look forward to continuing my learning process and growth in respects to this career.

            </p>
        </section>
        
    );
}

export default About;