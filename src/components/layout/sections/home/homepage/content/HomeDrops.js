import Carousel from "react-multi-carousel";
import axios from 'axios';
import { Link } from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import logo from "@asset/images/polygonlogo.png"
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { setNfts, showCategories } from "../../../../../../redux/actions/nftActions";
import { useEffect, } from 'react'
import { HomeOptData } from "./HomeOptData.js";
import * as BsIcons from 'react-icons/bs';
import * as FiIcons from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";

const HomeDrops = () => {

    // code for using json server to fetch local APIs
    // const [homeDropsData, setHomeDropsData] = useState([])

    // const [stretch, setStretch] = useState()

    // useEffect(() => {

    //     const getHomeDropsData = async () => {
    //         const homeDropsDataFromServer = await fetchHomeDropsData()
    //         setHomeDropsData(homeDropsDataFromServer)
    //     }

    //     getHomeDropsData()
    // }, []);

    // const fetchHomeDropsData = async () => {
    //     const res = await fetch('http://localhost:5000/homeDropsData')
    //     const data = await res.json()

    //     return data
    // }
    const nfts = useSelector((state) => state.allNfts.nfts);
    const categories = useSelector((state) => state.allCategory.categories);
    const dispatch = useDispatch();


    /* eslint-disable */
    useEffect(() => {
        axios.get(`https://api-dev.nfting.store/api/nft-items/`)
            .then(res => {
                dispatch(setNfts(res.data.items))
            }).catch((err) => {
                console.log("Err ", err);
            });

    }, [])
    /* eslint-disable */
    useEffect(() => {
        axios.get(`https://api-dev.nfting.store/api/nft-items/by-categories`)
            .then(res => {
                dispatch(showCategories(res.data))
            }).catch((err) => {
                console.log("Err ", err);
            });

    }, [])
    /* eslint-enable */
    console.log("categories: ", categories)
    // console.log("nfts: ", nfts)

    // console.log(nfts);


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024, },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            item: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div style={{ width: '100%', position: 'relative', boxSizing: 'border-box' }}>
            <div className="section">
                <div className="d-flex justify-content-between align-items-center"
                    style={{ width: '100%', height: 70, }}
                >
                    <h1 className="head-title">
                        Latest / Notable Drops
                    </h1>
                    <h2 className="head-option">View all</h2>
                </div>
                <hr style={{ height: '1px', }} />
            </div>
            <div className="multi-carousel">
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="react-multi-carousel-collapse"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                >
                    {nfts.map((data, index) => {
                        return (

                            <Card className="nft-card"
                                key={index}

                            >
                                <div className="nft-card-img position-relative">
                                    <Link to={`/nft/${data.id}`} >
                                        <div className="card-img-top" style={{ backgroundImage: `url(${data.preview_image_url})` }}>
                                        </div>
                                        <div className="overlay">
                                            <button type="button" className="btn btn-secondary">Buy Now</button>
                                        </div>
                                    </Link>
                                </div>
                                <CardBody className="p-0 mt-2">
                                    <CardTitle tag="h5">
                                        <Link to={`/nft/${data.id}`} style={{ textDecoration: 'none', color: "#000", fontFamily: 'nunito', fontWeight: 800 }}>
                                            {data.title}
                                        </Link>
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2"
                                        tag="h6"
                                    >
                                        <div style={{ textDecoration: 'none', color: "#000", fontFamily: 'nunito' }}>
                                            <div className="d-flex align-items-center"
                                                style={{ height: 50, width: '125px', marginTop: 20, }}>

                                                <div className='d-flex flex-row align-items-center'>
                                                    <div className='rounded-circle' style={{ height: 27, width: 27, borderRadius: '50%', background: '#def3fc' }}>

                                                    </div>
                                                    <a href={data.owner_url}
                                                        className=''
                                                        style={{
                                                            textOverflow: "ellipsis",
                                                            overflow: "hidden",
                                                        }}>
                                                            {/* {data.owner_address} */}
                                                        </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nft-item-price d-flex align-items-center" >
                                            <img src={logo} alt="" style={{ height: 16, width: 16, }} />
                                            <h5 className="price mb-0" style={{ fontWeight: 500, fontFamily: 'nunito', lineHeight: 2, marginLeft: 5, textAlign: 'right' }}>{data.sale.selling_price}</h5>
                                        </div>
                                        <div className="nft-item-price d-flex justify-content-between align-items-center" style={{ zIndex: 2, position: 'relative' }} >
                                            <div className="dropdown" >
                                                <button className="btn btn-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <BsIcons.BsThreeDots />
                                                </button>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Share</a></li>
                                                </ul>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <button type='button' className='btn-multiple-state btn-follow border-0 p-0 shadow-none btn btn-link'>
                                                    <FiIcons.FiHeart />
                                                </button>
                                            </div>
                                        </div>

                                    </CardSubtitle>
                                </CardBody>
                            </Card>

                        )
                    })}
                </Carousel>
            </div>
            <div className="section">
                <div className="categories">
                    <div className="categories-content">
                        {categories && categories.map((items, index) => {
                            return (
                                <div className="category" key={index}>
                                    {/* <Link to='/explore/:exploreId'> */}
                                    <img className="category-icon" src={items.icon_url} alt="" />
                                    {/* <i className="category-icon">{items.icon_url}</i> */}
                                    <h6 className="category-name">{items.name}</h6>
                                    {/* </Link> */}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDrops;
