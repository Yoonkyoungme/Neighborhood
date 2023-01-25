import Interceptor from "services/AxiosInterceptor";

// user 정보
import { user, userLogin } from "store/reducers/user";

// store profile data를 받아오기 위한 API
import axios from "axios";

/**
 * 로그인 함수
 * @param {*} userId
 * @param {*} password
 * @returns 정상: userId, gender, age
 */
export function login(username, email, password) {
  return Interceptor({
    url: "/user/v1/login/",
    method: "post",
    data: { username, email, password },
  });
}

export function insertRoom(data) {
  return Interceptor({
    url: "/meet/room",
    method: "post",
    data,
  });
}

export function checkTokenValidiation() {
  let thisUserInfo = user();

  let validation = true;

  // 로그인된 계정이 없으면 토큰 검증하지 않고 반환
  if (
    thisUserInfo === false ||
    thisUserInfo === undefined ||
    thisUserInfo === null
  ) {
    validation = false;

    return false;
  }

  let token = thisUserInfo.accessToken;
  let refreshToken = thisUserInfo.refreshToken;

  // token의 유효성 확인
  tokenValidiation(token)
    .then((response) => {
      if (parseInt(response.status / 200) == 1) {
        // test
        console.log("accesstoken is valid!");

        return true;
      }
    })
    .catch((error) => {
      validation = false;
      console.log("accesstoken is unvalid", error);

      //refresh token 넣어서 새롭게 token 발급
      refreshTokenValidation(refreshToken)
        .then((response) => {
          if (parseInt(response.status / 200) == 1) {
            thisUserInfo.accessToken = response.data.access;

            // test
            console.log("update new accesstoken: ", thisUserInfo);
            userLogin(thisUserInfo);
            validation = true;
            window.location.reload();

            return true;
          }
        })
        .catch((error) => {
          validation = false;
          console.log(error);
          alert("다시 로그인 해주세요.");
        });
    });

  return validation;
}

export function tokenValidiation(token) {
  return axios({
    url: process.env.REACT_APP_BASEURL + "user/v1/token/verify/",
    method: "post",
    data: { token: token },
  });
}

export function refreshTokenValidation(refreshToken) {
  return axios({
    url: process.env.REACT_APP_BASEURL + "user/v1/token/refresh/",
    method: "post",
    data: { refresh: refreshToken },
  });
}
