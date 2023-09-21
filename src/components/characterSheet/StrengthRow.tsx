import { Control } from "react-hook-form";
import { IFormInput } from "../../screens/CharacterSheet";
import Grid from '@mui/material/Unstable_Grid2'; 
import { FormInputText } from "../form/FormInputText";
import { RankDropdown } from "./RankDropdown";

type StrengthRowProps = {
  id: string;
  control: Control<IFormInput, any>;
}

export const StrengthRow = (props: StrengthRowProps) => {
  const { control, id } = props;

  return(
    <Grid container spacing={2} justifyContent="flex-start">
      <Grid lg={1} md={2} sm={4} xs={12}>
        <RankDropdown
          id={id}
          control={control} />
      </Grid>
      <Grid lg={5} xs={12}>
        <FormInputText
          name={`strength-name-${id}`}
          control={control}
          label="Nombre"
        />
      </Grid>
      <Grid xs={12}>
        <FormInputText
          name={`strength-description-${id}`}
          control={control}
          label="Descripción"
          multiLine
          minRows={5}
          maxRows={20}
        />
      </Grid>
    </Grid>
  )
}