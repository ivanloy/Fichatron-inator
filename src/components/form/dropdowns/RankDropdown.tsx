import { Control } from "react-hook-form";

import { IFormInput } from "../../../screens/CharacterSheet";
import { DropdownOption, FormInputDropdown } from "./FormInputDropdown";

type RankDropdownProps = {
  id: string;
  control: Control<IFormInput, any>;
  onChange: (value: string) => void;
};

export const RankDropdown = (props: RankDropdownProps) => {
  const { control, id, onChange } = props;
  const options: DropdownOption[] = [
    {
      label: "S",
      value: "120",
    },
    {
      label: "A",
      value: "80",
    },
    {
      label: "B",
      value: "40",
    },
    {
      label: "C",
      value: "30",
    },
    {
      label: "D",
      value: "20",
    },
    {
      label: "E",
      value: "10",
    },
    {
      label: "F",
      value: "2",
    },
  ];

  return (
    <FormInputDropdown
      name={`rank-name-${id}`}
      onChange={onChange}
      control={control}
      label="Rango"
      defaultValue="2"
      options={options}
    />
  );
};
