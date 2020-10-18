import React from 'react';
import PropTypes from 'prop-types';
import roadmap from '../images/roadmap.png';
import whitepaper from '../images/whitepaper.png';
import { Link } from "gatsby";



const Footer = (props) => (

    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <div className="social-icons">
            <a href="https://twitter.com/Telikos_DAO" className="hexagon-wrapper">
                <div className="hexagon">
                    <i className="fa fa-twitter"><a href="/https://www.linkedin.com/feed/"></a></i>
                </div>
            </a>
            <Link className="hexagon-wrapper" to="roadmap" style={{ textDecoration: 'none' }} >
                <div className="hexagon">
                    <img src={roadmap} height="50px" width="50px" className="papers"></img>
                </div>
            </Link>
            <Link className="hexagon-wrapper" to="whitepaper" >
                <div className="hexagon" style={{ textDecoration: 'none' }} >
                    <img src={whitepaper} height="50px" width="50px" className="papers"></img>
                </div>
            </Link>

            <a href="https://github.com/" className="hexagon-wrapper">
                <div className="hexagon">
                    <i className="fa fa-github"></i>
                </div>
            </a>
        </div>

    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}



export default Footer
