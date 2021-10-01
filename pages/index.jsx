import { useState, useEffect } from "react";
import Products from "../components/Products";
import { getAllProducts } from "../web/products";


export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const allProducts = await getAllProducts();
    setProducts(allProducts);
  }, [])

  return (
    <Products products={products} />
  );
}