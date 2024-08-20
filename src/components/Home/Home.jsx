import React, { useContext, useEffect } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Offer from "./Offer/Offer";
import { FetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { category, setCategory, products, setProducts } = useContext(Context);

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  const getCategory = () => {
    FetchDataFromApi("/api/categories?populate=*").then((res) => {
      // console.log(res);
      setCategory(res);
    });
  };

  const getProducts = () => {
    FetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  return (
    <>
      <Banner />
      <Category category={category}/>
      <Products products={products}/>
      <Offer />
    </>
  );
};

export default Home;
