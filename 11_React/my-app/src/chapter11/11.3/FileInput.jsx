import axios from "axios";
import { useRef } from "react";

function FileInput() {
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileInput.current.files); // FileList 객체
    alert(`선택된 파일: ${fileInput.current.files[0]?.name}`);

    const formData = new FormData();
    // formData.append('title', title);
    // formData.append('content', content);
    formData.append('file', fileInput.current.files[0]);

    // 아래 두 가지 방식 중에 택1
    // 1) multipart/form-data 타입으로 보냄
    axios.post('https://api-url', formData);
    
    // 2) 헤더에 콘텐트 타입 설정 시 자동으로 직렬화
    axios.post('https://api-url', {
      // title, 
      // content,
      file: fileInput.current.files[0]
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };

  // file input은 값을 설정 할 수 없고 사용자가 첨부한 파일의 정보만 읽어올 수 있기 때문에 비제어 컴포넌트가 됨
  // 파일에 접근하기 위해서 DOM 요소의 ref를 만들어 접근

  return (
    <form onSubmit={handleSubmit}>
      <label>
        파일 업로드:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
};

export default FileInput;