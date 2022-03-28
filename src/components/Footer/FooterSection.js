import React from 'react';
import Footer from './Footer.css';

const FooterSection = () => {
    return (
        <div className="footer" style={{ background: '#151515', color: 'rgb(252, 240, 225)', padding: '3rem', textAlign: 'center'}}>

                <div className="links">

                    <a href="https://github.com/bev-designs">
                        <ion-icon name="logo-github" style={{ background: 'none', fontSize: '1.5rem', color: 'grey'}}></ion-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/beverley-johannie-2a299a206/">
                        <ion-icon name="logo-linkedin" style={{ background: 'none', fontSize: '1.5rem', color: 'grey'}}></ion-icon>
                    </a>
                    <a href="https://www.facebook.com/bevjojola">
                        <ion-icon name="logo-facebook" style={{ background: 'none', fontSize: '1.5rem', color: 'grey'}}></ion-icon>
                    </a>
                    <a href="https://twitter.com/Bevjojo17/">
                        <ion-icon name="logo-twitter" style={{ background: 'none', fontSize: '1.5rem', color: 'grey'}}></ion-icon>
                    </a>
                    <a href="http://www.instagram.com/bevdesigns001">
                        <ion-icon name="logo-instagram" style={{ background: 'none', fontSize: '1.5rem', color: 'grey'}}></ion-icon>
                    </a>
                </div>

            <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: '.8rem', borderTop: '1 solid white'}}>&copy; 2022 . Beverley Johannie | Designed by bev-designs</p>
        
        </div>
    )
}

export default FooterSection;