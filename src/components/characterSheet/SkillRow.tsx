import { Control } from "react-hook-form";
import { IFormInput } from "../../screens/CharacterSheet";
import Grid from '@mui/material/Unstable_Grid2'; 
import { FormInputText } from "../form/FormInputText";
import { CategoryDropdown } from "../form/dropdowns/CategoryDropdown";

type SkillRowProps = {
  id: string;
  control: Control<IFormInput, any>;
}

export const SkillRow = (props: SkillRowProps) => {
  const { control, id } = props;
  return(
    <Grid container spacing={2} justifyContent="flex-start">
      <Grid lg={3} xs={6}>
        <CategoryDropdown 
          id={`${id}-skill`}
          control={control} />
      </Grid>
      <Grid lg={7} xs={12}>
        <FormInputText
          name={`skill-name-${id}`}
          control={control}
          label="Nombre"
        />
      </Grid>
      <Grid lg={6} xs={12}>
        <FormInputText
          name={`skill-nature-${id}`}
          control={control}
          label="Naturaleza"
        />
      </Grid>
      {/* REQUISITOS CHIPS VERDE OK, ROJO NO OK */}
      <Grid xs={12}>
        <FormInputText
          name={`skill-description-${id}`}
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