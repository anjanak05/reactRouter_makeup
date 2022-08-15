import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Components/Navbar.module.css";

const links = [
  { url: "/Home", name: "Home" },
  { url: "/Skin", name: "Skin" },
  { url: "/Hair", name: "Hair" },
  { url: "/Makeup", name: "Makeup" },
];

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.linkDiv}>
        {links.map((e) => (
          <div key={Date.now + e.name}>
           
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.default
              }
              to={e.url}
            >
              {e.name}
            </NavLink>
          </div>
        ))}
      </div>
      <div className={styles.cartDiv}>
      <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default Navbar;
