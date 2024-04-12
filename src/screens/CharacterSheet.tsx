import { Button, Container, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { BasicData } from "../components/characterSheet/BasicData";
import { BattleStyle } from "../components/characterSheet/BattleStyle";
import { Characterization } from "../components/characterSheet/Characterization";
import { HakiLevels } from "../components/characterSheet/HakiLevels";
import { KnowledgeLevels } from "../components/characterSheet/KnowledgeLevels";
import { MedalCount } from "../components/characterSheet/MedalCount";
import { StatsChart } from "../components/characterSheet/StatsChart";
import { Strengths } from "../components/characterSheet/Strengths";
import { setData } from "../redux/characterDataSlice";
import { convertFormToCharacterSheet } from "../util/export/convertFormToCharacterSheet";
import { exportFullHtml } from "../util/export/exportFullHtml";
import { getImportedCharacter, ListFieldItem } from "../util/import/getImportedCharacter";

export interface IFormInput {
  name?: string;
  imageUrl?: string;
  nickname?: string;
  age?: string;
  race?: string;
  faction?: string;
  gender?: string;
  employment?: string;
  background?: string;
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
  knowledges?: ListFieldItem[];
  observationHaki?: string;
  armamentHaki?: string;
  conquerorsHaki?: string;
  tier1Medals?: string;
  tier2Medals?: string;
  tier3Medals?: string;
}

const defaultValues: IFormInput = {};

export const CharacterSheet = () => {
  const { handleSubmit, reset, control, setValue } = useForm<IFormInput>({
    defaultValues,
  });

  const dispatch = useDispatch();

  const onSave = (data: IFormInput) => {
    const newData = convertFormToCharacterSheet(data);
    dispatch(setData(newData));
  };

  const onImport = (data: IFormInput) => {
    const importedData = getImportedCharacter(data.background!);
    dispatch(setData(importedData));
  };

  const onSaveAndExport = (data: IFormInput) => {
    onSave(data);
    exportFullHtml(convertFormToCharacterSheet(data)); //FIXME Return string and do shit here
  };

  //FIXME Tabs for some long categories like items, strengts...
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
          sx={{ marginBottom: 3 }}
        >
          Fichatrón - inator
        </Typography>
        <BasicData control={control} />
        <Characterization control={control} />
        <Strengths control={control} />
        <Strengths control={control} isWeaknesses />
        <BattleStyle control={control} />
        <StatsChart control={control} />
        <HakiLevels control={control} />
        <MedalCount control={control} />
        <KnowledgeLevels control={control} />
        {/* <Skills control={control} />
				<Items control={control} /> */}
        <Button onClick={handleSubmit(onImport)} variant={"contained"}>
          Importar
        </Button>
        <Button onClick={handleSubmit(onSave)} variant={"contained"}>
          Guardar
        </Button>
        <Button onClick={handleSubmit(onSaveAndExport)} variant={"contained"}>
          Guardar y exportar
        </Button>
        <Button onClick={() => reset()} variant={"outlined"}>
          Reset
        </Button>
      </Paper>
    </Container>
  );
};
