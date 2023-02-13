import Interceptor from "services/apis/AxiosInterceptor";

/**
 * 공동배달 관련 API
 */

// 배달 글 전체 조회
export function getAllDeliveryList() {
  return Interceptor({
    url: "/delivery/order/",
    method: "get",
  });
}

// 배달 글 등록
export function registerDeliveryPost(userToken, requestData) {
  return Interceptor({
    url: "/delivery/order/",
    method: "post",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
    data: requestData,
  });
}

// 배달 글 조회
export function getDeliveryPost(id) {
  return Interceptor({
    url: `/delivery/order/${id}`,
    method: "get",
  });
}

// 배달 글 수정
export function editDeliveryPost(id) {
  return Interceptor({
    url: `/delivery/order/${id}`,
    method: "put",
  });
}

// 배달 글 삭제
export function deleteDeliveryPost(id) {
  return Interceptor({
    url: `/delivery/order/${id}`,
    method: "delete",
  });
}
