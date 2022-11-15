import "./App.css";
import Body from "./bodyComp/body.js";
import Mainbody from "./bodyComp/mainBody.js";
import Component from "./component1/Component1";
import Header from "./HeaderComp/Header";
import Component2 from "./components23&&4/component2";
import Component3 from "./components23&&4/components3";
import Component4 from "./components23&&4/components4";
import Component5 from "./components567&&foter/component5";
import Component6 from "./components567&&foter/component6";
import Component7 from "./components567&&foter/component7";
function App() {
  return (
    <div>
      <Header />
      <Body />
      <Mainbody />
      <Component />
      <Component2 />
      <Component3 />
    <Component4/>
      <Component5 />
      <Component6 />
      <Component7 />
    </div>
  );
}

export default App;
