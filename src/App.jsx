import React from 'react';
import './App.css';
import { InchToFoot } from './components/InchToFoot';
import { FootToInch } from './components/FootToInch';
import AreaConversion from './components/AreaConversion';

const App = () => {
    return (
        <div className='main'>
            <div className="app">
              <h2>Inch-Foot Conversion</h2> 
                <InchToFoot />
                <FootToInch />
                <AreaConversion />
                <p>Thank you for using the conversion : <span>Ali Murtaza</span></p>
                <div className="contact">
                    <p>Contact me: </p>
                    <a href="https://wa.me/qr/W7QWQYF5RLUSB1"><img src="whatsapp.webp" /></a>
                </div>  
                
            </div>
            
        </div>
    );
}

export default App;
