import React, { useContext, useEffect } from 'react'
import Products from '../Products'
import { Context } from '../../../utils/context';
import { FetchDataFromApi } from '../../../utils/api';

const AllProducts = () => {

  const {  products, setProducts } = useContext(Context);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    FetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setProducts(res);
    });
  };


  return (
    <>
    <Products products={products}/>
    </>
  )
}

export default AllProducts