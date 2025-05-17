// import MyComponent, { MyComponent2 } from "./components/01-my-component/MyComponent";

import ReactBootstrap from "./components/09-bootstrap/ReactBootstrap";
import VanillaBootstrap from "./components/09-bootstrap/VanillaBootstrap";

// import ProfileCard from "./components/08-profile-card/ProfileCard";

// import profileData from "./assets/data/profile-card.json";

// import Images from "./components/07-images/Images";

// import ChildComponent from "./components/05-props/ChildComponent";
// import ParentComponent from "./components/05-props/ParentComponent";
// import DigitalClock2 from "./components/digital-clock-2/DigitalClock2";

// import CardContainer from "./components/05-props/CardContainer";

// import DataBeReceived from "./components/05-props/DataBeReceived";

// import DigitalClock1 from "./components/04-digital-clock-1/DigitalClock1";

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
      {/* <DigitalClock1 /> */}
      {/* <DataBeReceived firstName="John" lastName="Doe" /> */}
      {/* <CardContainer /> */}
      {/* 
      <ParentComponent>
        <ChildComponent />
        <p>Lorem ipsum dolor sit amet.</p>
      </ParentComponent> */}

      {/* <DigitalClock2 bgColor="crimson" textColor="pink" />
      <DigitalClock2 bgColor="darkblue" textColor="salmon" />
      <DigitalClock2 bgColor="darkgreen" textColor="blueviolet" /> */}

      {/* <Images /> */}

      {/* <ProfileCard
        name="Walker"
        location="Nashville, Tennessee"
        imgSrc=""
        shot="2"
        followers="234"
        following="327"
      />

      <ProfileCard
        name="Annabelle"
        location="Berlin, Germany"
        imgSrc="/profile.jpg"
        shot="5"
        followers="100"
        following="200"
      />

      <ProfileCard
        {...profileData}
        shot={profileData.statistics[0].value}
        followers={profileData.statistics[1].value}
        following={profileData.statistics[2].value}
      /> */}

      {/* <VanillaBootstrap /> */}
      <ReactBootstrap />
    </div>
  );
}
