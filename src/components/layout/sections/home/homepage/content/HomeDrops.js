// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import load from "../../../../../../asset/images/image2.jpg";
// import { Card } from "@components/card/Card";
// import { HomeDropsData } from "./HomeDropsData.js";

// const HomeDrops = () => {
  
//   return (
//     <div className="flex flex-column justify-center items-center h-{500px} relative">
//       <div className="flex justify-between px-5 my-14 w-full h-14 border-b-2 border-secondary">
//         <h1 className="font-extrabold font-nunito text-blue-900 text-4xl">
//           Latest / Notable Drops
//         </h1>
//         <h2 className="font-nunito text-2xl">View all</h2>
//       </div>
//       <Carousel
//         additionalTransfrom={0}
//         arrows
//         autoPlay
//         autoPlaySpeed={1000}
//         centerMode={false}
//         className="max-w-[1024px] h-[500px] "
//         dotListClass=""
//         draggable
//         focusOnSelect={false}
//         infinite
//         itemClass=""
//         keyBoardControl
//         minimumTouchDrag={80}
//         pauseOnHover
//         responsive={{
//           desktop: {
//             breakpoint: {
//               max: 3000,
//               min: 1024,
//             },
//             items: 4,
//             partialVisibilityGutter: 40,
//           },
//           mobile: {
//             breakpoint: {
//               max: 464,
//               min: 0,
//             },
//             items: 1,
//             partialVisibilityGutter: 30,
//           },
//           tablet: {
//             breakpoint: {
//               max: 1024,
//               min: 464,
//             },
//             items: 3,
//             partialVisibilityGutter: 30,
//           },
//         }}
       
//         shouldResetAutoplay
//         showDots={false}
//         sliderClass=""
//         slidesToSlide={2}
//         swipeable
//       >
//         {HomeDropsData.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className="max-w-[225px] h-[350px] font-mono font-semibold text-xl border border-secondary flex flex-col cursor-pointer
//              items-center bg-white rounded-md p-1 hover:shadow-xl ease-in-out duration-300"
//             >
//               <div>
//                 <div className="bg-blue-600 h-48 w-48 rounded-xl relative">
//                   <img
//                     className="w-full h-full rounded-xl"
//                     src={item.nft}
//                     alt=""
//                   />
//                 </div>
//                 <h1>{item.nftName}</h1>
//                 <div className="flex">
//                   <img src={item.collectorImage} alt="" />
//                   <h1>{item.collectorName}</h1>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </Carousel>

//       {/* <Carousel breakPoints={breakPoints} autoPlaySpeed={1300}>
//         {HomeDropsData.map((item, index) => {
//           return (
//             <Card
//               key={index}
//               className="w-[400px] h-[350px] font-mono font-semibold text-xl border border-secondary flex flex-col cursor-pointer
//              items-center m-2 bg-white rounded-md p-2 hover:shadow-xl ease-in-out duration-300"
//             >
//               <div>
//                 <div className="bg-blue-600 h-48 w-48 rounded-xl relative">
//                   <img
//                     className="w-full h-full rounded-xl"
//                     src={item.nft}
//                     alt=""
//                   />
//                 </div>
//                 <h1>{item.nftName}</h1>
//                 <div className="flex">
//                   <img src={item.collectorImage} alt="" />
//                   <h1>{item.collectorName}</h1>
//                 </div>
//               </div>
//             </Card>
//           );
//         })}
//       </Carousel> */}
//     </div>
//   );
// };

// export default HomeDrops;
