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

export const BattleStyle = (props : CharacterizationProps) => {
	const { control } = props;

	return (
		<Paper
			elevation={2}
			style={{
				padding: 30,
			}}
		>
			<SectionTitle title="Estilo de combate" />
			<Grid container spacing={2}>
				<Grid xs={12}>
					<FormInputText
						name="battleStyle"
						control={control}
						label="Estilo de lucha"
						multiLine
						minRows={5}
						maxRows={20}
					/>
				</Grid>
				<GridDivider />
				<Grid xs={12}>
					<FormInputText
						name="weapons"
						control={control}
						label="Armas"
						multiLine
						minRows={5}
						maxRows={20}
					/>
				</Grid>
			</Grid>
		</Paper>
	)
}