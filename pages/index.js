import React from "react";
import { client } from "../lib/client";
import {
  HeroBanner,
  EventsBanner,
  Newsletter,
  FeaturesBanner,
  Product,
} from "../components";
import { Navigation, A11y, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { productData } from "../src/assets/static/productData";

const Home = ({ products }) => {
  return (
    <>
      <HeroBanner />
      <EventsBanner />

      <div className="products-outer-container">
        <div className="subtitle">
          <span>PRODUCTS</span>
          <h2>Check What We Have</h2>
        </div>
        <Swiper
          breakpoints={{
            // width >= 300
            300: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            // width >= 1000
            1000: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            // width >= 1260
            1260: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={4}
          navigation
        >
          <div className="products-container">
            {products?.map((product) => (
              <SwiperSlide>
                <Product key={product._id} product={product} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      {/* <FeaturesBanner />
      <Newsletter /> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const products = productData;

  return {
    props: { products },
  };
};

export default Home;
