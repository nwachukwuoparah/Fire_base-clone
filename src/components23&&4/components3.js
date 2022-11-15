import "./comp234.css";
import Image from "./image";
import nytimes_1x from "./images3&&4/nytimes_1x.png";
import nprone_1x from "./images3&&4/npr-one_1x.png";
import halfbrick_1x from "./images3&&4/halfbrick_1x.png";
import duolingo_1x from "./images3&&4/duolingo_1x.png";
import alibaba_home_1x from "./images3&&4/alibaba_home_1x.png";
import lyft_1x from "./images3&&4/lyft_1x.png";
import venmo_1x from "./images3&&4/venmo_1x.png";
import theeconomist_1x from "./images3&&4/the-economist_1x.png";
import trivago_1x from "./images3&&4/trivago_1x.png";
import ctrip_1x from "./images3&&4/ctrip_1x.png";
import wattpad_1x from "./images3&&4/wattpad_1x.png";
import gameloft_1x from "./images3&&4/gameloft_1x.png";
const Component3 = () => {
  return (
    <div className="Component3">
      <div className="Component3Main">
        <h1>Trusted by the largest apps and games</h1>
        <p className="Component3MainP">
          Development teams around the world—including NPR, Halfbrick, Duolingo,
        </p>
        <p>and Venmo—use Firebase to ship their apps.</p>
        <div className="imagesdiv">
          <div className="imagesdivs first1" >
            <Image image={nytimes_1x} />
            <Image image={alibaba_home_1x} />
            <Image image={trivago_1x} />
          </div>
          <div className="imagesdivs first1">
            <Image image={nprone_1x} />
            <Image image={lyft_1x} />
            <Image image={ctrip_1x} />
          </div>
          <div className="imagesdivs second">
            <Image image={halfbrick_1x} />
            <Image image={venmo_1x} />
            <Image image={wattpad_1x} />
          </div>
          <div className="imagesdivs third">
            <Image marginT={20} image={duolingo_1x} />
            <Image marginT={23} marginB={40} image={theeconomist_1x} />
            <Image marginT={-45} image={gameloft_1x} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component3;
