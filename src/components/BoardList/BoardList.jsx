import React from "react";
import styles from "./BoardList.module.css";
import BoardBox from "../BoardBox/BoardBox";
import { Link } from "react-router-dom";

const BoardList = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>공동 배달</h2>
      <Link to={"/delivery-register"} className={styles.link} state={{}}>
        <button className={styles.write}>배달 등록하기</button>
      </Link>
      <div className={styles.boxContainer}>
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <BoardBox />
        <BoardBox />
      </div>
    </div>
  );
};
export default BoardList;
