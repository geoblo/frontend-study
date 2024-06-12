import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearSelectedProduct, getSelectedProduct, selectSelectedProduct } from "../features/product/productSlice";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);

  const formatter = new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' });

  const [showInfo, setShowInfo] = useState(true); // Info Alert창 상태

  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/geoblo/db-shop/products/${productId}`);
        // console.log(response);
        dispatch(getSelectedProduct(response.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductById();

    // 상품 상세 페이지가 언마운트 될 때 전역 상태 초기화
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInfo(false);
    }, 3000);
    
    // 불필요하게 타이머가 계속 쌓이는 것을 정리
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!product) {
    return null;
  }

  return (
    <Container className="pt-3">
      {/* Quiz: Alert을 띄우고 3초 뒤에 사라지게 만들기 
        힌트: 
          1) state 만들기 
          2) 조건부 렌더링 
          3) 처음 렌더링 됐을 때 setTimeout으로 타이머 설정하여 state 바꾸기
      */}
      {showInfo && (
        <Alert variant="info">
          현재 34명이 이 상품을 보고 있습니다.
        </Alert>
      )}


      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={product?.imagePath} width="80%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{product?.title}</h4>
          <p>{product?.content}</p>
          <p>{formatter.format(product?.price)}원</p>
          <Button variant="primary">주문하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;