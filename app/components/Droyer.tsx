'use client'
import React from "react";

interface DroyerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const Droyer: React.FC<DroyerProps> = ({ isOpen, toggleDrawer }) => {
  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={toggleDrawer}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className=" btn-primary drawer-button">
     
        </label>
      </div>
      <div className="drawer-side z-30">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-white rounded-r-xl text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Droyer