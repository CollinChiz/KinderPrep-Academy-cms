import React from 'react'
import { Link } from 'gatsby'
// import logo from '../img/KinderPrep-Academy-Logo.PNG'
import "../../src/global.css";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="KinderPrep-Academy of Martinsville Logo" style={{ width: '88px' }} />
            </Link> */}

            {/* Hamburger menu */}
            <a href="/"><h1 style={{fontSize: "30px", color: "red"}}>KinderPrep Academy</h1> </a>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
             
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/ourMission">
                Our Mission
              </Link>
              <Link className="navbar-item" to="/meetTheOwner">
                Meet the Owner
              </Link>
              <Link className="navbar-item" to="/gallery">
                Gallery
              </Link>
              <Link className="navbar-item" to="/scholarOpp">
                Scholarship Opportunities 
              </Link>
             
              <a className="navbar-item" href="https://form.jotform.com/211385763930055" target="_blank">
                Application for Admission
              </a>
              <a className="navbar-item" href="https://form.jotform.com/ashleyhandy7/kinderprep-academy-summer-app" target="_blank">
                Scholarship Application
              </a>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
             
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
