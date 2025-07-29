import {
  CardP,
  CardText,
  GridContainer,
  Price,
  ProductName,
  ProductsWrapper,
} from "./Products.styled";
import { Link } from "react-router-dom";
import useProducts from "../../utils/constants/hooks/useProducts";

const Products = () => {
  const { products, loading } = useProducts();

  return (
    <ProductsWrapper>
      <h2>Featured</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <GridContainer>
          {products.map((product) => (
            <CardP key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.data.mainimage.url} alt={product.data.name} />
                <CardText>
                  <ProductName>{product.data.name}</ProductName>
                  <Price>${product.data.price} MXN</Price>
                  <ProductName>{product.data.category.tags}</ProductName>
                </CardText>
              </Link>
            </CardP>
          ))}
        </GridContainer>
      )}
    </ProductsWrapper>
  );
};

export default Products;
