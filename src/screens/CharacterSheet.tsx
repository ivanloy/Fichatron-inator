import { useState } from "react";
import { BasicData } from "../components/characterSheet/BasicData";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Characterization } from "../components/characterSheet/Characterization";
import { Strengths } from "../components/characterSheet/Strengths";
import { BattleStyle } from "../components/characterSheet/BattleStyle";
import { StatsChart } from "../components/characterSheet/StatsChart";

export interface IFormInput {
	name: string,
	imageUrl: string,
	nickname: string,
	age: string,
	race: string,
	faction: string,
	gender: string,
	employment: string,
}

const defaultValues: IFormInput = {
	name: '',
	imageUrl: '',
	nickname: '',
	age: '',
	race: '',
	faction: '',
	gender: '',
	employment: '',
}

export const CharacterSheet = () => {
	const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({
		defaultValues,
	});

	const onSubmit = (data: IFormInput) => {
		console.log(data);
	};

	return (
		<Container fixed>
			<Paper
				elevation={5}
				sx={{
					padding: 6,
					backgroundColor: "primary.light",
				}}
			>
				<Typography 
					color="secondary.contrastText" 
					variant="h4" 
					sx={{ marginBottom: 3 }}>
						Fichatrón - inator
				</Typography>
				<Box sx={{ marginBottom: 3}}>
					<BasicData
						control={control}
					/>
				</Box>
				<Box sx={{ marginBottom: 3}}>
					<Characterization
						control={control}
					/>
				</Box>
				<Box sx={{ marginBottom: 3}}>
					<Strengths
						control={control}
					/>
				</Box>
				<Box sx={{ marginBottom: 3}}>
					<Strengths
						control={control}
						isWeaknesses
					/>
				</Box>
				<Box sx={{ marginBottom: 3}}>
					<BattleStyle
						control={control}
					/>
				</Box>
				<Box sx={{ marginBottom: 3}}>
					<StatsChart
						control={control}
					/>
				</Box>
				<Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
					Submit
				</Button>
				<Button onClick={() => reset()} variant={"outlined"}>
					Reset
				</Button>
			</Paper>
		</Container>
	)
}