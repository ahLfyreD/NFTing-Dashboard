// import Carousel from "react-multi-carousel";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import logo from "@asset/images/polygonlogo.png";
// import { showArtCategories } from "../../../../../redux/actions/nftActions";
// import "react-multi-carousel/lib/styles.css";
// import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import * as BsIcons from 'react-icons/bs';
// import * as FiIcons from 'react-icons/fi';
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";


// const Collectibles = () => {
//     const artCategories = useSelector((state) => state.allArtCategories.artCategories);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         axios.get(`https://api-dev.nfting.store/api/nft-items?page=1&limit=10&category_id=2`)
//             .then(res => {
//                 dispatch(showArtCategories(res.data.items))
//             }).catch((err) => {
//                 console.log("Err ", err);
//             });

//     }, [])
//     /* eslint-enable */

    

//     const responsive = {
//         desktop: {
//             breakpoint: { max: 3000, min: 1024, },
//             items: 4
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             item: 3
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//         }
//     };

//     // const breakPoints = [
//     //   { width: 1, itemsToShow: 1 },
//     //   { width: 500, itemsToShow: 3 },
//     //   { width: 768, itemsToShow: 4 },
//     //   { width: 1020, itemsToShow: 5 },
//     // ];
//     return (
//       <>
//               <div className="section">
//                   <div className="d-flex justify-content-between align-items-center"
//                       style={{ width: '100%', height: 70, }}
//                   >
//                       <h1 className="head-title">
//                           Collectibles
//                       </h1>
//                       <h2 className="head-option">View all</h2>
//                   </div>
//                   <hr style={{ height: '1px', }} />
//               </div>
//               <div className="multi-carousel">

//                 <Carousel
//                     additionalTransfrom={0}
//                     arrows
//                     autoPlay
//                     autoPlaySpeed={3000}
//                     centerMode={false}
//                     className=""
//                     containerClass="react-multi-carousel-collapse"
                    
//                     dotListClass=""
//                     draggable
//                     focusOnSelect={false}
//                     infinite
//                     itemClass=""
//                     keyBoardControl
//                     minimumTouchDrag={80}
//                     pauseOnHover
//                     renderArrowsWhenDisabled={false}
//                     renderButtonGroupOutside={false}
//                     renderDotsOutside={false}
//                     responsive={responsive}
//                     rewind={false}
//                     rewindWithAnimation={false}
//                     rtl={false}
//                     shouldResetAutoplay
//                     showDots={false}
//                     sliderClass=""
//                     slidesToSlide={2}
//                     swipeable
//                 >
//                     {artCategories.map((data, index) => {
//                         return (
//                             <Card className="nft-card"
//                             key={index}

//                         >
//                             <div className="nft-card-img position-relative">
//                                 <Link to={`/nft/${data.id}`} >
//                                     <div className="card-img-top" style={{ backgroundImage: `url(${data.preview_image_url})` }}>
//                                     </div>
//                                     <div className="overlay">
//                                         <button type="button" className="btn btn-secondary">Buy Now</button>
//                                     </div>
//                                 </Link>
//                             </div>
//                             <CardBody className="p-0 mt-2">
//                                 <CardTitle tag="h5">
//                                     <Link to={`/nft/${data.id}`} style={{ textDecoration: 'none', color: "#000", fontFamily: 'nunito', fontWeight: 800 }}>
//                                         {data.title}
//                                     </Link>
//                                 </CardTitle>
//                                 <CardSubtitle
//                                     className="mb-2"
//                                     tag="h6"
//                                 >
//                                     <Link to={`/profile/${data.owner.code}`} style={{ textDecoration: 'none', color: "#000", fontFamily: 'nunito' }}>
//                                         <div className="d-flex align-items-center"
//                                             style={{ height: 50, width: '100%', marginTop: 20, }}>

//                                             <div style={{ marginRight: '16px', }}>
//                                                 <img src={data.owner.profile_picture} alt="" style={{ height: 25, width: 25, borderRadius: '50%' }} />
//                                             </div>
//                                             <div className="">
//                                                 <p style={{ fontSize: 15, fontFamily: 'nunito' }}>{data.owner.display_name}</p>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                     <div className="nft-item-price d-flex align-items-center" >
//                                         <img src={logo} alt="" style={{ height: 16, width: 16, }} />
//                                         <h5 className="price mb-0" style={{ fontWeight: 500, fontFamily: 'nunito', lineHeight: 2, marginLeft: 5, textAlign: 'right' }}>{data.sale.selling_price}</h5>
//                                     </div>
//                                     <div className="nft-item-price d-flex justify-content-between align-items-center" style={{ zIndex: 2, position: 'relative' }} >
//                                         <div className="dropdown" >
//                                             <button className="btn btn-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                                                 <BsIcons.BsThreeDots />
//                                             </button>
//                                             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                                                 <li><a className="dropdown-item" href="#">Share</a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="d-flex align-items-center">
//                                             <button type='button' className='btn-multiple-state btn-follow border-0 p-0 shadow-none btn btn-link'>
//                                                 <FiIcons.FiHeart />
//                                             </button>
//                                         </div>
//                                     </div>

//                                 </CardSubtitle>
//                             </CardBody>
//                         </Card>

//                         )
//                     })}

//                 </Carousel>
//             </div>
              
//           </>
//     );
//   };
  
//   export default Collectibles;
  