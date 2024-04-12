import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { cloneDeep } from "lodash";
import React, { useState } from "react";
import { Control } from "react-hook-form";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { IFormInput } from "../../screens/CharacterSheet";
import { GridDivider } from "../form/GridDivider";
import { SectionTitle } from "../form/SectionTitle";
import { StrengthRow } from "./StrengthRow";
import { StrengthsTable } from "./StrengthsTable";

type StrengthsProps = {
  control: Control<IFormInput, any>;
  isWeaknesses?: boolean;
};

export type StrengthItem = {
  id: number;
  rank: string;
  name: string;
  description: string;
};

export const Strengths = (props: StrengthsProps) => {
  const { control, isWeaknesses = false } = props;
  const { strengths, weaknesses } = useSelector(
    (state: RootState) => state.characterData
  );
  // const [data, setData] = useState<StrengthItem[]>([{id: 0, rank: 120, name: "Patata fantastica", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"}, {id: 1, rank: 80, name: "Depresion", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"}, {id: 2, rank: 40, name: "Kaladinismo", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"} ]);
  const [data, setData] = useState<StrengthItem[]>([]);

  const addItem = () => {
    setData([
      ...data,
      {
        id: data[data.length - 1] ? data[data.length - 1].id + 1 : 0,
        rank: "2",
        name: "",
        description: "",
      },
    ]);
  };

  const editItem = (
    id: number,
    key: "name" | "description" | "rank",
    value: string
  ) => {
    const newData = cloneDeep(data);
    newData[id][key] = value;
    setData(newData);
  };

  return (
    //TODO Different views (Normal, edit, table)
    <Paper
      elevation={2}
      style={{
        padding: 30,
      }}
    >
      <SectionTitle title={isWeaknesses ? "Debilidades" : "Fortalezas"} />
      <Box sx={{ marginBottom: 3 }}>
        <StrengthsTable data={data} />
      </Box>
      <Grid container spacing={2}>
        <Grid xs={12}>
          {data.map((item, index) => (
            <>
              <StrengthRow
                id={`${isWeaknesses ? "weaknesses" : "strengths"}-${index}`}
                onChange={(key, value) => {
                  editItem(index, key, value);
                }}
                control={control}
              />
              {index < data.length - 1 && <GridDivider margin={3} />}
            </>
          ))}
        </Grid>
        <Grid xs={12}>
          <Button variant="contained" color="secondary" onClick={addItem}>
            Añadir {isWeaknesses ? "Debilidad" : "Fortaleza"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
