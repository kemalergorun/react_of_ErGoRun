// import MyComponent, { MyComponent2 } from "./components/01-my-component/MyComponent";

import DigitalClock1 from "./components/04-digital-clock-1/DigitalClock1";

// import ExternalStyling from "./components/03-styles/ExternalStyling";
// import InlineStyling from "./components/03-styles/InlineStyling";
// import InternalStyling from "./components/03-styles/InternalStyling";
// import ModuleStyling from "./components/03-styles/ModuleStyling";
// import ScssModuleStyling from "./components/03-styles/ScssModuleStyling";
// import ScssStyling from "./components/03-styles/ScssStyling";

// import Jsx3 from "./components/02-jsx/Jsx3";

// import Jsx2 from "./components/02-jsx/Jsx2";

// import Jsx1 from "./components/02-jsx/Jsx1";

export default function App() {
  return (
    <div id="app">
      <h1
        style={{
          textAlign: "center",
          color: "crimson",
        }}
      >
        MY APP
      </h1>
      <hr />
      {/* <MyComponent />
      <MyComponent2 /> */}
      {/* <Jsx1 /> */}
      {/* <Jsx2 /> */}
      {/* <Jsx3 /> */}
      {/* <InlineStyling />
      <InternalStyling />
      <ExternalStyling />
      <ModuleStyling />
      <ScssStyling />
      <ScssModuleStyling /> */}
      <DigitalClock1 />
    </div>
  );
}
