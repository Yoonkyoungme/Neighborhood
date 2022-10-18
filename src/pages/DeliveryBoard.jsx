import React from "react";
import BoardList from "components/BoardList/BoardList";
import BoardNav from "components/BoardNav/BoardNav";

// 배달 게시글 페이지

const DeliveryBoard = (props) => {
  return (
    <div>
      <BoardNav />
      <BoardList />
    </div>
  );
};

export default DeliveryBoard;
