import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// bootstrap
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

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #87ceeb;
  outline: none;
  width: 50%;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
    // console.log(e.target.value)
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // 로그인 버튼 클릭 이벤트
  const onClickLogin = (e) => {
    e.preventDefault();
    console.log("click login");
    console.log(inputId, inputPw);

    axios
      .post("url", {
        id: inputId,
        password: inputPw,
      })
      // 서버에서 보내준 결과값이 response
      .then(function (response) {
        alert("로그인 성공");
        return true;
      })
      .catch(function (error) {
        alert("로그인 실패");
        return false;
      });
  };

  return (
    <Card border="dark" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>로그인</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <CustomLable>이메일</CustomLable>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <CustomLable>비밀번호</CustomLable>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <CustomButton variant="primary" type="submit">
            로그인
          </CustomButton>
        </Form>
      </Card.Body>
    </Card>
  );
}
export default Login;

const LoginContainer = styled.div`
  display: flex;
  width: 100%;
`;

const LoginWrap = styled(Form)`
  margin: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: -80px;
`;

const CustomLable = styled(Form.Label)`
  font-size: 14px;
  display: flex;
  margin-top: 15%;
`;

const CustomButton = styled(Button)`
  background-color: #a9d5fd;
  border: 1px solid #a9d5fd;
  width: 100%;
  height: 20%;
  margin-top: 20px;
  :hover {
    background-color: #77aada;
  }
`;
