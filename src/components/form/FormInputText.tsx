import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Control, Controller, useController } from "react-hook-form";

import { IFormInput } from "../../screens/CharacterSheet";

type FormInputTextProps = {
  name: string;
  control: any;
  label: string;
  multiLine?: boolean;
  minRows?: number;
  maxRows?: number;
  stateValue?: string;
  onTextChange?: (value: string) => void;
};

export const FormInputText = (props: FormInputTextProps) => {
  const {
    name,
    control,
    label,
    multiLine,
    minRows,
    maxRows,
    stateValue = "",
    onTextChange,
  } = props;

  const [value, setValue] = useState("");

  const { field, fieldState, formState } = useController({ name, control });

  useEffect(() => {
    setValue(field.value);
  }, [field.value]);

  useEffect(() => {
    setValue(stateValue);
    field.onChange(stateValue);
  }, [stateValue]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(event);
    onTextChange && onTextChange(event.target.value);
  };

  return (
    <TextField
      helperText={fieldState.error ? fieldState.error.message : null}
      size="small"
      error={!!fieldState.error}
      onChange={handleOnChange}
      value={value}
      fullWidth
      label={label}
      variant="filled"
      multiline={multiLine}
      minRows={minRows}
      maxRows={maxRows}
    />
  );
};
