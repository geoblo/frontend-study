import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropUse from './chapter5/5.3/PropsUse';
import CommentEx from './chapter5/5.6/CommentEx';
import CommentList from './chapter5/CommentList';
import Counter from './chapter7/7.2/Counter';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import Mailbox from './chapter9/9.3/Mailbox';
import LoginControlRefactoring from './chapter9/9.3/LoginControlRefactoring';
import MainPage from './chapter9/9.4/MainPage';
import LandingPage from './chapter9/LandingPage';
import NumberList from './chapter10/10.1/NumberList';
import ListKey from './chapter10/10.2/ListKey';
import AttendanceBook from './chapter10/AttendanceBook';
import NameForm from './chapter11/11.2/NameForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import Reservation from './chapter11/11.4/Reservation';
import ReservationRefactoring from './chapter11/11.4/ReservationRefactoring';
import SignUp from './chapter11/SignUp';
import TextInputWithFocusButton from './chapter7/7.6/TextInputWithFocusButton';
import FileInput from './chapter11/11.3/FileInput';
import UnitCalculator from './chapter12/UnitCalculator';
import WelcomeDialog from './chapter13/13.1.1.1/WelcomeDialog';
import SplitPaneSection from './chapter13/13.1.1.2/SplitPaneSection';
import DialogContainer from './chapter13/13.1.2/DialogContainer';
import SignUpDialog from './chapter13/13.1.3/SignUpDialog';
import ProfileCard from './chapter13/ProfileCard';
import StyledPage from './chapter15/StyledPage';
import Blocks from './chapter15/theme/Blocks';
import ThemeApp from './chapter15/theme/ThemeApp';
import ComponentVariable from './chapter7/7.6/ComponentVariable';
import CounterEffect from './chapter7/7.3/ex1/CounterEffect';
import TimerContainer from './chapter7/7.3/ex2/TimerContainer';
import EffectSummary from './chapter7/7.3/ex3/EffectSummary';
import EffectContainer from './chapter7/7.3/ex3/EffectContainer';
import SimpleRouter from './chapter16/SimpleRouter';
import ApiRequest from './chapter17/ApiRequest';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Root DOM Node에 리액트 컴포넌트를 렌더링 하도록 하는 함수(React 엘리먼트를 DOM 엘리먼트로 렌더링하는 역할)
// 처음으로 렌더링할 컴포넌트를 지정하는데 App 컴포넌트가 기본적으로 들어가있음
root.render(
  // <App />

  // 3장 예제
  // <JsxUse />
  // <Library />

  // 5장 예제
  // <PropUse />
  // <CommentEx 
  //   date={new Date()} 
  //   text="리액트를 즐기세요!" 
  //   user={{
  //     name: 'Hello Kitty',
  //     avatarUrl: 'http://placekitten.com/50/50'
  //   }}   
  // />
  // <CommentList />

  // 7장 예제
  // <Counter />
  // <TextInputWithFocusButton />
  // <ComponentVariable />
  // <CounterEffect />
  // <TimerContainer />
  // <EffectSummary />
  // <EffectContainer />

  // 8장 예제
  // <Toggle />
  // <MyButton />
  // <ConfirmButton />

  // 9장 예제
  // <Greeting isLoggedIn={true} />
  // <LoginControl />
  // <Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />
  // <Mailbox unreadMessages={[]} />
  // <LoginControlRefactoring />
  // <MainPage />
  // <LandingPage />

  // 10장 예제
  // <NumberList />
  // <ListKey />
  // <AttendanceBook />

  // 11장 예제
  // <NameForm />
  // <EssayForm />
  // <FlavorForm />
  // <Reservation />
  // <ReservationRefactoring />
  // <SignUp />
  // <FileInput />

  // 12장 예제
  // <UnitCalculator />

  // 13장 예제
  // <WelcomeDialog />
  // <SplitPaneSection />
  // <DialogContainer />
  // <SignUpDialog />
  // <ProfileCard />

  // 14장 예제
  // <StyledPage />
  // <Blocks />
  // <ThemeApp />

  // 16장 예제
  // <SimpleRouter />

  // 17장 예제
  <ApiRequest />
);

// 4장 예제
// 1초마다 Clock 컴포넌트를 렌더링 하는 코드
// setInterval(() => {
//   root.render(<Clock />);
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
