import Ads from "../../pages/homePage/Ads/Ads";
import svg from "../../shared/images/sprite.svg";
const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Job Seekers</h3>
        <a href="/">Search Jobs</a>
        <a href="/">Create Resume</a>
        <a href="/">Job Allert</a>
        <a href="/">Advice to Job Seeker</a>
      </div>
      <h3>Employer</h3>
      <a href="/">Post a Job</a>
      <a href="/">Search Resume</a>
      <a href="/">Support</a>
      <a href="/">Advice to Employer</a>
      <div>
        <h3>Job meteor</h3>
        <a href="/">About Us</a>
        <a href="/">Blog</a>
        <a href="/">FAQ</a>
      </div>
      <div>
        <h3>Partner with Us</h3>
        <a href="/">Advertising on the website</a>
        <a href="/">Affiliate Program</a>
        <a href="/">Contact Us</a>
      </div>
      <div>
        <svg>
          <use href={`${svg}#twitter`}></use>
        </svg>
        <svg>
          <use href={`${svg}#linkedin`}></use>
        </svg>
        <svg>
          <use href={`${svg}#facebook`}></use>
        </svg>
        <svg>
          <use href={`${svg}#instagram`}></use>
        </svg>
        <svg>
          <use href={`${svg}#youtube`}></use>
        </svg>
        <svg>
          <use href={`${svg}#whatsapp`}></use>
        </svg>
      </div>
      <div>
        <a href="/">Privacy Policy </a>
        <a href="/">Terms of Use</a>
        <p>© 2021 Job Meteor. All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
