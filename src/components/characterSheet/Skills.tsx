import {Button, Paper} from "@mui/material";
import {SectionTitle} from "../form/SectionTitle";
import {useState} from "react";
import {SkillRow} from "./SkillRow";
import {GridDivider} from "../form/GridDivider";
import Grid from '@mui/material/Unstable_Grid2';

type SkillsProps = {
	control: any;
};

export type SkillItem = {
	id: number;
	category: string;
	name: string;
	description: string;
	nature: string;
}

export const Skills = (props: SkillsProps) => {
	const {control} = props;
	// const [data, setData] = useState<SkillItem[]>([{id: 0, category: "epic", nature: "Fisica", name: "Patata fantastica", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"}, {id: 1, category: "epic", nature: "Fisica", name: "Patata fantastica", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"}, {id: 2, category: "epic", nature: "Fisica", name: "Patata fantastica", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"} ]);
	const [data, setData] = useState<SkillItem[]>([]);

	return (
		<Paper
			elevation={2}
			style={{
				padding: 30,
			}}
		>
			<SectionTitle title="Tecnicas" />
			<Grid container spacing={2}>
				<Grid xs={12}>
					{data.map((item, index) => (
						<>
							<SkillRow
								key={`skill-${index}`}
								id={`skill-${index}`}
								control={control}
							/>
							{index < data.length - 1 && <GridDivider
								key={`grid-${index}`} margin={3} />}
						</>
					))}
				</Grid>
				<Grid xs={12}>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => setData([...data, {id: data[data.length - 1].id + 1, category: "epic", nature: "Fisica", name: "Patata fantastica", description: "Lorem ipsum dolor sit amet sin pecado concebido no se que no se cuanto patata hijo de la gran perra hehe"}])}>
						Añadir Técnica
					</Button>
				</Grid>
			</Grid>
		</Paper>
	);
}