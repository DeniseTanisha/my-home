import React, { Component } from "react";
import styles from "./SundayArt.module.scss";
// import posed from "react-pose";
// import styled from "styled-components";

class SundayArt extends Component {
  state = { hovering: false };
  render() {
    return (
      <section className={styles.box}>
        <a
          href="https://sunday.art.denisestubbs.website"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.externalLink}
        >
          {"Sunday Art"}
        </a>
      </section>
    );
  }
}

export default SundayArt;
