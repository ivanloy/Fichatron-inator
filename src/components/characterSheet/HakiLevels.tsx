import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Control } from "react-hook-form";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { IFormInput } from "../../screens/CharacterSheet";
import { FormInputText } from "../form/FormInputText";
import { SectionTitle } from "../form/SectionTitle";

type HakiLevelsProps = {
  control: Control<IFormInput, any>;
};

export const HakiLevels = (props: HakiLevelsProps) => {
  const { control } = props;
  const { haki } = useSelector((state: RootState) => state.characterData);
  //FIXME lodash isNIl haki. Default to empty string in state
  return (
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
            stateValue={haki ? haki[0].value : ""}
            name="observationHaki"
            control={control}
            label="Haki de observación"
          />
        </Grid>
        <Grid xs={12} lg={4}>
          <FormInputText
            stateValue={haki ? haki[1].value : ""}
            name="armamentHaki"
            control={control}
            label="Haki de armadura"
          />
        </Grid>
        <Grid xs={12} lg={4}>
          <FormInputText
            stateValue={haki ? haki[2].value : ""}
            name="conquerorsHaki"
            control={control}
            label="Haki del rey"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
