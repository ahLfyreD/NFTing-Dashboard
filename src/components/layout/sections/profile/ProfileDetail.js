// import "./ProfileDetail.css"
// import { useEffect } from 'react';
// import axios from 'axios';
// import * as BsIcons from 'react-icons/bs';
// import * as AiIcons from 'react-icons/ai'
// import { useParams } from "react-router-dom";
// import { selectedProfiles } from "../../../../redux/actions/nftActions";
// import { useDispatch, useSelector } from 'react-redux';


// const ProfileDetail = () => {
//     const profile = useSelector((state) => state.profile);
//     const { owner } = profile

//     const { profileId } = useParams();
//     console.log(profileId)
//     const dispatch = useDispatch();
//     console.log(profile)

//     const fetchProfileDetail = async () => {
//         const response = await axios
//             .get(`https://api-dev.nfting.store/api/nft-items/${profileId}`)
//             .catch((err) => {
//                 console.log("Err ", err);
//             });

//         dispatch(selectedProfiles(response.data.items));
//     };

//     /* eslint-disable */
//     useEffect(() => {
//         if (profileId && profileId !== "") fetchProfileDetail();
//         // axios.get(`https://api-dev.nfting.store/api/nft-items/${profileId}`)
//         //     .then(res => {
//         //         dispatch(selectedProfiles(res.data))
//         //     }).catch((err) => {
//         //         console.log("Err ", err);
//         //     });
//     }, [profileId]);
//     /* eslint-enable */

//     return (
//         <div className="profile">
//             {Object.keys(profile).length === 0 ? (
//                 <div className="section-title">...Loading</div>
//             ) : (
//                 <>

//                     <div>
//                         <div className="jumbotron text-center position-relative">
//                             <div className="position-relative h-100 profile-cover-image-container">
//                                 <div className="profile-cover-image" style={{ background: "#def3fc", width: '100%', height: '100%',  }}></div>
//                             </div>
//                             <div className="profile-owner-image-container" >
//                                 <div className="profile-owner-image position-absolute" style={{ background: "#def3fc", border: '2px solid #fff', height: 150, width: 150, borderRadius: '50%', bottom: -75, left: 10, }}>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="nft-action-buttons d-flex justify-content-end align-items-center">
//                             <button type="button" className="primary-button btn-follow me-4 shadow-none btn" style={{width: 120}}>Follow</button>
//                             <button type="button" className="btn-share-icon d-flex justify-content-center align-items0center me-4 btn">
//                                 <BsIcons.BsShareFill />
//                             </button>
//                         </div>
//                         <div className="nft-header-details">
//                             <div className="profile-owner-info">
//                                 <h2 className="name" style={{fontWeight: 900,}}>{owner.display_name}</h2>
//                             </div>
//                             <div className="mt-2 mb-3">
//                                 <h5 className="mb-0" style={{color: "#433895", fontWeight: 700,}}>@{owner.username}</h5>
//                             </div>
//                             <div className="nft-bio"></div>
//                             <div></div>
//                             <div className="stats row" style={{fontFamily: "nunito"}}>
//                                 <div className="col-sm-6 col-md-auto">
//                                     <button className="btn btn-transparent shadow-none p-0" type="button">
//                                         Followers
//                                         <span className="stat-value"></span>
//                                     </button>
//                                 </div>
//                                 <div className="col-sm-6 col-md-auto">
//                                     <button className="btn btn-transparent shadow-none p-0" type="button">
//                                         Following
//                                         <span className="stat-value"></span>
//                                     </button>
//                                 </div>
//                                 <div className="col-sm-6 col-md-auto">
//                                     <button className="btn btn-transparent shadow-none p-0" type="button">
//                                         Joined
//                                         <span className="stat-value"></span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="nft-collections gx-0 row">
//                             <div className="col-sm-12 p-3">
//                                 <ul className="nft-item-tabs nav nav-tabs mb-3" id="nav-tab" role="tablist">
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link active" id="nav-created-tab" data-bs-toggle="pill" data-bs-target="#nav-created" role="tab" aria-controls="nav-created" aria-selected="true">Created</a>
//                                     </li>
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link" id="nav-collected-tab" data-bs-toggle="pill" data-bs-target="#nav-collected" role="tab" aria-controls="nav-collected" aria-selected="false">
//                                             Collected
//                                             <span className="ms-2">{ }</span>
//                                         </a>
//                                     </li>
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link" id="nav-favorited-tab" data-bs-toggle="pill" data-bs-target="#nav-favorited" role="tab" aria-controls="nav-favorited" aria-selected="false">
//                                             Favorited
//                                             <span className="ms-2">{ }</span>
//                                         </a>
//                                     </li>
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link" id="nav-following-tab" data-bs-toggle="pill" data-bs-target="#nav-following" role="tab" aria-controls="nav-following" aria-selected="false">
//                                             Following
//                                             <span className="ms-2">{ }</span>
//                                         </a>
//                                     </li>
//                                     <li className="nav-item" role="presentation">
//                                         <a className="nav-link" id="nav-followers-tab" data-bs-toggle="pill" data-bs-target="#nav-followers" role="tab" aria-controls="nav-followers" aria-selected="false">
//                                             Followers
//                                             <span className="ms-2">{ }</span>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <div className="tab-content p-3" id="nav-tabContent">
//                                 <div className="tab-pane fade show active" id="nav-created" role="tabpanel" aria-labelledby="nav-created-tab">
//                                     <div>
//                                         <div className="d-flex align-items-center row">
//                                             <div className="col-sm-6">
//                                                 <h2 className="section-title mb-0">Created</h2>
//                                             </div>
//                                             <div className="search-container col-sm-6">
//                                                 <div className="d-flex p-1 rounded rounded-3  border border-2">
//                                                     <input
//                                                         className="form-input pl-1 bg-transparent "
//                                                         type="search"
//                                                         placeholder="Search by Name"
//                                                     />
//                                                     <div className="d-flex justify-content-center align-items-center rounded-r-md h-12 w-10">
//                                                         <AiIcons.AiOutlineSearch className="search-icon" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-sm 12">
                                                
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="tab-pane fade " id="nav-collected" role="tabpanel" aria-labelledby="nav-collected-tab">
//                                     <div>
//                                         <div className="d-flex align-items-center row">
//                                             <div className="col-sm-6">
//                                                 <h2 className="section-title mb-0">Collected</h2>
//                                             </div>
//                                             <div className="search-container col-sm-6">
//                                                 <div className="d-flex p-1 rounded rounded-3  border border-2">
//                                                     <input
//                                                         className="form-input pl-1 bg-transparent "
//                                                         type="search"
//                                                         placeholder="Search by Name"
//                                                     />
//                                                     <div className="d-flex justify-content-center align-items-center rounded-r-md h-12 w-10">
//                                                         <AiIcons.AiOutlineSearch className="search-icon" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-sm 12"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="tab-pane fade " id="nav-favorited" role="tabpanel" aria-labelledby="nav-favorited-tab">
//                                     <div>
//                                         <div className="d-flex align-items-center row">
//                                             <div className="col-sm-6">
//                                                 <h2 className="section-title mb-0">Favorited</h2>
//                                             </div>
//                                             <div className="search-container col-sm-6">
//                                                 <div className="d-flex p-1 rounded rounded-3  border border-2">
//                                                     <input
//                                                         className="form-input pl-1 bg-transparent "
//                                                         type="search"
//                                                         placeholder="Search by Name"
//                                                     />
//                                                     <div className="d-flex justify-content-center align-items-center rounded-r-md h-12 w-10">
//                                                         <AiIcons.AiOutlineSearch className="search-icon" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-sm 12"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="tab-pane fade " id="nav-following" role="tabpanel" aria-labelledby="nav-following-tab">
//                                     <div>
//                                         <div className="d-flex align-items-center row">
//                                             <div className="col-sm-6">
//                                                 <h2 className="section-title mb-0">Following</h2>
//                                             </div>
//                                             <div className="search-container col-sm-6">
//                                                 <div className="d-flex p-1 rounded rounded-3  border border-2">
//                                                     <input
//                                                         className="form-input pl-1 bg-transparent "
//                                                         type="search"
//                                                         placeholder="Search by Name"
//                                                     />
//                                                     <div className="d-flex justify-content-center align-items-center rounded-r-md h-12 w-10">
//                                                         <AiIcons.AiOutlineSearch className="search-icon" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-sm 12"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="tab-pane fade " id="nav-followers" role="tabpanel" aria-labelledby="nav-followers-tab">
//                                     <div>
//                                         <div className="d-flex align-items-center row">
//                                             <div className="col-sm-6">
//                                                 <h2 className="section-title mb-0">Followers</h2>
//                                             </div>
//                                             <div className="search-container col-sm-6">
//                                                 <div className="d-flex p-1 rounded rounded-3  border border-2">
//                                                     <input
//                                                         className="form-input pl-1 bg-transparent "
//                                                         type="search"
//                                                         placeholder="Search by Name"
//                                                     />
//                                                     <div className="d-flex justify-content-center align-items-center rounded-r-md h-12 w-10">
//                                                         <AiIcons.AiOutlineSearch className="search-icon" />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-sm 12"></div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}

//         </div>
//     )
// }

// export default ProfileDetail