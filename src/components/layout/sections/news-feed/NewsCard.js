
import './NewsFeed.css'
import * as BiIcons from "react-icons/bi";
import nft from '@asset/images/nft.png'
import nftAll from '@asset/images/nftAll.jpeg'
import nftIntro from '@asset/images/nftIntro.jpeg'
import nftObject from '@asset/images/nftObject.png'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

const NewsCard = () => {
    return (
        <>
            <div style={{ marginBottom: 40, }}>
                <div className="section">
                    <div className="row align-item-center"
                        style={{ height: 64, padding: '12px 0px', position: 'relative', }}>
                        <div className="col"></div>
                        <div className="col-auto col"
                            style={{ borderRadius: 5, fontSize: 23, margin: '10px 10px', color: 'black', background: '#fdf9ff', }}>
                            <div className="dropdown">
                                <button className="news-btn btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BiIcons.BiSortAlt2 style={{marginRight: 4, fontSize: 25, marginBottom: 4,}} />
                                    <span className="newsfeed-text">Newest</span>
                                </button>
                                <ul className="newsfeed-option-box dropdown-menu" aria-labelledby="dropdownMenuButton1">


                                    <li>
                                        <button className="newsfeed-option-selector dropdown-item">
                                            <span className="newsfeed-text">Newest</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="newsfeed-option-selector dropdown-item">
                                            <span className="newsfeed-text">Oldest</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="newsfeed-option-selector dropdown-item">
                                            <span className="newsfeed-text">Length: Short to Long</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="newsfeed-option-selector dropdown-item">
                                            <span className="newsfeed-text">Length: Long to Short</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>




                        </div>
                    </div>
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
                    <div className="row"
                        style={{ marginTop: 10, }}>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsCard