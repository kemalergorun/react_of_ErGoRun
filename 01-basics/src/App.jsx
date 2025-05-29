// import MyComponent, { MyComponent2 } from "./components/01-my-component/MyComponent";

import FormikYup2 from "./components/22-formik-yup/FormikYup2";

// import FormikYup1 from "./components/22-formik-yup/FormikYup1";

// import FormValidationManually from "./components/21-forms/FormValidationManually";

// import Form3 from "./components/21-forms/Form3";

// import Form2 from "./components/21-forms/Form2";

// import Form1 from "./components/21-forms/Form1";

// import ParentComponent from "./components/20-lifting-state-up/ParentComponent";

// import DigitalClock3 from "./components/16-digital-clock-3/DigitalClock3";
// import UseRef from "./components/17-use-ref/UseRef";
// import ClassTypeComponent from "./components/18-component-types/ClassTypeComponent";
// import FunctionTypeComponent from "./components/18-component-types/FunctionTypeComponent";
// import FetchCountries from "./components/19-fetching-data/FetchCountries";
// import FetchingData from "./components/19-fetching-data/FetchingData";

// import Counter2 from "./components/15-counter-2/Counter2";

// import { useState } from "react";
// import UseEffect from "./components/14-use-effect/UseEffect";
// import Button from "react-bootstrap/esm/Button";

// import Counter1 from "./components/13-counter-1/Counter1";

// import Hooks from "./components/12-hooks/Hooks";

// import Events from "./components/11-events/Events";

// import ReactIcons from "./components/10-icon-libraries/ReactIcons";

// import ReactBootstrap from "./components/09-bootstrap/ReactBootstrap";
// import VanillaBootstrap from "./components/09-bootstrap/VanillaBootstrap";

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
  // const [isShow, setIsShow] = useState(true);

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
      {/* <ReactBootstrap /> */}

      {/* <ReactIcons /> */}
      {/* <Events /> */}
      {/* <Hooks /> */}
      {/* <Counter1 /> */}
      {/* <Button
        className="my-5 w-50 mx-auto d-block"
        onClick={() => setIsShow((prev) => !prev)}
      >
        {isShow ? "Unmount Component" : "Mount Component"}
      </Button>
      {isShow && <UseEffect />} */}

      {/* <Counter2 /> */}

      {/* <DigitalClock3 /> */}
      {/* <UseRef /> */}
      {/* <FunctionTypeComponent hello="hell1o" /> */}
      {/* <ClassTypeComponent hello="hello1" /> */}
      {/* <FetchingData /> */}
      {/* <FetchCountries /> */}
      {/* <ParentComponent /> */}
      {/* <Form1 /> */}
      {/* <Form2 /> */}
      {/* <Form3 /> */}
      {/* <FormValidationManually /> */}
      {/* <FormikYup1 /> */}
      <FormikYup2 />
    </div>
  );
}
