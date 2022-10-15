
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';



function App() {
  const [page, setPage] = useState("About")

    // the useState hook is a function that will always return an array. 
    const [categories] = useState([
      {name: 'About'},
      {name: 'Projects' },
      {name: 'Contact'},
      {name: 'Resume' },
    ]);

  return (

      <div className="page">
          <Nav 
          categories={categories} 
          page={page}
          setPage={setPage}
          >
          </Nav>
        



        <main>
          {page === 'About' && 
            <About></About>}
          {page === 'Contact' &&
            <ContactForm></ContactForm>}
          {page === 'Projects' &&
            <Projects></Projects>}
          {page === 'Resume' &&
            <Resume></Resume>}
      
        </main> 
        <Footer></Footer>
        
      </div>
      
    
  );
}

export default App;
