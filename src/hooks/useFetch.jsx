import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredItems, setfilteredItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFetchedData(data);
        setfilteredItems(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { fetchedData, loading, filteredItems, setfilteredItems };
};

export default useFetch;
