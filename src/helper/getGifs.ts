import { useEffect, useState } from "react";
import { Datum } from "../types/giphy";

export const useFetchGifs = (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=kGa2C54ALUt6q2SEl95E1zu6O82dzkaY&q=${category}&limit=10`;

  const [data, setData] = useState<Datum[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(url);
      const { data } = await response.json();
      setIsLoading(false);
      setData(data);
    } catch (error) {
      console.error("Error fetching gifs:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return {
    data,
    isLoading,
  };
};
