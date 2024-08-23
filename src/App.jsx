import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import All from './Components/All';
import FullStack from './Components/Fullstack';
import DataScience from './Components/DataScience';
import Cyber from './Components/Cyber';
import Career from './Components/Careers';

const DefaultElement = () => {
  return (
    <>
      <h4>No page found, please check the URL</h4>
      <Link to="/">Home</Link>
    </>
  );
};


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<All />} />
          <Route path='/Fullstack' element={<FullStack />} />
          <Route path='/DataScience' element={<DataScience />} />
          <Route path='/CyberSecurity' element={<Cyber />} />
          <Route path='/Career' element={<Career />} />
          <Route path='*' element={<DefaultElement />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
