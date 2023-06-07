import React from "react";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechStar</h1>
          <p>Provides tech support to you.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />

        <div>
          <p>
            We are one of the best in business. Hardware and software every
            problem are to be solved by us.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
