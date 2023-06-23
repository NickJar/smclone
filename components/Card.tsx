import React, { PropsWithChildren } from "react";
import Image from "next/image";

interface props {
  title: string;
  description: string;
  image: string;
  id: number;
}

const Card = ({ title, description, image, id }: props) => {
  return (
    <div className="bg-white w-[500px] sm:w-[600px] sm:h-[500px] h-[400px] rounded-md shadow-lg shadow-black-500/50 p-3 flex flex-col">
      <div>{title}</div>
      <div>{description}</div>
      <div className="flex items-center pt-5 w-full justify-center">
        <Image
          className="rounded-md shadow-lg shadow-black-500/50"
          width={500}
          height={500}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
