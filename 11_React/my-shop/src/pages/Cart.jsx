import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCartList } from "../features/cart/cartSlice";

function Cart() {
  const cartList = useSelector(selectCartList);
  console.log(cartList);

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
          
        </tbody>
      </Table>
    </>
  );
};

export default Cart;