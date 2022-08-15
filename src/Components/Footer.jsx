import React from "react";
import styles from "../Components/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.secondFootera}>
        <div>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-blogger-b"></i>
        </div>
        <div>
          <i class="fa-solid fa-mobile-screen"></i>
          <i class="fa-brands fa-android"></i>
          <i class="fa-brands fa-apple"></i>
        </div>
      </div>
      <div className={styles.secondFooterb}>
        <div>
          <p> Help</p>
          <p>Order status</p>
          <p>About us </p>
          <p>Contact us</p>
          <p>Warranty </p>
          <p>FAQs</p>
          <p>Sitemap</p>
        </div>
        <div>
          <p>Support</p>
          <p>Payment information</p>
          <p>Shipping guide</p>
          <p>Wholesale</p>
          <p>Affiliates</p>
          <p>Student discount</p>
          <p>Youth discount</p>
          <p>Request a sample</p>
        </div>
        <div>
          <p>Policies</p>
          <p>Terms & conditions</p>
          <p>Return policy</p>
          <p>Privacy</p>
          <p>Declaration</p>
          <p>Customs</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
