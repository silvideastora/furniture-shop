import styled from "styled-components";

export const ProductsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  flex-direction: column;
  text-align: center;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;
export const CardP = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 100%;
  box-sizing: border-box;

  img {
    width: 100%;
    max-width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 8px;
  }
`;

export const CardText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;

  .prod-name {
    display: flex;
    max-height: 22px;
    font-size: 1rem;
    color: dimgray;
    font-weight: 400;
    justify-content: center;
  }
`;
export const Price = styled.span`
  font-size: 16px;
  color: #333333;
  font-weight: 600;
`;
export const ProductName = styled.p`
  font-size: 14px;
  color: #333333;
  margin: 0;
`;

export const Button = styled.button`
  margin: 2rem auto 0;
  display: block;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: gray;
  border-radius: 6px;
  cursor: pointer;
  max-width: 260px;
  min-width: 192px;
  height: 60px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: pink;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;
