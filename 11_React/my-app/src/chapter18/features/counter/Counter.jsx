import { useDispatch } from "react-redux";

// 5. 리액트 컴포넌트에서 Redux State와 Actions 사용하기 (features/counter/Counter.js)
function Counter() {

  // Redux Store에 요청을 보내주는 함수
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: "counter/decrement" })}
        >
          감소
        </button>
      </div>
    </>
  );
};

export default Counter;