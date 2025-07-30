import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { Product } from "../../types";
import useCategories from "../../utils/constants/hooks/useCategories";
import useProducts from "../../utils/constants/hooks/useProducts";
import {
  Loader,
  ProductCard,
  ProductListContainer,
  SidebarWrapper,
} from "./ProductList.styled";
import { Card } from "../Categories/Categories.styled";
import { CardText } from "../Products/Products.styled";

const ProductList = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(search);
  const categoryParam = searchParams.get("category");

  //Hooks destructuring
  const { categories, isLoading: loadingCategories } = useCategories();
  const { products: allProducts, isLoading: loadingProducts } = useProducts();

  //states
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    categoryParam
  );
  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    if (selectedCategoryId && allProducts.length > 0) {
      const filtered = allProducts.filter(
        (product) => product.data.category.id === selectedCategoryId
      );
      // guardalos en el estado de los productos filtrados
      setFilteredProducts(filtered);
    } else {
      // Si no hay categoría seleccionada, mostrar todos los productos
      setFilteredProducts(allProducts);
    }
  }, []);

  //para asegurarnos que selectedCategory cambie si se modifica la category en la URL
  useEffect(() => {
    setSelectedCategoryId(categoryParam);
  }, [categoryParam]);

  // funcion para cambiar de categoría
  const handleCategoryClick = (id: string) => {
    setSelectedCategoryId(id);
    navigate(`?category=${id}`);
  };

  return (
    <ProductListContainer>
      {/* Sidebar de categorías */}
      <SidebarWrapper>
        {loadingCategories ? (
          <p>Cargando categorías...</p>
        ) : (
          categories.map((category) => (
            <ol
              key={category.id}
              className={category.id === selectedCategoryId ? "is-active" : ""}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.data.name}
            </ol>
          ))
        )}
      </SidebarWrapper>

      {/* Lista de productos */}
      {loadingProducts ? (
        <Loader />
      ) : (
        <ProductCard>
          {filteredProducts.map((product) => {
            const detail = product.data;
            return (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Card className="card">
                  <img src={detail.mainimage.url} alt={detail.name} />
                  <CardText>
                    <h4 className="prod-name">{detail.name}</h4>
                    <span className="price">${detail.price}</span>
                    <div className="items">
                      <button className="add-to-cart">Add to cart</button>
                    </div>
                  </CardText>
                </Card>
              </Link>
            );
          })}
        </ProductCard>
      )}
    </ProductListContainer>
  );
};

export default ProductList;
