import React, { useState } from "react";
import Accordion from "./components/Accordion";
import DropDown from "./components/DropDown";
import Search from "./components/Search";

export default () => {
  const items = [
    {
      title: "What is react",
      content:
        "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
    },
    {
      title: "Why use React?",
      content:
        "React is used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. ... React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple",
    },
    {
      title: "How do you use React?",
      content: "You use React by making components.",
    },
  ];

  const options = [
    {
      label: "The color red",
      value: "red",
    },
    {
      label: "The color green",
      value: "green",
    },
    {
      label: "The color blue",
      value: "blue",
    },
  ];

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Search/> */}
      {/* <Accordion items={items}/> */}
      <DropDown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};
