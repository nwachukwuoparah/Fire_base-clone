import "./comp.css";
import Button from "../bodyComp/button";
const Component5 = () => {
  return (
    <div className="main">
      <div className="maindiv">
        <div className="textdiv">
          <h1>Solutions for common and advance use cases</h1>
          <p>
            Use Firebase products together to solve complex challenges and
            optimize your app experience.
          </p>
          <p>
            Personalize your onboarding flow, grow user engagement, or add new
            functionality with{" "}
          </p>
          <p>Firebase.</p>
        </div>{" "}
        <div className="button">
          <Button width={200} height={50} bc="#1B73E8" radius={7} color="white" font={18}>
            View solutions
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Component5;
