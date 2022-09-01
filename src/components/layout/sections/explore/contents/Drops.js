import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { DropsData } from "./DropsData.js";

import * as AiIcons from "react-icons/ai"

const Drops = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1020, itemsToShow: 5 },
  ];
  return (
    <>
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
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 1064,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 30
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={2}
                    swipeable
                >
                    {DropsData.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                style={{
                                    width: '18rem',
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
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {item.nftName}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {item.collectorName}
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

export default Drops;
