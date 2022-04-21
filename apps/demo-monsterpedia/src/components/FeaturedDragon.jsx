import React from "react";
import AbilityScores from "./AbilityScores";

export default function FeaturedDragon({ dragon }) {
  const { name } = dragon;
  return (
    <div>
      <h3>{name}</h3>
      <AbilityScores monster={dragon} height={300} width={300} />
    </div>
  );
}
