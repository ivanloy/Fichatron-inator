import {Control, useController} from "react-hook-form";
import {IFormInput} from "../../screens/CharacterSheet";
import {Box, Button, Paper, Typography} from "@mui/material";
import {FormInputText} from "../form/FormInputText";
import Grid from '@mui/material/Unstable_Grid2';
import {SectionTitle} from "../form/SectionTitle";
import {KnowledgeRow} from "./KnowledgeRow";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

type KnowledgeLevelsProps = {
  control: Control<IFormInput, any>;
}

export type KnowledgeItem = {
  id: number;
  name: string;
  level: string;
}

export const KnowledgeLevels = (props: KnowledgeLevelsProps) => {
  const {control} = props;
  const knowledges = useSelector((state: RootState) => state.characterData.knowledges);
  const [data, setData] = useState<KnowledgeItem[]>([{id: 0, name: "", level: "Lv. 1"}]);

  useEffect(() => {
    console.log(knowledges);
    if (!knowledges) { //FIXME Lodash isEmpty
      return;
    }
    const newData = knowledges.map((item, index) => {
      return {
        id: index,
        name: item.name,
        level: item.value
      }
    });
    setData(newData);
  }, [knowledges]);

  return (
    <Paper
      elevation={2}
      style={{
        padding: 30,
      }}
    >
      <SectionTitle title="Saberes" />
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <KnowledgeRow
            knowledgeData={item}
            id={`knowledges.${index}`}
            control={control}
          />
        ))}
        <Grid xs={12}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setData([...data, {id: data[data.length - 1].id + 1, name: "", level: "Lv. 1"}])}>
            Añadir Saber
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}