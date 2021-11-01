import "./screen.css";

const Screen = ({ num, process}) => {
  return (
    <>
        <div className="screen process">
        {process}
        </div>
        <div className="screen">
        {num}
        </div>
    </>
  );
};

export default Screen;