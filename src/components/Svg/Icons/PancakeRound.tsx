import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <image width="128" height="128" href="/images/custom/token.png" />
    </Svg>
  );
};

export default Icon;
