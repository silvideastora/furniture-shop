import {
  ChartContainer,
  HeaderContainer,
  HeaderTitle,
  InputSearcherWrapper,
  ProfileWrapper,
} from "./Header.styled";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-fur.jpg";
import icon from "../../assets/shopping-cart.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <Link to="/">
          <img src={logo} alt="logo" className="img-logo" />
        </Link>
        <InputSearcherWrapper>
          <input
            type="search"
            id="search-box"
            className="input-search"
            placeholder="¿Qué es lo que buscas?"
          />
          <button>Buscar</button>
        </InputSearcherWrapper>
      </HeaderTitle>

      <ProfileWrapper>
        <ChartContainer>
          Hola, Silvia Rodriguez Lopez
          <Link to="/cart">
            <img src={icon} alt="cart-icon" className="img-icon" />
          </Link>
        </ChartContainer>
      </ProfileWrapper>
    </HeaderContainer>
  );
};
