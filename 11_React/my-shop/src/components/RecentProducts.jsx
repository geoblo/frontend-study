import { Card, ListGroup } from "react-bootstrap";
import styled from "styled-components";

const RecentProductsWrapper = styled(Card)`
  position: fixed;
  top: 100px;
  right: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);
  width: 8rem;
`;

function RecentProducts(props) {
  const { productList } = props;

  const recentProducts = JSON.parse(localStorage.getItem('recentProducts'));

  // 최근 본 상품이 없을 때는 렌더링 막기
  if (!recentProducts) return null;

  // id값으로 최근 본 상품들만 찾아서 배열로 만들기
  const recentProductsList = recentProducts.map(id => {
    return productList.find(product => product.id === id);
  });

  return (
    <RecentProductsWrapper>
      <Card.Header>최근 본 상품</Card.Header>
      <ListGroup variant="flush">
        {recentProductsList.slice(0, 3).map(product => (
          <>
            <img 
              src={product.imagePath} 
              alt={product.title}
              className="cursor-pointer"
            />
            <ListGroup.Item className="text-ellipsis">{product.title}</ListGroup.Item>
          </>
        ))}
      </ListGroup>

      {recentProductsList.length > 3 &&
        <Card.Body>
          <Card.Link href="#">더보기</Card.Link>
        </Card.Body>
      }
    </RecentProductsWrapper>
  );
};

export default RecentProducts;