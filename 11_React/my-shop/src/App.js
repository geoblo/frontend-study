import { createGlobalStyle } from "styled-components";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

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
          <Route  />
        </Route>

      </Routes>

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
