import { Box } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Anket, Ders, Diger, Eposta, Home, Kayit, Mesaj, Program, SSS, Takvim, Transkript, Yurt } from "./pages";

const App = () => {
    return (
       <Router>
            <Box>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Ders" element={<Ders />}/>
                <Route path="/Program" element={<Program />} />
                <Route path="/Takvim" element={<Takvim />}/>
                <Route path="/Transkript" element={<Transkript />}/>
                <Route path="/Kayit" element={<Kayit />}/>
                <Route path="/Yurt" element={<Yurt />}/>
                <Route path="/Diger" element={<Diger />}/>
                <Route path="/Eposta" element={<Eposta />} />
                <Route path="/Mesaj" element={<Mesaj />}/>
                <Route path="/SSS" element={<SSS />}/>
                <Route path="/Anket" element={<Anket />}/>
            </Routes>
        </Box>
       </Router>
    );
}

export default App