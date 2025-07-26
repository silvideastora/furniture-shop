import { FooterWrap, Links, SocialMedia } from "../Footer/Footer.styled";
import iconf from "../../assets/facebook.png";
import iconI from "../../assets/instagram.png";

export default function Footer() {
  return (
    <FooterWrap>
      <Links>
        <ul>
          <a href=".">Home Tours</a>
          <a href=".">Payment</a>
          <a href=".">FAQ</a>
        </ul>
      </Links>
      <p>
        <small>Ecommerce created for styled characters and pets</small>
      </p>
      <SocialMedia>
        <a href=".">
          <img src={iconf} alt="facebook-icon" />
        </a>
        <a href=".">
          <img src={iconI} alt="twitter-icon" />
        </a>
      </SocialMedia>
    </FooterWrap>
  );
}
