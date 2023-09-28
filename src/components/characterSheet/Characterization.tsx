import { FormInputText } from '../form/FormInputText';
import { Box, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import { IFormInput } from '../../screens/CharacterSheet';
import { Control } from 'react-hook-form';
import { GridDivider } from '../form/GridDivider';
import { SectionTitle } from '../form/SectionTitle';

type CharacterizationProps = {
	control: Control<IFormInput, any>;
}

export const Characterization = (props : CharacterizationProps) => {
	const { control } = props;

	return (
		<Paper
			elevation={2}
			style={{
				padding: 30,
			}}
		>
			<SectionTitle title="Caracterización" />
			<Grid container spacing={2}>
				<Grid xs={12}>
					<FormInputText
						name="background"
						control={control}
						label="Transfondo"
						multiLine
						minRows={5}
						maxRows={20}
					/>
				</Grid>
				<GridDivider />
				<Grid xs={12}>
					<FormInputText
						name="personality"
						control={control}
						label="Personalidad"
						multiLine
						minRows={5}
						maxRows={20}
					/>
				</Grid>
				<GridDivider />
				<Grid xs={12}>
					<FormInputText
						name="appearance"
						control={control}
						label="Apariencia"
						multiLine
						minRows={5}
						maxRows={20}
					/>
				</Grid>
			</Grid>
		</Paper>
	)
}