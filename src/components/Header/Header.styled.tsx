import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 65px;
  background-color: WhiteSmoke;
  display: flex;
  align-items: center;
  padding: 8px;

  .img-logo {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    display: block;
    cursor: pointer;
  }
`;
export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 50%;
`;

export const InputSearcherWrapper = styled.div`
  input {
    width: 400px;
    height: 39px;
    box-sizing: border-box;
    border: 5px;
    justify-content: center;
    padding-left: 10px;
    font-size: 1rem;
    border-radius: 8px 0 0 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      width: 300px;
    }

    @media (max-width: 480px) {
      width: 200px;
    }
  }

  button {
    height: 39px;
    padding: 10px;
    background-color: white;
    font-size: small;
    background-color: pink;
    border-radius: 0 8px 8px 0;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: SlateBlue;
      color: white;
    }

    @media (max-width: 768px) {
      padding: 0 12px;
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      padding: 0 8px;
      font-size: 0.75rem;
    }
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  color: DarkGrey;

  .user-icon {
    margin-left: 150px;
    padding: 10px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .user-name {
    margin-right: 80px;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .img-icon {
    max-width: 20px;
    height: 20px;
    margin-right: 70px;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
