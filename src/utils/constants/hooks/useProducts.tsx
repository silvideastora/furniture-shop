import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants";
import { useAPI } from "./useAPI";
import type { Product } from "../../../types";

const useProducts = () => {
  const { ref, isLoading } = useAPI();

  // Definimos el state para guardar los productos
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Array<Product>>([]);

  //renderizamos con un useEffect
  useEffect(() => {
    if (!ref || isLoading) return;
    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${API_BASE_URL}/documents/search?ref=${ref}&
q=${encodeURIComponent('[[at(document.type, "product")]]')}
&q=${encodeURIComponent('[[at(document.tags, ["Featured"])]]')}
          &lang=en-us&pageSize=20`,
          {
            signal: controller.signal,
          }
        );
        const data = await res.json();
        setProducts(data.results);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
        console.log("Products fetched successfully");
      }
    };
    fetchProducts();
    return () => {
      controller.abort();
    };
  }, [ref, isLoading]);
  return { products, loading, isLoading, ref };
};

export default useProducts;
