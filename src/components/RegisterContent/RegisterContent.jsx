import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// components
import MenuFilter from "components/MenuFilter/MenuFilter";

// api
import { registerDeliveryPost } from "services/apis/deliveryApi";

// css
import * as RegisterForm from "assets/styles/RegisterForm";
import { Form, FormGroup, Col, Label, Input, Button } from "reactstrap";
import styles from "./RegisterContent.module.css";

const RegisterContent = (props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [shopName, setShopName] = useState("");
  const [peoNum, setPeoNum] = useState("");
  const [useTime, setUseTime] = useState("");
  const [place, setPlace] = useState("");
  const [kakaoUrl, setKakaoUrl] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const resetInput = () => {
    document.getElementById("input").value = "";
    setTitle("");
    setShopName("");
    setPeoNum("");
    setUseTime("");
    setPlace("");
    setKakaoUrl("");
    setContent("");
  };

  const getId = (id) => {
    setCategory(id);
    console.log(id, typeof id);
  };

  const handleButtonClick = () => {
    const requestData = {
      title: title,
      people_num: peoNum,
      waiting_time: useTime,
      place: place,
      food_category: category,
      content: content,
      kakaourl: kakaoUrl,
    };
    console.log(requestData);
    console.log(localStorage.getItem("ACCESS_TOKEN"));
    registerDeliveryPost(localStorage.getItem("ACCESS_TOKEN"), requestData)
      .then(function (response) {
        if (parseInt(response.status / 200) == 1) {
          alert("등록이 완료되었습니다.");
          navigate("/delivery-board");
        }
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <RegisterForm.MainContainer>
      <RegisterForm.ContainerTitle>배달 등록</RegisterForm.ContainerTitle>
      <div className={styles.nickName}>
        <i className="fa-regular fa-user"></i>
        <p className={styles.userName}>작성자 닉네임</p>
      </div>
      <RegisterForm.ContainerWrap>
        <RegisterForm.CustomForm>
          <RegisterForm.CustomFormGroup>
            <RegisterForm.CustomFormWrap
              style={{ marginTop: "-20px", marginBottom: "20px" }}
            >
              <Col>
                <RegisterForm.CustomInput
                  id="input"
                  name="text-title"
                  type="text"
                  placeholder="가게를 입력하세요."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Col>
            </RegisterForm.CustomFormWrap>
            <RegisterForm.FormContainer>
              <RegisterForm.CustomFormWrap>
                <RegisterForm.CustomLabel>모집 인원</RegisterForm.CustomLabel>
                <Col>
                  <RegisterForm.CustomInput
                    id="input"
                    name="number-peo-num"
                    type="number"
                    placeholder="모집 인원 수를 숫자로 입력해주세요."
                    value={peoNum}
                    onChange={(e) => setPeoNum(e.target.value)}
                  />
                </Col>
              </RegisterForm.CustomFormWrap>

              <RegisterForm.CustomFormWrap>
                <RegisterForm.CustomLabel>소요 시간</RegisterForm.CustomLabel>
                <Col>
                  <RegisterForm.CustomInput
                    id="input"
                    name="number-use-time"
                    type="number"
                    placeholder="소요 시간을 숫자로 입력해주세요."
                    value={useTime}
                    onChange={(e) => setUseTime(e.target.value)}
                  />
                </Col>
              </RegisterForm.CustomFormWrap>

              <RegisterForm.CustomFormWrap>
                <RegisterForm.CustomLabel>분배 장소</RegisterForm.CustomLabel>
                <Col>
                  <RegisterForm.CustomInput
                    id="input"
                    name="text-place"
                    type="text"
                    placeholder="분배 장소를 입력해주세요."
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </Col>
              </RegisterForm.CustomFormWrap>

              <RegisterForm.CustomFormWrap>
                <RegisterForm.CustomLabel>
                  오픈 카카오톡 url
                </RegisterForm.CustomLabel>
                <Col>
                  <RegisterForm.CustomInput
                    id="input"
                    name="text-kakaoUrl"
                    type="text"
                    value={kakaoUrl}
                    onChange={(e) => setKakaoUrl(e.target.value)}
                  />
                </Col>
              </RegisterForm.CustomFormWrap>
            </RegisterForm.FormContainer>
          </RegisterForm.CustomFormGroup>
        </RegisterForm.CustomForm>
        <MenuFilter getId={getId} />

        <RegisterForm.CustomForm>
          <RegisterForm.CustomFormGroup>
            <RegisterForm.CustomFormWrap>
              <RegisterForm.CustomInput
                style={{ height: "160px" }}
                id="input"
                name="textarea-content"
                type="textarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </RegisterForm.CustomFormWrap>
          </RegisterForm.CustomFormGroup>
        </RegisterForm.CustomForm>
        <RegisterForm.CustomButton onClick={handleButtonClick}>
          배달 등록
        </RegisterForm.CustomButton>
      </RegisterForm.ContainerWrap>
    </RegisterForm.MainContainer>
  );
};

export default RegisterContent;
