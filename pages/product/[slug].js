import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { useStateContext } from "../../context/StateContext";
import { productData } from "../../src/assets/static/productData";
import { formatCurrency } from "../../lib/utils";

const ProductDetails = ({ product }) => {
  const { image, name, thumbnails, price, categoryId } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <div className="products">
      <div className="product-detail-container">
        <div className="product-images">
          <div className="small-images-container">
            {thumbnails?.map((item, ind) => (
              <img
                key={ind}
                src={item}
                className="small-image"
                onMouseEnter={() => setIndex(ind)}
              />
            ))}
          </div>
          <div className="big-image-container">
            <img
              src={thumbnails && thumbnails[index]}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="product-details">
          <div className="name-and-category">
            <h3>{name}</h3>
          </div>
          <div className="quantity-desc">
            <h4>Quantity: </h4>
            <div>
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num" onClick="">
                {qty}
              </span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </div>
          </div>
          <div className="add-to-cart">
            <button
              className="btn"
              type="button"
              onClick={() => onAdd(product, qty)}
            >
              <CgShoppingCart size={20} />
              Add to Cart
            </button>
            <p className="price">{formatCurrency(price)}đ</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;

export const getStaticProps = async ({ params: { slug } }) => {
  const product = productData.find((obj) => obj.productId === parseInt(slug));

  return {
    props: { product },
  };
};

export const getStaticPaths = async () => {
  const products = productData;

  const paths = products.map((product) => ({
    params: {
      slug: String(product.productId),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
