import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

// zustand
import { userStore } from "store/index";

function Signup() {
  const formSchema = yup.object({
    email: yup
      .string()
      .required("이메일을 입력해주세요")
      .email("올바른 이메일 형식이 아닙니다."),

    password: yup
      .string()
      .required("영문, 숫자를 포함한 6자리를 입력해주세요.")
      .min(6, "최소 6자 이상 가능합니다")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/,
        "영문, 숫자를 포함한 6자리를 입력해주세요."
      ),

    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 다릅니다."),

    nickname: yup.string(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  // navigate
  const navigate = useNavigate();

  // zustand
  const { userLogin } = userStore();

  // 회원가입 버튼 클릭 이벤트 (비밀번호와 비밀번호 확인 일치 여부)
  const onSubmit = (data) => {
    const { email, password, passwordConfirm, nickname } = data;
    console.log(email, password, passwordConfirm, nickname);
    const requestData = {
      nickname: nickname,
      email: email,
      password1: password,
      password2: passwordConfirm,
    };

    signup(requestData)
      .then(function (response) {
        if (parseInt(response.status / 200) == 1) {
          alert("회원가입 성공");
          localStorage.setItem("ACCESS_TOKEN", response.data.token);
          console.log(response.data);
          userLogin();
          navigate("/delivery-board");
        }
      })
      .catch(function (error) {
        alert(error);
      });
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
              {...register("email")}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </Form.Group>
          <Form.Group className="mb-3">
            <CustomLable>비밀번호</CustomLable>
            <CustomInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("password")}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </Form.Group>
          <Form.Group className="mb-3">
            <CustomLable>비밀번호 확인</CustomLable>
            <CustomInput
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요."
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
            <Form.Group className="mb-3">
              <CustomLable>닉네임</CustomLable>
              <CustomInput
                type="text"
                placeholder="닉네임을 입력해주세요."
                {...register("nickname")}
              />
            </Form.Group>
          </Form.Group>
          <CustomButton type="submit" onClick={handleSubmit(onSubmit)}>
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
