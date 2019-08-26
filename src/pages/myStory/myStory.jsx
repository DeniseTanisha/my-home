import React, { Component } from "react";
import NavBar from "../../NavBar";
import { Link } from "@reach/router";
import styles from "./myStory.module.scss";

class myStory extends Component {
  state = {};
  render() {
    return (
      <div className={styles.myStory}>
        <NavBar />
        <div className={styles.toppage}>
          <section className={styles.developer}>
            <p> MY STORY</p>
          </section>
        </div>

        <div className={styles.bottompage}></div>
      </div>
    );
  }
}

export default myStory;
