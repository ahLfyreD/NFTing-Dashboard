
import Drops from "@components/layout/sections/explore/contents/Drops";
import Arts from "@components/layout/sections/explore/contents/Arts";
import Collectibles from "@components/layout/sections/explore/contents/Collectibles";
import Memes from "@components/layout/sections/explore/contents/Memes";
import Music from "@components/layout/sections/explore/contents/Music";
import TradingCards from "@components/layout/sections/explore/contents/TradingCards";
import VirtualWorld from "@components/layout/sections/explore/contents/VirtualWorld";

const Explore = () => {
  return (
    <div className="p-4 position-relative">
      <div>
        <Drops/>
      </div>
      {/* <div>
        <Arts/>
      </div> */}
      {/* <div>
        <Collectibles/>
      </div>
      <div>
        <Memes/>
      </div>
      <div>
        <Music/>
      </div>
      <div>
        <TradingCards/>
      </div>
      <div>
        <VirtualWorld/>
      </div> */}
    </div>
  )
}

export default Explore
