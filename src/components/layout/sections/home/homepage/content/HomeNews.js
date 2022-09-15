// import { HomeNewsData } from "./HomeNewsData.js";
// import { Card } from "@components/card/Card";
// import world from "@asset/images/image3.jpg";
// import nft from '../../../../../../asset/images/nft.png'
// import nftAll from '../../../../../../asset/images/nftAll.jpeg'
// import nftIntro from '../../../../../../asset/images/nftIntro.jpeg'
// import nftObject from '../../../../../../asset/images/nftObject.png'
import icon from "@asset/images/icon.svg";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { useEffect, useState } from 'react'

const HomeNews = () => {
    // https://api-dev.nfting.store/api/news
    const [newsData, setNewsData] = useState([])

    useEffect(() => {

        const getNewsData = async () => {
            const newsDataFromServer = await fetchNewsData()
            setNewsData(newsDataFromServer)
        }

        getNewsData()
    }, []);

    const fetchNewsData = async () => {
        const res = await fetch('http://localhost:5000/newsData')
        const data = await res.json()

        return data
    }



    return (
        <div style={{ marginBottom: 40, }}>
            <div className="section">
                <div className="d-flex justify-content-between align-items-center"
                    style={{ width: '100%', height: 70, }}
                >
                    <h1 className="head-title">
                        Newsfeed & Blogs
                    </h1>
                    <h2 className="head-option">View all</h2>
                </div>
                <hr style={{ height: '1px', }} />
            </div>
            <div className="news-feed">
                <div className="row">
                    {newsData.map((items, index) => (
                        <div className="col-md-3"
                            key={index}>
                            <Card className="card d-flex flex-col justify-content-around position-relative" style={{ height: 400, cursor: 'pointer' }}>
                                <img
                                    className="news-img"
                                    alt=""
                                    src={items.cover_image_url} />
                                <CardBody>
                                    <CardTitle
                                        className="news-text mb-3"
                                        tag="h5">
                                        {items.title}
                                    </CardTitle>

                                    <CardText className="news-content">
                                        {items.description}
                                    </CardText>
                                    <div className="d-flex position-absolute"
                                        style={{ height: 50, width: '100', bottom: 2, }}>
                                        <div style={{marginRight: '16px', marginTop: 5}}>
                                            <img src={icon} alt="" style={{ height: 20, width: 20, }} />
                                        </div>
                                        <div className="">
                                            <span style={{ fontSize: 13, fontFamily: 'nunito', fontWeight: 500, }}>NFTing</span>
                                            <p style={{ fontSize: 10, fontFamily: 'nunito' }}>{items.created_at} {items.reading_time} min read</p>
                                        </div>
                                    </div>

                                </CardBody>
                            </Card>
                        </div>

                    ))}
                    {/* <div className="col-md-3">
                        <Card className="card" style={{ height: 400, cursor: 'pointer' }}>
                            <img
                                className="news-img"
                                alt=""
                                src={nft} />
                            <CardBody>
                                <CardTitle
                                    className="news-text mb-3"
                                    tag="h5">
                                    r/nfting - r/nfting Lounge
                                </CardTitle>

                                <CardText className="news-content">
                                    1 vote and 0 comments so far on Reddit
                                </CardText>

                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className="card" style={{ height: 400, cursor: 'pointer' }}>
                            <img
                                className="news-img"
                                alt="Sample"
                                src={nftAll}
                            />
                            <CardBody>
                                <CardTitle
                                    className="news-text mb-3"
                                    tag="h5">
                                    Welcome to NFTing Store
                                </CardTitle>

                                <CardText className="news-content">
                                    A fresh and exciting project is about to launch that aims to
                                    solve the shortcomings of current NFT marketplaces — having to pay
                                    expensive…
                                </CardText>

                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className="card" style={{ height: 400, cursor: 'pointer' }}>
                            <img
                                className="news-img"
                                alt=""
                                src={nftIntro}
                            />
                            <CardBody>
                                <CardTitle
                                    className="news-text mb-3"
                                    tag="h5">
                                    NFTing Start Prelisting for Artists and Projects
                                </CardTitle>

                                <CardText className="news-content">
                                    NFT artists and/or creators of all experience levels,
                                    sign up for our prelisting today without the added cost and risks!
                                </CardText>

                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card className="card" style={{ height: 400, cursor: 'pointer' }}>
                            <img
                                className="news-img"
                                alt=""
                                src={nftObject}
                            />
                            <CardBody>
                                <CardTitle
                                    className="news-text mb-3"
                                    tag="h5">
                                    More Than Just a Marketplace… An Entire Ecosystem
                                </CardTitle>

                                <CardText className="news-content">
                                    After handling several successful projects in the blockchain and
                                    NFT spaces, Kerel Verwaerde, the CEO & Founder, realized that the most…
                                </CardText>

                            </CardBody>
                        </Card>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default HomeNews;
