const Footer = () => {
  return (
    <div className="footer">
      <h4 style={{ color: "#564256", textAlign: "center", marginBottom: "10px" }}>
        Follow us on Social Media !
      </h4>
      <div>
        <ul className="ul">
          <li>
            <p>
              <a href="/About">About Us</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/About">Contact Us</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/About">Become A Foster</a>
            </p>
          </li>
          <li>
            <p>
              <a href="/About">Newsletter</a>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <p> Copyright © 2023 | PawFinder</p>
      </div>
    </div>
  );
};

export default Footer;
