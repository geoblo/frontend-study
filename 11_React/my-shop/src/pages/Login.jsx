import styled from "styled-components";

const LoginWrapper = styled.div`
  height: calc(100vh - 176px);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 20px;
  }
`;

function Login() {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  const handleChangeLoginForm = (e) => {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  return (
    <LoginWrapper>
      <input 
        type="text"
        name="username"
        value={loginForm.username}
        onChange={handleChangeLoginForm}
      />
      <input 
        type="password"
        name="password"
        value={loginForm.password}
        onChange={handleChangeLoginForm}
      />
      <button type="button" onClick={handleLogin}>로그인</button>
    </LoginWrapper>
  );
};

export default Login;