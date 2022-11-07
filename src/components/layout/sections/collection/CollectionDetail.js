import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from "@asset/images/polygonlogo.png";
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './CollectionDetail.css';
import { useEffect } from 'react';
import axios from 'axios';
// import { useParams } from "react-router-dom";
import { setNfts } from "../../../../redux/actions/nftActions";
import { useDispatch, useSelector } from 'react-redux';


const CollectionDetail = () => {
    const nfts = useSelector((state) => state.allNfts.nfts);
    const dispatch = useDispatch();
     /* eslint-disable */
    useEffect(() => {
        axios.get(`https://api-dev.nfting.store/api/nft-items?page=1&limit=4`)
            .then(res => {
                dispatch(setNfts(res.data.items))
            }).catch((err) => {
                console.log("Err ", err);
            });

    }, [])
     /* eslint-enable */
    // const profile = useSelector((state) => state.profile);
    // const { name, owner_address, owner_url } = profile

    // const { collectionId } = useParams();
    // console.log(collectionId)
    // const dispatch = useDispatch();
    // console.log(profile)

    // const fetchProfileDetail = async () => {
    //     const response = await axios
    //         .get(`https://api-dev.nfting.store/api/nft-items/${collectionId}`)
    //         .catch((err) => {
    //             console.log("Err ", err);
    //         });

    //     dispatch(selectedProfiles(response.data.items));
    // };

    /* eslint-disable */
    // useEffect(() => {
    //     if (collectionId && collectionId !== "") fetchProfileDetail();
    //     // axios.get(`https://api-dev.nfting.store/api/nft-items/${collectionId}`)
    //     //     .then(res => {
    //     //         dispatch(selectedProfiles(res.data))
    //     //     }).catch((err) => {
    //     //         console.log("Err ", err);
    //     //     });
    // }, [collectionId]);
    // /* eslint-enable */
    return (
        <div className="profile">
            {/* {Object.keys(profile).length === 0 ? (
                <div className="section-title">...Loading</div>
            ) : ( */}
            <>

                <div>
                    <div className="jumbotron text-center position-relative" style={{ height: '230px', width: '100%' }}>
                        <div className="position-relative h-100 profile-cover-image-container">
                            <div className="profile-cover-image" style={{ background: '#def3fc', width: '100%', height: '100%' }}></div>
                        </div>
                        <div className="profile-owner-image-container" >
                            <div className="profile-owner-image position-absolute" style={{ background: '#def3fc', backgroundSize: 'cover', backgroundPosition: '50%', border: '2px solid #fff', height: 150, width: 150, borderRadius: '50%', bottom: -75, left: 10, }}>
                            </div>
                        </div>
                    </div>
                    <div className="nft-action-buttons d-flex justify-content-end align-items-center">
                        <button type="button" className="btn-action btn-follow me-4 shadow-none btn">Add to Watchlist</button>
                        <button type="button"
                            className="btn-share-icon d-flex justify-content-center
                                     align-items-center me-4 btn ">
                            <FiIcons.FiRefreshCw />
                        </button>
                    </div>
                    <div className="nft-header-details">
                        <div className="profile-owner-info">
                            <h2 className="name">Name</h2>
                        </div>
                        <div className="description">
                            <h5 className="mb-0">By <a href="">owner address</a></h5>
                        </div>
                        {/* <div className="blockchain-link">
                                <a href="">

                                </a>
                            </div> */}
                        <div></div>
                        <div className="stats row">
                            <div className="col-sm-6 col-md-auto">
                                Items
                                <span className="stat-value" style={{marginLeft: 5, fontWeight: 700,}}>47</span>
                            </div>
                            <div className="col-sm-6 col-md-auto">
                                Profile
                                <span className="stat-value" style={{marginLeft: 5, fontWeight: 700,}}>0</span>
                            </div>
                            <div className="col-sm-6 col-md-auto">
                                Floor Price
                                <span className="stat-value" style={{marginLeft: 5, fontWeight: 700,}}>0.00ETH</span>
                            </div>
                            <div className="col-sm-6 col-md-auto">
                                Volume
                                <span className="stat-value" style={{marginLeft: 5, fontWeight: 700,}}>0.00ETH</span>
                            </div>

                        </div>
                    </div>
                    <div className="nft-collections gx-0 row">
                        <div className="p-3" >
                            <div className="">
                                <div>
                                    <div className="d-flex align-items-center row">
                                        <div className="col-sm-6">
                                            <h2 className="section-title mb-0">Items</h2>
                                        </div>
                                        <div className="search-container col-sm-6">
                                            <div className="d-flex p-1 rounded rounded-3  border border-2">
                                                <input
                                                    className="form-input pl-1 bg-transparent "
                                                    type="search"
                                                    placeholder="Search by Name"
                                                />
                                                <div className="d-flex justify-content-center align-items-center rounded-r-md h-12 w-10">
                                                    <AiIcons.AiOutlineSearch className="search-icon" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-5">
                                            {nfts.map((data, index) => (
                                                <div className="col-md-6 col-lg-4 col-xl-3 mb-4"
                                                    key={index}>
                                                    <Card className="nft-card">
                                                        <div className="nft-card-img position-relative" style={{zIndex: 0,}}>
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
                                                                    <div className="d-flex align-items-center"
                                                                        style={{ height: 50, width: '125px', marginTop: 20, }}>

                                                                        <div className='d-flex flex-row align-items-center'>
                                                                            <div className='rounded-circle' style={{ height: 27, width: 27, borderRadius: '50%', background: '#def3fc' }}>

                                                                            </div>
                                                                            <a href={data.owner_url}
                                                                                className=''
                                                                                style={{
                                                                                    width: '',
                                                                                    textOverflow: "ellipsis",
                                                                                    overflow: "hidden",
                                                                                }}>
                                                                                {/* {data.owner_address} */}
                                                                            </a>
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
                            </div>
                        </div>
                    </div>
                </div>
            </>
            {/* )} */}

        </div>
    )
}

export default CollectionDetail