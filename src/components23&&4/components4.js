import "./comp234.css";
import Renders from "./rendercomp4.js";
import Firebaser_Friday from "./images3&&4/firebase-summit-2022.png";
import maxresdefault from "./images3&&4/maxresdefault.jpg";
import Firebaser_Friday_BlogHeader2 from "./images3&&4/Firebaser_Friday_BlogHeader (1).png";
const Component4 = () => {
  return (
    <div className="Component4">
      <div className="Render">
        <h1>News & events</h1>
        <div className="Render1">
          <div>
            <Renders
              image={Firebaser_Friday}
              text1="What's new at Firebase "
              text2="Summit 2022"
              text3="Learn how Firebase is strengthening"
              text4="integrations across Google's developer"
              text5="products and the open ecosystem of"
              text6="developer tools to help you accelerate app"
              text7="development, run your app with"
              text8="confidence, and make your app the best it"
              text9="can be."
            />
            <h4>Learn more</h4>
          </div>

          <div>
            <Renders
              marginT={-45}
              marginTP={10}
              image={maxresdefault}
              text1="Transforming home"
              text2="buying in Latin America"
              text3="Santiago García (co-founder and"
              text4="CTO) and Daniel Gomez Rico (Tech"
              text5="CTO) and Daniel Gomez Rico (Tech"
            />
            <h4>View video</h4>
          </div>
          <div>
            <Renders
              marginT={-45}
              marginTP={10}
              image={Firebaser_Friday_BlogHeader2}
              text1="#FirebaserFriday: Frank"
              text2="van Puffelen"
              text3="Join us for the monthly mini-profiles"
              text4="on Firebase team members, aka"
              text5="“Firebasers”, from all around the"
            />
            <h4>Read more</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component4;
