import React from "react";

export default function TextCard({ title, ingredients, price, analcolico }) {
  return (
    <div className="text-center max-w-sm rounded-md bg-gradient-to-r from-zinc-800 to-indigo-800 h-30">
      <p className="text-3xl">{title}</p>
      <div className="">
        {ingredients.map((ing) => (
          <p className="text-sm">{ing}</p>
        ))}
      </div>
      <p className="text-2xl">{price}</p>
      <span>{analcolico}</span>
    </div>
  );
}
