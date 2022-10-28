import React, { useState, useEffect } from "react";
import { isPropertySignature } from "typescript";
import styles from "./sidebar.module.css";

type Props = {
  showSideBar: boolean;
  toggleShowSideBar: any
};
const SideBar = ({ showSideBar, toggleShowSideBar }: Props) => {

  return (
    <div className={showSideBar?styles.sideBar:styles.sideBarHide}>
      <ul>
        <li>
          <a href={`/`}>About</a>
        </li>
        <li>
          <a href={`/work`}>Work</a>
        </li>
        <li>
          <a href={`/writing`}>Writing</a>
        </li>
        <li>
          <a href={`/skill`}>Skills</a>
        </li>
        <li>
          <a href={`/contact`}>Contact</a>
        </li>
        <li>
          <a href={`https://www.linkedin.com/in/bouwermichael/`}>LinkedIn</a>
        </li>
      </ul>
      <button
        onClick={toggleShowSideBar}
      >
        X
      </button>
    </div>
  );
};

export default SideBar;
