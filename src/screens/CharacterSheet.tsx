import { useState } from "react";
import { BasicData } from "../components/characterSheet/BasicData";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Characterization } from "../components/characterSheet/Characterization";
import { Strengths } from "../components/characterSheet/Strengths";
import { BattleStyle } from "../components/characterSheet/BattleStyle";
import { StatsChart } from "../components/characterSheet/StatsChart";
import { HakiLevels } from "../components/characterSheet/HakiLevels";
import { MedalCount } from "../components/characterSheet/MedalCount";
import { KnowledgeLevels } from "../components/characterSheet/KnowledgeLevels";

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
					display: "flex",
					flexDirection: "column",
					rowGap: 3,
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
				<BasicData control={control} />
				<Characterization control={control} />
				<Strengths control={control} />
				<Strengths control={control}
					isWeaknesses
				/>
				<BattleStyle control={control} />
				<StatsChart control={control} />
				<HakiLevels control={control} />
				<MedalCount control={control} />
				<KnowledgeLevels control={control} />
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