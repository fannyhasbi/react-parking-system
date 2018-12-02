import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>
          <div className="copyright">
            Dibuat oleh{" "}
            <a
              href="https://github.com/fannyhasbi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fanny Hasbi
            </a>
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
