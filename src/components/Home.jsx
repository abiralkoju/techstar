import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
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

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            velit minus non, qui commodi accusantium quam voluptatum cum sit
            eligendi vitae aut illum expedita enim sed quia autem cupiditate
            ad?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem cumque autem atque suscipit provident veritatis quod
            eligendi, architecto nobis nemo.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div>
              <AiFillInstagram />
              <p>Google</p>
            </div>

            <div>
              <AiFillFacebook />
              <p>Google</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
