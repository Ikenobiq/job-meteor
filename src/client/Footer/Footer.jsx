import styles from "./Footer.module.scss";
import svg from "../../shared/images/sprite.svg";
import googleplayfoot from "../../shared/images/mobile/googleplayfoot.png";
import appstorefoot from "../../shared/images/mobile/appstorefoot.png";
const Footer = () => {
  return (
    <footer className={`${styles.footer} ${"container"}`}>
      <div className={styles.footerLinksDiv}>
        <h3 className={styles.heading}>Job Seekers</h3>
        <a className={styles.link} href="/">
          Search Jobs
        </a>
        <a className={styles.link} href="/">
          Create Resume
        </a>
        <a className={styles.link} href="/">
          Job Allert
        </a>
        <a className={styles.link} href="/">
          Advice to Job Seeker
        </a>
      </div>
      <div className={styles.footerLinksDiv}>
        <h3 className={styles.heading}>Employer</h3>
        <a className={styles.link} href="/">
          Post a Job
        </a>
        <a className={styles.link} href="/">
          Search Resume
        </a>
        <a className={styles.link} href="/">
          Support
        </a>
        <a className={styles.link} href="/">
          Advice to Employer
        </a>
      </div>
      <div className={styles.footerLinksDiv}>
        <h3 className={styles.heading}>Job meteor</h3>
        <a className={styles.link} href="/">
          About Us
        </a>
        <a className={styles.link} href="/">
          Blog
        </a>
        <a className={styles.link} href="/">
          FAQ
        </a>
      </div>
      <div className={styles.footerLinksDiv}>
        <h3 className={styles.heading}>Partner with Us</h3>
        <a className={styles.link} href="/">
          Advertising on the website
        </a>
        <a className={styles.link} href="/">
          Affiliate Program
        </a>
        <a className={styles.link} href="/">
          Contact Us
        </a>
      </div>
      <div className={styles.svgDiv}>
        <svg className={styles.svg}>
          <use href={`${svg}#twitter`}></use>
        </svg>
        <svg className={styles.svg}>
          <use href={`${svg}#linkedin`}></use>
        </svg>
        <svg className={styles.svg}>
          <use href={`${svg}#facebook`}></use>
        </svg>
        <svg className={styles.svg}>
          <use href={`${svg}#instagram`}></use>
        </svg>
        <svg className={styles.svg}>
          <use className={styles.use} href={`${svg}#youtube`}></use>
        </svg>
        <svg className={styles.svg}>
          <use className={styles.use} href={`${svg}#whatsapp`}></use>
        </svg>
      </div>
      <div className={styles.store}>
        <ul className={styles.storeList}>
          <li className={styles.storeItem}>
            <a className={styles.storeLink} href="/">
              <img className={styles.storeImg} src={googleplayfoot} alt="" />
            </a>
          </li>
          <li className={styles.storeItem}>
            <a className={styles.storeLink} href="/">
              <img className={styles.storeImg} src={appstorefoot} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.privacy}>
        <a className={styles.privacyLink} href="/">
          Privacy Policy{" "}
        </a>
        <a className={styles.privacyLink} href="/">
          Terms of Use
        </a>
      </div>
      <div className={styles.reserved}>
        <p className={styles.reservedP}>
          © 2021 Job Meteor. All rights reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
