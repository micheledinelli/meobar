import React from "react";
import SingleCardSection from "../cards/SingleCardSection";
import Card from "../cards/Card";
import Drink from "../../assets/ver3.jpg";
import Tapas from "../../assets/tapas4.jpg";

export default function CardSection() {
  return (
    <div className="my-20 mx-5 py-20 flex flex-col justify-evenly">
      <div className="text-center">
        <h3 className="text-5xl text-chinesew">What you'll find</h3>
      </div>
      <div className="mt-5 flex flex-col md:flex-row md:justify-around justify-center">
        <Card
          image={Drink}
          title={"Drinks"}
          description={"Fresh selection of drinks made with love"}
        />
        <Card
          image={Tapas}
          title={"Tapas"}
          description={"What you are drinking will taste even better"}
        />
        <Card
          image={Drink}
          title={"Wines"}
          description={"Wine is always a good choice"}
        />
      </div>
    </div>
  );
}
