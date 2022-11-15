import "./header.css";
const Dropdown = (props) => {
    let drop={
      backgroundColor:props.color,
      width:props.width,
      height:props.height,
     margin:5,
     backgroundColor:"white",
     border:props.border,
    }
  return (
    <div className="dropdownContainer">
     <select style={drop}  className="select">
            <option selected value="English">{props.text1}</option>
            <option value="French">{props.text2}</option>
            <option value="Yoruba">{props.text}</option>
          </select>
    </div>
  );
};

export default Dropdown;
