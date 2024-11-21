import React, { useRef } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import { formatCurrency } from "../lib/utils";

const Cart = () => {
  const router = useRouter();
  const cartRef = useRef();
  const { cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity } =
    useStateContext();

  const handleCheckout = async () => {
    const loadingToast = toast.loading("Redirecting...");
    setTimeout(() => {
      toast.dismiss(loadingToast);
      router.push("/successPay");
    }, 1000);
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length < 1 && (
            <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h1>Your shopping bag is empty</h1>
            </div>
          )}

          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div key={item._id} className="item-card">
                <div className="item-image">
                  <img src={item.image} alt="img" />
                </div>
                <div className="item-details">
                  <div className="name-and-remove">
                    <h3>{item.name}</h3>
                    <button
                      type="buttin"
                      onClick={() => onRemove(item)}
                      className="remove-item"
                    >
                      <HiOutlineTrash size={28} />
                    </button>
                  </div>
                  <p className="item-tag">Dress</p>
                  <p className="delivery-est">Delivery Estimation</p>
                  <p className="delivery-days">5 Working Days</p>
                  <div className="price-and-qty">
                    <span className="price">
                      {formatCurrency(item.price * item.quantity)}đ
                    </span>
                    <div>
                      <span
                        className="minus"
                        onClick={() =>
                          toggleCartItemQuantity(item.productId, "dec")
                        }
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="num" onClick="">
                        {item.quantity}
                      </span>
                      <span
                        className="plus"
                        onClick={() =>
                          toggleCartItemQuantity(item.productId, "inc")
                        }
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="qty">
              <p>Quantity</p>
              <span>{totalQty} Product</span>
            </div>
            <div className="subtotal">
              <p>Sub Total</p>
              <span>{formatCurrency(totalPrice)}đ</span>
            </div>
            {/* <div className='total'>
            <p>Total</p>
            <span>${totalPrice}</span>
          </div>  */}
            <div>
              <button className="btn" type="button" onClick={handleCheckout}>
                Process to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
