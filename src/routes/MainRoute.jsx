import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";

// 공통 레이아웃
import Header from "layouts/Header";

// 시작 페이지
import StartPage from "pages/StartPage";

// 로그인, 회원가입 페이지
import Login from "pages/user/Login";
import Signup from "pages/user/Signup";

// 공동배달 페이지
import DeliveryBoard from "pages/delivery/DeliveryBoard";
import DeliveryRegister from "pages/delivery/DeliveryRegister";
import DeliveryDetail from "pages/delivery/DeliveryDetail";

// 로그인 정보 처리
import { user } from "store/index";

function MainRoute() {
  // const { pathname } = useLocation();

  const ProtectedRoute = ({ redirectPath = "/login", children }) => {
    const { thisUser } = user();

    if (thisUser === false) {
      // navigate("/login", (state = { redirectPath }));
    }
    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/delivery-board" element={<DeliveryBoard />} />
          <Route path="/delivery-register" element={<DeliveryRegister />} />
          <Route path="/delivery-detail" element={<DeliveryDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default MainRoute;
