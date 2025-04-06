import React from "react";
import Banner from "../Components/Banner";
import VolunteerNeedsNow from "../Components/VolunteerNeedsNow";
import VolunteerSection from "../Components/VolunteerSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <VolunteerNeedsNow />
      <VolunteerSection />
    </div>
  );
};

export default Home;
