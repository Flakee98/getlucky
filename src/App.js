

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignIn from './Components/Pages/SignIn';
import SignUp from "./Components/Pages/SignUp"
import PastDrawResult from './Components/Pages/PastDrawResult';
import PastDrawShows from './Components/Pages/PastDrawShows';
import Winners from './Components/Pages/Winners';
import Otppage from './Components/Pages/Otppage';
import Home from './Components/Pages/Home';




function App() {
  return (
    <Router> 
      <Header />
  
      <Routes>
      <Route path="/" element={<SignIn/>}> </Route>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/pastdrawresult" element={<PastDrawResult/>} />
      <Route path="/pastdrawshows" element={<PastDrawShows/>} />
      <Route path="/winners" element={<Winners/>} />
      <Route path="/signupotp" element={<Otppage/>} />
      <Route path="/home" element={<Home/>} />

      </Routes>
  
      <Footer />
    </Router>
    // <div>
    //   <Header />

    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<SignIn/>}> </Route>
    //     {/* <Route path="/signup" element={<SignUp/>} /> */}
    //     {/* <Route path="/pasdrawresult" element={<PastDrawResult/>} /> */}


    //   </Routes>
    // </BrowserRouter>

    // <Footer />
    // </div>
  );
}

export default App;

