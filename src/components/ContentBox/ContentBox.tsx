import * as React from "react";
import styles from "./contentbox.module.css";

type Props = {
  children?: React.ReactNode;
  column: boolean;
};

/**
 * A simple wrapper component for displaying any content, usually to house the Grid component. Should be the top level of a page.
 */
const ContentBox: React.FC<Props> = ({ children, column }) => {
  const clones = React.Children.map(children, (child) => (
    <div className={styles.item}>{child}</div>
  ));
  return <div className={column ? `${styles.contentBox} ${styles.contentBoxColumn}` : styles.contentBox }>{clones}</div>;
};

export default ContentBox;
