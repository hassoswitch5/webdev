
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppleImage from './fruits/AppleImage';
import BananaImage from './fruits/BananaImage';
import OrangeImage from './fruits/OrangeImage';
import StrawberryImage from './fruits/StrawberryImage';
import AppleInfo from './fruits/AppleInfo';
import BananaInfo from './fruits/BananaInfo';
import OrangeInfo from './fruits/OrangeInfo';
import StrawberryInfo from './fruits/StrawberryInfo';
import GrapeInfo from "./fruits/GrapeInfo";
import MangoInfo from "./fruits/MangoInfo";
import GrapeImage from "./fruits/GrapeImage";
import MangoImage from "./fruits/MangoImage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<div>
                    <AppleImage />
                    <BananaImage />
                    <OrangeImage />
                    <GrapeImage/>
                    <StrawberryImage />
                    <MangoImage/>
                </div>} />
                <Route path="/apples-info" element={<AppleInfo />} />
                <Route path="/bananas-info" element={<BananaInfo />} />
                <Route path="/oranges-info" element={<OrangeInfo />} />
                <Route path="/grapes-info" element={<GrapeInfo />} />
                <Route path="/strawberries-info" element={<StrawberryInfo />} />
                <Route path="/mango-info" element={<MangoInfo />} />
            </Routes>
        </Router>
    );
};

export default App;
