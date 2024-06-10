import { Container, Nav, Navbar } from "react-bootstrap";

function Layout() {
  return (
    <>
      {/* 헤더 영역: 상단 내비게이션 바 */}
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#">고니네 샵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>홈</Nav.Link>
              <Nav.Link>장바구니</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      {/* 자식 컴포넌트가 렌더링 될 위치 */}


      <footer>
        <p className="py-5 mb-0 bg-dark text-white">
          &copy; KJH Goni Kim. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;