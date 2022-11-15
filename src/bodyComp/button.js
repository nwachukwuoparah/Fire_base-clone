const Button = (props) => {
  let button = {
    width: props.width,
    height: props.height,
    backgroundColor: props.bc,
    borderRadius:props.radius,
    border:"none",
    color:props.color,
    marginLeft:props.margin,
    marginTop:props.marginT,
    fontSize:props.font,
  };
  return <button style={button}>{props.children}</button>;
};
export default Button;
