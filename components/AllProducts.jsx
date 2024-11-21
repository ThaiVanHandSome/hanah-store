import React from "react";
import Link from "next/link";
import { formatCurrency } from "../lib/utils";

const Allproducts = ({ allproducts: { image, name, productId, price } }) => {
  return (
    <div>
      <Link href={`/product/${productId}`}>
        <div className="Allproduct-card">
          <img src={image} width={250} height={270} />
          <p className="Allproduct-name">{name}</p>
          <p className="Allproduct-price">{formatCurrency(price)}đ</p>
        </div>
      </Link>
    </div>
  );
};

export default Allproducts;
