import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store';
import { FormInputText } from '../form/FormInputText';
import { Box, Divider, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import { IFormInput } from '../../screens/CharacterSheet';
import { Control } from 'react-hook-form';
import { GridDivider } from '../form/GridDivider';

type BasicDataProps = {
	control: Control<IFormInput, any>;
}

export const BasicData = (props : BasicDataProps) => {
	const { control } = props;

	return (
		<Paper
			elevation={2}
			style={{
				padding: 30,
			}}
		>
			<Box display="flex">
				<Typography color="secondary.dark" variant="overline" sx={{ marginBottom: 1, fontSize: 20, fontWeight: 600 }}>Datos Básicos</Typography>
			</Box>
			<Grid container spacing={2} sx={{ marginBottom: 3 }}>
				<Grid xs={12} lg={3}>
					<FormInputText
						name="name"
						control={control}
						label="Nombre"
					/>
				</Grid>
				<Grid xs={12} lg={9} sx={{ marginBottom: 0 }}>
					<FormInputText
						name="imageUrl"
						control={control}
						label="Url Imagen"
					/>
				</Grid>
				<GridDivider />
				<Grid xs={6} lg={4}>
					<FormInputText
						name="nickname"
						control={control}
						label="Apodo"
					/>
				</Grid>
				<Grid xs={6} lg={4}>
					<FormInputText
						name="age"
						control={control}
						label="Edad"
					/>
				</Grid>
				<Grid xs={6} lg={4}>
					<FormInputText
						name="race"
						control={control}
						label="Raza"
					/>
				</Grid>
				<Grid xs={6} lg={4}>
					<FormInputText
						name="faction"
						control={control}
						label="Facción"
					/>
				</Grid>
				<Grid xs={6} lg={4}>
					<FormInputText
						name="gender"
						control={control}
						label="Género"
					/>
				</Grid>
				<Grid xs={6} lg={4}>
					<FormInputText
						name="employment"
						control={control}
						label="Empleo"
					/>	
				</Grid>
			</Grid>
		</Paper>
	)
}