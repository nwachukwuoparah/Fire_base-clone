import "../App.css";

const Cont = (props) => {
  let firstdiv = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#F8F9FA",
    height: 600,
    width: 280,
    margin: 15,
    borderRadius: 15,
  };
  let seconddiv = {
    display: "flex",
    flexDirection: "column",
    marginTop: 15,
  };
  let a = {
    marginTop: 25,
  };

  // function MouseOver(event) {
  //   event.target.style.background = "#D2E3FC";
  //   event.target.style.transition= 0.2
  // }
  // function MouseOut(event) {
  //   event.target.style.background = "#F8F9FA";
  // }onMouseOut={MouseOut} onMouseOver={MouseOver}
  return (
    <div className="border" style={firstdiv} >
      <img src={props.image} alt="img" />
      <h2 style={{color:"#424242"}}>{props.text1}</h2>
      <p>{props.text2}</p>
      <p>{props.br}</p>
      <p>{props.br1}</p>

      <h4 style={{color:"#1967D2"}}>{props.text3}</h4>
      <div style={seconddiv} className="atag" >
        <a style={a}>
          <i>{props.icon1}</i>
          {props.link1}
        </a>
        <a style={a}>
          <i>{props.icon2}</i>
          {props.link2}
        </a>
        <a style={a}>
          <i>{props.icon3}</i>
          {props.link3}
        </a>
      </div>
    </div>
  );
};
export default Cont;
