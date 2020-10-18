import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
              <h2 className="major">The Nature and Purpose </h2>
              <span className="image main">
                {/* <img src={pic01} alt="" /> */}
              </span>
              <p>
              Telikos is a DAO that governs the Telikos Platform which brings venture capital and contractors together for economic pursuits in the form of bounties. In contrast to centralized bounty marketplaces such as Upwork or Fiver, our platform sees tokens staked into liquidity pools for AMM yields. These yields are then distributed to the venture capitalist, the contractor, and the DAO. Telikos aims to quickly replace modern centralized bounty marketplaces with an accelerated horizontal decentralized bounty marketplace for both people and future AI agents.

              </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Prologue</h2>
          <span className="image main">
            {/* <img src={pic02} alt="" /> */}
          </span>
          <p>

  Throughout history, humans have been building and maintaining economic and technological systems with which they have evolved symbiotically. Crises of technologies have been opportunities for evolutions into niche economic ecologies. Specific central crises such as the 2007-08 economic crisis allowed for conditions perfect for cryptocurrencies to manifest. This manifestation was the parabiosis necessary to stabilize the inflationary mechanism that was the crisis.  

A similar crisis—and opportunity—is happening now. Ceilings in economic infrastructures have become even more parasitical, evidenced by the relationship between central banks and stock market, and pricing equity mechanisms are not in practice throughout the systems. As a matter of course, this infrastructure creates costly bureaucratic nesting dolls, in turn creating an environment of zombie corporations that need excessive lines of credit to maintain themselves, which costs everyday people.

Telikos DAO rises out of this crisis in order to counter the effects of vertical stagnation. Our DAO is a dream fulfillment mechanism—first through venture generating missions and second by providing bounties for these visions to be fulfilled. It is a place where contractors can come without the impediment of existing infrastructure so that the cyber-structures of the future can be built in an egalitarian way, effectively peeling away human potential from the confines of a cumbersome system.
          </p>
          {close}
        </article>

        <article
          
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="img-wrapper">

          
           
           
           
           
           
           
          <h2 className="major">Agenda</h2>
          <span className="image main">
            {/* <img src={pic03} alt="" /> */}
          </span>
          <p>
          The Adepts of the Telikos DAO are making a cybernetic economic egregore that will outlive the founders. This platform will evolve with the Geist of history and will adapt to the ever-evolving nature of work. Decentralized finance is currently booming within the yield farming space, and our DAO is seizing this opportunity. There are going to be unforeseen opportunities in the future and our government plans to propose votes for each new economic venture—for liquidity is the fuel for all modern economic engines and our mission is to continuously provide capital for those participating in the platform.     
            
         </p>
            {close}
          </div>
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/Telikos_dao"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
          
            <li>
              <a href="https://www.linkedin.com/company/telikos-dao/?viewAsMember=true" className="fa fa-linkedin">
                <span className="label"></span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TelikosDAO"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
