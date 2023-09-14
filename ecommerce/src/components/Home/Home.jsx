import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../Header/Header";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setCount(count + 1); // Actualiza el contador de productos en el encabezado
  };

  // Filtro de categorias
  const filterProductsByCategory = (category) => {
    if (category === "") {
      return products; // Si no hay categoría seleccionada, mostrar todos los productos.
    } else {
      return products.filter((product) => product.category === category);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const url = "https://fakestoreapi.com/products";
      const results = await axios.get(url);

      setProducts(results.data);
      console.log(results);
    };
    getProducts();
  }, []);
  return (
    <>
      <Header count={count} selectedProducts={selectedProducts} ></Header>
      <br />
      <div className="flex justify-center w-[100%]">
        <div className="flex w-[60%] justify-center gap-8">
          <h2 className="text-2xl text-[#543588] font-bold">Categories:</h2>
          <ul className="flex gap-8">
            <button
              onClick={() => setSelectedCategory("")}
              className="px-6 bg-[#724ca1] text-[#b8aada] rounded-md font-semibold"
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("men's clothing")}
              className="px-6 bg-[#724ca1] text-[#b8aada] rounded-md font-semibold"
            >
              Men's clothing
            </button>
            <button
              onClick={() => setSelectedCategory("women's clothing")}
              className="px-6 bg-[#724ca1] text-[#b8aada] rounded-md font-semibold"
            >
              Women's clothing
            </button>
            <button
              onClick={() => setSelectedCategory("jewelery")}
              className="px-6 bg-[#724ca1] text-[#b8aada] rounded-md font-semibold"
            >
              Jewelery
            </button>
            <button
              onClick={() => setSelectedCategory("electronics")}
              className="px-6 bg-[#724ca1] text-[#b8aada] rounded-md font-semibold"
            >
              Electronics
            </button>
          </ul>
        </div>
      </div>
      <br />
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {products.length === 0 && <h1>Loading...</h1>}
        {filterProductsByCategory(selectedCategory).map((product, i) => {
          return (
            <>
              <div
                className="flex flex-col justify-center items-center w-80 h-[420px] rounded-2xl bg-[#4d2d64]"
                key={i}
              >
                <div className="w-full p-2 flex justify-end items-center">
                  <button
                    className="rounded-[50%] w-[12%] z-10 text-3xl text-[#ac93e7] bg-[#371b63] flex items-center justify-center h-full"
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                </div>
                <img
                  className="rounded-xl relative w-[60%] h-[60%]"
                  src={product.image}
                  alt="product image"
                />
                <h2 className="my-4 text-[14px] text-center w-full text-white font-semibold">
                  {product.title}
                </h2>
                <div className="flex">
                  <h3 className="text-[#d5c0f6] font-semibold p-2">
                    Category: {product.category}
                  </h3>
                  <h4 className="text-[#c9a6ed] font-semibold p-2">
                    Price: {product.price}
                  </h4>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
