import React from 'react';
import services from './services.scss';

const Services = () => {
     
    return (
        <div className="serv" style={{background: '#181818', color: 'rgb(252, 240, 225)', textAlign: 'center'}}>

            <h2 id="header" style={{padding: '0 0 4rem 0'}}>Services</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem'}}>
                <div className="services">
                    <ion-icon name="code-slash-outline" style={{ background: 'none', fontSize: '2rem', color: 'grey'}}></ion-icon>
                    <h2>web development</h2>
                    <p style={{ maxWidth: '22rem', marginTop: '2rem' }}>I develop beautiful and rebuild websites with great ui and high performances. Looking for a developer who will provide quality content on your website and constant updates? 
                    <a href="https://wa.me/+27641211582" style={{ marginLeft: '1rem', textDecoration: 'none', color: 'grey '}}>Contact me.</a> 
                    </p>
                </div>

                <div className="services">
                    <ion-icon name="desktop-outline" style={{ background: 'none', fontSize: '2rem', color: 'grey'}}></ion-icon>
                    <h2>web design</h2>
                    <p style={{ maxWidth: '22rem', marginTop: '2rem' }}>I give my work a unique look with the ui/ux design. For better structure and relative attractive designs to give your visitors a reason to come back?
                    <a href="https://wa.me/+27641211582" style={{ marginLeft: '1rem', textDecoration: 'none', color: 'grey '}}>Contact me.</a> 
                    </p>
                </div>

            </div>

            
        </div>
    )

}

export default Services;