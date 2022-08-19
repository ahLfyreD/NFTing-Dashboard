import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div>
      <section className="">
        <div className="h-[250px] w-full bg-blue-900 flex justify-center">
          <div>
            <h1 className="text-center text-3xl font-nunito text-white font-black my-5">
              Newsfeed & Blogs
            </h1>
            <div className="h-10 rounded-md items-center flex w-[500px] justify-between bg-white">
              <input
                className="form-input rounded-md w-72 h-8 pl-2 flex-1 font-nunito border-none focus:outline-none"
                type="search"
                placeholder="Search Newsfeed and Blogs"
              />
              <div className="flex justify-center items-center rounded-r-md h-12 w-10">
                <AiIcons.AiOutlineSearch className="cursor-pointer text-2xl hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full flex justify-between items-center h-16 my-5 px-3">
          <div className="flex w-56 h-16 justify-between items-center">
            <div className="flex h-12 bg-secondary rounded-xl px-2 text-xl font-light items-center">
              <BiIcons.BiCategory/>
              <h1>Category</h1>
            </div>
            <div className="flex h-12 bg-secondary rounded-xl px-2 text-xl font-light items-center justify-around">
              <AiIcons.AiOutlineTags/>
              <h1>Tags</h1>
            </div>
          </div>
          <div className="flex h-12 bg-secondary rounded-xl px-2 text-xl font-light items-center justify-center">
            <BiIcons.BiSortAlt2/>
            <h1>Sort</h1>
          </div>
        </div>
      </section>

      <section>
        <NewsCard />
      </section>
    </div>
  );
};

export default News;
