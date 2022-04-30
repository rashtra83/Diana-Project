import "./App.css";
import AboutDiana from "./components/AboutDiana/AboutDiana";
import WhatMakesUsDifferent from "./components/WhatMakesUsDifferent/WhatMakesUsDifferent";
import LiberateYourEveryDayWellness from "./components/LiberateYourEverydayWellness/LiberateYourEverydayWellness";
import UpgradeYourSelfCare from "./components/UpgradeYourSelfCare/UpgradeYourSelfCare";
import TrackYourMood from "./components/TrackYourMood/TrackYourMood";
import TrackYourPeriod from "./components/TrackYourPeriod/TrackYourPeriod";
import ConsultWithWellnessExperts from "./components/ConsultWithWellnessExperts/ConsultWithWellnessExperts";
import GetYourPersonalisedPeriodBox from "./components/GetYourPersonalisedPeriodBox/GetYourPersonalisedPeriodBox";
import DianaMessage from "./components/DianaMessage/DianaMessage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AboutDiana></AboutDiana>
      <WhatMakesUsDifferent></WhatMakesUsDifferent>
      <LiberateYourEveryDayWellness></LiberateYourEveryDayWellness>
      <UpgradeYourSelfCare></UpgradeYourSelfCare>
      <TrackYourMood></TrackYourMood>
      <TrackYourPeriod></TrackYourPeriod>
      <ConsultWithWellnessExperts></ConsultWithWellnessExperts>
      <GetYourPersonalisedPeriodBox></GetYourPersonalisedPeriodBox>
      <DianaMessage></DianaMessage>
      <Footer></Footer>
    </div>
  );
}

export default App;
