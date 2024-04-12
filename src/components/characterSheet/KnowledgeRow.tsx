import Grid from "@mui/material/Unstable_Grid2";
import { Control } from "react-hook-form";

import { IFormInput } from "../../screens/CharacterSheet";
import { FormInputText } from "../form/FormInputText";
import { KnowledgeItem } from "./KnowledgeLevels";

type KnowledgeRowProps = {
  control: Control<IFormInput, any>;
  id: string;
  knowledgeData: KnowledgeItem;
};

export const KnowledgeRow = (props: KnowledgeRowProps) => {
  const { control, id, knowledgeData } = props;

  return (
    <>
      <Grid xs={6} lg={6}>
        <FormInputText
          stateValue={knowledgeData.name}
          name={`${id}.name`}
          control={control}
          label="Nombre"
        />
      </Grid>
      <Grid xs={6} lg={6}>
        <FormInputText
          stateValue={knowledgeData.value}
          name={`${id}.value`}
          control={control}
          label="Nivel"
        />
      </Grid>
    </>
  );
};
