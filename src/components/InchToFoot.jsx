import React, { useState } from "react";

export const InchToFoot = () => {
  const [inchValue, setInchValue] = useState("");
  const [inch, setInch] = useState(0);
  const [foot, setFoot] = useState(0);

  const handleInchConversion = () => {
    if (!isNaN(inchValue)) {
      const footValue = Math.floor(inchValue / 12);
      setFoot(footValue);

      const inchAns = inchValue % 12;
      setInch(inchAns);
    }
    if(inchValue === ''){
      alert('Please enter valid inch only')
    }
  };

  return (
    <div className="inchtofoot">
      <input
        type="text"
        value={inchValue}
        onChange={(e) => setInchValue(e.target.value)}
        placeholder="Enter inch value"
      />
      <button onClick={handleInchConversion}>Convert in Foot</button>
      <div className="display">
        {foot}' {inch}''
      </div>
    </div>
  );
};
