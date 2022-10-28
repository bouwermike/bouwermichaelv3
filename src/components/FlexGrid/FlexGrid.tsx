import * as React from "react";
import styles from "./flexgrid.module.css";

type Props = {
  children?: React.ReactNode;
};

/**
 * A simple flex grid that provides safe spacing and changes direction to column at breakpoint <930
 */
const FlexGrid: React.FC<Props> = ({ children, }) => {
  const clones = React.Children.map(children, (child) =>
   <div className={styles.item}>{child}</div>
  );

  return (
    <div className={styles.wrapper}>
      {clones}
    </div>
  );
};

export default FlexGrid;
