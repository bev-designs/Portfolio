import React from 'react';
import slider from './slider.scss'
import Slider from "react-slick";

const ProjectsSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear'
      };
      
      const images = [
          'files/planner.png',
          'files/quotes.png',
          'files/drum-machine.png',
          'files/roman-converter.png',
          'files/markdown.png'
        ]

      return (
          <div className="ProjectsContainer">
            <div className='container'>
            <h2 className='title'>My Work</h2>
            <Slider  {...settings}  >
              <div className='card-wrapper'>
                  <div className='card'>
                      <div className='card-image'>
                          <img src={images[0]} />
                      </div>
                      <ul className='social-icon'>
                          <li><a className='a' href='https://github.com/bev-designs/planner'><ion-icon name="logo-github" className='icon'></ion-icon></a></li>
                          <li><a className='a' href='https://bev-designs.github.io/planner/'><ion-icon name="logo-chrome" className='icon'></ion-icon></a></li>
                      </ul>
                      <div className='details'>
                          <p>Task Planner</p>
                      </div>
                  </div>
              </div>
              <div className='card-wrapper'>
                  <div className='card'>
                      <div className='card-image'>
                          <img src={images[1]} />
                      </div>
                      <ul className='social-icon'>
                          <li><a className='a' href='https://github.com/bev-designs/Quotes-Generator'><ion-icon name="logo-github" className='icon'></ion-icon></a></li>
                          <li><a className='a' href='https://bev-designs.github.io/Quotes-Generator/'><ion-icon name="logo-chrome" className='icon'></ion-icon></a></li>
                      </ul>
                      <div className='details'>
                          <p>Random Ouotes Generator</p>
                      </div>
                  </div>
              </div>
              <div className='card-wrapper'>
                  <div className='card'>
                      <div className='card-image'>
                          <img src={images[2]}  style={{ objectFit: 'fill'}}/>
                      </div>
                      <ul className='social-icon'>
                          <li><a className='a' href='https://github.com/bev-designs/Drum-machine'><ion-icon name="logo-github" className='icon'></ion-icon></a></li>
                          <li><a className='a' href='https://bev-designs.github.io/Drum-machine/'><ion-icon name="logo-chrome" className='icon'></ion-icon></a></li>
                      </ul>
                      <div className='details'>
                          <p>Drum Machine</p>
                      </div>
                  </div>
              </div> 
              <div className='card-wrapper'>
                  <div className='card'>
                      <div className='card-image'>
                          <img src={images[3]} />
                      </div>
                      <ul className='social-icon'>
                          <li><a className='a' href='https://github.com/bev-designs/Numbers-to-Roman-Numerals'><ion-icon name="logo-github" className='icon'></ion-icon></a></li>
                          <li><a className='a' href='https://bev-designs.github.io/Numbers-to-Roman-Numerals/'><ion-icon name="logo-chrome" className='icon'></ion-icon></a></li>
                      </ul>
                      <div className='details'>
                          <p>Numbers - Roman Numeral Converter</p>
                      </div>
                  </div>
              </div>
              <div className='card-wrapper'>
                  <div className='card'>
                      <div className='card-image'>
                          <img src={images[4]} />
                      </div>
                      <ul className='social-icon'>
                          <li><a className='a' href='https://github.com/bev-designs/markdown-previewer'><ion-icon name="logo-github" className='icon'></ion-icon></a></li>
                          <li><a className='a' href='https://bev-designs.github.io/markdown-previewer/'><ion-icon name="logo-chrome" className='icon'></ion-icon></a></li>
                      </ul>
                      <div className='details'>
                          <p>Markdown Previewer</p>
                      </div>
                  </div>
              </div>
            </Slider>

          
             </div>
          </div>
        );
}  

export default ProjectsSection;