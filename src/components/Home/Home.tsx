import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import Slideshow from "../SlideShow/SlideShow";
import { Button } from "../Products/Products.styled";

export default function Home() {
  return (
    <>
      <Slideshow />
      <Categories />
      <Products />
    </>
  );
}
