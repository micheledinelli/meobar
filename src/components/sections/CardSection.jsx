import React from "react";
import SingleCardSection from "../cards/SingleCardSection";
export default function CardSection() {
  return (
    <div className="bg-zinc-900 gap-y-3 gap-4 pt-30 md:py-52 overflow-hidden">
      <div className="flex justify-center">
        <h1 className="text-5xl p-10">
          <i>Try our specialties</i>
        </h1>
      </div>
      <div className="">
        <SingleCardSection
          title="Drinks"
          description="Try our cocktails"
          image="ver4"
          link={undefined}
        />
      </div>
    </div>
  );
}
