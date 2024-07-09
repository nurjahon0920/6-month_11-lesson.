import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import compare_icon from "/compare_icon.svg";
import share_icon from "/share_icon.svg";
import heart_svg from "/like_icon.svg";
import { Fade, Slide } from "react-awesome-reveal";
import axios from "axios";

const Cards_component = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  let links = data?.slice(0, 4).map((link) => (
    <div className="sec3_card w-[285px] h-[446px]" key={link.id}>
      <div className="bg-[#F4F5F7] text-left overflow-hidden relative group shadow-md">
        <img src={link.img} alt="" className="" />
        <div className="" style={{ padding: "16px 20px 30px 16px" }}>
          <h4 className="text-2xl font-bold">Syltherine</h4>
          <p className="text-base text-[#898989] font-medium mt-2">
            Stylish cafe chair
          </p>
          <div className="flex justify-between items-center mt-2">
            <h5 className="text-2xl">Rp 2.500.000</h5>
            <p className="text-[#B0B0B0] font-medium text-base">Rp 3.500.000</p>
          </div>
        </div>
        <div className="sec3_overlay absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] group-hover:backdrop:blur-sm divide-neutral-500 p-4 w-full h-full bg-black/50 duration-[350ms] pt-44">
          <Slide cascade className="items-center text-center text-white">
            <button className="bg-white text-[#B88E2F] py-3 px-14">
              Add to cart
            </button>
            <Fade className="" cascade={0.1}>
              <div className="flex flex-row items-center justify-center gap-2 mt-5">
                <button className="Share flex items-center gap-1">
                  <img src={share_icon} alt="" className="" />
                  <p className="">Share</p>
                </button>
                <Link to="/Single" className="Compare flex items-center gap-1">
                  <img src={compare_icon} alt="" className="" />
                  <p className="">Compare</p>
                </Link>
                <button className="Like flex items-center gap-1">
                  <img src={heart_svg} className="w-4 h-4" alt="" />
                  <p className="">Like</p>
                </button>
              </div>
            </Fade>
          </Slide>
        </div>
      </div>
    </div>
  ));
  return <div>Cards_component</div>;
};

export default Cards_component;
