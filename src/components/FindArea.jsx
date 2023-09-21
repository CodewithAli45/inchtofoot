import React, { useState } from 'react';


const FindArea = () => {
    const [inchOne, setInchOne] = useState('');
    const [inchTwo, setInchTwo] = useState('');
    const [footOne, setFootOne] = useState('');
    const [footTwo, setFootTwo] = useState('');
    const [area, setArea] = useState(0);
    
    const handleConversion = () => {
        const lengthInch = parseFloat(footOne) * 12 + +inchOne;
        const breadthInch = parseFloat(footTwo) * 12 + +inchTwo;

        const areaInFoot = (parseFloat(lengthInch) * parseFloat(breadthInch)) / 144;
        setArea(areaInFoot.toFixed(2))
    }

    function handleReset(){
        setInchOne('')
        setFootOne('');

        setInchTwo('');
        setFootTwo('');
        

    }
    return (
        <div className='app'>
            <h2>Calculate Area</h2>
            <div className="inputs area">
                <div className="length">
                    <label htmlFor="length">Enter length</label>
                    <input 
                        type="number" 
                        placeholder='enter foot'
                        value={footOne}
                        onChange={(e) => setFootOne(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder='enter inch'
                        value={inchOne}
                        onChange={(e) => setInchOne(e.target.value)}
                    />
                </div>
                <div className="breadth">
                    <label htmlFor="length">Enter breadth</label>
                    <input 
                        type="number" 
                        placeholder='enter foot'
                        value={footTwo}
                        onChange={(e) => setFootTwo(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder='enter inch'
                        value={inchTwo}
                        onChange={(e) => setInchTwo(e.target.value)}
                    />
                </div>
                
            </div>
            <div className="display">
                Area = {area} sq.ft
            </div>
            <div className="btns">
                <button onClick={handleConversion}>Convert</button>
                <button onClick={handleReset}>Clear</button>
            </div>
            

        </div>
    );
}

export default FindArea;
