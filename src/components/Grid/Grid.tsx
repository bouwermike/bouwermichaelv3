import * as React from "react";
import styles from "./grid.module.css";

type cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Props = {
  children?: React.ReactNode;
  cols: cols;
};

const Grid: React.FC<Props> = ({ children, cols }) => {
  let colNum;

  switch (cols) {
    case 1:
      colNum = styles.col1;
      break;
    case 2:
      colNum = styles.col2;
      break;
    case 3:
      colNum = styles.col3;
      break;
    case 4:
      colNum = styles.col4;
      break;
    case 5:
      colNum = styles.col5;
      break;
    case 6:
      colNum = styles.col6;
      break;
    case 7:
      colNum = styles.col7;
      break;
    case 8:
      colNum = styles.col8;
      break;
    case 9:
      colNum = styles.col9;
      break;
    case 10:
      colNum = styles.col10;
      break;
    case 11:
      colNum = styles.col11;
      break;
    case 12:
      colNum = styles.col12;
      break;

    default:
      break;
  }

  const clones = React.Children.map(children, (child) =>
   <div className={styles.item}>{child}</div>
  );

  return (
    <div className={`${styles.wrapper} ${colNum}`}>
      {clones}
    </div>
  );
};

export default Grid;
