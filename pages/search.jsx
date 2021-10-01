import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { searchCards } from '../web/products';
import Products from "../components/Products";

export default function Home() {
   const [products, setProducts] = useState([]);
   const { query } = useRouter();
   const { term } = query;

   useEffect(async () => {
      if (term) {
         const cards = await searchCards(term);
         setProducts(cards);
      } else {
         setProducts([]);
      }
   }, [query]);


   return (
      <Products products={products} />
   );
}