import type { NextPage } from "next";
import DefaultColors from "../components/DefaultColors";
import Palettes from "../components/Palettes";

const Home: NextPage = () => {
  return <Palettes {...DefaultColors[5]} />;
};

export default Home;
