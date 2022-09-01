import { HomeNewsData } from "./HomeNewsData.js";
// import { Card } from "@components/card/Card";
import world from "@asset/images/image3.jpg";
import nft from '../../../../../../asset/images/nft.png'
import nftAll from '../../../../../../asset/images/nftAll.jpeg'
import nftIntro from '../../../../../../asset/images/nftIntro.jpeg'
import nftObject from '../../../../../../asset/images/nftObject.png'
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const HomeNews = () => {
    const featuredProducts = [
        "../../../../../asset/images/image3.jpg",
        "../../../../asset/images/image3.jpg",
        "../../../../../asset/images/image3.jpg",
    ];
    return (
        <div style={{marginBottom: 40,}}>
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
                    <div className="col-md-3">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNews;
