import React from 'react';
import '../../App.css';
import whatsCookingImage from '../../assets/images/whats-cooking.jpg';
import mediaShelfImage from '../../assets/images/media-shelf.jpg';
import workDaySchedulerImage from  '../../assets/images/workday-scheduler.jpg';
import noteTakerImage from '../../assets/images/note-taker.jpg';
import pizzaHuntImage from '../../assets/images/pizza-hunt.jpg';
import taskmasterProImage from '../../assets/images/taskmasterpro.jpg';



function Projects() {
    return(
        <section>
        <h1 className="page-header">Projects</h1>
        <div class="section-one">
                <div className="project-row">
                    <div className="single-project" id="whats-cooking">
                        <h2 className="title">What's Cooking?
                         |
                        <a href="https://github.com/FCarter09/whats-cooking.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://whats-cooking-recipebook.herokuapp.com/"><img src={whatsCookingImage} alt="What's Cooking?"/></a>  
                    </div>
                    <div className="single-project" id="media-shelf">
                        <h2 className="title">Media Shelf
                         |
                        <a href="https://github.com/FCarter09/Media-Shelf.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://fcarter09.github.io/Media-Shelf/"><img src={mediaShelfImage} alt="Media Shelf"/></a>
                   </div>
                </div>
        </div>
        <div className="section-two">
                <div className="project-row">
                    <div className="single-project" id="workday-scheduler">
                        <h2 className="title">Workday Scheduler
                         |
                        <a href="https://github.com/FCarter09/calender.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://fcarter09.github.io/calender/"><img src={workDaySchedulerImage} alt="Media Shelf"/></a>
                    </div>
                    <div className="single-project" id="notetaker">
                        <h2 className="title">Note Taker
                         |
                        <a href="https://github.com/FCarter09/note-taker.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://note-taker-planner.herokuapp.com/"><img src={noteTakerImage} alt="Media Shelf"/></a>
                   </div>
                </div>
        </div>
        <div class="section-three">
                <div className="project-row">
                    <div className="single-project" id="pizza-hunt">
                        <h2 className="title">Pizza Hunt
                        |
                        <a href="https://github.com/FCarter09/pizza-hunt.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://pizza-hunt-22.herokuapp.com/"><img src={pizzaHuntImage} alt="Media Shelf"/></a>
                     </div>
                    <div className="single-project" id="taskmaster-pro">
                        <h2 className="title">Taskmaster Pro
                        |
                        <a href="https://github.com/FCarter09/taskmaster-pro.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://fcarter09.github.io/taskmaster-pro/"><img src={taskmasterProImage} alt="Media Shelf"/></a>
                    </div>
                </div>
        </div>
    </section>

    )
}

export default Projects;