import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 샘플 데이터 렌더링 해보기
const sampleArticle = {
  title: '제목',
  description: '내용', 
  url: 'https://google.com', 
  urlToImage: 'https://via.placeholder.com/160'
};

// API를 요청하고 뉴스 데이터가 들어있는 배열을 리액트 엘리먼트 배열로 변환하여 렌더링하는 컴포넌트
function NewsList() {
  const [articles, setArticles] = useState(null);

  // NewsList가 화면에 보이는 시점에 API를 요청
  // => useEffect()를 사용하여 컴포넌트가 처음 렌더링 됐을 때 한번만 요청
  // useEffect() 안썼을 때 문제점? api 요청 + set함수에 의한 재렌더링 무한 반복
  useEffect(() => {
    const fetchNewsData = async () => {
      await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=ceb8d915e94f45079475365770e158c2');
    };
    fetchNewsData();
  }, []);

  return (
    <NewsListBlock>
      {/* <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} /> */}


    </NewsListBlock>
  );
};

export default NewsList;