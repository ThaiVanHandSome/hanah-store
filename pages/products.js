import React, { useState } from "react";
import { AllProducts } from "../components";
import { categoryData, productData } from "../src/assets/static/productData";

const Products = ({ Allproducts, categories }) => {
  // State để lưu categoryId đã chọn
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Hàm lọc sản phẩm theo categoryId
  const filteredProducts = selectedCategory
    ? Allproducts.filter((product) => product.categoryId === selectedCategory)
    : Allproducts;

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar Category */}
      <div
        style={{
          width: "300px",
          padding: "0 20px 20px 20px",
          borderRight: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            marginBottom: "4px",
          }}
        >
          Categories
        </h3>
        {categories.map((item) => (
          <div
            aria-hidden="true"
            key={item.categoryId}
            onClick={() => setSelectedCategory(item.categoryId)}
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #eee",
              backgroundColor:
                selectedCategory === item.categoryId
                  ? "#f0f0f0"
                  : "transparent",
              transition: "background-color 0.3s",
            }}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Products Container */}
      <div
        className="Allproducts-container"
        style={{
          flex: 1,
          margin: "0 20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts?.map((prod) => (
          <AllProducts key={prod.productId} allproducts={prod} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const Allproducts = productData;
  const categories = categoryData;

  return {
    props: { Allproducts, categories },
  };
};

export default Products;
