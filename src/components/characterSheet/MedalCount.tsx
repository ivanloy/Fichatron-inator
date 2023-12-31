import { Control } from "react-hook-form";
import { IFormInput } from "../../screens/CharacterSheet";
import { Box, Paper, Typography } from "@mui/material";
import { FormInputText } from "../form/FormInputText";
import Grid from '@mui/material/Unstable_Grid2'; 
import { SectionTitle } from "../form/SectionTitle";

type MedalCountProps = {
  control: Control<IFormInput, any>;
}

export const MedalCount = (props: MedalCountProps) => {
  const { control } = props;

  return(
    <Paper
			elevation={2}
			style={{
				padding: 30,
			}}
		>
      <SectionTitle title="Medallas" />
      <Grid container spacing={2}>
        <Grid xs={12} lg={4}>
          <FormInputText
            name="tier1Medals"
            control={control}
            label="Medallas al mérito"
          />
        </Grid>
        <Grid xs={12} lg={4}>
          <FormInputText
            name="tier2Medals"
            control={control}
            label="Medallas al servicio"
          />
        </Grid>
        <Grid xs={12} lg={4}>
          <FormInputText
            name="tier3Medals"
            control={control}
            label="Medallas al valor"
          />
        </Grid>
      </Grid>
    </Paper>
  )
}