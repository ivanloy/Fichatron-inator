import { Divider } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; 

type GridDividerProps = {
  margin?: number;
}

export const GridDivider = (props: GridDividerProps) => {
  const { margin = 1 } = props;
  return ( 
    <Grid xs={12}>
      <Divider sx={{ marginBottom: margin, marginTop: margin }}/>
    </Grid>
  );
}