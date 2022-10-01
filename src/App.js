import React from "react";

const App = () => {
  var Value = 100;
  var Value2 = 200;
  const Demo = () => {
    return <h1 style={{ color: "red" }}>100</h1>;
  };
  const DemoArray = () => {
    const arr_demo = ["C", "C++", "JJava", "React", "C#"];
    for (let i = 0; i < arr_demo.length; i++) {
      return <h3>{arr_demo[i]}</h3>;
    }
  };

  return (
    <div>
      <h1>{Value}</h1>
      <h1>{Value2}</h1>
      <h1>{Value / 10}</h1>
      <div>{Demo()}</div>
      <div>{DemoArray()}</div>
    </div>
  );
};

export default App;
