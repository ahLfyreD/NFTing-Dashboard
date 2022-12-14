import { Link } from 'react-router-dom';
import icon from "@asset/images/icon.svg";
import axios from 'axios'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { setNewsBlogs } from "../../../../../../redux/actions/newsActions";
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

const HomeNews = () => {
    

    const tempFetchNewsFuncd = useRef()
    const blogs = useSelector((state) => state.allNews.blogs);
    const dispatch = useDispatch();
    const fetchNewsd = async () => {
        const response = await axios.get("https://api-dev.nfting.store/api/news?page=1&limit=4").catch((err) => {
            console.log("Err", err);
        });
        dispatch(setNewsBlogs(response.data.items));

    };

    const fetchNewsFuncd = () => {
        fetchNewsd();
    }

    tempFetchNewsFuncd.current = fetchNewsFuncd

    useEffect(() => {
        tempFetchNewsFuncd.current()
    }, []);
    console.log("blogs: ", blogs)



    return (
        <div style={{ marginBottom: 40, }}>
            <div className="section">
                <div className="d-flex justify-content-between align-items-center"
                    style={{ width: '100%', height: 70, }}
                >
                    <h1 className="head-title">
                        Newsfeed & Blogs
                    </h1>
                    <Link to="/newsfeed" style={{textDecoration: 'none', color: 'black'}}><h2 className="head-option">View all</h2></Link>
                </div>
                <hr style={{ height: '1px', }} />
            </div>
            <div className="news-feed">
                <div className="row">
                    {blogs.map((data, index) => (
                        <div className="col-md-6 col-lg-4 col-xl-3 mb-4"
                            key={index}>
                            <Card className="card d-flex flex-col justify-content-around position-relative" style={{ height: 425, cursor: 'pointer', borderRadius: 15, }}>
                                <img
                                    className="news-img"
                                    alt=""
                                    src={data.cover_image_url} />
                                <CardBody>
                                    <CardTitle
                                        className="news-text mb-3"
                                        tag="h5">
                                        {data.title}
                                    </CardTitle>

                                    <CardText className="news-content">
                                        {data.description}
                                    </CardText>
                                    <div className="d-flex position-absolute"
                                        style={{ height: 50, width: '100', bottom: 2, }}>
                                        <div style={{marginRight: '16px', marginTop: 5}}>
                                            <img src={icon} alt="" style={{ height: 20, width: 20, }} />
                                        </div>
                                        <div className="">
                                            <span style={{ fontSize: 13, fontFamily: 'nunito', fontWeight: 500, }}>NFTing</span>
                                            <p style={{ fontSize: 10, fontFamily: 'nunito' }}>{data.created_at} {data.reading_time} min read</p>
                                        </div>
                                    </div>

                                </CardBody>
                            </Card>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeNews;
