import {Control, Controller, useController} from "react-hook-form";
import TextField from "@mui/material/TextField";
import {IFormInput} from "../../screens/CharacterSheet";
import {useEffect, useState} from "react";

type FormInputTextProps = {
	name: string;
	control: any;
	label: string;
	multiLine?: boolean;
	minRows?: number;
	maxRows?: number;
	stateValue?: string;
}

export const FormInputText = (props: FormInputTextProps) => {
	const {
		name,
		control,
		label,
		multiLine,
		minRows,
		maxRows,
		stateValue = ""
	} = props;

	const [value, setValue] = useState('');

	const {
		field,
		fieldState,
		formState
	} = useController({name, control});

	useEffect(() => {
		setValue(field.value);
	}, [field.value]);

	useEffect(() => {
		setValue(stateValue);
	}, [stateValue]);

	return (
		<TextField
			helperText={fieldState.error ? fieldState.error.message : null}
			size="small"
			error={!!fieldState.error}
			onChange={field.onChange}
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