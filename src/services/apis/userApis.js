import Interceptor from "services/apis/AxiosInterceptor";

/**
 * 회원가입, 로그인, 로그아웃 API
 */

// 회원가입
export function signup() {
  return Interceptor({
    url: "accounts/dj-rest-auth/registration/",
    method: "post",
  });
}

// 로그인
export function login(requestData) {
  return Interceptor({
    url: "/account/rest-auth/login",
    method: "post",
    data: requestData,
  });
}

// 로그아웃
export function logout() {
  return Interceptor({
    url: "accounts/dj-rest-auth/logout ",
    method: "post",
  });
}
