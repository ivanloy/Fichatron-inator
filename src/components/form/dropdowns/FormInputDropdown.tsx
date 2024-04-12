import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Control, Controller, useController } from "react-hook-form";

import { IFormInput } from "../../../screens/CharacterSheet";

export type DropdownOption = {
  label: string;
  value: string;
};

type FormInputDropdownProps = {
  name: string;
  control: any;
  label: string;
  defaultValue: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
};

export const FormInputDropdown = (props: FormInputDropdownProps) => {
  const { name, control, label, options, defaultValue, onChange } = props;
  const { field } = useController({ name, control });

  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  const handleOnChange = (event: SelectChangeEvent) => {
    field.onChange(event);
    onChange(event.target.value);
  };

  const labelId = `dropdown-label-${name}`;

  return (
    <FormControl size={"small"} sx={{ width: "100%" }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        onChange={handleOnChange}
        value={field.value}
        defaultValue={defaultValue}
        sx={{}}
      >
        {generateSingleOptions()}
      </Select>
    </FormControl>
  );
};
