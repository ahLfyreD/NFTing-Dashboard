import { NewsData } from "./NewsData"

const NewsCard = () => {
  return (
    <>
    <div className="w-full flex justify-center relative overflow-auto">
          {NewsData.map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-[350px] font-mono font-semibold text-xl border border-secondary flex flex-col cursor-pointer
         items-center my-1 mx-2 bg-white rounded-md hover:shadow-xl ease-in-out duration-300"
            >
              <>
                <div className="bg-blue-600 w-full h-48 rounded-xl relative">
                  <img
                    className="w-full h-full rounded-xl"
                    src={item.nft}
                    alt=""
                  />
                </div>
                <h1>{item.nftName}</h1>
                <div className="p-2 flex flex-col relative w-full h-[150px]">
                  <h1 className="font-nunito text-base font-semibold">
                    {item.newsTitle}
                  </h1>
                  <h1 className="font-nunito text-sm font-light my-2">
                    {item.newsSubTitle}
                  </h1>
                  <div className="flex absolute  bottom-0">
                    <img src={item.img} alt="" />
                    <div className="">
                      <h3>{item.profileName}</h3>
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center relative mt-4 overflow-auto">
          {NewsData.map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-[350px] font-mono font-semibold text-xl border border-secondary flex flex-col cursor-pointer
         items-center my-1 mx-2 bg-white rounded-md hover:shadow-xl ease-in-out duration-300"
            >
              <>
                <div className="bg-blue-600 w-full h-48 rounded-xl relative">
                  <img
                    className="w-full h-full rounded-xl"
                    src={item.nft}
                    alt=""
                  />
                </div>
                <h1>{item.nftName}</h1>
                <div className="p-2 flex flex-col relative w-full h-[150px]">
                  <h1 className="font-nunito text-base font-semibold">
                    {item.newsTitle}
                  </h1>
                  <h1 className="font-nunito text-sm font-light my-2">
                    {item.newsSubTitle}
                  </h1>
                  <div className="flex absolute  bottom-0">
                    <img src={item.img} alt="" />
                    <div className="">
                      <h3>{item.profileName}</h3>
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
    </>
  )
}

export default NewsCard