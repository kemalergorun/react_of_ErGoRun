import Container from "react-bootstrap/esm/Container";
import ProductCardItem from "./ProductCardItem";
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_MOCK_API_BASE_URL;

export default function FetchingData() {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    // fetch(`${BASE_URL}/products`).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));

    try {
      const response = await fetch(`${BASE_URL}/products`);

      if (!response.ok) throw new Error("There is problem");

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function startFetching() {
      const fetchedData = await fetchData();
      setProductData(fetchedData);
    }

    startFetching();
  }, []);

  return (
    <Container>
      <h2 className="text-center text-primary">Fetching Data</h2>

      <div className="d-flex flex-wrap gap-1 justify-content-center">
        {productData.map((item) => (
          <ProductCardItem key={item.id} item={{ ...item }} />
        ))}
      </div>
    </Container>
  );
}