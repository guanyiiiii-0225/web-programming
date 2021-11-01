import "./button.css";

const Button = ({ className, value, onClick }) => {
  return (
    <button className={`${className} ${!isNaN(+value) ? "number" : ""} ${value === "." ? "number" :""}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;