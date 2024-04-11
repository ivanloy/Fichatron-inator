import {useState} from "react";
import {BasicData} from "../components/characterSheet/BasicData";
import {Box, Button, Container, Paper, Typography} from "@mui/material";
import {set, useForm} from "react-hook-form";
import {Characterization} from "../components/characterSheet/Characterization";
import {Strengths} from "../components/characterSheet/Strengths";
import {BattleStyle} from "../components/characterSheet/BattleStyle";
import {StatsChart} from "../components/characterSheet/StatsChart";
import {HakiLevels} from "../components/characterSheet/HakiLevels";
import {MedalCount} from "../components/characterSheet/MedalCount";
import {KnowledgeLevels} from "../components/characterSheet/KnowledgeLevels";
import {Skills} from "../components/characterSheet/Skills";
import {Items} from "../components/characterSheet/Items";
import {getImportedCharacter} from "../util/import/getImportedCharacter";
import {useDispatch} from "react-redux";
import {setData} from "../redux/characterDataSlice";

export interface IFormInput {
	name?: string,
	imageUrl?: string,
	nickname?: string,
	age?: string,
	race?: string,
	faction?: string,
	gender?: string,
	employment?: string,
	background?: string,
	personality?: string;
	appearance?: string;
	battleStyle?: string;
	weapons?: string;
	strength?: number;
	strengthBonus?: number;
	fortitude?: number;
	fortitudeBonus?: number;
	speed?: number;
	speedBonus?: number;
	agility?: number;
	agilityBonus?: number;
	dexterity?: number;
	dexterityBonus?: number;
	precision?: number;
	precisionBonus?: number;
	intellect?: number;
	intellectBonus?: number;
	sharpness?: number;
	sharpnessBonus?: number;
	instinct?: number;
	instinctBonus?: number;
	energy?: number;
	energyBonus?: number;
	knowledges?: {
		name: string;
		level: string;
	}[];
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
	background: '',
}

export const CharacterSheet = () => {
	const {handleSubmit, reset, control, setValue} = useForm<IFormInput>({
		defaultValues,
	});

	const dispatch = useDispatch();

	const onSubmit = (data: IFormInput) => {
		const importedData = getImportedCharacter(data.background!);
		dispatch(setData(importedData));
		console.log(importedData);
		// setValue("name", importedData.name);
		// setValue("imageUrl", importedData.imageUrl);
		// setValue("nickname", importedData.nickname);
		// setValue("age", importedData.age);
		// setValue("race", importedData.race);
		// setValue("faction", importedData.faction);
		// setValue("gender", importedData.gender);
		// setValue("employment", importedData.employment);
		// // setValue("background", importedData.background);
		// setValue("personality", importedData.personality);
		// setValue("appearance", importedData.appearance);
		// setValue("battleStyle", importedData.battleStyle);
		// setValue("weapons", importedData.weapons);
		// setValue("strength", importedData.strength ? importedData.strength.base : 4);
		// setValue("strengthBonus", importedData.strength ? importedData.strength.bonus : 0);
		// setValue("fortitude", importedData.fortitude ? importedData.fortitude.base : 4);
		// setValue("fortitudeBonus", importedData.fortitude ? importedData.fortitude.bonus : 0);
		// setValue("speed", importedData.speed ? importedData.speed.base : 4);
		// setValue("speedBonus", importedData.speed ? importedData.speed.bonus : 0);
		// setValue("agility", importedData.agility ? importedData.agility.base : 4);
		// setValue("agilityBonus", importedData.agility ? importedData.agility.bonus : 0);
		// setValue("dexterity", importedData.dexterity ? importedData.dexterity.base : 4);
		// setValue("dexterityBonus", importedData.dexterity ? importedData.dexterity.bonus : 0);
		// setValue("precision", importedData.precision ? importedData.precision.base : 4);
		// setValue("precisionBonus", importedData.precision ? importedData.precision.bonus : 0);
		// setValue("intellect", importedData.intellect ? importedData.intellect.base : 4);
		// setValue("intellectBonus", importedData.intellect ? importedData.intellect.bonus : 0);
		// setValue("sharpness", importedData.sharpness ? importedData.sharpness.base : 4);
		// setValue("sharpnessBonus", importedData.sharpness ? importedData.sharpness.bonus : 0);
		// setValue("instinct", importedData.instinct ? importedData.instinct.base : 4);
		// setValue("instinctBonus", importedData.instinct ? importedData.instinct.bonus : 0);
		// setValue("energy", importedData.energy ? importedData.energy.base : 4);
		// setValue("energyBonus", importedData.energy ? importedData.energy.bonus : 0);
		// if (importedData.knowledges) {
		// 	// const newKnowledges = importedData.knowledges.map((knowledge, index) => {
		// 	// 	return {name: knowledge.name, level: knowledge.value};
		// 	// });
		// 	importedData.knowledges.forEach((knowledge, index) => {
		// 		setValue(`knowledges.${index}.name`, knowledge.name);
		// 		setValue(`knowledges.${index}.level`, knowledge.value);
		// 	});
		// 	// setValue("knowledges", newKnowledges);
		// }
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
					sx={{marginBottom: 3}}>
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
				{/* <Skills control={control} />
				<Items control={control} /> */}
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