import { CardContainer, CategoriesWrapper, Card } from "./Categories.styled";
import useCategories from "../../utils/constants/hooks/useCategories";
import { Link } from "react-router-dom";

const Categories = () => {
  const { categories, loading } = useCategories();

  return (
    <CategoriesWrapper>
      {!loading && (
        <CardContainer>
          <h2>Categories</h2>
          {categories.map((category, index) => (
            <Link to={`/products?category=${category.id}`} key={index}>
              <Card>
                <img
                  className="banner"
                  src={category.data.main_image.url}
                  alt={category.data.main_image.alt}
                />
                <div className="card-text">
                  <p>{category.data.name}</p>
                </div>
              </Card>
            </Link>
          ))}
        </CardContainer>
      )}
    </CategoriesWrapper>
  );
};

export default Categories;
