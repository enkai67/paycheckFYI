// import React, { useEffect, useState } from "react";
// import { testConnection } from "./api";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Compare from './pages/Compare';
import Navbar from './components/Navbar';
import TitleDirectory from './pages/TitleDirectory';

function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/title-directory" element={<TitleDirectory />} />
          </Routes>
      </Router>
  );
}

// 
// function App() {
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         const fetchData = async () => {
//             const data = await testConnection();
//             setMessage(data.message);
//         };
//         fetchData();
//     }, []);

//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h1>Frontend to Backend Connection Test</h1>
//             <p>{message ? message : "Connecting to backend..."}</p>
//         </div>
//     );
// }

export default App;
