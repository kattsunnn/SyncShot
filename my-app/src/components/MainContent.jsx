import React from "react";
import "./MainContent.css"; // 共通のCSSを使うならここで読み込み
import UploadScreen from "./UploadScreen.jsx";
import SyncScreen from "./SyncScreen.jsx";
import { Routes, Route } from "react-router-dom";

function MainContent() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/sync" element={<SyncScreen />} />
      </Routes>
    </main>
  );  
}

export default MainContent;