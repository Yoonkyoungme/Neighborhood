import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// css
import styled from "styled-components";
import {
  Container,
  Card,
  Col,
  Row,
  FloatingLabel,
  Form,
  Input,
  Button,
} from "react-bootstrap";

// api
import { signup } from "services/apis/userApis";

function Signup() {
  // 닉네임, 이메일, 비밀번호, 비밀번호 확인
  const [inputName, setInputName] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  // navigate
  const navigate = useNavigate();

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleConfirmPw = (e) => {
    setConfirmPw(e.target.value);
  };

  // 회원가입 버튼 클릭 이벤트 (비밀번호와 비밀번호 확인 일치 여부)
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputPw, confirmPw);
    if (inputPw !== confirmPw) {
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    } else {
      signup({
        data: {
          nickname: inputName,
          email: inputId,
          password1: inputPw,
          password2: confirmPw,
        },
      })
        .then(function (response) {
          if (parseInt(response.status / 200) == 1) {
            alert("회원가입 성공");
            localStorage.setItem("ACCESS_TOKEN", response.data.access_token);
            console.log(response.data);
            navigate("/delivery-board");
          }
        })
        .catch(function (error) {
          alert(error);
        });
    }
  };

  return (
    <LoginWrap border="primary" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>회원가입</Card.Title>
        <Form>
          <Form.Group className="mb-3">
            <CustomLable>이메일</CustomLable>
            <CustomInput
              type="email"
              placeholder="이메일을 입력해주세요."
              onChange={handleInputId}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <CustomLable>비밀번호</CustomLable>
            <CustomInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={handleInputPw}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <CustomLable>비밀번호 확인</CustomLable>
            <CustomInput
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요."
              onChange={handleConfirmPw}
              required
            />
            <Form.Group className="mb-3">
              <CustomLable>닉네임</CustomLable>
              <CustomInput
                type="text"
                placeholder="닉네임을 입력해주세요."
                onChange={handleInputName}
              />
            </Form.Group>
          </Form.Group>
          <CustomButton type="submit" onClick={onSubmit}>
            회원가입
          </CustomButton>
        </Form>
      </Card.Body>
    </LoginWrap>
  );
}

export default Signup;

const LoginWrap = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8% auto;
`;

const CustomLable = styled(Form.Label)`
  font-size: 14px;
  display: flex;
  margin-top: 15%;
`;

const CustomInput = styled(Form.Control)`
  font-size: 14px;
  width: 240px;
`;

const CustomButton = styled(Button)`
  background-color: #76c1ed;
  border: 1px solid #76c1ed;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  height: 20%;
  margin: 20px 0;
  :hover {
    background-color: #77aada;
  }
`;
