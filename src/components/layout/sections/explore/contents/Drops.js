import Carousel from "react-elastic-carousel";
import { Card } from "@components/card/Card";
import { DropsData } from "./DropsData.js";

import * as AiIcons from "react-icons/ai"

const Drops = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1020, itemsToShow: 5 },
  ];
  return (
    <div>
      <div >
        <h1 >
            <span><AiIcons.AiOutlineThunderbolt/></span>
          Latest / Notable Drops
        </h1>
        <h2 >
          View all
          <span></span>
        </h2>
      </div>
      
    </div>
  );
};

export default Drops;
