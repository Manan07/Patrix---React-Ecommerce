import React from "react";
import "./homepage.styles.css";

export const HomePage = () => (
  <div className="Homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Hats</h1>
          <span className="subtitle">Show Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">Jacket</h1>
          <span className="subtitle">Show Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">Sneakers</h1>
          <span className="subtitle">Show Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">Womens</h1>
          <span className="subtitle">Show Now</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="content">
          <h1 className="title">Mens</h1>
          <span className="subtitle">Show Now</span>
        </div>
      </div>
    </div>
  </div>
);
