import "./comp234.css";
const Renders = (props) => {
  let style = {
    marginTop: props.marginT,
  };
  let style2={
    marginTop:props.marginTP
  }
  return (
    <div style={style}>
      <img style={{ width: 250 }} src={props.image} alt="image" />
      <h2>{props.text1}</h2>
      <h2 style={{ marginTop: -23 }}>{props.text2}</h2>
      <p style={{ marginTop: -10 }}>{props.text3}</p>
      <p style={style2}>{props.text4}</p>
      <p style={style2}>{props.text5}</p>
      <p>{props.text6}</p>
      <p>{props.text7}</p>
      <p>{props.text8}</p>
      <p>{props.text9}</p>
    </div>
  );
};
export default Renders;
