import React from "react";
import SingleCardSection from "../cards/SingleCardSection";

export default function CardSection() {
  return (
    <div className="flex flex-col md:flex-row  justify-center items-center gap-y-3 gap-4 py-52 overflow-hidden">
      <SingleCardSection
        title="Drinks"
        description="Try our cocktails"
        image="https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
        link={undefined}
      />
      <SingleCardSection
        title="Wine"
        description="Try our wines"
        image="https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
        link={undefined}
      />
      <SingleCardSection
        title="Tapas"
        description="Try our tapas"
        image="https://images.unsplash.com/photo-1620041328526-d0cf044a0739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80"
        link={undefined}
      />
    </div>
  );
}