import type { NextPage } from "next";
import { Snake } from "../components/Snake";
import { Timer } from "../components/Timer";

const Home: NextPage = () => {
  return (
    <div>
      <div className="grid place-items-center h-screen">
        <div>
          <h1 className="text-[500px] text-center">The cursed raid</h1>
          <h2 className="text-[100px] text-center">By Anna-Louise Pullen</h2>
        </div>
        <div className="flex flex-col gap-32">
          <Snake />
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Home;
