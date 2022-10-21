import React from "react";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "../components/elements/Map";
import Modal from "../components/elements/Modal";

const render = (status) => {
  return <h1>{status}</h1>;
};

const Contact = () => {
  return (
    <div>
      <p>Contact</p>
      {/* <Wrapper apiKey="" render={render}>
        <Modal />
      </Wrapper> */}

      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8886373442456!2d78.3818949141067!3d17.417131188060768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb953f37782733%3A0x9d63b16a66e1123c!2sBuon%20Lavoro%20Info%20Tech!5e0!3m2!1sen!2sin!4v1660828309026!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </div>
  );
};

export default Contact;
