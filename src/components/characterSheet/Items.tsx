import { Button, Paper } from "@mui/material";
import { SectionTitle } from "../form/SectionTitle";
import { useState } from "react";
import { GridDivider } from "../form/GridDivider";
import Grid from '@mui/material/Unstable_Grid2'; 
import { ItemRow } from "./ItemRow";

type ItemsProps = {
  control: any;
};

export type ItemItem = {
	id: number;
	category: string;
	name: string;
	description: string;
	abilities: string;
}

export const Items = (props: ItemsProps) => {
  const { control } = props;
	// const [data, setData] = useState<ItemItem[]>([{id: 0, category: "epic", abilities: "Fisica", name: "Patata fantastica", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"}, {id: 1, category: "epic", abilities: "Fisica", name: "Patata fantastica", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"}, {id: 2, category: "epic", abilities: "Fisica", name: "Patata fantastica", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"} ]);
	const [data, setData] = useState<ItemItem[]>([]);

  return (
    <Paper
			elevation={2}
			style={{
				padding: 30,
			}}
		>
      <SectionTitle title="Objetos" />
      <Grid container spacing={2}>
				<Grid xs={12}>
					{data.map((item, index) => (
						<>
							<ItemRow
								id={`skill-${index}`}
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
						onClick={() => setData([...data, {id: data[data.length-1].id + 1 , category: "epic", abilities: "Fisica", name: "Patata fantastica", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"}])}>
              Añadir Objeto
					</Button>
				</Grid>
			</Grid>
    </Paper>
  );
}