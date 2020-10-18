import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/DataLrdzAlpha.png';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="va-logo" src={logo} height="200px" width="200px"></img>

    </div>
    <div className="content">
      <div className="inner">
        <h1>TELIKOS</h1>
        <p>
          AUTOMATED MARKET MAKER VENTURE CAPITAL VISIONFUND GENERATOR : D.A.O{' '}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            LORE
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            MISSION
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            CONTACT
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
