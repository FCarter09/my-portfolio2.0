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
                <h1 className="userIcon"><FontAwesomeIcon icon={faUser} size="6x" style={{ color: 'rgb(24, 94, 119)' }}/></h1>
            </div>
            <p className="about-me">
                I am a Virginia-based full-stack web developer who began my journey into tech in 2022. After completing a full-stack web development 
                certification program in November 2022, I have been focused on building practical, user-centered applications and continuing to grow my skill set.
                Before transitioning into tech, I spent 8 years working as a case manager in the Richmond, Virginia metro area, supporting at-risk youth and their 
                families across school, home, and community environments. That experience shaped my ability to communicate effectively, build strong relationships, 
                and approach challenges with critical thought. Today, I bring that same people-first mindset into my development work. I enjoy solving problems 
                creatively, designing intuitive user experiences, and continuously learning new technologies. I am especially motivated by opportunities where I can 
                make a meaningful impact through both code and collaboration. I am currently seeking opportunities where I can continue growing as a developer 
                and contribute to projects that value thoughtful design, strong teamwork, and real-world impact.

            </p>
        </section>
        
    );
}

export default About;