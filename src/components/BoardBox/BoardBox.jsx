import React, { useState, useEffect } from "react";
import styles from "./BoardBox.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

const BoardBox = (props) => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    axios({
      url: "https://sungmin.pythonanywhere.com/delivery/order/",
      method: "get",
    })
      .then(function (response) {
        if (parseInt(response.status / 200) == 1) {
          setAllData(response.data.postList);
          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
  }, []);

  return (
    <>
      {allData.map((data, index) => (
        <div className={styles.boxContainer}>
          <div className={styles.icon}>
            <i className="fa-regular fa-circle-check"></i>
          </div>
          <Link to={"/delivery-detail"} className={styles.link}>
            <div className={styles.container}>
              <div className={styles.storeAndPlatform}>
                <p className={styles.title}>가게 이름 / 구매처</p>
                <p className={styles.value}>{data.title}</p>
              </div>
              <div className={styles.num}>
                <p className={styles.title}>모집 인원</p>
                <p className={styles.value}>`${data.people_num}명`</p>
              </div>
              <div className={styles.time}>
                <p className={styles.title}>소요 시간</p>
                <p className={styles.value}>`${data.waiting_time}분`</p>
              </div>
              <div className={styles.location}>
                <p className={styles.title}>분배 장소</p>
                <p className={styles.value}>{data.place}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
    // <div className={styles.boxContainer}>
    //   <div className={styles.icon}>
    //     <i className="fa-regular fa-circle-check"></i>
    //   </div>
    //   <Link to={"/delivery-detail"} className={styles.link}>
    //     <div className={styles.container}>
    //       <div className={styles.storeAndPlatform}>
    //         <p className={styles.title}>가게 이름 / 구매처</p>
    //         <p className={styles.value}>멋쟁이 버거 / 배달의 민족</p>
    //       </div>
    //       <div className={styles.num}>
    //         <p className={styles.title}>모집 인원</p>
    //         <p className={styles.value}>3명</p>
    //       </div>
    //       <div className={styles.time}>
    //         <p className={styles.title}>소요 시간</p>
    //         <p className={styles.value}>48-62분</p>
    //       </div>
    //       <div className={styles.location}>
    //         <p className={styles.title}>분배 장소</p>
    //         <p className={styles.value}>
    //           서울 강남구 역삼도 790-6 MARU 180 지하 1층
    //         </p>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
  );
};

export default BoardBox;
