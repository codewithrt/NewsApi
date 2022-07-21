// import logo from './logo.svg';
import './App.css';
// import Spinnerclimb from './my_commponents/Spinnerclimb';
import LoadingBar from 'react-top-loading-bar'
import Navbar from './my_commponents/Navbar';
import Newsmain from './my_commponents/Newsmain';
import { useState } from 'react';
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {
  const [Progress, setProgress] = useState(0)


  return (
    <>
      <BrowserRouter>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={Progress}

        />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Newsmain nartipage={12} category="general" progressload={setProgress} />}></Route>
          <Route exact path="/Home" element={<Newsmain nartipage={12} category="general" progressload={setProgress} />}></Route>
          <Route exact path="/Business" element={<Newsmain nartipage={12} category="business" progressload={setProgress} />}></Route>
          <Route exact path="/Entertainment" element={<Newsmain nartipage={12} category="entertainment" progressload={setProgress} />}></Route>
          <Route exact path="/Health" element={<Newsmain nartipage={12} category="health" progressload={setProgress} />}></Route>
          <Route exact path="/Science" element={<Newsmain nartipage={12} category="science" progressload={setProgress} />}></Route>
          <Route exact path="/Sports" element={<Newsmain nartipage={12} category="sports" progressload={setProgress} />}></Route>
          <Route exact path="/Technology" element={<Newsmain nartipage={12} category="technology" progressload={setProgress} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
