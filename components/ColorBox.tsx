import React, { FC } from "react";
import styles from "./ColorBox.module.css";

export interface ColorBoxProps {
  name: String;
  color: String;
}

const ColorBox = ({ name, color }: ColorBoxProps) => {
  return (
    <div style={{ background: `${color}` }} className={styles.ColorBox}>
      <div className="copy-container">
        <div className={styles.boxContent}>
          <span> {name}</span>
        </div>
        <button className={styles.copyButton}>Copy</button>
      </div>
      <span className={styles.seeMore}>More</span>
    </div>
  );
};

export default ColorBox;
