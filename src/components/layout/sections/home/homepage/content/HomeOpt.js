// import "./HomeOptData.js";
// import { HomeOptData } from "./HomeOptData.js";
// import { Link } from "react-router-dom";
// import image1 from "@asset/images/banner.png";
// import Carousel from "react-elastic-carousel";

// const HomeOpt = () => {
//   const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 500, itemsToShow: 4 },
//     { width: 768, itemsToShow: 6 },
//     { width: 1020, itemsToShow: 8 },
//   ];

//   return (
//     <div className="w-full h-48 relative flex justify-center items-center mt-10">
//       <div className="w-[1024px] h-full flex items-center relative overflow-x-scroll">
//         {HomeOptData.map((item, index) => {
//           return (
//             <div
//               key={index}
//               style={{ width: 300 }}
//               className="h-24 flex flex-col cursor-pointer
//              bg-blue-200 justify-between items-center m-2 rounded-2xl p-4  hover:scale-105 ease-in-out duration-300"
//             >
//               <i className="font-bold text-3xl text-blue-900">{item.icons}</i>
//               <h2 className="text-md font-nunito font-lg text-blue-900">
//                 {item.name}
//               </h2>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//     // <div>
//     //   <div className="relative bg-black h-48 w-full">
//     //     <div className="flex w-full h-full">
//     //       {HomeOptData.map((item, index) => {
//     //         return (
//     //           <div
//     //             key={index}
//     //             className=" w-[125px] h-[100px] flex flex-col cursor-pointer
//     //          bg-blue-200 justify-around items-center m-2 rounded-2xl p-2 hover:scale-105 ease-in-out duration-300"
//     //           >
//     //             <i className="font-bold text-3xl text-blue-900">{item.icons}</i>
//     //             <span className="text-md font-nunito font-semibold text-blue-900">
//     //               {item.name}
//     //             </span>
//     //           </div>
//     //         );
//     //       })}
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

// export default HomeOpt;
