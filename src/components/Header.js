import React from "react";
import { Link } from "react-router";

import TopBar from "./TopBar";
import Menu from "./Menu";

import bg02 from "./../assets/bg/02.jpg";
import bg03 from "./../assets/bg/03.jpg";
import bg04 from "./../assets/bg/04.jpg";
import bg06 from "./../assets/bg/06.jpg";
import bg09 from "./../assets/bg/09.jpg";
import bg10 from "./../assets/bg/10.jpg";
import bg11 from "./../assets/bg/11.jpg";
import logo from "./../assets/logo.svg";

import "./Header.css";

const bgs = [bg02, bg03, bg04, bg06, bg09, bg10, bg11];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = "Header";
  }

  render() {
    const randomBg = bgs[Math.floor(Math.random() * bgs.length)];

    return (
      <div>
        <TopBar {...this.props} />
        <div style={{ backgroundImage: `url(${randomBg})` }} className="header">
          <Link to="/">
            <img className="logo" src={logo} alt="SEN Street Kitchen" />
          </Link>

          <Menu {...this.props} />
        </div>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
