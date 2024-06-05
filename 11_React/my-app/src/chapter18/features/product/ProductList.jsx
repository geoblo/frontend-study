import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToProductList, selectProductList } from "./productSlice";

function ProductList() {
  const dispatch = useDispatch();
  const productList = useSelector(selectProductList);

  const [productName, setProductName] = useState('');

  const handleAddProduct = () => {
    dispatch(addToProductList(productName));
    setProductName('');
  };

  return (
    <>
      <p>
        상품 추가:
        <input 
          type="text" 
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleAddProduct();
            }
          }}
        />
        <button
          type="button"
          onClick={handleAddProduct}
        >
          추가
        </button>
      </p>
      <p>상품 목록</p>
      <ul>
        {/* 반복 렌더링 */}
        {productList.map((product, index) => <li key={index}>{product}</li>)}
      </ul>
    </>
  );
};

export default ProductList;