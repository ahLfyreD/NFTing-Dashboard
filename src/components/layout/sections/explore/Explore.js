import { Link } from 'react-router-dom'
import Drops from "@components/layout/sections/explore/contents/Drops";
import Arts from "@components/layout/sections/explore/contents/Arts";

const Explore = () => {
  return (
    <div className="p-4 position-relative">
      <div>
        <Drops/>
      </div>
      <div>
        <Arts/>
      </div>
    </div>
  )
}

export default Explore
