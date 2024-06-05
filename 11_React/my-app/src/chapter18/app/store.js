import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/product/productSlice";

// 1. Redux Store 만들기 (app/store.js)
// 전역 state를 보관하는 저장소
// configureStore를 쓰면 Redux Devtools 설정이 자동으로 추가됨
// (But, Redux Devtools는 크롬 웹 스토어에서 따로 설치 필요!)
export const store = configureStore({
  // 4. Redux Store에 Slice Reducers 추가하기 (app/store.js)
  // Slice Reducer를 Store에 등록을 해야 컴포넌트들이 전역 state를 사용 가능
  reducer: {
    counter: counterReducer,
    product: productReducer
  }
});

// (참고)
// 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있음
// Store 안에는 현재 전역 상태와 리듀서가 들어가 있음

// Redux Application Data Flow
// https://ko.redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow