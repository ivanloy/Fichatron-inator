import { Control } from "react-hook-form";
import { IFormInput } from "../../../screens/CharacterSheet";
import { DropdownOption, FormInputDropdown } from "./FormInputDropdown";

type CategoryDropdownProps = {
  id: string;
  control: Control<IFormInput, any>;
}

export const CategoryDropdown = (props: CategoryDropdownProps) => {
  const { control, id } = props;
  const options : DropdownOption[] = [
    {
      label: "Especial",
      value: "Especial",
    },
    {
      label: "Genuina",
      value: "Genuina",
    },
    {
      label: "Mitica",
      value: "Mitica",
    },
    {
      label: "Épica",
      value: "Épica",
    },
    {
      label: "Definitiva",
      value: "Definitiva",
    }
  ];

  return (
    <FormInputDropdown
      name={`category-name-${id}`}
      control={control}
      label="Rango"
      defaultValue="Especial"
      options={options}
    />
  );
}