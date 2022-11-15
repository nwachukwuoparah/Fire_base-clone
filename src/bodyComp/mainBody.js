import "../App.css";
import Button from "./button";
import video from "./Firebase_Hero_Loop_1440x735.webm";
const Mainbody = () => {
  return (
    <div className="cont1">
      <div className="cont2">
        <h1>
          Make your app the
          <br /> best it can be
        </h1>
        <h4>
          Firebase is an app development platform that helps you
          <br /> build and grow apps and games users love. Backed by
          <br /> Google and trusted by millions of businesses around the
          <br /> world.
        </h4>
        <div className="buttonDiv">
          <Button
            margin={0}
            height={40}
            width={250}
            radius={5}
            bc="white"
            color="#1967D3"
            font={15}
          >
            Explore extensions
          </Button>
          <div className="try watch">
            <p>Try demo</p>
          </div>
          <div className="try">
            <p>Watch video</p>
          </div>
        </div>
      </div>

      <div className="videoDiv">
        <video loop="true" autoPlay="true" muted="true" playsinline="true"  width="750" height="240"      >
          <source src={video} />
        </video>
      </div>
    </div>
  );
};
export default Mainbody;
