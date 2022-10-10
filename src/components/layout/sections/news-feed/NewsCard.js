import axios from 'axios';
import './NewsFeed.css';
import icon from "@asset/images/icon.svg";
import * as BiIcons from "react-icons/bi";
import { setNewsBlogs } from "../../../../redux/actions/newsActions";
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


const NewsCard = () => {
    const [option, setOption] = useState('newest');

    
    
    const selectedOption = [
        {
            id: 1,
            name: 'Newest',
            code: 'newest'
        },
        {
            id: 2,
            name: 'Oldest',
            code: 'oldest'
        },
        {
            id: 3,
            name: 'Length: Short to Long',
            code: 'short'
        },
        {
            id: 4,
            name: 'Length: Long to Short',
            code: 'long'
        }
    ]
    
    const blogs = useSelector((state) => state.allNews.blogs);
    const dispatch = useDispatch();

/* eslint-disable */
    useEffect(() => {
        axios.get(`https://api-dev.nfting.store/api/news?page=1&limit=10&sort=${option}`)
        .then(res => {
            dispatch(setNewsBlogs(res.data.items))
        }).catch((err) => {
            console.log("Err ", err);
        });

    }, [dispatch, option])
/* eslint-enable */


    return (
        <>
            <div style={{ marginBottom: 40, }}>
                <div className="section">
                    <div className="row align-item-center"
                        style={{ height: 64, padding: '12px 0px', position: 'relative', }}>
                        <div className="col"></div>
                        <div className="col-auto col"
                            style={{ borderRadius: 5, fontSize: 23, margin: '10px 10px', color: 'black', }}>
                            <div className="dropdown">
                                <button className="news-btn btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BiIcons.BiSortAlt2 style={{ marginRight: 4, fontSize: 25, marginBottom: 4, }} />
                                    <span className="newsfeed-text">{selectedOption.find(element => element.code === option).name}</span>
                                </button>
                                <ul className="newsfeed-option-box dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    {selectedOption.map((data, index) => {
                                        return (
                                            <li key={index}>
                                                <button className="newsfeed-option-selector dropdown-item"
                                                    onClick={() =>
                                                        setOption(data.code)                                                       
                                                    }>
                                                    <span className="newsfeed-text">{data.name}</span>
                                                </button>
                                            </li>
                                        )
                                    })} 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-feed">
                    <div className="row">
                        {blogs.map((data, index) => {
                            return (
                                <div className="col-md-3" style={{ marginBottom: 30, }} key={index}>
                                    <Card className="card" style={{ height: 450, cursor: 'pointer' }} >
                                        <img
                                            className="news-img"
                                            alt='title'
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
                                                <div style={{ marginRight: '16px', marginTop: 5 }}>
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
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsCard