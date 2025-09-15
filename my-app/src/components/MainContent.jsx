import React from "react";
import "./MainContent.css"; // 共通のCSSを使うならここで読み込み
import UploadScreen from "./UploadScreen.jsx";

function MainContent() {
  return (
    <main className="main-content">
      <UploadScreen />
    </main>
  );  
}

export default MainContent;