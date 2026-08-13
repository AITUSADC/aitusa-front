import React from "react";
import Button from "../ui/Button";
import type { Dictionary } from "@/i18n/dictionaries";

type MembershipCardProps = {
  labels: Dictionary["clubs"];
};

export default function MembershipCard({ labels }: MembershipCardProps) {
  return (
    <div className="p-6 pt-10 rounded-[40px] bg-white">
      <h3 className="text-2xl  sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-3">
        {labels.membershipTitle}
      </h3>
      <p className="mb-10">
        {labels.membershipDescription}
      </p>
      <Button className="w-full">{labels.membershipButton}</Button>
    </div>
  );
}
