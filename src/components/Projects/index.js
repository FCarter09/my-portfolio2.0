import React from 'react';
import '../../App.css';
import whatsCookingImage from '../../assets/images/whats-cooking.jpg';
import mediaShelfImage from '../../assets/images/media-shelf.jpg';
import quizChallengeImage from  '../../assets/images/quiz-challenge.jpg';
import noteTakerImage from '../../assets/images/note-taker.jpg';
import weatherAppImage from '../../assets/images/weather-app.jpg';
import petShopImage from '../../assets/images/pet-shop.jpg';



function Projects() {
    return(
        <section>
        <h1 className="page-header">Projects</h1>
        <div className="section-one">
                <div className="project-row">
                    <div className="single-project" id="whats-cooking">
                        <h2 className="title">What's Cooking?
                         |
                        <a href="https://github.com/FCarter09/whats-cooking.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://whats-cooking2022-9af3ae3a6d1a.herokuapp.com/"><img src={whatsCookingImage} alt="What's Cooking?"/></a>
                        <p className="description">Need new recipes? 'What's Cooking?' is full of ideas to add to your cooking arsenal 
                        or you can add your very own recipes for others to see. </p>      
                    </div>
                    <div className="single-project" id="media-shelf">
                        <h2 className="title">Media Shelf
                         |
                        <a href="https://github.com/FCarter09/Media-Shelf.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://fcarter09.github.io/Media-Shelf/"><img src={mediaShelfImage} alt="Media Shelf"/></a>
                        <p className="description">Need ideas for movies or books? Visit 'Media Shelf' where you can randomly search over 100 movies and books.
                         You can also save any movies or books of interests to your personal shelf for future reference. </p>   
                   </div>
                </div>
        </div>
        <div className="section-two">
                <div className="project-row">
                    <div className="single-project" id="quiz-challenge">
                        <h2 className="title">Quiz Challenge
                         |
                        <a href="https://github.com/FCarter09/Quiz-Challenge.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://fcarter09.github.io/Quiz-Challenge/"><img src={quizChallengeImage} alt="Quiz Challenge"/></a>
                        <p className='description'>Quiz Challenge is a simple quiz for those who are interested in testing fundamental knowledge of coding.
                        This app has a select few of questions to test basic coding knowledge.</p>
                    </div>
                    <div className="single-project" id="note-taker">
                        <h2 className="title">Note Taker
                         |
                        <a href="https://github.com/FCarter09/note-taker.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://note-taker2022-6ab55f36d259.herokuapp.com/"><img src={noteTakerImage} alt="Note Taker"/></a>
                        <p className='description'>Note Taker helps you to organize your thoughts and ideas. With Note Taker you will be
                        able to plan accordingly for project development or set reminders for yourself. </p>
                   </div>
                </div>
        </div>
        <div className="section-three">
                <div className="project-row">
                    <div className="single-project" id="weather-app">
                        <h2 className="title">Weather App
                        |
                        <a href="https://github.com/FCarter09/weather-app.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://fcarter09.github.io/weather-app/"><img src={weatherAppImage} alt="Weather App"/></a>
                        <p className='description'>Weather App is a basic application to help you keep track of your weather. 
                        Weather App provides the current and five-day weather forecast for the city of your choice.</p>
                     </div>
                    <div className="single-project" id="pet-shop">
                        <h2 className="title">Pet Shop
                        |
                        <a href="https://github.com/FCarter09/pet-shop.git"className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(226, 223, 226)' }}></i></a></h2>
                        <a href="https://pet-shop2022-2d79e031c89d.herokuapp.com/"><img src={petShopImage} alt="Pet Shop"/></a>
                        <p className='description'>(Minimal Viable Product). Pet Shop is an application designed for you and your pets. With Pet Shop, you can create a portfolio for your pets and select specific
                        services for your pets.</p>
                    </div>
                </div>
        </div>
    </section>

    )
}

export default Projects;
