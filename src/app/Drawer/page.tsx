"use client";
import { useState, MouseEvent } from "react";
import styles from "./drawer.module.css";

const DrawerComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.menuButton} onClick={toggleDrawer}>
        ☰
      </button>
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeButton} onClick={toggleDrawer}>
          &times;
        </button>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <hr />
          <ul>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DrawerComponent;
