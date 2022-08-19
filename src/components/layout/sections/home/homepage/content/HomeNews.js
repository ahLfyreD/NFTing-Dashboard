// import { HomeNewsData } from "./HomeNewsData.js";
// import { Card } from "@components/card/Card";
// import world from "@asset/images/image3.jpg";

// const HomeNews = () => {
//   const featuredProducts = [
//     "../../../../../asset/images/image3.jpg",
//     "../../../../asset/images/image3.jpg",
//     "../../../../../asset/images/image3.jpg",
//   ];
//   return (
//     <div>
//       <div className="w-full h-48">
//         <div className="flex w-full px-5 my-14 h-14 relative justify-between border-b-2 border-secondary">
//           <h1 className="font-extrabold font-nunito text-blue-900 text-4xl">
//             Newsfeed & Blog
//           </h1>
//           <h2 className="font-nunito text-2xl">View all</h2>
//         </div>
//         <div className="w-full flex justify-center relative overflow-auto">
//           {HomeNewsData.map((item, index) => (
//             <div
//               key={index}
//               className="w-[250px] h-[350px] font-mono font-semibold text-xl border
//                border-secondary flex flex-col cursor-pointer
//                         items-center my-1 mx-2 bg-white rounded-md hover:shadow-2xl]
//                     ease-in-out duration-300"
//             >
//               <>
//                 <div className="bg-blue-600 w-full h-48 rounded-xl relative">
//                   <img
//                     className="w-full h-full rounded-xl"
//                     src={featuredProducts[0]}
//                     alt=""
//                   />
//                 </div>
//                 <h1>{item.nftName}</h1>
//                 <div className="p-2 flex flex-col relative w-full h-[150px]">
//                   <h1 className="font-nunito text-base font-semibold">
//                     {item.newsTitle}
//                   </h1>
//                   <h1 className="font-nunito text-sm font-light my-2">
//                     {item.newsSubTitle}
//                   </h1>
//                   <div className="flex absolute  bottom-0">
//                     <img src={item.img} alt="" />
//                     <div className="">
//                       <h3>{item.profileName}</h3>
//                       <p>{item.date}</p>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeNews;
