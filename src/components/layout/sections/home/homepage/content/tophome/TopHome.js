import React from "react";
import image1 from "../../../../../../../asset/images/banner.png";

// import load from "@asset/images/image2.jpg";
// import world from "@asset/images/image3.jpg";

const TopHome = () => {
  return (

    <div className="top-container"
      style={{
        height: '450px', backgroundImage: `url(${image1})`,
        width: '100%', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <div className="carousel-container">
        <h1 className="text text-white mb-4">The up-and-coming NFT <br/> marketplace</h1>
        <p className="text-content text-white">Buy, sell and discover rare digital items</p>

        <div className="d-flex justify-content-between" style={{ height: 'fit-content', width: 350, }}>
          <button className="button-explore "
            style={{ height: 60, width: 150, borderRadius: '10px' }}>
            Explore
          </button>
          <button className="button-create"
            style={{ height: 60, width: 150, borderRadius: '10px', }}>
            Create
          </button>
        </div>
      </div>
    </div>

  );
};

export default TopHome;
