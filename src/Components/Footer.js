

const Footer = () => {
  return (
    <div
      style={{
        position:"sticky",
        left:0,
        bottom:0,
        right:0,
        backgroundColor: "lightgrey",
        lineHeight:"5px",
        zIndex:"1"
      }}>

      <h4 style={{ color: "#564256", textAlign: "center", marginBottom: "10px" }}>
        Follow us on Social Media!
      </h4>
      <div className="footer__redes">
        <ul className="footer__redes-wrapper">
          <li style={{ textAlign: "center", display: "grid" }}>
            <p>
              <a href="/About">About Us</a>
            </p>
          </li>
          <li style={{ textAlign: "center", display: "grid" }}>
            <p>
              <a href="/About">Contact Us</a>
            </p>
          </li>
          <li style={{ textAlign: "center", display: "grid" }}>
            <p>
              <a href="/About">Become A Foster</a>
            </p>
          </li>
          <li style={{ textAlign: "center", display: "grid" }}>
            <p>
              <a href="/About">Newsletter</a>
            </p>
          </li>
        </ul>
      </div>
      <footer
        style={{
          marginBottom: "5px",
          backgroundColor: "lightgrey",
          color: "black",
        }}
      >
        <p> Copyright © 2023 | PawFinder</p>
      </footer>
    </div>
  );
};
export default Footer;
