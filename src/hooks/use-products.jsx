import { useEffect } from "react";
import { useState } from "react";
import { getProducts } from "../helpers/getProducts";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("");

  useEffect(() => {
    getProducts().then((products) => setProducts(products));

    setOrder("");
  }, []);

  useEffect(() => {
    orderBy(order);
  }, [order]);

  function orderBy(type) {
    console.log("Esto se ejecuta");
    const sortedProducts = [...products];
    if (type == "LOWEST_PRICE") {
      sortedProducts.sort((a, b) => a.cost - b.cost);
    } else if (type == "HIGHEST_PRICE") {
      sortedProducts.sort((a, b) => b.cost - a.cost);
    } else {
      sortedProducts.sort((a, b) => a._id.localeCompare(b._id));
    }
    setProducts(sortedProducts);
  }

  return { products, setProducts, setOrder, order };
}
