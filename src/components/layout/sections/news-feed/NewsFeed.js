
import * as AiIcons from "react-icons/ai";
// import * as BiIcons from "react-icons/bi";
import NewsCard from "./NewsCard";
import NewsCreate from "./NewsCreate";

const News = () => {
  return (
    <div>
      <div className="">
        <div className="d-flex justify-content-center align-items-center"
          style={{ height: 250, width: '100%', background: 'linear-gradient(135deg,#5e4a9e,#443895)', }}>
          <div>
            <h1 className="text-center"
              style={{ fontSize: 30, fontFamily: 'nunito', color: 'white', fontWeight: 800, margin: '30px 0px' }}>
              Newsfeed & Blogs
            </h1>
            <div className="align-items-center d-flex justify-content-between"
              style={{ height: 40, borderRadius: 6, width: 500, background: 'white' }}>
              <input
                className="form-input"
                style={{ borderRadius: 6, width: 288, height: 32, paddingLeft: 8, fontFamily: 'nunito', flex: 1, }}
                type="search"
                placeholder="Search Newsfeed and Blogs"
              />
              <div className="newsfeed-search d-flex justify-content-center align-items-center">
                <AiIcons.AiOutlineSearch className="newsfeed-search-icon cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
 
      <section>
        <div  className="p-4">
          <NewsCard />
        </div>
        <div>
          <NewsCreate />
        </div>
      </section>
    </div>
  );
};

export default News;
