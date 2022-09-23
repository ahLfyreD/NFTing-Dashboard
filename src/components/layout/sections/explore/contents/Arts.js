import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { useState, useEffect } from "react";
// import { DropsData } from "./DropsData.js";

const Arts = () => {
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

    // const breakPoints = [
    //   { width: 1, itemsToShow: 1 },
    //   { width: 500, itemsToShow: 3 },
    //   { width: 768, itemsToShow: 4 },
    //   { width: 1020, itemsToShow: 5 },
    // ];
    return (
      <>
              <div className="section">
                  <div className="d-flex justify-content-between align-items-center"
                      style={{ width: '100%', height: 70, }}
                  >
                      <h1 className="head-title">
                          Arts
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
              
          </>
    );
  };
  
  export default Arts;
  