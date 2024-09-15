import { useEffect, useState } from "react";
import classes from "./ToggleSwitch.module.scss";

interface ToogleSwitchProps {
  switchStyle?: React.CSSProperties;
  switchBtnStyle?: React.CSSProperties;
  onChange?: (checked: boolean) => void;
  allowed?: boolean;
  checkedValue?: boolean;
}

const ToogleSwitch = ({
  switchStyle = {},
  switchBtnStyle = {},
  onChange,
  allowed = true,
  checkedValue = false,
}: ToogleSwitchProps) => {
  const [checked, setChecked] = useState(checkedValue);

  useEffect(() => {
    setChecked(checkedValue);
  }, [checkedValue]);

  const inputChangeHandler = () => {
    onChange?.(!checked);
    if (!allowed) {
      setTimeout(() => {
        setChecked(false);
      }, 300);
    }
    setChecked((prevState) => !prevState);
  };

  return (
    <label
      className={
        checked && !allowed
          ? `${classes["switch"]} ${classes["switch-vibrate"]}`
          : `${classes["switch"]}`
      }
      style={switchStyle}
    >
      <input type="checkbox" checked={checked} onChange={inputChangeHandler} />
      <span
        className={`${classes["slider"]} ${classes["round"]}`}
        style={switchBtnStyle}
      ></span>
    </label>
  );
};

export default ToogleSwitch;
