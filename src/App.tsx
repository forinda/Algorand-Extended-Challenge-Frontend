import React from "react";
import About from "./components/About";
import Account from "./components/Account";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return <div>
    <Header/>
    <Hero/>
    <Account/>
    <About/>
    <Footer/>
  </div>;
};

export default App;
