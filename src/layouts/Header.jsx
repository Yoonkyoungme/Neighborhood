import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Container, Navbar, Nav } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";

const Header = (props) => {
  const navigate = useNavigate();

  // 메인 페이지로 이동 이벤트
  const handleHomeClick = () => {
    navigate("/");
  };

  // 로그인 페이지 이동 이벤트
  const handleLoginClick = () => {
    navigate("/login");
  };

  // 회원가입 페이지 이동 이벤트
  const handleSignupClick = () => {
    navigate("/signup");
  };

  // 공동배달 게시판 페이지 이동 이벤트
  const handleDeliveryBoardClick = () => {
    navigate("/delivery-board");
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link>
            <AiOutlineHome onClick={handleHomeClick} />
          </Nav.Link>
          <Nav.Link onClick={handleLoginClick}>로그인</Nav.Link>
          <Nav.Link onClick={handleSignupClick}>회원가입</Nav.Link>
          <Nav.Link onClick={handleDeliveryBoardClick}>공동배달</Nav.Link>
          <Nav.Link>내 정보 관리</Nav.Link>
          <Nav.Link>메시지 / 알림</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

// styled-components
const BoardInfoContainer = styled.div`
  display: flex;
  font-size: 14px;
  margin: 30px;
  color: #949494;

  .container-left {
    margin-right: 10px;
    cursor: pointer;
  }

  .container-right {
    margin-right: 10px;
    cursor: pointer;
  }
`;
