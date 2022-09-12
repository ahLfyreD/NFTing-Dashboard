import TopHome from "./content/tophome/TopHome";
// import HomeTrend from "./content/HomeTrend";
import HomeDrops from "./content/HomeDrops";
import HomeCreate from "./content/HomeCreate";
import HomeNews from "./content/HomeNews";
import About from "./content/About";

const HomePage = () => {
  return (
    <div className="w-100">
      <div className="p-4">
        <TopHome />
      </div>

      {/* <div>
        <HomeTrend />
      </div> */}

       <div className="p-4">
        <HomeDrops />
      </div>



      <div>
        <HomeCreate />
      </div>

      <div className="p-4">
        <HomeNews />
      </div>

      <div>
        <About />
      </div>
    </div>
  );
};

export default HomePage;
