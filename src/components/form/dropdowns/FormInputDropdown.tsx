
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Control, Controller } from "react-hook-form";
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
}

export const FormInputDropdown = (props: FormInputDropdownProps) => {
  const { name, control, label, options, defaultValue } = props;

  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  const labelId = `dropdown-label-${name}`;

  return (
    <FormControl size={"small"} sx={{ width: "100%" }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select 
            labelId={labelId}
            onChange={onChange} 
            value={value} 
            defaultValue={defaultValue}
            sx={{}}
          >
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};