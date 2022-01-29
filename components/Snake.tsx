import Image from "next/image";

export const Snake = () => {
  return (
    <div className="flex items-center gap-[1900px]">
      <Image src="/crest.png" width={525} height={475} alt="" />

      <Image
        className="animate-[spin_60s_linear_infinite_reverse]"
        src="/snake.png"
        width={1282}
        height={1282}
        alt=""
      />
      <Image src="/crest.png" width={525} height={475} alt="" />
    </div>
  );
};
