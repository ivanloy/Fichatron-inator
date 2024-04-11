import {FormInputText} from '../form/FormInputText';
import {Box, Paper, Typography} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {IFormInput} from '../../screens/CharacterSheet';
import {Control} from 'react-hook-form';
import {GridDivider} from '../form/GridDivider';
import {SectionTitle} from '../form/SectionTitle';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';

type CharacterizationProps = {
	control: Control<IFormInput, any>;
}

export const BattleStyle = (props: CharacterizationProps) => {
	const {control} = props;
	const {battleStyle, weapons} = useSelector((state: RootState) => state.characterData);

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
						stateValue={battleStyle}
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
						stateValue={weapons}
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