import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants";
import { useAPI } from "./useAPI";
import type { Banner } from "../../../types";

const useBanners = () => {
  const { ref, isLoading } = useAPI();
  const [banners, setBanner] = useState<Array<Banner>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!ref || isLoading) return;
    const controller = new AbortController();
    const params = new URLSearchParams({
      ref,
      q: '[[at(document.type, "banner")]]',
      lang: "en-us",
      pageSize: "5",
    });
    const fetchBanners = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${API_BASE_URL}/documents/search?${params.toString()}`,
          {
            signal: controller.signal,
          }
        );
        const data = await res.json();
        setBanner(data.results);
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
    return () => {
      controller.abort();
    };
  }, [ref, isLoading]);
  return { banners, loading, isLoading, ref };
};

export default useBanners;
