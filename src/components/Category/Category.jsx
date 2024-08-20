import React from "react";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";
import { useParams, NavLink } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  return (
    <>
      <div className="container py-3">
        <div className="row">
          <div className="container-title d-flex pb-5">
            <NavLink to="/">
              <h4
                style={{
                  fontWeight: "medium",
                  fontSize: "1.7rem",
                }}
              >
                Home
              </h4>
            </NavLink>
            <h4
              className="px-1"
              style={{ fontSize: "1.7rem", fontWeight: "normal" }}
            >
              /
            </h4>
            <h4
              className=""
              style={{
                fontWeight: "medium",
                fontSize: "1.7rem",
              }}
            >
              {
                data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
                  ?.title
              }
            </h4>
          </div>
        </div>
        <Products products={data} />
      </div>
    </>
  );
};

export default Category;
