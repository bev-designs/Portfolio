import React from 'react';
import './Home.css';
import img2 from './AboutImage.jpg';
import HomeCvButton from './HomeCvButton';

const HomeSection = () => {
    return (
            <div className="homeContainer">

                <div className="homeWrapper">
                    <div className="homeInfo">

                        <h2>A sensible frontend developer</h2>
                       
                        <p>I am located in Cape Town, there is nowhere else like it. Being around this scenic beauty is a source of my constant inspiration.</p>
                       
                        <p>I always try to develop with a unique point of view. l enjoy coding and l love creating things that can be useful to others.</p>
                   
                        <p>As technology is advancing and everything is becoming better than ever, l am happy to be a part of it and aim to build extra ordinary digital solutions.</p>
                        
                        <HomeCvButton />
                   
                    </div>
                </div>


                <div className="homeImage">
                    <img src={img2} className="bevImage img-fluid"/>
                </div>

            </div>

           
    )
}
        
export default HomeSection;