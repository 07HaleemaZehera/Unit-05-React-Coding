import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedtProducts } from "../redux/actions/productAction";

export const ProductDetail = () => {
  const product = useSelector((state) => state.products);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedtProducts(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  },[fetchProductDetail]);

  return (
    <div>
      <h1>Product Details:</h1>
    </div>
  );
};
