import React, { useEffect, useState } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme/theme";
// import ParticleBackground from "./Components/ParticleBackground";
import Hero from "./Components/Hero";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {/* <ParticleBackground /> */}
      <Box minH="100vh" p={4}>
        <div className="App">
          <Hero data={resumeData.main} />
          {/* <Header data={resumeData.main} /> */}
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          {/* <Testimonials data={resumeData.testimonials} /> */}
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </div>
      </Box>
    </ChakraProvider>
  );
};

export default App;
