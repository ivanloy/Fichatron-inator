import { Control } from "react-hook-form";
import { IFormInput } from "../../screens/CharacterSheet";
import { Box, Paper, Typography } from "@mui/material";
import { FormInputText } from "../form/FormInputText";
import Grid from '@mui/material/Unstable_Grid2'; 
import { SectionTitle } from "../form/SectionTitle";

type HakiLevelsProps = {
  control: Control<IFormInput, any>;
}

export const HakiLevels = (props: HakiLevelsProps) => {
  const { control } = props;

  return(
    <Paper
			elevation={2}
			style={{
				padding: 30,
			}}
		>
      <SectionTitle title="Niveles de Haki" />
      <Grid container spacing={2}>
        <Grid xs={12} lg={4}>
          <FormInputText
            name="observationHaki"
            control={control}
            label="Haki de observación"
          />
        </Grid>
        <Grid xs={12} lg={4}>
          <FormInputText
            name="armoredHaki"
            control={control}
            label="Haki de armadura"
          />
        </Grid>
        <Grid xs={12} lg={4}>
          <FormInputText
            name="kingHaki"
            control={control}
            label="Haki del rey"
          />
        </Grid>
      </Grid>
    </Paper>
  )
}