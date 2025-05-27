"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImage = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="iamge"
        width={1000}
        height={1000}
        className="max-h-[350px] object-contain object-center"
      />
      <div className="flex gap-4">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:border-gray-400 ",
              current === index && "border-gray-600"
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
