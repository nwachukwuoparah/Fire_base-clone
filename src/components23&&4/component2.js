import "./comp234.css";
import Button from "../bodyComp/button";
import Image from "./image";
import google_ads from "./comp2images/google-ads.svg";
import AdMob from "./comp2images/ad-mob.svg";
import google_marketing from "./comp2images/google-marketing-platform.svg";
import playstore from "./comp2images/playstore.png";
import datastudio from "./comp2images/datastudio.svg";
import bigquery from "./comp2images/bigquery.svg";
import slack from "./comp2images/slack.svg";
import jira from "./comp2images/jira.svg";
import pagerduty from "./comp2images/pagerduty.png";
import cloud from "./comp2images/cloud-plus-firebase_1x.png";
const Component2 = () => {
  return (
    <div className="wrap">
      <div className="main2">
        <div className="main-text">
          <h1> Integration</h1>
          <p>Easily integrate Firebase with your team's favourite tools</p>
        </div>
        <div className="main-imgs">
          <Image h6="Google Ads" width={60} image={google_ads} />
          <Image h6="AdMob"  width={60} image={AdMob} />
          <Image h6="Google Marketing Platform
" width={60} image={google_marketing} />
          <Image h6="Google Play" width={60} image={playstore} />
          <Image h6="Data Studio" width={60} image={datastudio} />
          <Image h6="BigQuery" width={60} image={bigquery} />
          <Image h6="Slack" width={60} image={slack} />
          <Image h6="Jira" width={60} image={jira} />
          <Image h6="PagerDuty" width={60} image={pagerduty} />
        </div>

        <Button
          width={200}
          height={55}
          bc="#1B73E8"
          radius={7}
          color="white"
          font={18}
        >
          Learn More
        </Button>

        <div className="footer2">
          <img src={cloud} alt="image" />

          <div className="footer-text">
            <h2>Google Cloud + Firebase</h2>
            <p className="P5">Firebase projects are backed by Google Cloud.</p>
            <p>letting you scale your app to billions of users.</p>
            <a href="read more">Read more</a>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Component2;
