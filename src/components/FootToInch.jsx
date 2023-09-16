import React, { useState } from "react";

export const FootToInch = () => {
  const [footValue, setFootValue] = useState("");
  const [inchValue, setInchValue] = useState("");
  const [inch, setInch] = useState(0);

  const handleFootConversion = () => {
    if (!isNaN(inchValue)) {
      const ans = (footValue * 12) + Number(inchValue);
      setInch(ans);
    }
  };

  return (
    <div className="foottoinch">
      <div className="inputs">
        <input
          type="text"
          value={footValue}
          onChange={(e) => setFootValue(e.target.value)}
          placeholder="Enter foot value"
        />
        <input
          type="text"
          value={inchValue}
          onChange={(e) => setInchValue(e.target.value)}
          placeholder="Enter inch value"
        />
      </div>
      
      <button onClick={handleFootConversion}>Convert in Inch</button>
      <div className="display">
        <div>{inch}''</div>
      </div>
    </div>
  );
}; 
