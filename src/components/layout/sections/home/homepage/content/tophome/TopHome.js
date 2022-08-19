import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import image1 from "../../../../../../../asset/images/banner.png";
import { Card } from "../../../../../../card/Card";
import Button from "@components/toggleBtn/Button";
// import load from "@asset/images/image2.jpg";
// import world from "@asset/images/image3.jpg";

const TopHome = () => {
  return (
    <>
      <Carousel>
        <Card
          className="flex flex-column w-full  rounded-xl font-medium bg-cover
                      justify-center p-5"
          height="425px"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div>
            <h1 className="text-5xl font-nunito font-bold text-white">
              The up-and-coming NFT
            </h1>
            <h1 className="text-5xl font-nunito font-bold text-white">
              marketplace
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-nunito font-md my-5 text-white">
              Buy, Sell and discover rare digital items
            </h1>
          </div>
          <div className="flex">
            <Button className="mr-10 text-white bg-yellow h-14 w-[150px] rounded-xl">
              Explore
            </Button>
            <Button className=" text-white border-4 border-white h-14 w-[150px] rounded-xl hover:text-black  hover:bg-white">
              Create
            </Button>
          </div>
        </Card>
      </Carousel>
    </>
  );
};

export default TopHome;
