import { Control, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { IFormInput } from "../../screens/CharacterSheet";

type FormInputTextProps = {
	name: string;
	control: any;
	label: string;
	multiLine?: boolean;
	minRows?: number;
	maxRows?: number;
}

export const FormInputText = (props: FormInputTextProps) => {
	const { 
		name, 
		control, 
		label,
		multiLine,
		minRows,
		maxRows,
	} = props;
	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, value },
				fieldState: { error },
				formState,
			}) => (
				<TextField
					helperText={error ? error.message : null}
					size="small"
					error={!!error}
					onChange={onChange}
					value={value}
					fullWidth
					label={label}
					variant="outlined"
					multiline={multiLine}
					minRows={minRows}
					maxRows={maxRows}
				/>
			)}
		/>
	);
};