// Categories.styled.ts
import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  margin: auto;
  display: flex;
  padding: 30px;
  gap: 1rem;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Card = styled.div`
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
  .banner {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  .card-text {
    flex: 1;
    padding-left: 1rem;
    color: gray;
    font-weight: 100;
    font-size: 1rem;
    justify-self: center;
  }
`;
