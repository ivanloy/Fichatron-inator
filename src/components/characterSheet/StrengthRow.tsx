import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { Control } from "react-hook-form";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { IFormInput } from "../../screens/CharacterSheet";
import { RankDropdown } from "../form/dropdowns/RankDropdown";
import { FormInputText } from "../form/FormInputText";

type StrengthRowProps = {
  id: string;
  control: Control<IFormInput, any>;
  onChange: (key: "name" | "description" | "rank", value: string) => void;
};

export const StrengthRow = (props: StrengthRowProps) => {
  const { control, id, onChange } = props;

  return (
    <Grid container spacing={2} justifyContent="flex-start">
      <Grid lg={1} md={2} sm={4} xs={12}>
        <RankDropdown
          onChange={(value) => onChange("rank", value)}
          id={id}
          control={control}
        />
      </Grid>
      <Grid lg={5} xs={12}>
        <FormInputText
          onTextChange={(value) => onChange("name", value)}
          name={`strength-name-${id}`}
          control={control}
          label="Nombre"
        />
      </Grid>
      <Grid xs={12}>
        <FormInputText
          onTextChange={(value) => onChange("description", value)}
          name={`strength-description-${id}`}
          control={control}
          label="Descripción"
          multiLine
          minRows={5}
          maxRows={20}
        />
      </Grid>
    </Grid>
  );
};
