import { useEffect } from 'react';
import axios from 'axios';
import "./NftDetail.css"
import * as BsIcons from "react-icons/bs"
import * as FiIcons from "react-icons/fi"
import * as AiIcons from "react-icons/ai"
import logo from "@asset/images/polygonlogo.png"
import { selectedNfts } from "../../../../redux/actions/nftActions";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
// import {Card, CardBody} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody } from 'reactstrap';



const NftDetail = () => {

  const nft = useSelector((state) => state.nft);
  const { title, media_url, owner, id,
    collection, token_link, blockchain,
    token_id, contract_type, royalties,
    favorites_count, sale } = nft
  const { nftId } = useParams();
  console.log(nftId)
  const dispatch = useDispatch();
  console.log(nft)

  const fetchNftDetail = async () => {
    const response = await axios
      .get(`https://api-dev.nfting.store/api/nft-items/${nftId}`)
      .catch((err) => {
        console.log("Err ", err);
      });

    dispatch(selectedNfts(response.data));
  };

  /* eslint-disable */
  useEffect(() => {
    if (nftId && nftId !== "") fetchNftDetail();
  }, [nftId]);
  /* eslint-enable */


  return (

    <div className='nft-view position-relative ' style={{ height: '100%', width: '100%' }}>
      {Object.keys(nft).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div className='section' style={{ padding: '0 100px', fontFamily: 'nunito' }}>
            <div className='g-lg-4 g-md-1 row' style={{ marginBottom: 20, }}>
              <div className="col-md-6 col-xxx-5" style={{ borderRadius: 10, }}>
                <div className='nft-image-lg-container d-flex flex-column' style={{ border: '1px solid #e3dee6' }}>
                  <div className='nft-image-lg' style={{ backgroundImage: `url(${media_url})`, }}></div>
                  <div className="d-flex justify-content-between nft-image-header">
                    <div className="d-flex align-items-center">
                      <div id="available">
                        <a href={token_link}><img src={blockchain.icon_bw_url} alt="" /></a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <button type='button' className='btn-multiple-state btn-follow border-0 p-0 shadow-none btn btn-link'>
                        <FiIcons.FiHeart />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
              <div className="pe-lg-0 col-md-6 col-xxx-7" style={{ borderRadius: 10, }}>
                <div className="d-flex flex-column justify-content-between h-100">
                  <div className="p-3">
                    <div className='d-flex justify-content-between align-items-center nft-item-name'>
                      <h1 style={{ fontFamily: 'nunito', fontWeight: 900, }}>{title}</h1>
                      <BsIcons.BsShareFill />
                    </div>
                    <div className="g-lg-3 g-md-1 row">
                      <div className="nft-owner col-sm-6">
                        <p className='nft-owner-label mb-3'>OWNER</p>

                        <Link to={`/profile/${id}`} className='nft-item-owner d-flex flex-row align-items-center'>
                          <div className='nft-owner-img rounded-circle'>
                            <img src={owner.profile_picture} alt="" style={{ height: 27, width: 27, borderRadius: '50%' }} />
                          </div>
                          <span className='nft-item-owner-name'>{owner.display_name}</span>
                        </Link>
                      </div>
                      <div className="col-sm-6">
                        <p className="nft-collection-label mb-3">COLLECTION</p>
                        <span className='nft-item-collection d-flex flex-row align-items-center'>

                          <div className='nft-collection-img rounded-circle'>
                            <img src={collection.logo_url} alt="" style={{ height: 27, width: 27, borderRadius: '50%' }} />
                          </div>
                          <p className='nft-item-collection-name mb-0'>{collection.name}</p>
                        </span>

                      </div>
                    </div>
                    <div className="row" style={{ padding: '5px 0px', marginTop: 7 }}>
                      <div className="d-flex align-items-center col">
                        <div className="d-flex align-items center">
                          <AiIcons.AiOutlineEye style={{ width: 26, height: 26, marginRight: 9, }} />
                          <p className='mb-0 label'>
                            <span style={{ fontWeight: 800 }}>{favorites_count}</span>
                            views
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                  <Card className="nft-price-container mx-3">
                    <CardBody>
                      <h5 className="nft-price-header">PRICE</h5>
                      <div className="nft-item-price d-flex align-items-center" >
                        <img src={logo} alt="" style={{ height: 26, width: 26, }} />
                        <h2 className="price mb-0" style={{ fontWeight: 900, lineHeight: 2, marginLeft: 20, textAlign: 'right' }}>{sale.selling_price}</h2>
                      </div>
                      <button type='button' className="btn-multiple-state nft-card-btn-action d-block w-100 btn-shadow custom-button btn-sm">
                        Buy Now
                      </button>
                    </CardBody>
                  </Card>


                </div>
              </div>

            </div>
            {/* eslint-disable */}
            <ul className="nft-item-tabs nav nav-tabs mb-3" id="nav-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="nav-description-tab" data-bs-toggle="pill" data-bs-target="#nav-description" role="tab" aria-controls="nav-description" aria-selected="true">NFT Description</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="nav-metadata-tab" data-bs-toggle="pill" data-bs-target="#nav-metadata" role="tab" aria-controls="nav-metadata" aria-selected="false">Metadata</a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="nav-activity-tab" data-bs-toggle="pill" data-bs-target="#nav-activity" role="tab" aria-controls="nav-activity" aria-selected="false">Activity History</a>
              </li>
            </ul>
            {/* eslint-enable */}
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="nft-tab-pane">
                      <div className="section">
                        <p className="nft-tab-title">Properties</p>
                        <p className='description' style={{ fontFamily: 'nunito' }}>No description available.</p>
                      </div>
                      <div className="section">

                      </div>
                      <div className="section">
                        <p className="nft-tab-title">Details</p>
                        <div className="row">
                          <div className="details-title col-6 col-sm-6 col-md-3">
                            Contract Address
                          </div>
                          <div className='details-content col'>
                            <a href={collection.contract_address_url}>{collection.collection_address}</a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="details-title col-6 col-sm-6 col-md-3">
                            Token ID
                          </div>
                          <div className='details-content col'>
                            {token_id}
                          </div>
                        </div>
                        <div className="row">
                          <div className="details-title col-6 col-sm-6 col-md-3">
                            Token Standard
                          </div>
                          <div className='details-content col'>
                            {contract_type}
                          </div>
                        </div>
                        <div className="row">
                          <div className="details-title col-6 col-sm-6 col-md-3">
                            Blockchain
                          </div>
                          <div className='details-content col'>
                            {blockchain.label}
                          </div>
                        </div>
                        <div className="row">
                          <div className="details-title col-6 col-sm-6 col-md-3">
                            Royalties
                          </div>
                          <div className='details-content col'>
                            {royalties}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-metadata" role="tabpanel" aria-labelledby="nav-metadata-tab">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="nft-tab-pane">
                      <div className="section">
                        <p className="nft-tab-title">Properties</p>
                        <p>No properties available.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-activity" role="tabpanel" aria-labelledby="nav-activity-tab">...</div>
            </div>
          </div>
          <div className='others-wrapper' style={{ backgroundColor: '#f6f6f6' }}>
            <div className="other-container" style={{ width: "100%", height: "100%", padding: "1.2rem", margin: "0 auto" }}>
              <div className="section">
                <div className="d-flex align-items-baseline justify-content-between">
                  <h2 className='section-title mb-0'>Others in collection</h2>
                  <Link to={"/"} className='link-view-all' style={{ textDecoration: 'none', color: '#000', fontFamily: 'nunito', fontSize: 20 }}>View all</Link>
                </div>
                <hr style={{ height: '1px' }} />



              </div>
            </div>


          </div>

        </div>
      )}
    </div>
  )
}

export default NftDetail
