import React from "react";
import Button from "../ui/Button";

export default function MembershipCard() {
  return (
    <div className="p-6 pt-10 rounded-[40px] bg-white">
      <h3 className="text-2xl  sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">
        Card title
      </h3>
      <p className="mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        commodi corporis laboriosam amet eaque, deserunt nihil perspiciatis.
        Officiis dolore odio magni! Labore ut aspernatur repellendus?
      </p>
      <Button className="w-full">Some button</Button>
    </div>
  );
}
