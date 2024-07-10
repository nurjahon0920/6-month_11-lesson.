import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import compare_icon from "/compare_icon.svg";
import share_icon from "/share_icon.svg";
import yulduz from "/yulduz.png";
import heart_svg from "/like_icon.svg";
import { Fade, Slide } from "react-awesome-reveal";
import axios from "axios";

const Single = () => {
  const { id } = useParams();
  const [single, setSingle] = useState(null);
  // console.log(single);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setSingle(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const [data, setData] = useState([]);
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
          <h4 className="text-2xl font-bold">{link.h4}</h4>
          <p className="text-base text-[#898989] font-medium mt-2">{link.p1}</p>
          <div className="flex justify-between items-center mt-2">
            <h5 className="text-2xl">{link.h5}</h5>
            <p className="text-[#B0B0B0] font-medium text-base">{link.p2}</p>
          </div>
        </div>
        <div className="sec3_overlay absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] group-hover:backdrop:blur-sm divide-neutral-500 p-4 w-full h-[301px] bg-black/50 duration-[350ms] pt-44">
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
                <button to="/" className="Compare flex items-center gap-1">
                  <img src={compare_icon} alt="" className="" />
                  <p className="">Compare</p>
                </button>
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

  //
  //
  //

  const [productCount, setProductCount] = useState(0);
  const incrementProductCount = () => {
    setProductCount(productCount + 1);
  };
  const decrementProductCount = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };
  return (
    <div>
      <div className="single_top bg-[#F9F1E7]">
        <div className="max-w-[1241px] mx-auto flex py-8 text-base ">
          <Link to="/" className="text-base font-normal text-[#9F9F9F]">
            Home
          </Link>
          <p className="text-base font-semibold px-3">{">"}</p>
          <Link to="/Shop" className="font-normal text-[#9F9F9F] text-base">
            Shop
          </Link>
          <p className="text-base font-semibold px-3">{">"}</p>
          <Link
            to="/Single"
            className="font-medium text-base border-l-2 border-[#9f9f9f] pl-6 ml-2">
            Asgaard sofa
          </Link>
        </div>
      </div>
      <div className="single_main max-w-[1241px] mx-auto flex pt-8 gap-24">
        <div className="single_images flex gap-8">
          <div className="single_img_left flex flex-col gap-8">
            <img
              src={single?.img}
              alt={single?.h4}
              className="w-20 h-20 rounded-[10px] object-contain"
            />
            <img
              src={single?.img}
              alt={single?.h4}
              className="w-20 h-20 rounded-[10px] object-contain"
            />
            <img
              src={single?.img}
              alt={single?.h4}
              className="w-20 h-20 rounded-[10px] object-contain"
            />
            <img
              src={single?.img}
              alt={single?.h4}
              className="w-20 h-20 rounded-[10px] object-contain"
            />
          </div>
          <img
            src={single?.img}
            alt={single?.h4}
            className=" rounded-[10px] object-contain h-[450px]"
          />
        </div>
        <div className="single_content">
          <h4 className="text-[42px]">{single?.h4}</h4>
          <h5 className="text-2xl text-[#9f9f9f] mb-4">{single?.h5}</h5>
          <div className="flex items-center">
            <img src={yulduz} alt="" className="pr-2" />
            <p className="text-[#9f9f9f] font-normal text-[13px] pl-5 border-l-[1px]  h-[30px] border-solid border-[#D9D9D90]">
              5 Customer Review
            </p>
          </div>
          <p className="text-[14px] font-medium w-[424px] mt-3 mb-5">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="flex items-center">
            <div className="border-[1px] border-[#9f9f9f] border-solid flex gap-7 items-center py-4 rounded-[10px] px-3">
              <button className="" onClick={decrementProductCount}>
                -
              </button>
              <p className="">{productCount}</p>
              <button className="" onClick={incrementProductCount}>
                +
              </button>
            </div>
            <Link
              to={`/cart/${id}`}
              className="border-[1px] border-black border-solid py-4 px-12 rounded-[10px] mr-[10px] ml-[18px]">
              Add To Cart
            </Link>
            <button className="border-[1px] border-black border-solid py-4 px-12 rounded-[10px]">
              + Compare
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-solid border-[#D9D9D90]">
        <div className="top max-w-[1241px] mx-auto flex mt-12 mb-9 justify-evenly">
          <h3 className=" font-medium text-2xl">Description</h3>
          <h3 className="text-[#9F9F9F] font-normal text-2xl">
            Additional Information
          </h3>
          <h3 className="text-[#9F9F9F] font-normal text-2xl">Reviews [5]</h3>
        </div>
      </div>
      <div className="single_bottom text-center pt-[55px] border-t-2 border-solid border-[#D9D9D90] mt-[66px]">
        <h2 className="text-4xl font-medium">Related Products</h2>
        <div className="max-w-[1241px] mx-auto flex py-8 justify-between">
          {links}
        </div>
      </div>
    </div>
  );
};

export default Single;
