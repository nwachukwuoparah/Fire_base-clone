import "./comp.css";
import Button from "../bodyComp/button";
const Component6 = () => {
  return (
    <div className="Component6">
      <div className="Component6_main">
        <h1 className="H1">Easy to integrate on iOS,</h1>
        <h1>Android, and the Web</h1>
        <p className="P1">
          Firebase provides detailed documentation and cross-platform SDKs to
          help you build and ship{" "}
        </p>
        <p>apps on Android, iOS, the web, C++, and Unity.</p>

        <div className="Component6_main1">
          <div className="Component6_main2">
            <div className="Selected">
              <div className="Component6_main21 first">
                Authenticate a new user
              </div>
            </div>

            <div className="Component6_main21">
              Read / writein
              <br /> realtime
            </div>
            <div className="Component6_main21">
              Subscribe a user to a <br />
              notification topic
            </div>
            <div className="Component6_main21">
              Log a custom
              <br /> Analytics event
            </div>
            <div className="Component6_main21">
              Save an image to
              <br /> Cloud Storage
            </div>
          </div>

          <div className="Component6_main3">
            <div className="Component6_main31">
              <h6 className="Swift">Swift</h6>
              <h6>Objective-C</h6>
              <h6>
                Java
                <br />
                Andriod
              </h6>
              <h6>
                Kotlin+KTX
                <br />
                Android
              </h6>
              <h6>JavaScript</h6>
              <h6>C++</h6>
              <h6>Unity</h6>
            </div>
            <div className="code">
              <p>
                Firebase provides detailed documentation and cross-platform SDKs
                to help you build and
                <br /> ship apps on Android, iOS, the web, C++, and Unity.
              </p>
            </div>
          </div>
        </div>
        <Button
          width={210}
          height={50}
          marginT={70}
          radius={7}
          bc="#1B73E8"
          font={18}
          color="white"
        >
          View all docs
        </Button>
      </div>
    </div>
  );
};

export default Component6;
