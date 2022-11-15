import "./comp.css";
import Botton from "../bodyComp/button";
import logo from "./comp5images/download-removebg-preview.png";
import logo1 from "./comp5images/googlelogo_color_272x92dp.png";
const Component7 = () => {
  return (
    <div className="Component7">
      <div className="Component7div1">
        <img src={logo} alt="img" />
        <h1>Try Firebase today</h1>
        <h6>Integrating it into your app is easy.</h6>
        <Botton
          className="button"
          marginT={30}
          font={18}
          color="white"
          bc="#1967D2"
          radius={6}
          width={200}
          height={50}
        >
          Get started
        </Botton>
      </div>
      <div className="Component7div2">
        <div className="names">
          <h4>Learn</h4>
          <p>Guides</p>
          <p>Reference</p>
          <p>Samples</p>
          <p>Libraries</p>
          <p>GitHub</p>
        </div>
        <div className="names">
          <h4> Stay connected</h4>
          <p>Blog</p>
          <p>Firebase Summit</p>
          <p>Twitter</p>
          <p>YouTube</p>
        </div>
        <div className="names">
          <h4>Support</h4>
          <p>Contact support</p>
          <p>Stack Overflow</p>
          <p>Slack community</p>
          <p>Google group</p>
          <p>Release notes</p>
          <p>FAQs</p>
        </div>
      </div>
      <div className="firsthr">
        <hr />

        <div className="firstfoter">
          <img class style={{ width: 75 }} src={logo1} alt="image" />
          <h3>Developers</h3>
          <p>Android</p>
          <p>Chrome</p>
          <p>Firebase</p>
          <p>Google Cloud Platform</p>
          <p>All products</p>
        </div>
        <hr/>
        <div className="footer">
          <div className="footer1" >
            <p className="P3 P4">Terms</p>
            <p className="P3">Privacy</p>
          </div>
          <div>
            <select className="select2">
              <option selected value="English">
                English
              </option>
              <option value="French">French</option>
              <option value="Yoruba">Yoruba</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component7;
