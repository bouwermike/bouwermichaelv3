import React, { useCallback, useState } from "react";
import styles from "./header.module.css";
import { BiMenu } from "react-icons/bi";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className={styles.headerBox}>
      <div className={styles.headerItems}>
        <div className={styles.logoBox}>
          <h1 className='accent'>MB</h1>
        </div>
        <div className={styles.headerLinksBox}>
          <ul className={styles.headerLinks}>
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
              <a href={`https://www.linkedin.com/in/bouwermichael/`}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.headerMenuBox}>
          <BiMenu
            color='#3D3C42'
            size='45'
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          />
          <SideBar
            showSideBar={showSidebar}
            toggleShowSideBar={() => {
              setShowSidebar(!showSidebar);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
