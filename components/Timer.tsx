import { addMinutes, format, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
import { useTimer } from "use-timer";

function pad2(number: number) {
  return (number < 10 ? "0" : "") + number;
}

function secondsToHms(d: number) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? `${pad2(h)}` : "00";
  var mDisplay = m > 0 ? `${pad2(m)}` : "00";
  var sDisplay = s > 0 ? `${pad2(s)}` : "00";
  return `${hDisplay}:${mDisplay}:${sDisplay}`;
}

export const Timer = () => {
  const [time, setTime] = useState(new Date());
  const { time: s, start } = useTimer({
    initialTime: 5400,
    timerType: "DECREMENTAL",
  });

  useEffect(() => {
    setTimeout(
      () =>
        setTime(() => {
          return new Date();
        }),
      1000
    );
  }, [time]);

  return (
    <div className="flex justify-center">
      <div className="w-[1282px]">
        <h1 onClick={() => start()} className="text-[500px] ">
          {secondsToHms(s)}
        </h1>
      </div>
    </div>
  );
};
