import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};

const WhyChooseCard = ({ image, title }: Props) => {
  return (
    <div>
      {/* Image */}
      <Image
        src={image}
        alt={title}
        width={70}
        height={70}
        className="mx-auto"
      />
      {/* content */}
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">
        {title}
      </h1>
      <p className="mt-2 text-center text-gray-700 font-medium text-xs">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
        architecto?
      </p>
    </div>
  );
};

export default WhyChooseCard;
