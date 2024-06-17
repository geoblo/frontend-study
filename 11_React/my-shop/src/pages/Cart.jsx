import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, removeItemFromCart, selectCartList } from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);

  const formatter = new Intl.NumberFormat('ko-KR');

  return (
    <>
      {/* 표 레이아웃 만들기 */}
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>1</td>
            <td>라켓</td>
            <td>2</td>
            <td>199,000원</td>
          </tr> */}

          {/* Quiz: cartList 반복 렌더링 및 데이터 바인딩 */}
          {cartList.map((cart, index) => 
            <tr key={cart.id}>
              <td>{index + 1}</td>
              <td>{cart.title}</td>
              <td>
                <button onClick={() => dispatch(decreaseCount(cart.id))}>
                  -
                </button>
                {cart.count}
                <button onClick={() => dispatch(increaseCount(cart.id))}>
                  +
                </button>
              </td>
              <td>{formatter.format(cart.price * cart.count)}원</td>
              <td>
                <button onClick={() => dispatch(removeItemFromCart(cart.id))}>
                  x
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;