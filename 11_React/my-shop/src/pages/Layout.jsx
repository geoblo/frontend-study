import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logoutSuccess, selectUser } from "../features/user/userSlice";
import axios from "axios";

function Layout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    const result = await axios.get(`http://ec2-13-209-77-178.ap-northeast-2.compute.amazonaws.com:8080/logout`, {
      headers: {
        Authorization: token
      }
    });
    console.log(result);

    // 전역 상태 초기화
    dispatch(logoutSuccess());
    // 로컬 스토리지 초기화
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      {/* 헤더 영역: 상단 내비게이션 바 */}
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#" onClick={() => navigate('/')}>고니네 샵</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/')}>홈</Nav.Link>
              <Nav.Link onClick={() => navigate('/cart')}>장바구니</Nav.Link>
            </Nav>
            {user 
              ? (
                <>
                  <Link to="/profile">{user.nickname}</Link>
                  <Button variant="outline-success" onClick={handleLogout}>로그아웃</Button>
                </>
              )
              : <Button variant="outline-success" onClick={() => navigate('/login')}>로그인</Button>
            }
          </Container>
        </Navbar>
      </header>

      {/* 자식 컴포넌트가 렌더링 될 위치 */}
      <Outlet />

      <footer>
        <p className="py-5 mb-0 bg-dark text-white">
          &copy; KJH Goni Kim. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;