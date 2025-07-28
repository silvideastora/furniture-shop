import type { APIDataProps, APIResponse } from "../../../types";

import { useEffect, useState } from "react";

import { API_BASE_URL } from "../constants";

export const useAPI = () => {
  //Crea un estado para guarda la API
  const [apiData, setAPIData] = useState<APIDataProps>({
    ref: null,
    isLoading: true,
  });

  //Crea un efecto para obtener la API
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchAPI = async () => {
      try {
        const res = await fetch(API_BASE_URL, { signal });
        const data: APIResponse = await res.json();

        const masterRef = data.refs.find((r) => r.isMasterRef)?.ref ?? null;
        setAPIData({ ref: masterRef, isLoading: false });
      } catch (error) {
        console.error("Error fetching API data:", error);
        setAPIData({ ref: null, isLoading: false });
      }
    };
    fetchAPI();

    return () => {
      controller.abort();
    };
  }, []);
  return apiData;
};
