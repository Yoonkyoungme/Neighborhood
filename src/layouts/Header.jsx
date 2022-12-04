import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";

// zustand
import { userStore } from "store/index";

// api
import { logout } from "services/apis/userApis";

const Header = (props) => {
  const navigate = useNavigate();

  // zustand
  const { thisUser, userLogout } = userStore();

  // 메인 페이지로 이동
  const handleHomeClick = () => {
    navigate("/");
  };

  // 로그인 페이지로 이동
  const handleLoginClick = () => {
    navigate("/login");
  };

  // 로그아웃 페이지로 이동
  const handleLogoutClick = () => {
    logout()
      .then(function (response) {
        if (parseInt(response.status / 200) == 1) {
          alert("로그아웃 되었습니다.");
          localStorage.setItem("ACCESS_TOKEN", "");

          userLogout();
          navigate("/login");
        }
      })
      .catch(function (error) {
        alert("로그아웃 실패");
      });
  };

  // // 회원가입 페이지로 이동
  // const handleSignupClick = () => {
  //   navigate("/signup");
  // };

  // 공동배달 게시판 페이지로 이동
  const handleDeliveryBoardClick = () => {
    navigate("/delivery-board");
  };

  return (
    <NavbarWrap>
      <Container>
        <Nav className="justify-content-center">
          <Nav.Link>
            <AiOutlineHome onClick={handleHomeClick} />
          </Nav.Link>
          {!thisUser ? (
            <Nav.Link onClick={handleLoginClick}>로그인</Nav.Link>
          ) : (
            <Nav.Link onClick={handleLogoutClick}>로그아웃</Nav.Link>
          )}

          {/* <Nav.Link onClick={handleSignupClick}>회원가입</Nav.Link> */}
          <Nav.Link onClick={handleDeliveryBoardClick}>공동배달</Nav.Link>
          <Nav.Link onClick={handleDeliveryBoardClick}>게시판</Nav.Link>
          <Nav.Link>내 정보 관리</Nav.Link>
        </Nav>
      </Container>
    </NavbarWrap>
  );
};

export default Header;

// styled-components
const NavbarWrap = styled(Navbar)`
  font-size: 13px;
  font-weight: 500;
  background-color: #c4e0fb;
  height: 6vh;
`;
