import React from "react";
import { useState } from "react";
import MenuFilter from "../MenuFilter/MenuFilter";
import styles from "./RegisterContent.module.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const RegisterContent = (props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [shopName, setShopName] = useState("");
  const [peoNum, setPeoNum] = useState("");
  const [useTime, setUseTime] = useState("");
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const resetInput = () => {
    document.getElementById("input").value = "";
    setTitle("");
    setShopName("");
    setPeoNum("");
    setUseTime("");
    setPlace("");
    setContent("");
  };

  const getId = (id) => {
    setCategory(id);
    console.log(id);
  };

  const handleButtonClick = async (e) => {
    navigate("/delivery-register");
    const request_data = {
      title: title,
      shopName: shopName,
      peoNum: peoNum,
      useTime: useTime,
      place: place,
      category: category,
      content: content,
    };
    try {
      let response = await axios({
        method: "post",
        url: "url",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(request_data),
      });
      if (response.status >= 200 && response.status < 300) {
        alert("댓글 작성이 완료 되었습니다.");
        resetInput();
      }
    } catch (err) {
      // alert(err);
      console.log(err);
      resetInput();
    }
  };

  return (
    <>
      <h2 className={styles.name}>배달 등록</h2>
      <div className={styles.nickName}>
        <i className="fa-regular fa-user"></i>
        <p className={styles.userName}>작성자 닉네임</p>
      </div>
      <div className={styles.container}>
        <div className={styles.registerTitle}>
          <p className={styles.title}>제목</p>
          <input
            id="input"
            className={styles.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.platform}>
            <p className={styles.title}>가게이름</p>
            <input
              id="input"
              className={styles.input}
              type="text"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
            />
          </div>
          <div className={styles.store}>
            <p className={styles.title}>모집 인원</p>
            <input
              id="input"
              className={styles.input}
              type="text"
              value={peoNum}
              onChange={(e) => setPeoNum(e.target.value)}
            />
          </div>
          <div className={styles.num}>
            <p className={styles.title}>소요 시간</p>
            <input
              id="input"
              className={styles.input}
              type="text"
              value={useTime}
              onChange={(e) => setUseTime(e.target.value)}
            />
          </div>
          <div className={styles.residence}>
            <p className={styles.title}>분배 장소</p>
            <input
              id="input"
              className={styles.input}
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
        </div>
        <MenuFilter getId={getId} />
        <input
          id="input"
          className={styles.content}
          placeholder="내용을 입력하세요."
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button onClick={handleButtonClick}>배달 등록</Button>
      </div>
    </>
  );
};

export default RegisterContent;
