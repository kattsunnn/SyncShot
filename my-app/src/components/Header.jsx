import React from "react";
import "./Header.css"; // 共通のCSSを使うならここで読み込み

function Header() {
  return (
    <header className="header">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      />
      <h1 className="logo">SyncShot</h1>
    </header>
  );
}

export default Header;
