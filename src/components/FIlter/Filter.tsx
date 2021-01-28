import React from "react";
import FilterStyles from "./Filter.styles";
import { FaRegNewspaper, FaQuestionCircle, FaRegClock } from "react-icons/fa";
import {IoIosArrowDown} from "react-icons/io"

const Loading: React.FC = () => {
  const CSS = FilterStyles.factory();

  return (
    <div style={CSS.filterContainer()}>
      <div style={{...CSS.filterInner() ,color: "grey" }}>Filters:</div>
      <div style={{...CSS.filterMidOptions(), color:CSS.blue}}>
        <FaRegNewspaper />
        <div> MY SOURCE </div>
        <IoIosArrowDown/>
        <div>|</div>
        <FaRegClock />
        <div>PAST MONTH</div>
        <IoIosArrowDown/>
      </div>
      <div style={{ color: CSS.blue, ...CSS.filterInner() }}>
        <FaQuestionCircle />
      </div>
    </div>
  );
};

export default Loading;
