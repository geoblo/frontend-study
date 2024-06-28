import { createGlobalStyle } from "styled-components";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Route, Routes, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

// 글로벌(공통) 스타일 설정
const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  #root {
    text-align: center;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  /* 넘치는 텍스트에 줄임표(...) 만들기 */
  .text-ellipsis {
    white-space: nowrap; // 줄바꿈 안함
    overflow: hidden; // 넘친 부분 숨기기
    text-overflow: ellipsis; // 넘친 부분을 어떻게 보일지 지정(ellipsis = 줄임표)
  }
`;

function App() {
  return (
    <>
      {/* 부트스트랩 연습 */}
      {/* 1) 리액트 부트스트랩 */}
      {/* <Button variant="primary">Primary</Button> */}
      {/* 2) 기존 부트스트랩 */}
      {/* <button type="button" className="btn btn-primary">Primary</button> */}

      <GlobalStyle />
      
      {/* Quiz: 헤더를 Layout 컴포넌트로 추출 및 Nested Route 구성해보기 */}

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* index: index route(여기서는 기본 자식 라우트를 의미) */}
          <Route index element={<Main />} />
          {/* <Route path="detail" element={<ProductDetail />} /> */}
          {/* Quiz: 상품별 상세페이지 여러 개를 라우팅하려면? URL 파라미터 사용
            예: /detail/1로 접속하면 productId에 1이 담기도록 설정 */}
          <Route path="detail/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<div>페이지가 존재하지 않습니다.</div>} />
        </Route>
      </Routes>

      {/* 토스트 컨테이너 하나로 재사용
        만약 다른 옵션의 토스트를 쓰고 싶다면 컨테이너 여러 개 사용 */}
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        pauseOnFocusLoss={false}
        theme="dark"
      />
    </>
  );
}

export default App;

// 패키지 설치 및 StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios

// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존 것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
// https://react-bootstrap.netlify.app/
