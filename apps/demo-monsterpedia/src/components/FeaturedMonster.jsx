import React from "react";
import AbilityScores from "./AbilityScores";

export default function FeaturedMonster({ monster }) {
  const { name } = monster;
  return (
    <div>
      <h3>{name}</h3>
      <AbilityScores monster={monster} height={300} width={300} />
    </div>
  );
}
