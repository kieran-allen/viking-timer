import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState(new Date());
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setTimeout(
      () =>
        setTime((state) => {
          const oldMinute = state.getMinutes();
          const newMinute = new Date().getMinutes();
          if (newMinute % 2 === 0 && newMinute !== oldMinute) {
            ref.current?.play();
          }
          return new Date();
        }),
      1000
    );
  }, [time]);

  return (
    <div>
      <audio ref={ref}>
        <source src="/coin.mp3" />
      </audio>
      <h1 className="text-[500px] w-[1282px]">{format(time, "HH:mm:ss")}</h1>
    </div>
  );
};
