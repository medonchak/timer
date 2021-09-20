import React, { useEffect, useState } from "react";

let Timer = () => {
  let [sec, setSec] = useState(0);
  let [min, setMin] = useState(0);
  let [hh, setHH] = useState(0);
  let [but, setbut] = useState(false);
  let [wait, setwait] = useState(false);
  let [countWait, setCount] = useState(0);

  let ResetTimer = () => {
    setSec(0);
    setMin(0);
    setHH(0);
  };
  useEffect(() => {
    if (min > 59) setMin(0);
    min > 59 ? setHH((x) => x + 1) : setHH((x) => x);
  }, [min]);

  useEffect(() => {
    sec > 59 ? setMin((x) => x + 1) : setMin((x) => x);

    if (but) {
      let tim = setInterval(
        () => setSec((sec) => (sec < 60 ? sec + 1 : 0)),
        100
      );
      return () => clearInterval(tim);
    }
  }, [but, sec]);

  let countSetWait = () => {
    setTimeout(() => {
      if (countWait !== 1) {
        setCount(0);
        setwait(false);
      }
    }, 3000);
    if (countWait === 1) {
      setwait(true);
      setbut(but === true ? false : true);
    }
  };
  return (
    <div>
      <label htmlFor="">
        {sec}:{min}:{hh}
      </label>
      <br />
      <button
        onClick={() => {
          setbut(but === true ? false : true);
          wait ? setwait(false) : ResetTimer();
        }}
      >
        Start/Stop
      </button>
      <button
        onClick={() => {
          setCount((countWait) => countWait + 1);
          countSetWait();
        }}
      >
        Wait
      </button>
      <button
        onClick={() => {
          ResetTimer();
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Timer;
