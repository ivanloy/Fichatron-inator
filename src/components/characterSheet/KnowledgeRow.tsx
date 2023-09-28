import { Control } from "react-hook-form";
import { IFormInput } from "../../screens/CharacterSheet";
import { FormInputText } from "../form/FormInputText";
import Grid from '@mui/material/Unstable_Grid2'; 

type KnowledgeRowProps = {
  control: Control<IFormInput, any>;
  id: string;
}

export const KnowledgeRow = (props: KnowledgeRowProps) => {
  const { control, id } = props;

  return(
      <>
        <Grid xs={6} lg={6}>
          <FormInputText
            name={`${id}-knowledge-name`}
            control={control}
            label="Nombre"
          />
        </Grid>
        <Grid xs={6} lg={6}>
          <FormInputText
            name={`${id}-knowledge-level`}
            control={control}
            label="Nivel"
          />
        </Grid>
      </>
  )
}