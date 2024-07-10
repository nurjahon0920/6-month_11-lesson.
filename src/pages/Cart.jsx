import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cart_top_img from "../assets/shop/shop_bg.png";
import delete_icon from "../assets/cart/delete_icon.svg";
import cart_bottom1 from "../assets/cart/cart_bottom1.svg";
import cart_bottom2 from "../assets/cart/cart_bottom2.svg";
import cart_bottom3 from "../assets/cart/cart_bottom3.svg";
import cart_bottom4 from "../assets/cart/cart_bottom4.svg";
import LOGO_icon from "/LOGO_icon.svg";
import axios from "axios";

const Cart = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  const { id } = useParams();
  const [single, setSingle] = useState(null);
  // console.log(single);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setData(res.data);
        setSingle(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // console.log(data?.h5);
  //
  //
  //
  const [productCount, setProductCount] = useState(1);
  const incrementProductCount = () => {
    setProductCount(productCount + 1);
  };
  const decrementProductCount = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    } else {
      data = [];
    }
  };
  const resetProductCount = () => {
    setProductCount((productCount = 0));
  };
  return (
    <div>
      <div className="mx-auto max-w-[1440px] text-center">
        <div className="Cart_top">
          <img src={Cart_top_img} alt="" className="" />
          <div className="Cart_top_content w-full absolute top-[140px] left-[30px]">
            <img src={LOGO_icon} alt="" className="text-center mx-auto" />
            <h1 className="text-5xl font-bold text-[#000000]">Cart</h1>
            <div className="flex justify-center mt-3 text-base">
              <Link to="/" className="text-base font-medium">
                Home
              </Link>
              <p className="text-base font-semibold px-3">{">"}</p>
              <Link to="/Cart" className="font-normal text-base">
                Cart
              </Link>
            </div>
          </div>
        </div>
        <div className="Cart_content mt-[72px] mx-auto max-w-[1240px] gap-[30px] flex pb-[85px]">
          <div className="flex flex-col">
            <div className="content_top bg-[#F9F1E7] flex py-4 px-[112px]">
              <p className="font-semibold text-left ml-8 w-44">Product</p>
              <p className="w-[177px] text-left font-semibold">Price</p>
              <p className="mr-9 text-left font-semibold">Quantity</p>
              <p className="font-semibold w-[180px]">Subtotal</p>
            </div>
            <div className="content_bottom flex items-center">
              <img
                src={data?.img}
                alt={data?.h4}
                className="h-[105px] max-w-[108px] w-full rounded-md"
              />
              <p className="font-semibold text-base text-[#9F9F9F] ml-[34px] text-left w-44">
                {data?.h4}
              </p>
              <p className="font-semibold text-base text-[#9F9F9F] text-left w-[180px]">
                Rs. {data?.h5}
              </p>
              <p className="font-semibold text-base text-left w-[120px]">
                <div className="border-[1px] border-[#9f9f9f] border-solid flex gap-5 items-center py-3 rounded-[7px] w-[100px] px-3">
                  <button
                    className="text-base p-1"
                    onClick={decrementProductCount}>
                    -
                  </button>
                  <p className="text-base">{productCount}</p>
                  <button
                    className="text-base p-1"
                    onClick={incrementProductCount}>
                    +
                  </button>
                </div>
              </p>
              <p className="font-semibold text-base text-left ml-8 w-[180px]">
                Rs. {data?.h5}
              </p>
              <img
                src={delete_icon}
                alt=""
                className="cursor-pointer w-7 h-7"
                onClick={resetProductCount}
              />
            </div>
          </div>
          <div className="content_right bg-[#F9F1E7] pt-[15px] pb-20 px-[75px]">
            <h3 className="text-[32px] font-bold mb-[61px]">Cart Totals</h3>
            <div className="flex justify-between pb-[30px]">
              <h4 className="font-medium text-base">Subtotal</h4>
              <p className="text-[#9F9F9F]">Rs. {data?.h5}</p>
            </div>
            <div className="flex justify-between pb-[42px]">
              <h4 className="font-medium">Total</h4>
              <h3 className="text-[#B88E2F] text-xl font-medium">
                Rs. {data?.h5}
              </h3>
            </div>
            <div className="flex items-center">
              <button className="bg-[#F9F1E7] text-[#000000] font-semibold py-3 px-[58px] rounded-[7px] border-solid border-[1px] border-black">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Cart_bottom bg-[#FAF3EA]">
        <div className="flex flex-wrap justify-between mx-auto max-w-[1334px] py-[100px]">
          <div className="flex gap-[10px]">
            <img src={cart_bottom1} alt="" className="" />
            <div className="flex flex-col gap-[2px]">
              <h3 className="text-[#242424] font-semibold text-[25px]">
                High Quality
              </h3>
              <p
                className="
              text-[#898989] font-medium text-xl
              ">
                crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <img src={cart_bottom2} alt="" className="" />
            <div className="flex flex-col gap-[2px]">
              <h3 className="text-[#242424] font-semibold text-[25px]">
                Warranty Protection
              </h3>
              <p
                className="
              text-[#898989] font-medium text-xl
              ">
                Over 2 years
              </p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <img src={cart_bottom3} alt="" className="" />
            <div className="flex flex-col gap-[2px]">
              <h3 className="text-[#242424] font-semibold text-[25px]">
                Free Shipping
              </h3>
              <p
                className="
              text-[#898989] font-medium text-xl
              ">
                Order over 150 $
              </p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <img src={cart_bottom4} alt="" className="" />
            <div className="flex flex-col gap-[2px]">
              <h3 className="text-[#242424] font-semibold text-[25px]">
                24 / 7 Support
              </h3>
              <p
                className="
              text-[#898989] font-medium text-xl
              ">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
