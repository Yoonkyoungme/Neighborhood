import React from "react";
import BoardInfo from "../components/BoardInfo/BoardInfo";
import BoardNav from "components/BoardNav/BoardNav";
import RegisterContent from "components/RegisterContent/RegisterContent";

// 배달 등록 페이지

const DeliveryRegister = (props) => {
  return (
    <div>
      <BoardInfo />
      <BoardNav />
      <RegisterContent />
    </div>
  );
};

export default DeliveryRegister;
