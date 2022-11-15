import "../App.css";
import Cont from "./Cont.js";
import build from "./home-icon-build.png";
import engage from "./home-icon-engage.png";
import release from "./home-icon-release.png";
import bigquery from "./export_bigquery_120@2x.png";
import search from "./algolia_search_120@2x.png";
import Button from "../bodyComp/button.js";
const Component = () => {
  let div1 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    color: "#424242",
  };
  let div2 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  };
  let div3 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 30,
  };
  let img = {
    width: 60,
    height: 60,
  };
  let P = {
    marginTop: 15,
  };
  let header = {
    backgroundColor: "red",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    marginTop: 200,
  };
  return (
    <div className="mainComp">
      <div className="comp1">
        <div style={div1}>
          <h1>Products and solutions you can rely on through your</h1>
          <h1>app's journey</h1>
        </div>
        <div style={div2}>
          {" "}
          <Cont
            image={build}
            text1="Build"
            text2="Accelerate app development"
            br="with fully managed backend"
            br1="infrastructure"
            text3="View all bild products"
            link1="Cloud firsstore"
            link2="Authentication"
            link3="Extensions"
          />
          <Cont
            image={engage}
            text1="Build"
            text2="Accelerate app development"
            br="with fully managed backend"
            br1="infrastructure"
            text3="View all bild products"
            link1="Cloud firsstore"
            link2="Authentication"
            link3="Extensions"
          />
          <Cont
            image={release}
            text1="Build"
            text2="Accelerate app development"
            br="with fully managed backend"
            br1="infrastructure"
            text3="View all bild products"
            link1="Cloud firsstore"
            link2="Authentication"
            link3="Extensions"
          />
        </div>
        <div className="buttonDiv3">
          <Button height={35} width={155} radius={5} color="#1B73E8">
            All products
          </Button>
          <hr className="hr" />
        </div>

        <div className="master">
          <h1 style={{ color: "#424242" }}>Firebase Extensions</h1>
          <p>
            Install pre-packaged, open-source bundles of code to automate common
            development tasks
          </p>
          <div className="maindiv3">
            <div style={div3}>
              <img style={img} src={bigquery} />
              <p style={P}>Stream Collections to</p>
              <p>BigQuery</p>
            </div>

            <div style={div3}>
              <img style={img} src={search} />
              <p style={P}>Stream Collections to</p>
              <p>BigQuery</p>
            </div>

            <div style={div3}>
              <img style={img} src={bigquery} />
              <p style={P}>Stream Collections to</p>
              <p>BigQuery</p>
            </div>

            <div style={div3}>
              <img style={img} src={bigquery} />
              <p style={P}>Stream Collections to</p>
              <p>BigQuery</p>
            </div>
          </div>
          <div className="buttonDiv2">
            <Button
              margin={35}
              height={50}
              width={260}
              radius={5}
              bc="#1B73E8"
              color="white"
            >
              Explore extensions
            </Button>
          </div>
        </div>
        <div className="maincompFooter">
          <p>Firebase supports:</p>
        </div>
      </div>

      
    </div>
  );
};
export default Component;
