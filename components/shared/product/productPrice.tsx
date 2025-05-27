import { cn } from "@/lib/utils";
import React from "react";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  //ensure 2 decimal places
  const priceValue = value.toFixed(2);
  const [rupee, paisa] = priceValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-sm align-super ">$</span>
      {rupee}
      <span className="text-sm align-super ">.{paisa}</span>
    </p>
  );
};

export default ProductPrice;
