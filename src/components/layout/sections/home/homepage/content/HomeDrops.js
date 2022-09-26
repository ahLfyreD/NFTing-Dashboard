import Carousel from "react-multi-carousel";
import axios from 'axios';
import { Link } from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { setNfts } from "../../../../../../redux/actions/nftActions";
import { useEffect, useRef } from 'react'
import { HomeOptData } from "./HomeOptData.js";
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
    const tempFetchNftsFunc = useRef()
    const nfts = useSelector((state) => state.allNfts.nfts);
    const dispatch = useDispatch();
    const fetchNfts = async () => {
        const response = await axios.get("https://api-dev.nfting.store/api/nft-items/").catch((err) => {
            console.log("Err ", err);
        });
        dispatch(setNfts(response.data.items));

    };

    const fetchNftsFunc = () => {
        fetchNfts();
    }

    tempFetchNftsFunc.current = fetchNftsFunc

    useEffect(() => {
        tempFetchNftsFunc.current()
    }, []);
    console.log("nfts: ", nfts)

    console.log(nfts);


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
                                    <img
                                        alt='title'
                                        src={data.preview_image_url}
                                        style={{
                                            width: '100%',
                                            height: 200,
                                            textAlign: 'center',
                                            borderRadius: '20px'
                                        }}
                                    />
                                    <CardBody className="p-0 mt-2">
                                        <CardTitle tag="h5">
                                            <Link to={`/nft/${data.id}`}>
                                                {data.title}
                                            </Link>
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2"
                                            tag="h6"
                                        >
                                            <div className="d-flex align-items-center"
                                                style={{ height: 50, width: '100%', marginTop: 20, }}>
                                                <div style={{ marginRight: '16px', }}>
                                                    <img src={data.owner.profile_picture} alt="" style={{ height: 25, width: 25, borderRadius: '50%' }} />
                                                </div>
                                                <div className="">
                                                    <p style={{ fontSize: 15, fontFamily: 'nunito' }}>{data.owner.display_name}</p>
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
                        {HomeOptData.map((item, index) => {
                            return (
                                <div className="category" key={index}>
                                    <i className="category-icon">{item.icons}</i>
                                    <h6 className="category-name">{item.name}</h6>

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
