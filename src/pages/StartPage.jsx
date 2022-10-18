import React from "react";
import logo from "img/logo.png";

import styled from "styled-components";

const StartPage = (props) => {
  return (
    <div>
      <LogImg src={logo} />
    </div>
  );
};

export default StartPage;

// styled-components
const LogImg = styled.img`
  display: flex;
  margin: auto;
  width: 600px;
`;
