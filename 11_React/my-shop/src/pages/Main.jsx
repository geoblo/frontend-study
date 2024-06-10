import { useDebugValue, useEffect } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";

// 리액트(JS)에서 이미지 파일 가져오기
// 1) src 폴더 안 이미지(상대 경로로 import해서 사용)
import yonexImg from "../images/yonex.jpg";
import { getAllProducts } from "../features/product/productSlice";

const MainBackground = styled.div`
  height: 500px;
  background-image: url(${yonexImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Main() {
  const dispatch = useDispatch();

  // 처음 마운트 됐을 때 서버에 상품 목록 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 전역 상태로 저장
  useEffect(() => {
    // 서버에 상품 목록 요청
    axios.get('https://my-json-server.typicode.com/geoblo/db-shop/products')
      .then((response) => {
        console.log(response.data);
        dispatch(getAllProducts(response.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
            {/* 부트스트랩 이용한 반응형 작업 */}
            {/* md >= 768px 이상에서 전체 12등분 중 4:4:4로 보여줌 */}
            <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1645767865278s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4} sm={6}>
              <img src="https://www.yonexmall.com/shop/data/goods/1659329583483s0.png" width="80%" />
              <h4>상품명</h4>
              <p>상품가격</p>
            </Col>
            <Col md={4} sm={6}>
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

// 가짜(Fake) API 서버 만들기
// 실무와 비슷한 느낌으로 하기 위해 가짜(Fake) API 서버를 만들거임

// 1. json-server (혼자 CRUD 연습하기 좋음)
// 이 도구를 사용하면 json 파일 하나만 있으면 로컬에 연습용 서버를 쉽게 구성 할 수 있음
// (즉, 사용하려는 컴퓨터에서 매번 로컬 서버를 띄워야 함)

// json-server 사용법
// ./src/data.json 이라는 파일을 작성
// npx json-server ./src/data.json --port 4000
// 또는 
// npm i -g json-server
// json-server --watch ./src/data.json --port 4000

// 더 자세한 사용법 참고
// https://github.com/typicode/json-server
// https://redux-advanced.vlpt.us/3/01.html

// 2. My JSON Server (Read만 가능)
// 이 서비스를 사용하면 GitHub와 연동하여 연습용 서버를 쉽게 구성 할 수 있음

// My JSON Server 사용법
// GitHub에 저장소 생성(<your-username>/<your-repo>)
// db.json파일 만들기
// 서버에 액세스하려면 https://my-json-server.typicode.com/<your-username>/<your-repo>를 방문

// 사용 예
// https://my-json-server.typicode.com/geoblo/db-shop
// https://my-json-server.typicode.com/geoblo/db-shop/products
// https://my-json-server.typicode.com/geoblo/db-shop/products/1
