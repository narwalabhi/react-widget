import React, { useState } from "react";

const DropDown = (props) => {
  const { options, selected, onSelectedChange } = props;

  const [open, setOpen] = useState(false);

  const renderedOptions = options.filter(option => option.value !== selected.value).map((option) => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={()=> setOpen(!open)}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition': ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
