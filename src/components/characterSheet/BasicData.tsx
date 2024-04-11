import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../redux/store';
import {FormInputText} from '../form/FormInputText';
import {Box, Divider, Paper, Typography} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {IFormInput} from '../../screens/CharacterSheet';
import {Control} from 'react-hook-form';
import {GridDivider} from '../form/GridDivider';
import {SectionTitle} from '../form/SectionTitle';

type BasicDataProps = {
	control: Control<IFormInput, any>;
}

export const BasicData = (props: BasicDataProps) => {
	const {control} = props;
	const {name, imageUrl, nickname, age, race, faction, gender, employment} = useSelector((state: RootState) => state.characterData);
	return (
		<Paper
			elevation={2}
			style={{
				padding: 30,
			}}
		>
			<SectionTitle title="Datos Básicos" />
			<Grid container spacing={2}>
				<Grid xs={12} lg={3}>
					<FormInputText
						stateValue={name}
						name="name"
						control={control}
						label="Nombre"
					/>
				</Grid>
				<Grid xs={12} lg={9} sx={{marginBottom: 0}}>
					<FormInputText
						stateValue={imageUrl}
						name="imageUrl"
						control={control}
						label="Url Imagen"
					/>
				</Grid>
				<GridDivider />
				<Grid xs={6} lg={4}>
					<FormInputText
						stateValue={nickname}
						name="nickname"
						control={control}
						label="Apodo"
					/>
				</Grid>
				<Grid xs={6} lg={4}>
					<FormInputText
						stateValue={age}
						name="age"
						control={control}
						label="Edad"
					/>
				</Grid>
				<Grid xs={6} lg={4}>
					<FormInputText
						stateValue={race}
						name="race"
						control={control}
						label="Raza"
					/>
				</Grid>
				<Grid xs={6} lg={4}>
					<FormInputText
						stateValue={faction}
						name="faction"
						control={control}
						label="Facción"
					/>
				</Grid>
				<Grid xs={6} lg={4}>
					<FormInputText
						stateValue={gender}
						name="gender"
						control={control}
						label="Género"
					/>
				</Grid>
				<Grid xs={6} lg={4}>
					<FormInputText
						stateValue={employment}
						name="employment"
						control={control}
						label="Empleo"
					/>
				</Grid>
			</Grid>
		</Paper>
	)
}