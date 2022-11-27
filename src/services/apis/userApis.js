import Interceptor from "services/apis/AxiosInterceptor";

// user 정보
import { user } from "store/index";

/**
 * 로그인 함수
 * @param {*} email
 * @param {*} password
 * @returns 정상: email, password
 */
export function login(email, password) {
  return Interceptor({
    url: "/account/rest-auth/login",
    method: "post",
    data: { email, password },
  });
}

export function signup(username, email, password1, password2) {
  return Interceptor({
    url: "account/rest-auth/registration/",
    method: "post",
    data: { username, email, password1, password2 },
  });
}

export function checkTokenValidiation() {
  // zustand
  const { thisUser, userLogin } = user((state) => state);

  let thisUserInfo = JSON.parse(JSON.stringify(thisUser));

  // 로그인된 계정이 없으면 토큰 검증하지 않고 반환
  if (!thisUserInfo) {
    return false;
  }

  let token = thisUserInfo.accessToken;
  let refreshToken = thisUserInfo.refreshToken;

  let validation = true;

  // token의 유효성 확인
  tokenValidiation(token)
    .then((response) => {
      if (parseInt(response.status / 200) == 1) {
      }
    })
    .catch((error) => {
      validation = false;
      console.log(error);

      //refresh token 넣어서 새롭게 token 발급
      refreshTokenValidation(refreshToken).then((response) => {
        if (parseInt(response.status / 200) == 1) {
          thisUserInfo.accessToken = response.data.access;
          userLogin(thisUserInfo);
        }
      });
    })
    .catch((error) => {
      validation = false;
      console.log(error);
      alert("다시 로그인 해주세요.");
    });

  return validation;
}

export default userApis;
