import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cart_top_img from "../assets/shop/shop_bg.png";
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
        <div className="Cart_content mt-[72px] mx-auto max-w-[1240px] gap-[30px]">
          <div className="content_top bg-[#F9F1E7] flex py-4 px-[112px]">
            <p className="font-semibold text-left ml-8 w-44">Product</p>
            <p className="w-[177px] text-left font-semibold">Price</p>
            <p className="mr-9 text-left font-semibold">Quantity</p>
            <p className="font-semibold">Subtotal</p>
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
            <p className="font-semibold text-base text-[#9F9F9F] text-left w-[177px]">
              {data?.h5}
            </p>
            <p className="font-semibold text-base text-left border-[1px] border-[#9F9F9F] rounded-[5px] border-solid py-1 px-[13px]">
              {/* {productCount} */}
            </p>
            {/* <p className="font-semibold text-left text-base text-right">{data?.h5 * 1}</p> */}
          </div>
        </div>
      </div>
      <div className="Cart_bottom bg-[#FAF3EA]">
        <div className="flex justify-between mx-auto max-w-[1334px]"></div>
      </div>
    </div>
  );
};

export default Cart;
