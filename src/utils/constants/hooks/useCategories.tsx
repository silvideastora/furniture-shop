import { useAPI } from "./useAPI";
import { API_BASE_URL } from "../constants";
import { useEffect, useState } from "react";
import type { Category } from "../../../types";

const useCategories = () => {
  const { ref, isLoading } = useAPI();
  //Definimos el state para guardar las categories
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!ref || isLoading) return;
    const controller = new AbortController();
    const params = new URLSearchParams({
      ref,
      q: '[[at(document.type,"category")]]',
    });
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/documents/search?${params}`, {
          signal: controller.signal,
        });

        const data = await res.json();
        setCategories(data.results);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
    return () => {
      controller.abort();
    };
  }, [ref, isLoading]);
  return { categories, loading, isLoading, ref };
};

export default useCategories;
