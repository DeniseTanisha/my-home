import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import ele from "../assets/elephant.png";
import Home from "../pages/Home";
import whatIDo from "../pages/whatIDo";
import myStory from "../pages/myStory";
import getInTouch from "../pages/getInTouch";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <section className={styles.NavBar}>
        <div className={styles.leftlogo}>
          <img className={styles.elephant} src={ele} />
          <p>
            <Link className={styles.Links} to="/">
              Denise Stubbs{" "}
            </Link>
          </p>
        </div>
        <ul className={styles.NavItems}>
          <li>
            <Link className={styles.Links} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.Links} to="/whatIDo">
              What I Do
            </Link>
          </li>
          <li>
            <Link className={styles.Links} to="/myStory">
              My Story
            </Link>
          </li>
          <li>
            <Link className={styles.Links} to="/getInTouch">
              Get In Touch
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}

export default NavBar;
