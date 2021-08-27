import React, { Component } from "react";
import ColorBox from "./ColorBox";
import style from "./PalettesCSS.module.css";

type PalettesProps = {
  paletteName: string;
  id: string;
  emoji: string;
  colors: {
    name: string;
    color: string;
  }[];
};
[];

const Palettes = ({ paletteName, colors, id }: PalettesProps) => {
  const colorBox = colors.map((color) => (
    <ColorBox color={color.color} name={color.name} key={color.name} />
  ));
  return (
    <div className={style.Palette}>
      <div className={style.PaletteColors}>{colorBox}</div>
    </div>
  );
};

export default Palettes;
