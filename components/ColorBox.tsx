import React, { FC } from "react";
import styles from "./ColorBox.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export interface ColorBoxProps {
  name: String;
  color: string;
}

const ColorBox = ({ name, color }: ColorBoxProps) => {
  return (
    <CopyToClipboard text={color}>
      <div style={{ background: `${color}` }} className={styles.ColorBox}>
        <div className="copy-container">
          <div className={styles.boxContent}>
            <span> {name}</span>
          </div>
          <button className={styles.copyButton}>Copy</button>
        </div>
        <span className={styles.seeMore}>More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
