import './About.css'
import * as BiIcons from "react-icons/bi"
import * as BsIcons from "react-icons/bs"
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
import * as ImIcons from "react-icons/im"
import * as SiIcons from "react-icons/si"



const About = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100"
      style={{ height: 'fit-content', background: '#e3dee6', padding: 20, }}>
      <h1 className="head-title">
        Why Choose NFTing
      </h1>
      <div className="row justify-content-center mt-10" style={{ margin: '2rem 1.1rem' }}>
        {/* Each column contains components with images, a radio button and a name of the collector. */}
        <div className="col text-center m-2 p-3 ">
          <BsIcons.BsFillHexagonFill className="create-icon" />
          <h3 className='news-text' style={{margin: '20px 20px',}}>The World Largest NFT Aggregator</h3>
          <p className="news-content">
            Get a complete overview of all NFTs on sales on all marketplaces
          </p>
        </div>
        <div className="col text-center m-2 p-3">
          <FaIcons.FaHeart className="create-icon" />
          <h3 className="news-text" style={{margin: '20px 20px',}}>Your Favourite NFTs</h3>
          <p className="news-content">
            Explore NFTing and find your next NFT gem through our user recommendation engine
          </p>
        </div>
        <div className=" col text-center m-2 p-3">
          <MdIcons.MdSecurity className="create-icon" />
          <h3 className="news-text" style={{margin: '20px 20px',}}>Security</h3>
          <p className="news-content">
            Decentralized and partitioned with security as our forever primary focus
          </p>
        </div>
        <div className=" col text-center m-2 p-3">
          <MdIcons.MdFilterListAlt className="create-icon" />
          <h3 className="news-text" style={{margin: '20px 20px',}}>Smartest In-depth Filters</h3>
          <p className="news-content">
            Use the smartest in-depth filter functionalities that help you find the NFTs you will like
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center m-2 p-3 ">
          <ImIcons.ImUserCheck className="create-icon" />
          <h3 className='news-text' style={{margin: '20px 20px',}}>User Friendly</h3>
          <p className="news-content">
            Browse and buy on the go with a mobile-friendly site in the language of your choice
          </p>
        </div>
        <div className="col text-center m-2 p-3">
          <BiIcons.BiStats className="create-icon" />
          <h3 className="news-text" style={{margin: '20px 20px',}}>Analyses for Success</h3>
          <p className="news-content">
            Learn more about creators' project performance before making a
            purchase and better understand each NFT's true value
          </p>
        </div>
        <div className=" col text-center m-2 p-3">
          <SiIcons.SiProtonvpn className="create-icon" />
          <h3 className="news-text" style={{margin: '20px 20px',}}>For Every NFT</h3>
          <p className="news-content">
            Enjoy a complete multichain ecosystem for everything NFT
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
