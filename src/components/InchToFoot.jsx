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
  };

  return (
    <div className="inchtofoot">
      <input
        type="text"
        value={inchValue}
        onChange={(e) => setInchValue(e.target.value)}
        placeholder="Enter inch value"
      />
      <button onClick={handleInchConversion}>Convert</button>
      <div className="display">
        <h1>
          {foot}' {inch}''
        </h1>
      </div>
    </div>
  );
};
