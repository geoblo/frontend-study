import { createSlice } from "@reduxjs/toolkit";

// 3. Redux State Slice 만들기 (features/counter/counterSlice.js)

// state 초기값으로 원시값, 배열, 객체 등 모든 데이터 타입 사용 가능
// 주로 객체 형태로 사용함
// 가독성도 좋고 state 관리(추가 및 변경)가 편함
const initialState = {
  value: 0,
};

// 전역 state 만드는 방법
// useState()랑 비슷한 역할을 하는데 Redux에서는 state 하나를 slice라고 부름
// createSlice() 함수: state 이름, 초기값 설정, 액션 및 리듀서 함수를 만드는 것을 도와줌
const counterSlice = createSlice({
  name: 'counter', // state 이름(추가로 action 타입을 만드는데도 쓰임)
  initialState, // state 초기값(위에서 객체 형태로 정의)
  reducers: { // reducer들을 정의
    increment: (state) => { // 첫번째 파라미터: 현재 state를 받아옴(실제로는 state의 복사본)
      state.value += 1; // 배열 또는 객체의 경우에도 직접 수정하는 형태로 작성 가능!!
      // 어떻게? Immer 라이브러리 내장되어 불변성 관리를 해주기 때문
      // 실제로는 상태를 직접 변경하지 않고 내부적으로 state 복사본을 만들어서 그 복사본을 변경하고 새로운 상태를 반환함
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => { // 두번째 파라미터: action 객체 = { type: 발생한 액션의 타입, payload: 화물, 전달 데이터 }
      console.log(action);
      state.value += action.payload;
    },
  }
});

console.log(counterSlice);

// (정리)
// 리덕스에서 사용하는 용어
// 1. 액션(Action)
// 전역 상태에 변화를 주고 싶을 때 액션이란 것을 발생시킴
// 자바스크립트 객체 형태
// {
//   type: "counter/increment"
// }

// 2. 액션 생성 함수(Action Creator)
// 액션 객체를 만드는 함수
// 인자값을 넣어 데이터와 함께 전달하기도 함
// export 키워드를 붙여 다른 파일에서 불러와서 사용
export const { increment, decrement, incrementByAmount } = counterSlice.actions; // 각 리듀서에 대한 액션 생성 함수들이 객체 형태로 들어있음

// 선택자 함수
export const selectCount = state => state.counter.value;

// 3. 리듀서(Reducer)
// 변화를 일으키는 함수
// state를 변경하는 함수들을 정의하고 관련 action을 생성
// 현재 state와 action 객체를 파라미터로 받아오고 필요한 경우 상태를 업데이트하고 새 상태를 반환하는 함수
export default counterSlice.reducer; // 위에서 정의한 리듀서 함수들

// 쉽게 HTML 이벤트에 비유하자면,
// 이벤트 발생 -> 해당 이벤트 핸들러
// 액션 발생 -> 해당 리듀서

// (정리)
// 그래서 앞으로 Redux의 전역 state를 변경하려면?
// 1) state 변경 함수(리듀서) 만들기
// 2) 다른데서 사용할 수 있게 액션 생성 함수를 export
// 3) 수정을 원할 때 그 함수를 실행해달라고 store에 요청을 해야됨
// => dispatch() 함수를 사용하여 store에 액션을 보냄