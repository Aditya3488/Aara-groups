import "./featuredInfo.css";

import { ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Open Concerns</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">100.00</span>
          <span className="featuredMoneyRate">
            +18 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">New cases</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Closed Concerns</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">100.00</span>
          <span className="featuredMoneyRate">
            +15 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">New Cases</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
