import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

export default function Characteristics({ monster, height, width }) {
  const {
    name,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  } = monster;
  const data = {
    labels: [
      "Strength",
      "Dexterity",
      "Constitution",
      "Intelligence",
      "Wisdom",
      "Charisma",
    ],
    datasets: [
      {
        label: "Points",
        data: [
          strength,
          dexterity,
          constitution,
          intelligence,
          wisdom,
          charisma,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ width, height }}>
      <Radar data={data} options={{ scales: { r: { max: 30 } } }} />
    </div>
  );
}
