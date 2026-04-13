import React from 'react';
import '../../App.css';
import whatsCookingImage from '../../assets/images/whats-cooking.jpg';
import mediaShelfImage from '../../assets/images/media-shelf.jpg';
import quizChallengeImage from  '../../assets/images/quiz-challenge.jpg';
import noteTakerImage from '../../assets/images/note-taker.jpg';
import weatherAppImage from '../../assets/images/weather-app.jpg';
import bookSearchEngineImage from '../../assets/images/book-search-engine.jpg';



function Projects() {
    return(
        <section>
        <h1 className="page-header">Projects</h1>
        <div className="section-one">
                <div className="project-row">
                    <div className="single-project" id="whats-cooking">
                        <h2 className="title">What's Cooking?
                         |
                        <a href="https://github.com/FCarter09/whats-cooking.git" className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(24, 94, 119)' }}></i></a></h2>
                        <a href="https://whats-cooking2022-9af3ae3a6d1a.herokuapp.com/"><img src={whatsCookingImage} alt="What's Cooking?"/></a>
                        <p className="description"> 'What's Cooking?' is an application designed for users to upload and share cooking recipes with others. Users are able to sign-up and login
                            into their personal profile where they can post their personal food recipes for others to see. 
                            'What's Cooking?' enables users to interact by viewing and commenting on the recipes of others. Users are also able to scroll through recipes 
                            as well as search for specific dishes using ingredient keywords. </p> 
                        <p className='tech-stack'>Tech Stack: Handlebars | CSS | Javascript</p> 
                        <p className='live-demo'>Live Demo: <a href="https://www.dropbox.com/scl/fi/ezwkvq9wsj32jra6op63w/WhatsCookingDemo.mp4?rlkey=8i4eastcev3iyccld09t57u29&st=8e1qq3y6&dl=0" className="demo-link">What's Cooking Demo</a></p> 
                    </div>
                    <div className="single-project" id="media-shelf">
                        <h2 className="title">Media Shelf
                         |
                        <a href="https://github.com/FCarter09/Media-Shelf.git" className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(24, 94, 119)' }}></i></a></h2>
                        <a href="https://fcarter09.github.io/Media-Shelf/"><img src={mediaShelfImage} alt="Media Shelf"/></a>
                        <p className="description"> 'Media Shelf' was created to allow users to search for movies and books. The application is equipped with a search button
                            that randomly generates a movie or book  suggestion that may peak the users' interest. Users are able to google information about a movie or book from the website.
                            'Media Shelf' allows users to save any movies or books to their personal list for future reference. The website also allows users to order food from Grubhub. </p> 
                        <p className='tech-stack'>Tech Stack: HTML5 | CSS | Javascript </p> 
                        <p className='live-demo'>Live Demo: <a href="https://www.dropbox.com/scl/fi/lzyy1jeetjqxfu1pyt8py/MediaShelfDemo.mp4?rlkey=wab37nma1zc9ffeh18xoxugn3&st=lzk33q7b&dl=0" className="demo-link">Media Shelf Demo</a></p> 
                   </div>
                </div>
        </div>
        <div className="section-two">
                <div className="project-row">
                    <div className="single-project" id="quiz-challenge">
                        <h2 className="title">Quiz Challenge
                         |
                        <a href="https://github.com/FCarter09/Quiz-Challenge.git" className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(24, 94, 119)' }}></i></a></h2>
                        <a href="https://fcarter09.github.io/Quiz-Challenge/"><img src={quizChallengeImage} alt="Quiz Challenge"/></a>
                        <p className='description'> 'Quiz Challenge' gives users a select few of questions to test basic coding knowledge. This application provides a fun 
                            competitive environment as it presents a timer/point system. Users are given a timer in which they have to complete the test, points 
                            are added to the timer for correct answers and deducted from the timer for incorrect answers.
                            When the test ends, users can save their scores with only the top five scores being visible. </p>
                        <p className='tech-stack'>Tech Stack: HTML5 | CSS | Javascript  </p> 
                        <p className='live-demo'>Live Demo: <a href="https://www.dropbox.com/scl/fi/ry8tfl9qh9m5ek6025xry/QuizChallengeDemo.mp4?rlkey=xrrcsreiaj7as0xjvxw5fbf2c&st=pf1q5yv1&dl=0" className="demo-link">Quiz Challenge Demo</a></p> 
                    </div>
                    <div className="single-project" id="note-taker">
                        <h2 className="title">Note Taker
                         |
                        <a href="https://github.com/FCarter09/note-taker.git" className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(24, 94, 119)' }}></i></a></h2>
                        <a href="https://note-taker2022-6ab55f36d259.herokuapp.com/"><img src={noteTakerImage} alt="Note Taker"/></a>
                        <p className='description'> 'Note Taker' is an application that helps users organize their thoughts and ideas. With 'Note Taker', users are 
                            able to plan accordingly for their daily schedules by setting reminders. Users also can use this application for note keeping information 
                            for school or employment. Users can create a note to suit their needs for anything of their choice. </p>
                        <p className='tech-stack'>Tech Stack: HTML5 | CSS | Javascript | Node.js | Express.js </p> 
                        <p className='live-demo'>Live Demo: <a href="https://www.dropbox.com/scl/fi/wtas33tmiw6nmy99s5wco/NoteTakerDemo.mp4?rlkey=jdmfdoawdvx2d985u0a222qiq&st=7ub758x9&dl=0" className="demo-link">Note Taker Demo</a></p> 
                   </div>
                </div>
        </div>
        <div className="section-three">
                <div className="project-row">
                    <div className="single-project" id="weather-app">
                        <h2 className="title">Weather App
                        |
                        <a href="https://github.com/FCarter09/weather-app.git" className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(24, 94, 119)' }}></i></a></h2>
                        <a href="https://fcarter09.github.io/weather-app/"><img src={weatherAppImage} alt="Weather App"/></a>
                        <p className='description'> 'Weather App' is a weather application to help users keep track of basic weather elements such as temperature,
                            humidity, and wind. Weather app allows users to view current and five-day weather forcasts to track these basic weather 
                            elements for any city in the United States. The application also provides a 'saved feature' for recent searches where users can simply
                            click a city they have recently searched for the weather. </p>
                        <p className='tech-stack'>Tech Stack: HTML5 | CSS | Javascript </p> 
                        <p className='live-demo'>Live Demo: <a href="https://www.dropbox.com/scl/fi/y5xut4qq3tvgyuwigt2g0/WeatherAppDemo.mp4?rlkey=vbsqysvhgti3iqhg4w3kdg0ds&st=m3p80gkh&dl=0" className="demo-link"> Weather App Demo</a></p> 
                     </div>
                    <div className="single-project" id="book-search-engine">
                        <h2 className="title">Book Search Engine
                        |
                        <a href="https://github.com/FCarter09/book-search-engine.git" className="githubBtn">
                        <i className="fab fa-github mr-2" style={{ color: 'rgb(24, 94, 119)' }}></i></a></h2>
                        <a href="https://book-search-engine2022-591655cf8786.herokuapp.com/"><img src={bookSearchEngineImage} alt="Book Search Engine"/></a>
                        <p className='description'> 'Book Search Engine' is an application designed for users to search for books they may like to read. Users can sign-up/login 
                            and save their selected books to their personal profiles. Users are able to view authors and description of books. Users can always return later to 
                            decide which book they may want to read next or decide to delete books they are no longer interested in. </p>
                        <p className='tech-stack'>Tech Stack: HTML5 | CSS | Javascript | MongoDB | Express.js | React.js | Node.js </p> 
                        <p className='live-demo'>Live Demo:  <a href="https://www.dropbox.com/scl/fi/v1kdygtng8rsp90j9dlj9/BookSearchEngineDemo.mp4?rlkey=3kvg6b1xvtvasgxg14z6bvfmg&st=sa3hnnt3&dl=0" className="demo-link">Book Search Engine Demo</a> </p>
                        
                    </div>
                </div>
        </div>
    </section>

    )
}

export default Projects;
