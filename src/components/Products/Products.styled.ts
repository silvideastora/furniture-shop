import styled from "styled-components";

export const ProductsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
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

export const CardContainer = styled.div`
  display: flex;
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 4px;
  }
  a {
    text-decoration: none;
    color: slateblue;
    font-size: 20px;
  }
`;

export const CardText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;

  .items div {
    display: grid;
    grid-template-rows: 50px 50px;
  }

  .prod-name {
    display: flex;
    max-height: 22px;
    font-size: 1rem;
    color: dimgray;
    font-weight: 400;
    justify-content: center;
  }

  .price {
    display: block;
    font-size: 26px;
    color: black;
    margin: 0 40px;
  }
  .slug {
    margin-left: 40px;
    position: absolute;
    display: flex;
  }
  .add-to-cart {
    max-width: 120px;
    max-height: 100px;
    display: flex;
    background-color: slateblue;
    border: 0;
    color: white;
    border-radius: 10px;
    margin: 0 150px;
    padding: 2px;
    position: absolute;
    cursor: pointer;
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
  display: grid;
  align-items: center;
  justify-content: center;
  max-width: 260px;
  min-width: 192px;
  height: 60px;
  background: gray;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease all;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-top: 30px;

  :hover {
    box-shadow: 0 0 40px 40px slateblue inset;
  }
`;
