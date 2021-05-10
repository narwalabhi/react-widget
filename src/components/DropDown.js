import React, { useEffect, useRef, useState } from "react";

const DropDown = (props) => {
  const { options, selected, onSelectedChange, label} = props;

  const [open, setOpen] = useState(false);
  const ref = useRef();

//   useEffect(() => {
//     document.body.addEventListener(
//       "click",
//       (event) => {
//           if(ref.current.contains(event.target)){
//               return null;
//           }
//         setOpen(false);
//       },
//       { capture: true }
//     );
//   },[]);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true, 
      });
    };
  }, []);

  const renderedOptions = options
    .filter((option) => option.value !== selected.value)
    .map((option) => {
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
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
