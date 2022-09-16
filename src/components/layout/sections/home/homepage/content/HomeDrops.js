import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
// import load from "../../../../../../asset/images/image2.jpg";
// // import { Card } from "@components/card/Card";
import { useState, useEffect } from 'react'
// import { HomeDropsData } from "./HomeDropsData.js";
import { HomeOptData } from "./HomeOptData.js";

const HomeDrops = () => {
    const [homeDropsData, setHomeDropsData] = useState([])

    useEffect(() => {

        const getHomeDropsData = async () => {
            const homeDropsDataFromServer = await fetchHomeDropsData()
            setHomeDropsData(homeDropsDataFromServer)
        }

        getHomeDropsData()
    }, []);

    const fetchHomeDropsData = async () => {
        const res = await fetch('http://localhost:5000/homeDropsData')
        const data = await res.json()

        return data
    }
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
        <div style={{ width: '100%', position: 'relative', }}>
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
                    className="p-5"
                    containerClass="container-with-dots"
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
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                >
                    {homeDropsData.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                style={{
                                    width: '15rem',
                                    padding: 20,

                                }}
                            >
                                <img
                                    alt=''
                                    src={item.nft}
                                    style={{
                                        width: '100%',
                                        height: 200,
                                        textAlign: 'center'
                                    }}
                                />
                                <CardBody className="p-0 mt-2">
                                    <CardTitle tag="h5">
                                        {item.nftName}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2"
                                        tag="h6"
                                    >
                                        <div className="d-flex align-items-center"
                                            style={{ height: 50, width: '100%', }}>
                                            <div style={{ marginRight: '16px', }}>
                                                <img src={item.nft} alt="" style={{ height: 25, width: 25, borderRadius: '50%' }} />
                                            </div>
                                            <div className="">                            
                                                <p style={{ fontSize: 15, fontFamily: 'nunito' }}>{item.collectorName}</p>
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
