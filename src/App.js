import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from './components/NavBar/NavBar';
import Services from './components/Projects/Services';
import Footer from './components/Footer/FooterSection';
import FooterSection from './components/Footer/FooterSection';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const App = () => {
    return (
      <Router>
        <NavBar />

       <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          <Route path="/about" component={About} exact>
            <About />
          </Route>
          <Route path="/projects" component={Projects} exact>
            <Projects /> 
          </Route>
          <Route path="/contact" component={Contact} exact>
            <Contact />
          </Route>
         
        </Switch>

        <Services />

        <FooterSection />

      </Router>

      
    );
  }

export default App;