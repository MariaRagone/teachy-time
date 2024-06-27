import Footer from './Footer';
import Header from './Header';
import Missing from './Missing';
import Week1 from './Week1';
import Home from './Home';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

const App = () => {
  return (
    <div>
      <Header title = "Teachy Time"/>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/week1' element={<Week1 />} />
          <Route path='*' element={<Missing />} />
        </Routes>


      </Router>
      <Footer />

    </div>
  );
};
export default App;
