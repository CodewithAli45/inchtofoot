import React from 'react';
import './App.css';
import { InchToFoot } from './components/InchToFoot';
import { FootToInch } from './components/FootToInch';

const App = () => {
    return (
        <div className='app'>
            <h2>Inch-Foot Conversion</h2> 
            <InchToFoot />
            <FootToInch />
            <p>Thank you for using the conversion : <span>Ali Murtaza</span></p>
        </div>
    );
}

export default App;
