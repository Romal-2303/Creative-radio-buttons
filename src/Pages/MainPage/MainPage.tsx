import { useState } from "react";
import classes from "./MainPage.module.scss";
import ToogleSwitch from "../../Components/ToggleSwitch/ToggleSwitch";

let staticMessageArr = [
  { text: "Happiness", status: false, allowed: false },
  { text: "Optimism", status: false, allowed: false },
  { text: "Kindness", status: false, allowed: false },
  { text: "Giving", status: false, allowed: false },
  { text: "Respect", status: false, allowed: false },
  { text: "Ego", status: true, allowed: true },
];

const MainPage = () => {
  const [messageArr, setMessageArr] = useState(staticMessageArr);

  const toggleSwitchHandler =
    (receivedStr: string) => (receivedBool: boolean) => {
      if (receivedStr === "Ego") {
        if (receivedBool) {
          setMessageArr((prevArr) => {
            return [
              ...prevArr.map((el) => {
                if (el.text === "Ego")
                  return { text: el.text, status: receivedBool, allowed: true };
                else return { text: el.text, status: false, allowed: false };
              }),
            ];
          });
        } else {
          setMessageArr((prevArr) => {
            return prevArr.map((el) => {
              if (el.text === "Ego")
                return { text: el.text, status: receivedBool, allowed: true };
              else
                return { text: el.text, status: receivedBool, allowed: true };
            });
          });
        }
      } else if (!messageArr[5].status) {
        setMessageArr((prevArr) => {
          return prevArr.map((el) => {
            if (el.text === receivedStr) return { ...el, status: receivedBool };
            else return el;
          });
        });
      }
    };

  return (
    <div className={classes["mainpage-container"]}>
      <div className={classes["radio-btns-container"]}>
        {messageArr.map((el) => (
          <div className={classes["radio-text-container"]}>
            <ToogleSwitch
              allowed={el.allowed}
              onChange={toggleSwitchHandler(el.text)}
              checkedValue={el.status}
            />
            <p>{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
