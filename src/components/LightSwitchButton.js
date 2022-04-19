const LightSwitchButton = (props) => {
  const {light, setLight} = props;
  const handleClick = () => {
    if ((light === "off")) {
      setLight("on");
    } else {
      setLight("off");
    }
  };
  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {light === "on" && (
        <span>
          <i>💡</i> I'm on!
        </span>
      )}
      {light === "off" && (
        <span className="off">
          <i>💡</i> I'm off!
        </span>
      )}
    </button>
  );
};

export default LightSwitchButton;
