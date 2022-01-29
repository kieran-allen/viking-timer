import type { NextPage } from "next";
import { Snake } from "../components/Snake";
import { Timer } from "../components/Timer";

const Home: NextPage = () => {
  return (
    <div>
      <div className="grid place-items-center h-screen">
        <div>
          <h1 className="text-[500px] text-center">The cursed raid</h1>
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
