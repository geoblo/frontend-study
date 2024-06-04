import styled from "styled-components";
import { NavLink } from "react-router-dom";

// 렌더링과 상관없는 고정값들은 전역 변수로 선언하여 사용
// 여기서 name은 실제 카테고리 값, text는 렌더링할 때 사용할 한글 카테고리명
const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  }
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

// Link 대신 NavLink 사용해보기
// to 속성에 적은 경로에 따라 active 상태를 알 수 있는 Link 컴포넌트의 특수한 종류
const Category = styled(NavLink)`
  font-size: 1.125rem;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  cursor: pointer;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

function Categories() {
  return (
    <CategoriesBlock>
      {categories.map((c) => {
        return <Category
          key={c.name}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>;
      })}
    </CategoriesBlock>
  );
};

export default Categories;