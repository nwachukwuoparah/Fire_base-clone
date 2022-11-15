const Image = (props) => {
  let style = {
    width: props.width,
    marginTop: props.marginT,
    marginBottom: props.marginB,
  };
  return (
    <div>
      <img style={style} src={props.image} alt={props.alt} />
      <h6>{props.h6}</h6>
    </div>
  );
};

export default Image;
