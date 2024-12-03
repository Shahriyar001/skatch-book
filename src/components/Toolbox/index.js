import React from "react";

const Toolbox = () => {
  const updateBrushSize = (e) => {};

  return (
    <div>
      <div>
        <h4>Stroke Color</h4>
        <div>
          <div />
        </div>
      </div>
      <div>
        <h4>Brush Size</h4>
        <div>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
