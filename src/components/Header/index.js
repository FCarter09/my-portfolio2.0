import React from 'react';
import '../../App.css';
import '../../index.css'


function Nav(props) {
     return (
        <header>
            
            <div className='my-name'>
                <h1 className="header-title">Forest Carter </h1>    
            </div>

            <nav>
             <ul className="nav-list">
                {props.categories.map((category) => 

                   <li className="categories"><span onClick={() => props.setPage(category.name)}>{category.name} </span>
                        
                  </li> 
                )}
              
             </ul>
            </nav>
        </header>   
    );
}

export default Nav;