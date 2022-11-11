import "./Explore.css"
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from "@asset/images/polygonlogo.png";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { useEffect } from 'react';
import axios from 'axios';
// import { useParams } from "react-router-dom";
import { setNfts } from "../../../../redux/actions/nftActions";
import { useDispatch, useSelector } from 'react-redux';


const ExploreId = () => {
    const nfts = useSelector((state) => state.allNfts.nfts);
    const dispatch = useDispatch();
    /* eslint-disable */
    useEffect(() => {
        axios.get(`https://api-dev.nfting.store/api/nft-items?page=1&limit=8`)
            .then(res => {
                dispatch(setNfts(res.data.items))
            }).catch((err) => {
                console.log("Err ", err);
            });

    }, [])
    /* eslint-enable */

    return (
        <div className="home">
            <div className="section">
                <div className="d-flex aling-items-baseline">
                    <h2 className="section-title mb-0">NAME</h2>
                </div>
                <div className="filter-group">
                    <div className="row d-flex justify-content-between filter-actions">
                        <div className="col-6">
                            <button className="btn btn-secondary filter-btn">Filter</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-secondary filter-btn">Recently Added</button>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    {nfts.map((data, index) => (
                        <div className="col-md-6 col-lg-4 col-xl-3 mb-4"
                            key={index}>
                            <Card className="nft-card">
                                <div className="nft-card-img position-relative" style={{ zIndex: 0, }}>
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
                                        <Link className='data-title' to={`/nft/${data.id}`} style={{ fontFamily: 'nunito', fontWeight: 800 }}>
                                            {data.title}
                                        </Link>
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2"
                                        tag="h6"
                                    >
                                         <div style={{ textDecoration: 'none', color: "#000", fontFamily: 'nunito' }}>
                                            <div className="d-flex align-items-center w-100"
                                                style={{ marginTop: 20, }}>

                                                <div className='d-flex flew-row align-items-center'>
                                                    <div className='rounded-circle' style={{
                                                        height: 27, width: 27, borderRadius: '50%', backgroundImage: `url(${data.owner.profile_picture})`,
                                                        backgroundSize: 'cover'
                                                    }}>

                                                    </div>
                                                    <div style={{
                                                                marginLeft: 10,

                                                            }}>
                                                        <Link to={`/profile/${data.owner.code}`}
                                                            className='profile-title'                                                            
                                                        >
                                                            {data.owner.display_name}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nft-item-price d-flex align-items-center" >
                                            <img src={logo} alt="" style={{ height: 16, width: 16, }} />
                                            <h5 className="price mb-0" style={{ fontWeight: 500, fontFamily: 'nunito', lineHeight: 2, marginLeft: 5, textAlign: 'right' }}>{data.sale.selling_price}</h5>
                                        </div>
                                        <div className="nft-item-price d-flex justify-content-between align-items-center" style={{ zIndex: 0, position: 'relative' }} >
                                            <div className="dropdown" >
                                                <button className="btn btn-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <BsIcons.BsThreeDots />
                                                </button>
                                                {/* eslint-disable */}
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item">Share</a></li>
                                                </ul>
                                                {/* eslint-enable */}
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

                        </div>

                    ))}


                </div>

            </div>



        </div>

    );
}

export default ExploreId