import React, { useState } from 'react';

const AreaConversion = () => {
    const [decimal, setDecimal] = useState('');
    const [sqFoot, setSqFoot] = useState('');

    const handleConversion = () => {
        if(decimal !== '' && !isNaN(decimal)){
            setSqFoot(decimal * 436);
        }
        if(sqFoot !== '' && !isNaN(sqFoot)){
            const ans = sqFoot/436;
            setDecimal(ans.toFixed(3));
        }
    }
    return (
        <div className='app'>
            <h2>Decimal to Sq.Foot</h2>
            <div className="inputs">
                <input 
                    type="text" 
                    placeholder='enter in decimal'
                    value={decimal}
                    onChange={(e) => setDecimal(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder='enter in sq.foot'
                    value={sqFoot}
                    onChange={(e) => setSqFoot(e.target.value)}
                />
            </div>
            <button onClick={handleConversion}>Convert</button>
        </div>
    );
}

export default AreaConversion;
