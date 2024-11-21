import React from "react";
import Link from "next/link";
import { formatCurrency } from "../lib/utils";

const Product = ({ product: { image, name, productId, price } }) => {
  return (
    <div>
      <Link href={`/product/${productId}`}>
        <div className="product-card">
          <img src={image} width={380} height={400} className="product-image" />
          <p className="product-name">{name}</p>
          <p className="product-price">{formatCurrency(price)}đ</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
