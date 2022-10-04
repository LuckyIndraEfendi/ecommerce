import React, { Component } from "react";
import Navbar from "./assets/components/Navbar";
import Carousel from "./assets/components/Carousel";
import MainContent from "./assets/components/MainContent";
import Footer from "./assets/components/Footer";

// Direct Top Up
import Freefire from "./assets/direct/Firefire";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Carousel />
        <MainContent />
        <Footer />
        <Freefire />
      </React.Fragment>
    );
  }
}
