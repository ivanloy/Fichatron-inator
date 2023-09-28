import { Control } from "react-hook-form";
import { IFormInput } from "../../screens/CharacterSheet";
import Grid from '@mui/material/Unstable_Grid2'; 
import { FormInputText } from "../form/FormInputText";
import { CategoryDropdown } from "../form/dropdowns/CategoryDropdown";

type ItemRowProps = {
  id: string;
  control: Control<IFormInput, any>;
}

export const ItemRow = (props: ItemRowProps) => {
  const { control, id } = props;
  console.log(id)
  return(
    <Grid container spacing={2} justifyContent="flex-start">
      <Grid lg={3} xs={6}>
        <CategoryDropdown 
          id={`${id}-item`}
          control={control} />
      </Grid>
      <Grid lg={7} xs={12}>
        <FormInputText
          name={`item-name-${id}`}
          control={control}
          label="Nombre"
        />
      </Grid>
      {/* REQUISITOS CHIPS VERDE OK, ROJO NO OK */}
      <Grid xs={12}>
        <FormInputText
          name={`item-description-${id}`}
          control={control}
          label="Descripción"
          multiLine
          minRows={5}
          maxRows={20}
        />
      </Grid>
      <Grid xs={12}>
        <FormInputText
          name={`item-abilities-${id}`}
          control={control}
          label="Habilidades únicas"
          multiLine
          minRows={5}
          maxRows={20}
        />
      </Grid>
    </Grid>
  )
}