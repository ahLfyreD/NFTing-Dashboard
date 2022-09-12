import "./HomeCreate.css";
// import Button from "@components/toggleBtn/Button";
import * as IoIcons from "react-icons/io"
import * as BsIcons from "react-icons/bs"
import * as MdIcons from "react-icons/md"


const HomeCreate = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100"
      style={{ height: 'fit-content', background: '#e3dee6', padding: 20, }}>
      <h1 className="head-title">
        Get NFTing Starter Pack
      </h1>
      <div className="row justify-content-center mt-10" style={{ margin: '2rem 1.1rem' }}>
        {/* Each column contains components with images, a radio button and a name of the collector. */}
        <div className="col text-center m-2 p-3 ">
          <IoIcons.IoMdWallet className="create-icon" />
          <h3 className='news-text'>Setup Your Wallet</h3>
          <p className="news-content">
            Once you've set up the wallet of your choice, connect it to NFTing
            by clicking the wallet icon in the top right corner of the website.
          </p>
        </div>
        <div className="col text-center m-2 p-3">
          <MdIcons.MdCollectionsBookmark className="create-icon" />
          <h3 className="news-text">Create your collection</h3>
          <p className="news-content">
            Click my collection and setup your collection. Add social links, a
            description, social & banner images, and set a secondary sales fees.
          </p>
        </div>
        <div className=" col text-center m-2 p-3">
          <MdIcons.MdLibraryAdd className="create-icon" />
          <h3 className="news-text">Add your NFTs</h3>
          <p className="news-content">
            Upload your works(image, video, audio or 3D art), add a title and
            description, and customize your NFTs with properties with
            properties, stats and unlockable contents.
          </p>
        </div>
        <div className=" col text-center m-2 p-3">
          <BsIcons.BsFillTagsFill className="create-icon" />
          <h3 className="news-text">List them for sale</h3>
          <p className="news-content">
            Choose between auctions, fixed-priced listing and declining price
            listing. You choose how you want to sell your NFTingand we help you
            sell them.
          </p>
        </div>
      </div>

      <button className="button-start"
        style={{ height: 60, width: 150, borderRadius: '10px', }}>
        Start Now
      </button>
    </div>
  );
};

export default HomeCreate;
