import { motion, useViewportScroll, useTransform } from "framer-motion"
import React, { useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './App.css';

AOS.init();

function App() {
  const { scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5])
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100])


  return (
    <div className="App">
      <div>
        <h1 data-aos="fade-in">Ernest Rutherford</h1>
      </div>
    </div>
  );
}

export default App;
