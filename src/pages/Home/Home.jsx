import React, { Component } from "react";
import styles from "./Home.module.scss";
import NavBar from "../../NavBar";
import elephant from "../../assets/elephant.png";
import sideportrait from "../../assets/sideportrait.jpg";
import { Link } from "@reach/router";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className={styles.home}>
        <NavBar />
        <div className={styles.toppage}>
          <div className={styles.logo}>
            <span>
              <img src={elephant} className={styles.ele} alt="" />{" "}
            </span>
            <span>
              {" "}
              <h1 className={styles.title}>Denise Stubbs</h1>{" "}
            </span>
          </div>
          <section className={styles.developer}>
            <p>WEB DEVELOPER</p>
          </section>
          <article className={styles.bio}>
            <section className={styles.portraitbox}>
              <img src={sideportrait} className={styles.portrait} />
            </section>
            <p className={styles.intro}>
              Front-End Web Developer with a Bachelor's degree in Business and
              Marketing.{" "}
            </p>
          </article>
        </div>

        <div className={styles.bottompage}>
          <section className={styles.words}>
            <div className={styles.pictureshadow} />
            <div className={styles.introshadow} />
          </section>
          <section className={styles.words}>
            <p className={styles.whatido}>
              <Link className={styles.Links} to="whatIDo">
                WHAT I DO
              </Link>
            </p>
            <Link className={styles.Links} to="myStory">
              <p className={styles.mystory}>MY STORY</p>
            </Link>
            <Link className={styles.Links} to="getInTouch">
              <p className={styles.getintouch}>GET IN TOUCH</p>
            </Link>
          </section>
          <section className={styles.shadows}>
            <div className={styles.what} />
            <div className={styles.story} />
            <div className={styles.touch} />
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
