import styled from "styled-components";

// 리액트(JS)에서 이미지 파일 가져오기
// 1) src 폴더 안 이미지(상대 경로로 import해서 사용)
import yonexImg from "../images/yonex.jpg";
import { Col, Container, Row } from "react-bootstrap";

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main() {
  return (
    <>
      {/* 메인 이미지 섹션 */}
      <section>
        <MainBackground />
      </section>

      {/* 상품 목록 섹션 */}
      <section>
        <Container>
          <Row>
            <Col>
              <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1659329583483s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4}>
              <img src="https://www.yonexmall.com/shop/data/goods/1667190100104s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Main;
