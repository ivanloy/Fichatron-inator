import { Box, Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import { IFormInput } from '../../screens/CharacterSheet';
import { Control } from 'react-hook-form';
import { GridDivider } from '../form/GridDivider';
import { StrengthRow } from './StrengthRow';
import React, { useState } from 'react';
import { StrengthsTable } from './StrengthsTable';
import { SectionTitle } from '../form/SectionTitle';

type StrengthsProps = {
	control: Control<IFormInput, any>;
	isWeaknesses?: boolean;
}

export type StrengthItem = {
	id: number;
	rank: number;
	name: string;
	description: string;
}

export const Strengths = (props : StrengthsProps) => {
	const { control, isWeaknesses = false } = props;
	const [data, setData] = useState<StrengthItem[]>([{id: 0, rank: 120, name: "Patata fantastica", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"}, {id: 1, rank: 80, name: "Depresion", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"}, {id: 2, rank: 40, name: "Kaladinismo", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"} ]);

	return ( //TODO Different views (Normal, edit, table)
		<Paper
			elevation={2}
			style={{
				padding: 30,
			}}
		>
			<StrengthsTable
				data={data}
			/>
			<SectionTitle title={isWeaknesses ? "Debilidades" : "Fortalezas"} />
			<Grid container spacing={2}>
				<Grid xs={12}>
					{data.map((item, index) => (
						<>
							<StrengthRow
								id={`${isWeaknesses ? "weaknesses" : "strengths" }-${index}`}
								control={control}
							/>
							{index < data.length - 1  && <GridDivider margin={3} />}
						</>
					))}
				</Grid>
				<Grid xs={12}>
					<Button 
						variant="contained" 
						color="secondary" 
						onClick={() => setData([...data, {id: data[data.length-1].id + 1 , rank: 1, name: "", description: ""}])}>Añadir {isWeaknesses ? "Debilidad" : "Fortaleza"}
					</Button>
				</Grid>
			</Grid>
		</Paper>
	)
}