/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Abhishek Kumar",
  title: "Video editor & Content Creator",
  email: "kabhishek@gmail.com",
  gitHub: "https://github.com/Abhishek96960",
  instagram: "https://www.instagram.com/abhishek_.013?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==",
  linkedIn: "https://www.linkedin.com/in/abhishek-kumar96960/",
  medium: "",
  twitter: "https://twitter.com/Abhishe73284055",
  youTube: "https://www.youtube.com/channel/UCzHzslvsnHrPNgBu3txQy8A",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
