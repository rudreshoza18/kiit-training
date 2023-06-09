import React, { useCallback, useEffect, useState } from "react";
import Button from "../../Shared/Button";

const CounterPrac = () => {
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(true);
  const [numType, setNumType] = useState("even");
  const [customClass, setCustomClass] = useState("text-green");
  const addCounter = () => {
    setCounter(counter + 1);
  };
  const subCounter = () => {
    setCounter(counter - 1);
  };

  const checkNum = () => {
    counter % 2 === 0 ? setNumType("even") : setNumType("odd");
  };

  const checkDisablitiy = () => {
    // if (counter === 0) {
    //   setDisable(true);
    // } else {
    //   setDisable(false);
    // }
    counter === 0 ? setDisable(true) : setDisable(false);
  };
  const toggleClass = () => {
    counter % 2 !== 0
      ? setCustomClass("text-orange")
      : setCustomClass("text-green");
  };

  const timer = useCallback(() => {
    checkDisablitiy();
    checkNum();
    toggleClass();
  }, [checkDisablitiy, checkNum, toggleClass]);
  useEffect(() => {
    timer();
  }, [timer]);
  return (
    <div>
      <div className="flex justify-center items-center">
        <Button buttonname="add" onClick={addCounter} />
      </div>
      <div className="my-6">
        <div className="text-center">
          <span className="text-6xl">{counter}</span>
        </div>
        <div className="text-center">
          <span className={"text-4xl font-serif font-bold " + customClass}>
            {numType}
          </span>
        </div>
      </div>
      )
      <div className="flex justify-center items-center">
        <Button buttonname="sub" onClick={subCounter} disabled={disable} />
      </div>
    </div>
  );
};

export default CounterPrac;
