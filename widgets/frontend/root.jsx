import React from "react";
import Clock from "./clock";
import Tabs from "./tabs";

const tabs = [
  {
    title: "one",
    content: "first pane here",
  },
  {
    title: "two",
    content: "second pane here",
  },
  {
    title: "three",
    content: "third pane here",
  },
];

const Root = () => {
  return (
    <div>
      <Clock />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Root;

// class Root extends React.Component {
//   render() {
//     return <Clock />;
//   }
// }
