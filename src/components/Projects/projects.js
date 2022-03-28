import React from 'react';
import Projects from './Projects.css'
import Slider from "react-slick";



const ProjectsNew = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
      const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhkl1xZeKtG95pqBLQGrk3UtrTsYGKnR4mVYgoBDs9bzLir7ziWwww1CTXpmlJ2jRx0A&usqp=CAU',
          'https://us.123rf.com/450wm/andreypopov/andreypopov1911/andreypopov191100729/134609897-small-house-model-with-question-marks-over-reflective-desk-against-grey-background.jpg?ver=6',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZWr_9VvengJe1hQ903aoAToFqnuMijQVww&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhkl1xZeKtG95pqBLQGrk3UtrTsYGKnR4mVYgoBDs9bzLir7ziWwww1CTXpmlJ2jRx0A&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmhkl1xZeKtG95pqBLQGrk3UtrTsYGKnR4mVYgoBDs9bzLir7ziWwww1CTXpmlJ2jRx0A&usqp=CAU'
        ]


      return (
          <div className="ProjectsContainer">
        <div className='container'>
          <h2 style={{}}>My Work</h2>
          <Slider {...settings}>
             {images.map((item,index) => {
                 return <div key={index}>
                     <img className='img-fluid' src={item} />
                 </div>   
             })}
          </Slider>
          
        </div>
        </div>
      );
}  

export default ProjectsNew;