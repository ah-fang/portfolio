import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  // edit these whiule still rendering images??
  const [categories] = useState([
    {
      name: 'About Me', description: 'Description'
    },
    { name: 'Portfolio', description: 'Description' },
    { name: 'Contact', description: 'Description' },
    { name: 'Resume', description: 'Description' }
  ]); 
  
  // TODO: change to aboutSelected and default true
  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]); 
  return (
    <div className="App">
        {/* 
        WHEN I view the header
        THEN I am presented with the developer's name and navigation 
        with titles corresponding to different sections of the portfolio
         */}
        <Nav
          categories = {categories}
          setCurrentCategory = {setCurrentCategory}
          currentCategory = {currentCategory}
          contactSelected = {contactSelected}
          setContactSelected = {setContactSelected} 
        ></Nav>

      <main>
        <About></About>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>

          </>
        ) : (
            <ContactForm></ContactForm>
        )}
      </main>
      <main className='App-main'>
        {/* section for content */}
      </main>
      <footer className='App-footer'>
        {/* text or icon links to the developer’s GitHub and 
        LinkedIn profiles, and their profile on a third 
        platform (Stack Overflow, Twitter)  */}
        <a href='https://github.com/ah-fang' className='App-link'>GitHub</a>
        <a href='https://www.linkedin.com/in/andrea-hughes-3b1b94177/' className='App-link'>LinkedIn</a>
        <a href='https://twitter.com/AndreaH85273363' className='App-link'>Twitter</a>
      </footer>
    </div>
  );
}

export default App;
