import { Box, Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { Control } from "react-hook-form";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { IFormInput } from "../../screens/CharacterSheet";
import { FormInputText } from "../form/FormInputText";
import { SectionTitle } from "../form/SectionTitle";

type MedalCountProps = {
  control: Control<IFormInput, any>;
}

export const MedalCount = (props: MedalCountProps) => {
  const {control} = props;
  const {medals} = useSelector((state: RootState) => state.characterData);
  //FIXME Medallas nombre segun faccion
  return (
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
            stateValue={medals ? medals[0].value : ""}
            name="tier1Medals"
            control={control}
            label="Medallas al mérito"
          />
        </Grid>
        <Grid xs={12} lg={4}>
          <FormInputText
            stateValue={medals ? medals[1].value : ""}
            name="tier2Medals"
            control={control}
            label="Medallas al servicio"
          />
        </Grid>
        <Grid xs={12} lg={4}>
          <FormInputText
            stateValue={medals ? medals[2].value : ""}
            name="tier3Medals"
            control={control}
            label="Medallas al valor"
          />
        </Grid>
      </Grid>
    </Paper>
  )
}