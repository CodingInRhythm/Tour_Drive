import './Footer.css'
const Footer = () => {
    return (
      <div className="footer-container">
        <i className="fas fa-shuttle-van fa-5X">
          <span className="tour-drive-footer-text">Tour Drive</span>
        </i>

        <ul className="alex-links">
          Developed by Alex Clough
          <li>
            <a className="footer-link" href="https://github.com/codinginrhythm">
              Github
            </a>
          </li>{" "}
          <li>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/alex-clough-710546200/"
            >
              LinkedIn
            </a>
          </li>
          <li>© Tour Drive, 2021</li>
        </ul>
      </div>
    );
}

export default Footer