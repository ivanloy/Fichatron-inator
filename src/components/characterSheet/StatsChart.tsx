import Grid from '@mui/material/Unstable_Grid2'; 
import { FormInputText } from '../form/FormInputText';
import { Box, Paper, Typography } from '@mui/material';
import { stat } from 'fs';

type StatsChartProps = {
  control: any;
};

const stats = [
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
  return (
    <Paper
      elevation={2}
      style={{
        padding: 30,
      }}
    >
      <Box display="flex">
				<Typography color="secondary.dark" variant="overline" sx={{ marginBottom: 1, fontSize: 20, fontWeight: 600 }}>Atributos</Typography>
			</Box>
      <Grid container spacing={2}>
        {
          stats.map((stat) => (
            <>
              <Grid xs={3}>
                <Typography variant="h6">{stat.name}</Typography>
              </Grid>
              <Grid xs={3}>
                <FormInputText
                  name={stat.key}
                  control={props.control}
                  label={stat.name}
                />
              </Grid>
              <Grid xs={3}>
                <FormInputText
                  name={`${stat.key}Bonus}`}
                  control={props.control}
                  label={"Bonus"}
                />
              </Grid>
              <Grid xs={3}>
                <Typography variant="h6">Total</Typography>
              </Grid>
            </>
          ))
        }
      </Grid>
    </Paper>
  );
};