import { useEffect, useRef } from 'react';
import axios from 'axios';
import "./NftDetail.css"
// import * as IoIcons from "react-icons/io"
import * as BsIcons from "react-icons/bs"
import * as FiIcons from "react-icons/fi"
import { selectedNfts } from "../../../../redux/actions/nftActions";
import { useParams } from 'react-router-dom';
// import {Card, CardBody} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';



const NftDetail = () => {
  const tempFetchNftDetailFunc = useRef();
  const nft = useSelector((state) => state.nft);
  console.log(nft)
  const { title, media_url, owner, collection, token_link, blockchain, token_id, contract_type, royalties } = nft
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

  const fetchNftDetailFunc = () => {
    if (nftId && nftId !== "") fetchNftDetail();
  }

  tempFetchNftDetailFunc.current = fetchNftDetailFunc

  useEffect(() => {
    tempFetchNftDetailFunc.current()
  }, [nftId]);
  return (

    <div className='nft-view position-relative ' style={{ height: '100%', width: '100%' }}>
      {Object.keys(nft).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <div className='section' style={{ padding: '0 100px' }}>
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
                        <p className='nft-owner-label mb-0'>OWNER</p>
                        
                        <span className='nft-item-owner d-flex flex-row align-items-center'>
                          <div className='nft-owner-img rounded-circle'>
                            <img src={owner.profile_picture} alt="" style={{ height: 25, width: 25, borderRadius: '50%' }} />
                          </div>
                          <span className='nft-item-owner-name'>{owner.display_name}</span>
                        </span>
                      </div>
                      <div className="col-sm-6">
                        <p className="nft-collection-label mb-0">COLLECTION</p>
                        <span className='nft-item-collection d-flex flex-row align-items-center'>
                        
                          <div className='nft-collection-img rounded-circle'>
                            <img src={collection.logo_url} alt="" style={{ height: 25, width: 25, borderRadius: '50%' }} />
                          </div>
                          <p className='nft-item-collection-name mb-0'>{collection.name}</p>
                        </span>
                        
                      </div>
                    </div>
                    <div className="mft-item-view-and-favourites row"></div>
                  </div>

                </div>
              </div>
            </div>
            {/* <Card className="card-bids">
              <CardBody>
                <ul className="nft-item-tabs nav nav-tabs">
                  <li className='nav-item'>
                    <a className="active nav-link">Bids</a>
                  </li>
                  <li className="nav-item ms-auto">
                    <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#toggler" aria-expanded="false" aria-controls="collapseExample">
                      <IoIcons.IoIosArrowDown className='drop-icon' style={{ color: '#433895', fontWeight: 600, }} />
                    </button>
                  </li>
                </ul>
                <div id='toggler' className='collapse'>
                  <div className="tab-content empty-data">
                    <div className="tab-pane active">
                      <p className="empty-data">No bids available yet.</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card> */}
            {/* <div style={{ border: '1px solid #e3dee6', borderRadius: 10, padding: 10, width: '100%' }}>
              <div className='d-flex justify-content-between align-items-center'>
                <h3 style={{ fontFamily: 'nunito', fontSize: 23, color: '#433895', fontWeight: 600}}>Offers</h3>
                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  <IoIcons.IoIosArrowDown className='drop-icon' style={{color: '#433895', fontWeight: 600,}}/>
                </button>
              </div>
              <div className="collapse" id="collapseExample">
                <div className="card card-body border-t" style={{fontFamily: 'nunito', borderTop: '1px solid #e3dee6', borderRadius: '0px'}}>
                  No offers available yet
                </div>
              </div>
            </div> */}
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
              <div class="tab-pane fade" id="nav-metadata" role="tabpanel" aria-labelledby="nav-metadata-tab">
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
              <div class="tab-pane fade" id="nav-activity" role="tabpanel" aria-labelledby="nav-activity-tab">...</div>
            </div>
          </div>
          <div className='other-container'>

          </div>

        </div>
      )}
    </div>
  )
}

export default NftDetail
