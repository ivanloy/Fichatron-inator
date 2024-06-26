import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { stat } from "fs";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { FormInputText } from "../form/FormInputText";
import { SectionTitle } from "../form/SectionTitle";

type StatsChartProps = {
  control: any;
};

const getXpForLevel = (level: number) => {
  const pointsPerLevel = [
    90, 135, 180, 255, 330, 435, 545, 665, 800, 950, 1100, 1250, 1350, 1515,
    1680, 1830, 2010, 2200, 2410, 2580, 2820, 3130, 3330, 3600, 3920, 4265,
    4610, 5000, 5390, 5840, 6320, 6800, 7400, 8000,
  ];

  return pointsPerLevel[Math.floor(level - 1 / 3)];
};

const getStatCost = (rank: number) => {
  const pointsPerRank = [
    -100, -50, -20, 0, 10, 30, 60, 100, 150, 210, 280, 360, 450, 550, 675, 825,
    1000, 1200, 1450, 1750, 2200, 2850, 3750, 5000, 7000,
  ];

  return pointsPerRank[rank - 1];
};

const stats: {
  name: string;
  key:
    | "strength"
    | "fortitude"
    | "speed"
    | "agility"
    | "dexterity"
    | "precision"
    | "intellect"
    | "sharpness"
    | "instinct"
    | "energy";
}[] = [
  {
    name: "Fuerza",
    key: "strength",
  },
  {
    name: "Fortaleza",
    key: "fortitude",
  },
  {
    name: "Velocidad",
    key: "speed",
  },
  {
    name: "Agilidad",
    key: "agility",
  },
  {
    name: "Destreza",
    key: "dexterity",
  },
  {
    name: "Precisión",
    key: "precision",
  },
  {
    name: "Intelecto",
    key: "intellect",
  },
  {
    name: "Agudeza",
    key: "sharpness",
  },
  {
    name: "Instinto",
    key: "instinct",
  },
  {
    name: "Enegía",
    key: "energy",
  },
];

export const StatsChart = (props: StatsChartProps) => {
  const characterData = useSelector((state: RootState) => state.characterData);
  return (
    <Paper
      elevation={2}
      style={{
        padding: 30,
      }}
    >
      <SectionTitle title="Atributos" />
      <Grid container spacing={2}>
        {stats.map((stat) => {
          const base = characterData[stat.key]?.base ?? 4;
          const bonus = characterData[stat.key]?.bonus ?? 0;
          const total = base + bonus; //FIXME Onchange update values here for total
          return (
            <>
              <Grid xs={3}>
                <Typography variant="h6">{stat.name}</Typography>
              </Grid>
              <Grid xs={3}>
                <FormInputText
                  stateValue={base.toString()}
                  name={stat.key}
                  control={props.control}
                  label={stat.name}
                />
              </Grid>
              <Grid xs={3}>
                <FormInputText
                  stateValue={bonus.toString()}
                  name={`${stat.key}Bonus`}
                  control={props.control}
                  label={"Bonus"}
                />
              </Grid>
              <Grid xs={3}>
                {/* <Typography variant="h6">{total.toString()}</Typography> */}
              </Grid>
            </>
          );
        })}
      </Grid>
    </Paper>
  );
};
